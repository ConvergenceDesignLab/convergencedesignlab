import React from "react";
import Link from "gatsby-link";
import Section, { Title, Description, CallToActionLink } from "../home-section/";
import classNames from "classnames";
import striptags from "striptags";
import style from "./index.module.scss";

export default function WorkShowcase({ projects }) {
  return (
    <Section title="Our Work" hasBackground={true}>
      <Title>Our Work</Title>

      <div className={classNames("row", style.showcase)}>
        {projects &&
          projects.map(({ slug, title, question, image }, i) => (
            <div key={`showcase-${slug}`} className="col--xs-4">
              <img className={style.projectImage} src={image} alt={title} />
              <div className={style.projectDetails}>
                <div className={style.projectTitle}>{title}</div>
                <div className={style.projectCaption}>{striptags(question)}</div>
                <div className={style.projectLink}>
                  <Link to={`/work/${slug}`}>See Case Study</Link>
                </div>
              </div>
            </div>
          ))}
      </div>

      <CallToActionLink to="/work/">See all work →</CallToActionLink>
    </Section>
  );
}
