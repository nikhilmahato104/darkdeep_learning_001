export const helloSwagger = {
  "/api/hello": {
    get: {
      tags: ["Hello"],
      summary: "Returns a Hello World message",
      description: "This API returns a simple Hello World response.",
      responses: {
        200: {
          description: "Hello World successfully returned",
          content: {
            "application/json": {
              example: {
                success: true,
                message: "Hello World!",
              },
            },
          },
        },
      },
    },
  },
};
