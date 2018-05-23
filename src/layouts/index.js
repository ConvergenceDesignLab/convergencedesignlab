import "typeface-open-sans";
import "typeface-montserrat";
import "../style/index.scss";
import "../style/global/index.scss";

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Nav from "../components/nav";
import Footer from "../components/footer/";
import style from "./index.module.scss";

export default function TemplateWrapper({ children, location }) {
  const isHomePage = location.pathname === process.env.BASE_PATH;
  return (
    <div>
      <Helmet
        title="Convergence Design Lab"
        meta={[
          { name: "description", content: "Convergence Design Lab" },
          { name: "keywords", content: "" }
        ]}
      />
      <Nav isHomePage={isHomePage} />
      <div className={isHomePage ? "" : style.navPadding}>{children()}</div>
      <Footer />
    </div>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};
