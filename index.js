const express = require("express");

const app = express();
const keys = require("./config/keys");

const keystone = require("keystone");
keystone.import("models");

keystone.init({
  name: "hack-along-keystone",
  "auto update": true,
  "cookie secret": keys.keystoneSecret,
  port: 8000,
  auth: true,
  "user model": "User",
  mongo: keys.mongoURI
});

app.get("/api/hello", (req, res) => {
  res.send("hello world");
});

app.listen(5000);
keystone.start();
