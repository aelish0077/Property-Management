import express from 'express';
import mongoose from 'mongoose';
import authRoute from './routes/auth.route.js';


mongoose.connect("process.env.MONGO").then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log('Server is running in port 3000++');
});

app.use('/api/auth', authRoute);