import { emailClient } from "../../utils/emailClient";

export const EmailService = {
  sendEmail: async (name: string, email: string) => {
    const client = emailClient();

    const mailData = {
      sender: { name: "Learning App", email: "noreply@learning.com" },
      to: [{ email }],
      subject: "Welcome to Learning Platform",
      htmlContent: `
        <h2>Hello ${name},</h2>
        <p>This is a test email sent via <strong>Brevo Email API</strong>.</p>
      `,
    };

    return await client.sendTransacEmail(mailData);
  },
};
