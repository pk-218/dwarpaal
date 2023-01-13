import { Router } from "express";
import {findUser} from "../controllers/users.js";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

usersRouter.get("/getUsers", findUser);

// exporting defualt userRouter
export default usersRouter;
