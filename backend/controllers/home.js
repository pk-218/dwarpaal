import { db } from "../utils/sqlConfig.js";
const Form = db.form;

const getData = (req, res) => {
    try {
        Form.findOne({
            where: {
                id: req.session.id,
                email: req.session.email
            }
        }).then( user => {
            if(!user) {
                res.json({success: false, message: "Some error occured"})
            } else {
                res.status(200).json(user)
            }
        })
    } catch {
        res.status(500).json({success: false, message: "Some error occured"})
    }
}

export { getData }