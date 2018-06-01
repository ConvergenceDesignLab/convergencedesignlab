import React from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import Section, { Title, Description, CallToActionLink } from "../home-section";
import style from "./index.module.scss";

export default function ResourcesShowcase({ resource }) {
  return (
    <Section hasBackground={true}>
      <Title>Open Resources</Title>
      <Description>
        We believe in working in the open and blah blah. Our work is rooted in years of applied
        research in connected learning...
      </Description>

      {resource && (
        <div className={style.resource}>
          <div className={style.thumbnail}>
            <img src={resource.image} alt={resource.title} />
          </div>
          <div className={style.details}>
            <div className={style.title}>{resource.title}</div>
            <div
              className={classNames("wordpress-content", style.description)}
              dangerouslySetInnerHTML={{ __html: resource.overview }}
            />
            <div className={style.link}>
              <Link to={`resources/${resource.slug}`}>Download the paper</Link>
            </div>
          </div>
        </div>
      )}

      <CallToActionLink to="/resources/">See all resources →</CallToActionLink>
    </Section>
  );
}
