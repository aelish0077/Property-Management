import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type : String,
        required: true,
        uniqe: true,
    },
    email: {
        type : String,
        required: true,
        uniqe: true,
    } ,  
    Password: {
        type : String,
        required: true,
    }  
      
},{timestamps : true}); 

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;