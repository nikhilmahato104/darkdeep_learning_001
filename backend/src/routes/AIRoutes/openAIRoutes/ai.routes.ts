import { Router } from "express";
import { chatWithAI } from "../../../controllers/AIControllers/openAiControllers/ai.controller";

const router = Router();

// 👇 YAHI missing / galat tha
router.post("/chat", chatWithAI);

export default router;