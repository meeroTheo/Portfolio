require("dotenv").config();

const PORT = process.env.PORT;
const TRANSPORT_EMAIL = process.env.TRANSPORT_EMAIL;
const TRANSPORT_KEY = process.env.TRANSPORT_KEY;

module.exports = {
  PORT,
  TRANSPORT_EMAIL,
  TRANSPORT_KEY,
};
