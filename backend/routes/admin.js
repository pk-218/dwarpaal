import { Router } from "express";
import Admin from "../controllers/admin.js";

const adminRouter = Router();

adminRouter.get("/get-all-users", Admin.getAllUsers);
adminRouter.get("/get-logged-in-users", Admin.getLoggedInUsers);
adminRouter.get("/memory-usage-per-user", Admin.memoryUsagePerUser);
adminRouter.post("/create-user", Admin.createUser);
adminRouter.post("/delete-user", Admin.deleteUser);
adminRouter.get("/disk-occupied", Admin.diskOccupied);
adminRouter.get("/pending-requests", Admin.getPendingAccessRequests);

export default adminRouter;
