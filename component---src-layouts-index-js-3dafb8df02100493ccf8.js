webpackJsonp([114276838955818,60335399758886],{

/***/ 98:
/***/ (function(module, exports) {

	module.exports = {"layoutContext":{}}

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(208);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _layoutIndex = __webpack_require__(98);
	
	var _layoutIndex2 = _interopRequireDefault(_layoutIndex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(_index2.default, _extends({}, props, _layoutIndex2.default));
	};
	
	module.exports = exports["default"];

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(296);
	var isArguments = __webpack_require__(295);
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ }),

/***/ 295:
/***/ (function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ }),

/***/ 296:
/***/ (function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ }),

/***/ 371:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = throttle;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.Helmet = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSideEffect = __webpack_require__(474);
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _deepEqual = __webpack_require__(294);
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _HelmetUtils = __webpack_require__(456);
	
	var _HelmetConstants = __webpack_require__(169);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Helmet = function Helmet(Component) {
	    var _class, _temp;
	
	    return _temp = _class = function (_React$Component) {
	        _inherits(HelmetWrapper, _React$Component);
	
	        function HelmetWrapper() {
	            _classCallCheck(this, HelmetWrapper);
	
	            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	        }
	
	        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	            return !(0, _deepEqual2.default)(this.props, nextProps);
	        };
	
	        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
	            if (!nestedChildren) {
	                return null;
	            }
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.SCRIPT:
	                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    return {
	                        innerHTML: nestedChildren
	                    };
	
	                case _HelmetConstants.TAG_NAMES.STYLE:
	                    return {
	                        cssText: nestedChildren
	                    };
	            }
	
	            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
	        };
	
	        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
	            var _extends2;
	
	            var child = _ref.child,
	                arrayTypeChildren = _ref.arrayTypeChildren,
	                newChildProps = _ref.newChildProps,
	                nestedChildren = _ref.nestedChildren;
	
	            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
	        };
	
	        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
	            var _extends3, _extends4;
	
	            var child = _ref2.child,
	                newProps = _ref2.newProps,
	                newChildProps = _ref2.newChildProps,
	                nestedChildren = _ref2.nestedChildren;
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.TITLE:
	                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));
	
	                case _HelmetConstants.TAG_NAMES.BODY:
	                    return _extends({}, newProps, {
	                        bodyAttributes: _extends({}, newChildProps)
	                    });
	
	                case _HelmetConstants.TAG_NAMES.HTML:
	                    return _extends({}, newProps, {
	                        htmlAttributes: _extends({}, newChildProps)
	                    });
	            }
	
	            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
	        };
	
	        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
	            var newFlattenedProps = _extends({}, newProps);
	
	            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
	                var _extends5;
	
	                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
	            });
	
	            return newFlattenedProps;
	        };
	
	        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
	            if (false) {
	                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
	                    return child.type === name;
	                })) {
	                    if (typeof child.type === "function") {
	                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
	                    }
	
	                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
	                }
	
	                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
	                    return typeof nestedChild !== "string";
	                }))) {
	                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
	                }
	            }
	
	            return true;
	        };
	
	        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
	            var _this2 = this;
	
	            var arrayTypeChildren = {};
	
	            _react2.default.Children.forEach(children, function (child) {
	                if (!child || !child.props) {
	                    return;
	                }
	
	                var _child$props = child.props,
	                    nestedChildren = _child$props.children,
	                    childProps = _objectWithoutProperties(_child$props, ["children"]);
	
	                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);
	
	                _this2.warnOnInvalidChildren(child, nestedChildren);
	
	                switch (child.type) {
	                    case _HelmetConstants.TAG_NAMES.LINK:
	                    case _HelmetConstants.TAG_NAMES.META:
	                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    case _HelmetConstants.TAG_NAMES.SCRIPT:
	                    case _HelmetConstants.TAG_NAMES.STYLE:
	                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
	                            child: child,
	                            arrayTypeChildren: arrayTypeChildren,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	
	                    default:
	                        newProps = _this2.mapObjectTypeChildren({
	                            child: child,
	                            newProps: newProps,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	                }
	            });
	
	            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
	            return newProps;
	        };
	
	        HelmetWrapper.prototype.render = function render() {
	            var _props = this.props,
	                children = _props.children,
	                props = _objectWithoutProperties(_props, ["children"]);
	
	            var newProps = _extends({}, props);
	
	            if (children) {
	                newProps = this.mapChildrenToProps(children, newProps);
	            }
	
	            return _react2.default.createElement(Component, newProps);
	        };
	
	        _createClass(HelmetWrapper, null, [{
	            key: "canUseDOM",
	
	
	            // Component.peek comes from react-side-effect:
	            // For testing, you may use a static peek() method available on the returned component.
	            // It lets you get the current state without resetting the mounted instance stack.
	            // Don’t use it for anything other than testing.
	
	            /**
	            * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
	            * @param {Object} bodyAttributes: {"className": "root"}
	            * @param {String} defaultTitle: "Default Title"
	            * @param {Boolean} defer: true
	            * @param {Boolean} encodeSpecialCharacters: true
	            * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
	            * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
	            * @param {Array} meta: [{"name": "description", "content": "Test description"}]
	            * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
	            * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
	            * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
	            * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
	            * @param {String} title: "Title"
	            * @param {Object} titleAttributes: {"itemprop": "name"}
	            * @param {String} titleTemplate: "MySite.com - %s"
	            */
	            set: function set(canUseDOM) {
	                Component.canUseDOM = canUseDOM;
	            }
	        }]);
	
	        return HelmetWrapper;
	    }(_react2.default.Component), _class.propTypes = {
	        base: _propTypes2.default.object,
	        bodyAttributes: _propTypes2.default.object,
	        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
	        defaultTitle: _propTypes2.default.string,
	        defer: _propTypes2.default.bool,
	        encodeSpecialCharacters: _propTypes2.default.bool,
	        htmlAttributes: _propTypes2.default.object,
	        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        onChangeClientState: _propTypes2.default.func,
	        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        title: _propTypes2.default.string,
	        titleAttributes: _propTypes2.default.object,
	        titleTemplate: _propTypes2.default.string
	    }, _class.defaultProps = {
	        defer: true,
	        encodeSpecialCharacters: true
	    }, _class.peek = Component.peek, _class.rewind = function () {
	        var mappedState = Component.rewind();
	        if (!mappedState) {
	            // provide fallback if mappedState is undefined
	            mappedState = (0, _HelmetUtils.mapStateOnServer)({
	                baseTag: [],
	                bodyAttributes: {},
	                encodeSpecialCharacters: true,
	                htmlAttributes: {},
	                linkTags: [],
	                metaTags: [],
	                noscriptTags: [],
	                scriptTags: [],
	                styleTags: [],
	                title: "",
	                titleAttributes: {}
	            });
	        }
	
	        return mappedState;
	    }, _temp;
	};
	
	var NullComponent = function NullComponent() {
	    return null;
	};
	
	var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
	
	var HelmetExport = Helmet(HelmetSideEffects);
	HelmetExport.renderStatic = HelmetExport.rewind;
	
	exports.Helmet = HelmetExport;
	exports.default = HelmetExport;

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

	exports.__esModule = true;
	var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
	    BODY: "bodyAttributes",
	    HTML: "htmlAttributes",
	    TITLE: "titleAttributes"
	};
	
	var TAG_NAMES = exports.TAG_NAMES = {
	    BASE: "base",
	    BODY: "body",
	    HEAD: "head",
	    HTML: "html",
	    LINK: "link",
	    META: "meta",
	    NOSCRIPT: "noscript",
	    SCRIPT: "script",
	    STYLE: "style",
	    TITLE: "title"
	};
	
	var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
	    return TAG_NAMES[name];
	});
	
	var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
	    CHARSET: "charset",
	    CSS_TEXT: "cssText",
	    HREF: "href",
	    HTTPEQUIV: "http-equiv",
	    INNER_HTML: "innerHTML",
	    ITEM_PROP: "itemprop",
	    NAME: "name",
	    PROPERTY: "property",
	    REL: "rel",
	    SRC: "src"
	};
	
	var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
	    accesskey: "accessKey",
	    charset: "charSet",
	    class: "className",
	    contenteditable: "contentEditable",
	    contextmenu: "contextMenu",
	    "http-equiv": "httpEquiv",
	    itemprop: "itemProp",
	    tabindex: "tabIndex"
	};
	
	var HELMET_PROPS = exports.HELMET_PROPS = {
	    DEFAULT_TITLE: "defaultTitle",
	    DEFER: "defer",
	    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
	    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
	    TITLE_TEMPLATE: "titleTemplate"
	};
	
	var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
	    obj[REACT_TAG_MAP[key]] = key;
	    return obj;
	}, {});
	
	var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
	
	var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
	exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(106);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _HelmetConstants = __webpack_require__(169);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
	    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (encode === false) {
	        return String(str);
	    }
	
	    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};
	
	var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
	    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
	    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);
	
	    if (innermostTemplate && innermostTitle) {
	        // use function arg to avoid need to escape $ characters
	        return innermostTemplate.replace(/%s/g, function () {
	            return innermostTitle;
	        });
	    }
	
	    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
	
	    return innermostTitle || innermostDefaultTitle || undefined;
	};
	
	var getOnChangeClientState = function getOnChangeClientState(propsList) {
	    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
	};
	
	var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[tagType] !== "undefined";
	    }).map(function (props) {
	        return props[tagType];
	    }).reduce(function (tagAttrs, current) {
	        return _extends({}, tagAttrs, current);
	    }, {});
	};
	
	var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstants.TAG_NAMES.BASE];
	    }).reverse().reduce(function (innermostBaseTag, tag) {
	        if (!innermostBaseTag.length) {
	            var keys = Object.keys(tag);
	
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
	                    return innermostBaseTag.concat(tag);
	                }
	            }
	        }
	
	        return innermostBaseTag;
	    }, []);
	};
	
	var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
	    // Calculate list of tags, giving priority innermost component (end of the propslist)
	    var approvedSeenTags = {};
	
	    return propsList.filter(function (props) {
	        if (Array.isArray(props[tagName])) {
	            return true;
	        }
	        if (typeof props[tagName] !== "undefined") {
	            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
	        }
	        return false;
	    }).map(function (props) {
	        return props[tagName];
	    }).reverse().reduce(function (approvedTags, instanceTags) {
	        var instanceSeenTags = {};
	
	        instanceTags.filter(function (tag) {
	            var primaryAttributeKey = void 0;
	            var keys = Object.keys(tag);
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
	                    primaryAttributeKey = lowerCaseAttributeKey;
	                }
	                // Special case for innerHTML which doesn't work lowercased
	                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
	                    primaryAttributeKey = attributeKey;
	                }
	            }
	
	            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
	                return false;
	            }
	
	            var value = tag[primaryAttributeKey].toLowerCase();
	
	            if (!approvedSeenTags[primaryAttributeKey]) {
	                approvedSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!instanceSeenTags[primaryAttributeKey]) {
	                instanceSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!approvedSeenTags[primaryAttributeKey][value]) {
	                instanceSeenTags[primaryAttributeKey][value] = true;
	                return true;
	            }
	
	            return false;
	        }).reverse().forEach(function (tag) {
	            return approvedTags.push(tag);
	        });
	
	        // Update seen tags with tags from this instance
	        var keys = Object.keys(instanceSeenTags);
	        for (var i = 0; i < keys.length; i++) {
	            var attributeKey = keys[i];
	            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
	
	            approvedSeenTags[attributeKey] = tagUnion;
	        }
	
	        return approvedTags;
	    }, []).reverse();
	};
	
	var getInnermostProperty = function getInnermostProperty(propsList, property) {
	    for (var i = propsList.length - 1; i >= 0; i--) {
	        var props = propsList[i];
	
	        if (props.hasOwnProperty(property)) {
	            return props[property];
	        }
	    }
	
	    return null;
	};
	
	var reducePropsToState = function reducePropsToState(propsList) {
	    return {
	        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
	        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
	        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
	        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
	        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
	        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        onChangeClientState: getOnChangeClientState(propsList),
	        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
	        title: getTitleFromPropsList(propsList),
	        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
	    };
	};
	
	var rafPolyfill = function () {
	    var clock = Date.now();
	
	    return function (callback) {
	        var currentTime = Date.now();
	
	        if (currentTime - clock > 16) {
	            clock = currentTime;
	            callback(currentTime);
	        } else {
	            setTimeout(function () {
	                rafPolyfill(callback);
	            }, 0);
	        }
	    };
	}();
	
	var cafPolyfill = function cafPolyfill(id) {
	    return clearTimeout(id);
	};
	
	var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
	
	var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;
	
	var warn = function warn(msg) {
	    return console && typeof console.warn === "function" && console.warn(msg);
	};
	
	var _helmetCallback = null;
	
	var handleClientStateChange = function handleClientStateChange(newState) {
	    if (_helmetCallback) {
	        cancelAnimationFrame(_helmetCallback);
	    }
	
	    if (newState.defer) {
	        _helmetCallback = requestAnimationFrame(function () {
	            commitTagChanges(newState, function () {
	                _helmetCallback = null;
	            });
	        });
	    } else {
	        commitTagChanges(newState);
	        _helmetCallback = null;
	    }
	};
	
	var commitTagChanges = function commitTagChanges(newState, cb) {
	    var baseTag = newState.baseTag,
	        bodyAttributes = newState.bodyAttributes,
	        htmlAttributes = newState.htmlAttributes,
	        linkTags = newState.linkTags,
	        metaTags = newState.metaTags,
	        noscriptTags = newState.noscriptTags,
	        onChangeClientState = newState.onChangeClientState,
	        scriptTags = newState.scriptTags,
	        styleTags = newState.styleTags,
	        title = newState.title,
	        titleAttributes = newState.titleAttributes;
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
	    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
	
	    updateTitle(title, titleAttributes);
	
	    var tagUpdates = {
	        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
	        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
	        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
	        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
	        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
	        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
	    };
	
	    var addedTags = {};
	    var removedTags = {};
	
	    Object.keys(tagUpdates).forEach(function (tagType) {
	        var _tagUpdates$tagType = tagUpdates[tagType],
	            newTags = _tagUpdates$tagType.newTags,
	            oldTags = _tagUpdates$tagType.oldTags;
	
	
	        if (newTags.length) {
	            addedTags[tagType] = newTags;
	        }
	        if (oldTags.length) {
	            removedTags[tagType] = tagUpdates[tagType].oldTags;
	        }
	    });
	
	    cb && cb();
	
	    onChangeClientState(newState, addedTags, removedTags);
	};
	
	var flattenArray = function flattenArray(possibleArray) {
	    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
	};
	
	var updateTitle = function updateTitle(title, attributes) {
	    if (typeof title !== "undefined" && document.title !== title) {
	        document.title = flattenArray(title);
	    }
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
	};
	
	var updateAttributes = function updateAttributes(tagName, attributes) {
	    var elementTag = document.getElementsByTagName(tagName)[0];
	
	    if (!elementTag) {
	        return;
	    }
	
	    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	    var attributesToRemove = [].concat(helmetAttributes);
	    var attributeKeys = Object.keys(attributes);
	
	    for (var i = 0; i < attributeKeys.length; i++) {
	        var attribute = attributeKeys[i];
	        var value = attributes[attribute] || "";
	
	        if (elementTag.getAttribute(attribute) !== value) {
	            elementTag.setAttribute(attribute, value);
	        }
	
	        if (helmetAttributes.indexOf(attribute) === -1) {
	            helmetAttributes.push(attribute);
	        }
	
	        var indexToSave = attributesToRemove.indexOf(attribute);
	        if (indexToSave !== -1) {
	            attributesToRemove.splice(indexToSave, 1);
	        }
	    }
	
	    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
	        elementTag.removeAttribute(attributesToRemove[_i]);
	    }
	
	    if (helmetAttributes.length === attributesToRemove.length) {
	        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
	        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
	    }
	};
	
	var updateTags = function updateTags(type, tags) {
	    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
	    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
	    var oldTags = Array.prototype.slice.call(tagNodes);
	    var newTags = [];
	    var indexToDelete = void 0;
	
	    if (tags && tags.length) {
	        tags.forEach(function (tag) {
	            var newElement = document.createElement(type);
	
	            for (var attribute in tag) {
	                if (tag.hasOwnProperty(attribute)) {
	                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
	                        newElement.innerHTML = tag.innerHTML;
	                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                        if (newElement.styleSheet) {
	                            newElement.styleSheet.cssText = tag.cssText;
	                        } else {
	                            newElement.appendChild(document.createTextNode(tag.cssText));
	                        }
	                    } else {
	                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
	                        newElement.setAttribute(attribute, value);
	                    }
	                }
	            }
	
	            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");
	
	            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	            if (oldTags.some(function (existingTag, index) {
	                indexToDelete = index;
	                return newElement.isEqualNode(existingTag);
	            })) {
	                oldTags.splice(indexToDelete, 1);
	            } else {
	                newTags.push(newElement);
	            }
	        });
	    }
	
	    oldTags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	    });
	    newTags.forEach(function (tag) {
	        return headElement.appendChild(tag);
	    });
	
	    return {
	        oldTags: oldTags,
	        newTags: newTags
	    };
	};
	
	var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
	    return Object.keys(attributes).reduce(function (str, key) {
	        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
	        return str ? str + " " + attr : attr;
	    }, "");
	};
	
	var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
	    var attributeString = generateElementAttributesAsString(attributes);
	    var flattenedTitle = flattenArray(title);
	    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
	};
	
	var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
	    return tags.reduce(function (str, tag) {
	        var attributeHtml = Object.keys(tag).filter(function (attribute) {
	            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
	        }).reduce(function (string, attribute) {
	            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
	            return string ? string + " " + attr : attr;
	        }, "");
	
	        var tagContent = tag.innerHTML || tag.cssText || "";
	
	        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
	
	        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
	    }, "");
	};
	
	var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
	    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(attributes).reduce(function (obj, key) {
	        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
	        return obj;
	    }, initProps);
	};
	
	var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
	    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(props).reduce(function (obj, key) {
	        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
	        return obj;
	    }, initAttributes);
	};
	
	var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
	    var _initProps;
	
	    // assigning into an array to define toString function on it
	    var initProps = (_initProps = {
	        key: title
	    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
	    var props = convertElementAttributestoReactProps(attributes, initProps);
	
	    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
	};
	
	var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
	    return tags.map(function (tag, i) {
	        var _mappedTag;
	
	        var mappedTag = (_mappedTag = {
	            key: i
	        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
	
	        Object.keys(tag).forEach(function (attribute) {
	            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;
	
	            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                var content = tag.innerHTML || tag.cssText;
	                mappedTag.dangerouslySetInnerHTML = { __html: content };
	            } else {
	                mappedTag[mappedAttribute] = tag[attribute];
	            }
	        });
	
	        return _react2.default.createElement(type, mappedTag);
	    });
	};
	
	var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
	    switch (type) {
	        case _HelmetConstants.TAG_NAMES.TITLE:
	            return {
	                toComponent: function toComponent() {
	                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
	                },
	                toString: function toString() {
	                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
	                }
	            };
	        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
	        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
	            return {
	                toComponent: function toComponent() {
	                    return convertElementAttributestoReactProps(tags);
	                },
	                toString: function toString() {
	                    return generateElementAttributesAsString(tags);
	                }
	            };
	        default:
	            return {
	                toComponent: function toComponent() {
	                    return generateTagsAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTagsAsString(type, tags, encode);
	                }
	            };
	    }
	};
	
	var mapStateOnServer = function mapStateOnServer(_ref) {
	    var baseTag = _ref.baseTag,
	        bodyAttributes = _ref.bodyAttributes,
	        encode = _ref.encode,
	        htmlAttributes = _ref.htmlAttributes,
	        linkTags = _ref.linkTags,
	        metaTags = _ref.metaTags,
	        noscriptTags = _ref.noscriptTags,
	        scriptTags = _ref.scriptTags,
	        styleTags = _ref.styleTags,
	        _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        titleAttributes = _ref.titleAttributes;
	    return {
	        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
	        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
	        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
	        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
	        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
	        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
	        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
	        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
	        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
	    };
	};
	
	exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
	exports.handleClientStateChange = handleClientStateChange;
	exports.mapStateOnServer = mapStateOnServer;
	exports.reducePropsToState = reducePropsToState;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.warn = warn;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _exenv = __webpack_require__(91);
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var _shallowequal = __webpack_require__(486);
	
	var _shallowequal2 = _interopRequireDefault(_shallowequal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }
	
	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }
	
	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }
	
	    var mountedInstances = [];
	    var state = void 0;
	
	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));
	
	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }
	
	    var SideEffect = function (_Component) {
	      _inherits(SideEffect, _Component);
	
	      function SideEffect() {
	        _classCallCheck(this, SideEffect);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      // Try to use displayName of wrapped component
	      SideEffect.peek = function peek() {
	        return state;
	      };
	
	      // Expose canUseDOM so tests can monkeypatch it
	
	
	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
	        }
	
	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };
	
	      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !(0, _shallowequal2.default)(nextProps, this.props);
	      };
	
	      SideEffect.prototype.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };
	
	      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };
	
	      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };
	
	      SideEffect.prototype.render = function render() {
	        return _react2.default.createElement(WrappedComponent, this.props);
	      };
	
	      return SideEffect;
	    }(_react.Component);
	
	    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
	    SideEffect.canUseDOM = _exenv2.default.canUseDOM;
	
	
	    return SideEffect;
	  };
	};

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	
	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	    if(ret !== void 0) {
	        return !!ret;
	    }
	
	    if(objA === objB) {
	        return true;
	    }
	
	    if(typeof objA !== 'object' || !objA ||
	       typeof objB !== 'object' || !objB) {
	        return false;
	    }
	
	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);
	
	    if(keysA.length !== keysB.length) {
	        return false;
	    }
	
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	
	    // Test for A's keys different from B.
	    for(var idx = 0; idx < keysA.length; idx++) {
	
	        var key = keysA[idx];
	
	        if(!bHasOwnProperty(key)) {
	            return false;
	        }
	
	        var valueA = objA[key];
	        var valueB = objB[key];
	
	        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	
	        if(ret === false ||
	           ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	
	    }
	
	    return true;
	
	};


/***/ }),

/***/ 327:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABQCAYAAADC8mo5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0YzMDMzNkZBQUIzMTFFNzkzODY5RkFFMTkwMUQwRjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0YzMDMzNzBBQUIzMTFFNzkzODY5RkFFMTkwMUQwRjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRjMwMzM2REFBQjMxMUU3OTM4NjlGQUUxOTAxRDBGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRjMwMzM2RUFBQjMxMUU3OTM4NjlGQUUxOTAxRDBGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqZujBgAABYWSURBVHja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"

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXBJREFUeNrsm19M21UUx09BOqWtVJgR6AZlMIluLjRbpllwtA9mkCWmzTJf6V5MfNgMvhh9YTzIgzFhPJksMZ2Jjxp4mJrMB8qyB+dcqLro4v5YtzWDCVgGhQ1EPKe9NQ38Su+vv/Pr77L0m9yUP+3pvR/Ov3u5BSirrLLKMk+2Ur/hpxOH3fjgx9GBowuHV4xcxcUYxxF7x3dx9IkFg0AIRi+OcJEmzuH4HCFFnwgwAki/8BIOEZgBswHZTA6ZIQMeIuNBfQgouWXAIBTKHyMauYNblIdCCCfGbbjCBChBfBgrARQQ7zEm3lNdjxETHLGowoY4q5eNOXzIU9wWgaFcE+AKKxsTFIIxUaLwKZRzfBwJmSvHDCkAJZtzhpTwGNGnjCnW0QeM9jkcHtOv4Fan39JQEt7iVxCMX8zNMo/pVXiD3GsJGFGJwgqDCVvlMX5QXEY6YiNgOkB9dVgBpmsLgOmyAox3C4DxlsEwz/EpVVf09Gwt1P38CtTcaE1/7bjn0XxeakcCHtXOwtzuWzCz75f015ZuCTDjr5kB5IXLB8ETPZwXRCHN7b4JU69ewfFD+nvcGti2tMe013ZD87fdsPSFMd41N9rSo+mbI3D7GB3PXCyNx6ydbaG4jXy5p94/XV1lGIjLXg+Bpg+g0ZmprKmJBUgMxmFlcpmLOW0mT+y9tD9uWvJFKNTU0bmL3776r+EZt9R0wvH2z/6HQnL4nNAaeQlcr7Odd6XnfK3zqt8UMAglDDkndI3zjw2HzpGWj8Be6dzwu0pnJTQN7gJ3Tx0XHJrzGMIJs4IRUCK5P9u+uGwICoVPIXk+bOaEQ4rIwqmQDJ/Ihgbh76WiZkZhIwMlF47D5+KG4zcEBqGQC+Y99W+fTuma0TYMm24MH73aiWFF4cWoEYTjNuIxEdjk1F8vmHw5pZAIys7BVk4wbq0okAIjQmjTbTslYNkkTBUot/roFVUrxkpFCqLXBIvxmIiM9QOJOalZHPKcNLyShlM7uPvKIV1g0FuCshsw8ph9U/MFvYUaOaOqqrdze403n9fk8xhd56UHEg/B9fifTcpzD9tKnuup5faaXikwohLpOhKkLrj75jRs0+iGqRJ50WO4RB7DXKGCWhWqIk8LrVt1iyvw5vUHG+AYSbj5VM3b12iuWQtM0ceBWnAanT52MFShmNUlA8bQnzgLZzs+pr9/po3/EKutmttkhwwYr9F3ycKhasVRjTbktAY7t0lvScBkE/KhO0lwXXgP4P5lviWgraofw6aDMf8E7/73AOdxNLwG8OIxnMIbSO1ZfTaWHwLEvwP4/auMvRKodEebtCAadKWZ4NS9nIHl9GANXtfRzt8DWEhknj/zawZKiWXNmS8tNL3YYVBVWjkmBorr0ayX22RMBkxSdTCrKw5uk0kZMOOqg1mc3MNtclwGTFR1MKkpdjDRgmBsb/8RVTmcVpcdkOL1mOTeS/ujMh5DGlUVzPzdg9wmR/WcxyhbR2d+O8ptclgaDIZTTMVcQ7mFuVRHMYxiejyG1KcamMkrJ7hN9ulp8HK95oxKIcTsLWfyeUt6/YVevXa2ZQIsvohIQG6d/4S100UoPr1bgvUKWVm+qTzfib7P3eWGitkrrQ+pOD4ErIBDUOIXBmBl4XlOKAGZuzLSF4cwpEr6Qa0sFMa8koUitUnWdaNK3KYaMTvnEAwKH0ZPIRghPbeqirq4h4BOg0kfx/nrp7fgAQ5GDSCQ03pfVPStTeE9BCfMtIBzt7/+GJZmdrHZE1DixbzY8CfcBKB3IfPfS70JIS72KsMiycO1zqss9ooFwgZGI0H7cTRvkoco3v+kdlw0kXmFkHTZk02sZZVVVllW6z8BBgAkx76i1RmttQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = Columbia;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _indexModule = __webpack_require__(307);
	
	var _indexModule2 = _interopRequireDefault(_indexModule);
	
	var _columbiaCollege = __webpack_require__(488);
	
	var _columbiaCollege2 = _interopRequireDefault(_columbiaCollege);
	
	var _classnames = __webpack_require__(8);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Columbia() {
	  return _react2.default.createElement(
	    "footer",
	    { className: _indexModule2.default.footer },
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        "div",
	        { className: "section" },
	        _react2.default.createElement(
	          "div",
	          { className: _indexModule2.default.join },
	          "Join the Conversation"
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: _indexModule2.default.email },
	          "hello@convergencedesignlab.org"
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: (0, _classnames2.default)(_indexModule2.default.social, "social-links") },
	          _react2.default.createElement(
	            "a",
	            { href: "https://www.flickr.com/photos/convergenceacademies/" },
	            _react2.default.createElement(
	              "span",
	              { className: "stacked-icon" },
	              _react2.default.createElement("i", { className: "fa fa-circle icon-background" }),
	              _react2.default.createElement("i", { className: "fa fa-flickr icon-foreground" })
	            )
	          ),
	          _react2.default.createElement(
	            "a",
	            { href: "https://www.facebook.com/convergencedesignlab/" },
	            _react2.default.createElement(
	              "span",
	              { className: "stacked-icon" },
	              _react2.default.createElement("i", { className: "fa fa-circle icon-background" }),
	              _react2.default.createElement("i", { className: "fa fa-facebook icon-foreground" })
	            )
	          ),
	          _react2.default.createElement(
	            "a",
	            { href: "https://twitter.com/ConvergenceDLab" },
	            _react2.default.createElement(
	              "span",
	              { className: "stacked-icon" },
	              _react2.default.createElement("i", { className: "fa fa-circle icon-background" }),
	              _react2.default.createElement("i", { className: "fa fa-twitter icon-foreground" })
	            )
	          ),
	          _react2.default.createElement(
	            "a",
	            { href: "https://vimeo.com/convergencedesignlab" },
	            _react2.default.createElement(
	              "span",
	              { className: "stacked-icon" },
	              _react2.default.createElement("i", { className: "fa fa-circle icon-background" }),
	              _react2.default.createElement("i", { className: "fa fa-vimeo icon-foreground" })
	            )
	          ),
	          _react2.default.createElement(
	            "a",
	            { href: "https://www.instagram.com/convergenceacademies/" },
	            _react2.default.createElement(
	              "span",
	              { className: "stacked-icon" },
	              _react2.default.createElement("i", { className: "fa fa-circle icon-background" }),
	              _react2.default.createElement("i", { className: "fa fa-instagram icon-foreground" })
	            )
	          )
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
	            "33 East Congress, Suite 600"
	          ),
	          _react2.default.createElement(
	            "div",
	            null,
	            "Chicago, IL 60605"
	          )
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
	module.exports = {"footer":"src-components-footer----index-module---footer---3FDfX","join":"src-components-footer----index-module---join---89SeL","social":"src-components-footer----index-module---social---3gHH8","email":"src-components-footer----index-module---email---2sGnI"};

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(4);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _navLinks = __webpack_require__(113);
	
	var _navLinks2 = _interopRequireDefault(_navLinks);
	
	var _dropdownNavModule = __webpack_require__(316);
	
	var _dropdownNavModule2 = _interopRequireDefault(_dropdownNavModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DropdownNav = function (_React$Component) {
	  _inherits(DropdownNav, _React$Component);
	
	  function DropdownNav(props) {
	    _classCallCheck(this, DropdownNav);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = { isOpen: false };
	
	    _this.open = _this.open.bind(_this);
	    _this.close = _this.close.bind(_this);
	    return _this;
	  }
	
	  DropdownNav.prototype.open = function open() {
	    this.setState({ isOpen: true });
	  };
	
	  DropdownNav.prototype.close = function close() {
	    this.setState({ isOpen: false });
	  };
	
	  DropdownNav.prototype.render = function render() {
	    var _this2 = this;
	
	    var isOpen = this.state.isOpen;
	
	    return _react2.default.createElement(
	      "div",
	      { className: _dropdownNavModule2.default.nav + " col--xs " + (isOpen ? _dropdownNavModule2.default.isOpen : "") },
	      _react2.default.createElement("i", { className: _dropdownNavModule2.default.open + " fa fa-navicon", onClick: this.open }),
	      _react2.default.createElement("div", { className: _dropdownNavModule2.default.overlay }),
	      _react2.default.createElement(
	        "div",
	        { className: _dropdownNavModule2.default.slider },
	        _react2.default.createElement("i", { className: _dropdownNavModule2.default.close + " fa fa-close", onClick: this.close }),
	        _react2.default.createElement(
	          "ul",
	          { className: _dropdownNavModule2.default.links },
	          _navLinks2.default.map(function (_ref) {
	            var text = _ref.text,
	                to = _ref.to,
	                otherProps = _objectWithoutProperties(_ref, ["text", "to"]);
	
	            return _react2.default.createElement(
	              "li",
	              { key: "dropdown-nav-" + text },
	              _react2.default.createElement(
	                _gatsbyLink2.default,
	                _extends({
	                  activeClassName: _dropdownNavModule2.default.activeLink,
	                  to: to
	                }, otherProps, {
	                  onClick: _this2.close
	                }),
	                text
	              )
	            );
	          })
	        )
	      )
	    );
	  };
	
	  return DropdownNav;
	}(_react2.default.Component);
	
	exports.default = DropdownNav;
	module.exports = exports["default"];

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"nav":"src-components-nav----dropdown-nav-module---nav---1WWCN","open":"src-components-nav----dropdown-nav-module---open---1hHSG","close":"src-components-nav----dropdown-nav-module---close---j-Nl9","overlay":"src-components-nav----dropdown-nav-module---overlay---3hkmI","isOpen":"src-components-nav----dropdown-nav-module---isOpen---1_9C6","slider":"src-components-nav----dropdown-nav-module---slider---3boNH","links":"src-components-nav----dropdown-nav-module---links---2TMkl","activeLink":"src-components-nav----dropdown-nav-module---activeLink---13_UH"};

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = ExpandedNav;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(4);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _navLinks = __webpack_require__(113);
	
	var _navLinks2 = _interopRequireDefault(_navLinks);
	
	var _expandedNavModule = __webpack_require__(317);
	
	var _expandedNavModule2 = _interopRequireDefault(_expandedNavModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function ExpandedNav() {
	  return _react2.default.createElement(
	    "ul",
	    { className: _expandedNavModule2.default.nav + " col--xs" },
	    _navLinks2.default.map(function (_ref) {
	      var text = _ref.text,
	          to = _ref.to,
	          otherProps = _objectWithoutProperties(_ref, ["text", "to"]);
	
	      return _react2.default.createElement(
	        "li",
	        { key: "expanded-nav-" + text },
	        _react2.default.createElement(
	          _gatsbyLink2.default,
	          _extends({ activeClassName: _expandedNavModule2.default.activeLink, to: to }, otherProps),
	          text
	        )
	      );
	    })
	  );
	}
	module.exports = exports["default"];

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"nav":"src-components-nav----expanded-nav-module---nav---1QaS8","activeLink":"src-components-nav----expanded-nav-module---activeLink---AJj85"};

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = Header;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(4);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _scrollTracker = __webpack_require__(205);
	
	var _scrollTracker2 = _interopRequireDefault(_scrollTracker);
	
	var _navLogo = __webpack_require__(199);
	
	var _navLogo2 = _interopRequireDefault(_navLogo);
	
	var _expandedNav = __webpack_require__(197);
	
	var _expandedNav2 = _interopRequireDefault(_expandedNav);
	
	var _dropdownNav = __webpack_require__(196);
	
	var _dropdownNav2 = _interopRequireDefault(_dropdownNav);
	
	var _indexModule = __webpack_require__(318);
	
	var _indexModule2 = _interopRequireDefault(_indexModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Nav(_ref) {
	  var isHomePage = _ref.isHomePage,
	      isScrolled = _ref.isScrolled;
	
	  var isWhite = !isHomePage || isScrolled;
	  console.log(isHomePage, isScrolled);
	  var className = "nav";
	  if (!isHomePage || isScrolled) className += " isWhite";else className += "notIsWhite";
	  return _react2.default.createElement(
	    "nav",
	    { className: className },
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        "div",
	        { className: "row" },
	        _react2.default.createElement(_navLogo2.default, null),
	        _react2.default.createElement(_expandedNav2.default, null),
	        _react2.default.createElement(_dropdownNav2.default, null)
	      )
	    )
	  );
	}
	
	function Header(_ref2) {
	  var isHomePage = _ref2.isHomePage;
	
	  // Pass in flag to ScrollTracker instead of removing from DOM to prevent unmounting nav
	  return _react2.default.createElement(_scrollTracker2.default, {
	    enabled: isHomePage,
	    render: function render(_ref3) {
	      var scrollY = _ref3.scrollY;
	      return _react2.default.createElement(Nav, { isScrolled: scrollY !== 0, isHomePage: isHomePage });
	    }
	  });
	}
	module.exports = exports["default"];

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"nav":"src-components-nav----index-module---nav---3TZGe","isWhite":"src-components-nav----index-module---isWhite---1m_Cu"};

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var navLinks = [{ text: "Home", to: "/", exact: true }, { text: "About", to: "/about/" }, { text: "Work", to: "/work/" }, { text: "Resources", to: "/resources/" }, { text: "Contact", to: "/contact/" }];
	
	exports.default = navLinks;
	module.exports = exports["default"];

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = NavLogo;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _navLogoModule = __webpack_require__(319);
	
	var _navLogoModule2 = _interopRequireDefault(_navLogoModule);
	
	var _logoRing = __webpack_require__(489);
	
	var _logoRing2 = _interopRequireDefault(_logoRing);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function NavLogo() {
	  return _react2.default.createElement(
	    "div",
	    { className: "col--xs " + _navLogoModule2.default.logo },
	    _react2.default.createElement(
	      "a",
	      { href: "/", className: _navLogoModule2.default.link },
	      _react2.default.createElement(
	        "div",
	        { className: _navLogoModule2.default.container },
	        _react2.default.createElement("img", { className: _navLogoModule2.default.rings, src: _logoRing2.default, alt: "Convergence Logo" }),
	        _react2.default.createElement(
	          "div",
	          { className: _navLogoModule2.default.text },
	          _react2.default.createElement(
	            "div",
	            { className: _navLogoModule2.default.textTop },
	            "Convergence"
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: _navLogoModule2.default.textBottom },
	            "Design Lab"
	          )
	        )
	      )
	    )
	  );
	}
	module.exports = exports["default"];

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"link":"src-components-nav----nav-logo-module---link---3PIc1","logo":"src-components-nav----nav-logo-module---logo---3XWVD","container":"src-components-nav----nav-logo-module---container---f85BA","rings":"src-components-nav----nav-logo-module---rings---1UHQc","text":"src-components-nav----nav-logo-module---text---BRxs_","textTop":"src-components-nav----nav-logo-module---textTop---zfKvA","textBottom":"src-components-nav----nav-logo-module---textBottom---2xw_3"};

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _scrollEvent = __webpack_require__(206);
	
	var _scrollEvent2 = _interopRequireDefault(_scrollEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScrollProvider = function (_React$Component) {
	  _inherits(ScrollProvider, _React$Component);
	
	  function ScrollProvider() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ScrollProvider);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { scrollY: 0 }, _this.updateScroll = function () {
	      return _this.setState({ scrollY: window.scrollY });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  ScrollProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (prevProps.enabled && !this.props.enabled) this.unsubscribe();else if (!prevProps.enabled && this.props.enabled) this.subscribe();
	  };
	
	  ScrollProvider.prototype.subscribe = function subscribe() {
	    _scrollEvent2.default.addListener(this.updateScroll);
	  };
	
	  ScrollProvider.prototype.unsubscribe = function unsubscribe() {
	    _scrollEvent2.default.removeListener(this.updateScroll);
	  };
	
	  ScrollProvider.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.enabled) this.subscribe();
	    this.setState({ scrollY: window.scrollY }); // Force initial state
	  };
	
	  ScrollProvider.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.props.enabled) this.unsubscribe();
	  };
	
	  ScrollProvider.prototype.render = function render() {
	    return this.props.render(this.state);
	  };
	
	  return ScrollProvider;
	}(_react2.default.Component);
	
	exports.default = ScrollProvider;
	module.exports = exports["default"];

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _lodash = __webpack_require__(371);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Throttled window.scroll event emitter singleton
	                                                                                                                                                           */
	
	var WindowEvent = function () {
	  function WindowEvent(eventName) {
	    var _this = this;
	
	    var throttleDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
	
	    _classCallCheck(this, WindowEvent);
	
	    this.listeners = [];
	    this.isListening = false;
	    this.emit = (0, _lodash2.default)(function () {
	      return _this.listeners.forEach(function (cb) {
	        return cb();
	      });
	    }, this.throttleDelay, { trailing: true });
	
	    this.eventName = eventName;
	    this.throttleDelay = 100;
	  }
	
	  WindowEvent.prototype.addListener = function addListener(cb) {
	    if (typeof cb === "function") {
	      this.listeners.push(cb);
	      this.updateSubscription();
	    } else {
	      throw new Error("addListener requires a function as an argument. " + cb + " is not a function.");
	    }
	  };
	
	  WindowEvent.prototype.removeListener = function removeListener(cb) {
	    this.listeners = this.listeners.filter(function (fn) {
	      return fn !== cb;
	    });
	    this.updateSubscription();
	  };
	
	  WindowEvent.prototype.updateSubscription = function updateSubscription() {
	    if (this.isListening && this.listeners.length === 0) {
	      window.removeEventListener(this.eventName, this.emit);
	      this.isListening = false;
	    } else if (!this.isListening && this.listeners.length > 0) {
	      window.addEventListener(this.eventName, this.emit);
	      this.isListening = true;
	    }
	  };
	
	  return WindowEvent;
	}();
	
	var scrollEvent = new WindowEvent("scroll");
	
	exports.default = scrollEvent;
	module.exports = exports["default"];

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	__webpack_require__(328);
	
	__webpack_require__(327);
	
	__webpack_require__(449);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(2);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactHelmet = __webpack_require__(455);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _nav = __webpack_require__(198);
	
	var _nav2 = _interopRequireDefault(_nav);
	
	var _footer = __webpack_require__(186);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	var _indexModule = __webpack_require__(326);
	
	var _indexModule2 = _interopRequireDefault(_indexModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TemplateWrapper = function (_React$Component) {
	  _inherits(TemplateWrapper, _React$Component);
	
	  function TemplateWrapper() {
	    _classCallCheck(this, TemplateWrapper);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  TemplateWrapper.prototype.componentDidMount = function componentDidMount() {
	    this.forceUpdate();
	  };
	
	  TemplateWrapper.prototype.render = function render() {
	    var _props = this.props,
	        children = _props.children,
	        location = _props.location;
	
	    var isHomePage = location.pathname === ("/convergencedesignlab/");
	    console.log(location.pathname, ("/convergencedesignlab/"));
	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(_reactHelmet2.default, {
	        title: "Convergence Design Lab",
	        meta: [{ name: "description", content: "Convergence Design Lab" }, { name: "keywords", content: "" }]
	      }),
	      _react2.default.createElement(_nav2.default, { isHomePage: isHomePage }),
	      _react2.default.createElement(
	        "div",
	        { className: isHomePage ? "" : _indexModule2.default.navPadding },
	        children()
	      ),
	      _react2.default.createElement(_footer2.default, null)
	    );
	  };
	
	  return TemplateWrapper;
	}(_react2.default.Component);
	
	exports.default = TemplateWrapper;
	
	
	TemplateWrapper.propTypes = {
	  children: _propTypes2.default.func
	};
	module.exports = exports["default"];

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"navPadding":"src-layouts----index-module---navPadding---LRHuz"};

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ })

});
//# sourceMappingURL=component---src-layouts-index-js-3dafb8df02100493ccf8.js.map