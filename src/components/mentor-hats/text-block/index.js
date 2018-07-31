import React from "react";
import style from "./index.module.scss";
import parentStyle from "../index.module.scss";
import classNames from "classnames";

export default function TextBlock({ title, text, imageData, reverseOrder }) {
  const textSection = (
    <div key={`text-block-text-${title}`} className="col--sm-12 col--md-6 wordpress-content">
      <div className={parentStyle.sectionTitle}>{title}</div>
      {typeof text === "string" ? (
        <div className={parentStyle.sectionText} dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <div className={parentStyle.sectionText}>{text}</div>
      )}
    </div>
  );

  let imageSection;
  if (imageData) {
    const src = imageData;
    imageSection = (
      <div
        key={`text-block-image-${title}`}
        className={classNames(style.imageWrapper, "col--sm-12 col--md-6")}
      >
        <img className={style.image} src={src} />
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
