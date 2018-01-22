import React from "react";

import Approach from "./approach";
import VideoBanner from "./video-banner";
import Parnters from "./partners";
import Columbia from "./columbia";
import Team from "./team";

export default function Home() {
  return (
    <div>
      <VideoBanner />
      <Approach />
      <Parnters />
      <Columbia />
      <Team />
    </div>
  );
}
