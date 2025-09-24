const { Router } = require("express");
const index = Router();
const newMessages = require("./newMessages.js");
const messages = require("../db.js");

index.get("/", (req, res) => {
  res.render("index", { title: "Mini Message board", messages: messages });
});

newMessages.post("/", (req, res) => {
  const formData = {
    id: messages.length + 1,
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  };
  messages.push(formData);
  res.redirect("/");
});

module.exports = index;
