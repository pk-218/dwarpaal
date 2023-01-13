import { Router } from 'express';
// import passport from 'passport';
import users from "../controllers/users.js";
import { generateAPIKey, validateToken, logout, sendCode, verifyCode } from "../controllers/auth.js";

const AuthRouter = Router();

// router.route("/login")
//   .get(users.renderLogin)
//   .post(
//     passport.authenticate("local", {
//       failureFlash: true,
//       failureRedirect: "/login",
//     }),
//     users.login
//   );

AuthRouter.post("/sendcode", sendCode);
AuthRouter.post("/verifycode", verifyCode);
AuthRouter.post("/generateTOTPKey", generateAPIKey);
AuthRouter.post("/validateCode", validateToken);
AuthRouter.post("/logout", logout);

// exporting defualt router
export default AuthRouter;