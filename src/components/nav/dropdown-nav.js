import React from "react";
import Link from "gatsby-link";

export default class ExpandedNav extends React.Component {
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
      <div className={`dropdown-nav col--xs ${isOpen ? "is-open" : ""}`}>
        <i className="dropdown-nav__open fa fa-navicon" onClick={this.open} />
        <div className="dropdown-nav__overlay" />
        <div className="dropdown-nav__slide-out">
          <i className="dropdown-nav__close fa fa-close" onClick={this.close} />
          <ul className="dropdown-nav__links">
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
        </div>
      </div>
    );
  }
}
