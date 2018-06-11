import React from "react";
import CivicMediaMasters from "../components/civic-media-masters/";

const CivicMediaMastersPage = props => <CivicMediaMasters {...props} />;

export default CivicMediaMastersPage;

export const query = graphql`
  query CivicMedia {
    cover: file(relativePath: { eq: "images/civic-media-masters.jpg" }) {
      ...fluidImageFragment
    }
  }
`;
