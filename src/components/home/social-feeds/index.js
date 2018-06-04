import React from "react";
import { Timeline, Follow, Mention } from "react-twitter-widgets";
import Section, { Title, Description } from "../home-section/";
import style from "./index.module.scss";

// We can hide the header and add some custom framing, potentially also adding a follow and/or
// mention button:
// <Follow username="ConvergenceDLab" />
// <Mention username="ConvergenceDLab" />

export default function SocialFeeds() {
  return (
    <Section>
      <Title>Join the Conversation</Title>
      <Description>
        Put a bird on it <a href="https://twitter.com/convergencedlab">@ConvergenceDLab</a> iceland
        trust fund, occupy poutine kogi sartorial XOXO la croix. Freegan portland kale chips, squid
        four dollar toast fam photo booth.
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
            chrome: "nofooter,noheader", //noheader,nofooter
            height: "550",
            dnt: true,
            linkColor: "#ff9a21"
          }}
        />
      </div>
    </Section>
  );
}
