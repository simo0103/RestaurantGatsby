import React, { Component } from "react";
import Image from "../components/image";
class Home extends Component {
  render() {
    return (
      <div
        className="imageContainer"
        style={{ padding: "2%", border: "2px solid #69838d" }}
      >
        <Image
          src="muffins.png"
          className="mx-auto shadow-xl"
          alt="muffins Image"
          style={{
            width: "100%",
            height: "500px",
          }}
        />
      </div>
    );
  }
}

export default Home;
