import mongoose from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "FoodEazy",
        });
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log("Mongo Connection failed", error);
    }
};
export default connectDB;
