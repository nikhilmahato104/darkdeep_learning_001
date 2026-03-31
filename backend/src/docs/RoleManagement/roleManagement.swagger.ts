// src/swagger/role.swagger.ts

export const roleSwagger = {
  "/api/role/create": {
    post: {
      tags: ["Role Management"],
      summary: "Create Role",
      security: [{ bearerAuth: [] }], // 🔒 ADD THIS
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              role_name: "Manager",
              
              role_access: [
                {
                  module_id: "user-management",
                  create: true,
                  edit: true,
                  view: true,
                  delete: false,
                  transfer: false,
                  export: false,
                },
              ],
            },
          },
        },
      },
      responses: {
        201: { description: "Role created successfullyf"},
      },
    },
  },

  "/api/role/getAllRoles": {
    get: {
      tags: ["Role Management"],
      summary: "Get all roles",
          security: [{ bearerAuth: [] }], // 🔒 ADD THIS
      parameters: [
        { name: "search", in: "query", schema: { type: "string" } },
        { name: "page", in: "query", schema: { type: "number" } },
        { name: "limit", in: "query", schema: { type: "number" } },
      ],
      responses: { 200: { description: "OK" } },
    },
  },

  "/api/role/{id}": {
    get: {
      tags: ["Role Management"],
      summary: "Get role by ID",
      security: [{ bearerAuth: [] }], // 🔒 ADD THIS
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: { 200: { description: "OK" } },
    },
  },

  "/api/role/updateRole/{id}": {
  patch: {
    tags: ["Role Management"],
    summary: "Update role",
    security: [{ bearerAuth: [] }],
    parameters: [
      { name: "id", in: "path", required: true, schema: { type: "string" } },
    ],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          example: {
            role_name: "Updated Manager",
            role_access: [
              {
                module_id: "user-management",
                create: true,
                edit: false,
                view: true,
                delete: false,
              },
            ],
          },
        },
      },
    },
    responses: { 200: { description: "Updated" } },
  },
},

  "/api/role/delete": {
    delete: {
      tags: ["Role Management"],
      summary: "Delete role",
      security: [{ bearerAuth: [] }], // 🔒 ADD THIS
      parameters: [
        {
          name: "role_id",
          in: "query",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: { 200: { description: "Deleted" } },
    },
  },

  "/api/role/getRolesList": {
    get: {
      tags: ["Role Management"],
      summary: "Get roles dropdown",
      security: [{ bearerAuth: [] }], // 🔒 ADD THIS
      responses: { 200: { description: "OK" } },
    },
  },
};