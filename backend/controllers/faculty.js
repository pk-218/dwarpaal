import { db } from "../utils/sqlConfig.js";
const User = db.user;

const getStudentForm = (req, res)=>{
    const {id} = req.body;
    User.findOne({
        where: {
            id : id
        }
    }).then((user)=>{
        if(!user){
            res.status(404).send({success:false,message:"User not found!"});
        }
        else{
            res.status(200).send({success:true, student:user});
        }
    });
}

const updateFormStatus = (req, res)=>{
    // assuming acceptanceStatus is boolean
    const {id, facultyToken, acceptanceStatus} = req.body;
    User.findOne({
        where: {
            id: id
        }
    }).then((user)=>{
        if(!user){
            res.status(404).send({success:false,message:"User not found!"});
        }
        else{
            if(user.faculty_token != facultyToken){
                res.status(403).send({success: false, message:"Faculty token doesn't match!"});
            } else {
                User.update({ faculty_status:acceptanceStatus, faculty_pending_status:false },
                    { where: {id: id} })
                    .then((user)=>{
                        res.status(200).send({success:true, message:"Student form updated!", user});
                    })
                    .catch((err)=>{
                        console.log("Error while updating User",err);
                        res.status(500).send({success:false, err:err});
                    })
            }
        }
    });
}

export { getStudentForm, updateFormStatus };