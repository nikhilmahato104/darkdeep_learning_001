import { Admin } from "../../models/Admin/admin.model";
import { Role } from "../../models/RoleManagement/role.model";
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

    if (admin.status !== "active") {
      throw new Error("Account is inactive");
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const roleData = await Role.findById(admin.role_id);

    const token = jwt.sign(
      {
        id: admin._id,
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
        status: admin.status,
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

  // ➕ CREATE
  createAdmin: async (data: any) => {
    const { name, email, mobile, password, role_id } = data;

    const exists = await Admin.findOne({
      $or: [{ email }, { mobile }],
    });

    if (exists) throw new Error("Email or Mobile already exists");

    const roleData = await Role.findById(role_id);
    if (!roleData) throw new Error("Invalid role");

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name,
      email,
      mobile,
      password: hashedPassword,
      role_id,
      role: roleData.role_name,
    });

    return { message: "Admin created", admin };
  },

  // 📄 GET ALL
  getAllAdmins: async () => {
    const admins = await Admin.find().populate("role_id");
    return { admins };
  },

  // 📄 GET BY ID
  getAdminById: async (id: string) => {
    const admin = await Admin.findById(id).populate("role_id");
    if (!admin) throw new Error("Admin not found");
    return admin;
  },

  // ✏️ UPDATE
  updateAdmin: async (id: string, data: any) => {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    if (data.role_id) {
      const roleData = await Role.findById(data.role_id);
      if (!roleData) throw new Error("Invalid role");
      data.role = roleData.role_name;
    }

    const updated = await Admin.findByIdAndUpdate(id, data, {
      new: true,
    });

    return { message: "Admin updated", updated };
  },

  // ❌ DELETE
  deleteAdmin: async (id: string) => {
    await Admin.findByIdAndDelete(id);
    return { message: "Admin deleted" };
  },
};