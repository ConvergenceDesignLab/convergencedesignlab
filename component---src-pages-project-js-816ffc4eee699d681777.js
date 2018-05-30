webpackJsonp([111930841657428],{

/***/ 52:
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
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/,
	    reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var Symbol = root.Symbol,
	    splice = arrayProto.splice;
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map'),
	    nativeCreate = getNative(Object, 'create');
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);
	
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
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
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = Cover;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _indexModule = __webpack_require__(320);
	
	var _indexModule2 = _interopRequireDefault(_indexModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Cover(_ref) {
	  var imageUrl = _ref.imageUrl,
	      imageTitle = _ref.imageTitle,
	      questionHtml = _ref.questionHtml;
	
	  return _react2.default.createElement(
	    "div",
	    { className: _indexModule2.default.cover },
	    _react2.default.createElement("img", { className: _indexModule2.default.coverImage, src: imageUrl, alt: imageTitle }),
	    _react2.default.createElement(
	      "div",
	      { className: _indexModule2.default.coverQuestionContainer },
	      _react2.default.createElement("div", { className: _indexModule2.default.coverQuestion, dangerouslySetInnerHTML: { __html: questionHtml } })
	    )
	  );
	}
	module.exports = exports["default"];

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"cover":"src-components-project-cover----index-module---cover---2RspC","coverImage":"src-components-project-cover----index-module---coverImage---7cSEo","coverQuestionContainer":"src-components-project-cover----index-module---coverQuestionContainer---3kB14","coverQuestion":"src-components-project-cover----index-module---coverQuestion---30O9O"};

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = ImageBlock;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _indexModule = __webpack_require__(321);
	
	var _indexModule2 = _interopRequireDefault(_indexModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ImageBlock(_ref) {
	  var src = _ref.src,
	      caption = _ref.caption;
	
	  return _react2.default.createElement(
	    "div",
	    { className: "subtle-background" },
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        "div",
	        { className: "section text-align-center" },
	        _react2.default.createElement(
	          "figure",
	          { className: _indexModule2.default.block },
	          _react2.default.createElement("img", { src: src, className: _indexModule2.default.image }),
	          _react2.default.createElement(
	            "figcaption",
	            { className: _indexModule2.default.caption },
	            caption
	          )
	        )
	      )
	    )
	  );
	}
	module.exports = exports["default"];

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"block":"src-components-project-image-block----index-module---block---2GN16","image":"src-components-project-image-block----index-module---image---3ALtR","caption":"src-components-project-image-block----index-module---caption---1cEKN"};

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(4);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _fetchWp = __webpack_require__(64);
	
	var _lodash = __webpack_require__(52);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reactRouterDom = __webpack_require__(40);
	
	var _classnames = __webpack_require__(8);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _cover = __webpack_require__(200);
	
	var _cover2 = _interopRequireDefault(_cover);
	
	var _imageBlock = __webpack_require__(201);
	
	var _imageBlock2 = _interopRequireDefault(_imageBlock);
	
	var _quoteBlock = __webpack_require__(203);
	
	var _quoteBlock2 = _interopRequireDefault(_quoteBlock);
	
	var _relatedWork = __webpack_require__(204);
	
	var _relatedWork2 = _interopRequireDefault(_relatedWork);
	
	var _callToAction = __webpack_require__(29);
	
	var _callToAction2 = _interopRequireDefault(_callToAction);
	
	var _indexModule = __webpack_require__(322);
	
	var _indexModule2 = _interopRequireDefault(_indexModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TextBlock = function TextBlock(_ref) {
	  var title = _ref.title,
	      text = _ref.text,
	      imageName = _ref.imageName,
	      imageUrl = _ref.imageUrl,
	      reverseOrder = _ref.reverseOrder;
	
	  var textSection = _react2.default.createElement(
	    "div",
	    {
	      key: "text-block-text-" + title,
	      className: (0, _classnames2.default)(_indexModule2.default.blockText, "col--sm-12 col--md-6")
	    },
	    _react2.default.createElement(
	      "div",
	      { className: _indexModule2.default.sectionTitle },
	      title
	    ),
	    _react2.default.createElement("div", { className: _indexModule2.default.sectionText, dangerouslySetInnerHTML: { __html: text } })
	  );
	  var imageSection = _react2.default.createElement(
	    "div",
	    {
	      key: "text-block-image-" + title,
	      className: (0, _classnames2.default)(_indexModule2.default.blockImage, "col--sm-12 col--md-6")
	    },
	    _react2.default.createElement("img", { className: _indexModule2.default.sectionImage, src: imageUrl, alt: imageName })
	  );
	
	  return _react2.default.createElement(
	    "div",
	    { className: "container" },
	    _react2.default.createElement(
	      "div",
	      { className: "section" },
	      _react2.default.createElement(
	        "div",
	        { className: "row--space-between" },
	        reverseOrder ? [textSection, imageSection] : [imageSection, textSection]
	      )
	    )
	  );
	};
	
	var Work = function (_React$Component) {
	  _inherits(Work, _React$Component);
	
	  function Work(props) {
	    _classCallCheck(this, Work);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = { data: props.data };
	    return _this;
	  }
	
	  Work.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    if (!this.state.data) {
	      // const path = this.props.location.pathname;
	      // const slug = path
	      //   .substring(6) // Everything after the leading "/work/"
	      //   .replace("/", ""); // Remove trailing slash
	
	      // For now, just always fetch the same page
	      var slug = "discoverdesign";
	
	      (0, _fetchWp.fetchProjectBySlug)(slug).then(function (data) {
	        if (data === null || !data.acf) _this2.setState({ data: null });else _this2.setState({ data: data.acf });
	      });
	    }
	  };
	
	  Work.prototype.render = function render() {
	    var data = this.state.data;
	
	
	    if (data === null) return _react2.default.createElement(_reactRouterDom.Redirect, { to: "/404" });
	
	    if (!data) {
	      return _react2.default.createElement("div", { style: { minHeight: "1200px" } });
	    }
	
	    var narrative = (0, _lodash2.default)(data, "narrative"); // Defaults to false
	    if (!narrative) narrative = [];
	
	    var question = (0, _lodash2.default)(data, "question", "");
	    var imageUrl = (0, _lodash2.default)(data, "banner.image.url", "");
	    var imageTitle = (0, _lodash2.default)(data, "banner.image.title", "");
	    var title = (0, _lodash2.default)(data, "heading.headline", "");
	    var challenge = (0, _lodash2.default)(data, "overview.text", "");
	    var partners = (0, _lodash2.default)(data, "meta.partners", []);
	    var tags = (0, _lodash2.default)(data, "meta.tags", []);
	
	    var blockNum = 0;
	
	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(_cover2.default, { imageUrl: imageUrl, imageTitle: imageTitle, questionHtml: question }),
	      _react2.default.createElement(
	        "div",
	        { className: "container" },
	        _react2.default.createElement(
	          "div",
	          { className: "section" },
	          _react2.default.createElement(
	            "div",
	            { className: _indexModule2.default.title },
	            title
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "row--space-between" },
	            _react2.default.createElement(
	              "div",
	              { className: "col--sm-12 col--md-6" },
	              _react2.default.createElement(
	                "div",
	                { className: _indexModule2.default.sectionTitle },
	                "Challenge"
	              ),
	              _react2.default.createElement("div", {
	                className: _indexModule2.default.sectionText,
	                dangerouslySetInnerHTML: { __html: challenge }
	              })
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: (0, _classnames2.default)(_indexModule2.default.meta, "col--sm-12 col--md-5") },
	              _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                  "div",
	                  { className: _indexModule2.default.sectionTitle },
	                  "Partners"
	                ),
	                _react2.default.createElement(
	                  "ul",
	                  { className: _indexModule2.default.metaList },
	                  partners.map(function (_ref2) {
	                    var name = _ref2.name;
	                    return _react2.default.createElement(
	                      "li",
	                      { key: name },
	                      name
	                    );
	                  })
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                  "div",
	                  { className: _indexModule2.default.sectionTitle },
	                  "Tags"
	                ),
	                _react2.default.createElement(
	                  "ul",
	                  { className: _indexModule2.default.metaList },
	                  tags.map(function (_ref3) {
	                    var name = _ref3.name;
	                    return _react2.default.createElement(
	                      "li",
	                      { key: name },
	                      name
	                    );
	                  })
	                )
	              )
	            )
	          )
	        )
	      ),
	      narrative.map(function (block) {
	        if (block.acf_fc_layout === "text") {
	          blockNum++;
	          return _react2.default.createElement(TextBlock, {
	            title: block.title,
	            text: block.text,
	            imageName: block.image.name,
	            imageUrl: block.image.sizes.medium_large,
	            reverseOrder: blockNum % 2 === 0
	          });
	        } else if (block.acf_fc_layout === "quote") {
	          return _react2.default.createElement(_quoteBlock2.default, { quote: block.quote, attribution: block.attribution });
	        } else if (block.acf_fc_layout === "image") {
	          return _react2.default.createElement(_imageBlock2.default, { src: block.image.url, caption: block.caption });
	        }
	      }),
	      _react2.default.createElement(_relatedWork2.default, { data: data }),
	      _react2.default.createElement(_callToAction2.default, { title: "Interested in partnering?" })
	    );
	  };
	
	  return Work;
	}(_react2.default.Component);
	
	exports.default = Work;
	module.exports = exports["default"];

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"title":"src-components-project----index-module---title---25F36","sectionTitle":"src-components-project----index-module---sectionTitle---goonO","sectionImage":"src-components-project----index-module---sectionImage---3Yi5K","blockImage":"src-components-project----index-module---blockImage---8xO8u","sectionText":"src-components-project----index-module---sectionText---1hrZm","meta":"src-components-project----index-module---meta---1MsxK","metaList":"src-components-project----index-module---metaList---d2Z5X"};

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = QuoteBlock;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _indexModule = __webpack_require__(323);
	
	var _indexModule2 = _interopRequireDefault(_indexModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function QuoteBlock(_ref) {
	  var quote = _ref.quote,
	      attribution = _ref.attribution;
	
	  return _react2.default.createElement(
	    "div",
	    { className: "subtle-background" },
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        "div",
	        { className: "section" },
	        _react2.default.createElement(
	          "blockquote",
	          { className: _indexModule2.default.quote },
	          _react2.default.createElement(
	            "div",
	            { className: _indexModule2.default.text },
	            quote
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: _indexModule2.default.attribution },
	            "\u2014 ",
	            attribution
	          )
	        )
	      )
	    )
	  );
	}
	module.exports = exports["default"];

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"quote":"src-components-project-quote-block----index-module---quote---23H_6","text":"src-components-project-quote-block----index-module---text---2gDKa","attribution":"src-components-project-quote-block----index-module---attribution---Gnxum"};

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = RelatedWork;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(4);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _lodash = __webpack_require__(52);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _indexModule = __webpack_require__(324);
	
	var _indexModule2 = _interopRequireDefault(_indexModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function RelatedWork(_ref) {
	  var data = _ref.data;
	
	  var imageUrl = (0, _lodash2.default)(data, "banner.image.url", "");
	  var imageTitle = (0, _lodash2.default)(data, "banner.image.title", "");
	  var projectName = (0, _lodash2.default)(data, "heading.headline", "");
	  var projectUrl = "/work/discoverdesign";
	
	  return _react2.default.createElement(
	    "div",
	    { className: "subtle-background" },
	    _react2.default.createElement(
	      "div",
	      { className: "container" },
	      _react2.default.createElement(
	        "div",
	        { className: "section" },
	        _react2.default.createElement(
	          "div",
	          { className: _indexModule2.default.title },
	          "Explore Other Work"
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: _indexModule2.default.container },
	          _react2.default.createElement(
	            "div",
	            { className: _indexModule2.default.project },
	            _react2.default.createElement(
	              "figure",
	              { className: _indexModule2.default.figure },
	              _react2.default.createElement("img", { className: _indexModule2.default.image, src: imageUrl, alt: imageTitle }),
	              _react2.default.createElement(
	                "figcaption",
	                { className: _indexModule2.default.caption },
	                _react2.default.createElement(
	                  "div",
	                  { className: _indexModule2.default.projectName },
	                  projectName
	                ),
	                _react2.default.createElement(
	                  _gatsbyLink2.default,
	                  { to: projectUrl, className: _indexModule2.default.link },
	                  "Learn more"
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: _indexModule2.default.project },
	            _react2.default.createElement(
	              "figure",
	              { className: _indexModule2.default.figure },
	              _react2.default.createElement("img", { className: _indexModule2.default.image, src: imageUrl, alt: imageTitle }),
	              _react2.default.createElement(
	                "figcaption",
	                { className: _indexModule2.default.caption },
	                _react2.default.createElement(
	                  "div",
	                  { className: _indexModule2.default.projectName },
	                  projectName
	                ),
	                _react2.default.createElement(
	                  _gatsbyLink2.default,
	                  { to: projectUrl, className: _indexModule2.default.link },
	                  "Learn more"
	                )
	              )
	            )
	          )
	        )
	      )
	    )
	  );
	}
	module.exports = exports["default"];

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"title":"src-components-project-related-work----index-module---title---16ZdK","figure":"src-components-project-related-work----index-module---figure---2y9dB","image":"src-components-project-related-work----index-module---image---2OLvq","caption":"src-components-project-related-work----index-module---caption---2ZYJn","container":"src-components-project-related-work----index-module---container---1p1Oe","project":"src-components-project-related-work----index-module---project---3IUIS"};

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(4);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _project = __webpack_require__(202);
	
	var _project2 = _interopRequireDefault(_project);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ProjectPage = function ProjectPage() {
	  return _react2.default.createElement(_project2.default, null);
	};
	
	exports.default = ProjectPage;
	module.exports = exports["default"];

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.fetchJson = fetchJson;
	exports.fetchProjects = fetchProjects;
	exports.fetchAcfProjects = fetchAcfProjects;
	exports.fetchProjectAcfById = fetchProjectAcfById;
	exports.fetchTaxonomies = fetchTaxonomies;
	exports.fetchProjectBySlug = fetchProjectBySlug;
	// https://github.com/airesvsg/acf-to-rest-api
	// https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress
	
	var baseUrl = ("https://api.convergencedesignlab.org/wp-json");
	var projectEndpoint = baseUrl + "/wp/v2/projects";
	var acfProjectEndpoint = baseUrl + "/acf/v3/projects";
	var partnersEndpoint = baseUrl + "/wp/v2/partners";
	var projectTagsEndpoint = baseUrl + "/wp/v2/project_tags";
	
	function fetchJson(url) {
	  return fetch(url).then(function (res) {
	    return res.json();
	  });
	}
	
	function fetchProjects() {
	  return fetchJson(projectEndpoint);
	}
	
	function fetchAcfProjects() {
	  return fetchJson(acfProjectEndpoint);
	}
	
	function fetchProjectAcfById(id) {
	  return fetchJson(acfProjectEndpoint + "/" + id);
	}
	
	function fetchTaxonomies() {
	  return Promise.all([fetchJson(partnersEndpoint), fetchJson(projectTagsEndpoint)]).then(function (_ref) {
	    var partnersJson = _ref[0],
	        projectsJson = _ref[1];
	
	    var projectTags = projectsJson.reduce(function (obj, _ref2) {
	      var id = _ref2.id,
	          count = _ref2.count,
	          name = _ref2.name;
	
	      obj[name] = { id: id, count: count };
	      return obj;
	    }, {});
	    var partnerTags = partnersJson.reduce(function (obj, _ref3) {
	      var id = _ref3.id,
	          count = _ref3.count,
	          name = _ref3.name;
	
	      obj[name] = { id: id, count: count };
	      return obj;
	    }, {});
	    return { projectTags: projectTags, partnerTags: partnerTags };
	  });
	}
	
	function fetchProjectBySlug(slug) {
	  return fetchJson(projectEndpoint + "?slug=" + slug).then(function (array) {
	    return array.length === 0 ? null : array[0];
	  });
	}

/***/ })

});
//# sourceMappingURL=component---src-pages-project-js-816ffc4eee699d681777.js.map