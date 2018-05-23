import React from "react";
import style from "./index.module.scss";
import Link from "gatsby-link";
import classNames from "classnames";

export default function CallToAction({
  title = "Interested in learning more?",
  body = "Let's have a conversation.",
  linkText = "Get in touch",
  alternateColor = false
} = {}) {
  return (
    <div className={classNames(style.banner, { [style.orangeBanner]: alternateColor })}>
      <div className="container">
        <div className="section">
          <div className={style.title}>{title}</div>
          <div className={style.text}>{body}</div>
          <div>
            <Link className="white-link" to="/contact/">
              {linkText}
            </Link>{" "}
            →
          </div>
        </div>
      </div>
    </div>
  );
}
