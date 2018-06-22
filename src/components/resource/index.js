import React from "react";
import Link from "gatsby-link";
import { fetchResource } from "../../utils/fetch-wp";
import get from "lodash.get";
import { Redirect } from "react-router-dom";
import classNames from "classnames";
import { WpCoverImage } from "../cover-image/";
import RelatedWork from "../related-work/";
import CallToAction from "../call-to-action/";
import Loading from "../loading";
import { processImageData } from "../../utils/process-wp-data";
import style from "./index.module.scss";

export default class Resource extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null, noValidData: false };
  }

  componentDidMount() {
    if (!this.state.data) {
      // Extract the slug from the URL, assuming it is the last part of the pathname
      const path = this.props.location.pathname;
      const pathNoTrail = path.endsWith("/") ? path.slice(0, path.length - 1) : path;
      const slug = pathNoTrail.split("/").pop();

      fetchResource(slug)
        .then(data => {
          if (data === null || !data.acf) this.setState({ noValidData: true });
          else this.setState({ data });
        })
        .catch(err =>
          this.setState({
            noValidData: true
          })
        );
    }
  }

  render() {
    const { data, noValidData } = this.state;

    if (noValidData) return <Redirect to="/404" />;

    if (!data) return <Loading height="100vh" />;

    const title = get(data, "acf.title", "");
    const imageTitle = title;
    const description = get(data, "acf.overview", "");
    const downloadUrl = get(data, "acf.download", "");
    const imageData = processImageData(get(data, "acf.image", ""));
    const tags = get(data, "acf.tags", []).map(obj => obj.name);
    const authors = get(data, "acf.authors", []).map(obj => obj.author);
    const relatedWork = get(data, "acf.related_work");

    return (
      <div>
        <WpCoverImage className={style.cover} sizes={imageData.sizes} alt={imageTitle} />
        <div className="container">
          <div className="section">
            <div className={style.title}>{title}</div>
            <div className={style.row}>
              <div className="col--md-6">
                <div className={style.sectionTitle}>Overview</div>
                <div
                  className={classNames(style.sectionText, "wordpress-content")}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
              <div className={classNames(style.meta, "col--md-5")}>
                <div className={style.metaSection}>
                  <div className={style.sectionTitle}>Tags</div>
                  <ul className={style.metaList}>
                    {tags.map(name => <li key={`author-${name}`}>{name}</li>)}
                  </ul>
                </div>
                <div className={style.metaSection}>
                  <div className={style.sectionTitle}>Collaborators</div>
                  <ul className={style.metaList}>
                    {authors.map(name => <li key={`author-${name}`}>{name}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className={style.download}>
              <a className="link" href={downloadUrl} download target="_blank">
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* {relatedWork && <RelatedWork data={relatedWork} />} */}

        <CallToAction title="Looking for a framework?" />
      </div>
    );
  }
}
