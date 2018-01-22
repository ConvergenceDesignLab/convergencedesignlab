import React from "react";
import Link from "gatsby-link";
import { fetchAcfProjects, fetchProjects, fetchTaxonomies } from "../utils/fetch-wp";
import get from "lodash.get";
import { parseQueryString } from "../utils/parse-query-string";

const Select = ({ options, ...props }) => (
  <select>
    {options.map(option => (
      <option value={option} key={option} {...props}>
        {option}
      </option>
    ))}
  </select>
);

class Work extends React.Component {
  constructor(props) {
    super(props);

    const qs = parseQueryString(this.props.location.search);

    this.state = {
      data: null,
      projectTags: [],
      partnerTags: [],
      selectedTags: [],
      selectedPartners: []
    };
  }

  componentDidMount() {
    fetchProjects().then(json => this.setState({ data: json }));
    fetchTaxonomies().then(({ partnerTags, projectTags }) =>
      this.setState({
        projectTags,
        partnerTags
      })
    );
  }

  render() {
    const { data, projectTags, partnerTags } = this.state;
    const projectTagNames = Object.keys(projectTags);
    const partnerTagNames = Object.keys(partnerTags);

    let grid = null;
    if (data) {
      grid = data.map(project => (
        <div className="col--xs-4">
          <Link to={`/work/${project.slug}/`}>
            <figure key={project.id}>
              <img src={get(project, "acf.banner.image.sizes.thumbnail")} />
              {get(project, "acf.heading.headline")}, {get(project, "acf.heading.subtitle")}
            </figure>
          </Link>
        </div>
      ));
    }

    return (
      <div className="nav-offset container">
        <h1>Our Work</h1>
        {projectTagNames.length > 0 && <Select options={projectTagNames} />}
        {partnerTagNames.length > 0 && <Select options={partnerTagNames} />}
        <div className="section row--justify-center">{grid}</div>
      </div>
    );
  }
}

export default Work;
