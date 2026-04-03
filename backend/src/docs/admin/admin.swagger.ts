export const adminSwagger = {

  // 🔐 LOGIN
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
                data: {
                  id: "65fxxxx",
                  name: "Admin",
                  email: "admin@gmail.com",
                  role: "manager",
                  role_id: "65froleid",
                  status: "active",
                  role_access: [
                    {
                      module_id: "SucceslyUserManagement",
                      create: true,
                      edit: true,
                      view: true,
                      delete: false,
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
  },

  // 👤 PROFILE
  "/api/admin/profile": {
    get: {
      tags: ["Admin"],
      summary: "Get admin profile",
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "Profile fetched",
        },
      },
    },
  },

  // ➕ CREATE ADMIN
  "/api/admin/create": {
    post: {
      tags: ["Admin"],
      summary: "Create new admin",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              name: "Nikhil",
              email: "nikhil@gmail.com",
              mobile: "9999999999",
              password: "123456",
              role_id: "65fxxxxxxxxxxxx",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Admin created",
          content: {
            "application/json": {
              example: {
                message: "Admin created",
                admin: {
                  _id: "65fxxxx",
                  name: "Nikhil",
                  email: "nikhil@gmail.com",
                  mobile: "9999999999",
                  role: "manager",
                  role_id: "65fxxxxxxxx",
                  status: "active",
                },
              },
            },
          },
        },
      },
    },
  },

  // 📄 GET ALL ADMINS
  "/api/admin/getAll": {
    get: {
      tags: ["Admin"],
      summary: "Get all admins",
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "List of admins",
          content: {
            "application/json": {
              example: {
                admins: [
                  {
                    _id: "65fxxxx",
                    name: "Admin1",
                    email: "admin1@gmail.com",
                    mobile: "9999999999",
                    role: "admin",
                    status: "active",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },

  // 📄 GET ADMIN BY ID
  "/api/admin/{id}": {
    get: {
      tags: ["Admin"],
      summary: "Get admin by ID",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Admin data",
        },
      },
    },
  },

  // ✏️ UPDATE ADMIN
  "/api/admin/update/{id}": {
    patch: {
      tags: ["Admin"],
      summary: "Update admin",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              name: "Updated Name",
              mobile: "8888888888",
              role_id: "65fxxxx",
              status: "inactive",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Admin updated",
          content: {
            "application/json": {
              example: {
                message: "Admin updated",
                updated: {
                  _id: "65fxxxx",
                  name: "Updated Name",
                  status: "inactive",
                },
              },
            },
          },
        },
      },
    },
  },

  // ❌ DELETE ADMIN
  "/api/admin/delete/{id}": {
    delete: {
      tags: ["Admin"],
      summary: "Delete admin",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Admin deleted",
          content: {
            "application/json": {
              example: {
                message: "Admin deleted",
              },
            },
          },
        },
      },
    },
  },

};