// importing necessary modules
import express, { urlencoded, json } from "express";
import session from "express-session";
import { initPostgresDB } from "./utils/sqlConfig.js";
import credentialsRouter from "./routes/credentials.js";
import * as dotenv from "dotenv";
import usersRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";
import cors from "cors";

import authRouter from "./routes/auth.js";
import homeRouter from "./routes/home.js";
import formRouter from "./routes/form.js"
dotenv.config();

// creating express app
const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

//express middleware
app.use(urlencoded({ extended: false }));
app.use(json());

const sessionConfig = {
  secret: "thisshouldbeabettersecret!",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24,
    maxAge: 1000 * 60 * 60 * 24,
  },
};

app.use(session(sessionConfig));

// seting up routers
app.use("/home", homeRouter)
app.use("/api/user", usersRouter);
app.use("/api/credentials", credentialsRouter);
app.use("/api/admin", adminRouter)

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

const PORT = process.env.PORT || 5000;
initPostgresDB();

app.listen(PORT, (_) => {
  console.log(`The server is running on Port : ${PORT}`);
});
