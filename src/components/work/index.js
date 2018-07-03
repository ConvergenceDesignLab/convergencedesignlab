import React from "react";
import Link from "gatsby-link";
import get from "lodash.get";
import striptags from "striptags";
import CallToAction from "../call-to-action/";
import Loading from "../loading/";
import PageHeader from "../page-header";
import { fetchWork } from "../../utils/fetch-wp";
import ZoomingImage from "../zooming-image";
import style from "./index.module.scss";

class Work extends React.Component {
  state = { projects: null };

  componentDidMount() {
    fetchWork().then(json => this.setState({ projects: json }));
  }

  render() {
    const { projects } = this.state;

    let projectGrid = null;
    if (projects) {
      projectGrid = projects.map(project => {
        const { ID: id, post_name: slug, question, title, subtitle, image, partners } = project;
        return (
          <div key={`project-${id}`} className={style.projectContainer}>
            <Link className={style.projectLinkWrapper} to={`/work/${slug}/`}>
              <figure className={style.projectFigure}>
                <div className={style.imageWrapper}>
                  <img className={style.projectImage} src={get(image, "sizes.width_800", "")} />
                </div>
                <figcaption className={style.projectCaption}>
                  <div className={style.captionTitle}>{title}</div>
                  <div className={style.captionSubtitle}>{subtitle}</div>
                  <div className={style.captionParnters}>
                    {(partners || [])
                      .map(p => p.name)
                      .slice(0, 2)
                      .join(", ")}
                  </div>
                  <div
                    className={style.captionQuestion}
                    dangerouslySetInnerHTML={{ __html: striptags(question) }}
                  />
                </figcaption>
              </figure>
            </Link>
          </div>
        );
      });
    }

    return (
      <div>
        <PageHeader
          title="Selected Work"
          caption="We design participatory solutions that meet the needs of civic, cultural and learning organizations. Check out selected case studies of our work below."
        />

        <div className="container">
          {projects ? (
            <div className={style.projectGrid}>{projectGrid}</div>
          ) : (
            <Loading height="65vh" />
          )}
        </div>

        <CallToAction alternateColor={true} />
      </div>
    );
  }
}

export default Work;
