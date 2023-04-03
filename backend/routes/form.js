import { Router } from "express";
import { submitForm, getForms } from "../controllers/form.js";
const formRouter = Router();

// ??
const isLoggedIn = (req, res, next) => {
  console.log("Res", req.session.user);
  if (req.session.user == null) {
    res
      .status(401)
      .send({ sucess: false, message: "Not authorize to submit form!" });
  } else {
    next();
  }
};

formRouter.post("/submit-form", isLoggedIn, submitForm);
formRouter.post("/getforms", getForms);
// formRouter.post('/submitform', submitForm);

export default formRouter;
