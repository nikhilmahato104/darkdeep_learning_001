import { Router } from "express";
import { DeviceInfoController } from "../../controllers/DeviceInfo/deviceInfo.controller";

const router = Router();

router.get("/", DeviceInfoController.getAll);
router.get("/:id", DeviceInfoController.getById);
router.post("/", DeviceInfoController.create);
router.put("/:id", DeviceInfoController.update);
router.delete("/:id", DeviceInfoController.delete);

export default router;
