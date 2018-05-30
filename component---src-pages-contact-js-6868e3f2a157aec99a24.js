webpackJsonp([70144966829960],{

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		autosize 4.0.2
		license: MIT
		http://www.jacklmoore.com/autosize
	*/
	(function (global, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports !== "undefined") {
			factory(module, exports);
		} else {
			var mod = {
				exports: {}
			};
			factory(mod, mod.exports);
			global.autosize = mod.exports;
		}
	})(this, function (module, exports) {
		'use strict';
	
		var map = typeof Map === "function" ? new Map() : function () {
			var keys = [];
			var values = [];
	
			return {
				has: function has(key) {
					return keys.indexOf(key) > -1;
				},
				get: function get(key) {
					return values[keys.indexOf(key)];
				},
				set: function set(key, value) {
					if (keys.indexOf(key) === -1) {
						keys.push(key);
						values.push(value);
					}
				},
				delete: function _delete(key) {
					var index = keys.indexOf(key);
					if (index > -1) {
						keys.splice(index, 1);
						values.splice(index, 1);
					}
				}
			};
		}();
	
		var createEvent = function createEvent(name) {
			return new Event(name, { bubbles: true });
		};
		try {
			new Event('test');
		} catch (e) {
			// IE does not support `new Event()`
			createEvent = function createEvent(name) {
				var evt = document.createEvent('Event');
				evt.initEvent(name, true, false);
				return evt;
			};
		}
	
		function assign(ta) {
			if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;
	
			var heightOffset = null;
			var clientWidth = null;
			var cachedHeight = null;
	
			function init() {
				var style = window.getComputedStyle(ta, null);
	
				if (style.resize === 'vertical') {
					ta.style.resize = 'none';
				} else if (style.resize === 'both') {
					ta.style.resize = 'horizontal';
				}
	
				if (style.boxSizing === 'content-box') {
					heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
				} else {
					heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
				}
				// Fix when a textarea is not on document body and heightOffset is Not a Number
				if (isNaN(heightOffset)) {
					heightOffset = 0;
				}
	
				update();
			}
	
			function changeOverflow(value) {
				{
					// Chrome/Safari-specific fix:
					// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
					// made available by removing the scrollbar. The following forces the necessary text reflow.
					var width = ta.style.width;
					ta.style.width = '0px';
					// Force reflow:
					/* jshint ignore:start */
					ta.offsetWidth;
					/* jshint ignore:end */
					ta.style.width = width;
				}
	
				ta.style.overflowY = value;
			}
	
			function getParentOverflows(el) {
				var arr = [];
	
				while (el && el.parentNode && el.parentNode instanceof Element) {
					if (el.parentNode.scrollTop) {
						arr.push({
							node: el.parentNode,
							scrollTop: el.parentNode.scrollTop
						});
					}
					el = el.parentNode;
				}
	
				return arr;
			}
	
			function resize() {
				if (ta.scrollHeight === 0) {
					// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
					return;
				}
	
				var overflows = getParentOverflows(ta);
				var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)
	
				ta.style.height = '';
				ta.style.height = ta.scrollHeight + heightOffset + 'px';
	
				// used to check if an update is actually necessary on window.resize
				clientWidth = ta.clientWidth;
	
				// prevents scroll-position jumping
				overflows.forEach(function (el) {
					el.node.scrollTop = el.scrollTop;
				});
	
				if (docTop) {
					document.documentElement.scrollTop = docTop;
				}
			}
	
			function update() {
				resize();
	
				var styleHeight = Math.round(parseFloat(ta.style.height));
				var computed = window.getComputedStyle(ta, null);
	
				// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
				var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;
	
				// The actual height not matching the style height (set via the resize method) indicates that 
				// the max-height has been exceeded, in which case the overflow should be allowed.
				if (actualHeight < styleHeight) {
					if (computed.overflowY === 'hidden') {
						changeOverflow('scroll');
						resize();
						actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
					}
				} else {
					// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
					if (computed.overflowY !== 'hidden') {
						changeOverflow('hidden');
						resize();
						actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
					}
				}
	
				if (cachedHeight !== actualHeight) {
					cachedHeight = actualHeight;
					var evt = createEvent('autosize:resized');
					try {
						ta.dispatchEvent(evt);
					} catch (err) {
						// Firefox will throw an error on dispatchEvent for a detached element
						// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
					}
				}
			}
	
			var pageResize = function pageResize() {
				if (ta.clientWidth !== clientWidth) {
					update();
				}
			};
	
			var destroy = function (style) {
				window.removeEventListener('resize', pageResize, false);
				ta.removeEventListener('input', update, false);
				ta.removeEventListener('keyup', update, false);
				ta.removeEventListener('autosize:destroy', destroy, false);
				ta.removeEventListener('autosize:update', update, false);
	
				Object.keys(style).forEach(function (key) {
					ta.style[key] = style[key];
				});
	
				map.delete(ta);
			}.bind(ta, {
				height: ta.style.height,
				resize: ta.style.resize,
				overflowY: ta.style.overflowY,
				overflowX: ta.style.overflowX,
				wordWrap: ta.style.wordWrap
			});
	
			ta.addEventListener('autosize:destroy', destroy, false);
	
			// IE9 does not fire onpropertychange or oninput for deletions,
			// so binding to onkeyup to catch most of those events.
			// There is no way that I know of to detect something like 'cut' in IE9.
			if ('onpropertychange' in ta && 'oninput' in ta) {
				ta.addEventListener('keyup', update, false);
			}
	
			window.addEventListener('resize', pageResize, false);
			ta.addEventListener('input', update, false);
			ta.addEventListener('autosize:update', update, false);
			ta.style.overflowX = 'hidden';
			ta.style.wordWrap = 'break-word';
	
			map.set(ta, {
				destroy: destroy,
				update: update
			});
	
			init();
		}
	
		function destroy(ta) {
			var methods = map.get(ta);
			if (methods) {
				methods.destroy();
			}
		}
	
		function update(ta) {
			var methods = map.get(ta);
			if (methods) {
				methods.update();
			}
		}
	
		var autosize = null;
	
		// Do nothing in Node.js environment and IE8 (or lower)
		if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
			autosize = function autosize(el) {
				return el;
			};
			autosize.destroy = function (el) {
				return el;
			};
			autosize.update = function (el) {
				return el;
			};
		} else {
			autosize = function autosize(el, options) {
				if (el) {
					Array.prototype.forEach.call(el.length ? el : [el], function (x) {
						return assign(x, options);
					});
				}
				return el;
			};
			autosize.destroy = function (el) {
				if (el) {
					Array.prototype.forEach.call(el.length ? el : [el], destroy);
				}
				return el;
			};
			autosize.update = function (el) {
				if (el) {
					Array.prototype.forEach.call(el.length ? el : [el], update);
				}
				return el;
			};
		}
	
		exports.default = autosize;
		module.exports = exports['default'];
	});

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

	// This code has been refactored for 140 bytes
	// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
	var computedStyle = function (el, prop, getComputedStyle) {
	  getComputedStyle = window.getComputedStyle;
	
	  // In one fell swoop
	  return (
	    // If we have getComputedStyle
	    getComputedStyle ?
	      // Query it
	      // TODO: From CSS-Query notes, we might need (node, null) for FF
	      getComputedStyle(el) :
	
	    // Otherwise, we are in IE and use currentStyle
	      el.currentStyle
	  )[
	    // Switch to camelCase for CSSOM
	    // DEV: Grabbed from jQuery
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
	    prop.replace(/-(\w)/gi, function (word, letter) {
	      return letter.toUpperCase();
	    })
	  ];
	};
	
	module.exports = computedStyle;


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

	// Load in dependencies
	var computedStyle = __webpack_require__(226);
	
	/**
	 * Calculate the `line-height` of a given node
	 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
	 * @returns {Number} `line-height` of the element in pixels
	 */
	function lineHeight(node) {
	  // Grab the line-height via style
	  var lnHeightStr = computedStyle(node, 'line-height');
	  var lnHeight = parseFloat(lnHeightStr, 10);
	
	  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
	  if (lnHeightStr === lnHeight + '') {
	    // Save the old lineHeight style and update the em unit to the element
	    var _lnHeightStyle = node.style.lineHeight;
	    node.style.lineHeight = lnHeightStr + 'em';
	
	    // Calculate the em based height
	    lnHeightStr = computedStyle(node, 'line-height');
	    lnHeight = parseFloat(lnHeightStr, 10);
	
	    // Revert the lineHeight style
	    if (_lnHeightStyle) {
	      node.style.lineHeight = _lnHeightStyle;
	    } else {
	      delete node.style.lineHeight;
	    }
	  }
	
	  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
	  // DEV: `em` units are converted to `pt` in IE6
	  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
	  if (lnHeightStr.indexOf('pt') !== -1) {
	    lnHeight *= 4;
	    lnHeight /= 3;
	  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
	  } else if (lnHeightStr.indexOf('mm') !== -1) {
	    lnHeight *= 96;
	    lnHeight /= 25.4;
	  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
	  } else if (lnHeightStr.indexOf('cm') !== -1) {
	    lnHeight *= 96;
	    lnHeight /= 2.54;
	  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
	  } else if (lnHeightStr.indexOf('in') !== -1) {
	    lnHeight *= 96;
	  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
	  } else if (lnHeightStr.indexOf('pc') !== -1) {
	    lnHeight *= 16;
	  }
	
	  // Continue our computation
	  lnHeight = Math.round(lnHeight);
	
	  // If the line-height is "normal", calculate by font-size
	  if (lnHeightStr === 'normal') {
	    // Create a temporary node
	    var nodeName = node.nodeName;
	    var _node = document.createElement(nodeName);
	    _node.innerHTML = '&nbsp;';
	
	    // If we have a text area, reset it to only 1 row
	    // https://github.com/twolfson/line-height/issues/4
	    if (nodeName.toUpperCase() === 'TEXTAREA') {
	      _node.setAttribute('rows', '1');
	    }
	
	    // Set the font-size of the element
	    var fontSizeStr = computedStyle(node, 'font-size');
	    _node.style.fontSize = fontSizeStr;
	
	    // Remove default padding/border which can affect offset height
	    // https://github.com/twolfson/line-height/issues/4
	    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
	    _node.style.padding = '0px';
	    _node.style.border = '0px';
	
	    // Append it to the body
	    var body = document.body;
	    body.appendChild(_node);
	
	    // Assume the line height of the element is the height
	    var height = _node.offsetHeight;
	    lnHeight = height;
	
	    // Remove our child from the DOM
	    body.removeChild(_node);
	  }
	
	  // Return the calculated height
	  return lnHeight;
	}
	
	// Export lineHeight
	module.exports = lineHeight;


/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __rest = (this && this.__rest) || function (s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
	            t[p[i]] = s[p[i]];
	    return t;
	};
	exports.__esModule = true;
	var React = __webpack_require__(1);
	var PropTypes = __webpack_require__(2);
	var autosize = __webpack_require__(174);
	var _getLineHeight = __webpack_require__(374);
	var getLineHeight = _getLineHeight;
	var UPDATE = 'autosize:update';
	var DESTROY = 'autosize:destroy';
	var RESIZED = 'autosize:resized';
	/**
	 * A light replacement for built-in textarea component
	 * which automaticaly adjusts its height to match the content
	 */
	var TextareaAutosize = /** @class */ (function (_super) {
	    __extends(TextareaAutosize, _super);
	    function TextareaAutosize() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.state = {
	            lineHeight: null
	        };
	        _this.dispatchEvent = function (EVENT_TYPE) {
	            var event = document.createEvent('Event');
	            event.initEvent(EVENT_TYPE, true, false);
	            _this.textarea.dispatchEvent(event);
	        };
	        _this.updateLineHeight = function () {
	            _this.setState({
	                lineHeight: getLineHeight(_this.textarea)
	            });
	        };
	        _this.onChange = function (e) {
	            var onChange = _this.props.onChange;
	            _this.currentValue = e.currentTarget.value;
	            onChange && onChange(e);
	        };
	        _this.saveDOMNodeRef = function (ref) {
	            var innerRef = _this.props.innerRef;
	            if (innerRef) {
	                innerRef(ref);
	            }
	            _this.textarea = ref;
	        };
	        _this.getLocals = function () {
	            var _a = _this, _b = _a.props, onResize = _b.onResize, maxRows = _b.maxRows, onChange = _b.onChange, style = _b.style, innerRef = _b.innerRef, props = __rest(_b, ["onResize", "maxRows", "onChange", "style", "innerRef"]), lineHeight = _a.state.lineHeight, saveDOMNodeRef = _a.saveDOMNodeRef;
	            var maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;
	            return __assign({}, props, { saveDOMNodeRef: saveDOMNodeRef, style: maxHeight ? __assign({}, style, { maxHeight: maxHeight }) : style, onChange: _this.onChange });
	        };
	        return _this;
	    }
	    TextareaAutosize.prototype.componentDidMount = function () {
	        var _this = this;
	        var _a = this.props, onResize = _a.onResize, maxRows = _a.maxRows;
	        if (typeof maxRows === 'number') {
	            this.updateLineHeight();
	        }
	        /*
	          the defer is needed to:
	            - force "autosize" to activate the scrollbar when this.props.maxRows is passed
	            - support StyledComponents (see #71)
	        */
	        setTimeout(function () { return autosize(_this.textarea); });
	        if (onResize) {
	            this.textarea.addEventListener(RESIZED, onResize);
	        }
	    };
	    TextareaAutosize.prototype.componentWillUnmount = function () {
	        var onResize = this.props.onResize;
	        if (onResize) {
	            this.textarea.removeEventListener(RESIZED, onResize);
	        }
	        this.dispatchEvent(DESTROY);
	    };
	    TextareaAutosize.prototype.render = function () {
	        var _a = this.getLocals(), children = _a.children, saveDOMNodeRef = _a.saveDOMNodeRef, locals = __rest(_a, ["children", "saveDOMNodeRef"]);
	        return (React.createElement("textarea", __assign({}, locals, { ref: saveDOMNodeRef }), children));
	    };
	    TextareaAutosize.prototype.componentDidUpdate = function (prevProps) {
	        if (this.props.value !== this.currentValue || this.props.rows !== prevProps.rows) {
	            this.dispatchEvent(UPDATE);
	        }
	    };
	    TextareaAutosize.defaultProps = {
	        rows: 1
	    };
	    TextareaAutosize.propTypes = {
	        rows: PropTypes.number,
	        maxRows: PropTypes.number,
	        onResize: PropTypes.func,
	        innerRef: PropTypes.func
	    };
	    return TextareaAutosize;
	}(React.Component));
	exports["default"] = TextareaAutosize;


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	exports.__esModule = true;
	var TextareaAutosize_1 = __webpack_require__(457);
	exports["default"] = TextareaAutosize_1["default"];


/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/tilden-hands-cropped.bf2fb50a.png";

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = About;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(8);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactAutosizeTextarea = __webpack_require__(458);
	
	var _reactAutosizeTextarea2 = _interopRequireDefault(_reactAutosizeTextarea);
	
	var _coverImage = __webpack_require__(63);
	
	var _coverImage2 = _interopRequireDefault(_coverImage);
	
	var _indexModule = __webpack_require__(307);
	
	var _indexModule2 = _interopRequireDefault(_indexModule);
	
	var _tildenHandsCropped = __webpack_require__(532);
	
	var _tildenHandsCropped2 = _interopRequireDefault(_tildenHandsCropped);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function About() {
	  return _react2.default.createElement(
	    "div",
	    null,
	    _react2.default.createElement(_coverImage2.default, { src: _tildenHandsCropped2.default, className: _indexModule2.default.cover }),
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        "div",
	        { className: _indexModule2.default.section },
	        _react2.default.createElement(
	          "div",
	          { className: _indexModule2.default.title },
	          "Say Hello"
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: _indexModule2.default.content },
	          _react2.default.createElement(
	            "p",
	            null,
	            "Need a thought partner? Want to team up? Or, just want to chat over coffee? Reach out."
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: _indexModule2.default.contact },
	            _react2.default.createElement(
	              "div",
	              null,
	              "312.369.8883"
	            ),
	            _react2.default.createElement(
	              "div",
	              null,
	              "hello@convergencedesignlab.org"
	            )
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: _indexModule2.default.isOrange },
	      _react2.default.createElement(
	        "div",
	        { className: "container" },
	        _react2.default.createElement(
	          "div",
	          { className: _indexModule2.default.section },
	          _react2.default.createElement(
	            "div",
	            { className: _indexModule2.default.title },
	            "Drop a Line"
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: _indexModule2.default.content },
	            _react2.default.createElement(
	              "form",
	              { className: _indexModule2.default.form, action: "" },
	              _react2.default.createElement(
	                "label",
	                { className: _indexModule2.default.formBlock },
	                _react2.default.createElement(
	                  "div",
	                  { className: _indexModule2.default.formLabelName },
	                  "Name"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: _indexModule2.default.formLabelExplanation },
	                  "What should we call you?"
	                ),
	                _react2.default.createElement("input", {
	                  className: _indexModule2.default.formInput,
	                  name: "name",
	                  type: "text",
	                  placeholder: "Your Name"
	                })
	              ),
	              _react2.default.createElement(
	                "label",
	                { className: _indexModule2.default.formBlock },
	                _react2.default.createElement(
	                  "div",
	                  { className: _indexModule2.default.formLabelName },
	                  "Email"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: _indexModule2.default.formLabelExplanation },
	                  "How can we reach you?"
	                ),
	                _react2.default.createElement("input", {
	                  className: _indexModule2.default.formInput,
	                  name: "email",
	                  type: "email",
	                  placeholder: "Your Email"
	                })
	              ),
	              _react2.default.createElement(
	                "label",
	                { className: _indexModule2.default.formBlock },
	                _react2.default.createElement(
	                  "div",
	                  { className: _indexModule2.default.formLabelName },
	                  "Subject"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: _indexModule2.default.formLabelExplanation },
	                  "What do you want to talk about?"
	                ),
	                _react2.default.createElement(
	                  "select",
	                  { className: _indexModule2.default.formInput, name: "subject" },
	                  _react2.default.createElement(
	                    "option",
	                    { value: "partner" },
	                    "I'd like to partner with you"
	                  ),
	                  _react2.default.createElement(
	                    "option",
	                    { value: "advice" },
	                    "I'm looking for some advice"
	                  ),
	                  _react2.default.createElement(
	                    "option",
	                    { value: "collaborate" },
	                    "I want to collaborate with you"
	                  ),
	                  _react2.default.createElement(
	                    "option",
	                    { value: "chat" },
	                    "I'd just like to chat"
	                  ),
	                  _react2.default.createElement(
	                    "option",
	                    { value: "something-else" },
	                    "Something else"
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "label",
	                { className: _indexModule2.default.formBlock },
	                _react2.default.createElement(
	                  "div",
	                  { className: _indexModule2.default.formLabelName },
	                  "Message"
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: _indexModule2.default.formLabelExplanation },
	                  "What do you want to say?"
	                ),
	                _react2.default.createElement(_reactAutosizeTextarea2.default, {
	                  className: _indexModule2.default.formInput,
	                  name: "message",
	                  placeholder: "Your Message",
	                  rows: 4,
	                  maxRows: 25
	                })
	              ),
	              _react2.default.createElement("input", { className: _indexModule2.default.formSubmit, type: "submit", value: "Send" })
	            )
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        "div",
	        { className: _indexModule2.default.section },
	        _react2.default.createElement(
	          "div",
	          { className: _indexModule2.default.title },
	          "Stop By"
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: _indexModule2.default.content },
	          _react2.default.createElement(
	            "div",
	            { className: "font-weight-700" },
	            "Convergence Design Lab"
	          ),
	          _react2.default.createElement(
	            "div",
	            null,
	            "Columbia College Chicago"
	          ),
	          _react2.default.createElement(
	            "div",
	            null,
	            "33 East Congress, Suite 600"
	          ),
	          _react2.default.createElement(
	            "div",
	            null,
	            "Chicago, IL 60605"
	          ),
	          _react2.default.createElement(
	            "a",
	            { href: "https://goo.gl/maps/drufjZexbpQ2" },
	            "Directions"
	          ),
	          _react2.default.createElement("iframe", {
	            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.815526331541!2d-87.628654984559!3d41.875315279222306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca2828800d1%3A0xe51126d097f1e665!2s33+E+Congress+Pkwy+%23600%2C+Chicago%2C+IL+60605!5e0!3m2!1sen!2sus!4v1527177735863",
	            frameBorder: "0",
	            className: _indexModule2.default.map,
	            allowFullScreen: true
	          })
	        )
	      )
	    )
	  );
	}
	module.exports = exports["default"];

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"cover":"src-components-contact----index-module---cover---2Zo2w","section":"src-components-contact----index-module---section---y-Hhx","title":"src-components-contact----index-module---title---2h0TX","content":"src-components-contact----index-module---content---FVn67","isOrange":"src-components-contact----index-module---isOrange---2uLZH","contact":"src-components-contact----index-module---contact---ZKrO6","form":"src-components-contact----index-module---form---1gYrJ","formBlock":"src-components-contact----index-module---formBlock---2KH4S","formLabelName":"src-components-contact----index-module---formLabelName---2GsHD","formLabelExplanation":"src-components-contact----index-module---formLabelExplanation---3ca-v","formInput":"src-components-contact----index-module---formInput---3m6Kk","formSubmit":"src-components-contact----index-module---formSubmit---2xDLu","map":"src-components-contact----index-module---map---3sm5-"};

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = CoverImage;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(8);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _indexModule = __webpack_require__(92);
	
	var _indexModule2 = _interopRequireDefault(_indexModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function CoverImage(_ref) {
	  var src = _ref.src,
	      alt = _ref.alt,
	      className = _ref.className,
	      otherProps = _objectWithoutProperties(_ref, ["src", "alt", "className"]);
	
	  return _react2.default.createElement("img", _extends({ className: (0, _classnames2.default)(_indexModule2.default.cover, className), src: src, alt: alt }, otherProps));
	}
	module.exports = exports["default"];

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"cover":"src-components-cover-image----index-module---cover---3rgX9"};

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(4);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _contact = __webpack_require__(186);
	
	var _contact2 = _interopRequireDefault(_contact);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ContactPage = function ContactPage() {
	  return _react2.default.createElement(_contact2.default, null);
	};
	
	exports.default = ContactPage;
	module.exports = exports["default"];

/***/ })

});
//# sourceMappingURL=component---src-pages-contact-js-6868e3f2a157aec99a24.js.map