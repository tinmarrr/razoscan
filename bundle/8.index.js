"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[8], {
  424: function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, "default", function () {
      return i;
    }), n.d(t, "Flex", function () {
      return u;
    });
    var r = n(436),
        u = r.b,
        i = r.a;
  },
  639: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = d(n(0)),
        u = d(n(34)),
        i = d(n(424)),
        a = n(171);

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function s() {
      return (s = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }

        return e;
      }).apply(this, arguments);
    }

    var f = {
      flexGrow: 1
    },
        l = function (e, t) {
      var n = e.data,
          d = e.gridspec,
          l = e.widgetspec,
          o = e.colorspec,
          c = e.effectspec,
          p = e.isPassive,
          v = void 0 !== p && p,
          g = e.onClick,
          w = n.link,
          _ = r.default.useMemo(function () {
        var e;
        if (!(n.designId && l && d && o && c)) return null;
        var t = n.designs && n.designs[n.designId] || null || (null === (e = l.rectangle) || void 0 === e ? void 0 : e.find(function (e) {
          return e._id === n.designId;
        }));
        return t ? (0, a.getDesignSx)({
          design: t,
          gridspec: d,
          colorspec: o,
          effectspec: c,
          widgetspec: l
        }) : null;
      }, [n, l, d, o, c]),
          b = r.default.useMemo(function () {
        return !v && w && w.href ? {
          as: "a",
          href: w.href,
          target: w.isNewTab ? "_blank" : "_self"
        } : {
          as: "div"
        };
      }, [v, w]),
          h = r.default.useMemo(function () {
        return (0, u.default)(f, _);
      }, [_]);

      return r.default.createElement(i.default, s({
        id: n.id,
        className: n.className,
        ref: t,
        sx: h,
        onClick: g
      }, b));
    },
        o = r.default.memo(r.default.forwardRef(l));

    t.default = o;
  },
  644: function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r,
        u = n(100),
        i = (r = n(639)) && r.__esModule ? r : {
      default: r
    };
    var a = (0, u.withAnimation)((0, u.withTrigger)(i.default));
    t.default = a;
  }
}]);
//# sourceMappingURL=8.index.js.map