import React from "react";
import classNames from "classnames";
import style from "./index.module.scss";

export default function CoverImage({ src, alt, className, ...otherProps }) {
  return <img className={classNames(style.cover, className)} src={src} alt={alt} {...otherProps} />;
}
