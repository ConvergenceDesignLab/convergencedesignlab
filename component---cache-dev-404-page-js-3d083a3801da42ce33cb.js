webpackJsonp([63035248922600],{

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.pageQuery = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(4);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global graphql: false */
	
	
	var Dev404Page = function (_React$Component) {
	  _inherits(Dev404Page, _React$Component);
	
	  function Dev404Page() {
	    _classCallCheck(this, Dev404Page);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Dev404Page.prototype.render = function render() {
	    var pathname = this.props.location.pathname;
	    var newFilePath = void 0;
	    if (pathname === "/") {
	      newFilePath = "src/pages/index.js";
	    } else if (pathname.slice(-1) === "/") {
	      newFilePath = "src/pages" + pathname.slice(0, -1) + ".js";
	    } else {
	      newFilePath = "src/pages" + pathname + ".js";
	    }
	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(
	        "h1",
	        null,
	        "Gatsby.js development 404 page"
	      ),
	      _react2.default.createElement(
	        "p",
	        null,
	        "There's not a page yet at ",
	        _react2.default.createElement(
	          "code",
	          null,
	          pathname
	        )
	      ),
	      _react2.default.createElement(
	        "p",
	        null,
	        "Create a React.js component in your site directory at",
	        " ",
	        _react2.default.createElement(
	          "code",
	          null,
	          newFilePath
	        ),
	        " ",
	        "and this page will automatically refresh to show the new page component you created."
	      ),
	      this.props.data.allSitePage && this.props.data.allSitePage.totalCount > 1 && _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "p",
	          null,
	          "If you were trying to reach another page, perhaps you can find it below."
	        ),
	        _react2.default.createElement(
	          "h2",
	          null,
	          "Pages (",
	          this.props.data.allSitePage.totalCount,
	          ")"
	        ),
	        _react2.default.createElement(
	          "ul",
	          null,
	          this.props.data.allSitePage.edges.map(function (_ref) {
	            var node = _ref.node;
	            return _react2.default.createElement(
	              "li",
	              { key: node.path },
	              _react2.default.createElement(
	                _gatsbyLink2.default,
	                { to: node.path },
	                node.path
	              )
	            );
	          })
	        )
	      )
	    );
	  };
	
	  return Dev404Page;
	}(_react2.default.Component);
	
	Dev404Page.propTypes = {
	  data: function data() {},
	  location: function location() {}
	};
	exports.default = Dev404Page;
	var pageQuery = exports.pageQuery = "** extracted graphql fragment **";

/***/ })

});
//# sourceMappingURL=component---cache-dev-404-page-js-3d083a3801da42ce33cb.js.map