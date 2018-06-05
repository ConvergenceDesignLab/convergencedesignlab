import React from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import Section, { Title, Description, CallToActionLink } from "../home-section";
import Loading from "../../loading";
import style from "./index.module.scss";

const Resource = ({ data }) => {
  return (
    <div className={style.resource}>
      <div className={style.thumbnail}>
        <img src={data.image} alt={data.title} />
      </div>
      <div className={style.details}>
        <div className={style.title}>{data.title}</div>
        <div
          className={classNames("wordpress-content", style.description)}
          dangerouslySetInnerHTML={{ __html: data.overview }}
        />
        <div className={style.link}>
          <Link to={`resources/${data.slug}`}>Download the paper</Link>
        </div>
      </div>
    </div>
  );
};

export default function ResourcesShowcase({ resource }) {
  return (
    <Section hasBackground={true}>
      <Title>Open Resources</Title>
      <Description>
        We believe in working in the open and blah blah. Our work is rooted in years of applied
        research in connected learning...
      </Description>

      {resource ? <Resource data={resource} /> : <Loading height="150px" />}

      <CallToActionLink to="/resources/">See all resources →</CallToActionLink>
    </Section>
  );
}
