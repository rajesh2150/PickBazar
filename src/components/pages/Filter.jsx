import React, { useEffect, useState } from "react";
import axios from "axios";
const Filter = ({setCategory}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);
 

  return (
    <div>
      <select onChange={(e)=>setCategory(e.target.value)}>
        {categories?.map((category) => (
          <option >{category}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
