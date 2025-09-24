const { Router } = require("express");
const messageDetails = Router();
const getMessageDetails = require("../controllers/messageDetailsController.js");

messageDetails.get("/message/:id", getMessageDetails);

module.exports = messageDetails;
