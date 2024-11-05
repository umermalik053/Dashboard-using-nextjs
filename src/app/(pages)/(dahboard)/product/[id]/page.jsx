"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ProductDetail = () => {
    const [AllProducts,SetAllProduct] = useState([])
    const [FilterProduct,SetFilterProduct] = useState([])
    useEffect(() => {
      fetch('https://fakestoreapi.in/api/products')
       .then(response => response.json())
       .then(data => SetAllProduct(data.products))
    }, [])
    
    if (!AllProducts.length) return <div>Loading...</div>
    const params = useParams()
    const id = params?.id
    const Product = AllProducts.find(product => product.id === parseInt(id))

    
    

    




  return (
    <div>
        <div className="flex w-[100%] my-8">
            
            <div className="w-[35%] mx-12">
                <img src={Product?.image} alt="" />
            </div>
            <div className="w-[50%]">
                <h1 className='text-[32px] m-1'>{Product?.title}</h1>
                <p> <span className='font-bold'>Description:</span> {Product?.description}</p>

                <h2 className='mt-6 text-[22px]'>
                  <span className="font-bold">Brand: </span>
                  <span className="font-extralight">{Product?.brand}</span>
                  </h2>
                <h2 className=' text-[22px]'>
                  <span className="font-bold">Model: </span>
                   <span className="font-extralight">{Product?.model}</span>
                    </h2>
                <h2 className=' text-[22px]'>
                  <span className="font-bold">Category: </span> 
                <span className="font-extralight"> {Product?.category}</span>
                </h2>
                <p className='mt-4 text-[32px]'>Price: ${Product?.price}</p>

                <button className='w-[100%] mt-4 bg-slate-500 py-3 text-white rounded-lg '>Add to Cart</button>
            </div>
            
            
        <div className=""></div>
        </div>
      
    </div>
  )
}

export default ProductDetail
