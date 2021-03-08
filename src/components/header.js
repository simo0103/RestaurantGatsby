import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <nav
      style={{
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul
        style={{
          display: "flex",
          justifyItems: "space-between",
          flex: 2,
        }}
      >
        {menuLinks.map((link) => (
          <li
            key={link.name}
            style={{
              listStyleType: `none`,
              padding: "10px 20px",
            }}
          >
            <Link style={{ color: `black` }} to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
