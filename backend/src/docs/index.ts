import { helloSwagger } from "./hello.swagger";
import { studentSwagger } from "././StudentDoc/student.swagger";
import {emailSwagger} from "./EmialSwager/email.swagger"
import { openaiSwagger } from "./AIDoc/openai.swagger";
// const swaggerDocument = {
//   openapi: "3.0.0",
//   info: {
//     title: "Learning API",
//     version: "1.0.0",
//     description: "Swagger documentation for Learning Backend",
//   },
//   servers: [
//     {
//       url: "http://localhost:5000",
//       description: "Local Server",
//     },
//   ],
//   paths: {
//     ...helloSwagger,
//       ...studentSwagger,
//       ...emailSwagger,
//       ...openaiSwagger,
//     // ...userSwagger,
//     // ...productSwagger,
//     // ...bookingSwagger,
//   },
// };

// export default swaggerDocument;
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
  paths: {
    ...helloSwagger,
    ...studentSwagger,
    ...emailSwagger,
    ...openaiSwagger,
  },
};

export default swaggerDocument;
