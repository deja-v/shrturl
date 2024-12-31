import 'dotenv/config'
import express from 'express';
import connectDB from './connection.js';
import urlRouter from './routes/url.js';
import cors from "cors"
const app = express();
const port = process.env.PORT || 8000;

//connection
connectDB();

const allowedOrigins = [
    'http://localhost:5173', // Local frontend during development
    'https://shortly-jade-tau.vercel.app/', // Deployed frontend
  ];
  
  app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      methods: 'GET,POST,PUT,DELETE', 
    })
  );
  

app.use(express.urlencoded({extended:false}))

app.use(express.json());

app.use('/api', urlRouter);

app.listen(port, () => {console.log('Server is running on port ', port)});