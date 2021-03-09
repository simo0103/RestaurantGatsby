import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// markup
export default function MenuPage({ data }) {
  const menuList = data.allContentfulMenuPrimi.edges;
  return (
    <Layout>
      <div id="menu">
        <ul>
          {menuList.map((piatto) => (
            <li key={piatto.node.nomePiatto}>
              <p className="name">{piatto.node.nomePiatto}</p>
              <span className="ingredienti">{piatto.node.ingredienti}</span>
              <span>{piatto.node.prezzo}€</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulMenuPrimi {
      edges {
        node {
          nomePiatto
          prezzo
          ingredienti
        }
      }
    }
  }
`;
