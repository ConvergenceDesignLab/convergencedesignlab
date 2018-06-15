import React from "react";
import classNames from "classnames";
import style from "./index.module.scss";

export default function ZoomingImage({ wrapperClassName, className, ...props }) {
  return (
    <div className={classNames(style.wrapper, wrapperClassName)}>
      <img className={classNames(style.image, className)} {...props} />
    </div>
  );
}
