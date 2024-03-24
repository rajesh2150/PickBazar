import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";
import { IoMdAdd } from "react-icons/io";
import {useNavigate} from 'react-router-dom'
const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    {
      category
        ? axios
            .get(`https://dummyjson.com/products/category/${category}`)
            .then((res) => setProducts(res.data.products))
        : axios
            .get(`https://dummyjson.com/products`)
            .then((res) => setProducts(res.data.products));
    }
  }, [category]);
//showProducts
const history=useNavigate()
  const handleShowProduct=(productId)=>{
    console.log(productId)
    history(`product/${productId}`)
  }
  return (
    <div className="product-list-container">
      {products?.map((product, index) => (
        <div key={product.id} className="product-container">
          <div className="product-image-container">
            <img className="product-image" src={product.images[0]} />
          </div>

          <p className="product-title">{product.title}</p>

          <div className="product-price-buy-container">
           <span><b>${product.price}</b><s className="strike-price">${product.price*2}</s></span> 
            <button onClick={()=>handleShowProduct(product.id)} className="add-button"><IoMdAdd className="add-icon" size={17}/></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
