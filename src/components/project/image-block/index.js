import React from "react";
import style from "./index.module.scss";

export default function ImageBlock({ imageData, caption }) {
  const sortedSizes = Object.values(imageData.sizes).sort((obj1, obj2) => obj1.width - obj2.width);
  const fallbackSrc = sortedSizes[sortedSizes.length - 1].url;
  const srcSet = sortedSizes.map(({ width, url }) => `${url} ${width}w`).join(",\n");
  const sizes = `
    (max-width: ${style.maxWidth}) 100vw, 
    ${style.maxWidth}
  `;

  return (
    <div className="subtle-background">
      <div className="container">
        <div className="section text-align-center">
          <figure className={style.block}>
            <img className={style.image} src={fallbackSrc} srcSet={srcSet} sizes={sizes} />
            <figcaption className={style.caption}>{caption}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
