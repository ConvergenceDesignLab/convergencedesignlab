import React from "react";
import classNames from "classnames";
import CoverImage from "../cover-image/";
import CallToAction from "../call-to-action/";
import Team from "./team/";
import style from "./index.module.scss";
import image from "../../assets/images/da-opening-cropped.png";
import placeholderImage from "../../assets/images/placeholder.png";
import designProcessImage from "../../assets/images/placeholder-design-cycle.png";

export default function About() {
  return (
    <div>
      <CoverImage src={image} className={style.cover} />

      <div className="container">
        <div className={style.section}>
          <div className={style.sectionTitle}>About Us</div>
          <div className={classNames(style.content, style.col)}>
            <div className={style.contentTitle}>
              We are an applied research center and learning design studio.
            </div>
            <div className={style.contentText}>
              <p>
                Convergence Design Lab is an applied research center and a learning design studio.
                We partner with organizations to prepare youth to become future-ready, media fluent
                and active participants in public life.
              </p>
              <p>
                As part of the School of Media Arts at Columbia College Chicago, we aim to be an
                animating force in our Chicago communities and in the larger world beyond by
                fostering deep connections between the college and cultural, media and learning
                ecosystems locally, nationally and globally.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.isOrange}>
        <div className="container">
          <div className={style.section}>
            <div className={classNames(style.sectionTitle, style.sectionTitleAlt)}>The Theory</div>
            <div className={classNames(style.content, style.col)}>
              <div className={style.contentTitle}>
                Our work is grounded in years of applied research.
              </div>
              <div className={style.contentText}>
                <p>
                  We began in 2013 with a multi-million dollar grant from the U.S. Department of
                  Education to develop innovative practices to improve Chicago education. Working
                  inside two high-need Chicago Public Schools, we developed, tested and researched a
                  new 21st century education model based on connected learning theory which serves
                  as the foundation for all the work we do.
                </p>
                <p>
                  The theory posits that youth learn best when pursuing their interests and passions
                  among a community of their peers. Through putting this into practice and
                  evaluating the outcomes over the course of three years, both schools experienced
                  whole school improvement – from increased attendance, to teacher technology
                  proficiency and student academic performance and engagement.
                </p>
                <p>
                  We are committed to integrating rigorous research, participatory reflection and
                  actionable evaluation into all aspects of our work.
                </p>
              </div>
            </div>
            <div className={style.colImage}>
              <img className="max-width-100" src={placeholderImage} alt="Placeholder" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={style.section}>
          <div className={style.sectionTitle}>Our Process</div>
          <div className={classNames(style.content, style.col)}>
            <div className={style.contentTitle}>
              We apply human-centered design and build communities of practice
            </div>
            <div className={classNames(style.contentText, "wordpress-content")}>
              <p>
                We apply a participatory design thinking process to co-create custom solutions in
                partnership with civic, cultural and learning organizations. This process, with its
                emphasis on discovery, play, collaboration and active reflection, leads to creative
                solutions that promote participation, equity and engagement.
              </p>
              <p>
                Through building strong communities of practice, we work to strengthen the long-term
                capacity and the sustainability of civic, cultural and learning organizations.
                Through each of our projects and partnerships, we ask:
              </p>
              <ul>
                <li>
                  How might we design solutions by engaging the voices, perspectives and experiences
                  of people most directly impacted?
                </li>
                <li>
                  How might we design routines and structures that enable strong communities of
                  practice to take root and thrive?
                </li>
              </ul>
            </div>
          </div>
          <div className={style.designImage}>
            <img className="width-100" src={designProcessImage} alt="Placeholder" />
          </div>
        </div>
      </div>

      <div className={style.isOrange}>
        <div className="container">
          <div className={style.section}>
            <div className={style.sectionTitle}>Our Partners</div>
            <div className={classNames(style.content, style.col)}>
              <div className={style.contentTitle}>
                We build long-term, sustainable partnerships.
              </div>
              <div className={style.contentText}>
                <p>
                  We don’t work in isolation. Designing for equity in civic, culture and educational
                  spaces requires many, diverse voices to work together. We aim to be the connector
                  that fosters a connected ecosystem of partners working towards a shared vision.
                </p>
                <p>
                  Within Chicago, that is why we work to form local partnerships that support our
                  strategic vision for a connected city with leading innovators such as Chicago Hive
                  Network/Chicago Learning Exchange, City Tech Collaborative and Chicago Cultural
                  Alliance.
                </p>
                <p>
                  At a national and global level, we collaborate with networks supporting digital
                  literacy, youth media education and community activism with organizations such as
                  Participate.com, The National Writing Project, Spy Hop, LRNG, NAMLE, Free Spirit
                  Media, The Alliance and many academic research institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={style.section}>
          <div className={style.sectionTitle}>The Team</div>
          <div className={classNames(style.content, style.col)}>
            <div className={style.contentTitle}>
              We are a team of learning designers, researchers and creative technologists.
            </div>
          </div>
          <Team />
        </div>
      </div>

      <CallToAction title="Want to partner with us?" />
    </div>
  );
}
