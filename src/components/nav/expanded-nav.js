import React from "react";
import Link from "gatsby-link";

export default function ExpandedNav() {
  return (
    <ul className="expanded-nav col--xs">
      <li>
        <Link to="/" activeClassName="active-link" exact>
          About
        </Link>
      </li>
      <li>
        <Link to="/work/" activeClassName="active-link">
          Work
        </Link>
      </li>
      <li>
        <Link to="/publications/" activeClassName="active-link">
          Publications
        </Link>
      </li>
      <li>
        <Link to="/contact/" activeClassName="active-link">
          Contact
        </Link>
      </li>
    </ul>
  );
}
