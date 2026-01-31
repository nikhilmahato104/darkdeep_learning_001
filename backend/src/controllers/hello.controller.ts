import { Request, Response } from "express";
import { helloService } from "../services/hello.service";

export const helloController = (req: Request, res: Response) => {
  const message = helloService();
  res.json({ success: true, message });
};
