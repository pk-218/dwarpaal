import { send } from "@emailjs/browser";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // use SSL
    port: 587, // port for secure SMTP
    auth: {
      // type: 'OAuth2',
      user: "dwarpal-vjti@outlook.com",
      pass: process.env.MAILER_PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

 function sendMail(mailOptions,cb){
    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            console.log(err);
            if(!cb){
            cb(err,false);
            }
        } else {
            if(!cb){
                cb(null,true);
            }
        }
      });
 }

  function sendOTPMail(email, verificationCode, cb){
    const mailOptions = {
        from: "dwarpal-vjti@outlook.com",
        to: email,
        subject: "Verify your email",
        text: `Your verification code is: ${verificationCode}`,
      };
    sendMail(mailOptions,cb);
  }

  function sendFacultyMail(email,student,cb){
    const mailOptions = {
        from: "dwarpal-vjti@outlook.com",
        to: email,
        subject: `Approve DGX access form of ${student.id}`,
        text: `Please follow the link to accpet/reject the request of GDX server access for academic purpose by ${student.firstName} ${student.lastName} having email id ${student.email}
            Link - ${process.env.SERVER_BASE_URL}/faculyRequest?id=${student.id}&token=${student.token}`,
      };
    sendMail(mailOptions, cb);
  }

export {sendOTPMail, sendFacultyMail};

  