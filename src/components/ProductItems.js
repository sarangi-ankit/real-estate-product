import React from "react";
import { useState } from "react";

const ProductItems = ({ list }) => {
  const [item, setItem] = useState(true);

  const ref = React.useRef(null);
  const btnRef = React.useRef(null);

  const addData = () => {
    if (item === true) {
      console.log(ref.current.style.display);
      ref.current.style.display = "block";
      setItem(false);
      btnRef.current.innerHTML = "Show Less"
    } else {
      ref.current.style.display = "none";
      btnRef.current.innerHTML = "Show More"
      setItem(true);
    }
  };
  return (
    <div className="product-item">
      <div className="product-item__image">
        <img src={list.photo} alt="item1.jpg" />
      </div>
      <div className="product-item__info">
        <div className="product-item__details">
          <h2 className="property">Property: {list.propertyType}</h2>
          <h3 className="price">Price: ${list.price}</h3>
          <p className="adress">Address: {list.formattedAddress}</p>
        </div>
        <div className="product-item__know-more">
          <button onClick={addData} ref={btnRef}>Show More</button>
          <div
            className="product-item__know-more--container"
            ref={ref}
            style={{ display: "none" }}
          >
            <ul className="elements">
              <li className='box'>
                <span>Address:</span> {list.address}
              </li>
              <li className='box'>
                <span>Bathrooms:</span> {list.bathrooms}
              </li>
              <li className='box'>
                <span>City:</span> {list.city}
              </li>
              <li className='box'>
                <span>Country:</span> {list.county}
              </li>
              <li className='box'>
                <span>PublishDate:</span> {list.publishedDate}
              </li>
              <li className='box'>
                <span>SquareFootage:</span> {list.squareFootage}
              </li>
              <li className='box'>
                <span>Zipcode:</span> {list.zipcode}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
