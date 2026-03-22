import { Request, Response } from "express";
import { PaymentService } from "../../services/Payment/payment.service";

export const PaymentController = {
  createOrder: async (req: Request, res: Response) => {
    const order = await PaymentService.createOrder();
    res.json(order);
  },

  verifyPayment: async (req: Request, res: Response) => {
    const isValid = PaymentService.verifyPayment(req.body);

    if (isValid) {
      return res.json({ success: true, message: "Payment verified ✅" });
    } else {
      return res.status(400).json({ success: false });
    }
  },
};