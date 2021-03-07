import * as React from "react";
import { graphql } from "gatsby";
// markup
export default function IndexPage({ data }) {
  return (
    <div>
      <ul>
        <li>{data.contentfulMenuPrimi.nomePiatto}</li>
      </ul>
    </div>
  );
}

export const query = graphql`
  query {
    contentfulMenuPrimi {
      id
      nomePiatto
      prezzo
    }
  }
`;
