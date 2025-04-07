import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB=async()=>{
   try {
    const connectionInstance=await mongoose.connect(`${process.env.MongoDB_URI}/${DB_NAME}`);
    console.log(`MongoDb is hosted at ${connectionInstance.connection.host}`);
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
}

export default connectDB;