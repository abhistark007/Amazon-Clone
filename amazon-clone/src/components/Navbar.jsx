import React, { useEffect } from 'react'
import amazonLogo from '../assets/amzlogo2.png';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {


    const itemCount=useSelector((state)=>state.amazonReducer.productsInCart);
    

  return (
    <div className='flex w-full bg-[#131921] gap-5 items-center px-5 py-2'>
        {/* logo */}
        <NavLink to="/">
        <img src={amazonLogo} alt="Amazon" className='w-[150px] cursor-pointer pt-6'/>
        </NavLink>


        {/* non logo section */}
        <div className='flex  w-full h-full justify-between items-center gap-7'>
            {/* Left Section : textfield */}
            <div className='flex h-11 items-center w-[70%] max-[530px]:hidden'>
                <input type="text" placeholder='Search...' className='h-full w-full pl-3 pr-3 pt-1 pb-1 outline-none rounded-l-lg'/>
                <div className='duration-200 hover:scale-105 hover:shadow-xl bg-yellow-500 cursor-pointer h-full text-lg flex justify-center items-center p-3 rounded-r-lg'>
                <FaSearch/>
                </div> 
                
            </div>



            {/* buttons and carts and stuff */}
            <div className='flex items-center gap-10 '>
                <div className='flex flex-col text-white hover:underline cursor-pointer max-[830px]:hidden'>
                    <div>Sign In</div>
                    <div className='font-bold'>Account & Lists</div>
                </div>

                <div className='flex flex-col text-white hover:underline cursor-pointer max-[830px]:hidden'>
                    <div>Returns</div>
                    <div className='font-bold'>& Orders</div>
                </div>

                <NavLink to={"/cart"} className='max-[400px]:hidden'>
                <div 
                className='flex text-white items-center gap-2 hover:underline cursor-pointer relative'>
                    <div className='flex justify-center items-center h-[20px] w-[20px] bg-yellow-500 text-black font-bold 
                     rounded-full absolute z-20 -top-3 left-4 shadow-2xl'>{itemCount.length}</div>
                    <div className='text-3xl'><FaShoppingCart /></div>
                    <div className='font-bold'>Basket</div>
                </div>
                </NavLink>

            </div>
        </div>
    </div>
  )
}
