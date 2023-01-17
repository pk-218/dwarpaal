import { db } from "../utils/sqlConfig.js";
import nodemailer from 'nodemailer';
const User = db.user;

const findOneUser = (req, res)=>{
    const {email} = req.body;
    User.findOne({
        where: {
            email: email
        }
    }).then((user)=>{
        if(!user){
            res.status(404).send({success:false,message:"User not found!"});
        }
        else{
            res.status(200).send({success:true,user});
        }
    });
}

export { findOneUser };