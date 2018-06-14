import React from "react";
import Link from "gatsby-link";
import get from "lodash.get";
import CallToAction from "../call-to-action/";
import Loading from "../loading/";
import PageHeader from "../page-header";
import { fetchResources } from "../../utils/fetch-wp";
import style from "./index.module.scss";

class Resources extends React.Component {
  state = { resources: null };

  componentDidMount() {
    fetchResources().then(json => this.setState({ resources: json }));
  }

  render() {
    const { resources } = this.state;

    let resourceList = null;
    if (resources) {
      resourceList = resources.map(resource => {
        const { slug, id, title, overview, image } = resource;
        return (
          <div key={`resource-${id}`} className={style.resource}>
            <div className={style.resourceThumbnail}>
              <Link to={`/resources/${slug}`}>
                <img className={style.projectImage} src={get(image, "sizes.width_400.url", "")} />
              </Link>
            </div>
            <div className={style.resourceDetails}>
              <div className={style.resourceTitle}>{title}</div>
              <div
                className={style.resourceDescription}
                dangerouslySetInnerHTML={{ __html: overview }}
              />
              <div className={style.resourceLink}>
                <Link to={`/resources/${slug}`}>More Information</Link>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <div>
        <PageHeader
          title="Selected Resources"
          caption="Through our publications, we aim to make our work transparent, actionable, and
            replicable."
        />

        <div className="container">
          <div className="section">
            {resources ? (
              <div className={style.resourceList}>{resourceList}</div>
            ) : (
              <Loading height="65vh" />
            )}
          </div>
        </div>

        <CallToAction title="Looking for a framework?" alternateColor={true} />
      </div>
    );
  }
}

export default Resources;
