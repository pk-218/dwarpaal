// importing necessary modules
import express, { urlencoded, json } from "express";
import { initPostgresDB } from "./utils/sqlConfig.js";
import usersRouter from "./routes/user.js";
import credentialsRouter from "./routes/credentials.js";
import * as dotenv from "dotenv";
dotenv.config();

// creating express app
const app = express();

//express middleware
app.use(urlencoded({ extended: false }));
app.use(json());

// seting up router's
app.use("/api/user", usersRouter);
app.use("/api/credentials", credentialsRouter);

// if encounter with the path that is not known, unknow paths responding with 404 status code
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    errors: [
      {
        msg: "Such path doesn't exsit in Server. Please Try another path.",
      },
    ],
  });
});

const PORT = process.env.PORT || 3000;
initPostgresDB();

app.listen(PORT, (_) => {
  console.log(`The server is running on Port : ${PORT}`);
});
