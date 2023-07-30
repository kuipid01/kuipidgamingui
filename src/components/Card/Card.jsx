/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./card.scss";

const Card = ({ featuredProduct, type }) => {
  {
    return (
      <div className="featuredProduct" key={featuredProduct.id}>
  
        <img src={featuredProduct.img} alt="" />

        <p className="name">{featuredProduct.name}</p>
        <p className="make">{featuredProduct.make}</p>
        <p className="price">#{featuredProduct.price}</p>

       
        <div className="browse">
          <div className="fcenter">
            <AiOutlinePlus />
          </div>
          <span>Add to cart</span>
        </div>
      </div>
    );
  }
};

export default Card;
