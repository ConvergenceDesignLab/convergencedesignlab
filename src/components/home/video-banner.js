import React from "react";

import video from "../../assets/video/banner.mp4";

export default function VideoBanner() {
  return (
    <div className="container video-banner">
      <div className="video-background">
        <div className="overlay" />
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="banner-text">
        <div className="title">Convergence Design Lab</div>
        <div className="sub-title">Designing the future of participation</div>
      </div>
    </div>
  );
}
