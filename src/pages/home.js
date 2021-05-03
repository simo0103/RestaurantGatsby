import React, { Fragment } from "react";
import Image from "../components/image";
import { Helmet } from "react-helmet";

import "../style/home.scss";

export default function Home() {
  return (
    <Fragment>
      <Helmet>
        <body className="home" />
      </Helmet>
      <div className="textWrapper">
        <div className="heroText">
          <div>
            <p>good times</p>
            <p className="separate">with</p>
            <p>good friends</p>
            <span className="fadingEffect"></span>
          </div>
        </div>
      </div>
      <div className="imgWrapper">
        <div className="imageContainer">
          <span className="overlay"></span>
          <Image
            src="burger.jpg"
            className="mx-auto shadow-xl"
            alt="burger Image"
            style={{
              position: "absolute",
              overflow: "hidden",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              top: 0,
              left: 0,
            }}
          />
        </div>
        <div className="imageContainer">
          <span className="overlay"></span>

          <Image
            src="sandwich.jpg"
            className="mx-auto shadow-xl"
            alt="sandwich Image"
            style={{
              position: "absolute",
              overflow: "hidden",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              top: 0,
              left: 0,
            }}
          />
        </div>
      </div>
    </Fragment>
  );
}
