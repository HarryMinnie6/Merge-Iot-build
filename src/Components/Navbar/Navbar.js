import React, { useState, useEffect } from "react";
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";
import { ReactComponent as Logo } from "./assets/secondary-logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 0);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className={visible ? "header" : "header2"}>
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
