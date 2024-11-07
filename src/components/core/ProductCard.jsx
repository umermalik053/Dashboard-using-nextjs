import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link"
  import React from 'react'
  
  const ProductCard = ({product}) => {
    const { id, brand, category,color,description ,price,title,image} = product;
    
    return (
      <div className="hover: cursor-pointer">
       <Link href={`/product/${id}`}>
       <Card>
        <div className="flex justify-center w-[200px] h-[150px]">
        <img src={image} />
        </div>
        
  <CardHeader>
    <CardTitle>{brand}</CardTitle>
    <CardDescription>description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{brand}</p>
  </CardContent>
  <CardFooter>
    <p>${price}</p>
  </CardFooter>
</Card>
       </Link>

      </div>
    )
  }
  
  export default ProductCard
  