import React, { useState } from 'react';
import './Navbar.css';
import cart1 from '../../assets/shopping-bag.png';
import { Link } from 'react-router-dom';
import menu from '../../assets/view.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navBar">
      <div className="nav-container">
        
        <div className="shop-name">
          <Link to="/"><h2>OneStopKart</h2></Link>
        </div>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
            <li><Link to="/books" onClick={() => setMenuOpen(false)}>Books</Link></li>
            <li><Link to="/clothes" onClick={() => setMenuOpen(false)}>Clothes</Link></li>
            <li><Link to="/Electronic" onClick={() => setMenuOpen(false)}>Electronic</Link></li>
          </ul>
        </div>

        <div className="cart-icons">
          <Link to="/cart">
            <img src={cart1} alt="Cart-icon" />
          </Link>
        </div>
     {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menu} alt='menu-icon'></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
