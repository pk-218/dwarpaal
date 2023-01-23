import { Router } from "express";
import { getAccessRequestStatus, getData } from "../controllers/home.js";
const homeRouter = Router();

// ??
const isLoggedIn = (req, res) => {
  if (req.session.user == null) {
    console.log("User not logged in");
    return false;
  }
  return true;
};

homeRouter.get("/", isLoggedIn, getData);
homeRouter.get("/access-request-data", getAccessRequestStatus);

export default homeRouter;
