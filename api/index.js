import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://aelishpatel112:Aelish9898@@mern-estate.zwowunr.mongodb.net/?retryWrites=true&w=majority&appName=mern-estate")

const app= express();

app.listen(3000, () =>{
    console.log('Server is running in port 3000++');
}
)