webpackJsonp([79718873386587],{245:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=r(1),c=a(l),s=r(4),i=a(s),d=r(18),f=(a(d),r(20)),m=a(f),p=r(21),h=a(p),v=r(38),E=r(373),b=a(E),y=function(e){function t(){var r,a,u;n(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return r=a=o(this,e.call.apply(e,[this].concat(c))),a.state={resources:null},u=r,o(a,u)}return u(t,e),t.prototype.componentDidMount=function(){var e=this;(0,v.fetchResources)().then(function(t){return e.setState({resources:t})})},t.prototype.render=function(){var e=this.state.resources,t=null;return e&&(t=e.map(function(e){var t=e.slug,r=e.id,a=e.title,n=e.overview,o=e.image;return c.default.createElement("div",{key:"resource-"+r,className:b.default.resource},c.default.createElement("div",{className:b.default.resourceThumbnail},c.default.createElement(i.default,{to:"/resources/"+t},c.default.createElement("img",{src:o,alt:a}))),c.default.createElement("div",{className:b.default.resourceDetails},c.default.createElement("div",{className:b.default.resourceTitle},a),c.default.createElement("div",{className:b.default.resourceDescription,dangerouslySetInnerHTML:{__html:n}}),c.default.createElement("div",{className:b.default.resourceLink},c.default.createElement(i.default,{to:"/resources/"+t},"More Information"))))})),c.default.createElement("div",null,c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:b.default.title},"Selected Resources"),c.default.createElement("div",{className:b.default.heading},"Through our publications, we aim to make our work transparent, actionable, and replicable.")),c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"section"},e?c.default.createElement("div",{className:b.default.resourceList},t):c.default.createElement(h.default,{height:"65vh"}))),c.default.createElement(m.default,{title:"Looking for a framework?",alternateColor:!0}))},t}(c.default.Component);t.default=y,e.exports=t.default},373:function(e,t){e.exports={resourceThumbnail:"src-components-resources----index-module---resourceThumbnail---22T0g",title:"src-components-resources----index-module---title---31-V9",heading:"src-components-resources----index-module---heading---155Ea",resource:"src-components-resources----index-module---resource---1-e81",resourceTitle:"src-components-resources----index-module---resourceTitle---mpIAg",resourceDescription:"src-components-resources----index-module---resourceDescription---3accb"}},258:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=r(1),o=a(n),u=r(245),l=a(u),c=function(e){return o.default.createElement(l.default,e)};t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-resources-js-3143bb2cf6a65f9adcaa.js.map