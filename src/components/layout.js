import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";
import "@fontsource/open-sans";
import "../style/style.scss";

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
        <Helmet title={data.site.siteMetadata.title}></Helmet>
        <header>
          <h1>{data.site.siteMetadata.title}</h1>
          <Navbar
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.title}
          ></Navbar>
        </header>
        <div id={children.type.name.toLowerCase()} className="siteContainer">
          <main>{children}</main>
        </div>
      </React.Fragment>
    )}
  />
);

export default Layout;
