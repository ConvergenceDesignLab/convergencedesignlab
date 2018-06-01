import React from "react";
import style from "./index.module.scss";

export default function QuoteBlock({ quote, attribution }) {
  return (
    <div className="subtle-background">
      <div className="container">
        <div className="section">
          <blockquote className={style.quote}>
            <div className={style.text} dangerouslySetInnerHTML={{ __html: quote }} />
            <div className={style.attribution}>&mdash; {attribution}</div>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
