// importing necessary modules
import express, { urlencoded, json } from "express";
import session from "express-session";
import { initPostgresDB } from "./utils/sqlConfig.js";
import credentialsRouter from "./routes/credentials.js";
import * as dotenv from "dotenv";
import usersRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";
import authRouter from "./routes/auth.js";
dotenv.config();

// creating express app
const app = express();

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
app.use("/api/user", usersRouter);
app.use("/api/credentials", credentialsRouter);
app.use("/api/admin", adminRouter);
app.use("/api/auth", authRouter);


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
