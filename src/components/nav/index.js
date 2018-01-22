import React from "react";
import Link from "gatsby-link";

import ScrollProvider from "../scroll-provider";
import NavLogo from "./nav-logo";
import ExpandedNav from "./expanded-nav";
import DropdownNav from "./dropdown-nav";

function Nav({ isHomePage, scrollY }) {
  const isWhite = !isHomePage || scrollY !== 0;
  return (
    <nav className={`main-nav ${isWhite ? "is-white" : ""}`}>
      <div className="container">
        <div className="row">
          <NavLogo />
          <ExpandedNav />
          <DropdownNav />
        </div>
      </div>
    </nav>
  );
}

export default function Header({ isHomePage }) {
  return isHomePage ? (
    <ScrollProvider render={({ scrollY }) => <Nav scrollY={scrollY} isHomePage={true} />} />
  ) : (
    <Nav isHomePage={false} />
  );
}
