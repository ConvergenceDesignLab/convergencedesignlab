import React from "react";
import Link from "gatsby-link";
import Section, { Title, Description, CallToActionLink } from "../home-section/";
import classNames from "classnames";
import striptags from "striptags";
import Loading from "../../loading";
import ZoomingImage from "../../zooming-image";
import style from "./index.module.scss";

const Project = ({ slug, title, question, image }) => {
  return (
    <div className={style.column}>
      <Link to={`/work/${slug}`} className={style.imageLink}>
        <ZoomingImage
          wrapperClassName={style.projectImage}
          src={image.sizes.width_800.url}
          alt={title}
        />
      </Link>
      <div className={style.projectDetails}>
        <div className={style.projectTitle}>{title}</div>
        <div className={style.projectCaption}>{striptags(question)}</div>
        <div className={style.projectLink}>
          <Link className="link" to={`/work/${slug}`}>
            See Case Study
          </Link>
        </div>
      </div>
    </div>
  );
};

const Gallery = ({ projects }) => {
  return (
    <div className={style.showcase}>
      {projects.map(project => <Project key={project.slug} {...project} />)}
    </div>
  );
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
