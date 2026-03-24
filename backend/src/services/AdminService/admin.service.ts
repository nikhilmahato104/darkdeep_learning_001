import { Admin } from "../../models/Admin/admin.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const AdminService = {

  login: async ({ email, mobile, password }: any) => {

    // ❗ atleast ek field hona chahiye
    if (!email && !mobile) {
      throw new Error("Email or mobile is required");
    }

    //  OR condition
    const admin = await Admin.findOne({
      $or: [
        email ? { email } : null,
        mobile ? { mobile } : null,
      ].filter(Boolean), // null remove karega
    });

    if (!admin) {
      throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return {
      message: "Login successful",
      token,
    };
  },

  getProfile: async (adminData: any) => {
    return {
      message: "Admin profile fetched",
      admin: adminData,
    };
  },
};