import React from "react";
import style from "./index.module.scss";

export default function Cover({ imageUrl, imageTitle, questionHtml }) {
  return (
    <div className={style.cover}>
      <img className={style.coverImage} src={imageUrl} alt={imageTitle} />
      {questionHtml && (
        <div className={style.coverQuestionContainer}>
          <div className={style.coverQuestion} dangerouslySetInnerHTML={{ __html: questionHtml }} />
        </div>
      )}
    </div>
  );
}
