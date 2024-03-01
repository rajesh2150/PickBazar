import React from "react";
import './NavBar.css'
const NavBar = () => {
  return (
    <div className="navbar-div">
        {/* left */}
      <div className="navbar-left">
        <div className="navbar-brand-name">
          <h2>PickBazar</h2>
        </div>
        <div>
          <select>
            <option>Mens</option>
            <option>Womens</option>
            <option>Groceries</option>
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
            <select>
                <option>Pages</option>
            </select>
        </div>
        <div>
            <button>JOIN</button>
        </div>
        <div>
            <button>Become a Seller</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
