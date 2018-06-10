const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./server/config/keys')
const path = require('path');
require('./server/models/User')
require('./server/services/googleAuth')

const app = express();
mongoose.connect(keys.mongoURI)   // Connect mongodb

// Use middlewares {cookie session, passport}
app.use(
  cookieSession({
    maxAge: '30d',
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Express server listening on port', port)
})