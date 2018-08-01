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
import TextBlock from "./text-block";
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
    const overview = get(data, "acf.overview", "");
    const downloadUrl = get(data, "acf.download", "");
    const imageData = processImageData(get(data, "acf.image", ""));
    // Tags and collaborators can be false when empty so enforce an empty array
    const tags = (get(data, "acf.tags") || []).map(obj => obj.name);
    const collaborators = (get(data, "acf.collaborators") || []).map(obj => obj.name);
    const relatedWork = get(data, "acf.related_work");
    const sections = get(data, "acf.sections");

    // Parse out the different types of resources (for now)
    const overviewTitle = typeof overview === "string" ? "Overview" : overview.title;
    const overviewHtml = typeof overview === "string" ? overview : overview.text;

    return (
      <div>
        <WpCoverImage className={style.cover} sizes={imageData.sizes} alt={imageTitle} />

        <div className="container">
          <div className="section">
            <div className={style.title}>{title}</div>
            <div className={style.row}>
              <div className="col--md-6">
                <div className={style.sectionTitle}>{overviewTitle}</div>
                <div
                  className={classNames(style.sectionText, "wordpress-content")}
                  dangerouslySetInnerHTML={{ __html: overviewHtml }}
                />
              </div>
              <div className={classNames(style.meta, "col--md-5")}>
                {tags.length > 0 && (
                  <div className={style.metaSection}>
                    <div className={style.sectionTitle}>Tags</div>
                    <ul className={style.metaList}>
                      {tags.map(name => <li key={`author-${name}`}>{name}</li>)}
                    </ul>
                  </div>
                )}
                {collaborators.length > 0 && (
                  <div className={style.metaSection}>
                    <div className={style.sectionTitle}>Collaborators</div>
                    <ul className={style.metaList}>
                      {collaborators.map(name => <li key={`author-${name}`}>{name}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            {downloadUrl && (
              <div className={style.download}>
                <a className="link" href={downloadUrl} download target="_blank">
                  Download PDF
                </a>
              </div>
            )}
          </div>
        </div>

        {sections &&
          sections.map((section, i) => {
            const { image, title, text } = section;
            const imageData = image && processImageData(image);
            const isOdd = (i + 1) % 2 !== 0;
            return (
              <div className={classNames({ "subtle-background": isOdd })}>
                <TextBlock title={title} text={text} imageData={imageData} reverseOrder={!isOdd} />
              </div>
            );
          })}

        {/* {relatedWork && <RelatedWork data={relatedWork} />} */}

        <CallToAction title="Looking for a framework?" />
      </div>
    );
  }
}
