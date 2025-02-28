import React, { useContext, useEffect, useState } from 'react';
import { IoFastFood } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoIosCart, IoIosLogIn } from "react-icons/io";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Nav() {
   const { input, setInput, cate, setCate, setShowCart } = useContext(dataContext);
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const newlist = food_items.filter((item) =>
         item.food_name.toLowerCase().includes(input.toLowerCase())
      );
      setCate(newlist);
   }, [input]);

   const { items } = useSelector(state => state.cart);

   const logoutHandler = async (e) => {
      e.preventDefault();
      
      try {
         const response = await axios.post("http://localhost:5000/api/logout");

         console.log(response.data); // Debugging
     
         // Remove token from localStorage
         localStorage.removeItem("token");
          navigate("/")
         // Redirect user to login page
      } catch (error) {
        console.error("Logout error:", error.response?.data?.error || "Something went wrong!");
      }
    };

   return (
      <div className='w-full h-[70px] flex justify-between items-center px-5 p-2 pt-5 md:px-8'>
       
         <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
            <IoFastFood className='w-[30px] h-[30px] text-green-800' />
         </div>

         {/* Search Bar */}
         <form 
            className='w-[40%] md:w-[50%] lg:w-[60%] h-[50px] flex items-center px-5 gap-3 bg-white rounded-md shadow-xl border border-gray-300' 
            onSubmit={(e) => e.preventDefault()}
         >
            <FaSearch className='text-green-800 w-[20px] h-[20px]' />
            <input 
               type="text" 
               placeholder='Search Items...'
               className='w-full outline-none text-[14px] md:text-[18px] p-1' 
               onChange={(e) => setInput(e.target.value)} 
               value={input} 
            />
         </form>

         {/* Right Side (Login & Cart) */}
         <div className="flex items-center gap-5">
            {/* Logout Button */}
            <button 
               onClick={logoutHandler} 
               disabled={loading}
               className="flex justify-center items-center bg-white text-white w-[60px] h-[60px] px-4 py-2 rounded-md font-semibold text-[14px] md:text-[16px] shadow-md hover:bg-green-700 transition-all"
            >
              {loading ? "Logging out..." : <IoIosLogIn className='w-[30px] h-[30px] text-green-950' />}
            </button>

            {/* Cart Icon */}
            <div 
               className='relative w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl cursor-pointer' 
               onClick={() => setShowCart(true)}
            >
               <span className='absolute top-1 right-2 text-green-800 font-semibold text-[16px]'>
                  {items.length}
               </span>
               <IoIosCart className='w-[30px] h-[30px] text-green-800' />
            </div>
         </div>
      </div>
   );
}

export default Nav;