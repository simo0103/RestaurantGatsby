import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";
import "@fontsource/open-sans";
import "../style/style.scss";

const Layout = ({ children }) => {
  const [isMenuMobileClicked, setClicked] = useState(false);
  const [classesNames, setClassesNames] = useState("");
  const handleToggleClass = () => {
    setClicked(!isMenuMobileClicked);
  };

  const handleScroll = () =>
    window.scrollY > 90 ? setClassesNames("stickyHeader") : setClassesNames("");

  const data = useStaticQuery(graphql`
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
  `);
  // StaticQuery is a new component introduced in Gatsby V2,
  // which allows you to run GraphQL queries within your components,
  // not just pages.It allows developers to collocate data with their components.

  return (
    <React.Fragment>
      <Helmet title={data.site.siteMetadata.title}>
        <body className={window.location.pathname} />
      </Helmet>
      <header
        className={`${isMenuMobileClicked ? "clicked" : ""} ${classesNames}`}
        onScroll={() => handleScroll()}
      >
        <h1>{data.site.siteMetadata.title}</h1>
        <Navbar
          toggleClassMobileMenu={handleToggleClass}
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        ></Navbar>
      </header>
      <div className="mobilePanelContainer">
        <div
          id="panelLeft"
          className={isMenuMobileClicked ? "visible" : null}
        />
        <div
          id="panelRight"
          className={isMenuMobileClicked ? "visible" : null}
        />
      </div>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
