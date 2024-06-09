import React, { useEffect, useState } from 'react'
import skyfallAd from '../../assets/sad.jpg';
import { useDispatch, useSelector } from 'react-redux';
import CartItemCard from './CartItemCard';
import { setOrderHistory } from '../../state/store';

import getStripe from '../../lib/getStripe';

export default function CartPage() {



  const items = useSelector((state) => state.amazonReducer.productsInCart);
  const myOrder=JSON.parse(localStorage.getItem('orderHistory'));
  const dispatch= useDispatch();

  function getTotalCostPlusGST(){
    let cash=0;
    items.map((item)=>{
      cash+=item.price;
    })
    return `\$ ${cash} `;
  }

  function getTotalCostInteger(){
    let cash =0;
    items.map((item)=>{
      cash+=item.price;
    })
    return cash;
  }

  

  async function handleCheckout(e) {
    // e.preventDefault();
    // Added Order History
    // console.log(items);
    // items.push({paid:getTotalCostInteger()});
    // console.log(items);

    let temp=[{paid:getTotalCostInteger()},...items];
    console.log(temp);

    let myCart=[];
    if(!myOrder){
      myCart=[[...temp]];
    }else{
      
      myCart=[...myOrder,[...temp]];
    }
    

    // dispatch(setOrderHistory(myCart));
    // console.log(myCart)
    localStorage.setItem('orderHistory',JSON.stringify(myCart))


    const stripe = await getStripe();

    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          // price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
          price: 'price_1PPRdgDgwSN5FK8e6MjgwJYK',
          quantity: 1,
          
        },
      ],
      
      mode: 'subscription',
      successUrl: `http://localhost:5173/success`,
      cancelUrl: `http://localhost:5173/cancel`,
      customerEmail: 'customer@email.com',

    }).then(result => {
        if (result.error) {
            alert(result.error.message);
        }
    })
    
    console.log(error.message);
  }


  return (
    <div className={`${items.length === 0 ? "flex flex-col " : "flex"} w-full bg-[#F3F4F6] px-3 py-2 gap-5 min-h-screen`}>
      {/* LEFT */}
      <div className={`flex flex-col ${items.length === 0 ? "" : "flex-[0.75]"} gap-3`}>
        {/* banner */}
        <img src={skyfallAd} alt="" className='h-96 object-contain' loading='lazy' />



        {/* details of products */}
        <div className='flex flex-col bg-white shadow-lg rounded-md p-3'>
          {
            items.length === 0 ?
              <div className='text-3xl '>
                Your Amazon Basket is empty.
              </div> :
              <div className='text-3xl '>
                Your Shopping Basket
              </div>
          }
          <br />
          <hr />
          {
            items.length===0?null:
            items.map((item,index)=>{
              return <CartItemCard key={index} item={item} index={index}/>
            })
          }


        </div>


      </div>






      {/* Right / Checkout details */}
      <div className={`${items.length === 0 ? "" : "flex-[0.25]"} bg-white shadow-lg rounded-md flex flex-col `}>
          {
            items.length===0?null:
            <div className='flex flex-col items-center gap-2 p-4'>
              <div className='font-bold'><span className='font-normal'>Subtotal ({items.length} items) </span>{getTotalCostPlusGST()}</div>

              <div 
              onClick={handleCheckout}
              className='cursor-pointer duration-200 hover:scale-105 bg-yellow-400 rounded-md shadow-md p-2 flex justify-center items-center w-fit'>
                Proceed To Checkout
              </div>
            </div>
          }
      </div>

    </div>
  )
}
