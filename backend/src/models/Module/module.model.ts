import mongoose from "mongoose";

const ModuleSchema = new mongoose.Schema(
  {
    module_id: { type: String, required: true, unique: true },
    label: { type: String, required: true },
  },
  { timestamps: true }
);

export const Module = mongoose.model("Module", ModuleSchema);