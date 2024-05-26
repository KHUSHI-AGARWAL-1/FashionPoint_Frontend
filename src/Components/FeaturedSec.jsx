import React, { useEffect, useState } from 'react'
import data from './../assets/data.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
function FeaturedSec() {
    const [prod,setprod]= useState([])
  useEffect(()=>{
    const getProd=async()=>{
      try{
       const result= await axios.get('https://fashionpoint-sr7i.onrender.com/items')
     
       const filteredData = result.data.filter((item) => item.price <= 150)
       setprod(filteredData);
    //    console.log(filteredData+" featured-product")
      }
      catch(err){
console.log(err+"Error")
      }

    }
    getProd();
  },[])
    
    // console.log(filteredData)

    var settings = { //slider settings
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-semibold text-3xl pb-3'>Top Picks</h1>
                    <p>Discover our curated selection of top picks from the latest fashion trends. From stylish apparel to trendy accessories, find everything you need to elevate your wardrobe.</p>
                </div>


                {/* Slider code */}
                <div>
                    <Slider {...settings}>
                        {prod.map((item)=>(
                            <Cards item={item} key={item.id}/> 
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FeaturedSec