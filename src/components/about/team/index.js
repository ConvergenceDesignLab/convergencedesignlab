import React from "react";
import classNames from "classnames";
import team from "./team-data";
import style from "./index.module.scss";

const { staff, researchers, students } = team;

const TeamMember = ({ image, name, title, email, twitter, linkedin }) => (
  <figure className={classNames(style.figure, "col--xs-6 col--sm-3")}>
    <img className={style.image} src={image} alt={name} />
    <figcaption>
      <div className={style.name}>{name}</div>
      <div className={style.title}>{title}</div>
      <div className={style.links}>
        {email && (
          <a className={style.iconLink} href={`mailto:${email}`}>
            <i className={classNames("fa fa-envelope", style.icon)} />
          </a>
        )}
        {twitter && (
          <a className={style.iconLink} href={twitter}>
            <i className={classNames("fa fa-twitter", style.icon)} />
          </a>
        )}
        {linkedin && (
          <a className={style.iconLink} href={linkedin}>
            <i className={classNames("fa fa-linkedin", style.icon)} />
          </a>
        )}
      </div>
    </figcaption>
  </figure>
);

export default function Team() {
  return (
    <div>
      <div className="row--justify-center">
        {staff.map(info => <TeamMember key={info.name} {...info} />)}
        {researchers.map(info => <TeamMember key={info.name} {...info} />)}
      </div>
    </div>
  );
}
