import { Router } from "express";
import helloRoutes from "./hello.routes";
import studentRoutes from "./StudentRoutes/student.routes";
import emailRoutes from "./EmailRoutes/email.routes";

import openAiRoutes  from "./AIRoutes/openAIRoutes/ai.routes"

const router = Router();

router.use("/hello", helloRoutes);
router.use("/students", studentRoutes);
router.use("/email", emailRoutes);
router.use("/openai",openAiRoutes);

export default router;
