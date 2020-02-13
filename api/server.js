const express = require("express");
const server = express();
const middleware = require("./middleware");

middleware(server);

server.get("/", (req, res) => {
  console.log("It's alive!");
  // res.status(200).json({ message: "It's alive!" });
  res.send(`<h1> 🔨 Server is up and running</h1>`);
});

module.exports = server;
