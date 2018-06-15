import React from "react";
import Link from "gatsby-link";
import get from "lodash.get";
import ZoomingImage from "../zooming-image";
import style from "./index.module.scss";

export default function RelatedWork({ data }) {
  const imageUrl = get(data, "banner.image.url", "");
  const imageTitle = get(data, "banner.image.title", "");
  const projectName = get(data, "heading.headline", "");
  const projectUrl = "/work/discoverdesign";

  if (!data || !data.length) return null;

  const relatedWork = data.map(post => {
    const name = get(post, "acf.title");
    const id = get(post, "ID");
    const image = get(post, "acf.image.sizes.width_800");
    let url;
    let type;
    if (post.post_type === "project") {
      url = "/work/" + get(post, "post_name");
    } else if (post.post_type === "resource") {
      url = "/resources/" + get(post, "post_name");
    }
    return (
      <div key={`related-${id}`} className={style.project}>
        <figure className={style.figure}>
          <Link to={url} className={style.imageLink}>
            <ZoomingImage wrapperClassName={style.imageWrapper} src={image} />
          </Link>
          <figcaption className={style.caption}>
            <div className={style.projectName}>{name}</div>
            <Link to={url} className={style.link}>
              Learn more
            </Link>
          </figcaption>
        </figure>
      </div>
    );
  });

  return (
    <div className="subtle-background">
      <div className="container">
        <div className="section">
          <div className={style.title}>Explore Similar Work</div>
          <div className={style.container}>{relatedWork}</div>
        </div>
      </div>
    </div>
  );
}
