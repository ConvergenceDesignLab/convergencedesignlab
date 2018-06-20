import React from "react";
import Section, { Title, Description } from "../home-section/";
import partners from "./partners-list";
import style from "./index.module.scss";

export default function Partners(props) {
  const partnerImageData = props.partnerImageData;

  const partnersWithImages = partners.map(partner => {
    const data = partnerImageData.find(data => data.filename === partner.filename);
    return { ...partner, src: data ? data.src : "" };
  });

  return (
    <Section title="Our Work">
      <Title>Our Partners & Funders</Title>
      <Description>
        We partner with learning organizations and media & cultural groups to advance educational
        equity and civic engagement.
      </Description>
      <div className="row--justify-center">
        {partnersWithImages.map(({ link, src, name }) => (
          <div key={name} className={style.col}>
            <a className={style.partnerLink} href={link} target="_blank">
              <img className={style.partnerImage} src={src} alt={name} />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
