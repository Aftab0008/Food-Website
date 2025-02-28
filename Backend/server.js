import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./authRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// API Routes
app.use("/api", authRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
