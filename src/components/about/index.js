import React from "react";
import classNames from "classnames";
import Img from "gatsby-image";
import CoverImage from "../cover-image/";
import CallToAction from "../call-to-action/";
import Team from "./team/";
import style from "./index.module.scss";
import partnersImage from "../../assets/images/partners-composite.png";

export default function About(props) {
  const teamImageData = props.data.teamImages.edges.map(e => ({
    filename: e.node.resize.originalName,
    src: e.node.resize.src
  }));

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
              <img className="max-width-100" src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={style.section}>
          <div className={style.sectionTitle}>Theories of Change</div>
          <div className={classNames(style.content, style.col)}>
            <div className={style.contentTitle}>
              We are experts in the field of participatory media and learning.
            </div>
            <div className={style.contentText}>
              <p>
                We aim to produce long-lasting change. We do this by helping to build vibrant civic
                media and learning ecosystems that support educational equity and participatory
                democracy.
              </p>
              <p>
                Our research and design practices are shaped by social impact theories like
                Connected Learning and Participatory Media. Connected Learning positing that youth
                learn best when pursuing interests and passions among a community of peers.
                Participatory Media flips consumers in active producers who create, remix and share
                media.
              </p>
              <p>
                These theories influence our work in learning experience design, audience
                engagement, research and community building. In turn, the projects we carry out
                generate shareable data, frameworks and tools that help grow the collective
                knowledge and capacity of our field.
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
                  Locally, we form partnerships that support our strategic vision for Chicago as a
                  connected city with leading innovators such as Chicago Learning Exchange/Hive, The
                  Real Chi and Chicago Cultural Alliance.
                </p>
                <p>
                  Nationally, we work to grow the field by collaborating with education, media, news
                  and civic networks such as Participate, Media Education Lab, 22x20 and many
                  academic research institutions.
                </p>
              </div>
            </div>
            <div className={style.colImage}>
              <img className="max-width-100" src={partnersImage} alt="Placeholder" />
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
          <Team teamImageData={teamImageData} />
        </div>
      </div>

      <CallToAction title="Want to partner with us?" />
    </div>
  );
}
