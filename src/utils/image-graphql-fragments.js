export const fluidImageFragment = graphql`
  fragment fluidImageFragment on File {
    name
    childImageSharp {
      sizes(maxWidth: 2560) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
