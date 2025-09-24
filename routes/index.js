const { Router } = require("express");
const index = Router();
const newMessages = require("./newMessages.js");
const messages = require("../db.js");

index.get("/", (req, res) => {
  res.render("index", { title: "Mini Message board", messages: messages });
});

newMessages.post("/", (req, res) => {
  const keys=Object.keys(messages)
  const formData = {
    text: req.body.user,
    user: req.body.message,
    added: new Date(),
  };
  messages.push(formData);
  res.redirect("/");
});

module.exports = index;
