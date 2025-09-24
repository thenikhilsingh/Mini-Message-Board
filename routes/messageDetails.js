const { Router } = require("express");
const messageDetails = Router();

messageDetails.get("/:messageId", (req, res) => {
  res.render("messageDetails");
});

module.exports = messageDetails;
