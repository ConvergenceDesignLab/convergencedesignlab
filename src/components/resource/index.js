import React from "react";
import Link from "gatsby-link";
import { fetchResourceBySlug } from "../../utils/fetch-wp";
import get from "lodash.get";
import { Redirect } from "react-router-dom";
import classNames from "classnames";
import CoverImage from "../cover-image/";
import RelatedWork from "../related-work/";
import CallToAction from "../call-to-action/";
import style from "./index.module.scss";
import image from "../../assets/images/publications/test-1.png";

const data = {
  id: 1,
  title: "Pudding pudding gummi bears chocolate brownie dessert candy",
  description:
    "Jelly-o macaroon gummi bears bonbon gummies topping topping oat cake. Chocolate bar marzipan biscuit tiramisu cookie lemon drops cotton candy. Sesame snaps donut sesame snaps pie jelly-o toffee. Cheesecake muffin toffee. Carrot cake dessert wafer candy canes macaroon cheesecake lollipop.",
  image
};

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

      fetchResourceBySlug(slug).then(data => {
        if (data === null || !data.acf) this.setState({ noValidData: true });
        else this.setState({ data: data.acf });
      });
    }
  }

  render() {
    const { data, noValidData } = this.state;

    if (noValidData) return <Redirect to="/404" />;

    if (!data) {
      return <div style={{ minHeight: "1200px" }} />;
    }

    const title = get(data, "title", "");
    const imageTitle = title;
    const description = get(data, "overview", "");
    const downloadUrl = get(data, "download", "");
    const imageUrl = get(data, "image.sizes.large", "");
    const tags = get(data, "tags", []).map(obj => obj.name);
    const authors = get(data, "authors", []).map(obj => obj.author);

    return (
      <div>
        <CoverImage src={imageUrl} alt={imageTitle} />
        <div className="container">
          <div className="section">
            <div className={style.title}>{title}</div>
            <div className="row--space-between">
              <div className="col--sm-12 col--md-6">
                <div className={style.sectionTitle}>Overview</div>
                <div
                  className={style.sectionText}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
              <div className={classNames(style.meta, "col--sm-12 col--md-5")}>
                <div className={style.metaSection}>
                  <div className={style.sectionTitle}>Tags</div>
                  <ul className={style.metaList}>
                    {tags.map(name => <li key={`author-${name}`}>{name}</li>)}
                  </ul>
                </div>
                <div className={style.metaSection}>
                  <div className={style.sectionTitle}>Authors</div>
                  <ul className={style.metaList}>
                    {authors.map(name => <li key={`author-${name}`}>{name}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className={style.download}>
              <a href={downloadUrl} download target="_blank">
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* <RelatedWork data={data} /> */}

        <CallToAction title="Looking for a framework?" />
      </div>
    );
  }
}
