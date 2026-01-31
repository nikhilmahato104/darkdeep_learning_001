import mongoose from "mongoose";
import { ENV } from "./env";

export const connectDB = async () => {
  try {
    console.log("Connecting to:", `"${ENV.MONGO_URI}"`);
    await mongoose.connect(ENV.MONGO_URI);
    console.log(` MongoDB Connected`);
  } catch (error: any) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};