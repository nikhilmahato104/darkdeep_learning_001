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
      responses: {
        200: {
          description: "Login success",
          content: {
            "application/json": {
              example: {
                message: "Login successful",
                token: "jwt_token_here",
                admin: {
                  id: "65fxxxx",
                  name: "Admin",
                  email: "admin@gmail.com",
                  role: "manager",
                  role_id: "65froleid",
                  role_access: [],
                },
              },
            },
          },
        },
      },
    },
  },

  "/api/admin/profile": {
    get: {
      tags: ["Admin"],
      summary: "Get admin profile",
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "OK",
        },
      },
    },
  },

  // 🆕 CREATE ADMIN API
  "/api/admin/create": {
    post: {
      tags: ["Admin"],
      summary: "Create new admin (User Management)",
      security: [{ bearerAuth: [] }], // 🔒 protected
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              name: "Nikhil",
              email: "nikhil@gmail.com",
              mobile: "9999999999",
              password: "123456",
              role_id: "65fxxxxxxxxxxxx", // 🔥 important
            },
          },
        },
      },
      responses: {
        201: {
          description: "Admin created successfully",
          content: {
            "application/json": {
              example: {
                message: "Admin created successfully",
                admin: {
                  _id: "65fxxxx",
                  name: "Nikhil",
                  email: "nikhil@gmail.com",
                  mobile: "9999999999",
                  role: "manager",
                  role_id: "65fxxxxxxxx",
                  status: "Password Not set",
                },
              },
            },
          },
        },
      },
    },
  },

};