import React, { useEffect, useState } from 'react'
import { CCarousel,CCarouselItem,CImage } from '@coreui/react'
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import '@coreui/coreui/dist/css/coreui.min.css'
import { useSelector, useDispatch } from 'react-redux'
import { setProductsInCart,setProductsInStore } from '../../state/store';
import ProductCard from './ProductCard';

export default function HomePage() {

  const [product,setProduct]=useState(null);
  const dispatch = useDispatch()
  // const product=useSelector((state)=> state.amazonReducer.productsInStore)

  async function getProd(){
    const productData=await fetch("https://fakestoreapi.com/products");
    const respsone=await productData.json();
    console.log(respsone[0]);
    dispatch(setProductsInStore(respsone))
    setProduct(respsone);
  }

  useEffect(()=>{
    getProd();
  },[])








  return (
    <div className='relative flex flex-col'>
      {/* Carasoul */}
      <div>
        <CCarousel controls indicators >
          <CCarouselItem>
            <CImage className="d-block w-100" src={img1} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={img2} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={img3} alt="slide 3" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={img4} alt="slide 4" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={img5} alt="slide 5" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={img6} alt="slide 6" />
          </CCarouselItem>
        </CCarousel>
      </div>


      {/* Product Data */}
      <div className='grid grid-cols-3 gap-5 p-5 absolute top-96 max-[1254px]:grid-cols-2 max-[830px]:grid-cols-1 z-20'>
      {
        product && product.length>0 ? 
        product.map((item)=>{
          return <ProductCard item={item} key={item.id}/>
        })
        :null
      }
      </div>
    </div>
  )
}
