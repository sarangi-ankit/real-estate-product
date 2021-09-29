import React, { useState,useEffect } from 'react'
import Data from '../Data'
import ProductItems from './ProductItems'

const ProductList = () => {

    const [items,setItems]=useState([])

   useEffect(()=>{
       setItems(Data)
   },[])

   
    return (
        <div className="page padding-right-left">
            <h1 className="page-heading">Real-Estate</h1>
            <div className="product-page">
            {
                items.map((item,index)=>{
                    return (
                        <ProductItems 
                            key={index}
                            list={item}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

export default ProductList
