const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./server/config/keys");
const path = require("path");
require("./server/models/User");
require("./server/services/googleAuth");

const app = express();
const port = process.env.PORT || 5000;
mongoose.connect(keys.mongoURI); // Connect mongodb

require("./server/routes/routes")(app);

// Use middlewares {cookie session, passport}
app.use(
  cookieSession({
    maxAge: "30d",
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/dist"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
