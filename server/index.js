import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./src/db/index.js";
import logger from "./src/utils/logger.js";
// import connect from "./src/db/index.js";

// Load environment variables
dotenv.config();
// connect();


// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
import userRoute from "./src/routes/userRoute.js";
import carbonCreditRoutes from "./src/routes/listingRoute.js";

// Use Routes
app.use("/api/users", userRoute);
app.use("/api/credits", carbonCreditRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
connect()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit process if DB connection fails
  });
