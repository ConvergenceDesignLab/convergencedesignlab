import React from "react";
import { Timeline, Follow, Mention } from "react-twitter-widgets";
import Section, { Title, Description } from "../home-section/";
import style from "./index.module.scss";

// Twitter errors, see: https://github.com/andrewsuzuki/react-twitter-widgets/issues/10

export default function SocialFeeds() {
  return (
    <Section>
      <Title>Join the Conversation</Title>
      <Description>
        Become part of our community and follow us at{" "}
        <a className="link" href="https://twitter.com/convergencedlab">
          @ConvergenceDLab
        </a>.
      </Description>
      <div className={style.links}>
        <Mention username="ConvergenceDLab" options={{ dnt: true, size: "large" }} />
        <Follow username="ConvergenceDLab" options={{ count: "none", dnt: true, size: "large" }} />
      </div>
      <div className={style.timeline}>
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "ConvergenceDLab"
          }}
          options={{
            chrome: "nofooter,noheader",
            height: "100%",
            dnt: true,
            linkColor: "#ff9a21"
          }}
        />
      </div>
    </Section>
  );
}
