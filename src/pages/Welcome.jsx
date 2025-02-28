import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoFastFood } from "react-icons/io5";
import { dataContext } from "../context/UserContext";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"; // For Animations
import { food_items } from "../food";
import {   FaUserEdit,FaChevronLeft, FaChevronRight, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import profilePic from "../videos/img1.jpg"; 
import AvocadoSalad_01 from "../image/AvocadoSalad_01.jpg";
import AvocadoSalad_02 from "../image/AvocadoSalad_02.jpg";
import AvocadoSalad_03 from "../image/AvocadoSalad_03.jpg";
import AvocadoSalad_04 from "../image/AvocadoSalad_04.jpg";
import { IoHome } from "react-icons/io5";


const dishes = food_items.slice(0, 6);


function About() {
  const { input, setInput, setShowCart } = useContext(dataContext);
  const { items } = useSelector((state) => state.cart);
  const sliderRef = useRef(null);
  const [profileBox, setProfileBox] = useState(false);
  const [name, setName] = useState("John Doe");
  const [image, setImage] = useState(profilePic);
  const [showMenu, setShowMenu] = useState(false); 


  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  
  
  
  return (
    <div className="bg-gray-100 min-h-screen">
         <nav className="w-full h-[70px] flex justify-between items-center px-6 md:px-8 bg-sky-100 fixed top-0 left-0 right-0 z-50">
           {/* Logo */}
           <div className="flex items-center space-x-3">
             <IoFastFood className="w-[30px] h-[30px] text-green-800" />
             <span className="text-xl md:text-2xl font-bold text-green-800">FoodZone</span>
           </div>
   
           {/* Desktop Navigation Links */}
           <div className="hidden md:flex items-center space-x-6">
             <Link to="/Home" className="text-green-500 hover:text-green-800 font-semibold">
               Home
             </Link>
             <Link to="/contact" className="text-green-500 hover:text-green-800 font-semibold">
               Contact
             </Link>
             <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition font-semibold">
               Login
             </Link>
           </div>
   
           {/* Mobile Menu Button */}
           <button
             className="md:hidden text-green-800 text-2xl"
             onClick={() => setShowMenu(!showMenu)}
           >
           <IoHome />
           </button>
   
           {/* Mobile Menu Dropdown */}
           {showMenu && (
             <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
               <Link to="/Home" className="text-green-500 hover:text-green-800 font-semibold">
                 Home
               </Link>
               <Link to="/contact" className="text-green-500 hover:text-green-800 font-semibold">
                 Contact
               </Link>
               <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition font-semibold">
                 Login
               </Link>
             </div>
           )}
   
           {/* Profile Dropdown */}
           <div className="relative">
             <button
               onClick={() => setProfileBox(!profileBox)}
               className="bg-gray-200 p-2 rounded-full flex items-center space-x-2"
             >
               <img src={image} alt="Profile" className="w-9 h-9 rounded-full" />
               <FaUserEdit className="text-gray-600" />
             </button>
   
             {/* Profile Edit Box */}
             {profileBox && (
               <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
                 <h3 className="text-lg font-bold mb-3">Edit Profile</h3>
   
                 {/* Display Uploaded Profile Image */}
                 {image && (
                   <img src={image} alt="Profile Preview" className="w-22 h-22 rounded-full mx-auto mb-3 border" />
                 )}
   
                 <input
                   type="text"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   className="w-full border p-2 rounded mb-3"
                   placeholder="Enter Name"
                 />
   
                 <input
                   type="file"
                   className="w-full border p-2 rounded mb-3"
                   onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                 />
   
                 <button
                   className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                   onClick={() => setProfileBox(false)}
                 >
                   Save Changes
                 </button>
               </div>
             )}
           </div>
         </nav>
     

      {/* Section 1 - Video Cover */}
      <section className="w-full h-[60vh] md:h-[92vh] max-[425px]:h-[45vh] max-[375px]:h-[35vh] max-[320px]:h-[40vh] flex justify-center items-center bg-black relative mt-15">
  <video 
    className="w-full h-full object-cover opacity-50" 
    autoPlay loop muted
  >
    <source src="https://media-hosting.imagekit.io//8538f28dcee24c42/v2.mp4?Expires=1835209151&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JHVRiQml~yki2MacFmbhPHL0QfPG5TSs5hX7MaMiiiae78ftXIfyhd~IDWRgRPKf58FVIJ5iDwMDvwFjG2ZNl0XbNqWFBvs5c8ghjdE7KpWx0QUNcb9-WakbYAYM4C286F7QTZPbwTkohI5gVQBzhtD4R6oyWl39iXZAxgIarA4Ge3GUfUtqSf1Ce4JHPTEk61f0w5prjMXiNrXDmdPdatIDotAi3VrYA4H2DYEjp3Gr-cj~o5lJan-ASmiSgA7jTlwqTPaogzsdsIxPFgOOfFeagTH8LqdmeYHaMOyhEzD-lVTIC27jrNj5-RP4NashYDMcpGLq48xTdIx4xtCjFA" />
  </video>
  <div className="absolute text-center text-white">
    <h1 className="text-3xl md:text-5xl max-[425px]:text-2xl max-[375px]:text-xl font-bold">About Our Restaurant</h1>
    <p className="text-lg md:text-xl max-[425px]:text-base max-[375px]:text-sm mt-2">Delicious food made with passion</p>
  </div>
</section>


{/* Section 2 - About Content */}
<section className="py-16 px-5 md:px-20 text-center font-serif  bg-sky-100">
  <div className="w-full h-auto flex flex-col items-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 tracking-wide">Why Choose Us?</h2>
    
    <p className="text-gray-700 mt-6 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
      At <strong className="font-semibold">Our Restaurant</strong>, we blend tradition with innovation.  
      Our skilled chefs use the finest ingredients to create dishes that are both **authentic and unforgettable**.  
      Every meal is crafted with passion, ensuring a perfect balance of taste and quality.
    </p>

    {/* Meet Our Chef */}
    <div className="mt-10 p-6  rounded-xl  max-w-3xl">
      <h3 className="text-3xl md:text-4xl font-semibold text-green-700">Meet Our Head Chef</h3>
      <p className="text-gray-600 mt-4 text-xl md:text-xl font-medium leading-8">
        <strong className="text-green-800 font-bold">Chef Antonio Rossi</strong> has over **20 years of culinary experience**,  
        specializing in Italian, French, and contemporary fusion cuisine.  
        His signature touch brings out the finest flavors, making every dish a masterpiece.  
        He believes in **"cooking with heart"**, ensuring every plate is a memorable experience.
      </p>
    </div>

    {/* Special Dish Highlight */}
   
    <div className="mt-10 p-6  rounded-xl   max-w-5xl">
      <h3 className="text-3xl md:text-3xl font-semibold text-green-700 mb-10 underline-offset-auto">Our Signature Dishes</h3>
   </div>
   <div className="min-h-screen p-6">
  {/* Card Container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
    
    {/* Dish 1 - Grilled Steak */}
    <div className="bg-white shadow-lg rounded-lg p-4 transition duration-300 hover:bg-sky-300  cursor-pointer">
      <img src={AvocadoSalad_01} alt="Grilled Steak" className="w-full h-90 object-cover rounded-md" />
      <h4 className="text-xl font-semibold text-green-800 mt-3">🍽️ Chef’s Special Grilled Steak</h4>
      <p className="text-gray-600 mt-2 text-sm">
        Tender beef, seasoned to perfection, served with roasted vegetables.
      </p>
    </div>

    {/* Dish 2 - Truffle Pasta */}
    <div className="bg-white shadow-lg rounded-lg p-4 transition duration-300 hover:bg-sky-300 cursor-pointer">
      <img src={AvocadoSalad_02} alt="Truffle Pasta" className="w-full h-90 object-cover rounded-md" />
      <h4 className="text-xl font-semibold text-green-800 mt-3">🍝 Handmade Truffle Pasta</h4>
      <p className="text-gray-600 mt-2 text-sm">
        Fresh pasta infused with black truffle and creamy parmesan sauce.
      </p>
    </div>

    {/* Dish 3 - Seafood Bouillabaisse */}
    <div className="bg-white shadow-lg rounded-lg p-4 transition duration-300 hover:bg-sky-300 cursor-pointer">
      <img src={AvocadoSalad_03} alt="Seafood Bouillabaisse" className="w-full h-90 object-cover rounded-md" />
      <h4 className="text-xl font-semibold text-green-800 mt-3">🍲 Seafood Bouillabaisse</h4>
      <p className="text-gray-600 mt-2 text-sm">
        A rich French-style stew with the freshest seafood and saffron broth.
      </p>
    </div>

    {/* Dish 4 - Avocado & Quinoa Salad */}
    <div className="bg-white shadow-lg rounded-lg p-4 transition duration-300 hover:bg-sky-300 cursor-pointer">
      <img src={AvocadoSalad_04} alt="Avocado Quinoa Salad" className="w-full h-90  object-cover rounded-md" />
      <h4 className="text-xl font-semibold text-green-800 mt-3">🥗 Organic Avocado & Quinoa Salad</h4>
      <p className="text-gray-600 mt-2 text-sm">
        A light yet fulfilling mix of organic greens, quinoa, and citrus dressing.
      </p>
    </div>

  </div>
</div>
</div>
</section>


 {/* Section 3 - Dish Card Slider */}
 <section className="py-12 px-5 md:px-20 text-center bg-sky-300">
    <div className="w-full h-[60vh] md:h-[80vh] ">
        <h2 className="text-3xl font-bold text-green-800 mb-8">Our Special Dishes</h2>
        <div className="relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-md" onClick={scrollLeft}>
            <FaChevronLeft className="text-gray-700" size={24} />
          </button>
          <div ref={sliderRef} className="flex overflow-hidden space-x-5 px-10">
            {dishes.map((dish, index) => (
              <motion.div key={index} className="min-w-[300px] md:min-w-[350px] p-6 bg-white shadow-lg rounded-xl" whileHover={{ scale: 1.05 }}>
                <img src={dish.food_image} alt={dish.food_name} className="w-full h-[200px] object-cover rounded-lg" />
                <h3 className="text-xl font-semibold mt-3">{dish.food_name}</h3>
                <p className="text-green-700 font-bold text-lg">${dish.price}</p>
              </motion.div>
            ))}
          </div>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-md" onClick={scrollRight}>
            <FaChevronRight className="text-gray-700" size={24} />
          </button>
        </div>
        </div>
      </section>

{/* Booking Form Section */}
<section className="py-12 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8">Reserve a Table</h2>
        <Link to ="/reservation" className="p-2 text-2xl font-sans bg-green-400 rounded-lg hover:bg-green-800 
             cursor-pointer transition-all duration-400 text-white ">BOOK NOW </Link>
        <p className="text-gray-600 mt-4 text-ls md:text-xl font-semibold leading-8">
        Book a Table at Our Restaurant 🍽️
        Enjoy a hassle-free dining experience by reserving your table in advance! Simply provide your name, email, date, time, and the number of guests, and we’ll ensure a perfect spot for you. Whether it’s a family dinner, a romantic evening, or a business meeting, we’ve got you covered.
        </p>
       
      </section>

     <footer className="bg-gray-900 text-white py-10 mt-10">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Brand & Description */}
          <div>
            <div className="flex items-center space-x-3">
              <IoFastFood className="w-10 h-10 text-green-500" />
              <h2 className="text-2xl font-bold">FoodZone</h2>
            </div>
            <p className="mt-3 text-gray-400">
              The best place to order fresh & delicious food, delivered straight to your doorstep.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold border-b-2 border-green-500 pb-2 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-green-400">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-green-400">About Us</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-green-400">Menu</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-400">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div>
            <h3 className="text-xl font-semibold border-b-2 border-green-500 pb-2 mb-3">Stay Connected</h3>
            <div className="flex space-x-4">
              <FaFacebookF className="text-gray-300 hover:text-blue-500" size={24} />
              <FaInstagram className="text-gray-300 hover:text-pink-500" size={24} />
              <FaTwitter className="text-gray-300 hover:text-blue-400" size={24} />
              <FaYoutube className="text-gray-300 hover:text-red-500" size={24} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
