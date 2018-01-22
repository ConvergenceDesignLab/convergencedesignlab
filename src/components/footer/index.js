import React from "react";

import columbiaLogo from "../../assets/images/logo/columbia-college.png";

export default function Columbia() {
  return (
    <footer className="footer">
      <div className="container">
        <img className="footer__columbia-logo" src={columbiaLogo} alt="Columbia College" />
        {/* <div>Get Involved</div>  */}
        <div className="social-links">
          <a href="https://www.flickr.com/photos/convergenceacademies/">
            <span className="stacked-icon">
              <i className="fa fa-circle icon-background" />
              <i className="fa fa-flickr icon-foreground" />
            </span>
          </a>
          <a href="https://www.facebook.com/convergencedesignlab/">
            <span className="stacked-icon">
              <i className="fa fa-circle icon-background" />
              <i className="fa fa-facebook icon-foreground" />
            </span>
          </a>
          <a href="https://vimeo.com/convergencedesignlab">
            <span className="stacked-icon">
              <i className="fa fa-circle icon-background" />
              <i className="fa fa-vimeo icon-foreground" />
            </span>
          </a>
          <a href="https://twitter.com/ConvergenceDLabb">
            <span className="stacked-icon">
              <i className="fa fa-circle icon-background" />
              <i className="fa fa-twitter icon-foreground" />
            </span>
          </a>
          <a href="https://www.instagram.com/convergenceacademies/">
            <span className="stacked-icon">
              <i className="fa fa-circle icon-background" />
              <i className="fa fa-instagram icon-foreground" />
            </span>
          </a>
        </div>
        <div className="footer__contact">
          <div>Convergence Design Lab</div>
          <div>312-369-8883</div>
          <div>mfaber@colum.edu</div>
        </div>
        <div className="footer__copy">© 2018 Columbia College Chicago</div>
      </div>
    </footer>
  );
}
