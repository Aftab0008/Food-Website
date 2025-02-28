import React from 'react';
// {image} from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { AddItem } from '../redux/cartSlice';

function Card({name,image,id,price,type}) {
  const dispatch=useDispatch()
  const { items } = useSelector(state => state.cart);

    

  const handleCart=()=>{
    
    dispatch(AddItem([...items, { id: id, name: name, price: price, image: image, qty: 1}]));
    
  }
    return(
<div className='w-[280px] h-[380px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 cursor-pointer transition-all duration-100'>
    <div className='w-[100%] h-[60%] overflow-hidden rounded-lg '>
  <img src={image} alt='' className='object-cover rounded-lg'/>
    </div>

    <div className='text-2xl font-semibold'>
       {name}
    </div>

    <div className='w-[100%] flex justify-between items-center '>
  <div className='text-lg text-green-400 font-semibold'>{price}</div>
  <div className='flex justify-center items-center gap-2 text-green-400
  text-lg font-semibold'>{type==="veg"?<LuLeafyGreen />:<GiChickenOven />}
  <span>{type}</span></div>
    </div>
<button className='w-full p-3 bg-green-400 rounded-lg hover:bg-green-800 
             cursor-pointer transition-all duration-400 text-white 
             font-semibold' onClick={handleCart}>Add To Dish</button>
</div>
    )}

    export default Card;