import React from "react";
import Link from "gatsby-link";
import get from "lodash.get";
import CallToAction from "../call-to-action/";
import Loading from "../loading/";
// import { fetchAcfProjects, fetchProjects, fetchTaxonomies } from "../../utils/fetch-wp";
import style from "./index.module.scss";
import image1 from "../../assets/images/publications/test-1.png";
import image2 from "../../assets/images/publications/test-2.png";
import image3 from "../../assets/images/publications/test-3.png";

class Resources extends React.Component {
  state = { resources: null };

  componentDidMount() {
    // fetchProjects().then(json => this.setState({ projects: json }));
    this.setState({
      resources: [
        {
          id: 1,
          title: "Pudding pudding gummi bears chocolate brownie dessert candy",
          description:
            "Jelly-o macaroon gummi bears bonbon gummies topping topping oat cake. Chocolate bar marzipan biscuit tiramisu cookie lemon drops cotton candy. Sesame snaps donut sesame snaps pie jelly-o toffee. Cheesecake muffin toffee. Carrot cake dessert wafer candy canes macaroon cheesecake lollipop.",
          image: image3,
          slug: "linkurl"
        },
        {
          id: 2,
          title:
            "Digital Atelier: Connecting Learners to Their Interests Through Space and Technology",
          description:
            "Jujubes cookie dragée powder dragée wafer candy pudding liquorice. Cotton candy apple pie powder sweet roll jelly croissant. Brownie pie sesame snaps.",
          image: image1,
          slug: "linkurl"
        },
        {
          id: 3,
          title: "Tootsie roll tootsie roll sweet",
          description:
            "opping marshmallow muffin. Marzipan marzipan macaroon lollipop jelly-o ice cream.",
          image: image2,
          slug: "linkurl"
        }
      ]
    });
  }

  render() {
    const { resources } = this.state;

    let resourceList = null;
    if (resources) {
      resourceList = resources.map(resource => {
        const { title, description, image, slug, id } = resource;
        return (
          <div key={`resource-${id}`} className={style.resource}>
            <div className={style.resourceThumbnail}>
              <Link to={`/resources/${slug}`}>
                <img src={image} alt={title} />
              </Link>
            </div>
            <div className={style.resourceDetails}>
              <div className={style.resourceTitle}>{title}</div>
              <div className={style.resourceDescription}>{description}</div>
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
        <div className="container">
          <div className={style.title}>Selected Resources</div>
          <div className={style.heading}>
            Through our publications, we aim to make our work transparent, actionable, and
            replicable.
          </div>
        </div>

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
