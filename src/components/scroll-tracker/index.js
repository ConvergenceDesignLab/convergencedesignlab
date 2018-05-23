import React from "react";
import scrollEvent from "./scroll-event";

export default class ScrollProvider extends React.Component {
  state = { scrollY: 0 };

  updateScroll = () => this.setState({ scrollY: window.scrollY });

  componentDidUpdate(prevProps) {
    if (prevProps.enabled && !this.props.enabled) this.unsubscribe();
    else if (!prevProps.enabled && this.props.enabled) this.subscribe();
  }

  subscribe() {
    scrollEvent.addListener(this.updateScroll);
  }

  unsubscribe() {
    scrollEvent.removeListener(this.updateScroll);
  }

  componentDidMount() {
    if (this.props.enabled) this.subscribe();
  }

  componentWillUnmount() {
    if (this.props.enabled) this.unsubscribe();
  }

  render() {
    return this.props.render(this.state);
  }
}
