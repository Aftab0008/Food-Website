import React from 'react';
import image1 from "../assets/image1.avif";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RemoveItem } from "../redux/cartSlice";
import { useDispatch, useSelector } from 'react-redux';
function Card2({ name, id, price, image, qty }) { 
    const dispatch=useDispatch()

    const { items } = useSelector(state => state.cart);
   
        
        const handleCart = () => {
            dispatch(RemoveItem(id)); // Correctly dispatching the item ID
        };
    return (
        <div className='w-full h-[120px] p-3 shadow-lg rounded-lg mt-5 flex justify-between'>
            {/* Left Side: Image & Info */}
            <div className='w-[60%] h-full flex gap-5'>
                <div className='w-[50%] h-full overflow-hidden rounded-lg'>
                    <img src={image || image1} alt={name} className='object-cover w-full h-full' />
                </div>
                <div className='w-[40%] h-full flex flex-col gap-2'>
                    <div className='text-lg text-gray-600 font-semibold'>{name}</div>
                    <div className='w-[110px] h-[40px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-300'>
                        <button className='w-[30%] h-full text-xl text-green-900 bg-white flex justify-center items-center'>-</button>
                        <span className='w-[40%] h-full text-xl text-green-900 bg-green-400 flex justify-center items-center'>{qty}</span>
                        <button className='w-[30%] h-full text-xl text-green-900 bg-white flex justify-center items-center'>+</button>
                    </div>
                </div>
            </div>

            {/* Right Side: Price & Delete */}
            <div className='flex flex-col justify-start items-end gap-7'>
                <span className='text-m text-green-400 font-semibold'>${price}</span>
                <RiDeleteBin6Line className='w-[20px] h-[20px] text-red-400 cursor-pointer'onClick={handleCart} />
            </div>
        </div>
    );
}

export default Card2;