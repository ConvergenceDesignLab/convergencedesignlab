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

// Sizes: [{ width, height, url }, ...]
export function WpCoverImage({ sizes, className, ...props }) {
  const sortedSizes = Object.values(sizes).sort((obj1, obj2) => obj1.width - obj2.width);
  const fallbackSrc = sortedSizes[sortedSizes.length - 1].url;
  const srcSet = sortedSizes.map(({ width, url }) => `${url} ${width}w`).join(",\n");

  return (
    <img
      className={classNames(style.cover, className)}
      src={fallbackSrc}
      srcSet={srcSet}
      sizes="100vw"
      {...props}
    />
  );
}
