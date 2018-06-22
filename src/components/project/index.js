import React from "react";
import Link from "gatsby-link";
import { fetchProject } from "../../utils/fetch-wp";
import { Redirect } from "react-router-dom";
import classNames from "classnames";
import ProjectData from "./project-data";
import Cover from "./cover/";
import ImageBlock from "./image-block/";
import QuoteBlock from "./quote-block/";
import RelatedWork from "../related-work/";
import CallToAction from "../call-to-action/";
import Loading from "../loading";
import TextBlock from "./text-block";
import style from "./index.module.scss";

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

      fetchProject(slug)
        .then(data => {
          const projectData = new ProjectData(data);
          this.setState({
            noValidData: !projectData.hasValidData,
            data: projectData
          });
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

    const { designQuestion, coverImageData, title, challengeSection, partners, tags } = data;

    let sections = [];
    if (data.imageBreak.image) {
      const { caption, image } = data.imageBreak;
      sections.push(<ImageBlock key="image-break" imageData={image} caption={caption} />);
    }
    if (data.processSection.text) {
      const { text, image } = data.processSection;
      sections.push(
        <TextBlock
          key="process"
          title="Process"
          text={text}
          imageData={image}
          reverseOrder={false}
        />
      );
    }
    if (data.testimonialBreak.text) {
      const { text, attribution } = data.testimonialBreak;
      sections.push(<QuoteBlock key="quote-break" quote={text} attribution={attribution} />);
    }
    if (data.resultsSection.text) {
      const { text, image } = data.resultsSection;
      sections.push(
        <TextBlock
          key="results"
          title="Results"
          text={text}
          imageData={image}
          reverseOrder={true}
        />
      );
    }

    return (
      <div>
        <Cover imageData={coverImageData} imageTitle={title} questionHtml={designQuestion} />

        <div className="container">
          <div className="section">
            <div className={style.title}>{title}</div>
            <div className={style.row}>
              <div className="col--md-6">
                <div className={style.sectionTitle}>Challenge</div>
                <div
                  className={classNames(style.sectionText, "wordpress-content")}
                  dangerouslySetInnerHTML={{ __html: challengeSection }}
                />
              </div>
              <div className={classNames(style.meta, "col--md-5")}>
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

        {/* {data.relatedWork && <RelatedWork data={data.relatedWork} />} */}

        <CallToAction title="Interested in partnering?" />
      </div>
    );
  }
}
