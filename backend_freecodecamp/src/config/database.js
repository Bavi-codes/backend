import mongoose from "mongoose";
//this talks to mongodb(the databse)

//async is used to control the flow of task, i.e when one task finshes, only the next task should begin.
const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB connected Successful!! 
            ${connectionInstance.connection.host}`);

    } catch (error){
        console.log("MongoDB connection failed", error);
        process.exit(1)

    }
//try and catch is a good practice for error handling
}

export default connectDB;
