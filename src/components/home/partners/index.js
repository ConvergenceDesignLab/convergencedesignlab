import React from "react";
import Section, { Title, Description } from "../home-section/";
import partners from "./partners-list";
import style from "./index.module.scss";

export default function Partners() {
  return (
    <Section title="Our Work">
      <Title>Our Partners & Funders</Title>
      <Description>
        We partner with learning organizations, cultural groups and communities to advance
        educational equity and civic engagement.
      </Description>
      <div className="row--justify-center">
        {partners.map(({ link, image, name }) => (
          <div key={name} className={style.col}>
            <a className={style.partnerLink} href={link}>
              <img className={style.partnerImage} src={image} alt={name} />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
