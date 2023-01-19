import { Router } from "express";
import { submitForm, getForms } from "../controllers/form.js"
const formRouter = Router();

// ??
const isLoggedIn = (req, res,nextrs) => {
    
    //to refactor this to controller
    console.log("Res",req.session.user);
    return req.session.user.id != null
}

formRouter.post('/', submitForm)
formRouter.post('/getForm', getForms )

export default formRouter;