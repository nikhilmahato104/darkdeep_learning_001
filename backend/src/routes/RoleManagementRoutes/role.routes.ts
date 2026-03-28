// // src/routes/RoleRoutes/role.routes.ts

// import { Router } from "express";
// import { RoleController } from "../../controllers/RoleManagementControllers/role.controller";

// const router = Router();

// router.get("/getAllRoles", RoleController.getAll);
// router.get("/:id", RoleController.getById);
// router.post("/create", RoleController.create);
// router.patch("/updateRole/:id", RoleController.update);
// router.delete("/delete", RoleController.delete);
// router.get("/getRolesList", RoleController.getRolesList);

// export default router;





import { Router } from "express";
import { RoleController } from "../../controllers/RoleManagementControllers/role.controller";
import { authGuard } from "../../middleware/auth.middleware";

const router = Router();

// 🔒 ALL PROTECTED
router.get("/getAllRoles", authGuard, RoleController.getAll);
router.get("/:id", authGuard, RoleController.getById);
router.post("/create", authGuard, RoleController.create);
router.patch("/updateRole/:id", authGuard, RoleController.update);
router.delete("/delete", authGuard, RoleController.delete);
router.get("/getRolesList", authGuard, RoleController.getRolesList);

export default router;