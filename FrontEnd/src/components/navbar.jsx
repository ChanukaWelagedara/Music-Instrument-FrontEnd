import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingCart, UserSwitch } from "phosphor-react";
import '../components/navbar.css';

export const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);
  const [isLogoutHovered, setIsLogoutHovered] = useState(false);

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    setIsLogged(!!userDetails);

    if (userDetails && userDetails.firstName) {
      setUserName(userDetails.firstName);
    }
  }, []);
  
  useEffect(() => {
    if (location.pathname === "/user/Login") {
      setActiveLink("Login");
    } else if (location.pathname === "/user/Singup") {
      setActiveLink("Singup");
    } else if (location.pathname === "/") {
      setActiveLink("Home");
    } else if (location.pathname === "/about") {
      setActiveLink("About");
    } else if (location.pathname === "/account") {
      setActiveLink("Account");
    } else if (location.pathname === "/shop") {
      setActiveLink("Shop");
    } else if (location.pathname === "/cart") {
      setActiveLink("Cart");
    }
  }, [location.pathname]);

  const handleButtonClick = () => {
    navigate("/");
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5555/users/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem('userDetails');
        navigate('/');
        setIsLogged(false);
        window.location.reload();
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error occurred during logout:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-logo-btn" onClick={handleButtonClick} aria-label="Go to home">
          <img src="/logo.png" alt="Chanu@Music Logo" className="navbar-logo" />
        </button>
        
        <div className="navbar-links">
          {!isLogged ? (
            <>
              <Link to="/" className={`navbar-link ${activeLink === "Home" ? "active" : ""}`}>
                Home
              </Link>
              <Link to="/user/Login" className={`navbar-link ${activeLink === "Login" ? "active" : ""}`}>
                Login
              </Link>
              <Link to="/user/Singup" className={`navbar-link ${activeLink === "Singup" ? "active" : ""}`}>
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className={`navbar-link ${activeLink === "Home" ? "active" : ""}`}>
                Home
              </Link>
              <Link to="/about" className={`navbar-link ${activeLink === "About" ? "active" : ""}`}>
                About
              </Link>
              <Link to="/account" className={`navbar-link ${activeLink === "Account" ? "active" : ""}`}>
                Account
              </Link>
              <Link to="/shop" className={`navbar-link ${activeLink === "Shop" ? "active" : ""}`}>
                Shop
              </Link>
              <Link to="/cart" className={`navbar-link navbar-cart ${activeLink === "Cart" ? "active" : ""}`} aria-label="Shopping cart">
                <ShoppingCart size={28} weight="bold" />
              </Link>
              <button
                onClick={handleLogout}
                onMouseEnter={() => setIsLogoutHovered(true)}
                onMouseLeave={() => setIsLogoutHovered(false)}
                className={`navbar-logout ${isLogoutHovered ? "hovered" : ""}`}
                aria-label="Logout"
                title="Logout"
              >
                <UserSwitch size={28} weight="bold" />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
