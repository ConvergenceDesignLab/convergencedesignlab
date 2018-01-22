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

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    return this.props.render(this.state);
  }
}
