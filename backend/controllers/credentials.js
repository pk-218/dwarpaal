import { db } from "../utils/sqlConfig.js";

const updateUserCredentials = (creds) => {
  db.user.update(
    { username: creds.username, expirationDate: creds.expirationDate },
    { where: { id: creds.id } }
  );
};

export default updateUserCredentials;
