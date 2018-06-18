import React from "react";
import style from "./index.module.scss";
import video from "../../../assets/video/banner-1280x720.mp4";
import image from "../../../assets/video/first-frame.png";

export default function VideoBanner() {
  return (
    <div className={style.banner}>
      <div className={style.background}>
        <div className={style.overlay} />
        <video
          width="100%"
          className={style.video}
          poster={image}
          data-object-fit="cover"
          autoPlay
          loop
          muted
          playsInline
        >
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
