webpackJsonp([23899280101116],{118:function(e,t,r){var n,a,o;!function(r,c){a=[],n=c,o="function"==typeof n?n.apply(t,a):n,!(void 0!==o&&(e.exports=o))}(this,function(){function e(e,l,u){function i(e){m==r?b+=e:l&&m==n&&(h+=e)}function f(){var e,t,r,n="",a=!1;e:for(e=0,t=h.length;e<t;e++)switch(r=h[e].toLowerCase()){case"<":break;case">":break e;case"/":a=!0;break;default:if(r.match(c)){if(a)break e}else a=!0,n+=r}l.indexOf(n)!==-1?b+=h:u&&(b+=u),h=""}var s,p,d,e=e||"",m=r,k=0,b="",h="",j=!1;for("string"==typeof l?l=t(l):Array.isArray(l)||(l=null),s=0,p=e.length;s<p;s++)switch(d=e[s]){case"<":if(j)break;if(" "==e[s+1]){i(d);break}if(m==r){m=n,i(d);break}if(m==n){k++;break}i(d);break;case">":if(k){k--;break}if(j)break;if(m==n){j=m=0,l&&(h+=">",f());break}if(m==a){j=m=0,h="";break}if(m==o&&"-"==e[s-1]&&"-"==e[s-2]){j=m=0,h="";break}i(d);break;case'"':case"'":m==n&&(j==d?j=!1:j||(j=d)),i(d);break;case"!":if(m==n&&"<"==e[s-1]){m=a;break}i(d);break;case"-":if(m==a&&"-"==e[s-1]&&"!"==e[s-2]){m=o;break}i(d);break;case"E":case"e":if(m==a&&"doctype"==e.substr(s-6,7).toLowerCase()){m=n;break}i(d);break;default:i(d)}return b}function t(e){for(var t,r=[];null!==(t=l.exec(e));)r.push(t[1]);return 0!==r.length?r:null}var r=0,n=1,a=2,o=3,c=/\s/,l=/<(\w*)>/g;return e})},245:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=r(1),u=n(l),i=r(4),f=n(i),s=r(18),p=(n(s),r(118)),d=n(p),m=r(20),k=n(m),b=r(21),h=n(b),j=r(38),v=r(373),w=n(v),y=function(e){function t(){var r,n,c;a(this,t);for(var l=arguments.length,u=Array(l),i=0;i<l;i++)u[i]=arguments[i];return r=n=o(this,e.call.apply(e,[this].concat(u))),n.state={projects:null},c=r,o(n,c)}return c(t,e),t.prototype.componentDidMount=function(){var e=this;(0,j.fetchWork)().then(function(t){return e.setState({projects:t})})},t.prototype.render=function(){var e=this.state.projects,t=null;return e&&(t=e.map(function(e){var t=e.id,r=e.slug,n=e.question,a=e.image;return u.default.createElement("div",{key:"project-"+t,className:w.default.projectContainer},u.default.createElement(f.default,{className:w.default.projectLinkWrapper,to:"/work/"+r+"/"},u.default.createElement("figure",{className:w.default.projectFigure},u.default.createElement("img",{className:w.default.projectImage,src:a}),u.default.createElement("figcaption",{className:w.default.projectCaption},u.default.createElement("div",{dangerouslySetInnerHTML:{__html:(0,d.default)(n)}})))))})),u.default.createElement("div",null,u.default.createElement("div",{className:"container"},u.default.createElement("div",{className:w.default.title},"Selected Work")),u.default.createElement("div",{className:"container"},e?u.default.createElement("div",{className:w.default.projectGrid},t):u.default.createElement(h.default,{height:"65vh"})),u.default.createElement(k.default,{alternateColor:!0}))},t}(u.default.Component);t.default=y,e.exports=t.default},373:function(e,t){e.exports={projectLinkWrapper:"src-components-work----index-module---projectLinkWrapper---1uRow",title:"src-components-work----index-module---title---3hvQr",projectGrid:"src-components-work----index-module---projectGrid---1HilX",projectContainer:"src-components-work----index-module---projectContainer---1WuRU",projectFigure:"src-components-work----index-module---projectFigure---p3cF-",projectImage:"src-components-work----index-module---projectImage---12qqX",projectCaption:"src-components-work----index-module---projectCaption---CR6lY"}},256:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(1),o=n(a),c=r(245),l=n(c),u=function(e){return o.default.createElement(l.default,e)};t.default=u,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-work-js-ee6babceefe21a89c935.js.map