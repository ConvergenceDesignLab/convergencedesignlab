import React from "react";
import classNames from "classnames";
import style from "./index.module.scss";
import Img from "gatsby-image";

/**
 * Style a cover image, either using a GatsbyImge (if sizes prop provided) or a regular img element
 */
export default function CoverImage({ className, ...props }) {
  if (props.sizes) {
    return (
      // Null out the object-XX styling so that it can be styled by CSS
      <Img
        className={classNames(style.cover, className)}
        alt={props.alt}
        {...props}
        imgStyle={{ objectPosition: "", objectFit: "" }}
      />
    );
  }
  return (
    <img
      className={classNames(style.cover, className)}
      src={props.src}
      alt={props.alt}
      {...props}
    />
  );
}
