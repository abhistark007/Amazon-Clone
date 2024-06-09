import React from 'react'
import { MdError } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Fail() {
  return (
    <div className='flex flex-col w-full p-10 items-center gap-5'>
      <div className='text-3xl flex items-center gap-5'> <span className='text-green-600'><MdError /></span> Transaction Failed</div>
      <NavLink to="/">
        <div className='cursor-pointer bg-yellow-400 shadow-lg rounded-md p-2 text-xl duration-150 hover:scale-105'>Continue Shopping</div>
      </NavLink>
    </div>
  )
}
