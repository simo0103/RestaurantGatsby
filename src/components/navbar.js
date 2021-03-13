import React, { Component } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

const Navigation = styled.nav`
  @media (min-width: 769px) {
    width: 100%;
    background-color: lightseagreen;
    display: flex;
    align-items: center;
    position: sticky;
    height: 80px;
  }
`;
const Hamburger = styled.div`
	@media (min-width: 769px) {
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
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 50px;
    width: 100%;
    right: 0;
    top: 50px;
    opacity: 0;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    transition: all 0.5s ease-out, background 1s ease-out;
    transition-delay: 0.2s;

    &.visible {
      transition: all 0.3s ease-in, background 0.5s ease-in;
      transition-delay: 0.25s;
      height: 100vh;
      opacity: 1;
      z-index: 100;
    }
  }

  @media (min-width: 769px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
const ListElement = styled.li`
  @media (min-width: 769px) {
    padding: "0 20px";
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);

    this.state = {
      clicked: false,
      visible: false,
    };
  }
  toggleClass() {
    const currentState = this.state.clicked;
    this.setState({
      clicked: !currentState,
      visible: !currentState,
    });
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
        <LinkList className={this.state.visible ? "visible" : null}>
          {this.props.menuLinks.map((link) => (
            <ListElement key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </ListElement>
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
