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

function freezeScrollForTransition(element) {
  element.style.top = `${element.getBoundingClientRect().top}px`;
}

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
      >
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Nav isHomePage={isHomePage} />

      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames={transitionClassnames}
          timeout={timing}
          onExit={freezeScrollForTransition}
        >
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
