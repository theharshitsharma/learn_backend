import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config(); // No path required if .env is in root

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB", err);
  });
