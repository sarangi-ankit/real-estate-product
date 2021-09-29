import React, { useState,useEffect } from 'react'
import Data from '../Data'
import ProductItems from './ProductItems'

const ProductList = () => {

    const [items,setItems]=useState([])

   useEffect(()=>{
       setItems(Data)
   },[])

   
    return (
        <div>
            <h1>Real-Estate</h1>
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
    )
}

export default ProductList
