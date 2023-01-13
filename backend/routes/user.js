import { Router } from "express";
import User from "../controllers/users.js";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

usersRouter.post("/sendcode", User.sendCode);

usersRouter.post("/verifycode", User.verifyCode);

// exporting defualt userRouter
export default usersRouter;
