import React from "react";
import style from "./index.module.scss";

export default function PageHeader({ title, caption }) {
  return (
    <div className="container">
      <div className={style.title}>{title}</div>
      {caption && <div className={style.caption}>{caption}</div>}
    </div>
  );
}
