import { Router } from "express";
import helloRoutes from "./hello.routes";
import studentRoutes from "./StudentRoutes/student.routes";
import emailRoutes from "./EmailRoutes/email.routes";
import deviceInfoRoutes from "./DeviceInfo/deviceInfo.routes";

import openAiRoutes  from "./AIRoutes/openAIRoutes/ai.routes"

const router = Router();

router.use("/hello", helloRoutes);
router.use("/students", studentRoutes);
router.use("/email", emailRoutes);
router.use("/openai",openAiRoutes);
router.use("/device-info", deviceInfoRoutes);

export default router;
