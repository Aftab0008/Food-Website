import express from "express";

const router = express.Router();

// Sample in-memory storage (Replace with a database)
app.post("/api/reservations", async (req, res) => {
    try {
      const { name, email, date, time, guests } = req.body;
  
      if (!name || !email || !date || !time || !guests) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      res.status(201).json({ message: "Reservation successful", reservation: req.body });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });
  

// GET: Retrieve all reservations
router.get("/", (req, res) => {
  res.json(reservations);
});

export default router;
