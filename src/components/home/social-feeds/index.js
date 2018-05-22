import React from "react";
import { Timeline, Follow, Mention } from "react-twitter-widgets";
import Section from "../home-section/";
import style from "./index.module.scss";

// We can hide the header and add some custom framing, potentially also adding a follow and/or
// mention button:
// <Follow username="ConvergenceDLab" />
// <Mention username="ConvergenceDLab" />

export default function SocialFeeds() {
  return (
    <Section>
      <div className={style.timeline}>
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "ConvergenceDLab"
          }}
          options={{
            chrome: "nofooter", //noheader,nofooter
            height: "550",
            dnt: true,
            linkColor: "#ff9a21"
          }}
        />
      </div>
    </Section>
  );
}
