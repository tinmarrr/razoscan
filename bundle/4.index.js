"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
  424: function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, "default", function () {
      return o;
    }), n.d(t, "Flex", function () {
      return a;
    });
    var r = n(436),
        a = r.b,
        o = r.a;
  },
  431: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e) {
      return e.displayName || e.name || ("string" == typeof e ? e : "Component");
    };
  },
  448: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = o(n(0)),
        a = o(n(431));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      return (u = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }

        return e;
      }).apply(this, arguments);
    }

    var c = function (e) {
      var t = function (t, n) {
        var a = r.default.useRef(null);
        return r.default.useImperativeHandle(n, function () {
          return a.current;
        }), r.default.createElement(e, u({}, t, {
          ref: a
        }));
      };

      return t.displayName = "withRef(".concat((0, a.default)(e), ")"), r.default.memo(r.default.forwardRef(t));
    };

    t.default = c;
  },
  450: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var r = n(0),
        a = n(15),
        o = function (e, t) {
      var o = t.ref,
          u = (0, r.useMemo)(function () {
        return e && e.filter(function (e) {
          return e.family && !a.listForFontsLib.find(function (t) {
            return t.name === e.family || t.family === e.family;
          });
        });
      }, [e]);
      (0, r.useEffect)(function () {
        var e;
        if (void 0 === o.current) throw new Error("Ref is required");
        var t = n(451).loadFonts,
            r = null === (e = o.current) || void 0 === e ? void 0 : e.ownerDocument;
        u && document && t({
          fonts: u,
          document: r
        });
      }, [u, o]);
    };

    t.default = o;
  },
  451: function (e, t, n) {
    "use strict";

    var r = n(416);
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.loadFonts = t.getIdFonts = t.getAllFonts = t.default = void 0;
    var a,
        o = r(n(468)),
        u = r(n(35)),
        c = r(n(437)),
        l = r(n(469)),
        i = n(15),
        f = /@font-face {([\s\S]*?)}/gm,
        d = /font-family: ['"](.*?)['"]/,
        s = i.config.apiGoogleFontsKey,
        g = document.createElement("style");
    null === (a = document.head) || void 0 === a || a.appendChild(g);

    var p = function (e) {
      return e.replace(/\s+/g, "-").toLowerCase();
    };

    t.getIdFonts = p;

    var v = function (e, t, n) {
      return "".concat(e).concat(t ? "-preview" : "", "-").concat(n.join(","));
    },
        y = function () {
      var e = (0, l.default)(o.default.mark(function e() {
        var t,
            n,
            r,
            a = arguments;
        return o.default.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return t = a.length > 0 && void 0 !== a[0] ? a[0] : "popularity", e.prev = 1, n = "".concat("https://www.googleapis.com/webfonts/v1/webfonts", "?key=").concat(s, "&sort=").concat(t), e.next = 5, fetch(n, {
                mode: "cors",
                timeout: 5e3
              });

            case 5:
              return r = e.sent, e.abrupt("return", r.json());

            case 9:
              return e.prev = 9, e.t0 = e.catch(1), e.abrupt("return", null);

            case 12:
            case "end":
              return e.stop();
          }
        }, e, null, [[1, 9]]);
      }));
      return function () {
        return e.apply(this, arguments);
      };
    }();

    t.getAllFonts = y;

    var m = function () {
      var e = (0, l.default)(o.default.mark(function e(t, n, r) {
        var a, u, c;
        return o.default.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.prev = 0, a = new URL("https://fonts.googleapis.com/css"), u = t.map(function (e) {
                return "".concat(e.family, ":").concat(e.variants.includes("regular") ? "regular" : e.variants.find(function () {
                  return !0;
                }) || "");
              }), a.searchParams.append("family", u.join("|")), n && a.searchParams.append("text", r || ""), a.searchParams.append("font-display", "swap"), e.next = 8, fetch(a.href, {
                mode: "cors",
                timeout: 5e3
              });

            case 8:
              return c = e.sent, e.abrupt("return", c.text());

            case 12:
              return e.prev = 12, e.t0 = e.catch(0), e.abrupt("return", "");

            case 15:
            case "end":
              return e.stop();
          }
        }, e, null, [[0, 12]]);
      }));
      return function (t, n, r) {
        return e.apply(this, arguments);
      };
    }(),
        b = function (e, t) {
      if (!t.getElementById(e)) {
        var n,
            r = t.createElement("style");
        r.id = e, null === (n = t.head) || void 0 === n || n.appendChild(r);
      }
    },
        h = function (e, t) {
      var n = p(e.family),
          r = "\n\t\t\t#font-item-".concat(n).concat(t, ' {\n\t\t\t\tfont-family: "').concat(e.family, '";\n\t\t\t}\n\t\t');
      -1 === g.textContent.indexOf("#font-item-".concat(n).concat(t, " ")) && g.appendChild(document.createTextNode(r));
    },
        w = function (e, t, n) {
      var r = n.getElementById(e);
      r && !r.textContent.length && t && (r.textContent = t);
    },
        S = function () {
      var e = (0, l.default)(o.default.mark(function e(t) {
        var n, r, a, l, i, s, g, y, S, O, k, C;
        return o.default.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (n = t.fonts, r = t.document, a = void 0 === r ? window.document : r, l = t.isPreview, i = void 0 !== l && l, s = t.text, g = void 0 === s ? "" : s, y = t.selectorSuffix, S = void 0 === y ? "" : y, a) {
                e.next = 3;
                break;
              }

              return e.abrupt("return");

            case 3:
              if ((O = n.filter(function (e) {
                return e.id && e.family && !a.getElementById(v(e.id, i, e.variants));
              })).length) {
                e.next = 6;
                break;
              }

              return e.abrupt("return");

            case 6:
              return O.forEach(function (e) {
                var t = e.id,
                    n = e.variants;
                return b(v(t, i, n), a);
              }), e.next = 9, m(O, i, g);

            case 9:
              if (k = e.sent) {
                e.next = 12;
                break;
              }

              return e.abrupt("return");

            case 12:
              o = void 0, o = k.matchAll(f), C = (0, c.default)(o).map(function (e) {
                var t = e[0].match(d),
                    n = p(t[1]);
                return (0, u.default)({}, n, e[0]);
              }), O.forEach(function (e) {
                var t, n;
                i && h(e, S);
                var r = (null == C || null === (t = C.filter(function (t) {
                  return !(null == t || !t[e.id]);
                })) || void 0 === t || null === (n = t.map(function (t) {
                  return t[e.id];
                })) || void 0 === n ? void 0 : n.join("")) || "";
                w(v(e.id, i, e.variants), r, a);
              });

            case 14:
            case "end":
              return e.stop();
          }

          var o;
        }, e);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }();

    t.loadFonts = S;
    var O = g;
    t.default = O;
  },
  461: function (e, t, n) {
    "use strict";

    var r = n(416);
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = t.createWithContent = void 0;
    var a = n(425),
        o = [(0, r(n(630)).default)()],
        u = new a.CompositeDecorator(o);

    t.default = function (e) {
      return a.EditorState.createWithContent((0, a.convertFromRaw)(e), u);
    };

    t.createWithContent = function (e) {
      return a.EditorState.createWithContent(e, u);
    };
  },
  462: function (e, t, n) {
    "use strict";

    var r = n(416);
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.styles = t.getCustomStyleFn = t.default = t.customStyleMap = t.customStyleFns = void 0;
    var a = r(n(35)),
        o = r(n(63)),
        u = n(425),
        c = r(n(631)),
        l = r(n(174));

    function i(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(Object(n), !0).forEach(function (t) {
          (0, a.default)(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    var d = f({}, u.DefaultDraftInlineStyle);
    t.customStyleMap = d;
    var s = (0, c.default)(["font-size", "font-weight", "font-style", "color", "text-decoration", "text-transform", "vertical-align"], "CUSTOM_", d).styles;
    t.styles = s;
    var g = s.color.styleFn;

    s.color.styleFn = function (e, t) {
      var n = g(e).color;

      try {
        var r = JSON.parse(n);
        return {
          color: (0, l.default)(t, r.value)
        };
      } catch (e) {
        return o.default;
      }
    };

    var p = function (e, t) {
      return function (n) {
        return e.reduce(function (e, r) {
          return f(f({}, e), r(n, t));
        }, o.default);
      };
    };

    t.customStyleFns = p;
    var v = Object.keys(s).map(function (e) {
      return s[e].styleFn;
    });

    t.getCustomStyleFn = function (e) {
      return p(v, e);
    };

    var y = d;
    t.default = y;
  },
  463: function (e, t, n) {
    "use strict";

    var r = n(416);
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.tags = t.getBlockRenderMap = void 0;
    var a,
        o,
        u = r(n(437)),
        c = r(n(35)),
        l = r(n(509)),
        i = r(n(0)),
        f = r(n(65)),
        d = r(n(173)),
        s = n(508),
        g = r(n(465)),
        p = r(n(424)),
        v = n(171);

    function y(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function m(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? y(Object(n), !0).forEach(function (t) {
          (0, c.default)(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    var b = g.default.ul(a || (a = (0, l.default)(["\n\tlist-style: decimal;\n\tmargin-left: 1.5em;\n"]))),
        h = g.default.ol(o || (o = (0, l.default)(["\n\tlist-style: disc;\n\tmargin-left: 1.5em;\n"]))),
        w = (0, s.Map)({
      "ordered-list-item": {
        element: "li",
        wrapper: i.default.createElement(b, null)
      },
      "unordered-list-item": {
        element: "li",
        wrapper: i.default.createElement(h, null)
      }
    }),
        S = ["h1", "h2", "h3", "h4", "h5", "h6", "div"];
    t.tags = S;

    t.getBlockRenderMap = function (e) {
      var t = e.designs,
          n = e.widgetspec,
          r = e.colorspec,
          a = e.gridspec,
          o = e.effectspec;
      return (0, s.Map)((0, f.default)(function (e, t) {
        if ("text" !== t.target) return e;
        var u = t;
        return (0, f.default)(function (e, t) {
          var l = (0, v.getDesignSx)({
            design: u,
            gridspec: a,
            colorspec: r,
            effectspec: o,
            widgetspec: n
          });
          return m(m({}, e), {}, (0, c.default)({}, "".concat(u._id, "-").concat(t), {
            wrapper: i.default.createElement(p.default, {
              as: t,
              sx: l
            })
          }));
        }, e, S);
      }, Object.freeze({
        unstyled: {
          element: "div"
        }
      }), t ? [].concat((0, u.default)(n.text), (0, u.default)((0, d.default)(t))) : n.text)).merge(w);
    };
  },
  510: function (e, t, n) {
    "use strict";

    var r = n(416);
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var a,
        o = r(n(509)),
        u = r(n(0)),
        c = r(n(465)),
        l = n(425),
        i = c.default.div(a || (a = (0, o.default)(["\n\ttext-align: ", ";\n"])), function (e) {
      return e.align;
    }),
        f = function (e) {
      var t = e.block.getData().get("text-align");
      return t ? u.default.createElement(i, {
        align: t
      }, u.default.createElement(l.EditorBlock, e)) : u.default.createElement(l.EditorBlock, e);
    },
        d = function () {
      return {
        component: u.default.memo(f)
      };
    };

    t.default = d;
  },
  511: function (e, t, n) {
    "use strict";

    var r = n(416);
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.toggleLink = t.toggleInlineStyles = t.toggleColor = t.toggleBlocksType = t.toggleBlocksTag = t.toggleAlign = t.selectAll = t.removeInlineStyles = t.getSelectedBlocksType = t.getSelectedBlocksTag = t.getSelectedBlocksKey = t.getLink = t.getInlineStyles = t.getColor = t.getBlockStyles = t.getAlign = t.applyBlockStyle = void 0;
    var a = r(n(12)),
        o = r(n(35)),
        u = n(425),
        c = r(n(63)),
        l = r(n(64)),
        i = n(463),
        f = n(462);

    function d(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? d(Object(n), !0).forEach(function (t) {
          (0, o.default)(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    var g,
        p = (g = f.styles, function (e) {
      var t = e.getSelection(),
          n = e.getCurrentContent().getBlockForKey(t.getStartKey()),
          r = null;

      try {
        r = JSON.parse(g.color.current(e));
      } catch (e) {}

      if (r) return r;
      var a = n.getData().get("color");
      return a ? {
        kind: "color",
        value: {
          entryId: null,
          shadeId: null,
          snapshot: a
        }
      } : null;
    });
    t.getColor = p;
    var v,
        y = (v = f.styles, function (e) {
      return function (t) {
        return v.color.add(e, JSON.stringify(t));
      };
    });
    t.toggleColor = y;
    var m,
        b = (m = f.styles, function (e) {
      return function (t) {
        return m[t].current(e) || null;
      };
    });
    t.getInlineStyles = b;
    var h,
        w = (h = f.styles, function (e) {
      return function (t) {
        return function (n) {
          var r = e.getSelection();
          return h[t][r.isCollapsed() ? "add" : "toggle"](e, n);
        };
      };
    });
    t.toggleInlineStyles = w;
    var S,
        O = (S = f.styles, function (e) {
      return function () {
        return l.default.reduce(function (e, t) {
          return (0, t.remove)(e);
        }, e, S);
      };
    });
    t.removeInlineStyles = O;

    t.getBlockStyles = function (e) {
      return function (t) {
        var n = e.getSelection();
        return e.getCurrentContent().getBlockForKey(n.getStartKey()).getType() === t;
      };
    };

    t.applyBlockStyle = function (e) {
      return function (t) {
        return u.RichUtils.toggleBlockType(e, t);
      };
    };

    t.getLink = function (e) {
      return function () {
        var t = e.getCurrentContent(),
            n = e.getSelection().getStartKey(),
            r = e.getSelection().getStartOffset(),
            a = t.getBlockForKey(n).getEntityAt(r);
        if (!a) return c.default;
        var o = t.getEntity(a).getData();
        return s(s({}, o), {}, {
          isNewTab: "_blank" === o.target
        });
      };
    };

    t.toggleLink = function (e) {
      return function (t) {
        var n = t.value,
            r = n,
            a = t.isNewTab ? "_blank" : "_self",
            o = e.getSelection(),
            c = e.getCurrentContent(),
            l = c.createEntity("LINK", "MUTABLE", {
          url: r,
          target: a
        }).getLastCreatedEntityKey();
        if (!o.isCollapsed()) return u.RichUtils.toggleLink(e, o, l);
        c = u.Modifier.replaceText(e.getCurrentContent(), o, "".concat(n), e.getCurrentInlineStyle(), l);
        var i = u.EditorState.push(e, c, "insert-characters");
        return o = i.getSelection().merge({
          anchorOffset: o.get("anchorOffset") + n.length,
          focusOffset: o.get("anchorOffset") + n.length
        }), i = u.EditorState.acceptSelection(i, o), c = u.Modifier.insertText(e.getCurrentContent(), o, " ", e.getCurrentInlineStyle(), void 0), u.EditorState.push(e, c, "insert-characters");
      };
    };

    var k = function (e) {
      var t = e.getSelection().getAnchorKey(),
          n = e.getCurrentContent().getBlockForKey(t);
      return n.getData() && n.getData().get("text-align");
    };

    t.getAlign = k;

    t.toggleAlign = function (e) {
      return function (t) {
        var n = function (e) {
          if (!e.getSelection().isCollapsed()) return e;
          var t = e.getCurrentContent(),
              n = t.getBlockMap().first(),
              r = t.getBlockMap().last(),
              a = n.getKey(),
              o = r.getKey(),
              c = r.getLength(),
              l = new u.SelectionState({
            anchorKey: a,
            anchorOffset: 0,
            focusKey: o,
            focusOffset: c
          });
          return u.EditorState.acceptSelection(e, l);
        }(e),
            r = e.getSelection(),
            a = k(n),
            o = u.Modifier.mergeBlockData(n.getCurrentContent(), r, {
          "text-align": a === t ? null : t
        });

        return u.EditorState.push(n, o, "change-block-data");
      };
    };

    t.getSelectedBlocksKey = function (e) {
      var t = e.getSelection();
      return e.getCurrentContent().getBlockForKey(t.getStartKey()).getKey();
    };

    var C = function (e) {
      var t = e.getSelection();
      return e.getCurrentContent().getBlockForKey(t.getStartKey()).getType();
    },
        j = function (e) {
      var t = C(e),
          n = t.split("-"),
          r = n.slice(-1),
          o = (0, a.default)(r, 1)[0];
      return i.tags.includes(o) ? n.slice(0, -1).join("-") : t;
    };

    t.getSelectedBlocksType = j;

    t.getSelectedBlocksTag = function (e) {
      var t = C(e).split("-").slice(-1),
          n = (0, a.default)(t, 1)[0];
      return i.tags.includes(n) ? n : "div";
    };

    t.toggleBlocksType = function (e) {
      return function (t) {
        var n = C(e).split("-").pop();

        if (!i.tags.includes(n)) {
          var r = i.tags.slice(-1);
          n = (0, a.default)(r, 1)[0];
        }

        return u.RichUtils.toggleBlockType(e, "".concat(t, "-").concat(n));
      };
    };

    t.toggleBlocksTag = function (e) {
      return function (t) {
        var n = j(e);
        return u.RichUtils.toggleBlockType(e, "".concat(n, "-").concat(t));
      };
    };

    t.selectAll = function (e) {
      return function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = e.getCurrentContent(),
            r = n.getBlockMap().first(),
            a = n.getBlockMap().last(),
            o = r.getKey(),
            c = a.getKey(),
            l = a.getLength(),
            i = new u.SelectionState({
          anchorKey: o,
          anchorOffset: 0,
          focusKey: c,
          focusOffset: l
        });
        return t ? u.EditorState.acceptSelection(e, i) : u.EditorState.forceSelection(e, i);
      };
    };
  },
  534: function (e, t, n) {
    "use strict";

    var r = n(416);
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var a = r(n(12)),
        o = r(n(0)),
        u = n(425),
        c = r(n(629)),
        l = r(n(424)),
        i = r(n(461)),
        f = n(462),
        d = n(463),
        s = r(n(510)),
        g = {
      wordBreak: "break-word",
      flexDirection: "column"
    },
        p = function (e, t) {
      var n = e.data,
          r = e.widgetspec,
          p = e.colorspec,
          v = e.gridspec,
          y = e.effectspec,
          m = e.onClick,
          b = e.children,
          h = n.raw,
          w = o.default.useState(function () {
        return (0, i.default)(h);
      }),
          S = (0, a.default)(w, 2),
          O = S[0],
          k = S[1];
      o.default.useEffect(function () {
        return k((0, i.default)(h));
      }, [h, k]);
      var C = o.default.useMemo(function () {
        return (0, d.getBlockRenderMap)({
          designs: n.designs,
          widgetspec: r,
          colorspec: p,
          gridspec: v,
          effectspec: y
        });
      }, [p, n.designs, v, r, y]);
      return r && p && v && y ? o.default.createElement(l.default, {
        id: n.id,
        className: n.className,
        sx: g,
        onClick: m,
        ref: t
      }, b || o.default.createElement(u.Editor, {
        readOnly: !0,
        editorState: O,
        customStyleFn: (0, f.getCustomStyleFn)(p),
        customStyleMap: f.customStyleMap,
        blockRenderMap: C,
        blockRendererFn: s.default,
        onChange: c.default
      })) : null;
    },
        v = o.default.memo(o.default.forwardRef(p));

    t.default = v;
  },
  630: function (e, t, n) {
    "use strict";

    var r = n(416);
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = r(n(0));

    function o(e, t, n) {
      e.findEntityRanges(function (e) {
        var t = e.getEntity();
        return "string" == typeof t && "LINK" === n.getEntity(t).getType();
      }, t);
    }

    var u = function (e) {
      var t = e.contentState,
          n = e.entityKey,
          r = e.children,
          o = t.getEntity(n).getData(),
          u = o.url,
          c = o.target;
      return a.default.createElement("a", {
        href: u,
        target: c
      }, r);
    };

    t.default = function () {
      return {
        strategy: o,
        component: a.default.memo(u)
      };
    };
  },
  634: function (e, t, n) {
    "use strict";

    var r = n(416);
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var a = r(n(464)),
        o = r(n(0)),
        u = r(n(431)),
        c = r(n(450)),
        l = r(n(635)),
        i = function (e) {
      var t = function (t, n) {
        var r = t.data,
            u = t.widgetspec,
            i = (0, l.default)({
          id: r._id,
          raw: r.raw,
          designs: r.designs || {},
          widgetspec: u
        });
        return (0, c.default)(i, {
          ref: n
        }), o.default.createElement(e, (0, a.default)({}, t, {
          ref: n
        }));
      };

      return t.displayName = "withFontsEdit(".concat((0, u.default)(e), ")"), o.default.memo(o.default.forwardRef(t));
    };

    t.default = i;
  },
  635: function (e, t, n) {
    "use strict";

    var r = n(416);
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = r(n(437)),
        o = r(n(64)),
        u = r(n(172)),
        c = n(15),
        l = (0, u.default)(function (e) {
      return e.designs;
    }, function (e) {
      return e.raw;
    }, function (e) {
      return e.widgetspec;
    }, function (e, t, n) {
      return t.blocks.reduce(function (t, r) {
        var u = r.type,
            l = function (e, t, n) {
          var r,
              a = n.text.find(function (t) {
            return t._id === e;
          }) || (null == t ? void 0 : t[e]);
          return o.default.map(function (e) {
            var t = {};

            if ("string" == typeof e.family) {
              var n = e.family,
                  r = e.weight,
                  a = e.variants,
                  o = void 0 === a ? [] : a;

              if (t.family = n, t.id = n.replace(/\s+/g, "-").toLowerCase(), "string" == typeof r) {
                var u = o.filter(function (e) {
                  var t = c.listMatchWeight.find(function (e) {
                    return e.name === r;
                  });
                  return !!t && ("regular" === t.value && "italic" === e || e.includes(t.value));
                });
                t.variants = u;
              }
            }

            return t;
          }, null !== (r = null == a ? void 0 : a.breakpoints) && void 0 !== r ? r : {});
        }(u.slice(0, u.lastIndexOf("-")), e, n);

        return [].concat((0, a.default)(t), (0, a.default)(l));
      }, []);
    })(function (e) {
      var t = e.id;
      return "widget@getFonts-".concat(t);
    });
    t.default = l;
  },
  636: function (e, t, n) {
    "use strict";

    var r = n(416),
        a = n(637);
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var o = r(n(464)),
        u = r(n(12)),
        c = r(n(0)),
        l = n(425),
        i = n(511),
        f = n(462),
        d = n(463),
        s = r(n(510)),
        g = function (e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || "object" !== a(e) && "function" != typeof e) return {
        default: e
      };
      var n = p(t);
      if (n && n.has(e)) return n.get(e);
      var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
        var c = o ? Object.getOwnPropertyDescriptor(e, u) : null;
        c && (c.get || c.set) ? Object.defineProperty(r, u, c) : r[u] = e[u];
      }

      r.default = e, n && n.set(e, r);
      return r;
    }(n(461));

    function p(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
          n = new WeakMap();
      return (p = function (e) {
        return e ? n : t;
      })(e);
    }

    var v = function (e) {
      var t = function (t, n) {
        var r = t.data,
            a = t.widgetspec,
            p = t.colorspec,
            v = t.gridspec,
            y = t.effectspec,
            m = t.currentDevice,
            b = t.editorState,
            h = t.setEditorState,
            w = t.widgetMode,
            S = "widget-edit" === w,
            O = c.default.useRef(null),
            k = c.default.useCallback(function () {
          O.current && O.current.focus();
        }, [O]),
            C = c.default.useState(w),
            j = (0, u.default)(C, 2),
            E = j[0],
            P = j[1];
        c.default.useEffect(function () {
          if (w !== E) {
            P(w);
            var e = (0, i.selectAll)(b);

            switch (w) {
              case "widget-edit":
                h(e()), O.current && O.current.focus();
                break;

              case "widget-resize":
                h(e(!0));
            }
          }
        }, [b, h, w, E, P, O, r.raw]);
        var M = c.default.useMemo(function () {
          return a && p && v && y && (0, d.getBlockRenderMap)({
            device: m,
            designs: r.designs,
            widgetspec: a,
            colorspec: p,
            gridspec: v,
            effectspec: y,
            unit: v.unit
          });
        }, [p, m, r.designs, v, a, y]);
        return c.default.useEffect(function () {
          h(function (e) {
            if (null == r || !r.raw) return e;
            var t = (0, g.default)(r.raw).getCurrentContent(),
                n = (0, g.createWithContent)(t);
            return l.EditorState.set(n, {
              selection: e.getSelection(),
              undoStack: e.getUndoStack(),
              redoStack: e.getRedoStack(),
              lastChangeType: e.getLastChangeType()
            });
          });
        }, [h, r.raw]), c.default.useEffect(function () {
          h(function (e) {
            var t = e.getCurrentContent(),
                n = (0, g.createWithContent)(t);
            return l.EditorState.set(n, {
              selection: e.getSelection(),
              undoStack: e.getUndoStack(),
              redoStack: e.getRedoStack(),
              lastChangeType: e.getLastChangeType()
            });
          });
        }, [M, h]), a && p && v && y ? c.default.createElement(e, (0, o.default)({}, t, {
          onClick: k,
          ref: n
        }), c.default.createElement(l.Editor, {
          readOnly: !S,
          customStyleFn: (0, f.getCustomStyleFn)(p),
          customStyleMap: f.customStyleMap,
          editorState: b,
          blockRenderMap: M,
          blockRendererFn: s.default,
          onChange: h,
          ref: O
        })) : null;
      };

      return t.displayName = "withTextEditable(Text)", c.default.memo(c.default.forwardRef(t));
    };

    t.default = v;
  },
  638: function (e, t, n) {
    "use strict";

    var r = n(416);
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;

    var a = r(n(464)),
        o = r(n(12)),
        u = r(n(0)),
        c = r(n(64)),
        l = n(425),
        i = r(n(431)),
        f = r(n(461)),
        d = function (e) {
      var t = function (t, n) {
        var r = t.data.raw,
            i = t.editWidget,
            d = u.default.useState(function () {
          return (0, f.default)(r);
        }),
            s = (0, o.default)(d, 2),
            g = s[0],
            p = s[1],
            v = u.default.useRef(null);
        u.default.useEffect(function () {
          v.current = r;
        }, []);
        var y = u.default.useMemo(function () {
          return c.default.debounce(1e3, function (e) {
            var t = e.getCurrentContent(),
                n = (0, l.convertToRaw)(t);
            c.default.isEqual(n, v.current) || (v.current = n, i({
              raw: n
            }));
          });
        }, [i]),
            m = u.default.useCallback(function (e) {
          "function" == typeof e || y(e), p(e);
        }, [y]);
        return u.default.createElement(e, (0, a.default)({}, t, {
          ref: n,
          editorState: g,
          setEditorState: m
        }));
      };

      return t.displayName = "withEditorState(".concat((0, i.default)(e), ")"), u.default.memo(u.default.forwardRef(t));
    };

    t.default = d;
  },
  643: function (e, t, n) {
    "use strict";

    var r = n(416);
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = {
      withEditable: !0,
      withEditorState: !0
    };
    t.default = void 0, Object.defineProperty(t, "withEditable", {
      enumerable: !0,
      get: function () {
        return i.default;
      }
    }), Object.defineProperty(t, "withEditorState", {
      enumerable: !0,
      get: function () {
        return f.default;
      }
    });
    var o = n(100),
        u = r(n(448)),
        c = r(n(534)),
        l = r(n(634)),
        i = r(n(636)),
        f = r(n(638)),
        d = n(511);
    Object.keys(d).forEach(function (e) {
      "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(a, e) || e in t && t[e] === d[e] || Object.defineProperty(t, e, {
        enumerable: !0,
        get: function () {
          return d[e];
        }
      }));
    });
    var s = (0, u.default)((0, o.withAnimation)((0, o.withTrigger)((0, l.default)(c.default))));
    t.default = s;
  }
}]);
//# sourceMappingURL=4.index.js.map