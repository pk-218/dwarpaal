import { Router } from "express";
import { getStudentForm, updateFormStatus } from "../controllers/faculty.js"
const facultyRouter = Router();

// ??
const isLoggedIn = (req, res) => {
    return req.session.user.id != null
}

facultyRouter.post('/getStudentForm', getStudentForm);
facultyRouter.post('/updateFormStatus', updateFormStatus);

export default facultyRouter;