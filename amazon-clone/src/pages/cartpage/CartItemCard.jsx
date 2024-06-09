import React from 'react'
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductsInCart,setProductsInCart } from '../../state/store';

export default function CartItemCard(props) {
    const { price, title, image, description, category } = props.item;
    const dispatch=useDispatch();
    const cartData=useSelector((state)=>state.amazonReducer.productsInCart);



    function handleRemoveItem(){
        console.log(cartData);
        let updatedData=[...cartData];
        console.log(updatedData);
        updatedData= updatedData.filter((item,index)=>index!==props.index);
        console.log(updatedData);
        dispatch(removeProductsInCart(updatedData));
    }


    function handleAddItem(){
        console.log(cartData);
        let updatedData=[...cartData];
        console.log(updatedData);
        updatedData= updatedData.filter((item,index)=>item.id===props.item.id);
        console.log(updatedData);
        dispatch(setProductsInCart(updatedData[0]));
    }



    return (
        <div className='flex items-center w-full pl-4 pt-4 pb-4 gap-5'>
            {/* left */}
            <div className='flex items-center gap-4 w-[80%]'>
                {/* <div className='w-full h-full'>
                <img src={image} alt="" className='w-[350px]'/>
            </div> */}
                <Avatar
                    alt=""
                    src={image}
                    sx={{ width: 260, height: 260 }}
                    className='border-[6px] border-purple-600 shadow-lg'
                />


                <div className='flex flex-col'>
                    <div className='font-bold text-xl'>{title}</div>
                    <div>{description}</div>
                    <div className='font-bold text-xl'>$ {price}</div>
                </div>
            </div>





            {/* Right */}
            <div className='flex flex-col w-[20%] gap-2'>
                <div 
                onClick={handleAddItem}
                className='bg-yellow-400 rounded-md shadow-lg cursor-pointer duration-150 hover:scale-105 p-2'>Add To Basket</div>
                <div 
                onClick={handleRemoveItem}
                className='bg-yellow-400 rounded-md shadow-lg cursor-pointer duration-150 hover:scale-105 p-2'>Remove From Basket</div>
            </div>

        </div>
    )
}
