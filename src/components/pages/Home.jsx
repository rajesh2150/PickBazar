import React from "react";
import "./Home.css";
import { IoSearchOutline } from "react-icons/io5";
const Home = () => {
  return (
    <div>
      <div className="s">
        <img
          className="category-image"
          src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F908%2Fcloths.png&w=1920&q=75"
        />
      </div>
      <div className="search-container">
        <h1 className="category-tag">Shop your designer dresses</h1>
        <p className="category-tag-line">
          Ready to wear dresses tailored for you online. Hurry up while stock
          lasts.
        </p>
        <div>
          <input className="search-bar" type="search" placeholder="Search your products from here" />
          <button className="search-button">
            <IoSearchOutline /> <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
