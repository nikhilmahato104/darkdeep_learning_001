import Razorpay from "razorpay";
import crypto from "crypto";
import { ENV } from "../../config/env";

const razorpay = new Razorpay({
  key_id: ENV.RAZORPAY_KEY_ID,
  key_secret: ENV.RAZORPAY_KEY_SECRET,
});

export const PaymentService = {
  createOrder: async () => {
    const options = {
      amount: 1000, // ₹10
      currency: "INR",
      receipt: "receipt_order_1",
    };

    return await razorpay.orders.create(options);
  },

  verifyPayment: (body: any) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    const generated_signature = crypto
      .createHmac("sha256", ENV.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    return generated_signature === razorpay_signature;
  },
};