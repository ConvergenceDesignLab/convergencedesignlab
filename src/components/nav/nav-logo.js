import React from "react";
import style from "./nav-logo.module.scss";
import rings from "../../assets/images/logo/logo-ring.png";

export default function NavLogo() {
  return (
    <div className={`col--xs ${style.logo}`}>
      <a href="/" className={style.link}>
        <div className={style.container}>
          <img className={style.rings} src={rings} alt="Convergence Logo" />
          <div className={style.text}>
            <div className={style.textTop}>Convergence</div>
            <div className={style.textBottom}>Design Lab</div>
          </div>
        </div>
      </a>
    </div>
  );
}
