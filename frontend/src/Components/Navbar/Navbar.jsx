import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <Link to="/" className="logo">
        <img src={assets.logo} alt="Rhyno Logo" />
      </Link>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link smooth to='/#home'>Home</Link></li>
        <li><Link smooth to='/#availability'>Availability</Link></li>
        <li><Link smooth to='/#aboutus'>About Us</Link></li>
        <li><Link to='/contactus'>Contact us</Link></li>
        <a onClick={() => scrollToSection('about-us')}>Location</a>
      </ul>

      <div className="login-btn">
        {user ? (
          <>
            <button onClick={() => navigate('/form')}>Book</button>
            <button>{user.name}</button>
          </>
        ) : (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
