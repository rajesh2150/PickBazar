import React, { useEffect, useState } from "react";
import axios from "axios";
import './Filter.css'
const Filter = ({setCategory}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);
 
const [sticky,setSticky] = useState(false)
  function handleSticky(){
   if(window.scrollY>780){
      setSticky(true)
   }
   else{
    setSticky(false)
   }
  }

  window.addEventListener("scroll",handleSticky)
  return (
    <div className={`dropdown-container ${sticky ? 'sticky' :''}`}>

       <p>{categories[0]}</p>
       <p>{categories[1]}</p>
       <p>{categories[2]}</p>
       <p>{categories[3]}</p>
       <p>{categories[4]}</p>
       <p>{categories[5]}</p>
       <p>{categories[6]}</p>
       <p>{categories[7]}</p>
       <select>
        <option>Mens</option>
        <option>mens-shirts</option>
        <option>"mens-shoes</option>
        <option>mens-watches</option>
       </select>

       <select>
        <option>Women</option>
        <option>womens-shoes</option>
        <option>womens-dresses</option>
        <option>womens-watches</option>
        <option>womens-bags</option>
        <option>womens-jewellery</option>
       </select>

   
    </div>
  );
};

export default Filter;
