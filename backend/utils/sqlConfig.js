import Sequelize from "sequelize";
import user from "../models/user.js";
import formdata from "../models/formdata.js";
import { POSTGRES_DSN } from "../env.js";

const conn = new Sequelize(process.env.POSTGRES_DSN || POSTGRES_DSN);

const db = {};

db.conn = conn;

db.user = user(conn);

db.form = formdata(conn);

db.ROLES = ["student", "faculty", "admin"];

// add dummy user
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
