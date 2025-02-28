import { useState } from "react";
import axios from "axios";

const Reservation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/reservations", {
        name,
        email,
        date,
        time,
        guests,
      });
      alert("Reservation Successful!");
    } catch (error) {
      console.error("Error making reservation", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onSubmit={handleReservation}
      >
        <h2 className="text-2xl font-semibold mb-4">Book a Table</h2>
        
        <input 
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />

        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />

        <input 
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />

        <input 
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />

        <input 
          type="number"
          placeholder="Number of Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Reserve Now
        </button>
      </form>
    </div>
  );
};

export default Reservation;
