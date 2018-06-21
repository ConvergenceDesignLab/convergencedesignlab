import React from "react";
import classNames from "classnames";
import team from "./team-data";
import { TweenLite } from "gsap";
import style from "./index.module.scss";
import resizeEvent from "../../../utils/resize-event";

const TeamMember = React.forwardRef(
  ({ image, name, title, email, twitter, linkedin, onBioClick }, ref) => (
    <figure ref={ref} className={classNames(style.figure, "col--xs-6 col--sm-3")}>
      <img className={style.image} src={image} alt={name} />
      <figcaption>
        <div className={style.name}>{name}</div>
        <div className={style.title}>{title}</div>
        <div className={style.links}>
          {email && (
            <a className={style.iconLink} href={`mailto:${email}`}>
              <i className={classNames("fa fa-envelope", style.icon)} />
            </a>
          )}
          {twitter && (
            <a className={style.iconLink} href={twitter}>
              <i className={classNames("fa fa-twitter", style.icon)} />
            </a>
          )}
          {linkedin && (
            <a className={style.iconLink} href={linkedin}>
              <i className={classNames("fa fa-linkedin", style.icon)} />
            </a>
          )}
        </div>
        <div className={style.bioLink} onClick={onBioClick}>
          Bio
        </div>
      </figcaption>
    </figure>
  )
);

export default class Team extends React.Component {
  state = {
    selectedPerson: null
  };

  constructor(props) {
    super(props);
    this.teamRefs = {};
    this.wrapperRef = React.createRef();
    this.bioRef = React.createRef();
    this.bioArrowRef = React.createRef();
    this.tween = null;
  }

  componentWillMount() {
    resizeEvent.addListener(this.onResize);
  }

  componentWillUnmount() {
    if (this.tween) this.tween.kill();
    resizeEvent.removeListener(this.onResize);
  }

  onResize = () => {
    this.positionBio(this.state.selectedPerson);
  };

  setTeamRef(element, name) {
    this.teamRefs[name] = element;
  }

  toggleBio(name) {
    this.setState(prevState => {
      if (prevState.selectedPerson === name) {
        this.hideBio();
        return { selectedPerson: null };
      } else {
        this.showBio();
        this.positionBio(name);
        return { selectedPerson: name };
      }
    });
  }

  closeBio = () => {
    this.setState({ selectedPerson: null });
    this.hideBio();
  };

  hideBio() {
    const targets = [this.bioRef.current, this.bioArrowRef.current];
    TweenLite.set(targets, { display: "none" });
    this.tween = TweenLite.to(targets, 0.3, { opacity: 0 });
  }

  showBio() {
    const targets = [this.bioRef.current, this.bioArrowRef.current];
    TweenLite.set(targets, { display: "block" });
    this.tween = TweenLite.to(targets, 0.3, { opacity: 1 });
  }

  positionBio(name) {
    if (!name) return;

    const element = this.teamRefs[name];
    const personRect = element.getBoundingClientRect();
    const wrapperRect = this.wrapperRef.current.getBoundingClientRect();
    const bioRect = this.bioRef.current.getBoundingClientRect();
    const bioArrowRect = this.bioArrowRef.current.getBoundingClientRect();
    const relativeX = personRect.left - wrapperRect.left;
    const relativeY = personRect.top - wrapperRect.top + 10;

    let bioX = relativeX + personRect.width / 2 - bioRect.width / 2;
    if (bioX < 0) bioX = 0;
    else if (bioX + bioRect.width > wrapperRect.width) bioX = wrapperRect.width - bioRect.width;

    // TODO: move arrow and bio into a single div to fade them together and place them exactly
    this.bioRef.current.style.left = `${bioX}px`;
    this.bioRef.current.style.top = `${relativeY + personRect.height}px`;
    this.bioArrowRef.current.style.top = `${relativeY +
      personRect.height -
      bioArrowRect.height +
      1}px`;
    this.bioArrowRef.current.style.left = `${relativeX +
      personRect.width / 2 -
      bioArrowRect.width / 2}px`;
  }

  render() {
    const { selectedPerson } = this.state;
    let BioContent = <p />;
    if (selectedPerson) {
      const info = team.find(info => info.name === selectedPerson);
      if (info && info.bio) {
        const Bio = info.bio;
        BioContent = <Bio />;
      }
    }

    return (
      <div style={{ position: "relative" }} ref={this.wrapperRef}>
        <div className={classNames(style.row, "row--justify-center")}>
          {team.map(info => (
            <TeamMember
              ref={elem => this.setTeamRef(elem, info.name)}
              key={info.name}
              {...info}
              onBioClick={() => this.toggleBio(info.name)}
            />
          ))}
        </div>
        <div
          className={classNames(style.bioArrow, selectedPerson && style.isActive)}
          ref={this.bioArrowRef}
        />
        <div className={classNames(style.bio, selectedPerson && style.isActive)} ref={this.bioRef}>
          <i className={`${style.bioClose} fa fa-close`} onClick={this.closeBio} />
          <div className={style.bioContent}>{BioContent}</div>
        </div>
      </div>
    );
  }
}
