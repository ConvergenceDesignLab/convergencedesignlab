import React from "react";
import Link from "gatsby-link";
import navLinks from "./nav-links";
import style from "./dropdown-nav.module.scss";

export default class DropdownNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ isOpen: true });
  }

  close() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className={`${style.nav} col--xs ${isOpen ? style.isOpen : ""}`}>
        <i className={`${style.open} fa fa-navicon`} onClick={this.open} />
        <div className={style.overlay} />
        <div className={style.slider}>
          <i className={`${style.close} fa fa-close`} onClick={this.close} />
          <ul className={style.links}>
            {navLinks.map(({ text, to, ...otherProps }) => (
              <li key={"dropdown-nav-" + text}>
                <Link
                  activeClassName={style.activeLink}
                  to={to}
                  {...otherProps}
                  onClick={this.close}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
