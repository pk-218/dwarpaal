import express, { urlencoded, json } from "express";
import session from "express-session";
import "./config.js";

import cors from "cors";

import credentialsRouter from "./routes/credentials.js";
import usersRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";
import authRouter from "./routes/auth.js";
import homeRouter from "./routes/home.js";
import formRouter from "./routes/form.js";

import { initPostgresDB } from "./utils/sqlConfig.js";

// creating express app
const app = express();

app.use(
  cors({
    origin: "*",
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
app.use("/home", homeRouter);
app.use("/api/user", usersRouter);
app.use("/api/credentials", credentialsRouter);
app.use("/api/admin", adminRouter);
app.use("/api/auth", authRouter);

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

initPostgresDB();

const PORT = process.env.PORT || 8000;
app.listen(PORT, (_) => {
  console.log(`The server is running on port ${PORT}`);
});
