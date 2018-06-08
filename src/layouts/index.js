import "typeface-open-sans";
import "typeface-montserrat";
import "../style/global/index.scss";
import "objectFitPolyfill";

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Nav from "../components/nav";
import Footer from "../components/footer/";
import TransitionHandler from "./transition-handler";
import style from "./index.module.scss";

const timing = {
  enter: Number(style.fadeInDuration) + Number(style.fadeInDelay),
  exit: Number(style.fadeOutDuration)
};
const transitionClassnames = {
  enter: style.fadeIn,
  enterActive: style.fadeInActive,
  exit: style.fadeOut,
  exitActive: style.fadeOutActive
};

export default function TemplateWrapper({ children, location }) {
  // Gatsby's HTML rendering doesn't use the pathPrefix so we need to check the real URL (which has
  // the pathPrefix) and the URL without the pathPrefix
  const isHomePage =
    location.pathname === `${process.env.GATSBY_BASEURL}/` || location.pathname === "/";

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

      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames={transitionClassnames} timeout={timing}>
          <TransitionHandler location={location}>
            <div className={isHomePage ? "" : style.navPadding}>{children()}</div>
          </TransitionHandler>
        </CSSTransition>
      </TransitionGroup>

      <Footer />
    </div>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};
