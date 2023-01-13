import { db } from "../utils/sqlConfig.js";
import nodemailer from 'nodemailer';
const User = db.user;

const findUser = (req, res){
    User.findAll().then((users)=>{
        res.status(200).send({users});
    });
}

export { findUser };