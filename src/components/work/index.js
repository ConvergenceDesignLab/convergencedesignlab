import React from "react";
import Link from "gatsby-link";
import get from "lodash.get";
import striptags from "striptags";
import CallToAction from "../call-to-action/";
import Loading from "../loading/";
import { fetchWork } from "../../utils/fetch-wp";
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
        const { id, slug, question, image } = project;
        return (
          <div key={`project-${id}`} className={style.projectContainer}>
            <Link className={style.projectLinkWrapper} to={`/work/${slug}/`}>
              <figure className={style.projectFigure}>
                <img className={style.projectImage} src={image} />
                <figcaption className={style.projectCaption}>
                  <div dangerouslySetInnerHTML={{ __html: striptags(question) }} />
                </figcaption>
              </figure>
            </Link>
          </div>
        );
      });
    }

    return (
      <div>
        <div className="container">
          <div className={style.title}>Selected Work</div>
        </div>

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
