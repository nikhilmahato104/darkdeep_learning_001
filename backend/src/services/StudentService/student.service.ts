import { Student } from "../../models/StudentCrudTest/student.model";

export const StudentService = {
  getAll: async () => {
    return await Student.find();
  },

  getById: async (id: string) => {
    return await Student.findById(id);
  },

  create: async (data: any) => {
    return await Student.create(data);
  },

  update: async (id: string, data: any) => {
    return await Student.findByIdAndUpdate(id, data, { new: true });
  },

  delete: async (id: string) => {
    return await Student.findByIdAndDelete(id);
  },
};
