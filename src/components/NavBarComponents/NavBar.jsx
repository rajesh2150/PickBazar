import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar-div">
      {/* left */}
      <div className="navbar-left">
        <div className="navbar-brand-name">
          <img
            className="brand-name-image"
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75"
          />
        </div>
        <div>
          <select className="dropdown">
            <option>👖 Mens</option>
            <option>👗 Womens</option>
            <option>🥕 Groceries</option>
            <option>📱 Smart Phones</option>
          </select>
        </div>
      </div>
      {/* Right */}
      <div className="navbar-right">
        <div>
          <p>Shop</p>
        </div>
        <div>
          <p>Offers</p>
        </div>
        <div>
          <p>Contact</p>
        </div>

        <div>
          <select className="page-dropdown">
            <option>Pages</option>
            <option>About US</option>
            <option>FAQ</option>
          </select>
        </div>
        <div>
          <button className="button">Join</button>
        </div>
        <div>
          <button className="button">Become a Seller</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
