import React from "react";
import classnames from "classnames";
import TAGS from "./tags";
import style from "./tag-circle.module.scss";

export default class TagCircle extends React.Component {
  render() {
    const { className, tag, ...otherProps } = this.props;

    let tagClass;
    if (tag === TAGS.LDD) tagClass = style.lxd;
    else if (tag === TAGS.CB) tagClass = style.pd;
    else if (tag === TAGS.PAR) tagClass = style.par;

    return <div className={classnames(style.circle, tagClass, className)} {...otherProps} />;
  }
}
