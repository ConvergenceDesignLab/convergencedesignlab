import React from "react";
import classnames from "classnames";
import TagCircles from "./tag-circles";
import style from "./index.module.scss";
import projects from "./projects";
import TAGS from "./tags";
import TagCircle from "./tag-circle";

const TagText = ({ tag, onSelect, onDeselect, children }) => (
  <span onMouseOver={onSelect} onMouseOut={onDeselect} onClick={onSelect} className={style.tag}>
    {children}
    {/* (<TagCircle tag={tag} style={{ marginLeft: "0px", width: "12px", height: "12px" }} />) */}
  </span>
);

export default class Compendium extends React.Component {
  state = {
    selectedTag: null
  };

  onSelectTag = tag => this.setState({ selectedTag: tag });
  onDeselectTag = () => this.setState({ selectedTag: null });

  render() {
    const { selectedTag } = this.state;

    return (
      <div className="container">
        <div className={style.section}>
          <h1 className={style.title}>Other Work</h1>
          <div className={style.caption}>
            We do a lot. We work at the intersection of{" "}
            <TagText
              tag={TAGS.PAR}
              onSelect={this.onSelectTag.bind(this, TAGS.PAR)}
              onDeselect={this.onDeselectTag}
            >
              participatory research
            </TagText>,{" "}
            <TagText
              tag={TAGS.LDD}
              onSelect={this.onSelectTag.bind(this, TAGS.LDD)}
              onDeselect={this.onDeselectTag}
            >
              learning design & development
            </TagText>{" "}
            and{" "}
            <TagText
              tag={TAGS.CB}
              onSelect={this.onSelectTag.bind(this, TAGS.CB)}
              onDeselect={this.onDeselectTag}
            >
              capacity building
            </TagText>.
          </div>

          <div className={style.projects}>
            {projects.map(project => {
              const { title, partners, tags, description } = project;
              const isActive = !selectedTag || tags.includes(selectedTag);
              return (
                <div className={classnames(style.project, isActive && style.projectActive)}>
                  <div className={style.projectTitle}>
                    {title} <TagCircles className={style.projectTags} tags={tags} />
                  </div>
                  <div className={style.projectPartners}>{partners.join(", ")}</div>
                  <div className={style.projectDescription}>{description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
