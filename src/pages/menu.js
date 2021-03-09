import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// markup
export default function MenuPage({ data }) {
  return (
    <Layout>
      <div id="menu">
        <ul>
          <li>
            <p className="name">{data.contentfulMenuPrimi.nomePiatto}</p>
            <span className="ingredienti">
              {data.contentfulMenuPrimi.ingredienti}
            </span>
            <span>{data.contentfulMenuPrimi.prezzo}€</span>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    contentfulMenuPrimi {
      id
      nomePiatto
      prezzo
      ingredienti
    }
  }
`;
