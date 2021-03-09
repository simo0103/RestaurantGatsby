import * as React from "react";
import Layout from "../components/layout";
import Home from "./home";

export default function IndexPage() {
  return (
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}
