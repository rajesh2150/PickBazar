import React,{useState} from "react";
import "./NavBar.css";
import { FiSearch } from "react-icons/fi";
const NavBar = ({setCategory}) => {
  const [color,setColor] = useState(false)
  const [searchIcon,setSearchIcon] = useState(false)
  function changeColor(){
    if(window.scrollY>90){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }

  function showSearchIcon(){
    if(window.scrollY>340){
      setSearchIcon(true)
    }
    else{
      setSearchIcon(false)
    }
  }
  window.addEventListener("scroll",changeColor)
  window.addEventListener("scroll",showSearchIcon)
  return (
    <div className={`navbar-div ${color ? 'scrolled' : ''}`} >
      {/* left */}
      <div className="navbar-left">
        <div className="navbar-brand-name">
          <img
            className="brand-name-image"
            src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&w=1920&q=75"
          />
        </div>
        <div>
          <select className="dropdown" onChange={(e)=>setCategory(e.target.value)}>
            <option value={''}>👔 All</option>
            <option value={'mens-shirts'}>👚 Mens Shirts</option>
            <option value={'womens-dresses'}>👗 Womens Dresses</option>
            <option value={'groceries'}>🥕 Groceries</option>
            <option value={'smartphones'}>📱 Smart Phones</option>
            <option value={'tops'}>👕 Tops</option>
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
          <select className="page-dropdown" >
            <option>Pages</option>
            <option>About US</option>
            <option>FAQ</option>
          </select>
        </div>
       {searchIcon && <button  className={searchIcon ? ` search-icon-button ` : ''}><FiSearch className="icon" size={15}/></button>} 
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
