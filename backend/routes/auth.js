import { Router } from 'express';
import passport from 'passport';
import users from "../controllers/users.js";

const router = Router();

router
  .route("/login")
  .get(users.renderLogin)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    users.login
  );

// exporting defualt router
export default router;