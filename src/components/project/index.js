import React from "react";
import Link from "gatsby-link";
import { fetchProjectBySlug } from "../../utils/fetch-wp";
import { Redirect } from "react-router-dom";
import classNames from "classnames";
import ProjectData from "./project-data";
import Cover from "./cover/";
import ImageBlock from "./image-block/";
import QuoteBlock from "./quote-block/";
import RelatedWork from "../related-work/";
import CallToAction from "../call-to-action/";
import Loading from "../loading";
import style from "./index.module.scss";

const TextBlock = ({ title, text, imageName, imageUrl, reverseOrder, className }) => {
  const textSection = (
    <div
      key={`text-block-text-${title}`}
      className={classNames(style.blockText, "col--sm-12 col--md-6", className)}
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

export default class Project extends React.Component {
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

      fetchProjectBySlug(slug).then(data => {
        const projectData = new ProjectData(data);
        this.setState({
          noValidData: !projectData.hasValidData,
          data: projectData
        });
      });
    }
  }

  render() {
    const { data, noValidData } = this.state;

    if (noValidData) return <Redirect to="/404" />;

    if (!data) return <Loading height="100vh" />;

    const { designQuestion, coverImageUrl, title, challengeSection, partners, tags } = data;

    let sections = [];
    if (data.imageBreakUrl) {
      const { imageBreakUrl, imageBreakCaption } = data;
      sections.push(<ImageBlock src={imageBreakUrl} caption={imageBreakCaption} />);
    }
    if (data.processSectionText) {
      const { processSectionText, processSectionImage } = data;
      sections.push(
        <TextBlock
          title="Process"
          className="wordpress-content"
          text={processSectionText}
          imageUrl={processSectionImage}
          reverseOrder={false}
        />
      );
    }
    if (data.testimonialBreakText) {
      const { testimonialBreakText, testimonialBreakAttribution } = data;
      sections.push(
        <QuoteBlock quote={testimonialBreakText} attribution={testimonialBreakAttribution} />
      );
    }
    if (data.resultsSectionText) {
      const { resultsSectionText, resultsSectionImage } = data;
      sections.push(
        <TextBlock
          className="wordpress-content"
          title="Results"
          text={resultsSectionText}
          imageUrl={resultsSectionImage}
          reverseOrder={true}
        />
      );
    }

    return (
      <div>
        <Cover imageUrl={coverImageUrl} imageTitle={title} questionHtml={designQuestion} />
        <div className="container">
          <div className="section">
            <div className={style.title}>{title}</div>
            <div className="row--space-between">
              <div className="col--sm-12 col--md-6">
                <div className={style.sectionTitle}>Challenge</div>
                <div
                  className={classNames(style.sectionText, "wordpress-content")}
                  dangerouslySetInnerHTML={{ __html: challengeSection }}
                />
              </div>
              <div className={classNames(style.meta, "col--sm-12 col--md-5")}>
                <div>
                  <div className={style.sectionTitle}>Partners</div>
                  <ul className={style.metaList}>
                    {partners.map(name => <li key={name}>{name}</li>)}
                  </ul>
                </div>
                <div>
                  <div className={style.sectionTitle}>Tags</div>
                  <ul className={style.metaList}>{tags.map(name => <li key={name}>{name}</li>)}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {sections}

        {/* <RelatedWork data={data} /> */}

        <CallToAction title="Interested in partnering?" />
      </div>
    );
  }
}
