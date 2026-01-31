import OpenAI from "openai";

export const chatWithOpenAI = async (message: string) => {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY missing");
  }

  // ✅ OpenAI yahan banega, startup pe nahi
  const openai = new OpenAI({
    apiKey,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are NikhilAI. Reply in simple Hinglish." },
      { role: "user", content: message },
    ],
    max_tokens: 300,
  });

  return response.choices[0].message.content;
};