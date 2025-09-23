const { Router } = require("express");
const newMessages = Router();

newMessages.get("/", (req, res) => {
  res.render("form");
});

module.exports = newMessages;
