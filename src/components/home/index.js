import React from "react";
import VideoBanner from "./video-banner/";
import About from "./about/";
import WorkShowcase from "./work-showcase/";
import Parnters from "./partners/";
import ResourcesShowcase from "./resources-showcase/";
import SocialFeeds from "./social-feeds/";
import CallToAction from "../call-to-action/";
import { fetchShowcase } from "../../utils/fetch-wp";

export default class Home extends React.Component {
  state = { data: null };

  componentDidMount() {
    fetchShowcase().then(json => this.setState({ data: json }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <VideoBanner />
        <About />
        <WorkShowcase projects={data ? data.projects : null} />
        <Parnters />
        <ResourcesShowcase resource={data ? data.resource : null} />
        <SocialFeeds />
        <CallToAction />
      </div>
    );
  }
}
