import React from "react";
import Contact from "../components/contact";

const ContactPage = props => <Contact {...props} />;

export default ContactPage;

export const query = graphql`
  query Contact {
    cover: file(relativePath: { eq: "images/tilden-hands-cropped.png" }) {
      ...fluidImageFragment
    }
  }
`;
