import React from "react";
import Link from "gatsby-link";
import style from "./index.module.scss";
import classNames from "classnames";

export default function NotFound() {
  return (
    <div className={classNames("container", style.page)}>
      <div className="section">
        <div className={style.heading}>404</div>
        <div className={style.subtitle}>
          Oops! Looks like the page you are looking for doesn't exist.
        </div>
        <Link className={classNames(style.link, "link")} to="/">
          Back to Home →
        </Link>
      </div>
    </div>
  );
}
