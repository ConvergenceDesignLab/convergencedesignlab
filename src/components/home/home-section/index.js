import React from "react";
import Link from "gatsby-link";
import style from "./index.module.scss";
import classNames from "classnames";

export const Title = ({ children }) => <h1 className={style.title}>{children}</h1>;
export const Description = ({ children }) => <p className={style.description}>{children}</p>;
export const CallToActionLink = ({ children, ...linkProps }) => (
  <div className={style.link}>
    <Link {...linkProps}>{children}</Link>
  </div>
);

export default function Section({ hasBackground, children, ...otherProps }) {
  return (
    <div className={classNames({ "subtle-background": hasBackground })} {...otherProps}>
      <div className="container">
        <div className="section">{children}</div>
      </div>
    </div>
  );
}
