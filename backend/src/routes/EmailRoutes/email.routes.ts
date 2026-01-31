import { Router } from "express";
import { EmailController } from "../../controllers/EmialControllers/email.controller";

const router = Router();

router.post("/send", EmailController.send);

export default router;
