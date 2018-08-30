import React from "react";
import TAGS from "./tags";
import TagCircle from "./tag-circle";

export default class TagCircles extends React.Component {
  render() {
    const { tags, ...otherProps } = this.props;

    const isLXD = tags.includes(TAGS.LDD);
    const isPD = tags.includes(TAGS.CB);
    const isPAR = tags.includes(TAGS.PAR);

    return (
      <div {...otherProps}>
        {isPAR && <TagCircle tag={TAGS.PAR} />}
        {isLXD && <TagCircle tag={TAGS.LDD} />}
        {isPD && <TagCircle tag={TAGS.CB} />}
      </div>
    );
  }
}
