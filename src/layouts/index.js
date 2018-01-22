import "typeface-open-sans";
import "typeface-montserrat";
import "../style/index.scss";

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Nav from "../components/nav";
import Footer from "../components/footer/";

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="Convergence Design Lab"
      meta={[
        { name: "description", content: "Convergence Design Lab" },
        { name: "keywords", content: "" }
      ]}
    />
    <Nav isHomePage={location.pathname === "/"} />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
