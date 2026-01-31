export const studentSwagger = {
  "/api/students": {
    get: {
      tags: ["Students"],
      summary: "Get all students",
      responses: { 200: { description: "OK" } },
    },
    post: {
      tags: ["Students"],
      summary: "Create student",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              name: "Rahul",
              age: 20,
              course: "B.Tech",
            },
          },
        },
      },
      responses: { 201: { description: "Created" } },
    },
  },

  "/api/students/{id}": {
    get: {
      tags: ["Students"],
      summary: "Get student by ID",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: { 200: { description: "OK" } },
    },
    put: {
      tags: ["Students"],
      summary: "Update student",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: { 200: { description: "Updated" } },
    },
    delete: {
      tags: ["Students"],
      summary: "Delete student",
      parameters: [
        { name: "id", in: "path", required: true, schema: { type: "string" } },
      ],
      responses: { 200: { description: "Deleted" } },
    },
  },
};
