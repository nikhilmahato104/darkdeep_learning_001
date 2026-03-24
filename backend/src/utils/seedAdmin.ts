import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { Admin } from "../models/Admin/admin.model";

dotenv.config();

const seedAdmin = async () => {
  try {
    // ✅ Connect DB
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("✅ MongoDB Connected");

    // ✅ Check existing admin
    const existing = await Admin.findOne({ email: "nikhilmahato104@gmail.com" });

    if (existing) {
      console.log("⚠️ Admin already exists:", existing.email);
      process.exit(0);
    }

    // 🔐 Hash password HERE (IMPORTANT)
    const hashedPassword = await bcrypt.hash("Password123!", 10);

    // ✅ Create admin
    const admin = await Admin.create({
      email: "n@gmail.com",
      mobile: "1234567890",
      password: hashedPassword,
    });

    console.log("🔥 Admin Seeded Successfully:", admin.email);
    process.exit(0);

  } catch (error) {
    console.error("❌ Error seeding admin:", error);
    process.exit(1);
  }
};

seedAdmin();