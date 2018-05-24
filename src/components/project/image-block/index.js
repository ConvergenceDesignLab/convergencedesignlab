import React from "react";
import style from "./index.module.scss";

export default function ImageBlock({ src, caption }) {
  return (
    <div className="subtle-background">
      <div className="container">
        <div className="section text-align-center">
          <figure className={style.block}>
            <img src={src} className={style.image} />
            <figcaption className={style.caption}>{caption}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
