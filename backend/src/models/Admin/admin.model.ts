import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String },

    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    role_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },

    role: {
      type: String,
      enum: ["superadmin", "admin", "manager"],
      default: "manager",
    },

    status: {
      type: String,
      enum: ["active", "inactive", "pending", "Cancelled", "Password Not set"],
      default: "Password Not set",
    },
  },
  { timestamps: true }
);

export const Admin = mongoose.model("Admin", AdminSchema);