import React from "react";
import Link from "gatsby-link";
import Section, { Title, Description, CallToActionLink } from "../home-section/";
import classNames from "classnames";
import style from "./index.module.scss";
import image1 from "../../../assets/images/projects/test-1-square.png";
import image2 from "../../../assets/images/projects/test-2-square.png";
import image3 from "../../../assets/images/projects/test-3-square.png";

const projects = [
  {
    title: "Youth Expungement Mythbusters",
    caption: "How might we empower youth to take control of their juvenile record?",
    image: image1
  },
  {
    title: "Youth Expungement Mythbusters",
    caption: "How might we empower youth to take control of their juvenile record?",
    image: image2
  },
  {
    title: "Youth Expungement Mythbusters",
    caption: "How might we empower youth to take control of their juvenile record?",
    image: image3
  }
];

export default function WorkShowcase() {
  return (
    <Section title="Our Work" hasBackground={true}>
      <Title>Our Work</Title>

      <div className={classNames("row", style.showcase)}>
        {projects.map(({ title, caption, image }, i) => (
          <div key={`showcase-${title}-${i}`} className="col--xs-4">
            <img className={style.projectImage} src={image} alt={title} />
            <div className={style.projectDetails}>
              <div className={style.projectTitle}>{title}</div>
              <div className={style.projectCaption}>{caption}</div>
              <div className={style.projectLink}>
                <Link to="/work/">See Case Study</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CallToActionLink to="/work/">See all work →</CallToActionLink>
    </Section>
  );
}
