import React, { useEffect, useState } from "react";
import API from "../utils/api"; // Import the API helper

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await API.get("/profile"); // Auto-includes token
        setUser(response.data);
      } catch (error) {
        setMessage(error.response?.data?.error || "Unauthorized access!");
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      {message && <p className="text-red-500">{message}</p>}
      {user && <p>Logged in as: {user.name} ({user.email})</p>}
    </div>
  );
};

export default Dashboard;
