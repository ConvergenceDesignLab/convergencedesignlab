import React from "react";
import Link from "gatsby-link";
import { fetchProjectBySlug } from "../utils/fetch-wp";
import get from "lodash.get";
import { Redirect } from "react-router-dom";

const TextBlock = ({ title, htmlText }) => (
  <div className="container">
    <div className="section">
      <h2 className="project-text-block__title">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: htmlText }} />
    </div>
  </div>
);

const QuoteBlock = ({ quote, attribution }) => (
  <div className="orange-background light-text">
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

const ImageBlock = ({ src, caption }) => (
  <div className="subtle-background">
    <div className="container">
      <div className="section">
        <figure>
          <img src={src} />
          <figcaption>{caption}</figcaption>
        </figure>
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
      const path = this.props.location.pathname;
      const slug = path
        .substring(6) // Everything after the leading "/work/"
        .replace("/", ""); // Remove trailing slash

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
      return <div className="nav-offset container">Loading...</div>;
    }

    return (
      <div className="nav-offset">
        <div className="container project-header">
          <h1 className="project-header__title">{get(data, "heading.headline", "")}</h1>
          <h2 className="project-header__subtitle">{get(data, "heading.subtitle", "")}</h2>
        </div>

        <div className="container">
          <div className="project-banner">
            <img
              className="project-banner__image"
              src={get(data, "banner.image.url", "")}
              alt={get(data, "banner.image.title", "")}
            />
          </div>
        </div>

        <div className="container">
          <div className="section row--space-between">
            <div className="project-overview col--xs-12 col--sm-9">
              <h2 className="project-overview__title">{get(data, "overview.title", "")}</h2>
              <div dangerouslySetInnerHTML={{ __html: get(data, "overview.text", "") }} />
            </div>
            <div className="project-meta col--xs-12 col--sm-2">
              <div className="project-meta__partners">
                <h2 className="project-meta__title">Partners</h2>
                <ul className="project-meta__list">
                  {get(data, "meta.partners", []).map(({ name }) => <li key={name}>{name}</li>)}
                </ul>
              </div>
              <div className="project-meta__tags">
                <h2 className="project-meta__title">Tags</h2>
                <ul className="project-meta__list">
                  {get(data, "meta.tags", []).map(({ name }) => <li key={name}>{name}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {get(data, "narrative", []).map(block => {
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
