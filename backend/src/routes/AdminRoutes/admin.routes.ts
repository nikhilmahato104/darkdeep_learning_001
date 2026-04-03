import { Router } from "express";
import { AdminController } from "../../controllers/AdminControllers/admin.controller";
import { authGuard } from "../../middleware/auth.middleware";

const router = Router();

// PUBLIC
router.post("/login", AdminController.login);

// PROTECTED
router.get("/profile", authGuard, AdminController.profile);

// CRUD
router.post("/create", authGuard, AdminController.createAdmin);
router.get("/getAll", authGuard, AdminController.getAllAdmins);
router.get("/:id", authGuard, AdminController.getAdminById);
router.patch("/update/:id", authGuard, AdminController.updateAdmin);
router.delete("/delete/:id", authGuard, AdminController.deleteAdmin);

export default router;