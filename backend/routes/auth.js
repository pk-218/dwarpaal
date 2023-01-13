import { Router } from 'express';
import { generateAPIKey, validateToken, logout, sendCode, verifyCode } from "../controllers/auth.js";

const AuthRouter = Router();

AuthRouter.post("/sendcode", sendCode);
AuthRouter.post("/verifycode", verifyCode);
AuthRouter.post("/generateTOTPKey", generateAPIKey);
AuthRouter.post("/validateCode", validateToken);
AuthRouter.post("/logout", logout);

// exporting defualt router
export default AuthRouter;