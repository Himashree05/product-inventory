import mongoose from "mongoose";
import { compileFunction } from "vm";

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connection successfull")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
};

export default connectDb;