import { useState, useContext, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { getToken } from '../../Utils/tokenUtils.js';

const Navbar = () => {

    useEffect(() => {
    const tokenData = getToken();
    if (tokenData) {
      setUser({ name: tokenData.name });
    }
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = (role) => {
    setIsDropdownOpen(false); // Close the dropdown after selecting
    if (role === 'student') {
      navigate('/login/student');
    } else if (role === 'faculty') {
      navigate('/login/faculty');
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate('/');
  }

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
        <li><Link smooth to='/#availability'>Location</Link></li>
      </ul>

      <div className="login-btn">
        {user ? (
          <>
            <button onClick={() => navigate('/form')}>Book</button>
            <button>{user.name}</button>
            <button onClick={logOut}>Logout</button>
          </>
        ) : (
          <div className="dropdown">
            <button onClick={toggleDropdown}>Login</button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={() => handleLogin('student')}>Student</button>
                <button onClick={() => handleLogin('faculty')}>Faculty</button>
              </div>
            )}
          </div>
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
