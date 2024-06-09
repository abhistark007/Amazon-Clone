import React from 'react'
import { IoMdMenu } from "react-icons/io";

export default function SubHeader() {
  return (
    <div className='flex bg-[#232F3E] w-full px-4 py-2 text-white items-center gap-6 max-[830px]:hidden'>
        <div className='text-xl cursor-pointer'><IoMdMenu /></div>
        <div className='cursor-pointer hover:underline duration-100'>All</div>
        <div className='cursor-pointer hover:underline duration-100'>Prime Video</div>
        <div className='cursor-pointer hover:underline duration-100'>Amazon Business</div>
        <div className='cursor-pointer hover:underline duration-100'>Today's Deals</div>
        <div className='cursor-pointer hover:underline duration-100'>Electronics</div>
        <div className='cursor-pointer hover:underline duration-100'>Food & Grocery</div>
        <div className='cursor-pointer hover:underline duration-100'>Prime</div>
        <div className='cursor-pointer hover:underline duration-100'>Buy Again</div>
        <div className='cursor-pointer hover:underline duration-100'>Shopper Toolkit</div>
        <div className='cursor-pointer hover:underline duration-100'>Health & Personal Care</div>
    </div>
  )
}
