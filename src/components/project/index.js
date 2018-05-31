import React from "react";
import Link from "gatsby-link";
import { fetchProjectBySlug } from "../../utils/fetch-wp";
import get from "lodash.get";
import { Redirect } from "react-router-dom";
import classNames from "classnames";
import Cover from "./cover/";
import ImageBlock from "./image-block/";
import QuoteBlock from "./quote-block/";
import RelatedWork from "../related-work/";
import CallToAction from "../call-to-action/";
import style from "./index.module.scss";

const TextBlock = ({ title, text, imageName, imageUrl, reverseOrder }) => {
  const textSection = (
    <div
      key={`text-block-text-${title}`}
      className={classNames(style.blockText, "col--sm-12 col--md-6")}
    >
      <div className={style.sectionTitle}>{title}</div>
      <div className={style.sectionText} dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
  const imageSection = (
    <div
      key={`text-block-image-${title}`}
      className={classNames(style.blockImage, "col--sm-12 col--md-6")}
    >
      <img className={style.sectionImage} src={imageUrl} alt={imageName} />
    </div>
  );

  return (
    <div className="container">
      <div className="section">
        <div className="row--space-between">
          {reverseOrder ? [textSection, imageSection] : [imageSection, textSection]}
        </div>
      </div>
    </div>
  );
};

export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  componentDidMount() {
    if (!this.state.data) {
      // const path = this.props.location.pathname;
      // const slug = path
      //   .substring(6) // Everything after the leading "/work/"
      //   .replace("/", ""); // Remove trailing slash

      // For now, just always fetch the same page
      const slug = "discoverdesign";

      fetchProjectBySlug(slug).then(data => {
        if (data === null || !data.acf) this.setState({ data: null });
        else this.setState({ data: data.acf });
      });
    }
  }

  render() {
    const { data } = this.state;

    if (data === null) return <Redirect to="/404" />;

    if (!data) {
      return <div style={{ minHeight: "1200px" }} />;
    }

    let narrative = get(data, "narrative"); // Defaults to false
    if (!narrative) narrative = [];

    const question = get(data, "question", "");
    const imageUrl = get(data, "banner.image.url", "");
    const imageTitle = get(data, "banner.image.title", "");
    const title = get(data, "heading.headline", "");
    const challenge = get(data, "overview.text", "");
    const partners = get(data, "meta.partners", []);
    const tags = get(data, "meta.tags", []);

    let blockNum = 0;

    return (
      <div>
        <Cover imageUrl={imageUrl} imageTitle={imageTitle} questionHtml={question} />
        <div className="container">
          <div className="section">
            <div className={style.title}>{title}</div>
            <div className="row--space-between">
              <div className="col--sm-12 col--md-6">
                <div className={style.sectionTitle}>Challenge</div>
                <div
                  className={style.sectionText}
                  dangerouslySetInnerHTML={{ __html: challenge }}
                />
              </div>
              <div className={classNames(style.meta, "col--sm-12 col--md-5")}>
                <div>
                  <div className={style.sectionTitle}>Partners</div>
                  <ul className={style.metaList}>
                    {partners.map(({ name }) => <li key={name}>{name}</li>)}
                  </ul>
                </div>
                <div>
                  <div className={style.sectionTitle}>Tags</div>
                  <ul className={style.metaList}>
                    {tags.map(({ name }) => <li key={name}>{name}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {narrative.map(block => {
          if (block.acf_fc_layout === "text") {
            blockNum++;
            return (
              <TextBlock
                title={block.title}
                text={block.text}
                imageName={block.image.name}
                imageUrl={block.image.sizes.medium_large}
                reverseOrder={blockNum % 2 === 0}
              />
            );
          } else if (block.acf_fc_layout === "quote") {
            return <QuoteBlock quote={block.quote} attribution={block.attribution} />;
          } else if (block.acf_fc_layout === "image") {
            return <ImageBlock src={block.image.url} caption={block.caption} />;
          }
        })}

        <RelatedWork data={data} />

        <CallToAction title="Interested in partnering?" />
      </div>
    );
  }
}
