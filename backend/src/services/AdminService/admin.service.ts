import { Admin } from "../../models/Admin/admin.model";
import { Role } from "../../models/RoleManagement/role.model"; // ✅ important
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const AdminService = {

  // 🔐 LOGIN
  login: async ({ email, mobile, password }: any) => {
    if (!email && !mobile) {
      throw new Error("Email or mobile is required");
    }

    const admin = await Admin.findOne({
      $or: [
        email ? { email } : null,
        mobile ? { mobile } : null,
      ].filter(Boolean),
    });

    if (!admin) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const roleData = await Role.findById(admin.role_id);

    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
        role_id: admin.role_id,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return {
      message: "Login successful",
      token,
      data: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        role_id: admin.role_id,
        role_access: roleData?.role_access || [],
      },
    };
  },

  // 👤 PROFILE
  getProfile: async (adminData: any) => {
    return {
      message: "Admin profile fetched",
      admin: adminData,
    };
  },

  // 🆕 CREATE ADMIN (🔥 YE MISSING THA)
  createAdmin: async (data: any) => {
    const { name, email, mobile, password, role_id } = data;

    if (!email || !mobile || !password || !role_id) {
      throw new Error("All fields are required");
    }

    // 🔍 DUPLICATE CHECK (🔥 IMPORTANT)
    const existingAdmin = await Admin.findOne({
      $or: [{ email }, { mobile }],
    });

    if (existingAdmin) {
      if (existingAdmin.email === email) {
        throw new Error("Email already exists");
      }
      if (existingAdmin.mobile === mobile) {
        throw new Error("Mobile number already exists");
      }
    }

    // 🔍 role find
    const roleData = await Role.findById(role_id);
    if (!roleData) {
      throw new Error("Invalid role_id");
    }

    // 🔐 hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ create admin
    const newAdmin = await Admin.create({
      name,
      email,
      mobile,
      password: hashedPassword,
      role_id: roleData._id,
      role: roleData.role_name,
    });

    return {
      message: "Admin created successfully",
      admin: newAdmin,
    };
  },

};