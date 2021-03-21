import React, { Component } from "react";
import Image from "../components/image";
import "../style/home.scss";

class Home extends Component {
  render() {
    return (
      <div
        className="imageContainer"
        // style={{ padding: "2%", border: "2px solid #69838d" }}
      >
        <div className="announcement">
          <p>ciaone</p>
        </div>
        <Image
          src="cupcakes2.jpg"
          className="mx-auto shadow-xl"
          alt="muffins Image"
          style={{
            width: "100%",
            height: "700px",
          }}
        />
      </div>
    );
  }
}

export default Home;
