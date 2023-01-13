import { Router } from "express";
import updateUserCredentials from "../controllers/credentials";

const credentialsRouter = Router();

credentialsRouter.post("/", (req, res) => {
  const body = req.body;
  const creds = Credentials(
    body.username,
    body.password,
    body.expiration,
    body.status,
    body.id
  );
  if (creds.status == 200) {
    updateUserCredentials(creds.getDataForUser());
    res.status(200).send(body);
  }
});

export default credentialsRouter;
