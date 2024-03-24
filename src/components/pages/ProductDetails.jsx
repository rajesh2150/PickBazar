import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";
import { FaLessThan } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null); // Change initial state to null
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProductDetails(res.data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      ); // Handle errors
    console.log(productDetails);
  }, [id]);

  const history = useNavigate();
  const handleHome = () => {
    history("/");
  };

  return (
    <div className="product-details-container">
      <span
        style={{ position: "absolute", left: 10, top: 30, cursor: "pointer" }}
        onClick={() => handleHome()}>
        <FaLessThan />
      </span>
      <div className="product-details-image-cotainer">
        <img
          className="product-details-image"
          height={400}
          src={productDetails?.images[0]}
        />
        <div>
          <img src={productDetails?.images[1]} width={55} height={50} />
          <img src={productDetails?.images[2]} width={55} height={50} />
          <img src={productDetails?.images[3]} width={55} height={50} />
        </div>
      </div>
      <div className="product-details-wraper">
        <h2 className="product-details-title">{productDetails?.title}</h2>
        <p className="product-rating">{productDetails?.rating}⭐</p>

        <p className="product-details-description">
          {productDetails?.description}
        </p>
        <span>
        <p className="product-details-discount">{productDetails?.discountPercentage}% off</p>

        <b className="product-details-price">${productDetails?.price}</b>
        <s>${productDetails?.price*2}</s>
        </span>

        <button className="button">BuyNow</button>
        <br />
      </div>
    </div>
  );
};

export default ProductDetails;
