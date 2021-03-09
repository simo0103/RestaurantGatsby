import * as React from "react";
import Layout from "../components/layout";
import Home from "./home";
import "../style/style.scss";

export default function IndexPage() {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}
