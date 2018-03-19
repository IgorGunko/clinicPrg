/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(5);

var ProgressBar = __webpack_require__(6);
//import './js/slick.min.js';
console.log('ok');

$('.progress-circle').each(function (i) {
    var circle = new ProgressBar.Circle(this, {
        color: "red",
        easing: 'linear',
        strokeWidth: 5,
        duration: 1500,
        trailColor: '#b0cecc',
        trailWidth: 5,
        //fill: 'rgba(0, 0, 0, 0.1)',
        text: {
            value: '0'
        }
    });

    circle.text.style.fontSize = '30px';
    circle.text.style.color = '#fff';

    var value = $(this).attr('value') / 100;

    circle.animate(value, {
        from: {
            color: "#ccc"
        },
        to: {
            color: "#60b8b7"
        },
        step: function step(state, circle, bar) {
            circle.path.setAttribute('stroke', state.color);
            circle.setText((circle.value() * 100).toFixed(0) + "%");
        }
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function (e, t) {
  var n,
      r,
      i = typeof t === "undefined" ? "undefined" : _typeof(t),
      o = e.location,
      a = e.document,
      s = a.documentElement,
      l = e.jQuery,
      u = e.$,
      c = {},
      p = [],
      f = "1.10.2",
      d = p.concat,
      h = p.push,
      g = p.slice,
      m = p.indexOf,
      y = c.toString,
      v = c.hasOwnProperty,
      b = f.trim,
      x = function x(e, t) {
    return new x.fn.init(e, t, r);
  },
      w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = /\S+/g,
      C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      E = /^[\],:{}\s]*$/,
      S = /(?:^|:|,)(?:\s*\[)+/g,
      A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      D = /^-ms-/,
      L = /-([\da-z])/gi,
      H = function H(e, t) {
    return t.toUpperCase();
  },
      q = function q(e) {
    (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready());
  },
      _ = function _() {
    a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q));
  };x.fn = x.prototype = { jquery: f, constructor: x, init: function init(e, n, r) {
      var i, o;if (!e) return this;if ("string" == typeof e) {
        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);if (i[1]) {
          if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) {
            x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          }return this;
        }if (o = a.getElementById(i[2]), o && o.parentNode) {
          if (o.id !== i[2]) return r.find(e);this.length = 1, this[0] = o;
        }return this.context = a, this.selector = e, this;
      }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
    }, selector: "", length: 0, toArray: function toArray() {
      return g.call(this);
    }, get: function get(e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    }, pushStack: function pushStack(e) {
      var t = x.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
    }, each: function each(e, t) {
      return x.each(this, e, t);
    }, ready: function ready(e) {
      return x.ready.promise().done(e), this;
    }, slice: function slice() {
      return this.pushStack(g.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (0 > e ? t : 0);return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    }, map: function map(e) {
      return this.pushStack(x.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, end: function end() {
      return this.prevObject || this.constructor(null);
    }, push: h, sort: [].sort, splice: [].splice }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
    var e,
        n,
        r,
        i,
        o,
        a,
        s = arguments[0] || {},
        l = 1,
        u = arguments.length,
        c = !1;for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) {
      if (null != (o = arguments[l])) for (i in o) {
        e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
      }
    }return s;
  }, x.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function noConflict(t) {
      return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x;
    }, isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
      e ? x.readyWait++ : x.ready(!0);
    }, ready: function ready(e) {
      if (e === !0 ? ! --x.readyWait : !x.isReady) {
        if (!a.body) return setTimeout(x.ready);x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"));
      }
    }, isFunction: function isFunction(e) {
      return "function" === x.type(e);
    }, isArray: Array.isArray || function (e) {
      return "array" === x.type(e);
    }, isWindow: function isWindow(e) {
      return null != e && e == e.window;
    }, isNumeric: function isNumeric(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }, type: function type(e) {
      return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? c[y.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
    }, isPlainObject: function isPlainObject(e) {
      var n;if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;try {
        if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (r) {
        return !1;
      }if (x.support.ownLast) for (n in e) {
        return v.call(e, n);
      }for (n in e) {}return n === t || v.call(e, n);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, error: function error(e) {
      throw Error(e);
    }, parseHTML: function parseHTML(e, t, n) {
      if (!e || "string" != typeof e) return null;"boolean" == typeof t && (n = t, t = !1), t = t || a;var r = k.exec(e),
          i = !n && [];return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes));
    }, parseJSON: function parseJSON(n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t);
    }, parseXML: function parseXML(n) {
      var r, i;if (!n || "string" != typeof n) return null;try {
        e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
      } catch (o) {
        r = t;
      }return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r;
    }, noop: function noop() {}, globalEval: function globalEval(t) {
      t && x.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    }, camelCase: function camelCase(e) {
      return e.replace(D, "ms-").replace(L, H);
    }, nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }, each: function each(e, t, n) {
      var r,
          i = 0,
          o = e.length,
          a = M(e);if (n) {
        if (a) {
          for (; o > i; i++) {
            if (r = t.apply(e[i], n), r === !1) break;
          }
        } else for (i in e) {
          if (r = t.apply(e[i], n), r === !1) break;
        }
      } else if (a) {
        for (; o > i; i++) {
          if (r = t.call(e[i], i, e[i]), r === !1) break;
        }
      } else for (i in e) {
        if (r = t.call(e[i], i, e[i]), r === !1) break;
      }return e;
    }, trim: b && !b.call("\uFEFF\xA0") ? function (e) {
      return null == e ? "" : b.call(e);
    } : function (e) {
      return null == e ? "" : (e + "").replace(C, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      var r;if (t) {
        if (m) return m.call(t, e, n);for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
          if (n in t && t[n] === e) return n;
        }
      }return -1;
    }, merge: function merge(e, n) {
      var r = n.length,
          i = e.length,
          o = 0;if ("number" == typeof r) for (; r > o; o++) {
        e[i++] = n[o];
      } else while (n[o] !== t) {
        e[i++] = n[o++];
      }return e.length = i, e;
    }, grep: function grep(e, t, n) {
      var r,
          i = [],
          o = 0,
          a = e.length;for (n = !!n; a > o; o++) {
        r = !!t(e[o], o), n !== r && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var r,
          i = 0,
          o = e.length,
          a = M(e),
          s = [];if (a) for (; o > i; i++) {
        r = t(e[i], i, n), null != r && (s[s.length] = r);
      } else for (i in e) {
        r = t(e[i], i, n), null != r && (s[s.length] = r);
      }return d.apply([], s);
    }, guid: 1, proxy: function proxy(e, n) {
      var r, i, o;return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function i() {
        return e.apply(n || this, r.concat(g.call(arguments)));
      }, i.guid = e.guid = e.guid || x.guid++, i) : t;
    }, access: function access(e, n, r, i, o, a, s) {
      var l = 0,
          u = e.length,
          c = null == r;if ("object" === x.type(r)) {
        o = !0;for (l in r) {
          x.access(e, n, l, r[l], !0, a, s);
        }
      } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function n(e, t, _n2) {
        return c.call(x(e), _n2);
      })), n)) for (; u > l; l++) {
        n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
      }return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
    }, now: function now() {
      return new Date().getTime();
    }, swap: function swap(e, t, n, r) {
      var i,
          o,
          a = {};for (o in t) {
        a[o] = e.style[o], e.style[o] = t[o];
      }i = n.apply(e, r || []);for (o in t) {
        e.style[o] = a[o];
      }return i;
    } }), x.ready.promise = function (t) {
    if (!n) if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);else {
      a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);var r = !1;try {
        r = null == e.frameElement && a.documentElement;
      } catch (i) {}r && r.doScroll && function o() {
        if (!x.isReady) {
          try {
            r.doScroll("left");
          } catch (e) {
            return setTimeout(o, 50);
          }_(), x.ready();
        }
      }();
    }return n.promise(t);
  }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    c["[object " + t + "]"] = t.toLowerCase();
  });function M(e) {
    var t = e.length,
        n = x.type(e);return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }r = x(a), function (e, t) {
    var n,
        r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        p,
        f,
        d,
        h,
        g,
        m,
        y,
        v,
        b = "sizzle" + -new Date(),
        w = e.document,
        T = 0,
        C = 0,
        N = st(),
        k = st(),
        E = st(),
        S = !1,
        A = function A(e, t) {
      return e === t ? (S = !0, 0) : 0;
    },
        j = typeof t === "undefined" ? "undefined" : _typeof(t),
        D = 1 << 31,
        L = {}.hasOwnProperty,
        H = [],
        q = H.pop,
        _ = H.push,
        M = H.push,
        O = H.slice,
        F = H.indexOf || function (e) {
      var t = 0,
          n = this.length;for (; n > t; t++) {
        if (this[t] === e) return t;
      }return -1;
    },
        B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        W = R.replace("w", "w#"),
        $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
        I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
        z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        X = RegExp("^" + P + "*," + P + "*"),
        U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        V = RegExp(P + "*[+~]"),
        Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
        J = RegExp(I),
        G = RegExp("^" + W + "$"),
        Q = { ID: RegExp("^#(" + R + ")"), CLASS: RegExp("^\\.(" + R + ")"), TAG: RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: RegExp("^" + $), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: RegExp("^(?:" + B + ")$", "i"), needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") },
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        et = /^(?:input|select|textarea|button)$/i,
        tt = /^h\d$/i,
        nt = /'|\\/g,
        rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        it = function it(e, t, n) {
      var r = "0x" + t - 65536;return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
    };try {
      M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType;
    } catch (ot) {
      M = { apply: H.length ? function (e, t) {
          _.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
        } };
    }function at(e, t, n, i) {
      var o, a, s, l, u, c, d, m, y, x;if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;if (1 !== (l = t.nodeType) && 9 !== l) return [];if (h && !i) {
        if (o = Z.exec(e)) if (s = o[1]) {
          if (9 === l) {
            if (a = t.getElementById(s), !a || !a.parentNode) return n;if (a.id === s) return n.push(a), n;
          } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n;
        } else {
          if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n;
        }if (r.qsa && (!g || !g.test(e))) {
          if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
            c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;while (u--) {
              c[u] = m + yt(c[u]);
            }y = V.test(e) && t.parentNode || t, x = c.join(",");
          }if (x) try {
            return M.apply(n, y.querySelectorAll(x)), n;
          } catch (T) {} finally {
            d || t.removeAttribute("id");
          }
        }
      }return kt(e.replace(z, "$1"), t, n, i);
    }function st() {
      var e = [];function t(n, r) {
        return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r;
      }return t;
    }function lt(e) {
      return e[b] = !0, e;
    }function ut(e) {
      var t = f.createElement("div");try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function ct(e, t) {
      var n = e.split("|"),
          r = e.length;while (r--) {
        o.attrHandle[n[r]] = t;
      }
    }function pt(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);if (r) return r;if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function ft(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return "input" === n && t.type === e;
      };
    }function dt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function ht(e) {
      return lt(function (t) {
        return t = +t, lt(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }s = at.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return t ? "HTML" !== t.nodeName : !1;
    }, r = at.support = {}, p = at.setDocument = function (e) {
      var n = e ? e.ownerDocument || e : w,
          i = n.defaultView;return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
        p();
      }), r.attributes = ut(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), r.getElementsByTagName = ut(function (e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
      }), r.getElementsByClassName = ut(function (e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
      }), r.getById = ut(function (e) {
        return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length;
      }), r.getById ? (o.find.ID = function (e, t) {
        if (_typeof(t.getElementById) !== j && h) {
          var n = t.getElementById(e);return n && n.parentNode ? [n] : [];
        }
      }, o.filter.ID = function (e) {
        var t = e.replace(rt, it);return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete o.find.ID, o.filter.ID = function (e) {
        var t = e.replace(rt, it);return function (e) {
          var n = _typeof(e.getAttributeNode) !== j && e.getAttributeNode("id");return n && n.value === t;
        };
      }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
        return _typeof(n.getElementsByTagName) !== j ? n.getElementsByTagName(e) : t;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }return r;
        }return o;
      }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
        return _typeof(n.getElementsByClassName) !== j && h ? n.getElementsByClassName(e) : t;
      }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked");
      }), ut(function (e) {
        var t = n.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
      })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
        r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I);
      }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }return !1;
      }, A = d.compareDocumentPosition ? function (e, t) {
        if (e === t) return S = !0, 0;var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, t) {
        var r,
            i = 0,
            o = e.parentNode,
            a = t.parentNode,
            s = [e],
            l = [t];if (e === t) return S = !0, 0;if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;if (o === a) return pt(e, t);r = e;while (r = r.parentNode) {
          s.unshift(r);
        }r = t;while (r = r.parentNode) {
          l.unshift(r);
        }while (s[i] === l[i]) {
          i++;
        }return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
      }, n) : f;
    }, at.matches = function (e, t) {
      return at(e, null, null, t);
    }, at.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
        var n = y.call(e, t);if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (i) {}return at(t, f, null, [e]).length > 0;
    }, at.contains = function (e, t) {
      return (e.ownerDocument || e) !== f && p(e), v(e, t);
    }, at.attr = function (e, n) {
      (e.ownerDocument || e) !== f && p(e);var i = o.attrHandle[n.toLowerCase()],
          a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a;
    }, at.error = function (e) {
      throw Error("Syntax error, unrecognized expression: " + e);
    }, at.uniqueSort = function (e) {
      var t,
          n = [],
          i = 0,
          o = 0;if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
        while (t = e[o++]) {
          t === e[o] && (i = n.push(o));
        }while (i--) {
          e.splice(n[i], 1);
        }
      }return e;
    }, a = at.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += a(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = e[r]; r++) {
        n += a(t);
      }return n;
    }, o = at.selectors = { cacheLength: 50, createPseudo: lt, match: Q, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var n,
              r = !e[5] && e[2];return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(rt, it).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = N[e + " "];return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
            return t.test("string" == typeof e.className && e.className || _typeof(e.getAttribute) !== j && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = at.attr(r, e);return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var u,
                c,
                p,
                f,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                y = s && t.nodeName.toLowerCase(),
                v = !l && !s;if (m) {
              if (o) {
                while (g) {
                  p = t;while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                  }h = g = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [a ? m.firstChild : m.lastChild], a && v) {
                c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++f && p === t) {
                    c[e] = [T, d, f];break;
                  }
                }
              } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
              }return f -= i, f === r || 0 === f % r && f / r >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
            var i,
                o = r(e, t),
                a = o.length;while (a--) {
              i = F.call(e, o[a]), e[i] = !(n[i] = o[a]);
            }
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        } }, pseudos: { not: lt(function (e) {
          var t = [],
              n = [],
              r = l(e.replace(z, "$1"));return r[b] ? lt(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop();
          };
        }), has: lt(function (e) {
          return function (t) {
            return at(e, t).length > 0;
          };
        }), contains: lt(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || a(t)).indexOf(e) > -1;
          };
        }), lang: lt(function (e) {
          return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
            var n;do {
              if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === d;
        }, focus: function focus(e) {
          return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: function enabled(e) {
          return e.disabled === !1;
        }, disabled: function disabled(e) {
          return e.disabled === !0;
        }, checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !o.pseudos.empty(e);
        }, header: function header(e) {
          return tt.test(e.nodeName);
        }, input: function input(e) {
          return et.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
        }, first: ht(function () {
          return [0];
        }), last: ht(function (e, t) {
          return [t - 1];
        }), eq: ht(function (e, t, n) {
          return [0 > n ? n + t : n];
        }), even: ht(function (e, t) {
          var n = 0;for (; t > n; n += 2) {
            e.push(n);
          }return e;
        }), odd: ht(function (e, t) {
          var n = 1;for (; t > n; n += 2) {
            e.push(n);
          }return e;
        }), lt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;for (; --r >= 0;) {
            e.push(r);
          }return e;
        }), gt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;for (; t > ++r;) {
            e.push(r);
          }return e;
        }) } }, o.pseudos.nth = o.pseudos.eq;for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      o.pseudos[n] = ft(n);
    }for (n in { submit: !0, reset: !0 }) {
      o.pseudos[n] = dt(n);
    }function gt() {}gt.prototype = o.filters = o.pseudos, o.setFilters = new gt();function mt(e, t) {
      var n,
          r,
          i,
          a,
          s,
          l,
          u,
          c = k[e + " "];if (c) return t ? 0 : c.slice(0);s = e, l = [], u = o.preFilter;while (s) {
        (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(z, " ") }), s = s.slice(n.length));for (a in o.filter) {
          !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({ value: n, type: a, matches: r }), s = s.slice(n.length));
        }if (!n) break;
      }return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
    }function yt(e) {
      var t = 0,
          n = e.length,
          r = "";for (; n > t; t++) {
        r += e[t].value;
      }return r;
    }function vt(e, t, n) {
      var r = t.dir,
          o = n && "parentNode" === r,
          a = C++;return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || o) return e(t, n, i);
        }
      } : function (t, n, s) {
        var l,
            u,
            c,
            p = T + " " + a;if (s) {
          while (t = t[r]) {
            if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
            if ((l = u[1]) === !0 || l === i) return l === !0;
          } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0;
        }
      };
    }function bt(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;while (i--) {
          if (!e[i](t, n, r)) return !1;
        }return !0;
      } : e[0];
    }function xt(e, t, n, r, i) {
      var o,
          a = [],
          s = 0,
          l = e.length,
          u = null != t;for (; l > s; s++) {
        (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
      }return a;
    }function wt(e, t, n, r, i, o) {
      return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
        var u,
            c,
            p,
            f = [],
            d = [],
            h = a.length,
            g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
            m = !e || !o && t ? g : xt(g, f, e, s, l),
            y = n ? i || (o ? e : h || r) ? [] : a : m;if (n && n(m, y, s, l), r) {
          u = xt(y, d), r(u, [], s, l), c = u.length;while (c--) {
            (p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
          }
        }if (o) {
          if (i || e) {
            if (i) {
              u = [], c = y.length;while (c--) {
                (p = y[c]) && u.push(m[c] = p);
              }i(null, y = [], u, l);
            }c = y.length;while (c--) {
              (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p));
            }
          }
        } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y);
      });
    }function Tt(e) {
      var t,
          n,
          r,
          i = e.length,
          a = o.relative[e[0].type],
          s = a || o.relative[" "],
          l = a ? 1 : 0,
          c = vt(function (e) {
        return e === t;
      }, s, !0),
          p = vt(function (e) {
        return F.call(t, e) > -1;
      }, s, !0),
          f = [function (e, n, r) {
        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
      }];for (; i > l; l++) {
        if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];else {
          if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
            for (r = ++l; i > r; r++) {
              if (o.relative[e[r].type]) break;
            }return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e));
          }f.push(n);
        }
      }return bt(f);
    }function Ct(e, t) {
      var n = 0,
          r = t.length > 0,
          a = e.length > 0,
          s = function s(_s, l, c, p, d) {
        var h,
            g,
            m,
            y = [],
            v = 0,
            b = "0",
            x = _s && [],
            w = null != d,
            C = u,
            N = _s || a && o.find.TAG("*", d && l.parentNode || l),
            k = T += null == C ? 1 : Math.random() || .1;for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
          if (a && h) {
            g = 0;while (m = e[g++]) {
              if (m(h, l, c)) {
                p.push(h);break;
              }
            }w && (T = k, i = ++n);
          }r && ((h = !m && h) && v--, _s && x.push(h));
        }if (v += b, r && b !== v) {
          g = 0;while (m = t[g++]) {
            m(x, y, l, c);
          }if (_s) {
            if (v > 0) while (b--) {
              x[b] || y[b] || (y[b] = q.call(p));
            }y = xt(y);
          }M.apply(p, y), w && !_s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
        }return w && (T = k, u = C), x;
      };return r ? lt(s) : s;
    }l = at.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = E[e + " "];if (!o) {
        t || (t = mt(e)), n = t.length;while (n--) {
          o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
        }o = E(e, Ct(i, r));
      }return o;
    };function Nt(e, t, n) {
      var r = 0,
          i = t.length;for (; i > r; r++) {
        at(e, t[r], n);
      }return n;
    }function kt(e, t, n, i) {
      var a,
          s,
          u,
          c,
          p,
          f = mt(e);if (!i && 1 === f.length) {
        if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
          if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;e = e.slice(s.shift().value.length);
        }a = Q.needsContext.test(e) ? 0 : s.length;while (a--) {
          if (u = s[a], o.relative[c = u.type]) break;if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
            if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;break;
          }
        }
      }return l(e, f)(i, t, !h, n, V.test(e)), n;
    }r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
      return 1 & e.compareDocumentPosition(f.createElement("div"));
    }), ut(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || ct("type|href|height|width", function (e, n, r) {
      return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2);
    }), r.attributes && ut(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || ct("value", function (e, n, r) {
      return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue;
    }), ut(function (e) {
      return null == e.getAttribute("disabled");
    }) || ct(B, function (e, n, r) {
      var i;return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null;
    }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains;
  }(e);var O = {};function F(e) {
    var t = O[e] = {};return x.each(e.match(T) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }x.Callbacks = function (e) {
    e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);var n,
        r,
        i,
        o,
        a,
        s,
        l = [],
        u = !e.once && [],
        c = function c(t) {
      for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) {
        if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
          r = !1;break;
        }
      }n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable());
    },
        p = { add: function add() {
        if (l) {
          var t = l.length;(function i(t) {
            x.each(t, function (t, n) {
              var r = x.type(n);"function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n);
            });
          })(arguments), n ? o = l.length : r && (s = t, c(r));
        }return this;
      }, remove: function remove() {
        return l && x.each(arguments, function (e, t) {
          var r;while ((r = x.inArray(t, l, r)) > -1) {
            l.splice(r, 1), n && (o >= r && o--, a >= r && a--);
          }
        }), this;
      }, has: function has(e) {
        return e ? x.inArray(e, l) > -1 : !(!l || !l.length);
      }, empty: function empty() {
        return l = [], o = 0, this;
      }, disable: function disable() {
        return l = u = r = t, this;
      }, disabled: function disabled() {
        return !l;
      }, lock: function lock() {
        return u = t, r || p.disable(), this;
      }, locked: function locked() {
        return !u;
      }, fireWith: function fireWith(e, t) {
        return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this;
      }, fire: function fire() {
        return p.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return p;
  }, x.extend({ Deferred: function Deferred(e) {
      var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]],
          n = "pending",
          r = { state: function state() {
          return n;
        }, always: function always() {
          return i.done(arguments).fail(arguments), this;
        }, then: function then() {
          var e = arguments;return x.Deferred(function (n) {
            x.each(t, function (t, o) {
              var a = o[0],
                  s = x.isFunction(e[t]) && e[t];i[o[1]](function () {
                var e = s && s.apply(this, arguments);e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, promise: function promise(e) {
          return null != e ? x.extend(e, r) : r;
        } },
          i = {};return r.pipe = r.then, x.each(t, function (e, o) {
        var a = o[2],
            s = o[3];r[o[1]] = a.add, s && a.add(function () {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this;
        }, i[o[0] + "With"] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    }, when: function when(e) {
      var t = 0,
          n = g.call(arguments),
          r = n.length,
          i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
          o = 1 === i ? e : x.Deferred(),
          a = function a(e, t, n) {
        return function (r) {
          t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
        };
      },
          s,
          l,
          u;if (r > 1) for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) {
        n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
      }return i || o.resolveWith(u, n), o.promise();
    } }), x.support = function (t) {
    var n,
        r,
        o,
        s,
        l,
        u,
        c,
        p,
        f,
        d = a.createElement("div");if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;try {
      delete d.test;
    } catch (h) {
      t.deleteExpando = !1;
    }o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
      t.noCloneEvent = !1;
    }), d.cloneNode(!0).click());for (f in { submit: !0, change: !0, focusin: !0 }) {
      d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
    }d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;for (f in x(t)) {
      break;
    }return t.ownLast = "0" !== f, x(function () {
      var n,
          r,
          o,
          s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
          l = a.getElementsByTagName("body")[0];l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? { zoom: 1 } : {}, function () {
        t.boxSizing = 4 === d.offsetWidth;
      }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), _typeof(d.style.zoom) !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null);
    }), n = s = l = u = r = o = null, t;
  }({});var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      P = /([A-Z])/g;function R(e, n, r, i) {
    if (x.acceptData(e)) {
      var o,
          a,
          s = x.expando,
          l = e.nodeType,
          u = l ? x.cache : e,
          c = l ? e[s] : e[s] && s;if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : { toJSON: x.noop }), ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o;
    }
  }function W(e, t, n) {
    if (x.acceptData(e)) {
      var r,
          i,
          o = e.nodeType,
          a = o ? x.cache : e,
          s = o ? e[x.expando] : x.expando;if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;while (i--) {
            delete r[t[i]];
          }if (n ? !I(r) : !x.isEmptyObject(r)) return;
        }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null);
      }
    }
  }x.extend({ cache: {}, noData: { applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function hasData(e) {
      return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e);
    }, data: function data(e, t, n) {
      return R(e, t, n);
    }, removeData: function removeData(e, t) {
      return W(e, t);
    }, _data: function _data(e, t, n) {
      return R(e, t, n, !0);
    }, _removeData: function _removeData(e, t) {
      return W(e, t, !0);
    }, acceptData: function acceptData(e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];return !t || t !== !0 && e.getAttribute("classid") === t;
    } }), x.fn.extend({ data: function data(e, n) {
      var r,
          i,
          o = null,
          a = 0,
          s = this[0];if (e === t) {
        if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
          for (r = s.attributes; r.length > a; a++) {
            i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
          }x._data(s, "parsedAttrs", !0);
        }return o;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        x.data(this, e);
      }) : arguments.length > 1 ? this.each(function () {
        x.data(this, e, n);
      }) : s ? $(s, e, x.data(s, e)) : null;
    }, removeData: function removeData(e) {
      return this.each(function () {
        x.removeData(this, e);
      });
    } });function $(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(P, "-$1").toLowerCase();if (r = e.getAttribute(i), "string" == typeof r) {
        try {
          r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r;
        } catch (o) {}x.data(e, n, r);
      } else r = t;
    }return r;
  }function I(e) {
    var t;for (t in e) {
      if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    }return !0;
  }x.extend({ queue: function queue(e, n, r) {
      var i;return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t;
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = x.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = x._queueHooks(e, t),
          a = function a() {
        x.dequeue(e, t);
      };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return x._data(e, n) || x._data(e, n, { empty: x.Callbacks("once memory").add(function () {
          x._removeData(e, t + "queue"), x._removeData(e, n);
        }) });
    } }), x.fn.extend({ queue: function queue(e, n) {
      var r = 2;return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = x.queue(this, e, n);x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        x.dequeue(this, e);
      });
    }, delay: function delay(e, t) {
      return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
        var r = setTimeout(t, e);n.stop = function () {
          clearTimeout(r);
        };
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, n) {
      var r,
          i = 1,
          o = x.Deferred(),
          a = this,
          s = this.length,
          l = function l() {
        --i || o.resolveWith(a, [a]);
      };"string" != typeof e && (n = e, e = t), e = e || "fx";while (s--) {
        r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
      }return l(), o.promise(n);
    } });var z,
      X,
      U = /[\t\r\n\f]/g,
      V = /\r/g,
      Y = /^(?:input|select|textarea|button|object)$/i,
      J = /^(?:a|area)$/i,
      G = /^(?:checked|selected)$/i,
      Q = x.support.getSetAttribute,
      K = x.support.input;x.fn.extend({ attr: function attr(e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    }, prop: function prop(e, t) {
      return x.access(this, x.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return e = x.propFix[e] || e, this.each(function () {
        try {
          this[e] = t, delete this[e];
        } catch (n) {}
      });
    }, addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = "string" == typeof e && e;if (x.isFunction(e)) return this.each(function (t) {
        x(this).addClass(e.call(this, t, this.className));
      });if (l) for (t = (e || "").match(T) || []; s > a; a++) {
        if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
          o = 0;while (i = t[o++]) {
            0 > r.indexOf(" " + i + " ") && (r += i + " ");
          }n.className = x.trim(r);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = 0 === arguments.length || "string" == typeof e && e;if (x.isFunction(e)) return this.each(function (t) {
        x(this).removeClass(e.call(this, t, this.className));
      });if (l) for (t = (e || "").match(T) || []; s > a; a++) {
        if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
          o = 0;while (i = t[o++]) {
            while (r.indexOf(" " + i + " ") >= 0) {
              r = r.replace(" " + i + " ", " ");
            }
          }n.className = e ? x.trim(r) : "";
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e);return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
        x(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ("string" === n) {
          var t,
              r = 0,
              o = x(this),
              a = e.match(T) || [];while (t = a[r++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "");
      });
    }, hasClass: function hasClass(e) {
      var t = " " + e + " ",
          n = 0,
          r = this.length;for (; r > n; n++) {
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
      }return !1;
    }, val: function val(e) {
      var n,
          r,
          i,
          o = this[0];{
        if (arguments.length) return i = x.isFunction(e), this.each(function (n) {
          var o;1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
            return null == e ? "" : e + "";
          })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o));
        });if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n);
      }
    } }), x.extend({ valHooks: { option: { get: function get(e) {
          var t = x.find.attr(e, "value");return null != t ? t : e.text;
        } }, select: { get: function get(e) {
          var t,
              n,
              r = e.options,
              i = e.selectedIndex,
              o = "select-one" === e.type || 0 > i,
              a = o ? null : [],
              s = o ? i + 1 : r.length,
              l = 0 > i ? s : o ? i : 0;for (; s > l; l++) {
            if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
              if (t = x(n).val(), o) return t;a.push(t);
            }
          }return a;
        }, set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = x.makeArray(t),
              a = i.length;while (a--) {
            r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } }, attr: function attr(e, n, r) {
      var o,
          a,
          s = e.nodeType;if (e && 3 !== s && 8 !== s && 2 !== s) return _typeof(e.getAttribute) === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t));
    }, removeAttr: function removeAttr(e, t) {
      var n,
          r,
          i = 0,
          o = t && t.match(T);if (o && 1 === e.nodeType) while (n = o[i++]) {
        r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r);
      }
    }, attrHooks: { type: { set: function set(e, t) {
          if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(e, n, r) {
      var i,
          o,
          a,
          s = e.nodeType;if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = x.find.attr(e, "tabindex");return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1;
        } } } }), X = { set: function set(e, t, n) {
      return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n;
    } }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
    var r = x.expr.attrHandle[n] || x.find.attr;x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
      var o = x.expr.attrHandle[n],
          a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;return x.expr.attrHandle[n] = o, a;
    } : function (e, n, r) {
      return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null;
    };
  }), K && Q || (x.attrHooks.value = { set: function set(e, n, r) {
      return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r);
    } }), Q || (z = { set: function set(e, n, r) {
      var i = e.getAttributeNode(r);return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t;
    } }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
    var i;return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null;
  }, x.valHooks.button = { get: function get(e, n) {
      var r = e.getAttributeNode(n);return r && r.specified ? r.value : t;
    }, set: z.set }, x.attrHooks.contenteditable = { set: function set(e, t, n) {
      z.set(e, "" === t ? !1 : t, n);
    } }, x.each(["width", "height"], function (e, n) {
    x.attrHooks[n] = { set: function set(e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r) : t;
      } };
  })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
    x.propHooks[t] = { get: function get(e) {
        return e.getAttribute(t, 4);
      } };
  }), x.support.style || (x.attrHooks.style = { get: function get(e) {
      return e.style.cssText || t;
    }, set: function set(e, t) {
      return e.style.cssText = t + "";
    } }), x.support.optSelected || (x.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    } }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    x.propFix[this.toLowerCase()] = this;
  }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
    x.valHooks[this] = { set: function set(e, n) {
        return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t;
      } }, x.support.checkOn || (x.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });var Z = /^(?:input|select|textarea)$/i,
      et = /^key/,
      tt = /^(?:mouse|contextmenu)|click/,
      nt = /^(?:focusinfocus|focusoutblur)$/,
      rt = /^([^.]*)(?:\.(.+)|)$/;function it() {
    return !0;
  }function ot() {
    return !1;
  }function at() {
    try {
      return a.activeElement;
    } catch (e) {}
  }x.event = { global: {}, add: function add(e, n, r, o, a) {
      var s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m,
          y,
          v = x._data(e);if (v) {
        r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
          return (typeof x === "undefined" ? "undefined" : _typeof(x)) === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments);
        }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;while (u--) {
          s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join(".") }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
        }e = null;
      }
    }, remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m = x.hasData(e) && x._data(e);if (m && (c = m.events)) {
        t = (t || "").match(T) || [""], u = t.length;while (u--) {
          if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;while (o--) {
              a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
            }l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d]);
          } else for (d in c) {
            x.event.remove(e, d + t[u], n, r, !0);
          }
        }x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"));
      }
    }, trigger: function trigger(n, r, i, o) {
      var s,
          l,
          u,
          c,
          p,
          f,
          d,
          h = [i || a],
          g = v.call(n, "type") ? n.type : n,
          m = v.call(n, "namespace") ? n.namespace.split(".") : [];if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
        if (!o && !p.noBubble && !x.isWindow(i)) {
          for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) {
            h.push(u), f = u;
          }f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e);
        }d = 0;while ((u = h[d++]) && !n.isPropagationStopped()) {
          n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
        }if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
          f = i[l], f && (i[l] = null), x.event.triggered = g;try {
            i[g]();
          } catch (y) {}x.event.triggered = t, f && (i[l] = f);
        }return n.result;
      }
    }, dispatch: function dispatch(e) {
      e = x.event.fix(e);var n,
          r,
          i,
          o,
          a,
          s = [],
          l = g.call(arguments),
          u = (x._data(this, "events") || {})[e.type] || [],
          c = x.event.special[e.type] || {};if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        s = x.event.handlers.call(this, e, u), n = 0;while ((o = s[n++]) && !e.isPropagationStopped()) {
          e.currentTarget = o.elem, a = 0;while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
            (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    }, handlers: function handlers(e, n) {
      var r,
          i,
          o,
          a,
          s = [],
          l = n.delegateCount,
          u = e.target;if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) {
        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
          for (o = [], a = 0; l > a; a++) {
            i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
          }o.length && s.push({ elem: u, handlers: o });
        }
      }return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s;
    }, fix: function fix(e) {
      if (e[x.expando]) return e;var t,
          n,
          r,
          i = e.type,
          o = e,
          s = this.fixHooks[i];s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;while (t--) {
        n = r[t], e[n] = o[n];
      }return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(e, n) {
        var r,
            i,
            o,
            s = n.button,
            l = n.fromElement;return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      } }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== at() && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === at() && this.blur ? (this.blur(), !1) : t;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t;
        }, _default: function _default(e) {
          return x.nodeName(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        } } }, simulate: function simulate(e, t, n, r) {
      var i = x.extend(new x.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    } }, x.removeEvent = a.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = "on" + t;e.detachEvent && (_typeof(e[r]) === i && (e[r] = null), e.detachEvent(r, n));
  }, x.Event = function (e, n) {
    return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n);
  }, x.Event.prototype = { isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = it, this.stopPropagation();
    } }, x.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
    x.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), x.support.submitBubbles || (x.event.special.submit = { setup: function setup() {
      return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
        var n = e.target,
            r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
          e._submit_bubble = !0;
        }), x._data(r, "submitBubbles", !0));
      }), t);
    }, postDispatch: function postDispatch(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0));
    }, teardown: function teardown() {
      return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t);
    } }), x.support.changeBubbles || (x.event.special.change = { setup: function setup() {
      return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
      }), x.event.add(this, "click._change", function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0);
      })), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
        var t = e.target;Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0);
        }), x._data(t, "changeBubbles", !0));
      }), t);
    }, handle: function handle(e) {
      var n = e.target;return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
    }, teardown: function teardown() {
      return x.event.remove(this, "._change"), !Z.test(this.nodeName);
    } }), x.support.focusinBubbles || x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = 0,
        r = function r(e) {
      x.event.simulate(t, e.target, x.event.fix(e), !0);
    };x.event.special[t] = { setup: function setup() {
        0 === n++ && a.addEventListener(e, r, !0);
      }, teardown: function teardown() {
        0 === --n && a.removeEventListener(e, r, !0);
      } };
  }), x.fn.extend({ on: function on(e, n, r, i, o) {
      var a, s;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        "string" != typeof n && (r = r || n, n = t);for (a in e) {
          this.on(a, n, r, e[a], o);
        }return this;
      }if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;else if (!i) return this;return 1 === o && (s = i, i = function i(e) {
        return x().off(e), s.apply(this, arguments);
      }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
        x.event.add(this, e, i, r, n);
      });
    }, one: function one(e, t, n, r) {
      return this.on(e, t, n, r, 1);
    }, off: function off(e, n, r) {
      var i, o;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (o in e) {
          this.off(o, n, e[o]);
        }return this;
      }return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
        x.event.remove(this, e, r, n);
      });
    }, trigger: function trigger(e, t) {
      return this.each(function () {
        x.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, n) {
      var r = this[0];return r ? x.event.trigger(e, n, r, !0) : t;
    } });var st = /^.[^:#\[\.,]*$/,
      lt = /^(?:parents|prev(?:Until|All))/,
      ut = x.expr.match.needsContext,
      ct = { children: !0, contents: !0, next: !0, prev: !0 };x.fn.extend({ find: function find(e) {
      var t,
          n = [],
          r = this,
          i = r.length;if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
        for (t = 0; i > t; t++) {
          if (x.contains(r[t], this)) return !0;
        }
      }));for (t = 0; i > t; t++) {
        x.find(e, r[t], n);
      }return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n;
    }, has: function has(e) {
      var t,
          n = x(e, this),
          r = n.length;return this.filter(function () {
        for (t = 0; r > t; t++) {
          if (x.contains(this, n[t])) return !0;
        }
      });
    }, not: function not(e) {
      return this.pushStack(ft(this, e || [], !0));
    }, filter: function filter(e) {
      return this.pushStack(ft(this, e || [], !1));
    }, is: function is(e) {
      return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length;
    }, closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;for (; i > r; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
            n = o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? x.unique(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
          r = x.merge(this.get(), n);return this.pushStack(x.unique(r));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } });function pt(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);return e;
  }x.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return x.dir(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return x.dir(e, "parentNode", n);
    }, next: function next(e) {
      return pt(e, "nextSibling");
    }, prev: function prev(e) {
      return pt(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return x.dir(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return x.dir(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return x.dir(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return x.dir(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return x.sibling((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return x.sibling(e.firstChild);
    }, contents: function contents(e) {
      return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes);
    } }, function (e, t) {
    x.fn[e] = function (n, r) {
      var i = x.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i);
    };
  }), x.extend({ filter: function filter(e, t, n) {
      var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, dir: function dir(e, n, r) {
      var i = [],
          o = e[n];while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) {
        1 === o.nodeType && i.push(o), o = o[n];
      }return i;
    }, sibling: function sibling(e, t) {
      var n = [];for (; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }return n;
    } });function ft(e, t, n) {
    if (x.isFunction(t)) return x.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    });if (t.nodeType) return x.grep(e, function (e) {
      return e === t !== n;
    });if ("string" == typeof t) {
      if (st.test(t)) return x.filter(t, e, n);t = x.filter(t, e);
    }return x.grep(e, function (e) {
      return x.inArray(e, t) >= 0 !== n;
    });
  }function dt(e) {
    var t = ht.split("|"),
        n = e.createDocumentFragment();if (n.createElement) while (t.length) {
      n.createElement(t.pop());
    }return n;
  }var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      gt = / jQuery\d+="(?:null|\d+)"/g,
      mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
      yt = /^\s+/,
      vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      bt = /<([\w:]+)/,
      xt = /<tbody/i,
      wt = /<|&#?\w+;/,
      Tt = /<(?:script|style|link)/i,
      Ct = /^(?:checkbox|radio)$/i,
      Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      kt = /^$|\/(?:java|ecma)script/i,
      Et = /^true\/(.*)/,
      St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      At = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
      jt = dt(a),
      Dt = jt.appendChild(a.createElement("div"));At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({ text: function text(e) {
      return x.access(this, function (e) {
        return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e));
      }, null, e, arguments.length);
    }, append: function append() {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Lt(this, e);t.appendChild(e);
        }
      });
    }, prepend: function prepend() {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Lt(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, remove: function remove(e, t) {
      var n,
          r = e ? x.filter(e, this) : this,
          i = 0;for (; null != (n = r[i]); i++) {
        t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
      }return this;
    }, empty: function empty() {
      var e,
          t = 0;for (; null != (e = this[t]); t++) {
        1 === e.nodeType && x.cleanData(Ft(e, !1));while (e.firstChild) {
          e.removeChild(e.firstChild);
        }e.options && x.nodeName(e, "select") && (e.options.length = 0);
      }return this;
    }, clone: function clone(e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return x.clone(this, e, t);
      });
    }, html: function html(e) {
      return x.access(this, function (e) {
        var n = this[0] || {},
            r = 0,
            i = this.length;if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(vt, "<$1></$2>");try {
            for (; i > r; r++) {
              n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
            }n = 0;
          } catch (o) {}
        }n && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = x.map(this, function (e) {
        return [e.nextSibling, e.parentNode];
      }),
          t = 0;return this.domManip(arguments, function (n) {
        var r = e[t++],
            i = e[t++];i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
      }, !0), t ? this : this.remove();
    }, detach: function detach(e) {
      return this.remove(e, !0);
    }, domManip: function domManip(e, t, n) {
      e = d.apply([], e);var r,
          i,
          o,
          a,
          s,
          l,
          u = 0,
          c = this.length,
          p = this,
          f = c - 1,
          h = e[0],
          g = x.isFunction(h);if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function (r) {
        var i = p.eq(r);g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n);
      });if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
        for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) {
          i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
        }if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) {
          i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
        }l = r = null;
      }return this;
    } });function Lt(e, t) {
    return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }function Ht(e) {
    return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e;
  }function qt(e) {
    var t = Et.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }function _t(e, t) {
    var n,
        r = 0;for (; null != (n = e[r]); r++) {
      x._data(n, "globalEval", !t || x._data(t[r], "globalEval"));
    }
  }function Mt(e, t) {
    if (1 === t.nodeType && x.hasData(e)) {
      var n,
          r,
          i,
          o = x._data(e),
          a = x._data(t, o),
          s = o.events;if (s) {
        delete a.handle, a.events = {};for (n in s) {
          for (r = 0, i = s[n].length; i > r; r++) {
            x.event.add(t, n, s[n][r]);
          }
        }
      }a.data && (a.data = x.extend({}, a.data));
    }
  }function Ot(e, t) {
    var n, r, i;if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
        i = x._data(t);for (r in i.events) {
          x.removeEvent(t, r, i.handle);
        }t.removeAttribute(x.expando);
      }"script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
  }x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    x.fn[e] = function (e) {
      var n,
          r = 0,
          i = [],
          o = x(e),
          a = o.length - 1;for (; a >= r; r++) {
        n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
      }return this.pushStack(i);
    };
  });function Ft(e, n) {
    var r,
        o,
        a = 0,
        s = _typeof(e.getElementsByTagName) !== i ? e.getElementsByTagName(n || "*") : _typeof(e.querySelectorAll) !== i ? e.querySelectorAll(n || "*") : t;if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) {
      !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
    }return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s;
  }function Bt(e) {
    Ct.test(e.type) && (e.defaultChecked = e.checked);
  }x.extend({ clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          l = x.contains(e.ownerDocument, e);if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) {
        r[a] && Ot(i, r[a]);
      }if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) {
        Mt(i, r[a]);
      } else Mt(e, o);return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o;
    }, buildFragment: function buildFragment(e, t, n, r) {
      var i,
          o,
          a,
          s,
          l,
          u,
          c,
          p = e.length,
          f = dt(t),
          d = [],
          h = 0;for (; p > h; h++) {
        if (o = e[h], o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);else if (wt.test(o)) {
          s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];while (i--) {
            s = s.lastChild;
          }if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
            o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;while (i--) {
              x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
            }
          }x.merge(d, s.childNodes), s.textContent = "";while (s.firstChild) {
            s.removeChild(s.firstChild);
          }s = f.lastChild;
        } else d.push(t.createTextNode(o));
      }s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;while (o = d[h++]) {
        if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
          i = 0;while (o = s[i++]) {
            kt.test(o.type || "") && n.push(o);
          }
        }
      }return s = null, f;
    }, cleanData: function cleanData(e, t) {
      var n,
          r,
          o,
          a,
          s = 0,
          l = x.expando,
          u = x.cache,
          c = x.support.deleteExpando,
          f = x.event.special;for (; null != (n = e[s]); s++) {
        if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
          if (a.events) for (r in a.events) {
            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
          }u[o] && (delete u[o], c ? delete n[l] : _typeof(n.removeAttribute) !== i ? n.removeAttribute(l) : n[l] = null, p.push(o));
        }
      }
    }, _evalUrl: function _evalUrl(e) {
      return x.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
    } }), x.fn.extend({ wrapAll: function wrapAll(e) {
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).wrapAll(e.call(this, t));
      });if (this[0]) {
        var t = x(e, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          var e = this;while (e.firstChild && 1 === e.firstChild.nodeType) {
            e = e.firstChild;
          }return e;
        }).append(this);
      }return this;
    }, wrapInner: function wrapInner(e) {
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = x(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = x.isFunction(e);return this.each(function (n) {
        x(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
      }).end();
    } });var Pt,
      Rt,
      Wt,
      $t = /alpha\([^)]*\)/i,
      It = /opacity\s*=\s*([^)]*)/,
      zt = /^(top|right|bottom|left)$/,
      Xt = /^(none|table(?!-c[ea]).+)/,
      Ut = /^margin/,
      Vt = RegExp("^(" + w + ")(.*)$", "i"),
      Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
      Jt = RegExp("^([+-])=(" + w + ")", "i"),
      Gt = { BODY: "block" },
      Qt = { position: "absolute", visibility: "hidden", display: "block" },
      Kt = { letterSpacing: 0, fontWeight: 400 },
      Zt = ["Top", "Right", "Bottom", "Left"],
      en = ["Webkit", "O", "Moz", "ms"];function tn(e, t) {
    if (t in e) return t;var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = en.length;while (i--) {
      if (t = en[i] + n, t in e) return t;
    }return r;
  }function nn(e, t) {
    return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e);
  }function rn(e, t) {
    var n,
        r,
        i,
        o = [],
        a = 0,
        s = e.length;for (; s > a; a++) {
      r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
    }for (a = 0; s > a; a++) {
      r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
    }return e;
  }x.fn.extend({ css: function css(e, n) {
      return x.access(this, function (e, n, r) {
        var i,
            o,
            a = {},
            s = 0;if (x.isArray(n)) {
          for (o = Rt(e), i = n.length; i > s; s++) {
            a[n[s]] = x.css(e, n[s], !1, o);
          }return a;
        }return r !== t ? x.style(e, n, r) : x.css(e, n);
      }, e, n, arguments.length > 1);
    }, show: function show() {
      return rn(this, !0);
    }, hide: function hide() {
      return rn(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        nn(this) ? x(this).show() : x(this).hide();
      });
    } }), x.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Wt(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": x.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function style(e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            a,
            s,
            l = x.camelCase(n),
            u = e.style;if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];if (a = typeof r === "undefined" ? "undefined" : _typeof(r), "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
          u[n] = r;
        } catch (c) {}
      }
    }, css: function css(e, n, r, i) {
      var o,
          a,
          s,
          l = x.camelCase(n);return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a;
    } }), e.getComputedStyle ? (Rt = function Rt(t) {
    return e.getComputedStyle(t, null);
  }, Wt = function Wt(e, n, r) {
    var i,
        o,
        a,
        s = r || Rt(e),
        l = s ? s.getPropertyValue(n) || s[n] : t,
        u = e.style;return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l;
  }) : a.documentElement.currentStyle && (Rt = function Rt(e) {
    return e.currentStyle;
  }, Wt = function Wt(e, n, r) {
    var i,
        o,
        a,
        s = r || Rt(e),
        l = s ? s[n] : t,
        u = e.style;return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l;
  });function on(e, t, n) {
    var r = Vt.exec(t);return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }function an(e, t, n, r, i) {
    var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;for (; 4 > o; o += 2) {
      "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
    }return a;
  }function sn(e, t, n) {
    var r = !0,
        i = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = Rt(e),
        a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);if (0 >= i || null == i) {
      if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
    }return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }function ln(e) {
    var t = a,
        n = Gt[e];return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n;
  }function un(e, t) {
    var n = x(t.createElement(e)).appendTo(t.body),
        r = x.css(n[0], "display");return n.remove(), r;
  }x.each(["height", "width"], function (e, n) {
    x.cssHooks[n] = { get: function get(e, r, i) {
        return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
          return sn(e, n, i);
        }) : sn(e, n, i) : t;
      }, set: function set(e, t, r) {
        var i = r && Rt(e);return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0);
      } };
  }), x.support.opacity || (x.cssHooks.opacity = { get: function get(e, t) {
      return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    }, set: function set(e, t) {
      var n = e.style,
          r = e.currentStyle,
          i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
          o = r && r.filter || n.filter || "";n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i);
    } }), x(function () {
    x.support.reliableMarginRight || (x.cssHooks.marginRight = { get: function get(e, n) {
        return n ? x.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"]) : t;
      } }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
      x.cssHooks[n] = { get: function get(e, r) {
          return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t;
        } };
    });
  }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"));
  }, x.expr.filters.visible = function (e) {
    return !x.expr.filters.hidden(e);
  }), x.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    x.cssHooks[e + t] = { expand: function expand(n) {
        var r = 0,
            i = {},
            o = "string" == typeof n ? n.split(" ") : [n];for (; 4 > r; r++) {
          i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
        }return i;
      } }, Ut.test(e) || (x.cssHooks[e + t].set = on);
  });var cn = /%20/g,
      pn = /\[\]$/,
      fn = /\r?\n/g,
      dn = /^(?:submit|button|image|reset|file)$/i,
      hn = /^(?:input|select|textarea|keygen)/i;x.fn.extend({ serialize: function serialize() {
      return x.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = x.prop(this, "elements");return e ? x.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e));
      }).map(function (e, t) {
        var n = x(this).val();return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
          return { name: t.name, value: e.replace(fn, "\r\n") };
        }) : { name: t.name, value: n.replace(fn, "\r\n") };
      }).get();
    } }), x.param = function (e, n) {
    var r,
        i = [],
        o = function o(e, t) {
      t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
      o(this.name, this.value);
    });else for (r in e) {
      gn(r, e[r], n, o);
    }return i.join("&").replace(cn, "+");
  };function gn(e, t, n, r) {
    var i;if (x.isArray(t)) x.each(t, function (t, i) {
      n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x.type(t)) r(e, t);else for (i in t) {
      gn(e + "[" + i + "]", t[i], n, r);
    }
  }x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    x.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), x.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }, bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } });var mn,
      yn,
      vn = x.now(),
      bn = /\?/,
      xn = /#.*$/,
      wn = /([?&])_=[^&]*/,
      Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Nn = /^(?:GET|HEAD)$/,
      kn = /^\/\//,
      En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      Sn = x.fn.load,
      An = {},
      jn = {},
      Dn = "*/".concat("*");try {
    yn = o.href;
  } catch (Ln) {
    yn = a.createElement("a"), yn.href = "", yn = yn.href;
  }mn = En.exec(yn.toLowerCase()) || [];function Hn(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var r,
          i = 0,
          o = t.toLowerCase().match(T) || [];if (x.isFunction(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }function qn(e, n, r, i) {
    var o = {},
        a = e === jn;function s(l) {
      var u;return o[l] = !0, x.each(e[l] || [], function (e, l) {
        var c = l(n, r, i);return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1);
      }), u;
    }return s(n.dataTypes[0]) || !o["*"] && s("*");
  }function _n(e, n) {
    var r,
        i,
        o = x.ajaxSettings.flatOptions || {};for (i in n) {
      n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
    }return r && x.extend(!0, e, r), e;
  }x.fn.load = function (e, n, r) {
    if ("string" != typeof e && Sn) return Sn.apply(this, arguments);var i,
        o,
        a,
        s = this,
        l = e.indexOf(" ");return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (a = "POST"), s.length > 0 && x.ajax({ url: e, type: a, dataType: "html", data: n }).done(function (e) {
      o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e);
    }).complete(r && function (e, t) {
      s.each(r, o || [e.responseText, t, e]);
    }), this;
  }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    x.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), x.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yn, type: "GET", isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
    }, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function ajax(e, n) {
      "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (n = e, e = t), n = n || {};var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          p = x.ajaxSetup({}, n),
          f = p.context || p,
          d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
          h = x.Deferred(),
          g = x.Callbacks("once memory"),
          m = p.statusCode || {},
          y = {},
          v = {},
          b = 0,
          w = "canceled",
          C = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (2 === b) {
            if (!c) {
              c = {};while (t = Tn.exec(a)) {
                c[t[1].toLowerCase()] = t[2];
              }
            }t = c[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === b ? a : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          var n = e.toLowerCase();return b || (e = v[n] = v[n] || e, y[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return b || (p.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (2 > b) for (t in e) {
            m[t] = [m[t], e[t]];
          } else C.always(e[C.status]);return this;
        }, abort: function abort(e) {
          var t = e || w;return u && u.abort(t), k(0, t), this;
        } };if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);for (i in p.headers) {
        C.setRequestHeader(i, p.headers[i]);
      }if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();w = "abort";for (i in { success: 1, error: 1, complete: 1 }) {
        C[i](p[i]);
      }if (u = qn(jn, p, n, C)) {
        C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
          C.abort("timeout");
        }, p.timeout));try {
          b = 1, u.send(y, k);
        } catch (N) {
          if (!(2 > b)) throw N;k(-1, N);
        }
      } else k(-1, "No Transport");function k(e, n, r, i) {
        var c,
            y,
            v,
            w,
            T,
            N = n;2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")));
      }return C;
    }, getJSON: function getJSON(e, t, n) {
      return x.get(e, t, n, "json");
    }, getScript: function getScript(e, n) {
      return x.get(e, t, n, "script");
    } }), x.each(["get", "post"], function (e, n) {
    x[n] = function (e, r, i, o) {
      return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({ url: e, type: n, dataType: o, data: r, success: i });
    };
  });function Mn(e, n, r) {
    var i,
        o,
        a,
        s,
        l = e.contents,
        u = e.dataTypes;while ("*" === u[0]) {
      u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
    }if (o) for (s in l) {
      if (l[s] && l[s].test(o)) {
        u.unshift(s);break;
      }
    }if (u[0] in r) a = u[0];else {
      for (s in r) {
        if (!u[0] || e.converters[s + " " + u[0]]) {
          a = s;break;
        }i || (i = s);
      }a = a || i;
    }return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
  }function On(e, t, n, r) {
    var i,
        o,
        a,
        s,
        l,
        u = {},
        c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
      u[a.toLowerCase()] = e.converters[a];
    }o = c.shift();while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
        if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) {
          if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
            a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));break;
          }
        }if (a !== !0) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (p) {
          return { state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o };
        }
      }
    }return { state: "success", data: t };
  }x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(e) {
        return x.globalEval(e), e;
      } } }), x.ajaxPrefilter("script", function (e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), x.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n,
          r = a.head || x("head")[0] || a.documentElement;return { send: function send(t, i) {
          n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
          }, r.insertBefore(n, r.firstChild);
        }, abort: function abort() {
          n && n.onload(t, !0);
        } };
    }
  });var Fn = [],
      Bn = /(=)\?(?=&|$)|\?\?/;x.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Fn.pop() || x.expando + "_" + vn++;return this[e] = !0, e;
    } }), x.ajaxPrefilter("json jsonp", function (n, r, i) {
    var o,
        a,
        s,
        l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
      return s || x.error(o + " was not called"), s[0];
    }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
      s = arguments;
    }, i.always(function () {
      e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t;
    }), "script") : t;
  });var Pn,
      Rn,
      Wn = 0,
      $n = e.ActiveXObject && function () {
    var e;for (e in Pn) {
      Pn[e](t, !0);
    }
  };function In() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }function zn() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }x.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && In() || zn();
  } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
    if (!n.crossDomain || x.support.cors) {
      var _r;return { send: function send(i, o) {
          var a,
              s,
              l = n.xhr();if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) {
            l[s] = n.xhrFields[s];
          }n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");try {
            for (s in i) {
              l.setRequestHeader(s, i[s]);
            }
          } catch (u) {}l.send(n.hasContent && n.data || null), _r = function r(e, i) {
            var s, u, c, p;try {
              if (_r && (i || 4 === l.readyState)) if (_r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();else {
                p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);try {
                  c = l.statusText;
                } catch (f) {
                  c = "";
                }s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404;
              }
            } catch (d) {
              i || o(-1, d);
            }p && o(s, c, p, u);
          }, n.async ? 4 === l.readyState ? setTimeout(_r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = _r), l.onreadystatechange = _r) : _r();
        }, abort: function abort() {
          _r && _r(t, !0);
        } };
    }
  });var Xn,
      Un,
      Vn = /^(?:toggle|show|hide)$/,
      Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
      Jn = /queueHooks$/,
      Gn = [nr],
      Qn = { "*": [function (e, t) {
      var n = this.createTween(e, t),
          r = n.cur(),
          i = Yn.exec(t),
          o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
          a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
          s = 1,
          l = 20;if (a && a[3] !== o) {
        o = o || a[3], i = i || [], a = +r || 1;do {
          s = s || ".5", a /= s, x.style(n.elem, e, a + o);
        } while (s !== (s = n.cur() / r) && 1 !== s && --l);
      }return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n;
    }] };function Kn() {
    return setTimeout(function () {
      Xn = t;
    }), Xn = x.now();
  }function Zn(e, t, n) {
    var r,
        i = (Qn[t] || []).concat(Qn["*"]),
        o = 0,
        a = i.length;for (; a > o; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }function er(e, t, n) {
    var r,
        i,
        o = 0,
        a = Gn.length,
        s = x.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (i) return !1;var t = Xn || Kn(),
          n = Math.max(0, u.startTime + u.duration - t),
          r = n / u.duration || 0,
          o = 1 - r,
          a = 0,
          l = u.tweens.length;for (; l > a; a++) {
        u.tweens[a].run(o);
      }return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1);
    },
        u = s.promise({ elem: e, props: x.extend({}, t), opts: x.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(r), r;
      }, stop: function stop(t) {
        var n = 0,
            r = t ? u.tweens.length : 0;if (i) return this;for (i = !0; r > n; n++) {
          u.tweens[n].run(1);
        }return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
      } }),
        c = u.props;for (tr(c, u.opts.specialEasing); a > o; o++) {
      if (r = Gn[o].call(u, e, c, u.opts)) return r;
    }return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
  }function tr(e, t) {
    var n, r, i, o, a;for (n in e) {
      if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
        o = a.expand(o), delete e[r];for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }x.Animation = x.extend(er, { tweener: function tweener(e, t) {
      x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");var n,
          r = 0,
          i = e.length;for (; i > r; r++) {
        n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t);
      }
    }, prefilter: function prefilter(e, t) {
      t ? Gn.unshift(e) : Gn.push(e);
    } });function nr(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        l,
        u = this,
        c = {},
        p = e.style,
        f = e.nodeType && nn(e),
        d = x._data(e, "fxshow");n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
      s.unqueued || l();
    }), s.unqueued++, u.always(function () {
      u.always(function () {
        s.unqueued--, x.queue(e, "fx").length || s.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
    }));for (r in t) {
      if (i = t[r], Vn.exec(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;c[r] = d && d[r] || x.style(e, r);
      }
    }if (!x.isEmptyObject(c)) {
      d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
        x(e).hide();
      }), u.done(function () {
        var t;x._removeData(e, "fxshow");for (t in c) {
          x.style(e, t, c[t]);
        }
      });for (r in c) {
        a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0));
      }
    }
  }function rr(e, t, n, r, i) {
    return new rr.prototype.init(e, t, n, r, i);
  }x.Tween = rr, rr.prototype = { constructor: rr, init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = rr.propHooks[this.prop];return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = rr.propHooks[this.prop];return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
    } }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function get(e) {
        var t;return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
      }, set: function set(e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      } } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, x.each(["toggle", "show", "hide"], function (e, t) {
    var n = x.fn[t];x.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
    };
  }), x.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function animate(e, t, n, r) {
      var i = x.isEmptyObject(e),
          o = x.speed(t, n, r),
          a = function a() {
        var t = er(this, x.extend({}, e), o);(i || x._data(this, "finish")) && t.stop(!0);
      };return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
    }, stop: function stop(e, n, r) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(r);
      };return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            n = null != e && e + "queueHooks",
            o = x.timers,
            a = x._data(this);if (n) a[n] && a[n].stop && i(a[n]);else for (n in a) {
          a[n] && a[n].stop && Jn.test(n) && i(a[n]);
        }for (n = o.length; n--;) {
          o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
        }(t || !r) && x.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return e !== !1 && (e = e || "fx"), this.each(function () {
        var t,
            n = x._data(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = x.timers,
            a = r ? r.length : 0;for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; a > t; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }delete n.finish;
      });
    } });function ir(e, t) {
    var n,
        r = { height: e },
        i = 0;for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
      n = Zt[i], r["margin" + n] = r["padding" + n] = e;
    }return t && (r.opacity = r.width = e), r;
  }x.each({ slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    x.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), x.speed = function (e, t, n) {
    var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? x.extend({}, e) : { complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t };return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
    }, r;
  }, x.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    } }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
    var e,
        n = x.timers,
        r = 0;for (Xn = x.now(); n.length > r; r++) {
      e = n[r], e() || n[r] !== e || n.splice(r--, 1);
    }n.length || x.fx.stop(), Xn = t;
  }, x.fx.timer = function (e) {
    e() && x.timers.push(e) && x.fx.start();
  }, x.fx.interval = 13, x.fx.start = function () {
    Un || (Un = setInterval(x.fx.tick, x.fx.interval));
  }, x.fx.stop = function () {
    clearInterval(Un), Un = null;
  }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
    return x.grep(x.timers, function (t) {
      return e === t.elem;
    }).length;
  }), x.fn.offset = function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      x.offset.setOffset(this, e, t);
    });var n,
        r,
        o = { top: 0, left: 0 },
        a = this[0],
        s = a && a.ownerDocument;if (s) return n = s.documentElement, x.contains(n, a) ? (_typeof(a.getBoundingClientRect) !== i && (o = a.getBoundingClientRect()), r = or(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o;
  }, x.offset = { setOffset: function setOffset(e, t, n) {
      var r = x.css(e, "position");"static" === r && (e.style.position = "relative");var i = x(e),
          o = i.offset(),
          a = x.css(e, "top"),
          s = x.css(e, "left"),
          l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
          u = {},
          c = {},
          p,
          f;l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u);
    } }, x.fn.extend({ position: function position() {
      if (this[0]) {
        var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - x.css(r, "marginTop", !0), left: t.left - n.left - x.css(r, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent || s;while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) {
          e = e.offsetParent;
        }return e || s;
      });
    } }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) {
    var r = /Y/.test(n);x.fn[e] = function (i) {
      return x.access(this, function (e, i, o) {
        var a = or(e);return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t);
      }, e, i, arguments.length, null);
    };
  });function or(e) {
    return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
  }x.each({ Height: "height", Width: "width" }, function (e, n) {
    x.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (r, i) {
      x.fn[i] = function (i, o) {
        var a = arguments.length && (r || "boolean" != typeof i),
            s = r || (i === !0 || o === !0 ? "margin" : "border");return x.access(this, function (n, r, i) {
          var o;return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s);
        }, n, a ? i : t, a, null);
      };
    });
  }), x.fn.size = function () {
    return this.length;
  }, x.fn.andSelf = x.fn.addBack, "object" == ( false ? "undefined" : _typeof(module)) && module && "object" == _typeof(module.exports) ? module.exports = x : (e.jQuery = e.$ = x, "function" == "function" && __webpack_require__(4) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return x;
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
})(window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), +function (a) {
  "use strict";
  function b() {
    var a = document.createElement("bootstrap"),
        b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
      if (void 0 !== a.style[c]) return { end: b[c] };
    }return !1;
  }a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;a(this).one("bsTransitionEnd", function () {
      c = !0;
    });var e = function e() {
      c || a(d).trigger(a.support.transition.end);
    };return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
        if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
      } });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }var c = '[data-dismiss="alert"]',
      d = function d(b) {
    a(b).on("click", c, this.close);
  };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove();
    }var e = a(this),
        f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a("#" === f ? [] : f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
  };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }var c = function c(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
      var c = this.$element.find("input");"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target).closest(".btn");b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"));
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b),
          g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }var c = function c(b, _c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {case 37:
          this.prev();break;case 39:
          this.next();break;default:
          return;}a.preventDefault();
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = this.getItemIndex(b),
        d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
        f = (c + e) % this.$items.length;return this.$items.eq(f);
  }, c.prototype.to = function (a) {
    var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a);
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    if (!this.sliding) return this.slide("next");
  }, c.prototype.prev = function () {
    if (!this.sliding) return this.slide("prev");
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left" : "right",
        i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
        k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
      }var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
    }
  };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  };var e = function e(c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  };a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    var c,
        d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
  }function c(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
    });
  }var d = function d(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");return a ? "width" : "height";
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b,
          e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
  };var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : e.data();c.call(f, h);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
  }function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
          e = b(d),
          f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
    }));
  }function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function g(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
    var e = a(this);if (!e.is(".disabled, :disabled")) {
      var f = b(e),
          g = f.hasClass("open");if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
      }return !1;
    }
  }, g.prototype.keydown = function (c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
            g = e.hasClass("open");if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
            i = e.find(".dropdown-menu" + h);if (i.length) {
          var j = i.index(c.target);38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";
  function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }var c = function c(b, _c2) {
    this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var d = this,
        e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      d.$element.one("mouseup.dismiss.bs.modal", function (b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var d = this,
        e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");var g = function g() {
        d.removeBackdrop(), b && b();
      };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b && b();
  }, c.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({ paddingLeft: "", paddingRight: "" });
  }, c.prototype.checkScrollbar = function () {
    var a = window.innerWidth;if (!a) {
      var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
    }this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
  };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function c(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show());
  }, c.prototype.isInStateTrue = function () {
    for (var a in this.inState) {
      if (this.inState[a]) return !0;
    }return !1;
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide();
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
          f = this.tip(),
          g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight;if (j) {
        var n = h,
            o = this.getPosition(this.$viewport);h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
      }var p = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(p, h);var q = function q() {
        var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
      };a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
        d.css({ top: Math.round(a.top), left: Math.round(a.left) });
      } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
        j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
    }var e = this,
        f = a(this.$tip),
        g = a.Event("hide.bs." + this.type);if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this;
  }, c.prototype.fixTitle = function () {
    var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = window.SVGElement && c instanceof window.SVGElement,
        g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
        h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
        i = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, h, i, g);
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
    }return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do {
      a += ~~(1e6 * Math.random());
    } while (document.getElementById(a));return a;
  }, c.prototype.tip = function () {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    var a = this;clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null;
    });
  };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }var c = function c(a, b) {
    this.init("popover", a, b);
  };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  "use strict";
  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
  }function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = this,
        c = "offset",
        d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var b = a(this),
          e = b.data("target") || b.attr("href"),
          f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      b.offsets.push(this[0]), b.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) {
      g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
    }
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }var c = function c(b) {
    this.element = a(b);
  };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
          f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
          g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
        });
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
    }var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  };var e = function e(c) {
    c.preventDefault(), b.call(a(this), "show");
  };a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
  "use strict";
  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }var c = function c(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();if (null != c && "top" == this.affixed) return e < c && "top";if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";var h = null == this.affixed,
        i = h ? e : f.top,
        j = h ? g : b;return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom";
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
        b = this.$element.offset();return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
          d = this.options.offset,
          e = d.top,
          f = d.bottom,
          g = Math.max(a(document).height(), a(document.body).height());"object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
            j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }"bottom" == h && this.$element.offset({ top: g - b - f });
    }
  };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// ProgressBar.js 1.0.0
// https://kimmobrunfeldt.github.io/progressbar.js
// License: MIT

!function (e) {
  if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var f;"undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.ProgressBar = e();
  }
}(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }return s;
  }({ 1: [function (require, module, exports) {
      /* shifty - v1.5.2 - 2016-02-10 - http://jeremyckahn.github.io/shifty */
      ;(function () {
        var root = this || Function('return this')();

        /**
         * Shifty Core
         * By Jeremy Kahn - jeremyckahn@gmail.com
         */

        var Tweenable = function () {

          'use strict';

          // Aliases that get defined later in this function

          var formula;

          // CONSTANTS
          var DEFAULT_SCHEDULE_FUNCTION;
          var DEFAULT_EASING = 'linear';
          var DEFAULT_DURATION = 500;
          var UPDATE_TIME = 1000 / 60;

          var _now = Date.now ? Date.now : function () {
            return +new Date();
          };

          var now = typeof SHIFTY_DEBUG_NOW !== 'undefined' ? SHIFTY_DEBUG_NOW : _now;

          if (typeof window !== 'undefined') {
            // requestAnimationFrame() shim by Paul Irish (modified for Shifty)
            // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
            DEFAULT_SCHEDULE_FUNCTION = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout;
          } else {
            DEFAULT_SCHEDULE_FUNCTION = setTimeout;
          }

          function noop() {}
          // NOOP!


          /**
           * Handy shortcut for doing a for-in loop. This is not a "normal" each
           * function, it is optimized for Shifty.  The iterator function only receives
           * the property name, not the value.
           * @param {Object} obj
           * @param {Function(string)} fn
           * @private
           */
          function each(obj, fn) {
            var key;
            for (key in obj) {
              if (Object.hasOwnProperty.call(obj, key)) {
                fn(key);
              }
            }
          }

          /**
           * Perform a shallow copy of Object properties.
           * @param {Object} targetObject The object to copy into
           * @param {Object} srcObject The object to copy from
           * @return {Object} A reference to the augmented `targetObj` Object
           * @private
           */
          function shallowCopy(targetObj, srcObj) {
            each(srcObj, function (prop) {
              targetObj[prop] = srcObj[prop];
            });

            return targetObj;
          }

          /**
           * Copies each property from src onto target, but only if the property to
           * copy to target is undefined.
           * @param {Object} target Missing properties in this Object are filled in
           * @param {Object} src
           * @private
           */
          function defaults(target, src) {
            each(src, function (prop) {
              if (typeof target[prop] === 'undefined') {
                target[prop] = src[prop];
              }
            });
          }

          /**
           * Calculates the interpolated tween values of an Object for a given
           * timestamp.
           * @param {Number} forPosition The position to compute the state for.
           * @param {Object} currentState Current state properties.
           * @param {Object} originalState: The original state properties the Object is
           * tweening from.
           * @param {Object} targetState: The destination state properties the Object
           * is tweening to.
           * @param {number} duration: The length of the tween in milliseconds.
           * @param {number} timestamp: The UNIX epoch time at which the tween began.
           * @param {Object} easing: This Object's keys must correspond to the keys in
           * targetState.
           * @private
           */
          function tweenProps(forPosition, currentState, originalState, targetState, duration, timestamp, easing) {
            var normalizedPosition = forPosition < timestamp ? 0 : (forPosition - timestamp) / duration;

            var prop;
            var easingObjectProp;
            var easingFn;
            for (prop in currentState) {
              if (currentState.hasOwnProperty(prop)) {
                easingObjectProp = easing[prop];
                easingFn = typeof easingObjectProp === 'function' ? easingObjectProp : formula[easingObjectProp];

                currentState[prop] = tweenProp(originalState[prop], targetState[prop], easingFn, normalizedPosition);
              }
            }

            return currentState;
          }

          /**
           * Tweens a single property.
           * @param {number} start The value that the tween started from.
           * @param {number} end The value that the tween should end at.
           * @param {Function} easingFunc The easing curve to apply to the tween.
           * @param {number} position The normalized position (between 0.0 and 1.0) to
           * calculate the midpoint of 'start' and 'end' against.
           * @return {number} The tweened value.
           * @private
           */
          function tweenProp(start, end, easingFunc, position) {
            return start + (end - start) * easingFunc(position);
          }

          /**
           * Applies a filter to Tweenable instance.
           * @param {Tweenable} tweenable The `Tweenable` instance to call the filter
           * upon.
           * @param {String} filterName The name of the filter to apply.
           * @private
           */
          function applyFilter(tweenable, filterName) {
            var filters = Tweenable.prototype.filter;
            var args = tweenable._filterArgs;

            each(filters, function (name) {
              if (typeof filters[name][filterName] !== 'undefined') {
                filters[name][filterName].apply(tweenable, args);
              }
            });
          }

          var timeoutHandler_endTime;
          var timeoutHandler_currentTime;
          var timeoutHandler_isEnded;
          var timeoutHandler_offset;
          /**
           * Handles the update logic for one step of a tween.
           * @param {Tweenable} tweenable
           * @param {number} timestamp
           * @param {number} delay
           * @param {number} duration
           * @param {Object} currentState
           * @param {Object} originalState
           * @param {Object} targetState
           * @param {Object} easing
           * @param {Function(Object, *, number)} step
           * @param {Function(Function,number)}} schedule
           * @param {number=} opt_currentTimeOverride Needed for accurate timestamp in
           * Tweenable#seek.
           * @private
           */
          function timeoutHandler(tweenable, timestamp, delay, duration, currentState, originalState, targetState, easing, step, schedule, opt_currentTimeOverride) {

            timeoutHandler_endTime = timestamp + delay + duration;

            timeoutHandler_currentTime = Math.min(opt_currentTimeOverride || now(), timeoutHandler_endTime);

            timeoutHandler_isEnded = timeoutHandler_currentTime >= timeoutHandler_endTime;

            timeoutHandler_offset = duration - (timeoutHandler_endTime - timeoutHandler_currentTime);

            if (tweenable.isPlaying()) {
              if (timeoutHandler_isEnded) {
                step(targetState, tweenable._attachment, timeoutHandler_offset);
                tweenable.stop(true);
              } else {
                tweenable._scheduleId = schedule(tweenable._timeoutHandler, UPDATE_TIME);

                applyFilter(tweenable, 'beforeTween');

                // If the animation has not yet reached the start point (e.g., there was
                // delay that has not yet completed), just interpolate the starting
                // position of the tween.
                if (timeoutHandler_currentTime < timestamp + delay) {
                  tweenProps(1, currentState, originalState, targetState, 1, 1, easing);
                } else {
                  tweenProps(timeoutHandler_currentTime, currentState, originalState, targetState, duration, timestamp + delay, easing);
                }

                applyFilter(tweenable, 'afterTween');

                step(currentState, tweenable._attachment, timeoutHandler_offset);
              }
            }
          }

          /**
           * Creates a usable easing Object from a string, a function or another easing
           * Object.  If `easing` is an Object, then this function clones it and fills
           * in the missing properties with `"linear"`.
           * @param {Object.<string|Function>} fromTweenParams
           * @param {Object|string|Function} easing
           * @return {Object.<string|Function>}
           * @private
           */
          function composeEasingObject(fromTweenParams, easing) {
            var composedEasing = {};
            var typeofEasing = typeof easing === "undefined" ? "undefined" : _typeof(easing);

            if (typeofEasing === 'string' || typeofEasing === 'function') {
              each(fromTweenParams, function (prop) {
                composedEasing[prop] = easing;
              });
            } else {
              each(fromTweenParams, function (prop) {
                if (!composedEasing[prop]) {
                  composedEasing[prop] = easing[prop] || DEFAULT_EASING;
                }
              });
            }

            return composedEasing;
          }

          /**
           * Tweenable constructor.
           * @class Tweenable
           * @param {Object=} opt_initialState The values that the initial tween should
           * start at if a `from` object is not provided to `{{#crossLink
           * "Tweenable/tween:method"}}{{/crossLink}}` or `{{#crossLink
           * "Tweenable/setConfig:method"}}{{/crossLink}}`.
           * @param {Object=} opt_config Configuration object to be passed to
           * `{{#crossLink "Tweenable/setConfig:method"}}{{/crossLink}}`.
           * @module Tweenable
           * @constructor
           */
          function Tweenable(opt_initialState, opt_config) {
            this._currentState = opt_initialState || {};
            this._configured = false;
            this._scheduleFunction = DEFAULT_SCHEDULE_FUNCTION;

            // To prevent unnecessary calls to setConfig do not set default
            // configuration here.  Only set default configuration immediately before
            // tweening if none has been set.
            if (typeof opt_config !== 'undefined') {
              this.setConfig(opt_config);
            }
          }

          /**
           * Configure and start a tween.
           * @method tween
           * @param {Object=} opt_config Configuration object to be passed to
           * `{{#crossLink "Tweenable/setConfig:method"}}{{/crossLink}}`.
           * @chainable
           */
          Tweenable.prototype.tween = function (opt_config) {
            if (this._isTweening) {
              return this;
            }

            // Only set default config if no configuration has been set previously and
            // none is provided now.
            if (opt_config !== undefined || !this._configured) {
              this.setConfig(opt_config);
            }

            this._timestamp = now();
            this._start(this.get(), this._attachment);
            return this.resume();
          };

          /**
           * Configure a tween that will start at some point in the future.
           *
           * @method setConfig
           * @param {Object} config The following values are valid:
           * - __from__ (_Object=_): Starting position.  If omitted, `{{#crossLink
           *   "Tweenable/get:method"}}get(){{/crossLink}}` is used.
           * - __to__ (_Object=_): Ending position.
           * - __duration__ (_number=_): How many milliseconds to animate for.
           * - __delay__ (_delay=_): How many milliseconds to wait before starting the
           *   tween.
           * - __start__ (_Function(Object, *)_): Function to execute when the tween
           *   begins.  Receives the state of the tween as the first parameter and
           *   `attachment` as the second parameter.
           * - __step__ (_Function(Object, *, number)_): Function to execute on every
           *   tick.  Receives `{{#crossLink
           *   "Tweenable/get:method"}}get(){{/crossLink}}` as the first parameter,
           *   `attachment` as the second parameter, and the time elapsed since the
           *   start of the tween as the third. This function is not called on the
           *   final step of the animation, but `finish` is.
           * - __finish__ (_Function(Object, *)_): Function to execute upon tween
           *   completion.  Receives the state of the tween as the first parameter and
           *   `attachment` as the second parameter.
           * - __easing__ (_Object.<string|Function>|string|Function=_): Easing curve
           *   name(s) or function(s) to use for the tween.
           * - __attachment__ (_*_): Cached value that is passed to the
           *   `step`/`start`/`finish` methods.
           * @chainable
           */
          Tweenable.prototype.setConfig = function (config) {
            config = config || {};
            this._configured = true;

            // Attach something to this Tweenable instance (e.g.: a DOM element, an
            // object, a string, etc.);
            this._attachment = config.attachment;

            // Init the internal state
            this._pausedAtTime = null;
            this._scheduleId = null;
            this._delay = config.delay || 0;
            this._start = config.start || noop;
            this._step = config.step || noop;
            this._finish = config.finish || noop;
            this._duration = config.duration || DEFAULT_DURATION;
            this._currentState = shallowCopy({}, config.from) || this.get();
            this._originalState = this.get();
            this._targetState = shallowCopy({}, config.to) || this.get();

            var self = this;
            this._timeoutHandler = function () {
              timeoutHandler(self, self._timestamp, self._delay, self._duration, self._currentState, self._originalState, self._targetState, self._easing, self._step, self._scheduleFunction);
            };

            // Aliases used below
            var currentState = this._currentState;
            var targetState = this._targetState;

            // Ensure that there is always something to tween to.
            defaults(targetState, currentState);

            this._easing = composeEasingObject(currentState, config.easing || DEFAULT_EASING);

            this._filterArgs = [currentState, this._originalState, targetState, this._easing];

            applyFilter(this, 'tweenCreated');
            return this;
          };

          /**
           * @method get
           * @return {Object} The current state.
           */
          Tweenable.prototype.get = function () {
            return shallowCopy({}, this._currentState);
          };

          /**
           * @method set
           * @param {Object} state The current state.
           */
          Tweenable.prototype.set = function (state) {
            this._currentState = state;
          };

          /**
           * Pause a tween.  Paused tweens can be resumed from the point at which they
           * were paused.  This is different from `{{#crossLink
           * "Tweenable/stop:method"}}{{/crossLink}}`, as that method
           * causes a tween to start over when it is resumed.
           * @method pause
           * @chainable
           */
          Tweenable.prototype.pause = function () {
            this._pausedAtTime = now();
            this._isPaused = true;
            return this;
          };

          /**
           * Resume a paused tween.
           * @method resume
           * @chainable
           */
          Tweenable.prototype.resume = function () {
            if (this._isPaused) {
              this._timestamp += now() - this._pausedAtTime;
            }

            this._isPaused = false;
            this._isTweening = true;

            this._timeoutHandler();

            return this;
          };

          /**
           * Move the state of the animation to a specific point in the tween's
           * timeline.  If the animation is not running, this will cause the `step`
           * handlers to be called.
           * @method seek
           * @param {millisecond} millisecond The millisecond of the animation to seek
           * to.  This must not be less than `0`.
           * @chainable
           */
          Tweenable.prototype.seek = function (millisecond) {
            millisecond = Math.max(millisecond, 0);
            var currentTime = now();

            if (this._timestamp + millisecond === 0) {
              return this;
            }

            this._timestamp = currentTime - millisecond;

            if (!this.isPlaying()) {
              this._isTweening = true;
              this._isPaused = false;

              // If the animation is not running, call timeoutHandler to make sure that
              // any step handlers are run.
              timeoutHandler(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, currentTime);

              this.pause();
            }

            return this;
          };

          /**
           * Stops and cancels a tween.
           * @param {boolean=} gotoEnd If `false` or omitted, the tween just stops at
           * its current state, and the `finish` handler is not invoked.  If `true`,
           * the tweened object's values are instantly set to the target values, and
           * `finish` is invoked.
           * @method stop
           * @chainable
           */
          Tweenable.prototype.stop = function (gotoEnd) {
            this._isTweening = false;
            this._isPaused = false;
            this._timeoutHandler = noop;

            (root.cancelAnimationFrame || root.webkitCancelAnimationFrame || root.oCancelAnimationFrame || root.msCancelAnimationFrame || root.mozCancelRequestAnimationFrame || root.clearTimeout)(this._scheduleId);

            if (gotoEnd) {
              applyFilter(this, 'beforeTween');
              tweenProps(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing);
              applyFilter(this, 'afterTween');
              applyFilter(this, 'afterTweenEnd');
              this._finish.call(this, this._currentState, this._attachment);
            }

            return this;
          };

          /**
           * @method isPlaying
           * @return {boolean} Whether or not a tween is running.
           */
          Tweenable.prototype.isPlaying = function () {
            return this._isTweening && !this._isPaused;
          };

          /**
           * Set a custom schedule function.
           *
           * If a custom function is not set,
           * [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame)
           * is used if available, otherwise
           * [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/Window.setTimeout)
           * is used.
           * @method setScheduleFunction
           * @param {Function(Function,number)} scheduleFunction The function to be
           * used to schedule the next frame to be rendered.
           */
          Tweenable.prototype.setScheduleFunction = function (scheduleFunction) {
            this._scheduleFunction = scheduleFunction;
          };

          /**
           * `delete` all "own" properties.  Call this when the `Tweenable` instance
           * is no longer needed to free memory.
           * @method dispose
           */
          Tweenable.prototype.dispose = function () {
            var prop;
            for (prop in this) {
              if (this.hasOwnProperty(prop)) {
                delete this[prop];
              }
            }
          };

          /**
           * Filters are used for transforming the properties of a tween at various
           * points in a Tweenable's life cycle.  See the README for more info on this.
           * @private
           */
          Tweenable.prototype.filter = {};

          /**
           * This object contains all of the tweens available to Shifty.  It is
           * extensible - simply attach properties to the `Tweenable.prototype.formula`
           * Object following the same format as `linear`.
           *
           * `pos` should be a normalized `number` (between 0 and 1).
           * @property formula
           * @type {Object(function)}
           */
          Tweenable.prototype.formula = {
            linear: function linear(pos) {
              return pos;
            }
          };

          formula = Tweenable.prototype.formula;

          shallowCopy(Tweenable, {
            'now': now,
            'each': each,
            'tweenProps': tweenProps,
            'tweenProp': tweenProp,
            'applyFilter': applyFilter,
            'shallowCopy': shallowCopy,
            'defaults': defaults,
            'composeEasingObject': composeEasingObject
          });

          // `root` is provided in the intro/outro files.

          // A hook used for unit testing.
          if (typeof SHIFTY_DEBUG_NOW === 'function') {
            root.timeoutHandler = timeoutHandler;
          }

          // Bootstrap Tweenable appropriately for the environment.
          if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
            // CommonJS
            module.exports = Tweenable;
          } else if (typeof define === 'function' && define.amd) {
            // AMD
            define(function () {
              return Tweenable;
            });
          } else if (typeof root.Tweenable === 'undefined') {
            // Browser: Make `Tweenable` globally accessible.
            root.Tweenable = Tweenable;
          }

          return Tweenable;
        }();

        /*!
         * All equations are adapted from Thomas Fuchs'
         * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
         *
         * Based on Easing Equations (c) 2003 [Robert
         * Penner](http://www.robertpenner.com/), all rights reserved. This work is
         * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
         */

        /*!
         *  TERMS OF USE - EASING EQUATIONS
         *  Open source under the BSD License.
         *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
         */

        ;(function () {

          Tweenable.shallowCopy(Tweenable.prototype.formula, {
            easeInQuad: function easeInQuad(pos) {
              return Math.pow(pos, 2);
            },

            easeOutQuad: function easeOutQuad(pos) {
              return -(Math.pow(pos - 1, 2) - 1);
            },

            easeInOutQuad: function easeInOutQuad(pos) {
              if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 2);
              }
              return -0.5 * ((pos -= 2) * pos - 2);
            },

            easeInCubic: function easeInCubic(pos) {
              return Math.pow(pos, 3);
            },

            easeOutCubic: function easeOutCubic(pos) {
              return Math.pow(pos - 1, 3) + 1;
            },

            easeInOutCubic: function easeInOutCubic(pos) {
              if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 3);
              }
              return 0.5 * (Math.pow(pos - 2, 3) + 2);
            },

            easeInQuart: function easeInQuart(pos) {
              return Math.pow(pos, 4);
            },

            easeOutQuart: function easeOutQuart(pos) {
              return -(Math.pow(pos - 1, 4) - 1);
            },

            easeInOutQuart: function easeInOutQuart(pos) {
              if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 4);
              }
              return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
            },

            easeInQuint: function easeInQuint(pos) {
              return Math.pow(pos, 5);
            },

            easeOutQuint: function easeOutQuint(pos) {
              return Math.pow(pos - 1, 5) + 1;
            },

            easeInOutQuint: function easeInOutQuint(pos) {
              if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 5);
              }
              return 0.5 * (Math.pow(pos - 2, 5) + 2);
            },

            easeInSine: function easeInSine(pos) {
              return -Math.cos(pos * (Math.PI / 2)) + 1;
            },

            easeOutSine: function easeOutSine(pos) {
              return Math.sin(pos * (Math.PI / 2));
            },

            easeInOutSine: function easeInOutSine(pos) {
              return -0.5 * (Math.cos(Math.PI * pos) - 1);
            },

            easeInExpo: function easeInExpo(pos) {
              return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
            },

            easeOutExpo: function easeOutExpo(pos) {
              return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
            },

            easeInOutExpo: function easeInOutExpo(pos) {
              if (pos === 0) {
                return 0;
              }
              if (pos === 1) {
                return 1;
              }
              if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(2, 10 * (pos - 1));
              }
              return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
            },

            easeInCirc: function easeInCirc(pos) {
              return -(Math.sqrt(1 - pos * pos) - 1);
            },

            easeOutCirc: function easeOutCirc(pos) {
              return Math.sqrt(1 - Math.pow(pos - 1, 2));
            },

            easeInOutCirc: function easeInOutCirc(pos) {
              if ((pos /= 0.5) < 1) {
                return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
              }
              return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
            },

            easeOutBounce: function easeOutBounce(pos) {
              if (pos < 1 / 2.75) {
                return 7.5625 * pos * pos;
              } else if (pos < 2 / 2.75) {
                return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
              } else if (pos < 2.5 / 2.75) {
                return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
              } else {
                return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
              }
            },

            easeInBack: function easeInBack(pos) {
              var s = 1.70158;
              return pos * pos * ((s + 1) * pos - s);
            },

            easeOutBack: function easeOutBack(pos) {
              var s = 1.70158;
              return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
            },

            easeInOutBack: function easeInOutBack(pos) {
              var s = 1.70158;
              if ((pos /= 0.5) < 1) {
                return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
              }
              return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
            },

            elastic: function elastic(pos) {
              // jshint maxlen:90
              return -1 * Math.pow(4, -8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
            },

            swingFromTo: function swingFromTo(pos) {
              var s = 1.70158;
              return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
            },

            swingFrom: function swingFrom(pos) {
              var s = 1.70158;
              return pos * pos * ((s + 1) * pos - s);
            },

            swingTo: function swingTo(pos) {
              var s = 1.70158;
              return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
            },

            bounce: function bounce(pos) {
              if (pos < 1 / 2.75) {
                return 7.5625 * pos * pos;
              } else if (pos < 2 / 2.75) {
                return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
              } else if (pos < 2.5 / 2.75) {
                return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
              } else {
                return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
              }
            },

            bouncePast: function bouncePast(pos) {
              if (pos < 1 / 2.75) {
                return 7.5625 * pos * pos;
              } else if (pos < 2 / 2.75) {
                return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
              } else if (pos < 2.5 / 2.75) {
                return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
              } else {
                return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
              }
            },

            easeFromTo: function easeFromTo(pos) {
              if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 4);
              }
              return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
            },

            easeFrom: function easeFrom(pos) {
              return Math.pow(pos, 4);
            },

            easeTo: function easeTo(pos) {
              return Math.pow(pos, 0.25);
            }
          });
        })();

        // jshint maxlen:100
        /**
         * The Bezier magic in this file is adapted/copied almost wholesale from
         * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/cubic-bezier.js),
         * which was adapted from Apple code (which probably came from
         * [here](http://opensource.apple.com/source/WebCore/WebCore-955.66/platform/graphics/UnitBezier.h)).
         * Special thanks to Apple and Thomas Fuchs for much of this code.
         */

        /**
         *  Copyright (c) 2006 Apple Computer, Inc. All rights reserved.
         *
         *  Redistribution and use in source and binary forms, with or without
         *  modification, are permitted provided that the following conditions are met:
         *
         *  1. Redistributions of source code must retain the above copyright notice,
         *  this list of conditions and the following disclaimer.
         *
         *  2. Redistributions in binary form must reproduce the above copyright notice,
         *  this list of conditions and the following disclaimer in the documentation
         *  and/or other materials provided with the distribution.
         *
         *  3. Neither the name of the copyright holder(s) nor the names of any
         *  contributors may be used to endorse or promote products derived from
         *  this software without specific prior written permission.
         *
         *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
         *  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
         *  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
         *  ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
         *  LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
         *  CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
         *  SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
         *  INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
         *  CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
         *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
         *  POSSIBILITY OF SUCH DAMAGE.
         */
        ;(function () {
          // port of webkit cubic bezier handling by http://www.netzgesta.de/dev/
          function cubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
            var ax = 0,
                bx = 0,
                cx = 0,
                ay = 0,
                by = 0,
                cy = 0;
            function sampleCurveX(t) {
              return ((ax * t + bx) * t + cx) * t;
            }
            function sampleCurveY(t) {
              return ((ay * t + by) * t + cy) * t;
            }
            function sampleCurveDerivativeX(t) {
              return (3.0 * ax * t + 2.0 * bx) * t + cx;
            }
            function solveEpsilon(duration) {
              return 1.0 / (200.0 * duration);
            }
            function solve(x, epsilon) {
              return sampleCurveY(solveCurveX(x, epsilon));
            }
            function fabs(n) {
              if (n >= 0) {
                return n;
              } else {
                return 0 - n;
              }
            }
            function solveCurveX(x, epsilon) {
              var t0, t1, t2, x2, d2, i;
              for (t2 = x, i = 0; i < 8; i++) {
                x2 = sampleCurveX(t2) - x;
                if (fabs(x2) < epsilon) {
                  return t2;
                }
                d2 = sampleCurveDerivativeX(t2);
                if (fabs(d2) < 1e-6) {
                  break;
                }
                t2 = t2 - x2 / d2;
              }
              t0 = 0.0;
              t1 = 1.0;
              t2 = x;
              if (t2 < t0) {
                return t0;
              }
              if (t2 > t1) {
                return t1;
              }
              while (t0 < t1) {
                x2 = sampleCurveX(t2);
                if (fabs(x2 - x) < epsilon) {
                  return t2;
                }
                if (x > x2) {
                  t0 = t2;
                } else {
                  t1 = t2;
                }
                t2 = (t1 - t0) * 0.5 + t0;
              }
              return t2; // Failure.
            }
            cx = 3.0 * p1x;
            bx = 3.0 * (p2x - p1x) - cx;
            ax = 1.0 - cx - bx;
            cy = 3.0 * p1y;
            by = 3.0 * (p2y - p1y) - cy;
            ay = 1.0 - cy - by;
            return solve(t, solveEpsilon(duration));
          }
          /**
           *  getCubicBezierTransition(x1, y1, x2, y2) -> Function
           *
           *  Generates a transition easing function that is compatible
           *  with WebKit's CSS transitions `-webkit-transition-timing-function`
           *  CSS property.
           *
           *  The W3C has more information about CSS3 transition timing functions:
           *  http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag
           *
           *  @param {number} x1
           *  @param {number} y1
           *  @param {number} x2
           *  @param {number} y2
           *  @return {function}
           *  @private
           */
          function getCubicBezierTransition(x1, y1, x2, y2) {
            return function (pos) {
              return cubicBezierAtTime(pos, x1, y1, x2, y2, 1);
            };
          }
          // End ported code

          /**
           * Create a Bezier easing function and attach it to `{{#crossLink
           * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}`.  This
           * function gives you total control over the easing curve.  Matthew Lein's
           * [Ceaser](http://matthewlein.com/ceaser/) is a useful tool for visualizing
           * the curves you can make with this function.
           * @method setBezierFunction
           * @param {string} name The name of the easing curve.  Overwrites the old
           * easing function on `{{#crossLink
           * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}` if it
           * exists.
           * @param {number} x1
           * @param {number} y1
           * @param {number} x2
           * @param {number} y2
           * @return {function} The easing function that was attached to
           * Tweenable.prototype.formula.
           */
          Tweenable.setBezierFunction = function (name, x1, y1, x2, y2) {
            var cubicBezierTransition = getCubicBezierTransition(x1, y1, x2, y2);
            cubicBezierTransition.displayName = name;
            cubicBezierTransition.x1 = x1;
            cubicBezierTransition.y1 = y1;
            cubicBezierTransition.x2 = x2;
            cubicBezierTransition.y2 = y2;

            return Tweenable.prototype.formula[name] = cubicBezierTransition;
          };

          /**
           * `delete` an easing function from `{{#crossLink
           * "Tweenable/formula:property"}}Tweenable#formula{{/crossLink}}`.  Be
           * careful with this method, as it `delete`s whatever easing formula matches
           * `name` (which means you can delete standard Shifty easing functions).
           * @method unsetBezierFunction
           * @param {string} name The name of the easing function to delete.
           * @return {function}
           */
          Tweenable.unsetBezierFunction = function (name) {
            delete Tweenable.prototype.formula[name];
          };
        })();

        ;(function () {

          function getInterpolatedValues(from, current, targetState, position, easing, delay) {
            return Tweenable.tweenProps(position, current, from, targetState, 1, delay, easing);
          }

          // Fake a Tweenable and patch some internals.  This approach allows us to
          // skip uneccessary processing and object recreation, cutting down on garbage
          // collection pauses.
          var mockTweenable = new Tweenable();
          mockTweenable._filterArgs = [];

          /**
           * Compute the midpoint of two Objects.  This method effectively calculates a
           * specific frame of animation that `{{#crossLink
           * "Tweenable/tween:method"}}{{/crossLink}}` does many times over the course
           * of a full tween.
           *
           *     var interpolatedValues = Tweenable.interpolate({
           *       width: '100px',
           *       opacity: 0,
           *       color: '#fff'
           *     }, {
           *       width: '200px',
           *       opacity: 1,
           *       color: '#000'
           *     }, 0.5);
           *
           *     console.log(interpolatedValues);
           *     // {opacity: 0.5, width: "150px", color: "rgb(127,127,127)"}
           *
           * @static
           * @method interpolate
           * @param {Object} from The starting values to tween from.
           * @param {Object} targetState The ending values to tween to.
           * @param {number} position The normalized position value (between `0.0` and
           * `1.0`) to interpolate the values between `from` and `to` for.  `from`
           * represents `0` and `to` represents `1`.
           * @param {Object.<string|Function>|string|Function} easing The easing
           * curve(s) to calculate the midpoint against.  You can reference any easing
           * function attached to `Tweenable.prototype.formula`, or provide the easing
           * function(s) directly.  If omitted, this defaults to "linear".
           * @param {number=} opt_delay Optional delay to pad the beginning of the
           * interpolated tween with.  This increases the range of `position` from (`0`
           * through `1`) to (`0` through `1 + opt_delay`).  So, a delay of `0.5` would
           * increase all valid values of `position` to numbers between `0` and `1.5`.
           * @return {Object}
           */
          Tweenable.interpolate = function (from, targetState, position, easing, opt_delay) {

            var current = Tweenable.shallowCopy({}, from);
            var delay = opt_delay || 0;
            var easingObject = Tweenable.composeEasingObject(from, easing || 'linear');

            mockTweenable.set({});

            // Alias and reuse the _filterArgs array instead of recreating it.
            var filterArgs = mockTweenable._filterArgs;
            filterArgs.length = 0;
            filterArgs[0] = current;
            filterArgs[1] = from;
            filterArgs[2] = targetState;
            filterArgs[3] = easingObject;

            // Any defined value transformation must be applied
            Tweenable.applyFilter(mockTweenable, 'tweenCreated');
            Tweenable.applyFilter(mockTweenable, 'beforeTween');

            var interpolatedValues = getInterpolatedValues(from, current, targetState, position, easingObject, delay);

            // Transform values back into their original format
            Tweenable.applyFilter(mockTweenable, 'afterTween');

            return interpolatedValues;
          };
        })();

        /**
         * This module adds string interpolation support to Shifty.
         *
         * The Token extension allows Shifty to tween numbers inside of strings.  Among
         * other things, this allows you to animate CSS properties.  For example, you
         * can do this:
         *
         *     var tweenable = new Tweenable();
         *     tweenable.tween({
         *       from: { transform: 'translateX(45px)' },
         *       to: { transform: 'translateX(90xp)' }
         *     });
         *
         * `translateX(45)` will be tweened to `translateX(90)`.  To demonstrate:
         *
         *     var tweenable = new Tweenable();
         *     tweenable.tween({
         *       from: { transform: 'translateX(45px)' },
         *       to: { transform: 'translateX(90px)' },
         *       step: function (state) {
         *         console.log(state.transform);
         *       }
         *     });
         *
         * The above snippet will log something like this in the console:
         *
         *     translateX(60.3px)
         *     ...
         *     translateX(76.05px)
         *     ...
         *     translateX(90px)
         *
         * Another use for this is animating colors:
         *
         *     var tweenable = new Tweenable();
         *     tweenable.tween({
         *       from: { color: 'rgb(0,255,0)' },
         *       to: { color: 'rgb(255,0,255)' },
         *       step: function (state) {
         *         console.log(state.color);
         *       }
         *     });
         *
         * The above snippet will log something like this:
         *
         *     rgb(84,170,84)
         *     ...
         *     rgb(170,84,170)
         *     ...
         *     rgb(255,0,255)
         *
         * This extension also supports hexadecimal colors, in both long (`#ff00ff`)
         * and short (`#f0f`) forms.  Be aware that hexadecimal input values will be
         * converted into the equivalent RGB output values.  This is done to optimize
         * for performance.
         *
         *     var tweenable = new Tweenable();
         *     tweenable.tween({
         *       from: { color: '#0f0' },
         *       to: { color: '#f0f' },
         *       step: function (state) {
         *         console.log(state.color);
         *       }
         *     });
         *
         * This snippet will generate the same output as the one before it because
         * equivalent values were supplied (just in hexadecimal form rather than RGB):
         *
         *     rgb(84,170,84)
         *     ...
         *     rgb(170,84,170)
         *     ...
         *     rgb(255,0,255)
         *
         * ## Easing support
         *
         * Easing works somewhat differently in the Token extension.  This is because
         * some CSS properties have multiple values in them, and you might need to
         * tween each value along its own easing curve.  A basic example:
         *
         *     var tweenable = new Tweenable();
         *     tweenable.tween({
         *       from: { transform: 'translateX(0px) translateY(0px)' },
         *       to: { transform:   'translateX(100px) translateY(100px)' },
         *       easing: { transform: 'easeInQuad' },
         *       step: function (state) {
         *         console.log(state.transform);
         *       }
         *     });
         *
         * The above snippet will create values like this:
         *
         *     translateX(11.56px) translateY(11.56px)
         *     ...
         *     translateX(46.24px) translateY(46.24px)
         *     ...
         *     translateX(100px) translateY(100px)
         *
         * In this case, the values for `translateX` and `translateY` are always the
         * same for each step of the tween, because they have the same start and end
         * points and both use the same easing curve.  We can also tween `translateX`
         * and `translateY` along independent curves:
         *
         *     var tweenable = new Tweenable();
         *     tweenable.tween({
         *       from: { transform: 'translateX(0px) translateY(0px)' },
         *       to: { transform:   'translateX(100px) translateY(100px)' },
         *       easing: { transform: 'easeInQuad bounce' },
         *       step: function (state) {
         *         console.log(state.transform);
         *       }
         *     });
         *
         * The above snippet will create values like this:
         *
         *     translateX(10.89px) translateY(82.35px)
         *     ...
         *     translateX(44.89px) translateY(86.73px)
         *     ...
         *     translateX(100px) translateY(100px)
         *
         * `translateX` and `translateY` are not in sync anymore, because `easeInQuad`
         * was specified for `translateX` and `bounce` for `translateY`.  Mixing and
         * matching easing curves can make for some interesting motion in your
         * animations.
         *
         * The order of the space-separated easing curves correspond the token values
         * they apply to.  If there are more token values than easing curves listed,
         * the last easing curve listed is used.
         * @submodule Tweenable.token
         */

        // token function is defined above only so that dox-foundation sees it as
        // documentation and renders it.  It is never used, and is optimized away at
        // build time.

        ;(function (Tweenable) {

          /**
           * @typedef {{
           *   formatString: string
           *   chunkNames: Array.<string>
           * }}
           * @private
           */
          var formatManifest;

          // CONSTANTS

          var R_NUMBER_COMPONENT = /(\d|\-|\.)/;
          var R_FORMAT_CHUNKS = /([^\-0-9\.]+)/g;
          var R_UNFORMATTED_VALUES = /[0-9.\-]+/g;
          var R_RGB = new RegExp('rgb\\(' + R_UNFORMATTED_VALUES.source + /,\s*/.source + R_UNFORMATTED_VALUES.source + /,\s*/.source + R_UNFORMATTED_VALUES.source + '\\)', 'g');
          var R_RGB_PREFIX = /^.*\(/;
          var R_HEX = /#([0-9]|[a-f]){3,6}/gi;
          var VALUE_PLACEHOLDER = 'VAL';

          // HELPERS

          /**
           * @param {Array.number} rawValues
           * @param {string} prefix
           *
           * @return {Array.<string>}
           * @private
           */
          function getFormatChunksFrom(rawValues, prefix) {
            var accumulator = [];

            var rawValuesLength = rawValues.length;
            var i;

            for (i = 0; i < rawValuesLength; i++) {
              accumulator.push('_' + prefix + '_' + i);
            }

            return accumulator;
          }

          /**
           * @param {string} formattedString
           *
           * @return {string}
           * @private
           */
          function getFormatStringFrom(formattedString) {
            var chunks = formattedString.match(R_FORMAT_CHUNKS);

            if (!chunks) {
              // chunks will be null if there were no tokens to parse in
              // formattedString (for example, if formattedString is '2').  Coerce
              // chunks to be useful here.
              chunks = ['', ''];

              // If there is only one chunk, assume that the string is a number
              // followed by a token...
              // NOTE: This may be an unwise assumption.
            } else if (chunks.length === 1 ||
            // ...or if the string starts with a number component (".", "-", or a
            // digit)...
            formattedString[0].match(R_NUMBER_COMPONENT)) {
              // ...prepend an empty string here to make sure that the formatted number
              // is properly replaced by VALUE_PLACEHOLDER
              chunks.unshift('');
            }

            return chunks.join(VALUE_PLACEHOLDER);
          }

          /**
           * Convert all hex color values within a string to an rgb string.
           *
           * @param {Object} stateObject
           *
           * @return {Object} The modified obj
           * @private
           */
          function sanitizeObjectForHexProps(stateObject) {
            Tweenable.each(stateObject, function (prop) {
              var currentProp = stateObject[prop];

              if (typeof currentProp === 'string' && currentProp.match(R_HEX)) {
                stateObject[prop] = sanitizeHexChunksToRGB(currentProp);
              }
            });
          }

          /**
           * @param {string} str
           *
           * @return {string}
           * @private
           */
          function sanitizeHexChunksToRGB(str) {
            return filterStringChunks(R_HEX, str, convertHexToRGB);
          }

          /**
           * @param {string} hexString
           *
           * @return {string}
           * @private
           */
          function convertHexToRGB(hexString) {
            var rgbArr = hexToRGBArray(hexString);
            return 'rgb(' + rgbArr[0] + ',' + rgbArr[1] + ',' + rgbArr[2] + ')';
          }

          var hexToRGBArray_returnArray = [];
          /**
           * Convert a hexadecimal string to an array with three items, one each for
           * the red, blue, and green decimal values.
           *
           * @param {string} hex A hexadecimal string.
           *
           * @returns {Array.<number>} The converted Array of RGB values if `hex` is a
           * valid string, or an Array of three 0's.
           * @private
           */
          function hexToRGBArray(hex) {

            hex = hex.replace(/#/, '');

            // If the string is a shorthand three digit hex notation, normalize it to
            // the standard six digit notation
            if (hex.length === 3) {
              hex = hex.split('');
              hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }

            hexToRGBArray_returnArray[0] = hexToDec(hex.substr(0, 2));
            hexToRGBArray_returnArray[1] = hexToDec(hex.substr(2, 2));
            hexToRGBArray_returnArray[2] = hexToDec(hex.substr(4, 2));

            return hexToRGBArray_returnArray;
          }

          /**
           * Convert a base-16 number to base-10.
           *
           * @param {Number|String} hex The value to convert
           *
           * @returns {Number} The base-10 equivalent of `hex`.
           * @private
           */
          function hexToDec(hex) {
            return parseInt(hex, 16);
          }

          /**
           * Runs a filter operation on all chunks of a string that match a RegExp
           *
           * @param {RegExp} pattern
           * @param {string} unfilteredString
           * @param {function(string)} filter
           *
           * @return {string}
           * @private
           */
          function filterStringChunks(pattern, unfilteredString, filter) {
            var pattenMatches = unfilteredString.match(pattern);
            var filteredString = unfilteredString.replace(pattern, VALUE_PLACEHOLDER);

            if (pattenMatches) {
              var pattenMatchesLength = pattenMatches.length;
              var currentChunk;

              for (var i = 0; i < pattenMatchesLength; i++) {
                currentChunk = pattenMatches.shift();
                filteredString = filteredString.replace(VALUE_PLACEHOLDER, filter(currentChunk));
              }
            }

            return filteredString;
          }

          /**
           * Check for floating point values within rgb strings and rounds them.
           *
           * @param {string} formattedString
           *
           * @return {string}
           * @private
           */
          function sanitizeRGBChunks(formattedString) {
            return filterStringChunks(R_RGB, formattedString, sanitizeRGBChunk);
          }

          /**
           * @param {string} rgbChunk
           *
           * @return {string}
           * @private
           */
          function sanitizeRGBChunk(rgbChunk) {
            var numbers = rgbChunk.match(R_UNFORMATTED_VALUES);
            var numbersLength = numbers.length;
            var sanitizedString = rgbChunk.match(R_RGB_PREFIX)[0];

            for (var i = 0; i < numbersLength; i++) {
              sanitizedString += parseInt(numbers[i], 10) + ',';
            }

            sanitizedString = sanitizedString.slice(0, -1) + ')';

            return sanitizedString;
          }

          /**
           * @param {Object} stateObject
           *
           * @return {Object} An Object of formatManifests that correspond to
           * the string properties of stateObject
           * @private
           */
          function getFormatManifests(stateObject) {
            var manifestAccumulator = {};

            Tweenable.each(stateObject, function (prop) {
              var currentProp = stateObject[prop];

              if (typeof currentProp === 'string') {
                var rawValues = getValuesFrom(currentProp);

                manifestAccumulator[prop] = {
                  'formatString': getFormatStringFrom(currentProp),
                  'chunkNames': getFormatChunksFrom(rawValues, prop)
                };
              }
            });

            return manifestAccumulator;
          }

          /**
           * @param {Object} stateObject
           * @param {Object} formatManifests
           * @private
           */
          function expandFormattedProperties(stateObject, formatManifests) {
            Tweenable.each(formatManifests, function (prop) {
              var currentProp = stateObject[prop];
              var rawValues = getValuesFrom(currentProp);
              var rawValuesLength = rawValues.length;

              for (var i = 0; i < rawValuesLength; i++) {
                stateObject[formatManifests[prop].chunkNames[i]] = +rawValues[i];
              }

              delete stateObject[prop];
            });
          }

          /**
           * @param {Object} stateObject
           * @param {Object} formatManifests
           * @private
           */
          function collapseFormattedProperties(stateObject, formatManifests) {
            Tweenable.each(formatManifests, function (prop) {
              var currentProp = stateObject[prop];
              var formatChunks = extractPropertyChunks(stateObject, formatManifests[prop].chunkNames);
              var valuesList = getValuesList(formatChunks, formatManifests[prop].chunkNames);
              currentProp = getFormattedValues(formatManifests[prop].formatString, valuesList);
              stateObject[prop] = sanitizeRGBChunks(currentProp);
            });
          }

          /**
           * @param {Object} stateObject
           * @param {Array.<string>} chunkNames
           *
           * @return {Object} The extracted value chunks.
           * @private
           */
          function extractPropertyChunks(stateObject, chunkNames) {
            var extractedValues = {};
            var currentChunkName,
                chunkNamesLength = chunkNames.length;

            for (var i = 0; i < chunkNamesLength; i++) {
              currentChunkName = chunkNames[i];
              extractedValues[currentChunkName] = stateObject[currentChunkName];
              delete stateObject[currentChunkName];
            }

            return extractedValues;
          }

          var getValuesList_accumulator = [];
          /**
           * @param {Object} stateObject
           * @param {Array.<string>} chunkNames
           *
           * @return {Array.<number>}
           * @private
           */
          function getValuesList(stateObject, chunkNames) {
            getValuesList_accumulator.length = 0;
            var chunkNamesLength = chunkNames.length;

            for (var i = 0; i < chunkNamesLength; i++) {
              getValuesList_accumulator.push(stateObject[chunkNames[i]]);
            }

            return getValuesList_accumulator;
          }

          /**
           * @param {string} formatString
           * @param {Array.<number>} rawValues
           *
           * @return {string}
           * @private
           */
          function getFormattedValues(formatString, rawValues) {
            var formattedValueString = formatString;
            var rawValuesLength = rawValues.length;

            for (var i = 0; i < rawValuesLength; i++) {
              formattedValueString = formattedValueString.replace(VALUE_PLACEHOLDER, +rawValues[i].toFixed(4));
            }

            return formattedValueString;
          }

          /**
           * Note: It's the duty of the caller to convert the Array elements of the
           * return value into numbers.  This is a performance optimization.
           *
           * @param {string} formattedString
           *
           * @return {Array.<string>|null}
           * @private
           */
          function getValuesFrom(formattedString) {
            return formattedString.match(R_UNFORMATTED_VALUES);
          }

          /**
           * @param {Object} easingObject
           * @param {Object} tokenData
           * @private
           */
          function expandEasingObject(easingObject, tokenData) {
            Tweenable.each(tokenData, function (prop) {
              var currentProp = tokenData[prop];
              var chunkNames = currentProp.chunkNames;
              var chunkLength = chunkNames.length;

              var easing = easingObject[prop];
              var i;

              if (typeof easing === 'string') {
                var easingChunks = easing.split(' ');
                var lastEasingChunk = easingChunks[easingChunks.length - 1];

                for (i = 0; i < chunkLength; i++) {
                  easingObject[chunkNames[i]] = easingChunks[i] || lastEasingChunk;
                }
              } else {
                for (i = 0; i < chunkLength; i++) {
                  easingObject[chunkNames[i]] = easing;
                }
              }

              delete easingObject[prop];
            });
          }

          /**
           * @param {Object} easingObject
           * @param {Object} tokenData
           * @private
           */
          function collapseEasingObject(easingObject, tokenData) {
            Tweenable.each(tokenData, function (prop) {
              var currentProp = tokenData[prop];
              var chunkNames = currentProp.chunkNames;
              var chunkLength = chunkNames.length;

              var firstEasing = easingObject[chunkNames[0]];
              var typeofEasings = typeof firstEasing === "undefined" ? "undefined" : _typeof(firstEasing);

              if (typeofEasings === 'string') {
                var composedEasingString = '';

                for (var i = 0; i < chunkLength; i++) {
                  composedEasingString += ' ' + easingObject[chunkNames[i]];
                  delete easingObject[chunkNames[i]];
                }

                easingObject[prop] = composedEasingString.substr(1);
              } else {
                easingObject[prop] = firstEasing;
              }
            });
          }

          Tweenable.prototype.filter.token = {
            'tweenCreated': function tweenCreated(currentState, fromState, toState, easingObject) {
              sanitizeObjectForHexProps(currentState);
              sanitizeObjectForHexProps(fromState);
              sanitizeObjectForHexProps(toState);
              this._tokenData = getFormatManifests(currentState);
            },

            'beforeTween': function beforeTween(currentState, fromState, toState, easingObject) {
              expandEasingObject(easingObject, this._tokenData);
              expandFormattedProperties(currentState, this._tokenData);
              expandFormattedProperties(fromState, this._tokenData);
              expandFormattedProperties(toState, this._tokenData);
            },

            'afterTween': function afterTween(currentState, fromState, toState, easingObject) {
              collapseFormattedProperties(currentState, this._tokenData);
              collapseFormattedProperties(fromState, this._tokenData);
              collapseFormattedProperties(toState, this._tokenData);
              collapseEasingObject(easingObject, this._tokenData);
            }
          };
        })(Tweenable);
      }).call(null);
    }, {}], 2: [function (require, module, exports) {
      // Circle shaped progress bar

      var Shape = require('./shape');
      var utils = require('./utils');

      var Circle = function Circle(container, options) {
        // Use two arcs to form a circle
        // See this answer http://stackoverflow.com/a/10477334/1446092
        this._pathTemplate = 'M 50,50 m 0,-{radius}' + ' a {radius},{radius} 0 1 1 0,{2radius}' + ' a {radius},{radius} 0 1 1 0,-{2radius}';

        this.containerAspectRatio = 1;

        Shape.apply(this, arguments);
      };

      Circle.prototype = new Shape();
      Circle.prototype.constructor = Circle;

      Circle.prototype._pathString = function _pathString(opts) {
        var widthOfWider = opts.strokeWidth;
        if (opts.trailWidth && opts.trailWidth > opts.strokeWidth) {
          widthOfWider = opts.trailWidth;
        }

        var r = 50 - widthOfWider / 2;

        return utils.render(this._pathTemplate, {
          radius: r,
          '2radius': r * 2
        });
      };

      Circle.prototype._trailString = function _trailString(opts) {
        return this._pathString(opts);
      };

      module.exports = Circle;
    }, { "./shape": 7, "./utils": 8 }], 3: [function (require, module, exports) {
      // Line shaped progress bar

      var Shape = require('./shape');
      var utils = require('./utils');

      var Line = function Line(container, options) {
        this._pathTemplate = 'M 0,{center} L 100,{center}';
        Shape.apply(this, arguments);
      };

      Line.prototype = new Shape();
      Line.prototype.constructor = Line;

      Line.prototype._initializeSvg = function _initializeSvg(svg, opts) {
        svg.setAttribute('viewBox', '0 0 100 ' + opts.strokeWidth);
        svg.setAttribute('preserveAspectRatio', 'none');
      };

      Line.prototype._pathString = function _pathString(opts) {
        return utils.render(this._pathTemplate, {
          center: opts.strokeWidth / 2
        });
      };

      Line.prototype._trailString = function _trailString(opts) {
        return this._pathString(opts);
      };

      module.exports = Line;
    }, { "./shape": 7, "./utils": 8 }], 4: [function (require, module, exports) {
      module.exports = {
        // Higher level API, different shaped progress bars
        Line: require('./line'),
        Circle: require('./circle'),
        SemiCircle: require('./semicircle'),

        // Lower level API to use any SVG path
        Path: require('./path'),

        // Base-class for creating new custom shapes
        // to be in line with the API of built-in shapes
        // Undocumented.
        Shape: require('./shape'),

        // Internal utils, undocumented.
        utils: require('./utils')
      };
    }, { "./circle": 2, "./line": 3, "./path": 5, "./semicircle": 6, "./shape": 7, "./utils": 8 }], 5: [function (require, module, exports) {
      // Lower level API to animate any kind of svg path

      var Tweenable = require('shifty');
      var utils = require('./utils');

      var EASING_ALIASES = {
        easeIn: 'easeInCubic',
        easeOut: 'easeOutCubic',
        easeInOut: 'easeInOutCubic'
      };

      var Path = function Path(path, opts) {
        // Default parameters for animation
        opts = utils.extend({
          duration: 800,
          easing: 'linear',
          from: {},
          to: {},
          step: function step() {}
        }, opts);

        var element;
        if (utils.isString(path)) {
          element = document.querySelector(path);
        } else {
          element = path;
        }

        // Reveal .path as public attribute
        this.path = element;
        this._opts = opts;
        this._tweenable = null;

        // Set up the starting positions
        var length = this.path.getTotalLength();
        this.path.style.strokeDasharray = length + ' ' + length;
        this.set(0);
      };

      Path.prototype.value = function value() {
        var offset = this._getComputedDashOffset();
        var length = this.path.getTotalLength();

        var progress = 1 - offset / length;
        // Round number to prevent returning very small number like 1e-30, which
        // is practically 0
        return parseFloat(progress.toFixed(6), 10);
      };

      Path.prototype.set = function set(progress) {
        this.stop();

        this.path.style.strokeDashoffset = this._progressToOffset(progress);

        var step = this._opts.step;
        if (utils.isFunction(step)) {
          var easing = this._easing(this._opts.easing);
          var values = this._calculateTo(progress, easing);
          var reference = this._opts.shape || this;
          step(values, reference, this._opts.attachment);
        }
      };

      Path.prototype.stop = function stop() {
        this._stopTween();
        this.path.style.strokeDashoffset = this._getComputedDashOffset();
      };

      // Method introduced here:
      // http://jakearchibald.com/2013/animated-line-drawing-svg/
      Path.prototype.animate = function animate(progress, opts, cb) {
        opts = opts || {};

        if (utils.isFunction(opts)) {
          cb = opts;
          opts = {};
        }

        var passedOpts = utils.extend({}, opts);

        // Copy default opts to new object so defaults are not modified
        var defaultOpts = utils.extend({}, this._opts);
        opts = utils.extend(defaultOpts, opts);

        var shiftyEasing = this._easing(opts.easing);
        var values = this._resolveFromAndTo(progress, shiftyEasing, passedOpts);

        this.stop();

        // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating
        this.path.getBoundingClientRect();

        var offset = this._getComputedDashOffset();
        var newOffset = this._progressToOffset(progress);

        var self = this;
        this._tweenable = new Tweenable();
        this._tweenable.tween({
          from: utils.extend({ offset: offset }, values.from),
          to: utils.extend({ offset: newOffset }, values.to),
          duration: opts.duration,
          easing: shiftyEasing,
          step: function step(state) {
            self.path.style.strokeDashoffset = state.offset;
            var reference = opts.shape || self;
            opts.step(state, reference, opts.attachment);
          },
          finish: function finish(state) {
            if (utils.isFunction(cb)) {
              cb();
            }
          }
        });
      };

      Path.prototype._getComputedDashOffset = function _getComputedDashOffset() {
        var computedStyle = window.getComputedStyle(this.path, null);
        return parseFloat(computedStyle.getPropertyValue('stroke-dashoffset'), 10);
      };

      Path.prototype._progressToOffset = function _progressToOffset(progress) {
        var length = this.path.getTotalLength();
        return length - progress * length;
      };

      // Resolves from and to values for animation.
      Path.prototype._resolveFromAndTo = function _resolveFromAndTo(progress, easing, opts) {
        if (opts.from && opts.to) {
          return {
            from: opts.from,
            to: opts.to
          };
        }

        return {
          from: this._calculateFrom(easing),
          to: this._calculateTo(progress, easing)
        };
      };

      // Calculate `from` values from options passed at initialization
      Path.prototype._calculateFrom = function _calculateFrom(easing) {
        return Tweenable.interpolate(this._opts.from, this._opts.to, this.value(), easing);
      };

      // Calculate `to` values from options passed at initialization
      Path.prototype._calculateTo = function _calculateTo(progress, easing) {
        return Tweenable.interpolate(this._opts.from, this._opts.to, progress, easing);
      };

      Path.prototype._stopTween = function _stopTween() {
        if (this._tweenable !== null) {
          this._tweenable.stop();
          this._tweenable = null;
        }
      };

      Path.prototype._easing = function _easing(easing) {
        if (EASING_ALIASES.hasOwnProperty(easing)) {
          return EASING_ALIASES[easing];
        }

        return easing;
      };

      module.exports = Path;
    }, { "./utils": 8, "shifty": 1 }], 6: [function (require, module, exports) {
      // Semi-SemiCircle shaped progress bar

      var Shape = require('./shape');
      var Circle = require('./circle');
      var utils = require('./utils');

      var SemiCircle = function SemiCircle(container, options) {
        // Use one arc to form a SemiCircle
        // See this answer http://stackoverflow.com/a/10477334/1446092
        this._pathTemplate = 'M 50,50 m -{radius},0' + ' a {radius},{radius} 0 1 1 {2radius},0';

        this.containerAspectRatio = 2;

        Shape.apply(this, arguments);
      };

      SemiCircle.prototype = new Shape();
      SemiCircle.prototype.constructor = SemiCircle;

      SemiCircle.prototype._initializeSvg = function _initializeSvg(svg, opts) {
        svg.setAttribute('viewBox', '0 0 100 50');
      };

      SemiCircle.prototype._initializeTextContainer = function _initializeTextContainer(opts, container, textContainer) {
        if (opts.text.style) {
          // Reset top style
          textContainer.style.top = 'auto';
          textContainer.style.bottom = '0';

          if (opts.text.alignToBottom) {
            utils.setStyle(textContainer, 'transform', 'translate(-50%, 0)');
          } else {
            utils.setStyle(textContainer, 'transform', 'translate(-50%, 50%)');
          }
        }
      };

      // Share functionality with Circle, just have different path
      SemiCircle.prototype._pathString = Circle.prototype._pathString;
      SemiCircle.prototype._trailString = Circle.prototype._trailString;

      module.exports = SemiCircle;
    }, { "./circle": 2, "./shape": 7, "./utils": 8 }], 7: [function (require, module, exports) {
      // Base object for different progress bar shapes

      var Path = require('./path');
      var utils = require('./utils');

      var DESTROYED_ERROR = 'Object is destroyed';

      var Shape = function Shape(container, opts) {
        // Throw a better error if progress bars are not initialized with `new`
        // keyword
        if (!(this instanceof Shape)) {
          throw new Error('Constructor was called without new keyword');
        }

        // Prevent calling constructor without parameters so inheritance
        // works correctly. To understand, this is how Shape is inherited:
        //
        //   Line.prototype = new Shape();
        //
        // We just want to set the prototype for Line.
        if (arguments.length === 0) {
          return;
        }

        // Default parameters for progress bar creation
        this._opts = utils.extend({
          color: '#555',
          strokeWidth: 1.0,
          trailColor: null,
          trailWidth: null,
          fill: null,
          text: {
            style: {
              color: null,
              position: 'absolute',
              left: '50%',
              top: '50%',
              padding: 0,
              margin: 0,
              transform: {
                prefix: true,
                value: 'translate(-50%, -50%)'
              }
            },
            autoStyleContainer: true,
            alignToBottom: true,
            value: '',
            className: 'progressbar-text'
          },
          svgStyle: {
            display: 'block',
            width: '100%'
          }
        }, opts, true); // Use recursive extend

        // If user specifies e.g. svgStyle or text style, the whole object
        // should replace the defaults to make working with styles easier
        if (utils.isObject(opts) && opts.svgStyle !== undefined) {
          this._opts.svgStyle = opts.svgStyle;
        }
        if (utils.isObject(opts) && utils.isObject(opts.text) && opts.text.style !== undefined) {
          this._opts.text.style = opts.text.style;
        }

        var svgView = this._createSvgView(this._opts);

        var element;
        if (utils.isString(container)) {
          element = document.querySelector(container);
        } else {
          element = container;
        }

        if (!element) {
          throw new Error('Container does not exist: ' + container);
        }

        this._container = element;
        this._container.appendChild(svgView.svg);
        this._warnContainerAspectRatio(this._container);

        if (this._opts.svgStyle) {
          utils.setStyles(svgView.svg, this._opts.svgStyle);
        }

        // Expose public attributes before Path initialization
        this.svg = svgView.svg;
        this.path = svgView.path;
        this.trail = svgView.trail;
        this.text = null;

        var newOpts = utils.extend({
          attachment: undefined,
          shape: this
        }, this._opts);
        this._progressPath = new Path(svgView.path, newOpts);

        if (utils.isObject(this._opts.text) && this._opts.text.value) {
          this.setText(this._opts.text.value);
        }
      };

      Shape.prototype.animate = function animate(progress, opts, cb) {
        if (this._progressPath === null) {
          throw new Error(DESTROYED_ERROR);
        }

        this._progressPath.animate(progress, opts, cb);
      };

      Shape.prototype.stop = function stop() {
        if (this._progressPath === null) {
          throw new Error(DESTROYED_ERROR);
        }

        // Don't crash if stop is called inside step function
        if (this._progressPath === undefined) {
          return;
        }

        this._progressPath.stop();
      };

      Shape.prototype.destroy = function destroy() {
        if (this._progressPath === null) {
          throw new Error(DESTROYED_ERROR);
        }

        this.stop();
        this.svg.parentNode.removeChild(this.svg);
        this.svg = null;
        this.path = null;
        this.trail = null;
        this._progressPath = null;

        if (this.text !== null) {
          this.text.parentNode.removeChild(this.text);
          this.text = null;
        }
      };

      Shape.prototype.set = function set(progress) {
        if (this._progressPath === null) {
          throw new Error(DESTROYED_ERROR);
        }

        this._progressPath.set(progress);
      };

      Shape.prototype.value = function value() {
        if (this._progressPath === null) {
          throw new Error(DESTROYED_ERROR);
        }

        if (this._progressPath === undefined) {
          return 0;
        }

        return this._progressPath.value();
      };

      Shape.prototype.setText = function setText(newText) {
        if (this._progressPath === null) {
          throw new Error(DESTROYED_ERROR);
        }

        if (this.text === null) {
          // Create new text node
          this.text = this._createTextContainer(this._opts, this._container);
          this._container.appendChild(this.text);
        }

        // Remove previous text and add new
        if (utils.isObject(newText)) {
          utils.removeChildren(this.text);
          this.text.appendChild(newText);
        } else {
          this.text.innerHTML = newText;
        }
      };

      Shape.prototype._createSvgView = function _createSvgView(opts) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this._initializeSvg(svg, opts);

        var trailPath = null;
        // Each option listed in the if condition are 'triggers' for creating
        // the trail path
        if (opts.trailColor || opts.trailWidth) {
          trailPath = this._createTrail(opts);
          svg.appendChild(trailPath);
        }

        var path = this._createPath(opts);
        svg.appendChild(path);

        return {
          svg: svg,
          path: path,
          trail: trailPath
        };
      };

      Shape.prototype._initializeSvg = function _initializeSvg(svg, opts) {
        svg.setAttribute('viewBox', '0 0 100 100');
      };

      Shape.prototype._createPath = function _createPath(opts) {
        var pathString = this._pathString(opts);
        return this._createPathElement(pathString, opts);
      };

      Shape.prototype._createTrail = function _createTrail(opts) {
        // Create path string with original passed options
        var pathString = this._trailString(opts);

        // Prevent modifying original
        var newOpts = utils.extend({}, opts);

        // Defaults for parameters which modify trail path
        if (!newOpts.trailColor) {
          newOpts.trailColor = '#eee';
        }
        if (!newOpts.trailWidth) {
          newOpts.trailWidth = newOpts.strokeWidth;
        }

        newOpts.color = newOpts.trailColor;
        newOpts.strokeWidth = newOpts.trailWidth;

        // When trail path is set, fill must be set for it instead of the
        // actual path to prevent trail stroke from clipping
        newOpts.fill = null;

        return this._createPathElement(pathString, newOpts);
      };

      Shape.prototype._createPathElement = function _createPathElement(pathString, opts) {
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathString);
        path.setAttribute('stroke', opts.color);
        path.setAttribute('stroke-width', opts.strokeWidth);

        if (opts.fill) {
          path.setAttribute('fill', opts.fill);
        } else {
          path.setAttribute('fill-opacity', '0');
        }

        return path;
      };

      Shape.prototype._createTextContainer = function _createTextContainer(opts, container) {
        var textContainer = document.createElement('div');
        textContainer.className = opts.text.className;

        var textStyle = opts.text.style;
        if (textStyle) {
          if (opts.text.autoStyleContainer) {
            container.style.position = 'relative';
          }

          utils.setStyles(textContainer, textStyle);
          // Default text color to progress bar's color
          if (!textStyle.color) {
            textContainer.style.color = opts.color;
          }
        }

        this._initializeTextContainer(opts, container, textContainer);
        return textContainer;
      };

      // Give custom shapes possibility to modify text element
      Shape.prototype._initializeTextContainer = function (opts, container, element) {
        // By default, no-op
        // Custom shapes should respect API options, such as text.style
      };

      Shape.prototype._pathString = function _pathString(opts) {
        throw new Error('Override this function for each progress bar');
      };

      Shape.prototype._trailString = function _trailString(opts) {
        throw new Error('Override this function for each progress bar');
      };

      Shape.prototype._warnContainerAspectRatio = function _warnContainerAspectRatio(container) {
        if (!this.containerAspectRatio) {
          return;
        }

        var computedStyle = window.getComputedStyle(container, null);
        var width = parseFloat(computedStyle.getPropertyValue('width'), 10);
        var height = parseFloat(computedStyle.getPropertyValue('height'), 10);
        if (!utils.floatEquals(this.containerAspectRatio, width / height)) {
          console.warn('Incorrect aspect ratio of container', this._container, 'detected:', computedStyle.getPropertyValue('width') + '(width)', '/', computedStyle.getPropertyValue('height') + '(height)', '=', width / height);

          console.warn('Aspect ratio of should be', this.containerAspectRatio);
        }
      };

      module.exports = Shape;
    }, { "./path": 5, "./utils": 8 }], 8: [function (require, module, exports) {
      // Utility functions

      var PREFIXES = 'Webkit Moz O ms'.split(' ');
      var FLOAT_COMPARISON_EPSILON = 0.001;

      // Copy all attributes from source object to destination object.
      // destination object is mutated.
      function extend(destination, source, recursive) {
        destination = destination || {};
        source = source || {};
        recursive = recursive || false;

        for (var attrName in source) {
          if (source.hasOwnProperty(attrName)) {
            var destVal = destination[attrName];
            var sourceVal = source[attrName];
            if (recursive && isObject(destVal) && isObject(sourceVal)) {
              destination[attrName] = extend(destVal, sourceVal, recursive);
            } else {
              destination[attrName] = sourceVal;
            }
          }
        }

        return destination;
      }

      // Renders templates with given variables. Variables must be surrounded with
      // braces without any spaces, e.g. {variable}
      // All instances of variable placeholders will be replaced with given content
      // Example:
      // render('Hello, {message}!', {message: 'world'})
      function render(template, vars) {
        var rendered = template;

        for (var key in vars) {
          if (vars.hasOwnProperty(key)) {
            var val = vars[key];
            var regExpString = '\\{' + key + '\\}';
            var regExp = new RegExp(regExpString, 'g');

            rendered = rendered.replace(regExp, val);
          }
        }

        return rendered;
      }

      function setStyle(element, style, value) {
        var elStyle = element.style; // cache for performance

        for (var i = 0; i < PREFIXES.length; ++i) {
          var prefix = PREFIXES[i];
          elStyle[prefix + capitalize(style)] = value;
        }

        elStyle[style] = value;
      }

      function setStyles(element, styles) {
        forEachObject(styles, function (styleValue, styleName) {
          // Allow disabling some individual styles by setting them
          // to null or undefined
          if (styleValue === null || styleValue === undefined) {
            return;
          }

          // If style's value is {prefix: true, value: '50%'},
          // Set also browser prefixed styles
          if (isObject(styleValue) && styleValue.prefix === true) {
            setStyle(element, styleName, styleValue.value);
          } else {
            element.style[styleName] = styleValue;
          }
        });
      }

      function capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      }

      function isString(obj) {
        return typeof obj === 'string' || obj instanceof String;
      }

      function isFunction(obj) {
        return typeof obj === 'function';
      }

      function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
      }

      // Returns true if `obj` is object as in {a: 1, b: 2}, not if it's function or
      // array
      function isObject(obj) {
        if (isArray(obj)) {
          return false;
        }

        var type = typeof obj === "undefined" ? "undefined" : _typeof(obj);
        return type === 'object' && !!obj;
      }

      function forEachObject(object, callback) {
        for (var key in object) {
          if (object.hasOwnProperty(key)) {
            var val = object[key];
            callback(val, key);
          }
        }
      }

      function floatEquals(a, b) {
        return Math.abs(a - b) < FLOAT_COMPARISON_EPSILON;
      }

      // https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
      function removeChildren(el) {
        while (el.firstChild) {
          el.removeChild(el.firstChild);
        }
      }

      module.exports = {
        extend: extend,
        render: render,
        setStyle: setStyle,
        setStyles: setStyles,
        capitalize: capitalize,
        isString: isString,
        isFunction: isFunction,
        isObject: isObject,
        forEachObject: forEachObject,
        floatEquals: floatEquals,
        removeChildren: removeChildren
      };
    }, {}] }, {}, [4])(4);
});

/***/ })
/******/ ]);