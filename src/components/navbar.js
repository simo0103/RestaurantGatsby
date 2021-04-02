import React, { useState } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleClass = () => {
    setClicked(!clicked);
    setVisible(!visible);

    console.log("menu closed");
  };

  return (
    <nav>
      <div
        id="hamburger"
        className={clicked ? "clicked" : null}
        onClick={toggleClass}
      >
        <span className="firstLine"></span>
        <span className="secondLine"></span>
        <span className="thirdLine"></span>
      </div>
      <ul className={visible ? "visible" : null}>
        {props.menuLinks.map((link) => (
          <li className={link.name} key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className="mobilePanelContainer">
        <div id="panelLeft" className={visible ? "visible" : null} />
        <div id="panelRight" className={visible ? "visible" : null} />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;
