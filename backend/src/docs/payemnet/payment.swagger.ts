export const paymentSwagger = {
  "/api/payment/create-order": {
    post: {
      tags: ["Payment"],
      summary: "Create Razorpay order (₹10 test)",
      responses: {
        200: {
          description: "Order created successfully",
          content: {
            "application/json": {
              example: {
                id: "order_ABC123",
                amount: 1000,
                currency: "INR",
              },
            },
          },
        },
      },
    },
  },

  "/api/payment/verify-payment": {
    post: {
      tags: ["Payment"],
      summary: "Verify Razorpay payment signature",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              razorpay_order_id: "order_ABC123",
              razorpay_payment_id: "pay_ABC123",
              razorpay_signature: "generated_signature",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Payment verified successfully",
          content: {
            "application/json": {
              example: {
                success: true,
                message: "Payment verified ✅",
              },
            },
          },
        },
        400: {
          description: "Invalid signature",
        },
      },
    },
  },
};