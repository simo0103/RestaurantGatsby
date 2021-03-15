import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";
import "@fontsource/open-sans";
import "../style/style.scss";
import styled from "styled-components";

const Header = styled.header`
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    z-index: 1000;
  }
`;
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
        <Header>
          <h1>{data.site.siteMetadata.title}</h1>
          <Navbar
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.title}
          ></Navbar>
        </Header>
        <main>{children}</main>
      </React.Fragment>
    )}
  />
);

export default Layout;
