import React from "react";

export default class ScrollProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrollY: 0 };

    this.onScroll = this.onScroll.bind(this);
  }

  onScroll() {
    this.setState({ scrollY: window.scrollY });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.enabled && !this.props.enabled) this.unsubscribe();
    else if (!prevProps.enabled && this.props.enabled) this.subscribe();
  }

  subscribe() {
    window.addEventListener("scroll", this.onScroll);
  }

  unsubscribe() {
    window.removeEventListener("scroll", this.onScroll);
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
