import React from "react";
import Link from "gatsby-link";
import Section, { Title, Description, CallToActionLink } from "../home-section";
import style from "./index.module.scss";

export default function AboutSection() {
  return (
    <Section>
      <div className={style.large}>
        <p>
          Convergence Design Lab is an applied research center and a learning design studio in the
          School of Media Arts at Columbia College Chicago.
        </p>
        <p>
          We partner with organizations to prepare youth to become future-ready, media-fluent
          participants in public life.
        </p>
      </div>
      <CallToActionLink to="/about/">Explore how →</CallToActionLink>
    </Section>
  );
}
