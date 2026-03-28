// src/services/RoleService/role.service.ts

import { Role } from "../../models/RoleManagement/role.model";

export const RoleService = {

  getAll: async (query: any) => {
    const { search = "", page = 1, limit = 10 } = query;

    const filter = {
      role_name: { $regex: search, $options: "i" },
    };

    const roles = await Role.find(filter)
      .skip((+page - 1) * +limit)
      .limit(+limit);

    const total = await Role.countDocuments(filter);

    return {
      userdata: roles,
      pageDetails: { totalCount: total },
    };
  },

  getById: async (id: string) => {
    return await Role.findById(id);
  },

  create: async (data: any) => {
    return await Role.create(data);
  },

  update: async (id: string, data: any) => {
    return await Role.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (role_id: string) => {
    return await Role.findByIdAndDelete(role_id);
  },

  getRolesList: async () => {
    const roles = await Role.find().select("_id role_name");

    return roles.map((r) => ({
      label: r.role_name,
      value: r._id,
    }));
  },
};