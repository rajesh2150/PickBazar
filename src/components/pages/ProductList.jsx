import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";
const ProductList = ({category}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    {category?axios.get(`https://dummyjson.com/products/category/${category}`).then(res=>setProducts(res.data.products)): axios
    .get(`https://dummyjson.com/products`)
    .then((res) => setProducts(res.data.products));}
   
  }, [category]);

  return (
    <div className="product-list-container">
      {products?.map((product, index) => (
        <div key={product.id} className="product-container">
          <div className="product-image-container">
            <img
              className="product-image"
              
              src={product.images[0]}
            />
          </div>
          <div className="product-description-container">
            <p>{product.title}</p>
            <div className="product-price-buy-container">
              <b>${product.price}</b>
              <button>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
