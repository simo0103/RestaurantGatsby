import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const [isClicked, setClicked] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const toggleClass = () => {
    setClicked(!isClicked);
    setVisible(!isVisible);

    console.log("menu closed");
  };

  return (
    <nav>
      <div
        id="hamburger"
        className={isClicked ? "clicked" : null}
        onClick={() => {
          toggleClass();
          props.toggleClassMobileMenu();
        }}
      >
        <span className="firstLine"></span>
        <span className="secondLine"></span>
        <span className="thirdLine"></span>
      </div>
      <ul className={isVisible ? "visible" : null}>
        {props.menuLinks.map((link) => (
          <li className={link.name} key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className="mobilePanelContainer">
        <div id="panelLeft" className={isVisible ? "visible" : null} />
        <div id="panelRight" className={isVisible ? "visible" : null} />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;
