import { Router } from "express";
import User from "../controllers/users.js";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

userRouter.post("/sendcode", User.sendCode);

userRouter.post("/verifycode", User.verifyCode);

// exporting defualt userRouter
export default userRouter;
