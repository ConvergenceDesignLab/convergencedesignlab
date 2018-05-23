import React from "react";
import Link from "gatsby-link";
import navLinks from "./nav-links";
import style from "./expanded-nav.module.scss";

export default function ExpandedNav() {
  return (
    <ul className={`${style.nav} col--xs`}>
      {navLinks.map(({ text, to, ...otherProps }) => (
        <li key={"expanded-nav-" + text}>
          <Link activeClassName="active-link" to={to} {...otherProps}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
}