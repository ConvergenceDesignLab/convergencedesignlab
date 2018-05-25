import React from "react";
import style from "./index.module.scss";

export default function Loading({ height }) {
  return (
    <div className={style.container} style={{ height }}>
      <div className={style.circle} />
      <div className={style.circle} />
      <div className={style.circle} />
    </div>
  );
}
