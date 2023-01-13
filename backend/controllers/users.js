import { db } from "../utils/sqlConfig.js";
import nodemailer from "nodemailer";
const User = db.user;

const users = {
  renderLogin: (req, res) => {
    res.render("user/login");
  },

  login: (req, res) => {
    req.flash("success", "welcome back!");
    const redirectUrl = req.session.returnTo || "/request-form";
    delete req.session.returnTo;
    res.redirect(redirectUrl);
  },
};

const sendCode = (req, res) => {
  const { email, id } = req.body;
  // generate a verification code

  var verificationCode = Math.floor(Math.random() * 1000000);

  // send email with verification code
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dwarpal.vjti@gmail.com",
      pass: "DwarPal@VJTI13",
    },
  });
  const mailOptions = {
    from: "dwarpal.vjti@gmail.com",
    to: email,
    subject: "Verify your email",
    text: `Your verification code is: ${verificationCode}`,
  };

  User.create({
    email: email,
    id: id,
    verificationCode: verificationCode,
    verified: false,
  })
    .then((user) => {
      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          res.status(500).json({ message: "Error sending email" });
        }
        res.status(200).json({ message: "Verification code sent to email" });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const verifyCode = (req, res) => {
  const { email, code } = req.body;

  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      // check if the code matches the verification code
      if (user.verificationCode === code) {
        User.update({ verified: true }, { where: { email: email } }).then(
          (_) => {
            res.status(200).json({ message: "Code verified" });
          }
        ).catch;
      } else {
        res.status(401).json({ message: "Invalid code" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
export default { users, sendCode, verifyCode };
