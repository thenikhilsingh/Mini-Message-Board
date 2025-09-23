const { Router } = require("express");
const index = Router();
const newMessages = require("./newMessages.js");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

index.get("/", (req, res) => {
  res.render("index", { title: "Mini Message board", messages: messages });
});

newMessages.post("/", (req, res) => {
  const formData = {
    text: req.body.user,
    user: req.body.message,
    added: new Date(),
  };
  messages.push(formData);
  res.redirect("/");
});

module.exports = index;
