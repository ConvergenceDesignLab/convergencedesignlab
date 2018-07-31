import React from "react";
import classNames from "classnames";
import CallToAction from "../call-to-action";
import PageHeader from "../page-header";
import CoverImage from "../cover-image/";
import TextBlock from "./text-block";
import style from "./index.module.scss";
import coverImage from "../../assets/images/mentor-hats/all-cards.png";
import hatCardImage from "../../assets/images/mentor-hats/hat-cards.png";
import promptCardImage from "../../assets/images/mentor-hats/prompt-cards.png";
import pdImage from "../../assets/images/mentor-hats/spy-hop-pd.jpg";
import pdImage2 from "../../assets/images/mentor-hats/spy-hop-pd-2.jpg";

const overview = (
  <React.Fragment>
    <p>
      The Mentor Hats are a playful way to think about how your facilitation, teaching, or mentoring
      style can impact learning. We all wear different hats. Which do you wear the best? Which would
      you like to try on?
    </p>
    <p>
      The cards can be used to play a more structured game, or they can simply be used as a
      discussion and reflection tool to shake up how you approach teaching.
    </p>
    <p>
      You can download a simplified version of the cards that are ready for printing{" "}
      <a
        href="http://api2.convergencedesignlab.org/wp/wp-content/uploads/2018/07/mentor-hats-simple.pdf"
        target="_blank"
        download
      >
        here
      </a>
      .
    </p>
  </React.Fragment>
);
const hatDescription = (
  <React.Fragment>
    <p>
      The mentor hat cards represent different perspectives that you can adopt when approaching
      teaching or mentoring. We’ve created seven hats, but the blank mentor hat cards are there for
      you to add to your own deck!
    </p>
    <p>What other “hats” do you or your colleagues wear that are not represented in the deck?</p>
  </React.Fragment>
);
const promptDescription = (
  <React.Fragment>
    <p>
      The blank prompt cards can be used to create scenarios for games (see Ways to Play #2) or to
      help focus reflection.
    </p>
    <p>
      How might a learning activity or furniture arrangement impact your facilitation style, or what
      hat you wear? Some ideas for prompts include:
    </p>
    <ul>
      <li>What is a new activity or routine you are interested in trying out with students?</li>
      <li>What is a routine you’d like to improve?</li>
      <li>
        What is something that you would like to try out related to the physical layout or
        arrangement of your learning space?
      </li>
    </ul>
  </React.Fragment>
);
const discussion = (
  <React.Fragment>
    <p>As a group or by yourself:</p>
    <ul>
      <li>
        Choose the hat that you wear the most when teaching. Why does it fit you so well? Choose
        another hat that you don’t often wear. How might you try it on?
      </li>
      <li>
        Identify cards that you think your colleagues demonstrate in their mentoring. Share with
        them why you think they wear it well!
      </li>
      <li>
        Pick a random card and challenge yourself to think of a way to apply that mentoring style in
        your practice.
      </li>
      <li>
        Use the blank cards to create new hats that represent other approaches you take in your
        teaching and mentoring.
      </li>
    </ul>
  </React.Fragment>
);
const applesToApples = (
  <React.Fragment>
    <p>
      This is a game variation for three or more players that is based on Apples to Apples and Cards
      Against Humanity.
    </p>
    <p>Setup:</p>
    <ul>
      <li>
        Make sure each player has their own complete deck of Mentor Hats, which becomes their
        “hand.”
      </li>
      <li>
        Using the blank prompt cards, have each player create one or two prompts of different
        teaching scenarios or challenges. Shuffle this and place it face down.
      </li>
    </ul>
    <p>Play:</p>
    <ul>
      <li>
        At the start of each round of the game, one player becomes the Judge. The Judge pulls the
        top scenario card and reads it aloud.
      </li>
      <li>
        One person at a time, the other players each select one hat card from their hand and explain
        why they believe that hat would work best in the scenario.
      </li>
      <li>
        The Judge chooses the player that was most convincing and gives them the scenario card. The
        next player now becomes the Judge and the game continues until all the scenario cards have
        been exhausted.
      </li>
      <li>At the end of the game, the player with the most scenario cards wins.</li>
    </ul>{" "}
  </React.Fragment>
);

export default function MentorHats() {
  const tags = ["Games", "Professional Development"];
  return (
    <div>
      <div className="section" style={{ paddingBottom: 0 }}>
        <CoverImage className={style.cover} src={coverImage} />
      </div>

      <div className="container">
        <div className="section">
          <div className={style.title}>Mentor Hats</div>
          <div className={style.row}>
            <div className="col--md-6">
              <div className={style.sectionTitle}>What are the Mentor Hats?</div>
              <div className={classNames(style.sectionText, "wordpress-content")}>{overview}</div>
            </div>

            <div className={classNames(style.meta, "col--md-5")}>
              <div className={style.metaSection}>
                <div className={style.sectionTitle}>Tags</div>
                <ul className={style.metaList}>
                  {tags.map(name => <li key={`author-${name}`}>{name}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subtle-background">
        <TextBlock title="Hat Cards" text={hatDescription} imageData={hatCardImage} />
      </div>

      <TextBlock
        title="Prompt Cards"
        text={promptDescription}
        imageData={promptCardImage}
        reverseOrder={true}
      />

      <div className="subtle-background">
        <TextBlock title="Ways to Play #1: Role-Play" text={discussion} imageData={pdImage} />
      </div>

      <TextBlock
        title="Ways to Play #2: Hats to Hats Game"
        text={applesToApples}
        imageData={pdImage2}
        reverseOrder={true}
      />

      <CallToAction title="Looking for a framework?" />
    </div>
  );
}
