import React, { Component } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

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
    console.log("menu closed");
    this.setState({
      clicked: !currentState,
      visible: !currentState,
    });
  }

  render() {
    return (
      <nav>
        <div
          id="hamburger"
          className={this.state.clicked ? "clicked" : null}
          onClick={this.toggleClass}
        >
          <span className="firstLine"></span>
          <span className="secondLine"></span>
          <span className="thirdLine"></span>
        </div>
        <ul className={this.state.visible ? "visible" : null}>
          {this.props.menuLinks.map((link) => (
            <li className={link.name} key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="mobilePanelContainer">
          <div
            id="panelLeft"
            className={this.state.visible ? "visible" : null}
          />
          <div
            id="panelRight"
            className={this.state.visible ? "visible" : null}
          />
        </div>
      </nav>
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
