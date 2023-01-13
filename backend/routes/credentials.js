import { Router } from "express";

const credentialsRouter = Router();

credentialsRouter.post("/", (req, res) => {
  const body = req.body;
  res.status(200).send(body);
});

export default credentialsRouter;
