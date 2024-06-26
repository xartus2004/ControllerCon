import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        // console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb Connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Mongoose connection Error ",error)
        process.exit(1)
    }
}

export default connectDB;