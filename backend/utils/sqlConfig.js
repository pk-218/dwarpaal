import Sequelize from "sequelize";
import user from "../models/user.js";

const conn = new Sequelize(
  "postgresql://postgres:JiHtxSMCthlvaPu89qKW@containers-us-west-122.railway.app:5605/railway"
);

const db = {};

db.conn = conn;

db.user = user(conn);

db.form = formdata(conn);

db.ROLES = ["student", "faculty", "admin"];

const initPostgresDB = () => {
  db.conn.sync({ force: true }).then(() => {
    console.log("Drop and Resync Database with { force: true }");
    db.user.create({
      id: ["191080040"],
      email: "pkkhushalani_b19@it.vjti.ac.in",
      verificationCode: "000000",
      role: "student",
    });
  });
};

export { initPostgresDB, db };
