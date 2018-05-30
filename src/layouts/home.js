import React from "react";
import Template from "./index";

export default function Home({ children }) {
  return <Template isHomePage={true}>{children}</Template>;
}
