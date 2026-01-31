export const emailSwagger = {
  "/api/email/send": {
    post: {
      tags: ["Email"],
      summary: "Send email to user",
      description: "This API sends a welcome email using Brevo",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              name: "Nikhil",
              email: "nikhilmahato@gmail.com"
            }
          }
        }
      },
      responses: {
        200: {
          description: "Email sent successfully",
          content: {
            "application/json": {
              example: {
                success: true,
                message: "Email sent successfully",
                brevoId: "<id>"
              }
            }
          }
        },
        500: {
          description: "Email sending failed"
        }
      }
    }
  }
};
