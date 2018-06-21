import React from "react";
import About from "../components/about";

const AboutPage = props => <About {...props} />;

export default AboutPage;

export const query = graphql`
  query About {
    cover: file(relativePath: { eq: "images/da-opening-cropped.png" }) {
      ...fluidImageFragment
    }
    teamImages: allImageSharp(filter: { id: { glob: "**/images/team/**" } }) {
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
