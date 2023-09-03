emailRouter = require("express").Router();
const { sendEmail } = require("../controllers/EmailController");

emailRouter.post("/send-email", sendEmail);

module.exports = emailRouter;
