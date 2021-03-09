import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

const Navigation = styled.nav`
  @media (min-width: 768px) {
    width: 100%;
    background-color: lightseagreen;
    display: flex;
    align-items: center;
    position: sticky;
    height: 80px;
  }
`;

const Navbar = ({ siteTitle, menuLinks }) => (
  <Navigation>
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
            padding: "0 20px",
          }}
        >
          <Link style={{ color: `black` }} to={link.link}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </Navigation>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;
