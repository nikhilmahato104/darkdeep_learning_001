import { Router } from "express";
import { AdminController } from "../../controllers/AdminControllers/admin.controller";
import { authGuard } from "../../middleware/auth.middleware";

const router = Router();

// ✅ PUBLIC
router.post("/login", AdminController.login);

// 🔒 PROTECTED
router.get("/profile", authGuard, AdminController.profile);

export default router;