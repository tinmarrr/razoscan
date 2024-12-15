"use strict";

(window.webpackJsonp = window.webpackJsonp || []).push([[3], Array(413).concat([function (t, e, r) {
  t.exports = function () {
    "use strict";

    var t = Array.prototype.slice;

    function e(t, e) {
      e && (t.prototype = Object.create(e.prototype)), t.prototype.constructor = t;
    }

    function r(t) {
      return u(t) ? t : U(t);
    }

    function n(t) {
      return a(t) ? t : q(t);
    }

    function i(t) {
      return s(t) ? t : H(t);
    }

    function o(t) {
      return u(t) && !c(t) ? t : W(t);
    }

    function u(t) {
      return !(!t || !t[l]);
    }

    function a(t) {
      return !(!t || !t[h]);
    }

    function s(t) {
      return !(!t || !t[p]);
    }

    function c(t) {
      return a(t) || s(t);
    }

    function f(t) {
      return !(!t || !t[d]);
    }

    e(n, r), e(i, r), e(o, r), r.isIterable = u, r.isKeyed = a, r.isIndexed = s, r.isAssociative = c, r.isOrdered = f, r.Keyed = n, r.Indexed = i, r.Set = o;
    var l = "@@__IMMUTABLE_ITERABLE__@@",
        h = "@@__IMMUTABLE_KEYED__@@",
        p = "@@__IMMUTABLE_INDEXED__@@",
        d = "@@__IMMUTABLE_ORDERED__@@",
        g = {},
        v = {
      value: !1
    },
        y = {
      value: !1
    };

    function _(t) {
      return t.value = !1, t;
    }

    function m(t) {
      t && (t.value = !0);
    }

    function b() {}

    function S(t, e) {
      e = e || 0;

      for (var r = Math.max(0, t.length - e), n = new Array(r), i = 0; i < r; i++) n[i] = t[i + e];

      return n;
    }

    function w(t) {
      return void 0 === t.size && (t.size = t.__iterate(k)), t.size;
    }

    function x(t, e) {
      if ("number" != typeof e) {
        var r = e >>> 0;
        if ("" + r !== e || 4294967295 === r) return NaN;
        e = r;
      }

      return e < 0 ? w(t) + e : e;
    }

    function k() {
      return !0;
    }

    function E(t, e, r) {
      return (0 === t || void 0 !== r && t <= -r) && (void 0 === e || void 0 !== r && e >= r);
    }

    function O(t, e) {
      return D(t, e, 0);
    }

    function C(t, e) {
      return D(t, e, e);
    }

    function D(t, e, r) {
      return void 0 === t ? r : t < 0 ? Math.max(0, e + t) : void 0 === e ? t : Math.min(e, t);
    }

    var I,
        M,
        A,
        K = "function" == typeof Symbol && Symbol.iterator,
        T = K || "@@iterator";

    function z(t) {
      this.next = t;
    }

    function B(t, e, r, n) {
      var i = 0 === t ? e : 1 === t ? r : [e, r];
      return n ? n.value = i : n = {
        value: i,
        done: !1
      }, n;
    }

    function R() {
      return {
        value: void 0,
        done: !0
      };
    }

    function L(t) {
      return !!F(t);
    }

    function j(t) {
      return t && "function" == typeof t.next;
    }

    function N(t) {
      var e = F(t);
      return e && e.call(t);
    }

    function F(t) {
      var e = t && (K && t[K] || t["@@iterator"]);
      if ("function" == typeof e) return e;
    }

    function P(t) {
      return t && "number" == typeof t.length;
    }

    function U(t) {
      return null == t ? Y() : u(t) ? t.toSeq() : function (t) {
        var e = tt(t) || "object" == typeof t && new J(t);
        if (!e) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + t);
        return e;
      }(t);
    }

    function q(t) {
      return null == t ? Y().toKeyedSeq() : u(t) ? a(t) ? t.toSeq() : t.fromEntrySeq() : $(t);
    }

    function H(t) {
      return null == t ? Y() : u(t) ? a(t) ? t.entrySeq() : t.toIndexedSeq() : Q(t);
    }

    function W(t) {
      return (null == t ? Y() : u(t) ? a(t) ? t.entrySeq() : t : Q(t)).toSetSeq();
    }

    function V(t) {
      this._array = t, this.size = t.length;
    }

    function J(t) {
      var e = Object.keys(t);
      this._object = t, this._keys = e, this.size = e.length;
    }

    function G(t) {
      this._iterable = t, this.size = t.length || t.size;
    }

    function Z(t) {
      this._iterator = t, this._iteratorCache = [];
    }

    function X(t) {
      return !(!t || !t["@@__IMMUTABLE_SEQ__@@"]);
    }

    function Y() {
      return I || (I = new V([]));
    }

    function $(t) {
      var e = Array.isArray(t) ? new V(t).fromEntrySeq() : j(t) ? new Z(t).fromEntrySeq() : L(t) ? new G(t).fromEntrySeq() : "object" == typeof t ? new J(t) : void 0;
      if (!e) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + t);
      return e;
    }

    function Q(t) {
      var e = tt(t);
      if (!e) throw new TypeError("Expected Array or iterable object of values: " + t);
      return e;
    }

    function tt(t) {
      return P(t) ? new V(t) : j(t) ? new Z(t) : L(t) ? new G(t) : void 0;
    }

    function et(t, e, r, n) {
      var i = t._cache;

      if (i) {
        for (var o = i.length - 1, u = 0; u <= o; u++) {
          var a = i[r ? o - u : u];
          if (!1 === e(a[1], n ? a[0] : u, t)) return u + 1;
        }

        return u;
      }

      return t.__iterateUncached(e, r);
    }

    function rt(t, e, r, n) {
      var i = t._cache;

      if (i) {
        var o = i.length - 1,
            u = 0;
        return new z(function () {
          var t = i[r ? o - u : u];
          return u++ > o ? {
            value: void 0,
            done: !0
          } : B(e, n ? t[0] : u - 1, t[1]);
        });
      }

      return t.__iteratorUncached(e, r);
    }

    function nt(t, e) {
      return e ? function t(e, r, n, i) {
        return Array.isArray(r) ? e.call(i, n, H(r).map(function (n, i) {
          return t(e, n, i, r);
        })) : ot(r) ? e.call(i, n, q(r).map(function (n, i) {
          return t(e, n, i, r);
        })) : r;
      }(e, t, "", {
        "": t
      }) : it(t);
    }

    function it(t) {
      return Array.isArray(t) ? H(t).map(it).toList() : ot(t) ? q(t).map(it).toMap() : t;
    }

    function ot(t) {
      return t && (t.constructor === Object || void 0 === t.constructor);
    }

    function ut(t, e) {
      if (t === e || t != t && e != e) return !0;
      if (!t || !e) return !1;

      if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
        if ((t = t.valueOf()) === (e = e.valueOf()) || t != t && e != e) return !0;
        if (!t || !e) return !1;
      }

      return !("function" != typeof t.equals || "function" != typeof e.equals || !t.equals(e));
    }

    function at(t, e) {
      if (t === e) return !0;
      if (!u(e) || void 0 !== t.size && void 0 !== e.size && t.size !== e.size || void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash || a(t) !== a(e) || s(t) !== s(e) || f(t) !== f(e)) return !1;
      if (0 === t.size && 0 === e.size) return !0;
      var r = !c(t);

      if (f(t)) {
        var n = t.entries();
        return e.every(function (t, e) {
          var i = n.next().value;
          return i && ut(i[1], t) && (r || ut(i[0], e));
        }) && n.next().done;
      }

      var i = !1;
      if (void 0 === t.size) if (void 0 === e.size) "function" == typeof t.cacheResult && t.cacheResult();else {
        i = !0;
        var o = t;
        t = e, e = o;
      }

      var l = !0,
          h = e.__iterate(function (e, n) {
        if (r ? !t.has(e) : i ? !ut(e, t.get(n, g)) : !ut(t.get(n, g), e)) return l = !1, !1;
      });

      return l && t.size === h;
    }

    function st(t, e) {
      if (!(this instanceof st)) return new st(t, e);

      if (this._value = t, this.size = void 0 === e ? 1 / 0 : Math.max(0, e), 0 === this.size) {
        if (M) return M;
        M = this;
      }
    }

    function ct(t, e) {
      if (!t) throw new Error(e);
    }

    function ft(t, e, r) {
      if (!(this instanceof ft)) return new ft(t, e, r);

      if (ct(0 !== r, "Cannot step a Range by 0"), t = t || 0, void 0 === e && (e = 1 / 0), r = void 0 === r ? 1 : Math.abs(r), e < t && (r = -r), this._start = t, this._end = e, this._step = r, this.size = Math.max(0, Math.ceil((e - t) / r - 1) + 1), 0 === this.size) {
        if (A) return A;
        A = this;
      }
    }

    function lt() {
      throw TypeError("Abstract");
    }

    function ht() {}

    function pt() {}

    function dt() {}

    z.prototype.toString = function () {
      return "[Iterator]";
    }, z.KEYS = 0, z.VALUES = 1, z.ENTRIES = 2, z.prototype.inspect = z.prototype.toSource = function () {
      return this.toString();
    }, z.prototype[T] = function () {
      return this;
    }, e(U, r), U.of = function () {
      return U(arguments);
    }, U.prototype.toSeq = function () {
      return this;
    }, U.prototype.toString = function () {
      return this.__toString("Seq {", "}");
    }, U.prototype.cacheResult = function () {
      return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this;
    }, U.prototype.__iterate = function (t, e) {
      return et(this, t, e, !0);
    }, U.prototype.__iterator = function (t, e) {
      return rt(this, t, e, !0);
    }, e(q, U), q.prototype.toKeyedSeq = function () {
      return this;
    }, e(H, U), H.of = function () {
      return H(arguments);
    }, H.prototype.toIndexedSeq = function () {
      return this;
    }, H.prototype.toString = function () {
      return this.__toString("Seq [", "]");
    }, H.prototype.__iterate = function (t, e) {
      return et(this, t, e, !1);
    }, H.prototype.__iterator = function (t, e) {
      return rt(this, t, e, !1);
    }, e(W, U), W.of = function () {
      return W(arguments);
    }, W.prototype.toSetSeq = function () {
      return this;
    }, U.isSeq = X, U.Keyed = q, U.Set = W, U.Indexed = H, U.prototype["@@__IMMUTABLE_SEQ__@@"] = !0, e(V, H), V.prototype.get = function (t, e) {
      return this.has(t) ? this._array[x(this, t)] : e;
    }, V.prototype.__iterate = function (t, e) {
      for (var r = this._array, n = r.length - 1, i = 0; i <= n; i++) if (!1 === t(r[e ? n - i : i], i, this)) return i + 1;

      return i;
    }, V.prototype.__iterator = function (t, e) {
      var r = this._array,
          n = r.length - 1,
          i = 0;
      return new z(function () {
        return i > n ? {
          value: void 0,
          done: !0
        } : B(t, i, r[e ? n - i++ : i++]);
      });
    }, e(J, q), J.prototype.get = function (t, e) {
      return void 0 === e || this.has(t) ? this._object[t] : e;
    }, J.prototype.has = function (t) {
      return this._object.hasOwnProperty(t);
    }, J.prototype.__iterate = function (t, e) {
      for (var r = this._object, n = this._keys, i = n.length - 1, o = 0; o <= i; o++) {
        var u = n[e ? i - o : o];
        if (!1 === t(r[u], u, this)) return o + 1;
      }

      return o;
    }, J.prototype.__iterator = function (t, e) {
      var r = this._object,
          n = this._keys,
          i = n.length - 1,
          o = 0;
      return new z(function () {
        var u = n[e ? i - o : o];
        return o++ > i ? {
          value: void 0,
          done: !0
        } : B(t, u, r[u]);
      });
    }, J.prototype[d] = !0, e(G, H), G.prototype.__iterateUncached = function (t, e) {
      if (e) return this.cacheResult().__iterate(t, e);
      var r = N(this._iterable),
          n = 0;
      if (j(r)) for (var i; !(i = r.next()).done && !1 !== t(i.value, n++, this););
      return n;
    }, G.prototype.__iteratorUncached = function (t, e) {
      if (e) return this.cacheResult().__iterator(t, e);
      var r = N(this._iterable);
      if (!j(r)) return new z(R);
      var n = 0;
      return new z(function () {
        var e = r.next();
        return e.done ? e : B(t, n++, e.value);
      });
    }, e(Z, H), Z.prototype.__iterateUncached = function (t, e) {
      if (e) return this.cacheResult().__iterate(t, e);

      for (var r, n = this._iterator, i = this._iteratorCache, o = 0; o < i.length;) if (!1 === t(i[o], o++, this)) return o;

      for (; !(r = n.next()).done;) {
        var u = r.value;
        if (i[o] = u, !1 === t(u, o++, this)) break;
      }

      return o;
    }, Z.prototype.__iteratorUncached = function (t, e) {
      if (e) return this.cacheResult().__iterator(t, e);
      var r = this._iterator,
          n = this._iteratorCache,
          i = 0;
      return new z(function () {
        if (i >= n.length) {
          var e = r.next();
          if (e.done) return e;
          n[i] = e.value;
        }

        return B(t, i, n[i++]);
      });
    }, e(st, H), st.prototype.toString = function () {
      return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
    }, st.prototype.get = function (t, e) {
      return this.has(t) ? this._value : e;
    }, st.prototype.includes = function (t) {
      return ut(this._value, t);
    }, st.prototype.slice = function (t, e) {
      var r = this.size;
      return E(t, e, r) ? this : new st(this._value, C(e, r) - O(t, r));
    }, st.prototype.reverse = function () {
      return this;
    }, st.prototype.indexOf = function (t) {
      return ut(this._value, t) ? 0 : -1;
    }, st.prototype.lastIndexOf = function (t) {
      return ut(this._value, t) ? this.size : -1;
    }, st.prototype.__iterate = function (t, e) {
      for (var r = 0; r < this.size; r++) if (!1 === t(this._value, r, this)) return r + 1;

      return r;
    }, st.prototype.__iterator = function (t, e) {
      var r = this,
          n = 0;
      return new z(function () {
        return n < r.size ? B(t, n++, r._value) : {
          value: void 0,
          done: !0
        };
      });
    }, st.prototype.equals = function (t) {
      return t instanceof st ? ut(this._value, t._value) : at(t);
    }, e(ft, H), ft.prototype.toString = function () {
      return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]";
    }, ft.prototype.get = function (t, e) {
      return this.has(t) ? this._start + x(this, t) * this._step : e;
    }, ft.prototype.includes = function (t) {
      var e = (t - this._start) / this._step;
      return e >= 0 && e < this.size && e === Math.floor(e);
    }, ft.prototype.slice = function (t, e) {
      return E(t, e, this.size) ? this : (t = O(t, this.size), (e = C(e, this.size)) <= t ? new ft(0, 0) : new ft(this.get(t, this._end), this.get(e, this._end), this._step));
    }, ft.prototype.indexOf = function (t) {
      var e = t - this._start;

      if (e % this._step == 0) {
        var r = e / this._step;
        if (r >= 0 && r < this.size) return r;
      }

      return -1;
    }, ft.prototype.lastIndexOf = function (t) {
      return this.indexOf(t);
    }, ft.prototype.__iterate = function (t, e) {
      for (var r = this.size - 1, n = this._step, i = e ? this._start + r * n : this._start, o = 0; o <= r; o++) {
        if (!1 === t(i, o, this)) return o + 1;
        i += e ? -n : n;
      }

      return o;
    }, ft.prototype.__iterator = function (t, e) {
      var r = this.size - 1,
          n = this._step,
          i = e ? this._start + r * n : this._start,
          o = 0;
      return new z(function () {
        var u = i;
        return i += e ? -n : n, o > r ? {
          value: void 0,
          done: !0
        } : B(t, o++, u);
      });
    }, ft.prototype.equals = function (t) {
      return t instanceof ft ? this._start === t._start && this._end === t._end && this._step === t._step : at(this, t);
    }, e(lt, r), e(ht, lt), e(pt, lt), e(dt, lt), lt.Keyed = ht, lt.Indexed = pt, lt.Set = dt;
    var gt = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function (t, e) {
      var r = 65535 & (t |= 0),
          n = 65535 & (e |= 0);
      return r * n + ((t >>> 16) * n + r * (e >>> 16) << 16 >>> 0) | 0;
    };

    function vt(t) {
      return t >>> 1 & 1073741824 | 3221225471 & t;
    }

    function yt(t) {
      if (!1 === t || null == t) return 0;
      if ("function" == typeof t.valueOf && (!1 === (t = t.valueOf()) || null == t)) return 0;
      if (!0 === t) return 1;
      var e = typeof t;

      if ("number" === e) {
        var r = 0 | t;

        for (r !== t && (r ^= 4294967295 * t); t > 4294967295;) r ^= t /= 4294967295;

        return vt(r);
      }

      if ("string" === e) return t.length > Et ? function (t) {
        var e = Dt[t];
        return void 0 === e && (e = _t(t), Ct === Ot && (Ct = 0, Dt = {}), Ct++, Dt[t] = e), e;
      }(t) : _t(t);
      if ("function" == typeof t.hashCode) return t.hashCode();
      if ("object" === e) return function (t) {
        var e;
        if (wt && void 0 !== (e = mt.get(t))) return e;
        if (void 0 !== (e = t[kt])) return e;

        if (!St) {
          if (void 0 !== (e = t.propertyIsEnumerable && t.propertyIsEnumerable[kt])) return e;
          if (void 0 !== (e = function (t) {
            if (t && t.nodeType > 0) switch (t.nodeType) {
              case 1:
                return t.uniqueID;

              case 9:
                return t.documentElement && t.documentElement.uniqueID;
            }
          }(t))) return e;
        }

        if (e = ++xt, 1073741824 & xt && (xt = 0), wt) mt.set(t, e);else {
          if (void 0 !== bt && !1 === bt(t)) throw new Error("Non-extensible objects are not allowed as keys.");
          if (St) Object.defineProperty(t, kt, {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: e
          });else if (void 0 !== t.propertyIsEnumerable && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable) t.propertyIsEnumerable = function () {
            return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
          }, t.propertyIsEnumerable[kt] = e;else {
            if (void 0 === t.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
            t[kt] = e;
          }
        }
        return e;
      }(t);
      if ("function" == typeof t.toString) return _t(t.toString());
      throw new Error("Value type " + e + " cannot be hashed.");
    }

    function _t(t) {
      for (var e = 0, r = 0; r < t.length; r++) e = 31 * e + t.charCodeAt(r) | 0;

      return vt(e);
    }

    var mt,
        bt = Object.isExtensible,
        St = function () {
      try {
        return Object.defineProperty({}, "@", {}), !0;
      } catch (t) {
        return !1;
      }
    }(),
        wt = "function" == typeof WeakMap;

    wt && (mt = new WeakMap());
    var xt = 0,
        kt = "__immutablehash__";
    "function" == typeof Symbol && (kt = Symbol(kt));
    var Et = 16,
        Ot = 255,
        Ct = 0,
        Dt = {};

    function It(t) {
      ct(t !== 1 / 0, "Cannot perform this action with an infinite size.");
    }

    function Mt(t) {
      return null == t ? Ht() : At(t) && !f(t) ? t : Ht().withMutations(function (e) {
        var r = n(t);
        It(r.size), r.forEach(function (t, r) {
          return e.set(r, t);
        });
      });
    }

    function At(t) {
      return !(!t || !t[Tt]);
    }

    e(Mt, ht), Mt.prototype.toString = function () {
      return this.__toString("Map {", "}");
    }, Mt.prototype.get = function (t, e) {
      return this._root ? this._root.get(0, void 0, t, e) : e;
    }, Mt.prototype.set = function (t, e) {
      return Wt(this, t, e);
    }, Mt.prototype.setIn = function (t, e) {
      return this.updateIn(t, g, function () {
        return e;
      });
    }, Mt.prototype.remove = function (t) {
      return Wt(this, t, g);
    }, Mt.prototype.deleteIn = function (t) {
      return this.updateIn(t, function () {
        return g;
      });
    }, Mt.prototype.update = function (t, e, r) {
      return 1 === arguments.length ? t(this) : this.updateIn([t], e, r);
    }, Mt.prototype.updateIn = function (t, e, r) {
      r || (r = e, e = void 0);

      var n = function t(e, r, n, i) {
        var o = e === g,
            u = r.next();

        if (u.done) {
          var a = o ? n : e,
              s = i(a);
          return s === a ? e : s;
        }

        ct(o || e && e.set, "invalid keyPath");
        var c = u.value,
            f = o ? g : e.get(c, g),
            l = t(f, r, n, i);
        return l === f ? e : l === g ? e.remove(c) : (o ? Ht() : e).set(c, l);
      }(this, Ze(t), e, r);

      return n === g ? void 0 : n;
    }, Mt.prototype.clear = function () {
      return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : Ht();
    }, Mt.prototype.merge = function () {
      return Zt(this, void 0, arguments);
    }, Mt.prototype.mergeWith = function (e) {
      var r = t.call(arguments, 1);
      return Zt(this, e, r);
    }, Mt.prototype.mergeIn = function (e) {
      var r = t.call(arguments, 1);
      return this.updateIn(e, Ht(), function (t) {
        return "function" == typeof t.merge ? t.merge.apply(t, r) : r[r.length - 1];
      });
    }, Mt.prototype.mergeDeep = function () {
      return Zt(this, Xt, arguments);
    }, Mt.prototype.mergeDeepWith = function (e) {
      var r = t.call(arguments, 1);
      return Zt(this, Yt(e), r);
    }, Mt.prototype.mergeDeepIn = function (e) {
      var r = t.call(arguments, 1);
      return this.updateIn(e, Ht(), function (t) {
        return "function" == typeof t.mergeDeep ? t.mergeDeep.apply(t, r) : r[r.length - 1];
      });
    }, Mt.prototype.sort = function (t) {
      return Se(je(this, t));
    }, Mt.prototype.sortBy = function (t, e) {
      return Se(je(this, e, t));
    }, Mt.prototype.withMutations = function (t) {
      var e = this.asMutable();
      return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this;
    }, Mt.prototype.asMutable = function () {
      return this.__ownerID ? this : this.__ensureOwner(new b());
    }, Mt.prototype.asImmutable = function () {
      return this.__ensureOwner();
    }, Mt.prototype.wasAltered = function () {
      return this.__altered;
    }, Mt.prototype.__iterator = function (t, e) {
      return new Ft(this, t, e);
    }, Mt.prototype.__iterate = function (t, e) {
      var r = this,
          n = 0;
      return this._root && this._root.iterate(function (e) {
        return n++, t(e[1], e[0], r);
      }, e), n;
    }, Mt.prototype.__ensureOwner = function (t) {
      return t === this.__ownerID ? this : t ? qt(this.size, this._root, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this);
    }, Mt.isMap = At;
    var Kt,
        Tt = "@@__IMMUTABLE_MAP__@@",
        zt = Mt.prototype;

    function Bt(t, e) {
      this.ownerID = t, this.entries = e;
    }

    function Rt(t, e, r) {
      this.ownerID = t, this.bitmap = e, this.nodes = r;
    }

    function Lt(t, e, r) {
      this.ownerID = t, this.count = e, this.nodes = r;
    }

    function jt(t, e, r) {
      this.ownerID = t, this.keyHash = e, this.entries = r;
    }

    function Nt(t, e, r) {
      this.ownerID = t, this.keyHash = e, this.entry = r;
    }

    function Ft(t, e, r) {
      this._type = e, this._reverse = r, this._stack = t._root && Ut(t._root);
    }

    function Pt(t, e) {
      return B(t, e[0], e[1]);
    }

    function Ut(t, e) {
      return {
        node: t,
        index: 0,
        __prev: e
      };
    }

    function qt(t, e, r, n) {
      var i = Object.create(zt);
      return i.size = t, i._root = e, i.__ownerID = r, i.__hash = n, i.__altered = !1, i;
    }

    function Ht() {
      return Kt || (Kt = qt(0));
    }

    function Wt(t, e, r) {
      var n, i;

      if (t._root) {
        var o = _(v),
            u = _(y);

        if (n = Vt(t._root, t.__ownerID, 0, void 0, e, r, o, u), !u.value) return t;
        i = t.size + (o.value ? r === g ? -1 : 1 : 0);
      } else {
        if (r === g) return t;
        i = 1, n = new Bt(t.__ownerID, [[e, r]]);
      }

      return t.__ownerID ? (t.size = i, t._root = n, t.__hash = void 0, t.__altered = !0, t) : n ? qt(i, n) : Ht();
    }

    function Vt(t, e, r, n, i, o, u, a) {
      return t ? t.update(e, r, n, i, o, u, a) : o === g ? t : (m(a), m(u), new Nt(e, n, [i, o]));
    }

    function Jt(t) {
      return t.constructor === Nt || t.constructor === jt;
    }

    function Gt(t, e, r, n, i) {
      if (t.keyHash === n) return new jt(e, n, [t.entry, i]);
      var o,
          u = 31 & (0 === r ? t.keyHash : t.keyHash >>> r),
          a = 31 & (0 === r ? n : n >>> r);
      return new Rt(e, 1 << u | 1 << a, u === a ? [Gt(t, e, r + 5, n, i)] : (o = new Nt(e, n, i), u < a ? [t, o] : [o, t]));
    }

    function Zt(t, e, r) {
      for (var i = [], o = 0; o < r.length; o++) {
        var a = r[o],
            s = n(a);
        u(a) || (s = s.map(function (t) {
          return nt(t);
        })), i.push(s);
      }

      return $t(t, e, i);
    }

    function Xt(t, e, r) {
      return t && t.mergeDeep && u(e) ? t.mergeDeep(e) : ut(t, e) ? t : e;
    }

    function Yt(t) {
      return function (e, r, n) {
        if (e && e.mergeDeepWith && u(r)) return e.mergeDeepWith(t, r);
        var i = t(e, r, n);
        return ut(e, i) ? e : i;
      };
    }

    function $t(t, e, r) {
      return 0 === (r = r.filter(function (t) {
        return 0 !== t.size;
      })).length ? t : 0 !== t.size || t.__ownerID || 1 !== r.length ? t.withMutations(function (t) {
        for (var n = e ? function (r, n) {
          t.update(n, g, function (t) {
            return t === g ? r : e(t, r, n);
          });
        } : function (e, r) {
          t.set(r, e);
        }, i = 0; i < r.length; i++) r[i].forEach(n);
      }) : t.constructor(r[0]);
    }

    function Qt(t) {
      return t = (t = (858993459 & (t -= t >> 1 & 1431655765)) + (t >> 2 & 858993459)) + (t >> 4) & 252645135, t += t >> 8, 127 & (t += t >> 16);
    }

    function te(t, e, r, n) {
      var i = n ? t : S(t);
      return i[e] = r, i;
    }

    zt[Tt] = !0, zt.delete = zt.remove, zt.removeIn = zt.deleteIn, Bt.prototype.get = function (t, e, r, n) {
      for (var i = this.entries, o = 0, u = i.length; o < u; o++) if (ut(r, i[o][0])) return i[o][1];

      return n;
    }, Bt.prototype.update = function (t, e, r, n, i, o, u) {
      for (var a = i === g, s = this.entries, c = 0, f = s.length; c < f && !ut(n, s[c][0]); c++);

      var l = c < f;
      if (l ? s[c][1] === i : a) return this;

      if (m(u), (a || !l) && m(o), !a || 1 !== s.length) {
        if (!l && !a && s.length >= ee) return function (t, e, r, n) {
          t || (t = new b());

          for (var i = new Nt(t, yt(r), [r, n]), o = 0; o < e.length; o++) {
            var u = e[o];
            i = i.update(t, 0, void 0, u[0], u[1]);
          }

          return i;
        }(t, s, n, i);
        var h = t && t === this.ownerID,
            p = h ? s : S(s);
        return l ? a ? c === f - 1 ? p.pop() : p[c] = p.pop() : p[c] = [n, i] : p.push([n, i]), h ? (this.entries = p, this) : new Bt(t, p);
      }
    }, Rt.prototype.get = function (t, e, r, n) {
      void 0 === e && (e = yt(r));
      var i = 1 << (31 & (0 === t ? e : e >>> t)),
          o = this.bitmap;
      return 0 == (o & i) ? n : this.nodes[Qt(o & i - 1)].get(t + 5, e, r, n);
    }, Rt.prototype.update = function (t, e, r, n, i, o, u) {
      void 0 === r && (r = yt(n));
      var a = 31 & (0 === e ? r : r >>> e),
          s = 1 << a,
          c = this.bitmap,
          f = 0 != (c & s);
      if (!f && i === g) return this;
      var l = Qt(c & s - 1),
          h = this.nodes,
          p = f ? h[l] : void 0,
          d = Vt(p, t, e + 5, r, n, i, o, u);
      if (d === p) return this;
      if (!f && d && h.length >= re) return function (t, e, r, n, i) {
        for (var o = 0, u = new Array(32), a = 0; 0 !== r; a++, r >>>= 1) u[a] = 1 & r ? e[o++] : void 0;

        return u[n] = i, new Lt(t, o + 1, u);
      }(t, h, c, a, d);
      if (f && !d && 2 === h.length && Jt(h[1 ^ l])) return h[1 ^ l];
      if (f && d && 1 === h.length && Jt(d)) return d;

      var v = t && t === this.ownerID,
          y = f ? d ? c : c ^ s : c | s,
          _ = f ? d ? te(h, l, d, v) : function (t, e, r) {
        var n = t.length - 1;
        if (r && e === n) return t.pop(), t;

        for (var i = new Array(n), o = 0, u = 0; u < n; u++) u === e && (o = 1), i[u] = t[u + o];

        return i;
      }(h, l, v) : function (t, e, r, n) {
        var i = t.length + 1;
        if (n && e + 1 === i) return t[e] = r, t;

        for (var o = new Array(i), u = 0, a = 0; a < i; a++) a === e ? (o[a] = r, u = -1) : o[a] = t[a + u];

        return o;
      }(h, l, d, v);

      return v ? (this.bitmap = y, this.nodes = _, this) : new Rt(t, y, _);
    }, Lt.prototype.get = function (t, e, r, n) {
      void 0 === e && (e = yt(r));
      var i = 31 & (0 === t ? e : e >>> t),
          o = this.nodes[i];
      return o ? o.get(t + 5, e, r, n) : n;
    }, Lt.prototype.update = function (t, e, r, n, i, o, u) {
      void 0 === r && (r = yt(n));
      var a = 31 & (0 === e ? r : r >>> e),
          s = i === g,
          c = this.nodes,
          f = c[a];
      if (s && !f) return this;
      var l = Vt(f, t, e + 5, r, n, i, o, u);
      if (l === f) return this;
      var h = this.count;

      if (f) {
        if (!l && --h < ne) return function (t, e, r, n) {
          for (var i = 0, o = 0, u = new Array(r), a = 0, s = 1, c = e.length; a < c; a++, s <<= 1) {
            var f = e[a];
            void 0 !== f && a !== n && (i |= s, u[o++] = f);
          }

          return new Rt(t, i, u);
        }(t, c, h, a);
      } else h++;

      var p = t && t === this.ownerID,
          d = te(c, a, l, p);
      return p ? (this.count = h, this.nodes = d, this) : new Lt(t, h, d);
    }, jt.prototype.get = function (t, e, r, n) {
      for (var i = this.entries, o = 0, u = i.length; o < u; o++) if (ut(r, i[o][0])) return i[o][1];

      return n;
    }, jt.prototype.update = function (t, e, r, n, i, o, u) {
      void 0 === r && (r = yt(n));
      var a = i === g;
      if (r !== this.keyHash) return a ? this : (m(u), m(o), Gt(this, t, e, r, [n, i]));

      for (var s = this.entries, c = 0, f = s.length; c < f && !ut(n, s[c][0]); c++);

      var l = c < f;
      if (l ? s[c][1] === i : a) return this;
      if (m(u), (a || !l) && m(o), a && 2 === f) return new Nt(t, this.keyHash, s[1 ^ c]);
      var h = t && t === this.ownerID,
          p = h ? s : S(s);
      return l ? a ? c === f - 1 ? p.pop() : p[c] = p.pop() : p[c] = [n, i] : p.push([n, i]), h ? (this.entries = p, this) : new jt(t, this.keyHash, p);
    }, Nt.prototype.get = function (t, e, r, n) {
      return ut(r, this.entry[0]) ? this.entry[1] : n;
    }, Nt.prototype.update = function (t, e, r, n, i, o, u) {
      var a = i === g,
          s = ut(n, this.entry[0]);
      return (s ? i === this.entry[1] : a) ? this : (m(u), a ? void m(o) : s ? t && t === this.ownerID ? (this.entry[1] = i, this) : new Nt(t, this.keyHash, [n, i]) : (m(o), Gt(this, t, e, yt(n), [n, i])));
    }, Bt.prototype.iterate = jt.prototype.iterate = function (t, e) {
      for (var r = this.entries, n = 0, i = r.length - 1; n <= i; n++) if (!1 === t(r[e ? i - n : n])) return !1;
    }, Rt.prototype.iterate = Lt.prototype.iterate = function (t, e) {
      for (var r = this.nodes, n = 0, i = r.length - 1; n <= i; n++) {
        var o = r[e ? i - n : n];
        if (o && !1 === o.iterate(t, e)) return !1;
      }
    }, Nt.prototype.iterate = function (t, e) {
      return t(this.entry);
    }, e(Ft, z), Ft.prototype.next = function () {
      for (var t = this._type, e = this._stack; e;) {
        var r,
            n = e.node,
            i = e.index++;

        if (n.entry) {
          if (0 === i) return Pt(t, n.entry);
        } else if (n.entries) {
          if (i <= (r = n.entries.length - 1)) return Pt(t, n.entries[this._reverse ? r - i : i]);
        } else if (i <= (r = n.nodes.length - 1)) {
          var o = n.nodes[this._reverse ? r - i : i];

          if (o) {
            if (o.entry) return Pt(t, o.entry);
            e = this._stack = Ut(o, e);
          }

          continue;
        }

        e = this._stack = this._stack.__prev;
      }

      return {
        value: void 0,
        done: !0
      };
    };
    var ee = 8,
        re = 16,
        ne = 8;

    function ie(t) {
      var e = de();
      if (null == t) return e;
      if (oe(t)) return t;
      var r = i(t),
          n = r.size;
      return 0 === n ? e : (It(n), n > 0 && n < 32 ? pe(0, n, 5, null, new se(r.toArray())) : e.withMutations(function (t) {
        t.setSize(n), r.forEach(function (e, r) {
          return t.set(r, e);
        });
      }));
    }

    function oe(t) {
      return !(!t || !t[ue]);
    }

    e(ie, pt), ie.of = function () {
      return this(arguments);
    }, ie.prototype.toString = function () {
      return this.__toString("List [", "]");
    }, ie.prototype.get = function (t, e) {
      if ((t = x(this, t)) >= 0 && t < this.size) {
        var r = ye(this, t += this._origin);
        return r && r.array[31 & t];
      }

      return e;
    }, ie.prototype.set = function (t, e) {
      return function (t, e, r) {
        if ((e = x(t, e)) != e) return t;
        if (e >= t.size || e < 0) return t.withMutations(function (t) {
          e < 0 ? _e(t, e).set(0, r) : _e(t, 0, e + 1).set(e, r);
        });
        e += t._origin;

        var n = t._tail,
            i = t._root,
            o = _(y);

        return e >= be(t._capacity) ? n = ge(n, t.__ownerID, 0, e, r, o) : i = ge(i, t.__ownerID, t._level, e, r, o), o.value ? t.__ownerID ? (t._root = i, t._tail = n, t.__hash = void 0, t.__altered = !0, t) : pe(t._origin, t._capacity, t._level, i, n) : t;
      }(this, t, e);
    }, ie.prototype.remove = function (t) {
      return this.has(t) ? 0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1) : this;
    }, ie.prototype.insert = function (t, e) {
      return this.splice(t, 0, e);
    }, ie.prototype.clear = function () {
      return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = 5, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : de();
    }, ie.prototype.push = function () {
      var t = arguments,
          e = this.size;
      return this.withMutations(function (r) {
        _e(r, 0, e + t.length);

        for (var n = 0; n < t.length; n++) r.set(e + n, t[n]);
      });
    }, ie.prototype.pop = function () {
      return _e(this, 0, -1);
    }, ie.prototype.unshift = function () {
      var t = arguments;
      return this.withMutations(function (e) {
        _e(e, -t.length);

        for (var r = 0; r < t.length; r++) e.set(r, t[r]);
      });
    }, ie.prototype.shift = function () {
      return _e(this, 1);
    }, ie.prototype.merge = function () {
      return me(this, void 0, arguments);
    }, ie.prototype.mergeWith = function (e) {
      var r = t.call(arguments, 1);
      return me(this, e, r);
    }, ie.prototype.mergeDeep = function () {
      return me(this, Xt, arguments);
    }, ie.prototype.mergeDeepWith = function (e) {
      var r = t.call(arguments, 1);
      return me(this, Yt(e), r);
    }, ie.prototype.setSize = function (t) {
      return _e(this, 0, t);
    }, ie.prototype.slice = function (t, e) {
      var r = this.size;
      return E(t, e, r) ? this : _e(this, O(t, r), C(e, r));
    }, ie.prototype.__iterator = function (t, e) {
      var r = 0,
          n = he(this, e);
      return new z(function () {
        var e = n();
        return e === le ? {
          value: void 0,
          done: !0
        } : B(t, r++, e);
      });
    }, ie.prototype.__iterate = function (t, e) {
      for (var r, n = 0, i = he(this, e); (r = i()) !== le && !1 !== t(r, n++, this););

      return n;
    }, ie.prototype.__ensureOwner = function (t) {
      return t === this.__ownerID ? this : t ? pe(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : (this.__ownerID = t, this);
    }, ie.isList = oe;
    var ue = "@@__IMMUTABLE_LIST__@@",
        ae = ie.prototype;

    function se(t, e) {
      this.array = t, this.ownerID = e;
    }

    ae[ue] = !0, ae.delete = ae.remove, ae.setIn = zt.setIn, ae.deleteIn = ae.removeIn = zt.removeIn, ae.update = zt.update, ae.updateIn = zt.updateIn, ae.mergeIn = zt.mergeIn, ae.mergeDeepIn = zt.mergeDeepIn, ae.withMutations = zt.withMutations, ae.asMutable = zt.asMutable, ae.asImmutable = zt.asImmutable, ae.wasAltered = zt.wasAltered, se.prototype.removeBefore = function (t, e, r) {
      if (r === e ? 1 << e : 0 === this.array.length) return this;
      var n = r >>> e & 31;
      if (n >= this.array.length) return new se([], t);
      var i,
          o = 0 === n;

      if (e > 0) {
        var u = this.array[n];
        if ((i = u && u.removeBefore(t, e - 5, r)) === u && o) return this;
      }

      if (o && !i) return this;
      var a = ve(this, t);
      if (!o) for (var s = 0; s < n; s++) a.array[s] = void 0;
      return i && (a.array[n] = i), a;
    }, se.prototype.removeAfter = function (t, e, r) {
      if (r === (e ? 1 << e : 0) || 0 === this.array.length) return this;
      var n,
          i = r - 1 >>> e & 31;
      if (i >= this.array.length) return this;

      if (e > 0) {
        var o = this.array[i];
        if ((n = o && o.removeAfter(t, e - 5, r)) === o && i === this.array.length - 1) return this;
      }

      var u = ve(this, t);
      return u.array.splice(i + 1), n && (u.array[i] = n), u;
    };
    var ce,
        fe,
        le = {};

    function he(t, e) {
      var r = t._origin,
          n = t._capacity,
          i = be(n),
          o = t._tail;
      return u(t._root, t._level, 0);

      function u(t, a, s) {
        return 0 === a ? function (t, u) {
          var a = u === i ? o && o.array : t && t.array,
              s = u > r ? 0 : r - u,
              c = n - u;
          return c > 32 && (c = 32), function () {
            if (s === c) return le;
            var t = e ? --c : s++;
            return a && a[t];
          };
        }(t, s) : function (t, i, o) {
          var a,
              s = t && t.array,
              c = o > r ? 0 : r - o >> i,
              f = 1 + (n - o >> i);
          return f > 32 && (f = 32), function () {
            for (;;) {
              if (a) {
                var t = a();
                if (t !== le) return t;
                a = null;
              }

              if (c === f) return le;
              var r = e ? --f : c++;
              a = u(s && s[r], i - 5, o + (r << i));
            }
          };
        }(t, a, s);
      }
    }

    function pe(t, e, r, n, i, o, u) {
      var a = Object.create(ae);
      return a.size = e - t, a._origin = t, a._capacity = e, a._level = r, a._root = n, a._tail = i, a.__ownerID = o, a.__hash = u, a.__altered = !1, a;
    }

    function de() {
      return ce || (ce = pe(0, 0, 5));
    }

    function ge(t, e, r, n, i, o) {
      var u,
          a = n >>> r & 31,
          s = t && a < t.array.length;
      if (!s && void 0 === i) return t;

      if (r > 0) {
        var c = t && t.array[a],
            f = ge(c, e, r - 5, n, i, o);
        return f === c ? t : ((u = ve(t, e)).array[a] = f, u);
      }

      return s && t.array[a] === i ? t : (m(o), u = ve(t, e), void 0 === i && a === u.array.length - 1 ? u.array.pop() : u.array[a] = i, u);
    }

    function ve(t, e) {
      return e && t && e === t.ownerID ? t : new se(t ? t.array.slice() : [], e);
    }

    function ye(t, e) {
      if (e >= be(t._capacity)) return t._tail;

      if (e < 1 << t._level + 5) {
        for (var r = t._root, n = t._level; r && n > 0;) r = r.array[e >>> n & 31], n -= 5;

        return r;
      }
    }

    function _e(t, e, r) {
      void 0 !== e && (e |= 0), void 0 !== r && (r |= 0);
      var n = t.__ownerID || new b(),
          i = t._origin,
          o = t._capacity,
          u = i + e,
          a = void 0 === r ? o : r < 0 ? o + r : i + r;
      if (u === i && a === o) return t;
      if (u >= a) return t.clear();

      for (var s = t._level, c = t._root, f = 0; u + f < 0;) c = new se(c && c.array.length ? [void 0, c] : [], n), f += 1 << (s += 5);

      f && (u += f, i += f, a += f, o += f);

      for (var l = be(o), h = be(a); h >= 1 << s + 5;) c = new se(c && c.array.length ? [c] : [], n), s += 5;

      var p = t._tail,
          d = h < l ? ye(t, a - 1) : h > l ? new se([], n) : p;

      if (p && h > l && u < o && p.array.length) {
        for (var g = c = ve(c, n), v = s; v > 5; v -= 5) {
          var y = l >>> v & 31;
          g = g.array[y] = ve(g.array[y], n);
        }

        g.array[l >>> 5 & 31] = p;
      }

      if (a < o && (d = d && d.removeAfter(n, 0, a)), u >= h) u -= h, a -= h, s = 5, c = null, d = d && d.removeBefore(n, 0, u);else if (u > i || h < l) {
        for (f = 0; c;) {
          var _ = u >>> s & 31;

          if (_ !== h >>> s & 31) break;
          _ && (f += (1 << s) * _), s -= 5, c = c.array[_];
        }

        c && u > i && (c = c.removeBefore(n, s, u - f)), c && h < l && (c = c.removeAfter(n, s, h - f)), f && (u -= f, a -= f);
      }
      return t.__ownerID ? (t.size = a - u, t._origin = u, t._capacity = a, t._level = s, t._root = c, t._tail = d, t.__hash = void 0, t.__altered = !0, t) : pe(u, a, s, c, d);
    }

    function me(t, e, r) {
      for (var n = [], o = 0, a = 0; a < r.length; a++) {
        var s = r[a],
            c = i(s);
        c.size > o && (o = c.size), u(s) || (c = c.map(function (t) {
          return nt(t);
        })), n.push(c);
      }

      return o > t.size && (t = t.setSize(o)), $t(t, e, n);
    }

    function be(t) {
      return t < 32 ? 0 : t - 1 >>> 5 << 5;
    }

    function Se(t) {
      return null == t ? ke() : we(t) ? t : ke().withMutations(function (e) {
        var r = n(t);
        It(r.size), r.forEach(function (t, r) {
          return e.set(r, t);
        });
      });
    }

    function we(t) {
      return At(t) && f(t);
    }

    function xe(t, e, r, n) {
      var i = Object.create(Se.prototype);
      return i.size = t ? t.size : 0, i._map = t, i._list = e, i.__ownerID = r, i.__hash = n, i;
    }

    function ke() {
      return fe || (fe = xe(Ht(), de()));
    }

    function Ee(t, e, r) {
      var n,
          i,
          o = t._map,
          u = t._list,
          a = o.get(e),
          s = void 0 !== a;

      if (r === g) {
        if (!s) return t;
        u.size >= 32 && u.size >= 2 * o.size ? (n = (i = u.filter(function (t, e) {
          return void 0 !== t && a !== e;
        })).toKeyedSeq().map(function (t) {
          return t[0];
        }).flip().toMap(), t.__ownerID && (n.__ownerID = i.__ownerID = t.__ownerID)) : (n = o.remove(e), i = a === u.size - 1 ? u.pop() : u.set(a, void 0));
      } else if (s) {
        if (r === u.get(a)[1]) return t;
        n = o, i = u.set(a, [e, r]);
      } else n = o.set(e, u.size), i = u.set(u.size, [e, r]);

      return t.__ownerID ? (t.size = n.size, t._map = n, t._list = i, t.__hash = void 0, t) : xe(n, i);
    }

    function Oe(t, e) {
      this._iter = t, this._useKeys = e, this.size = t.size;
    }

    function Ce(t) {
      this._iter = t, this.size = t.size;
    }

    function De(t) {
      this._iter = t, this.size = t.size;
    }

    function Ie(t) {
      this._iter = t, this.size = t.size;
    }

    function Me(t) {
      var e = Ve(t);
      return e._iter = t, e.size = t.size, e.flip = function () {
        return t;
      }, e.reverse = function () {
        var e = t.reverse.apply(this);
        return e.flip = function () {
          return t.reverse();
        }, e;
      }, e.has = function (e) {
        return t.includes(e);
      }, e.includes = function (e) {
        return t.has(e);
      }, e.cacheResult = Je, e.__iterateUncached = function (e, r) {
        var n = this;
        return t.__iterate(function (t, r) {
          return !1 !== e(r, t, n);
        }, r);
      }, e.__iteratorUncached = function (e, r) {
        if (2 === e) {
          var n = t.__iterator(e, r);

          return new z(function () {
            var t = n.next();

            if (!t.done) {
              var e = t.value[0];
              t.value[0] = t.value[1], t.value[1] = e;
            }

            return t;
          });
        }

        return t.__iterator(1 === e ? 0 : 1, r);
      }, e;
    }

    function Ae(t, e, r) {
      var n = Ve(t);
      return n.size = t.size, n.has = function (e) {
        return t.has(e);
      }, n.get = function (n, i) {
        var o = t.get(n, g);
        return o === g ? i : e.call(r, o, n, t);
      }, n.__iterateUncached = function (n, i) {
        var o = this;
        return t.__iterate(function (t, i, u) {
          return !1 !== n(e.call(r, t, i, u), i, o);
        }, i);
      }, n.__iteratorUncached = function (n, i) {
        var o = t.__iterator(2, i);

        return new z(function () {
          var i = o.next();
          if (i.done) return i;
          var u = i.value,
              a = u[0];
          return B(n, a, e.call(r, u[1], a, t), i);
        });
      }, n;
    }

    function Ke(t, e) {
      var r = Ve(t);
      return r._iter = t, r.size = t.size, r.reverse = function () {
        return t;
      }, t.flip && (r.flip = function () {
        var e = Me(t);
        return e.reverse = function () {
          return t.flip();
        }, e;
      }), r.get = function (r, n) {
        return t.get(e ? r : -1 - r, n);
      }, r.has = function (r) {
        return t.has(e ? r : -1 - r);
      }, r.includes = function (e) {
        return t.includes(e);
      }, r.cacheResult = Je, r.__iterate = function (e, r) {
        var n = this;
        return t.__iterate(function (t, r) {
          return e(t, r, n);
        }, !r);
      }, r.__iterator = function (e, r) {
        return t.__iterator(e, !r);
      }, r;
    }

    function Te(t, e, r, n) {
      var i = Ve(t);
      return n && (i.has = function (n) {
        var i = t.get(n, g);
        return i !== g && !!e.call(r, i, n, t);
      }, i.get = function (n, i) {
        var o = t.get(n, g);
        return o !== g && e.call(r, o, n, t) ? o : i;
      }), i.__iterateUncached = function (i, o) {
        var u = this,
            a = 0;
        return t.__iterate(function (t, o, s) {
          if (e.call(r, t, o, s)) return a++, i(t, n ? o : a - 1, u);
        }, o), a;
      }, i.__iteratorUncached = function (i, o) {
        var u = t.__iterator(2, o),
            a = 0;

        return new z(function () {
          for (;;) {
            var o = u.next();
            if (o.done) return o;
            var s = o.value,
                c = s[0],
                f = s[1];
            if (e.call(r, f, c, t)) return B(i, n ? c : a++, f, o);
          }
        });
      }, i;
    }

    function ze(t, e, r, n) {
      var i = t.size;
      if (void 0 !== e && (e |= 0), void 0 !== r && (r |= 0), E(e, r, i)) return t;
      var o = O(e, i),
          u = C(r, i);
      if (o != o || u != u) return ze(t.toSeq().cacheResult(), e, r, n);
      var a,
          s = u - o;
      s == s && (a = s < 0 ? 0 : s);
      var c = Ve(t);
      return c.size = 0 === a ? a : t.size && a || void 0, !n && X(t) && a >= 0 && (c.get = function (e, r) {
        return (e = x(this, e)) >= 0 && e < a ? t.get(e + o, r) : r;
      }), c.__iterateUncached = function (e, r) {
        var i = this;
        if (0 === a) return 0;
        if (r) return this.cacheResult().__iterate(e, r);
        var u = 0,
            s = !0,
            c = 0;
        return t.__iterate(function (t, r) {
          if (!s || !(s = u++ < o)) return c++, !1 !== e(t, n ? r : c - 1, i) && c !== a;
        }), c;
      }, c.__iteratorUncached = function (e, r) {
        if (0 !== a && r) return this.cacheResult().__iterator(e, r);

        var i = 0 !== a && t.__iterator(e, r),
            u = 0,
            s = 0;

        return new z(function () {
          for (; u++ < o;) i.next();

          if (++s > a) return {
            value: void 0,
            done: !0
          };
          var t = i.next();
          return n || 1 === e ? t : B(e, s - 1, 0 === e ? void 0 : t.value[1], t);
        });
      }, c;
    }

    function Be(t, e, r, n) {
      var i = Ve(t);
      return i.__iterateUncached = function (i, o) {
        var u = this;
        if (o) return this.cacheResult().__iterate(i, o);
        var a = !0,
            s = 0;
        return t.__iterate(function (t, o, c) {
          if (!a || !(a = e.call(r, t, o, c))) return s++, i(t, n ? o : s - 1, u);
        }), s;
      }, i.__iteratorUncached = function (i, o) {
        var u = this;
        if (o) return this.cacheResult().__iterator(i, o);

        var a = t.__iterator(2, o),
            s = !0,
            c = 0;

        return new z(function () {
          var t, o, f;

          do {
            if ((t = a.next()).done) return n || 1 === i ? t : B(i, c++, 0 === i ? void 0 : t.value[1], t);
            var l = t.value;
            o = l[0], f = l[1], s && (s = e.call(r, f, o, u));
          } while (s);

          return 2 === i ? t : B(i, o, f, t);
        });
      }, i;
    }

    function Re(t, e) {
      var r = a(t),
          i = [t].concat(e).map(function (t) {
        return u(t) ? r && (t = n(t)) : t = r ? $(t) : Q(Array.isArray(t) ? t : [t]), t;
      }).filter(function (t) {
        return 0 !== t.size;
      });
      if (0 === i.length) return t;

      if (1 === i.length) {
        var o = i[0];
        if (o === t || r && a(o) || s(t) && s(o)) return o;
      }

      var c = new V(i);
      return r ? c = c.toKeyedSeq() : s(t) || (c = c.toSetSeq()), (c = c.flatten(!0)).size = i.reduce(function (t, e) {
        if (void 0 !== t) {
          var r = e.size;
          if (void 0 !== r) return t + r;
        }
      }, 0), c;
    }

    function Le(t, e, r) {
      var n = Ve(t);
      return n.__iterateUncached = function (n, i) {
        var o = 0,
            a = !1;
        return function t(s, c) {
          var f = this;

          s.__iterate(function (i, s) {
            return (!e || c < e) && u(i) ? t(i, c + 1) : !1 === n(i, r ? s : o++, f) && (a = !0), !a;
          }, i);
        }(t, 0), o;
      }, n.__iteratorUncached = function (n, i) {
        var o = t.__iterator(n, i),
            a = [],
            s = 0;

        return new z(function () {
          for (; o;) {
            var t = o.next();

            if (!1 === t.done) {
              var c = t.value;
              if (2 === n && (c = c[1]), e && !(a.length < e) || !u(c)) return r ? t : B(n, s++, c, t);
              a.push(o), o = c.__iterator(n, i);
            } else o = a.pop();
          }

          return {
            value: void 0,
            done: !0
          };
        });
      }, n;
    }

    function je(t, e, r) {
      e || (e = Ge);
      var n = a(t),
          i = 0,
          o = t.toSeq().map(function (e, n) {
        return [n, e, i++, r ? r(e, n, t) : e];
      }).toArray();
      return o.sort(function (t, r) {
        return e(t[3], r[3]) || t[2] - r[2];
      }).forEach(n ? function (t, e) {
        o[e].length = 2;
      } : function (t, e) {
        o[e] = t[1];
      }), n ? q(o) : s(t) ? H(o) : W(o);
    }

    function Ne(t, e, r) {
      if (e || (e = Ge), r) {
        var n = t.toSeq().map(function (e, n) {
          return [e, r(e, n, t)];
        }).reduce(function (t, r) {
          return Fe(e, t[1], r[1]) ? r : t;
        });
        return n && n[0];
      }

      return t.reduce(function (t, r) {
        return Fe(e, t, r) ? r : t;
      });
    }

    function Fe(t, e, r) {
      var n = t(r, e);
      return 0 === n && r !== e && (null == r || r != r) || n > 0;
    }

    function Pe(t, e, n) {
      var i = Ve(t);
      return i.size = new V(n).map(function (t) {
        return t.size;
      }).min(), i.__iterate = function (t, e) {
        for (var r, n = this.__iterator(1, e), i = 0; !(r = n.next()).done && !1 !== t(r.value, i++, this););

        return i;
      }, i.__iteratorUncached = function (t, i) {
        var o = n.map(function (t) {
          return t = r(t), N(i ? t.reverse() : t);
        }),
            u = 0,
            a = !1;
        return new z(function () {
          var r;
          return a || (r = o.map(function (t) {
            return t.next();
          }), a = r.some(function (t) {
            return t.done;
          })), a ? {
            value: void 0,
            done: !0
          } : B(t, u++, e.apply(null, r.map(function (t) {
            return t.value;
          })));
        });
      }, i;
    }

    function Ue(t, e) {
      return X(t) ? e : t.constructor(e);
    }

    function qe(t) {
      if (t !== Object(t)) throw new TypeError("Expected [K, V] tuple: " + t);
    }

    function He(t) {
      return It(t.size), w(t);
    }

    function We(t) {
      return a(t) ? n : s(t) ? i : o;
    }

    function Ve(t) {
      return Object.create((a(t) ? q : s(t) ? H : W).prototype);
    }

    function Je() {
      return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : U.prototype.cacheResult.call(this);
    }

    function Ge(t, e) {
      return t > e ? 1 : t < e ? -1 : 0;
    }

    function Ze(t) {
      var e = N(t);

      if (!e) {
        if (!P(t)) throw new TypeError("Expected iterable or array-like: " + t);
        e = N(r(t));
      }

      return e;
    }

    function Xe(t, e) {
      var r,
          n = function (o) {
        if (o instanceof n) return o;
        if (!(this instanceof n)) return new n(o);

        if (!r) {
          r = !0;
          var u = Object.keys(t);
          !function (t, e) {
            try {
              e.forEach(tr.bind(void 0, t));
            } catch (t) {}
          }(i, u), i.size = u.length, i._name = e, i._keys = u, i._defaultValues = t;
        }

        this._map = Mt(o);
      },
          i = n.prototype = Object.create(Ye);

      return i.constructor = n, n;
    }

    e(Se, Mt), Se.of = function () {
      return this(arguments);
    }, Se.prototype.toString = function () {
      return this.__toString("OrderedMap {", "}");
    }, Se.prototype.get = function (t, e) {
      var r = this._map.get(t);

      return void 0 !== r ? this._list.get(r)[1] : e;
    }, Se.prototype.clear = function () {
      return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : ke();
    }, Se.prototype.set = function (t, e) {
      return Ee(this, t, e);
    }, Se.prototype.remove = function (t) {
      return Ee(this, t, g);
    }, Se.prototype.wasAltered = function () {
      return this._map.wasAltered() || this._list.wasAltered();
    }, Se.prototype.__iterate = function (t, e) {
      var r = this;
      return this._list.__iterate(function (e) {
        return e && t(e[1], e[0], r);
      }, e);
    }, Se.prototype.__iterator = function (t, e) {
      return this._list.fromEntrySeq().__iterator(t, e);
    }, Se.prototype.__ensureOwner = function (t) {
      if (t === this.__ownerID) return this;

      var e = this._map.__ensureOwner(t),
          r = this._list.__ensureOwner(t);

      return t ? xe(e, r, t, this.__hash) : (this.__ownerID = t, this._map = e, this._list = r, this);
    }, Se.isOrderedMap = we, Se.prototype[d] = !0, Se.prototype.delete = Se.prototype.remove, e(Oe, q), Oe.prototype.get = function (t, e) {
      return this._iter.get(t, e);
    }, Oe.prototype.has = function (t) {
      return this._iter.has(t);
    }, Oe.prototype.valueSeq = function () {
      return this._iter.valueSeq();
    }, Oe.prototype.reverse = function () {
      var t = this,
          e = Ke(this, !0);
      return this._useKeys || (e.valueSeq = function () {
        return t._iter.toSeq().reverse();
      }), e;
    }, Oe.prototype.map = function (t, e) {
      var r = this,
          n = Ae(this, t, e);
      return this._useKeys || (n.valueSeq = function () {
        return r._iter.toSeq().map(t, e);
      }), n;
    }, Oe.prototype.__iterate = function (t, e) {
      var r,
          n = this;
      return this._iter.__iterate(this._useKeys ? function (e, r) {
        return t(e, r, n);
      } : (r = e ? He(this) : 0, function (i) {
        return t(i, e ? --r : r++, n);
      }), e);
    }, Oe.prototype.__iterator = function (t, e) {
      if (this._useKeys) return this._iter.__iterator(t, e);

      var r = this._iter.__iterator(1, e),
          n = e ? He(this) : 0;

      return new z(function () {
        var i = r.next();
        return i.done ? i : B(t, e ? --n : n++, i.value, i);
      });
    }, Oe.prototype[d] = !0, e(Ce, H), Ce.prototype.includes = function (t) {
      return this._iter.includes(t);
    }, Ce.prototype.__iterate = function (t, e) {
      var r = this,
          n = 0;
      return this._iter.__iterate(function (e) {
        return t(e, n++, r);
      }, e);
    }, Ce.prototype.__iterator = function (t, e) {
      var r = this._iter.__iterator(1, e),
          n = 0;

      return new z(function () {
        var e = r.next();
        return e.done ? e : B(t, n++, e.value, e);
      });
    }, e(De, W), De.prototype.has = function (t) {
      return this._iter.includes(t);
    }, De.prototype.__iterate = function (t, e) {
      var r = this;
      return this._iter.__iterate(function (e) {
        return t(e, e, r);
      }, e);
    }, De.prototype.__iterator = function (t, e) {
      var r = this._iter.__iterator(1, e);

      return new z(function () {
        var e = r.next();
        return e.done ? e : B(t, e.value, e.value, e);
      });
    }, e(Ie, q), Ie.prototype.entrySeq = function () {
      return this._iter.toSeq();
    }, Ie.prototype.__iterate = function (t, e) {
      var r = this;
      return this._iter.__iterate(function (e) {
        if (e) {
          qe(e);
          var n = u(e);
          return t(n ? e.get(1) : e[1], n ? e.get(0) : e[0], r);
        }
      }, e);
    }, Ie.prototype.__iterator = function (t, e) {
      var r = this._iter.__iterator(1, e);

      return new z(function () {
        for (;;) {
          var e = r.next();
          if (e.done) return e;
          var n = e.value;

          if (n) {
            qe(n);
            var i = u(n);
            return B(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], e);
          }
        }
      });
    }, Ce.prototype.cacheResult = Oe.prototype.cacheResult = De.prototype.cacheResult = Ie.prototype.cacheResult = Je, e(Xe, ht), Xe.prototype.toString = function () {
      return this.__toString(Qe(this) + " {", "}");
    }, Xe.prototype.has = function (t) {
      return this._defaultValues.hasOwnProperty(t);
    }, Xe.prototype.get = function (t, e) {
      if (!this.has(t)) return e;
      var r = this._defaultValues[t];
      return this._map ? this._map.get(t, r) : r;
    }, Xe.prototype.clear = function () {
      if (this.__ownerID) return this._map && this._map.clear(), this;
      var t = this.constructor;
      return t._empty || (t._empty = $e(this, Ht()));
    }, Xe.prototype.set = function (t, e) {
      if (!this.has(t)) throw new Error('Cannot set unknown key "' + t + '" on ' + Qe(this));

      var r = this._map && this._map.set(t, e);

      return this.__ownerID || r === this._map ? this : $e(this, r);
    }, Xe.prototype.remove = function (t) {
      if (!this.has(t)) return this;

      var e = this._map && this._map.remove(t);

      return this.__ownerID || e === this._map ? this : $e(this, e);
    }, Xe.prototype.wasAltered = function () {
      return this._map.wasAltered();
    }, Xe.prototype.__iterator = function (t, e) {
      var r = this;
      return n(this._defaultValues).map(function (t, e) {
        return r.get(e);
      }).__iterator(t, e);
    }, Xe.prototype.__iterate = function (t, e) {
      var r = this;
      return n(this._defaultValues).map(function (t, e) {
        return r.get(e);
      }).__iterate(t, e);
    }, Xe.prototype.__ensureOwner = function (t) {
      if (t === this.__ownerID) return this;

      var e = this._map && this._map.__ensureOwner(t);

      return t ? $e(this, e, t) : (this.__ownerID = t, this._map = e, this);
    };
    var Ye = Xe.prototype;

    function $e(t, e, r) {
      var n = Object.create(Object.getPrototypeOf(t));
      return n._map = e, n.__ownerID = r, n;
    }

    function Qe(t) {
      return t._name || t.constructor.name || "Record";
    }

    function tr(t, e) {
      Object.defineProperty(t, e, {
        get: function () {
          return this.get(e);
        },
        set: function (t) {
          ct(this.__ownerID, "Cannot set on an immutable record."), this.set(e, t);
        }
      });
    }

    function er(t) {
      return null == t ? sr() : rr(t) && !f(t) ? t : sr().withMutations(function (e) {
        var r = o(t);
        It(r.size), r.forEach(function (t) {
          return e.add(t);
        });
      });
    }

    function rr(t) {
      return !(!t || !t[ir]);
    }

    Ye.delete = Ye.remove, Ye.deleteIn = Ye.removeIn = zt.removeIn, Ye.merge = zt.merge, Ye.mergeWith = zt.mergeWith, Ye.mergeIn = zt.mergeIn, Ye.mergeDeep = zt.mergeDeep, Ye.mergeDeepWith = zt.mergeDeepWith, Ye.mergeDeepIn = zt.mergeDeepIn, Ye.setIn = zt.setIn, Ye.update = zt.update, Ye.updateIn = zt.updateIn, Ye.withMutations = zt.withMutations, Ye.asMutable = zt.asMutable, Ye.asImmutable = zt.asImmutable, e(er, dt), er.of = function () {
      return this(arguments);
    }, er.fromKeys = function (t) {
      return this(n(t).keySeq());
    }, er.prototype.toString = function () {
      return this.__toString("Set {", "}");
    }, er.prototype.has = function (t) {
      return this._map.has(t);
    }, er.prototype.add = function (t) {
      return ur(this, this._map.set(t, !0));
    }, er.prototype.remove = function (t) {
      return ur(this, this._map.remove(t));
    }, er.prototype.clear = function () {
      return ur(this, this._map.clear());
    }, er.prototype.union = function () {
      var e = t.call(arguments, 0);
      return 0 === (e = e.filter(function (t) {
        return 0 !== t.size;
      })).length ? this : 0 !== this.size || this.__ownerID || 1 !== e.length ? this.withMutations(function (t) {
        for (var r = 0; r < e.length; r++) o(e[r]).forEach(function (e) {
          return t.add(e);
        });
      }) : this.constructor(e[0]);
    }, er.prototype.intersect = function () {
      var e = t.call(arguments, 0);
      if (0 === e.length) return this;
      e = e.map(function (t) {
        return o(t);
      });
      var r = this;
      return this.withMutations(function (t) {
        r.forEach(function (r) {
          e.every(function (t) {
            return t.includes(r);
          }) || t.remove(r);
        });
      });
    }, er.prototype.subtract = function () {
      var e = t.call(arguments, 0);
      if (0 === e.length) return this;
      e = e.map(function (t) {
        return o(t);
      });
      var r = this;
      return this.withMutations(function (t) {
        r.forEach(function (r) {
          e.some(function (t) {
            return t.includes(r);
          }) && t.remove(r);
        });
      });
    }, er.prototype.merge = function () {
      return this.union.apply(this, arguments);
    }, er.prototype.mergeWith = function (e) {
      var r = t.call(arguments, 1);
      return this.union.apply(this, r);
    }, er.prototype.sort = function (t) {
      return cr(je(this, t));
    }, er.prototype.sortBy = function (t, e) {
      return cr(je(this, e, t));
    }, er.prototype.wasAltered = function () {
      return this._map.wasAltered();
    }, er.prototype.__iterate = function (t, e) {
      var r = this;
      return this._map.__iterate(function (e, n) {
        return t(n, n, r);
      }, e);
    }, er.prototype.__iterator = function (t, e) {
      return this._map.map(function (t, e) {
        return e;
      }).__iterator(t, e);
    }, er.prototype.__ensureOwner = function (t) {
      if (t === this.__ownerID) return this;

      var e = this._map.__ensureOwner(t);

      return t ? this.__make(e, t) : (this.__ownerID = t, this._map = e, this);
    }, er.isSet = rr;
    var nr,
        ir = "@@__IMMUTABLE_SET__@@",
        or = er.prototype;

    function ur(t, e) {
      return t.__ownerID ? (t.size = e.size, t._map = e, t) : e === t._map ? t : 0 === e.size ? t.__empty() : t.__make(e);
    }

    function ar(t, e) {
      var r = Object.create(or);
      return r.size = t ? t.size : 0, r._map = t, r.__ownerID = e, r;
    }

    function sr() {
      return nr || (nr = ar(Ht()));
    }

    function cr(t) {
      return null == t ? dr() : fr(t) ? t : dr().withMutations(function (e) {
        var r = o(t);
        It(r.size), r.forEach(function (t) {
          return e.add(t);
        });
      });
    }

    function fr(t) {
      return rr(t) && f(t);
    }

    or[ir] = !0, or.delete = or.remove, or.mergeDeep = or.merge, or.mergeDeepWith = or.mergeWith, or.withMutations = zt.withMutations, or.asMutable = zt.asMutable, or.asImmutable = zt.asImmutable, or.__empty = sr, or.__make = ar, e(cr, er), cr.of = function () {
      return this(arguments);
    }, cr.fromKeys = function (t) {
      return this(n(t).keySeq());
    }, cr.prototype.toString = function () {
      return this.__toString("OrderedSet {", "}");
    }, cr.isOrderedSet = fr;
    var lr,
        hr = cr.prototype;

    function pr(t, e) {
      var r = Object.create(hr);
      return r.size = t ? t.size : 0, r._map = t, r.__ownerID = e, r;
    }

    function dr() {
      return lr || (lr = pr(ke()));
    }

    function gr(t) {
      return null == t ? Sr() : vr(t) ? t : Sr().unshiftAll(t);
    }

    function vr(t) {
      return !(!t || !t[_r]);
    }

    hr[d] = !0, hr.__empty = dr, hr.__make = pr, e(gr, pt), gr.of = function () {
      return this(arguments);
    }, gr.prototype.toString = function () {
      return this.__toString("Stack [", "]");
    }, gr.prototype.get = function (t, e) {
      var r = this._head;

      for (t = x(this, t); r && t--;) r = r.next;

      return r ? r.value : e;
    }, gr.prototype.peek = function () {
      return this._head && this._head.value;
    }, gr.prototype.push = function () {
      if (0 === arguments.length) return this;

      for (var t = this.size + arguments.length, e = this._head, r = arguments.length - 1; r >= 0; r--) e = {
        value: arguments[r],
        next: e
      };

      return this.__ownerID ? (this.size = t, this._head = e, this.__hash = void 0, this.__altered = !0, this) : br(t, e);
    }, gr.prototype.pushAll = function (t) {
      if (0 === (t = i(t)).size) return this;
      It(t.size);
      var e = this.size,
          r = this._head;
      return t.reverse().forEach(function (t) {
        e++, r = {
          value: t,
          next: r
        };
      }), this.__ownerID ? (this.size = e, this._head = r, this.__hash = void 0, this.__altered = !0, this) : br(e, r);
    }, gr.prototype.pop = function () {
      return this.slice(1);
    }, gr.prototype.unshift = function () {
      return this.push.apply(this, arguments);
    }, gr.prototype.unshiftAll = function (t) {
      return this.pushAll(t);
    }, gr.prototype.shift = function () {
      return this.pop.apply(this, arguments);
    }, gr.prototype.clear = function () {
      return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : Sr();
    }, gr.prototype.slice = function (t, e) {
      if (E(t, e, this.size)) return this;
      var r = O(t, this.size);
      if (C(e, this.size) !== this.size) return pt.prototype.slice.call(this, t, e);

      for (var n = this.size - r, i = this._head; r--;) i = i.next;

      return this.__ownerID ? (this.size = n, this._head = i, this.__hash = void 0, this.__altered = !0, this) : br(n, i);
    }, gr.prototype.__ensureOwner = function (t) {
      return t === this.__ownerID ? this : t ? br(this.size, this._head, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this);
    }, gr.prototype.__iterate = function (t, e) {
      if (e) return this.reverse().__iterate(t);

      for (var r = 0, n = this._head; n && !1 !== t(n.value, r++, this);) n = n.next;

      return r;
    }, gr.prototype.__iterator = function (t, e) {
      if (e) return this.reverse().__iterator(t);
      var r = 0,
          n = this._head;
      return new z(function () {
        if (n) {
          var e = n.value;
          return n = n.next, B(t, r++, e);
        }

        return {
          value: void 0,
          done: !0
        };
      });
    }, gr.isStack = vr;
    var yr,
        _r = "@@__IMMUTABLE_STACK__@@",
        mr = gr.prototype;

    function br(t, e, r, n) {
      var i = Object.create(mr);
      return i.size = t, i._head = e, i.__ownerID = r, i.__hash = n, i.__altered = !1, i;
    }

    function Sr() {
      return yr || (yr = br(0));
    }

    function wr(t, e) {
      var r = function (r) {
        t.prototype[r] = e[r];
      };

      return Object.keys(e).forEach(r), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(r), t;
    }

    mr[_r] = !0, mr.withMutations = zt.withMutations, mr.asMutable = zt.asMutable, mr.asImmutable = zt.asImmutable, mr.wasAltered = zt.wasAltered, r.Iterator = z, wr(r, {
      toArray: function () {
        It(this.size);
        var t = new Array(this.size || 0);
        return this.valueSeq().__iterate(function (e, r) {
          t[r] = e;
        }), t;
      },
      toIndexedSeq: function () {
        return new Ce(this);
      },
      toJS: function () {
        return this.toSeq().map(function (t) {
          return t && "function" == typeof t.toJS ? t.toJS() : t;
        }).__toJS();
      },
      toJSON: function () {
        return this.toSeq().map(function (t) {
          return t && "function" == typeof t.toJSON ? t.toJSON() : t;
        }).__toJS();
      },
      toKeyedSeq: function () {
        return new Oe(this, !0);
      },
      toMap: function () {
        return Mt(this.toKeyedSeq());
      },
      toObject: function () {
        It(this.size);
        var t = {};
        return this.__iterate(function (e, r) {
          t[r] = e;
        }), t;
      },
      toOrderedMap: function () {
        return Se(this.toKeyedSeq());
      },
      toOrderedSet: function () {
        return cr(a(this) ? this.valueSeq() : this);
      },
      toSet: function () {
        return er(a(this) ? this.valueSeq() : this);
      },
      toSetSeq: function () {
        return new De(this);
      },
      toSeq: function () {
        return s(this) ? this.toIndexedSeq() : a(this) ? this.toKeyedSeq() : this.toSetSeq();
      },
      toStack: function () {
        return gr(a(this) ? this.valueSeq() : this);
      },
      toList: function () {
        return ie(a(this) ? this.valueSeq() : this);
      },
      toString: function () {
        return "[Iterable]";
      },
      __toString: function (t, e) {
        return 0 === this.size ? t + e : t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e;
      },
      concat: function () {
        var e = t.call(arguments, 0);
        return Ue(this, Re(this, e));
      },
      includes: function (t) {
        return this.some(function (e) {
          return ut(e, t);
        });
      },
      entries: function () {
        return this.__iterator(2);
      },
      every: function (t, e) {
        It(this.size);
        var r = !0;
        return this.__iterate(function (n, i, o) {
          if (!t.call(e, n, i, o)) return r = !1, !1;
        }), r;
      },
      filter: function (t, e) {
        return Ue(this, Te(this, t, e, !0));
      },
      find: function (t, e, r) {
        var n = this.findEntry(t, e);
        return n ? n[1] : r;
      },
      findEntry: function (t, e) {
        var r;
        return this.__iterate(function (n, i, o) {
          if (t.call(e, n, i, o)) return r = [i, n], !1;
        }), r;
      },
      findLastEntry: function (t, e) {
        return this.toSeq().reverse().findEntry(t, e);
      },
      forEach: function (t, e) {
        return It(this.size), this.__iterate(e ? t.bind(e) : t);
      },
      join: function (t) {
        It(this.size), t = void 0 !== t ? "" + t : ",";
        var e = "",
            r = !0;
        return this.__iterate(function (n) {
          r ? r = !1 : e += t, e += null != n ? n.toString() : "";
        }), e;
      },
      keys: function () {
        return this.__iterator(0);
      },
      map: function (t, e) {
        return Ue(this, Ae(this, t, e));
      },
      reduce: function (t, e, r) {
        var n, i;
        return It(this.size), arguments.length < 2 ? i = !0 : n = e, this.__iterate(function (e, o, u) {
          i ? (i = !1, n = e) : n = t.call(r, n, e, o, u);
        }), n;
      },
      reduceRight: function (t, e, r) {
        var n = this.toKeyedSeq().reverse();
        return n.reduce.apply(n, arguments);
      },
      reverse: function () {
        return Ue(this, Ke(this, !0));
      },
      slice: function (t, e) {
        return Ue(this, ze(this, t, e, !0));
      },
      some: function (t, e) {
        return !this.every(Cr(t), e);
      },
      sort: function (t) {
        return Ue(this, je(this, t));
      },
      values: function () {
        return this.__iterator(1);
      },
      butLast: function () {
        return this.slice(0, -1);
      },
      isEmpty: function () {
        return void 0 !== this.size ? 0 === this.size : !this.some(function () {
          return !0;
        });
      },
      count: function (t, e) {
        return w(t ? this.toSeq().filter(t, e) : this);
      },
      countBy: function (t, e) {
        return function (t, e, r) {
          var n = Mt().asMutable();
          return t.__iterate(function (i, o) {
            n.update(e.call(r, i, o, t), 0, function (t) {
              return t + 1;
            });
          }), n.asImmutable();
        }(this, t, e);
      },
      equals: function (t) {
        return at(this, t);
      },
      entrySeq: function () {
        var t = this;
        if (t._cache) return new V(t._cache);
        var e = t.toSeq().map(Or).toIndexedSeq();
        return e.fromEntrySeq = function () {
          return t.toSeq();
        }, e;
      },
      filterNot: function (t, e) {
        return this.filter(Cr(t), e);
      },
      findLast: function (t, e, r) {
        return this.toKeyedSeq().reverse().find(t, e, r);
      },
      first: function () {
        return this.find(k);
      },
      flatMap: function (t, e) {
        return Ue(this, function (t, e, r) {
          var n = We(t);
          return t.toSeq().map(function (i, o) {
            return n(e.call(r, i, o, t));
          }).flatten(!0);
        }(this, t, e));
      },
      flatten: function (t) {
        return Ue(this, Le(this, t, !0));
      },
      fromEntrySeq: function () {
        return new Ie(this);
      },
      get: function (t, e) {
        return this.find(function (e, r) {
          return ut(r, t);
        }, void 0, e);
      },
      getIn: function (t, e) {
        for (var r, n = this, i = Ze(t); !(r = i.next()).done;) {
          var o = r.value;
          if ((n = n && n.get ? n.get(o, g) : g) === g) return e;
        }

        return n;
      },
      groupBy: function (t, e) {
        return function (t, e, r) {
          var n = a(t),
              i = (f(t) ? Se() : Mt()).asMutable();

          t.__iterate(function (o, u) {
            i.update(e.call(r, o, u, t), function (t) {
              return (t = t || []).push(n ? [u, o] : o), t;
            });
          });

          var o = We(t);
          return i.map(function (e) {
            return Ue(t, o(e));
          });
        }(this, t, e);
      },
      has: function (t) {
        return this.get(t, g) !== g;
      },
      hasIn: function (t) {
        return this.getIn(t, g) !== g;
      },
      isSubset: function (t) {
        return t = "function" == typeof t.includes ? t : r(t), this.every(function (e) {
          return t.includes(e);
        });
      },
      isSuperset: function (t) {
        return (t = "function" == typeof t.isSubset ? t : r(t)).isSubset(this);
      },
      keySeq: function () {
        return this.toSeq().map(Er).toIndexedSeq();
      },
      last: function () {
        return this.toSeq().reverse().first();
      },
      max: function (t) {
        return Ne(this, t);
      },
      maxBy: function (t, e) {
        return Ne(this, e, t);
      },
      min: function (t) {
        return Ne(this, t ? Dr(t) : Ar);
      },
      minBy: function (t, e) {
        return Ne(this, e ? Dr(e) : Ar, t);
      },
      rest: function () {
        return this.slice(1);
      },
      skip: function (t) {
        return this.slice(Math.max(0, t));
      },
      skipLast: function (t) {
        return Ue(this, this.toSeq().reverse().skip(t).reverse());
      },
      skipWhile: function (t, e) {
        return Ue(this, Be(this, t, e, !0));
      },
      skipUntil: function (t, e) {
        return this.skipWhile(Cr(t), e);
      },
      sortBy: function (t, e) {
        return Ue(this, je(this, e, t));
      },
      take: function (t) {
        return this.slice(0, Math.max(0, t));
      },
      takeLast: function (t) {
        return Ue(this, this.toSeq().reverse().take(t).reverse());
      },
      takeWhile: function (t, e) {
        return Ue(this, function (t, e, r) {
          var n = Ve(t);
          return n.__iterateUncached = function (n, i) {
            var o = this;
            if (i) return this.cacheResult().__iterate(n, i);
            var u = 0;
            return t.__iterate(function (t, i, a) {
              return e.call(r, t, i, a) && ++u && n(t, i, o);
            }), u;
          }, n.__iteratorUncached = function (n, i) {
            var o = this;
            if (i) return this.cacheResult().__iterator(n, i);

            var u = t.__iterator(2, i),
                a = !0;

            return new z(function () {
              if (!a) return {
                value: void 0,
                done: !0
              };
              var t = u.next();
              if (t.done) return t;
              var i = t.value,
                  s = i[0],
                  c = i[1];
              return e.call(r, c, s, o) ? 2 === n ? t : B(n, s, c, t) : (a = !1, {
                value: void 0,
                done: !0
              });
            });
          }, n;
        }(this, t, e));
      },
      takeUntil: function (t, e) {
        return this.takeWhile(Cr(t), e);
      },
      valueSeq: function () {
        return this.toIndexedSeq();
      },
      hashCode: function () {
        return this.__hash || (this.__hash = function (t) {
          if (t.size === 1 / 0) return 0;
          var e = f(t),
              r = a(t),
              n = e ? 1 : 0;
          return function (t, e) {
            return e = gt(e, 3432918353), e = gt(e << 15 | e >>> -15, 461845907), e = gt(e << 13 | e >>> -13, 5), e = gt((e = (e + 3864292196 | 0) ^ t) ^ e >>> 16, 2246822507), e = vt((e = gt(e ^ e >>> 13, 3266489909)) ^ e >>> 16);
          }(t.__iterate(r ? e ? function (t, e) {
            n = 31 * n + Kr(yt(t), yt(e)) | 0;
          } : function (t, e) {
            n = n + Kr(yt(t), yt(e)) | 0;
          } : e ? function (t) {
            n = 31 * n + yt(t) | 0;
          } : function (t) {
            n = n + yt(t) | 0;
          }), n);
        }(this));
      }
    });
    var xr = r.prototype;
    xr[l] = !0, xr[T] = xr.values, xr.__toJS = xr.toArray, xr.__toStringMapper = Ir, xr.inspect = xr.toSource = function () {
      return this.toString();
    }, xr.chain = xr.flatMap, xr.contains = xr.includes, function () {
      try {
        Object.defineProperty(xr, "length", {
          get: function () {
            if (!r.noLengthWarning) {
              var t;

              try {
                throw new Error();
              } catch (e) {
                t = e.stack;
              }

              if (-1 === t.indexOf("_wrapObject")) return console && console.warn && console.warn("iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. " + t), this.size;
            }
          }
        });
      } catch (t) {}
    }(), wr(n, {
      flip: function () {
        return Ue(this, Me(this));
      },
      findKey: function (t, e) {
        var r = this.findEntry(t, e);
        return r && r[0];
      },
      findLastKey: function (t, e) {
        return this.toSeq().reverse().findKey(t, e);
      },
      keyOf: function (t) {
        return this.findKey(function (e) {
          return ut(e, t);
        });
      },
      lastKeyOf: function (t) {
        return this.findLastKey(function (e) {
          return ut(e, t);
        });
      },
      mapEntries: function (t, e) {
        var r = this,
            n = 0;
        return Ue(this, this.toSeq().map(function (i, o) {
          return t.call(e, [o, i], n++, r);
        }).fromEntrySeq());
      },
      mapKeys: function (t, e) {
        var r = this;
        return Ue(this, this.toSeq().flip().map(function (n, i) {
          return t.call(e, n, i, r);
        }).flip());
      }
    });
    var kr = n.prototype;

    function Er(t, e) {
      return e;
    }

    function Or(t, e) {
      return [e, t];
    }

    function Cr(t) {
      return function () {
        return !t.apply(this, arguments);
      };
    }

    function Dr(t) {
      return function () {
        return -t.apply(this, arguments);
      };
    }

    function Ir(t) {
      return "string" == typeof t ? JSON.stringify(t) : t;
    }

    function Mr() {
      return S(arguments);
    }

    function Ar(t, e) {
      return t < e ? 1 : t > e ? -1 : 0;
    }

    function Kr(t, e) {
      return t ^ e + 2654435769 + (t << 6) + (t >> 2) | 0;
    }

    return kr[h] = !0, kr[T] = xr.entries, kr.__toJS = xr.toObject, kr.__toStringMapper = function (t, e) {
      return JSON.stringify(e) + ": " + Ir(t);
    }, wr(i, {
      toKeyedSeq: function () {
        return new Oe(this, !1);
      },
      filter: function (t, e) {
        return Ue(this, Te(this, t, e, !1));
      },
      findIndex: function (t, e) {
        var r = this.findEntry(t, e);
        return r ? r[0] : -1;
      },
      indexOf: function (t) {
        var e = this.toKeyedSeq().keyOf(t);
        return void 0 === e ? -1 : e;
      },
      lastIndexOf: function (t) {
        var e = this.toKeyedSeq().reverse().keyOf(t);
        return void 0 === e ? -1 : e;
      },
      reverse: function () {
        return Ue(this, Ke(this, !1));
      },
      slice: function (t, e) {
        return Ue(this, ze(this, t, e, !1));
      },
      splice: function (t, e) {
        var r = arguments.length;
        if (e = Math.max(0 | e, 0), 0 === r || 2 === r && !e) return this;
        t = O(t, t < 0 ? this.count() : this.size);
        var n = this.slice(0, t);
        return Ue(this, 1 === r ? n : n.concat(S(arguments, 2), this.slice(t + e)));
      },
      findLastIndex: function (t, e) {
        var r = this.toKeyedSeq().findLastKey(t, e);
        return void 0 === r ? -1 : r;
      },
      first: function () {
        return this.get(0);
      },
      flatten: function (t) {
        return Ue(this, Le(this, t, !1));
      },
      get: function (t, e) {
        return (t = x(this, t)) < 0 || this.size === 1 / 0 || void 0 !== this.size && t > this.size ? e : this.find(function (e, r) {
          return r === t;
        }, void 0, e);
      },
      has: function (t) {
        return (t = x(this, t)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t));
      },
      interpose: function (t) {
        return Ue(this, function (t, e) {
          var r = Ve(t);
          return r.size = t.size && 2 * t.size - 1, r.__iterateUncached = function (r, n) {
            var i = this,
                o = 0;
            return t.__iterate(function (t, n) {
              return (!o || !1 !== r(e, o++, i)) && !1 !== r(t, o++, i);
            }, n), o;
          }, r.__iteratorUncached = function (r, n) {
            var i,
                o = t.__iterator(1, n),
                u = 0;

            return new z(function () {
              return (!i || u % 2) && (i = o.next()).done ? i : u % 2 ? B(r, u++, e) : B(r, u++, i.value, i);
            });
          }, r;
        }(this, t));
      },
      interleave: function () {
        var t = [this].concat(S(arguments)),
            e = Pe(this.toSeq(), H.of, t),
            r = e.flatten(!0);
        return e.size && (r.size = e.size * t.length), Ue(this, r);
      },
      last: function () {
        return this.get(-1);
      },
      skipWhile: function (t, e) {
        return Ue(this, Be(this, t, e, !1));
      },
      zip: function () {
        var t = [this].concat(S(arguments));
        return Ue(this, Pe(this, Mr, t));
      },
      zipWith: function (t) {
        var e = S(arguments);
        return e[0] = this, Ue(this, Pe(this, t, e));
      }
    }), i.prototype[p] = !0, i.prototype[d] = !0, wr(o, {
      get: function (t, e) {
        return this.has(t) ? t : e;
      },
      includes: function (t) {
        return this.has(t);
      },
      keySeq: function () {
        return this.valueSeq();
      }
    }), o.prototype.has = xr.includes, wr(q, n.prototype), wr(H, i.prototype), wr(W, o.prototype), wr(ht, n.prototype), wr(pt, i.prototype), wr(dt, o.prototype), {
      Iterable: r,
      Seq: U,
      Collection: lt,
      Map: Mt,
      OrderedMap: Se,
      List: ie,
      Stack: gr,
      Set: er,
      OrderedSet: cr,
      Record: Xe,
      Range: ft,
      Repeat: st,
      is: ut,
      fromJS: nt
    };
  }();
}, function (t, e, r) {
  "use strict";

  var n = function (t) {};

  t.exports = function (t, e) {
    for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o];

    if (n(e), !t) {
      var u;
      if (void 0 === e) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
        var a = 0;
        (u = new Error(e.replace(/%s/g, function () {
          return String(i[a++]);
        }))).name = "Invariant Violation";
      }
      throw u.framesToPop = 1, u;
    }
  };
}, function (t, e, r) {
  "use strict";

  function n(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), n.forEach(function (e) {
        i(t, e, r[e]);
      });
    }

    return t;
  }

  function i(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var o = r(546),
      u = r(452),
      a = r(548),
      s = r(440),
      c = r(413),
      f = c.OrderedSet,
      l = c.Record,
      h = c.Stack,
      p = c.OrderedMap,
      d = c.List,
      g = l({
    allowUndo: !0,
    currentContent: null,
    decorator: null,
    directionMap: null,
    forceSelection: !1,
    inCompositionMode: !1,
    inlineStyleOverride: null,
    lastChangeType: null,
    nativelyRenderedContent: null,
    redoStack: h(),
    selection: null,
    treeMap: null,
    undoStack: h()
  }),
      v = function () {
    e.createEmpty = function (t) {
      return this.createWithText("", t);
    }, e.createWithText = function (t, r) {
      return e.createWithContent(u.createFromText(t), r);
    }, e.createWithContent = function (t, r) {
      if (0 === t.getBlockMap().count()) return e.createEmpty(r);
      var n = t.getBlockMap().first().getKey();
      return e.create({
        currentContent: t,
        undoStack: h(),
        redoStack: h(),
        decorator: r || null,
        selection: s.createEmpty(n)
      });
    }, e.create = function (t) {
      var r = t.currentContent,
          i = n({}, t, {
        treeMap: _(r, t.decorator),
        directionMap: a.getDirectionMap(r)
      });
      return new e(new g(i));
    }, e.fromJS = function (t) {
      return new e(new g(n({}, t, {
        directionMap: null != t.directionMap ? p(t.directionMap) : t.directionMap,
        inlineStyleOverride: null != t.inlineStyleOverride ? f(t.inlineStyleOverride) : t.inlineStyleOverride,
        nativelyRenderedContent: null != t.nativelyRenderedContent ? u.fromJS(t.nativelyRenderedContent) : t.nativelyRenderedContent,
        redoStack: null != t.redoStack ? h(t.redoStack.map(function (t) {
          return u.fromJS(t);
        })) : t.redoStack,
        selection: null != t.selection ? new s(t.selection) : t.selection,
        treeMap: null != t.treeMap ? p(t.treeMap).map(function (t) {
          return d(t).map(function (t) {
            return o.fromJS(t);
          });
        }) : t.treeMap,
        undoStack: null != t.undoStack ? h(t.undoStack.map(function (t) {
          return u.fromJS(t);
        })) : t.undoStack,
        currentContent: u.fromJS(t.currentContent)
      })));
    }, e.set = function (t, r) {
      return new e(t.getImmutable().withMutations(function (e) {
        var n = e.get("decorator"),
            i = n;
        null === r.decorator ? i = null : r.decorator && (i = r.decorator);
        var u = r.currentContent || t.getCurrentContent();

        if (i !== n) {
          var a,
              s = e.get("treeMap");
          return a = i && n ? function (t, e, r, n, i) {
            return r.merge(e.toSeq().filter(function (e) {
              return n.getDecorations(e, t) !== i.getDecorations(e, t);
            }).map(function (e) {
              return o.generate(t, e, n);
            }));
          }(u, u.getBlockMap(), s, i, n) : _(u, i), void e.merge({
            decorator: i,
            treeMap: a,
            nativelyRenderedContent: null
          });
        }

        u !== t.getCurrentContent() && e.set("treeMap", function (t, e, r, n) {
          var i = t.getCurrentContent().set("entityMap", r),
              u = i.getBlockMap();
          return t.getImmutable().get("treeMap").merge(e.toSeq().filter(function (t, e) {
            return t !== u.get(e);
          }).map(function (t) {
            return o.generate(i, t, n);
          }));
        }(t, u.getBlockMap(), u.getEntityMap(), i)), e.merge(r);
      }));
    };
    var t = e.prototype;

    function e(t) {
      i(this, "_immutable", void 0), this._immutable = t;
    }

    return t.toJS = function () {
      return this.getImmutable().toJS();
    }, t.getAllowUndo = function () {
      return this.getImmutable().get("allowUndo");
    }, t.getCurrentContent = function () {
      return this.getImmutable().get("currentContent");
    }, t.getUndoStack = function () {
      return this.getImmutable().get("undoStack");
    }, t.getRedoStack = function () {
      return this.getImmutable().get("redoStack");
    }, t.getSelection = function () {
      return this.getImmutable().get("selection");
    }, t.getDecorator = function () {
      return this.getImmutable().get("decorator");
    }, t.isInCompositionMode = function () {
      return this.getImmutable().get("inCompositionMode");
    }, t.mustForceSelection = function () {
      return this.getImmutable().get("forceSelection");
    }, t.getNativelyRenderedContent = function () {
      return this.getImmutable().get("nativelyRenderedContent");
    }, t.getLastChangeType = function () {
      return this.getImmutable().get("lastChangeType");
    }, t.getInlineStyleOverride = function () {
      return this.getImmutable().get("inlineStyleOverride");
    }, e.setInlineStyleOverride = function (t, r) {
      return e.set(t, {
        inlineStyleOverride: r
      });
    }, t.getCurrentInlineStyle = function () {
      var t = this.getInlineStyleOverride();
      if (null != t) return t;
      var e = this.getCurrentContent(),
          r = this.getSelection();
      return r.isCollapsed() ? function (t, e) {
        var r = e.getStartKey(),
            n = e.getStartOffset(),
            i = t.getBlockForKey(r);
        if (n > 0) return i.getInlineStyleAt(n - 1);
        if (i.getLength()) return i.getInlineStyleAt(0);
        return b(t, r);
      }(e, r) : function (t, e) {
        var r = e.getStartKey(),
            n = e.getStartOffset(),
            i = t.getBlockForKey(r);
        if (n < i.getLength()) return i.getInlineStyleAt(n);
        if (n > 0) return i.getInlineStyleAt(n - 1);
        return b(t, r);
      }(e, r);
    }, t.getBlockTree = function (t) {
      return this.getImmutable().getIn(["treeMap", t]);
    }, t.isSelectionAtStartOfContent = function () {
      var t = this.getCurrentContent().getBlockMap().first().getKey();
      return this.getSelection().hasEdgeWithin(t, 0, 0);
    }, t.isSelectionAtEndOfContent = function () {
      var t = this.getCurrentContent().getBlockMap().last(),
          e = t.getLength();
      return this.getSelection().hasEdgeWithin(t.getKey(), e, e);
    }, t.getDirectionMap = function () {
      return this.getImmutable().get("directionMap");
    }, e.acceptSelection = function (t, e) {
      return y(t, e, !1);
    }, e.forceSelection = function (t, e) {
      return e.getHasFocus() || (e = e.set("hasFocus", !0)), y(t, e, !0);
    }, e.moveSelectionToEnd = function (t) {
      var r = t.getCurrentContent().getLastBlock(),
          n = r.getKey(),
          i = r.getLength();
      return e.acceptSelection(t, new s({
        anchorKey: n,
        anchorOffset: i,
        focusKey: n,
        focusOffset: i,
        isBackward: !1
      }));
    }, e.moveFocusToEnd = function (t) {
      var r = e.moveSelectionToEnd(t);
      return e.forceSelection(r, r.getSelection());
    }, e.push = function (t, r, n) {
      var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (t.getCurrentContent() === r) return t;
      var o = a.getDirectionMap(r, t.getDirectionMap());
      if (!t.getAllowUndo()) return e.set(t, {
        currentContent: r,
        directionMap: o,
        lastChangeType: n,
        selection: r.getSelectionAfter(),
        forceSelection: i,
        inlineStyleOverride: null
      });
      var u = t.getSelection(),
          s = t.getCurrentContent(),
          c = t.getUndoStack(),
          f = r;
      u !== s.getSelectionAfter() || m(t, n) ? (c = c.push(s), f = f.set("selectionBefore", u)) : "insert-characters" !== n && "backspace-character" !== n && "delete-character" !== n || (f = f.set("selectionBefore", s.getSelectionBefore()));
      var l = t.getInlineStyleOverride(),
          p = ["adjust-depth", "change-block-type", "split-block"];
      -1 === p.indexOf(n) && (l = null);
      var d = {
        currentContent: f,
        directionMap: o,
        undoStack: c,
        redoStack: h(),
        lastChangeType: n,
        selection: r.getSelectionAfter(),
        forceSelection: i,
        inlineStyleOverride: l
      };
      return e.set(t, d);
    }, e.undo = function (t) {
      if (!t.getAllowUndo()) return t;
      var r = t.getUndoStack(),
          n = r.peek();
      if (!n) return t;
      var i = t.getCurrentContent(),
          o = a.getDirectionMap(n, t.getDirectionMap());
      return e.set(t, {
        currentContent: n,
        directionMap: o,
        undoStack: r.shift(),
        redoStack: t.getRedoStack().push(i),
        forceSelection: !0,
        inlineStyleOverride: null,
        lastChangeType: "undo",
        nativelyRenderedContent: null,
        selection: i.getSelectionBefore()
      });
    }, e.redo = function (t) {
      if (!t.getAllowUndo()) return t;
      var r = t.getRedoStack(),
          n = r.peek();
      if (!n) return t;
      var i = t.getCurrentContent(),
          o = a.getDirectionMap(n, t.getDirectionMap());
      return e.set(t, {
        currentContent: n,
        directionMap: o,
        undoStack: t.getUndoStack().push(i),
        redoStack: r.shift(),
        forceSelection: !0,
        inlineStyleOverride: null,
        lastChangeType: "redo",
        nativelyRenderedContent: null,
        selection: n.getSelectionAfter()
      });
    }, t.getImmutable = function () {
      return this._immutable;
    }, e;
  }();

  function y(t, e, r) {
    return v.set(t, {
      selection: e,
      forceSelection: r,
      nativelyRenderedContent: null,
      inlineStyleOverride: null
    });
  }

  function _(t, e) {
    return t.getBlockMap().map(function (r) {
      return o.generate(t, r, e);
    }).toOrderedMap();
  }

  function m(t, e) {
    return e !== t.getLastChangeType() || "insert-characters" !== e && "backspace-character" !== e && "delete-character" !== e;
  }

  function b(t, e) {
    var r = t.getBlockMap().reverse().skipUntil(function (t, r) {
      return r === e;
    }).skip(1).skipUntil(function (t, e) {
      return t.getLength();
    }).first();
    return r ? r.getInlineStyleAt(r.getLength() - 1) : f();
  }

  t.exports = v;
},, function (t, e, r) {
  "use strict";

  var n = r(420),
      i = r(536),
      o = r(537),
      u = r(539),
      a = r(438),
      s = r(413),
      c = r(542),
      f = r(543),
      l = r(414),
      h = r(473),
      p = r(471),
      d = r(544),
      g = r(545),
      v = s.OrderedSet,
      y = {
    replaceText: function (t, e, r, i, o) {
      var u = p(t, e),
          a = d(u, e),
          s = n.create({
        style: i || v(),
        entity: o || null
      });
      return f(a, a.getSelectionAfter(), r, s);
    },
    insertText: function (t, e, r, n, i) {
      return e.isCollapsed() || l(!1), y.replaceText(t, e, r, n, i);
    },
    moveText: function (t, e, r) {
      var n = a(t, e),
          i = y.removeRange(t, e, "backward");
      return y.replaceWithFragment(i, r, n);
    },
    replaceWithFragment: function (t, e, r) {
      var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "REPLACE_WITH_NEW_DATA",
          i = p(t, e),
          o = d(i, e);
      return c(o, o.getSelectionAfter(), r, n);
    },
    removeRange: function (t, e, r) {
      var n, i, o, a;
      e.getIsBackward() && (e = e.merge({
        anchorKey: e.getFocusKey(),
        anchorOffset: e.getFocusOffset(),
        focusKey: e.getAnchorKey(),
        focusOffset: e.getAnchorOffset(),
        isBackward: !1
      })), n = e.getAnchorKey(), i = e.getFocusKey(), o = t.getBlockForKey(n), a = t.getBlockForKey(i);
      var s = e.getStartOffset(),
          c = e.getEndOffset(),
          f = o.getEntityAt(s),
          l = a.getEntityAt(c - 1);

      if (n === i && f && f === l) {
        var h = u(t.getEntityMap(), o, a, e, r);
        return d(t, h);
      }

      var g = p(t, e);
      return d(g, e);
    },
    splitBlock: function (t, e) {
      var r = p(t, e),
          n = d(r, e);
      return g(n, n.getSelectionAfter());
    },
    applyInlineStyle: function (t, e, r) {
      return i.add(t, e, r);
    },
    removeInlineStyle: function (t, e, r) {
      return i.remove(t, e, r);
    },
    setBlockType: function (t, e, r) {
      return h(t, e, function (t) {
        return t.merge({
          type: r,
          depth: 0
        });
      });
    },
    setBlockData: function (t, e, r) {
      return h(t, e, function (t) {
        return t.merge({
          data: r
        });
      });
    },
    mergeBlockData: function (t, e, r) {
      return h(t, e, function (t) {
        return t.merge({
          data: t.getData().merge(r)
        });
      });
    },
    applyEntity: function (t, e, r) {
      var n = p(t, e);
      return o(n, e, r);
    }
  };
  t.exports = y;
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    if (null != t) return t;
    throw new Error("Got unexpected null or undefined");
  };
}, function (t, e, r) {
  "use strict";

  var n = r(555),
      i = r(558),
      o = r(559),
      u = r(560);

  function a(t, e, r, n) {
    if (t === r) return !0;
    if (!r.startsWith(t)) return !1;
    var o = r.slice(t.length);
    return !!e && (o = n ? n(o) : o, i.contains(o, e));
  }

  function s(t) {
    return "Windows" === n.platformName ? t.replace(/^\s*NT/, "") : t;
  }

  var c = {
    isBrowser: function (t) {
      return a(n.browserName, n.browserFullVersion, t);
    },
    isBrowserArchitecture: function (t) {
      return a(n.browserArchitecture, null, t);
    },
    isDevice: function (t) {
      return a(n.deviceName, null, t);
    },
    isEngine: function (t) {
      return a(n.engineName, n.engineVersion, t);
    },
    isPlatform: function (t) {
      return a(n.platformName, n.platformFullVersion, t, s);
    },
    isPlatformArchitecture: function (t) {
      return a(n.platformArchitecture, null, t);
    }
  };
  t.exports = o(c, u);
}, function (t, e, r) {
  "use strict";

  var n = r(413),
      i = n.Map,
      o = n.OrderedSet,
      u = n.Record,
      a = o(),
      s = {
    style: a,
    entity: null
  },
      c = function (t) {
    var e, r;

    function n() {
      return t.apply(this, arguments) || this;
    }

    r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
    var u = n.prototype;
    return u.getStyle = function () {
      return this.get("style");
    }, u.getEntity = function () {
      return this.get("entity");
    }, u.hasStyle = function (t) {
      return this.getStyle().includes(t);
    }, n.applyStyle = function (t, e) {
      var r = t.set("style", t.getStyle().add(e));
      return n.create(r);
    }, n.removeStyle = function (t, e) {
      var r = t.set("style", t.getStyle().remove(e));
      return n.create(r);
    }, n.applyEntity = function (t, e) {
      var r = t.getEntity() === e ? t : t.set("entity", e);
      return n.create(r);
    }, n.create = function (t) {
      if (!t) return f;
      var e = i({
        style: a,
        entity: null
      }).merge(t),
          r = l.get(e);
      if (r) return r;
      var o = new n(e);
      return l = l.set(e, o), o;
    }, n.fromJS = function (t) {
      var e = t.style,
          r = t.entity;
      return new n({
        style: Array.isArray(e) ? o(e) : e,
        entity: Array.isArray(r) ? o(r) : r
      });
    }, n;
  }(u(s)),
      f = new c(),
      l = i([[i(s), f]]);

  c.EMPTY = f, t.exports = c;
}, function (t, e, r) {
  "use strict";

  var n = r(420),
      i = r(433),
      o = r(413),
      u = o.List,
      a = o.Map,
      s = o.OrderedSet,
      c = o.Record,
      f = o.Repeat,
      l = s(),
      h = {
    parent: null,
    characterList: u(),
    data: a(),
    depth: 0,
    key: "",
    text: "",
    type: "unstyled",
    children: u(),
    prevSibling: null,
    nextSibling: null
  },
      p = function (t, e) {
    return t.getStyle() === e.getStyle();
  },
      d = function (t, e) {
    return t.getEntity() === e.getEntity();
  },
      g = function (t) {
    if (!t) return t;
    var e = t.characterList,
        r = t.text;
    return r && !e && (t.characterList = u(f(n.EMPTY, r.length))), t;
  },
      v = function (t) {
    var e, r;

    function n() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h;
      return t.call(this, g(e)) || this;
    }

    r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
    var o = n.prototype;
    return o.getKey = function () {
      return this.get("key");
    }, o.getType = function () {
      return this.get("type");
    }, o.getText = function () {
      return this.get("text");
    }, o.getCharacterList = function () {
      return this.get("characterList");
    }, o.getLength = function () {
      return this.getText().length;
    }, o.getDepth = function () {
      return this.get("depth");
    }, o.getData = function () {
      return this.get("data");
    }, o.getInlineStyleAt = function (t) {
      var e = this.getCharacterList().get(t);
      return e ? e.getStyle() : l;
    }, o.getEntityAt = function (t) {
      var e = this.getCharacterList().get(t);
      return e ? e.getEntity() : null;
    }, o.getChildKeys = function () {
      return this.get("children");
    }, o.getParentKey = function () {
      return this.get("parent");
    }, o.getPrevSiblingKey = function () {
      return this.get("prevSibling");
    }, o.getNextSiblingKey = function () {
      return this.get("nextSibling");
    }, o.findStyleRanges = function (t, e) {
      i(this.getCharacterList(), p, t, e);
    }, o.findEntityRanges = function (t, e) {
      i(this.getCharacterList(), d, t, e);
    }, n;
  }(c(h));

  t.exports = v;
}, function (t, e, r) {
  "use strict";

  var n = {},
      i = Math.pow(2, 24);

  t.exports = function () {
    for (var t; void 0 === t || n.hasOwnProperty(t) || !isNaN(+t);) t = Math.floor(Math.random() * i).toString(32);

    return n[t] = !0, t;
  };
}, function (t, e, r) {
  "use strict";

  var n = {
    encode: function (t, e, r) {
      return t + "-" + e + "-" + r;
    },
    decode: function (t) {
      var e = t.split("-").reverse(),
          r = e[0],
          n = e[1];
      return {
        blockKey: e.slice(2).reverse().join("-"),
        decoratorKey: parseInt(n, 10),
        leafKey: parseInt(r, 10)
      };
    }
  };
  t.exports = n;
},, function (t, e, r) {
  "use strict";

  var n = r(535),
      i = r(432),
      o = r(420),
      u = r(551),
      a = r(427),
      s = r(452),
      c = r(454),
      f = r(478),
      l = r(552),
      h = r(494),
      p = r(439),
      d = r(417),
      g = r(476),
      v = r(415),
      y = r(460),
      _ = r(617),
      m = r(505),
      b = r(440),
      S = r(618),
      w = r(621),
      x = r(422),
      k = r(506),
      E = r(627),
      O = {
    Editor: l,
    EditorBlock: h,
    EditorState: v,
    CompositeDecorator: u,
    Entity: p,
    EntityInstance: g,
    BlockMapBuilder: i,
    CharacterMetadata: o,
    ContentBlock: a,
    ContentState: s,
    RawDraftContentState: _,
    SelectionState: b,
    AtomicBlockUtils: n,
    KeyBindingUtil: y,
    Modifier: d,
    RichUtils: m,
    DefaultDraftBlockRenderMap: c,
    DefaultDraftInlineStyle: f,
    convertFromHTML: r(503),
    convertFromRaw: w,
    convertToRaw: S,
    genKey: x,
    getDefaultKeyBinding: k,
    getVisibleSelectionRect: E
  };

  t.exports = O;
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    return !("undefined" == typeof window || !window.__DRAFT_GKX) && !!window.__DRAFT_GKX[t];
  };
}, function (t, e, r) {
  "use strict";

  var n = r(420),
      i = r(433),
      o = r(413),
      u = o.List,
      a = o.Map,
      s = o.OrderedSet,
      c = o.Record,
      f = o.Repeat,
      l = s(),
      h = c({
    key: "",
    type: "unstyled",
    text: "",
    characterList: u(),
    depth: 0,
    data: a()
  }),
      p = function (t) {
    var e, r;

    function o(e) {
      return t.call(this, function (t) {
        if (!t) return t;
        var e = t.characterList,
            r = t.text;
        return r && !e && (t.characterList = u(f(n.EMPTY, r.length))), t;
      }(e)) || this;
    }

    r = t, (e = o).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
    var a = o.prototype;
    return a.getKey = function () {
      return this.get("key");
    }, a.getType = function () {
      return this.get("type");
    }, a.getText = function () {
      return this.get("text");
    }, a.getCharacterList = function () {
      return this.get("characterList");
    }, a.getLength = function () {
      return this.getText().length;
    }, a.getDepth = function () {
      return this.get("depth");
    }, a.getData = function () {
      return this.get("data");
    }, a.getInlineStyleAt = function (t) {
      var e = this.getCharacterList().get(t);
      return e ? e.getStyle() : l;
    }, a.getEntityAt = function (t) {
      var e = this.getCharacterList().get(t);
      return e ? e.getEntity() : null;
    }, a.findStyleRanges = function (t, e) {
      i(this.getCharacterList(), d, t, e);
    }, a.findEntityRanges = function (t, e) {
      i(this.getCharacterList(), g, t, e);
    }, o;
  }(h);

  function d(t, e) {
    return t.getStyle() === e.getStyle();
  }

  function g(t, e) {
    return t.getEntity() === e.getEntity();
  }

  t.exports = p;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return t.replace(/\//g, "-");
  }

  t.exports = function (t) {
    return "object" == typeof t ? Object.keys(t).filter(function (e) {
      return t[e];
    }).map(n).join(" ") : Array.prototype.map.call(arguments, n).join(" ");
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    return !(!t || !t.ownerDocument) && t.nodeType === Node.ELEMENT_NODE;
  };
}, function (t, e, r) {
  "use strict";

  var n = r(414),
      i = /[\uD800-\uDFFF]/;

  function o(t) {
    return 55296 <= t && t <= 57343;
  }

  function u(t) {
    return i.test(t);
  }

  function a(t, e) {
    return 1 + o(t.charCodeAt(e));
  }

  function s(t, e, r) {
    if (e = e || 0, r = void 0 === r ? 1 / 0 : r || 0, !u(t)) return t.substr(e, r);
    var n = t.length;
    if (n <= 0 || e > n || r <= 0) return "";
    var i = 0;

    if (e > 0) {
      for (; e > 0 && i < n; e--) i += a(t, i);

      if (i >= n) return "";
    } else if (e < 0) {
      for (i = n; e < 0 && 0 < i; e++) i -= a(t, i - 1);

      i < 0 && (i = 0);
    }

    var o = n;
    if (r < n) for (o = i; r > 0 && o < n; r--) o += a(t, o);
    return t.substring(i, o);
  }

  var c = {
    getCodePoints: function (t) {
      for (var e = [], r = 0; r < t.length; r += a(t, r)) e.push(t.codePointAt(r));

      return e;
    },
    getUTF16Length: a,
    hasSurrogateUnit: u,
    isCodeUnitInSurrogateRange: o,
    isSurrogatePair: function (t, e) {
      if (0 <= e && e < t.length || n(!1), e + 1 === t.length) return !1;
      var r = t.charCodeAt(e),
          i = t.charCodeAt(e + 1);
      return 55296 <= r && r <= 56319 && 56320 <= i && i <= 57343;
    },
    strlen: function (t) {
      if (!u(t)) return t.length;

      for (var e = 0, r = 0; r < t.length; r += a(t, r)) e++;

      return e;
    },
    substring: function (t, e, r) {
      (e = e || 0) < 0 && (e = 0), (r = void 0 === r ? 1 / 0 : r || 0) < 0 && (r = 0);
      var n = Math.abs(r - e);
      return s(t, e = e < r ? e : r, n);
    },
    substr: s
  };
  t.exports = c;
},, function (t, e, r) {
  "use strict";

  var n = r(413).OrderedMap,
      i = {
    createFromArray: function (t) {
      return n(t.map(function (t) {
        return [t.getKey(), t];
      }));
    }
  };
  t.exports = i;
}, function (t, e, r) {
  "use strict";

  t.exports = function (t, e, r, n) {
    if (t.size) {
      var i = 0;
      t.reduce(function (t, o, u) {
        return e(t, o) || (r(t) && n(i, u), i = u), o;
      }), r(t.last()) && n(i, t.count());
    }
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    return !(!t || !t.ownerDocument) && (t.ownerDocument.defaultView ? t instanceof t.ownerDocument.defaultView.HTMLElement : t instanceof HTMLElement);
  };
}, function (t, e, r) {
  "use strict";

  var n = r(417),
      i = r(426)("draft_tree_data_support");

  t.exports = function (t, e, r) {
    var o = t.getSelection(),
        u = t.getCurrentContent(),
        a = o,
        s = o.getAnchorKey(),
        c = o.getFocusKey(),
        f = u.getBlockForKey(s);
    if (i && "forward" === r && s !== c) return u;

    if (o.isCollapsed()) {
      if ("forward" === r) {
        if (t.isSelectionAtEndOfContent()) return u;
        if (i) if (o.getAnchorOffset() === u.getBlockForKey(s).getLength()) {
          var l = u.getBlockForKey(f.nextSibling);
          if (!l || 0 === l.getLength()) return u;
        }
      } else if (t.isSelectionAtStartOfContent()) return u;

      if ((a = e(t)) === o) return u;
    }

    return n.removeRange(u, a, r);
  };
},,, function (t, e, r) {
  "use strict";

  var n = r(470),
      i = r(471);

  t.exports = function (t, e) {
    var r = e.getStartKey(),
        o = e.getStartOffset(),
        u = e.getEndKey(),
        a = e.getEndOffset(),
        s = i(t, e).getBlockMap(),
        c = s.keySeq(),
        f = c.indexOf(r),
        l = c.indexOf(u) + 1;
    return n(s.slice(f, l).map(function (t, e) {
      var n = t.getText(),
          i = t.getCharacterList();
      return r === u ? t.merge({
        text: n.slice(o, a),
        characterList: i.slice(o, a)
      }) : e === r ? t.merge({
        text: n.slice(o),
        characterList: i.slice(o)
      }) : e === u ? t.merge({
        text: n.slice(0, a),
        characterList: i.slice(0, a)
      }) : t;
    }));
  };
}, function (t, e, r) {
  "use strict";

  function n(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var i = r(476),
      o = r(413),
      u = r(414),
      a = r(547),
      s = (0, o.Map)(),
      c = a();

  function f(t, e) {
    console.warn("WARNING: " + t + ' will be deprecated soon!\nPlease use "' + e + '" instead.');
  }

  var l = {
    getLastCreatedEntityKey: function () {
      return f("DraftEntity.getLastCreatedEntityKey", "contentState.getLastCreatedEntityKey"), l.__getLastCreatedEntityKey();
    },
    create: function (t, e, r) {
      return f("DraftEntity.create", "contentState.createEntity"), l.__create(t, e, r);
    },
    add: function (t) {
      return f("DraftEntity.add", "contentState.addEntity"), l.__add(t);
    },
    get: function (t) {
      return f("DraftEntity.get", "contentState.getEntity"), l.__get(t);
    },
    __getAll: function () {
      return s;
    },
    __loadWithEntities: function (t) {
      s = t, c = a();
    },
    mergeData: function (t, e) {
      return f("DraftEntity.mergeData", "contentState.mergeEntityData"), l.__mergeData(t, e);
    },
    replaceData: function (t, e) {
      return f("DraftEntity.replaceData", "contentState.replaceEntityData"), l.__replaceData(t, e);
    },
    __getLastCreatedEntityKey: function () {
      return c;
    },
    __create: function (t, e, r) {
      return l.__add(new i({
        type: t,
        mutability: e,
        data: r || {}
      }));
    },
    __add: function (t) {
      return c = a(), s = s.set(c, t), c;
    },
    __get: function (t) {
      var e = s.get(t);
      return e || u(!1), e;
    },
    __mergeData: function (t, e) {
      var r = l.__get(t),
          i = function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
              i = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
          }))), i.forEach(function (e) {
            n(t, e, r[e]);
          });
        }

        return t;
      }({}, r.getData(), e),
          o = r.set("data", i);

      return s = s.set(t, o), o;
    },
    __replaceData: function (t, e) {
      var r = l.__get(t).set("data", e);

      return s = s.set(t, r), r;
    }
  };
  t.exports = l;
}, function (t, e, r) {
  "use strict";

  var n = function (t) {
    var e, r;

    function n() {
      return t.apply(this, arguments) || this;
    }

    r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
    var i = n.prototype;
    return i.serialize = function () {
      return "Anchor: " + this.getAnchorKey() + ":" + this.getAnchorOffset() + ", Focus: " + this.getFocusKey() + ":" + this.getFocusOffset() + ", Is Backward: " + String(this.getIsBackward()) + ", Has Focus: " + String(this.getHasFocus());
    }, i.getAnchorKey = function () {
      return this.get("anchorKey");
    }, i.getAnchorOffset = function () {
      return this.get("anchorOffset");
    }, i.getFocusKey = function () {
      return this.get("focusKey");
    }, i.getFocusOffset = function () {
      return this.get("focusOffset");
    }, i.getIsBackward = function () {
      return this.get("isBackward");
    }, i.getHasFocus = function () {
      return this.get("hasFocus");
    }, i.hasEdgeWithin = function (t, e, r) {
      var n = this.getAnchorKey(),
          i = this.getFocusKey();

      if (n === i && n === t) {
        var o = this.getStartOffset(),
            u = this.getEndOffset();
        return e <= o && o <= r || e <= u && u <= r;
      }

      if (t !== n && t !== i) return !1;
      var a = t === n ? this.getAnchorOffset() : this.getFocusOffset();
      return e <= a && r >= a;
    }, i.isCollapsed = function () {
      return this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset();
    }, i.getStartKey = function () {
      return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey();
    }, i.getStartOffset = function () {
      return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset();
    }, i.getEndKey = function () {
      return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey();
    }, i.getEndOffset = function () {
      return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset();
    }, n.createEmpty = function (t) {
      return new n({
        anchorKey: t,
        anchorOffset: 0,
        focusKey: t,
        focusOffset: 0,
        isBackward: !1,
        hasFocus: !1
      });
    }, n;
  }((0, r(413).Record)({
    anchorKey: "",
    anchorOffset: 0,
    focusKey: "",
    focusOffset: 0,
    isBackward: !1,
    hasFocus: !1
  }));

  t.exports = n;
}, function (t, e, r) {
  "use strict";

  var n = r(414),
      i = null;

  function o(t) {
    return "LTR" === t || "RTL" === t;
  }

  function u(t) {
    return o(t) || n(!1), "LTR" === t ? "ltr" : "rtl";
  }

  function a(t) {
    i = t;
  }

  var s = {
    NEUTRAL: "NEUTRAL",
    LTR: "LTR",
    RTL: "RTL",
    isStrong: o,
    getHTMLDir: u,
    getHTMLDirIfDifferent: function (t, e) {
      return o(t) || n(!1), o(e) || n(!1), t === e ? null : u(t);
    },
    setGlobalDir: a,
    initGlobalDir: function () {
      a("LTR");
    },
    getGlobalDir: function () {
      return i || this.initGlobalDir(), i || n(!1), i;
    }
  };
  t.exports = s;
}, function (t, e, r) {
  "use strict";

  var n = r(443),
      i = r(479);

  t.exports = function (t) {
    for (var e = t; e && e !== n(t).documentElement;) {
      var r = i(e);
      if (null != r) return r;
      e = e.parentNode;
    }

    return null;
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    return t && t.ownerDocument ? t.ownerDocument : document;
  };
}, function (t, e, r) {
  "use strict";

  t.exports = {
    BACKSPACE: 8,
    TAB: 9,
    RETURN: 13,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46,
    COMMA: 188,
    PERIOD: 190,
    A: 65,
    Z: 90,
    ZERO: 48,
    NUMPAD_0: 96,
    NUMPAD_9: 105
  };
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    var r = i.get(t, e);
    return "auto" === r || "scroll" === r;
  }

  var i = {
    get: r(570),
    getScrollParent: function (t) {
      if (!t) return null;

      for (var e = t.ownerDocument; t && t !== e.body;) {
        if (n(t, "overflow") || n(t, "overflowY") || n(t, "overflowX")) return t;
        t = t.parentNode;
      }

      return e.defaultView || e.parentWindow;
    }
  };
  t.exports = i;
}, function (t, e, r) {
  "use strict";

  var n = r(574),
      i = r(575);

  t.exports = function (t) {
    var e = n(t.ownerDocument || t.document);
    t.Window && t instanceof t.Window && (t = e);
    var r = i(t),
        o = t === e ? t.ownerDocument.documentElement : t,
        u = t.scrollWidth - o.clientWidth,
        a = t.scrollHeight - o.clientHeight;
    return r.x = Math.max(0, Math.min(r.x, u)), r.y = Math.max(0, Math.min(r.y, a)), r;
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    return "handled" === t || !0 === t;
  };
},,,,, function (t, e, r) {
  "use strict";

  function n(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), n.forEach(function (e) {
        i(t, e, r[e]);
      });
    }

    return t;
  }

  function i(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var o = r(432),
      u = r(420),
      a = r(427),
      s = r(421),
      c = r(439),
      f = r(440),
      l = r(422),
      h = r(475),
      p = r(426),
      d = r(413),
      g = r(477),
      v = d.List,
      y = d.Record,
      _ = d.Repeat,
      m = d.Map,
      b = d.OrderedMap,
      S = y({
    entityMap: null,
    blockMap: null,
    selectionBefore: null,
    selectionAfter: null
  }),
      w = p("draft_tree_data_support") ? s : a,
      x = function (t) {
    var e, r;

    function i() {
      return t.apply(this, arguments) || this;
    }

    r = t, (e = i).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
    var a = i.prototype;
    return a.getEntityMap = function () {
      return c;
    }, a.getBlockMap = function () {
      return this.get("blockMap");
    }, a.getSelectionBefore = function () {
      return this.get("selectionBefore");
    }, a.getSelectionAfter = function () {
      return this.get("selectionAfter");
    }, a.getBlockForKey = function (t) {
      return this.getBlockMap().get(t);
    }, a.getKeyBefore = function (t) {
      return this.getBlockMap().reverse().keySeq().skipUntil(function (e) {
        return e === t;
      }).skip(1).first();
    }, a.getKeyAfter = function (t) {
      return this.getBlockMap().keySeq().skipUntil(function (e) {
        return e === t;
      }).skip(1).first();
    }, a.getBlockAfter = function (t) {
      return this.getBlockMap().skipUntil(function (e, r) {
        return r === t;
      }).skip(1).first();
    }, a.getBlockBefore = function (t) {
      return this.getBlockMap().reverse().skipUntil(function (e, r) {
        return r === t;
      }).skip(1).first();
    }, a.getBlocksAsArray = function () {
      return this.getBlockMap().toArray();
    }, a.getFirstBlock = function () {
      return this.getBlockMap().first();
    }, a.getLastBlock = function () {
      return this.getBlockMap().last();
    }, a.getPlainText = function (t) {
      return this.getBlockMap().map(function (t) {
        return t ? t.getText() : "";
      }).join(t || "\n");
    }, a.getLastCreatedEntityKey = function () {
      return c.__getLastCreatedEntityKey();
    }, a.hasText = function () {
      var t = this.getBlockMap();
      return t.size > 1 || escape(t.first().getText()).replace(/%u200B/g, "").length > 0;
    }, a.createEntity = function (t, e, r) {
      return c.__create(t, e, r), this;
    }, a.mergeEntityData = function (t, e) {
      return c.__mergeData(t, e), this;
    }, a.replaceEntityData = function (t, e) {
      return c.__replaceData(t, e), this;
    }, a.addEntity = function (t) {
      return c.__add(t), this;
    }, a.getEntity = function (t) {
      return c.__get(t);
    }, a.getAllEntities = function () {
      return c.__getAll();
    }, a.loadWithEntities = function (t) {
      return c.__loadWithEntities(t);
    }, i.createFromBlockArray = function (t, e) {
      var r = Array.isArray(t) ? t : t.contentBlocks,
          n = o.createFromArray(r),
          u = n.isEmpty() ? new f() : f.createEmpty(n.first().getKey());
      return new i({
        blockMap: n,
        entityMap: e || c,
        selectionBefore: u,
        selectionAfter: u
      });
    }, i.createFromText = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /\r\n?|\n/g,
          r = t.split(e),
          n = r.map(function (t) {
        return t = g(t), new w({
          key: l(),
          text: t,
          type: "unstyled",
          characterList: v(_(u.EMPTY, t.length))
        });
      });
      return i.createFromBlockArray(n);
    }, i.fromJS = function (t) {
      return new i(n({}, t, {
        blockMap: b(t.blockMap).map(i.createContentBlockFromJS),
        selectionBefore: new f(t.selectionBefore),
        selectionAfter: new f(t.selectionAfter)
      }));
    }, i.createContentBlockFromJS = function (t) {
      var e = t.characterList;
      return new w(n({}, t, {
        data: m(t.data),
        characterList: null != e ? v((Array.isArray(e) ? e : h(e)).map(function (t) {
          return u.fromJS(t);
        })) : void 0
      }));
    }, i;
  }(S);

  t.exports = x;
}, function (t, e, r) {
  "use strict";

  var n = r(441),
      i = r(414),
      o = "֐־׀׃׆׈-׏א-ת׫-ׯװ-ײ׳-״׵-׿߀-߉ߊ-ߪߴ-ߵߺ߻-߿ࠀ-ࠕࠚࠤࠨ࠮-࠯࠰-࠾࠿ࡀ-ࡘ࡜-࡝࡞࡟-࢟‏יִײַ-ﬨשׁ-זּ﬷טּ-לּ﬽מּ﬿נּ-סּ﭂ףּ-פּ﭅צּ-ﭏ",
      u = "؈؋؍؛؜؝؞-؟ؠ-ؿـف-ي٭ٮ-ٯٱ-ۓ۔ەۥ-ۦۮ-ۯۺ-ۼ۽-۾ۿ܀-܍܎܏ܐܒ-ܯ݋-݌ݍ-ޥޱ޲-޿ࢠ-ࢲࢳ-ࣣﭐ-ﮱ﮲-﯁﯂-﯒ﯓ-ﴽ﵀-﵏ﵐ-ﶏ﶐-﶑ﶒ-ﷇ﷈-﷏ﷰ-ﷻ﷼﷾-﷿ﹰ-ﹴ﹵ﹶ-ﻼ﻽-﻾",
      a = new RegExp("[" + "A-Za-zªµºÀ-ÖØ-öø-ƺƻƼ-ƿǀ-ǃǄ-ʓʔʕ-ʯʰ-ʸʻ-ˁː-ˑˠ-ˤˮͰ-ͳͶ-ͷͺͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҂Ҋ-ԯԱ-Ֆՙ՚-՟ա-և։ःऄ-हऻऽा-ीॉ-ौॎ-ॏॐक़-ॡ।-॥०-९॰ॱॲ-ঀং-ঃঅ-ঌএ-ঐও-নপ-রলশ-হঽা-ীে-ৈো-ৌৎৗড়-ঢ়য়-ৡ০-৯ৰ-ৱ৴-৹৺ਃਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽા-ીૉો-ૌૐૠ-ૡ૦-૯૰ଂ-ଃଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽାୀେ-ୈୋ-ୌୗଡ଼-ଢ଼ୟ-ୡ୦-୯୰ୱ୲-୷ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹா-ிு-ூெ-ைொ-ௌௐௗ௦-௯௰-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౙౠ-ౡ౦-౯౿ಂ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽಾಿೀ-ೄೆೇ-ೈೊ-ೋೕ-ೖೞೠ-ೡ೦-೯ೱ-ೲം-ഃഅ-ഌഎ-ഐഒ-ഺഽാ-ീെ-ൈൊ-ൌൎൗൠ-ൡ൦-൯൰-൵൹ൺ-ൿං-ඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-ෳ෴ก-ะา-ำเ-ๅๆ๏๐-๙๚-๛ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆ໐-໙ໜ-ໟༀ༁-༃༄-༒༓༔༕-༗༚-༟༠-༩༪-༳༴༶༸༾-༿ཀ-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿏࿐-࿔࿕-࿘࿙-࿚က-ဪါ-ာေးျ-ြဿ၀-၉၊-၏ၐ-ၕၖ-ၗၚ-ၝၡၢ-ၤၥ-ၦၧ-ၭၮ-ၰၵ-ႁႃ-ႄႇ-ႌႎႏ႐-႙ႚ-ႜ႞-႟Ⴀ-ჅჇჍა-ჺ჻ჼჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፨፩-፼ᎀ-ᎏᎠ-Ᏼᐁ-ᙬ᙭-᙮ᙯ-ᙿᚁ-ᚚᚠ-ᛪ᛫-᛭ᛮ-ᛰᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵-᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះ-ៈ។-៖ៗ៘-៚ៜ០-៩᠐-᠙ᠠ-ᡂᡃᡄ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰ-ᤱᤳ-ᤸ᥆-᥏ᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧀᧁ-ᧇᧈ-ᧉ᧐-᧙᧚ᨀ-ᨖᨙ-ᨚ᨞-᨟ᨠ-ᩔᩕᩗᩡᩣ-ᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪦ᪧ᪨-᪭ᬄᬅ-ᬳᬵᬻᬽ-ᭁᭃ-᭄ᭅ-ᭋ᭐-᭙᭚-᭠᭡-᭪᭴-᭼ᮂᮃ-ᮠᮡᮦ-ᮧ᮪ᮮ-ᮯ᮰-᮹ᮺ-ᯥᯧᯪ-ᯬᯮ᯲-᯳᯼-᯿ᰀ-ᰣᰤ-ᰫᰴ-ᰵ᰻-᰿᱀-᱉ᱍ-ᱏ᱐-᱙ᱚ-ᱷᱸ-ᱽ᱾-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳱᳲ-ᳳᳵ-ᳶᴀ-ᴫᴬ-ᵪᵫ-ᵷᵸᵹ-ᶚᶛ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℵ-ℸℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↂↃ-ↄↅ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⱻⱼ-ⱽⱾ-ⳤⳫ-ⳮⳲ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々〆〇〡-〩〮-〯〱-〵〸-〺〻〼ぁ-ゖゝ-ゞゟァ-ヺー-ヾヿㄅ-ㄭㄱ-ㆎ㆐-㆑㆒-㆕㆖-㆟ㆠ-ㆺㇰ-ㇿ㈀-㈜㈠-㈩㈪-㉇㉈-㉏㉠-㉻㉿㊀-㊉㊊-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿌ꀀ-ꀔꀕꀖ-ꒌꓐ-ꓷꓸ-ꓽ꓾-꓿ꔀ-ꘋꘌꘐ-ꘟ꘠-꘩ꘪ-ꘫꙀ-ꙭꙮꚀ-ꚛꚜ-ꚝꚠ-ꛥꛦ-ꛯ꛲-꛷Ꜣ-ꝯꝰꝱ-ꞇ꞉-꞊Ꞌ-ꞎꞐ-ꞭꞰ-Ʇꟷꟸ-ꟹꟺꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꠣ-ꠤꠧ꠰-꠵꠶-꠷ꡀ-ꡳꢀ-ꢁꢂ-ꢳꢴ-ꣃ꣎-꣏꣐-꣙ꣲ-ꣷ꣸-꣺ꣻ꤀-꤉ꤊ-ꤥ꤮-꤯ꤰ-ꥆꥒ-꥓꥟ꥠ-ꥼꦃꦄ-ꦲꦴ-ꦵꦺ-ꦻꦽ-꧀꧁-꧍ꧏ꧐-꧙꧞-꧟ꧠ-ꧤꧦꧧ-ꧯ꧰-꧹ꧺ-ꧾꨀ-ꨨꨯ-ꨰꨳ-ꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-꩟ꩠ-ꩯꩰꩱ-ꩶ꩷-꩹ꩺꩻꩽꩾ-ꪯꪱꪵ-ꪶꪹ-ꪽꫀꫂꫛ-ꫜꫝ꫞-꫟ꫠ-ꫪꫫꫮ-ꫯ꫰-꫱ꫲꫳ-ꫴꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚ꭛ꭜ-ꭟꭤ-ꭥꯀ-ꯢꯣ-ꯤꯦ-ꯧꯩ-ꯪ꯫꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-豈-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ｯｰｱ-ﾝﾞ-ﾟﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ" + o + u + "]"),
      s = new RegExp("[" + o + u + "]");

  function c(t) {
    var e = a.exec(t);
    return null == e ? null : e[0];
  }

  function f(t) {
    var e = c(t);
    return null == e ? n.NEUTRAL : s.exec(e) ? n.RTL : n.LTR;
  }

  function l(t, e) {
    if (e = e || n.NEUTRAL, !t.length) return e;
    var r = f(t);
    return r === n.NEUTRAL ? e : r;
  }

  function h(t, e) {
    return e || (e = n.getGlobalDir()), n.isStrong(e) || i(!1), l(t, e);
  }

  var p = {
    firstStrongChar: c,
    firstStrongCharDir: f,
    resolveBlockDir: l,
    getDirection: h,
    isDirectionLTR: function (t, e) {
      return h(t, e) === n.LTR;
    },
    isDirectionRTL: function (t, e) {
      return h(t, e) === n.RTL;
    }
  };
  t.exports = p;
}, function (t, e, r) {
  "use strict";

  var n = r(0),
      i = r(428),
      o = (0, r(413).Map)({
    "header-one": {
      element: "h1"
    },
    "header-two": {
      element: "h2"
    },
    "header-three": {
      element: "h3"
    },
    "header-four": {
      element: "h4"
    },
    "header-five": {
      element: "h5"
    },
    "header-six": {
      element: "h6"
    },
    section: {
      element: "section"
    },
    article: {
      element: "article"
    },
    "unordered-list-item": {
      element: "li",
      wrapper: n.createElement("ul", {
        className: i("public/DraftStyleDefault/ul")
      })
    },
    "ordered-list-item": {
      element: "li",
      wrapper: n.createElement("ol", {
        className: i("public/DraftStyleDefault/ol")
      })
    },
    blockquote: {
      element: "blockquote"
    },
    atomic: {
      element: "figure"
    },
    "code-block": {
      element: "pre",
      wrapper: n.createElement("pre", {
        className: i("public/DraftStyleDefault/pre")
      })
    },
    unstyled: {
      element: "div",
      aliasedElements: ["p"]
    }
  });
  t.exports = o;
}, function (t, e, r) {
  "use strict";

  var n = r(487).notEmptyKey;

  function i(t, e) {
    return n(e) && "MUTABLE" === t.__get(e).getMutability() ? e : null;
  }

  t.exports = function (t, e) {
    var r;

    if (e.isCollapsed()) {
      var n = e.getAnchorKey(),
          o = e.getAnchorOffset();
      return o > 0 ? (r = t.getBlockForKey(n).getEntityAt(o - 1)) !== t.getBlockForKey(n).getEntityAt(o) ? null : i(t.getEntityMap(), r) : null;
    }

    var u = e.getStartKey(),
        a = e.getStartOffset(),
        s = t.getBlockForKey(u);
    return r = a === s.getLength() ? null : s.getEntityAt(a), i(t.getEntityMap(), r);
  };
}, function (t, e, r) {
  "use strict";

  var n = r(568);

  t.exports = function t(e, r) {
    return !(!e || !r) && (e === r || !n(e) && (n(r) ? t(e, r.parentNode) : "contains" in e ? e.contains(r) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(r))));
  };
}, function (t, e, r) {
  "use strict";

  function n(t, e) {
    return !!e && (t === e.documentElement || t === e.body);
  }

  var i = {
    getTop: function (t) {
      var e = t.ownerDocument;
      return n(t, e) ? e.body.scrollTop || e.documentElement.scrollTop : t.scrollTop;
    },
    setTop: function (t, e) {
      var r = t.ownerDocument;
      n(t, r) ? r.body.scrollTop = r.documentElement.scrollTop = e : t.scrollTop = e;
    },
    getLeft: function (t) {
      var e = t.ownerDocument;
      return n(t, e) ? e.body.scrollLeft || e.documentElement.scrollLeft : t.scrollLeft;
    },
    setLeft: function (t, e) {
      var r = t.ownerDocument;
      n(t, r) ? r.body.scrollLeft = r.documentElement.scrollLeft = e : t.scrollLeft = e;
    }
  };
  t.exports = i;
}, function (t, e, r) {
  "use strict";

  r(459);

  t.exports = function (t, e) {
    var r = t.getSelection(),
        n = t.getCurrentContent(),
        i = r.getStartKey(),
        o = r.getStartOffset(),
        u = i,
        a = 0;

    if (e > o) {
      var s = n.getKeyBefore(i);
      if (null == s) u = i;else u = s, a = n.getBlockForKey(s).getText().length;
    } else a = o - e;

    return r.merge({
      focusKey: u,
      focusOffset: a,
      isBackward: !0
    });
  };
}, function (t, e, r) {
  "use strict";

  var n = r(496);
  t.exports = n;
}, function (t, e, r) {
  "use strict";

  var n = r(419),
      i = r(595),
      o = n.isPlatform("Mac OS X"),
      u = {
    isCtrlKeyCommand: function (t) {
      return !!t.ctrlKey && !t.altKey;
    },
    isOptionKeyCommand: function (t) {
      return o && t.altKey;
    },
    usesMacOSHeuristics: function () {
      return o;
    },
    hasCommandModifier: function (t) {
      return o ? !!t.metaKey && !t.altKey : u.isCtrlKeyCommand(t);
    },
    isSoftNewlineEvent: i
  };
  t.exports = u;
},,,, function (t, e) {
  function r() {
    return t.exports = r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];

        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
      }

      return t;
    }, t.exports.__esModule = !0, t.exports.default = t.exports, r.apply(this, arguments);
  }

  t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports;
},,,,,, function (t, e, r) {
  "use strict";

  var n = r(421),
      i = r(422),
      o = r(413).OrderedMap;

  t.exports = function (t) {
    return t.first() instanceof n ? function (t) {
      var e,
          r = {};
      return o(t.withMutations(function (t) {
        t.forEach(function (n, o) {
          var u = n.getKey(),
              a = n.getNextSiblingKey(),
              s = n.getPrevSiblingKey(),
              c = n.getChildKeys(),
              f = n.getParentKey(),
              l = i();
          (r[u] = l, a) && (t.get(a) ? t.setIn([a, "prevSibling"], l) : t.setIn([u, "nextSibling"], null));
          s && (t.get(s) ? t.setIn([s, "nextSibling"], l) : t.setIn([u, "prevSibling"], null));

          if (f && t.get(f)) {
            var h = t.get(f).getChildKeys();
            t.setIn([f, "children"], h.set(h.indexOf(n.getKey()), l));
          } else t.setIn([u, "parent"], null), e && (t.setIn([e.getKey(), "nextSibling"], l), t.setIn([u, "prevSibling"], r[e.getKey()])), e = t.get(u);

          c.forEach(function (e) {
            t.get(e) ? t.setIn([e, "parent"], l) : t.setIn([u, "children"], n.getChildKeys().filter(function (t) {
              return t !== e;
            }));
          });
        });
      }).toArray().map(function (t) {
        return [r[t.getKey()], t.set("key", r[t.getKey()])];
      }));
    }(t) : function (t) {
      return o(t.toArray().map(function (t) {
        var e = i();
        return [e, t.set("key", e)];
      }));
    }(t);
  };
}, function (t, e, r) {
  "use strict";

  var n = r(420),
      i = r(433),
      o = r(414);

  function u(t, e, r) {
    var u = e.getCharacterList(),
        a = r > 0 ? u.get(r - 1) : void 0,
        s = r < u.count() ? u.get(r) : void 0,
        c = a ? a.getEntity() : void 0,
        f = s ? s.getEntity() : void 0;

    if (f && f === c && "MUTABLE" !== t.__get(f).getMutability()) {
      for (var l, h = function (t, e, r) {
        var n;
        return i(t, function (t, e) {
          return t.getEntity() === e.getEntity();
        }, function (t) {
          return t.getEntity() === e;
        }, function (t, e) {
          t <= r && e >= r && (n = {
            start: t,
            end: e
          });
        }), "object" != typeof n && o(!1), n;
      }(u, f, r), p = h.start, d = h.end; p < d;) l = u.get(p), u = u.set(p, n.applyEntity(l, null)), p++;

      return e.set("characterList", u);
    }

    return e;
  }

  t.exports = function (t, e) {
    var r = t.getBlockMap(),
        n = t.getEntityMap(),
        i = {},
        o = e.getStartKey(),
        a = e.getStartOffset(),
        s = r.get(o),
        c = u(n, s, a);
    c !== s && (i[o] = c);
    var f = e.getEndKey(),
        l = e.getEndOffset(),
        h = r.get(f);
    o === f && (h = c);
    var p = u(n, h, l);
    return p !== h && (i[f] = p), Object.keys(i).length ? t.merge({
      blockMap: r.merge(i),
      selectionAfter: e
    }) : t.set("selectionAfter", e);
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t, e, r) {
    var n = t;
    if (r === n.count()) e.forEach(function (t) {
      n = n.push(t);
    });else if (0 === r) e.reverse().forEach(function (t) {
      n = n.unshift(t);
    });else {
      var i = n.slice(0, r),
          o = n.slice(r);
      n = i.concat(e, o).toList();
    }
    return n;
  };
}, function (t, e, r) {
  "use strict";

  var n = r(413).Map;

  t.exports = function (t, e, r) {
    var i = e.getStartKey(),
        o = e.getEndKey(),
        u = t.getBlockMap(),
        a = u.toSeq().skipUntil(function (t, e) {
      return e === i;
    }).takeUntil(function (t, e) {
      return e === o;
    }).concat(n([[o, u.get(o)]])).map(r);
    return t.merge({
      blockMap: u.merge(a),
      selectionBefore: e,
      selectionAfter: e
    });
  };
}, function (t, e, r) {
  "use strict";

  var n = r(421);

  t.exports = function (t, e) {
    if (!(t instanceof n)) return null;
    var r = t.getNextSiblingKey();
    if (r) return r;
    var i = t.getParentKey();
    if (!i) return null;

    for (var o = e.get(i); o && !o.getNextSiblingKey();) {
      var u = o.getParentKey();
      o = u ? e.get(u) : null;
    }

    return o ? o.getNextSiblingKey() : null;
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    return Object.keys(t).map(function (e) {
      return t[e];
    });
  };
}, function (t, e, r) {
  "use strict";

  var n = function (t) {
    var e, r;

    function n() {
      return t.apply(this, arguments) || this;
    }

    r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
    var i = n.prototype;
    return i.getType = function () {
      return this.get("type");
    }, i.getMutability = function () {
      return this.get("mutability");
    }, i.getData = function () {
      return this.get("data");
    }, n;
  }((0, r(413).Record)({
    type: "TOKEN",
    mutability: "IMMUTABLE",
    data: Object
  }));

  t.exports = n;
}, function (t, e, r) {
  "use strict";

  var n = new RegExp("\r", "g");

  t.exports = function (t) {
    return t.replace(n, "");
  };
}, function (t, e, r) {
  "use strict";

  t.exports = {
    BOLD: {
      fontWeight: "bold"
    },
    CODE: {
      fontFamily: "monospace",
      wordWrap: "break-word"
    },
    ITALIC: {
      fontStyle: "italic"
    },
    STRIKETHROUGH: {
      textDecoration: "line-through"
    },
    UNDERLINE: {
      textDecoration: "underline"
    }
  };
}, function (t, e, r) {
  "use strict";

  var n = r(429);

  t.exports = function t(e) {
    if (n(e)) {
      var r = e,
          i = r.getAttribute("data-offset-key");
      if (i) return i;

      for (var o = 0; o < r.childNodes.length; o++) {
        var u = t(r.childNodes[o]);
        if (u) return u;
      }
    }

    return null;
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window;
  };
}, function (t, e, r) {
  "use strict";

  var n = r(482),
      i = r(415),
      o = r(483),
      u = r(484);

  t.exports = function (t) {
    if (t._blockSelectEvents || t._latestEditorState !== t.props.editorState) {
      if (t._blockSelectEvents) {
        var e = t.props.editorState.getSelection();
        n.logBlockedSelectionEvent({
          anonymizedDom: "N/A",
          extraParams: JSON.stringify({
            stacktrace: new Error().stack
          }),
          selectionState: JSON.stringify(e.toJS())
        });
      }
    } else {
      var r = t.props.editorState,
          a = u(r, o(t)),
          s = a.selectionState;
      s !== r.getSelection() && (r = a.needsRecovery ? i.forceSelection(r, s) : i.acceptSelection(r, s), t.update(r));
    }
  };
}, function (t, e, r) {
  "use strict";

  t.exports = {
    logBlockedSelectionEvent: function () {
      return null;
    },
    logSelectionStateFailure: function () {
      return null;
    }
  };
}, function (t, e, r) {
  "use strict";

  var n = r(414),
      i = r(434);

  t.exports = function (t) {
    var e = t.editorContainer;
    return e || n(!1), i(e.firstChild) || n(!1), e.firstChild;
  };
}, function (t, e, r) {
  "use strict";

  var n = r(485);

  t.exports = function (t, e) {
    var r = e.ownerDocument.defaultView.getSelection(),
        i = r.anchorNode,
        o = r.anchorOffset,
        u = r.focusNode,
        a = r.focusOffset;
    return 0 === r.rangeCount || null == i || null == u ? {
      selectionState: t.getSelection().set("hasFocus", !1),
      needsRecovery: !1
    } : n(t, e, i, o, u, a);
  };
}, function (t, e, r) {
  "use strict";

  var n = r(442),
      i = r(479),
      o = r(486),
      u = r(414),
      a = r(429),
      s = r(418);

  function c(t, e, r) {
    var o = e,
        c = n(o);
    (null != c || t && (t === o || t.firstChild === o) || u(!1), t === o) && (o = o.firstChild, a(o) || u(!1), "true" !== (o = o).getAttribute("data-contents") && u(!1), r > 0 && (r = o.childNodes.length));

    if (0 === r) {
      var l = null;
      if (null != c) l = c;else {
        var h = function (t) {
          for (; t.firstChild && (a(t.firstChild) && "true" === t.firstChild.getAttribute("data-blocks") || i(t.firstChild));) t = t.firstChild;

          return t;
        }(o);

        l = s(i(h));
      }
      return {
        key: l,
        offset: 0
      };
    }

    var p = o.childNodes[r - 1],
        d = null,
        g = null;

    if (i(p)) {
      var v = function (t) {
        for (; t.lastChild && (a(t.lastChild) && "true" === t.lastChild.getAttribute("data-blocks") || i(t.lastChild));) t = t.lastChild;

        return t;
      }(p);

      d = s(i(v)), g = f(v);
    } else d = s(c), g = f(p);

    return {
      key: d,
      offset: g
    };
  }

  function f(t) {
    var e = t.textContent;
    return "\n" === e ? 0 : e.length;
  }

  t.exports = function (t, e, r, i, u, a) {
    var f = r.nodeType === Node.TEXT_NODE,
        l = u.nodeType === Node.TEXT_NODE;
    if (f && l) return {
      selectionState: o(t, s(n(r)), i, s(n(u)), a),
      needsRecovery: !1
    };
    var h = null,
        p = null,
        d = !0;
    return f ? (h = {
      key: s(n(r)),
      offset: i
    }, p = c(e, u, a)) : l ? (p = {
      key: s(n(u)),
      offset: a
    }, h = c(e, r, i)) : (h = c(e, r, i), p = c(e, u, a), r === u && i === a && (d = !!r.firstChild && "BR" !== r.firstChild.nodeName)), {
      selectionState: o(t, h.key, h.offset, p.key, p.offset),
      needsRecovery: d
    };
  };
}, function (t, e, r) {
  "use strict";

  var n = r(423),
      i = r(418);

  t.exports = function (t, e, r, o, u) {
    var a = i(t.getSelection());
    if (!e || !o) return a;
    var s = n.decode(e),
        c = s.blockKey,
        f = t.getBlockTree(c),
        l = f && f.getIn([s.decoratorKey, "leaves", s.leafKey]),
        h = n.decode(o),
        p = h.blockKey,
        d = t.getBlockTree(p),
        g = d && d.getIn([h.decoratorKey, "leaves", h.leafKey]);
    if (!l || !g) return a;

    var v = l.get("start"),
        y = g.get("start"),
        _ = l ? v + r : null,
        m = g ? y + u : null;

    if (a.getAnchorKey() === c && a.getAnchorOffset() === _ && a.getFocusKey() === p && a.getFocusOffset() === m) return a;
    var b = !1;

    if (c === p) {
      var S = l.get("end"),
          w = g.get("end");
      b = y === v && w === S ? u < r : y < v;
    } else {
      b = t.getCurrentContent().getBlockMap().keySeq().skipUntil(function (t) {
        return t === c || t === p;
      }).first() === p;
    }

    return a.merge({
      anchorKey: c,
      anchorOffset: _,
      focusKey: p,
      focusOffset: m,
      isBackward: b
    });
  };
}, function (t, e, r) {
  "use strict";

  t.exports = {
    notEmptyKey: function (t) {
      return null != t && "" != t;
    }
  };
}, function (t, e, r) {
  "use strict";

  var n = r(99);

  function i(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function o(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var u = r(566),
      a = r(0),
      s = r(414),
      c = r(489),
      f = r(567).setDraftEditorSelection,
      l = function (t) {
    var e, r;

    function l() {
      for (var e, r = arguments.length, n = new Array(r), u = 0; u < r; u++) n[u] = arguments[u];

      return o(i(e = t.call.apply(t, [this].concat(n)) || this), "leaf", void 0), e;
    }

    r = t, (e = l).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
    var h = l.prototype;
    return h._setSelection = function () {
      var t = this.props.selection;

      if (null != t && t.getHasFocus()) {
        var e = this.props,
            r = e.block,
            n = e.start,
            i = e.text,
            o = r.getKey(),
            u = n + i.length;

        if (t.hasEdgeWithin(o, n, u)) {
          var a = this.leaf;
          a || s(!1);
          var l,
              h = a.firstChild;
          h || s(!1), h.nodeType === Node.TEXT_NODE ? l = h : c(h) ? l = a : (l = h.firstChild) || s(!1), f(t, l, o, n, u);
        }
      }
    }, h.shouldComponentUpdate = function (t) {
      var e = this.leaf;
      return e || s(!1), e.textContent !== t.text || t.styleSet !== this.props.styleSet || t.forceSelection;
    }, h.componentDidUpdate = function () {
      this._setSelection();
    }, h.componentDidMount = function () {
      this._setSelection();
    }, h.render = function () {
      var t = this,
          e = this.props.block,
          r = this.props.text;
      r.endsWith("\n") && this.props.isLast && (r += "\n");
      var i = this.props,
          o = i.customStyleMap,
          s = i.customStyleFn,
          c = i.offsetKey,
          f = i.styleSet,
          l = f.reduce(function (t, e) {
        var r = {},
            i = o[e];
        return void 0 !== i && t.textDecoration !== i.textDecoration && (r.textDecoration = [t.textDecoration, i.textDecoration].join(" ").trim()), n(t, i, r);
      }, {});

      if (s) {
        var h = s(f, e);
        l = n(l, h);
      }

      return a.createElement("span", {
        "data-offset-key": c,
        ref: function (e) {
          return t.leaf = e;
        },
        style: l
      }, a.createElement(u, null, r));
    }, l;
  }(a.Component);

  t.exports = l;
}, function (t, e, r) {
  "use strict";

  var n = r(429);

  t.exports = function (t) {
    return !(!t || !t.ownerDocument) && n(t) && "BR" === t.nodeName;
  };
}, function (t, e, r) {
  "use strict";

  t.exports = {
    initODS: function () {},
    handleExtensionCausedError: function () {}
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    if (void 0 === (t = t || ("undefined" != typeof document ? document : void 0))) return null;

    try {
      return t.activeElement || t.body;
    } catch (e) {
      return t.body;
    }
  };
}, function (t, e, r) {
  "use strict";

  var n = r(573);

  t.exports = function (t) {
    var e = n(t);
    return {
      x: e.left,
      y: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top
    };
  };
}, function (t, e, r) {
  "use strict";

  function n() {
    var t;
    return document.documentElement && (t = document.documentElement.clientWidth), !t && document.body && (t = document.body.clientWidth), t || 0;
  }

  function i() {
    var t;
    return document.documentElement && (t = document.documentElement.clientHeight), !t && document.body && (t = document.body.clientHeight), t || 0;
  }

  function o() {
    return {
      width: window.innerWidth || n(),
      height: window.innerHeight || i()
    };
  }

  o.withoutScrollbars = function () {
    return {
      width: n(),
      height: i()
    };
  }, t.exports = o;
}, function (t, e, r) {
  "use strict";

  var n = r(99);

  function i() {
    return (i = n || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];

        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
      }

      return t;
    }).apply(this, arguments);
  }

  function o(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function u(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var a = r(488),
      s = r(423),
      c = r(0),
      f = r(457),
      l = r(445),
      h = r(453),
      p = r(441),
      d = r(428),
      g = r(492),
      v = r(446),
      y = r(493),
      _ = r(414),
      m = r(434),
      b = r(418),
      S = function (t, e) {
    return t.getAnchorKey() === e || t.getFocusKey() === e;
  },
      w = function (t) {
    var e, r;

    function n() {
      for (var e, r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];

      return u(o(e = t.call.apply(t, [this].concat(n)) || this), "_node", void 0), e;
    }

    r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
    var w = n.prototype;
    return w.shouldComponentUpdate = function (t) {
      return this.props.block !== t.block || this.props.tree !== t.tree || this.props.direction !== t.direction || S(t.selection, t.block.getKey()) && t.forceSelection;
    }, w.componentDidMount = function () {
      if (!this.props.preventScroll) {
        var t = this.props.selection,
            e = t.getEndKey();

        if (t.getHasFocus() && e === this.props.block.getKey()) {
          var r = this._node;

          if (null != r) {
            var n,
                i = l.getScrollParent(r),
                o = v(i);

            if (i === window) {
              var u = g(r);
              (n = u.y + u.height - y().height) > 0 && window.scrollTo(o.x, o.y + n + 10);
            } else {
              m(r) || _(!1), (n = r.offsetHeight + r.offsetTop - (i.offsetTop + i.offsetHeight + o.y)) > 0 && f.setTop(i, f.getTop(i) + n + 10);
            }
          }
        }
      }
    }, w._renderChildren = function () {
      var t = this,
          e = this.props.block,
          r = e.getKey(),
          n = e.getText(),
          o = this.props.tree.size - 1,
          u = S(this.props.selection, r);
      return this.props.tree.map(function (f, l) {
        var d = f.get("leaves");
        if (0 === d.size) return null;
        var g = d.size - 1,
            v = d.map(function (i, f) {
          var h = s.encode(r, l, f),
              p = i.get("start"),
              d = i.get("end");
          return c.createElement(a, {
            key: h,
            offsetKey: h,
            block: e,
            start: p,
            selection: u ? t.props.selection : null,
            forceSelection: t.props.forceSelection,
            text: n.slice(p, d),
            styleSet: e.getInlineStyleAt(p),
            customStyleMap: t.props.customStyleMap,
            customStyleFn: t.props.customStyleFn,
            isLast: l === o && f === g
          });
        }).toArray(),
            y = f.get("decoratorKey");
        if (null == y) return v;
        if (!t.props.decorator) return v;

        var _ = b(t.props.decorator),
            m = _.getComponentForKey(y);

        if (!m) return v;

        var S = _.getPropsForKey(y),
            w = s.encode(r, l, 0),
            x = d.first().get("start"),
            k = d.last().get("end"),
            E = n.slice(x, k),
            O = e.getEntityAt(f.get("start")),
            C = p.getHTMLDirIfDifferent(h.getDirection(E), t.props.direction),
            D = {
          contentState: t.props.contentState,
          decoratedText: E,
          dir: C,
          start: x,
          end: k,
          blockKey: r,
          entityKey: O,
          offsetKey: w
        };

        return c.createElement(m, i({}, S, D, {
          key: w
        }), v);
      }).toArray();
    }, w.render = function () {
      var t = this,
          e = this.props,
          r = e.direction,
          n = e.offsetKey,
          i = d({
        "public/DraftStyleDefault/block": !0,
        "public/DraftStyleDefault/ltr": "LTR" === r,
        "public/DraftStyleDefault/rtl": "RTL" === r
      });
      return c.createElement("div", {
        "data-offset-key": n,
        className: i,
        ref: function (e) {
          return t._node = e;
        }
      }, this._renderChildren());
    }, n;
  }(c.Component);

  t.exports = w;
}, function (t, e, r) {
  "use strict";

  var n = r(579),
      i = r(580),
      o = r(496),
      u = new RegExp("\r\n", "g"),
      a = {
    "text/rtf": 1,
    "text/html": 1
  };

  function s(t) {
    if ("file" == t.kind) return t.getAsFile();
  }

  var c = function () {
    function t(t) {
      this.data = t, this.types = t.types ? i(t.types) : [];
    }

    var e = t.prototype;
    return e.isRichText = function () {
      return !(!this.getHTML() || !this.getText()) || !this.isImage() && this.types.some(function (t) {
        return a[t];
      });
    }, e.getText = function () {
      var t;
      return this.data.getData && (this.types.length ? -1 != this.types.indexOf("text/plain") && (t = this.data.getData("text/plain")) : t = this.data.getData("Text")), t ? t.replace(u, "\n") : null;
    }, e.getHTML = function () {
      if (this.data.getData) {
        if (!this.types.length) return this.data.getData("Text");
        if (-1 != this.types.indexOf("text/html")) return this.data.getData("text/html");
      }
    }, e.isLink = function () {
      return this.types.some(function (t) {
        return -1 != t.indexOf("Url") || -1 != t.indexOf("text/uri-list") || t.indexOf("text/x-moz-url");
      });
    }, e.getLink = function () {
      return this.data.getData ? -1 != this.types.indexOf("text/x-moz-url") ? this.data.getData("text/x-moz-url").split("\n")[0] : -1 != this.types.indexOf("text/uri-list") ? this.data.getData("text/uri-list") : this.data.getData("url") : null;
    }, e.isImage = function () {
      var t = this.types.some(function (t) {
        return -1 != t.indexOf("application/x-moz-file");
      });
      if (t) return !0;

      for (var e = this.getFiles(), r = 0; r < e.length; r++) {
        var i = e[r].type;
        if (!n.isImage(i)) return !1;
      }

      return !0;
    }, e.getCount = function () {
      return this.data.hasOwnProperty("items") ? this.data.items.length : this.data.hasOwnProperty("mozItemCount") ? this.data.mozItemCount : this.data.files ? this.data.files.length : null;
    }, e.getFiles = function () {
      return this.data.items ? Array.prototype.slice.call(this.data.items).map(s).filter(o.thatReturnsArgument) : this.data.files ? Array.prototype.slice.call(this.data.files) : [];
    }, e.hasFiles = function () {
      return this.getFiles().length > 0;
    }, t;
  }();

  t.exports = c;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    return function () {
      return t;
    };
  }

  var i = function () {};

  i.thatReturns = n, i.thatReturnsFalse = n(!1), i.thatReturnsTrue = n(!0), i.thatReturnsNull = n(null), i.thatReturnsThis = function () {
    return this;
  }, i.thatReturnsArgument = function (t) {
    return t;
  }, t.exports = i;
}, function (t, e, r) {
  "use strict";

  (function (e) {
    var n = r(414),
        i = /\.textClipping$/,
        o = {
      "text/plain": !0,
      "text/html": !0,
      "text/rtf": !0
    };

    t.exports = function (t, r) {
      var u = 0,
          a = [];
      t.forEach(function (s) {
        !function (t, r) {
          if (!e.FileReader || t.type && !(t.type in o)) return void r("");

          if ("" === t.type) {
            var u = "";
            return i.test(t.name) && (u = t.name.replace(i, "")), void r(u);
          }

          var a = new FileReader();
          a.onload = function () {
            var t = a.result;
            "string" != typeof t && n(!1), r(t);
          }, a.onerror = function () {
            r("");
          }, a.readAsText(t);
        }(s, function (e) {
          u++, e && a.push(e.slice(0, 5e3)), u == t.length && r(a.join("\r"));
        });
      });
    };
  }).call(this, r(62));
}, function (t, e, r) {
  "use strict";

  var n = r(438);

  t.exports = function (t) {
    var e = t.getSelection();
    return e.isCollapsed() ? null : n(t.getCurrentContent(), e);
  };
}, function (t, e, r) {
  "use strict";

  var n = r(415),
      i = r(430),
      o = r(458),
      u = r(435);

  t.exports = function (t) {
    var e = u(t, function (t) {
      var e = t.getSelection(),
          r = t.getCurrentContent(),
          n = e.getAnchorKey(),
          u = e.getAnchorOffset(),
          a = r.getBlockForKey(n).getText()[u - 1];
      return o(t, a ? i.getUTF16Length(a, 0) : 1);
    }, "backward");
    if (e === t.getCurrentContent()) return t;
    var r = t.getSelection();
    return n.push(t, e.set("selectionBefore", r), r.isCollapsed() ? "backspace-character" : "remove-range");
  };
}, function (t, e, r) {
  "use strict";

  var n = r(419),
      i = r(414);
  var o = n.isBrowser("Chrome") ? function (t) {
    for (var e = t.cloneRange(), r = [], n = t.endContainer; null != n; n = n.parentNode) {
      var o = n === t.commonAncestorContainer;
      o ? e.setStart(t.startContainer, t.startOffset) : e.setStart(e.endContainer, 0);
      var u,
          a = Array.from(e.getClientRects());
      if (r.push(a), o) return r.reverse(), (u = []).concat.apply(u, r);
      e.setEndBefore(n);
    }

    i(!1);
  } : function (t) {
    return Array.from(t.getClientRects());
  };
  t.exports = o;
}, function (t, e, r) {
  "use strict";

  var n = "\\s|(?![_])" + r(600).getPunctuation(),
      i = new RegExp("^(?:" + n + ")*(?:['‘’]|(?!" + n + ").)*(?:(?!" + n + ").)"),
      o = new RegExp("(?:(?!" + n + ").)(?:['‘’]|(?!" + n + ").)*(?:" + n + ")*$");

  function u(t, e) {
    var r = e ? o.exec(t) : i.exec(t);
    return r ? r[0] : t;
  }

  var a = {
    getBackward: function (t) {
      return u(t, !0);
    },
    getForward: function (t) {
      return u(t, !1);
    }
  };
  t.exports = a;
}, function (t, e, r) {
  "use strict";

  r(459);

  t.exports = function (t, e) {
    var r,
        n = t.getSelection(),
        i = n.getStartKey(),
        o = n.getStartOffset(),
        u = t.getCurrentContent(),
        a = i;
    return e > u.getBlockForKey(i).getText().length - o ? (a = u.getKeyAfter(i), r = 0) : r = o + e, n.merge({
      focusKey: a,
      focusOffset: r
    });
  };
}, function (t, e, r) {
  "use strict";

  var n;

  function i(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), n.forEach(function (e) {
        o(t, e, r[e]);
      });
    }

    return t;
  }

  function o(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var u = r(420),
      a = r(427),
      s = r(421),
      c = r(454),
      f = r(439),
      l = r(610),
      h = r(428),
      p = r(422),
      d = r(504),
      g = r(426),
      v = r(413),
      y = v.List,
      _ = v.Map,
      m = v.OrderedSet,
      b = r(611),
      S = r(489),
      w = r(434),
      x = r(612),
      k = g("draft_tree_data_support"),
      E = new RegExp("\r", "g"),
      O = new RegExp("\n", "g"),
      C = new RegExp("^\n", "g"),
      D = new RegExp("&nbsp;", "g"),
      I = new RegExp("&#13;?", "g"),
      M = new RegExp("&#8203;?", "g"),
      A = ["bold", "bolder", "500", "600", "700", "800", "900"],
      K = ["light", "lighter", "normal", "100", "200", "300", "400"],
      T = ["className", "href", "rel", "target", "title"],
      z = ["alt", "className", "height", "src", "width"],
      B = (o(n = {}, h("public/DraftStyleDefault/depth0"), 0), o(n, h("public/DraftStyleDefault/depth1"), 1), o(n, h("public/DraftStyleDefault/depth2"), 2), o(n, h("public/DraftStyleDefault/depth3"), 3), o(n, h("public/DraftStyleDefault/depth4"), 4), n),
      R = _({
    b: "BOLD",
    code: "CODE",
    del: "STRIKETHROUGH",
    em: "ITALIC",
    i: "ITALIC",
    s: "STRIKETHROUGH",
    strike: "STRIKETHROUGH",
    strong: "BOLD",
    u: "UNDERLINE",
    mark: "HIGHLIGHT"
  }),
      L = function (t) {
    var e = {};
    return t.mapKeys(function (t, r) {
      var n = [r.element];
      void 0 !== r.aliasedElements && n.push.apply(n, r.aliasedElements), n.forEach(function (r) {
        void 0 === e[r] ? e[r] = t : "string" == typeof e[r] ? e[r] = [e[r], t] : e[r].push(t);
      });
    }), _(e);
  },
      j = function (t) {
    if (w(t) && t.style.fontFamily.includes("monospace")) return "CODE";
    return null;
  },
      N = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return Object.keys(B).some(function (r) {
      t.classList.contains(r) && (e = B[r]);
    }), e;
  },
      F = function (t) {
    if (!b(t)) return !1;
    var e = t;
    if (!e.href || "http:" !== e.protocol && "https:" !== e.protocol && "mailto:" !== e.protocol && "tel:" !== e.protocol) return !1;

    try {
      new l(e.href);
      return !0;
    } catch (t) {
      return !1;
    }
  },
      P = function (t) {
    if (!x(t)) return !1;
    var e = t;
    return !(!e.attributes.getNamedItem("src") || !e.attributes.getNamedItem("src").value);
  },
      U = function (t, e) {
    if (!w(t)) return e;
    var r = t,
        n = r.style.fontWeight,
        i = r.style.fontStyle,
        o = r.style.textDecoration;
    return e.withMutations(function (t) {
      A.indexOf(n) >= 0 ? t.add("BOLD") : K.indexOf(n) >= 0 && t.remove("BOLD"), "italic" === i ? t.add("ITALIC") : "normal" === i && t.remove("ITALIC"), "underline" === o && t.add("UNDERLINE"), "line-through" === o && t.add("STRIKETHROUGH"), "none" === o && (t.remove("UNDERLINE"), t.remove("STRIKETHROUGH"));
    });
  },
      q = function (t) {
    return "ul" === t || "ol" === t;
  },
      H = function () {
    function t(t, e) {
      o(this, "characterList", y()), o(this, "currentBlockType", "unstyled"), o(this, "currentDepth", 0), o(this, "currentEntity", null), o(this, "currentText", ""), o(this, "wrapper", null), o(this, "blockConfigs", []), o(this, "contentBlocks", []), o(this, "entityMap", f), o(this, "blockTypeMap", void 0), o(this, "disambiguate", void 0), this.clear(), this.blockTypeMap = t, this.disambiguate = e;
    }

    var e = t.prototype;
    return e.clear = function () {
      this.characterList = y(), this.blockConfigs = [], this.currentBlockType = "unstyled", this.currentDepth = 0, this.currentEntity = null, this.currentText = "", this.entityMap = f, this.wrapper = null, this.contentBlocks = [];
    }, e.addDOMNode = function (t) {
      var e;
      return this.contentBlocks = [], this.currentDepth = 0, (e = this.blockConfigs).push.apply(e, this._toBlockConfigs([t], m())), this._trimCurrentText(), "" !== this.currentText && this.blockConfigs.push(this._makeBlockConfig()), this;
    }, e.getContentBlocks = function () {
      return 0 === this.contentBlocks.length && (k ? this._toContentBlocks(this.blockConfigs) : this._toFlatContentBlocks(this.blockConfigs)), {
        contentBlocks: this.contentBlocks,
        entityMap: this.entityMap
      };
    }, e._makeBlockConfig = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.key || p(),
          r = i({
        key: e,
        type: this.currentBlockType,
        text: this.currentText,
        characterList: this.characterList,
        depth: this.currentDepth,
        parent: null,
        children: y(),
        prevSibling: null,
        nextSibling: null,
        childConfigs: []
      }, t);
      return this.characterList = y(), this.currentBlockType = "unstyled", this.currentText = "", r;
    }, e._toBlockConfigs = function (t, e) {
      for (var r = [], n = 0; n < t.length; n++) {
        var i = t[n],
            o = i.nodeName.toLowerCase();

        if ("body" === o || q(o)) {
          this._trimCurrentText(), "" !== this.currentText && r.push(this._makeBlockConfig());
          var u = this.currentDepth,
              a = this.wrapper;
          q(o) && (this.wrapper = o, q(a) && this.currentDepth++), r.push.apply(r, this._toBlockConfigs(Array.from(i.childNodes), e)), this.currentDepth = u, this.wrapper = a;
        } else {
          var s = this.blockTypeMap.get(o);
          if (void 0 === s) {
            if ("#text" !== o) {
              if ("br" !== o) {
                if (P(i)) this._addImgNode(i, e);else if (F(i)) this._addAnchorNode(i, r, e);else {
                  var c = e;
                  R.has(o) && (c = c.add(R.get(o))), c = U(i, c);
                  var f = j(i);
                  null != f && (c = c.add(f)), r.push.apply(r, this._toBlockConfigs(Array.from(i.childNodes), c));
                }
              } else this._addBreakNode(i, e);
            } else this._addTextNode(i, e);
          } else {
            this._trimCurrentText(), "" !== this.currentText && r.push(this._makeBlockConfig());
            var l = this.currentDepth,
                h = this.wrapper;

            if (this.wrapper = "pre" === o ? "pre" : this.wrapper, "string" != typeof s && (s = this.disambiguate(o, this.wrapper) || s[0] || "unstyled"), !k && w(i) && ("unordered-list-item" === s || "ordered-list-item" === s)) {
              var d = i;
              this.currentDepth = N(d, this.currentDepth);
            }

            var g = p(),
                v = this._toBlockConfigs(Array.from(i.childNodes), e);

            this._trimCurrentText(), r.push(this._makeBlockConfig({
              key: g,
              childConfigs: v,
              type: s
            })), this.currentDepth = l, this.wrapper = h;
          }
        }
      }

      return r;
    }, e._appendText = function (t, e) {
      var r;
      this.currentText += t;
      var n = u.create({
        style: e,
        entity: this.currentEntity
      });
      this.characterList = (r = this.characterList).push.apply(r, Array(t.length).fill(n));
    }, e._trimCurrentText = function () {
      var t = this.currentText.length,
          e = t - this.currentText.trimLeft().length,
          r = this.currentText.trimRight().length,
          n = this.characterList.findEntry(function (t) {
        return null !== t.getEntity();
      });
      (e = void 0 !== n ? Math.min(e, n[0]) : e) > (r = void 0 !== (n = this.characterList.reverse().findEntry(function (t) {
        return null !== t.getEntity();
      })) ? Math.max(r, t - n[0]) : r) ? (this.currentText = "", this.characterList = y()) : (this.currentText = this.currentText.slice(e, r), this.characterList = this.characterList.slice(e, r));
    }, e._addTextNode = function (t, e) {
      var r = t.textContent;
      "" === r.trim() && "pre" !== this.wrapper && (r = " "), "pre" !== this.wrapper && (r = (r = r.replace(C, "")).replace(O, " ")), this._appendText(r, e);
    }, e._addBreakNode = function (t, e) {
      S(t) && this._appendText("\n", e);
    }, e._addImgNode = function (t, e) {
      if (x(t)) {
        var r = t,
            n = {};
        z.forEach(function (t) {
          var e = r.getAttribute(t);
          e && (n[t] = e);
        }), this.currentEntity = this.entityMap.__create("IMAGE", "IMMUTABLE", n), g("draftjs_fix_paste_for_img") ? "presentation" !== r.getAttribute("role") && this._appendText("📷", e) : this._appendText("📷", e), this.currentEntity = null;
      }
    }, e._addAnchorNode = function (t, e, r) {
      if (b(t)) {
        var n = t,
            i = {};
        T.forEach(function (t) {
          var e = n.getAttribute(t);
          e && (i[t] = e);
        }), i.url = new l(n.href).toString(), this.currentEntity = this.entityMap.__create("LINK", "MUTABLE", i || {}), e.push.apply(e, this._toBlockConfigs(Array.from(t.childNodes), r)), this.currentEntity = null;
      }
    }, e._toContentBlocks = function (t) {
      for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = t.length - 1, n = 0; n <= r; n++) {
        var o = t[n];
        o.parent = e, o.prevSibling = n > 0 ? t[n - 1].key : null, o.nextSibling = n < r ? t[n + 1].key : null, o.children = y(o.childConfigs.map(function (t) {
          return t.key;
        })), this.contentBlocks.push(new s(i({}, o))), this._toContentBlocks(o.childConfigs, o.key);
      }
    }, e._hoistContainersInBlockConfigs = function (t) {
      var e = this;
      return y(t).flatMap(function (t) {
        return "unstyled" !== t.type || "" !== t.text ? [t] : e._hoistContainersInBlockConfigs(t.childConfigs);
      });
    }, e._toFlatContentBlocks = function (t) {
      var e = this;

      this._hoistContainersInBlockConfigs(t).forEach(function (t) {
        var r = e._extractTextFromBlockConfigs(t.childConfigs),
            n = r.text,
            o = r.characterList;

        e.contentBlocks.push(new a(i({}, t, {
          text: t.text + n,
          characterList: t.characterList.concat(o)
        })));
      });
    }, e._extractTextFromBlockConfigs = function (t) {
      for (var e = t.length - 1, r = "", n = y(), i = 0; i <= e; i++) {
        var o = t[i];
        r += o.text, n = n.concat(o.characterList), "" !== r && "unstyled" !== o.type && (r += "\n", n = n.push(n.last()));

        var u = this._extractTextFromBlockConfigs(o.childConfigs);

        r += u.text, n = n.concat(u.characterList);
      }

      return {
        text: r,
        characterList: n
      };
    }, t;
  }();

  t.exports = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c,
        n = e(t = t.trim().replace(E, "").replace(D, " ").replace(I, "").replace(M, ""));
    if (!n) return null;

    var i = L(r),
        o = function (t, e) {
      return "li" === t ? "ol" === e ? "ordered-list-item" : "unordered-list-item" : null;
    };

    return new H(i, o).addDOMNode(n).getContentBlocks();
  };
}, function (t, e, r) {
  "use strict";

  var n = r(419),
      i = r(414),
      o = n.isBrowser("IE <= 9");

  t.exports = function (t) {
    var e,
        r = null;
    return !o && document.implementation && document.implementation.createHTMLDocument && ((e = document.implementation.createHTMLDocument("foo")).documentElement || i(!1), e.documentElement.innerHTML = t, r = e.getElementsByTagName("body")[0]), r;
  };
}, function (t, e, r) {
  "use strict";

  var n = r(417),
      i = r(415),
      o = r(613),
      u = r(418),
      a = {
    currentBlockContainsLink: function (t) {
      var e = t.getSelection(),
          r = t.getCurrentContent(),
          n = r.getEntityMap();
      return r.getBlockForKey(e.getAnchorKey()).getCharacterList().slice(e.getStartOffset(), e.getEndOffset()).some(function (t) {
        var e = t.getEntity();
        return !!e && "LINK" === n.__get(e).getType();
      });
    },
    getCurrentBlockType: function (t) {
      var e = t.getSelection();
      return t.getCurrentContent().getBlockForKey(e.getStartKey()).getType();
    },
    getDataObjectForLinkURL: function (t) {
      return {
        url: t.toString()
      };
    },
    handleKeyCommand: function (t, e, r) {
      switch (e) {
        case "bold":
          return a.toggleInlineStyle(t, "BOLD");

        case "italic":
          return a.toggleInlineStyle(t, "ITALIC");

        case "underline":
          return a.toggleInlineStyle(t, "UNDERLINE");

        case "code":
          return a.toggleCode(t);

        case "backspace":
        case "backspace-word":
        case "backspace-to-start-of-line":
          return a.onBackspace(t);

        case "delete":
        case "delete-word":
        case "delete-to-end-of-block":
          return a.onDelete(t);

        default:
          return null;
      }
    },
    insertSoftNewline: function (t) {
      var e = n.insertText(t.getCurrentContent(), t.getSelection(), "\n", t.getCurrentInlineStyle(), null),
          r = i.push(t, e, "insert-characters");
      return i.forceSelection(r, e.getSelectionAfter());
    },
    onBackspace: function (t) {
      var e = t.getSelection();
      if (!e.isCollapsed() || e.getAnchorOffset() || e.getFocusOffset()) return null;
      var r = t.getCurrentContent(),
          n = e.getStartKey(),
          o = r.getBlockBefore(n);

      if (o && "atomic" === o.getType()) {
        var u = r.getBlockMap().delete(o.getKey()),
            s = r.merge({
          blockMap: u,
          selectionAfter: e
        });
        if (s !== r) return i.push(t, s, "remove-range");
      }

      var c = a.tryToRemoveBlockStyle(t);
      return c ? i.push(t, c, "change-block-type") : null;
    },
    onDelete: function (t) {
      var e = t.getSelection();
      if (!e.isCollapsed()) return null;
      var r = t.getCurrentContent(),
          o = e.getStartKey(),
          u = r.getBlockForKey(o).getLength();
      if (e.getStartOffset() < u) return null;
      var a = r.getBlockAfter(o);
      if (!a || "atomic" !== a.getType()) return null;
      var s = e.merge({
        focusKey: a.getKey(),
        focusOffset: a.getLength()
      }),
          c = n.removeRange(r, s, "forward");
      return c !== r ? i.push(t, c, "remove-range") : null;
    },
    onTab: function (t, e, r) {
      var n = e.getSelection(),
          u = n.getAnchorKey();
      if (u !== n.getFocusKey()) return e;
      var a = e.getCurrentContent(),
          s = a.getBlockForKey(u),
          c = s.getType();
      if ("unordered-list-item" !== c && "ordered-list-item" !== c) return e;
      t.preventDefault();
      var f = s.getDepth();
      if (!t.shiftKey && f === r) return e;
      var l = o(a, n, t.shiftKey ? -1 : 1, r);
      return i.push(e, l, "adjust-depth");
    },
    toggleBlockType: function (t, e) {
      var r = t.getSelection(),
          o = r.getStartKey(),
          a = r.getEndKey(),
          s = t.getCurrentContent(),
          c = r;

      if (o !== a && 0 === r.getEndOffset()) {
        var f = u(s.getBlockBefore(a));
        a = f.getKey(), c = c.merge({
          anchorKey: o,
          anchorOffset: r.getStartOffset(),
          focusKey: a,
          focusOffset: f.getLength(),
          isBackward: !1
        });
      }

      if (s.getBlockMap().skipWhile(function (t, e) {
        return e !== o;
      }).reverse().skipWhile(function (t, e) {
        return e !== a;
      }).some(function (t) {
        return "atomic" === t.getType();
      })) return t;
      var l = s.getBlockForKey(o).getType() === e ? "unstyled" : e;
      return i.push(t, n.setBlockType(s, c, l), "change-block-type");
    },
    toggleCode: function (t) {
      var e = t.getSelection(),
          r = e.getAnchorKey(),
          n = e.getFocusKey();
      return e.isCollapsed() || r !== n ? a.toggleBlockType(t, "code-block") : a.toggleInlineStyle(t, "CODE");
    },
    toggleInlineStyle: function (t, e) {
      var r = t.getSelection(),
          o = t.getCurrentInlineStyle();
      if (r.isCollapsed()) return i.setInlineStyleOverride(t, o.has(e) ? o.remove(e) : o.add(e));
      var u,
          a = t.getCurrentContent();
      return u = o.has(e) ? n.removeInlineStyle(a, r, e) : n.applyInlineStyle(a, r, e), i.push(t, u, "change-inline-style");
    },
    toggleLink: function (t, e, r) {
      var o = n.applyEntity(t.getCurrentContent(), e, r);
      return i.push(t, o, "apply-entity");
    },
    tryToRemoveBlockStyle: function (t) {
      var e = t.getSelection(),
          r = e.getAnchorOffset();

      if (e.isCollapsed() && 0 === r) {
        var i = e.getAnchorKey(),
            o = t.getCurrentContent(),
            u = o.getBlockForKey(i).getType(),
            a = o.getBlockBefore(i);
        if ("code-block" === u && a && "code-block" === a.getType() && 0 !== a.getLength()) return null;
        if ("unstyled" !== u) return n.setBlockType(o, e, "unstyled");
      }

      return null;
    }
  };
  t.exports = a;
}, function (t, e, r) {
  "use strict";

  var n = r(460),
      i = r(444),
      o = r(419),
      u = o.isPlatform("Mac OS X"),
      a = u && o.isBrowser("Firefox < 29"),
      s = n.hasCommandModifier,
      c = n.isCtrlKeyCommand;

  function f(t) {
    return u && t.altKey || c(t);
  }

  t.exports = function (t) {
    switch (t.keyCode) {
      case 66:
        return s(t) ? "bold" : null;

      case 68:
        return c(t) ? "delete" : null;

      case 72:
        return c(t) ? "backspace" : null;

      case 73:
        return s(t) ? "italic" : null;

      case 74:
        return s(t) ? "code" : null;

      case 75:
        return u && c(t) ? "secondary-cut" : null;

      case 77:
      case 79:
        return c(t) ? "split-block" : null;

      case 84:
        return u && c(t) ? "transpose-characters" : null;

      case 85:
        return s(t) ? "underline" : null;

      case 87:
        return u && c(t) ? "backspace-word" : null;

      case 89:
        return c(t) ? u ? "secondary-paste" : "redo" : null;

      case 90:
        return function (t) {
          return s(t) ? t.shiftKey ? "redo" : "undo" : null;
        }(t) || null;

      case i.RETURN:
        return "split-block";

      case i.DELETE:
        return function (t) {
          return !u && t.shiftKey ? null : f(t) ? "delete-word" : "delete";
        }(t);

      case i.BACKSPACE:
        return function (t) {
          return s(t) && u ? "backspace-to-start-of-line" : f(t) ? "backspace-word" : "backspace";
        }(t);

      case i.LEFT:
        return a && s(t) ? "move-selection-to-start-of-block" : null;

      case i.RIGHT:
        return a && s(t) ? "move-selection-to-end-of-block" : null;

      default:
        return null;
    }
  };
}, function (t, e, r) {
  "use strict";

  var n = {
    stringify: function (t) {
      return "_" + String(t);
    },
    unstringify: function (t) {
      return t.slice(1);
    }
  };
  t.exports = n;
}, function (t, e, r) {
  "use strict";

  r.r(e), r.d(e, "Collection", function () {
    return _;
  }), r.d(e, "Iterable", function () {
    return fn;
  }), r.d(e, "List", function () {
    return Je;
  }), r.d(e, "Map", function () {
    return ke;
  }), r.d(e, "OrderedMap", function () {
    return ar;
  }), r.d(e, "OrderedSet", function () {
    return Vr;
  }), r.d(e, "Range", function () {
    return Ir;
  }), r.d(e, "Record", function () {
    return Yr;
  }), r.d(e, "Repeat", function () {
    return on;
  }), r.d(e, "Seq", function () {
    return j;
  }), r.d(e, "Set", function () {
    return wr;
  }), r.d(e, "Stack", function () {
    return hr;
  }), r.d(e, "fromJS", function () {
    return un;
  }), r.d(e, "get", function () {
    return Zt;
  }), r.d(e, "getIn", function () {
    return Mr;
  }), r.d(e, "has", function () {
    return Gt;
  }), r.d(e, "hasIn", function () {
    return Kr;
  }), r.d(e, "hash", function () {
    return nt;
  }), r.d(e, "is", function () {
    return Q;
  }), r.d(e, "isAssociative", function () {
    return y;
  }), r.d(e, "isCollection", function () {
    return d;
  }), r.d(e, "isImmutable", function () {
    return k;
  }), r.d(e, "isIndexed", function () {
    return v;
  }), r.d(e, "isKeyed", function () {
    return g;
  }), r.d(e, "isList", function () {
    return Ve;
  }), r.d(e, "isMap", function () {
    return X;
  }), r.d(e, "isOrdered", function () {
    return O;
  }), r.d(e, "isOrderedMap", function () {
    return Y;
  }), r.d(e, "isOrderedSet", function () {
    return _r;
  }), r.d(e, "isPlainObject", function () {
    return Wt;
  }), r.d(e, "isRecord", function () {
    return x;
  }), r.d(e, "isSeq", function () {
    return w;
  }), r.d(e, "isSet", function () {
    return yr;
  }), r.d(e, "isStack", function () {
    return lr;
  }), r.d(e, "isValueObject", function () {
    return $;
  }), r.d(e, "merge", function () {
    return fe;
  }), r.d(e, "mergeDeep", function () {
    return he;
  }), r.d(e, "mergeDeepWith", function () {
    return pe;
  }), r.d(e, "mergeWith", function () {
    return le;
  }), r.d(e, "remove", function () {
    return Yt;
  }), r.d(e, "removeIn", function () {
    return re;
  }), r.d(e, "set", function () {
    return $t;
  }), r.d(e, "setIn", function () {
    return te;
  }), r.d(e, "update", function () {
    return ie;
  }), r.d(e, "updateIn", function () {
    return Qt;
  }), r.d(e, "version", function () {
    return sn;
  });
  var n = {};

  function i(t) {
    t && (t.value = !0);
  }

  function o() {}

  function u(t) {
    return void 0 === t.size && (t.size = t.__iterate(s)), t.size;
  }

  function a(t, e) {
    if ("number" != typeof e) {
      var r = e >>> 0;
      if ("" + r !== e || 4294967295 === r) return NaN;
      e = r;
    }

    return e < 0 ? u(t) + e : e;
  }

  function s() {
    return !0;
  }

  function c(t, e, r) {
    return (0 === t && !p(t) || void 0 !== r && t <= -r) && (void 0 === e || void 0 !== r && e >= r);
  }

  function f(t, e) {
    return h(t, e, 0);
  }

  function l(t, e) {
    return h(t, e, e);
  }

  function h(t, e, r) {
    return void 0 === t ? r : p(t) ? e === 1 / 0 ? e : 0 | Math.max(0, e + t) : void 0 === e || e === t ? t : 0 | Math.min(e, t);
  }

  function p(t) {
    return t < 0 || 0 === t && 1 / t == -1 / 0;
  }

  function d(t) {
    return Boolean(t && t["@@__IMMUTABLE_ITERABLE__@@"]);
  }

  function g(t) {
    return Boolean(t && t["@@__IMMUTABLE_KEYED__@@"]);
  }

  function v(t) {
    return Boolean(t && t["@@__IMMUTABLE_INDEXED__@@"]);
  }

  function y(t) {
    return g(t) || v(t);
  }

  var _ = function (t) {
    return d(t) ? t : j(t);
  },
      m = function (t) {
    function e(t) {
      return g(t) ? t : N(t);
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
  }(_),
      b = function (t) {
    function e(t) {
      return v(t) ? t : F(t);
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
  }(_),
      S = function (t) {
    function e(t) {
      return d(t) && !y(t) ? t : P(t);
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e;
  }(_);

  _.Keyed = m, _.Indexed = b, _.Set = S;

  function w(t) {
    return Boolean(t && t["@@__IMMUTABLE_SEQ__@@"]);
  }

  function x(t) {
    return Boolean(t && t["@@__IMMUTABLE_RECORD__@@"]);
  }

  function k(t) {
    return d(t) || x(t);
  }

  var E = "@@__IMMUTABLE_ORDERED__@@";

  function O(t) {
    return Boolean(t && t[E]);
  }

  var C = "function" == typeof Symbol && Symbol.iterator,
      D = C || "@@iterator",
      I = function (t) {
    this.next = t;
  };

  function M(t, e, r, n) {
    var i = 0 === t ? e : 1 === t ? r : [e, r];
    return n ? n.value = i : n = {
      value: i,
      done: !1
    }, n;
  }

  function A() {
    return {
      value: void 0,
      done: !0
    };
  }

  function K(t) {
    return !!Array.isArray(t) || !!B(t);
  }

  function T(t) {
    return t && "function" == typeof t.next;
  }

  function z(t) {
    var e = B(t);
    return e && e.call(t);
  }

  function B(t) {
    var e = t && (C && t[C] || t["@@iterator"]);
    if ("function" == typeof e) return e;
  }

  I.prototype.toString = function () {
    return "[Iterator]";
  }, I.KEYS = 0, I.VALUES = 1, I.ENTRIES = 2, I.prototype.inspect = I.prototype.toSource = function () {
    return this.toString();
  }, I.prototype[D] = function () {
    return this;
  };
  var R = Object.prototype.hasOwnProperty;

  function L(t) {
    return !(!Array.isArray(t) && "string" != typeof t) || t && "object" == typeof t && Number.isInteger(t.length) && t.length >= 0 && (0 === t.length ? 1 === Object.keys(t).length : t.hasOwnProperty(t.length - 1));
  }

  var j = function (t) {
    function e(t) {
      return null == t ? V() : k(t) ? t.toSeq() : function (t) {
        var e = Z(t);
        if (e) return (n = B(r = t)) && n === r.entries ? e.fromEntrySeq() : function (t) {
          var e = B(t);
          return e && e === t.keys;
        }(t) ? e.toSetSeq() : e;
        var r, n;
        if ("object" == typeof t) return new q(t);
        throw new TypeError("Expected Array or collection object of values, or keyed object: " + t);
      }(t);
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.toSeq = function () {
      return this;
    }, e.prototype.toString = function () {
      return this.__toString("Seq {", "}");
    }, e.prototype.cacheResult = function () {
      return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this;
    }, e.prototype.__iterate = function (t, e) {
      var r = this._cache;

      if (r) {
        for (var n = r.length, i = 0; i !== n;) {
          var o = r[e ? n - ++i : i++];
          if (!1 === t(o[1], o[0], this)) break;
        }

        return i;
      }

      return this.__iterateUncached(t, e);
    }, e.prototype.__iterator = function (t, e) {
      var r = this._cache;

      if (r) {
        var n = r.length,
            i = 0;
        return new I(function () {
          if (i === n) return {
            value: void 0,
            done: !0
          };
          var o = r[e ? n - ++i : i++];
          return M(t, o[0], o[1]);
        });
      }

      return this.__iteratorUncached(t, e);
    }, e;
  }(_),
      N = function (t) {
    function e(t) {
      return null == t ? V().toKeyedSeq() : d(t) ? g(t) ? t.toSeq() : t.fromEntrySeq() : x(t) ? t.toSeq() : J(t);
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.toKeyedSeq = function () {
      return this;
    }, e;
  }(j),
      F = function (t) {
    function e(t) {
      return null == t ? V() : d(t) ? g(t) ? t.entrySeq() : t.toIndexedSeq() : x(t) ? t.toSeq().entrySeq() : G(t);
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.of = function () {
      return e(arguments);
    }, e.prototype.toIndexedSeq = function () {
      return this;
    }, e.prototype.toString = function () {
      return this.__toString("Seq [", "]");
    }, e;
  }(j),
      P = function (t) {
    function e(t) {
      return (d(t) && !y(t) ? t : F(t)).toSetSeq();
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.of = function () {
      return e(arguments);
    }, e.prototype.toSetSeq = function () {
      return this;
    }, e;
  }(j);

  j.isSeq = w, j.Keyed = N, j.Set = P, j.Indexed = F, j.prototype["@@__IMMUTABLE_SEQ__@@"] = !0;

  var U = function (t) {
    function e(t) {
      this._array = t, this.size = t.length;
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.get = function (t, e) {
      return this.has(t) ? this._array[a(this, t)] : e;
    }, e.prototype.__iterate = function (t, e) {
      for (var r = this._array, n = r.length, i = 0; i !== n;) {
        var o = e ? n - ++i : i++;
        if (!1 === t(r[o], o, this)) break;
      }

      return i;
    }, e.prototype.__iterator = function (t, e) {
      var r = this._array,
          n = r.length,
          i = 0;
      return new I(function () {
        if (i === n) return {
          value: void 0,
          done: !0
        };
        var o = e ? n - ++i : i++;
        return M(t, o, r[o]);
      });
    }, e;
  }(F),
      q = function (t) {
    function e(t) {
      var e = Object.keys(t);
      this._object = t, this._keys = e, this.size = e.length;
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.get = function (t, e) {
      return void 0 === e || this.has(t) ? this._object[t] : e;
    }, e.prototype.has = function (t) {
      return R.call(this._object, t);
    }, e.prototype.__iterate = function (t, e) {
      for (var r = this._object, n = this._keys, i = n.length, o = 0; o !== i;) {
        var u = n[e ? i - ++o : o++];
        if (!1 === t(r[u], u, this)) break;
      }

      return o;
    }, e.prototype.__iterator = function (t, e) {
      var r = this._object,
          n = this._keys,
          i = n.length,
          o = 0;
      return new I(function () {
        if (o === i) return {
          value: void 0,
          done: !0
        };
        var u = n[e ? i - ++o : o++];
        return M(t, u, r[u]);
      });
    }, e;
  }(N);

  q.prototype[E] = !0;

  var H,
      W = function (t) {
    function e(t) {
      this._collection = t, this.size = t.length || t.size;
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.__iterateUncached = function (t, e) {
      if (e) return this.cacheResult().__iterate(t, e);
      var r = z(this._collection),
          n = 0;
      if (T(r)) for (var i; !(i = r.next()).done && !1 !== t(i.value, n++, this););
      return n;
    }, e.prototype.__iteratorUncached = function (t, e) {
      if (e) return this.cacheResult().__iterator(t, e);
      var r = z(this._collection);
      if (!T(r)) return new I(A);
      var n = 0;
      return new I(function () {
        var e = r.next();
        return e.done ? e : M(t, n++, e.value);
      });
    }, e;
  }(F);

  function V() {
    return H || (H = new U([]));
  }

  function J(t) {
    var e = Z(t);
    if (e) return e.fromEntrySeq();
    if ("object" == typeof t) return new q(t);
    throw new TypeError("Expected Array or collection object of [k, v] entries, or keyed object: " + t);
  }

  function G(t) {
    var e = Z(t);
    if (e) return e;
    throw new TypeError("Expected Array or collection object of values: " + t);
  }

  function Z(t) {
    return L(t) ? new U(t) : K(t) ? new W(t) : void 0;
  }

  function X(t) {
    return Boolean(t && t["@@__IMMUTABLE_MAP__@@"]);
  }

  function Y(t) {
    return X(t) && O(t);
  }

  function $(t) {
    return Boolean(t && "function" == typeof t.equals && "function" == typeof t.hashCode);
  }

  function Q(t, e) {
    if (t === e || t != t && e != e) return !0;
    if (!t || !e) return !1;

    if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
      if ((t = t.valueOf()) === (e = e.valueOf()) || t != t && e != e) return !0;
      if (!t || !e) return !1;
    }

    return !!($(t) && $(e) && t.equals(e));
  }

  var tt = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function (t, e) {
    var r = 65535 & (t |= 0),
        n = 65535 & (e |= 0);
    return r * n + ((t >>> 16) * n + r * (e >>> 16) << 16 >>> 0) | 0;
  };

  function et(t) {
    return t >>> 1 & 1073741824 | 3221225471 & t;
  }

  var rt = Object.prototype.valueOf;

  function nt(t) {
    if (null == t) return it(t);
    if ("function" == typeof t.hashCode) return et(t.hashCode(t));
    var e,
        r = (e = t).valueOf !== rt && "function" == typeof e.valueOf ? e.valueOf(e) : e;
    if (null == r) return it(r);

    switch (typeof r) {
      case "boolean":
        return r ? 1108378657 : 1108378656;

      case "number":
        return function (t) {
          if (t != t || t === 1 / 0) return 0;
          var e = 0 | t;
          e !== t && (e ^= 4294967295 * t);

          for (; t > 4294967295;) e ^= t /= 4294967295;

          return et(e);
        }(r);

      case "string":
        return r.length > dt ? function (t) {
          var e = yt[t];
          void 0 === e && (e = ot(t), vt === gt && (vt = 0, yt = {}), vt++, yt[t] = e);
          return e;
        }(r) : ot(r);

      case "object":
      case "function":
        return function (t) {
          var e;
          if (ft && void 0 !== (e = ct.get(t))) return e;
          if (void 0 !== (e = t[pt])) return e;

          if (!at) {
            if (void 0 !== (e = t.propertyIsEnumerable && t.propertyIsEnumerable[pt])) return e;
            if (void 0 !== (e = function (t) {
              if (t && t.nodeType > 0) switch (t.nodeType) {
                case 1:
                  return t.uniqueID;

                case 9:
                  return t.documentElement && t.documentElement.uniqueID;
              }
            }(t))) return e;
          }

          if (e = st(), ft) ct.set(t, e);else {
            if (void 0 !== ut && !1 === ut(t)) throw new Error("Non-extensible objects are not allowed as keys.");
            if (at) Object.defineProperty(t, pt, {
              enumerable: !1,
              configurable: !1,
              writable: !1,
              value: e
            });else if (void 0 !== t.propertyIsEnumerable && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable) t.propertyIsEnumerable = function () {
              return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
            }, t.propertyIsEnumerable[pt] = e;else {
              if (void 0 === t.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
              t[pt] = e;
            }
          }
          return e;
        }(r);

      case "symbol":
        return function (t) {
          var e = lt[t];
          if (void 0 !== e) return e;
          return e = st(), lt[t] = e, e;
        }(r);

      default:
        if ("function" == typeof r.toString) return ot(r.toString());
        throw new Error("Value type " + typeof r + " cannot be hashed.");
    }
  }

  function it(t) {
    return null === t ? 1108378658 : 1108378659;
  }

  function ot(t) {
    for (var e = 0, r = 0; r < t.length; r++) e = 31 * e + t.charCodeAt(r) | 0;

    return et(e);
  }

  var ut = Object.isExtensible,
      at = function () {
    try {
      return Object.defineProperty({}, "@", {}), !0;
    } catch (t) {
      return !1;
    }
  }();

  function st() {
    var t = ++ht;
    return 1073741824 & ht && (ht = 0), t;
  }

  var ct,
      ft = "function" == typeof WeakMap;
  ft && (ct = new WeakMap());
  var lt = Object.create(null),
      ht = 0,
      pt = "__immutablehash__";
  "function" == typeof Symbol && (pt = Symbol(pt));

  var dt = 16,
      gt = 255,
      vt = 0,
      yt = {},
      _t = function (t) {
    function e(t, e) {
      this._iter = t, this._useKeys = e, this.size = t.size;
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.get = function (t, e) {
      return this._iter.get(t, e);
    }, e.prototype.has = function (t) {
      return this._iter.has(t);
    }, e.prototype.valueSeq = function () {
      return this._iter.valueSeq();
    }, e.prototype.reverse = function () {
      var t = this,
          e = kt(this, !0);
      return this._useKeys || (e.valueSeq = function () {
        return t._iter.toSeq().reverse();
      }), e;
    }, e.prototype.map = function (t, e) {
      var r = this,
          n = xt(this, t, e);
      return this._useKeys || (n.valueSeq = function () {
        return r._iter.toSeq().map(t, e);
      }), n;
    }, e.prototype.__iterate = function (t, e) {
      var r = this;
      return this._iter.__iterate(function (e, n) {
        return t(e, n, r);
      }, e);
    }, e.prototype.__iterator = function (t, e) {
      return this._iter.__iterator(t, e);
    }, e;
  }(N);

  _t.prototype[E] = !0;

  var mt = function (t) {
    function e(t) {
      this._iter = t, this.size = t.size;
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.includes = function (t) {
      return this._iter.includes(t);
    }, e.prototype.__iterate = function (t, e) {
      var r = this,
          n = 0;
      return e && u(this), this._iter.__iterate(function (i) {
        return t(i, e ? r.size - ++n : n++, r);
      }, e);
    }, e.prototype.__iterator = function (t, e) {
      var r = this,
          n = this._iter.__iterator(1, e),
          i = 0;

      return e && u(this), new I(function () {
        var o = n.next();
        return o.done ? o : M(t, e ? r.size - ++i : i++, o.value, o);
      });
    }, e;
  }(F),
      bt = function (t) {
    function e(t) {
      this._iter = t, this.size = t.size;
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.has = function (t) {
      return this._iter.includes(t);
    }, e.prototype.__iterate = function (t, e) {
      var r = this;
      return this._iter.__iterate(function (e) {
        return t(e, e, r);
      }, e);
    }, e.prototype.__iterator = function (t, e) {
      var r = this._iter.__iterator(1, e);

      return new I(function () {
        var e = r.next();
        return e.done ? e : M(t, e.value, e.value, e);
      });
    }, e;
  }(P),
      St = function (t) {
    function e(t) {
      this._iter = t, this.size = t.size;
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.entrySeq = function () {
      return this._iter.toSeq();
    }, e.prototype.__iterate = function (t, e) {
      var r = this;
      return this._iter.__iterate(function (e) {
        if (e) {
          Bt(e);
          var n = d(e);
          return t(n ? e.get(1) : e[1], n ? e.get(0) : e[0], r);
        }
      }, e);
    }, e.prototype.__iterator = function (t, e) {
      var r = this._iter.__iterator(1, e);

      return new I(function () {
        for (;;) {
          var e = r.next();
          if (e.done) return e;
          var n = e.value;

          if (n) {
            Bt(n);
            var i = d(n);
            return M(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], e);
          }
        }
      });
    }, e;
  }(N);

  function wt(t) {
    var e = Lt(t);
    return e._iter = t, e.size = t.size, e.flip = function () {
      return t;
    }, e.reverse = function () {
      var e = t.reverse.apply(this);
      return e.flip = function () {
        return t.reverse();
      }, e;
    }, e.has = function (e) {
      return t.includes(e);
    }, e.includes = function (e) {
      return t.has(e);
    }, e.cacheResult = jt, e.__iterateUncached = function (e, r) {
      var n = this;
      return t.__iterate(function (t, r) {
        return !1 !== e(r, t, n);
      }, r);
    }, e.__iteratorUncached = function (e, r) {
      if (2 === e) {
        var n = t.__iterator(e, r);

        return new I(function () {
          var t = n.next();

          if (!t.done) {
            var e = t.value[0];
            t.value[0] = t.value[1], t.value[1] = e;
          }

          return t;
        });
      }

      return t.__iterator(1 === e ? 0 : 1, r);
    }, e;
  }

  function xt(t, e, r) {
    var i = Lt(t);
    return i.size = t.size, i.has = function (e) {
      return t.has(e);
    }, i.get = function (i, o) {
      var u = t.get(i, n);
      return u === n ? o : e.call(r, u, i, t);
    }, i.__iterateUncached = function (n, i) {
      var o = this;
      return t.__iterate(function (t, i, u) {
        return !1 !== n(e.call(r, t, i, u), i, o);
      }, i);
    }, i.__iteratorUncached = function (n, i) {
      var o = t.__iterator(2, i);

      return new I(function () {
        var i = o.next();
        if (i.done) return i;
        var u = i.value,
            a = u[0];
        return M(n, a, e.call(r, u[1], a, t), i);
      });
    }, i;
  }

  function kt(t, e) {
    var r = this,
        n = Lt(t);
    return n._iter = t, n.size = t.size, n.reverse = function () {
      return t;
    }, t.flip && (n.flip = function () {
      var e = wt(t);
      return e.reverse = function () {
        return t.flip();
      }, e;
    }), n.get = function (r, n) {
      return t.get(e ? r : -1 - r, n);
    }, n.has = function (r) {
      return t.has(e ? r : -1 - r);
    }, n.includes = function (e) {
      return t.includes(e);
    }, n.cacheResult = jt, n.__iterate = function (r, n) {
      var i = this,
          o = 0;
      return n && u(t), t.__iterate(function (t, u) {
        return r(t, e ? u : n ? i.size - ++o : o++, i);
      }, !n);
    }, n.__iterator = function (n, i) {
      var o = 0;
      i && u(t);

      var a = t.__iterator(2, !i);

      return new I(function () {
        var t = a.next();
        if (t.done) return t;
        var u = t.value;
        return M(n, e ? u[0] : i ? r.size - ++o : o++, u[1], t);
      });
    }, n;
  }

  function Et(t, e, r, i) {
    var o = Lt(t);
    return i && (o.has = function (i) {
      var o = t.get(i, n);
      return o !== n && !!e.call(r, o, i, t);
    }, o.get = function (i, o) {
      var u = t.get(i, n);
      return u !== n && e.call(r, u, i, t) ? u : o;
    }), o.__iterateUncached = function (n, o) {
      var u = this,
          a = 0;
      return t.__iterate(function (t, o, s) {
        if (e.call(r, t, o, s)) return a++, n(t, i ? o : a - 1, u);
      }, o), a;
    }, o.__iteratorUncached = function (n, o) {
      var u = t.__iterator(2, o),
          a = 0;

      return new I(function () {
        for (;;) {
          var o = u.next();
          if (o.done) return o;
          var s = o.value,
              c = s[0],
              f = s[1];
          if (e.call(r, f, c, t)) return M(n, i ? c : a++, f, o);
        }
      });
    }, o;
  }

  function Ot(t, e, r, n) {
    var i = t.size;
    if (c(e, r, i)) return t;
    var o = f(e, i),
        u = l(r, i);
    if (o != o || u != u) return Ot(t.toSeq().cacheResult(), e, r, n);
    var s,
        h = u - o;
    h == h && (s = h < 0 ? 0 : h);
    var p = Lt(t);
    return p.size = 0 === s ? s : t.size && s || void 0, !n && w(t) && s >= 0 && (p.get = function (e, r) {
      return (e = a(this, e)) >= 0 && e < s ? t.get(e + o, r) : r;
    }), p.__iterateUncached = function (e, r) {
      var i = this;
      if (0 === s) return 0;
      if (r) return this.cacheResult().__iterate(e, r);
      var u = 0,
          a = !0,
          c = 0;
      return t.__iterate(function (t, r) {
        if (!a || !(a = u++ < o)) return c++, !1 !== e(t, n ? r : c - 1, i) && c !== s;
      }), c;
    }, p.__iteratorUncached = function (e, r) {
      if (0 !== s && r) return this.cacheResult().__iterator(e, r);
      if (0 === s) return new I(A);

      var i = t.__iterator(e, r),
          u = 0,
          a = 0;

      return new I(function () {
        for (; u++ < o;) i.next();

        if (++a > s) return {
          value: void 0,
          done: !0
        };
        var t = i.next();
        return n || 1 === e || t.done ? t : M(e, a - 1, 0 === e ? void 0 : t.value[1], t);
      });
    }, p;
  }

  function Ct(t, e, r, n) {
    var i = Lt(t);
    return i.__iterateUncached = function (i, o) {
      var u = this;
      if (o) return this.cacheResult().__iterate(i, o);
      var a = !0,
          s = 0;
      return t.__iterate(function (t, o, c) {
        if (!a || !(a = e.call(r, t, o, c))) return s++, i(t, n ? o : s - 1, u);
      }), s;
    }, i.__iteratorUncached = function (i, o) {
      var u = this;
      if (o) return this.cacheResult().__iterator(i, o);

      var a = t.__iterator(2, o),
          s = !0,
          c = 0;

      return new I(function () {
        var t, o, f;

        do {
          if ((t = a.next()).done) return n || 1 === i ? t : M(i, c++, 0 === i ? void 0 : t.value[1], t);
          var l = t.value;
          o = l[0], f = l[1], s && (s = e.call(r, f, o, u));
        } while (s);

        return 2 === i ? t : M(i, o, f, t);
      });
    }, i;
  }

  function Dt(t, e) {
    var r = g(t),
        n = [t].concat(e).map(function (t) {
      return d(t) ? r && (t = m(t)) : t = r ? J(t) : G(Array.isArray(t) ? t : [t]), t;
    }).filter(function (t) {
      return 0 !== t.size;
    });
    if (0 === n.length) return t;

    if (1 === n.length) {
      var i = n[0];
      if (i === t || r && g(i) || v(t) && v(i)) return i;
    }

    var o = new U(n);
    return r ? o = o.toKeyedSeq() : v(t) || (o = o.toSetSeq()), (o = o.flatten(!0)).size = n.reduce(function (t, e) {
      if (void 0 !== t) {
        var r = e.size;
        if (void 0 !== r) return t + r;
      }
    }, 0), o;
  }

  function It(t, e, r) {
    var n = Lt(t);
    return n.__iterateUncached = function (i, o) {
      if (o) return this.cacheResult().__iterate(i, o);
      var u = 0,
          a = !1;
      return function t(s, c) {
        s.__iterate(function (o, s) {
          return (!e || c < e) && d(o) ? t(o, c + 1) : (u++, !1 === i(o, r ? s : u - 1, n) && (a = !0)), !a;
        }, o);
      }(t, 0), u;
    }, n.__iteratorUncached = function (n, i) {
      if (i) return this.cacheResult().__iterator(n, i);

      var o = t.__iterator(n, i),
          u = [],
          a = 0;

      return new I(function () {
        for (; o;) {
          var t = o.next();

          if (!1 === t.done) {
            var s = t.value;
            if (2 === n && (s = s[1]), e && !(u.length < e) || !d(s)) return r ? t : M(n, a++, s, t);
            u.push(o), o = s.__iterator(n, i);
          } else o = u.pop();
        }

        return {
          value: void 0,
          done: !0
        };
      });
    }, n;
  }

  function Mt(t, e, r) {
    e || (e = Nt);
    var n = g(t),
        i = 0,
        o = t.toSeq().map(function (e, n) {
      return [n, e, i++, r ? r(e, n, t) : e];
    }).valueSeq().toArray();
    return o.sort(function (t, r) {
      return e(t[3], r[3]) || t[2] - r[2];
    }).forEach(n ? function (t, e) {
      o[e].length = 2;
    } : function (t, e) {
      o[e] = t[1];
    }), n ? N(o) : v(t) ? F(o) : P(o);
  }

  function At(t, e, r) {
    if (e || (e = Nt), r) {
      var n = t.toSeq().map(function (e, n) {
        return [e, r(e, n, t)];
      }).reduce(function (t, r) {
        return Kt(e, t[1], r[1]) ? r : t;
      });
      return n && n[0];
    }

    return t.reduce(function (t, r) {
      return Kt(e, t, r) ? r : t;
    });
  }

  function Kt(t, e, r) {
    var n = t(r, e);
    return 0 === n && r !== e && (null == r || r != r) || n > 0;
  }

  function Tt(t, e, r, n) {
    var i = Lt(t),
        o = new U(r).map(function (t) {
      return t.size;
    });
    return i.size = n ? o.max() : o.min(), i.__iterate = function (t, e) {
      for (var r, n = this.__iterator(1, e), i = 0; !(r = n.next()).done && !1 !== t(r.value, i++, this););

      return i;
    }, i.__iteratorUncached = function (t, i) {
      var o = r.map(function (t) {
        return t = _(t), z(i ? t.reverse() : t);
      }),
          u = 0,
          a = !1;
      return new I(function () {
        var r;
        return a || (r = o.map(function (t) {
          return t.next();
        }), a = n ? r.every(function (t) {
          return t.done;
        }) : r.some(function (t) {
          return t.done;
        })), a ? {
          value: void 0,
          done: !0
        } : M(t, u++, e.apply(null, r.map(function (t) {
          return t.value;
        })));
      });
    }, i;
  }

  function zt(t, e) {
    return t === e ? t : w(t) ? e : t.constructor(e);
  }

  function Bt(t) {
    if (t !== Object(t)) throw new TypeError("Expected [K, V] tuple: " + t);
  }

  function Rt(t) {
    return g(t) ? m : v(t) ? b : S;
  }

  function Lt(t) {
    return Object.create((g(t) ? N : v(t) ? F : P).prototype);
  }

  function jt() {
    return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : j.prototype.cacheResult.call(this);
  }

  function Nt(t, e) {
    return void 0 === t && void 0 === e ? 0 : void 0 === t ? 1 : void 0 === e ? -1 : t > e ? 1 : t < e ? -1 : 0;
  }

  function Ft(t, e) {
    e = e || 0;

    for (var r = Math.max(0, t.length - e), n = new Array(r), i = 0; i < r; i++) n[i] = t[i + e];

    return n;
  }

  function Pt(t, e) {
    if (!t) throw new Error(e);
  }

  function Ut(t) {
    Pt(t !== 1 / 0, "Cannot perform this action with an infinite size.");
  }

  function qt(t) {
    if (L(t) && "string" != typeof t) return t;
    if (O(t)) return t.toArray();
    throw new TypeError("Invalid keyPath: expected Ordered Collection or Array: " + t);
  }

  mt.prototype.cacheResult = _t.prototype.cacheResult = bt.prototype.cacheResult = St.prototype.cacheResult = jt;
  var Ht = Object.prototype.toString;

  function Wt(t) {
    if (!t || "object" != typeof t || "[object Object]" !== Ht.call(t)) return !1;
    var e = Object.getPrototypeOf(t);
    if (null === e) return !0;

    for (var r = e, n = Object.getPrototypeOf(e); null !== n;) r = n, n = Object.getPrototypeOf(r);

    return r === e;
  }

  function Vt(t) {
    return "object" == typeof t && (k(t) || Array.isArray(t) || Wt(t));
  }

  function Jt(t) {
    try {
      return "string" == typeof t ? JSON.stringify(t) : String(t);
    } catch (e) {
      return JSON.stringify(t);
    }
  }

  function Gt(t, e) {
    return k(t) ? t.has(e) : Vt(t) && R.call(t, e);
  }

  function Zt(t, e, r) {
    return k(t) ? t.get(e, r) : Gt(t, e) ? "function" == typeof t.get ? t.get(e) : t[e] : r;
  }

  function Xt(t) {
    if (Array.isArray(t)) return Ft(t);
    var e = {};

    for (var r in t) R.call(t, r) && (e[r] = t[r]);

    return e;
  }

  function Yt(t, e) {
    if (!Vt(t)) throw new TypeError("Cannot update non-data-structure value: " + t);

    if (k(t)) {
      if (!t.remove) throw new TypeError("Cannot update immutable value without .remove() method: " + t);
      return t.remove(e);
    }

    if (!R.call(t, e)) return t;
    var r = Xt(t);
    return Array.isArray(r) ? r.splice(e, 1) : delete r[e], r;
  }

  function $t(t, e, r) {
    if (!Vt(t)) throw new TypeError("Cannot update non-data-structure value: " + t);

    if (k(t)) {
      if (!t.set) throw new TypeError("Cannot update immutable value without .set() method: " + t);
      return t.set(e, r);
    }

    if (R.call(t, e) && r === t[e]) return t;
    var n = Xt(t);
    return n[e] = r, n;
  }

  function Qt(t, e, r, i) {
    i || (i = r, r = void 0);

    var o = function t(e, r, i, o, u, a) {
      var s = r === n;

      if (o === i.length) {
        var c = s ? u : r,
            f = a(c);
        return f === c ? r : f;
      }

      if (!s && !Vt(r)) throw new TypeError("Cannot update within non-data-structure value in path [" + i.slice(0, o).map(Jt) + "]: " + r);
      var l = i[o],
          h = s ? n : Zt(r, l, n),
          p = t(h === n ? e : k(h), h, i, o + 1, u, a);
      return p === h ? r : p === n ? Yt(r, l) : $t(s ? e ? Re() : {} : r, l, p);
    }(k(t), t, qt(e), 0, r, i);

    return o === n ? r : o;
  }

  function te(t, e, r) {
    return Qt(t, e, n, function () {
      return r;
    });
  }

  function ee(t, e) {
    return te(this, t, e);
  }

  function re(t, e) {
    return Qt(t, e, function () {
      return n;
    });
  }

  function ne(t) {
    return re(this, t);
  }

  function ie(t, e, r, n) {
    return Qt(t, [e], r, n);
  }

  function oe(t, e, r) {
    return 1 === arguments.length ? t(this) : ie(this, t, e, r);
  }

  function ue(t, e, r) {
    return Qt(this, t, e, r);
  }

  function ae() {
    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];

    return ce(this, t);
  }

  function se(t) {
    for (var e = [], r = arguments.length - 1; r-- > 0;) e[r] = arguments[r + 1];

    if ("function" != typeof t) throw new TypeError("Invalid merger function: " + t);
    return ce(this, e, t);
  }

  function ce(t, e, r) {
    for (var i = [], o = 0; o < e.length; o++) {
      var u = m(e[o]);
      0 !== u.size && i.push(u);
    }

    return 0 === i.length ? t : 0 !== t.toSeq().size || t.__ownerID || 1 !== i.length ? t.withMutations(function (t) {
      for (var e = r ? function (e, i) {
        ie(t, i, n, function (t) {
          return t === n ? e : r(t, e, i);
        });
      } : function (e, r) {
        t.set(r, e);
      }, o = 0; o < i.length; o++) i[o].forEach(e);
    }) : t.constructor(i[0]);
  }

  function fe(t) {
    for (var e = [], r = arguments.length - 1; r-- > 0;) e[r] = arguments[r + 1];

    return ge(t, e);
  }

  function le(t, e) {
    for (var r = [], n = arguments.length - 2; n-- > 0;) r[n] = arguments[n + 2];

    return ge(e, r, t);
  }

  function he(t) {
    for (var e = [], r = arguments.length - 1; r-- > 0;) e[r] = arguments[r + 1];

    return de(t, e);
  }

  function pe(t, e) {
    for (var r = [], n = arguments.length - 2; n-- > 0;) r[n] = arguments[n + 2];

    return de(e, r, t);
  }

  function de(t, e, r) {
    return ge(t, e, function (t) {
      return function e(r, n, i) {
        return Vt(r) && Vt(n) && (o = n, u = j(r), a = j(o), v(u) === v(a) && g(u) === g(a)) ? ge(r, [n], e) : t ? t(r, n, i) : n;
        var o, u, a;
      };
    }(r));
  }

  function ge(t, e, r) {
    if (!Vt(t)) throw new TypeError("Cannot merge into non-data-structure value: " + t);
    if (k(t)) return "function" == typeof r && t.mergeWith ? t.mergeWith.apply(t, [r].concat(e)) : t.merge ? t.merge.apply(t, e) : t.concat.apply(t, e);

    for (var n = Array.isArray(t), i = t, o = n ? b : m, u = n ? function (e) {
      i === t && (i = Xt(i)), i.push(e);
    } : function (e, n) {
      var o = R.call(i, n),
          u = o && r ? r(i[n], e, n) : e;
      o && u === i[n] || (i === t && (i = Xt(i)), i[n] = u);
    }, a = 0; a < e.length; a++) o(e[a]).forEach(u);

    return i;
  }

  function ve() {
    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];

    return de(this, t);
  }

  function ye(t) {
    for (var e = [], r = arguments.length - 1; r-- > 0;) e[r] = arguments[r + 1];

    return de(this, e, t);
  }

  function _e(t) {
    for (var e = [], r = arguments.length - 1; r-- > 0;) e[r] = arguments[r + 1];

    return Qt(this, t, Re(), function (t) {
      return ge(t, e);
    });
  }

  function me(t) {
    for (var e = [], r = arguments.length - 1; r-- > 0;) e[r] = arguments[r + 1];

    return Qt(this, t, Re(), function (t) {
      return de(t, e);
    });
  }

  function be(t) {
    var e = this.asMutable();
    return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this;
  }

  function Se() {
    return this.__ownerID ? this : this.__ensureOwner(new o());
  }

  function we() {
    return this.__ensureOwner();
  }

  function xe() {
    return this.__altered;
  }

  var ke = function (t) {
    function e(e) {
      return null == e ? Re() : X(e) && !O(e) ? e : Re().withMutations(function (r) {
        var n = t(e);
        Ut(n.size), n.forEach(function (t, e) {
          return r.set(e, t);
        });
      });
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.of = function () {
      for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];

      return Re().withMutations(function (e) {
        for (var r = 0; r < t.length; r += 2) {
          if (r + 1 >= t.length) throw new Error("Missing value for key: " + t[r]);
          e.set(t[r], t[r + 1]);
        }
      });
    }, e.prototype.toString = function () {
      return this.__toString("Map {", "}");
    }, e.prototype.get = function (t, e) {
      return this._root ? this._root.get(0, void 0, t, e) : e;
    }, e.prototype.set = function (t, e) {
      return Le(this, t, e);
    }, e.prototype.remove = function (t) {
      return Le(this, t, n);
    }, e.prototype.deleteAll = function (t) {
      var e = _(t);

      return 0 === e.size ? this : this.withMutations(function (t) {
        e.forEach(function (e) {
          return t.remove(e);
        });
      });
    }, e.prototype.clear = function () {
      return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : Re();
    }, e.prototype.sort = function (t) {
      return ar(Mt(this, t));
    }, e.prototype.sortBy = function (t, e) {
      return ar(Mt(this, e, t));
    }, e.prototype.map = function (t, e) {
      var r = this;
      return this.withMutations(function (n) {
        n.forEach(function (i, o) {
          n.set(o, t.call(e, i, o, r));
        });
      });
    }, e.prototype.__iterator = function (t, e) {
      return new Ke(this, t, e);
    }, e.prototype.__iterate = function (t, e) {
      var r = this,
          n = 0;
      return this._root && this._root.iterate(function (e) {
        return n++, t(e[1], e[0], r);
      }, e), n;
    }, e.prototype.__ensureOwner = function (t) {
      return t === this.__ownerID ? this : t ? Be(this.size, this._root, t, this.__hash) : 0 === this.size ? Re() : (this.__ownerID = t, this.__altered = !1, this);
    }, e;
  }(m);

  ke.isMap = X;
  var Ee = ke.prototype;
  Ee["@@__IMMUTABLE_MAP__@@"] = !0, Ee.delete = Ee.remove, Ee.removeAll = Ee.deleteAll, Ee.setIn = ee, Ee.removeIn = Ee.deleteIn = ne, Ee.update = oe, Ee.updateIn = ue, Ee.merge = Ee.concat = ae, Ee.mergeWith = se, Ee.mergeDeep = ve, Ee.mergeDeepWith = ye, Ee.mergeIn = _e, Ee.mergeDeepIn = me, Ee.withMutations = be, Ee.wasAltered = xe, Ee.asImmutable = we, Ee["@@transducer/init"] = Ee.asMutable = Se, Ee["@@transducer/step"] = function (t, e) {
    return t.set(e[0], e[1]);
  }, Ee["@@transducer/result"] = function (t) {
    return t.asImmutable();
  };

  var Oe = function (t, e) {
    this.ownerID = t, this.entries = e;
  };

  Oe.prototype.get = function (t, e, r, n) {
    for (var i = this.entries, o = 0, u = i.length; o < u; o++) if (Q(r, i[o][0])) return i[o][1];

    return n;
  }, Oe.prototype.update = function (t, e, r, u, a, s, c) {
    for (var f = a === n, l = this.entries, h = 0, p = l.length; h < p && !Q(u, l[h][0]); h++);

    var d = h < p;
    if (d ? l[h][1] === a : f) return this;

    if (i(c), (f || !d) && i(s), !f || 1 !== l.length) {
      if (!d && !f && l.length >= qe) return function (t, e, r, n) {
        t || (t = new o());

        for (var i = new Me(t, nt(r), [r, n]), u = 0; u < e.length; u++) {
          var a = e[u];
          i = i.update(t, 0, void 0, a[0], a[1]);
        }

        return i;
      }(t, l, u, a);
      var g = t && t === this.ownerID,
          v = g ? l : Ft(l);
      return d ? f ? h === p - 1 ? v.pop() : v[h] = v.pop() : v[h] = [u, a] : v.push([u, a]), g ? (this.entries = v, this) : new Oe(t, v);
    }
  };

  var Ce = function (t, e, r) {
    this.ownerID = t, this.bitmap = e, this.nodes = r;
  };

  Ce.prototype.get = function (t, e, r, n) {
    void 0 === e && (e = nt(r));
    var i = 1 << (31 & (0 === t ? e : e >>> t)),
        o = this.bitmap;
    return 0 == (o & i) ? n : this.nodes[Pe(o & i - 1)].get(t + 5, e, r, n);
  }, Ce.prototype.update = function (t, e, r, i, o, u, a) {
    void 0 === r && (r = nt(i));
    var s = 31 & (0 === e ? r : r >>> e),
        c = 1 << s,
        f = this.bitmap,
        l = 0 != (f & c);
    if (!l && o === n) return this;
    var h = Pe(f & c - 1),
        p = this.nodes,
        d = l ? p[h] : void 0,
        g = je(d, t, e + 5, r, i, o, u, a);
    if (g === d) return this;
    if (!l && g && p.length >= He) return function (t, e, r, n, i) {
      for (var o = 0, u = new Array(32), a = 0; 0 !== r; a++, r >>>= 1) u[a] = 1 & r ? e[o++] : void 0;

      return u[n] = i, new De(t, o + 1, u);
    }(t, p, f, s, g);
    if (l && !g && 2 === p.length && Ne(p[1 ^ h])) return p[1 ^ h];
    if (l && g && 1 === p.length && Ne(g)) return g;

    var v = t && t === this.ownerID,
        y = l ? g ? f : f ^ c : f | c,
        _ = l ? g ? Ue(p, h, g, v) : function (t, e, r) {
      var n = t.length - 1;
      if (r && e === n) return t.pop(), t;

      for (var i = new Array(n), o = 0, u = 0; u < n; u++) u === e && (o = 1), i[u] = t[u + o];

      return i;
    }(p, h, v) : function (t, e, r, n) {
      var i = t.length + 1;
      if (n && e + 1 === i) return t[e] = r, t;

      for (var o = new Array(i), u = 0, a = 0; a < i; a++) a === e ? (o[a] = r, u = -1) : o[a] = t[a + u];

      return o;
    }(p, h, g, v);

    return v ? (this.bitmap = y, this.nodes = _, this) : new Ce(t, y, _);
  };

  var De = function (t, e, r) {
    this.ownerID = t, this.count = e, this.nodes = r;
  };

  De.prototype.get = function (t, e, r, n) {
    void 0 === e && (e = nt(r));
    var i = 31 & (0 === t ? e : e >>> t),
        o = this.nodes[i];
    return o ? o.get(t + 5, e, r, n) : n;
  }, De.prototype.update = function (t, e, r, i, o, u, a) {
    void 0 === r && (r = nt(i));
    var s = 31 & (0 === e ? r : r >>> e),
        c = o === n,
        f = this.nodes,
        l = f[s];
    if (c && !l) return this;
    var h = je(l, t, e + 5, r, i, o, u, a);
    if (h === l) return this;
    var p = this.count;

    if (l) {
      if (!h && --p < We) return function (t, e, r, n) {
        for (var i = 0, o = 0, u = new Array(r), a = 0, s = 1, c = e.length; a < c; a++, s <<= 1) {
          var f = e[a];
          void 0 !== f && a !== n && (i |= s, u[o++] = f);
        }

        return new Ce(t, i, u);
      }(t, f, p, s);
    } else p++;

    var d = t && t === this.ownerID,
        g = Ue(f, s, h, d);
    return d ? (this.count = p, this.nodes = g, this) : new De(t, p, g);
  };

  var Ie = function (t, e, r) {
    this.ownerID = t, this.keyHash = e, this.entries = r;
  };

  Ie.prototype.get = function (t, e, r, n) {
    for (var i = this.entries, o = 0, u = i.length; o < u; o++) if (Q(r, i[o][0])) return i[o][1];

    return n;
  }, Ie.prototype.update = function (t, e, r, o, u, a, s) {
    void 0 === r && (r = nt(o));
    var c = u === n;
    if (r !== this.keyHash) return c ? this : (i(s), i(a), Fe(this, t, e, r, [o, u]));

    for (var f = this.entries, l = 0, h = f.length; l < h && !Q(o, f[l][0]); l++);

    var p = l < h;
    if (p ? f[l][1] === u : c) return this;
    if (i(s), (c || !p) && i(a), c && 2 === h) return new Me(t, this.keyHash, f[1 ^ l]);
    var d = t && t === this.ownerID,
        g = d ? f : Ft(f);
    return p ? c ? l === h - 1 ? g.pop() : g[l] = g.pop() : g[l] = [o, u] : g.push([o, u]), d ? (this.entries = g, this) : new Ie(t, this.keyHash, g);
  };

  var Me = function (t, e, r) {
    this.ownerID = t, this.keyHash = e, this.entry = r;
  };

  Me.prototype.get = function (t, e, r, n) {
    return Q(r, this.entry[0]) ? this.entry[1] : n;
  }, Me.prototype.update = function (t, e, r, o, u, a, s) {
    var c = u === n,
        f = Q(o, this.entry[0]);
    return (f ? u === this.entry[1] : c) ? this : (i(s), c ? void i(a) : f ? t && t === this.ownerID ? (this.entry[1] = u, this) : new Me(t, this.keyHash, [o, u]) : (i(a), Fe(this, t, e, nt(o), [o, u])));
  }, Oe.prototype.iterate = Ie.prototype.iterate = function (t, e) {
    for (var r = this.entries, n = 0, i = r.length - 1; n <= i; n++) if (!1 === t(r[e ? i - n : n])) return !1;
  }, Ce.prototype.iterate = De.prototype.iterate = function (t, e) {
    for (var r = this.nodes, n = 0, i = r.length - 1; n <= i; n++) {
      var o = r[e ? i - n : n];
      if (o && !1 === o.iterate(t, e)) return !1;
    }
  }, Me.prototype.iterate = function (t, e) {
    return t(this.entry);
  };

  var Ae,
      Ke = function (t) {
    function e(t, e, r) {
      this._type = e, this._reverse = r, this._stack = t._root && ze(t._root);
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.next = function () {
      for (var t = this._type, e = this._stack; e;) {
        var r = e.node,
            n = e.index++,
            i = void 0;

        if (r.entry) {
          if (0 === n) return Te(t, r.entry);
        } else if (r.entries) {
          if (n <= (i = r.entries.length - 1)) return Te(t, r.entries[this._reverse ? i - n : n]);
        } else if (n <= (i = r.nodes.length - 1)) {
          var o = r.nodes[this._reverse ? i - n : n];

          if (o) {
            if (o.entry) return Te(t, o.entry);
            e = this._stack = ze(o, e);
          }

          continue;
        }

        e = this._stack = this._stack.__prev;
      }

      return {
        value: void 0,
        done: !0
      };
    }, e;
  }(I);

  function Te(t, e) {
    return M(t, e[0], e[1]);
  }

  function ze(t, e) {
    return {
      node: t,
      index: 0,
      __prev: e
    };
  }

  function Be(t, e, r, n) {
    var i = Object.create(Ee);
    return i.size = t, i._root = e, i.__ownerID = r, i.__hash = n, i.__altered = !1, i;
  }

  function Re() {
    return Ae || (Ae = Be(0));
  }

  function Le(t, e, r) {
    var i, o;

    if (t._root) {
      var u = {
        value: !1
      },
          a = {
        value: !1
      };
      if (i = je(t._root, t.__ownerID, 0, void 0, e, r, u, a), !a.value) return t;
      o = t.size + (u.value ? r === n ? -1 : 1 : 0);
    } else {
      if (r === n) return t;
      o = 1, i = new Oe(t.__ownerID, [[e, r]]);
    }

    return t.__ownerID ? (t.size = o, t._root = i, t.__hash = void 0, t.__altered = !0, t) : i ? Be(o, i) : Re();
  }

  function je(t, e, r, o, u, a, s, c) {
    return t ? t.update(e, r, o, u, a, s, c) : a === n ? t : (i(c), i(s), new Me(e, o, [u, a]));
  }

  function Ne(t) {
    return t.constructor === Me || t.constructor === Ie;
  }

  function Fe(t, e, r, n, i) {
    if (t.keyHash === n) return new Ie(e, n, [t.entry, i]);
    var o,
        u = 31 & (0 === r ? t.keyHash : t.keyHash >>> r),
        a = 31 & (0 === r ? n : n >>> r),
        s = u === a ? [Fe(t, e, r + 5, n, i)] : (o = new Me(e, n, i), u < a ? [t, o] : [o, t]);
    return new Ce(e, 1 << u | 1 << a, s);
  }

  function Pe(t) {
    return t = (t = (858993459 & (t -= t >> 1 & 1431655765)) + (t >> 2 & 858993459)) + (t >> 4) & 252645135, t += t >> 8, 127 & (t += t >> 16);
  }

  function Ue(t, e, r, n) {
    var i = n ? t : Ft(t);
    return i[e] = r, i;
  }

  var qe = 8,
      He = 16,
      We = 8;

  function Ve(t) {
    return Boolean(t && t["@@__IMMUTABLE_LIST__@@"]);
  }

  var Je = function (t) {
    function e(e) {
      var r = tr();
      if (null == e) return r;
      if (Ve(e)) return e;
      var n = t(e),
          i = n.size;
      return 0 === i ? r : (Ut(i), i > 0 && i < 32 ? Qe(0, i, 5, null, new Ze(n.toArray())) : r.withMutations(function (t) {
        t.setSize(i), n.forEach(function (e, r) {
          return t.set(r, e);
        });
      }));
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.of = function () {
      return this(arguments);
    }, e.prototype.toString = function () {
      return this.__toString("List [", "]");
    }, e.prototype.get = function (t, e) {
      if ((t = a(this, t)) >= 0 && t < this.size) {
        var r = nr(this, t += this._origin);
        return r && r.array[31 & t];
      }

      return e;
    }, e.prototype.set = function (t, e) {
      return function (t, e, r) {
        if ((e = a(t, e)) != e) return t;
        if (e >= t.size || e < 0) return t.withMutations(function (t) {
          e < 0 ? ir(t, e).set(0, r) : ir(t, 0, e + 1).set(e, r);
        });
        e += t._origin;
        var n = t._tail,
            i = t._root,
            o = {
          value: !1
        };
        e >= or(t._capacity) ? n = er(n, t.__ownerID, 0, e, r, o) : i = er(i, t.__ownerID, t._level, e, r, o);
        if (!o.value) return t;
        if (t.__ownerID) return t._root = i, t._tail = n, t.__hash = void 0, t.__altered = !0, t;
        return Qe(t._origin, t._capacity, t._level, i, n);
      }(this, t, e);
    }, e.prototype.remove = function (t) {
      return this.has(t) ? 0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1) : this;
    }, e.prototype.insert = function (t, e) {
      return this.splice(t, 0, e);
    }, e.prototype.clear = function () {
      return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = 5, this._root = this._tail = this.__hash = void 0, this.__altered = !0, this) : tr();
    }, e.prototype.push = function () {
      var t = arguments,
          e = this.size;
      return this.withMutations(function (r) {
        ir(r, 0, e + t.length);

        for (var n = 0; n < t.length; n++) r.set(e + n, t[n]);
      });
    }, e.prototype.pop = function () {
      return ir(this, 0, -1);
    }, e.prototype.unshift = function () {
      var t = arguments;
      return this.withMutations(function (e) {
        ir(e, -t.length);

        for (var r = 0; r < t.length; r++) e.set(r, t[r]);
      });
    }, e.prototype.shift = function () {
      return ir(this, 1);
    }, e.prototype.concat = function () {
      for (var e = arguments, r = [], n = 0; n < arguments.length; n++) {
        var i = e[n],
            o = t("string" != typeof i && K(i) ? i : [i]);
        0 !== o.size && r.push(o);
      }

      return 0 === r.length ? this : 0 !== this.size || this.__ownerID || 1 !== r.length ? this.withMutations(function (t) {
        r.forEach(function (e) {
          return e.forEach(function (e) {
            return t.push(e);
          });
        });
      }) : this.constructor(r[0]);
    }, e.prototype.setSize = function (t) {
      return ir(this, 0, t);
    }, e.prototype.map = function (t, e) {
      var r = this;
      return this.withMutations(function (n) {
        for (var i = 0; i < r.size; i++) n.set(i, t.call(e, n.get(i), i, r));
      });
    }, e.prototype.slice = function (t, e) {
      var r = this.size;
      return c(t, e, r) ? this : ir(this, f(t, r), l(e, r));
    }, e.prototype.__iterator = function (t, e) {
      var r = e ? this.size : 0,
          n = $e(this, e);
      return new I(function () {
        var i = n();
        return i === Ye ? {
          value: void 0,
          done: !0
        } : M(t, e ? --r : r++, i);
      });
    }, e.prototype.__iterate = function (t, e) {
      for (var r, n = e ? this.size : 0, i = $e(this, e); (r = i()) !== Ye && !1 !== t(r, e ? --n : n++, this););

      return n;
    }, e.prototype.__ensureOwner = function (t) {
      return t === this.__ownerID ? this : t ? Qe(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : 0 === this.size ? tr() : (this.__ownerID = t, this.__altered = !1, this);
    }, e;
  }(b);

  Je.isList = Ve;
  var Ge = Je.prototype;
  Ge["@@__IMMUTABLE_LIST__@@"] = !0, Ge.delete = Ge.remove, Ge.merge = Ge.concat, Ge.setIn = ee, Ge.deleteIn = Ge.removeIn = ne, Ge.update = oe, Ge.updateIn = ue, Ge.mergeIn = _e, Ge.mergeDeepIn = me, Ge.withMutations = be, Ge.wasAltered = xe, Ge.asImmutable = we, Ge["@@transducer/init"] = Ge.asMutable = Se, Ge["@@transducer/step"] = function (t, e) {
    return t.push(e);
  }, Ge["@@transducer/result"] = function (t) {
    return t.asImmutable();
  };

  var Ze = function (t, e) {
    this.array = t, this.ownerID = e;
  };

  Ze.prototype.removeBefore = function (t, e, r) {
    if (r === e ? 1 << e : 0 === this.array.length) return this;
    var n = r >>> e & 31;
    if (n >= this.array.length) return new Ze([], t);
    var i,
        o = 0 === n;

    if (e > 0) {
      var u = this.array[n];
      if ((i = u && u.removeBefore(t, e - 5, r)) === u && o) return this;
    }

    if (o && !i) return this;
    var a = rr(this, t);
    if (!o) for (var s = 0; s < n; s++) a.array[s] = void 0;
    return i && (a.array[n] = i), a;
  }, Ze.prototype.removeAfter = function (t, e, r) {
    if (r === (e ? 1 << e : 0) || 0 === this.array.length) return this;
    var n,
        i = r - 1 >>> e & 31;
    if (i >= this.array.length) return this;

    if (e > 0) {
      var o = this.array[i];
      if ((n = o && o.removeAfter(t, e - 5, r)) === o && i === this.array.length - 1) return this;
    }

    var u = rr(this, t);
    return u.array.splice(i + 1), n && (u.array[i] = n), u;
  };
  var Xe,
      Ye = {};

  function $e(t, e) {
    var r = t._origin,
        n = t._capacity,
        i = or(n),
        o = t._tail;
    return u(t._root, t._level, 0);

    function u(t, a, s) {
      return 0 === a ? function (t, u) {
        var a = u === i ? o && o.array : t && t.array,
            s = u > r ? 0 : r - u,
            c = n - u;
        c > 32 && (c = 32);
        return function () {
          if (s === c) return Ye;
          var t = e ? --c : s++;
          return a && a[t];
        };
      }(t, s) : function (t, i, o) {
        var a,
            s = t && t.array,
            c = o > r ? 0 : r - o >> i,
            f = 1 + (n - o >> i);
        f > 32 && (f = 32);
        return function () {
          for (;;) {
            if (a) {
              var t = a();
              if (t !== Ye) return t;
              a = null;
            }

            if (c === f) return Ye;
            var r = e ? --f : c++;
            a = u(s && s[r], i - 5, o + (r << i));
          }
        };
      }(t, a, s);
    }
  }

  function Qe(t, e, r, n, i, o, u) {
    var a = Object.create(Ge);
    return a.size = e - t, a._origin = t, a._capacity = e, a._level = r, a._root = n, a._tail = i, a.__ownerID = o, a.__hash = u, a.__altered = !1, a;
  }

  function tr() {
    return Xe || (Xe = Qe(0, 0, 5));
  }

  function er(t, e, r, n, o, u) {
    var a,
        s = n >>> r & 31,
        c = t && s < t.array.length;
    if (!c && void 0 === o) return t;

    if (r > 0) {
      var f = t && t.array[s],
          l = er(f, e, r - 5, n, o, u);
      return l === f ? t : ((a = rr(t, e)).array[s] = l, a);
    }

    return c && t.array[s] === o ? t : (u && i(u), a = rr(t, e), void 0 === o && s === a.array.length - 1 ? a.array.pop() : a.array[s] = o, a);
  }

  function rr(t, e) {
    return e && t && e === t.ownerID ? t : new Ze(t ? t.array.slice() : [], e);
  }

  function nr(t, e) {
    if (e >= or(t._capacity)) return t._tail;

    if (e < 1 << t._level + 5) {
      for (var r = t._root, n = t._level; r && n > 0;) r = r.array[e >>> n & 31], n -= 5;

      return r;
    }
  }

  function ir(t, e, r) {
    void 0 !== e && (e |= 0), void 0 !== r && (r |= 0);
    var n = t.__ownerID || new o(),
        i = t._origin,
        u = t._capacity,
        a = i + e,
        s = void 0 === r ? u : r < 0 ? u + r : i + r;
    if (a === i && s === u) return t;
    if (a >= s) return t.clear();

    for (var c = t._level, f = t._root, l = 0; a + l < 0;) f = new Ze(f && f.array.length ? [void 0, f] : [], n), l += 1 << (c += 5);

    l && (a += l, i += l, s += l, u += l);

    for (var h = or(u), p = or(s); p >= 1 << c + 5;) f = new Ze(f && f.array.length ? [f] : [], n), c += 5;

    var d = t._tail,
        g = p < h ? nr(t, s - 1) : p > h ? new Ze([], n) : d;

    if (d && p > h && a < u && d.array.length) {
      for (var v = f = rr(f, n), y = c; y > 5; y -= 5) {
        var _ = h >>> y & 31;

        v = v.array[_] = rr(v.array[_], n);
      }

      v.array[h >>> 5 & 31] = d;
    }

    if (s < u && (g = g && g.removeAfter(n, 0, s)), a >= p) a -= p, s -= p, c = 5, f = null, g = g && g.removeBefore(n, 0, a);else if (a > i || p < h) {
      for (l = 0; f;) {
        var m = a >>> c & 31;
        if (m !== p >>> c & 31) break;
        m && (l += (1 << c) * m), c -= 5, f = f.array[m];
      }

      f && a > i && (f = f.removeBefore(n, c, a - l)), f && p < h && (f = f.removeAfter(n, c, p - l)), l && (a -= l, s -= l);
    }
    return t.__ownerID ? (t.size = s - a, t._origin = a, t._capacity = s, t._level = c, t._root = f, t._tail = g, t.__hash = void 0, t.__altered = !0, t) : Qe(a, s, c, f, g);
  }

  function or(t) {
    return t < 32 ? 0 : t - 1 >>> 5 << 5;
  }

  var ur,
      ar = function (t) {
    function e(t) {
      return null == t ? cr() : Y(t) ? t : cr().withMutations(function (e) {
        var r = m(t);
        Ut(r.size), r.forEach(function (t, r) {
          return e.set(r, t);
        });
      });
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.of = function () {
      return this(arguments);
    }, e.prototype.toString = function () {
      return this.__toString("OrderedMap {", "}");
    }, e.prototype.get = function (t, e) {
      var r = this._map.get(t);

      return void 0 !== r ? this._list.get(r)[1] : e;
    }, e.prototype.clear = function () {
      return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this.__altered = !0, this) : cr();
    }, e.prototype.set = function (t, e) {
      return fr(this, t, e);
    }, e.prototype.remove = function (t) {
      return fr(this, t, n);
    }, e.prototype.__iterate = function (t, e) {
      var r = this;
      return this._list.__iterate(function (e) {
        return e && t(e[1], e[0], r);
      }, e);
    }, e.prototype.__iterator = function (t, e) {
      return this._list.fromEntrySeq().__iterator(t, e);
    }, e.prototype.__ensureOwner = function (t) {
      if (t === this.__ownerID) return this;

      var e = this._map.__ensureOwner(t),
          r = this._list.__ensureOwner(t);

      return t ? sr(e, r, t, this.__hash) : 0 === this.size ? cr() : (this.__ownerID = t, this.__altered = !1, this._map = e, this._list = r, this);
    }, e;
  }(ke);

  function sr(t, e, r, n) {
    var i = Object.create(ar.prototype);
    return i.size = t ? t.size : 0, i._map = t, i._list = e, i.__ownerID = r, i.__hash = n, i.__altered = !1, i;
  }

  function cr() {
    return ur || (ur = sr(Re(), tr()));
  }

  function fr(t, e, r) {
    var i,
        o,
        u = t._map,
        a = t._list,
        s = u.get(e),
        c = void 0 !== s;

    if (r === n) {
      if (!c) return t;
      a.size >= 32 && a.size >= 2 * u.size ? (i = (o = a.filter(function (t, e) {
        return void 0 !== t && s !== e;
      })).toKeyedSeq().map(function (t) {
        return t[0];
      }).flip().toMap(), t.__ownerID && (i.__ownerID = o.__ownerID = t.__ownerID)) : (i = u.remove(e), o = s === a.size - 1 ? a.pop() : a.set(s, void 0));
    } else if (c) {
      if (r === a.get(s)[1]) return t;
      i = u, o = a.set(s, [e, r]);
    } else i = u.set(e, a.size), o = a.set(a.size, [e, r]);

    return t.__ownerID ? (t.size = i.size, t._map = i, t._list = o, t.__hash = void 0, t.__altered = !0, t) : sr(i, o);
  }

  ar.isOrderedMap = Y, ar.prototype[E] = !0, ar.prototype.delete = ar.prototype.remove;

  function lr(t) {
    return Boolean(t && t["@@__IMMUTABLE_STACK__@@"]);
  }

  var hr = function (t) {
    function e(t) {
      return null == t ? vr() : lr(t) ? t : vr().pushAll(t);
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.of = function () {
      return this(arguments);
    }, e.prototype.toString = function () {
      return this.__toString("Stack [", "]");
    }, e.prototype.get = function (t, e) {
      var r = this._head;

      for (t = a(this, t); r && t--;) r = r.next;

      return r ? r.value : e;
    }, e.prototype.peek = function () {
      return this._head && this._head.value;
    }, e.prototype.push = function () {
      var t = arguments;
      if (0 === arguments.length) return this;

      for (var e = this.size + arguments.length, r = this._head, n = arguments.length - 1; n >= 0; n--) r = {
        value: t[n],
        next: r
      };

      return this.__ownerID ? (this.size = e, this._head = r, this.__hash = void 0, this.__altered = !0, this) : gr(e, r);
    }, e.prototype.pushAll = function (e) {
      if (0 === (e = t(e)).size) return this;
      if (0 === this.size && lr(e)) return e;
      Ut(e.size);
      var r = this.size,
          n = this._head;
      return e.__iterate(function (t) {
        r++, n = {
          value: t,
          next: n
        };
      }, !0), this.__ownerID ? (this.size = r, this._head = n, this.__hash = void 0, this.__altered = !0, this) : gr(r, n);
    }, e.prototype.pop = function () {
      return this.slice(1);
    }, e.prototype.clear = function () {
      return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : vr();
    }, e.prototype.slice = function (e, r) {
      if (c(e, r, this.size)) return this;
      var n = f(e, this.size);
      if (l(r, this.size) !== this.size) return t.prototype.slice.call(this, e, r);

      for (var i = this.size - n, o = this._head; n--;) o = o.next;

      return this.__ownerID ? (this.size = i, this._head = o, this.__hash = void 0, this.__altered = !0, this) : gr(i, o);
    }, e.prototype.__ensureOwner = function (t) {
      return t === this.__ownerID ? this : t ? gr(this.size, this._head, t, this.__hash) : 0 === this.size ? vr() : (this.__ownerID = t, this.__altered = !1, this);
    }, e.prototype.__iterate = function (t, e) {
      var r = this;
      if (e) return new U(this.toArray()).__iterate(function (e, n) {
        return t(e, n, r);
      }, e);

      for (var n = 0, i = this._head; i && !1 !== t(i.value, n++, this);) i = i.next;

      return n;
    }, e.prototype.__iterator = function (t, e) {
      if (e) return new U(this.toArray()).__iterator(t, e);
      var r = 0,
          n = this._head;
      return new I(function () {
        if (n) {
          var e = n.value;
          return n = n.next, M(t, r++, e);
        }

        return {
          value: void 0,
          done: !0
        };
      });
    }, e;
  }(b);

  hr.isStack = lr;
  var pr,
      dr = hr.prototype;

  function gr(t, e, r, n) {
    var i = Object.create(dr);
    return i.size = t, i._head = e, i.__ownerID = r, i.__hash = n, i.__altered = !1, i;
  }

  function vr() {
    return pr || (pr = gr(0));
  }

  dr["@@__IMMUTABLE_STACK__@@"] = !0, dr.shift = dr.pop, dr.unshift = dr.push, dr.unshiftAll = dr.pushAll, dr.withMutations = be, dr.wasAltered = xe, dr.asImmutable = we, dr["@@transducer/init"] = dr.asMutable = Se, dr["@@transducer/step"] = function (t, e) {
    return t.unshift(e);
  }, dr["@@transducer/result"] = function (t) {
    return t.asImmutable();
  };

  function yr(t) {
    return Boolean(t && t["@@__IMMUTABLE_SET__@@"]);
  }

  function _r(t) {
    return yr(t) && O(t);
  }

  function mr(t, e) {
    if (t === e) return !0;
    if (!d(e) || void 0 !== t.size && void 0 !== e.size && t.size !== e.size || void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash || g(t) !== g(e) || v(t) !== v(e) || O(t) !== O(e)) return !1;
    if (0 === t.size && 0 === e.size) return !0;
    var r = !y(t);

    if (O(t)) {
      var i = t.entries();
      return e.every(function (t, e) {
        var n = i.next().value;
        return n && Q(n[1], t) && (r || Q(n[0], e));
      }) && i.next().done;
    }

    var o = !1;
    if (void 0 === t.size) if (void 0 === e.size) "function" == typeof t.cacheResult && t.cacheResult();else {
      o = !0;
      var u = t;
      t = e, e = u;
    }

    var a = !0,
        s = e.__iterate(function (e, i) {
      if (r ? !t.has(e) : o ? !Q(e, t.get(i, n)) : !Q(t.get(i, n), e)) return a = !1, !1;
    });

    return a && t.size === s;
  }

  function br(t, e) {
    var r = function (r) {
      t.prototype[r] = e[r];
    };

    return Object.keys(e).forEach(r), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(r), t;
  }

  function Sr(t) {
    if (!t || "object" != typeof t) return t;

    if (!d(t)) {
      if (!Vt(t)) return t;
      t = j(t);
    }

    if (g(t)) {
      var e = {};
      return t.__iterate(function (t, r) {
        e[r] = Sr(t);
      }), e;
    }

    var r = [];
    return t.__iterate(function (t) {
      r.push(Sr(t));
    }), r;
  }

  var wr = function (t) {
    function e(e) {
      return null == e ? Cr() : yr(e) && !O(e) ? e : Cr().withMutations(function (r) {
        var n = t(e);
        Ut(n.size), n.forEach(function (t) {
          return r.add(t);
        });
      });
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.of = function () {
      return this(arguments);
    }, e.fromKeys = function (t) {
      return this(m(t).keySeq());
    }, e.intersect = function (t) {
      return (t = _(t).toArray()).length ? kr.intersect.apply(e(t.pop()), t) : Cr();
    }, e.union = function (t) {
      return (t = _(t).toArray()).length ? kr.union.apply(e(t.pop()), t) : Cr();
    }, e.prototype.toString = function () {
      return this.__toString("Set {", "}");
    }, e.prototype.has = function (t) {
      return this._map.has(t);
    }, e.prototype.add = function (t) {
      return Er(this, this._map.set(t, t));
    }, e.prototype.remove = function (t) {
      return Er(this, this._map.remove(t));
    }, e.prototype.clear = function () {
      return Er(this, this._map.clear());
    }, e.prototype.map = function (t, e) {
      var r = this,
          n = !1,
          i = Er(this, this._map.mapEntries(function (i) {
        var o = i[1],
            u = t.call(e, o, o, r);
        return u !== o && (n = !0), [u, u];
      }, e));
      return n ? i : this;
    }, e.prototype.union = function () {
      for (var e = [], r = arguments.length; r--;) e[r] = arguments[r];

      return 0 === (e = e.filter(function (t) {
        return 0 !== t.size;
      })).length ? this : 0 !== this.size || this.__ownerID || 1 !== e.length ? this.withMutations(function (r) {
        for (var n = 0; n < e.length; n++) t(e[n]).forEach(function (t) {
          return r.add(t);
        });
      }) : this.constructor(e[0]);
    }, e.prototype.intersect = function () {
      for (var e = [], r = arguments.length; r--;) e[r] = arguments[r];

      if (0 === e.length) return this;
      e = e.map(function (e) {
        return t(e);
      });
      var n = [];
      return this.forEach(function (t) {
        e.every(function (e) {
          return e.includes(t);
        }) || n.push(t);
      }), this.withMutations(function (t) {
        n.forEach(function (e) {
          t.remove(e);
        });
      });
    }, e.prototype.subtract = function () {
      for (var e = [], r = arguments.length; r--;) e[r] = arguments[r];

      if (0 === e.length) return this;
      e = e.map(function (e) {
        return t(e);
      });
      var n = [];
      return this.forEach(function (t) {
        e.some(function (e) {
          return e.includes(t);
        }) && n.push(t);
      }), this.withMutations(function (t) {
        n.forEach(function (e) {
          t.remove(e);
        });
      });
    }, e.prototype.sort = function (t) {
      return Vr(Mt(this, t));
    }, e.prototype.sortBy = function (t, e) {
      return Vr(Mt(this, e, t));
    }, e.prototype.wasAltered = function () {
      return this._map.wasAltered();
    }, e.prototype.__iterate = function (t, e) {
      var r = this;
      return this._map.__iterate(function (e) {
        return t(e, e, r);
      }, e);
    }, e.prototype.__iterator = function (t, e) {
      return this._map.__iterator(t, e);
    }, e.prototype.__ensureOwner = function (t) {
      if (t === this.__ownerID) return this;

      var e = this._map.__ensureOwner(t);

      return t ? this.__make(e, t) : 0 === this.size ? this.__empty() : (this.__ownerID = t, this._map = e, this);
    }, e;
  }(S);

  wr.isSet = yr;
  var xr,
      kr = wr.prototype;

  function Er(t, e) {
    return t.__ownerID ? (t.size = e.size, t._map = e, t) : e === t._map ? t : 0 === e.size ? t.__empty() : t.__make(e);
  }

  function Or(t, e) {
    var r = Object.create(kr);
    return r.size = t ? t.size : 0, r._map = t, r.__ownerID = e, r;
  }

  function Cr() {
    return xr || (xr = Or(Re()));
  }

  kr["@@__IMMUTABLE_SET__@@"] = !0, kr.delete = kr.remove, kr.merge = kr.concat = kr.union, kr.withMutations = be, kr.asImmutable = we, kr["@@transducer/init"] = kr.asMutable = Se, kr["@@transducer/step"] = function (t, e) {
    return t.add(e);
  }, kr["@@transducer/result"] = function (t) {
    return t.asImmutable();
  }, kr.__empty = Cr, kr.__make = Or;

  var Dr,
      Ir = function (t) {
    function e(t, r, n) {
      if (!(this instanceof e)) return new e(t, r, n);

      if (Pt(0 !== n, "Cannot step a Range by 0"), t = t || 0, void 0 === r && (r = 1 / 0), n = void 0 === n ? 1 : Math.abs(n), r < t && (n = -n), this._start = t, this._end = r, this._step = n, this.size = Math.max(0, Math.ceil((r - t) / n - 1) + 1), 0 === this.size) {
        if (Dr) return Dr;
        Dr = this;
      }
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.toString = function () {
      return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]";
    }, e.prototype.get = function (t, e) {
      return this.has(t) ? this._start + a(this, t) * this._step : e;
    }, e.prototype.includes = function (t) {
      var e = (t - this._start) / this._step;
      return e >= 0 && e < this.size && e === Math.floor(e);
    }, e.prototype.slice = function (t, r) {
      return c(t, r, this.size) ? this : (t = f(t, this.size), (r = l(r, this.size)) <= t ? new e(0, 0) : new e(this.get(t, this._end), this.get(r, this._end), this._step));
    }, e.prototype.indexOf = function (t) {
      var e = t - this._start;

      if (e % this._step == 0) {
        var r = e / this._step;
        if (r >= 0 && r < this.size) return r;
      }

      return -1;
    }, e.prototype.lastIndexOf = function (t) {
      return this.indexOf(t);
    }, e.prototype.__iterate = function (t, e) {
      for (var r = this.size, n = this._step, i = e ? this._start + (r - 1) * n : this._start, o = 0; o !== r && !1 !== t(i, e ? r - ++o : o++, this);) i += e ? -n : n;

      return o;
    }, e.prototype.__iterator = function (t, e) {
      var r = this.size,
          n = this._step,
          i = e ? this._start + (r - 1) * n : this._start,
          o = 0;
      return new I(function () {
        if (o === r) return {
          value: void 0,
          done: !0
        };
        var u = i;
        return i += e ? -n : n, M(t, e ? r - ++o : o++, u);
      });
    }, e.prototype.equals = function (t) {
      return t instanceof e ? this._start === t._start && this._end === t._end && this._step === t._step : mr(this, t);
    }, e;
  }(F);

  function Mr(t, e, r) {
    for (var i = qt(e), o = 0; o !== i.length;) if ((t = Zt(t, i[o++], n)) === n) return r;

    return t;
  }

  function Ar(t, e) {
    return Mr(this, t, e);
  }

  function Kr(t, e) {
    return Mr(t, e, n) !== n;
  }

  function Tr() {
    Ut(this.size);
    var t = {};
    return this.__iterate(function (e, r) {
      t[r] = e;
    }), t;
  }

  _.isIterable = d, _.isKeyed = g, _.isIndexed = v, _.isAssociative = y, _.isOrdered = O, _.Iterator = I, br(_, {
    toArray: function () {
      Ut(this.size);
      var t = new Array(this.size || 0),
          e = g(this),
          r = 0;
      return this.__iterate(function (n, i) {
        t[r++] = e ? [i, n] : n;
      }), t;
    },
    toIndexedSeq: function () {
      return new mt(this);
    },
    toJS: function () {
      return Sr(this);
    },
    toKeyedSeq: function () {
      return new _t(this, !0);
    },
    toMap: function () {
      return ke(this.toKeyedSeq());
    },
    toObject: Tr,
    toOrderedMap: function () {
      return ar(this.toKeyedSeq());
    },
    toOrderedSet: function () {
      return Vr(g(this) ? this.valueSeq() : this);
    },
    toSet: function () {
      return wr(g(this) ? this.valueSeq() : this);
    },
    toSetSeq: function () {
      return new bt(this);
    },
    toSeq: function () {
      return v(this) ? this.toIndexedSeq() : g(this) ? this.toKeyedSeq() : this.toSetSeq();
    },
    toStack: function () {
      return hr(g(this) ? this.valueSeq() : this);
    },
    toList: function () {
      return Je(g(this) ? this.valueSeq() : this);
    },
    toString: function () {
      return "[Collection]";
    },
    __toString: function (t, e) {
      return 0 === this.size ? t + e : t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e;
    },
    concat: function () {
      for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];

      return zt(this, Dt(this, t));
    },
    includes: function (t) {
      return this.some(function (e) {
        return Q(e, t);
      });
    },
    entries: function () {
      return this.__iterator(2);
    },
    every: function (t, e) {
      Ut(this.size);
      var r = !0;
      return this.__iterate(function (n, i, o) {
        if (!t.call(e, n, i, o)) return r = !1, !1;
      }), r;
    },
    filter: function (t, e) {
      return zt(this, Et(this, t, e, !0));
    },
    find: function (t, e, r) {
      var n = this.findEntry(t, e);
      return n ? n[1] : r;
    },
    forEach: function (t, e) {
      return Ut(this.size), this.__iterate(e ? t.bind(e) : t);
    },
    join: function (t) {
      Ut(this.size), t = void 0 !== t ? "" + t : ",";
      var e = "",
          r = !0;
      return this.__iterate(function (n) {
        r ? r = !1 : e += t, e += null != n ? n.toString() : "";
      }), e;
    },
    keys: function () {
      return this.__iterator(0);
    },
    map: function (t, e) {
      return zt(this, xt(this, t, e));
    },
    reduce: function (t, e, r) {
      return jr(this, t, e, r, arguments.length < 2, !1);
    },
    reduceRight: function (t, e, r) {
      return jr(this, t, e, r, arguments.length < 2, !0);
    },
    reverse: function () {
      return zt(this, kt(this, !0));
    },
    slice: function (t, e) {
      return zt(this, Ot(this, t, e, !0));
    },
    some: function (t, e) {
      return !this.every(Pr(t), e);
    },
    sort: function (t) {
      return zt(this, Mt(this, t));
    },
    values: function () {
      return this.__iterator(1);
    },
    butLast: function () {
      return this.slice(0, -1);
    },
    isEmpty: function () {
      return void 0 !== this.size ? 0 === this.size : !this.some(function () {
        return !0;
      });
    },
    count: function (t, e) {
      return u(t ? this.toSeq().filter(t, e) : this);
    },
    countBy: function (t, e) {
      return function (t, e, r) {
        var n = ke().asMutable();
        return t.__iterate(function (i, o) {
          n.update(e.call(r, i, o, t), 0, function (t) {
            return t + 1;
          });
        }), n.asImmutable();
      }(this, t, e);
    },
    equals: function (t) {
      return mr(this, t);
    },
    entrySeq: function () {
      var t = this;
      if (t._cache) return new U(t._cache);
      var e = t.toSeq().map(Fr).toIndexedSeq();
      return e.fromEntrySeq = function () {
        return t.toSeq();
      }, e;
    },
    filterNot: function (t, e) {
      return this.filter(Pr(t), e);
    },
    findEntry: function (t, e, r) {
      var n = r;
      return this.__iterate(function (r, i, o) {
        if (t.call(e, r, i, o)) return n = [i, r], !1;
      }), n;
    },
    findKey: function (t, e) {
      var r = this.findEntry(t, e);
      return r && r[0];
    },
    findLast: function (t, e, r) {
      return this.toKeyedSeq().reverse().find(t, e, r);
    },
    findLastEntry: function (t, e, r) {
      return this.toKeyedSeq().reverse().findEntry(t, e, r);
    },
    findLastKey: function (t, e) {
      return this.toKeyedSeq().reverse().findKey(t, e);
    },
    first: function (t) {
      return this.find(s, null, t);
    },
    flatMap: function (t, e) {
      return zt(this, function (t, e, r) {
        var n = Rt(t);
        return t.toSeq().map(function (i, o) {
          return n(e.call(r, i, o, t));
        }).flatten(!0);
      }(this, t, e));
    },
    flatten: function (t) {
      return zt(this, It(this, t, !0));
    },
    fromEntrySeq: function () {
      return new St(this);
    },
    get: function (t, e) {
      return this.find(function (e, r) {
        return Q(r, t);
      }, void 0, e);
    },
    getIn: Ar,
    groupBy: function (t, e) {
      return function (t, e, r) {
        var n = g(t),
            i = (O(t) ? ar() : ke()).asMutable();

        t.__iterate(function (o, u) {
          i.update(e.call(r, o, u, t), function (t) {
            return (t = t || []).push(n ? [u, o] : o), t;
          });
        });

        var o = Rt(t);
        return i.map(function (e) {
          return zt(t, o(e));
        }).asImmutable();
      }(this, t, e);
    },
    has: function (t) {
      return this.get(t, n) !== n;
    },
    hasIn: function (t) {
      return Kr(this, t);
    },
    isSubset: function (t) {
      return t = "function" == typeof t.includes ? t : _(t), this.every(function (e) {
        return t.includes(e);
      });
    },
    isSuperset: function (t) {
      return (t = "function" == typeof t.isSubset ? t : _(t)).isSubset(this);
    },
    keyOf: function (t) {
      return this.findKey(function (e) {
        return Q(e, t);
      });
    },
    keySeq: function () {
      return this.toSeq().map(Nr).toIndexedSeq();
    },
    last: function (t) {
      return this.toSeq().reverse().first(t);
    },
    lastKeyOf: function (t) {
      return this.toKeyedSeq().reverse().keyOf(t);
    },
    max: function (t) {
      return At(this, t);
    },
    maxBy: function (t, e) {
      return At(this, e, t);
    },
    min: function (t) {
      return At(this, t ? Ur(t) : Hr);
    },
    minBy: function (t, e) {
      return At(this, e ? Ur(e) : Hr, t);
    },
    rest: function () {
      return this.slice(1);
    },
    skip: function (t) {
      return 0 === t ? this : this.slice(Math.max(0, t));
    },
    skipLast: function (t) {
      return 0 === t ? this : this.slice(0, -Math.max(0, t));
    },
    skipWhile: function (t, e) {
      return zt(this, Ct(this, t, e, !0));
    },
    skipUntil: function (t, e) {
      return this.skipWhile(Pr(t), e);
    },
    sortBy: function (t, e) {
      return zt(this, Mt(this, e, t));
    },
    take: function (t) {
      return this.slice(0, Math.max(0, t));
    },
    takeLast: function (t) {
      return this.slice(-Math.max(0, t));
    },
    takeWhile: function (t, e) {
      return zt(this, function (t, e, r) {
        var n = Lt(t);
        return n.__iterateUncached = function (n, i) {
          var o = this;
          if (i) return this.cacheResult().__iterate(n, i);
          var u = 0;
          return t.__iterate(function (t, i, a) {
            return e.call(r, t, i, a) && ++u && n(t, i, o);
          }), u;
        }, n.__iteratorUncached = function (n, i) {
          var o = this;
          if (i) return this.cacheResult().__iterator(n, i);

          var u = t.__iterator(2, i),
              a = !0;

          return new I(function () {
            if (!a) return {
              value: void 0,
              done: !0
            };
            var t = u.next();
            if (t.done) return t;
            var i = t.value,
                s = i[0],
                c = i[1];
            return e.call(r, c, s, o) ? 2 === n ? t : M(n, s, c, t) : (a = !1, {
              value: void 0,
              done: !0
            });
          });
        }, n;
      }(this, t, e));
    },
    takeUntil: function (t, e) {
      return this.takeWhile(Pr(t), e);
    },
    update: function (t) {
      return t(this);
    },
    valueSeq: function () {
      return this.toIndexedSeq();
    },
    hashCode: function () {
      return this.__hash || (this.__hash = function (t) {
        if (t.size === 1 / 0) return 0;
        var e = O(t),
            r = g(t),
            n = e ? 1 : 0;
        return function (t, e) {
          return e = tt(e, 3432918353), e = tt(e << 15 | e >>> -15, 461845907), e = tt(e << 13 | e >>> -13, 5), e = tt((e = (e + 3864292196 | 0) ^ t) ^ e >>> 16, 2246822507), e = et((e = tt(e ^ e >>> 13, 3266489909)) ^ e >>> 16);
        }(t.__iterate(r ? e ? function (t, e) {
          n = 31 * n + Wr(nt(t), nt(e)) | 0;
        } : function (t, e) {
          n = n + Wr(nt(t), nt(e)) | 0;
        } : e ? function (t) {
          n = 31 * n + nt(t) | 0;
        } : function (t) {
          n = n + nt(t) | 0;
        }), n);
      }(this));
    }
  });
  var zr = _.prototype;
  zr["@@__IMMUTABLE_ITERABLE__@@"] = !0, zr[D] = zr.values, zr.toJSON = zr.toArray, zr.__toStringMapper = Jt, zr.inspect = zr.toSource = function () {
    return this.toString();
  }, zr.chain = zr.flatMap, zr.contains = zr.includes, br(m, {
    flip: function () {
      return zt(this, wt(this));
    },
    mapEntries: function (t, e) {
      var r = this,
          n = 0;
      return zt(this, this.toSeq().map(function (i, o) {
        return t.call(e, [o, i], n++, r);
      }).fromEntrySeq());
    },
    mapKeys: function (t, e) {
      var r = this;
      return zt(this, this.toSeq().flip().map(function (n, i) {
        return t.call(e, n, i, r);
      }).flip());
    }
  });
  var Br = m.prototype;
  Br["@@__IMMUTABLE_KEYED__@@"] = !0, Br[D] = zr.entries, Br.toJSON = Tr, Br.__toStringMapper = function (t, e) {
    return Jt(e) + ": " + Jt(t);
  }, br(b, {
    toKeyedSeq: function () {
      return new _t(this, !1);
    },
    filter: function (t, e) {
      return zt(this, Et(this, t, e, !1));
    },
    findIndex: function (t, e) {
      var r = this.findEntry(t, e);
      return r ? r[0] : -1;
    },
    indexOf: function (t) {
      var e = this.keyOf(t);
      return void 0 === e ? -1 : e;
    },
    lastIndexOf: function (t) {
      var e = this.lastKeyOf(t);
      return void 0 === e ? -1 : e;
    },
    reverse: function () {
      return zt(this, kt(this, !1));
    },
    slice: function (t, e) {
      return zt(this, Ot(this, t, e, !1));
    },
    splice: function (t, e) {
      var r = arguments.length;
      if (e = Math.max(e || 0, 0), 0 === r || 2 === r && !e) return this;
      t = f(t, t < 0 ? this.count() : this.size);
      var n = this.slice(0, t);
      return zt(this, 1 === r ? n : n.concat(Ft(arguments, 2), this.slice(t + e)));
    },
    findLastIndex: function (t, e) {
      var r = this.findLastEntry(t, e);
      return r ? r[0] : -1;
    },
    first: function (t) {
      return this.get(0, t);
    },
    flatten: function (t) {
      return zt(this, It(this, t, !1));
    },
    get: function (t, e) {
      return (t = a(this, t)) < 0 || this.size === 1 / 0 || void 0 !== this.size && t > this.size ? e : this.find(function (e, r) {
        return r === t;
      }, void 0, e);
    },
    has: function (t) {
      return (t = a(this, t)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t));
    },
    interpose: function (t) {
      return zt(this, function (t, e) {
        var r = Lt(t);
        return r.size = t.size && 2 * t.size - 1, r.__iterateUncached = function (r, n) {
          var i = this,
              o = 0;
          return t.__iterate(function (t) {
            return (!o || !1 !== r(e, o++, i)) && !1 !== r(t, o++, i);
          }, n), o;
        }, r.__iteratorUncached = function (r, n) {
          var i,
              o = t.__iterator(1, n),
              u = 0;

          return new I(function () {
            return (!i || u % 2) && (i = o.next()).done ? i : u % 2 ? M(r, u++, e) : M(r, u++, i.value, i);
          });
        }, r;
      }(this, t));
    },
    interleave: function () {
      var t = [this].concat(Ft(arguments)),
          e = Tt(this.toSeq(), F.of, t),
          r = e.flatten(!0);
      return e.size && (r.size = e.size * t.length), zt(this, r);
    },
    keySeq: function () {
      return Ir(0, this.size);
    },
    last: function (t) {
      return this.get(-1, t);
    },
    skipWhile: function (t, e) {
      return zt(this, Ct(this, t, e, !1));
    },
    zip: function () {
      var t = [this].concat(Ft(arguments));
      return zt(this, Tt(this, qr, t));
    },
    zipAll: function () {
      var t = [this].concat(Ft(arguments));
      return zt(this, Tt(this, qr, t, !0));
    },
    zipWith: function (t) {
      var e = Ft(arguments);
      return e[0] = this, zt(this, Tt(this, t, e));
    }
  });
  var Rr = b.prototype;
  Rr["@@__IMMUTABLE_INDEXED__@@"] = !0, Rr[E] = !0, br(S, {
    get: function (t, e) {
      return this.has(t) ? t : e;
    },
    includes: function (t) {
      return this.has(t);
    },
    keySeq: function () {
      return this.valueSeq();
    }
  });
  var Lr = S.prototype;

  function jr(t, e, r, n, i, o) {
    return Ut(t.size), t.__iterate(function (t, o, u) {
      i ? (i = !1, r = t) : r = e.call(n, r, t, o, u);
    }, o), r;
  }

  function Nr(t, e) {
    return e;
  }

  function Fr(t, e) {
    return [e, t];
  }

  function Pr(t) {
    return function () {
      return !t.apply(this, arguments);
    };
  }

  function Ur(t) {
    return function () {
      return -t.apply(this, arguments);
    };
  }

  function qr() {
    return Ft(arguments);
  }

  function Hr(t, e) {
    return t < e ? 1 : t > e ? -1 : 0;
  }

  function Wr(t, e) {
    return t ^ e + 2654435769 + (t << 6) + (t >> 2) | 0;
  }

  Lr.has = zr.includes, Lr.contains = Lr.includes, Lr.keys = Lr.values, br(N, Br), br(F, Rr), br(P, Lr);

  var Vr = function (t) {
    function e(t) {
      return null == t ? Xr() : _r(t) ? t : Xr().withMutations(function (e) {
        var r = S(t);
        Ut(r.size), r.forEach(function (t) {
          return e.add(t);
        });
      });
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.of = function () {
      return this(arguments);
    }, e.fromKeys = function (t) {
      return this(m(t).keySeq());
    }, e.prototype.toString = function () {
      return this.__toString("OrderedSet {", "}");
    }, e;
  }(wr);

  Vr.isOrderedSet = _r;
  var Jr,
      Gr = Vr.prototype;

  function Zr(t, e) {
    var r = Object.create(Gr);
    return r.size = t ? t.size : 0, r._map = t, r.__ownerID = e, r;
  }

  function Xr() {
    return Jr || (Jr = Zr(cr()));
  }

  Gr[E] = !0, Gr.zip = Rr.zip, Gr.zipWith = Rr.zipWith, Gr.zipAll = Rr.zipAll, Gr.__empty = Xr, Gr.__make = Zr;

  var Yr = function (t, e) {
    var r;
    !function (t) {
      if (x(t)) throw new Error("Can not call `Record` with an immutable Record as default values. Use a plain javascript object instead.");
      if (k(t)) throw new Error("Can not call `Record` with an immutable Collection as default values. Use a plain javascript object instead.");
      if (null === t || "object" != typeof t) throw new Error("Can not call `Record` with a non-object as default values. Use a plain javascript object instead.");
    }(t);

    var n = function (o) {
      var u = this;
      if (o instanceof n) return o;
      if (!(this instanceof n)) return new n(o);

      if (!r) {
        r = !0;
        var a = Object.keys(t),
            s = i._indices = {};
        i._name = e, i._keys = a, i._defaultValues = t;

        for (var c = 0; c < a.length; c++) {
          var f = a[c];
          s[f] = c, i[f] ? "object" == typeof console && console.warn && console.warn("Cannot define " + tn(this) + ' with property "' + f + '" since that property name is part of the Record API.') : rn(i, f);
        }
      }

      return this.__ownerID = void 0, this._values = Je().withMutations(function (t) {
        t.setSize(u._keys.length), m(o).forEach(function (e, r) {
          t.set(u._indices[r], e === u._defaultValues[r] ? void 0 : e);
        });
      }), this;
    },
        i = n.prototype = Object.create($r);

    return i.constructor = n, e && (n.displayName = e), n;
  };

  Yr.prototype.toString = function () {
    for (var t, e = tn(this) + " { ", r = this._keys, n = 0, i = r.length; n !== i; n++) e += (n ? ", " : "") + (t = r[n]) + ": " + Jt(this.get(t));

    return e + " }";
  }, Yr.prototype.equals = function (t) {
    return this === t || t && en(this).equals(en(t));
  }, Yr.prototype.hashCode = function () {
    return en(this).hashCode();
  }, Yr.prototype.has = function (t) {
    return this._indices.hasOwnProperty(t);
  }, Yr.prototype.get = function (t, e) {
    if (!this.has(t)) return e;

    var r = this._indices[t],
        n = this._values.get(r);

    return void 0 === n ? this._defaultValues[t] : n;
  }, Yr.prototype.set = function (t, e) {
    if (this.has(t)) {
      var r = this._values.set(this._indices[t], e === this._defaultValues[t] ? void 0 : e);

      if (r !== this._values && !this.__ownerID) return Qr(this, r);
    }

    return this;
  }, Yr.prototype.remove = function (t) {
    return this.set(t);
  }, Yr.prototype.clear = function () {
    var t = this._values.clear().setSize(this._keys.length);

    return this.__ownerID ? this : Qr(this, t);
  }, Yr.prototype.wasAltered = function () {
    return this._values.wasAltered();
  }, Yr.prototype.toSeq = function () {
    return en(this);
  }, Yr.prototype.toJS = function () {
    return Sr(this);
  }, Yr.prototype.entries = function () {
    return this.__iterator(2);
  }, Yr.prototype.__iterator = function (t, e) {
    return en(this).__iterator(t, e);
  }, Yr.prototype.__iterate = function (t, e) {
    return en(this).__iterate(t, e);
  }, Yr.prototype.__ensureOwner = function (t) {
    if (t === this.__ownerID) return this;

    var e = this._values.__ensureOwner(t);

    return t ? Qr(this, e, t) : (this.__ownerID = t, this._values = e, this);
  }, Yr.isRecord = x, Yr.getDescriptiveName = tn;
  var $r = Yr.prototype;

  function Qr(t, e, r) {
    var n = Object.create(Object.getPrototypeOf(t));
    return n._values = e, n.__ownerID = r, n;
  }

  function tn(t) {
    return t.constructor.displayName || t.constructor.name || "Record";
  }

  function en(t) {
    return J(t._keys.map(function (e) {
      return [e, t.get(e)];
    }));
  }

  function rn(t, e) {
    try {
      Object.defineProperty(t, e, {
        get: function () {
          return this.get(e);
        },
        set: function (t) {
          Pt(this.__ownerID, "Cannot set on an immutable record."), this.set(e, t);
        }
      });
    } catch (t) {}
  }

  $r["@@__IMMUTABLE_RECORD__@@"] = !0, $r.delete = $r.remove, $r.deleteIn = $r.removeIn = ne, $r.getIn = Ar, $r.hasIn = zr.hasIn, $r.merge = ae, $r.mergeWith = se, $r.mergeIn = _e, $r.mergeDeep = ve, $r.mergeDeepWith = ye, $r.mergeDeepIn = me, $r.setIn = ee, $r.update = oe, $r.updateIn = ue, $r.withMutations = be, $r.asMutable = Se, $r.asImmutable = we, $r[D] = $r.entries, $r.toJSON = $r.toObject = zr.toObject, $r.inspect = $r.toSource = function () {
    return this.toString();
  };

  var nn,
      on = function (t) {
    function e(t, r) {
      if (!(this instanceof e)) return new e(t, r);

      if (this._value = t, this.size = void 0 === r ? 1 / 0 : Math.max(0, r), 0 === this.size) {
        if (nn) return nn;
        nn = this;
      }
    }

    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.toString = function () {
      return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
    }, e.prototype.get = function (t, e) {
      return this.has(t) ? this._value : e;
    }, e.prototype.includes = function (t) {
      return Q(this._value, t);
    }, e.prototype.slice = function (t, r) {
      var n = this.size;
      return c(t, r, n) ? this : new e(this._value, l(r, n) - f(t, n));
    }, e.prototype.reverse = function () {
      return this;
    }, e.prototype.indexOf = function (t) {
      return Q(this._value, t) ? 0 : -1;
    }, e.prototype.lastIndexOf = function (t) {
      return Q(this._value, t) ? this.size : -1;
    }, e.prototype.__iterate = function (t, e) {
      for (var r = this.size, n = 0; n !== r && !1 !== t(this._value, e ? r - ++n : n++, this););

      return n;
    }, e.prototype.__iterator = function (t, e) {
      var r = this,
          n = this.size,
          i = 0;
      return new I(function () {
        return i === n ? {
          value: void 0,
          done: !0
        } : M(t, e ? n - ++i : i++, r._value);
      });
    }, e.prototype.equals = function (t) {
      return t instanceof e ? Q(this._value, t._value) : mr(t);
    }, e;
  }(F);

  function un(t, e) {
    return function t(e, r, n, i, o, u) {
      if ("string" != typeof n && !k(n) && (L(n) || K(n) || Wt(n))) {
        if (~e.indexOf(n)) throw new TypeError("Cannot convert circular structure to Immutable");
        e.push(n), o && "" !== i && o.push(i);
        var a = r.call(u, i, j(n).map(function (i, u) {
          return t(e, r, i, u, o, n);
        }), o && o.slice());
        return e.pop(), o && o.pop(), a;
      }

      return n;
    }([], e || an, t, "", e && e.length > 2 ? [] : void 0, {
      "": t
    });
  }

  function an(t, e) {
    return v(e) ? e.toList() : g(e) ? e.toMap() : e.toSet();
  }

  var sn = "4.0.0",
      cn = {
    version: sn,
    Collection: _,
    Iterable: _,
    Seq: j,
    Map: ke,
    OrderedMap: ar,
    List: Je,
    Stack: hr,
    Set: wr,
    OrderedSet: Vr,
    Record: Yr,
    Range: Ir,
    Repeat: on,
    is: Q,
    fromJS: un,
    hash: nt,
    isImmutable: k,
    isCollection: d,
    isKeyed: g,
    isIndexed: v,
    isAssociative: y,
    isOrdered: O,
    isValueObject: $,
    isPlainObject: Wt,
    isSeq: w,
    isList: Ve,
    isMap: X,
    isOrderedMap: Y,
    isStack: lr,
    isSet: yr,
    isOrderedSet: _r,
    isRecord: x,
    get: Zt,
    getIn: Mr,
    has: Gt,
    hasIn: Kr,
    merge: fe,
    mergeDeep: he,
    mergeWith: le,
    mergeDeepWith: pe,
    remove: Yt,
    removeIn: re,
    set: $t,
    setIn: te,
    update: ie,
    updateIn: Qt
  },
      fn = _;
  e.default = cn;
}, function (t, e) {
  t.exports = function (t, e) {
    return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {
      raw: {
        value: Object.freeze(e)
      }
    }));
  }, t.exports.__esModule = !0, t.exports.default = t.exports;
},,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, r) {
  "use strict";

  function n(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), n.forEach(function (e) {
        i(t, e, r[e]);
      });
    }

    return t;
  }

  function i(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var o = r(432),
      u = r(420),
      a = r(427),
      s = r(421),
      c = r(417),
      f = r(415),
      l = r(422),
      h = r(426),
      p = r(413),
      d = r(550),
      g = h("draft_tree_data_support"),
      v = g ? s : a,
      y = p.List,
      _ = p.Repeat,
      m = {
    insertAtomicBlock: function (t, e, r) {
      var i = t.getCurrentContent(),
          a = t.getSelection(),
          s = c.removeRange(i, a, "backward"),
          h = s.getSelectionAfter(),
          p = c.splitBlock(s, h),
          d = p.getSelectionAfter(),
          m = c.setBlockType(p, d, "atomic"),
          b = u.create({
        entity: e
      }),
          S = {
        key: l(),
        type: "atomic",
        text: r,
        characterList: y(_(b, r.length))
      },
          w = {
        key: l(),
        type: "unstyled"
      };
      g && (S = n({}, S, {
        nextSibling: w.key
      }), w = n({}, w, {
        prevSibling: S.key
      }));
      var x = [new v(S), new v(w)],
          k = o.createFromArray(x),
          E = c.replaceWithFragment(m, d, k),
          O = E.merge({
        selectionBefore: a,
        selectionAfter: E.getSelectionAfter().set("hasFocus", !0)
      });
      return f.push(t, O, "insert-fragment");
    },
    moveAtomicBlock: function (t, e, r, n) {
      var i,
          o = t.getCurrentContent(),
          u = t.getSelection();

      if ("before" === n || "after" === n) {
        var a = o.getBlockForKey("before" === n ? r.getStartKey() : r.getEndKey());
        i = d(o, e, a, n);
      } else {
        var s = c.removeRange(o, r, "backward"),
            l = s.getSelectionAfter(),
            h = s.getBlockForKey(l.getFocusKey());
        if (0 === l.getStartOffset()) i = d(s, e, h, "before");else if (l.getEndOffset() === h.getLength()) i = d(s, e, h, "after");else {
          var p = c.splitBlock(s, l),
              g = p.getSelectionAfter(),
              v = p.getBlockForKey(g.getFocusKey());
          i = d(p, e, v, "before");
        }
      }

      var y = i.merge({
        selectionBefore: u,
        selectionAfter: i.getSelectionAfter().set("hasFocus", !0)
      });
      return f.push(t, y, "move-block");
    }
  };
  t.exports = m;
}, function (t, e, r) {
  "use strict";

  var n = r(420),
      i = r(413).Map,
      o = {
    add: function (t, e, r) {
      return u(t, e, r, !0);
    },
    remove: function (t, e, r) {
      return u(t, e, r, !1);
    }
  };

  function u(t, e, r, o) {
    var u = t.getBlockMap(),
        a = e.getStartKey(),
        s = e.getStartOffset(),
        c = e.getEndKey(),
        f = e.getEndOffset(),
        l = u.skipUntil(function (t, e) {
      return e === a;
    }).takeUntil(function (t, e) {
      return e === c;
    }).concat(i([[c, u.get(c)]])).map(function (t, e) {
      var i, u;
      a === c ? (i = s, u = f) : (i = e === a ? s : 0, u = e === c ? f : t.getLength());

      for (var l, h = t.getCharacterList(); i < u;) l = h.get(i), h = h.set(i, o ? n.applyStyle(l, r) : n.removeStyle(l, r)), i++;

      return t.set("characterList", h);
    });
    return t.merge({
      blockMap: u.merge(l),
      selectionBefore: e,
      selectionAfter: e
    });
  }

  t.exports = o;
}, function (t, e, r) {
  "use strict";

  var n = r(538),
      i = r(413);

  t.exports = function (t, e, r) {
    var o = t.getBlockMap(),
        u = e.getStartKey(),
        a = e.getStartOffset(),
        s = e.getEndKey(),
        c = e.getEndOffset(),
        f = o.skipUntil(function (t, e) {
      return e === u;
    }).takeUntil(function (t, e) {
      return e === s;
    }).toOrderedMap().merge(i.OrderedMap([[s, o.get(s)]])).map(function (t, e) {
      var i = e === u ? a : 0,
          o = e === s ? c : t.getLength();
      return n(t, i, o, r);
    });
    return t.merge({
      blockMap: o.merge(f),
      selectionBefore: e,
      selectionAfter: e
    });
  };
}, function (t, e, r) {
  "use strict";

  var n = r(420);

  t.exports = function (t, e, r, i) {
    for (var o = e, u = t.getCharacterList(); o < r;) u = u.set(o, n.applyEntity(u.get(o), i)), o++;

    return t.set("characterList", u);
  };
}, function (t, e, r) {
  "use strict";

  var n = r(540),
      i = r(541),
      o = r(414);

  function u(t, e, r, u, a, s, c) {
    var f = r.getStartOffset(),
        l = r.getEndOffset(),
        h = t.__get(a).getMutability(),
        p = c ? f : l;

    if ("MUTABLE" === h) return r;
    var d = i(e, a).filter(function (t) {
      return p <= t.end && p >= t.start;
    });
    1 != d.length && o(!1);
    var g = d[0];
    if ("IMMUTABLE" === h) return r.merge({
      anchorOffset: g.start,
      focusOffset: g.end,
      isBackward: !1
    });
    s || (c ? l = g.end : f = g.start);
    var v = n.getRemovalRange(f, l, e.getText().slice(g.start, g.end), g.start, u);
    return r.merge({
      anchorOffset: v.start,
      focusOffset: v.end,
      isBackward: !1
    });
  }

  t.exports = function (t, e, r, n, i) {
    var o = n.getStartOffset(),
        a = n.getEndOffset(),
        s = e.getEntityAt(o),
        c = r.getEntityAt(a - 1);
    if (!s && !c) return n;
    var f = n;
    if (s && s === c) f = u(t, e, f, i, s, !0, !0);else if (s && c) {
      var l = u(t, e, f, i, s, !1, !0),
          h = u(t, r, f, i, c, !1, !1);
      f = f.merge({
        anchorOffset: l.getAnchorOffset(),
        focusOffset: h.getFocusOffset(),
        isBackward: !1
      });
    } else if (s) {
      var p = u(t, e, f, i, s, !1, !0);
      f = f.merge({
        anchorOffset: p.getStartOffset(),
        isBackward: !1
      });
    } else if (c) {
      var d = u(t, r, f, i, c, !1, !1);
      f = f.merge({
        focusOffset: d.getEndOffset(),
        isBackward: !1
      });
    }
    return f;
  };
}, function (t, e, r) {
  "use strict";

  t.exports = {
    getRemovalRange: function (t, e, r, n, i) {
      var o = r.split(" ");
      o = o.map(function (t, e) {
        if ("forward" === i) {
          if (e > 0) return " " + t;
        } else if (e < o.length - 1) return t + " ";

        return t;
      });

      for (var u, a = n, s = null, c = null, f = 0; f < o.length; f++) {
        if (t < (u = a + o[f].length) && a < e) null !== s || (s = a), c = u;else if (null !== s) break;
        a = u;
      }

      var l = n + r.length,
          h = s === n,
          p = c === l;
      return (!h && p || h && !p) && ("forward" === i ? c !== l && c++ : s !== n && s--), {
        start: s,
        end: c
      };
    }
  };
}, function (t, e, r) {
  "use strict";

  var n = r(414);

  t.exports = function (t, e) {
    var r = [];
    return t.findEntityRanges(function (t) {
      return t.getEntity() === e;
    }, function (t, e) {
      r.push({
        start: t,
        end: e
      });
    }), r.length || n(!1), r;
  };
}, function (t, e, r) {
  "use strict";

  var n = r(432),
      i = r(421),
      o = r(413),
      u = r(472),
      a = r(414),
      s = r(470),
      c = o.List,
      f = function (t, e, r, n, i, o) {
    var a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "REPLACE_WITH_NEW_DATA",
        s = r.get(i),
        c = s.getText(),
        f = s.getCharacterList(),
        l = i,
        h = o + n.getText().length,
        p = null;

    switch (a) {
      case "MERGE_OLD_DATA_TO_NEW_DATA":
        p = n.getData().merge(s.getData());
        break;

      case "REPLACE_WITH_NEW_DATA":
        p = n.getData();
    }

    var d = s.getType();
    c && "unstyled" === d && (d = n.getType());
    var g = s.merge({
      text: c.slice(0, o) + n.getText() + c.slice(o),
      characterList: u(f, n.getCharacterList(), o),
      type: d,
      data: p
    });
    return t.merge({
      blockMap: r.set(i, g),
      selectionBefore: e,
      selectionAfter: e.merge({
        anchorKey: l,
        anchorOffset: h,
        focusKey: l,
        focusOffset: h,
        isBackward: !1
      })
    });
  },
      l = function (t, e, r, o, u, a) {
    var s = r.first() instanceof i,
        f = [],
        l = o.size,
        h = r.get(u),
        p = o.first(),
        d = o.last(),
        g = d.getLength(),
        v = d.getKey(),
        y = s && (!h.getChildKeys().isEmpty() || !p.getChildKeys().isEmpty());
    r.forEach(function (t, e) {
      e === u ? (y ? f.push(t) : f.push(function (t, e, r) {
        var n = t.getText(),
            i = t.getCharacterList(),
            o = n.slice(0, e),
            u = i.slice(0, e),
            a = r.first();
        return t.merge({
          text: o + a.getText(),
          characterList: u.concat(a.getCharacterList()),
          type: o ? t.getType() : a.getType(),
          data: a.getData()
        });
      }(t, a, o)), o.slice(y ? 0 : 1, l - 1).forEach(function (t) {
        return f.push(t);
      }), f.push(function (t, e, r) {
        var n = t.getText(),
            i = t.getCharacterList(),
            o = n.length,
            u = n.slice(e, o),
            a = i.slice(e, o),
            s = r.last();
        return s.merge({
          text: s.getText() + u,
          characterList: s.getCharacterList().concat(a),
          data: s.getData()
        });
      }(t, a, o))) : f.push(t);
    });

    var _ = n.createFromArray(f);

    return s && (_ = function (t, e, r, n) {
      return t.withMutations(function (e) {
        var i = r.getKey(),
            o = n.getKey(),
            u = r.getNextSiblingKey(),
            a = r.getParentKey(),
            s = function (t, e) {
          var r = t.getKey(),
              n = t,
              i = [];

          for (e.get(r) && i.push(r); n && n.getNextSiblingKey();) {
            var o = n.getNextSiblingKey();
            if (!o) break;
            i.push(o), n = e.get(o);
          }

          return i;
        }(n, t),
            f = s[s.length - 1];

        if (e.get(o) ? (e.setIn([i, "nextSibling"], o), e.setIn([o, "prevSibling"], i)) : (e.setIn([i, "nextSibling"], n.getNextSiblingKey()), e.setIn([n.getNextSiblingKey(), "prevSibling"], i)), e.setIn([f, "nextSibling"], u), u && e.setIn([u, "prevSibling"], f), s.forEach(function (t) {
          return e.setIn([t, "parent"], a);
        }), a) {
          var l = t.get(a).getChildKeys(),
              h = l.indexOf(i) + 1,
              p = l.toArray();
          p.splice.apply(p, [h, 0].concat(s)), e.setIn([a, "children"], c(p));
        }
      });
    }(_, 0, h, p)), t.merge({
      blockMap: _,
      selectionBefore: e,
      selectionAfter: e.merge({
        anchorKey: v,
        anchorOffset: g,
        focusKey: v,
        focusOffset: g,
        isBackward: !1
      })
    });
  };

  t.exports = function (t, e, r) {
    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "REPLACE_WITH_NEW_DATA";
    e.isCollapsed() || a(!1);
    var o = t.getBlockMap(),
        u = s(r),
        c = e.getStartKey(),
        h = e.getStartOffset(),
        p = o.get(c);
    return p instanceof i && (p.getChildKeys().isEmpty() || a(!1)), 1 === u.size ? f(t, e, o, u.first(), c, h, n) : l(t, e, o, u, c, h);
  };
}, function (t, e, r) {
  "use strict";

  var n = r(413),
      i = r(472),
      o = r(414),
      u = n.Repeat;

  t.exports = function (t, e, r, n) {
    e.isCollapsed() || o(!1);
    var a = null;
    if (null != r && (a = r.length), null == a || 0 === a) return t;
    var s = t.getBlockMap(),
        c = e.getStartKey(),
        f = e.getStartOffset(),
        l = s.get(c),
        h = l.getText(),
        p = l.merge({
      text: h.slice(0, f) + r + h.slice(f, l.getLength()),
      characterList: i(l.getCharacterList(), u(n, a).toList(), f)
    }),
        d = f + a;
    return t.merge({
      blockMap: s.set(c, p),
      selectionAfter: e.merge({
        anchorOffset: d,
        focusOffset: d
      })
    });
  };
}, function (t, e, r) {
  "use strict";

  var n = r(421),
      i = r(474),
      o = r(413),
      u = (o.List, o.Map),
      a = function (t, e, r) {
    if (t) {
      var n = e.get(t);
      n && e.set(t, r(n));
    }
  },
      s = function (t, e) {
    var r = [];
    if (!t) return r;

    for (var n = e.get(t); n && n.getParentKey();) {
      var i = n.getParentKey();
      i && r.push(i), n = i ? e.get(i) : null;
    }

    return r;
  },
      c = function (t, e, r) {
    if (!t) return null;

    for (var n = r.get(t.getKey()).getNextSiblingKey(); n && !e.get(n);) n = r.get(n).getNextSiblingKey() || null;

    return n;
  },
      f = function (t, e, r) {
    if (!t) return null;

    for (var n = r.get(t.getKey()).getPrevSiblingKey(); n && !e.get(n);) n = r.get(n).getPrevSiblingKey() || null;

    return n;
  },
      l = function (t, e, r, n) {
    return t.withMutations(function (o) {
      if (a(e.getKey(), o, function (t) {
        return t.merge({
          nextSibling: c(t, o, n),
          prevSibling: f(t, o, n)
        });
      }), a(r.getKey(), o, function (t) {
        return t.merge({
          nextSibling: c(t, o, n),
          prevSibling: f(t, o, n)
        });
      }), s(e.getKey(), n).forEach(function (t) {
        return a(t, o, function (t) {
          return t.merge({
            children: t.getChildKeys().filter(function (t) {
              return o.get(t);
            }),
            nextSibling: c(t, o, n),
            prevSibling: f(t, o, n)
          });
        });
      }), a(e.getNextSiblingKey(), o, function (t) {
        return t.merge({
          prevSibling: e.getPrevSiblingKey()
        });
      }), a(e.getPrevSiblingKey(), o, function (t) {
        return t.merge({
          nextSibling: c(t, o, n)
        });
      }), a(r.getNextSiblingKey(), o, function (t) {
        return t.merge({
          prevSibling: f(t, o, n)
        });
      }), a(r.getPrevSiblingKey(), o, function (t) {
        return t.merge({
          nextSibling: r.getNextSiblingKey()
        });
      }), s(r.getKey(), n).forEach(function (t) {
        a(t, o, function (t) {
          return t.merge({
            children: t.getChildKeys().filter(function (t) {
              return o.get(t);
            }),
            nextSibling: c(t, o, n),
            prevSibling: f(t, o, n)
          });
        });
      }), function (t, e) {
        var r = [];
        if (!t) return r;

        for (var n = i(t, e); n && e.get(n);) {
          var o = e.get(n);
          r.push(n), n = o.getParentKey() ? i(o, e) : null;
        }

        return r;
      }(r, n).forEach(function (t) {
        return a(t, o, function (t) {
          return t.merge({
            nextSibling: c(t, o, n),
            prevSibling: f(t, o, n)
          });
        });
      }), null == t.get(e.getKey()) && null != t.get(r.getKey()) && r.getParentKey() === e.getKey() && null == r.getPrevSiblingKey()) {
        var u = e.getPrevSiblingKey();
        a(r.getKey(), o, function (t) {
          return t.merge({
            prevSibling: u
          });
        }), a(u, o, function (t) {
          return t.merge({
            nextSibling: r.getKey()
          });
        });
        var l = u ? t.get(u) : null,
            h = l ? l.getParentKey() : null;

        if (e.getChildKeys().forEach(function (t) {
          a(t, o, function (t) {
            return t.merge({
              parent: h
            });
          });
        }), null != h) {
          var p = t.get(h);
          a(h, o, function (t) {
            return t.merge({
              children: p.getChildKeys().concat(e.getChildKeys())
            });
          });
        }

        a(e.getChildKeys().find(function (e) {
          return null === t.get(e).getNextSiblingKey();
        }), o, function (t) {
          return t.merge({
            nextSibling: e.getNextSiblingKey()
          });
        });
      }
    });
  },
      h = function (t, e, r) {
    if (0 === e) for (; e < r;) t = t.shift(), e++;else if (r === t.count()) for (; r > e;) t = t.pop(), r--;else {
      var n = t.slice(0, e),
          i = t.slice(r);
      t = n.concat(i).toList();
    }
    return t;
  };

  t.exports = function (t, e) {
    if (e.isCollapsed()) return t;
    var r,
        o = t.getBlockMap(),
        a = e.getStartKey(),
        c = e.getStartOffset(),
        f = e.getEndKey(),
        p = e.getEndOffset(),
        d = o.get(a),
        g = o.get(f),
        v = d instanceof n,
        y = [];

    if (v) {
      var _ = g.getChildKeys(),
          m = s(f, o);

      g.getNextSiblingKey() && (y = y.concat(m)), _.isEmpty() || (y = y.concat(m.concat([f]))), y = y.concat(s(i(g, o), o));
    }

    r = d === g ? h(d.getCharacterList(), c, p) : d.getCharacterList().slice(0, c).concat(g.getCharacterList().slice(p));
    var b = d.merge({
      text: d.getText().slice(0, c) + g.getText().slice(p),
      characterList: r
    }),
        S = v && 0 === c && 0 === p && g.getParentKey() === a && null == g.getPrevSiblingKey() ? u([[a, null]]) : o.toSeq().skipUntil(function (t, e) {
      return e === a;
    }).takeUntil(function (t, e) {
      return e === f;
    }).filter(function (t, e) {
      return -1 === y.indexOf(e);
    }).concat(u([[f, null]])).map(function (t, e) {
      return e === a ? b : null;
    }),
        w = o.merge(S).filter(function (t) {
      return !!t;
    });
    return v && d !== g && (w = l(w, d, g, o)), t.merge({
      blockMap: w,
      selectionBefore: e,
      selectionAfter: e.merge({
        anchorKey: a,
        anchorOffset: c,
        focusKey: a,
        focusOffset: c,
        isBackward: !1
      })
    });
  };
}, function (t, e, r) {
  "use strict";

  var n = r(421),
      i = r(422),
      o = r(413),
      u = r(414),
      a = r(473),
      s = o.List,
      c = o.Map,
      f = function (t, e, r) {
    if (t) {
      var n = e.get(t);
      n && e.set(t, r(n));
    }
  };

  t.exports = function (t, e) {
    e.isCollapsed() || u(!1);
    var r = e.getAnchorKey(),
        o = t.getBlockMap(),
        l = o.get(r),
        h = l.getText();

    if (!h) {
      var p = l.getType();
      if ("unordered-list-item" === p || "ordered-list-item" === p) return a(t, e, function (t) {
        return t.merge({
          type: "unstyled",
          depth: 0
        });
      });
    }

    var d = e.getAnchorOffset(),
        g = l.getCharacterList(),
        v = i(),
        y = l instanceof n,
        _ = l.merge({
      text: h.slice(0, d),
      characterList: g.slice(0, d)
    }),
        m = _.merge({
      key: v,
      text: h.slice(d),
      characterList: g.slice(d),
      data: c()
    }),
        b = o.toSeq().takeUntil(function (t) {
      return t === l;
    }),
        S = o.toSeq().skipUntil(function (t) {
      return t === l;
    }).rest(),
        w = b.concat([[r, _], [v, m]], S).toOrderedMap();

    return y && (l.getChildKeys().isEmpty() || u(!1), w = function (t, e, r) {
      return t.withMutations(function (t) {
        var n = e.getKey(),
            i = r.getKey();
        f(e.getParentKey(), t, function (t) {
          var e = t.getChildKeys(),
              r = e.indexOf(n) + 1,
              o = e.toArray();
          return o.splice(r, 0, i), t.merge({
            children: s(o)
          });
        }), f(e.getNextSiblingKey(), t, function (t) {
          return t.merge({
            prevSibling: i
          });
        }), f(n, t, function (t) {
          return t.merge({
            nextSibling: i
          });
        }), f(i, t, function (t) {
          return t.merge({
            prevSibling: n
          });
        });
      });
    }(w, _, m)), t.merge({
      blockMap: w,
      selectionBefore: e,
      selectionAfter: e.merge({
        anchorKey: v,
        anchorOffset: 0,
        focusKey: v,
        focusOffset: 0,
        isBackward: !1
      })
    });
  };
}, function (t, e, r) {
  "use strict";

  function n(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var i = r(433),
      o = r(475),
      u = r(413),
      a = u.List,
      s = u.Repeat,
      c = u.Record,
      f = function () {
    return !0;
  },
      l = c({
    start: null,
    end: null
  }),
      h = c({
    start: null,
    end: null,
    decoratorKey: null,
    leaves: null
  }),
      p = {
    generate: function (t, e, r) {
      var n = e.getLength();
      if (!n) return a.of(new h({
        start: 0,
        end: 0,
        decoratorKey: null,
        leaves: a.of(new l({
          start: 0,
          end: 0
        }))
      }));
      var o = [],
          u = r ? r.getDecorations(e, t) : a(s(null, n)),
          c = e.getCharacterList();
      return i(u, g, f, function (t, e) {
        o.push(new h({
          start: t,
          end: e,
          decoratorKey: u.get(t),
          leaves: d(c.slice(t, e).toList(), t)
        }));
      }), a(o);
    },
    fromJS: function (t) {
      var e = t.leaves,
          r = function (t, e) {
        if (null == t) return {};
        var r,
            n,
            i = {},
            o = Object.keys(t);

        for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);

        return i;
      }(t, ["leaves"]);

      return new h(function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
              i = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
          }))), i.forEach(function (e) {
            n(t, e, r[e]);
          });
        }

        return t;
      }({}, r, {
        leaves: null != e ? a(Array.isArray(e) ? e : o(e)).map(function (t) {
          return l(t);
        }) : null
      }));
    }
  };

  function d(t, e) {
    var r = [],
        n = t.map(function (t) {
      return t.getStyle();
    }).toList();
    return i(n, g, f, function (t, n) {
      r.push(new l({
        start: t + e,
        end: n + e
      }));
    }), a(r);
  }

  function g(t, e) {
    return t === e;
  }

  t.exports = p;
}, function (t, e, r) {
  "use strict";

  t.exports = function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
      var e = 16 * Math.random() | 0;
      return ("x" == t ? e : 3 & e | 8).toString(16);
    });
  };
}, function (t, e, r) {
  "use strict";

  var n,
      i = r(549),
      o = r(413),
      u = r(418),
      a = o.OrderedMap,
      s = {
    getDirectionMap: function (t, e) {
      n ? n.reset() : n = new i();
      var r = t.getBlockMap(),
          s = r.valueSeq().map(function (t) {
        return u(n).getDirection(t.getText());
      }),
          c = a(r.keySeq().zip(s));
      return null != e && o.is(e, c) ? e : c;
    }
  };
  t.exports = s;
}, function (t, e, r) {
  "use strict";

  function n(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var i = r(453),
      o = r(441),
      u = r(414),
      a = function () {
    function t(t) {
      n(this, "_defaultDir", void 0), n(this, "_lastDir", void 0), t ? o.isStrong(t) || u(!1) : t = o.getGlobalDir(), this._defaultDir = t, this.reset();
    }

    var e = t.prototype;
    return e.reset = function () {
      this._lastDir = this._defaultDir;
    }, e.getDirection = function (t) {
      return this._lastDir = i.getDirection(t, this._lastDir), this._lastDir;
    }, t;
  }();

  t.exports = a;
}, function (t, e, r) {
  "use strict";

  var n = r(421),
      i = r(474),
      o = r(413),
      u = r(414),
      a = o.OrderedMap,
      s = o.List,
      c = function (t, e, r) {
    if (t) {
      var n = e.get(t);
      n && e.set(t, r(n));
    }
  },
      f = function (t, e, r, n, i) {
    if (!i) return t;
    var o = "after" === n,
        u = e.getKey(),
        a = r.getKey(),
        f = e.getParentKey(),
        l = e.getNextSiblingKey(),
        h = e.getPrevSiblingKey(),
        p = r.getParentKey(),
        d = o ? r.getNextSiblingKey() : a,
        g = o ? a : r.getPrevSiblingKey();
    return t.withMutations(function (t) {
      c(f, t, function (t) {
        var e = t.getChildKeys();
        return t.merge({
          children: e.delete(e.indexOf(u))
        });
      }), c(h, t, function (t) {
        return t.merge({
          nextSibling: l
        });
      }), c(l, t, function (t) {
        return t.merge({
          prevSibling: h
        });
      }), c(d, t, function (t) {
        return t.merge({
          prevSibling: u
        });
      }), c(g, t, function (t) {
        return t.merge({
          nextSibling: u
        });
      }), c(p, t, function (t) {
        var e = t.getChildKeys(),
            r = e.indexOf(a),
            n = o ? r + 1 : 0 !== r ? r - 1 : 0,
            i = e.toArray();
        return i.splice(n, 0, u), t.merge({
          children: s(i)
        });
      }), c(u, t, function (t) {
        return t.merge({
          nextSibling: d,
          prevSibling: g,
          parent: p
        });
      });
    });
  };

  t.exports = function (t, e, r, o) {
    "replace" === o && u(!1);
    var s = r.getKey(),
        c = e.getKey();
    c === s && u(!1);
    var l = t.getBlockMap(),
        h = e instanceof n,
        p = [e],
        d = l.delete(c);
    h && (p = [], d = l.withMutations(function (t) {
      var r = e.getNextSiblingKey(),
          n = i(e, t);
      t.toSeq().skipUntil(function (t) {
        return t.getKey() === c;
      }).takeWhile(function (t) {
        var e = t.getKey(),
            i = e === c,
            o = r && e !== r,
            u = !r && t.getParentKey() && (!n || e !== n);
        return !!(i || o || u);
      }).forEach(function (e) {
        p.push(e), t.delete(e.getKey());
      });
    }));

    var g = d.toSeq().takeUntil(function (t) {
      return t === r;
    }),
        v = d.toSeq().skipUntil(function (t) {
      return t === r;
    }).skip(1),
        y = p.map(function (t) {
      return [t.getKey(), t];
    }),
        _ = a();

    if ("before" === o) {
      var m = t.getBlockBefore(s);
      m && m.getKey() === e.getKey() && u(!1), _ = g.concat([].concat(y, [[s, r]]), v).toOrderedMap();
    } else if ("after" === o) {
      var b = t.getBlockAfter(s);
      b && b.getKey() === c && u(!1), _ = g.concat([[s, r]].concat(y), v).toOrderedMap();
    }

    return t.merge({
      blockMap: f(_, e, r, o, h),
      selectionBefore: t.getSelectionAfter(),
      selectionAfter: t.getSelectionAfter().merge({
        anchorKey: c,
        focusKey: c
      })
    });
  };
}, function (t, e, r) {
  "use strict";

  var n = r(413).List,
      i = function () {
    function t(t) {
      var e, r, n;
      n = void 0, (r = "_decorators") in (e = this) ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = n, this._decorators = t.slice();
    }

    var e = t.prototype;
    return e.getDecorations = function (t, e) {
      var r = Array(t.getText().length).fill(null);
      return this._decorators.forEach(function (n, i) {
        var o = 0;
        (0, n.strategy)(t, function (t, e) {
          (function (t, e, r) {
            for (var n = e; n < r; n++) if (null != t[n]) return !1;

            return !0;
          })(r, t, e) && (!function (t, e, r, n) {
            for (var i = e; i < r; i++) t[i] = n;
          }(r, t, e, i + "." + o), o++);
        }, e);
      }), n(r);
    }, e.getComponentForKey = function (t) {
      var e = parseInt(t.split(".")[0], 10);
      return this._decorators[e].component;
    }, e.getPropsForKey = function (t) {
      var e = parseInt(t.split(".")[0], 10);
      return this._decorators[e].props;
    }, t;
  }();

  t.exports = i;
}, function (t, e, r) {
  "use strict";

  (function (e) {
    var n = r(99);

    function i() {
      return (i = n || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];

          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }

        return t;
      }).apply(this, arguments);
    }

    function o(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
          return Object.getOwnPropertyDescriptor(r, t).enumerable;
        }))), n.forEach(function (e) {
          a(t, e, r[e]);
        });
      }

      return t;
    }

    function u(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function a(t, e, r) {
      return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = r, t;
    }

    function s(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
    }

    var c = r(454),
        f = r(478),
        l = r(553),
        h = r(561),
        p = r(578),
        d = r(581),
        g = r(615),
        v = r(616),
        y = r(490),
        _ = r(415),
        m = r(0),
        b = r(457),
        S = r(445),
        w = r(419),
        x = r(428),
        k = r(422),
        E = r(506),
        O = r(446),
        C = r(426),
        D = r(414),
        I = r(434),
        M = r(418),
        A = w.isBrowser("IE"),
        K = !A,
        T = {
      edit: d,
      composite: l,
      drag: p,
      cut: null,
      render: null
    },
        z = !1,
        B = function (t) {
      function e() {
        return t.apply(this, arguments) || this;
      }

      s(e, t);
      var r = e.prototype;
      return r.render = function () {
        return null;
      }, r.componentDidMount = function () {
        this._update();
      }, r.componentDidUpdate = function () {
        this._update();
      }, r._update = function () {
        var t = this.props.editor;
        t._latestEditorState = this.props.editorState, t._blockSelectEvents = !0;
      }, e;
    }(m.Component),
        R = function (t) {
      function r(e) {
        var r;
        return a(u(r = t.call(this, e) || this), "_blockSelectEvents", void 0), a(u(r), "_clipboard", void 0), a(u(r), "_handler", void 0), a(u(r), "_dragCount", void 0), a(u(r), "_internalDrag", void 0), a(u(r), "_editorKey", void 0), a(u(r), "_placeholderAccessibilityID", void 0), a(u(r), "_latestEditorState", void 0), a(u(r), "_latestCommittedEditorState", void 0), a(u(r), "_pendingStateFromBeforeInput", void 0), a(u(r), "_onBeforeInput", void 0), a(u(r), "_onBlur", void 0), a(u(r), "_onCharacterData", void 0), a(u(r), "_onCompositionEnd", void 0), a(u(r), "_onCompositionStart", void 0), a(u(r), "_onCopy", void 0), a(u(r), "_onCut", void 0), a(u(r), "_onDragEnd", void 0), a(u(r), "_onDragOver", void 0), a(u(r), "_onDragStart", void 0), a(u(r), "_onDrop", void 0), a(u(r), "_onInput", void 0), a(u(r), "_onFocus", void 0), a(u(r), "_onKeyDown", void 0), a(u(r), "_onKeyPress", void 0), a(u(r), "_onKeyUp", void 0), a(u(r), "_onMouseDown", void 0), a(u(r), "_onMouseUp", void 0), a(u(r), "_onPaste", void 0), a(u(r), "_onSelect", void 0), a(u(r), "editor", void 0), a(u(r), "editorContainer", void 0), a(u(r), "focus", void 0), a(u(r), "blur", void 0), a(u(r), "setMode", void 0), a(u(r), "exitCurrentMode", void 0), a(u(r), "restoreEditorDOM", void 0), a(u(r), "setClipboard", void 0), a(u(r), "getClipboard", void 0), a(u(r), "getEditorKey", void 0), a(u(r), "update", void 0), a(u(r), "onDragEnter", void 0), a(u(r), "onDragLeave", void 0), a(u(r), "_handleEditorContainerRef", function (t) {
          r.editorContainer = t, r.editor = null !== t ? t.firstChild : null;
        }), a(u(r), "focus", function (t) {
          var e = r.props.editorState,
              n = e.getSelection().getHasFocus(),
              i = r.editor;

          if (i) {
            var o = S.getScrollParent(i),
                u = t || O(o),
                a = u.x,
                s = u.y;
            I(i) || D(!1), i.focus(), o === window ? window.scrollTo(a, s) : b.setTop(o, s), n || r.update(_.forceSelection(e, e.getSelection()));
          }
        }), a(u(r), "blur", function () {
          var t = r.editor;
          t && (I(t) || D(!1), t.blur());
        }), a(u(r), "setMode", function (t) {
          var e = r.props,
              n = e.onPaste,
              i = e.onCut,
              u = e.onCopy,
              a = o({}, T.edit);
          n && (a.onPaste = n), i && (a.onCut = i), u && (a.onCopy = u);
          var s = o({}, T, {
            edit: a
          });
          r._handler = s[t];
        }), a(u(r), "exitCurrentMode", function () {
          r.setMode("edit");
        }), a(u(r), "restoreEditorDOM", function (t) {
          r.setState({
            contentsKey: r.state.contentsKey + 1
          }, function () {
            r.focus(t);
          });
        }), a(u(r), "setClipboard", function (t) {
          r._clipboard = t;
        }), a(u(r), "getClipboard", function () {
          return r._clipboard;
        }), a(u(r), "update", function (t) {
          r._latestEditorState = t, r.props.onChange(t);
        }), a(u(r), "onDragEnter", function () {
          r._dragCount++;
        }), a(u(r), "onDragLeave", function () {
          r._dragCount--, 0 === r._dragCount && r.exitCurrentMode();
        }), r._blockSelectEvents = !1, r._clipboard = null, r._handler = null, r._dragCount = 0, r._editorKey = e.editorKey || k(), r._placeholderAccessibilityID = "placeholder-" + r._editorKey, r._latestEditorState = e.editorState, r._latestCommittedEditorState = e.editorState, r._onBeforeInput = r._buildHandler("onBeforeInput"), r._onBlur = r._buildHandler("onBlur"), r._onCharacterData = r._buildHandler("onCharacterData"), r._onCompositionEnd = r._buildHandler("onCompositionEnd"), r._onCompositionStart = r._buildHandler("onCompositionStart"), r._onCopy = r._buildHandler("onCopy"), r._onCut = r._buildHandler("onCut"), r._onDragEnd = r._buildHandler("onDragEnd"), r._onDragOver = r._buildHandler("onDragOver"), r._onDragStart = r._buildHandler("onDragStart"), r._onDrop = r._buildHandler("onDrop"), r._onInput = r._buildHandler("onInput"), r._onFocus = r._buildHandler("onFocus"), r._onKeyDown = r._buildHandler("onKeyDown"), r._onKeyPress = r._buildHandler("onKeyPress"), r._onKeyUp = r._buildHandler("onKeyUp"), r._onMouseDown = r._buildHandler("onMouseDown"), r._onMouseUp = r._buildHandler("onMouseUp"), r._onPaste = r._buildHandler("onPaste"), r._onSelect = r._buildHandler("onSelect"), r.getEditorKey = function () {
          return r._editorKey;
        }, r.state = {
          contentsKey: 0
        }, r;
      }

      s(r, t);
      var n = r.prototype;
      return n._buildHandler = function (t) {
        var e = this;
        return function (r) {
          if (!e.props.readOnly) {
            var n = e._handler && e._handler[t];
            n && (g ? g(function () {
              return n(e, r);
            }) : n(e, r));
          }
        };
      }, n._showPlaceholder = function () {
        return !!this.props.placeholder && !this.props.editorState.isInCompositionMode() && !this.props.editorState.getCurrentContent().hasText();
      }, n._renderPlaceholder = function () {
        if (this._showPlaceholder()) {
          var t = {
            text: M(this.props.placeholder),
            editorState: this.props.editorState,
            textAlignment: this.props.textAlignment,
            accessibilityID: this._placeholderAccessibilityID
          };
          return m.createElement(v, t);
        }

        return null;
      }, n._renderARIADescribedBy = function () {
        var t = this.props.ariaDescribedBy || "",
            e = this._showPlaceholder() ? this._placeholderAccessibilityID : "";
        return t.replace("{{editor_id_placeholder}}", e) || void 0;
      }, n.render = function () {
        var t = this.props,
            e = t.blockRenderMap,
            r = t.blockRendererFn,
            n = t.blockStyleFn,
            u = t.customStyleFn,
            a = t.customStyleMap,
            s = t.editorState,
            c = t.preventScroll,
            l = t.readOnly,
            p = t.textAlignment,
            d = t.textDirectionality,
            g = x({
          "DraftEditor/root": !0,
          "DraftEditor/alignLeft": "left" === p,
          "DraftEditor/alignRight": "right" === p,
          "DraftEditor/alignCenter": "center" === p
        }),
            v = this.props.role || "textbox",
            y = "combobox" === v ? !!this.props.ariaExpanded : null,
            _ = {
          blockRenderMap: e,
          blockRendererFn: r,
          blockStyleFn: n,
          customStyleMap: o({}, f, a),
          customStyleFn: u,
          editorKey: this._editorKey,
          editorState: s,
          preventScroll: c,
          textDirectionality: d
        };
        return m.createElement("div", {
          className: g
        }, this._renderPlaceholder(), m.createElement("div", {
          className: x("DraftEditor/editorContainer"),
          ref: this._handleEditorContainerRef
        }, m.createElement("div", {
          "aria-activedescendant": l ? null : this.props.ariaActiveDescendantID,
          "aria-autocomplete": l ? null : this.props.ariaAutoComplete,
          "aria-controls": l ? null : this.props.ariaControls,
          "aria-describedby": this._renderARIADescribedBy(),
          "aria-expanded": l ? null : y,
          "aria-label": this.props.ariaLabel,
          "aria-labelledby": this.props.ariaLabelledBy,
          "aria-multiline": this.props.ariaMultiline,
          "aria-owns": l ? null : this.props.ariaOwneeID,
          autoCapitalize: this.props.autoCapitalize,
          autoComplete: this.props.autoComplete,
          autoCorrect: this.props.autoCorrect,
          className: x({
            notranslate: !l,
            "public/DraftEditor/content": !0
          }),
          contentEditable: !l,
          "data-testid": this.props.webDriverTestID,
          onBeforeInput: this._onBeforeInput,
          onBlur: this._onBlur,
          onCompositionEnd: this._onCompositionEnd,
          onCompositionStart: this._onCompositionStart,
          onCopy: this._onCopy,
          onCut: this._onCut,
          onDragEnd: this._onDragEnd,
          onDragEnter: this.onDragEnter,
          onDragLeave: this.onDragLeave,
          onDragOver: this._onDragOver,
          onDragStart: this._onDragStart,
          onDrop: this._onDrop,
          onFocus: this._onFocus,
          onInput: this._onInput,
          onKeyDown: this._onKeyDown,
          onKeyPress: this._onKeyPress,
          onKeyUp: this._onKeyUp,
          onMouseUp: this._onMouseUp,
          onPaste: this._onPaste,
          onSelect: this._onSelect,
          ref: this.props.editorRef,
          role: l ? null : v,
          spellCheck: K && this.props.spellCheck,
          style: {
            outline: "none",
            userSelect: "text",
            WebkitUserSelect: "text",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word"
          },
          suppressContentEditableWarning: !0,
          tabIndex: this.props.tabIndex
        }, m.createElement(B, {
          editor: this,
          editorState: s
        }), m.createElement(h, i({}, _, {
          key: "contents" + this.state.contentsKey
        })))));
      }, n.componentDidMount = function () {
        this._blockSelectEvents = !1, !z && C("draft_ods_enabled") && (z = !0, y.initODS()), this.setMode("edit"), A && (this.editor ? this.editor.ownerDocument.execCommand("AutoUrlDetect", !1, !1) : e.execCommand("AutoUrlDetect", !1, !1));
      }, n.componentDidUpdate = function () {
        this._blockSelectEvents = !1, this._latestEditorState = this.props.editorState, this._latestCommittedEditorState = this.props.editorState;
      }, r;
    }(m.Component);

    a(R, "defaultProps", {
      ariaDescribedBy: "{{editor_id_placeholder}}",
      blockRenderMap: c,
      blockRendererFn: function () {
        return null;
      },
      blockStyleFn: function () {
        return "";
      },
      keyBindingFn: E,
      readOnly: !1,
      spellCheck: !1,
      stripPastedStyles: !1
    }), t.exports = R;
  }).call(this, r(62));
}, function (t, e, r) {
  "use strict";

  var n = r(554),
      i = r(417),
      o = r(423),
      u = r(415),
      a = r(444),
      s = r(419),
      c = r(481),
      f = r(483),
      l = r(484),
      h = r(455),
      p = r(418),
      d = s.isBrowser("IE"),
      g = !1,
      v = !1,
      y = null;
  var _ = {
    onCompositionStart: function (t) {
      v = !0, function (t) {
        y || (y = new n(f(t))).start();
      }(t);
    },
    onCompositionEnd: function (t) {
      g = !1, v = !1, setTimeout(function () {
        g || _.resolveComposition(t);
      }, 20);
    },
    onSelect: c,
    onKeyDown: function (t, e) {
      if (!v) return _.resolveComposition(t), void t._onKeyDown(e);
      e.which !== a.RIGHT && e.which !== a.LEFT || e.preventDefault();
    },
    onKeyPress: function (t, e) {
      e.which === a.RETURN && e.preventDefault();
    },
    resolveComposition: function (t) {
      if (!v) {
        var e = p(y).stopAndFlushMutations();
        y = null, g = !0;
        var r = u.set(t._latestEditorState, {
          inCompositionMode: !1
        });

        if (t.exitCurrentMode(), e.size) {
          var n = r.getCurrentContent();
          e.forEach(function (t, e) {
            var a = o.decode(e),
                s = a.blockKey,
                c = a.decoratorKey,
                f = a.leafKey,
                l = r.getBlockTree(s).getIn([c, "leaves", f]),
                p = l.start,
                d = l.end,
                g = r.getSelection().merge({
              anchorKey: s,
              focusKey: s,
              anchorOffset: p,
              focusOffset: d,
              isBackward: !1
            }),
                v = h(n, g),
                y = n.getBlockForKey(s).getInlineStyleAt(p);
            n = i.replaceText(n, g, t, y, v), r = u.set(r, {
              currentContent: n
            });
          });
          var a = l(r, f(t)).selectionState;
          t.restoreEditorDOM();
          var s = d ? u.forceSelection(r, a) : u.acceptSelection(r, a);
          t.update(u.push(s, n, "insert-characters"));
        } else t.update(r);
      }
    }
  };
  t.exports = _;
}, function (t, e, r) {
  "use strict";

  function n(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var i = r(419),
      o = r(442),
      u = r(480),
      a = r(413),
      s = r(414),
      c = r(418),
      f = a.Map,
      l = {
    subtree: !0,
    characterData: !0,
    childList: !0,
    characterDataOldValue: !1,
    attributes: !1
  },
      h = i.isBrowser("IE <= 11"),
      p = function () {
    function t(t) {
      var e = this;
      n(this, "observer", void 0), n(this, "container", void 0), n(this, "mutations", void 0), n(this, "onCharData", void 0), this.container = t, this.mutations = f();
      var r = u(t);
      r.MutationObserver && !h ? this.observer = new r.MutationObserver(function (t) {
        return e.registerMutations(t);
      }) : this.onCharData = function (t) {
        t.target instanceof Node || s(!1), e.registerMutation({
          type: "characterData",
          target: t.target
        });
      };
    }

    var e = t.prototype;
    return e.start = function () {
      this.observer ? this.observer.observe(this.container, l) : this.container.addEventListener("DOMCharacterDataModified", this.onCharData);
    }, e.stopAndFlushMutations = function () {
      var t = this.observer;
      t ? (this.registerMutations(t.takeRecords()), t.disconnect()) : this.container.removeEventListener("DOMCharacterDataModified", this.onCharData);
      var e = this.mutations;
      return this.mutations = f(), e;
    }, e.registerMutations = function (t) {
      for (var e = 0; e < t.length; e++) this.registerMutation(t[e]);
    }, e.getMutationTextContent = function (t) {
      var e = t.type,
          r = t.target,
          n = t.removedNodes;

      if ("characterData" === e) {
        if ("" !== r.textContent) return h ? r.textContent.replace("\n", "") : r.textContent;
      } else if ("childList" === e) {
        if (n && n.length) return "";
        if ("" !== r.textContent) return r.textContent;
      }

      return null;
    }, e.registerMutation = function (t) {
      var e = this.getMutationTextContent(t);

      if (null != e) {
        var r = c(o(t.target));
        this.mutations = this.mutations.set(r, e);
      }
    }, t;
  }();

  t.exports = p;
}, function (t, e, r) {
  "use strict";

  var n = r(556),
      i = "Unknown",
      o = {
    "Mac OS": "Mac OS X"
  };

  var u,
      a = new n().getResult(),
      s = function (t) {
    if (!t) return {
      major: "",
      minor: ""
    };
    var e = t.split(".");
    return {
      major: e[0],
      minor: e[1]
    };
  }(a.browser.version),
      c = {
    browserArchitecture: a.cpu.architecture || i,
    browserFullVersion: a.browser.version || i,
    browserMinorVersion: s.minor || i,
    browserName: a.browser.name || i,
    browserVersion: a.browser.major || i,
    deviceName: a.device.model || i,
    engineName: a.engine.name || i,
    engineVersion: a.engine.version || i,
    platformArchitecture: a.cpu.architecture || i,
    platformName: (u = a.os.name, o[u] || u || i),
    platformVersion: a.os.version || i,
    platformFullVersion: a.os.version || i
  };

  t.exports = c;
}, function (t, e, r) {
  var n;
  !function (i, o) {
    "use strict";

    var u = "model",
        a = "name",
        s = "type",
        c = "vendor",
        f = "version",
        l = "mobile",
        h = "tablet",
        p = "smarttv",
        d = function (t) {
      for (var e = {}, r = 0; r < t.length; r++) e[t[r].toUpperCase()] = t[r];

      return e;
    },
        g = function (t, e) {
      return "string" == typeof t && -1 !== v(e).indexOf(v(t));
    },
        v = function (t) {
      return t.toLowerCase();
    },
        y = function (t, e) {
      if ("string" == typeof t) return t = t.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), void 0 === e ? t : t.substring(0, 255);
    },
        _ = function (t, e) {
      for (var r, n, i, o, u, a, s = 0; s < e.length && !u;) {
        var c = e[s],
            f = e[s + 1];

        for (r = n = 0; r < c.length && !u;) if (u = c[r++].exec(t)) for (i = 0; i < f.length; i++) a = u[++n], "object" == typeof (o = f[i]) && o.length > 0 ? 2 === o.length ? "function" == typeof o[1] ? this[o[0]] = o[1].call(this, a) : this[o[0]] = o[1] : 3 === o.length ? "function" != typeof o[1] || o[1].exec && o[1].test ? this[o[0]] = a ? a.replace(o[1], o[2]) : void 0 : this[o[0]] = a ? o[1].call(this, a, o[2]) : void 0 : 4 === o.length && (this[o[0]] = a ? o[3].call(this, a.replace(o[1], o[2])) : void 0) : this[o] = a || void 0;

        s += 2;
      }
    },
        m = function (t, e) {
      for (var r in e) if ("object" == typeof e[r] && e[r].length > 0) {
        for (var n = 0; n < e[r].length; n++) if (g(e[r][n], t)) return "?" === r ? void 0 : r;
      } else if (g(e[r], t)) return "?" === r ? void 0 : r;

      return t;
    },
        b = {
      ME: "4.90",
      "NT 3.11": "NT3.51",
      "NT 4.0": "NT4.0",
      2e3: "NT 5.0",
      XP: ["NT 5.1", "NT 5.2"],
      Vista: "NT 6.0",
      7: "NT 6.1",
      8: "NT 6.2",
      8.1: "NT 6.3",
      10: ["NT 6.4", "NT 10.0"],
      RT: "ARM"
    },
        S = {
      browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [f, [a, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [f, [a, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [a, f], [/opios[\/ ]+([\w\.]+)/i], [f, [a, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [f, [a, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [a, f], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [f, [a, "UCBrowser"]], [/\bqbcore\/([\w\.]+)/i], [f, [a, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [f, [a, "WeChat"]], [/konqueror\/([\w\.]+)/i], [f, [a, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [f, [a, "IE"]], [/yabrowser\/([\w\.]+)/i], [f, [a, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[a, /(.+)/, "$1 Secure Browser"], f], [/\bfocus\/([\w\.]+)/i], [f, [a, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [f, [a, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [f, [a, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [f, [a, "Dolphin"]], [/coast\/([\w\.]+)/i], [f, [a, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [f, [a, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [f, [a, "Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[a, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[a, /(.+)/, "$1 Browser"], f], [/(comodo_dragon)\/([\w\.]+)/i], [[a, /_/g, " "], f], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [a, f], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], [a], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[a, "Facebook"], f], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [a, f], [/\bgsa\/([\w\.]+) .*safari\//i], [f, [a, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [f, [a, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[a, "Chrome WebView"], f], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [f, [a, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [a, f], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], [f, [a, "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], [f, a], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [a, [f, m, {
        "1.0": "/8",
        1.2: "/1",
        1.3: "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      }]], [/(webkit|khtml)\/([\w\.]+)/i], [a, f], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[a, "Netscape"], f], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [f, [a, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [a, f]],
      cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", v]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [["architecture", "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [["architecture", "armhf"]], [/windows (ce|mobile); ppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [["architecture", /ower/, "", v]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [["architecture", v]]],
      device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [u, [c, "Samsung"], [s, h]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [u, [c, "Samsung"], [s, l]], [/\((ip(?:hone|od)[\w ]*);/i], [u, [c, "Apple"], [s, l]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [u, [c, "Apple"], [s, h]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [u, [c, "Huawei"], [s, h]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i], [u, [c, "Huawei"], [s, l]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[u, /_/g, " "], [c, "Xiaomi"], [s, l]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[u, /_/g, " "], [c, "Xiaomi"], [s, h]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [u, [c, "OPPO"], [s, l]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [u, [c, "Vivo"], [s, l]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [u, [c, "Realme"], [s, l]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [u, [c, "Motorola"], [s, l]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [u, [c, "Motorola"], [s, h]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [u, [c, "LG"], [s, h]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [u, [c, "LG"], [s, l]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [u, [c, "Lenovo"], [s, h]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[u, /_/g, " "], [c, "Nokia"], [s, l]], [/(pixel c)\b/i], [u, [c, "Google"], [s, h]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [u, [c, "Google"], [s, l]], [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [u, [c, "Sony"], [s, l]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[u, "Xperia Tablet"], [c, "Sony"], [s, h]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [u, [c, "OnePlus"], [s, l]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [u, [c, "Amazon"], [s, h]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[u, /(.+)/g, "Fire Phone $1"], [c, "Amazon"], [s, l]], [/(playbook);[-\w\),; ]+(rim)/i], [u, c, [s, h]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [u, [c, "BlackBerry"], [s, l]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [u, [c, "ASUS"], [s, h]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [u, [c, "ASUS"], [s, l]], [/(nexus 9)/i], [u, [c, "HTC"], [s, h]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], [c, [u, /_/g, " "], [s, l]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [u, [c, "Acer"], [s, h]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [u, [c, "Meizu"], [s, l]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [u, [c, "Sharp"], [s, l]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [c, u, [s, l]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [c, u, [s, h]], [/(surface duo)/i], [u, [c, "Microsoft"], [s, h]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [u, [c, "Fairphone"], [s, l]], [/(u304aa)/i], [u, [c, "AT&T"], [s, l]], [/\bsie-(\w*)/i], [u, [c, "Siemens"], [s, l]], [/\b(rct\w+) b/i], [u, [c, "RCA"], [s, h]], [/\b(venue[\d ]{2,7}) b/i], [u, [c, "Dell"], [s, h]], [/\b(q(?:mv|ta)\w+) b/i], [u, [c, "Verizon"], [s, h]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [u, [c, "Barnes & Noble"], [s, h]], [/\b(tm\d{3}\w+) b/i], [u, [c, "NuVision"], [s, h]], [/\b(k88) b/i], [u, [c, "ZTE"], [s, h]], [/\b(nx\d{3}j) b/i], [u, [c, "ZTE"], [s, l]], [/\b(gen\d{3}) b.+49h/i], [u, [c, "Swiss"], [s, l]], [/\b(zur\d{3}) b/i], [u, [c, "Swiss"], [s, h]], [/\b((zeki)?tb.*\b) b/i], [u, [c, "Zeki"], [s, h]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[c, "Dragon Touch"], u, [s, h]], [/\b(ns-?\w{0,9}) b/i], [u, [c, "Insignia"], [s, h]], [/\b((nxa|next)-?\w{0,9}) b/i], [u, [c, "NextBook"], [s, h]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[c, "Voice"], u, [s, l]], [/\b(lvtel\-)?(v1[12]) b/i], [[c, "LvTel"], u, [s, l]], [/\b(ph-1) /i], [u, [c, "Essential"], [s, l]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [u, [c, "Envizen"], [s, h]], [/\b(trio[-\w\. ]+) b/i], [u, [c, "MachSpeed"], [s, h]], [/\btu_(1491) b/i], [u, [c, "Rotor"], [s, h]], [/(shield[\w ]+) b/i], [u, [c, "Nvidia"], [s, h]], [/(sprint) (\w+)/i], [c, u, [s, l]], [/(kin\.[onetw]{3})/i], [[u, /\./g, " "], [c, "Microsoft"], [s, l]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [u, [c, "Zebra"], [s, h]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [u, [c, "Zebra"], [s, l]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [c, u, [s, "console"]], [/droid.+; (shield) bui/i], [u, [c, "Nvidia"], [s, "console"]], [/(playstation [345portablevi]+)/i], [u, [c, "Sony"], [s, "console"]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [u, [c, "Microsoft"], [s, "console"]], [/smart-tv.+(samsung)/i], [c, [s, p]], [/hbbtv.+maple;(\d+)/i], [[u, /^/, "SmartTV"], [c, "Samsung"], [s, p]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[c, "LG"], [s, p]], [/(apple) ?tv/i], [c, [u, "Apple TV"], [s, p]], [/crkey/i], [[u, "Chromecast"], [c, "Google"], [s, p]], [/droid.+aft(\w)( bui|\))/i], [u, [c, "Amazon"], [s, p]], [/\(dtv[\);].+(aquos)/i], [u, [c, "Sharp"], [s, p]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[c, y], [u, y], [s, p]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[s, p]], [/((pebble))app/i], [c, u, [s, "wearable"]], [/droid.+; (glass) \d/i], [u, [c, "Google"], [s, "wearable"]], [/droid.+; (wt63?0{2,3})\)/i], [u, [c, "Zebra"], [s, "wearable"]], [/(quest( 2)?)/i], [u, [c, "Facebook"], [s, "wearable"]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [c, [s, "embedded"]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [u, [s, l]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [u, [s, h]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[s, h]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [[s, l]], [/(android[-\w\. ]{0,9});.+buil/i], [u, [c, "Generic"]]],
      engine: [[/windows.+ edge\/([\w\.]+)/i], [f, [a, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [f, [a, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [a, f], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [f, a]],
      os: [[/microsoft (windows) (vista|xp)/i], [a, f], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [a, [f, m, b]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[a, "Windows"], [f, m, b]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[f, /_/g, "."], [a, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[a, "Mac OS"], [f, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], [f, a], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [a, f], [/\(bb(10);/i], [f, [a, "BlackBerry"]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [f, [a, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [f, [a, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [f, [a, "webOS"]], [/crkey\/([\d\.]+)/i], [f, [a, "Chromecast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[a, "Chromium OS"], f], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [a, f], [/(sunos) ?([\w\.\d]*)/i], [[a, "Solaris"], f], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [a, f]]
    },
        w = function (t, e) {
      if ("object" == typeof t && (e = t, t = void 0), !(this instanceof w)) return new w(t, e).getResult();
      var r = t || (void 0 !== i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
          n = e ? function (t, e) {
        var r = {};

        for (var n in t) e[n] && e[n].length % 2 == 0 ? r[n] = e[n].concat(t[n]) : r[n] = t[n];

        return r;
      }(S, e) : S;
      return this.getBrowser = function () {
        var t,
            e = {};
        return e[a] = void 0, e[f] = void 0, _.call(e, r, n.browser), e.major = "string" == typeof (t = e.version) ? t.replace(/[^\d\.]/g, "").split(".")[0] : void 0, e;
      }, this.getCPU = function () {
        var t = {
          architecture: void 0
        };
        return _.call(t, r, n.cpu), t;
      }, this.getDevice = function () {
        var t = {
          vendor: void 0,
          model: void 0,
          type: void 0
        };
        return _.call(t, r, n.device), t;
      }, this.getEngine = function () {
        var t = {
          name: void 0,
          version: void 0
        };
        return _.call(t, r, n.engine), t;
      }, this.getOS = function () {
        var t = {
          name: void 0,
          version: void 0
        };
        return _.call(t, r, n.os), t;
      }, this.getResult = function () {
        return {
          ua: this.getUA(),
          browser: this.getBrowser(),
          engine: this.getEngine(),
          os: this.getOS(),
          device: this.getDevice(),
          cpu: this.getCPU()
        };
      }, this.getUA = function () {
        return r;
      }, this.setUA = function (t) {
        return r = "string" == typeof t && t.length > 255 ? y(t, 255) : t, this;
      }, this.setUA(r), this;
    };

    w.VERSION = "0.7.31", w.BROWSER = d([a, f, "major"]), w.CPU = d(["architecture"]), w.DEVICE = d([u, c, s, "console", l, p, h, "wearable", "embedded"]), w.ENGINE = w.OS = d([a, f]), void 0 !== e ? (void 0 !== t && t.exports && (e = t.exports = w), e.UAParser = w) : r(557) ? void 0 === (n = function () {
      return w;
    }.call(e, r, e, t)) || (t.exports = n) : void 0 !== i && (i.UAParser = w);
    var x = void 0 !== i && (i.jQuery || i.Zepto);

    if (x && !x.ua) {
      var k = new w();
      x.ua = k.getResult(), x.ua.get = function () {
        return k.getUA();
      }, x.ua.set = function (t) {
        k.setUA(t);
        var e = k.getResult();

        for (var r in e) x.ua[r] = e[r];
      };
    }
  }("object" == typeof window ? window : this);
}, function (t, e) {
  (function (e) {
    t.exports = e;
  }).call(this, {});
}, function (t, e, r) {
  "use strict";

  var n = r(414),
      i = /\./,
      o = /\|\|/,
      u = /\s+\-\s+/,
      a = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
      s = /^(\d*)(.*)/;

  function c(t, e) {
    var r = t.split(o);
    return r.length > 1 ? r.some(function (t) {
      return b.contains(t, e);
    }) : function (t, e) {
      var r = t.split(u);
      if (r.length > 0 && r.length <= 2 || n(!1), 1 === r.length) return f(r[0], e);
      var i = r[0],
          o = r[1];
      return g(i) && g(o) || n(!1), f(">=" + i, e) && f("<=" + o, e);
    }(t = r[0].trim(), e);
  }

  function f(t, e) {
    if ("" === (t = t.trim())) return !0;
    var r,
        n = e.split(i),
        o = p(t),
        u = o.modifier,
        a = o.rangeComponents;

    switch (u) {
      case "<":
        return l(n, a);

      case "<=":
        return -1 === (r = m(n, a)) || 0 === r;

      case ">=":
        return h(n, a);

      case ">":
        return function (t, e) {
          return 1 === m(t, e);
        }(n, a);

      case "~":
      case "~>":
        return function (t, e) {
          var r = e.slice(),
              n = e.slice();
          n.length > 1 && n.pop();
          var i = n.length - 1,
              o = parseInt(n[i], 10);
          d(o) && (n[i] = o + 1 + "");
          return h(t, r) && l(t, n);
        }(n, a);

      default:
        return function (t, e) {
          return 0 === m(t, e);
        }(n, a);
    }
  }

  function l(t, e) {
    return -1 === m(t, e);
  }

  function h(t, e) {
    var r = m(t, e);
    return 1 === r || 0 === r;
  }

  function p(t) {
    var e = t.split(i),
        r = e[0].match(a);
    return r || n(!1), {
      modifier: r[1],
      rangeComponents: [r[2]].concat(e.slice(1))
    };
  }

  function d(t) {
    return !isNaN(t) && isFinite(t);
  }

  function g(t) {
    return !p(t).modifier;
  }

  function v(t, e) {
    for (var r = t.length; r < e; r++) t[r] = "0";
  }

  function y(t, e) {
    var r = t.match(s)[1],
        n = e.match(s)[1],
        i = parseInt(r, 10),
        o = parseInt(n, 10);
    return d(i) && d(o) && i !== o ? _(i, o) : _(t, e);
  }

  function _(t, e) {
    return typeof t != typeof e && n(!1), t > e ? 1 : t < e ? -1 : 0;
  }

  function m(t, e) {
    for (var r = function (t, e) {
      v(t = t.slice(), (e = e.slice()).length);

      for (var r = 0; r < e.length; r++) {
        var n = e[r].match(/^[x*]$/i);
        if (n && (e[r] = t[r] = "0", "*" === n[0] && r === e.length - 1)) for (var i = r; i < t.length; i++) t[i] = "0";
      }

      return v(e, t.length), [t, e];
    }(t, e), n = r[0], i = r[1], o = 0; o < i.length; o++) {
      var u = y(n[o], i[o]);
      if (u) return u;
    }

    return 0;
  }

  var b = {
    contains: function (t, e) {
      return c(t.trim(), e.trim());
    }
  };
  t.exports = b;
}, function (t, e, r) {
  "use strict";

  var n = Object.prototype.hasOwnProperty;

  t.exports = function (t, e, r) {
    if (!t) return null;
    var i = {};

    for (var o in t) n.call(t, o) && (i[o] = e.call(r, t[o], o, t));

    return i;
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    var e = {};
    return function (r) {
      return e.hasOwnProperty(r) || (e[r] = t.call(this, r)), e[r];
    };
  };
}, function (t, e, r) {
  "use strict";

  var n = r(426)("draft_tree_data_support");
  t.exports = r(n ? 562 : 576);
}, function (t, e, r) {
  "use strict";

  var n = r(99);

  function i() {
    return (i = n || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];

        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
      }

      return t;
    }).apply(this, arguments);
  }

  var o = r(563),
      u = r(423),
      a = r(0),
      s = r(418),
      c = function (t) {
    var e, r;

    function n() {
      return t.apply(this, arguments) || this;
    }

    r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
    var c = n.prototype;
    return c.shouldComponentUpdate = function (t) {
      var e = this.props.editorState,
          r = t.editorState;
      if (e.getDirectionMap() !== r.getDirectionMap()) return !0;
      if (e.getSelection().getHasFocus() !== r.getSelection().getHasFocus()) return !0;
      var n = r.getNativelyRenderedContent(),
          i = e.isInCompositionMode(),
          o = r.isInCompositionMode();
      if (e === r || null !== n && r.getCurrentContent() === n || i && o) return !1;
      var u = e.getCurrentContent(),
          a = r.getCurrentContent(),
          s = e.getDecorator(),
          c = r.getDecorator();
      return i !== o || u !== a || s !== c || r.mustForceSelection();
    }, c.render = function () {
      for (var t = this.props, e = t.blockRenderMap, r = t.blockRendererFn, n = t.blockStyleFn, c = t.customStyleMap, f = t.customStyleFn, l = t.editorState, h = t.editorKey, p = t.textDirectionality, d = l.getCurrentContent(), g = l.getSelection(), v = l.mustForceSelection(), y = l.getDecorator(), _ = s(l.getDirectionMap()), m = [], b = d.getBlocksAsArray()[0]; b;) {
        var S = b.getKey(),
            w = {
          blockRenderMap: e,
          blockRendererFn: r,
          blockStyleFn: n,
          contentState: d,
          customStyleFn: f,
          customStyleMap: c,
          decorator: y,
          editorKey: h,
          editorState: l,
          forceSelection: v,
          selection: g,
          block: b,
          direction: p || _.get(S),
          tree: l.getBlockTree(S)
        },
            x = (e.get(b.getType()) || e.get("unstyled")).wrapper;
        m.push({
          block: a.createElement(o, i({
            key: S
          }, w)),
          wrapperTemplate: x,
          key: S,
          offsetKey: u.encode(S, 0, 0)
        });
        var k = b.getNextSiblingKey();
        b = k ? d.getBlockForKey(k) : null;
      }

      for (var E = [], O = 0; O < m.length;) {
        var C = m[O];

        if (C.wrapperTemplate) {
          var D = [];

          do {
            D.push(m[O].block), O++;
          } while (O < m.length && m[O].wrapperTemplate === C.wrapperTemplate);

          var I = a.cloneElement(C.wrapperTemplate, {
            key: C.key + "-wrap",
            "data-offset-key": C.offsetKey
          }, D);
          E.push(I);
        } else E.push(C.block), O++;
      }

      return a.createElement("div", {
        "data-contents": "true"
      }, E);
    }, n;
  }(a.Component);

  t.exports = c;
}, function (t, e, r) {
  "use strict";

  var n = r(99);

  function i() {
    return (i = n || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];

        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
      }

      return t;
    }).apply(this, arguments);
  }

  function o(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function u(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), n.forEach(function (e) {
        a(t, e, r[e]);
      });
    }

    return t;
  }

  function a(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var s = r(564),
      c = r(423),
      f = r(0),
      l = r(457),
      h = r(445),
      p = r(492),
      d = r(446),
      g = r(493),
      v = r(413),
      y = r(414),
      _ = r(434),
      m = (v.List, function (t, e) {
    return t.getAnchorKey() === e || t.getFocusKey() === e;
  }),
      b = function (t, e) {
    var r = e.get(t.getType()) || e.get("unstyled"),
        n = r.wrapper;
    return {
      Element: r.element || e.get("unstyled").element,
      wrapperTemplate: n
    };
  },
      S = function (t, e) {
    var r = e(t);
    return r ? {
      CustomComponent: r.component,
      customProps: r.props,
      customEditable: r.editable
    } : {};
  },
      w = function (t, e, r, n, i, o) {
    var a = {
      "data-block": !0,
      "data-editor": e,
      "data-offset-key": r,
      key: t.getKey(),
      ref: o
    },
        s = n(t);
    return s && (a.className = s), void 0 !== i.customEditable && (a = u({}, a, {
      contentEditable: i.customEditable,
      suppressContentEditableWarning: !0
    })), a;
  },
      x = function (t) {
    var e, r;

    function n() {
      for (var e, r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];

      return a(o(e = t.call.apply(t, [this].concat(n)) || this), "wrapperRef", f.createRef()), e;
    }

    r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
    var v = n.prototype;
    return v.shouldComponentUpdate = function (t) {
      var e = this.props,
          r = e.block,
          n = e.direction,
          i = e.tree,
          o = !r.getChildKeys().isEmpty(),
          u = r !== t.block || i !== t.tree || n !== t.direction || m(t.selection, t.block.getKey()) && t.forceSelection;
      return o || u;
    }, v.componentDidMount = function () {
      var t = this.props.selection,
          e = t.getEndKey();

      if (t.getHasFocus() && e === this.props.block.getKey()) {
        var r = this.wrapperRef.current;

        if (r) {
          var n,
              i = h.getScrollParent(r),
              o = d(i);

          if (i === window) {
            var u = p(r);
            (n = u.y + u.height - g().height) > 0 && window.scrollTo(o.x, o.y + n + 10);
          } else {
            _(r) || y(!1);
            var a = r;
            (n = a.offsetHeight + a.offsetTop - (i.offsetHeight + o.y)) > 0 && l.setTop(i, l.getTop(i) + n + 10);
          }
        }
      }
    }, v.render = function () {
      var t = this,
          e = this.props,
          r = e.block,
          o = e.blockRenderMap,
          a = e.blockRendererFn,
          l = e.blockStyleFn,
          h = e.contentState,
          p = e.decorator,
          d = e.editorKey,
          g = e.editorState,
          v = e.customStyleFn,
          y = e.customStyleMap,
          _ = e.direction,
          x = e.forceSelection,
          k = e.selection,
          E = e.tree,
          O = null;
      r.children.size && (O = r.children.reduce(function (e, r) {
        var i = c.encode(r, 0, 0),
            s = h.getBlockForKey(r),
            p = S(s, a),
            v = p.CustomComponent || n,
            y = b(s, o),
            _ = y.Element,
            m = y.wrapperTemplate,
            x = w(s, d, i, l, p, null),
            k = u({}, t.props, {
          tree: g.getBlockTree(r),
          blockProps: p.customProps,
          offsetKey: i,
          block: s
        });
        return e.push(f.createElement(_, x, f.createElement(v, k))), !m || function (t, e) {
          var r = t.getNextSiblingKey();
          return !!r && e.getBlockForKey(r).getType() === t.getType();
        }(s, h) || function (t, e, r) {
          var n = [],
              i = !0,
              o = !1,
              u = void 0;

          try {
            for (var a, s = r.reverse()[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) {
              var l = a.value;
              if (l.type !== e) break;
              n.push(l);
            }
          } catch (t) {
            o = !0, u = t;
          } finally {
            try {
              i || null == s.return || s.return();
            } finally {
              if (o) throw u;
            }
          }

          r.splice(r.indexOf(n[0]), n.length + 1);
          var h = n.reverse(),
              p = h[0].key;
          r.push(f.cloneElement(t, {
            key: "".concat(p, "-wrap"),
            "data-offset-key": c.encode(p, 0, 0)
          }, h));
        }(m, _, e), e;
      }, []));
      var C = r.getKey(),
          D = c.encode(C, 0, 0),
          I = S(r, a),
          M = I.CustomComponent,
          A = null != M ? f.createElement(M, i({}, this.props, {
        tree: g.getBlockTree(C),
        blockProps: I.customProps,
        offsetKey: D,
        block: r
      })) : f.createElement(s, {
        block: r,
        children: O,
        contentState: h,
        customStyleFn: v,
        customStyleMap: y,
        decorator: p,
        direction: _,
        forceSelection: x,
        hasSelection: m(k, C),
        selection: k,
        tree: E
      });
      if (r.getParentKey()) return A;
      var K = b(r, o).Element,
          T = w(r, d, D, l, I, this.wrapperRef);
      return f.createElement(K, T, A);
    }, n;
  }(f.Component);

  t.exports = x;
}, function (t, e, r) {
  "use strict";

  var n = r(565),
      i = r(488),
      o = r(423),
      u = r(413),
      a = r(0),
      s = r(428),
      c = (u.List, function (t) {
    var e, r;

    function u() {
      return t.apply(this, arguments) || this;
    }

    return r = t, (e = u).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, u.prototype.render = function () {
      var t = this.props,
          e = t.block,
          r = t.contentState,
          u = t.customStyleFn,
          c = t.customStyleMap,
          f = t.decorator,
          l = t.direction,
          h = t.forceSelection,
          p = t.hasSelection,
          d = t.selection,
          g = t.tree,
          v = e.getKey(),
          y = e.getText(),
          _ = g.size - 1,
          m = this.props.children || g.map(function (t, s) {
        var g = t.get("decoratorKey"),
            m = t.get("leaves"),
            b = m.size - 1,
            S = m.map(function (t, r) {
          var n = o.encode(v, s, r),
              f = t.get("start"),
              l = t.get("end");
          return a.createElement(i, {
            key: n,
            offsetKey: n,
            block: e,
            start: f,
            selection: p ? d : null,
            forceSelection: h,
            text: y.slice(f, l),
            styleSet: e.getInlineStyleAt(f),
            customStyleMap: c,
            customStyleFn: u,
            isLast: g === _ && r === b
          });
        }).toArray();
        return g && f ? a.createElement(n, {
          block: e,
          children: S,
          contentState: r,
          decorator: f,
          decoratorKey: g,
          direction: l,
          leafSet: t,
          text: y,
          key: s
        }) : S;
      }).toArray();

      return a.createElement("div", {
        "data-offset-key": o.encode(v, 0, 0),
        className: s({
          "public/DraftStyleDefault/block": !0,
          "public/DraftStyleDefault/ltr": "LTR" === l,
          "public/DraftStyleDefault/rtl": "RTL" === l
        })
      }, m);
    }, u;
  }(a.Component));
  t.exports = c;
}, function (t, e, r) {
  "use strict";

  var n = r(99);

  function i() {
    return (i = n || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];

        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
      }

      return t;
    }).apply(this, arguments);
  }

  var o = r(423),
      u = r(0),
      a = r(453),
      s = r(441),
      c = function (t) {
    var e, r;

    function n() {
      return t.apply(this, arguments) || this;
    }

    return r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, n.prototype.render = function () {
      var t = this.props,
          e = t.block,
          r = t.children,
          n = t.contentState,
          c = t.decorator,
          f = t.decoratorKey,
          l = t.direction,
          h = t.leafSet,
          p = t.text,
          d = e.getKey(),
          g = h.get("leaves"),
          v = c.getComponentForKey(f),
          y = c.getPropsForKey(f),
          _ = o.encode(d, parseInt(f, 10), 0),
          m = p.slice(g.first().get("start"), g.last().get("end")),
          b = s.getHTMLDirIfDifferent(a.getDirection(m), l);

      return u.createElement(v, i({}, y, {
        contentState: n,
        decoratedText: m,
        dir: b,
        key: _,
        entityKey: e.getEntityAt(h.get("start")),
        offsetKey: _
      }), r);
    }, n;
  }(u.Component);

  t.exports = c;
}, function (t, e, r) {
  "use strict";

  function n(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function i(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var o = r(0),
      u = r(419),
      a = r(414),
      s = r(429),
      c = u.isBrowser("IE <= 11");

  var f = function (t) {
    var e, r;

    function u(e) {
      var r;
      return i(n(r = t.call(this, e) || this), "_forceFlag", void 0), i(n(r), "_node", void 0), r._forceFlag = !1, r;
    }

    r = t, (e = u).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
    var f = u.prototype;
    return f.shouldComponentUpdate = function (t) {
      var e = this._node,
          r = "" === t.children;
      s(e) || a(!1);
      var n = e;
      return r ? !function (t) {
        return c ? "\n" === t.textContent : "BR" === t.tagName;
      }(n) : n.textContent !== t.children;
    }, f.componentDidMount = function () {
      this._forceFlag = !this._forceFlag;
    }, f.componentDidUpdate = function () {
      this._forceFlag = !this._forceFlag;
    }, f.render = function () {
      var t = this;
      return "" === this.props.children ? this._forceFlag ? function (t) {
        return c ? o.createElement("span", {
          key: "A",
          "data-text": "true",
          ref: t
        }, "\n") : o.createElement("br", {
          key: "A",
          "data-text": "true",
          ref: t
        });
      }(function (e) {
        return t._node = e;
      }) : function (t) {
        return c ? o.createElement("span", {
          key: "B",
          "data-text": "true",
          ref: t
        }, "\n") : o.createElement("br", {
          key: "B",
          "data-text": "true",
          ref: t
        });
      }(function (e) {
        return t._node = e;
      }) : o.createElement("span", {
        key: this._forceFlag ? "A" : "B",
        "data-text": "true",
        ref: function (e) {
          return t._node = e;
        }
      }, this.props.children);
    }, u;
  }(o.Component);

  t.exports = f;
}, function (t, e, r) {
  "use strict";

  var n = r(490),
      i = r(482),
      o = r(419),
      u = r(456),
      a = r(491),
      s = r(443),
      c = r(414),
      f = r(429),
      l = o.isBrowser("IE");

  function h(t, e) {
    if (!t) return "[empty]";

    var r = function t(e, r) {
      var n = void 0 !== r ? r(e) : [];

      if (e.nodeType === Node.TEXT_NODE) {
        var i = e.textContent.length;
        return s(e).createTextNode("[text " + i + (n.length ? " | " + n.join(", ") : "") + "]");
      }

      var o = e.cloneNode();
      1 === o.nodeType && n.length && o.setAttribute("data-labels", n.join(", "));

      for (var u = e.childNodes, a = 0; a < u.length; a++) o.appendChild(t(u[a], r));

      return o;
    }(t, e);

    return r.nodeType === Node.TEXT_NODE ? r.textContent : (f(r) || c(!1), r.outerHTML);
  }

  function p(t, e) {
    for (var r = t, n = r; r;) {
      if (f(r) && n.hasAttribute("contenteditable")) return h(r, e);
      n = r = r.parentNode;
    }

    return "Could not find contentEditable parent of node";
  }

  function d(t) {
    return null === t.nodeValue ? t.childNodes.length : t.nodeValue.length;
  }

  function g(t, e, r, n) {
    var o = a();

    if (t.extend && null != e && u(o, e)) {
      r > d(e) && i.logSelectionStateFailure({
        anonymizedDom: p(e),
        extraParams: JSON.stringify({
          offset: r
        }),
        selectionState: JSON.stringify(n.toJS())
      });
      var s = e === t.focusNode;

      try {
        t.rangeCount > 0 && t.extend && t.extend(e, r);
      } catch (u) {
        throw i.logSelectionStateFailure({
          anonymizedDom: p(e, function (e) {
            var r = [];
            return e === o && r.push("active element"), e === t.anchorNode && r.push("selection anchor node"), e === t.focusNode && r.push("selection focus node"), r;
          }),
          extraParams: JSON.stringify({
            activeElementName: o ? o.nodeName : null,
            nodeIsFocus: e === t.focusNode,
            nodeWasFocus: s,
            selectionRangeCount: t.rangeCount,
            selectionAnchorNodeName: t.anchorNode ? t.anchorNode.nodeName : null,
            selectionAnchorOffset: t.anchorOffset,
            selectionFocusNodeName: t.focusNode ? t.focusNode.nodeName : null,
            selectionFocusOffset: t.focusOffset,
            message: u ? "" + u : null,
            offset: r
          }, null, 2),
          selectionState: JSON.stringify(n.toJS(), null, 2)
        }), u;
      }
    } else if (e && t.rangeCount > 0) {
      var c = t.getRangeAt(0);
      c.setEnd(e, r), t.addRange(c.cloneRange());
    }
  }

  function v(t, e, r, o) {
    var u = s(e).createRange();
    if (r > d(e) && (i.logSelectionStateFailure({
      anonymizedDom: p(e),
      extraParams: JSON.stringify({
        offset: r
      }),
      selectionState: JSON.stringify(o.toJS())
    }), n.handleExtensionCausedError()), u.setStart(e, r), l) try {
      t.addRange(u);
    } catch (t) {
      0;
    } else t.addRange(u);
  }

  t.exports = {
    setDraftEditorSelection: function (t, e, r, n, i) {
      var o = s(e);

      if (u(o.documentElement, e)) {
        var a = o.defaultView.getSelection(),
            c = t.getAnchorKey(),
            f = t.getAnchorOffset(),
            l = t.getFocusKey(),
            h = t.getFocusOffset(),
            p = t.getIsBackward();

        if (!a.extend && p) {
          var d = c,
              y = f;
          c = l, f = h, l = d, h = y, p = !1;
        }

        var _ = c === r && n <= f && i >= f,
            m = l === r && n <= h && i >= h;

        if (_ && m) return a.removeAllRanges(), v(a, e, f - n, t), void g(a, e, h - n, t);

        if (p) {
          if (m && (a.removeAllRanges(), v(a, e, h - n, t)), _) {
            var b = a.focusNode,
                S = a.focusOffset;
            a.removeAllRanges(), v(a, e, f - n, t), g(a, b, S, t);
          }
        } else _ && (a.removeAllRanges(), v(a, e, f - n, t)), m && g(a, e, h - n, t);
      }
    },
    addFocusToSelection: g
  };
}, function (t, e, r) {
  "use strict";

  var n = r(569);

  t.exports = function (t) {
    return n(t) && 3 == t.nodeType;
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    var e = (t ? t.ownerDocument || t : document).defaultView || window;
    return !(!t || !("function" == typeof e.Node ? t instanceof e.Node : "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName));
  };
}, function (t, e, r) {
  "use strict";

  var n = r(571),
      i = r(572);

  function o(t) {
    return null == t ? t : String(t);
  }

  t.exports = function (t, e) {
    var r;
    if (window.getComputedStyle && (r = window.getComputedStyle(t, null))) return o(r.getPropertyValue(i(e)));

    if (document.defaultView && document.defaultView.getComputedStyle) {
      if (r = document.defaultView.getComputedStyle(t, null)) return o(r.getPropertyValue(i(e)));
      if ("display" === e) return "none";
    }

    return t.currentStyle ? o("float" === e ? t.currentStyle.cssFloat || t.currentStyle.styleFloat : t.currentStyle[n(e)]) : o(t.style && t.style[n(e)]);
  };
}, function (t, e, r) {
  "use strict";

  var n = /-(.)/g;

  t.exports = function (t) {
    return t.replace(n, function (t, e) {
      return e.toUpperCase();
    });
  };
}, function (t, e, r) {
  "use strict";

  var n = /([A-Z])/g;

  t.exports = function (t) {
    return t.replace(n, "-$1").toLowerCase();
  };
}, function (t, e, r) {
  "use strict";

  var n = r(456);

  t.exports = function (t) {
    var e = t.ownerDocument.documentElement;
    if (!("getBoundingClientRect" in t) || !n(e, t)) return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    var r = t.getBoundingClientRect();
    return {
      left: Math.round(r.left) - e.clientLeft,
      right: Math.round(r.right) - e.clientLeft,
      top: Math.round(r.top) - e.clientTop,
      bottom: Math.round(r.bottom) - e.clientTop
    };
  };
}, function (t, e, r) {
  "use strict";

  var n = "undefined" != typeof navigator && navigator.userAgent.indexOf("AppleWebKit") > -1;

  t.exports = function (t) {
    return (t = t || document).scrollingElement ? t.scrollingElement : n || "CSS1Compat" !== t.compatMode ? t.body : t.documentElement;
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    return t.Window && t instanceof t.Window ? {
      x: t.pageXOffset || t.document.documentElement.scrollLeft,
      y: t.pageYOffset || t.document.documentElement.scrollTop
    } : {
      x: t.scrollLeft,
      y: t.scrollTop
    };
  };
}, function (t, e, r) {
  "use strict";

  var n = r(99);

  function i() {
    return (i = n || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];

        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
      }

      return t;
    }).apply(this, arguments);
  }

  function o(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), n.forEach(function (e) {
        u(t, e, r[e]);
      });
    }

    return t;
  }

  function u(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var a = r(494),
      s = r(423),
      c = r(0),
      f = r(428),
      l = r(577),
      h = r(418),
      p = function (t, e, r, n) {
    return f({
      "public/DraftStyleDefault/unorderedListItem": "unordered-list-item" === t,
      "public/DraftStyleDefault/orderedListItem": "ordered-list-item" === t,
      "public/DraftStyleDefault/reset": r,
      "public/DraftStyleDefault/depth0": 0 === e,
      "public/DraftStyleDefault/depth1": 1 === e,
      "public/DraftStyleDefault/depth2": 2 === e,
      "public/DraftStyleDefault/depth3": 3 === e,
      "public/DraftStyleDefault/depth4": e >= 4,
      "public/DraftStyleDefault/listLTR": "LTR" === n,
      "public/DraftStyleDefault/listRTL": "RTL" === n
    });
  },
      d = function (t) {
    var e, r;

    function n() {
      return t.apply(this, arguments) || this;
    }

    r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
    var u = n.prototype;
    return u.shouldComponentUpdate = function (t) {
      var e = this.props.editorState,
          r = t.editorState;
      if (e.getDirectionMap() !== r.getDirectionMap()) return !0;
      if (e.getSelection().getHasFocus() !== r.getSelection().getHasFocus()) return !0;
      var n = r.getNativelyRenderedContent(),
          i = e.isInCompositionMode(),
          o = r.isInCompositionMode();
      if (e === r || null !== n && r.getCurrentContent() === n || i && o) return !1;
      var u = e.getCurrentContent(),
          a = r.getCurrentContent(),
          s = e.getDecorator(),
          c = r.getDecorator();
      return i !== o || u !== a || s !== c || r.mustForceSelection();
    }, u.render = function () {
      for (var t = this.props, e = t.blockRenderMap, r = t.blockRendererFn, n = t.blockStyleFn, u = t.customStyleMap, f = t.customStyleFn, d = t.editorState, g = t.editorKey, v = t.preventScroll, y = t.textDirectionality, _ = d.getCurrentContent(), m = d.getSelection(), b = d.mustForceSelection(), S = d.getDecorator(), w = h(d.getDirectionMap()), x = _.getBlocksAsArray(), k = [], E = null, O = null, C = 0; C < x.length; C++) {
        var D = x[C],
            I = D.getKey(),
            M = D.getType(),
            A = r(D),
            K = void 0,
            T = void 0,
            z = void 0;
        A && (K = A.component, T = A.props, z = A.editable);
        var B = y || w.get(I),
            R = s.encode(I, 0, 0),
            L = {
          contentState: _,
          block: D,
          blockProps: T,
          blockStyleFn: n,
          customStyleMap: u,
          customStyleFn: f,
          decorator: S,
          direction: B,
          forceSelection: b,
          offsetKey: R,
          preventScroll: v,
          selection: m,
          tree: d.getBlockTree(I)
        },
            j = e.get(M) || e.get("unstyled"),
            N = j.wrapper,
            F = j.element || e.get("unstyled").element,
            P = D.getDepth(),
            U = "";
        if (n && (U = n(D)), "li" === F) U = l(U, p(M, P, O !== N || null === E || P > E, B));
        var q = K || a,
            H = {
          className: U,
          "data-block": !0,
          "data-editor": g,
          "data-offset-key": R,
          key: I
        };
        void 0 !== z && (H = o({}, H, {
          contentEditable: z,
          suppressContentEditableWarning: !0
        }));
        var W = c.createElement(F, H, c.createElement(q, i({}, L, {
          key: I
        })));
        k.push({
          block: W,
          wrapperTemplate: N,
          key: I,
          offsetKey: R
        }), E = N ? D.getDepth() : null, O = N;
      }

      for (var V = [], J = 0; J < k.length;) {
        var G = k[J];

        if (G.wrapperTemplate) {
          var Z = [];

          do {
            Z.push(k[J].block), J++;
          } while (J < k.length && k[J].wrapperTemplate === G.wrapperTemplate);

          var X = c.cloneElement(G.wrapperTemplate, {
            key: G.key + "-wrap",
            "data-offset-key": G.offsetKey
          }, Z);
          V.push(X);
        } else V.push(G.block), J++;
      }

      return c.createElement("div", {
        "data-contents": "true"
      }, V);
    }, n;
  }(c.Component);

  t.exports = d;
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    var e = t || "",
        r = arguments.length;
    if (r > 1) for (var n = 1; n < r; n++) {
      var i = arguments[n];
      i && (e = (e ? e + " " : "") + i);
    }
    return e;
  };
}, function (t, e, r) {
  "use strict";

  var n = r(495),
      i = r(417),
      o = r(415),
      u = r(442),
      a = r(443),
      s = r(497),
      c = r(486),
      f = r(480),
      l = r(447),
      h = r(418);
  var p = {
    onDragEnd: function (t) {
      t.exitCurrentMode(), d(t);
    },
    onDrop: function (t, e) {
      var r = new n(e.nativeEvent.dataTransfer),
          f = t._latestEditorState,
          p = function (t, e) {
        var r = null,
            n = null,
            i = a(t.currentTarget);

        if ("function" == typeof i.caretRangeFromPoint) {
          var o = i.caretRangeFromPoint(t.x, t.y);
          r = o.startContainer, n = o.startOffset;
        } else {
          if (!t.rangeParent) return null;
          r = t.rangeParent, n = t.rangeOffset;
        }

        r = h(r), n = h(n);
        var s = h(u(r));
        return c(e, s, n, s, n);
      }(e.nativeEvent, f);

      if (e.preventDefault(), t._dragCount = 0, t.exitCurrentMode(), null != p) {
        var v = r.getFiles();

        if (v.length > 0) {
          if (t.props.handleDroppedFiles && l(t.props.handleDroppedFiles(p, v))) return;
          s(v, function (e) {
            e && t.update(g(f, p, e));
          });
        } else {
          var y = t._internalDrag ? "internal" : "external";
          t.props.handleDrop && l(t.props.handleDrop(p, r, y)) || (t._internalDrag ? t.update(function (t, e) {
            var r = i.moveText(t.getCurrentContent(), t.getSelection(), e);
            return o.push(t, r, "insert-fragment");
          }(f, p)) : t.update(g(f, p, r.getText()))), d(t);
        }
      }
    }
  };

  function d(t) {
    t._internalDrag = !1;
    var e = t.editorContainer;

    if (e) {
      var r = new MouseEvent("mouseup", {
        view: f(e),
        bubbles: !0,
        cancelable: !0
      });
      e.dispatchEvent(r);
    }
  }

  function g(t, e, r) {
    var n = i.insertText(t.getCurrentContent(), e, r, t.getCurrentInlineStyle());
    return o.push(t, n, "insert-fragment");
  }

  t.exports = p;
}, function (t, e, r) {
  "use strict";

  var n = {
    isImage: function (t) {
      return "image" === i(t)[0];
    },
    isJpeg: function (t) {
      var e = i(t);
      return n.isImage(t) && ("jpeg" === e[1] || "pjpeg" === e[1]);
    }
  };

  function i(t) {
    return t.split("/");
  }

  t.exports = n;
}, function (t, e, r) {
  "use strict";

  var n = r(414);

  t.exports = function (t) {
    return function (t) {
      return !!t && ("object" == typeof t || "function" == typeof t) && "length" in t && !("setInterval" in t) && "number" != typeof t.nodeType && (Array.isArray(t) || "callee" in t || "item" in t);
    }(t) ? Array.isArray(t) ? t.slice() : function (t) {
      var e = t.length;
      if ((Array.isArray(t) || "object" != typeof t && "function" != typeof t) && n(!1), "number" != typeof e && n(!1), 0 === e || e - 1 in t || n(!1), "function" == typeof t.callee && n(!1), t.hasOwnProperty) try {
        return Array.prototype.slice.call(t);
      } catch (t) {}

      for (var r = Array(e), i = 0; i < e; i++) r[i] = t[i];

      return r;
    }(t) : [t];
  };
}, function (t, e, r) {
  "use strict";

  var n = r(419),
      i = r(582),
      o = r(585),
      u = r(586),
      a = r(587),
      s = r(588),
      c = r(590),
      f = r(591),
      l = r(592),
      h = r(593),
      p = r(594),
      d = r(608),
      g = r(481),
      v = n.isBrowser("Chrome"),
      y = n.isBrowser("Firefox"),
      _ = v || y ? g : function (t) {},
      m = {
    onBeforeInput: i,
    onBlur: o,
    onCompositionStart: u,
    onCopy: a,
    onCut: s,
    onDragOver: c,
    onDragStart: f,
    onFocus: l,
    onInput: h,
    onKeyDown: p,
    onPaste: d,
    onSelect: g,
    onMouseUp: _,
    onKeyUp: _
  };

  t.exports = m;
}, function (t, e, r) {
  "use strict";

  var n = r(417),
      i = r(415),
      o = r(419),
      u = r(455),
      a = r(447),
      s = r(583),
      c = r(418),
      f = r(584),
      l = o.isBrowser("Firefox");

  function h(t, e, r, o, u) {
    var a = n.replaceText(t.getCurrentContent(), t.getSelection(), e, r, o);
    return i.push(t, a, "insert-characters", u);
  }

  t.exports = function (t, e) {
    void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0);
    var r = t._latestEditorState,
        n = e.data;
    if (n) if (t.props.handleBeforeInput && a(t.props.handleBeforeInput(n, r, e.timeStamp))) e.preventDefault();else {
      var o = r.getSelection(),
          p = o.getStartOffset(),
          d = o.getAnchorKey();
      if (!o.isCollapsed()) return e.preventDefault(), void t.update(h(r, n, r.getCurrentInlineStyle(), u(r.getCurrentContent(), r.getSelection()), !0));
      var g,
          v = h(r, n, r.getCurrentInlineStyle(), u(r.getCurrentContent(), r.getSelection()), !1),
          y = !1;

      if (y || (y = s(t._latestCommittedEditorState)), !y) {
        var _ = r.getBlockTree(d),
            m = v.getBlockTree(d);

        y = _.size !== m.size || _.zip(m).some(function (t) {
          var e = t[0],
              r = t[1],
              i = e.get("start"),
              o = i + (i >= p ? n.length : 0),
              u = e.get("end"),
              a = u + (u >= p ? n.length : 0),
              s = r.get("start"),
              c = r.get("end"),
              f = r.get("decoratorKey");
          return e.get("decoratorKey") !== f || e.get("leaves").size !== r.get("leaves").size || o !== s || a !== c || null != f && c - s != u - i;
        });
      }

      if (y || (g = n, y = l && ("'" == g || "/" == g)), y || (y = c(v.getDirectionMap()).get(d) !== c(r.getDirectionMap()).get(d)), y) return e.preventDefault(), v = i.set(v, {
        forceSelection: !0
      }), void t.update(v);
      v = i.set(v, {
        nativelyRenderedContent: v.getCurrentContent()
      }), t._pendingStateFromBeforeInput = v, f(function () {
        void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0);
      });
    }
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    var e = t.getSelection(),
        r = e.getAnchorKey(),
        n = t.getBlockTree(r),
        i = e.getStartOffset(),
        o = !1;
    return n.some(function (t) {
      return i === t.get("start") ? (o = !0, !0) : i < t.get("end") && t.get("leaves").some(function (t) {
        var e = t.get("start");
        return i === e && (o = !0, !0);
      });
    }), o;
  };
}, function (t, e, r) {
  "use strict";

  (function (e) {
    r(467), t.exports = e.setImmediate;
  }).call(this, r(62));
}, function (t, e, r) {
  "use strict";

  var n = r(415),
      i = r(456),
      o = r(491);

  t.exports = function (t, e) {
    var r = e.currentTarget.ownerDocument;

    if (!Boolean(t.props.preserveSelectionOnBlur) && o(r) === r.body) {
      var u = r.defaultView.getSelection(),
          a = t.editor;
      1 === u.rangeCount && i(a, u.anchorNode) && i(a, u.focusNode) && u.removeAllRanges();
    }

    var s = t._latestEditorState,
        c = s.getSelection();

    if (c.getHasFocus()) {
      var f = c.set("hasFocus", !1);
      t.props.onBlur && t.props.onBlur(e), t.update(n.acceptSelection(s, f));
    }
  };
}, function (t, e, r) {
  "use strict";

  var n = r(415);

  t.exports = function (t, e) {
    t.setMode("composite"), t.update(n.set(t._latestEditorState, {
      inCompositionMode: !0
    })), t._onCompositionStart(e);
  };
}, function (t, e, r) {
  "use strict";

  var n = r(498);

  t.exports = function (t, e) {
    t._latestEditorState.getSelection().isCollapsed() ? e.preventDefault() : t.setClipboard(n(t._latestEditorState));
  };
}, function (t, e, r) {
  "use strict";

  var n = r(417),
      i = r(415),
      o = r(445),
      u = r(498),
      a = r(446),
      s = r(589);

  t.exports = function (t, e) {
    var r,
        c = t._latestEditorState,
        f = c.getSelection(),
        l = e.target;
    if (f.isCollapsed()) e.preventDefault();else {
      if (s(l)) {
        var h = l;
        r = a(o.getScrollParent(h));
      }

      var p = u(c);
      t.setClipboard(p), t.setMode("cut"), setTimeout(function () {
        t.restoreEditorDOM(r), t.exitCurrentMode(), t.update(function (t) {
          var e = n.removeRange(t.getCurrentContent(), t.getSelection(), "forward");
          return i.push(t, e, "remove-range");
        }(c));
      }, 0);
    }
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    if (!t || !("ownerDocument" in t)) return !1;

    if ("ownerDocument" in t) {
      var e = t;
      if (!e.ownerDocument.defaultView) return e instanceof Node;
      if (e instanceof e.ownerDocument.defaultView.Node) return !0;
    }

    return !1;
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t, e) {
    t.setMode("drag"), e.preventDefault();
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    t._internalDrag = !0, t.setMode("drag");
  };
}, function (t, e, r) {
  "use strict";

  var n = r(415),
      i = r(419);

  t.exports = function (t, e) {
    var r = t._latestEditorState,
        o = r.getSelection();

    if (!o.getHasFocus()) {
      var u = o.set("hasFocus", !0);
      t.props.onFocus && t.props.onFocus(e), i.isBrowser("Chrome < 60.0.3081.0") ? t.update(n.forceSelection(r, u)) : t.update(n.acceptSelection(r, u));
    }
  };
}, function (t, e, r) {
  "use strict";

  var n = r(417),
      i = r(423),
      o = r(415),
      u = r(419),
      a = r(487).notEmptyKey,
      s = r(442),
      c = r(499),
      f = r(418),
      l = u.isEngine("Gecko");

  t.exports = function (t, e) {
    void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0);
    var r = t.editor.ownerDocument.defaultView.getSelection(),
        u = r.anchorNode,
        h = r.isCollapsed,
        p = (null == u ? void 0 : u.nodeType) !== Node.TEXT_NODE && (null == u ? void 0 : u.nodeType) !== Node.ELEMENT_NODE;

    if (null != u && !p) {
      if (u.nodeType === Node.TEXT_NODE && (null !== u.previousSibling || null !== u.nextSibling)) {
        var d = u.parentNode;
        if (null == d) return;
        u.nodeValue = d.textContent;

        for (var g = d.firstChild; null != g; g = g.nextSibling) g !== u && d.removeChild(g);
      }

      var v = u.textContent,
          y = t._latestEditorState,
          _ = f(s(u)),
          m = i.decode(_),
          b = m.blockKey,
          S = m.decoratorKey,
          w = m.leafKey,
          x = y.getBlockTree(b).getIn([S, "leaves", w]),
          k = x.start,
          E = x.end,
          O = y.getCurrentContent(),
          C = O.getBlockForKey(b),
          D = C.getText().slice(k, E);

      if (v.endsWith("\n\n") && (v = v.slice(0, -1)), v !== D) {
        var I,
            M,
            A,
            K,
            T = y.getSelection(),
            z = T.merge({
          anchorOffset: k,
          focusOffset: E,
          isBackward: !1
        }),
            B = C.getEntityAt(k),
            R = a(B) ? O.getEntity(B) : null,
            L = "MUTABLE" === (null != R ? R.getMutability() : null),
            j = L ? "spellcheck-change" : "apply-entity",
            N = n.replaceText(O, z, v, C.getInlineStyleAt(k), L ? C.getEntityAt(k) : null);
        if (l) I = r.anchorOffset, M = r.focusOffset, K = (A = k + Math.min(I, M)) + Math.abs(I - M), I = A, M = K;else {
          var F = v.length - D.length;
          A = T.getStartOffset(), K = T.getEndOffset(), I = h ? K + F : A, M = K + F;
        }
        var P = N.merge({
          selectionBefore: O.getSelectionAfter(),
          selectionAfter: T.merge({
            anchorOffset: I,
            focusOffset: M
          })
        });
        t.update(o.push(y, P, j));
      } else {
        var U = e.nativeEvent.inputType;

        if (U) {
          var q = function (t, e) {
            switch (t) {
              case "deleteContentBackward":
                return c(e);
            }

            return e;
          }(U, y);

          if (q !== y) return t.restoreEditorDOM(), void t.update(q);
        }
      }
    }
  };
}, function (t, e, r) {
  "use strict";

  var n = r(417),
      i = r(415),
      o = r(460),
      u = r(444),
      a = r(596),
      s = r(419),
      c = r(447),
      f = r(597),
      l = r(599),
      h = r(601),
      p = r(602),
      d = r(603),
      g = r(604),
      v = r(499),
      y = r(605),
      _ = r(606),
      m = r(607),
      b = o.isOptionKeyCommand,
      S = s.isBrowser("Chrome");

  t.exports = function (t, e) {
    var r = e.which,
        o = t._latestEditorState;

    function s(r) {
      var n = t.props[r];
      return !!n && (n(e), !0);
    }

    switch (r) {
      case u.RETURN:
        if (e.preventDefault(), t.props.handleReturn && c(t.props.handleReturn(e, o))) return;
        break;

      case u.ESC:
        if (e.preventDefault(), s("onEscape")) return;
        break;

      case u.TAB:
        if (s("onTab")) return;
        break;

      case u.UP:
        if (s("onUpArrow")) return;
        break;

      case u.RIGHT:
        if (s("onRightArrow")) return;
        break;

      case u.DOWN:
        if (s("onDownArrow")) return;
        break;

      case u.LEFT:
        if (s("onLeftArrow")) return;
        break;

      case u.SPACE:
        S && b(e) && e.preventDefault();
    }

    var w = t.props.keyBindingFn(e);
    if (null != w && "" !== w) {
      if ("undo" !== w) {
        if (e.preventDefault(), !t.props.handleKeyCommand || !c(t.props.handleKeyCommand(w, o, e.timeStamp))) {
          var x = function (t, e, r) {
            switch (t) {
              case "redo":
                return i.redo(e);

              case "delete":
                return y(e);

              case "delete-word":
                return h(e);

              case "backspace":
                return v(e);

              case "backspace-word":
                return l(e);

              case "backspace-to-start-of-line":
                return f(e, r);

              case "split-block":
                return p(e);

              case "transpose-characters":
                return _(e);

              case "move-selection-to-start-of-block":
                return g(e);

              case "move-selection-to-end-of-block":
                return d(e);

              case "secondary-cut":
                return a.cut(e);

              case "secondary-paste":
                return a.paste(e);

              default:
                return e;
            }
          }(w, o, e);

          x !== o && t.update(x);
        }
      } else m(e, o, t.update);
    } else if (r === u.SPACE && S && b(e)) {
      var k = n.replaceText(o.getCurrentContent(), o.getSelection(), " ");
      t.update(i.push(o, k, "insert-characters"));
    }
  };
}, function (t, e, r) {
  "use strict";

  var n = r(444);

  t.exports = function (t) {
    return t.which === n.RETURN && (t.getModifierState("Shift") || t.getModifierState("Alt") || t.getModifierState("Control"));
  };
}, function (t, e, r) {
  "use strict";

  var n = r(417),
      i = r(415),
      o = r(438),
      u = r(418),
      a = null,
      s = {
    cut: function (t) {
      var e = t.getCurrentContent(),
          r = t.getSelection(),
          s = null;

      if (r.isCollapsed()) {
        var c = r.getAnchorKey(),
            f = e.getBlockForKey(c).getLength();

        if (f === r.getAnchorOffset()) {
          var l = e.getKeyAfter(c);
          if (null == l) return t;
          s = r.set("focusKey", l).set("focusOffset", 0);
        } else s = r.set("focusOffset", f);
      } else s = r;

      s = u(s), a = o(e, s);
      var h = n.removeRange(e, s, "forward");
      return h === e ? t : i.push(t, h, "remove-range");
    },
    paste: function (t) {
      if (!a) return t;
      var e = n.replaceWithFragment(t.getCurrentContent(), t.getSelection(), a);
      return i.push(t, e, "insert-fragment");
    }
  };
  t.exports = s;
}, function (t, e, r) {
  "use strict";

  var n = r(415),
      i = r(598),
      o = r(485),
      u = r(458),
      a = r(435);

  t.exports = function (t, e) {
    var r = a(t, function (t) {
      var r = t.getSelection();
      if (r.isCollapsed() && 0 === r.getAnchorOffset()) return u(t, 1);
      var n = e.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
      return n = i(n), o(t, null, n.endContainer, n.endOffset, n.startContainer, n.startOffset).selectionState;
    }, "backward");
    return r === t.getCurrentContent() ? t : n.push(t, r, "remove-range");
  };
}, function (t, e, r) {
  "use strict";

  var n = r(430),
      i = r(443),
      o = r(500),
      u = r(414);

  function a(t, e) {
    for (var r = 1 / 0, n = 1 / 0, i = -1 / 0, o = -1 / 0, u = 0; u < t.length; u++) {
      var a = t[u];
      0 !== a.width && 1 !== a.width && (r = Math.min(r, a.top), n = Math.min(n, a.bottom), i = Math.max(i, a.top), o = Math.max(o, a.bottom));
    }

    return i <= n && i - r < e && o - n < e;
  }

  function s(t) {
    switch (t.nodeType) {
      case Node.DOCUMENT_TYPE_NODE:
        return 0;

      case Node.TEXT_NODE:
      case Node.PROCESSING_INSTRUCTION_NODE:
      case Node.COMMENT_NODE:
        return t.length;

      default:
        return t.childNodes.length;
    }
  }

  t.exports = function (t) {
    t.collapsed || u(!1);
    var e = (t = t.cloneRange()).startContainer;
    1 !== e.nodeType && (e = e.parentNode);

    var r = function (t) {
      var e = getComputedStyle(t),
          r = i(t),
          n = r.createElement("div");
      n.style.fontFamily = e.fontFamily, n.style.fontSize = e.fontSize, n.style.fontStyle = e.fontStyle, n.style.fontWeight = e.fontWeight, n.style.lineHeight = e.lineHeight, n.style.position = "absolute", n.textContent = "M";
      var o = r.body;
      o || u(!1), o.appendChild(n);
      var a = n.getBoundingClientRect();
      return o.removeChild(n), a.height;
    }(e),
        c = t.endContainer,
        f = t.endOffset;

    for (t.setStart(t.startContainer, 0); a(o(t), r) && (c = t.startContainer, f = t.startOffset, c.parentNode || u(!1), t.setStartBefore(c), 1 !== c.nodeType || "inline" === getComputedStyle(c).display););

    for (var l = c, h = f - 1;;) {
      for (var p = l.nodeValue, d = h; d >= 0; d--) if (!(null != p && d > 0 && n.isSurrogatePair(p, d - 1))) {
        if (t.setStart(l, d), !a(o(t), r)) break;
        c = l, f = d;
      }

      if (-1 === d || 0 === l.childNodes.length) break;
      h = s(l = l.childNodes[d]);
    }

    return t.setStart(c, f), t;
  };
}, function (t, e, r) {
  "use strict";

  var n = r(501),
      i = r(415),
      o = r(458),
      u = r(435);

  t.exports = function (t) {
    var e = u(t, function (t) {
      var e = t.getSelection(),
          r = e.getStartOffset();
      if (0 === r) return o(t, 1);
      var i = e.getStartKey(),
          u = t.getCurrentContent().getBlockForKey(i).getText().slice(0, r),
          a = n.getBackward(u);
      return o(t, a.length || 1);
    }, "backward");
    return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range");
  };
}, function (t, e, r) {
  "use strict";

  t.exports = {
    getPunctuation: function () {
      return "[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;・、。〈-】〔-〟：-？！-／［-｀｛-･⸮؟٪-٬؛،؍﴾﴿᠁।၊။‐-‧‰-⁞¡-±´-¸º»¿]";
    }
  };
}, function (t, e, r) {
  "use strict";

  var n = r(501),
      i = r(415),
      o = r(502),
      u = r(435);

  t.exports = function (t) {
    var e = u(t, function (t) {
      var e = t.getSelection(),
          r = e.getStartOffset(),
          i = e.getStartKey(),
          u = t.getCurrentContent().getBlockForKey(i).getText().slice(r),
          a = n.getForward(u);
      return o(t, a.length || 1);
    }, "forward");
    return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range");
  };
}, function (t, e, r) {
  "use strict";

  var n = r(417),
      i = r(415);

  t.exports = function (t) {
    var e = n.splitBlock(t.getCurrentContent(), t.getSelection());
    return i.push(t, e, "split-block");
  };
}, function (t, e, r) {
  "use strict";

  var n = r(415);

  t.exports = function (t) {
    var e = t.getSelection(),
        r = e.getEndKey(),
        i = t.getCurrentContent().getBlockForKey(r).getLength();
    return n.set(t, {
      selection: e.merge({
        anchorKey: r,
        anchorOffset: i,
        focusKey: r,
        focusOffset: i,
        isBackward: !1
      }),
      forceSelection: !0
    });
  };
}, function (t, e, r) {
  "use strict";

  var n = r(415);

  t.exports = function (t) {
    var e = t.getSelection(),
        r = e.getStartKey();
    return n.set(t, {
      selection: e.merge({
        anchorKey: r,
        anchorOffset: 0,
        focusKey: r,
        focusOffset: 0,
        isBackward: !1
      }),
      forceSelection: !0
    });
  };
}, function (t, e, r) {
  "use strict";

  var n = r(415),
      i = r(430),
      o = r(502),
      u = r(435);

  t.exports = function (t) {
    var e = u(t, function (t) {
      var e = t.getSelection(),
          r = t.getCurrentContent(),
          n = e.getAnchorKey(),
          u = e.getAnchorOffset(),
          a = r.getBlockForKey(n).getText()[u];
      return o(t, a ? i.getUTF16Length(a, 0) : 1);
    }, "forward");
    if (e === t.getCurrentContent()) return t;
    var r = t.getSelection();
    return n.push(t, e.set("selectionBefore", r), r.isCollapsed() ? "delete-character" : "remove-range");
  };
}, function (t, e, r) {
  "use strict";

  var n = r(417),
      i = r(415),
      o = r(438);

  t.exports = function (t) {
    var e = t.getSelection();
    if (!e.isCollapsed()) return t;
    var r = e.getAnchorOffset();
    if (0 === r) return t;
    var u,
        a,
        s = e.getAnchorKey(),
        c = t.getCurrentContent(),
        f = c.getBlockForKey(s).getLength();
    if (f <= 1) return t;
    r === f ? (u = e.set("anchorOffset", r - 1), a = e) : a = (u = e.set("focusOffset", r + 1)).set("anchorOffset", r + 1);
    var l = o(c, u),
        h = n.removeRange(c, u, "backward"),
        p = h.getSelectionAfter(),
        d = p.getAnchorOffset() - 1,
        g = p.merge({
      anchorOffset: d,
      focusOffset: d
    }),
        v = n.replaceWithFragment(h, g, l),
        y = i.push(t, v, "insert-fragment");
    return i.acceptSelection(y, a);
  };
}, function (t, e, r) {
  "use strict";

  var n = r(415);

  t.exports = function (t, e, r) {
    var i = n.undo(e);
    if ("spellcheck-change" !== e.getLastChangeType()) t.preventDefault(), e.getNativelyRenderedContent() ? (r(n.set(e, {
      nativelyRenderedContent: null
    })), setTimeout(function () {
      r(i);
    }, 0)) : r(i);else {
      var o = i.getCurrentContent();
      r(n.set(i, {
        nativelyRenderedContent: o
      }));
    }
  };
}, function (t, e, r) {
  "use strict";

  var n = r(432),
      i = r(420),
      o = r(495),
      u = r(417),
      a = r(609),
      s = r(415),
      c = r(505),
      f = r(455),
      l = r(497),
      h = r(447),
      p = r(614);

  function d(t, e, r) {
    var n = u.replaceWithFragment(t.getCurrentContent(), t.getSelection(), e);
    return s.push(t, n.set("entityMap", r), "insert-fragment");
  }

  t.exports = function (t, e) {
    e.preventDefault();
    var r = new o(e.clipboardData);

    if (!r.isRichText()) {
      var g = r.getFiles(),
          v = r.getText();

      if (g.length > 0) {
        if (t.props.handlePastedFiles && h(t.props.handlePastedFiles(g))) return;
        return void l(g, function (e) {
          if (e = e || v) {
            var r = t._latestEditorState,
                o = p(e),
                l = i.create({
              style: r.getCurrentInlineStyle(),
              entity: f(r.getCurrentContent(), r.getSelection())
            }),
                h = c.getCurrentBlockType(r),
                d = a.processText(o, l, h),
                g = n.createFromArray(d),
                y = u.replaceWithFragment(r.getCurrentContent(), r.getSelection(), g);
            t.update(s.push(r, y, "insert-fragment"));
          }
        });
      }
    }

    var y = [],
        _ = r.getText(),
        m = r.getHTML(),
        b = t._latestEditorState;

    if (t.props.formatPastedText) {
      var S = t.props.formatPastedText(_, m);
      _ = S.text, m = S.html;
    }

    if (!t.props.handlePastedText || !h(t.props.handlePastedText(_, m, b))) {
      if (_ && (y = p(_)), !t.props.stripPastedStyles) {
        var w,
            x = t.getClipboard();

        if (!t.props.formatPastedText && r.isRichText() && x) {
          if (-1 !== (null === (w = m) || void 0 === w ? void 0 : w.indexOf(t.getEditorKey())) || 1 === y.length && 1 === x.size && x.first().getText() === _) return void t.update(d(t._latestEditorState, x));
        } else if (x && r.types.includes("com.apple.webarchive") && !r.types.includes("text/html") && function (t, e) {
          return t.length === e.size && e.valueSeq().every(function (e, r) {
            return e.getText() === t[r];
          });
        }(y, x)) return void t.update(d(t._latestEditorState, x));

        if (m) {
          var k = a.processHTML(m, t.props.blockRenderMap);

          if (k) {
            var E = k.contentBlocks,
                O = k.entityMap;

            if (E) {
              var C = n.createFromArray(E);
              return void t.update(d(t._latestEditorState, C, O));
            }
          }
        }

        t.setClipboard(null);
      }

      if (y.length) {
        var D = i.create({
          style: b.getCurrentInlineStyle(),
          entity: f(b.getCurrentContent(), b.getSelection())
        }),
            I = c.getCurrentBlockType(b),
            M = a.processText(y, D, I),
            A = n.createFromArray(M);
        t.update(d(t._latestEditorState, A));
      }
    }
  };
}, function (t, e, r) {
  "use strict";

  function n(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var i = r(427),
      o = r(421),
      u = r(503),
      a = r(422),
      s = r(504),
      c = r(426),
      f = r(413),
      l = r(477),
      h = f.List,
      p = f.Repeat,
      d = c("draft_tree_data_support"),
      g = d ? o : i,
      v = {
    processHTML: function (t, e) {
      return u(t, s, e);
    },
    processText: function (t, e, r) {
      return t.reduce(function (t, i, o) {
        i = l(i);
        var u = a(),
            s = {
          key: u,
          type: r,
          text: i,
          characterList: h(p(e, i.length))
        };

        if (d && 0 !== o) {
          var c = o - 1;

          s = function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {},
                  i = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              }))), i.forEach(function (e) {
                n(t, e, r[e]);
              });
            }

            return t;
          }({}, s, {
            prevSibling: (t[c] = t[c].merge({
              nextSibling: u
            })).getKey()
          });
        }

        return t.push(new g(s)), t;
      }, []);
    }
  };
  t.exports = v;
}, function (t, e, r) {
  "use strict";

  var n = function () {
    function t(t) {
      var e, r, n;
      n = void 0, (r = "_uri") in (e = this) ? Object.defineProperty(e, r, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = n, this._uri = t;
    }

    return t.prototype.toString = function () {
      return this._uri;
    }, t;
  }();

  t.exports = n;
}, function (t, e, r) {
  "use strict";

  var n = r(429);

  t.exports = function (t) {
    return !(!t || !t.ownerDocument) && n(t) && "A" === t.nodeName;
  };
}, function (t, e, r) {
  "use strict";

  var n = r(429);

  t.exports = function (t) {
    return !(!t || !t.ownerDocument) && n(t) && "IMG" === t.nodeName;
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function (t, e, r, n) {
    var i = e.getStartKey(),
        o = e.getEndKey(),
        u = t.getBlockMap(),
        a = u.toSeq().skipUntil(function (t, e) {
      return e === i;
    }).takeUntil(function (t, e) {
      return e === o;
    }).concat([[o, u.get(o)]]).map(function (t) {
      var e = t.getDepth() + r;
      return e = Math.max(0, Math.min(e, n)), t.set("depth", e);
    });
    return u = u.merge(a), t.merge({
      blockMap: u,
      selectionBefore: e,
      selectionAfter: e
    });
  };
}, function (t, e, r) {
  "use strict";

  var n = /\r\n?|\n/g;

  t.exports = function (t) {
    return t.split(n);
  };
}, function (t, e, r) {
  "use strict";

  var n = r(61).unstable_flushControlled;
  t.exports = n;
}, function (t, e, r) {
  "use strict";

  var n = r(0),
      i = r(428),
      o = function (t) {
    var e, r;

    function o() {
      return t.apply(this, arguments) || this;
    }

    r = t, (e = o).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
    var u = o.prototype;
    return u.shouldComponentUpdate = function (t) {
      return this.props.text !== t.text || this.props.editorState.getSelection().getHasFocus() !== t.editorState.getSelection().getHasFocus();
    }, u.render = function () {
      var t = this.props.editorState.getSelection().getHasFocus(),
          e = i({
        "public/DraftEditorPlaceholder/root": !0,
        "public/DraftEditorPlaceholder/hasFocus": t
      });
      return n.createElement("div", {
        className: e
      }, n.createElement("div", {
        className: i("public/DraftEditorPlaceholder/inner"),
        id: this.props.accessibilityID,
        style: {
          whiteSpace: "pre-wrap"
        }
      }, this.props.text));
    }, o;
  }(n.Component);

  t.exports = o;
}, function (t, e, r) {}, function (t, e, r) {
  "use strict";

  function n(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var i = r(427),
      o = r(421),
      u = r(507),
      a = r(619),
      s = r(620),
      c = r(414),
      f = function (t, e) {
    return {
      key: t.getKey(),
      text: t.getText(),
      type: t.getType(),
      depth: t.getDepth(),
      inlineStyleRanges: s(t),
      entityRanges: a(t, e),
      data: t.getData().toObject()
    };
  },
      l = function (t, e, r, u) {
    if (t instanceof i) r.push(f(t, e));else {
      t instanceof o || c(!1);

      var a = t.getParentKey(),
          s = u[t.getKey()] = function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
              i = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
          }))), i.forEach(function (e) {
            n(t, e, r[e]);
          });
        }

        return t;
      }({}, f(t, e), {
        children: []
      });

      a ? u[a].children.push(s) : r.push(s);
    }
  };

  t.exports = function (t) {
    var e = {
      entityMap: {},
      blocks: []
    };
    return e = function (t, e) {
      var r = e.entityMap,
          n = [],
          i = {},
          o = {},
          a = 0;
      return t.getBlockMap().forEach(function (t) {
        t.findEntityRanges(function (t) {
          return null !== t.getEntity();
        }, function (e) {
          var n = t.getEntityAt(e),
              i = u.stringify(n);
          o[i] || (o[i] = n, r[i] = "".concat(a), a++);
        }), l(t, r, n, i);
      }), {
        blocks: n,
        entityMap: r
      };
    }(t, e), e = function (t, e) {
      var r = e.blocks,
          n = e.entityMap,
          i = {};
      return Object.keys(n).forEach(function (e, r) {
        var n = t.getEntity(u.unstringify(e));
        i[r] = {
          type: n.getType(),
          mutability: n.getMutability(),
          data: n.getData()
        };
      }), {
        blocks: r,
        entityMap: i
      };
    }(t, e);
  };
}, function (t, e, r) {
  "use strict";

  var n = r(507),
      i = r(430).strlen;

  t.exports = function (t, e) {
    var r = [];
    return t.findEntityRanges(function (t) {
      return !!t.getEntity();
    }, function (o, u) {
      var a = t.getText(),
          s = t.getEntityAt(o);
      r.push({
        offset: i(a.slice(0, o)),
        length: i(a.slice(o, u)),
        key: Number(e[n.stringify(s)])
      });
    }), r;
  };
}, function (t, e, r) {
  "use strict";

  var n = r(430),
      i = r(433),
      o = function (t, e) {
    return t === e;
  },
      u = function (t) {
    return !!t;
  },
      a = [];

  t.exports = function (t) {
    var e = t.getCharacterList().map(function (t) {
      return t.getStyle();
    }).toList(),
        r = e.flatten().toSet().map(function (r) {
      return function (t, e, r) {
        var a = [],
            s = e.map(function (t) {
          return t.has(r);
        }).toList();
        return i(s, o, u, function (e, i) {
          var o = t.getText();
          a.push({
            offset: n.strlen(o.slice(0, e)),
            length: n.strlen(o.slice(e, i)),
            style: r
          });
        }), a;
      }(t, e, r);
    });
    return Array.prototype.concat.apply(a, r.toJS());
  };
}, function (t, e, r) {
  "use strict";

  function n(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), n.forEach(function (e) {
        i(t, e, r[e]);
      });
    }

    return t;
  }

  function i(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var o = r(427),
      u = r(421),
      a = r(452),
      s = r(439),
      c = r(622),
      f = (r(623), r(440)),
      l = r(624),
      h = r(625),
      p = r(626),
      d = r(422),
      g = r(426),
      v = r(413),
      y = r(414),
      _ = g("draft_tree_data_support"),
      m = v.List,
      b = v.Map,
      S = v.OrderedMap,
      w = function (t, e) {
    var r = t.key,
        n = t.type,
        i = t.data;
    return {
      text: t.text,
      depth: t.depth || 0,
      type: n || "unstyled",
      key: r || d(),
      data: b(i),
      characterList: x(t, e)
    };
  },
      x = function (t, e) {
    var r = t.text,
        i = t.entityRanges,
        o = t.inlineStyleRanges,
        u = i || [];
    return l(p(r, o || []), h(r, u.filter(function (t) {
      return e.hasOwnProperty(t.key);
    }).map(function (t) {
      return n({}, t, {
        key: e[t.key]
      });
    })));
  },
      k = function (t) {
    return n({}, t, {
      key: t.key || d()
    });
  },
      E = function (t, e, r) {
    var i = e.map(function (t) {
      return n({}, t, {
        parentRef: r
      });
    });
    return t.concat(i.reverse());
  },
      O = function (t, e) {
    var r = t.blocks.find(function (t) {
      return Array.isArray(t.children) && t.children.length > 0;
    }),
        i = _ && !r ? c.fromRawStateToRawTreeState(t).blocks : t.blocks;
    return _ ? function (t, e) {
      return t.map(k).reduce(function (r, i, o) {
        Array.isArray(i.children) || y(!1);
        var a = i.children.map(k),
            s = new u(n({}, w(i, e), {
          prevSibling: 0 === o ? null : t[o - 1].key,
          nextSibling: o === t.length - 1 ? null : t[o + 1].key,
          children: m(a.map(function (t) {
            return t.key;
          }))
        }));
        r = r.set(s.getKey(), s);

        for (var c = E([], a, s); c.length > 0;) {
          var f = c.pop(),
              l = f.parentRef,
              h = l.getChildKeys(),
              p = h.indexOf(f.key),
              d = Array.isArray(f.children);

          if (!d) {
            d || y(!1);
            break;
          }

          var g = f.children.map(k),
              v = new u(n({}, w(f, e), {
            parent: l.getKey(),
            children: m(g.map(function (t) {
              return t.key;
            })),
            prevSibling: 0 === p ? null : h.get(p - 1),
            nextSibling: p === h.size - 1 ? null : h.get(p + 1)
          }));
          r = r.set(v.getKey(), v), c = E(c, g, v);
        }

        return r;
      }, S());
    }(i, e) : function (t, e) {
      return S(t.map(function (t) {
        var r = new o(w(t, e));
        return [r.getKey(), r];
      }));
    }(r ? c.fromRawTreeStateToRawState(t).blocks : i, e);
  };

  t.exports = function (t) {
    Array.isArray(t.blocks) || y(!1);

    var e = function (t) {
      var e = t.entityMap,
          r = {};
      return Object.keys(e).forEach(function (t) {
        var n = e[t],
            i = n.type,
            o = n.mutability,
            u = n.data;
        r[t] = s.__create(i, o, u || {});
      }), r;
    }(t),
        r = O(t, e),
        n = r.isEmpty() ? new f() : f.createEmpty(r.first().getKey());

    return new a({
      blockMap: r,
      entityMap: e,
      selectionBefore: n,
      selectionAfter: n
    });
  };
}, function (t, e, r) {
  "use strict";

  function n(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable;
      }))), n.forEach(function (e) {
        i(t, e, r[e]);
      });
    }

    return t;
  }

  function i(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var o = r(422),
      u = r(414),
      a = function (t) {
    if (!t || !t.type) return !1;
    var e = t.type;
    return "unordered-list-item" === e || "ordered-list-item" === e;
  },
      s = {
    fromRawTreeStateToRawState: function (t) {
      var e = t.blocks,
          r = [];
      return Array.isArray(e) || u(!1), Array.isArray(e) && e.length ? (function (t, e) {
        for (var r = [].concat(t).reverse(); r.length;) {
          var n = r.pop();
          e(n);
          var i = n.children;
          Array.isArray(i) || u(!1), r = r.concat([].concat(i.reverse()));
        }
      }(e, function (t) {
        var e = n({}, t);
        a(t) && (e.depth = e.depth || 0, function (t) {
          Array.isArray(t.children) && (t.children = t.children.map(function (e) {
            return e.type === t.type ? n({}, e, {
              depth: (t.depth || 0) + 1
            }) : e;
          }));
        }(t), null != t.children && t.children.length > 0) || (delete e.children, r.push(e));
      }), t.blocks = r, n({}, t, {
        blocks: r
      })) : t;
    },
    fromRawStateToRawTreeState: function (t) {
      var e = [],
          r = [];
      return t.blocks.forEach(function (t) {
        var i = a(t),
            u = t.depth || 0,
            s = n({}, t, {
          children: []
        });

        if (i) {
          var c = r[0];
          if (null == c && 0 === u) e.push(s);else if (null == c || c.depth < u - 1) {
            var f = {
              key: o(),
              text: "",
              depth: u - 1,
              type: t.type,
              children: [],
              entityRanges: [],
              inlineStyleRanges: []
            };
            r.unshift(f), 1 === u ? e.push(f) : null != c && c.children.push(f), f.children.push(s);
          } else if (c.depth === u - 1) c.children.push(s);else {
            for (; null != c && c.depth >= u;) r.shift(), c = r[0];

            u > 0 ? c.children.push(s) : e.push(s);
          }
        } else e.push(s);
      }), n({}, t, {
        blocks: e
      });
    }
  };

  t.exports = s;
}, function (t, e, r) {
  "use strict";

  r(459);
  var n = {
    isValidBlock: function (t, e) {
      var r = t.getKey(),
          n = t.getParentKey();
      if (null != n && !e.get(n).getChildKeys().includes(r)) return !1;
      if (!t.getChildKeys().map(function (t) {
        return e.get(t);
      }).every(function (t) {
        return t.getParentKey() === r;
      })) return !1;
      var i = t.getPrevSiblingKey();
      if (null != i && e.get(i).getNextSiblingKey() !== r) return !1;
      var o = t.getNextSiblingKey();
      if (null != o && e.get(o).getPrevSiblingKey() !== r) return !1;
      return (null === o || null === i || i !== o) && !("" != t.text && t.getChildKeys().size > 0);
    },
    isConnectedTree: function (t) {
      var e = t.toArray().filter(function (t) {
        return null == t.getParentKey() && null == t.getPrevSiblingKey();
      });
      if (1 !== e.length) return !1;

      for (var r = 0, n = e.shift().getKey(), i = []; null != n;) {
        var o = t.get(n),
            u = o.getChildKeys(),
            a = o.getNextSiblingKey();

        if (u.size > 0) {
          null != a && i.unshift(a);
          var s = u.map(function (e) {
            return t.get(e);
          }).find(function (t) {
            return null == t.getPrevSiblingKey();
          });
          if (null == s) return !1;
          n = s.getKey();
        } else n = null != o.getNextSiblingKey() ? o.getNextSiblingKey() : i.shift();

        r++;
      }

      return r === t.size;
    },
    isValidTree: function (t) {
      var e = this;
      return !!t.toArray().every(function (r) {
        return e.isValidBlock(r, t);
      }) && this.isConnectedTree(t);
    }
  };
  t.exports = n;
}, function (t, e, r) {
  "use strict";

  var n = r(420),
      i = r(413).List;

  t.exports = function (t, e) {
    var r = t.map(function (t, r) {
      var i = e[r];
      return n.create({
        style: t,
        entity: i
      });
    });
    return i(r);
  };
}, function (t, e, r) {
  "use strict";

  var n = r(430).substr;

  t.exports = function (t, e) {
    var r = Array(t.length).fill(null);
    return e && e.forEach(function (e) {
      for (var i = n(t, 0, e.offset).length, o = i + n(t, e.offset, e.length).length, u = i; u < o; u++) r[u] = e.key;
    }), r;
  };
}, function (t, e, r) {
  "use strict";

  var n = r(430),
      i = r(413).OrderedSet,
      o = n.substr,
      u = i();

  t.exports = function (t, e) {
    var r = Array(t.length).fill(u);
    return e && e.forEach(function (e) {
      for (var n = o(t, 0, e.offset).length, i = n + o(t, e.offset, e.length).length; n < i;) r[n] = r[n].add(e.style), n++;
    }), r;
  };
}, function (t, e, r) {
  "use strict";

  var n = r(628);

  t.exports = function (t) {
    var e = t.getSelection();
    if (!e.rangeCount) return null;
    var r = e.getRangeAt(0),
        i = n(r),
        o = i.top,
        u = i.right,
        a = i.bottom,
        s = i.left;
    return 0 === o && 0 === u && 0 === a && 0 === s ? null : i;
  };
}, function (t, e, r) {
  "use strict";

  var n = r(500);

  t.exports = function (t) {
    var e = n(t),
        r = 0,
        i = 0,
        o = 0,
        u = 0;

    if (e.length) {
      if (e.length > 1 && 0 === e[0].width) {
        var a = e[1];
        r = a.top, i = a.right, o = a.bottom, u = a.left;
      } else {
        var s = e[0];
        r = s.top, i = s.right, o = s.bottom, u = s.left;
      }

      for (var c = 1; c < e.length; c++) {
        var f = e[c];
        0 !== f.height && 0 !== f.width && (r = Math.min(r, f.top), i = Math.max(i, f.right), o = Math.max(o, f.bottom), u = Math.min(u, f.left));
      }
    }

    return {
      top: r,
      right: i,
      bottom: o,
      left: u,
      width: i - u,
      height: o - r
    };
  };
}, function (t, e, r) {
  "use strict";

  t.exports = function () {};
},, function (t, e, r) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.validatePrefix = e.inlineStyleExporter = e.createInlineStyleExportObject = e.getInlineStyles = e.customStyleFns = e.createCustomStyles = e.mapSelectedCharacters = void 0;

  var n = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];

      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }

    return t;
  },
      i = r(425),
      o = r(508),
      u = s(r(632)),
      a = s(r(633));

  function s(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }

  function c(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = r, t;
  }

  var f = e.mapSelectedCharacters = function (t) {
    return function (e) {
      var r = e.getCurrentContent(),
          n = e.getSelection(),
          i = r.getBlockMap(),
          u = n.getStartKey(),
          a = n.getStartOffset(),
          s = n.getEndKey(),
          c = n.getEndOffset(),
          f = i.skipUntil(function (t, e) {
        return e === u;
      }).takeUntil(function (t, e) {
        return e === s;
      }).concat((0, o.Map)([[s, i.get(s)]])).map(function (e, r) {
        var n = void 0,
            i = void 0;
        u === s ? (n = a, i = c) : (n = r === u ? a : 0, i = r === s ? c : e.getLength());

        for (var o = e.getCharacterList(), f = void 0; n < i;) {
          f = o.get(n);
          var l = t(f);
          o = o.set(n, l), n++;
        }

        return e.set("characterList", o);
      });
      return r.merge({
        blockMap: i.merge(f),
        selectionBefore: n,
        selectionAfter: n
      });
    };
  },
      l = function (t, e) {
    return f(h(t))(e);
  },
      h = function (t) {
    return function (e) {
      var r = e.get("style").filter(function (e) {
        return !e.startsWith(t);
      });
      return e.set("style", r);
    };
  },
      p = function (t) {
    return function (e, r) {
      var n = t + r,
          o = i.Modifier.applyInlineStyle(l(t, e), e.getSelection(), n);
      return e.getSelection().isCollapsed() ? v(t, n, e) : i.EditorState.push(e, o, "change-inline-style");
    };
  },
      d = function (t) {
    return function (e) {
      return i.EditorState.push(e, l(t, e), "change-inline-style");
    };
  },
      g = function (t, e) {
    return e.filter(function (e) {
      return !e.startsWith(t);
    });
  },
      v = function (t, e, r) {
    var n = r.getCurrentInlineStyle(),
        o = g(t, n);
    return i.EditorState.setInlineStyleOverride(r, o.add(e));
  },
      y = function (t) {
    return function (e, r) {
      var n = t + r,
          o = e.getCurrentInlineStyle();
      if (e.getSelection().isCollapsed()) return function (t, e, r) {
        var n = r.getCurrentInlineStyle(),
            o = g(t, n),
            u = n.has(e) ? o.remove(e) : o.add(e);
        return i.EditorState.setInlineStyleOverride(r, u);
      }(t, n, e);
      if (!o.has(n)) return p(t)(e, r);
      var u = i.EditorState.push(e, l(t, e), "change-inline-style");
      return i.EditorState.forceSelection(u, e.getSelection());
    };
  },
      _ = function (t, e) {
    return function (r) {
      if (!r.size) return {};
      var n = r.filter(function (e) {
        return e.startsWith(t);
      }).first();

      if (n) {
        var i = n.replace(t, "");
        return c({}, (0, u.default)(e), i);
      }

      return {};
    };
  },
      m = function (t) {
    return function (e) {
      var r = e.getCurrentInlineStyle();
      if (!r.size) return "";
      var n = r.filter(function (e) {
        return e.startsWith(t);
      }).first();
      return n ? n.replace(t, "") : n;
    };
  },
      b = e.createCustomStyles = function (t, e) {
    return e.reduce(function (e, r) {
      var i = (0, u.default)(r),
          o = "" + t + (0, a.default)(r).toUpperCase() + "_",
          s = n({}, e);
      return s[i] = {
        add: p(o),
        remove: d(o),
        toggle: y(o),
        current: m(o),
        styleFn: _(o, r)
      }, s;
    }, {});
  },
      S = e.customStyleFns = function (t) {
    return function (e) {
      return t.reduce(function (t, r) {
        return n({}, t, r(e));
      }, {});
    };
  },
      w = e.getInlineStyles = function (t, e) {
    var r = e.inlineStyleRanges;

    if (r && r.length) {
      var n = r.map(function (t) {
        return t.style;
      });
      return t.concat(n);
    }

    return t;
  },
      x = e.createInlineStyleExportObject = function (t, e) {
    return function (r, n) {
      if (i.DefaultDraftInlineStyle[n]) return Object.assign({}, r, c({}, n, {
        style: i.DefaultDraftInlineStyle[n]
      }));
      if (e[n]) return Object.assign({}, r, c({}, n, {
        style: e[n]
      }));
      var o = new RegExp(t + "(.+)_(.+)"),
          a = n.match(o);
      if (!a || !a[1] || !a[2]) return r;
      var s = a[1].toLowerCase(),
          f = a[2],
          l = c({}, n, {
        style: c({}, (0, u.default)(s), f)
      });
      return Object.assign({}, r, l);
    };
  },
      k = e.inlineStyleExporter = function (t, e) {
    return function (r) {
      var n = (0, i.convertToRaw)(r.getCurrentContent()).blocks.reduce(w, []);
      return n.length ? n.reduce(x(t, e), {}) : {};
    };
  },
      E = e.validatePrefix = function (t) {
    return "string" == typeof t && t.length ? t.match(/.+_$/) ? t : t + "_" : "CUSTOM_";
  };

  e.default = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "CUSTOM_",
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (!t) return console.log("Expecting an array with css properties"), {
      styles: {}
    };
    if (!Array.isArray(t) || !t.length) return console.log("createStyles expects first parameter to be an array with css properties"), {
      styles: {}
    };
    var n = E(e),
        i = b(n, t),
        o = Object.keys(i).map(function (t) {
      return i[t].styleFn;
    }),
        u = S(o),
        a = k(n, r);
    return {
      styles: i,
      customStyleFn: u,
      exporter: a
    };
  };
}, function (t, e, r) {
  (function (e) {
    var r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        n = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        i = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        o = "[\\ud800-\\udfff]",
        u = "[" + i + "]",
        a = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
        s = "\\d+",
        c = "[\\u2700-\\u27bf]",
        f = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
        l = "[^\\ud800-\\udfff" + i + s + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
        h = "\\ud83c[\\udffb-\\udfff]",
        p = "[^\\ud800-\\udfff]",
        d = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        g = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        v = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
        y = "(?:" + f + "|" + l + ")",
        _ = "(?:" + v + "|" + l + ")",
        m = "(?:" + a + "|" + h + ")" + "?",
        b = "[\\ufe0e\\ufe0f]?" + m + ("(?:\\u200d(?:" + [p, d, g].join("|") + ")[\\ufe0e\\ufe0f]?" + m + ")*"),
        S = "(?:" + [c, d, g].join("|") + ")" + b,
        w = "(?:" + [p + a + "?", a, d, g, o].join("|") + ")",
        x = RegExp("['’]", "g"),
        k = RegExp(a, "g"),
        E = RegExp(h + "(?=" + h + ")|" + w + b, "g"),
        O = RegExp([v + "?" + f + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [u, v, "$"].join("|") + ")", _ + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [u, v + y, "$"].join("|") + ")", v + "?" + y + "+(?:['’](?:d|ll|m|re|s|t|ve))?", v + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", s, S].join("|"), "g"),
        C = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),
        D = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        I = "object" == typeof e && e && e.Object === Object && e,
        M = "object" == typeof self && self && self.Object === Object && self,
        A = I || M || Function("return this")();

    var K,
        T = (K = {
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Ä": "A",
      "Å": "A",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "ä": "a",
      "å": "a",
      "Ç": "C",
      "ç": "c",
      "Ð": "D",
      "ð": "d",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "Ñ": "N",
      "ñ": "n",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ö": "O",
      "Ø": "O",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "o",
      "ø": "o",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ü": "U",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ü": "u",
      "Ý": "Y",
      "ý": "y",
      "ÿ": "y",
      "Æ": "Ae",
      "æ": "ae",
      "Þ": "Th",
      "þ": "th",
      "ß": "ss",
      "Ā": "A",
      "Ă": "A",
      "Ą": "A",
      "ā": "a",
      "ă": "a",
      "ą": "a",
      "Ć": "C",
      "Ĉ": "C",
      "Ċ": "C",
      "Č": "C",
      "ć": "c",
      "ĉ": "c",
      "ċ": "c",
      "č": "c",
      "Ď": "D",
      "Đ": "D",
      "ď": "d",
      "đ": "d",
      "Ē": "E",
      "Ĕ": "E",
      "Ė": "E",
      "Ę": "E",
      "Ě": "E",
      "ē": "e",
      "ĕ": "e",
      "ė": "e",
      "ę": "e",
      "ě": "e",
      "Ĝ": "G",
      "Ğ": "G",
      "Ġ": "G",
      "Ģ": "G",
      "ĝ": "g",
      "ğ": "g",
      "ġ": "g",
      "ģ": "g",
      "Ĥ": "H",
      "Ħ": "H",
      "ĥ": "h",
      "ħ": "h",
      "Ĩ": "I",
      "Ī": "I",
      "Ĭ": "I",
      "Į": "I",
      "İ": "I",
      "ĩ": "i",
      "ī": "i",
      "ĭ": "i",
      "į": "i",
      "ı": "i",
      "Ĵ": "J",
      "ĵ": "j",
      "Ķ": "K",
      "ķ": "k",
      "ĸ": "k",
      "Ĺ": "L",
      "Ļ": "L",
      "Ľ": "L",
      "Ŀ": "L",
      "Ł": "L",
      "ĺ": "l",
      "ļ": "l",
      "ľ": "l",
      "ŀ": "l",
      "ł": "l",
      "Ń": "N",
      "Ņ": "N",
      "Ň": "N",
      "Ŋ": "N",
      "ń": "n",
      "ņ": "n",
      "ň": "n",
      "ŋ": "n",
      "Ō": "O",
      "Ŏ": "O",
      "Ő": "O",
      "ō": "o",
      "ŏ": "o",
      "ő": "o",
      "Ŕ": "R",
      "Ŗ": "R",
      "Ř": "R",
      "ŕ": "r",
      "ŗ": "r",
      "ř": "r",
      "Ś": "S",
      "Ŝ": "S",
      "Ş": "S",
      "Š": "S",
      "ś": "s",
      "ŝ": "s",
      "ş": "s",
      "š": "s",
      "Ţ": "T",
      "Ť": "T",
      "Ŧ": "T",
      "ţ": "t",
      "ť": "t",
      "ŧ": "t",
      "Ũ": "U",
      "Ū": "U",
      "Ŭ": "U",
      "Ů": "U",
      "Ű": "U",
      "Ų": "U",
      "ũ": "u",
      "ū": "u",
      "ŭ": "u",
      "ů": "u",
      "ű": "u",
      "ų": "u",
      "Ŵ": "W",
      "ŵ": "w",
      "Ŷ": "Y",
      "ŷ": "y",
      "Ÿ": "Y",
      "Ź": "Z",
      "Ż": "Z",
      "Ž": "Z",
      "ź": "z",
      "ż": "z",
      "ž": "z",
      "Ĳ": "IJ",
      "ĳ": "ij",
      "Œ": "Oe",
      "œ": "oe",
      "ŉ": "'n",
      "ſ": "ss"
    }, function (t) {
      return null == K ? void 0 : K[t];
    });

    function z(t) {
      return C.test(t);
    }

    function B(t) {
      return z(t) ? function (t) {
        return t.match(E) || [];
      }(t) : function (t) {
        return t.split("");
      }(t);
    }

    var R = Object.prototype.toString,
        L = A.Symbol,
        j = L ? L.prototype : void 0,
        N = j ? j.toString : void 0;

    function F(t) {
      if ("string" == typeof t) return t;
      if (function (t) {
        return "symbol" == typeof t || function (t) {
          return !!t && "object" == typeof t;
        }(t) && "[object Symbol]" == R.call(t);
      }(t)) return N ? N.call(t) : "";
      var e = t + "";
      return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
    }

    function P(t, e, r) {
      var n = t.length;
      return r = void 0 === r ? n : r, !e && r >= n ? t : function (t, e, r) {
        var n = -1,
            i = t.length;
        e < 0 && (e = -e > i ? 0 : i + e), (r = r > i ? i : r) < 0 && (r += i), i = e > r ? 0 : r - e >>> 0, e >>>= 0;

        for (var o = Array(i); ++n < i;) o[n] = t[n + e];

        return o;
      }(t, e, r);
    }

    function U(t) {
      return null == t ? "" : F(t);
    }

    var q,
        H = (q = function (t, e, r) {
      return e = e.toLowerCase(), t + (r ? V(U(e).toLowerCase()) : e);
    }, function (t) {
      return function (t, e, r, n) {
        var i = -1,
            o = t ? t.length : 0;

        for (n && o && (r = t[++i]); ++i < o;) r = e(r, t[i], i, t);

        return r;
      }(function (t, e, n) {
        return t = U(t), void 0 === (e = n ? void 0 : e) ? function (t) {
          return D.test(t);
        }(t) ? function (t) {
          return t.match(O) || [];
        }(t) : function (t) {
          return t.match(r) || [];
        }(t) : t.match(e) || [];
      }(function (t) {
        return (t = U(t)) && t.replace(n, T).replace(k, "");
      }(t).replace(x, "")), q, "");
    });
    var W,
        V = (W = "toUpperCase", function (t) {
      var e = z(t = U(t)) ? B(t) : void 0,
          r = e ? e[0] : t.charAt(0),
          n = e ? P(e, 1).join("") : t.slice(1);
      return r[W]() + n;
    });
    t.exports = H;
  }).call(this, r(62));
}, function (t, e, r) {
  (function (e) {
    var r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        n = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        i = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        o = "[" + i + "]",
        u = "[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",
        a = "\\d+",
        s = "[\\u2700-\\u27bf]",
        c = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
        f = "[^\\ud800-\\udfff" + i + a + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
        l = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        h = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        p = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
        d = "(?:" + c + "|" + f + ")",
        g = "(?:" + p + "|" + f + ")",
        v = "(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",
        y = "[\\ufe0e\\ufe0f]?" + v + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", l, h].join("|") + ")[\\ufe0e\\ufe0f]?" + v + ")*"),
        _ = "(?:" + [s, l, h].join("|") + ")" + y,
        m = RegExp("['’]", "g"),
        b = RegExp(u, "g"),
        S = RegExp([p + "?" + c + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [o, p, "$"].join("|") + ")", g + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [o, p + d, "$"].join("|") + ")", p + "?" + d + "+(?:['’](?:d|ll|m|re|s|t|ve))?", p + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", a, _].join("|"), "g"),
        w = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        x = "object" == typeof e && e && e.Object === Object && e,
        k = "object" == typeof self && self && self.Object === Object && self,
        E = x || k || Function("return this")();

    var O,
        C = (O = {
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Ä": "A",
      "Å": "A",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "ä": "a",
      "å": "a",
      "Ç": "C",
      "ç": "c",
      "Ð": "D",
      "ð": "d",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "Ñ": "N",
      "ñ": "n",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ö": "O",
      "Ø": "O",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "o",
      "ø": "o",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ü": "U",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ü": "u",
      "Ý": "Y",
      "ý": "y",
      "ÿ": "y",
      "Æ": "Ae",
      "æ": "ae",
      "Þ": "Th",
      "þ": "th",
      "ß": "ss",
      "Ā": "A",
      "Ă": "A",
      "Ą": "A",
      "ā": "a",
      "ă": "a",
      "ą": "a",
      "Ć": "C",
      "Ĉ": "C",
      "Ċ": "C",
      "Č": "C",
      "ć": "c",
      "ĉ": "c",
      "ċ": "c",
      "č": "c",
      "Ď": "D",
      "Đ": "D",
      "ď": "d",
      "đ": "d",
      "Ē": "E",
      "Ĕ": "E",
      "Ė": "E",
      "Ę": "E",
      "Ě": "E",
      "ē": "e",
      "ĕ": "e",
      "ė": "e",
      "ę": "e",
      "ě": "e",
      "Ĝ": "G",
      "Ğ": "G",
      "Ġ": "G",
      "Ģ": "G",
      "ĝ": "g",
      "ğ": "g",
      "ġ": "g",
      "ģ": "g",
      "Ĥ": "H",
      "Ħ": "H",
      "ĥ": "h",
      "ħ": "h",
      "Ĩ": "I",
      "Ī": "I",
      "Ĭ": "I",
      "Į": "I",
      "İ": "I",
      "ĩ": "i",
      "ī": "i",
      "ĭ": "i",
      "į": "i",
      "ı": "i",
      "Ĵ": "J",
      "ĵ": "j",
      "Ķ": "K",
      "ķ": "k",
      "ĸ": "k",
      "Ĺ": "L",
      "Ļ": "L",
      "Ľ": "L",
      "Ŀ": "L",
      "Ł": "L",
      "ĺ": "l",
      "ļ": "l",
      "ľ": "l",
      "ŀ": "l",
      "ł": "l",
      "Ń": "N",
      "Ņ": "N",
      "Ň": "N",
      "Ŋ": "N",
      "ń": "n",
      "ņ": "n",
      "ň": "n",
      "ŋ": "n",
      "Ō": "O",
      "Ŏ": "O",
      "Ő": "O",
      "ō": "o",
      "ŏ": "o",
      "ő": "o",
      "Ŕ": "R",
      "Ŗ": "R",
      "Ř": "R",
      "ŕ": "r",
      "ŗ": "r",
      "ř": "r",
      "Ś": "S",
      "Ŝ": "S",
      "Ş": "S",
      "Š": "S",
      "ś": "s",
      "ŝ": "s",
      "ş": "s",
      "š": "s",
      "Ţ": "T",
      "Ť": "T",
      "Ŧ": "T",
      "ţ": "t",
      "ť": "t",
      "ŧ": "t",
      "Ũ": "U",
      "Ū": "U",
      "Ŭ": "U",
      "Ů": "U",
      "Ű": "U",
      "Ų": "U",
      "ũ": "u",
      "ū": "u",
      "ŭ": "u",
      "ů": "u",
      "ű": "u",
      "ų": "u",
      "Ŵ": "W",
      "ŵ": "w",
      "Ŷ": "Y",
      "ŷ": "y",
      "Ÿ": "Y",
      "Ź": "Z",
      "Ż": "Z",
      "Ž": "Z",
      "ź": "z",
      "ż": "z",
      "ž": "z",
      "Ĳ": "IJ",
      "ĳ": "ij",
      "Œ": "Oe",
      "œ": "oe",
      "ŉ": "'n",
      "ſ": "ss"
    }, function (t) {
      return null == O ? void 0 : O[t];
    });
    var D = Object.prototype.toString,
        I = E.Symbol,
        M = I ? I.prototype : void 0,
        A = M ? M.toString : void 0;

    function K(t) {
      if ("string" == typeof t) return t;
      if (function (t) {
        return "symbol" == typeof t || function (t) {
          return !!t && "object" == typeof t;
        }(t) && "[object Symbol]" == D.call(t);
      }(t)) return A ? A.call(t) : "";
      var e = t + "";
      return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
    }

    function T(t) {
      return null == t ? "" : K(t);
    }

    var z,
        B = (z = function (t, e, r) {
      return t + (r ? "_" : "") + e.toLowerCase();
    }, function (t) {
      return function (t, e, r, n) {
        var i = -1,
            o = t ? t.length : 0;

        for (n && o && (r = t[++i]); ++i < o;) r = e(r, t[i], i, t);

        return r;
      }(function (t, e, n) {
        return t = T(t), void 0 === (e = n ? void 0 : e) ? function (t) {
          return w.test(t);
        }(t) ? function (t) {
          return t.match(S) || [];
        }(t) : function (t) {
          return t.match(r) || [];
        }(t) : t.match(e) || [];
      }(function (t) {
        return (t = T(t)) && t.replace(n, C).replace(b, "");
      }(t).replace(m, "")), z, "");
    });
    t.exports = B;
  }).call(this, r(62));
},,,, function (t, e) {
  function r(e) {
    return t.exports = r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, t.exports.__esModule = !0, t.exports.default = t.exports, r(e);
  }

  t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports;
}])]);
//# sourceMappingURL=3.index.js.map