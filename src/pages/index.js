import React from "react";
import Home from "../components/home";

const IndexPage = props => <Home {...props} />;

export default IndexPage;

export const query = graphql`
  query Home {
    partnerImages: allImageSharp(filter: { id: { glob: "**/images/partner-logos/**" } }) {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 400) {
              src
              originalName
            }
          }
        }
      }
    }
  }
`;
