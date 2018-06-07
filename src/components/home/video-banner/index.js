import React from "react";
import style from "./index.module.scss";
import video from "../../../assets/video/banner.mp4";

export default function VideoBanner() {
  return (
    <div className={`container ${style.banner}`}>
      <div className={style.background}>
        <div className={style.overlay} />
        <video className={style.video} data-object-fit="cover" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={style.text}>
        <div className={style.title}>Convergence Design Lab</div>
        <div className={style.subtitle}>
          Advancing Equity and Engagement Through<span className={style.break}> </span>Learner-Centered
          Design
        </div>
      </div>
    </div>
  );
}
