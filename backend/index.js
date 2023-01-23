import express, { urlencoded, json } from "express";
import cors from "cors";
import expressSession from "express-session";
import pg from "pg";
import pgConnect from "connect-pg-simple";

import "./config.js";
import credentialsRouter from "./routes/credentials.js";
import usersRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";
import authRouter from "./routes/auth.js";
import homeRouter from "./routes/home.js";
import formRouter from "./routes/form.js";
import facultyRouter from "./routes/faculty.js";

import { initPostgresDB } from "./utils/sqlConfig.js";

// creating express app
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // we'll move the url in .env file later
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// express middleware
app.use(urlencoded({ extended: false }));
app.use(json());

const pgSession = new pgConnect(expressSession);
const sessionPool = pg.Pool;

const sessionConfig = {
  store: new pgSession({
    pool: new sessionPool({
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      database: process.env.POSTGRES_DB,
    }),
    tableName: "session",
    createTableIfMissing: true,
  }),
  secret: "thisshouldbeabettersecret!",
  cookie: {
    httpOnly: true,
    resave: true,
    saveUninitialized: true,
    maxAge: 1000 * 60 * 60 * 24 * 30,
  },
};
app.use(expressSession(sessionConfig));
// seting up routers
app.use("/api/home", homeRouter);
app.use("/api/user", usersRouter);
app.use("/api/credentials", credentialsRouter);
app.use("/api/admin", adminRouter);
app.use("/api/auth", authRouter);
app.use("/api/forms", formRouter);
app.use("/api/faculty", facultyRouter);

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
