import { Router } from "express";
import router from "./user";

const credentialsRouter = Router();

router.post("/", (req, res) => {
  const body = req.body;
  res.status(200).send(body);
});

export default credentialsRouter;
