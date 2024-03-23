import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null); // Change initial state to null
  
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProductDetails(res.data))
      .catch((error) => console.error("Error fetching product details:", error)); // Handle errors
      console.log(productDetails)
  }, [id]);
  
 const history = useNavigate()
 const handleHome=()=>{
    history('/')
 }
  

  return (
    <div style={{marginTop:'10%'}}>
       
        <img src={productDetails?.images[0]}/>
        <p>{productDetails?.title}</p>
       <span><b>${productDetails?.price}</b> <p>{productDetails?.rating}⭐</p></span> 
       <button className="button">BuyNow</button><br/>
       <button onClick={()=>handleHome()}>Back To Home</button>
     
    </div>
  );
};

export default ProductDetails;
