webpackJsonp([23899280101116],{73:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.height;return c.default.createElement("div",{className:u.default.container,style:{height:t}},c.default.createElement("div",{className:u.default.circle}),c.default.createElement("div",{className:u.default.circle}),c.default.createElement("div",{className:u.default.circle}))}t.__esModule=!0,t.default=o;var a=n(1),c=r(a),l=n(112),u=r(l);e.exports=t.default},112:function(e,t){e.exports={container:"src-components-loading----index-module---container---3CAtY",circle:"src-components-loading----index-module---circle---1fU7_",shrink:"src-components-loading----index-module---shrink---jeRxp"}},261:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=r(l),i=n(4),s=r(i),d=n(16),f=(r(d),n(18)),p=r(f),m=n(73),j=r(m),h=n(36),v=n(373),E=r(v),g=function(e){function t(){var n,r,c;o(this,t);for(var l=arguments.length,u=Array(l),i=0;i<l;i++)u[i]=arguments[i];return n=r=a(this,e.call.apply(e,[this].concat(u))),r.state={projects:null},c=n,a(r,c)}return c(t,e),t.prototype.componentDidMount=function(){var e=this;(0,h.fetchWork)().then(function(t){return e.setState({projects:t})})},t.prototype.render=function(){var e=this.state.projects,t=null;return e&&(t=e.map(function(e){var t=e.id,n=e.slug,r=e.question,o=e.image;return u.default.createElement("div",{key:"project-"+t,className:E.default.projectContainer},u.default.createElement(s.default,{className:E.default.projectLinkWrapper,to:"/work/"+n+"/"},u.default.createElement("figure",{className:E.default.projectFigure},u.default.createElement("img",{className:E.default.projectImage,src:o}),u.default.createElement("figcaption",{className:E.default.projectCaption},u.default.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))))})),u.default.createElement("div",null,u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:E.default.title},"Selected Work")),u.default.createElement("div",{className:"container"},e?u.default.createElement("div",{className:E.default.projectGrid},t):u.default.createElement(j.default,{height:"65vh"})),u.default.createElement(p.default,{alternateColor:!0}))},t}(u.default.Component);t.default=g,e.exports=t.default},373:function(e,t){e.exports={projectLinkWrapper:"src-components-work----index-module---projectLinkWrapper---1uRow",title:"src-components-work----index-module---title---3hvQr",projectGrid:"src-components-work----index-module---projectGrid---1HilX",projectContainer:"src-components-work----index-module---projectContainer---1WuRU",projectFigure:"src-components-work----index-module---projectFigure---p3cF-",projectImage:"src-components-work----index-module---projectImage---12qqX",projectCaption:"src-components-work----index-module---projectCaption---CR6lY"}},270:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),a=r(o),c=n(261),l=r(c),u=function(e){return a.default.createElement(l.default,e)};t.default=u,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-work-js-a20ccf915b9079309881.js.map