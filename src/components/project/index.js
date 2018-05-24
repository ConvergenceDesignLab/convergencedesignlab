import React from "react";
import Link from "gatsby-link";
import { fetchProjectBySlug } from "../../utils/fetch-wp";
import get from "lodash.get";
import { Redirect } from "react-router-dom";
import classNames from "classnames";
import Cover from "./cover/";
import ImageBlock from "./image-block/";
import style from "./index.module.scss";

const TextBlock = ({ title, htmlText }) => (
  <div className="container">
    <div className="section">
      <h2 className="project-text-block__title">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlText }} />
    </div>
  </div>
);

const QuoteBlock = ({ quote, attribution }) => (
  <div className="subtle-background">
    <div className="container">
      <div className="section">
        <blockquote className="blockquote">
          <div className="blockquote__quote">{quote}</div>
          <div className="blockquote__citation">&mdash; {attribution}</div>
        </blockquote>
      </div>
    </div>
  </div>
);

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

    return (
      <div>
        <Cover imageUrl={imageUrl} imageTitle={imageTitle} questionHtml={question} />
        <div className="container">
          <div className="section">
            <div className={style.title}>{title}</div>
            <div className="row--space-between">
              <div className="col--xs-12 col--sm-9">
                <div className={style.sectionTitle}>Challenge</div>
                <div
                  className={style.sectionText}
                  dangerouslySetInnerHTML={{ __html: challenge }}
                />
              </div>
              <div className="col--xs-12 col--sm-3">
                <div>
                  <div className={classNames("text-align-right", style.sectionTitle)}>Partners</div>
                  <ul className={style.metaList}>
                    {partners.map(({ name }) => <li key={name}>{name}</li>)}
                  </ul>
                </div>
                <div>
                  <div className={classNames("text-align-right", style.sectionTitle)}>Tags</div>
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
            return <TextBlock title={block.title} htmlText={block.text} />;
          } else if (block.acf_fc_layout === "quote") {
            return <QuoteBlock quote={block.quote} attribution={block.attribution} />;
          } else if (block.acf_fc_layout === "image") {
            return <ImageBlock src={block.image.url} caption={block.caption} />;
          }
        })}
      </div>
    );
  }
}
