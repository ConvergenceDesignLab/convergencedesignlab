import { Component } from "react";
import ReactGA from "react-ga";
import { withRouter } from "react-router-dom";

const noop = () => {};
const MockGA = {
  initialize: noop,
  pageview: noop
};

class Analytics extends Component {
  state = {
    initialized: false,
    GA: ReactGA
  };

  componentDidMount() {
    const isLocal = ["127.0.0.1", "localhost"].includes(location.hostname);
    const GA = isLocal ? MockGA : ReactGA;
    this.setState({ GA });
    GA.initialize(this.props.trackingId);
    GA.pageview(this.props.location.pathname);
  }

  componentDidUpdate(prevProps) {
    let pathname = this.props.location.pathname;
    const prevPathname = prevProps.location.pathname;
    if (prevPathname !== pathname) {
      if (pathname.length > 1 && pathname.endsWith("/")) {
        pathname = pathname.slice(0, -1);
      }
      this.state.GA.pageview(pathname);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(Analytics);
