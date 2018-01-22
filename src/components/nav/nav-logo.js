import React from "react";

import rings from "../../assets/images/logo/logo-ring.png";

export default function NavLogo() {
  return (
    <div className="col--xs nav-logo">
      <a href="/" className="nav-logo__link">
        <div className="nav-logo__container">
          <img className="nav-logo__rings" src={rings} alt="Convergence Logo" />
          <div className="nav-logo__text">
            <div className="nav-logo__text-top">Convergence</div>
            <div className="nav-logo__text-bottom">Design Lab</div>
          </div>
        </div>
      </a>
    </div>
  );
}
