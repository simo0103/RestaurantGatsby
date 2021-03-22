import React, { Fragment } from "react";
import Image from "../components/image";
import { graphql, useStaticQuery } from "gatsby";

import "../style/home.scss";

export default function Home() {
  const data = useStaticQuery(graphql`
    query announcement {
      allContentfulSliderHome {
        edges {
          node {
            announcement
          }
        }
      }
    }
  `);
  return (
    <Fragment>
      <div className="imageContainer">
        <div className="announcement">
          {data.allContentfulSliderHome.edges.map((ann) => (
            <p>{ann.node.announcement}</p>
          ))}
          <button>explore</button>
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
      <div className="bestSellers">
        <h3>best sellers of this week</h3>
        <div class="container">
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
