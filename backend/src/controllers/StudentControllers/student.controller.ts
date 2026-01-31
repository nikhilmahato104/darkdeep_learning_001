import { Request, Response } from "express";
import { StudentService } from "../../services/StudentService/student.service";

export const StudentController = {
  getAll: async (req: Request, res: Response) => {
    const students = await StudentService.getAll();
    res.json(students);
  },

  getById: async (req: Request, res: Response) => {
    const student = await StudentService.getById(req.params.id);
    res.json(student);
  },

  create: async (req: Request, res: Response) => {
    const student = await StudentService.create(req.body);
    res.status(201).json(student);
  },

  update: async (req: Request, res: Response) => {
    const student = await StudentService.update(req.params.id, req.body);
    res.json(student);
  },

  delete: async (req: Request, res: Response) => {
    await StudentService.delete(req.params.id);
    res.json({ message: "Student deleted" });
  },
};
