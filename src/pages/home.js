import React, { Fragment } from "react";
import Image from "../components/image";

import "../style/home.scss";

export default function Home() {
  return (
    <Fragment>
      <div className="bestSellers">
        <h3>best sellers of this week</h3>
        <div className="container">
          <div>
            <Image
              src="cake_1920.jpg"
              className="mx-auto shadow-xl"
              alt="muffins Image"
              style={{
                width: "80%",
                margin: "0 auto",
                height: "400px",
              }}
            />
          </div>
          <div>
            <Image
              src="darkcake_1920.jpg"
              className="mx-auto shadow-xl"
              alt="muffins Image"
              style={{
                width: "80%",
                margin: "0 auto",
                height: "400px",
              }}
            />
          </div>
          <div>
            <Image
              src="cake_1920.jpg"
              className="mx-auto shadow-xl"
              alt="muffins Image"
              style={{
                width: "80%",
                margin: "0 auto",
                height: "400px",
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
