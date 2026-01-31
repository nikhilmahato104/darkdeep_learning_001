// openai.swagger.ts
export const openaiSwagger = {
  "/api/openai/chat": {
    post: {
      tags: ["AI - OpenAI"],
      summary: "Chat with OpenAI (ChatGPT)",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              message: "React kya hai?"
            }
          }
        }
      },
      responses: {
        200: {
          description: "Successful OpenAI response",
          content: {
            "application/json": {
              example: {
                success: true,
                reply: "React ek JavaScript library hai..."
              }
            }
          }
        },
        400: { description: "Bad Request" },
        500: { description: "Server Error" }
      }
    }
  }
};