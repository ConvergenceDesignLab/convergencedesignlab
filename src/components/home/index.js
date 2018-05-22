import React from "react";

import VideoBanner from "./video-banner/";
import About from "./about/";
import WorkShowcase from "./work-showcase/";
import Parnters from "./partners/";
import ResourcesShowcase from "./resources-showcase/";
import SocialFeeds from "./social-feeds/";
import CallToAction from "../call-to-action/";

export default function Home() {
  return (
    <div>
      <VideoBanner />
      <About />
      <WorkShowcase />
      <Parnters />
      <ResourcesShowcase />
      <SocialFeeds />
      <CallToAction />
    </div>
  );
}
