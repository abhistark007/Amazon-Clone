import React from 'react'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Success() {
  return (
    <div className='flex flex-col w-full p-10 items-center gap-5'>
      <div className='text-3xl flex items-center gap-5'> <span className='text-green-600'><IoCheckmarkDoneCircle /></span> Thank you for shopping with us!</div>
      <NavLink to="/">
        <div className='cursor-pointer bg-yellow-400 shadow-lg rounded-md p-2 text-xl duration-150 hover:scale-105'>Continue Shopping</div>
      </NavLink>
    </div>
  )
}
