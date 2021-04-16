import React, { Fragment } from "react";
import Image from "../components/image";
// import { graphql, useStaticQuery } from "gatsby";

import "../style/home.scss";

export default function Home() {
  //   const data = useStaticQuery(graphql`
  //     query announcement {
  //       allContentfulSliderHome {
  //         edges {
  //           node {
  //             announcement
  //           }
  //         }
  //       }
  //     }
  //   `);
  return (
    <Fragment>
      <div className="imgWrapper">
        <div className="imageContainer">
          <span className="overlay"></span>

          {/* <div className="announcement">
          {data.allContentfulSliderHome.edges.map((ann) => (
            <p key={ann.node.announcement}>{ann.node.announcement}</p>
          ))}
          <button>explore</button>
        </div> */}
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
          {/* <div className="announcement">
          {data.allContentfulSliderHome.edges.map((ann) => (
            <p key={ann.node.announcement}>{ann.node.announcement}</p>
          ))}
          <button>explore</button>
        </div> */}
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
