import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // type: 'OAuth2',
    user: process.env.MAILER_DOMAIN,
    pass: process.env.MAILER_PASSWORD,
<<<<<<< HEAD
  },
=======
  }
>>>>>>> 2b675001e37957ef4a317d9e0dbf05fa06b9a307
});

function sendMail(mailOptions, cb) {
  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log(err);
      if (cb) {
        cb(err, false);
      }
    } else {
      if (cb) {
        cb(null, true);
      }
    }
  });
}

function sendOTPMail(email, verificationCode, cb) {
  const mailOptions = {
    from: process.env.MAILER_DOMAIN,
    to: email,
    subject: "Verify your email",
    text: `Your verification code is: ${verificationCode}`,
  };
  sendMail(mailOptions, cb);
}

function sendFacultyMail(email, student, cb) {
  const mailOptions = {
    from: process.env.MAILER_DOMAIN,
    to: email,
    subject: `Approve DGX access form of ${student.id}`,
    text: `Please click on the following link to either accept or reject the request for GDX server access for academic purposes by ${student.firstName} ${student.lastName} with the email address ${student.email}.\n
            Link - ${process.env.FRONTEND_SERVER_BASE_URL}/faculyConfirmation?id=${student.id}&token=${student.token}`,
  };
  sendMail(mailOptions, cb);
}

function grantAccessMail(email = "pkkhushalani_b19@it.vjti.ac.in", cb) {
  const mailOptions = {
    from: process.env.MAILER_DOMAIN,
    to: email,
    subject: `Approval of DGX Access`,
    text: `Your access request has been accepted!\n
            Your user credentials are\n
            Username : pkkhushalani_b19\n
            Password : password\n
            The DGX host IP is 170.187.251.66 `,
  };
  sendMail(mailOptions, cb);
}

export { sendOTPMail, sendFacultyMail, grantAccessMail };
