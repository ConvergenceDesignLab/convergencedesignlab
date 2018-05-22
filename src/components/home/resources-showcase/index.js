import React from "react";
import Link from "gatsby-link";
import Section, { Title, Description, CallToActionLink } from "../home-section";
import style from "./index.module.scss";
import image from "../../../assets/images/publications/test-1.png";

const publication = {
  title: "Digital Atelier: Connecting Learners to Their Interests Through Space and Technology",
  image,
  description:
    "Jujubes cookie dragée powder dragée wafer candy pudding liquorice. Cotton candy apple pie powder sweet roll jelly croissant. Brownie pie sesame snaps.",
  link: "/resources/"
};

export default function ResourcesShowcase() {
  return (
    <Section hasBackground={true}>
      <Title>Open Resources</Title>
      <Description>
        We believe in working in the open and blah blah. Our work is rooted in years of applied
        research in connected learning...
      </Description>

      <div className={style.resource}>
        <div className={style.thumbnail}>
          <img src={publication.image} alt={publication.title} />
        </div>
        <div className={style.details}>
          <div className={style.title}>{publication.title}</div>
          <div className={style.description}>{publication.description}</div>
          <div className={style.link}>
            <Link to={publication.link}>Download the paper</Link>
          </div>
        </div>
      </div>

      <CallToActionLink to="/work/">See all resources →</CallToActionLink>
    </Section>
  );
}
