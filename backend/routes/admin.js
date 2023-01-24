import { Router } from "express";
import Admin from "../controllers/admin.js";

const adminRouter = Router();

adminRouter.post("/create-user", Admin.createUser);
adminRouter.post("/delete-user", Admin.deleteUser);
adminRouter.get("/get-stats", Admin.getStats)

export default adminRouter;
