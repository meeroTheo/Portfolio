const express = require("express");
const bodyParser = require("body-parser");
const emailRouter = require("./routes/emailRoutes"); // Adjust the path

const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("build"));
app.use(emailRouter); // Use the emailRouter directly

module.exports = app;
