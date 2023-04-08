import { Router } from "express";
import { getAccessRequestStatus, getData } from "../controllers/home.js";
const homeRouter = Router();

// ??
const isLoggedIn = (req, res, next) => {
  console.log("Res", req.session.user);
  if (req.session.user == null) {
    res.status(401).send({ sucess: false, message: "User not loggedIN!" });
  } else {
    next();
  }
};

homeRouter.get("/", isLoggedIn, getData);
homeRouter.get("/access-request-data", getAccessRequestStatus);

export default homeRouter;
