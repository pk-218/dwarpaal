import { Router } from "express"
import Admin from "../controllers/admin.js"

const adminRouter = Router()

adminRouter.get("/get-all-users",Admin.getAllUsers)
adminRouter.get("/get-logged-in-users",Admin.getLoggedInUsers)
adminRouter.get("/memory-usage-per-user",Admin.memoryUsagePerUser)

export default adminRouter