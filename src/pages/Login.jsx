import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import LogImg_2 from "../image/Log_02.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
  
    try {
      const res = await axios.post("http://localhost:5000/api/login", { 
        email, password 
      });
  
      localStorage.setItem("token", res.data.token);
  
      setMessage(res.data.message);
      navigate("/welcome");
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Something went wrong!";
      setMessage(errorMessage);
      window.alert(errorMessage); // Show alert on login failure
    } finally {
      setLoading(false);
    }
  };

  return (


    <div className="flex justify-center items-center min-h-screen bg-gray-800 px-4 bg-cover bg-no-repeat " style={{backgroundImage: `url(${LogImg_2})`}}>
      <div className="bg-white/75 p-6 rounded-lg shadow-2xl w-full max-w-sm md:max-w-md lg:max-w-lg ">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
    
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded w-full bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded w-full bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded w-full"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
    
        {message && <p className="text-red-500 mt-2 text-center">{message}</p>}
    
        <p className="mt-2 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
    
  );
};

export default Login;
