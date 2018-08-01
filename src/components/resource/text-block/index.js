import React from "react";
import style from "./index.module.scss";
import parentStyle from "../index.module.scss";
import classNames from "classnames";

export default function TextBlock({ title, text, imageData, reverseOrder }) {
  const textSection = (
    <div key={`text-block-text-${title}`} className="col--sm-12 col--md-6 wordpress-content">
      <div className={parentStyle.sectionTitle}>{title}</div>
      <div className={parentStyle.sectionText} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );

  let imageSection;
  if (imageData) {
    const sortedSizes = Object.values(imageData.sizes).sort(
      (obj1, obj2) => obj1.width - obj2.width
    );
    const fallbackSrc = sortedSizes[sortedSizes.length - 1].url;
    const srcSet = sortedSizes.map(({ width, url }) => `${url} ${width}w`).join(",\n");
    // Not exactly correct, but it will do. Set the size based on two column breakpoint:
    const sizes = `
      (max-width: 767px) 100vw,
      50vw
    `;

    imageSection = (
      <div
        key={`text-block-image-${title}`}
        className={classNames(style.imageWrapper, "col--sm-12 col--md-6")}
      >
        <img className={style.image} srcSet={srcSet} sizes={sizes} src={fallbackSrc} />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="section">
        <div className={parentStyle.row}>
          {reverseOrder ? [textSection, imageSection] : [imageSection, textSection]}
        </div>
      </div>
    </div>
  );
}
