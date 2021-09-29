import React from 'react'
import { useState } from 'react'

const ProductItems = ({list}) => {
    const [item , setItem] = useState(true)

    const ref = React.useRef(null)

    const addData=()=>{
        if(item===true){
            console.log( ref.current.style.display)
            ref.current.style.display="block"
            setItem(false)
        }else{
            ref.current.style.display="none"
            setItem(true)
        }
    }
    return (
        <div>
            <div className="imagesec">
                <img src={list.photo}  alt="item1.jpg" />
            </div>
            <div className="propertyType">
                <h2>{list.propertyType}</h2>
                <h3>${list.price}</h3>
                <p>{list.formattedAddress}</p>
            </div>
            <div>
                <button onClick={addData}>More Details</button>
                <div ref={ref} style={{display:"none"}}>
                    <ul>
                        <li><span>Address:</span> {list.address}</li>
                        <li><span>bathrooms:</span> {list.bathrooms}</li>
                        <li><span>City:</span> {list.city}</li>
                        <li><span>Country:</span> {list.county}</li>
                        <li><span>PublishDate:</span> {list.publishedDate}</li>
                        <li><span>SquareFootage:</span> {list.squareFootage}</li>
                        <li><span>Zipcode:</span> {list.zipcode}</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default ProductItems
