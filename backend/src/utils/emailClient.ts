// import brevo from "@getbrevo/brevo";
import * as brevo from "@getbrevo/brevo";

export const emailClient = () => {
  const client = new brevo.TransactionalEmailsApi();
  client.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY || "");
  return client;
};
