const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "../config/config.env" });

router.post("/register", (req, res) => {
  const { name, email, text, textarea } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: email,
      to: "omprakashrout260@gmail.com",
      subject: text,
      html: `<h2>${name}</h2><h3>${textarea}</h3>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error:", error);
        res.status(500).json({ status: 500, error: "Internal Server Error" });
      } else {
        console.log("Email sent:", info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
});

module.exports = router;
