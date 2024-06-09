import React from 'react'
import { useDispatch } from 'react-redux';
import { setProductsInCart,setProductsInStore } from '../../state/store';
import toast from 'react-hot-toast';

export default function ProductCard(props) {
    const {price,title,image,description, category} = props.item;
    const dispatch = useDispatch();

    function handleAddToCart(){
        try{
            dispatch(setProductsInCart(props.item));
            toast.success(`"${title}" Added To Cart`)
        }catch(e){
            toast.error("Error Occured While Adding To Cart")
        }
    }


  return (
    <div className='bg-white flex flex-col gap-2 w-fit rounded-lg shadow-lg p-3 justify-between'>
        <div className='flex justify-end text-gray-600'>{category}</div>
        <div className=' flex justify-center'><img src={image} alt="" className='h-[400px] object-contain'/></div>
        <div className='flex flex-col gap-2'>
        <div className='w-full text-xl'>{title}</div>
        <div className=''>{description.length<100?description:description.substring(0,100)+"..."}</div>
        <div className='text-xl'>$ {price}</div>
        <div 
        onClick={handleAddToCart}
        className='w-full bg-yellow-400 flex justify-center p-2 rounded-md hover:scale-105 duration-150 shadow-xl cursor-pointer'>Add to Cart</div>
        </div>
    </div>
  )
}
