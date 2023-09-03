const nodemailer = require("nodemailer");
const config = require("../utils/config");

const sendEmail = async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com", // Outlook SMTP server
      port: 587, // Port for TLS
      secure: false, // false for TLS - as a boolean not string
      auth: {
        user: config.TRANSPORT_EMAIL, // Your Outlook email address
        pass: config.TRANSPORT_KEY, // Your Outlook password
      },
    });

    const mailOptions = {
      from: config.TRANSPORT_EMAIL,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email" });
  }
};

module.exports = {
  sendEmail,
};
