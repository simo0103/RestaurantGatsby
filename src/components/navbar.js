import React, { Component } from "react";
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
const Hamburger = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
  	display: inline-block;
		span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;
		background: black;
		border-radius: 3px;
	
	}
	
  }
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);

    this.state = {
      clicked: false,
    };
  }
  toggleClass() {
    const currentState = this.state.clicked;
    this.setState({ clicked: !currentState });
  }
  render() {
    return (
      <Navigation>
        <Hamburger
          className={this.state.clicked ? "clicked" : null}
          onClick={this.toggleClass}
        >
          <span className="firstLine"></span>
          <span className="secondLine"></span>
          <span className="thirdLine"></span>
        </Hamburger>
        <LinkList>
          {this.props.menuLinks.map((link) => (
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
        </LinkList>
      </Navigation>
    );
  }
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
};

Navbar.defaultProps = {
  siteTitle: ``,
};

export default Navbar;
