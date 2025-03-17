import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";
import panda2 from "../img/panda2.jpg"

const products = [
  { image: {panda2}, name: "T-shirt 1", price: 0 },
  { image: "/img2.jpg", name: "T-shirt 2", price: 0 },
  { image: "/img3.jpg", name: "T-shirt 3", price: 0 }
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
