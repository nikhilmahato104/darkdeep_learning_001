import { Router } from "express";
import { ModuleController } from "../../controllers/ModuleControllers/module.controller";
import { authGuard } from "../../middleware/auth.middleware";
const router = Router();

router.get("/", authGuard, ModuleController.getAll);
router.get("/:id", authGuard, ModuleController.getById);
router.post("/", authGuard, ModuleController.create);
router.put("/:id", authGuard, ModuleController.update);
router.delete("/:id", authGuard, ModuleController.delete);

export default router;