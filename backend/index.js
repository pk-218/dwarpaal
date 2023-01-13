// importing necessary modules
import express, { urlencoded, json } from 'express';
import connectToDatabase from './utils/dbConfig.js';
import { initPostgresDB } from './utils/sqlConfig.js';
import user from './routes/user.js';
import auth from './routes/auth.js';
import session from 'express-session';
import * as dotenv from 'dotenv';
dotenv.config()

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

// seting up router's
app.use('/api/user', user);
app.use('/api/auth', auth);


// if encounter with the path that is not known, unknow paths responding with 404 status code
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    errors: [
      {
        msg: 'Such path doesn\'t exsit in Server. Please Try another path.',
      },
    ],
  })
});


const PORT = process.env.PORT || 3000;
initPostgresDB();

app.listen(PORT, _ => {
    console.log(`The server is running on Port : ${PORT}`)
}); 

