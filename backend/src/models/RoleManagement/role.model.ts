// src/models/Role/role.model.ts

import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema(
  {
    role_name: { type: String, required: true },

    role_access: [
      {
        module_id: String,
        create: Boolean,
        edit: Boolean,
        view: Boolean,
        delete: Boolean,
        transfer: Boolean,
        export: Boolean,
      },
    ],
  },
  { timestamps: true }
);

export const Role = mongoose.model("Role", RoleSchema);