import { Request, Response } from "express";
import { EmailService } from "../../services/EmialService/email.service";
import { log } from "console";

export const EmailController = {
  send: async (req: Request, res: Response) => {
    const { name, email } = req.body;

    try {
      const response = await EmailService.sendEmail(name, email);

      res.status(200).json({
        success: true,
        message: "Email sent successfully",
        brevoId: response.body?.messageId || response.body?.messageIds?.[0],
      });
    } catch (error: any) {
      
      res.status(500).json({
        success: false,
        message: "Email sending failed",
        error: error.message,
      });
    }
  },
};
