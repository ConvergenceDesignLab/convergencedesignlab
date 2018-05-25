import React from "react";
import classNames from "classnames";
import CoverImage from "../cover-image/";
import style from "./index.module.scss";
import image from "../../assets/images/da-opening-cropped.jpg";

export default function About() {
  return (
    <div>
      <CoverImage src={image} className={style.cover}/>
    </div>
  );
}
