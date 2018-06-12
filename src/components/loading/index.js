import React from "react";
import style from "./index.module.scss";

export default function Loading({ height, key = "loading", ...otherProps }) {
  return (
    <ul {...otherProps} key={key} className={style.container} style={{ height }}>
      <li className={style.circle} />
      <li className={style.circle} />
      <li className={style.circle} />
    </ul>
  );
}
