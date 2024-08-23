import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://ayush:2vuRa2WEf8tSOwNy@cluster0.lcsnwkb.mongodb.net/Food-del').then(()=>console.log("DB connected"));
}