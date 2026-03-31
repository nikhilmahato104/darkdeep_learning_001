import { Request, Response } from "express";
import { ModuleService } from "../../services/ModuleService/module.service";

export const ModuleController = {
  getAll: async (req: Request, res: Response) => {
    const data = await ModuleService.getAll();
    res.json(data);
  },

  getById: async (req: Request, res: Response) => {
    const data = await ModuleService.getById(req.params.id);
    res.json(data);
  },

  create: async (req: Request, res: Response) => {
    const data = await ModuleService.create(req.body);
    res.status(201).json(data);
  },

  update: async (req: Request, res: Response) => {
    const data = await ModuleService.update(req.params.id, req.body);
    res.json(data);
  },

  delete: async (req: Request, res: Response) => {
    await ModuleService.delete(req.params.id);
    res.json({ message: "Module deleted" });
  },
};