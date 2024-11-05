"use client"

import ProductCard from '@/components/core/ProductCard'
import React, { useEffect, useState } from 'react'

const product = () => {
  const [AllProducts,SetAllProduct] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.in/api/products')
     .then(response => response.json())
     .then(data => SetAllProduct(data.products))
  }, [])
  console.log(AllProducts)

  return (
    <div className='flex flex-wrap gap-8 justify-center'>
      {AllProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      
    </div>
  )
}

export default product
