webpackJsonp([87382738632833],{96:function(t,e){(function(e){function n(t,e){return null==t?void 0:t[e]}function r(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function a(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function o(){this.__data__=ht?ht(null):{}}function c(t){return this.has(t)&&delete this.__data__[t]}function u(t){var e=this.__data__;if(ht){var n=e[t];return n===D?void 0:n}return st.call(e,t)?e[t]:void 0}function l(t){var e=this.__data__;return ht?void 0!==e[t]:st.call(e,t)}function i(t,e){var n=this.__data__;return n[t]=ht&&void 0===e?D:e,this}function s(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function f(){this.__data__=[]}function d(t){var e=this.__data__,n=j(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():mt.call(e,n,1),!0}function p(t){var e=this.__data__,n=j(e,t);return n<0?void 0:e[n][1]}function m(t){return j(this.__data__,t)>-1}function _(t,e){var n=this.__data__,r=j(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}function h(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function v(){this.__data__={hash:new a,map:new(_t||s),string:new a}}function y(t){return S(this,t).delete(t)}function g(t){return S(this,t).get(t)}function b(t){return S(this,t).has(t)}function E(t,e){return S(this,t).set(t,e),this}function j(t,e){for(var n=t.length;n--;)if(C(t[n][0],e))return n;return-1}function N(t,e){e=k(e,t)?[e]:O(e);for(var n=0,r=e.length;null!=t&&n<r;)t=t[$(e[n++])];return n&&n==r?t:void 0}function w(t){if(!F(t)||P(t))return!1;var e=I(t)||r(t)?dt:tt;return e.test(M(t))}function x(t){if("string"==typeof t)return t;if(R(t))return yt?yt.call(t):"";var e=t+"";return"0"==e&&1/t==-G?"-0":e}function O(t){return bt(t)?t:gt(t)}function S(t,e){var n=t.__data__;return q(e)?n["string"==typeof e?"string":"hash"]:n.map}function T(t,e){var r=n(t,e);return w(r)?r:void 0}function k(t,e){if(bt(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!R(t))||(V.test(t)||!U.test(t)||null!=e&&t in Object(e))}function q(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function P(t){return!!lt&&lt in t}function $(t){if("string"==typeof t||R(t))return t;var e=t+"";return"0"==e&&1/t==-G?"-0":e}function M(t){if(null!=t){try{return it.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function A(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(J);var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var c=t.apply(this,r);return n.cache=o.set(a,c),c};return n.cache=new(A.Cache||h),n}function C(t,e){return t===e||t!==t&&e!==e}function I(t){var e=F(t)?ft.call(t):"";return e==z||e==K}function F(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function L(t){return!!t&&"object"==typeof t}function R(t){return"symbol"==typeof t||L(t)&&ft.call(t)==Q}function B(t){return null==t?"":x(t)}function H(t,e,n){var r=null==t?void 0:N(t,e);return void 0===r?n:r}var J="Expected a function",D="__lodash_hash_undefined__",G=1/0,z="[object Function]",K="[object GeneratorFunction]",Q="[object Symbol]",U=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,V=/^\w*$/,W=/^\./,X=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Y=/[\\^$.*+?()[\]{}|]/g,Z=/\\(\\)?/g,tt=/^\[object .+?Constructor\]$/,et="object"==typeof e&&e&&e.Object===Object&&e,nt="object"==typeof self&&self&&self.Object===Object&&self,rt=et||nt||Function("return this")(),at=Array.prototype,ot=Function.prototype,ct=Object.prototype,ut=rt["__core-js_shared__"],lt=function(){var t=/[^.]+$/.exec(ut&&ut.keys&&ut.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),it=ot.toString,st=ct.hasOwnProperty,ft=ct.toString,dt=RegExp("^"+it.call(st).replace(Y,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pt=rt.Symbol,mt=at.splice,_t=T(rt,"Map"),ht=T(Object,"create"),vt=pt?pt.prototype:void 0,yt=vt?vt.toString:void 0;a.prototype.clear=o,a.prototype.delete=c,a.prototype.get=u,a.prototype.has=l,a.prototype.set=i,s.prototype.clear=f,s.prototype.delete=d,s.prototype.get=p,s.prototype.has=m,s.prototype.set=_,h.prototype.clear=v,h.prototype.delete=y,h.prototype.get=g,h.prototype.has=b,h.prototype.set=E;var gt=A(function(t){t=B(t);var e=[];return W.test(t)&&e.push(""),t.replace(X,function(t,n,r,a){e.push(r?a.replace(Z,"$1"):n||t)}),e});A.Cache=h;var bt=Array.isArray;t.exports=H}).call(e,function(){return this}())},201:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var u=n(1),l=r(u),i=n(7),s=(r(i),n(62)),f=n(96),d=r(f),p=n(39),m=function(t){var e=t.title,n=t.htmlText;return l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"section"},l.default.createElement("h2",{className:"project-text-block__title"},e),l.default.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))},_=function(t){var e=t.quote,n=t.attribution;return l.default.createElement("div",{className:"orange-background light-text"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"section"},l.default.createElement("blockquote",{className:"blockquote"},l.default.createElement("div",{className:"blockquote__quote"},e),l.default.createElement("div",{className:"blockquote__citation"},"— ",n)))))},h=function(t){var e=t.src,n=t.caption;return l.default.createElement("div",{className:"subtle-background"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"section"},l.default.createElement("figure",null,l.default.createElement("img",{src:e}),l.default.createElement("figcaption",null,n)))))},v=function(t){function e(n){a(this,e);var r=o(this,t.call(this,n));return r.state={data:n.data},r}return c(e,t),e.prototype.componentDidMount=function(){var t=this;if(!this.state.data){var e=this.props.location.pathname,n=e.substring(6).replace("/","");(0,s.fetchProjectBySlug)(n).then(function(e){null!==e&&e.acf?t.setState({data:e.acf}):t.setState({data:null})})}},e.prototype.render=function(){var t=this.state.data;if(null===t)return l.default.createElement(p.Redirect,{to:"/404"});if(!t)return l.default.createElement("div",{className:"nav-offset container"},"Loading...");var e=(0,d.default)(t,"narrative");return e||(e=[]),l.default.createElement("div",{className:"nav-offset"},l.default.createElement("div",{className:"project-cover"},l.default.createElement("img",{className:"project-cover__image",src:(0,d.default)(t,"banner.image.url",""),alt:(0,d.default)(t,"banner.image.title","")}),l.default.createElement("div",{className:"project-cover__question"},l.default.createElement("div",{className:"project-cover__question-text",dangerouslySetInnerHTML:{__html:(0,d.default)(t,"question","")}}))),l.default.createElement("div",{className:"container project-header"},l.default.createElement("h1",{className:"project-header__title"},(0,d.default)(t,"heading.headline","")),l.default.createElement("h2",{className:"project-header__subtitle"},(0,d.default)(t,"heading.subtitle",""))),l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"section row--space-between"},l.default.createElement("div",{className:"project-overview col--xs-12 col--sm-9"},l.default.createElement("h2",{className:"project-overview__title"},(0,d.default)(t,"overview.title","")),l.default.createElement("div",{dangerouslySetInnerHTML:{__html:(0,d.default)(t,"overview.text","")}})),l.default.createElement("div",{className:"project-meta col--xs-12 col--sm-2"},l.default.createElement("div",{className:"project-meta__partners"},l.default.createElement("h2",{className:"project-meta__title"},"Partners"),l.default.createElement("ul",{className:"project-meta__list"},(0,d.default)(t,"meta.partners",[]).map(function(t){var e=t.name;return l.default.createElement("li",{key:e},e)}))),l.default.createElement("div",{className:"project-meta__tags"},l.default.createElement("h2",{className:"project-meta__title"},"Tags"),l.default.createElement("ul",{className:"project-meta__list"},(0,d.default)(t,"meta.tags",[]).map(function(t){var e=t.name;return l.default.createElement("li",{key:e},e)})))))),e.map(function(t){return"text"===t.acf_fc_layout?l.default.createElement(m,{title:t.title,htmlText:t.text}):"quote"===t.acf_fc_layout?l.default.createElement(_,{quote:t.quote,attribution:t.attribution}):"image"===t.acf_fc_layout?l.default.createElement(h,{src:t.image.url,caption:t.caption}):void 0}))},e}(l.default.Component);e.default=v,t.exports=e.default},62:function(t,e,n){"use strict";function r(t){return fetch(t).then(function(t){return t.json()})}function a(){return r(s)}function o(){return r(f)}function c(t){return r(f+"/"+t)}function u(){return Promise.all([r(d),r(p)]).then(function(t){var e=t[0],n=t[1],r=n.reduce(function(t,e){var n=e.id,r=e.count,a=e.name;return t[a]={id:n,count:r},t},{}),a=e.reduce(function(t,e){var n=e.id,r=e.count,a=e.name;return t[a]={id:n,count:r},t},{});return{projectTags:r,partnerTags:a}})}function l(t){return r(s+"?slug="+t).then(function(t){return 0===t.length?null:t[0]})}e.__esModule=!0,e.fetchJson=r,e.fetchProjects=a,e.fetchAcfProjects=o,e.fetchProjectAcfById=c,e.fetchTaxonomies=u,e.fetchProjectBySlug=l;var i="https://api.convergencedesignlab.org/wp-json",s=i+"/wp/v2/projects",f=i+"/acf/v3/projects",d=i+"/wp/v2/partners",p=i+"/wp/v2/project_tags"}});
//# sourceMappingURL=component---src-pages-work-project-js-a40d94ac5ef4da5fc057.js.map