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
		width: 28px;
		height: 3px;
		margin-bottom: 5px;
		position: relative;
		background: #ddc470;
		border-radius: 3px;
		transition: background 0.2s linear;
		&.firstLine {
			transition: all 0.8s cubic-bezier(1, 1, 1, 1);

		}
		&.secondLine {
			transition: width 0.3s cubic-bezier(1, 1, 1, 1);
						  transition-delay: 0.5s;

		}
		&.thirdLine {
			transition: all 0.8s cubic-bezier(1, 1, 1, 1);


		}
		
	}
	&.clicked {
		span {
			background: white;
			&.firstLine {
				transform: rotate(45deg);
    			top: 9px;
			}
			&.secondLine {
				width: 0;
			}
			&.thirdLine {
				transform: rotate(-45deg);
				top: -7px;

			}
		}
	}
	
  }
`;
const MobilePanelContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 100vh;
    z-index: -10;
  }
`;
const MobilePanelLeft = styled.div`
  @media (max-width: 768px) {
    display: block;
    flex: 1;
    height: 0;
    background-color: #ddc470;
    transition: height 0.5s ease;
    z-index: 20;
    overflow: hidden;
    &.visible {
      box-shadow: 0px 0px 0px 3px #ddc470;
      height: 100vh;
    }
  }
`;
const MobilePanelRight = styled.div`
  @media (max-width: 768px) {
    display: block;
    flex: 1;
    height: 0;
    ${"" /* margin-top: 100vh; */}
    background-color: #ddc470;
    transition: height 0.7s linear;
    overflow: hidden;

    &.visible {
      height: 100vh;
      ${"" /* margin-top: 0; */}
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

    &.visible {
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
        <MobilePanelContainer>
          <MobilePanelLeft className={this.state.visible ? "visible" : null} />
          <MobilePanelRight className={this.state.visible ? "visible" : null} />
        </MobilePanelContainer>
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
