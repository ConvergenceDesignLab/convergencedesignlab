import React from "react";
import style from "./index.module.scss";

// // // Only grab unique sizes that are less than the maxWidth
// // const imageUrls = {};
// // Object.entries(sizes).forEach(([name, { width, url }]) => {
// //   if (imageUrls[width] === undefined && width <= maxWidth) imageUrls[width] = url;
// // });
// const Img = ({ sizes, imgSizes, ...otherProps }) => {
//   const sortedSizes = Object.values(sizes).sort((obj1, obj2) => obj1.width - obj2.width);
//   const biggestImageUrl = sortedSizes[sortedSizes.length - 1].url;
//   const imgSrcSet = sortedSizes.map(({ width, url }) => `${url} ${width}w`).join(",\n");
//   return <img srcSet={imgSrcSet} sizes="100vw" src={biggestImageUrl} {...otherProps} />;
// };

export default function Cover({ imageData, imageUrl, imageTitle, questionHtml }) {
  const sortedSizes = Object.values(imageData.sizes).sort((obj1, obj2) => obj1.width - obj2.width);
  const fallbackSrc = sortedSizes[sortedSizes.length - 1].url;
  const srcSet = sortedSizes.map(({ width, url }) => `${url} ${width}w`).join(",\n");

  return (
    <div className={style.cover}>
      <img
        className={style.coverImage}
        src={fallbackSrc}
        alt={imageTitle}
        srcSet={srcSet}
        sizes="100vw"
      />
      <div className={style.coverQuestionContainer}>
        <div className={style.coverQuestion} dangerouslySetInnerHTML={{ __html: questionHtml }} />
      </div>
    </div>
  );
}
