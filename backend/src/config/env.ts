import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || "",
   BREVO_API_KEY: process.env.BREVO_API_KEY || "",
   OPENAI_API_KEY:process.env.OPENAI_API_KEY || "",


};

