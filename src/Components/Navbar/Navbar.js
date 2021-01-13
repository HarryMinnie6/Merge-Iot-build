import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <ul className={click ? "nav-options active" : "nav-options"}>
        <li className="option" onClick={closeMobileMenu}>
          <Link className="link" to="about">
            About
          </Link>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <Link className="link" to="services">
            Services
          </Link>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <Link className="link" to="solutions">
            Solutions
          </Link>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <Link className="link" to="blog">
            Blog & News
          </Link>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <Link className="link" to="partners">
            Partners
          </Link>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <Link className="link" to="contact">
            Contact
          </Link>
        </li>
      </ul>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
