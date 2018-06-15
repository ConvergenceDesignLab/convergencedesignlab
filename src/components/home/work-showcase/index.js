import React from "react";
import Link from "gatsby-link";
import Section, { Title, Description, CallToActionLink } from "../home-section/";
import classNames from "classnames";
import striptags from "striptags";
import Loading from "../../loading";
import style from "./index.module.scss";

const Project = ({ slug, title, question, image }) => {
  return (
    <div key={`showcase-${slug}`} className={style.column}>
      <img className={style.projectImage} src={image.sizes.width_800.url} alt={title} />
      <div className={style.projectDetails}>
        <div className={style.projectTitle}>{title}</div>
        <div className={style.projectCaption}>{striptags(question)}</div>
        <div className={style.projectLink}>
          <Link to={`/work/${slug}`}>See Case Study</Link>
        </div>
      </div>
    </div>
  );
};

const Gallery = ({ projects }) => {
  return <div className={style.showcase}>{projects.map(project => <Project {...project} />)}</div>;
};

export default function WorkShowcase({ projects }) {
  return (
    <Section title="Our Work" hasBackground={true}>
      <Title>Our Work</Title>
      {projects ? <Gallery projects={projects} /> : <Loading height="300px" />}
      <CallToActionLink to="/work/">See all work →</CallToActionLink>
    </Section>
  );
}
