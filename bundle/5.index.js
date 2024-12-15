"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
  424: function (t, e, n) {
    "use strict";

    n.r(e), n.d(e, "default", function () {
      return a;
    }), n.d(e, "Flex", function () {
      return o;
    });
    var r = n(436),
        o = r.b,
        a = r.a;
  },
  431: function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function (t) {
      return t.displayName || t.name || ("string" == typeof t ? t : "Component");
    };
  },
  448: function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = a(n(0)),
        o = a(n(431));

    function a(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function u() {
      return (u = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }

        return t;
      }).apply(this, arguments);
    }

    var i = function (t) {
      var e = function (e, n) {
        var o = r.default.useRef(null);
        return r.default.useImperativeHandle(n, function () {
          return o.current;
        }), r.default.createElement(t, u({}, e, {
          ref: o
        }));
      };

      return e.displayName = "withRef(".concat((0, o.default)(t), ")"), r.default.memo(r.default.forwardRef(e));
    };

    e.default = i;
  },
  450: function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;

    var r = n(0),
        o = n(15),
        a = function (t, e) {
      var a = e.ref,
          u = (0, r.useMemo)(function () {
        return t && t.filter(function (t) {
          return t.family && !o.listForFontsLib.find(function (e) {
            return e.name === t.family || e.family === t.family;
          });
        });
      }, [t]);
      (0, r.useEffect)(function () {
        var t;
        if (void 0 === a.current) throw new Error("Ref is required");
        var e = n(451).loadFonts,
            r = null === (t = a.current) || void 0 === t ? void 0 : t.ownerDocument;
        u && document && e({
          fonts: u,
          document: r
        });
      }, [u, a]);
    };

    e.default = a;
  },
  451: function (t, e, n) {
    "use strict";

    var r = n(416);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.loadFonts = e.getIdFonts = e.getAllFonts = e.default = void 0;
    var o,
        a = r(n(468)),
        u = r(n(35)),
        i = r(n(437)),
        f = r(n(469)),
        c = n(15),
        l = /@font-face {([\s\S]*?)}/gm,
        s = /font-family: ['"](.*?)['"]/,
        d = c.config.apiGoogleFontsKey,
        p = document.createElement("style");
    null === (o = document.head) || void 0 === o || o.appendChild(p);

    var y = function (t) {
      return t.replace(/\s+/g, "-").toLowerCase();
    };

    e.getIdFonts = y;

    var v = function (t, e, n) {
      return "".concat(t).concat(e ? "-preview" : "", "-").concat(n.join(","));
    },
        m = function () {
      var t = (0, f.default)(a.default.mark(function t() {
        var e,
            n,
            r,
            o = arguments;
        return a.default.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return e = o.length > 0 && void 0 !== o[0] ? o[0] : "popularity", t.prev = 1, n = "".concat("https://www.googleapis.com/webfonts/v1/webfonts", "?key=").concat(d, "&sort=").concat(e), t.next = 5, fetch(n, {
                mode: "cors",
                timeout: 5e3
              });

            case 5:
              return r = t.sent, t.abrupt("return", r.json());

            case 9:
              return t.prev = 9, t.t0 = t.catch(1), t.abrupt("return", null);

            case 12:
            case "end":
              return t.stop();
          }
        }, t, null, [[1, 9]]);
      }));
      return function () {
        return t.apply(this, arguments);
      };
    }();

    e.getAllFonts = m;

    var b = function () {
      var t = (0, f.default)(a.default.mark(function t(e, n, r) {
        var o, u, i;
        return a.default.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.prev = 0, o = new URL("https://fonts.googleapis.com/css"), u = e.map(function (t) {
                return "".concat(t.family, ":").concat(t.variants.includes("regular") ? "regular" : t.variants.find(function () {
                  return !0;
                }) || "");
              }), o.searchParams.append("family", u.join("|")), n && o.searchParams.append("text", r || ""), o.searchParams.append("font-display", "swap"), t.next = 8, fetch(o.href, {
                mode: "cors",
                timeout: 5e3
              });

            case 8:
              return i = t.sent, t.abrupt("return", i.text());

            case 12:
              return t.prev = 12, t.t0 = t.catch(0), t.abrupt("return", "");

            case 15:
            case "end":
              return t.stop();
          }
        }, t, null, [[0, 12]]);
      }));
      return function (e, n, r) {
        return t.apply(this, arguments);
      };
    }(),
        g = function (t, e) {
      if (!e.getElementById(t)) {
        var n,
            r = e.createElement("style");
        r.id = t, null === (n = e.head) || void 0 === n || n.appendChild(r);
      }
    },
        h = function (t, e) {
      var n = y(t.family),
          r = "\n\t\t\t#font-item-".concat(n).concat(e, ' {\n\t\t\t\tfont-family: "').concat(t.family, '";\n\t\t\t}\n\t\t');
      -1 === p.textContent.indexOf("#font-item-".concat(n).concat(e, " ")) && p.appendChild(document.createTextNode(r));
    },
        w = function (t, e, n) {
      var r = n.getElementById(t);
      r && !r.textContent.length && e && (r.textContent = e);
    },
        O = function () {
      var t = (0, f.default)(a.default.mark(function t(e) {
        var n, r, o, f, c, d, p, m, O, j, _, S;

        return a.default.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (n = e.fonts, r = e.document, o = void 0 === r ? window.document : r, f = e.isPreview, c = void 0 !== f && f, d = e.text, p = void 0 === d ? "" : d, m = e.selectorSuffix, O = void 0 === m ? "" : m, o) {
                t.next = 3;
                break;
              }

              return t.abrupt("return");

            case 3:
              if ((j = n.filter(function (t) {
                return t.id && t.family && !o.getElementById(v(t.id, c, t.variants));
              })).length) {
                t.next = 6;
                break;
              }

              return t.abrupt("return");

            case 6:
              return j.forEach(function (t) {
                var e = t.id,
                    n = t.variants;
                return g(v(e, c, n), o);
              }), t.next = 9, b(j, c, p);

            case 9:
              if (_ = t.sent) {
                t.next = 12;
                break;
              }

              return t.abrupt("return");

            case 12:
              a = void 0, a = _.matchAll(l), S = (0, i.default)(a).map(function (t) {
                var e = t[0].match(s),
                    n = y(e[1]);
                return (0, u.default)({}, n, t[0]);
              }), j.forEach(function (t) {
                var e, n;
                c && h(t, O);
                var r = (null == S || null === (e = S.filter(function (e) {
                  return !(null == e || !e[t.id]);
                })) || void 0 === e || null === (n = e.map(function (e) {
                  return e[t.id];
                })) || void 0 === n ? void 0 : n.join("")) || "";
                w(v(t.id, c, t.variants), r, o);
              });

            case 14:
            case "end":
              return t.stop();
          }

          var a;
        }, t);
      }));
      return function (e) {
        return t.apply(this, arguments);
      };
    }();

    e.loadFonts = O;
    var j = p;
    e.default = j;
  },
  513: function (t, e, n) {
    "use strict";

    function r(t) {
      return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;

    var o = p(n(0)),
        a = p(n(34)),
        u = p(n(63)),
        i = n(424),
        f = n(516),
        c = n(171),
        l = function (t, e) {
      if (!e && t && t.__esModule) return t;
      if (null === t || "object" !== r(t) && "function" != typeof t) return {
        default: t
      };
      var n = d(e);
      if (n && n.has(t)) return n.get(t);
      var o = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in t) if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(t, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(o, u, i) : o[u] = t[u];
      }

      o.default = t, n && n.set(t, o);
      return o;
    }(n(522)),
        s = n(523);

    function d(t) {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap(),
          n = new WeakMap();
      return (d = function (t) {
        return t ? n : e;
      })(t);
    }

    function p(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function y() {
      return (y = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }

        return t;
      }).apply(this, arguments);
    }

    function v(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null == n) return;
        var r,
            o,
            a = [],
            u = !0,
            i = !1;

        try {
          for (n = n.call(t); !(u = (r = n.next()).done) && (a.push(r.value), !e || a.length !== e); u = !0);
        } catch (t) {
          i = !0, o = t;
        } finally {
          try {
            u || null == n.return || n.return();
          } finally {
            if (i) throw o;
          }
        }

        return a;
      }(t, e) || function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return m(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(t, e);
      }(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function m(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];

      return r;
    }

    function b(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function g(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? b(Object(n), !0).forEach(function (e) {
          h(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    function h(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    var w = {
      borderWidth: 0,
      borderRadius: 0,
      borderColor: "transparent",
      outline: "none",
      background: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      padding: 0,
      flexGrow: 1
    },
        O = g(g({}, l), s.fab),
        j = function (t, e) {
      var n = t.data,
          r = t.colorspec,
          l = t.effectspec,
          s = t.gridspec,
          d = t.widgetspec,
          p = t.children,
          m = t.onClick,
          b = t.widgetMode,
          g = o.default.useMemo(function () {
        if (!(s && d && r && l)) return u.default;
        if (!n.designId) return w;
        var t = n.designs && n.designs[n.designId] || null || d.button.find(function (t) {
          return t._id === n.designId;
        });
        if (!t) return w;
        var e = (0, c.getDesignSx)({
          design: t,
          widgetspec: d,
          colorspec: r,
          effectspec: l,
          gridspec: s
        });
        return (0, a.default)(w, e);
      }, [n, r, d, l, s]),
          h = n.link,
          j = n.text,
          _ = void 0 === j ? {
        isShown: !1,
        label: ""
      } : j,
          S = n.icon,
          x = void 0 === S ? {
        isShown: !1
      } : S,
          P = o.default.useMemo(function () {
        return !b && h && h.href ? {
          as: "a",
          href: h.href,
          target: h.isNewTab ? "_blank" : "_self",
          sx: g
        } : {
          as: "button",
          sx: g
        };
      }, [g, h, b]),
          M = v(o.default.useState({
        __html: null == _ ? void 0 : _.label
      }), 1)[0];

      return o.default.createElement(i.Flex, y({
        id: n.id,
        className: n.className,
        onClick: m
      }, P, {
        ref: e
      }), x && x.isShown && "left" === x.position && o.default.createElement(f.FontAwesomeIcon, {
        icon: O[x.name]
      }), p || (_ && _.isShown ? o.default.createElement("span", {
        dangerouslySetInnerHTML: M
      }) : null), x && x.isShown && "right" === x.position && o.default.createElement(f.FontAwesomeIcon, {
        icon: O[x.name]
      }));
    },
        _ = o.default.memo(o.default.forwardRef(j));

    e.default = _;
  },
  524: function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = f(n(0)),
        o = f(n(431)),
        a = f(n(450)),
        u = n(171),
        i = f(n(529));

    function f(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function c() {
      return (c = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }

        return t;
      }).apply(this, arguments);
    }

    var l = function (t) {
      var e = function (e, n) {
        var o = e.data,
            f = e.widgetspec,
            l = e.colorspec,
            s = e.effectspec,
            d = e.gridspec,
            p = o.designs && o.designId && o.designs[o.designId] || null || f.button.find(function (t) {
          return t._id === o.designId;
        }),
            y = p ? (0, u.getDesignSx)({
          design: p,
          widgetspec: f,
          colorspec: l,
          effectspec: s,
          gridspec: d
        }) : {},
            v = (0, i.default)({
          designs: y,
          id: o._id
        });
        return (0, a.default)(v, {
          ref: n
        }), r.default.createElement(t, c({}, e, {
          ref: n
        }));
      };

      return e.displayName = "withFontsEdit(".concat((0, o.default)(t), ")"), r.default.memo(r.default.forwardRef(e));
    };

    e.default = l;
  },
  529: function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = u(n(101)),
        o = u(n(172)),
        a = n(15);

    function u(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function i(t) {
      return function (t) {
        if (Array.isArray(t)) return f(t);
      }(t) || function (t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
      }(t) || function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return f(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(t, e);
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function f(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];

      return r;
    }

    function c(t) {
      return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      })(t);
    }

    var l = function (t) {
      var e = {};

      if ("string" == typeof t.fontFamily) {
        var n = t.fontFamily;

        if (e.family = n, e.id = n.replace(/\s+/g, "-").toLowerCase(), "string" == typeof t.fontWeight) {
          var r = a.listMatchWeight.find(function (e) {
            return e.name === t.fontWeight;
          });
          r && (e.variants = [r.value]);
        }
      }

      return e;
    },
        s = (0, o.default)(function (t) {
      return t.designs;
    }, function (t) {
      var e = [],
          n = l(t);
      return (0, r.default)(function (t) {
        if ("object" === c(t) && !Array.isArray(t) && null != t && t.fontFamily) {
          var n = l(t);
          n.fontFamily && (e = [].concat(i(e), [n]));
        }
      }, t), [n].concat(i(e));
    })(function (t) {
      var e = t.id;
      return "widget@getFonts-".concat(e);
    });

    e.default = s;
  },
  641: function (t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = n(100),
        o = i(n(448)),
        a = i(n(513)),
        u = i(n(524));

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var f = (0, o.default)((0, r.withAnimation)((0, r.withTrigger)((0, u.default)(a.default))));
    e.default = f;
  }
}]);
//# sourceMappingURL=5.index.js.map