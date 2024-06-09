import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import OrderCard from './OrderCard';

export default function OrderHistoryPage() {

  // const items = useSelector((state)=> state.amazonReducer.orderHistory);
  const [items,setItems]=useState(null);

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('orderHistory'));
    // console.log(first)
    if(data){
      setItems(data);
    }else{
      setItems(null);
    }
  },[])

  return (
    <div className='w-full flex-col'>
      {
        items &&
        items.map((item,index)=> {
          console.log(item)
          return <OrderCard key={index} item={item}/>
        })
      }
    </div>
  )
}
