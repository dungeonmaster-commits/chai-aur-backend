// import mongoose from "mongoose" ;
// import { DB_NAME } from "./constants";
// import  express  from "express";

// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path:".env"
})

connectDB();






/*
const app=express();

(async () =>{
    try {
        await mongoose.connect(`${process.env.MongoDB_URI}/${DB_NAME}`)
        app.on((error)=>{
           console.log(error);
           throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log("server is running at port 8000")
        })
    } catch (error) {
        console.error(error)
    }
})()
*/
