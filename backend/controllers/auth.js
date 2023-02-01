import Speakeasy from "speakeasy";
import QR from "qr-image";
import { db } from "../utils/sqlConfig.js";
import { sendOTPMail } from "../utils/mailSender.js";

const User = db.user;

const generateAPIKey = (req, res, next) => {
  const { email, id } = req.body;
  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      console.log(
        "user inside generate totp secret " +
          user.email +
          user.id +
          user.verified
      );
      if (!user) {
        res.json({ success: false, message: "User doesn't exist!" });
      } else if (user.verified || true) {
        var secret = Speakeasy.generateSecret({ length: 20 });
        console.log("Secret", secret.base32);
        User.update(
          { secret: secret.base32 },
          { where: { email: email } }
        ).then((_) => {
          // res.status(200).json({ message: "Code verified" });
          console.log("Code verified");
        });
        //   .catch((err) => {
        //     res.json({ success: false, message: "Error while storing sceret" });
        //   });
        const qr_svg = QR.imageSync(secret.otpauth_url, { type: "svg" });
        // res.type('svg');    const qr_svg = qr.imageSync(secret.otpauth_url, { type: 'svg' });
        const qrCode = qr_svg.toString("base64");
        res.status(200).send({ success: true, qrcode: qrCode });
      } else {
        res.json({ success: false, message: "Please verify email!" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({ success: false, message: "Error in fetching User!" });
    });
};
// app.post("/totp-generate", (req, res, next) => {
//   res.send({
//       "token": Speakeasy.totp({
//           secret: req.body.secret,
//           encoding: "base32"
//       }),
//       "remaining": (30 - Math.floor((new Date()).getTime() / 1000.0 % 30))
//   });
// });
const validateToken = (req, res) => {
  const { email, id, code } = req.body;
  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (!user) {
        res.json({ isLoggedIn: false, message: "No user exist!" });
      } else {
        const valid = Speakeasy.totp.verify({
          secret: user.secret,
          encoding: "base32",
          token: code,
          window: 0,
        });
        if (!valid) {
          res.json({
            isLoggedIn: false,
            message: "Please enter correct Code!",
          });
        } else {
          req.session.user = {
            id: user.id,
            email: user.email,
          };
          console.log("session user", req.session.user);
          res.json({ isLoggedIn: true, message: "Login successful" });
        }
      }
    })
    .catch((err) => {
      res.json({ isLoggedIn: false, message: "Error in finding User!" });
    });
};
const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ message: "Error logging out" });
    } else {
      res.json({ message: "Logout successful" });
    }
  });
};
const sendCode = (req, res) => {
  const { email, id } = req.body;
  // generate a verification code
  console.log(email, id);
  var verificationCode = Math.floor(Math.random() * 1000000);
  console.log("Verification code:", verificationCode);

  sendOTPMail(email, verificationCode, (err, result) => {
    if (!result) {
      res
        .status(554)
        .json({
          error: err,
          message: "Error in sending mail!",
        });
    } else {
      res.status(200).json({ message: "Verification code sent to email" });
    }
  });

  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (!user) {
        User.create({
          email: email,
          id: id,
          verificationCode: verificationCode,
          verified: false,
        }).then((userd) => {
          console.log("User ", userd);
        });
      } else if (!user.verified) {
        User.update(
          { verificationCode: verificationCode },
          { where: { email: email } }
        )
          .then((_) => {
            console.log("Code Updated");
          })
          .catch((err) => {
            console.log("Error in updating code");
          });
      } else {
        console.log("Already Verified!");
      }
    })
    .catch((err) => {
      // res.status(500).send({ message: err.message ,lol:err});
      console.log("Error in :", err);
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
      console.log("backend code " + user.verificationCode);
      console.log("user sent otp code " + code);
      // check if the code matches the verification code
      if (user.verificationCode == code) {
        console.log("user's otp matches");
        User.update({ verified: true }, { where: { email: email } })
          .then((_) => {
            console.log("user has been verified");
            res.status(200).json({ message: "Code verified" });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.status(401).json({ message: "Invalid code" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const adminLogin = (req, res) => {
  const { email, password } = req.body;
  if (
    email == process.env.ADMINEMAIL &&
    password == process.env.ADMINPASSWORD
  ) {
    req.session.admin = {
      email: email,
    };
    res
      .status(200)
      .send({ success: true, msg: "Admin logged in successfully" });
  } else {
    res.status(401).send({ success: false, msg: "Wrong Credentials!" });
  }
};

export {
  generateAPIKey,
  validateToken,
  logout,
  sendCode,
  verifyCode,
  adminLogin,
};
