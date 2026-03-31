export const moduleSwagger = {
  "/api/modules": {
    get: {
      tags: ["Modules"],
      summary: "Get all modules",
      responses: { 200: { description: "OK" } },
    },
    post: {
      tags: ["Modules"],
      summary: "Create module",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              module_id: "unhackable-module",
              label: "Admin Module",
            },
          },
        },
      },
      responses: { 201: { description: "Created" } },
    },
  },

  "/api/modules/{id}": {
    get: {
      tags: ["Modules"],
      summary: "Get module by ID",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: { 200: { description: "OK" } },
    },
    put: {
      tags: ["Modules"],
      summary: "Update module",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: { 200: { description: "Updated" } },
    },
    delete: {
      tags: ["Modules"],
      summary: "Delete module",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: { 200: { description: "Deleted" } },
    },
  },
};