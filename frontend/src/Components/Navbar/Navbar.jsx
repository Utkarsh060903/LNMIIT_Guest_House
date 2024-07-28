// import React , {useState} from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';
// import { HashLink as Link } from 'react-router-hash-link';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const scrollToSection = (id) => {
//     document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
//   };

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navigate = useNavigate()

//   return (
//     <div className='navbar'>
//       <Link to="/" className="logo">
//         <img src={assets.logo} alt="Rhyno Logo" />
//       </Link>
//       <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
//         <li><Link smooth to='/#home'>Home</Link></li>
//         <li><Link smooth to='/#products'>Availability</Link></li>
//         <li><Link to='/aboutus'>About Us</Link></li>
//         <li><Link to='/contactus'>Contact us</Link></li>
//         <a onClick={() => scrollToSection('about-us')}>Location</a>
//       </ul>

//       <div className="login-btn">
//         <button onClick={navigate('/form')}>Book</button>
//         <button>Login</button>
//       </div>

//       <div className="hamburger" onClick={toggleMenu}>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

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
        <button onClick={() => navigate('/form')}>Book</button>
        <button onClick={() => navigate('/login')}>Login</button>
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

