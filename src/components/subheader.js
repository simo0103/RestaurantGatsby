import React, { Fragment } from "react";
import Image from "./image";
import { graphql, StaticQuery } from "gatsby";

const SubHeader = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulSliderHome {
            edges {
              node {
                announcement
              }
            }
          }
        }
      `}
      render={(data) => (
        <Fragment>
          <div className="imageContainer">
            <div className="announcement">
              {data.allContentfulSliderHome.edges.map((ann) => (
                <p key={ann.node.announcement}>{ann.node.announcement}</p>
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
        </Fragment>
      )}
    />
  );
};
export default SubHeader;
