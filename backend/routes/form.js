import { Router } from "express";
import { submitForm, getForms } from "../controllers/form.js"
const formRouter = Router();

// ??
const isLoggedIn = (req, res) => {
    return req.session.user.id != null
}

formRouter.post('/submitform', submitForm);
formRouter.post('/getforms', getForms);
// formRouter.post('/submitform', submitForm);

export default formRouter;