const express = require("express");
const app = express();
const path = require("path");
const index = require("./routes/index.js");
const newMessages = require("./routes/newMessages.js");
const messageDetails = require("./routes/messageDetails.js");

app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", index);
app.use("/new", newMessages);
app.use("/messageDetails", messageDetails);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  }
  console.log(`The server is listening on the http://localhost:${PORT}/`);
});
