import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
// import data from '../assets/data.json'
import axios from 'axios'
import Cards  from './Cards'
function Product() {
  const [prod,setprod]= useState([])
  useEffect(()=>{
    const getProd=async()=>{
      try{
       const result= await axios.get('https://fashionpoint-sr7i.onrender.com/items')
       console.log(result+" product")
       setprod(result.data);
      }
      catch(err){
console.log(err+"Error")
      }

    }
    getProd();
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-32 px-20 items-center justify-center text-center'>
            <h1 className='text-2xl  md:text-4xl font-semibold'>
          We'r delighted to have you <span className='text-pink-800'>Here</span>.
            </h1>
            <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quas quam sunt deleniti temporibus, fugit aperiam eum nobis possimus ea vel quisquam veritatis esse Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque illum cupiditate veritatis a, doloremque assumenda?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum veniam ducimus nostrum corrupti illum repellat.
            .
            </p>
            <Link to="/" className="btn bg-pink-800 text-white mt-4 hover:bg-pink-500 hover:text-black">Back</Link>
        </div>
<div className='mt-12 grid grid-cols-1 md:grid-cols-4'>

    {
       prod.map((item)=>(
        <Cards key={item.id} item={item}/>
       ))
    }
</div>
    </div>
    
    </>
  )
}

export default Product