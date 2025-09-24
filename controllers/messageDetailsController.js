const messages = require("../db.js");

async function getMessageDetails(req, res) {
  try {
    const messageId = req.params.id;
    const messageDet = messages.find((item) => item.id === Number(messageId));
    res.render("messageDetails", { messageDet: messageDet });
  } catch (error) {
    console.error("Error retreiving message:", error);
    res.status(500).send("Internal Server Error");
  }
}
module.exports = getMessageDetails;
