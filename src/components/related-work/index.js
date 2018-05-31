import React from "react";
import Link from "gatsby-link";
import get from "lodash.get";
import style from "./index.module.scss";

export default function RelatedWork({ data }) {
  const imageUrl = get(data, "banner.image.url", "");
  const imageTitle = get(data, "banner.image.title", "");
  const projectName = get(data, "heading.headline", "");
  const projectUrl = "/work/discoverdesign";

  return (
    <div className="subtle-background">
      <div className="container">
        <div className="section">
          <div className={style.title}>Explore Other Work</div>
          <div className={style.container}>
            <div className={style.project}>
              <figure className={style.figure}>
                <img className={style.image} src={imageUrl} alt={imageTitle} />
                <figcaption className={style.caption}>
                  <div className={style.projectName}>{projectName}</div>
                  <Link to={projectUrl} className={style.link}>
                    Learn more
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className={style.project}>
              <figure className={style.figure}>
                <img className={style.image} src={imageUrl} alt={imageTitle} />
                <figcaption className={style.caption}>
                  <div className={style.projectName}>{projectName}</div>
                  <Link to={projectUrl} className={style.link}>
                    Learn more
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
