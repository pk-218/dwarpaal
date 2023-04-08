import { Router } from "express";
import Admin from "../controllers/admin.js";

const adminRouter = Router();

adminRouter.post("/create-user", Admin.createUser);
adminRouter.post("/delete-user", Admin.deleteUser);
// adminRouter.get("/disk-occupied", Admin.diskOccupied);
adminRouter.get("/pending-requests", Admin.getPendingAccessRequests);
adminRouter.get("/grant-credentials", Admin.grantCredentials);

export default adminRouter;
