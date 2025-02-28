import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { dataContext } from "../context/UserContext";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const { user } = useContext(dataContext);

  // ✅ Log user context to debug `null` issue
  useEffect(() => {
    console.log("User context in Footer:", user);
  }, [user]);

  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState([]); // ✅ Always initialize as an array

  // ✅ Fetch Reviews from Backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("/api/reviews");

        if (Array.isArray(response.data.reviews)) {
          setReviews(response.data.reviews);
        } else {
          setReviews([]);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews([]);
      }
    };

    fetchReviews();
  }, []);

  // ✅ Handle Review Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setMessage("⚠️ You must be logged in to submit a review.");
      return;
    }

    if (!review.trim()) {
      setMessage("⚠️ Review cannot be empty.");
      return;
    }

    try {
      const response = await axios.post("/api/reviews", {
        userId: user?.id, // ✅ Ensure user exists before accessing id
        review_text: review,
      });

      setMessage("✅ Review submitted successfully!");
      setReview("");

      // ✅ Update review list
      setReviews((prevReviews) => [...prevReviews, response.data.review]);

    } catch (error) {
      console.error("Error submitting review:", error);
      setMessage("❌ Error submitting review. Please try again.");
    }
  };

  return (
    <div>
      <footer className="bg-green-700 text-black py-8 px-8">
        <div className="h-2xl container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: support@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-m font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 font-semibold">
                <FaFacebookSquare /> Facebook
              </a>
              <a href="#" className="hover:text-blue-400 font-semibold">
                <FaSquareXTwitter /> Twitter
              </a>
              <a href="https://www.instagram.com/__goku_vegeta/?hl=en" className="hover:text-blue-400 font-semibold">
                <FaInstagram /> Instagram
              </a>
              <a href="#" className="hover:text-blue-400 font-semibold">
                <BsLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          {/* Review Form */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Leave a Review</h3>
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-full p-2 border-0 rounded bg-white text-black"
                rows="3"
                placeholder="Write your review..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              />
              <button
                type="submit"
                className="mt-2 bg-green-600 hover:bg-green-950 text-white py-1 px-4 rounded"
              >
                Submit
              </button>
            </form>
            {message && <p className="mt-2 text-yellow-300">{message}</p>}
          </div>
        </div>

        {/* Display Reviews */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-center">Recent Reviews</h3>
          <div className="max-w-2xl mx-auto">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="bg-white text-black p-4 rounded mb-2 shadow">
                  <p>{review.review_text}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-300">No reviews yet.</p>
            )}
          </div>
        </div>

        <div className="text-center mt-6">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;