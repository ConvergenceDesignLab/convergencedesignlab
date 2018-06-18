import React from "react";
import style from "./nav-logo.module.scss";
import Link from "gatsby-link";
import classNames from "classnames";
import Logo from "-!svg-react-loader?name=Logo&classIdPrefix=logo--!../../assets/images/logo/logo-lockup.svg";

export default function NavLogo({ isBackgroundWhite }) {
  return (
    <div className={style.wrapper}>
      <Link to="/" className={style.link}>
        <Logo className={classNames(style.logo, { [style.fillBlack]: isBackgroundWhite })} />
      </Link>
    </div>
  );
}
