export const adminSwagger = {
  "/api/admin/login": {
    post: {
      tags: ["Admin"],
      summary: "Admin Login",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              email: "admin@gmail.com",
              mobile: "9999999999",
              password: "Admin@123",
            },
          },
        },
      },
      responses: { 200: { description: "Login success" } },
    },
  },

  "/api/admin/profile": {
    get: {
      tags: ["Admin"],
      summary: "Get admin profile",
      security: [{ bearerAuth: [] }],
      responses: { 200: { description: "OK" } },
    },
  },
};