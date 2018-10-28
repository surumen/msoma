import jwksClient from 'jwks-rsa'
import jwt from 'jsonwebtoken'
import { AuthenticationError } from '../../errors'

const jwks = jwksClient({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 1,
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
})

function verifyAndDecodeIdToken(idToken) {
  const invalidTokenMessage = 'Invalid id token.'

  return new Promise((resolve, reject) => {
    const { header, payload } = jwt.decode(idToken, { complete: true }) || {}

    if (!header || !header.kid || !payload) {
      return reject(new AuthenticationError(invalidTokenMessage))
    }

    jwks.getSigningKey(header.kid, (err, key) => {
      if (err) {
        return reject(
          new AuthenticationError(
            `${invalidTokenMessage} Could not get signing key: ${err.message}`
          )
        )
      }

      jwt.verify(
        idToken,
        key.publicKey,
        { algorithms: ['RS256'] },
        (err, decoded) =>
          err
            ? reject(
                new AuthenticationError(
                  `${invalidTokenMessage} JWT verification error: ${
                    err.message
                  }`
                )
              )
            : resolve(decoded)
      )
    })
  })
}

export default {
  async authenticate(parent, { idToken }, ctx, info) {
    const userToken = await verifyAndDecodeIdToken(idToken)

    const [identity, auth0id] = userToken.sub.split('|')

    let user = await ctx.db.query.user({ where: { auth0id } }, info)

    if (!user) {
      user = await ctx.db.mutation.createUser({
        data: {
          identity,
          auth0id,
          email: userToken.email,
          // Other data can be added here from Auth0 user
        },
      })
    }

    return user
  },
}
