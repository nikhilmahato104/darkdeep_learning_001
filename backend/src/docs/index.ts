import { helloSwagger } from "./hello.swagger";
import { studentSwagger } from "././StudentDoc/student.swagger";
import {emailSwagger} from "./EmialSwager/email.swagger"
import { openaiSwagger } from "./AIDoc/openai.swagger";
import { deviceInfoSwagger } from "../docs/deviceInfo/deviceInfo.swagger";
import { DeviceInfo } from "../models/DeviceInfo/deviceInfo.model";
import { paymentSwagger } from "./payemnet/payment.swagger";
import {roleSwagger} from "./RoleManagement/roleManagement.swagger";
import {adminSwagger} from "./admin/admin.swagger";

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Learning API",
    version: "1.0.0",
    description: "Swagger documentation for Learning Backend",
  },

  servers: [
    {
      url:
        process.env.NODE_ENV === "production"
          ? "https://darkdeep-learning-001.onrender.com"
          : "http://localhost:5000",
      description: "API Server",
    },
  ],

  // 🔐 ADD THIS BLOCK 👇
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },

  // 🔐 GLOBAL SECURITY (optional but recommended)
  // security: [
  //   {
  //     bearerAuth: [],
  //   },
  // ],

  paths: {
    ...helloSwagger,
    ...studentSwagger,
    ...emailSwagger,
    ...openaiSwagger,
    ...deviceInfoSwagger,
    ...paymentSwagger,
    ...roleSwagger,
    ...adminSwagger,
  },
};

export default swaggerDocument;
