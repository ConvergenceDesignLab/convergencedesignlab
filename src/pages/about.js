import React from "react";
import About from "../components/about";

const AboutPage = props => <About {...props} />;

export default AboutPage;

export const query = graphql`
  query About {
    cover: file(relativePath: { eq: "images/da-opening-cropped.png" }) {
      ...fluidImageFragment
    }
  }
`;
