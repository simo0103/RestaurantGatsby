import React, { Fragment, useState } from "react";
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
    <Fragment>
      <nav>
        <div
          id="hamburger"
          role="button"
          tabIndex={0}
          className={isClicked ? "clicked" : null}
          onKeyDown={() => {
            toggleClass();
            props.toggleClassMobileMenu();
          }}
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
          <li className="reservations">
            <button>
              <span>reservation</span>
            </button>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;
