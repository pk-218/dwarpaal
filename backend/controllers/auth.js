import Speakeasy from 'speakeasy';
import QR from 'qr-image';
import { db } from "../utils/sqlConfig.js";
import nodemailer from 'nodemailer';
const User = db.user;

const generateAPIKey =  (req, res, next) => {
    const {email, id} = req.body;
    User.findOne({
        where: {
        email: email
        }
    }).then( user =>{
        if(!user){
            res.json({success:false, message:"User doesn't exist!"})
        } else if (user.verified){
            var secret = Speakeasy.generateSecret({ length: 20 });
            console.log("Secret",secret.base32);
            User.update(
                { secret: secret.base32 },
                { where: { email: email } }
            ).then(_=>{
                res.status(200).json({ message: 'Code verified' });
            }).catch((err)=>{
                res.json({success:false, message:"Error while storing sceret"})
            });

            const qr_svg = QR.imageSync(secret.otpauth_url, { type: 'svg' });
            // res.type('svg');    const qr_svg = qr.imageSync(secret.otpauth_url, { type: 'svg' });
            const qrCode = qr_svg.toString('base64');
            res.status(200).send({success:true, qrcode:qrCode});
        } else {
            res.json({success:false, message:"Please verify email!"})
        }
    }).catch((err)=>{
        console.log(err);
        res.json({success:false, message:"Error in fetching User!"})    
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
    const {email,id,code} = req.body;
    User.findOne({
        where: {
            email: email
        }
    }).then( user =>{
        if(!user){
            res.json({isLoggedIn:false,message:"No user exist!"});
        } else{
            const valid = Speakeasy.totp.verify({
                secret: user.secret,
                encoding: "base32",
                token: req.body.token,
                window: 0
            });
            if(!valid){    
                res.json({isLoggedIn:false,message:"Please enter correct Code!"});
            } else {
                req.session.user = {
                    id: user.id,
                    email: user.email
                };
                res.json({isLoggedIn:true, message: 'Login successful' });
            }
        }
        
    }).catch((err)=>{
        res.json({isLoggedIn:false,message:"Error in finding User!"});
    });
    
};
const logout = (req,res)=>{
    req.session.destroy((err) => {
        if (err) {
          res.status(500).json({ message: 'Error logging out' });
        } else {
          res.json({ message: 'Logout successful' });
        }
    });
};

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
};

export {generateAPIKey, validateToken, logout, sendCode, verifyCode};