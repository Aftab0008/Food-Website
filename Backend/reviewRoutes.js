import express from "express";
import pool from "./db.js";

const router = express.Router();

// Fetch All Reviews
router.get("/", async (req, res) => {
  console.log("Fetching all reviews API hit"); // Debugging

  try {
    const result = await pool.query("SELECT * FROM reviews ORDER BY created_at DESC");
    console.log("Reviews fetched:", result.rows.length); // Debugging
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Submit a Review
router.post("/", async (req, res) => {
  console.log("Review API hit"); // Debugging

  const { review_text } = req.body;

  if (!review_text) {
    console.log("Empty review submission"); // Debugging
    return res.status(400).json({ error: "Review text is required" });
  }

  try {
    const newReview = await pool.query(
      "INSERT INTO reviews (review_text) VALUES ($1) RETURNING *",
      [review_text]
    );
    console.log("Review submitted:", newReview.rows[0]); // Debugging
    res.status(201).json({ message: "Review submitted!", review: newReview.rows[0] });
  } catch (error) {
    console.error("Error submitting review:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
