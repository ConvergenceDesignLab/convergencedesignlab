import React from "react";

export default class TransitionHandler extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    const { children } = this.props;
    return <div className="width-100 transition-container">{children}</div>;
  }
}
