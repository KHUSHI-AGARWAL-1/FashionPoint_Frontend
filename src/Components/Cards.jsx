import React from 'react'

function Cards({item}) {
    // console.log(item)
    return(
        <>
            <div className='mt-6 my-6 p-4 transition-transform duration-300 ease-in-out cursor-pointer transform hover:scale-105'>
                <div className="card w-80 h-112 bg-base-100 shadow-xl   dark:bg-slate-900 dark:text-white dark:border">
                   <figure className="h-48 w-full"><img src={item.image} alt="Shoes" /> </figure> 
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge bg-pink-700 text-white py-3">NEW</div>
                        </h2>
                        <p>{item.desc}</p>
                        <div className="card-actions justify-between mt-2">
                            <div className="badge badge-outline hover:bg-pink-800 hover:text-white duration-200  py-3">{item.price}</div>
                            <div className="badge badge-outline hover:bg-pink-800 hover:text-white duration-200  py-3 ">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Cards