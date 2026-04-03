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
      required: true,
    },

    role: {
      type: String,
      enum: ["Admin", "Manager"],
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

export const Admin = mongoose.model("Admin", AdminSchema);