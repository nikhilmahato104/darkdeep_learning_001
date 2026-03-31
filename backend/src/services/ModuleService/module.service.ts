import { Module } from "../../models/Module/module.model";

export const ModuleService = {
  getAll: async () => {
    return await Module.find();
  },

  getById: async (id: string) => {
    return await Module.findById(id);
  },

  create: async (data: any) => {
    return await Module.create(data);
  },

  update: async (id: string, data: any) => {
    return await Module.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (id: string) => {
    return await Module.findByIdAndDelete(id);
  },
};