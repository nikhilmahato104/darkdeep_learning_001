// src/controllers/RoleControllers/role.controller.ts

import { Request, Response } from "express";
import { RoleService } from "../../services/RoleService/role.service";

export const RoleController = {

  getAll: async (req: Request, res: Response) => {
    const result = await RoleService.getAll(req.query);
    res.json(result);
  },

  getById: async (req: Request, res: Response) => {
    const role = await RoleService.getById(req.params.id);
    res.json(role);
  },

  create: async (req: Request, res: Response) => {
    const role = await RoleService.create(req.body);
    res.status(201).json({
      message: "Role created successfully",
      role,
    });
  },

  update: async (req: Request, res: Response) => {
    const role = await RoleService.update(req.params.id, req.body);
    res.json({
      message: "Role updated successfully",
      role,
    });
  },

  delete: async (req: Request, res: Response) => {
    await RoleService.delete(req.query.role_id as string);
    res.json({ message: "Role deleted successfully" });
  },

  getRolesList: async (_: Request, res: Response) => {
    const roles = await RoleService.getRolesList();
    res.json(roles);
  },
};