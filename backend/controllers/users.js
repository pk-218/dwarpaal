import { db } from "../utils/sqlConfig.js";
import nodemailer from 'nodemailer';
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
    }
}

const sendCode = (req,res)=>{
    const { email,id } = req.body;
    // generate a verification code
    console.log(email,id);
    var verificationCode = Math.floor(Math.random() * 1000000);
    console.log("Verification code:",verificationCode);
    // send email with verification code
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.eu',
        port: 465,
        secure: true, //ssl
        auth: {
            // type: 'OAuth2',
            user: 'dwarpal.vjti@zohomail.in',
            pass: 'DwarPal@VJTI13',
            // pass: 'uk0tH3xpqUXg',
            // clientId: "340138395329-spc38ec7mniicl0u9qnuf6f5esk38e0q.apps.googleusercontent.com",
            // clientSecret: "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",
            // refreshToken: "1//049tD7ovXZ8KDCgYIARAAGAQSNwF-L9IrWn3YZgScCYQgOq81zCPfcFhqTMasL-nxijZIV-6itxrUUi6_OdmdbpuDk-XHnIW1o6s"
        },
    });
    const mailOptions = {
        from: 'dwarpal.vjti@zohomail.in',
        to: email,
        subject: 'Verify your email',
        text: `Your verification code is: ${verificationCode}`,
    };

    User.create({
        email: email,
        id: id,
        verificationCode: verificationCode,
        verified: false
    }).then((user)=>{
        // console.log("User : ",user);
        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                // console.log(err);
                // res.status(500).json({ message: 'Error sending email' });
                
                res.status(200).json({ message: 'Verification code sent to email' });
            }
            else{
                res.status(200).json({ message: 'Verification code sent to email' });
            }
            
        });

    })
    .catch(err => {
        res.status(500).send({ message: err.message });
      });
   
}

const verifyCode = (req,res) =>{
    const { email, code } = req.body;

    User.findOne({
        where: {
          email: email
        }
    }).then( user =>{
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
         // check if the code matches the verification code
        if (user.verificationCode === code) {
            User.update(
                { verified: true },
                { where: { email: email } }
            ).then(_=>{
                res.status(200).json({ message: 'Code verified' });
            }).catch((err)=>{
                console.log(err);
            });
            
        } else {
            res.status(401).json({ message: 'Invalid code' });
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
   
}
export default {users, sendCode, verifyCode };