import { Router } from "express";
import {findOneUser} from "../controllers/users.js";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

usersRouter.get("/getUsers", findOneUser);

// exporting defualt userRouter
export default usersRouter;
