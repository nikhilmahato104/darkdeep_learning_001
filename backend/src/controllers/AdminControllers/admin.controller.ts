import { Request, Response } from "express";
import { AdminService } from "../../services/AdminService/admin.service";



export const AdminController = {
  login: async (req: Request, res: Response) => {
    try {
      const result = await AdminService.login(req.body);
      res.json(result);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  profile: async (req: Request, res: Response) => {
    try {
      const result = await AdminService.getProfile((req as any).admin);
      res.json(result);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  createAdmin: async (req: Request, res: Response) => {
  try {
    const result = await AdminService.createAdmin(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
};