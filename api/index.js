// api/index.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use('/api/auth', authRoute);

app.listen(3000, () => {
  console.log('Server is running in port 3000++');
});
