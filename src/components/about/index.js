import React from "react";
import classNames from "classnames";
import Img from "gatsby-image";
import CoverImage from "../cover-image/";
import CallToAction from "../call-to-action/";
import Team from "./team/";
import style from "./index.module.scss";
import placeholderImage from "../../assets/images/placeholder.png";
import designProcessImage from "../../assets/images/placeholder-design-cycle.png";

export default function About(props) {
  return (
    <div>
      <div className={style.coverContainer}>
        <CoverImage className={style.cover} sizes={props.data.cover.childImageSharp.sizes} />
        <div className={style.coverCaption}>
          Convergence, friends & supporters at the Digital Atelier opening
        </div>
      </div>

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
                fostering deep connections between the college and cultural, media, news/information
                and learning ecosystems locally, nationally and globally.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.isOrange}>
        <div className="container">
          <div className={style.section}>
            <div className={classNames(style.sectionTitle, style.sectionTitleAlt)}>Our Process</div>
            <div className={classNames(style.content, style.col)}>
              <div className={style.contentTitle}>
                We collaboratively design sustainable solutions.
              </div>
              <div className={classNames(style.contentText, "wordpress-content")}>
                <p>
                  We don’t work in isolation. To address complex challenges, we engage the voices,
                  perspectives and experiences of the people most directly impacted.
                </p>
                <p>
                  Whether it’s designing learning playlists for Chicago youth or helping teachers
                  build strong professional learning communities, we apply the human-centered design
                  process to truly meet the needs of diverse communities.
                </p>
                <p>
                  Our participatory process helps strengthen community ties, foster engagement and
                  build sustainable impact.
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
          <div className={style.sectionTitle}>Our Expertise</div>
          <div className={classNames(style.content, style.col)}>
            <div className={style.contentTitle}>
              We are experts in the field of participatory media and learning.
            </div>
            <div className={style.contentText}>
              <p>
                Gochujang ethical art party man bun adaptogen, four loko blue bottle yuccie hell of
                drinking vinegar blog bushwick snackwave hoodie vinyl. Lomo subway tile activated
                charcoal bitters williamsburg, yuccie taiyaki tousled celiac +1 deep v. Gochujang
                godard jianbing, lomo seitan pug pitchfork. Wayfarers kitsch venmo synth shabby chic
                occupy. Skateboard taiyaki listicle forage ugh hella yr lyft kogi.
              </p>
              <p>
                Paleo umami knausgaard direct trade. Pickled copper mug prism lumbersexual tumeric
                ugh, flannel knausgaard. Aesthetic tofu photo booth listicle. Offal meh everyday
                carry poke butcher, farm-to-table hashtag tumblr scenester put a bird on it
                chicharrones echo park succulents gochujang. Pabst fixie cornhole bespoke schlitz.
                Flexitarian unicorn YOLO, vice jianbing seitan fingerstache hella bitters photo
                booth. 8-bit vexillologist organic iceland, marfa shoreditch typewriter tote bag
                godard live-edge.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.isOrange}>
        <div className="container">
          <div className={style.section}>
            <div className={classNames(style.sectionTitle, style.sectionTitleAlt)}>
              Our Partners
            </div>
            <div className={classNames(style.content, style.col)}>
              <div className={style.contentTitle}>
                We build long-term, sustainable partnerships.
              </div>
              <div className={style.contentText}>
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
            <div className={style.colImage}>
              <img className="max-width-100" src={placeholderImage} alt="Placeholder" />
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
