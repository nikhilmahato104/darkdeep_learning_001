import { Request, Response } from "express";
import { DeviceInfoService } from "../../services/DeviceInfo/deviceInfo.service";

export const DeviceInfoController = {
  getAll: async (req: Request, res: Response) => {
    const data = await DeviceInfoService.getAll();
    res.json(data);
  },

  getById: async (req: Request, res: Response) => {
    const data = await DeviceInfoService.getById(req.params.id);
    res.json(data);
  },

  create: async (req: Request, res: Response) => {
    const data = await DeviceInfoService.create(req.body);
    res.status(201).json(data);
  },

  update: async (req: Request, res: Response) => {
    const data = await DeviceInfoService.update(req.params.id, req.body);
    res.json(data);
  },

  delete: async (req: Request, res: Response) => {
    await DeviceInfoService.delete(req.params.id);
    res.json({ message: "Device info deleted" });
  },
};
