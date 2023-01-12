// importing necessary modules
import express, { urlencoded, json } from 'express';
import connectToDatabase from './utils/dbConfig.js';
import user from './routes/user.js';
import * as dotenv from 'dotenv';
dotenv.config()

// creating express app
const app = express();

//express middleware
app.use(urlencoded({ extended: false }));
app.use(json());


// seting up router's
app.use('/user', user);

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

// first connecting to database then starting the server on the given or default PORT number
// underscore for void parameter 
connectToDatabase().then(_ => {
  // starting the app
  app.listen(PORT, _ => {
    console.log(`The server is running on Port : ${PORT}`)
  });
});