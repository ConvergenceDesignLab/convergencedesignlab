webpackJsonp([87382738632833],{27:function(t,e,n){t.exports={default:n(32),__esModule:!0}},28:function(t,e,n){t.exports={default:n(33),__esModule:!0}},30:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=n(27),o=r(a);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},31:function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}},32:function(t,e,n){n(38),t.exports=n(8).Object.assign},33:function(t,e,n){n(39),t.exports=n(8).Object.keys},35:function(t,e,n){"use strict";var r=n(14),a=n(46),o=n(36),c=n(20),u=n(56),i=Object.assign;t.exports=!i||n(12)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=i({},t)[n]||Object.keys(i({},e)).join("")!=r})?function(t,e){for(var n=c(t),i=arguments.length,l=1,s=a.f,f=o.f;i>l;)for(var d,p=u(arguments[l++]),h=s?r(p).concat(s(p)):r(p),v=h.length,_=0;v>_;)f.call(p,d=h[_++])&&(n[d]=p[d]);return n}:i},37:function(t,e,n){var r=n(11),a=n(8),o=n(12);t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],c={};c[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",c)}},38:function(t,e,n){var r=n(11);r(r.S+r.F,"Object",{assign:n(35)})},39:function(t,e,n){var r=n(20),a=n(14);n(37)("keys",function(){return function(t){return a(r(t))}})},21:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(t){return o(N+t)}function o(t){return t.replace(/^\/\//g,"/")}function c(t,e){var n=(0,O.createLocation)(t,null,null,e.location);return n.pathname=a(n.pathname),n}e.__esModule=!0,e.navigateTo=void 0;var u=n(30),i=r(u),l=n(28),s=r(l),f=n(31),d=r(f),p=n(29),h=r(p),v=n(42),_=r(v),m=n(41),y=r(m);e.withPrefix=a;var b=n(1),g=r(b),j=n(26),E=n(6),w=r(E),O=n(61),N="/";N="/convergencedesignlab";var x={activeClassName:w.default.string,activeStyle:w.default.object,exact:w.default.bool,strict:w.default.bool,isActive:w.default.func,location:w.default.object},S=function(t,e){var n=new window.IntersectionObserver(function(r){r.forEach(function(r){t===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),e())})});n.observe(t)},k=function(t){function e(n,r){(0,h.default)(this,e);var a=(0,_.default)(this,t.call(this)),o=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(o=!0);var u=r.router.history,i=c(n.to,u);return a.state={path:(0,O.createPath)(i),to:i,IOSupported:o},a.handleRef=a.handleRef.bind(a),a}return(0,y.default)(e,t),e.prototype.componentWillReceiveProps=function(t){if(this.props.to!==t.to){var e=c(t.to,history);this.setState({path:(0,O.createPath)(e),to:e}),this.state.IOSupported||___loader.enqueue(this.state.path)}},e.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.path)},e.prototype.handleRef=function(t){var e=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&S(t,function(){___loader.enqueue(e.state.path)})},e.prototype.render=function(){var t=this,e=this.props,n=e.onClick,r=(0,d.default)(e,["onClick"]),a=void 0;return a=(0,s.default)(x).some(function(e){return t.props[e]})?j.NavLink:j.Link,g.default.createElement(a,(0,i.default)({onClick:function(e){if(n&&n(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){var r=t.state.path;if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r===window.location.pathname){var a=t.state.path.split("#").slice(1).join("#"),o=document.getElementById(a);return null!==o?(o.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}e.preventDefault(),window.___navigateTo(t.state.path)}return!0}},r,{to:this.state.to,innerRef:this.handleRef}))},e}(g.default.Component);k.propTypes=(0,i.default)({},x,{innerRef:w.default.func,onClick:w.default.func,to:w.default.oneOfType([w.default.string,w.default.object]).isRequired}),k.contextTypes={router:w.default.object},e.default=k;e.navigateTo=function(t){window.___navigateTo(t)}},102:function(t,e){(function(e){function n(t,e){return null==t?void 0:t[e]}function r(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function a(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function o(){this.__data__=_t?_t(null):{}}function c(t){return this.has(t)&&delete this.__data__[t]}function u(t){var e=this.__data__;if(_t){var n=e[t];return n===H?void 0:n}return st.call(e,t)?e[t]:void 0}function i(t){var e=this.__data__;return _t?void 0!==e[t]:st.call(e,t)}function l(t,e){var n=this.__data__;return n[t]=_t&&void 0===e?H:e,this}function s(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function f(){this.__data__=[]}function d(t){var e=this.__data__,n=E(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():ht.call(e,n,1),!0}function p(t){var e=this.__data__,n=E(e,t);return n<0?void 0:e[n][1]}function h(t){return E(this.__data__,t)>-1}function v(t,e){var n=this.__data__,r=E(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}function _(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function m(){this.__data__={hash:new a,map:new(vt||s),string:new a}}function y(t){return S(this,t).delete(t)}function b(t){return S(this,t).get(t)}function g(t){return S(this,t).has(t)}function j(t,e){return S(this,t).set(t,e),this}function E(t,e){for(var n=t.length;n--;)if(C(t[n][0],e))return n;return-1}function w(t,e){e=T(e,t)?[e]:x(e);for(var n=0,r=e.length;null!=t&&n<r;)t=t[R(e[n++])];return n&&n==r?t:void 0}function O(t){if(!A(t)||M(t))return!1;var e=$(t)||r(t)?dt:tt;return e.test(q(t))}function N(t){if("string"==typeof t)return t;if(L(t))return yt?yt.call(t):"";var e=t+"";return"0"==e&&1/t==-J?"-0":e}function x(t){return gt(t)?t:bt(t)}function S(t,e){var n=t.__data__;return P(e)?n["string"==typeof e?"string":"hash"]:n.map}function k(t,e){var r=n(t,e);return O(r)?r:void 0}function T(t,e){if(gt(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!L(t))||(Q.test(t)||!z.test(t)||null!=e&&t in Object(e))}function P(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function M(t){return!!it&&it in t}function R(t){if("string"==typeof t||L(t))return t;var e=t+"";return"0"==e&&1/t==-J?"-0":e}function q(t){if(null!=t){try{return lt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function I(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(D);var n=function(){var r=arguments,a=e?e.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var c=t.apply(this,r);return n.cache=o.set(a,c),c};return n.cache=new(I.Cache||_),n}function C(t,e){return t===e||t!==t&&e!==e}function $(t){var e=A(t)?ft.call(t):"";return e==G||e==V}function A(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function F(t){return!!t&&"object"==typeof t}function L(t){return"symbol"==typeof t||F(t)&&ft.call(t)==W}function B(t){return null==t?"":N(t)}function K(t,e,n){var r=null==t?void 0:w(t,e);return void 0===r?n:r}var D="Expected a function",H="__lodash_hash_undefined__",J=1/0,G="[object Function]",V="[object GeneratorFunction]",W="[object Symbol]",z=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,U=/^\./,X=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Y=/[\\^$.*+?()[\]{}|]/g,Z=/\\(\\)?/g,tt=/^\[object .+?Constructor\]$/,et="object"==typeof e&&e&&e.Object===Object&&e,nt="object"==typeof self&&self&&self.Object===Object&&self,rt=et||nt||Function("return this")(),at=Array.prototype,ot=Function.prototype,ct=Object.prototype,ut=rt["__core-js_shared__"],it=function(){var t=/[^.]+$/.exec(ut&&ut.keys&&ut.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),lt=ot.toString,st=ct.hasOwnProperty,ft=ct.toString,dt=RegExp("^"+lt.call(st).replace(Y,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pt=rt.Symbol,ht=at.splice,vt=k(rt,"Map"),_t=k(Object,"create"),mt=pt?pt.prototype:void 0,yt=mt?mt.toString:void 0;a.prototype.clear=o,a.prototype.delete=c,a.prototype.get=u,a.prototype.has=i,a.prototype.set=l,s.prototype.clear=f,s.prototype.delete=d,s.prototype.get=p,s.prototype.has=h,s.prototype.set=v,_.prototype.clear=m,_.prototype.delete=y,_.prototype.get=b,_.prototype.has=g,_.prototype.set=j;var bt=I(function(t){t=B(t);var e=[];return U.test(t)&&e.push(""),t.replace(X,function(t,n,r,a){e.push(r?a.replace(Z,"$1"):n||t)}),e});I.Cache=_;var gt=Array.isArray;t.exports=K}).call(e,function(){return this}())},208:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var u=n(1),i=r(u),l=n(21),s=(r(l),n(82)),f=n(102),d=r(f),p=n(26),h=function(t){var e=t.title,n=t.htmlText;return i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"section"},i.default.createElement("h2",{className:"project-text-block__title"},e),i.default.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))},v=function(t){var e=t.quote,n=t.attribution;return i.default.createElement("div",{className:"orange-background light-text"},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"section"},i.default.createElement("blockquote",{className:"blockquote"},i.default.createElement("div",{className:"blockquote__quote"},e),i.default.createElement("div",{className:"blockquote__citation"},"— ",n)))))},_=function(t){var e=t.src,n=t.caption;return i.default.createElement("div",{className:"subtle-background"},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"section"},i.default.createElement("figure",null,i.default.createElement("img",{src:e}),i.default.createElement("figcaption",null,n)))))},m=function(t){function e(n){a(this,e);var r=o(this,t.call(this,n));return r.state={data:n.data},r}return c(e,t),e.prototype.componentDidMount=function(){var t=this;if(!this.state.data){var e=this.props.location.pathname,n=e.substring(6).replace("/","");(0,s.fetchProjectBySlug)(n).then(function(e){null!==e&&e.acf?t.setState({data:e.acf}):t.setState({data:null})})}},e.prototype.render=function(){var t=this.state.data;return null===t?i.default.createElement(p.Redirect,{to:"/404"}):t?i.default.createElement("div",{className:"nav-offset"},i.default.createElement("div",{className:"container project-header"},i.default.createElement("h1",{className:"project-header__title"},(0,d.default)(t,"heading.headline","")),i.default.createElement("h2",{className:"project-header__subtitle"},(0,d.default)(t,"heading.subtitle",""))),i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"project-banner"},i.default.createElement("img",{className:"project-banner__image",src:(0,d.default)(t,"banner.image.url",""),alt:(0,d.default)(t,"banner.image.title","")}))),i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"section row--space-between"},i.default.createElement("div",{className:"project-overview col--xs-12 col--sm-9"},i.default.createElement("h2",{className:"project-overview__title"},(0,d.default)(t,"overview.title","")),i.default.createElement("div",{dangerouslySetInnerHTML:{__html:(0,d.default)(t,"overview.text","")}})),i.default.createElement("div",{className:"project-meta col--xs-12 col--sm-2"},i.default.createElement("div",{className:"project-meta__partners"},i.default.createElement("h2",{className:"project-meta__title"},"Partners"),i.default.createElement("ul",{className:"project-meta__list"},(0,d.default)(t,"meta.partners",[]).map(function(t){var e=t.name;return i.default.createElement("li",{key:e},e)}))),i.default.createElement("div",{className:"project-meta__tags"},i.default.createElement("h2",{className:"project-meta__title"},"Tags"),i.default.createElement("ul",{className:"project-meta__list"},(0,d.default)(t,"meta.tags",[]).map(function(t){var e=t.name;return i.default.createElement("li",{key:e},e)})))))),(0,d.default)(t,"narrative",[]).map(function(t){return"text"===t.acf_fc_layout?i.default.createElement(h,{title:t.title,htmlText:t.text}):"quote"===t.acf_fc_layout?i.default.createElement(v,{quote:t.quote,attribution:t.attribution}):"image"===t.acf_fc_layout?i.default.createElement(_,{src:t.image.url,caption:t.caption}):void 0})):i.default.createElement("div",{className:"nav-offset container"},"Loading...")},e}(i.default.Component);e.default=m,t.exports=e.default},82:function(t,e){"use strict";function n(t){return fetch(t).then(function(t){return t.json()})}function r(){return n(l)}function a(){return n(s)}function o(t){return n(s+"/"+t)}function c(){return Promise.all([n(f),n(d)]).then(function(t){var e=t[0],n=t[1],r=n.reduce(function(t,e){var n=e.id,r=e.count,a=e.name;return t[a]={id:n,count:r},t},{}),a=e.reduce(function(t,e){var n=e.id,r=e.count,a=e.name;return t[a]={id:n,count:r},t},{});return{projectTags:r,partnerTags:a}})}function u(t){return n(l+"?slug="+t).then(function(t){return 0===t.length?null:t[0]})}e.__esModule=!0,e.fetchJson=n,e.fetchProjects=r,e.fetchAcfProjects=a,e.fetchProjectAcfById=o,e.fetchTaxonomies=c,e.fetchProjectBySlug=u;var i="http://api.convergencedesignlab.org/wp-json",l=i+"/wp/v2/projects",s=i+"/acf/v3/projects",f=i+"/wp/v2/partners",d=i+"/wp/v2/project_tags"}});
//# sourceMappingURL=component---src-pages-work-project-js-fb420190f7d4836afe6d.js.map