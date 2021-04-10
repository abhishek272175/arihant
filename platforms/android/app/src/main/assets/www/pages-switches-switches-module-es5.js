function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-switches-switches-module"], {
  /***/
  "./node_modules/@jaames/iro/dist/iro.es.js":
  /*!*************************************************!*\
    !*** ./node_modules/@jaames/iro/dist/iro.es.js ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesJaamesIroDistIroEsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /*!
     * iro.js v5.5.0
     * 2016-2021 James Daniel
     * Licensed under MPL 2.0
     * github.com/jaames/iro.js
     */


    var n,
        u,
        t,
        i,
        r,
        o,
        f = {},
        e = [],
        c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;

    function s(n, l) {
      for (var u in l) {
        n[u] = l[u];
      }

      return n;
    }

    function a(n) {
      var l = n.parentNode;
      l && l.removeChild(n);
    }

    function h(n, l, u) {
      var t,
          i,
          r,
          o,
          f = arguments;

      if (l = s({}, l), arguments.length > 3) {
        for (u = [u], t = 3; t < arguments.length; t++) {
          u.push(f[t]);
        }
      }

      if (null != u && (l.children = u), null != n && null != n.defaultProps) {
        for (i in n.defaultProps) {
          void 0 === l[i] && (l[i] = n.defaultProps[i]);
        }
      }

      return o = l.key, null != (r = l.ref) && delete l.ref, null != o && delete l.key, v(n, l, o, r);
    }

    function v(l, u, t, i) {
      var r = {
        type: l,
        props: u,
        key: t,
        ref: i,
        __k: null,
        __p: null,
        __b: 0,
        __e: null,
        l: null,
        __c: null,
        constructor: void 0
      };
      return n.vnode && n.vnode(r), r;
    }

    function d(n) {
      return n.children;
    }

    function y(n) {
      if (null == n || "boolean" == typeof n) {
        return null;
      }

      if ("string" == typeof n || "number" == typeof n) {
        return v(null, n, null, null);
      }

      if (null != n.__e || null != n.__c) {
        var l = v(n.type, n.props, n.key, null);
        return l.__e = n.__e, l;
      }

      return n;
    }

    function m(n, l) {
      this.props = n, this.context = l;
    }

    function w(n, l) {
      if (null == l) {
        return n.__p ? w(n.__p, n.__p.__k.indexOf(n) + 1) : null;
      }

      for (var u; l < n.__k.length; l++) {
        if (null != (u = n.__k[l]) && null != u.__e) {
          return u.__e;
        }
      }

      return "function" == typeof n.type ? w(n) : null;
    }

    function g(n) {
      var l, u;

      if (null != (n = n.__p) && null != n.__c) {
        for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) {
          if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
          }
        }

        return g(n);
      }
    }

    function k(l) {
      (!l.__d && (l.__d = !0) && 1 === u.push(l) || i !== n.debounceRendering) && (i = n.debounceRendering, (n.debounceRendering || t)(_));
    }

    function _() {
      var n, l, t, i, r, o, f, e;

      for (u.sort(function (n, l) {
        return l.__v.__b - n.__v.__b;
      }); n = u.pop();) {
        n.__d && (t = void 0, i = void 0, o = (r = (l = n).__v).__e, f = l.__P, e = l.u, l.u = !1, f && (t = [], i = $(f, r, s({}, r), l.__n, void 0 !== f.ownerSVGElement, null, t, e, null == o ? w(r) : o), j(t, r), i != o && g(r)));
      }
    }

    function b(n, l, u, t, i, r, o, c, s) {
      var h,
          v,
          p,
          d,
          y,
          m,
          g,
          k = u && u.__k || e,
          _ = k.length;

      if (c == f && (c = null != r ? r[0] : _ ? w(u, 0) : null), h = 0, l.__k = x(l.__k, function (u) {
        if (null != u) {
          if (u.__p = l, u.__b = l.__b + 1, null === (p = k[h]) || p && u.key == p.key && u.type === p.type) {
            k[h] = void 0;
          } else {
            for (v = 0; v < _; v++) {
              if ((p = k[v]) && u.key == p.key && u.type === p.type) {
                k[v] = void 0;
                break;
              }

              p = null;
            }
          }

          if (d = $(n, u, p = p || f, t, i, r, o, null, c, s), (v = u.ref) && p.ref != v && (g || (g = [])).push(v, u.__c || d, u), null != d) {
            if (null == m && (m = d), null != u.l) {
              d = u.l, u.l = null;
            } else if (r == p || d != c || null == d.parentNode) {
              n: if (null == c || c.parentNode !== n) {
                n.appendChild(d);
              } else {
                for (y = c, v = 0; (y = y.nextSibling) && v < _; v += 2) {
                  if (y == d) {
                    break n;
                  }
                }

                n.insertBefore(d, c);
              }

              "option" == l.type && (n.value = "");
            }

            c = d.nextSibling, "function" == typeof l.type && (l.l = d);
          }
        }

        return h++, u;
      }), l.__e = m, null != r && "function" != typeof l.type) {
        for (h = r.length; h--;) {
          null != r[h] && a(r[h]);
        }
      }

      for (h = _; h--;) {
        null != k[h] && D(k[h], k[h]);
      }

      if (g) {
        for (h = 0; h < g.length; h++) {
          A(g[h], g[++h], g[++h]);
        }
      }
    }

    function x(n, l, u) {
      if (null == u && (u = []), null == n || "boolean" == typeof n) {
        l && u.push(l(null));
      } else if (Array.isArray(n)) {
        for (var t = 0; t < n.length; t++) {
          x(n[t], l, u);
        }
      } else {
        u.push(l ? l(y(n)) : n);
      }

      return u;
    }

    function C(n, l, u, t, i) {
      var r;

      for (r in u) {
        r in l || N(n, r, null, u[r], t);
      }

      for (r in l) {
        i && "function" != typeof l[r] || "value" === r || "checked" === r || u[r] === l[r] || N(n, r, l[r], u[r], t);
      }
    }

    function P(n, l, u) {
      "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === c.test(l) ? u + "px" : null == u ? "" : u;
    }

    function N(n, l, u, t, i) {
      var r, o, f, e, c;
      if ("key" === (l = i ? "className" === l ? "class" : l : "class" === l ? "className" : l) || "children" === l) ;else if ("style" === l) {
        if (r = n.style, "string" == typeof u) {
          r.cssText = u;
        } else {
          if ("string" == typeof t && (r.cssText = "", t = null), t) {
            for (o in t) {
              u && o in u || P(r, o, "");
            }
          }

          if (u) {
            for (f in u) {
              t && u[f] === t[f] || P(r, f, u[f]);
            }
          }
        }
      } else {
        "o" === l[0] && "n" === l[1] ? (e = l !== (l = l.replace(/Capture$/, "")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (t || n.addEventListener(l, T, e), (n.t || (n.t = {}))[l] = u) : n.removeEventListener(l, T, e)) : "list" !== l && "tagName" !== l && "form" !== l && !i && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u ? n.removeAttribute(l) : n.setAttribute(l, u));
      }
    }

    function T(l) {
      return this.t[l.type](n.event ? n.event(l) : l);
    }

    function $(l, u, t, i, r, o, f, e, c, a) {
      var h,
          v,
          p,
          y,
          w,
          g,
          k,
          _,
          C,
          P,
          N = u.type;

      if (void 0 !== u.constructor) {
        return null;
      }

      (h = n.__b) && h(u);

      try {
        n: if ("function" == typeof N) {
          if (_ = u.props, C = (h = N.contextType) && i[h.__c], P = h ? C ? C.props.value : h.__p : i, t.__c ? k = (v = u.__c = t.__c).__p = v.__E : ("prototype" in N && N.prototype.render ? u.__c = v = new N(_, P) : (u.__c = v = new m(_, P), v.constructor = N, v.render = H), C && C.sub(v), v.props = _, v.state || (v.state = {}), v.context = P, v.__n = i, p = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != N.getDerivedStateFromProps && s(v.__s == v.state ? v.__s = s({}, v.__s) : v.__s, N.getDerivedStateFromProps(_, v.__s)), p) {
            null == N.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && f.push(v);
          } else {
            if (null == N.getDerivedStateFromProps && null == e && null != v.componentWillReceiveProps && v.componentWillReceiveProps(_, P), !e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(_, v.__s, P)) {
              for (v.props = _, v.state = v.__s, v.__d = !1, v.__v = u, u.__e = null != c ? c !== t.__e ? c : t.__e : null, u.__k = t.__k, h = 0; h < u.__k.length; h++) {
                u.__k[h] && (u.__k[h].__p = u);
              }

              break n;
            }

            null != v.componentWillUpdate && v.componentWillUpdate(_, v.__s, P);
          }

          for (y = v.props, w = v.state, v.context = P, v.props = _, v.state = v.__s, (h = n.__r) && h(u), v.__d = !1, v.__v = u, v.__P = l, h = v.render(v.props, v.state, v.context), u.__k = x(null != h && h.type == d && null == h.key ? h.props.children : h), null != v.getChildContext && (i = s(s({}, i), v.getChildContext())), p || null == v.getSnapshotBeforeUpdate || (g = v.getSnapshotBeforeUpdate(y, w)), b(l, u, t, i, r, o, f, c, a), v.base = u.__e; h = v.__h.pop();) {
            v.__s && (v.state = v.__s), h.call(v);
          }

          p || null == y || null == v.componentDidUpdate || v.componentDidUpdate(y, w, g), k && (v.__E = v.__p = null);
        } else {
          u.__e = z(t.__e, u, t, i, r, o, f, a);
        }

        (h = n.diffed) && h(u);
      } catch (l) {
        n.__e(l, u, t);
      }

      return u.__e;
    }

    function j(l, u) {
      for (var t; t = l.pop();) {
        try {
          t.componentDidMount();
        } catch (l) {
          n.__e(l, t.__v);
        }
      }

      n.__c && n.__c(u);
    }

    function z(n, l, u, t, i, r, o, c) {
      var s,
          a,
          h,
          v,
          p = u.props,
          d = l.props;

      if (i = "svg" === l.type || i, null == n && null != r) {
        for (s = 0; s < r.length; s++) {
          if (null != (a = r[s]) && (null === l.type ? 3 === a.nodeType : a.localName === l.type)) {
            n = a, r[s] = null;
            break;
          }
        }
      }

      if (null == n) {
        if (null === l.type) {
          return document.createTextNode(d);
        }

        n = i ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type), r = null;
      }

      return null === l.type ? p !== d && (null != r && (r[r.indexOf(n)] = null), n.data = d) : l !== u && (null != r && (r = e.slice.call(n.childNodes)), h = (p = u.props || f).dangerouslySetInnerHTML, v = d.dangerouslySetInnerHTML, c || (v || h) && (v && h && v.__html == h.__html || (n.innerHTML = v && v.__html || "")), C(n, d, p, i, c), l.__k = l.props.children, v || b(n, l, u, t, "foreignObject" !== l.type && i, r, o, f, c), c || ("value" in d && void 0 !== d.value && d.value !== n.value && (n.value = null == d.value ? "" : d.value), "checked" in d && void 0 !== d.checked && d.checked !== n.checked && (n.checked = d.checked))), n;
    }

    function A(l, u, t) {
      try {
        "function" == typeof l ? l(u) : l.current = u;
      } catch (l) {
        n.__e(l, t);
      }
    }

    function D(l, u, t) {
      var i, r, o;

      if (n.unmount && n.unmount(l), (i = l.ref) && A(i, null, u), t || "function" == typeof l.type || (t = null != (r = l.__e)), l.__e = l.l = null, null != (i = l.__c)) {
        if (i.componentWillUnmount) {
          try {
            i.componentWillUnmount();
          } catch (l) {
            n.__e(l, u);
          }
        }

        i.base = i.__P = null;
      }

      if (i = l.__k) {
        for (o = 0; o < i.length; o++) {
          i[o] && D(i[o], u, t);
        }
      }

      null != r && a(r);
    }

    function H(n, l, u) {
      return this.constructor(n, u);
    }

    function I(l, u, t) {
      var i, o, c;
      n.__p && n.__p(l, u), o = (i = t === r) ? null : t && t.__k || u.__k, l = h(d, null, [l]), c = [], $(u, i ? u.__k = l : (t || u).__k = l, o || f, f, void 0 !== u.ownerSVGElement, t && !i ? [t] : o ? null : e.slice.call(u.childNodes), c, !1, t || f, i), j(c, l);
    }

    n = {}, m.prototype.setState = function (n, l) {
      var u = this.__s !== this.state && this.__s || (this.__s = s({}, this.state));
      ("function" != typeof n || (n = n(u, this.props))) && s(u, n), null != n && this.__v && (this.u = !1, l && this.__h.push(l), k(this));
    }, m.prototype.forceUpdate = function (n) {
      this.__v && (n && this.__h.push(n), this.u = !0, k(this));
    }, m.prototype.render = d, u = [], t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, i = n.debounceRendering, n.__e = function (n, l, u) {
      for (var t; l = l.__p;) {
        if ((t = l.__c) && !t.__p) {
          try {
            if (t.constructor && null != t.constructor.getDerivedStateFromError) {
              t.setState(t.constructor.getDerivedStateFromError(n));
            } else {
              if (null == t.componentDidCatch) {
                continue;
              }

              t.componentDidCatch(n);
            }

            return k(t.__E = t);
          } catch (l) {
            n = l;
          }
        }
      }

      throw n;
    }, r = f, o = 0;

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;

        if ("value" in descriptor) {
          descriptor.writable = true;
        }

        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps);
      }

      if (staticProps) {
        _defineProperties(Constructor, staticProps);
      }

      return Constructor;
    }

    function _extends() {
      _extends = Object.assign || function (target) {
        var arguments$1 = arguments;

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments$1[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    } // Some regular expressions for rgb() and hsl() Colors are borrowed from tinyColor
    // https://github.com/bgrins/TinyColor
    // Kelvin temperature math borrowed from Neil Barlett's implementation
    // from https://github.com/neilbartlett/color-temperature
    // https://www.w3.org/TR/css3-values/#integers


    var CSS_INTEGER = '[-\\+]?\\d+%?'; // http://www.w3.org/TR/css3-values/#number-value

    var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?'; // Allow positive/negative integer/number. Don't capture the either/or, just the entire outcome

    var CSS_UNIT = '(?:' + CSS_NUMBER + ')|(?:' + CSS_INTEGER + ')'; // Parse function params
    // Parens and commas are optional, and this also allows for whitespace between numbers

    var PERMISSIVE_MATCH_3 = '[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?';
    var PERMISSIVE_MATCH_4 = '[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?'; // Regex patterns for functional color strings

    var REGEX_FUNCTIONAL_RGB = new RegExp('rgb' + PERMISSIVE_MATCH_3);
    var REGEX_FUNCTIONAL_RGBA = new RegExp('rgba' + PERMISSIVE_MATCH_4);
    var REGEX_FUNCTIONAL_HSL = new RegExp('hsl' + PERMISSIVE_MATCH_3);
    var REGEX_FUNCTIONAL_HSLA = new RegExp('hsla' + PERMISSIVE_MATCH_4); // Color string parsing regex

    var HEX_START = '^(?:#?|0x?)';
    var HEX_INT_SINGLE = '([0-9a-fA-F]{1})';
    var HEX_INT_DOUBLE = '([0-9a-fA-F]{2})';
    var REGEX_HEX_3 = new RegExp(HEX_START + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE + '$');
    var REGEX_HEX_4 = new RegExp(HEX_START + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE + HEX_INT_SINGLE + '$');
    var REGEX_HEX_6 = new RegExp(HEX_START + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE + '$');
    var REGEX_HEX_8 = new RegExp(HEX_START + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE + HEX_INT_DOUBLE + '$'); // Kelvin temperature bounds

    var KELVIN_MIN = 2000;
    var KELVIN_MAX = 40000; // Math shorthands

    var log = Math.log,
        round = Math.round,
        floor = Math.floor;
    /**
     * @desc Clamp a number between a min and max value
     * @param num - input value
     * @param min - min allowed value
     * @param max - max allowed value
     */

    function clamp(num, min, max) {
      return Math.min(Math.max(num, min), max);
    }
    /**
     * @desc Parse a css unit string - either regular int or a percentage number
     * @param str - css unit string
     * @param max - max unit value, used for calculating percentages
     */


    function parseUnit(str, max) {
      var isPercentage = str.indexOf('%') > -1;
      var num = parseFloat(str);
      return isPercentage ? max / 100 * num : num;
    }
    /**
     * @desc Parse hex str to an int
     * @param str - hex string to parse
     */


    function parseHexInt(str) {
      return parseInt(str, 16);
    }
    /**
     * @desc Convert nunber into to 2-digit hex
     * @param int - number to convert
     */


    function intToHex(_int) {
      return _int.toString(16).padStart(2, '0');
    }

    var IroColor =
    /*#__PURE__*/
    function () {
      /**
        * @constructor Color object
        * @param value - initial color value
      */
      function IroColor(value, onChange) {
        // The default Color value
        this.$ = {
          h: 0,
          s: 0,
          v: 0,
          a: 1
        };

        if (value) {
          this.set(value);
        } // The watch callback function for this Color will be stored here


        this.onChange = onChange;
        this.initialValue = _extends({}, this.$); // copy initial value
      }
      /**
        * @desc Set the Color from any valid value
        * @param value - new color value
      */


      var _proto = IroColor.prototype;

      _proto.set = function set(value) {
        if (typeof value === 'string') {
          if (/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(value)) {
            this.hexString = value;
          } else if (/^rgba?/.test(value)) {
            this.rgbString = value;
          } else if (/^hsla?/.test(value)) {
            this.hslString = value;
          }
        } else if (typeof value === 'object') {
          if (value instanceof IroColor) {
            this.hsv = value.hsv;
          } else if ('r' in value && 'g' in value && 'b' in value) {
            this.rgb = value;
          } else if ('h' in value && 's' in value && 'v' in value) {
            this.hsv = value;
          } else if ('h' in value && 's' in value && 'l' in value) {
            this.hsl = value;
          } else if ('kelvin' in value) {
            this.kelvin = value.kelvin;
          }
        } else {
          throw new Error('Invalid color value');
        }
      }
      /**
        * @desc Shortcut to set a specific channel value
        * @param format - hsv | hsl | rgb
        * @param channel - individual channel to set, for example if model = hsl, chanel = h | s | l
        * @param value - new value for the channel
      */
      ;

      _proto.setChannel = function setChannel(format, channel, value) {
        var _extends2;

        this[format] = _extends({}, this[format], (_extends2 = {}, _extends2[channel] = value, _extends2));
      }
      /**
       * @desc Reset color back to its initial value
       */
      ;

      _proto.reset = function reset() {
        this.hsva = this.initialValue;
      }
      /**
        * @desc make new Color instance with the same value as this one
      */
      ;

      _proto.clone = function clone() {
        return new IroColor(this);
      }
      /**
       * @desc remove color onChange
       */
      ;

      _proto.unbind = function unbind() {
        this.onChange = undefined;
      }
      /**
        * @desc Convert hsv object to rgb
        * @param hsv - hsv color object
      */
      ;

      IroColor.hsvToRgb = function hsvToRgb(hsv) {
        var h = hsv.h / 60;
        var s = hsv.s / 100;
        var v = hsv.v / 100;
        var i = floor(h);
        var f = h - i;
        var p = v * (1 - s);
        var q = v * (1 - f * s);
        var t = v * (1 - (1 - f) * s);
        var mod = i % 6;
        var r = [v, q, p, p, t, v][mod];
        var g = [t, v, v, q, p, p][mod];
        var b = [p, p, t, v, v, q][mod];
        return {
          r: clamp(r * 255, 0, 255),
          g: clamp(g * 255, 0, 255),
          b: clamp(b * 255, 0, 255)
        };
      }
      /**
        * @desc Convert rgb object to hsv
        * @param rgb - rgb object
      */
      ;

      IroColor.rgbToHsv = function rgbToHsv(rgb) {
        var r = rgb.r / 255;
        var g = rgb.g / 255;
        var b = rgb.b / 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var delta = max - min;
        var hue = 0;
        var value = max;
        var saturation = max === 0 ? 0 : delta / max;

        switch (max) {
          case min:
            hue = 0; // achromatic

            break;

          case r:
            hue = (g - b) / delta + (g < b ? 6 : 0);
            break;

          case g:
            hue = (b - r) / delta + 2;
            break;

          case b:
            hue = (r - g) / delta + 4;
            break;
        }

        return {
          h: hue * 60 % 360,
          s: clamp(saturation * 100, 0, 100),
          v: clamp(value * 100, 0, 100)
        };
      }
      /**
        * @desc Convert hsv object to hsl
        * @param hsv - hsv object
      */
      ;

      IroColor.hsvToHsl = function hsvToHsl(hsv) {
        var s = hsv.s / 100;
        var v = hsv.v / 100;
        var l = (2 - s) * v;
        var divisor = l <= 1 ? l : 2 - l; // Avoid division by zero when lightness is close to zero

        var saturation = divisor < 1e-9 ? 0 : s * v / divisor;
        return {
          h: hsv.h,
          s: clamp(saturation * 100, 0, 100),
          l: clamp(l * 50, 0, 100)
        };
      }
      /**
        * @desc Convert hsl object to hsv
        * @param hsl - hsl object
      */
      ;

      IroColor.hslToHsv = function hslToHsv(hsl) {
        var l = hsl.l * 2;
        var s = hsl.s * (l <= 100 ? l : 200 - l) / 100; // Avoid division by zero when l + s is near 0

        var saturation = l + s < 1e-9 ? 0 : 2 * s / (l + s);
        return {
          h: hsl.h,
          s: clamp(saturation * 100, 0, 100),
          v: clamp((l + s) / 2, 0, 100)
        };
      }
      /**
        * @desc Convert a kelvin temperature to an approx, RGB value
        * @param kelvin - kelvin temperature
      */
      ;

      IroColor.kelvinToRgb = function kelvinToRgb(kelvin) {
        var temp = kelvin / 100;
        var r, g, b;

        if (temp < 66) {
          r = 255;
          g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
          b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
        } else {
          r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
          g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
          b = 255;
        }

        return {
          r: clamp(floor(r), 0, 255),
          g: clamp(floor(g), 0, 255),
          b: clamp(floor(b), 0, 255)
        };
      }
      /**
       * @desc Convert an RGB color to an approximate kelvin temperature
       * @param kelvin - kelvin temperature
      */
      ;

      IroColor.rgbToKelvin = function rgbToKelvin(rgb) {
        var r = rgb.r,
            b = rgb.b;
        var eps = 0.4;
        var minTemp = KELVIN_MIN;
        var maxTemp = KELVIN_MAX;
        var temp;

        while (maxTemp - minTemp > eps) {
          temp = (maxTemp + minTemp) * 0.5;

          var _rgb = IroColor.kelvinToRgb(temp);

          if (_rgb.b / _rgb.r >= b / r) {
            maxTemp = temp;
          } else {
            minTemp = temp;
          }
        }

        return temp;
      };

      _createClass(IroColor, [{
        key: "hsv",
        get: function get() {
          // value is cloned to allow changes to be made to the values before passing them back
          var value = this.$;
          return {
            h: value.h,
            s: value.s,
            v: value.v
          };
        },
        set: function set(newValue) {
          var oldValue = this.$;
          newValue = _extends({}, oldValue, newValue); // If this Color is being watched for changes we need to compare the new and old values to check the difference
          // Otherwise we can just be lazy

          if (this.onChange) {
            // Compute changed values
            var changes = {
              h: false,
              v: false,
              s: false,
              a: false
            };

            for (var key in oldValue) {
              changes[key] = newValue[key] != oldValue[key];
            }

            this.$ = newValue; // If the value has changed, call hook callback

            if (changes.h || changes.s || changes.v || changes.a) {
              this.onChange(this, changes);
            }
          } else {
            this.$ = newValue;
          }
        }
      }, {
        key: "hsva",
        get: function get() {
          return _extends({}, this.$);
        },
        set: function set(value) {
          this.hsv = value;
        }
      }, {
        key: "hue",
        get: function get() {
          return this.$.h;
        },
        set: function set(value) {
          this.hsv = {
            h: value
          };
        }
      }, {
        key: "saturation",
        get: function get() {
          return this.$.s;
        },
        set: function set(value) {
          this.hsv = {
            s: value
          };
        }
      }, {
        key: "value",
        get: function get() {
          return this.$.v;
        },
        set: function set(value) {
          this.hsv = {
            v: value
          };
        }
      }, {
        key: "alpha",
        get: function get() {
          return this.$.a;
        },
        set: function set(value) {
          this.hsv = _extends({}, this.hsv, {
            a: value
          });
        }
      }, {
        key: "kelvin",
        get: function get() {
          return IroColor.rgbToKelvin(this.rgb);
        },
        set: function set(value) {
          this.rgb = IroColor.kelvinToRgb(value);
        }
      }, {
        key: "red",
        get: function get() {
          var rgb = this.rgb;
          return rgb.r;
        },
        set: function set(value) {
          this.rgb = _extends({}, this.rgb, {
            r: value
          });
        }
      }, {
        key: "green",
        get: function get() {
          var rgb = this.rgb;
          return rgb.g;
        },
        set: function set(value) {
          this.rgb = _extends({}, this.rgb, {
            g: value
          });
        }
      }, {
        key: "blue",
        get: function get() {
          var rgb = this.rgb;
          return rgb.b;
        },
        set: function set(value) {
          this.rgb = _extends({}, this.rgb, {
            b: value
          });
        }
      }, {
        key: "rgb",
        get: function get() {
          var _IroColor$hsvToRgb = IroColor.hsvToRgb(this.$),
              r = _IroColor$hsvToRgb.r,
              g = _IroColor$hsvToRgb.g,
              b = _IroColor$hsvToRgb.b;

          return {
            r: round(r),
            g: round(g),
            b: round(b)
          };
        },
        set: function set(value) {
          this.hsv = _extends({}, IroColor.rgbToHsv(value), {
            a: value.a === undefined ? 1 : value.a
          });
        }
      }, {
        key: "rgba",
        get: function get() {
          return _extends({}, this.rgb, {
            a: this.alpha
          });
        },
        set: function set(value) {
          this.rgb = value;
        }
      }, {
        key: "hsl",
        get: function get() {
          var _IroColor$hsvToHsl = IroColor.hsvToHsl(this.$),
              h = _IroColor$hsvToHsl.h,
              s = _IroColor$hsvToHsl.s,
              l = _IroColor$hsvToHsl.l;

          return {
            h: round(h),
            s: round(s),
            l: round(l)
          };
        },
        set: function set(value) {
          this.hsv = _extends({}, IroColor.hslToHsv(value), {
            a: value.a === undefined ? 1 : value.a
          });
        }
      }, {
        key: "hsla",
        get: function get() {
          return _extends({}, this.hsl, {
            a: this.alpha
          });
        },
        set: function set(value) {
          this.hsl = value;
        }
      }, {
        key: "rgbString",
        get: function get() {
          var rgb = this.rgb;
          return "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";
        },
        set: function set(value) {
          var match;
          var r,
              g,
              b,
              a = 1;

          if (match = REGEX_FUNCTIONAL_RGB.exec(value)) {
            r = parseUnit(match[1], 255);
            g = parseUnit(match[2], 255);
            b = parseUnit(match[3], 255);
          } else if (match = REGEX_FUNCTIONAL_RGBA.exec(value)) {
            r = parseUnit(match[1], 255);
            g = parseUnit(match[2], 255);
            b = parseUnit(match[3], 255);
            a = parseUnit(match[4], 1);
          }

          if (match) {
            this.rgb = {
              r: r,
              g: g,
              b: b,
              a: a
            };
          } else {
            throw new Error('Invalid rgb string');
          }
        }
      }, {
        key: "rgbaString",
        get: function get() {
          var rgba = this.rgba;
          return "rgba(" + rgba.r + ", " + rgba.g + ", " + rgba.b + ", " + rgba.a + ")";
        },
        set: function set(value) {
          this.rgbString = value;
        }
      }, {
        key: "hexString",
        get: function get() {
          var rgb = this.rgb;
          return "#" + intToHex(rgb.r) + intToHex(rgb.g) + intToHex(rgb.b);
        },
        set: function set(value) {
          var match;
          var r,
              g,
              b,
              a = 255;

          if (match = REGEX_HEX_3.exec(value)) {
            r = parseHexInt(match[1]) * 17;
            g = parseHexInt(match[2]) * 17;
            b = parseHexInt(match[3]) * 17;
          } else if (match = REGEX_HEX_4.exec(value)) {
            r = parseHexInt(match[1]) * 17;
            g = parseHexInt(match[2]) * 17;
            b = parseHexInt(match[3]) * 17;
            a = parseHexInt(match[4]) * 17;
          } else if (match = REGEX_HEX_6.exec(value)) {
            r = parseHexInt(match[1]);
            g = parseHexInt(match[2]);
            b = parseHexInt(match[3]);
          } else if (match = REGEX_HEX_8.exec(value)) {
            r = parseHexInt(match[1]);
            g = parseHexInt(match[2]);
            b = parseHexInt(match[3]);
            a = parseHexInt(match[4]);
          }

          if (match) {
            this.rgb = {
              r: r,
              g: g,
              b: b,
              a: a / 255
            };
          } else {
            throw new Error('Invalid hex string');
          }
        }
      }, {
        key: "hex8String",
        get: function get() {
          var rgba = this.rgba;
          return "#" + intToHex(rgba.r) + intToHex(rgba.g) + intToHex(rgba.b) + intToHex(floor(rgba.a * 255));
        },
        set: function set(value) {
          this.hexString = value;
        }
      }, {
        key: "hslString",
        get: function get() {
          var hsl = this.hsl;
          return "hsl(" + hsl.h + ", " + hsl.s + "%, " + hsl.l + "%)";
        },
        set: function set(value) {
          var match;
          var h,
              s,
              l,
              a = 1;

          if (match = REGEX_FUNCTIONAL_HSL.exec(value)) {
            h = parseUnit(match[1], 360);
            s = parseUnit(match[2], 100);
            l = parseUnit(match[3], 100);
          } else if (match = REGEX_FUNCTIONAL_HSLA.exec(value)) {
            h = parseUnit(match[1], 360);
            s = parseUnit(match[2], 100);
            l = parseUnit(match[3], 100);
            a = parseUnit(match[4], 1);
          }

          if (match) {
            this.hsl = {
              h: h,
              s: s,
              l: l,
              a: a
            };
          } else {
            throw new Error('Invalid hsl string');
          }
        }
      }, {
        key: "hslaString",
        get: function get() {
          var hsla = this.hsla;
          return "hsl(" + hsla.h + ", " + hsla.s + "%, " + hsla.l + "%, " + hsla.a + ")";
        },
        set: function set(value) {
          this.hslString = value;
        }
      }]);

      return IroColor;
    }();

    var sliderDefaultOptions = {
      sliderShape: 'bar',
      sliderType: 'value',
      minTemperature: 2200,
      maxTemperature: 11000
    };
    /**
     * @desc Get the bounding dimensions of the slider
     * @param props - slider props
     */

    function getSliderDimensions(props) {
      var _sliderSize;

      var width = props.width,
          sliderSize = props.sliderSize,
          borderWidth = props.borderWidth,
          handleRadius = props.handleRadius,
          padding = props.padding,
          sliderShape = props.sliderShape;
      var ishorizontal = props.layoutDirection === 'horizontal'; // automatically calculate sliderSize if its not defined

      sliderSize = (_sliderSize = sliderSize) != null ? _sliderSize : padding * 2 + handleRadius * 2;

      if (sliderShape === 'circle') {
        return {
          handleStart: props.padding + props.handleRadius,
          handleRange: width - padding * 2 - handleRadius * 2,
          width: width,
          height: width,
          cx: width / 2,
          cy: width / 2,
          radius: width / 2 - borderWidth / 2
        };
      } else {
        return {
          handleStart: sliderSize / 2,
          handleRange: width - sliderSize,
          radius: sliderSize / 2,
          x: 0,
          y: 0,
          width: ishorizontal ? sliderSize : width,
          height: ishorizontal ? width : sliderSize
        };
      }
    }
    /**
     * @desc Get the current slider value for a given color, as a percentage
     * @param props - slider props
     * @param color
     */


    function getCurrentSliderValue(props, color) {
      var hsva = color.hsva;
      var rgb = color.rgb;

      switch (props.sliderType) {
        case 'red':
          return rgb.r / 2.55;

        case 'green':
          return rgb.g / 2.55;

        case 'blue':
          return rgb.b / 2.55;

        case 'alpha':
          return hsva.a * 100;

        case 'kelvin':
          var minTemperature = props.minTemperature,
              maxTemperature = props.maxTemperature;
          var temperatureRange = maxTemperature - minTemperature;
          var percent = (color.kelvin - minTemperature) / temperatureRange * 100; // clmap percentage

          return Math.max(0, Math.min(percent, 100));

        case 'hue':
          return hsva.h /= 3.6;

        case 'saturation':
          return hsva.s;

        case 'value':
        default:
          return hsva.v;
      }
    }
    /**
     * @desc Get the current slider value from user input
     * @param props - slider props
     * @param x - global input x position
     * @param y - global input y position
     */


    function getSliderValueFromInput(props, x, y) {
      var _getSliderDimensions = getSliderDimensions(props),
          handleRange = _getSliderDimensions.handleRange,
          handleStart = _getSliderDimensions.handleStart;

      var handlePos;

      if (props.layoutDirection === 'horizontal') {
        handlePos = -1 * y + handleRange + handleStart;
      } else {
        handlePos = x - handleStart;
      } // clamp handle position


      handlePos = Math.max(Math.min(handlePos, handleRange), 0);
      var percent = Math.round(100 / handleRange * handlePos);

      switch (props.sliderType) {
        case 'kelvin':
          var minTemperature = props.minTemperature,
              maxTemperature = props.maxTemperature;
          var temperatureRange = maxTemperature - minTemperature;
          return minTemperature + temperatureRange * (percent / 100);

        case 'alpha':
          return percent / 100;

        case 'hue':
          return percent * 3.6;

        case 'red':
        case 'blue':
        case 'green':
          return percent * 2.55;

        default:
          return percent;
      }
    }
    /**
     * @desc Get the current handle position for a given color
     * @param props - slider props
     * @param color
     */


    function getSliderHandlePosition(props, color) {
      var _getSliderDimensions2 = getSliderDimensions(props),
          width = _getSliderDimensions2.width,
          height = _getSliderDimensions2.height,
          handleRange = _getSliderDimensions2.handleRange,
          handleStart = _getSliderDimensions2.handleStart;

      var ishorizontal = props.layoutDirection === 'horizontal';
      var sliderValue = getCurrentSliderValue(props, color);
      var midPoint = ishorizontal ? width / 2 : height / 2;
      var handlePos = handleStart + sliderValue / 100 * handleRange;

      if (ishorizontal) {
        handlePos = -1 * handlePos + handleRange + handleStart * 2;
      }

      return {
        x: ishorizontal ? midPoint : handlePos,
        y: ishorizontal ? handlePos : midPoint
      };
    }
    /**
     * @desc Get the gradient stops for a slider
     * @param props - slider props
     * @param color
     */


    function getSliderGradient(props, color) {
      var hsv = color.hsv;
      var rgb = color.rgb;

      switch (props.sliderType) {
        case 'red':
          return [[0, "rgb(" + 0 + "," + rgb.g + "," + rgb.b + ")"], [100, "rgb(" + 255 + "," + rgb.g + "," + rgb.b + ")"]];

        case 'green':
          return [[0, "rgb(" + rgb.r + "," + 0 + "," + rgb.b + ")"], [100, "rgb(" + rgb.r + "," + 255 + "," + rgb.b + ")"]];

        case 'blue':
          return [[0, "rgb(" + rgb.r + "," + rgb.g + "," + 0 + ")"], [100, "rgb(" + rgb.r + "," + rgb.g + "," + 255 + ")"]];

        case 'alpha':
          return [[0, "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",0)"], [100, "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")"]];

        case 'kelvin':
          var stops = [];
          var min = props.minTemperature;
          var max = props.maxTemperature;
          var numStops = 8;
          var range = max - min;

          for (var kelvin = min, stop = 0; kelvin < max; kelvin += range / numStops, stop += 1) {
            var _IroColor$kelvinToRgb = IroColor.kelvinToRgb(kelvin),
                r = _IroColor$kelvinToRgb.r,
                g = _IroColor$kelvinToRgb.g,
                b = _IroColor$kelvinToRgb.b;

            stops.push([100 / numStops * stop, "rgb(" + r + "," + g + "," + b + ")"]);
          }

          return stops;

        case 'hue':
          return [[0, '#f00'], [16.666, '#ff0'], [33.333, '#0f0'], [50, '#0ff'], [66.666, '#00f'], [83.333, '#f0f'], [100, '#f00']];

        case 'saturation':
          var noSat = IroColor.hsvToHsl({
            h: hsv.h,
            s: 0,
            v: hsv.v
          });
          var fullSat = IroColor.hsvToHsl({
            h: hsv.h,
            s: 100,
            v: hsv.v
          });
          return [[0, "hsl(" + noSat.h + "," + noSat.s + "%," + noSat.l + "%)"], [100, "hsl(" + fullSat.h + "," + fullSat.s + "%," + fullSat.l + "%)"]];

        case 'value':
        default:
          var hsl = IroColor.hsvToHsl({
            h: hsv.h,
            s: hsv.s,
            v: 100
          });
          return [[0, '#000'], [100, "hsl(" + hsl.h + "," + hsl.s + "%," + hsl.l + "%)"]];
      }
    }

    var TAU = Math.PI * 2; // javascript's modulo operator doesn't produce positive numbers with negative input
    // https://dev.to/maurobringolf/a-neat-trick-to-compute-modulo-of-negative-numbers-111e

    var mod = function mod(a, n) {
      return (a % n + n) % n;
    }; // distance between points (x, y) and (0, 0)


    var dist = function dist(x, y) {
      return Math.sqrt(x * x + y * y);
    };
    /**
     * @param props - wheel props
     * @internal
     */


    function getHandleRange(props) {
      return props.width / 2 - props.padding - props.handleRadius - props.borderWidth;
    }
    /**
     * Returns true if point (x, y) lands inside the wheel
     * @param props - wheel props
     * @param x
     * @param y
     */


    function isInputInsideWheel(props, x, y) {
      var _getWheelDimensions = getWheelDimensions(props),
          cx = _getWheelDimensions.cx,
          cy = _getWheelDimensions.cy;

      var r = props.width / 2;
      return dist(cx - x, cy - y) < r;
    }
    /**
     * @desc Get the point as the center of the wheel
     * @param props - wheel props
     */


    function getWheelDimensions(props) {
      var r = props.width / 2;
      return {
        width: props.width,
        radius: r - props.borderWidth,
        cx: r,
        cy: r
      };
    }
    /**
     * @desc Translate an angle according to wheelAngle and wheelDirection
     * @param props - wheel props
     * @param angle - input angle
     */


    function translateWheelAngle(props, angle, invert) {
      var wheelAngle = props.wheelAngle;
      var wheelDirection = props.wheelDirection; // inverted and clockwisee

      if (invert && wheelDirection === 'clockwise') {
        angle = wheelAngle + angle;
      } // clockwise (input handling)
      else if (wheelDirection === 'clockwise') {
          angle = 360 - wheelAngle + angle;
        } // inverted and anticlockwise
        else if (invert && wheelDirection === 'anticlockwise') {
            angle = wheelAngle + 180 - angle;
          } // anticlockwise (input handling)
          else if (wheelDirection === 'anticlockwise') {
              angle = wheelAngle - angle;
            }

      return mod(angle, 360);
    }
    /**
     * @desc Get the current handle position for a given color
     * @param props - wheel props
     * @param color
     */


    function getWheelHandlePosition(props, color) {
      var hsv = color.hsv;

      var _getWheelDimensions2 = getWheelDimensions(props),
          cx = _getWheelDimensions2.cx,
          cy = _getWheelDimensions2.cy;

      var handleRange = getHandleRange(props);
      var handleAngle = (180 + translateWheelAngle(props, hsv.h, true)) * (TAU / 360);
      var handleDist = hsv.s / 100 * handleRange;
      var direction = props.wheelDirection === 'clockwise' ? -1 : 1;
      return {
        x: cx + handleDist * Math.cos(handleAngle) * direction,
        y: cy + handleDist * Math.sin(handleAngle) * direction
      };
    }
    /**
     * @desc Get the current wheel value from user input
     * @param props - wheel props
     * @param x - global input x position
     * @param y - global input y position
     */


    function getWheelValueFromInput(props, x, y) {
      var _getWheelDimensions3 = getWheelDimensions(props),
          cx = _getWheelDimensions3.cx,
          cy = _getWheelDimensions3.cy;

      var handleRange = getHandleRange(props);
      x = cx - x;
      y = cy - y; // Calculate the hue by converting the angle to radians

      var hue = translateWheelAngle(props, Math.atan2(-y, -x) * (360 / TAU)); // Find the point's distance from the center of the wheel
      // This is used to show the saturation level

      var handleDist = Math.min(dist(x, y), handleRange);
      return {
        h: Math.round(hue),
        s: Math.round(100 / handleRange * handleDist)
      };
    }
    /**
     * @desc Get the bounding dimensions of the box
     * @param props - box props
     */


    function getBoxDimensions(props) {
      var width = props.width,
          boxHeight = props.boxHeight,
          padding = props.padding,
          handleRadius = props.handleRadius;
      return {
        width: width,
        height: boxHeight != null ? boxHeight : width,
        radius: padding + handleRadius
      };
    }
    /**
     * @desc Get the current box value from user input
     * @param props - box props
     * @param x - global input x position
     * @param y - global input y position
     */


    function getBoxValueFromInput(props, x, y) {
      var _getBoxDimensions = getBoxDimensions(props),
          width = _getBoxDimensions.width,
          height = _getBoxDimensions.height,
          radius = _getBoxDimensions.radius;

      var handleStart = radius;
      var handleRangeX = width - radius * 2;
      var handleRangeY = height - radius * 2;
      var percentX = (x - handleStart) / handleRangeX * 100;
      var percentY = (y - handleStart) / handleRangeY * 100;
      return {
        s: Math.max(0, Math.min(percentX, 100)),
        v: Math.max(0, Math.min(100 - percentY, 100))
      };
    }
    /**
     * @desc Get the current box handle position for a given color
     * @param props - box props
     * @param color
     */


    function getBoxHandlePosition(props, color) {
      var _getBoxDimensions2 = getBoxDimensions(props),
          width = _getBoxDimensions2.width,
          height = _getBoxDimensions2.height,
          radius = _getBoxDimensions2.radius;

      var hsv = color.hsv;
      var handleStart = radius;
      var handleRangeX = width - radius * 2;
      var handleRangeY = height - radius * 2;
      return {
        x: handleStart + hsv.s / 100 * handleRangeX,
        y: handleStart + (handleRangeY - hsv.v / 100 * handleRangeY)
      };
    }
    /**
     * @desc Get the gradient stops for a box
     * @param props - box props
     * @param color
     */


    function getBoxGradients(props, color) {
      var hue = color.hue;
      return [// saturation gradient
      [[0, '#fff'], [100, "hsl(" + hue + ",100%,50%)"]], // lightness gradient
      [[0, 'rgba(0,0,0,0)'], [100, '#000']]];
    } // Keep track of html <base> elements for resolveSvgUrl
    // getElementsByTagName returns a live HTMLCollection, which stays in sync with the DOM tree
    // So it only needs to be called once


    var BASE_ELEMENTS;
    /**
     * @desc Resolve an SVG reference URL
     * This is required to work around how Safari and iOS webviews handle gradient URLS under certain conditions
     * If a page is using a client-side routing library which makes use of the HTML <base> tag,
     * Safari won't be able to render SVG gradients properly (as they are referenced by URLs)
     * More info on the problem:
     * https://stackoverflow.com/questions/19742805/angular-and-svg-filters/19753427#19753427
     * https://github.com/jaames/iro.js/issues/18
     * https://github.com/jaames/iro.js/issues/45
     * https://github.com/jaames/iro.js/pull/89
     * @props url - SVG reference URL
     */

    function resolveSvgUrl(url) {
      if (!BASE_ELEMENTS) {
        BASE_ELEMENTS = document.getElementsByTagName('base');
      } // Sniff useragent string to check if the user is running Safari


      var ua = window.navigator.userAgent;
      var isSafari = /^((?!chrome|android).)*safari/i.test(ua);
      var isIos = /iPhone|iPod|iPad/i.test(ua);
      var location = window.location;
      return (isSafari || isIos) && BASE_ELEMENTS.length > 0 ? location.protocol + "//" + location.host + location.pathname + location.search + url : url;
    }
    /**
     * @desc Given a specifc (x, y) position, test if there's a handle there and return its index, else return null.
     *       This is used for components like the box and wheel which support multiple handles when multicolor is active
     * @props x - point x position
     * @props y - point y position
     * @props handlePositions - array of {x, y} coords for each handle
     */


    function getHandleAtPoint(props, x, y, handlePositions) {
      for (var i = 0; i < handlePositions.length; i++) {
        var dX = handlePositions[i].x - x;
        var dY = handlePositions[i].y - y;
        var dist = Math.sqrt(dX * dX + dY * dY);

        if (dist < props.handleRadius) {
          return i;
        }
      }

      return null;
    }

    function cssBorderStyles(props) {
      return {
        boxSizing: 'border-box',
        border: props.borderWidth + "px solid " + props.borderColor
      };
    }

    function cssGradient(type, direction, stops) {
      return type + "-gradient(" + direction + ", " + stops.map(function (_ref) {
        var o = _ref[0],
            col = _ref[1];
        return col + " " + o + "%";
      }).join(',') + ")";
    }

    function cssValue(value) {
      if (typeof value === 'string') {
        return value;
      }

      return value + "px";
    }

    var iroColorPickerOptionDefaults = {
      width: 300,
      height: 300,
      color: '#fff',
      colors: [],
      padding: 6,
      layoutDirection: 'vertical',
      borderColor: '#fff',
      borderWidth: 0,
      handleRadius: 8,
      activeHandleRadius: null,
      handleSvg: null,
      handleProps: {
        x: 0,
        y: 0
      },
      wheelLightness: true,
      wheelAngle: 0,
      wheelDirection: 'anticlockwise',
      sliderSize: null,
      sliderMargin: 12,
      boxHeight: null
    };
    var SECONDARY_EVENTS = ["mousemove"
    /* MouseMove */
    , "touchmove"
    /* TouchMove */
    , "mouseup"
    /* MouseUp */
    , "touchend"
    /* TouchEnd */
    ]; // Base component class for iro UI components
    // This extends the Preact component class to allow them to react to mouse/touch input events by themselves

    var IroComponentWrapper =
    /*@__PURE__*/
    function (Component) {
      function IroComponentWrapper(props) {
        Component.call(this, props); // Generate unique ID for the component
        // This can be used to generate unique IDs for gradients, etc

        this.uid = (Math.random() + 1).toString(36).substring(5);
      }

      if (Component) IroComponentWrapper.__proto__ = Component;
      IroComponentWrapper.prototype = Object.create(Component && Component.prototype);
      IroComponentWrapper.prototype.constructor = IroComponentWrapper;

      IroComponentWrapper.prototype.render = function render(props) {
        var eventHandler = this.handleEvent.bind(this);
        var rootProps = {
          onMouseDown: eventHandler,
          // https://github.com/jaames/iro.js/issues/126
          // https://github.com/preactjs/preact/issues/2113#issuecomment-553408767
          ontouchstart: eventHandler
        };
        var isHorizontal = props.layoutDirection === 'horizontal';
        var margin = props.margin === null ? props.sliderMargin : props.margin;
        var rootStyles = {
          overflow: 'visible',
          display: isHorizontal ? 'inline-block' : 'block'
        }; // first component shouldn't have any margin

        if (props.index > 0) {
          rootStyles[isHorizontal ? 'marginLeft' : 'marginTop'] = margin;
        }

        return h(d, null, props.children(this.uid, rootProps, rootStyles));
      }; // More info on handleEvent:
      // https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
      // TL;DR this lets us have a single point of entry for multiple events, and we can avoid callback/binding hell


      IroComponentWrapper.prototype.handleEvent = function handleEvent(e) {
        var this$1 = this;
        var inputHandler = this.props.onInput; // Get the screen position of the component

        var bounds = this.base.getBoundingClientRect(); // Prefect default browser action

        e.preventDefault(); // Detect if the event is a touch event by checking if it has the `touches` property
        // If it is a touch event, use the first touch input

        var point = e.touches ? e.changedTouches[0] : e;
        var x = point.clientX - bounds.left;
        var y = point.clientY - bounds.top;

        switch (e.type) {
          case "mousedown"
          /* MouseDown */
          :
          case "touchstart"
          /* TouchStart */
          :
            var result = inputHandler(x, y, 0
            /* Start */
            );

            if (result !== false) {
              SECONDARY_EVENTS.forEach(function (event) {
                document.addEventListener(event, this$1, {
                  passive: false
                });
              });
            }

            break;

          case "mousemove"
          /* MouseMove */
          :
          case "touchmove"
          /* TouchMove */
          :
            inputHandler(x, y, 1
            /* Move */
            );
            break;

          case "mouseup"
          /* MouseUp */
          :
          case "touchend"
          /* TouchEnd */
          :
            inputHandler(x, y, 2
            /* End */
            );
            SECONDARY_EVENTS.forEach(function (event) {
              document.removeEventListener(event, this$1, {
                passive: false
              });
            });
            break;
        }
      };

      return IroComponentWrapper;
    }(m);

    function IroHandle(props) {
      var radius = props.r;
      var url = props.url;
      return h("svg", {
        className: "IroHandle IroHandle--" + props.index + " " + (props.isActive ? 'IroHandle--isActive' : ''),
        style: {
          top: cssValue(props.y),
          left: cssValue(props.x),
          width: '1px',
          height: '1px',
          position: 'absolute',
          overflow: 'visible'
        }
      }, url && h("use", Object.assign({
        xlinkHref: resolveSvgUrl(url)
      }, props.props)), !url && h("circle", {
        r: radius,
        fill: "none",
        "stroke-width": 2,
        stroke: "#000"
      }), !url && h("circle", {
        r: radius - 2,
        fill: props.fill,
        "stroke-width": 2,
        stroke: "#fff"
      }));
    }

    IroHandle.defaultProps = {
      fill: 'none',
      x: 0,
      y: 0,
      r: 8,
      url: null,
      props: {
        x: 0,
        y: 0
      }
    };

    function IroSlider(props) {
      var activeIndex = props.activeIndex;
      var activeColor = activeIndex !== undefined && activeIndex < props.colors.length ? props.colors[activeIndex] : props.color;
      var ref = getSliderDimensions(props);
      var width = ref.width;
      var height = ref.height;
      var radius = ref.radius;
      var handlePos = getSliderHandlePosition(props, activeColor);
      var gradient = getSliderGradient(props, activeColor);

      function handleInput(x, y, type) {
        var value = getSliderValueFromInput(props, x, y);
        props.parent.inputActive = true;
        activeColor[props.sliderType] = value;
        props.onInput(type, props.id);
      }

      return h(IroComponentWrapper, Object.assign({}, props, {
        onInput: handleInput
      }), function (uid, rootProps, rootStyles) {
        return h("div", Object.assign({}, rootProps, {
          className: "IroSlider",
          style: Object.assign({}, {
            position: 'relative',
            width: cssValue(width),
            height: cssValue(height),
            borderRadius: cssValue(radius),
            // checkered bg to represent alpha
            background: "conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",
            backgroundSize: '8px 8px'
          }, rootStyles)
        }), h("div", {
          className: "IroSliderGradient",
          style: Object.assign({}, {
            position: 'absolute',
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: cssValue(radius),
            background: cssGradient('linear', props.layoutDirection === 'horizontal' ? 'to top' : 'to right', gradient)
          }, cssBorderStyles(props))
        }), h(IroHandle, {
          isActive: true,
          index: activeColor.index,
          r: props.handleRadius,
          url: props.handleSvg,
          props: props.handleProps,
          x: handlePos.x,
          y: handlePos.y
        }));
      });
    }

    IroSlider.defaultProps = Object.assign({}, sliderDefaultOptions);

    function IroBox(props) {
      var ref = getBoxDimensions(props);
      var width = ref.width;
      var height = ref.height;
      var radius = ref.radius;
      var colors = props.colors;
      var colorPicker = props.parent;
      var activeIndex = props.activeIndex;
      var activeColor = activeIndex !== undefined && activeIndex < props.colors.length ? props.colors[activeIndex] : props.color;
      var gradients = getBoxGradients(props, activeColor);
      var handlePositions = colors.map(function (color) {
        return getBoxHandlePosition(props, color);
      });

      function handleInput(x, y, inputType) {
        if (inputType === 0
        /* Start */
        ) {
            // getHandleAtPoint() returns the index for the handle if the point 'hits' it, or null otherwise
            var activeHandle = getHandleAtPoint(props, x, y, handlePositions); // If the input hit a handle, set it as the active handle, but don't update the color

            if (activeHandle !== null) {
              colorPicker.setActiveColor(activeHandle);
            } // If the input didn't hit a handle, set the currently active handle to that position
            else {
                colorPicker.inputActive = true;
                activeColor.hsv = getBoxValueFromInput(props, x, y);
                props.onInput(inputType, props.id);
              }
          } // move is fired when the user has started dragging
        else if (inputType === 1
          /* Move */
          ) {
              colorPicker.inputActive = true;
              activeColor.hsv = getBoxValueFromInput(props, x, y);
            } // let the color picker fire input:start, input:move or input:end events


        props.onInput(inputType, props.id);
      }

      return h(IroComponentWrapper, Object.assign({}, props, {
        onInput: handleInput
      }), function (uid, rootProps, rootStyles) {
        return h("div", Object.assign({}, rootProps, {
          className: "IroBox",
          style: Object.assign({}, {
            width: cssValue(width),
            height: cssValue(height),
            position: 'relative'
          }, rootStyles)
        }), h("div", {
          className: "IroBox",
          style: Object.assign({}, {
            width: '100%',
            height: '100%',
            borderRadius: cssValue(radius)
          }, cssBorderStyles(props), {
            background: cssGradient('linear', 'to bottom', gradients[1]) + ',' + cssGradient('linear', 'to right', gradients[0])
          })
        }), colors.filter(function (color) {
          return color !== activeColor;
        }).map(function (color) {
          return h(IroHandle, {
            isActive: false,
            index: color.index,
            fill: color.hslString,
            r: props.handleRadius,
            url: props.handleSvg,
            props: props.handleProps,
            x: handlePositions[color.index].x,
            y: handlePositions[color.index].y
          });
        }), h(IroHandle, {
          isActive: true,
          index: activeColor.index,
          fill: activeColor.hslString,
          r: props.activeHandleRadius || props.handleRadius,
          url: props.handleSvg,
          props: props.handleProps,
          x: handlePositions[activeColor.index].x,
          y: handlePositions[activeColor.index].y
        }));
      });
    }

    var HUE_GRADIENT_CLOCKWISE = 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)';
    var HUE_GRADIENT_ANTICLOCKWISE = 'conic-gradient(red, magenta, blue, aqua, lime, yellow, red)';

    function IroWheel(props) {
      var ref = getWheelDimensions(props);
      var width = ref.width;
      var colors = props.colors;
      var borderWidth = props.borderWidth;
      var colorPicker = props.parent;
      var activeColor = props.color;
      var hsv = activeColor.hsv;
      var handlePositions = colors.map(function (color) {
        return getWheelHandlePosition(props, color);
      });
      var circleStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        boxSizing: 'border-box'
      };

      function handleInput(x, y, inputType) {
        if (inputType === 0
        /* Start */
        ) {
            // input hitbox is a square, 
            // so we want to ignore any initial clicks outside the circular shape of the wheel
            if (!isInputInsideWheel(props, x, y)) {
              // returning false will cease all event handling for this interaction
              return false;
            } // getHandleAtPoint() returns the index for the handle if the point 'hits' it, or null otherwise


            var activeHandle = getHandleAtPoint(props, x, y, handlePositions); // If the input hit a handle, set it as the active handle, but don't update the color

            if (activeHandle !== null) {
              colorPicker.setActiveColor(activeHandle);
            } // If the input didn't hit a handle, set the currently active handle to that position
            else {
                colorPicker.inputActive = true;
                activeColor.hsv = getWheelValueFromInput(props, x, y);
                props.onInput(inputType, props.id);
              }
          } // move is fired when the user has started dragging
        else if (inputType === 1
          /* Move */
          ) {
              colorPicker.inputActive = true;
              activeColor.hsv = getWheelValueFromInput(props, x, y);
            } // let the color picker fire input:start, input:move or input:end events


        props.onInput(inputType, props.id);
      }

      return h(IroComponentWrapper, Object.assign({}, props, {
        onInput: handleInput
      }), function (uid, rootProps, rootStyles) {
        return h("div", Object.assign({}, rootProps, {
          className: "IroWheel",
          style: Object.assign({}, {
            width: cssValue(width),
            height: cssValue(width),
            position: 'relative'
          }, rootStyles)
        }), h("div", {
          className: "IroWheelHue",
          style: Object.assign({}, circleStyles, {
            transform: "rotateZ(" + (props.wheelAngle + 90) + "deg)",
            background: props.wheelDirection === 'clockwise' ? HUE_GRADIENT_CLOCKWISE : HUE_GRADIENT_ANTICLOCKWISE
          })
        }), h("div", {
          className: "IroWheelSaturation",
          style: Object.assign({}, circleStyles, {
            background: 'radial-gradient(circle closest-side, #fff, transparent)'
          })
        }), props.wheelLightness && h("div", {
          className: "IroWheelLightness",
          style: Object.assign({}, circleStyles, {
            background: '#000',
            opacity: 1 - hsv.v / 100
          })
        }), h("div", {
          className: "IroWheelBorder",
          style: Object.assign({}, circleStyles, cssBorderStyles(props))
        }), colors.filter(function (color) {
          return color !== activeColor;
        }).map(function (color) {
          return h(IroHandle, {
            isActive: false,
            index: color.index,
            fill: color.hslString,
            r: props.handleRadius,
            url: props.handleSvg,
            props: props.handleProps,
            x: handlePositions[color.index].x,
            y: handlePositions[color.index].y
          });
        }), h(IroHandle, {
          isActive: true,
          index: activeColor.index,
          fill: activeColor.hslString,
          r: props.activeHandleRadius || props.handleRadius,
          url: props.handleSvg,
          props: props.handleProps,
          x: handlePositions[activeColor.index].x,
          y: handlePositions[activeColor.index].y
        }));
      });
    }

    function createWidget(WidgetComponent) {
      var widgetFactory = function widgetFactory(parent, props) {
        var widget; // will become an instance of the widget component class

        var widgetRoot = document.createElement('div'); // Render widget into a temp DOM node

        I(h(WidgetComponent, Object.assign({}, {
          ref: function ref(_ref2) {
            return widget = _ref2;
          }
        }, props)), widgetRoot);

        function mountWidget() {
          var container = parent instanceof Element ? parent : document.querySelector(parent);
          container.appendChild(widget.base);
          widget.onMount(container);
        } // Mount it into the DOM when the page document is ready


        if (document.readyState !== 'loading') {
          mountWidget();
        } else {
          document.addEventListener('DOMContentLoaded', mountWidget);
        }

        return widget;
      }; // Allow the widget factory to inherit component prototype + static class methods
      // This makes it easier for plugin authors to extend the base widget component


      widgetFactory.prototype = WidgetComponent.prototype;
      Object.assign(widgetFactory, WidgetComponent); // Add reference to base component too

      widgetFactory.__component = WidgetComponent;
      return widgetFactory;
    }

    var IroColorPicker =
    /*@__PURE__*/
    function (Component) {
      function IroColorPicker(props) {
        var this$1 = this;
        Component.call(this, props);
        this.colors = [];
        this.inputActive = false;
        this.events = {};
        this.activeEvents = {};
        this.deferredEvents = {};
        this.id = props.id;
        var colors = props.colors.length > 0 ? props.colors : [props.color];
        colors.forEach(function (colorValue) {
          return this$1.addColor(colorValue);
        });
        this.setActiveColor(0); // Pass all the props into the component's state,
        // Except we want to add the color object and make sure that refs aren't passed down to children

        this.state = Object.assign({}, props, {
          color: this.color,
          colors: this.colors,
          layout: props.layout
        });
      }

      if (Component) IroColorPicker.__proto__ = Component;
      IroColorPicker.prototype = Object.create(Component && Component.prototype);
      IroColorPicker.prototype.constructor = IroColorPicker; // Plubic multicolor API

      /**
      * @desc Add a color to the color picker
      * @param color new color to add
      * @param index optional color index
      */

      IroColorPicker.prototype.addColor = function addColor(color, index) {
        if (index === void 0) index = this.colors.length; // Create a new iro.Color
        // Also bind it to onColorChange, so whenever the color changes it updates the color picker

        var newColor = new IroColor(color, this.onColorChange.bind(this)); // Insert color @ the given index

        this.colors.splice(index, 0, newColor); // Reindex colors

        this.colors.forEach(function (color, index) {
          return color.index = index;
        }); // Update picker state if necessary

        if (this.state) {
          this.setState({
            colors: this.colors
          });
        } // Fire color init event


        this.deferredEmit('color:init', newColor);
      };
      /**
       * @desc Remove a color from the color picker
       * @param index color index
       */


      IroColorPicker.prototype.removeColor = function removeColor(index) {
        var color = this.colors.splice(index, 1)[0]; // Destroy the color object -- this unbinds it from the color picker

        color.unbind(); // Reindex colors

        this.colors.forEach(function (color, index) {
          return color.index = index;
        }); // Update picker state if necessary

        if (this.state) {
          this.setState({
            colors: this.colors
          });
        } // If the active color was removed, default active color to 0


        if (color.index === this.color.index) {
          this.setActiveColor(0);
        } // Fire color remove event


        this.emit('color:remove', color);
      };
      /**
       * @desc Set the currently active color
       * @param index color index
       */


      IroColorPicker.prototype.setActiveColor = function setActiveColor(index) {
        this.color = this.colors[index];

        if (this.state) {
          this.setState({
            color: this.color
          });
        } // Fire color switch event


        this.emit('color:setActive', this.color);
      };
      /**
       * @desc Replace all of the current colorPicker colors
       * @param newColorValues list of new colors to add
       */


      IroColorPicker.prototype.setColors = function setColors(newColorValues, activeColorIndex) {
        var this$1 = this;
        if (activeColorIndex === void 0) activeColorIndex = 0; // Unbind color events

        this.colors.forEach(function (color) {
          return color.unbind();
        }); // Destroy old colors

        this.colors = []; // Add new colors

        newColorValues.forEach(function (colorValue) {
          return this$1.addColor(colorValue);
        }); // Reset active color

        this.setActiveColor(activeColorIndex);
        this.emit('color:setAll', this.colors);
      }; // Public ColorPicker events API

      /**
       * @desc Set a callback function for an event
       * @param eventList event(s) to listen to
       * @param callback - Function called when the event is fired
       */


      IroColorPicker.prototype.on = function on(eventList, callback) {
        var this$1 = this;
        var events = this.events; // eventList can be an eventType string or an array of eventType strings

        (!Array.isArray(eventList) ? [eventList] : eventList).forEach(function (eventType) {
          // Add event callback
          (events[eventType] || (events[eventType] = [])).push(callback); // Call deferred events
          // These are events that can be stored until a listener for them is added

          if (this$1.deferredEvents[eventType]) {
            // Deffered events store an array of arguments from when the event was called
            this$1.deferredEvents[eventType].forEach(function (args) {
              callback.apply(null, args);
            }); // Clear deferred events

            this$1.deferredEvents[eventType] = [];
          }
        });
      };
      /**
       * @desc Remove a callback function for an event added with on()
       * @param eventList - event(s) to listen to
       * @param callback - original callback function to remove
       */


      IroColorPicker.prototype.off = function off(eventList, callback) {
        var this$1 = this;
        (!Array.isArray(eventList) ? [eventList] : eventList).forEach(function (eventType) {
          var callbackList = this$1.events[eventType]; // this.emitHook('event:off', eventType, callback);

          if (callbackList) {
            callbackList.splice(callbackList.indexOf(callback), 1);
          }
        });
      };
      /**
       * @desc Emit an event
       * @param eventType event to emit
       */


      IroColorPicker.prototype.emit = function emit(eventType) {
        var this$1 = this;
        var args = [],
            len = arguments.length - 1;

        while (len-- > 0) {
          args[len] = arguments[len + 1];
        }

        var activeEvents = this.activeEvents;
        var isEventActive = activeEvents.hasOwnProperty(eventType) ? activeEvents[eventType] : false; // Prevent event callbacks from firing if the event is already active
        // This stops infinite loops if something in an event callback causes the same event to be fired again
        // (e.g. setting the color inside a color:change callback)

        if (!isEventActive) {
          activeEvents[eventType] = true;
          var callbackList = this.events[eventType] || [];
          callbackList.forEach(function (fn) {
            return fn.apply(this$1, args);
          });
          activeEvents[eventType] = false;
        }
      };
      /**
       * @desc Emit an event now, or save it for when the relevent event listener is added
       * @param eventType - The name of the event to emit
       */


      IroColorPicker.prototype.deferredEmit = function deferredEmit(eventType) {
        var ref;
        var args = [],
            len = arguments.length - 1;

        while (len-- > 0) {
          args[len] = arguments[len + 1];
        }

        var deferredEvents = this.deferredEvents;
        (ref = this).emit.apply(ref, [eventType].concat(args));
        (deferredEvents[eventType] || (deferredEvents[eventType] = [])).push(args);
      }; // Public utility methods


      IroColorPicker.prototype.setOptions = function setOptions(newOptions) {
        this.setState(newOptions);
      };
      /**
       * @desc Resize the color picker
       * @param width - new width
       */


      IroColorPicker.prototype.resize = function resize(width) {
        this.setOptions({
          width: width
        });
      };
      /**
       * @desc Reset the color picker to the initial color provided in the color picker options
       */


      IroColorPicker.prototype.reset = function reset() {
        this.colors.forEach(function (color) {
          return color.reset();
        });
        this.setState({
          colors: this.colors
        });
      };
      /**
       * @desc Called by the createWidget wrapper when the element is mounted into the page
       * @param container - the container element for this ColorPicker instance
       */


      IroColorPicker.prototype.onMount = function onMount(container) {
        this.el = container;
        this.deferredEmit('mount', this);
      }; // Internal methods

      /**
       * @desc React to a color update
       * @param color - current color
       * @param changes - shows which h,s,v,a color channels changed
       */


      IroColorPicker.prototype.onColorChange = function onColorChange(color, changes) {
        this.setState({
          color: this.color
        });

        if (this.inputActive) {
          this.inputActive = false;
          this.emit('input:change', color, changes);
        }

        this.emit('color:change', color, changes);
      };
      /**
       * @desc Handle input from a UI control element
       * @param type - event type
       */


      IroColorPicker.prototype.emitInputEvent = function emitInputEvent(type, originId) {
        if (type === 0
        /* Start */
        ) {
            this.emit('input:start', this.color, originId);
          } else if (type === 1
        /* Move */
        ) {
            this.emit('input:move', this.color, originId);
          } else if (type === 2
        /* End */
        ) {
            this.emit('input:end', this.color, originId);
          }
      };

      IroColorPicker.prototype.render = function render(props, state) {
        var this$1 = this;
        var layout = state.layout; // use layout shorthands

        if (!Array.isArray(layout)) {
          switch (layout) {
            // TODO: implement some?
            default:
              layout = [{
                component: IroWheel
              }, {
                component: IroSlider
              }];
          } // add transparency slider to the layout


          if (state.transparency) {
            layout.push({
              component: IroSlider,
              options: {
                sliderType: 'alpha'
              }
            });
          }
        }

        return h("div", {
          class: "IroColorPicker",
          id: state.id,
          style: {
            display: state.display
          }
        }, layout.map(function (ref, componentIndex) {
          var UiComponent = ref.component;
          var options = ref.options;
          return h(UiComponent, Object.assign({}, state, options, {
            ref: undefined,
            onInput: this$1.emitInputEvent.bind(this$1),
            parent: this$1,
            index: componentIndex
          }));
        }));
      };

      return IroColorPicker;
    }(m);

    IroColorPicker.defaultProps = Object.assign({}, iroColorPickerOptionDefaults, {
      colors: [],
      display: 'block',
      id: null,
      layout: 'default',
      margin: null
    });
    var IroColorPickerWidget = createWidget(IroColorPicker);
    var iro;

    (function (iro) {
      iro.version = "5.5.0"; // replaced by @rollup/plugin-replace; see rollup.config.js

      iro.Color = IroColor;
      iro.ColorPicker = IroColorPickerWidget;
      var ui;

      (function (ui) {
        ui.h = h;
        ui.ComponentBase = IroComponentWrapper;
        ui.Handle = IroHandle;
        ui.Slider = IroSlider;
        ui.Wheel = IroWheel;
        ui.Box = IroBox;
      })(ui = iro.ui || (iro.ui = {}));
    })(iro || (iro = {}));

    var iro$1 = iro;
    /* harmony default export */

    __webpack_exports__["default"] = iro$1;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/switches/switches.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/switches/switches.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSwitchesSwitchesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<ion-content class=\"bg-content\">\r\n  <div class=\"btn-box\">\r\n   \r\n    <div class=\"center-content\">\r\n      <ion-buttons>\r\n        Switch 1\r\n        <a (click)=\"switches()\" color=\"light2\" class=\"front-btn\" ><img src=\"assets/img/images/on-icon.png\"></a>\r\n        <a (click)=\"addingDevice()\" color=\"light2\" class=\"front-btn\" ><img src=\"assets/img/images/off-icon.png\"></a>\r\n       \r\n      </ion-buttons>\r\n     \r\n      <ion-item lines=\"none\">\r\n        <ion-range value=\"20\" color=\"primary\">\r\n          <ion-icon slot=\"start\" size=\"small\" name=\"remove-outline\"></ion-icon>\r\n          <ion-icon slot=\"end\"  name=\"add-outline\"></ion-icon>\r\n        </ion-range>\r\n      </ion-item>\r\n      <ion-grid>\r\n        <ion-row>\r\n          \r\n          \r\n          <ion-col size=\"12\">\r\n            <div class=\"color-picker\">\r\n            <div class=\"colorpick\" id=\"picker\">\r\n              <br>\r\n              <div>\r\n                <ion-text>\r\n                  {{colorcode}}\r\n                </ion-text>\r\n              </div>\r\n\r\n            </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        </ion-grid>\r\n     \r\n      \r\n     \r\n  </div>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/switches/switches-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/switches/switches-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SwitchesPageRoutingModule */

  /***/
  function srcAppPagesSwitchesSwitchesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwitchesPageRoutingModule", function () {
      return SwitchesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _switches_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./switches.page */
    "./src/app/pages/switches/switches.page.ts");

    var routes = [{
      path: '',
      component: _switches_page__WEBPACK_IMPORTED_MODULE_3__["SwitchesPage"]
    }];

    var SwitchesPageRoutingModule = function SwitchesPageRoutingModule() {
      _classCallCheck(this, SwitchesPageRoutingModule);
    };

    SwitchesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SwitchesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/switches/switches.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/switches/switches.module.ts ***!
    \***************************************************/

  /*! exports provided: SwitchesPageModule */

  /***/
  function srcAppPagesSwitchesSwitchesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwitchesPageModule", function () {
      return SwitchesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _switches_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./switches-routing.module */
    "./src/app/pages/switches/switches-routing.module.ts");
    /* harmony import */


    var _switches_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./switches.page */
    "./src/app/pages/switches/switches.page.ts");

    var SwitchesPageModule = function SwitchesPageModule() {
      _classCallCheck(this, SwitchesPageModule);
    };

    SwitchesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _switches_routing_module__WEBPACK_IMPORTED_MODULE_5__["SwitchesPageRoutingModule"]],
      declarations: [_switches_page__WEBPACK_IMPORTED_MODULE_6__["SwitchesPage"]]
    })], SwitchesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/switches/switches.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/switches/switches.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSwitchesSwitchesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --ion-color-light2: #3c69b4;\n}\n:host .bg-content {\n  --background: linear-gradient(to bottom, #fdfeff 0%, #46a3dc 100%);\n}\n:host .logo-area {\n  padding: 50px 30px;\n  text-align: center;\n}\n:host .btn-box {\n  padding: 0 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: 90vh;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  z-index: 99;\n}\n:host .color-picker {\n  text-align: center;\n}\n:host .range-bar {\n  background: #808184;\n}\n:host ion-toggle {\n  width: 76px;\n  height: 76px;\n  --border-radius: 50%;\n  --handle-background-checked: transparent url('on-icon.png') no-repeat center / contain;\n  --handle-background: transparent url('off-icon.png') no-repeat center / contain;\n  --handle-width:200px;\n  --handle-height:200px;\n}\n:host .colorpick {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin: auto;\n}\n:host .top-btn {\n  height: 110px;\n}\n:host .front-btn {\n  background: transparent;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n  font-size: 14px;\n  line-height: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n  border-radius: 6px;\n  height: auto;\n  width: auto;\n  display: inline-block;\n  margin: 0 10px;\n  cursor: pointer;\n}\n:host .m-rght {\n  -webkit-margin-end: 10px !important;\n          margin-inline-end: 10px !important;\n}\n:host ion-item {\n  border-radius: 10px;\n  margin-bottom: 20px;\n  --background: transparent;\n}\n:host ion-range {\n  padding: 10px 0;\n}\n:host .text-center {\n  text-align: center;\n}\n:host ion-label {\n  color: #e0dcd9;\n}\n:host ion-icon {\n  color: #000000;\n}\n:host .range-bar {\n  background: #7a7268;\n}\n:host ion-input {\n  border-bottom: 1px dotted #e0dcd9;\n}\n:host ion-tab-bar {\n  height: 110px;\n  --background: linear-gradient(to bottom, #57a8dd 0%, #46a3dc 100%);\n}\n:host .label-color {\n  color: #000000;\n  padding: 5px 0 0;\n  font-size: 14px;\n}\n:host .center-content {\n  max-width: 290px;\n  margin: 0 auto;\n}\n:host .center-content h2 {\n  margin-bottom: 15px;\n  font-size: 30px;\n  color: #000000;\n  text-transform: capitalize;\n  text-align: center;\n}\n:host .center-content ion-buttons {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3dpdGNoZXMvRTpcXGdpdGh1YnByb2plY3RcXGFyaWhhbnQvc3JjXFxhcHBcXHBhZ2VzXFxzd2l0Y2hlc1xcc3dpdGNoZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zd2l0Y2hlcy9zd2l0Y2hlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUE2Q00sMkJBQUE7QUMzQ047QURESTtFQUNJLGtFQUFBO0FDR1I7QURETTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNHVjtBRERNO0VBQ0UsZUFBQTtFQUNGLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0dOO0FEREk7RUFDSSxrQkFBQTtBQ0dSO0FEREs7RUFDRyxtQkFBQTtBQ0dSO0FERUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0ZBQUE7RUFDQSwrRUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNBUjtBREVNO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQVI7QURFSztFQUNJLGFBQUE7QUNBVDtBREdNO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0RSO0FESVE7RUFDSSxtQ0FBQTtVQUFBLGtDQUFBO0FDRlo7QURJUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDSix5QkFBQTtBQ0ZSO0FESVE7RUFDSSxlQUFBO0FDRlo7QURJUTtFQUNJLGtCQUFBO0FDRlo7QURJUTtFQUNJLGNBQUE7QUNGWjtBRElRO0VBQ0ksY0FBQTtBQ0ZaO0FESVE7RUFFSSxtQkFBQTtBQ0haO0FES1E7RUFDSSxpQ0FBQTtBQ0haO0FES1E7RUFDSSxhQUFBO0VBQ0Esa0VBQUE7QUNIWjtBREtRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0haO0FES1E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNIWjtBREtRO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNIWjtBREtRO0VBQ0ksbUJBQUE7QUNIWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N3aXRjaGVzL3N3aXRjaGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5iZy1jb250ZW50IHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZGZlZmYgMCUsICM0NmEzZGMgMTAwJSk7XHJcbiAgICAgIH1cclxuICAgICAgLmxvZ28tYXJlYSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4IDMwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi1ib3gge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICB9XHJcbiAgICAuY29sb3ItcGlja2VyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAgLnJhbmdlLWJhciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzgwODE4NDtcclxuICAgIH1cclxuICAgXHJcbiAgICBcclxuXHJcbiAgICBpb24tdG9nZ2xlIHtcclxuICAgICAgICB3aWR0aDogNzZweDtcclxuICAgICAgICBoZWlnaHQ6IDc2cHg7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvb24taWNvbi5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xyXG4gICAgICAgIC0taGFuZGxlLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2ltYWdlcy9vZmYtaWNvbi5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xyXG4gICAgICAgIC0taGFuZGxlLXdpZHRoOjIwMHB4O1xyXG4gICAgICAgIC0taGFuZGxlLWhlaWdodDoyMDBweDtcclxuICAgICAgfVxyXG4gICAgICAuY29sb3JwaWNrIHtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgfVxyXG4gICAgIC50b3AtYnRuIHtcclxuICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICB9XHJcbiAgICAgIC0taW9uLWNvbG9yLWxpZ2h0MjogIzNjNjliNDtcclxuICAgICAgLmZyb250LWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgLm0tcmdodCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4ICAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJhbmdlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1jZW50ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTBkY2Q5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmFuZ2UtYmFyIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3YTcyNjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UwZGNkOTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXRhYi1iYXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzU3YThkZCAwJSwgIzQ2YTNkYyAxMDAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhYmVsLWNvbG9yIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwIDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlci1jb250ZW50IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyOTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXItY29udGVudCBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZW50ZXItY29udGVudCBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG59IiwiOmhvc3Qge1xuICAtLWlvbi1jb2xvci1saWdodDI6ICMzYzY5YjQ7XG59XG46aG9zdCAuYmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmVmZiAwJSwgIzQ2YTNkYyAxMDAlKTtcbn1cbjpob3N0IC5sb2dvLWFyZWEge1xuICBwYWRkaW5nOiA1MHB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IC5idG4tYm94IHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA5MHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cbjpob3N0IC5jb2xvci1waWNrZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAucmFuZ2UtYmFyIHtcbiAgYmFja2dyb3VuZDogIzgwODE4NDtcbn1cbjpob3N0IGlvbi10b2dnbGUge1xuICB3aWR0aDogNzZweDtcbiAgaGVpZ2h0OiA3NnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvb24taWNvbi5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pbWFnZXMvb2ZmLWljb24ucG5nKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcbiAgLS1oYW5kbGUtd2lkdGg6MjAwcHg7XG4gIC0taGFuZGxlLWhlaWdodDoyMDBweDtcbn1cbjpob3N0IC5jb2xvcnBpY2sge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuOmhvc3QgLnRvcC1idG4ge1xuICBoZWlnaHQ6IDExMHB4O1xufVxuOmhvc3QgLmZyb250LWJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAubS1yZ2h0IHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHggIWltcG9ydGFudDtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IGlvbi1yYW5nZSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjpob3N0IC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjZTBkY2Q5O1xufVxuOmhvc3QgaW9uLWljb24ge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbjpob3N0IC5yYW5nZS1iYXIge1xuICBiYWNrZ3JvdW5kOiAjN2E3MjY4O1xufVxuOmhvc3QgaW9uLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZTBkY2Q5O1xufVxuOmhvc3QgaW9uLXRhYi1iYXIge1xuICBoZWlnaHQ6IDExMHB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1N2E4ZGQgMCUsICM0NmEzZGMgMTAwJSk7XG59XG46aG9zdCAubGFiZWwtY29sb3Ige1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZzogNXB4IDAgMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOmhvc3QgLmNlbnRlci1jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAyOTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG46aG9zdCAuY2VudGVyLWNvbnRlbnQgaDIge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmNlbnRlci1jb250ZW50IGlvbi1idXR0b25zIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/switches/switches.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/switches/switches.page.ts ***!
    \*************************************************/

  /*! exports provided: SwitchesPage */

  /***/
  function srcAppPagesSwitchesSwitchesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwitchesPage", function () {
      return SwitchesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _jaames_iro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @jaames/iro */
    "./node_modules/@jaames/iro/dist/iro.es.js");

    var SwitchesPage =
    /*#__PURE__*/
    function () {
      function SwitchesPage() {
        _classCallCheck(this, SwitchesPage);

        this.colorcode = "";
      }

      _createClass2(SwitchesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var ref = this;

          var colorPicker = _jaames_iro__WEBPACK_IMPORTED_MODULE_2__["default"].ColorPicker("#picker", {
            width: 150,
            color: "#ffffff"
          });

          colorPicker.on('color:change', function (color) {
            ref.colorcode = color.hexstring;
          });
        }
      }]);

      return SwitchesPage;
    }();

    SwitchesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-switches',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./switches.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/switches/switches.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./switches.page.scss */
      "./src/app/pages/switches/switches.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SwitchesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-switches-switches-module-es5.js.map