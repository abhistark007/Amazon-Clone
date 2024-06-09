import React from 'react'

export default function OrderCard(props) {
  return (
    <div className='flex flex-wrap border-4 rounded-lg m-2 flex-col'>
        <div className='font-bold text-xl'>
            <span className='font-normal'>Total Cost </span>${props.item[0].paid}
        </div>
       <div className='flex flex-wrap gap-5 p-5'>
       {
            props.item.map((item,index)=> {
                return <div key={index}>
                    <img src={item.image} alt="" className='w-[100px]'/>
                </div>
            })
        }
       </div>
    </div>
  )
}
