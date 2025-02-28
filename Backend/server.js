import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./authRoutes.js";
import reviewRoutes from "./reviewRoutes.js";
import reservationRoutes from "./reservationRoutes.js"; // Import reservation routes

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Health Check Route (Prevents Railway from stopping the app)
app.get("/", (req, res) => {
  res.send("Server is running on Railway!");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/reservations", reservationRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
