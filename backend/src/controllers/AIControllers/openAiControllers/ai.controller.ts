import { Request, Response } from "express";
import { chatWithOpenAI } from "../../../services/AIService/openai.service";
import { log } from "console";

export const chatWithAI = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const reply = await chatWithOpenAI(message);

    res.json({
      success: true,
      reply
    });
  } catch (err) {
    console.log("err is :::::::::::::::::",err);
    
    res.status(500).json({
     
        
      success: false,
      message: "OpenAI failed"
    });
  }
};