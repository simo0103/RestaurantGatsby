import React, { Fragment } from "react";
// import Image from "../components/image";
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
      <div className="imageContainer">
        {/* <div className="announcement">
          {data.allContentfulSliderHome.edges.map((ann) => (
            <p key={ann.node.announcement}>{ann.node.announcement}</p>
          ))}
          <button>explore</button>
        </div> */}
        {/* <Image
          src="cupcakes2.jpg"
          className="mx-auto shadow-xl"
          alt="muffins Image"
          style={{
            width: "100%",
            height: "700px",
          }}
        /> */}
      </div>
    </Fragment>
  );
}
