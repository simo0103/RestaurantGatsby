import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";

const Layout = ({ children }) => (
  // StaticQuery is a new component introduced in Gatsby V2,
  // which allows you to run GraphQL queries within your components,
  // not just pages.It allows developers to collocate data with their components.
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={(data) => (
      <React.Fragment>
        {/* <Helmet
          title={"title"}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        ></Helmet>{" "} */}
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        <main>{children}</main>
      </React.Fragment>
    )}
  />
);

export default Layout;
