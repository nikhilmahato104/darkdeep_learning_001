import app from "./app";
import { ENV } from "./config/env";
import { connectDB } from "./config/db";

const startServer = async () => {
  await connectDB(); // <-- Connect Mongo First

  app.listen(ENV.PORT, () => {
    console.log(` Server running at http://localhost:${ENV.PORT}`);
  });
};

startServer();
