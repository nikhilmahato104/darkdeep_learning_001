import { DeviceInfo } from "../../models/DeviceInfo/deviceInfo.model";

export const DeviceInfoService = {
  getAll: async () => {
    return await DeviceInfo.find();
  },

  getById: async (id: string) => {
    return await DeviceInfo.findById(id);
  },

  create: async (data: any) => {
    return await DeviceInfo.create(data);
  },

  update: async (id: string, data: any) => {
    return await DeviceInfo.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (id: string) => {
    return await DeviceInfo.findByIdAndDelete(id);
  },
};
