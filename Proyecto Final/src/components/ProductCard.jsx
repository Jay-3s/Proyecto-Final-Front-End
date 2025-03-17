import React from "react";
import "../styles/ProductCard.css";
import panda2 from "../img/panda2.jpg"

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <img src={panda2} alt={name} />
      <p>{name}</p>
      <span>${price}</span>
    </div>
  );
};

export default ProductCard;
