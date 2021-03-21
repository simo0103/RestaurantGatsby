import React from "react";
import Image from "../components/image";
import { graphql, StaticQuery, useStaticQuery } from "gatsby";

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
    <div className="imageContainer">
      <div className="announcement">
        {data.allContentfulSliderHome.edges.map((ann) => (
          <p>{ann.node.announcement}</p>
        ))}
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
