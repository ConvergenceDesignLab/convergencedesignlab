import React from "react";
import style from "./index.module.scss";
import columbiaLogo from "../../assets/images/logo/columbia-college.png";
import classNames from "classnames";

export default function Columbia() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.join}>Join the Conversation</div>
        <div className={style.email}>hello@convergencedesignlab.org</div>
        <div className={classNames(style.social, "social-links")}>
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
          <a href="https://twitter.com/ConvergenceDLab">
            <span className="stacked-icon">
              <i className="fa fa-circle icon-background" />
              <i className="fa fa-twitter icon-foreground" />
            </span>
          </a>
          <a href="https://vimeo.com/convergencedesignlab">
            <span className="stacked-icon">
              <i className="fa fa-circle icon-background" />
              <i className="fa fa-vimeo icon-foreground" />
            </span>
          </a>
          <a href="https://www.instagram.com/convergenceacademies/">
            <span className="stacked-icon">
              <i className="fa fa-circle icon-background" />
              <i className="fa fa-instagram icon-foreground" />
            </span>
          </a>
        </div>
        <div className={style.contact}>
          <div>312.369.8883</div>
          <div>33 East Congress, Suite 600</div>
          <div>Chicago, IL 60605</div>
        </div>
      </div>
    </footer>
  );
}
