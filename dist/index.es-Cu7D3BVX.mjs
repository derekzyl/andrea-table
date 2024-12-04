import { c as Ke, _ as za, g as _o } from "./index-JPZuJXv8.mjs";
var vt = function(a) {
  return a && a.Math === Math && a;
}, V = (
  // eslint-disable-next-line es/no-global-this -- safe
  vt(typeof globalThis == "object" && globalThis) || vt(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  vt(typeof self == "object" && self) || vt(typeof Ke == "object" && Ke) || vt(typeof Ke == "object" && Ke) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), $t = {}, k = function(a) {
  try {
    return !!a();
  } catch {
    return !0;
  }
}, $l = k, le = !$l(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), wl = k, mr = !wl(function() {
  var a = (function() {
  }).bind();
  return typeof a != "function" || a.hasOwnProperty("prototype");
}), Cl = mr, Ut = Function.prototype.call, Y = Cl ? Ut.bind(Ut) : function() {
  return Ut.apply(Ut, arguments);
}, Vo = {}, Do = {}.propertyIsEnumerable, ko = Object.getOwnPropertyDescriptor, Al = ko && !Do.call({ 1: 2 }, 1);
Vo.f = Al ? function(e) {
  var t = ko(this, e);
  return !!t && t.enumerable;
} : Do;
var Ti = function(a, e) {
  return {
    enumerable: !(a & 1),
    configurable: !(a & 2),
    writable: !(a & 4),
    value: e
  };
}, Lo = mr, Bo = Function.prototype, Ha = Bo.call, Pl = Lo && Bo.bind.bind(Ha, Ha), L = Lo ? Pl : function(a) {
  return function() {
    return Ha.apply(a, arguments);
  };
}, jo = L, Rl = jo({}.toString), Nl = jo("".slice), Be = function(a) {
  return Nl(Rl(a), 8, -1);
}, Il = L, Ml = k, _l = Be, Qr = Object, Vl = Il("".split), Fo = Ml(function() {
  return !Qr("z").propertyIsEnumerable(0);
}) ? function(a) {
  return _l(a) === "String" ? Vl(a, "") : Qr(a);
} : Qr, je = function(a) {
  return a == null;
}, Dl = je, kl = TypeError, he = function(a) {
  if (Dl(a)) throw new kl("Can't call method on " + a);
  return a;
}, Ll = Fo, Bl = he, wt = function(a) {
  return Ll(Bl(a));
}, Kr = typeof document == "object" && document.all, B = typeof Kr > "u" && Kr !== void 0 ? function(a) {
  return typeof a == "function" || a === Kr;
} : function(a) {
  return typeof a == "function";
}, jl = B, ve = function(a) {
  return typeof a == "object" ? a !== null : jl(a);
}, Zr = V, Fl = B, Ul = function(a) {
  return Fl(a) ? a : void 0;
}, Fe = function(a, e) {
  return arguments.length < 2 ? Ul(Zr[a]) : Zr[a] && Zr[a][e];
}, Gl = L, br = Gl({}.isPrototypeOf), zl = V, dn = zl.navigator, pn = dn && dn.userAgent, Ct = pn ? String(pn) : "", Uo = V, Jr = Ct, yn = Uo.process, mn = Uo.Deno, bn = yn && yn.versions || mn && mn.version, xn = bn && bn.v8, ue, fr;
xn && (ue = xn.split("."), fr = ue[0] > 0 && ue[0] < 4 ? 1 : +(ue[0] + ue[1]));
!fr && Jr && (ue = Jr.match(/Edge\/(\d+)/), (!ue || ue[1] >= 74) && (ue = Jr.match(/Chrome\/(\d+)/), ue && (fr = +ue[1])));
var Oi = fr, Tn = Oi, Hl = k, Yl = V, Xl = Yl.String, Go = !!Object.getOwnPropertySymbols && !Hl(function() {
  var a = Symbol("symbol detection");
  return !Xl(a) || !(Object(a) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && Tn && Tn < 41;
}), Wl = Go, zo = Wl && !Symbol.sham && typeof Symbol.iterator == "symbol", ql = Fe, Ql = B, Kl = br, Zl = zo, Jl = Object, Ho = Zl ? function(a) {
  return typeof a == "symbol";
} : function(a) {
  var e = ql("Symbol");
  return Ql(e) && Kl(e.prototype, Jl(a));
}, eh = String, xr = function(a) {
  try {
    return eh(a);
  } catch {
    return "Object";
  }
}, th = B, rh = xr, ah = TypeError, Te = function(a) {
  if (th(a)) return a;
  throw new ah(rh(a) + " is not a function");
}, ih = Te, nh = je, ot = function(a, e) {
  var t = a[e];
  return nh(t) ? void 0 : ih(t);
}, ea = Y, ta = B, ra = ve, sh = TypeError, oh = function(a, e) {
  var t, r;
  if (e === "string" && ta(t = a.toString) && !ra(r = ea(t, a)) || ta(t = a.valueOf) && !ra(r = ea(t, a)) || e !== "string" && ta(t = a.toString) && !ra(r = ea(t, a))) return r;
  throw new sh("Can't convert object to primitive value");
}, Yo = { exports: {} }, On = V, uh = Object.defineProperty, Si = function(a, e) {
  try {
    uh(On, a, { value: e, configurable: !0, writable: !0 });
  } catch {
    On[a] = e;
  }
  return e;
}, lh = V, hh = Si, Sn = "__core-js_shared__", En = Yo.exports = lh[Sn] || hh(Sn, {});
(En.versions || (En.versions = [])).push({
  version: "3.38.1",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Ei = Yo.exports, $n = Ei, $i = function(a, e) {
  return $n[a] || ($n[a] = e || {});
}, vh = he, fh = Object, Tr = function(a) {
  return fh(vh(a));
}, ch = L, gh = Tr, dh = ch({}.hasOwnProperty), fe = Object.hasOwn || function(e, t) {
  return dh(gh(e), t);
}, ph = L, yh = 0, mh = Math.random(), bh = ph(1 .toString), Xo = function(a) {
  return "Symbol(" + (a === void 0 ? "" : a) + ")_" + bh(++yh + mh, 36);
}, xh = V, Th = $i, wn = fe, Oh = Xo, Sh = Go, Eh = zo, Ze = xh.Symbol, aa = Th("wks"), $h = Eh ? Ze.for || Ze : Ze && Ze.withoutSetter || Oh, z = function(a) {
  return wn(aa, a) || (aa[a] = Sh && wn(Ze, a) ? Ze[a] : $h("Symbol." + a)), aa[a];
}, wh = Y, Cn = ve, An = Ho, Ch = ot, Ah = oh, Ph = z, Rh = TypeError, Nh = Ph("toPrimitive"), Ih = function(a, e) {
  if (!Cn(a) || An(a)) return a;
  var t = Ch(a, Nh), r;
  if (t) {
    if (e === void 0 && (e = "default"), r = wh(t, a, e), !Cn(r) || An(r)) return r;
    throw new Rh("Can't convert object to primitive value");
  }
  return e === void 0 && (e = "number"), Ah(a, e);
}, Mh = Ih, _h = Ho, Wo = function(a) {
  var e = Mh(a, "string");
  return _h(e) ? e : e + "";
}, Vh = V, Pn = ve, Ya = Vh.document, Dh = Pn(Ya) && Pn(Ya.createElement), Or = function(a) {
  return Dh ? Ya.createElement(a) : {};
}, kh = le, Lh = k, Bh = Or, qo = !kh && !Lh(function() {
  return Object.defineProperty(Bh("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), jh = le, Fh = Y, Uh = Vo, Gh = Ti, zh = wt, Hh = Wo, Yh = fe, Xh = qo, Rn = Object.getOwnPropertyDescriptor;
$t.f = jh ? Rn : function(e, t) {
  if (e = zh(e), t = Hh(t), Xh) try {
    return Rn(e, t);
  } catch {
  }
  if (Yh(e, t)) return Gh(!Fh(Uh.f, e, t), e[t]);
};
var Oe = {}, Wh = le, qh = k, Qo = Wh && qh(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), Qh = ve, Kh = String, Zh = TypeError, J = function(a) {
  if (Qh(a)) return a;
  throw new Zh(Kh(a) + " is not an object");
}, Jh = le, ev = qo, tv = Qo, Gt = J, Nn = Wo, rv = TypeError, ia = Object.defineProperty, av = Object.getOwnPropertyDescriptor, na = "enumerable", sa = "configurable", oa = "writable";
Oe.f = Jh ? tv ? function(e, t, r) {
  if (Gt(e), t = Nn(t), Gt(r), typeof e == "function" && t === "prototype" && "value" in r && oa in r && !r[oa]) {
    var i = av(e, t);
    i && i[oa] && (e[t] = r.value, r = {
      configurable: sa in r ? r[sa] : i[sa],
      enumerable: na in r ? r[na] : i[na],
      writable: !1
    });
  }
  return ia(e, t, r);
} : ia : function(e, t, r) {
  if (Gt(e), t = Nn(t), Gt(r), ev) try {
    return ia(e, t, r);
  } catch {
  }
  if ("get" in r || "set" in r) throw new rv("Accessors not supported");
  return "value" in r && (e[t] = r.value), e;
};
var iv = le, nv = Oe, sv = Ti, At = iv ? function(a, e, t) {
  return nv.f(a, e, sv(1, t));
} : function(a, e, t) {
  return a[e] = t, a;
}, Ko = { exports: {} }, Xa = le, ov = fe, Zo = Function.prototype, uv = Xa && Object.getOwnPropertyDescriptor, wi = ov(Zo, "name"), lv = wi && (function() {
}).name === "something", hv = wi && (!Xa || Xa && uv(Zo, "name").configurable), Sr = {
  EXISTS: wi,
  PROPER: lv,
  CONFIGURABLE: hv
}, vv = L, fv = B, Wa = Ei, cv = vv(Function.toString);
fv(Wa.inspectSource) || (Wa.inspectSource = function(a) {
  return cv(a);
});
var Ci = Wa.inspectSource, gv = V, dv = B, In = gv.WeakMap, pv = dv(In) && /native code/.test(String(In)), yv = $i, mv = Xo, Mn = yv("keys"), Ai = function(a) {
  return Mn[a] || (Mn[a] = mv(a));
}, Pi = {}, bv = pv, Jo = V, xv = ve, Tv = At, ua = fe, la = Ei, Ov = Ai, Sv = Pi, _n = "Object already initialized", qa = Jo.TypeError, Ev = Jo.WeakMap, cr, Ot, gr, $v = function(a) {
  return gr(a) ? Ot(a) : cr(a, {});
}, wv = function(a) {
  return function(e) {
    var t;
    if (!xv(e) || (t = Ot(e)).type !== a)
      throw new qa("Incompatible receiver, " + a + " required");
    return t;
  };
};
if (bv || la.state) {
  var de = la.state || (la.state = new Ev());
  de.get = de.get, de.has = de.has, de.set = de.set, cr = function(a, e) {
    if (de.has(a)) throw new qa(_n);
    return e.facade = a, de.set(a, e), e;
  }, Ot = function(a) {
    return de.get(a) || {};
  }, gr = function(a) {
    return de.has(a);
  };
} else {
  var Ye = Ov("state");
  Sv[Ye] = !0, cr = function(a, e) {
    if (ua(a, Ye)) throw new qa(_n);
    return e.facade = a, Tv(a, Ye, e), e;
  }, Ot = function(a) {
    return ua(a, Ye) ? a[Ye] : {};
  }, gr = function(a) {
    return ua(a, Ye);
  };
}
var Er = {
  set: cr,
  get: Ot,
  has: gr,
  enforce: $v,
  getterFor: wv
}, Ri = L, Cv = k, Av = B, zt = fe, Qa = le, Pv = Sr.CONFIGURABLE, Rv = Ci, eu = Er, Nv = eu.enforce, Iv = eu.get, Vn = String, sr = Object.defineProperty, Mv = Ri("".slice), _v = Ri("".replace), Vv = Ri([].join), Dv = Qa && !Cv(function() {
  return sr(function() {
  }, "length", { value: 8 }).length !== 8;
}), kv = String(String).split("String"), Lv = Ko.exports = function(a, e, t) {
  Mv(Vn(e), 0, 7) === "Symbol(" && (e = "[" + _v(Vn(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), t && t.getter && (e = "get " + e), t && t.setter && (e = "set " + e), (!zt(a, "name") || Pv && a.name !== e) && (Qa ? sr(a, "name", { value: e, configurable: !0 }) : a.name = e), Dv && t && zt(t, "arity") && a.length !== t.arity && sr(a, "length", { value: t.arity });
  try {
    t && zt(t, "constructor") && t.constructor ? Qa && sr(a, "prototype", { writable: !1 }) : a.prototype && (a.prototype = void 0);
  } catch {
  }
  var r = Nv(a);
  return zt(r, "source") || (r.source = Vv(kv, typeof e == "string" ? e : "")), a;
};
Function.prototype.toString = Lv(function() {
  return Av(this) && Iv(this).source || Rv(this);
}, "toString");
var tu = Ko.exports, Bv = B, jv = Oe, Fv = tu, Uv = Si, Ue = function(a, e, t, r) {
  r || (r = {});
  var i = r.enumerable, n = r.name !== void 0 ? r.name : e;
  if (Bv(t) && Fv(t, n, r), r.global)
    i ? a[e] = t : Uv(e, t);
  else {
    try {
      r.unsafe ? a[e] && (i = !0) : delete a[e];
    } catch {
    }
    i ? a[e] = t : jv.f(a, e, {
      value: t,
      enumerable: !1,
      configurable: !r.nonConfigurable,
      writable: !r.nonWritable
    });
  }
  return a;
}, ru = {}, Gv = Math.ceil, zv = Math.floor, Hv = Math.trunc || function(e) {
  var t = +e;
  return (t > 0 ? zv : Gv)(t);
}, Yv = Hv, $r = function(a) {
  var e = +a;
  return e !== e || e === 0 ? 0 : Yv(e);
}, Xv = $r, Wv = Math.max, qv = Math.min, Qv = function(a, e) {
  var t = Xv(a);
  return t < 0 ? Wv(t + e, 0) : qv(t, e);
}, Kv = $r, Zv = Math.min, ut = function(a) {
  var e = Kv(a);
  return e > 0 ? Zv(e, 9007199254740991) : 0;
}, Jv = ut, Ni = function(a) {
  return Jv(a.length);
}, ef = wt, tf = Qv, rf = Ni, Dn = function(a) {
  return function(e, t, r) {
    var i = ef(e), n = rf(i);
    if (n === 0) return !a && -1;
    var o = tf(r, n), s;
    if (a && t !== t) {
      for (; n > o; )
        if (s = i[o++], s !== s) return !0;
    } else for (; n > o; o++)
      if ((a || o in i) && i[o] === t) return a || o || 0;
    return !a && -1;
  };
}, au = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Dn(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Dn(!1)
}, af = L, ha = fe, nf = wt, sf = au.indexOf, of = Pi, kn = af([].push), iu = function(a, e) {
  var t = nf(a), r = 0, i = [], n;
  for (n in t) !ha(of, n) && ha(t, n) && kn(i, n);
  for (; e.length > r; ) ha(t, n = e[r++]) && (~sf(i, n) || kn(i, n));
  return i;
}, Ii = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], uf = iu, lf = Ii, hf = lf.concat("length", "prototype");
ru.f = Object.getOwnPropertyNames || function(e) {
  return uf(e, hf);
};
var nu = {};
nu.f = Object.getOwnPropertySymbols;
var vf = Fe, ff = L, cf = ru, gf = nu, df = J, pf = ff([].concat), yf = vf("Reflect", "ownKeys") || function(e) {
  var t = cf.f(df(e)), r = gf.f;
  return r ? pf(t, r(e)) : t;
}, Ln = fe, mf = yf, bf = $t, xf = Oe, Tf = function(a, e, t) {
  for (var r = mf(e), i = xf.f, n = bf.f, o = 0; o < r.length; o++) {
    var s = r[o];
    !Ln(a, s) && !(t && Ln(t, s)) && i(a, s, n(e, s));
  }
}, Of = k, Sf = B, Ef = /#|\.prototype\./, Pt = function(a, e) {
  var t = wf[$f(a)];
  return t === Af ? !0 : t === Cf ? !1 : Sf(e) ? Of(e) : !!e;
}, $f = Pt.normalize = function(a) {
  return String(a).replace(Ef, ".").toLowerCase();
}, wf = Pt.data = {}, Cf = Pt.NATIVE = "N", Af = Pt.POLYFILL = "P", su = Pt, Ht = V, Pf = $t.f, Rf = At, Nf = Ue, If = Si, Mf = Tf, _f = su, ee = function(a, e) {
  var t = a.target, r = a.global, i = a.stat, n, o, s, u, l, h;
  if (r ? o = Ht : i ? o = Ht[t] || If(t, {}) : o = Ht[t] && Ht[t].prototype, o) for (s in e) {
    if (l = e[s], a.dontCallGetSet ? (h = Pf(o, s), u = h && h.value) : u = o[s], n = _f(r ? s : t + (i ? "." : "#") + s, a.forced), !n && u !== void 0) {
      if (typeof l == typeof u) continue;
      Mf(l, u);
    }
    (a.sham || u && u.sham) && Rf(l, "sham", !0), Nf(o, s, l, a);
  }
}, ft = V, Vf = Ct, Df = Be, Yt = function(a) {
  return Vf.slice(0, a.length) === a;
}, ou = function() {
  return Yt("Bun/") ? "BUN" : Yt("Cloudflare-Workers") ? "CLOUDFLARE" : Yt("Deno/") ? "DENO" : Yt("Node.js/") ? "NODE" : ft.Bun && typeof Bun.version == "string" ? "BUN" : ft.Deno && typeof Deno.version == "object" ? "DENO" : Df(ft.process) === "process" ? "NODE" : ft.window && ft.document ? "BROWSER" : "REST";
}(), kf = ou, wr = kf === "NODE", Lf = L, Bf = Te, jf = function(a, e, t) {
  try {
    return Lf(Bf(Object.getOwnPropertyDescriptor(a, e)[t]));
  } catch {
  }
}, Ff = ve, Uf = function(a) {
  return Ff(a) || a === null;
}, Gf = Uf, zf = String, Hf = TypeError, Yf = function(a) {
  if (Gf(a)) return a;
  throw new Hf("Can't set " + zf(a) + " as a prototype");
}, Xf = jf, Wf = ve, qf = he, Qf = Yf, uu = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var a = !1, e = {}, t;
  try {
    t = Xf(Object.prototype, "__proto__", "set"), t(e, []), a = e instanceof Array;
  } catch {
  }
  return function(i, n) {
    return qf(i), Qf(n), Wf(i) && (a ? t(i, n) : i.__proto__ = n), i;
  };
}() : void 0), Kf = Oe.f, Zf = fe, Jf = z, Bn = Jf("toStringTag"), Cr = function(a, e, t) {
  a && !t && (a = a.prototype), a && !Zf(a, Bn) && Kf(a, Bn, { configurable: !0, value: e });
}, jn = tu, ec = Oe, tc = function(a, e, t) {
  return t.get && jn(t.get, e, { getter: !0 }), t.set && jn(t.set, e, { setter: !0 }), ec.f(a, e, t);
}, rc = Fe, ac = tc, ic = z, nc = le, Fn = ic("species"), sc = function(a) {
  var e = rc(a);
  nc && e && !e[Fn] && ac(e, Fn, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
}, oc = br, uc = TypeError, lc = function(a, e) {
  if (oc(e, a)) return a;
  throw new uc("Incorrect invocation");
}, hc = z, vc = hc("toStringTag"), lu = {};
lu[vc] = "z";
var fc = String(lu) === "[object z]", cc = fc, gc = B, or = Be, dc = z, pc = dc("toStringTag"), yc = Object, mc = or(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", bc = function(a, e) {
  try {
    return a[e];
  } catch {
  }
}, Mi = cc ? or : function(a) {
  var e, t, r;
  return a === void 0 ? "Undefined" : a === null ? "Null" : typeof (t = bc(e = yc(a), pc)) == "string" ? t : mc ? or(e) : (r = or(e)) === "Object" && gc(e.callee) ? "Arguments" : r;
}, xc = L, Tc = k, hu = B, Oc = Mi, Sc = Fe, Ec = Ci, vu = function() {
}, fu = Sc("Reflect", "construct"), _i = /^\s*(?:class|function)\b/, $c = xc(_i.exec), wc = !_i.test(vu), ct = function(e) {
  if (!hu(e)) return !1;
  try {
    return fu(vu, [], e), !0;
  } catch {
    return !1;
  }
}, cu = function(e) {
  if (!hu(e)) return !1;
  switch (Oc(e)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return wc || !!$c(_i, Ec(e));
  } catch {
    return !0;
  }
};
cu.sham = !0;
var Cc = !fu || Tc(function() {
  var a;
  return ct(ct.call) || !ct(Object) || !ct(function() {
    a = !0;
  }) || a;
}) ? cu : ct, Ac = Cc, Pc = xr, Rc = TypeError, Nc = function(a) {
  if (Ac(a)) return a;
  throw new Rc(Pc(a) + " is not a constructor");
}, Un = J, Ic = Nc, Mc = je, _c = z, Vc = _c("species"), gu = function(a, e) {
  var t = Un(a).constructor, r;
  return t === void 0 || Mc(r = Un(t)[Vc]) ? e : Ic(r);
}, Dc = mr, du = Function.prototype, Gn = du.apply, zn = du.call, pu = typeof Reflect == "object" && Reflect.apply || (Dc ? zn.bind(Gn) : function() {
  return zn.apply(Gn, arguments);
}), kc = Be, Lc = L, Ar = function(a) {
  if (kc(a) === "Function") return Lc(a);
}, Hn = Ar, Bc = Te, jc = mr, Fc = Hn(Hn.bind), Vi = function(a, e) {
  return Bc(a), e === void 0 ? a : jc ? Fc(a, e) : function() {
    return a.apply(e, arguments);
  };
}, Uc = Fe, yu = Uc("document", "documentElement"), Gc = L, zc = Gc([].slice), Hc = TypeError, Yc = function(a, e) {
  if (a < e) throw new Hc("Not enough arguments");
  return a;
}, Xc = Ct, mu = /(?:ipad|iphone|ipod).*applewebkit/i.test(Xc), ae = V, Wc = pu, qc = Vi, Yn = B, Qc = fe, bu = k, Xn = yu, Kc = zc, Wn = Or, Zc = Yc, Jc = mu, eg = wr, Ka = ae.setImmediate, Za = ae.clearImmediate, tg = ae.process, va = ae.Dispatch, rg = ae.Function, qn = ae.MessageChannel, ag = ae.String, fa = 0, xt = {}, Qn = "onreadystatechange", St, Ie, ca, ga;
bu(function() {
  St = ae.location;
});
var Di = function(a) {
  if (Qc(xt, a)) {
    var e = xt[a];
    delete xt[a], e();
  }
}, da = function(a) {
  return function() {
    Di(a);
  };
}, Kn = function(a) {
  Di(a.data);
}, Zn = function(a) {
  ae.postMessage(ag(a), St.protocol + "//" + St.host);
};
(!Ka || !Za) && (Ka = function(e) {
  Zc(arguments.length, 1);
  var t = Yn(e) ? e : rg(e), r = Kc(arguments, 1);
  return xt[++fa] = function() {
    Wc(t, void 0, r);
  }, Ie(fa), fa;
}, Za = function(e) {
  delete xt[e];
}, eg ? Ie = function(a) {
  tg.nextTick(da(a));
} : va && va.now ? Ie = function(a) {
  va.now(da(a));
} : qn && !Jc ? (ca = new qn(), ga = ca.port2, ca.port1.onmessage = Kn, Ie = qc(ga.postMessage, ga)) : ae.addEventListener && Yn(ae.postMessage) && !ae.importScripts && St && St.protocol !== "file:" && !bu(Zn) ? (Ie = Zn, ae.addEventListener("message", Kn, !1)) : Qn in Wn("script") ? Ie = function(a) {
  Xn.appendChild(Wn("script"))[Qn] = function() {
    Xn.removeChild(this), Di(a);
  };
} : Ie = function(a) {
  setTimeout(da(a), 0);
});
var xu = {
  set: Ka,
  clear: Za
}, Jn = V, ig = le, ng = Object.getOwnPropertyDescriptor, sg = function(a) {
  if (!ig) return Jn[a];
  var e = ng(Jn, a);
  return e && e.value;
}, Tu = function() {
  this.head = null, this.tail = null;
};
Tu.prototype = {
  add: function(a) {
    var e = { item: a, next: null }, t = this.tail;
    t ? t.next = e : this.head = e, this.tail = e;
  },
  get: function() {
    var a = this.head;
    if (a) {
      var e = this.head = a.next;
      return e === null && (this.tail = null), a.item;
    }
  }
};
var Ou = Tu, og = Ct, ug = /ipad|iphone|ipod/i.test(og) && typeof Pebble < "u", lg = Ct, hg = /web0s(?!.*chrome)/i.test(lg), it = V, vg = sg, es = Vi, pa = xu.set, fg = Ou, cg = mu, gg = ug, dg = hg, ya = wr, ts = it.MutationObserver || it.WebKitMutationObserver, rs = it.document, as = it.process, Xt = it.Promise, Ja = vg("queueMicrotask"), Xe, ma, ba, Wt, is;
if (!Ja) {
  var qt = new fg(), Qt = function() {
    var a, e;
    for (ya && (a = as.domain) && a.exit(); e = qt.get(); ) try {
      e();
    } catch (t) {
      throw qt.head && Xe(), t;
    }
    a && a.enter();
  };
  !cg && !ya && !dg && ts && rs ? (ma = !0, ba = rs.createTextNode(""), new ts(Qt).observe(ba, { characterData: !0 }), Xe = function() {
    ba.data = ma = !ma;
  }) : !gg && Xt && Xt.resolve ? (Wt = Xt.resolve(void 0), Wt.constructor = Xt, is = es(Wt.then, Wt), Xe = function() {
    is(Qt);
  }) : ya ? Xe = function() {
    as.nextTick(Qt);
  } : (pa = es(pa, it), Xe = function() {
    pa(Qt);
  }), Ja = function(a) {
    qt.head || Xe(), qt.add(a);
  };
}
var pg = Ja, yg = function(a, e) {
  try {
    arguments.length === 1 ? console.error(a) : console.error(a, e);
  } catch {
  }
}, ki = function(a) {
  try {
    return { error: !1, value: a() };
  } catch (e) {
    return { error: !0, value: e };
  }
}, mg = V, Pr = mg.Promise, bg = V, Tt = Pr, xg = B, Tg = su, Og = Ci, Sg = z, ns = ou, xa = Oi;
Tt && Tt.prototype;
var Eg = Sg("species"), ei = !1, Su = xg(bg.PromiseRejectionEvent), $g = Tg("Promise", function() {
  var a = Og(Tt), e = a !== String(Tt);
  if (!e && xa === 66) return !0;
  if (!xa || xa < 51 || !/native code/.test(a)) {
    var t = new Tt(function(n) {
      n(1);
    }), r = function(n) {
      n(function() {
      }, function() {
      });
    }, i = t.constructor = {};
    if (i[Eg] = r, ei = t.then(function() {
    }) instanceof r, !ei) return !0;
  }
  return !e && (ns === "BROWSER" || ns === "DENO") && !Su;
}), Rt = {
  CONSTRUCTOR: $g,
  REJECTION_EVENT: Su,
  SUBCLASSING: ei
}, lt = {}, ss = Te, wg = TypeError, Cg = function(a) {
  var e, t;
  this.promise = new a(function(r, i) {
    if (e !== void 0 || t !== void 0) throw new wg("Bad Promise constructor");
    e = r, t = i;
  }), this.resolve = ss(e), this.reject = ss(t);
};
lt.f = function(a) {
  return new Cg(a);
};
var Ag = ee, dr = wr, we = V, nt = Y, os = Ue, us = uu, Pg = Cr, Rg = sc, Ng = Te, ur = B, Ig = ve, Mg = lc, _g = gu, Eu = xu.set, Li = pg, Vg = yg, Dg = ki, kg = Ou, $u = Er, pr = Pr, Bi = Rt, wu = lt, Rr = "Promise", Cu = Bi.CONSTRUCTOR, Lg = Bi.REJECTION_EVENT, Bg = Bi.SUBCLASSING, Ta = $u.getterFor(Rr), jg = $u.set, Qe = pr && pr.prototype, De = pr, Kt = Qe, Au = we.TypeError, ti = we.document, ji = we.process, ri = wu.f, Fg = ri, Ug = !!(ti && ti.createEvent && we.dispatchEvent), Pu = "unhandledrejection", Gg = "rejectionhandled", ls = 0, Ru = 1, zg = 2, Fi = 1, Nu = 2, Zt, hs, Hg, vs, Iu = function(a) {
  var e;
  return Ig(a) && ur(e = a.then) ? e : !1;
}, Mu = function(a, e) {
  var t = e.value, r = e.state === Ru, i = r ? a.ok : a.fail, n = a.resolve, o = a.reject, s = a.domain, u, l, h;
  try {
    i ? (r || (e.rejection === Nu && Xg(e), e.rejection = Fi), i === !0 ? u = t : (s && s.enter(), u = i(t), s && (s.exit(), h = !0)), u === a.promise ? o(new Au("Promise-chain cycle")) : (l = Iu(u)) ? nt(l, u, n, o) : n(u)) : o(t);
  } catch (f) {
    s && !h && s.exit(), o(f);
  }
}, _u = function(a, e) {
  a.notified || (a.notified = !0, Li(function() {
    for (var t = a.reactions, r; r = t.get(); )
      Mu(r, a);
    a.notified = !1, e && !a.rejection && Yg(a);
  }));
}, Vu = function(a, e, t) {
  var r, i;
  Ug ? (r = ti.createEvent("Event"), r.promise = e, r.reason = t, r.initEvent(a, !1, !0), we.dispatchEvent(r)) : r = { promise: e, reason: t }, !Lg && (i = we["on" + a]) ? i(r) : a === Pu && Vg("Unhandled promise rejection", t);
}, Yg = function(a) {
  nt(Eu, we, function() {
    var e = a.facade, t = a.value, r = fs(a), i;
    if (r && (i = Dg(function() {
      dr ? ji.emit("unhandledRejection", t, e) : Vu(Pu, e, t);
    }), a.rejection = dr || fs(a) ? Nu : Fi, i.error))
      throw i.value;
  });
}, fs = function(a) {
  return a.rejection !== Fi && !a.parent;
}, Xg = function(a) {
  nt(Eu, we, function() {
    var e = a.facade;
    dr ? ji.emit("rejectionHandled", e) : Vu(Gg, e, a.value);
  });
}, Je = function(a, e, t) {
  return function(r) {
    a(e, r, t);
  };
}, tt = function(a, e, t) {
  a.done || (a.done = !0, t && (a = t), a.value = e, a.state = zg, _u(a, !0));
}, ai = function(a, e, t) {
  if (!a.done) {
    a.done = !0, t && (a = t);
    try {
      if (a.facade === e) throw new Au("Promise can't be resolved itself");
      var r = Iu(e);
      r ? Li(function() {
        var i = { done: !1 };
        try {
          nt(
            r,
            e,
            Je(ai, i, a),
            Je(tt, i, a)
          );
        } catch (n) {
          tt(i, n, a);
        }
      }) : (a.value = e, a.state = Ru, _u(a, !1));
    } catch (i) {
      tt({ done: !1 }, i, a);
    }
  }
};
if (Cu && (De = function(e) {
  Mg(this, Kt), Ng(e), nt(Zt, this);
  var t = Ta(this);
  try {
    e(Je(ai, t), Je(tt, t));
  } catch (r) {
    tt(t, r);
  }
}, Kt = De.prototype, Zt = function(e) {
  jg(this, {
    type: Rr,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: new kg(),
    rejection: !1,
    state: ls,
    value: null
  });
}, Zt.prototype = os(Kt, "then", function(e, t) {
  var r = Ta(this), i = ri(_g(this, De));
  return r.parent = !0, i.ok = ur(e) ? e : !0, i.fail = ur(t) && t, i.domain = dr ? ji.domain : void 0, r.state === ls ? r.reactions.add(i) : Li(function() {
    Mu(i, r);
  }), i.promise;
}), hs = function() {
  var a = new Zt(), e = Ta(a);
  this.promise = a, this.resolve = Je(ai, e), this.reject = Je(tt, e);
}, wu.f = ri = function(a) {
  return a === De || a === Hg ? new hs(a) : Fg(a);
}, ur(pr) && Qe !== Object.prototype)) {
  vs = Qe.then, Bg || os(Qe, "then", function(e, t) {
    var r = this;
    return new De(function(i, n) {
      nt(vs, r, i, n);
    }).then(e, t);
  }, { unsafe: !0 });
  try {
    delete Qe.constructor;
  } catch {
  }
  us && us(Qe, Kt);
}
Ag({ global: !0, constructor: !0, wrap: !0, forced: Cu }, {
  Promise: De
});
Pg(De, Rr, !1);
Rg(Rr);
var Nt = {}, Wg = z, qg = Nt, Qg = Wg("iterator"), Kg = Array.prototype, Zg = function(a) {
  return a !== void 0 && (qg.Array === a || Kg[Qg] === a);
}, Jg = Mi, cs = ot, ed = je, td = Nt, rd = z, ad = rd("iterator"), Du = function(a) {
  if (!ed(a)) return cs(a, ad) || cs(a, "@@iterator") || td[Jg(a)];
}, id = Y, nd = Te, sd = J, od = xr, ud = Du, ld = TypeError, hd = function(a, e) {
  var t = arguments.length < 2 ? ud(a) : e;
  if (nd(t)) return sd(id(t, a));
  throw new ld(od(a) + " is not iterable");
}, vd = Y, gs = J, fd = ot, cd = function(a, e, t) {
  var r, i;
  gs(a);
  try {
    if (r = fd(a, "return"), !r) {
      if (e === "throw") throw t;
      return t;
    }
    r = vd(r, a);
  } catch (n) {
    i = !0, r = n;
  }
  if (e === "throw") throw t;
  if (i) throw r;
  return gs(r), t;
}, gd = Vi, dd = Y, pd = J, yd = xr, md = Zg, bd = Ni, ds = br, xd = hd, Td = Du, ps = cd, Od = TypeError, lr = function(a, e) {
  this.stopped = a, this.result = e;
}, ys = lr.prototype, ku = function(a, e, t) {
  var r = t && t.that, i = !!(t && t.AS_ENTRIES), n = !!(t && t.IS_RECORD), o = !!(t && t.IS_ITERATOR), s = !!(t && t.INTERRUPTED), u = gd(e, r), l, h, f, c, v, d, g, p = function(x) {
    return l && ps(l, "normal", x), new lr(!0, x);
  }, y = function(x) {
    return i ? (pd(x), s ? u(x[0], x[1], p) : u(x[0], x[1])) : s ? u(x, p) : u(x);
  };
  if (n)
    l = a.iterator;
  else if (o)
    l = a;
  else {
    if (h = Td(a), !h) throw new Od(yd(a) + " is not iterable");
    if (md(h)) {
      for (f = 0, c = bd(a); c > f; f++)
        if (v = y(a[f]), v && ds(ys, v)) return v;
      return new lr(!1);
    }
    l = xd(a, h);
  }
  for (d = n ? a.next : l.next; !(g = dd(d, l)).done; ) {
    try {
      v = y(g.value);
    } catch (x) {
      ps(l, "throw", x);
    }
    if (typeof v == "object" && v && ds(ys, v)) return v;
  }
  return new lr(!1);
}, Sd = z, Lu = Sd("iterator"), Bu = !1;
try {
  var Ed = 0, ms = {
    next: function() {
      return { done: !!Ed++ };
    },
    return: function() {
      Bu = !0;
    }
  };
  ms[Lu] = function() {
    return this;
  }, Array.from(ms, function() {
    throw 2;
  });
} catch {
}
var $d = function(a, e) {
  try {
    if (!e && !Bu) return !1;
  } catch {
    return !1;
  }
  var t = !1;
  try {
    var r = {};
    r[Lu] = function() {
      return {
        next: function() {
          return { done: t = !0 };
        }
      };
    }, a(r);
  } catch {
  }
  return t;
}, wd = Pr, Cd = $d, Ad = Rt.CONSTRUCTOR, ju = Ad || !Cd(function(a) {
  wd.all(a).then(void 0, function() {
  });
}), Pd = ee, Rd = Y, Nd = Te, Id = lt, Md = ki, _d = ku, Vd = ju;
Pd({ target: "Promise", stat: !0, forced: Vd }, {
  all: function(e) {
    var t = this, r = Id.f(t), i = r.resolve, n = r.reject, o = Md(function() {
      var s = Nd(t.resolve), u = [], l = 0, h = 1;
      _d(e, function(f) {
        var c = l++, v = !1;
        h++, Rd(s, t, f).then(function(d) {
          v || (v = !0, u[c] = d, --h || i(u));
        }, n);
      }), --h || i(u);
    });
    return o.error && n(o.value), r.promise;
  }
});
var Dd = ee, kd = Rt.CONSTRUCTOR, ii = Pr, Ld = Fe, Bd = B, jd = Ue, bs = ii && ii.prototype;
Dd({ target: "Promise", proto: !0, forced: kd, real: !0 }, {
  catch: function(a) {
    return this.then(void 0, a);
  }
});
if (Bd(ii)) {
  var xs = Ld("Promise").prototype.catch;
  bs.catch !== xs && jd(bs, "catch", xs, { unsafe: !0 });
}
var Fd = ee, Ud = Y, Gd = Te, zd = lt, Hd = ki, Yd = ku, Xd = ju;
Fd({ target: "Promise", stat: !0, forced: Xd }, {
  race: function(e) {
    var t = this, r = zd.f(t), i = r.reject, n = Hd(function() {
      var o = Gd(t.resolve);
      Yd(e, function(s) {
        Ud(o, t, s).then(r.resolve, i);
      });
    });
    return n.error && i(n.value), r.promise;
  }
});
var Wd = ee, qd = lt, Qd = Rt.CONSTRUCTOR;
Wd({ target: "Promise", stat: !0, forced: Qd }, {
  reject: function(e) {
    var t = qd.f(this), r = t.reject;
    return r(e), t.promise;
  }
});
var Kd = J, Zd = ve, Jd = lt, ep = function(a, e) {
  if (Kd(a), Zd(e) && e.constructor === a) return e;
  var t = Jd.f(a), r = t.resolve;
  return r(e), t.promise;
}, tp = ee, rp = Fe, ap = Rt.CONSTRUCTOR, ip = ep;
rp("Promise");
tp({ target: "Promise", stat: !0, forced: ap }, {
  resolve: function(e) {
    return ip(this, e);
  }
});
function Ts(a, e, t, r, i, n, o) {
  try {
    var s = a[n](o), u = s.value;
  } catch (l) {
    return void t(l);
  }
  s.done ? e(u) : Promise.resolve(u).then(r, i);
}
function xe(a) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(r, i) {
      var n = a.apply(e, t);
      function o(u) {
        Ts(n, r, i, o, s, "next", u);
      }
      function s(u) {
        Ts(n, r, i, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var np = Mi, sp = String, pe = function(a) {
  if (np(a) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return sp(a);
}, op = J, Fu = function() {
  var a = op(this), e = "";
  return a.hasIndices && (e += "d"), a.global && (e += "g"), a.ignoreCase && (e += "i"), a.multiline && (e += "m"), a.dotAll && (e += "s"), a.unicode && (e += "u"), a.unicodeSets && (e += "v"), a.sticky && (e += "y"), e;
}, Ui = k, up = V, Gi = up.RegExp, zi = Ui(function() {
  var a = Gi("a", "y");
  return a.lastIndex = 2, a.exec("abcd") !== null;
}), lp = zi || Ui(function() {
  return !Gi("a", "y").sticky;
}), hp = zi || Ui(function() {
  var a = Gi("^r", "gy");
  return a.lastIndex = 2, a.exec("str") !== null;
}), Uu = {
  BROKEN_CARET: hp,
  MISSED_STICKY: lp,
  UNSUPPORTED_Y: zi
}, Gu = {}, vp = iu, fp = Ii, cp = Object.keys || function(e) {
  return vp(e, fp);
}, gp = le, dp = Qo, pp = Oe, yp = J, mp = wt, bp = cp;
Gu.f = gp && !dp ? Object.defineProperties : function(e, t) {
  yp(e);
  for (var r = mp(t), i = bp(t), n = i.length, o = 0, s; n > o; ) pp.f(e, s = i[o++], r[s]);
  return e;
};
var xp = J, Tp = Gu, Os = Ii, Op = Pi, Sp = yu, Ep = Or, $p = Ai, Ss = ">", Es = "<", ni = "prototype", si = "script", zu = $p("IE_PROTO"), Oa = function() {
}, Hu = function(a) {
  return Es + si + Ss + a + Es + "/" + si + Ss;
}, $s = function(a) {
  a.write(Hu("")), a.close();
  var e = a.parentWindow.Object;
  return a = null, e;
}, wp = function() {
  var a = Ep("iframe"), e = "java" + si + ":", t;
  return a.style.display = "none", Sp.appendChild(a), a.src = String(e), t = a.contentWindow.document, t.open(), t.write(Hu("document.F=Object")), t.close(), t.F;
}, Jt, hr = function() {
  try {
    Jt = new ActiveXObject("htmlfile");
  } catch {
  }
  hr = typeof document < "u" ? document.domain && Jt ? $s(Jt) : wp() : $s(Jt);
  for (var a = Os.length; a--; ) delete hr[ni][Os[a]];
  return hr();
};
Op[zu] = !0;
var Hi = Object.create || function(e, t) {
  var r;
  return e !== null ? (Oa[ni] = xp(e), r = new Oa(), Oa[ni] = null, r[zu] = e) : r = hr(), t === void 0 ? r : Tp.f(r, t);
}, Cp = k, Ap = V, Pp = Ap.RegExp, Rp = Cp(function() {
  var a = Pp(".", "s");
  return !(a.dotAll && a.test(`
`) && a.flags === "s");
}), Np = k, Ip = V, Mp = Ip.RegExp, _p = Np(function() {
  var a = Mp("(?<a>b)", "g");
  return a.exec("b").groups.a !== "b" || "b".replace(a, "$<a>c") !== "bc";
}), et = Y, Nr = L, Vp = pe, Dp = Fu, kp = Uu, Lp = $i, Bp = Hi, jp = Er.get, Fp = Rp, Up = _p, Gp = Lp("native-string-replace", String.prototype.replace), yr = RegExp.prototype.exec, oi = yr, zp = Nr("".charAt), Hp = Nr("".indexOf), Yp = Nr("".replace), Sa = Nr("".slice), ui = function() {
  var a = /a/, e = /b*/g;
  return et(yr, a, "a"), et(yr, e, "a"), a.lastIndex !== 0 || e.lastIndex !== 0;
}(), Yu = kp.BROKEN_CARET, li = /()??/.exec("")[1] !== void 0, Xp = ui || li || Yu || Fp || Up;
Xp && (oi = function(e) {
  var t = this, r = jp(t), i = Vp(e), n = r.raw, o, s, u, l, h, f, c;
  if (n)
    return n.lastIndex = t.lastIndex, o = et(oi, n, i), t.lastIndex = n.lastIndex, o;
  var v = r.groups, d = Yu && t.sticky, g = et(Dp, t), p = t.source, y = 0, x = i;
  if (d && (g = Yp(g, "y", ""), Hp(g, "g") === -1 && (g += "g"), x = Sa(i, t.lastIndex), t.lastIndex > 0 && (!t.multiline || t.multiline && zp(i, t.lastIndex - 1) !== `
`) && (p = "(?: " + p + ")", x = " " + x, y++), s = new RegExp("^(?:" + p + ")", g)), li && (s = new RegExp("^" + p + "$(?!\\s)", g)), ui && (u = t.lastIndex), l = et(yr, d ? s : t, x), d ? l ? (l.input = Sa(l.input, y), l[0] = Sa(l[0], y), l.index = t.lastIndex, t.lastIndex += l[0].length) : t.lastIndex = 0 : ui && l && (t.lastIndex = t.global ? l.index + l[0].length : u), li && l && l.length > 1 && et(Gp, l[0], s, function() {
    for (h = 1; h < arguments.length - 2; h++)
      arguments[h] === void 0 && (l[h] = void 0);
  }), l && v)
    for (l.groups = f = Bp(null), h = 0; h < v.length; h++)
      c = v[h], f[c[0]] = l[c[1]];
  return l;
});
var Yi = oi, Wp = ee, ws = Yi;
Wp({ target: "RegExp", proto: !0, forced: /./.exec !== ws }, {
  exec: ws
});
var Cs = Y, As = Ue, qp = Yi, Ps = k, Xu = z, Qp = At, Kp = Xu("species"), Ea = RegExp.prototype, Xi = function(a, e, t, r) {
  var i = Xu(a), n = !Ps(function() {
    var l = {};
    return l[i] = function() {
      return 7;
    }, ""[a](l) !== 7;
  }), o = n && !Ps(function() {
    var l = !1, h = /a/;
    return a === "split" && (h = {}, h.constructor = {}, h.constructor[Kp] = function() {
      return h;
    }, h.flags = "", h[i] = /./[i]), h.exec = function() {
      return l = !0, null;
    }, h[i](""), !l;
  });
  if (!n || !o || t) {
    var s = /./[i], u = e(i, ""[a], function(l, h, f, c, v) {
      var d = h.exec;
      return d === qp || d === Ea.exec ? n && !v ? { done: !0, value: Cs(s, h, f, c) } : { done: !0, value: Cs(l, f, h, c) } : { done: !1 };
    });
    As(String.prototype, a, u[0]), As(Ea, i, u[1]);
  }
  r && Qp(Ea[i], "sham", !0);
}, Wi = L, Zp = $r, Jp = pe, ey = he, ty = Wi("".charAt), Rs = Wi("".charCodeAt), ry = Wi("".slice), Ns = function(a) {
  return function(e, t) {
    var r = Jp(ey(e)), i = Zp(t), n = r.length, o, s;
    return i < 0 || i >= n ? a ? "" : void 0 : (o = Rs(r, i), o < 55296 || o > 56319 || i + 1 === n || (s = Rs(r, i + 1)) < 56320 || s > 57343 ? a ? ty(r, i) : o : a ? ry(r, i, i + 2) : (o - 55296 << 10) + (s - 56320) + 65536);
  };
}, ay = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: Ns(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: Ns(!0)
}, iy = ay.charAt, qi = function(a, e, t) {
  return e + (t ? iy(a, e).length : 1);
}, Is = Y, ny = J, sy = B, oy = Be, uy = Yi, ly = TypeError, Qi = function(a, e) {
  var t = a.exec;
  if (sy(t)) {
    var r = Is(t, a, e);
    return r !== null && ny(r), r;
  }
  if (oy(a) === "RegExp") return Is(uy, a, e);
  throw new ly("RegExp#exec called on incompatible receiver");
}, hy = Y, vy = Xi, fy = J, cy = je, gy = ut, $a = pe, dy = he, py = ot, yy = qi, Ms = Qi;
vy("match", function(a, e, t) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function(i) {
      var n = dy(this), o = cy(i) ? void 0 : py(i, a);
      return o ? hy(o, i, n) : new RegExp(i)[a]($a(n));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function(r) {
      var i = fy(this), n = $a(r), o = t(e, i, n);
      if (o.done) return o.value;
      if (!i.global) return Ms(i, n);
      var s = i.unicode;
      i.lastIndex = 0;
      for (var u = [], l = 0, h; (h = Ms(i, n)) !== null; ) {
        var f = $a(h[0]);
        u[l] = f, f === "" && (i.lastIndex = yy(n, gy(i.lastIndex), s)), l++;
      }
      return l === 0 ? null : u;
    }
  ];
});
var Ki = L, my = Tr, by = Math.floor, wa = Ki("".charAt), xy = Ki("".replace), Ca = Ki("".slice), Ty = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, Oy = /\$([$&'`]|\d{1,2})/g, Sy = function(a, e, t, r, i, n) {
  var o = t + a.length, s = r.length, u = Oy;
  return i !== void 0 && (i = my(i), u = Ty), xy(n, u, function(l, h) {
    var f;
    switch (wa(h, 0)) {
      case "$":
        return "$";
      case "&":
        return a;
      case "`":
        return Ca(e, 0, t);
      case "'":
        return Ca(e, o);
      case "<":
        f = i[Ca(h, 1, -1)];
        break;
      default:
        var c = +h;
        if (c === 0) return l;
        if (c > s) {
          var v = by(c / 10);
          return v === 0 ? l : v <= s ? r[v - 1] === void 0 ? wa(h, 1) : r[v - 1] + wa(h, 1) : l;
        }
        f = r[c - 1];
    }
    return f === void 0 ? "" : f;
  });
}, Ey = pu, _s = Y, Ir = L, $y = Xi, wy = k, Cy = J, Ay = B, Py = je, Ry = $r, Ny = ut, We = pe, Iy = he, My = qi, _y = ot, Vy = Sy, Dy = Qi, ky = z, hi = ky("replace"), Ly = Math.max, By = Math.min, jy = Ir([].concat), Aa = Ir([].push), Vs = Ir("".indexOf), Ds = Ir("".slice), Fy = function(a) {
  return a === void 0 ? a : String(a);
}, Uy = function() {
  return "a".replace(/./, "$0") === "$0";
}(), ks = function() {
  return /./[hi] ? /./[hi]("a", "$0") === "" : !1;
}(), Gy = !wy(function() {
  var a = /./;
  return a.exec = function() {
    var e = [];
    return e.groups = { a: "7" }, e;
  }, "".replace(a, "$<a>") !== "7";
});
$y("replace", function(a, e, t) {
  var r = ks ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function(n, o) {
      var s = Iy(this), u = Py(n) ? void 0 : _y(n, hi);
      return u ? _s(u, n, s, o) : _s(e, We(s), n, o);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(i, n) {
      var o = Cy(this), s = We(i);
      if (typeof n == "string" && Vs(n, r) === -1 && Vs(n, "$<") === -1) {
        var u = t(e, o, s, n);
        if (u.done) return u.value;
      }
      var l = Ay(n);
      l || (n = We(n));
      var h = o.global, f;
      h && (f = o.unicode, o.lastIndex = 0);
      for (var c = [], v; v = Dy(o, s), !(v === null || (Aa(c, v), !h)); ) {
        var d = We(v[0]);
        d === "" && (o.lastIndex = My(s, Ny(o.lastIndex), f));
      }
      for (var g = "", p = 0, y = 0; y < c.length; y++) {
        v = c[y];
        for (var x = We(v[0]), b = Ly(By(Ry(v.index), s.length), 0), T = [], $, E = 1; E < v.length; E++) Aa(T, Fy(v[E]));
        var O = v.groups;
        if (l) {
          var C = jy([x], T, b, s);
          O !== void 0 && Aa(C, O), $ = We(Ey(n, void 0, C));
        } else
          $ = Vy(x, s, b, T, O, n);
        b >= p && (g += Ds(s, p, b) + $, p = b + x.length);
      }
      return g + Ds(s, p);
    }
  ];
}, !Gy || !Uy || ks);
var zy = ve, Hy = Be, Yy = z, Xy = Yy("match"), Wy = function(a) {
  var e;
  return zy(a) && ((e = a[Xy]) !== void 0 ? !!e : Hy(a) === "RegExp");
}, qy = Wy, Qy = TypeError, Zi = function(a) {
  if (qy(a))
    throw new Qy("The method doesn't accept regular expressions");
  return a;
}, Ky = z, Zy = Ky("match"), Ji = function(a) {
  var e = /./;
  try {
    "/./"[a](e);
  } catch {
    try {
      return e[Zy] = !1, "/./"[a](e);
    } catch {
    }
  }
  return !1;
}, Jy = ee, em = Ar, tm = $t.f, rm = ut, Ls = pe, am = Zi, im = he, nm = Ji, sm = em("".slice), om = Math.min, Wu = nm("startsWith"), um = !Wu && !!function() {
  var a = tm(String.prototype, "startsWith");
  return a && !a.writable;
}();
Jy({ target: "String", proto: !0, forced: !um && !Wu }, {
  startsWith: function(e) {
    var t = Ls(im(this));
    am(e);
    var r = rm(om(arguments.length > 1 ? arguments[1] : void 0, t.length)), i = Ls(e);
    return sm(t, r, r + i.length) === i;
  }
});
var lm = z, hm = Hi, vm = Oe.f, vi = lm("unscopables"), fi = Array.prototype;
fi[vi] === void 0 && vm(fi, vi, {
  configurable: !0,
  value: hm(null)
});
var fm = function(a) {
  fi[vi][a] = !0;
}, cm = k, gm = !cm(function() {
  function a() {
  }
  return a.prototype.constructor = null, Object.getPrototypeOf(new a()) !== a.prototype;
}), dm = fe, pm = B, ym = Tr, mm = Ai, bm = gm, Bs = mm("IE_PROTO"), ci = Object, xm = ci.prototype, qu = bm ? ci.getPrototypeOf : function(a) {
  var e = ym(a);
  if (dm(e, Bs)) return e[Bs];
  var t = e.constructor;
  return pm(t) && e instanceof t ? t.prototype : e instanceof ci ? xm : null;
}, Tm = k, Om = B, Sm = ve, js = qu, Em = Ue, $m = z, gi = $m("iterator"), Qu = !1, ke, Pa, Ra;
[].keys && (Ra = [].keys(), "next" in Ra ? (Pa = js(js(Ra)), Pa !== Object.prototype && (ke = Pa)) : Qu = !0);
var wm = !Sm(ke) || Tm(function() {
  var a = {};
  return ke[gi].call(a) !== a;
});
wm && (ke = {});
Om(ke[gi]) || Em(ke, gi, function() {
  return this;
});
var Ku = {
  IteratorPrototype: ke,
  BUGGY_SAFARI_ITERATORS: Qu
}, Cm = Ku.IteratorPrototype, Am = Hi, Pm = Ti, Rm = Cr, Nm = Nt, Im = function() {
  return this;
}, Mm = function(a, e, t, r) {
  var i = e + " Iterator";
  return a.prototype = Am(Cm, { next: Pm(+!r, t) }), Rm(a, i, !1), Nm[i] = Im, a;
}, _m = ee, Vm = Y, Zu = Sr, Dm = B, km = Mm, Fs = qu, Us = uu, Lm = Cr, Bm = At, Na = Ue, jm = z, Fm = Nt, Ju = Ku, Um = Zu.PROPER, Gm = Zu.CONFIGURABLE, Gs = Ju.IteratorPrototype, er = Ju.BUGGY_SAFARI_ITERATORS, gt = jm("iterator"), zs = "keys", dt = "values", Hs = "entries", zm = function() {
  return this;
}, Hm = function(a, e, t, r, i, n, o) {
  km(t, e, r);
  var s = function(y) {
    if (y === i && c) return c;
    if (!er && y && y in h) return h[y];
    switch (y) {
      case zs:
        return function() {
          return new t(this, y);
        };
      case dt:
        return function() {
          return new t(this, y);
        };
      case Hs:
        return function() {
          return new t(this, y);
        };
    }
    return function() {
      return new t(this);
    };
  }, u = e + " Iterator", l = !1, h = a.prototype, f = h[gt] || h["@@iterator"] || i && h[i], c = !er && f || s(i), v = e === "Array" && h.entries || f, d, g, p;
  if (v && (d = Fs(v.call(new a())), d !== Object.prototype && d.next && (Fs(d) !== Gs && (Us ? Us(d, Gs) : Dm(d[gt]) || Na(d, gt, zm)), Lm(d, u, !0))), Um && i === dt && f && f.name !== dt && (Gm ? Bm(h, "name", dt) : (l = !0, c = function() {
    return Vm(f, this);
  })), i)
    if (g = {
      values: s(dt),
      keys: n ? c : s(zs),
      entries: s(Hs)
    }, o) for (p in g)
      (er || l || !(p in h)) && Na(h, p, g[p]);
    else _m({ target: e, proto: !0, forced: er || l }, g);
  return h[gt] !== c && Na(h, gt, c, { name: i }), Fm[e] = c, g;
}, Ym = function(a, e) {
  return { value: a, done: e };
}, Xm = wt, en = fm, Ys = Nt, el = Er, Wm = Oe.f, qm = Hm, tr = Ym, Qm = le, tl = "Array Iterator", Km = el.set, Zm = el.getterFor(tl), Jm = qm(Array, "Array", function(a, e) {
  Km(this, {
    type: tl,
    target: Xm(a),
    // target
    index: 0,
    // next index
    kind: e
    // kind
  });
}, function() {
  var a = Zm(this), e = a.target, t = a.index++;
  if (!e || t >= e.length)
    return a.target = null, tr(void 0, !0);
  switch (a.kind) {
    case "keys":
      return tr(t, !1);
    case "values":
      return tr(e[t], !1);
  }
  return tr([t, e[t]], !1);
}, "values"), Xs = Ys.Arguments = Ys.Array;
en("keys");
en("values");
en("entries");
if (Qm && Xs.name !== "values") try {
  Wm(Xs, "name", { value: "values" });
} catch {
}
var e0 = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, t0 = Or, Ia = t0("span").classList, Ws = Ia && Ia.constructor && Ia.constructor.prototype, r0 = Ws === Object.prototype ? void 0 : Ws, qs = V, rl = e0, a0 = r0, yt = Jm, Qs = At, i0 = Cr, n0 = z, Ma = n0("iterator"), _a = yt.values, al = function(a, e) {
  if (a) {
    if (a[Ma] !== _a) try {
      Qs(a, Ma, _a);
    } catch {
      a[Ma] = _a;
    }
    if (i0(a, e, !0), rl[e]) {
      for (var t in yt)
        if (a[t] !== yt[t]) try {
          Qs(a, t, yt[t]);
        } catch {
          a[t] = yt[t];
        }
    }
  }
};
for (var Va in rl)
  al(qs[Va] && qs[Va].prototype, Va);
al(a0, "DOMTokenList");
function s0(a, e) {
  if (za(a) != "object" || !a) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(a, e || "default");
    if (za(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(a);
}
function o0(a) {
  var e = s0(a, "string");
  return za(e) == "symbol" ? e : e + "";
}
function tn(a, e, t) {
  return (e = o0(e)) in a ? Object.defineProperty(a, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[e] = t, a;
}
var u0 = Te, l0 = Tr, h0 = Fo, v0 = Ni, Ks = TypeError, Zs = "Reduce of empty array with no initial value", Js = function(a) {
  return function(e, t, r, i) {
    var n = l0(e), o = h0(n), s = v0(n);
    if (u0(t), s === 0 && r < 2) throw new Ks(Zs);
    var u = a ? s - 1 : 0, l = a ? -1 : 1;
    if (r < 2) for (; ; ) {
      if (u in o) {
        i = o[u], u += l;
        break;
      }
      if (u += l, a ? u < 0 : s <= u)
        throw new Ks(Zs);
    }
    for (; a ? u >= 0 : s > u; u += l) u in o && (i = t(i, o[u], u, n));
    return i;
  };
}, f0 = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: Js(!1),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: Js(!0)
}, c0 = k, il = function(a, e) {
  var t = [][a];
  return !!t && c0(function() {
    t.call(null, e || function() {
      return 1;
    }, 1);
  });
}, g0 = ee, d0 = f0.left, p0 = il, eo = Oi, y0 = wr, m0 = !y0 && eo > 79 && eo < 83, b0 = m0 || !p0("reduce");
g0({ target: "Array", proto: !0, forced: b0 }, {
  reduce: function(e) {
    var t = arguments.length;
    return d0(this, e, t, t > 1 ? arguments[1] : void 0);
  }
});
var x0 = ee, T0 = Ar, O0 = $t.f, S0 = ut, to = pe, E0 = Zi, $0 = he, w0 = Ji, C0 = T0("".slice), A0 = Math.min, nl = w0("endsWith"), P0 = !nl && !!function() {
  var a = O0(String.prototype, "endsWith");
  return a && !a.writable;
}();
x0({ target: "String", proto: !0, forced: !P0 && !nl }, {
  endsWith: function(e) {
    var t = to($0(this));
    E0(e);
    var r = arguments.length > 1 ? arguments[1] : void 0, i = t.length, n = r === void 0 ? i : A0(S0(r), i), o = to(e);
    return C0(t, n - o.length, n) === o;
  }
});
var Da = Y, sl = L, R0 = Xi, N0 = J, I0 = je, M0 = he, _0 = gu, V0 = qi, D0 = ut, ro = pe, k0 = ot, ao = Qi, L0 = Uu, B0 = k, qe = L0.UNSUPPORTED_Y, j0 = 4294967295, F0 = Math.min, ka = sl([].push), La = sl("".slice), U0 = !B0(function() {
  var a = /(?:)/, e = a.exec;
  a.exec = function() {
    return e.apply(this, arguments);
  };
  var t = "ab".split(a);
  return t.length !== 2 || t[0] !== "a" || t[1] !== "b";
}), io = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
"test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
".".split(/()()/).length > 1 || "".split(/.?/).length;
R0("split", function(a, e, t) {
  var r = "0".split(void 0, 0).length ? function(i, n) {
    return i === void 0 && n === 0 ? [] : Da(e, this, i, n);
  } : e;
  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function(n, o) {
      var s = M0(this), u = I0(n) ? void 0 : k0(n, a);
      return u ? Da(u, n, s, o) : Da(r, ro(s), n, o);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function(i, n) {
      var o = N0(this), s = ro(i);
      if (!io) {
        var u = t(r, o, s, n, r !== e);
        if (u.done) return u.value;
      }
      var l = _0(o, RegExp), h = o.unicode, f = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (qe ? "g" : "y"), c = new l(qe ? "^(?:" + o.source + ")" : o, f), v = n === void 0 ? j0 : n >>> 0;
      if (v === 0) return [];
      if (s.length === 0) return ao(c, s) === null ? [s] : [];
      for (var d = 0, g = 0, p = []; g < s.length; ) {
        c.lastIndex = qe ? 0 : g;
        var y = ao(c, qe ? La(s, g) : s), x;
        if (y === null || (x = F0(D0(c.lastIndex + (qe ? g : 0)), s.length)) === d)
          g = V0(s, g, h);
        else {
          if (ka(p, La(s, d, g)), p.length === v) return p;
          for (var b = 1; b <= y.length - 1; b++)
            if (ka(p, y[b]), p.length === v) return p;
          g = d = x;
        }
      }
      return ka(p, La(s, d)), p;
    }
  ];
}, io || !U0, qe);
var Mr = { exports: {} }, mt = { exports: {} };
(function() {
  var a, e, t, r, i, n;
  typeof performance < "u" && performance !== null && performance.now ? mt.exports = function() {
    return performance.now();
  } : typeof process < "u" && process !== null && process.hrtime ? (mt.exports = function() {
    return (a() - i) / 1e6;
  }, e = process.hrtime, a = function() {
    var o;
    return o = e(), o[0] * 1e9 + o[1];
  }, r = a(), n = process.uptime() * 1e9, i = r - n) : Date.now ? (mt.exports = function() {
    return Date.now() - t;
  }, t = Date.now()) : (mt.exports = function() {
    return (/* @__PURE__ */ new Date()).getTime() - t;
  }, t = (/* @__PURE__ */ new Date()).getTime());
}).call(Ke);
var G0 = mt.exports, z0 = G0, be = typeof window > "u" ? Ke : window, rr = ["moz", "webkit"], rt = "AnimationFrame", st = be["request" + rt], Et = be["cancel" + rt] || be["cancelRequest" + rt];
for (var pt = 0; !st && pt < rr.length; pt++)
  st = be[rr[pt] + "Request" + rt], Et = be[rr[pt] + "Cancel" + rt] || be[rr[pt] + "CancelRequest" + rt];
if (!st || !Et) {
  var Ba = 0, no = 0, Me = [], H0 = 1e3 / 60;
  st = function(a) {
    if (Me.length === 0) {
      var e = z0(), t = Math.max(0, H0 - (e - Ba));
      Ba = t + e, setTimeout(function() {
        var r = Me.slice(0);
        Me.length = 0;
        for (var i = 0; i < r.length; i++)
          if (!r[i].cancelled)
            try {
              r[i].callback(Ba);
            } catch (n) {
              setTimeout(function() {
                throw n;
              }, 0);
            }
      }, Math.round(t));
    }
    return Me.push({
      handle: ++no,
      callback: a,
      cancelled: !1
    }), no;
  }, Et = function(a) {
    for (var e = 0; e < Me.length; e++)
      Me[e].handle === a && (Me[e].cancelled = !0);
  };
}
Mr.exports = function(a) {
  return st.call(be, a);
};
Mr.exports.cancel = function() {
  Et.apply(be, arguments);
};
Mr.exports.polyfill = function(a) {
  a || (a = be), a.requestAnimationFrame = st, a.cancelAnimationFrame = Et;
};
var Y0 = Mr.exports;
const ja = /* @__PURE__ */ _o(Y0);
var ol = `	
\v\f\r                　\u2028\u2029\uFEFF`, X0 = L, W0 = he, q0 = pe, di = ol, so = X0("".replace), Q0 = RegExp("^[" + di + "]+"), K0 = RegExp("(^|[^" + di + "])[" + di + "]+$"), Fa = function(a) {
  return function(e) {
    var t = q0(W0(e));
    return a & 1 && (t = so(t, Q0, "")), a & 2 && (t = so(t, K0, "$1")), t;
  };
}, Z0 = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: Fa(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: Fa(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: Fa(3)
}, J0 = Sr.PROPER, eb = k, oo = ol, uo = "​᠎", tb = function(a) {
  return eb(function() {
    return !!oo[a]() || uo[a]() !== uo || J0 && oo[a].name !== a;
  });
}, rb = ee, ab = Z0.trim, ib = tb;
rb({ target: "String", proto: !0, forced: ib("trim") }, {
  trim: function() {
    return ab(this);
  }
});
var nb = function(a) {
  this.ok = !1, this.alpha = 1, a.charAt(0) == "#" && (a = a.substr(1, 6)), a = a.replace(/ /g, ""), a = a.toLowerCase();
  var e = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dodgerblue: "1e90ff",
    feldspar: "d19275",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgrey: "d3d3d3",
    lightgreen: "90ee90",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslateblue: "8470ff",
    lightslategray: "778899",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "00ff00",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "ff00ff",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370d8",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "d87093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "ff0000",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    violetred: "d02090",
    wheat: "f5deb3",
    white: "ffffff",
    whitesmoke: "f5f5f5",
    yellow: "ffff00",
    yellowgreen: "9acd32"
  };
  a = e[a] || a;
  for (var t = [
    {
      re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
      example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
      process: function(u) {
        return [
          parseInt(u[1]),
          parseInt(u[2]),
          parseInt(u[3]),
          parseFloat(u[4])
        ];
      }
    },
    {
      re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
      example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
      process: function(u) {
        return [
          parseInt(u[1]),
          parseInt(u[2]),
          parseInt(u[3])
        ];
      }
    },
    {
      re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      example: ["#00ff00", "336699"],
      process: function(u) {
        return [
          parseInt(u[1], 16),
          parseInt(u[2], 16),
          parseInt(u[3], 16)
        ];
      }
    },
    {
      re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      example: ["#fb0", "f0f"],
      process: function(u) {
        return [
          parseInt(u[1] + u[1], 16),
          parseInt(u[2] + u[2], 16),
          parseInt(u[3] + u[3], 16)
        ];
      }
    }
  ], r = 0; r < t.length; r++) {
    var i = t[r].re, n = t[r].process, o = i.exec(a);
    if (o) {
      var s = n(o);
      this.r = s[0], this.g = s[1], this.b = s[2], s.length > 3 && (this.alpha = s[3]), this.ok = !0;
    }
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }, this.toRGBA = function() {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
  }, this.toHex = function() {
    var u = this.r.toString(16), l = this.g.toString(16), h = this.b.toString(16);
    return u.length == 1 && (u = "0" + u), l.length == 1 && (l = "0" + l), h.length == 1 && (h = "0" + h), "#" + u + l + h;
  }, this.getHelpXML = function() {
    for (var u = new Array(), l = 0; l < t.length; l++)
      for (var h = t[l].example, f = 0; f < h.length; f++)
        u[u.length] = h[f];
    for (var c in e)
      u[u.length] = c;
    var v = document.createElement("ul");
    v.setAttribute("id", "rgbcolor-examples");
    for (var l = 0; l < u.length; l++)
      try {
        var d = document.createElement("li"), g = new RGBColor(u[l]), p = document.createElement("div");
        p.style.cssText = "margin: 3px; border: 1px solid black; background:" + g.toHex() + "; color:" + g.toHex(), p.appendChild(document.createTextNode("test"));
        var y = document.createTextNode(
          " " + u[l] + " -> " + g.toRGB() + " -> " + g.toHex()
        );
        d.appendChild(p), d.appendChild(y), v.appendChild(d);
      } catch {
      }
    return v;
  };
};
const pi = /* @__PURE__ */ _o(nb);
var sb = ee, ob = Ar, ub = au.indexOf, lb = il, yi = ob([].indexOf), ul = !!yi && 1 / yi([1], 1, -0) < 0, hb = ul || !lb("indexOf");
sb({ target: "Array", proto: !0, forced: hb }, {
  indexOf: function(e) {
    var t = arguments.length > 1 ? arguments[1] : void 0;
    return ul ? yi(this, e, t) || 0 : ub(this, e, t);
  }
});
var vb = ee, fb = L, cb = Zi, gb = he, lo = pe, db = Ji, pb = fb("".indexOf);
vb({ target: "String", proto: !0, forced: !db("includes") }, {
  includes: function(e) {
    return !!~pb(
      lo(gb(this)),
      lo(cb(e)),
      arguments.length > 1 ? arguments[1] : void 0
    );
  }
});
var yb = Be, mb = Array.isArray || function(e) {
  return yb(e) === "Array";
}, bb = ee, xb = L, Tb = mb, Ob = xb([].reverse), ho = [1, 2];
bb({ target: "Array", proto: !0, forced: String(ho) === String(ho.reverse()) }, {
  reverse: function() {
    return Tb(this) && (this.length = this.length), Ob(this);
  }
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var ll = function(a, e) {
  return (ll = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  })(a, e);
};
function hl(a, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  function t() {
    this.constructor = a;
  }
  ll(a, e), a.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function Sb(a) {
  var e = "";
  Array.isArray(a) || (a = [a]);
  for (var t = 0; t < a.length; t++) {
    var r = a[t];
    if (r.type === m.CLOSE_PATH) e += "z";
    else if (r.type === m.HORIZ_LINE_TO) e += (r.relative ? "h" : "H") + r.x;
    else if (r.type === m.VERT_LINE_TO) e += (r.relative ? "v" : "V") + r.y;
    else if (r.type === m.MOVE_TO) e += (r.relative ? "m" : "M") + r.x + " " + r.y;
    else if (r.type === m.LINE_TO) e += (r.relative ? "l" : "L") + r.x + " " + r.y;
    else if (r.type === m.CURVE_TO) e += (r.relative ? "c" : "C") + r.x1 + " " + r.y1 + " " + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === m.SMOOTH_CURVE_TO) e += (r.relative ? "s" : "S") + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === m.QUAD_TO) e += (r.relative ? "q" : "Q") + r.x1 + " " + r.y1 + " " + r.x + " " + r.y;
    else if (r.type === m.SMOOTH_QUAD_TO) e += (r.relative ? "t" : "T") + r.x + " " + r.y;
    else {
      if (r.type !== m.ARC) throw new Error('Unexpected command type "' + r.type + '" at index ' + t + ".");
      e += (r.relative ? "a" : "A") + r.rX + " " + r.rY + " " + r.xRot + " " + +r.lArcFlag + " " + +r.sweepFlag + " " + r.x + " " + r.y;
    }
  }
  return e;
}
function mi(a, e) {
  var t = a[0], r = a[1];
  return [t * Math.cos(e) - r * Math.sin(e), t * Math.sin(e) + r * Math.cos(e)];
}
function oe() {
  for (var a = [], e = 0; e < arguments.length; e++) a[e] = arguments[e];
  for (var t = 0; t < a.length; t++) if (typeof a[t] != "number") throw new Error("assertNumbers arguments[" + t + "] is not a number. " + typeof a[t] + " == typeof " + a[t]);
  return !0;
}
var Ee = Math.PI;
function Ua(a, e, t) {
  a.lArcFlag = a.lArcFlag === 0 ? 0 : 1, a.sweepFlag = a.sweepFlag === 0 ? 0 : 1;
  var r = a.rX, i = a.rY, n = a.x, o = a.y;
  r = Math.abs(a.rX), i = Math.abs(a.rY);
  var s = mi([(e - n) / 2, (t - o) / 2], -a.xRot / 180 * Ee), u = s[0], l = s[1], h = Math.pow(u, 2) / Math.pow(r, 2) + Math.pow(l, 2) / Math.pow(i, 2);
  1 < h && (r *= Math.sqrt(h), i *= Math.sqrt(h)), a.rX = r, a.rY = i;
  var f = Math.pow(r, 2) * Math.pow(l, 2) + Math.pow(i, 2) * Math.pow(u, 2), c = (a.lArcFlag !== a.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(r, 2) * Math.pow(i, 2) - f) / f)), v = r * l / i * c, d = -i * u / r * c, g = mi([v, d], a.xRot / 180 * Ee);
  a.cX = g[0] + (e + n) / 2, a.cY = g[1] + (t + o) / 2, a.phi1 = Math.atan2((l - d) / i, (u - v) / r), a.phi2 = Math.atan2((-l - d) / i, (-u - v) / r), a.sweepFlag === 0 && a.phi2 > a.phi1 && (a.phi2 -= 2 * Ee), a.sweepFlag === 1 && a.phi2 < a.phi1 && (a.phi2 += 2 * Ee), a.phi1 *= 180 / Ee, a.phi2 *= 180 / Ee;
}
function vo(a, e, t) {
  oe(a, e, t);
  var r = a * a + e * e - t * t;
  if (0 > r) return [];
  if (r === 0) return [[a * t / (a * a + e * e), e * t / (a * a + e * e)]];
  var i = Math.sqrt(r);
  return [[(a * t + e * i) / (a * a + e * e), (e * t - a * i) / (a * a + e * e)], [(a * t - e * i) / (a * a + e * e), (e * t + a * i) / (a * a + e * e)]];
}
var U, ye = Math.PI / 180;
function fo(a, e, t) {
  return (1 - t) * a + t * e;
}
function co(a, e, t, r) {
  return a + Math.cos(r / 180 * Ee) * e + Math.sin(r / 180 * Ee) * t;
}
function go(a, e, t, r) {
  var i = 1e-6, n = e - a, o = t - e, s = 3 * n + 3 * (r - t) - 6 * o, u = 6 * (o - n), l = 3 * n;
  return Math.abs(s) < i ? [-l / u] : function(h, f, c) {
    var v = h * h / 4 - f;
    if (v < -c) return [];
    if (v <= c) return [-h / 2];
    var d = Math.sqrt(v);
    return [-h / 2 - d, -h / 2 + d];
  }(u / s, l / s, i);
}
function po(a, e, t, r, i) {
  var n = 1 - i;
  return a * (n * n * n) + e * (3 * n * n * i) + t * (3 * n * i * i) + r * (i * i * i);
}
(function(a) {
  function e() {
    return i(function(s, u, l) {
      return s.relative && (s.x1 !== void 0 && (s.x1 += u), s.y1 !== void 0 && (s.y1 += l), s.x2 !== void 0 && (s.x2 += u), s.y2 !== void 0 && (s.y2 += l), s.x !== void 0 && (s.x += u), s.y !== void 0 && (s.y += l), s.relative = !1), s;
    });
  }
  function t() {
    var s = NaN, u = NaN, l = NaN, h = NaN;
    return i(function(f, c, v) {
      return f.type & m.SMOOTH_CURVE_TO && (f.type = m.CURVE_TO, s = isNaN(s) ? c : s, u = isNaN(u) ? v : u, f.x1 = f.relative ? c - s : 2 * c - s, f.y1 = f.relative ? v - u : 2 * v - u), f.type & m.CURVE_TO ? (s = f.relative ? c + f.x2 : f.x2, u = f.relative ? v + f.y2 : f.y2) : (s = NaN, u = NaN), f.type & m.SMOOTH_QUAD_TO && (f.type = m.QUAD_TO, l = isNaN(l) ? c : l, h = isNaN(h) ? v : h, f.x1 = f.relative ? c - l : 2 * c - l, f.y1 = f.relative ? v - h : 2 * v - h), f.type & m.QUAD_TO ? (l = f.relative ? c + f.x1 : f.x1, h = f.relative ? v + f.y1 : f.y1) : (l = NaN, h = NaN), f;
    });
  }
  function r() {
    var s = NaN, u = NaN;
    return i(function(l, h, f) {
      if (l.type & m.SMOOTH_QUAD_TO && (l.type = m.QUAD_TO, s = isNaN(s) ? h : s, u = isNaN(u) ? f : u, l.x1 = l.relative ? h - s : 2 * h - s, l.y1 = l.relative ? f - u : 2 * f - u), l.type & m.QUAD_TO) {
        s = l.relative ? h + l.x1 : l.x1, u = l.relative ? f + l.y1 : l.y1;
        var c = l.x1, v = l.y1;
        l.type = m.CURVE_TO, l.x1 = ((l.relative ? 0 : h) + 2 * c) / 3, l.y1 = ((l.relative ? 0 : f) + 2 * v) / 3, l.x2 = (l.x + 2 * c) / 3, l.y2 = (l.y + 2 * v) / 3;
      } else s = NaN, u = NaN;
      return l;
    });
  }
  function i(s) {
    var u = 0, l = 0, h = NaN, f = NaN;
    return function(c) {
      if (isNaN(h) && !(c.type & m.MOVE_TO)) throw new Error("path must start with moveto");
      var v = s(c, u, l, h, f);
      return c.type & m.CLOSE_PATH && (u = h, l = f), c.x !== void 0 && (u = c.relative ? u + c.x : c.x), c.y !== void 0 && (l = c.relative ? l + c.y : c.y), c.type & m.MOVE_TO && (h = u, f = l), v;
    };
  }
  function n(s, u, l, h, f, c) {
    return oe(s, u, l, h, f, c), i(function(v, d, g, p) {
      var y = v.x1, x = v.x2, b = v.relative && !isNaN(p), T = v.x !== void 0 ? v.x : b ? 0 : d, $ = v.y !== void 0 ? v.y : b ? 0 : g;
      function E(ne) {
        return ne * ne;
      }
      v.type & m.HORIZ_LINE_TO && u !== 0 && (v.type = m.LINE_TO, v.y = v.relative ? 0 : g), v.type & m.VERT_LINE_TO && l !== 0 && (v.type = m.LINE_TO, v.x = v.relative ? 0 : d), v.x !== void 0 && (v.x = v.x * s + $ * l + (b ? 0 : f)), v.y !== void 0 && (v.y = T * u + v.y * h + (b ? 0 : c)), v.x1 !== void 0 && (v.x1 = v.x1 * s + v.y1 * l + (b ? 0 : f)), v.y1 !== void 0 && (v.y1 = y * u + v.y1 * h + (b ? 0 : c)), v.x2 !== void 0 && (v.x2 = v.x2 * s + v.y2 * l + (b ? 0 : f)), v.y2 !== void 0 && (v.y2 = x * u + v.y2 * h + (b ? 0 : c));
      var O = s * h - u * l;
      if (v.xRot !== void 0 && (s !== 1 || u !== 0 || l !== 0 || h !== 1)) if (O === 0) delete v.rX, delete v.rY, delete v.xRot, delete v.lArcFlag, delete v.sweepFlag, v.type = m.LINE_TO;
      else {
        var C = v.xRot * Math.PI / 180, I = Math.sin(C), _ = Math.cos(C), j = 1 / E(v.rX), P = 1 / E(v.rY), X = E(_) * j + E(I) * P, W = 2 * I * _ * (j - P), G = E(I) * j + E(_) * P, q = X * h * h - W * u * h + G * u * u, H = W * (s * h + u * l) - 2 * (X * l * h + G * s * u), Q = X * l * l - W * s * l + G * s * s, R = (Math.atan2(H, q - Q) + Math.PI) % Math.PI / 2, M = Math.sin(R), K = Math.cos(R);
        v.rX = Math.abs(O) / Math.sqrt(q * E(K) + H * M * K + Q * E(M)), v.rY = Math.abs(O) / Math.sqrt(q * E(M) - H * M * K + Q * E(K)), v.xRot = 180 * R / Math.PI;
      }
      return v.sweepFlag !== void 0 && 0 > O && (v.sweepFlag = +!v.sweepFlag), v;
    });
  }
  function o() {
    return function(s) {
      var u = {};
      for (var l in s) u[l] = s[l];
      return u;
    };
  }
  a.ROUND = function(s) {
    function u(l) {
      return Math.round(l * s) / s;
    }
    return s === void 0 && (s = 1e13), oe(s), function(l) {
      return l.x1 !== void 0 && (l.x1 = u(l.x1)), l.y1 !== void 0 && (l.y1 = u(l.y1)), l.x2 !== void 0 && (l.x2 = u(l.x2)), l.y2 !== void 0 && (l.y2 = u(l.y2)), l.x !== void 0 && (l.x = u(l.x)), l.y !== void 0 && (l.y = u(l.y)), l.rX !== void 0 && (l.rX = u(l.rX)), l.rY !== void 0 && (l.rY = u(l.rY)), l;
    };
  }, a.TO_ABS = e, a.TO_REL = function() {
    return i(function(s, u, l) {
      return s.relative || (s.x1 !== void 0 && (s.x1 -= u), s.y1 !== void 0 && (s.y1 -= l), s.x2 !== void 0 && (s.x2 -= u), s.y2 !== void 0 && (s.y2 -= l), s.x !== void 0 && (s.x -= u), s.y !== void 0 && (s.y -= l), s.relative = !0), s;
    });
  }, a.NORMALIZE_HVZ = function(s, u, l) {
    return s === void 0 && (s = !0), u === void 0 && (u = !0), l === void 0 && (l = !0), i(function(h, f, c, v, d) {
      if (isNaN(v) && !(h.type & m.MOVE_TO)) throw new Error("path must start with moveto");
      return u && h.type & m.HORIZ_LINE_TO && (h.type = m.LINE_TO, h.y = h.relative ? 0 : c), l && h.type & m.VERT_LINE_TO && (h.type = m.LINE_TO, h.x = h.relative ? 0 : f), s && h.type & m.CLOSE_PATH && (h.type = m.LINE_TO, h.x = h.relative ? v - f : v, h.y = h.relative ? d - c : d), h.type & m.ARC && (h.rX === 0 || h.rY === 0) && (h.type = m.LINE_TO, delete h.rX, delete h.rY, delete h.xRot, delete h.lArcFlag, delete h.sweepFlag), h;
    });
  }, a.NORMALIZE_ST = t, a.QT_TO_C = r, a.INFO = i, a.SANITIZE = function(s) {
    s === void 0 && (s = 0), oe(s);
    var u = NaN, l = NaN, h = NaN, f = NaN;
    return i(function(c, v, d, g, p) {
      var y = Math.abs, x = !1, b = 0, T = 0;
      if (c.type & m.SMOOTH_CURVE_TO && (b = isNaN(u) ? 0 : v - u, T = isNaN(l) ? 0 : d - l), c.type & (m.CURVE_TO | m.SMOOTH_CURVE_TO) ? (u = c.relative ? v + c.x2 : c.x2, l = c.relative ? d + c.y2 : c.y2) : (u = NaN, l = NaN), c.type & m.SMOOTH_QUAD_TO ? (h = isNaN(h) ? v : 2 * v - h, f = isNaN(f) ? d : 2 * d - f) : c.type & m.QUAD_TO ? (h = c.relative ? v + c.x1 : c.x1, f = c.relative ? d + c.y1 : c.y2) : (h = NaN, f = NaN), c.type & m.LINE_COMMANDS || c.type & m.ARC && (c.rX === 0 || c.rY === 0 || !c.lArcFlag) || c.type & m.CURVE_TO || c.type & m.SMOOTH_CURVE_TO || c.type & m.QUAD_TO || c.type & m.SMOOTH_QUAD_TO) {
        var $ = c.x === void 0 ? 0 : c.relative ? c.x : c.x - v, E = c.y === void 0 ? 0 : c.relative ? c.y : c.y - d;
        b = isNaN(h) ? c.x1 === void 0 ? b : c.relative ? c.x : c.x1 - v : h - v, T = isNaN(f) ? c.y1 === void 0 ? T : c.relative ? c.y : c.y1 - d : f - d;
        var O = c.x2 === void 0 ? 0 : c.relative ? c.x : c.x2 - v, C = c.y2 === void 0 ? 0 : c.relative ? c.y : c.y2 - d;
        y($) <= s && y(E) <= s && y(b) <= s && y(T) <= s && y(O) <= s && y(C) <= s && (x = !0);
      }
      return c.type & m.CLOSE_PATH && y(v - g) <= s && y(d - p) <= s && (x = !0), x ? [] : c;
    });
  }, a.MATRIX = n, a.ROTATE = function(s, u, l) {
    u === void 0 && (u = 0), l === void 0 && (l = 0), oe(s, u, l);
    var h = Math.sin(s), f = Math.cos(s);
    return n(f, h, -h, f, u - u * f + l * h, l - u * h - l * f);
  }, a.TRANSLATE = function(s, u) {
    return u === void 0 && (u = 0), oe(s, u), n(1, 0, 0, 1, s, u);
  }, a.SCALE = function(s, u) {
    return u === void 0 && (u = s), oe(s, u), n(s, 0, 0, u, 0, 0);
  }, a.SKEW_X = function(s) {
    return oe(s), n(1, 0, Math.atan(s), 1, 0, 0);
  }, a.SKEW_Y = function(s) {
    return oe(s), n(1, Math.atan(s), 0, 1, 0, 0);
  }, a.X_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), oe(s), n(-1, 0, 0, 1, s, 0);
  }, a.Y_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), oe(s), n(1, 0, 0, -1, 0, s);
  }, a.A_TO_C = function() {
    return i(function(s, u, l) {
      return m.ARC === s.type ? function(h, f, c) {
        var v, d, g, p;
        h.cX || Ua(h, f, c);
        for (var y = Math.min(h.phi1, h.phi2), x = Math.max(h.phi1, h.phi2) - y, b = Math.ceil(x / 90), T = new Array(b), $ = f, E = c, O = 0; O < b; O++) {
          var C = fo(h.phi1, h.phi2, O / b), I = fo(h.phi1, h.phi2, (O + 1) / b), _ = I - C, j = 4 / 3 * Math.tan(_ * ye / 4), P = [Math.cos(C * ye) - j * Math.sin(C * ye), Math.sin(C * ye) + j * Math.cos(C * ye)], X = P[0], W = P[1], G = [Math.cos(I * ye), Math.sin(I * ye)], q = G[0], H = G[1], Q = [q + j * Math.sin(I * ye), H - j * Math.cos(I * ye)], R = Q[0], M = Q[1];
          T[O] = { relative: h.relative, type: m.CURVE_TO };
          var K = function(ne, ge) {
            var Se = mi([ne * h.rX, ge * h.rY], h.xRot), ze = Se[0], Mt = Se[1];
            return [h.cX + ze, h.cY + Mt];
          };
          v = K(X, W), T[O].x1 = v[0], T[O].y1 = v[1], d = K(R, M), T[O].x2 = d[0], T[O].y2 = d[1], g = K(q, H), T[O].x = g[0], T[O].y = g[1], h.relative && (T[O].x1 -= $, T[O].y1 -= E, T[O].x2 -= $, T[O].y2 -= E, T[O].x -= $, T[O].y -= E), $ = (p = [T[O].x, T[O].y])[0], E = p[1];
        }
        return T;
      }(s, s.relative ? 0 : u, s.relative ? 0 : l) : s;
    });
  }, a.ANNOTATE_ARCS = function() {
    return i(function(s, u, l) {
      return s.relative && (u = 0, l = 0), m.ARC === s.type && Ua(s, u, l), s;
    });
  }, a.CLONE = o, a.CALCULATE_BOUNDS = function() {
    var s = function(c) {
      var v = {};
      for (var d in c) v[d] = c[d];
      return v;
    }, u = e(), l = r(), h = t(), f = i(function(c, v, d) {
      var g = h(l(u(s(c))));
      function p(M) {
        M > f.maxX && (f.maxX = M), M < f.minX && (f.minX = M);
      }
      function y(M) {
        M > f.maxY && (f.maxY = M), M < f.minY && (f.minY = M);
      }
      if (g.type & m.DRAWING_COMMANDS && (p(v), y(d)), g.type & m.HORIZ_LINE_TO && p(g.x), g.type & m.VERT_LINE_TO && y(g.y), g.type & m.LINE_TO && (p(g.x), y(g.y)), g.type & m.CURVE_TO) {
        p(g.x), y(g.y);
        for (var x = 0, b = go(v, g.x1, g.x2, g.x); x < b.length; x++)
          0 < (R = b[x]) && 1 > R && p(po(v, g.x1, g.x2, g.x, R));
        for (var T = 0, $ = go(d, g.y1, g.y2, g.y); T < $.length; T++)
          0 < (R = $[T]) && 1 > R && y(po(d, g.y1, g.y2, g.y, R));
      }
      if (g.type & m.ARC) {
        p(g.x), y(g.y), Ua(g, v, d);
        for (var E = g.xRot / 180 * Math.PI, O = Math.cos(E) * g.rX, C = Math.sin(E) * g.rX, I = -Math.sin(E) * g.rY, _ = Math.cos(E) * g.rY, j = g.phi1 < g.phi2 ? [g.phi1, g.phi2] : -180 > g.phi2 ? [g.phi2 + 360, g.phi1 + 360] : [g.phi2, g.phi1], P = j[0], X = j[1], W = function(M) {
          var K = M[0], ne = M[1], ge = 180 * Math.atan2(ne, K) / Math.PI;
          return ge < P ? ge + 360 : ge;
        }, G = 0, q = vo(I, -O, 0).map(W); G < q.length; G++)
          (R = q[G]) > P && R < X && p(co(g.cX, O, I, R));
        for (var H = 0, Q = vo(_, -C, 0).map(W); H < Q.length; H++) {
          var R;
          (R = Q[H]) > P && R < X && y(co(g.cY, C, _, R));
        }
      }
      return c;
    });
    return f.minX = 1 / 0, f.maxX = -1 / 0, f.minY = 1 / 0, f.maxY = -1 / 0, f;
  };
})(U || (U = {}));
var se, vl = function() {
  function a() {
  }
  return a.prototype.round = function(e) {
    return this.transform(U.ROUND(e));
  }, a.prototype.toAbs = function() {
    return this.transform(U.TO_ABS());
  }, a.prototype.toRel = function() {
    return this.transform(U.TO_REL());
  }, a.prototype.normalizeHVZ = function(e, t, r) {
    return this.transform(U.NORMALIZE_HVZ(e, t, r));
  }, a.prototype.normalizeST = function() {
    return this.transform(U.NORMALIZE_ST());
  }, a.prototype.qtToC = function() {
    return this.transform(U.QT_TO_C());
  }, a.prototype.aToC = function() {
    return this.transform(U.A_TO_C());
  }, a.prototype.sanitize = function(e) {
    return this.transform(U.SANITIZE(e));
  }, a.prototype.translate = function(e, t) {
    return this.transform(U.TRANSLATE(e, t));
  }, a.prototype.scale = function(e, t) {
    return this.transform(U.SCALE(e, t));
  }, a.prototype.rotate = function(e, t, r) {
    return this.transform(U.ROTATE(e, t, r));
  }, a.prototype.matrix = function(e, t, r, i, n, o) {
    return this.transform(U.MATRIX(e, t, r, i, n, o));
  }, a.prototype.skewX = function(e) {
    return this.transform(U.SKEW_X(e));
  }, a.prototype.skewY = function(e) {
    return this.transform(U.SKEW_Y(e));
  }, a.prototype.xSymmetry = function(e) {
    return this.transform(U.X_AXIS_SYMMETRY(e));
  }, a.prototype.ySymmetry = function(e) {
    return this.transform(U.Y_AXIS_SYMMETRY(e));
  }, a.prototype.annotateArcs = function() {
    return this.transform(U.ANNOTATE_ARCS());
  }, a;
}(), Eb = function(a) {
  return a === " " || a === "	" || a === "\r" || a === `
`;
}, yo = function(a) {
  return 48 <= a.charCodeAt(0) && a.charCodeAt(0) <= 57;
}, $b = function(a) {
  function e() {
    var t = a.call(this) || this;
    return t.curNumber = "", t.curCommandType = -1, t.curCommandRelative = !1, t.canParseCommandOrComma = !0, t.curNumberHasExp = !1, t.curNumberHasExpDigits = !1, t.curNumberHasDecimal = !1, t.curArgs = [], t;
  }
  return hl(e, a), e.prototype.finish = function(t) {
    if (t === void 0 && (t = []), this.parse(" ", t), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return t;
  }, e.prototype.parse = function(t, r) {
    var i = this;
    r === void 0 && (r = []);
    for (var n = function(f) {
      r.push(f), i.curArgs.length = 0, i.canParseCommandOrComma = !0;
    }, o = 0; o < t.length; o++) {
      var s = t[o], u = !(this.curCommandType !== m.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), l = yo(s) && (this.curNumber === "0" && s === "0" || u);
      if (!yo(s) || l) if (s !== "e" && s !== "E") if (s !== "-" && s !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (s !== "." || this.curNumberHasExp || this.curNumberHasDecimal || u) {
        if (this.curNumber && this.curCommandType !== -1) {
          var h = Number(this.curNumber);
          if (isNaN(h)) throw new SyntaxError("Invalid number ending at " + o);
          if (this.curCommandType === m.ARC) {
            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
              if (0 > h) throw new SyntaxError('Expected positive number, got "' + h + '" at index "' + o + '"');
            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + o + '"');
          }
          this.curArgs.push(h), this.curArgs.length === wb[this.curCommandType] && (m.HORIZ_LINE_TO === this.curCommandType ? n({ type: m.HORIZ_LINE_TO, relative: this.curCommandRelative, x: h }) : m.VERT_LINE_TO === this.curCommandType ? n({ type: m.VERT_LINE_TO, relative: this.curCommandRelative, y: h }) : this.curCommandType === m.MOVE_TO || this.curCommandType === m.LINE_TO || this.curCommandType === m.SMOOTH_QUAD_TO ? (n({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), m.MOVE_TO === this.curCommandType && (this.curCommandType = m.LINE_TO)) : this.curCommandType === m.CURVE_TO ? n({ type: m.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === m.SMOOTH_CURVE_TO ? n({ type: m.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === m.QUAD_TO ? n({ type: m.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === m.ARC && n({ type: m.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
        }
        if (!Eb(s)) if (s === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
        else if (s !== "+" && s !== "-" && s !== ".") if (l) this.curNumber = s, this.curNumberHasDecimal = !1;
        else {
          if (this.curArgs.length !== 0) throw new SyntaxError("Unterminated command at index " + o + ".");
          if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + s + '" at index ' + o + ". Command cannot follow comma");
          if (this.canParseCommandOrComma = !1, s !== "z" && s !== "Z") if (s === "h" || s === "H") this.curCommandType = m.HORIZ_LINE_TO, this.curCommandRelative = s === "h";
          else if (s === "v" || s === "V") this.curCommandType = m.VERT_LINE_TO, this.curCommandRelative = s === "v";
          else if (s === "m" || s === "M") this.curCommandType = m.MOVE_TO, this.curCommandRelative = s === "m";
          else if (s === "l" || s === "L") this.curCommandType = m.LINE_TO, this.curCommandRelative = s === "l";
          else if (s === "c" || s === "C") this.curCommandType = m.CURVE_TO, this.curCommandRelative = s === "c";
          else if (s === "s" || s === "S") this.curCommandType = m.SMOOTH_CURVE_TO, this.curCommandRelative = s === "s";
          else if (s === "q" || s === "Q") this.curCommandType = m.QUAD_TO, this.curCommandRelative = s === "q";
          else if (s === "t" || s === "T") this.curCommandType = m.SMOOTH_QUAD_TO, this.curCommandRelative = s === "t";
          else {
            if (s !== "a" && s !== "A") throw new SyntaxError('Unexpected character "' + s + '" at index ' + o + ".");
            this.curCommandType = m.ARC, this.curCommandRelative = s === "a";
          }
          else r.push({ type: m.CLOSE_PATH }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
        }
        else this.curNumber = s, this.curNumberHasDecimal = s === ".";
      } else this.curNumber += s, this.curNumberHasDecimal = !0;
      else this.curNumber += s;
      else this.curNumber += s, this.curNumberHasExp = !0;
      else this.curNumber += s, this.curNumberHasExpDigits = this.curNumberHasExp;
    }
    return r;
  }, e.prototype.transform = function(t) {
    return Object.create(this, { parse: { value: function(r, i) {
      i === void 0 && (i = []);
      for (var n = 0, o = Object.getPrototypeOf(this).parse.call(this, r); n < o.length; n++) {
        var s = o[n], u = t(s);
        Array.isArray(u) ? i.push.apply(i, u) : i.push(u);
      }
      return i;
    } } });
  }, e;
}(vl), m = function(a) {
  function e(t) {
    var r = a.call(this) || this;
    return r.commands = typeof t == "string" ? e.parse(t) : t, r;
  }
  return hl(e, a), e.prototype.encode = function() {
    return e.encode(this.commands);
  }, e.prototype.getBounds = function() {
    var t = U.CALCULATE_BOUNDS();
    return this.transform(t), t;
  }, e.prototype.transform = function(t) {
    for (var r = [], i = 0, n = this.commands; i < n.length; i++) {
      var o = t(n[i]);
      Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
    }
    return this.commands = r, this;
  }, e.encode = function(t) {
    return Sb(t);
  }, e.parse = function(t) {
    var r = new $b(), i = [];
    return r.parse(t, i), r.finish(i), i;
  }, e.CLOSE_PATH = 1, e.MOVE_TO = 2, e.HORIZ_LINE_TO = 4, e.VERT_LINE_TO = 8, e.LINE_TO = 16, e.CURVE_TO = 32, e.SMOOTH_CURVE_TO = 64, e.QUAD_TO = 128, e.SMOOTH_QUAD_TO = 256, e.ARC = 512, e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO, e.DRAWING_COMMANDS = e.HORIZ_LINE_TO | e.VERT_LINE_TO | e.LINE_TO | e.CURVE_TO | e.SMOOTH_CURVE_TO | e.QUAD_TO | e.SMOOTH_QUAD_TO | e.ARC, e;
}(vl), wb = ((se = {})[m.MOVE_TO] = 2, se[m.LINE_TO] = 2, se[m.HORIZ_LINE_TO] = 1, se[m.VERT_LINE_TO] = 1, se[m.CLOSE_PATH] = 0, se[m.QUAD_TO] = 4, se[m.SMOOTH_QUAD_TO] = 2, se[m.CURVE_TO] = 6, se[m.SMOOTH_CURVE_TO] = 4, se[m.ARC] = 7, se), Cb = Y, Ab = fe, Pb = br, Rb = Fu, mo = RegExp.prototype, Nb = function(a) {
  var e = a.flags;
  return e === void 0 && !("flags" in mo) && !Ab(a, "flags") && Pb(mo, a) ? Cb(Rb, a) : e;
}, Ib = Sr.PROPER, Mb = Ue, _b = J, bo = pe, Vb = k, Db = Nb, rn = "toString", fl = RegExp.prototype, cl = fl[rn], kb = Vb(function() {
  return cl.call({ source: "a", flags: "b" }) !== "/a/b";
}), Lb = Ib && cl.name !== rn;
(kb || Lb) && Mb(fl, rn, function() {
  var e = _b(this), t = bo(e.source), r = bo(Db(e));
  return "/" + t + "/" + r;
}, { unsafe: !0 });
function vr(a) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vr = function(e) {
    return typeof e;
  } : vr = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, vr(a);
}
function Bb(a, e) {
  if (!(a instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var jb = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], Fb = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
function Ub(a, e, t, r, i) {
  if (typeof a == "string" && (a = document.getElementById(a)), !a || vr(a) !== "object" || !("getContext" in a))
    throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
  var n = a.getContext("2d");
  try {
    return n.getImageData(e, t, r, i);
  } catch (o) {
    throw new Error("unable to access image data: " + o);
  }
}
function Gb(a, e, t, r, i, n) {
  if (!(isNaN(n) || n < 1)) {
    n |= 0;
    var o = Ub(a, e, t, r, i);
    o = zb(o, e, t, r, i, n), a.getContext("2d").putImageData(o, e, t);
  }
}
function zb(a, e, t, r, i, n) {
  for (var o = a.data, s = 2 * n + 1, u = r - 1, l = i - 1, h = n + 1, f = h * (h + 1) / 2, c = new xo(), v = c, d, g = 1; g < s; g++)
    v = v.next = new xo(), g === h && (d = v);
  v.next = c;
  for (var p = null, y = null, x = 0, b = 0, T = jb[n], $ = Fb[n], E = 0; E < i; E++) {
    v = c;
    for (var O = o[b], C = o[b + 1], I = o[b + 2], _ = o[b + 3], j = 0; j < h; j++)
      v.r = O, v.g = C, v.b = I, v.a = _, v = v.next;
    for (var P = 0, X = 0, W = 0, G = 0, q = h * O, H = h * C, Q = h * I, R = h * _, M = f * O, K = f * C, ne = f * I, ge = f * _, Se = 1; Se < h; Se++) {
      var ze = b + ((u < Se ? u : Se) << 2), Mt = o[ze], sn = o[ze + 1], on = o[ze + 2], un = o[ze + 3], _t = h - Se;
      M += (v.r = Mt) * _t, K += (v.g = sn) * _t, ne += (v.b = on) * _t, ge += (v.a = un) * _t, P += Mt, X += sn, W += on, G += un, v = v.next;
    }
    p = c, y = d;
    for (var Lr = 0; Lr < r; Lr++) {
      var Br = ge * T >>> $;
      if (o[b + 3] = Br, Br !== 0) {
        var jr = 255 / Br;
        o[b] = (M * T >>> $) * jr, o[b + 1] = (K * T >>> $) * jr, o[b + 2] = (ne * T >>> $) * jr;
      } else
        o[b] = o[b + 1] = o[b + 2] = 0;
      M -= q, K -= H, ne -= Q, ge -= R, q -= p.r, H -= p.g, Q -= p.b, R -= p.a;
      var Ae = Lr + n + 1;
      Ae = x + (Ae < u ? Ae : u) << 2, P += p.r = o[Ae], X += p.g = o[Ae + 1], W += p.b = o[Ae + 2], G += p.a = o[Ae + 3], M += P, K += X, ne += W, ge += G, p = p.next;
      var Vt = y, ln = Vt.r, hn = Vt.g, vn = Vt.b, fn = Vt.a;
      q += ln, H += hn, Q += vn, R += fn, P -= ln, X -= hn, W -= vn, G -= fn, y = y.next, b += 4;
    }
    x += r;
  }
  for (var He = 0; He < r; He++) {
    b = He << 2;
    var Pe = o[b], Re = o[b + 1], Ne = o[b + 2], te = o[b + 3], Fr = h * Pe, Ur = h * Re, Gr = h * Ne, zr = h * te, Dt = f * Pe, kt = f * Re, Lt = f * Ne, Bt = f * te;
    v = c;
    for (var cn = 0; cn < h; cn++)
      v.r = Pe, v.g = Re, v.b = Ne, v.a = te, v = v.next;
    for (var gn = r, Hr = 0, Yr = 0, Xr = 0, Wr = 0, jt = 1; jt <= n; jt++) {
      b = gn + He << 2;
      var Ft = h - jt;
      Dt += (v.r = Pe = o[b]) * Ft, kt += (v.g = Re = o[b + 1]) * Ft, Lt += (v.b = Ne = o[b + 2]) * Ft, Bt += (v.a = te = o[b + 3]) * Ft, Wr += Pe, Hr += Re, Yr += Ne, Xr += te, v = v.next, jt < l && (gn += r);
    }
    b = He, p = c, y = d;
    for (var qr = 0; qr < i; qr++) {
      var re = b << 2;
      o[re + 3] = te = Bt * T >>> $, te > 0 ? (te = 255 / te, o[re] = (Dt * T >>> $) * te, o[re + 1] = (kt * T >>> $) * te, o[re + 2] = (Lt * T >>> $) * te) : o[re] = o[re + 1] = o[re + 2] = 0, Dt -= Fr, kt -= Ur, Lt -= Gr, Bt -= zr, Fr -= p.r, Ur -= p.g, Gr -= p.b, zr -= p.a, re = He + ((re = qr + h) < l ? re : l) * r << 2, Dt += Wr += p.r = o[re], kt += Hr += p.g = o[re + 1], Lt += Yr += p.b = o[re + 2], Bt += Xr += p.a = o[re + 3], p = p.next, Fr += Pe = y.r, Ur += Re = y.g, Gr += Ne = y.b, zr += te = y.a, Wr -= Pe, Hr -= Re, Yr -= Ne, Xr -= te, y = y.next, b += r;
    }
  }
  return a;
}
var xo = (
  /**
   * Set properties.
   */
  function a() {
    Bb(this, a), this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
  }
);
function Hb() {
  var {
    DOMParser: a
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: a,
    createCanvas(t, r) {
      return new OffscreenCanvas(t, r);
    },
    createImage(t) {
      return xe(function* () {
        var r = yield fetch(t), i = yield r.blob(), n = yield createImageBitmap(i);
        return n;
      })();
    }
  };
  return (typeof DOMParser < "u" || typeof a > "u") && Reflect.deleteProperty(e, "DOMParser"), e;
}
function Yb(a) {
  var {
    DOMParser: e,
    canvas: t,
    fetch: r
  } = a;
  return {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: e,
    fetch: r,
    createCanvas: t.createCanvas,
    createImage: t.loadImage
  };
}
var i2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  offscreen: Hb,
  node: Yb
});
function ht(a) {
  return a.replace(/(?!\u3000)\s+/gm, " ");
}
function Xb(a) {
  return a.replace(/^[\n \t]+/, "");
}
function Wb(a) {
  return a.replace(/[\n \t]+$/, "");
}
function ie(a) {
  var e = (a || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
  return e.map(parseFloat);
}
var qb = /^[A-Z-]+$/;
function Qb(a) {
  return qb.test(a) ? a.toLowerCase() : a;
}
function gl(a) {
  var e = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(a) || [];
  return e[2] || e[3] || e[4];
}
function Kb(a) {
  if (!a.startsWith("rgb"))
    return a;
  var e = 3, t = a.replace(/\d+(\.\d+)?/g, (r, i) => e-- && i ? String(Math.round(parseFloat(r))) : r);
  return t;
}
var Zb = /(\[[^\]]+\])/g, Jb = /(#[^\s+>~.[:]+)/g, e1 = /(\.[^\s+>~.[:]+)/g, t1 = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi, r1 = /(:[\w-]+\([^)]*\))/gi, a1 = /(:[^\s+>~.[:]+)/g, i1 = /([^\s+>~.[:]+)/g;
function _e(a, e) {
  var t = e.exec(a);
  return t ? [a.replace(e, " "), t.length] : [a, 0];
}
function n1(a) {
  var e = [0, 0, 0], t = a.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "), r = 0;
  return [t, r] = _e(t, Zb), e[1] += r, [t, r] = _e(t, Jb), e[0] += r, [t, r] = _e(t, e1), e[1] += r, [t, r] = _e(t, t1), e[2] += r, [t, r] = _e(t, r1), e[1] += r, [t, r] = _e(t, a1), e[1] += r, t = t.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " "), [t, r] = _e(t, i1), e[2] += r, e.join("");
}
var at = 1e-8;
function To(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2));
}
function bi(a, e) {
  return (a[0] * e[0] + a[1] * e[1]) / (To(a) * To(e));
}
function Oo(a, e) {
  return (a[0] * e[1] < a[1] * e[0] ? -1 : 1) * Math.acos(bi(a, e));
}
function So(a) {
  return a * a * a;
}
function Eo(a) {
  return 3 * a * a * (1 - a);
}
function $o(a) {
  return 3 * a * (1 - a) * (1 - a);
}
function wo(a) {
  return (1 - a) * (1 - a) * (1 - a);
}
function Co(a) {
  return a * a;
}
function Ao(a) {
  return 2 * a * (1 - a);
}
function Po(a) {
  return (1 - a) * (1 - a);
}
class S {
  constructor(e, t, r) {
    this.document = e, this.name = t, this.value = r, this.isNormalizedColor = !1;
  }
  static empty(e) {
    return new S(e, "EMPTY", "");
  }
  split() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ", {
      document: t,
      name: r
    } = this;
    return ht(this.getString()).trim().split(e).map((i) => new S(t, r, i));
  }
  hasValue(e) {
    var {
      value: t
    } = this;
    return t !== null && t !== "" && (e || t !== 0) && typeof t < "u";
  }
  isString(e) {
    var {
      value: t
    } = this, r = typeof t == "string";
    return !r || !e ? r : e.test(t);
  }
  isUrlDefinition() {
    return this.isString(/^url\(/);
  }
  isPixels() {
    if (!this.hasValue())
      return !1;
    var e = this.getString();
    switch (!0) {
      case e.endsWith("px"):
      case /^[0-9]+$/.test(e):
        return !0;
      default:
        return !1;
    }
  }
  setValue(e) {
    return this.value = e, this;
  }
  getValue(e) {
    return typeof e > "u" || this.hasValue() ? this.value : e;
  }
  getNumber(e) {
    if (!this.hasValue())
      return typeof e > "u" ? 0 : parseFloat(e);
    var {
      value: t
    } = this, r = parseFloat(t);
    return this.isString(/%$/) && (r /= 100), r;
  }
  getString(e) {
    return typeof e > "u" || this.hasValue() ? typeof this.value > "u" ? "" : String(this.value) : String(e);
  }
  getColor(e) {
    var t = this.getString(e);
    return this.isNormalizedColor || (this.isNormalizedColor = !0, t = Kb(t), this.value = t), t;
  }
  getDpi() {
    return 96;
  }
  getRem() {
    return this.document.rootEmSize;
  }
  getEm() {
    return this.document.emSize;
  }
  getUnits() {
    return this.getString().replace(/[0-9.-]/g, "");
  }
  getPixels(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!this.hasValue())
      return 0;
    var [r, i] = typeof e == "boolean" ? [void 0, e] : [e], {
      viewPort: n
    } = this.document.screen;
    switch (!0) {
      case this.isString(/vmin$/):
        return this.getNumber() / 100 * Math.min(n.computeSize("x"), n.computeSize("y"));
      case this.isString(/vmax$/):
        return this.getNumber() / 100 * Math.max(n.computeSize("x"), n.computeSize("y"));
      case this.isString(/vw$/):
        return this.getNumber() / 100 * n.computeSize("x");
      case this.isString(/vh$/):
        return this.getNumber() / 100 * n.computeSize("y");
      case this.isString(/rem$/):
        return this.getNumber() * this.getRem();
      case this.isString(/em$/):
        return this.getNumber() * this.getEm();
      case this.isString(/ex$/):
        return this.getNumber() * this.getEm() / 2;
      case this.isString(/px$/):
        return this.getNumber();
      case this.isString(/pt$/):
        return this.getNumber() * this.getDpi() * (1 / 72);
      case this.isString(/pc$/):
        return this.getNumber() * 15;
      case this.isString(/cm$/):
        return this.getNumber() * this.getDpi() / 2.54;
      case this.isString(/mm$/):
        return this.getNumber() * this.getDpi() / 25.4;
      case this.isString(/in$/):
        return this.getNumber() * this.getDpi();
      case (this.isString(/%$/) && i):
        return this.getNumber() * this.getEm();
      case this.isString(/%$/):
        return this.getNumber() * n.computeSize(r);
      default: {
        var o = this.getNumber();
        return t && o < 1 ? o * n.computeSize(r) : o;
      }
    }
  }
  getMilliseconds() {
    return this.hasValue() ? this.isString(/ms$/) ? this.getNumber() : this.getNumber() * 1e3 : 0;
  }
  getRadians() {
    if (!this.hasValue())
      return 0;
    switch (!0) {
      case this.isString(/deg$/):
        return this.getNumber() * (Math.PI / 180);
      case this.isString(/grad$/):
        return this.getNumber() * (Math.PI / 200);
      case this.isString(/rad$/):
        return this.getNumber();
      default:
        return this.getNumber() * (Math.PI / 180);
    }
  }
  getDefinition() {
    var e = this.getString(), t = /#([^)'"]+)/.exec(e);
    return t && (t = t[1]), t || (t = e), this.document.definitions[t];
  }
  getFillStyleDefinition(e, t) {
    var r = this.getDefinition();
    if (!r)
      return null;
    if (typeof r.createGradient == "function")
      return r.createGradient(this.document.ctx, e, t);
    if (typeof r.createPattern == "function") {
      if (r.getHrefAttribute().hasValue()) {
        var i = r.getAttribute("patternTransform");
        r = r.getHrefAttribute().getDefinition(), i.hasValue() && r.getAttribute("patternTransform", !0).setValue(i.value);
      }
      return r.createPattern(this.document.ctx, e, t);
    }
    return null;
  }
  getTextBaseline() {
    return this.hasValue() ? S.textBaselineMapping[this.getString()] : null;
  }
  addOpacity(e) {
    for (var t = this.getColor(), r = t.length, i = 0, n = 0; n < r && (t[n] === "," && i++, i !== 3); n++)
      ;
    if (e.hasValue() && this.isString() && i !== 3) {
      var o = new pi(t);
      o.ok && (o.alpha = e.getNumber(), t = o.toRGBA());
    }
    return new S(this.document, this.name, t);
  }
}
S.textBaselineMapping = {
  baseline: "alphabetic",
  "before-edge": "top",
  "text-before-edge": "top",
  middle: "middle",
  central: "middle",
  "after-edge": "bottom",
  "text-after-edge": "bottom",
  ideographic: "ideographic",
  alphabetic: "alphabetic",
  hanging: "hanging",
  mathematical: "alphabetic"
};
class s1 {
  constructor() {
    this.viewPorts = [];
  }
  clear() {
    this.viewPorts = [];
  }
  setCurrent(e, t) {
    this.viewPorts.push({
      width: e,
      height: t
    });
  }
  removeCurrent() {
    this.viewPorts.pop();
  }
  getCurrent() {
    var {
      viewPorts: e
    } = this;
    return e[e.length - 1];
  }
  get width() {
    return this.getCurrent().width;
  }
  get height() {
    return this.getCurrent().height;
  }
  computeSize(e) {
    return typeof e == "number" ? e : e === "x" ? this.width : e === "y" ? this.height : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
  }
}
class D {
  constructor(e, t) {
    this.x = e, this.y = t;
  }
  static parse(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, [r = t, i = t] = ie(e);
    return new D(r, i);
  }
  static parseScale(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, [r = t, i = r] = ie(e);
    return new D(r, i);
  }
  static parsePath(e) {
    for (var t = ie(e), r = t.length, i = [], n = 0; n < r; n += 2)
      i.push(new D(t[n], t[n + 1]));
    return i;
  }
  angleTo(e) {
    return Math.atan2(e.y - this.y, e.x - this.x);
  }
  applyTransform(e) {
    var {
      x: t,
      y: r
    } = this, i = t * e[0] + r * e[2] + e[4], n = t * e[1] + r * e[3] + e[5];
    this.x = i, this.y = n;
  }
}
class o1 {
  constructor(e) {
    this.screen = e, this.working = !1, this.events = [], this.eventElements = [], this.onClick = this.onClick.bind(this), this.onMouseMove = this.onMouseMove.bind(this);
  }
  isWorking() {
    return this.working;
  }
  start() {
    if (!this.working) {
      var {
        screen: e,
        onClick: t,
        onMouseMove: r
      } = this, i = e.ctx.canvas;
      i.onclick = t, i.onmousemove = r, this.working = !0;
    }
  }
  stop() {
    if (this.working) {
      var e = this.screen.ctx.canvas;
      this.working = !1, e.onclick = null, e.onmousemove = null;
    }
  }
  hasEvents() {
    return this.working && this.events.length > 0;
  }
  runEvents() {
    if (this.working) {
      var {
        screen: e,
        events: t,
        eventElements: r
      } = this, {
        style: i
      } = e.ctx.canvas;
      i && (i.cursor = ""), t.forEach((n, o) => {
        for (var {
          run: s
        } = n, u = r[o]; u; )
          s(u), u = u.parent;
      }), this.events = [], this.eventElements = [];
    }
  }
  checkPath(e, t) {
    if (!(!this.working || !t)) {
      var {
        events: r,
        eventElements: i
      } = this;
      r.forEach((n, o) => {
        var {
          x: s,
          y: u
        } = n;
        !i[o] && t.isPointInPath && t.isPointInPath(s, u) && (i[o] = e);
      });
    }
  }
  checkBoundingBox(e, t) {
    if (!(!this.working || !t)) {
      var {
        events: r,
        eventElements: i
      } = this;
      r.forEach((n, o) => {
        var {
          x: s,
          y: u
        } = n;
        !i[o] && t.isPointInBox(s, u) && (i[o] = e);
      });
    }
  }
  mapXY(e, t) {
    for (var {
      window: r,
      ctx: i
    } = this.screen, n = new D(e, t), o = i.canvas; o; )
      n.x -= o.offsetLeft, n.y -= o.offsetTop, o = o.offsetParent;
    return r.scrollX && (n.x += r.scrollX), r.scrollY && (n.y += r.scrollY), n;
  }
  onClick(e) {
    var {
      x: t,
      y: r
    } = this.mapXY(e.clientX, e.clientY);
    this.events.push({
      type: "onclick",
      x: t,
      y: r,
      run(i) {
        i.onClick && i.onClick();
      }
    });
  }
  onMouseMove(e) {
    var {
      x: t,
      y: r
    } = this.mapXY(e.clientX, e.clientY);
    this.events.push({
      type: "onmousemove",
      x: t,
      y: r,
      run(i) {
        i.onMouseMove && i.onMouseMove();
      }
    });
  }
}
var dl = typeof window < "u" ? window : null, pl = typeof fetch < "u" ? fetch.bind(void 0) : null;
class _r {
  constructor(e) {
    var {
      fetch: t = pl,
      window: r = dl
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.ctx = e, this.FRAMERATE = 30, this.MAX_VIRTUAL_PIXELS = 3e4, this.CLIENT_WIDTH = 800, this.CLIENT_HEIGHT = 600, this.viewPort = new s1(), this.mouse = new o1(this), this.animations = [], this.waits = [], this.frameDuration = 0, this.isReadyLock = !1, this.isFirstRender = !0, this.intervalId = null, this.window = r, this.fetch = t;
  }
  wait(e) {
    this.waits.push(e);
  }
  ready() {
    return this.readyPromise ? this.readyPromise : Promise.resolve();
  }
  isReady() {
    if (this.isReadyLock)
      return !0;
    var e = this.waits.every((t) => t());
    return e && (this.waits = [], this.resolveReady && this.resolveReady()), this.isReadyLock = e, e;
  }
  setDefaults(e) {
    e.strokeStyle = "rgba(0,0,0,0)", e.lineCap = "butt", e.lineJoin = "miter", e.miterLimit = 4;
  }
  setViewBox(e) {
    var {
      document: t,
      ctx: r,
      aspectRatio: i,
      width: n,
      desiredWidth: o,
      height: s,
      desiredHeight: u,
      minX: l = 0,
      minY: h = 0,
      refX: f,
      refY: c,
      clip: v = !1,
      clipX: d = 0,
      clipY: g = 0
    } = e, p = ht(i).replace(/^defer\s/, ""), [y, x] = p.split(" "), b = y || "xMidYMid", T = x || "meet", $ = n / o, E = s / u, O = Math.min($, E), C = Math.max($, E), I = o, _ = u;
    T === "meet" && (I *= O, _ *= O), T === "slice" && (I *= C, _ *= C);
    var j = new S(t, "refX", f), P = new S(t, "refY", c), X = j.hasValue() && P.hasValue();
    if (X && r.translate(-O * j.getPixels("x"), -O * P.getPixels("y")), v) {
      var W = O * d, G = O * g;
      r.beginPath(), r.moveTo(W, G), r.lineTo(n, G), r.lineTo(n, s), r.lineTo(W, s), r.closePath(), r.clip();
    }
    if (!X) {
      var q = T === "meet" && O === E, H = T === "slice" && C === E, Q = T === "meet" && O === $, R = T === "slice" && C === $;
      b.startsWith("xMid") && (q || H) && r.translate(n / 2 - I / 2, 0), b.endsWith("YMid") && (Q || R) && r.translate(0, s / 2 - _ / 2), b.startsWith("xMax") && (q || H) && r.translate(n - I, 0), b.endsWith("YMax") && (Q || R) && r.translate(0, s - _);
    }
    switch (!0) {
      case b === "none":
        r.scale($, E);
        break;
      case T === "meet":
        r.scale(O, O);
        break;
      case T === "slice":
        r.scale(C, C);
        break;
    }
    r.translate(-l, -h);
  }
  start(e) {
    var {
      enableRedraw: t = !1,
      ignoreMouse: r = !1,
      ignoreAnimation: i = !1,
      ignoreDimensions: n = !1,
      ignoreClear: o = !1,
      forceRedraw: s,
      scaleWidth: u,
      scaleHeight: l,
      offsetX: h,
      offsetY: f
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      FRAMERATE: c,
      mouse: v
    } = this, d = 1e3 / c;
    if (this.frameDuration = d, this.readyPromise = new Promise((b) => {
      this.resolveReady = b;
    }), this.isReady() && this.render(e, n, o, u, l, h, f), !!t) {
      var g = Date.now(), p = g, y = 0, x = () => {
        g = Date.now(), y = g - p, y >= d && (p = g - y % d, this.shouldUpdate(i, s) && (this.render(e, n, o, u, l, h, f), v.runEvents())), this.intervalId = ja(x);
      };
      r || v.start(), this.intervalId = ja(x);
    }
  }
  stop() {
    this.intervalId && (ja.cancel(this.intervalId), this.intervalId = null), this.mouse.stop();
  }
  shouldUpdate(e, t) {
    if (!e) {
      var {
        frameDuration: r
      } = this, i = this.animations.reduce((n, o) => o.update(r) || n, !1);
      if (i)
        return !0;
    }
    return !!(typeof t == "function" && t() || !this.isReadyLock && this.isReady() || this.mouse.hasEvents());
  }
  render(e, t, r, i, n, o, s) {
    var {
      CLIENT_WIDTH: u,
      CLIENT_HEIGHT: l,
      viewPort: h,
      ctx: f,
      isFirstRender: c
    } = this, v = f.canvas;
    h.clear(), v.width && v.height ? h.setCurrent(v.width, v.height) : h.setCurrent(u, l);
    var d = e.getStyle("width"), g = e.getStyle("height");
    !t && (c || typeof i != "number" && typeof n != "number") && (d.hasValue() && (v.width = d.getPixels("x"), v.style && (v.style.width = "".concat(v.width, "px"))), g.hasValue() && (v.height = g.getPixels("y"), v.style && (v.style.height = "".concat(v.height, "px"))));
    var p = v.clientWidth || v.width, y = v.clientHeight || v.height;
    if (t && d.hasValue() && g.hasValue() && (p = d.getPixels("x"), y = g.getPixels("y")), h.setCurrent(p, y), typeof o == "number" && e.getAttribute("x", !0).setValue(o), typeof s == "number" && e.getAttribute("y", !0).setValue(s), typeof i == "number" || typeof n == "number") {
      var x = ie(e.getAttribute("viewBox").getString()), b = 0, T = 0;
      if (typeof i == "number") {
        var $ = e.getStyle("width");
        $.hasValue() ? b = $.getPixels("x") / i : isNaN(x[2]) || (b = x[2] / i);
      }
      if (typeof n == "number") {
        var E = e.getStyle("height");
        E.hasValue() ? T = E.getPixels("y") / n : isNaN(x[3]) || (T = x[3] / n);
      }
      b || (b = T), T || (T = b), e.getAttribute("width", !0).setValue(i), e.getAttribute("height", !0).setValue(n);
      var O = e.getStyle("transform", !0, !0);
      O.setValue("".concat(O.getString(), " scale(").concat(1 / b, ", ").concat(1 / T, ")"));
    }
    r || f.clearRect(0, 0, p, y), e.render(f), c && (this.isFirstRender = !1);
  }
}
_r.defaultWindow = dl;
_r.defaultFetch = pl;
var {
  defaultFetch: u1
} = _r, l1 = typeof DOMParser < "u" ? DOMParser : null;
class Ga {
  constructor() {
    var {
      fetch: e = u1,
      DOMParser: t = l1
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.fetch = e, this.DOMParser = t;
  }
  parse(e) {
    var t = this;
    return xe(function* () {
      return e.startsWith("<") ? t.parseFromString(e) : t.load(e);
    })();
  }
  parseFromString(e) {
    var t = new this.DOMParser();
    try {
      return this.checkDocument(t.parseFromString(e, "image/svg+xml"));
    } catch {
      return this.checkDocument(t.parseFromString(e, "text/xml"));
    }
  }
  checkDocument(e) {
    var t = e.getElementsByTagName("parsererror")[0];
    if (t)
      throw new Error(t.textContent);
    return e;
  }
  load(e) {
    var t = this;
    return xe(function* () {
      var r = yield t.fetch(e), i = yield r.text();
      return t.parseFromString(i);
    })();
  }
}
class h1 {
  constructor(e, t) {
    this.type = "translate", this.point = null, this.point = D.parse(t);
  }
  apply(e) {
    var {
      x: t,
      y: r
    } = this.point;
    e.translate(t || 0, r || 0);
  }
  unapply(e) {
    var {
      x: t,
      y: r
    } = this.point;
    e.translate(-1 * t || 0, -1 * r || 0);
  }
  applyToPoint(e) {
    var {
      x: t,
      y: r
    } = this.point;
    e.applyTransform([1, 0, 0, 1, t || 0, r || 0]);
  }
}
class v1 {
  constructor(e, t, r) {
    this.type = "rotate", this.angle = null, this.originX = null, this.originY = null, this.cx = 0, this.cy = 0;
    var i = ie(t);
    this.angle = new S(e, "angle", i[0]), this.originX = r[0], this.originY = r[1], this.cx = i[1] || 0, this.cy = i[2] || 0;
  }
  apply(e) {
    var {
      cx: t,
      cy: r,
      originX: i,
      originY: n,
      angle: o
    } = this, s = t + i.getPixels("x"), u = r + n.getPixels("y");
    e.translate(s, u), e.rotate(o.getRadians()), e.translate(-s, -u);
  }
  unapply(e) {
    var {
      cx: t,
      cy: r,
      originX: i,
      originY: n,
      angle: o
    } = this, s = t + i.getPixels("x"), u = r + n.getPixels("y");
    e.translate(s, u), e.rotate(-1 * o.getRadians()), e.translate(-s, -u);
  }
  applyToPoint(e) {
    var {
      cx: t,
      cy: r,
      angle: i
    } = this, n = i.getRadians();
    e.applyTransform([
      1,
      0,
      0,
      1,
      t || 0,
      r || 0
      // this.p.y
    ]), e.applyTransform([Math.cos(n), Math.sin(n), -Math.sin(n), Math.cos(n), 0, 0]), e.applyTransform([
      1,
      0,
      0,
      1,
      -t || 0,
      -r || 0
      // -this.p.y
    ]);
  }
}
class f1 {
  constructor(e, t, r) {
    this.type = "scale", this.scale = null, this.originX = null, this.originY = null;
    var i = D.parseScale(t);
    (i.x === 0 || i.y === 0) && (i.x = at, i.y = at), this.scale = i, this.originX = r[0], this.originY = r[1];
  }
  apply(e) {
    var {
      scale: {
        x: t,
        y: r
      },
      originX: i,
      originY: n
    } = this, o = i.getPixels("x"), s = n.getPixels("y");
    e.translate(o, s), e.scale(t, r || t), e.translate(-o, -s);
  }
  unapply(e) {
    var {
      scale: {
        x: t,
        y: r
      },
      originX: i,
      originY: n
    } = this, o = i.getPixels("x"), s = n.getPixels("y");
    e.translate(o, s), e.scale(1 / t, 1 / r || t), e.translate(-o, -s);
  }
  applyToPoint(e) {
    var {
      x: t,
      y: r
    } = this.scale;
    e.applyTransform([t || 0, 0, 0, r || 0, 0, 0]);
  }
}
class yl {
  constructor(e, t, r) {
    this.type = "matrix", this.matrix = [], this.originX = null, this.originY = null, this.matrix = ie(t), this.originX = r[0], this.originY = r[1];
  }
  apply(e) {
    var {
      originX: t,
      originY: r,
      matrix: i
    } = this, n = t.getPixels("x"), o = r.getPixels("y");
    e.translate(n, o), e.transform(i[0], i[1], i[2], i[3], i[4], i[5]), e.translate(-n, -o);
  }
  unapply(e) {
    var {
      originX: t,
      originY: r,
      matrix: i
    } = this, n = i[0], o = i[2], s = i[4], u = i[1], l = i[3], h = i[5], f = 0, c = 0, v = 1, d = 1 / (n * (l * v - h * c) - o * (u * v - h * f) + s * (u * c - l * f)), g = t.getPixels("x"), p = r.getPixels("y");
    e.translate(g, p), e.transform(d * (l * v - h * c), d * (h * f - u * v), d * (s * c - o * v), d * (n * v - s * f), d * (o * h - s * l), d * (s * u - n * h)), e.translate(-g, -p);
  }
  applyToPoint(e) {
    e.applyTransform(this.matrix);
  }
}
class ml extends yl {
  constructor(e, t, r) {
    super(e, t, r), this.type = "skew", this.angle = null, this.angle = new S(e, "angle", t);
  }
}
class c1 extends ml {
  constructor(e, t, r) {
    super(e, t, r), this.type = "skewX", this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0];
  }
}
class g1 extends ml {
  constructor(e, t, r) {
    super(e, t, r), this.type = "skewY", this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0];
  }
}
function d1(a) {
  return ht(a).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
}
function p1(a) {
  var [e, t] = a.split("(");
  return [e.trim(), t.trim().replace(")", "")];
}
class Le {
  constructor(e, t, r) {
    this.document = e, this.transforms = [];
    var i = d1(t);
    i.forEach((n) => {
      if (n !== "none") {
        var [o, s] = p1(n), u = Le.transformTypes[o];
        typeof u < "u" && this.transforms.push(new u(this.document, s, r));
      }
    });
  }
  static fromElement(e, t) {
    var r = t.getStyle("transform", !1, !0), [i, n = i] = t.getStyle("transform-origin", !1, !0).split(), o = [i, n];
    return r.hasValue() ? new Le(e, r.getString(), o) : null;
  }
  apply(e) {
    for (var {
      transforms: t
    } = this, r = t.length, i = 0; i < r; i++)
      t[i].apply(e);
  }
  unapply(e) {
    for (var {
      transforms: t
    } = this, r = t.length, i = r - 1; i >= 0; i--)
      t[i].unapply(e);
  }
  // TODO: applyToPoint unused ... remove?
  applyToPoint(e) {
    for (var {
      transforms: t
    } = this, r = t.length, i = 0; i < r; i++)
      t[i].applyToPoint(e);
  }
}
Le.transformTypes = {
  translate: h1,
  rotate: v1,
  scale: f1,
  matrix: yl,
  skewX: c1,
  skewY: g1
};
class N {
  constructor(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    if (this.document = e, this.node = t, this.captureTextNodes = r, this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.animationFrozen = !1, this.animationFrozenValue = "", this.parent = null, this.children = [], !(!t || t.nodeType !== 1)) {
      if (Array.from(t.attributes).forEach((s) => {
        var u = Qb(s.nodeName);
        this.attributes[u] = new S(e, u, s.value);
      }), this.addStylesFromStyleDefinition(), this.getAttribute("style").hasValue()) {
        var i = this.getAttribute("style").getString().split(";").map((s) => s.trim());
        i.forEach((s) => {
          if (s) {
            var [u, l] = s.split(":").map((h) => h.trim());
            this.styles[u] = new S(e, u, l);
          }
        });
      }
      var {
        definitions: n
      } = e, o = this.getAttribute("id");
      o.hasValue() && (n[o.getString()] || (n[o.getString()] = this)), Array.from(t.childNodes).forEach((s) => {
        if (s.nodeType === 1)
          this.addChild(s);
        else if (r && (s.nodeType === 3 || s.nodeType === 4)) {
          var u = e.createTextNode(s);
          u.getText().length > 0 && this.addChild(u);
        }
      });
    }
  }
  getAttribute(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = this.attributes[e];
    if (!r && t) {
      var i = new S(this.document, e, "");
      return this.attributes[e] = i, i;
    }
    return r || S.empty(this.document);
  }
  getHrefAttribute() {
    for (var e in this.attributes)
      if (e === "href" || e.endsWith(":href"))
        return this.attributes[e];
    return S.empty(this.document);
  }
  getStyle(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, i = this.styles[e];
    if (i)
      return i;
    var n = this.getAttribute(e);
    if (n != null && n.hasValue())
      return this.styles[e] = n, n;
    if (!r) {
      var {
        parent: o
      } = this;
      if (o) {
        var s = o.getStyle(e);
        if (s != null && s.hasValue())
          return s;
      }
    }
    if (t) {
      var u = new S(this.document, e, "");
      return this.styles[e] = u, u;
    }
    return i || S.empty(this.document);
  }
  render(e) {
    if (!(this.getStyle("display").getString() === "none" || this.getStyle("visibility").getString() === "hidden")) {
      if (e.save(), this.getStyle("mask").hasValue()) {
        var t = this.getStyle("mask").getDefinition();
        t && (this.applyEffects(e), t.apply(e, this));
      } else if (this.getStyle("filter").getValue("none") !== "none") {
        var r = this.getStyle("filter").getDefinition();
        r && (this.applyEffects(e), r.apply(e, this));
      } else
        this.setContext(e), this.renderChildren(e), this.clearContext(e);
      e.restore();
    }
  }
  setContext(e) {
  }
  applyEffects(e) {
    var t = Le.fromElement(this.document, this);
    t && t.apply(e);
    var r = this.getStyle("clip-path", !1, !0);
    if (r.hasValue()) {
      var i = r.getDefinition();
      i && i.apply(e);
    }
  }
  clearContext(e) {
  }
  renderChildren(e) {
    this.children.forEach((t) => {
      t.render(e);
    });
  }
  addChild(e) {
    var t = e instanceof N ? e : this.document.createElement(e);
    t.parent = this, N.ignoreChildTypes.includes(t.type) || this.children.push(t);
  }
  matchesSelector(e) {
    var t, {
      node: r
    } = this;
    if (typeof r.matches == "function")
      return r.matches(e);
    var i = (t = r.getAttribute) === null || t === void 0 ? void 0 : t.call(r, "class");
    return !i || i === "" ? !1 : i.split(" ").some((n) => ".".concat(n) === e);
  }
  addStylesFromStyleDefinition() {
    var {
      styles: e,
      stylesSpecificity: t
    } = this.document;
    for (var r in e)
      if (!r.startsWith("@") && this.matchesSelector(r)) {
        var i = e[r], n = t[r];
        if (i)
          for (var o in i) {
            var s = this.stylesSpecificity[o];
            typeof s > "u" && (s = "000"), n >= s && (this.styles[o] = i[o], this.stylesSpecificity[o] = n);
          }
      }
  }
  removeStyles(e, t) {
    var r = t.reduce((i, n) => {
      var o = e.getStyle(n);
      if (!o.hasValue())
        return i;
      var s = o.getString();
      return o.setValue(""), [...i, [n, s]];
    }, []);
    return r;
  }
  restoreStyles(e, t) {
    t.forEach((r) => {
      var [i, n] = r;
      e.getStyle(i, !0).setValue(n);
    });
  }
  isFirstChild() {
    var e;
    return ((e = this.parent) === null || e === void 0 ? void 0 : e.children.indexOf(this)) === 0;
  }
}
N.ignoreChildTypes = ["title"];
class y1 extends N {
  constructor(e, t, r) {
    super(e, t, r);
  }
}
function m1(a) {
  var e = a.trim();
  return /^('|")/.test(e) ? e : '"'.concat(e, '"');
}
function b1(a) {
  return typeof process > "u" ? a : a.trim().split(",").map(m1).join(",");
}
function x1(a) {
  if (!a)
    return "";
  var e = a.trim().toLowerCase();
  switch (e) {
    case "normal":
    case "italic":
    case "oblique":
    case "inherit":
    case "initial":
    case "unset":
      return e;
    default:
      return /^oblique\s+(-|)\d+deg$/.test(e) ? e : "";
  }
}
function T1(a) {
  if (!a)
    return "";
  var e = a.trim().toLowerCase();
  switch (e) {
    case "normal":
    case "bold":
    case "lighter":
    case "bolder":
    case "inherit":
    case "initial":
    case "unset":
      return e;
    default:
      return /^[\d.]+$/.test(e) ? e : "";
  }
}
class Z {
  constructor(e, t, r, i, n, o) {
    var s = o ? typeof o == "string" ? Z.parse(o) : o : {};
    this.fontFamily = n || s.fontFamily, this.fontSize = i || s.fontSize, this.fontStyle = e || s.fontStyle, this.fontWeight = r || s.fontWeight, this.fontVariant = t || s.fontVariant;
  }
  static parse() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 ? arguments[1] : void 0, r = "", i = "", n = "", o = "", s = "", u = ht(e).trim().split(" "), l = {
      fontSize: !1,
      fontStyle: !1,
      fontWeight: !1,
      fontVariant: !1
    };
    return u.forEach((h) => {
      switch (!0) {
        case (!l.fontStyle && Z.styles.includes(h)):
          h !== "inherit" && (r = h), l.fontStyle = !0;
          break;
        case (!l.fontVariant && Z.variants.includes(h)):
          h !== "inherit" && (i = h), l.fontStyle = !0, l.fontVariant = !0;
          break;
        case (!l.fontWeight && Z.weights.includes(h)):
          h !== "inherit" && (n = h), l.fontStyle = !0, l.fontVariant = !0, l.fontWeight = !0;
          break;
        case !l.fontSize:
          h !== "inherit" && ([o] = h.split("/")), l.fontStyle = !0, l.fontVariant = !0, l.fontWeight = !0, l.fontSize = !0;
          break;
        default:
          h !== "inherit" && (s += h);
      }
    }), new Z(r, i, n, o, s, t);
  }
  toString() {
    return [
      x1(this.fontStyle),
      this.fontVariant,
      T1(this.fontWeight),
      this.fontSize,
      // Wrap fontFamily only on nodejs and only for canvas.ctx
      b1(this.fontFamily)
    ].join(" ").trim();
  }
}
Z.styles = "normal|italic|oblique|inherit";
Z.variants = "normal|small-caps|inherit";
Z.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
class ce {
  constructor() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.NaN, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.NaN, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.NaN, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Number.NaN;
    this.x1 = e, this.y1 = t, this.x2 = r, this.y2 = i, this.addPoint(e, t), this.addPoint(r, i);
  }
  get x() {
    return this.x1;
  }
  get y() {
    return this.y1;
  }
  get width() {
    return this.x2 - this.x1;
  }
  get height() {
    return this.y2 - this.y1;
  }
  addPoint(e, t) {
    typeof e < "u" && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = e, this.x2 = e), e < this.x1 && (this.x1 = e), e > this.x2 && (this.x2 = e)), typeof t < "u" && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = t, this.y2 = t), t < this.y1 && (this.y1 = t), t > this.y2 && (this.y2 = t));
  }
  addX(e) {
    this.addPoint(e, null);
  }
  addY(e) {
    this.addPoint(null, e);
  }
  addBoundingBox(e) {
    if (e) {
      var {
        x1: t,
        y1: r,
        x2: i,
        y2: n
      } = e;
      this.addPoint(t, r), this.addPoint(i, n);
    }
  }
  sumCubic(e, t, r, i, n) {
    return Math.pow(1 - e, 3) * t + 3 * Math.pow(1 - e, 2) * e * r + 3 * (1 - e) * Math.pow(e, 2) * i + Math.pow(e, 3) * n;
  }
  bezierCurveAdd(e, t, r, i, n) {
    var o = 6 * t - 12 * r + 6 * i, s = -3 * t + 9 * r - 9 * i + 3 * n, u = 3 * r - 3 * t;
    if (s === 0) {
      if (o === 0)
        return;
      var l = -u / o;
      0 < l && l < 1 && (e ? this.addX(this.sumCubic(l, t, r, i, n)) : this.addY(this.sumCubic(l, t, r, i, n)));
      return;
    }
    var h = Math.pow(o, 2) - 4 * u * s;
    if (!(h < 0)) {
      var f = (-o + Math.sqrt(h)) / (2 * s);
      0 < f && f < 1 && (e ? this.addX(this.sumCubic(f, t, r, i, n)) : this.addY(this.sumCubic(f, t, r, i, n)));
      var c = (-o - Math.sqrt(h)) / (2 * s);
      0 < c && c < 1 && (e ? this.addX(this.sumCubic(c, t, r, i, n)) : this.addY(this.sumCubic(c, t, r, i, n)));
    }
  }
  // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
  addBezierCurve(e, t, r, i, n, o, s, u) {
    this.addPoint(e, t), this.addPoint(s, u), this.bezierCurveAdd(!0, e, r, n, s), this.bezierCurveAdd(!1, t, i, o, u);
  }
  addQuadraticCurve(e, t, r, i, n, o) {
    var s = e + 0.6666666666666666 * (r - e), u = t + 2 / 3 * (i - t), l = s + 1 / 3 * (n - e), h = u + 1 / 3 * (o - t);
    this.addBezierCurve(e, t, s, l, u, h, n, o);
  }
  isPointInBox(e, t) {
    var {
      x1: r,
      y1: i,
      x2: n,
      y2: o
    } = this;
    return r <= e && e <= n && i <= t && t <= o;
  }
}
class w extends m {
  constructor(e) {
    super(e.replace(/([+\-.])\s+/gm, "$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")), this.control = null, this.start = null, this.current = null, this.command = null, this.commands = this.commands, this.i = -1, this.previousCommand = null, this.points = [], this.angles = [];
  }
  reset() {
    this.i = -1, this.command = null, this.previousCommand = null, this.start = new D(0, 0), this.control = new D(0, 0), this.current = new D(0, 0), this.points = [], this.angles = [];
  }
  isEnd() {
    var {
      i: e,
      commands: t
    } = this;
    return e >= t.length - 1;
  }
  next() {
    var e = this.commands[++this.i];
    return this.previousCommand = this.command, this.command = e, e;
  }
  getPoint() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "x", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y", r = new D(this.command[e], this.command[t]);
    return this.makeAbsolute(r);
  }
  getAsControlPoint(e, t) {
    var r = this.getPoint(e, t);
    return this.control = r, r;
  }
  getAsCurrentPoint(e, t) {
    var r = this.getPoint(e, t);
    return this.current = r, r;
  }
  getReflectedControlPoint() {
    var e = this.previousCommand.type;
    if (e !== m.CURVE_TO && e !== m.SMOOTH_CURVE_TO && e !== m.QUAD_TO && e !== m.SMOOTH_QUAD_TO)
      return this.current;
    var {
      current: {
        x: t,
        y: r
      },
      control: {
        x: i,
        y: n
      }
    } = this, o = new D(2 * t - i, 2 * r - n);
    return o;
  }
  makeAbsolute(e) {
    if (this.command.relative) {
      var {
        x: t,
        y: r
      } = this.current;
      e.x += t, e.y += r;
    }
    return e;
  }
  addMarker(e, t, r) {
    var {
      points: i,
      angles: n
    } = this;
    r && n.length > 0 && !n[n.length - 1] && (n[n.length - 1] = i[i.length - 1].angleTo(r)), this.addMarkerAngle(e, t ? t.angleTo(e) : null);
  }
  addMarkerAngle(e, t) {
    this.points.push(e), this.angles.push(t);
  }
  getMarkerPoints() {
    return this.points;
  }
  getMarkerAngles() {
    for (var {
      angles: e
    } = this, t = e.length, r = 0; r < t; r++)
      if (!e[r]) {
        for (var i = r + 1; i < t; i++)
          if (e[i]) {
            e[r] = e[i];
            break;
          }
      }
    return e;
  }
}
class Ge extends N {
  constructor() {
    super(...arguments), this.modifiedEmSizeStack = !1;
  }
  calculateOpacity() {
    for (var e = 1, t = this; t; ) {
      var r = t.getStyle("opacity", !1, !0);
      r.hasValue(!0) && (e *= r.getNumber()), t = t.parent;
    }
    return e;
  }
  setContext(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!t) {
      var r = this.getStyle("fill"), i = this.getStyle("fill-opacity"), n = this.getStyle("stroke"), o = this.getStyle("stroke-opacity");
      if (r.isUrlDefinition()) {
        var s = r.getFillStyleDefinition(this, i);
        s && (e.fillStyle = s);
      } else if (r.hasValue()) {
        r.getString() === "currentColor" && r.setValue(this.getStyle("color").getColor());
        var u = r.getColor();
        u !== "inherit" && (e.fillStyle = u === "none" ? "rgba(0,0,0,0)" : u);
      }
      if (i.hasValue()) {
        var l = new S(this.document, "fill", e.fillStyle).addOpacity(i).getColor();
        e.fillStyle = l;
      }
      if (n.isUrlDefinition()) {
        var h = n.getFillStyleDefinition(this, o);
        h && (e.strokeStyle = h);
      } else if (n.hasValue()) {
        n.getString() === "currentColor" && n.setValue(this.getStyle("color").getColor());
        var f = n.getString();
        f !== "inherit" && (e.strokeStyle = f === "none" ? "rgba(0,0,0,0)" : f);
      }
      if (o.hasValue()) {
        var c = new S(this.document, "stroke", e.strokeStyle).addOpacity(o).getString();
        e.strokeStyle = c;
      }
      var v = this.getStyle("stroke-width");
      if (v.hasValue()) {
        var d = v.getPixels();
        e.lineWidth = d || at;
      }
      var g = this.getStyle("stroke-linecap"), p = this.getStyle("stroke-linejoin"), y = this.getStyle("stroke-miterlimit"), x = this.getStyle("stroke-dasharray"), b = this.getStyle("stroke-dashoffset");
      if (g.hasValue() && (e.lineCap = g.getString()), p.hasValue() && (e.lineJoin = p.getString()), y.hasValue() && (e.miterLimit = y.getNumber()), x.hasValue() && x.getString() !== "none") {
        var T = ie(x.getString());
        typeof e.setLineDash < "u" ? e.setLineDash(T) : typeof e.webkitLineDash < "u" ? e.webkitLineDash = T : typeof e.mozDash < "u" && !(T.length === 1 && T[0] === 0) && (e.mozDash = T);
        var $ = b.getPixels();
        typeof e.lineDashOffset < "u" ? e.lineDashOffset = $ : typeof e.webkitLineDashOffset < "u" ? e.webkitLineDashOffset = $ : typeof e.mozDashOffset < "u" && (e.mozDashOffset = $);
      }
    }
    if (this.modifiedEmSizeStack = !1, typeof e.font < "u") {
      var E = this.getStyle("font"), O = this.getStyle("font-style"), C = this.getStyle("font-variant"), I = this.getStyle("font-weight"), _ = this.getStyle("font-size"), j = this.getStyle("font-family"), P = new Z(O.getString(), C.getString(), I.getString(), _.hasValue() ? "".concat(_.getPixels(!0), "px") : "", j.getString(), Z.parse(E.getString(), e.font));
      O.setValue(P.fontStyle), C.setValue(P.fontVariant), I.setValue(P.fontWeight), _.setValue(P.fontSize), j.setValue(P.fontFamily), e.font = P.toString(), _.isPixels() && (this.document.emSize = _.getPixels(), this.modifiedEmSizeStack = !0);
    }
    t || (this.applyEffects(e), e.globalAlpha = this.calculateOpacity());
  }
  clearContext(e) {
    super.clearContext(e), this.modifiedEmSizeStack && this.document.popEmSize();
  }
}
class A extends Ge {
  constructor(e, t, r) {
    super(e, t, r), this.type = "path", this.pathParser = null, this.pathParser = new w(this.getAttribute("d").getString());
  }
  path(e) {
    var {
      pathParser: t
    } = this, r = new ce();
    for (t.reset(), e && e.beginPath(); !t.isEnd(); )
      switch (t.next().type) {
        case w.MOVE_TO:
          this.pathM(e, r);
          break;
        case w.LINE_TO:
          this.pathL(e, r);
          break;
        case w.HORIZ_LINE_TO:
          this.pathH(e, r);
          break;
        case w.VERT_LINE_TO:
          this.pathV(e, r);
          break;
        case w.CURVE_TO:
          this.pathC(e, r);
          break;
        case w.SMOOTH_CURVE_TO:
          this.pathS(e, r);
          break;
        case w.QUAD_TO:
          this.pathQ(e, r);
          break;
        case w.SMOOTH_QUAD_TO:
          this.pathT(e, r);
          break;
        case w.ARC:
          this.pathA(e, r);
          break;
        case w.CLOSE_PATH:
          this.pathZ(e, r);
          break;
      }
    return r;
  }
  getBoundingBox(e) {
    return this.path();
  }
  getMarkers() {
    var {
      pathParser: e
    } = this, t = e.getMarkerPoints(), r = e.getMarkerAngles(), i = t.map((n, o) => [n, r[o]]);
    return i;
  }
  renderChildren(e) {
    this.path(e), this.document.screen.mouse.checkPath(this, e);
    var t = this.getStyle("fill-rule");
    e.fillStyle !== "" && (t.getString("inherit") !== "inherit" ? e.fill(t.getString()) : e.fill()), e.strokeStyle !== "" && (this.getAttribute("vector-effect").getString() === "non-scaling-stroke" ? (e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.stroke(), e.restore()) : e.stroke());
    var r = this.getMarkers();
    if (r) {
      var i = r.length - 1, n = this.getStyle("marker-start"), o = this.getStyle("marker-mid"), s = this.getStyle("marker-end");
      if (n.isUrlDefinition()) {
        var u = n.getDefinition(), [l, h] = r[0];
        u.render(e, l, h);
      }
      if (o.isUrlDefinition())
        for (var f = o.getDefinition(), c = 1; c < i; c++) {
          var [v, d] = r[c];
          f.render(e, v, d);
        }
      if (s.isUrlDefinition()) {
        var g = s.getDefinition(), [p, y] = r[i];
        g.render(e, p, y);
      }
    }
  }
  static pathM(e) {
    var t = e.getAsCurrentPoint();
    return e.start = e.current, {
      point: t
    };
  }
  pathM(e, t) {
    var {
      pathParser: r
    } = this, {
      point: i
    } = A.pathM(r), {
      x: n,
      y: o
    } = i;
    r.addMarker(i), t.addPoint(n, o), e && e.moveTo(n, o);
  }
  static pathL(e) {
    var {
      current: t
    } = e, r = e.getAsCurrentPoint();
    return {
      current: t,
      point: r
    };
  }
  pathL(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n
    } = A.pathL(r), {
      x: o,
      y: s
    } = n;
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s);
  }
  static pathH(e) {
    var {
      current: t,
      command: r
    } = e, i = new D((r.relative ? t.x : 0) + r.x, t.y);
    return e.current = i, {
      current: t,
      point: i
    };
  }
  pathH(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n
    } = A.pathH(r), {
      x: o,
      y: s
    } = n;
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s);
  }
  static pathV(e) {
    var {
      current: t,
      command: r
    } = e, i = new D(t.x, (r.relative ? t.y : 0) + r.y);
    return e.current = i, {
      current: t,
      point: i
    };
  }
  pathV(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n
    } = A.pathV(r), {
      x: o,
      y: s
    } = n;
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s);
  }
  static pathC(e) {
    var {
      current: t
    } = e, r = e.getPoint("x1", "y1"), i = e.getAsControlPoint("x2", "y2"), n = e.getAsCurrentPoint();
    return {
      current: t,
      point: r,
      controlPoint: i,
      currentPoint: n
    };
  }
  pathC(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n,
      controlPoint: o,
      currentPoint: s
    } = A.pathC(r);
    r.addMarker(s, o, n), t.addBezierCurve(i.x, i.y, n.x, n.y, o.x, o.y, s.x, s.y), e && e.bezierCurveTo(n.x, n.y, o.x, o.y, s.x, s.y);
  }
  static pathS(e) {
    var {
      current: t
    } = e, r = e.getReflectedControlPoint(), i = e.getAsControlPoint("x2", "y2"), n = e.getAsCurrentPoint();
    return {
      current: t,
      point: r,
      controlPoint: i,
      currentPoint: n
    };
  }
  pathS(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      point: n,
      controlPoint: o,
      currentPoint: s
    } = A.pathS(r);
    r.addMarker(s, o, n), t.addBezierCurve(i.x, i.y, n.x, n.y, o.x, o.y, s.x, s.y), e && e.bezierCurveTo(n.x, n.y, o.x, o.y, s.x, s.y);
  }
  static pathQ(e) {
    var {
      current: t
    } = e, r = e.getAsControlPoint("x1", "y1"), i = e.getAsCurrentPoint();
    return {
      current: t,
      controlPoint: r,
      currentPoint: i
    };
  }
  pathQ(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      controlPoint: n,
      currentPoint: o
    } = A.pathQ(r);
    r.addMarker(o, n, n), t.addQuadraticCurve(i.x, i.y, n.x, n.y, o.x, o.y), e && e.quadraticCurveTo(n.x, n.y, o.x, o.y);
  }
  static pathT(e) {
    var {
      current: t
    } = e, r = e.getReflectedControlPoint();
    e.control = r;
    var i = e.getAsCurrentPoint();
    return {
      current: t,
      controlPoint: r,
      currentPoint: i
    };
  }
  pathT(e, t) {
    var {
      pathParser: r
    } = this, {
      current: i,
      controlPoint: n,
      currentPoint: o
    } = A.pathT(r);
    r.addMarker(o, n, n), t.addQuadraticCurve(i.x, i.y, n.x, n.y, o.x, o.y), e && e.quadraticCurveTo(n.x, n.y, o.x, o.y);
  }
  static pathA(e) {
    var {
      current: t,
      command: r
    } = e, {
      rX: i,
      rY: n,
      xRot: o,
      lArcFlag: s,
      sweepFlag: u
    } = r, l = o * (Math.PI / 180), h = e.getAsCurrentPoint(), f = new D(Math.cos(l) * (t.x - h.x) / 2 + Math.sin(l) * (t.y - h.y) / 2, -Math.sin(l) * (t.x - h.x) / 2 + Math.cos(l) * (t.y - h.y) / 2), c = Math.pow(f.x, 2) / Math.pow(i, 2) + Math.pow(f.y, 2) / Math.pow(n, 2);
    c > 1 && (i *= Math.sqrt(c), n *= Math.sqrt(c));
    var v = (s === u ? -1 : 1) * Math.sqrt((Math.pow(i, 2) * Math.pow(n, 2) - Math.pow(i, 2) * Math.pow(f.y, 2) - Math.pow(n, 2) * Math.pow(f.x, 2)) / (Math.pow(i, 2) * Math.pow(f.y, 2) + Math.pow(n, 2) * Math.pow(f.x, 2)));
    isNaN(v) && (v = 0);
    var d = new D(v * i * f.y / n, v * -n * f.x / i), g = new D((t.x + h.x) / 2 + Math.cos(l) * d.x - Math.sin(l) * d.y, (t.y + h.y) / 2 + Math.sin(l) * d.x + Math.cos(l) * d.y), p = Oo([1, 0], [(f.x - d.x) / i, (f.y - d.y) / n]), y = [(f.x - d.x) / i, (f.y - d.y) / n], x = [(-f.x - d.x) / i, (-f.y - d.y) / n], b = Oo(y, x);
    return bi(y, x) <= -1 && (b = Math.PI), bi(y, x) >= 1 && (b = 0), {
      currentPoint: h,
      rX: i,
      rY: n,
      sweepFlag: u,
      xAxisRotation: l,
      centp: g,
      a1: p,
      ad: b
    };
  }
  pathA(e, t) {
    var {
      pathParser: r
    } = this, {
      currentPoint: i,
      rX: n,
      rY: o,
      sweepFlag: s,
      xAxisRotation: u,
      centp: l,
      a1: h,
      ad: f
    } = A.pathA(r), c = 1 - s ? 1 : -1, v = h + c * (f / 2), d = new D(l.x + n * Math.cos(v), l.y + o * Math.sin(v));
    if (r.addMarkerAngle(d, v - c * Math.PI / 2), r.addMarkerAngle(i, v - c * Math.PI), t.addPoint(i.x, i.y), e && !isNaN(h) && !isNaN(f)) {
      var g = n > o ? n : o, p = n > o ? 1 : n / o, y = n > o ? o / n : 1;
      e.translate(l.x, l.y), e.rotate(u), e.scale(p, y), e.arc(0, 0, g, h, h + f, !!(1 - s)), e.scale(1 / p, 1 / y), e.rotate(-u), e.translate(-l.x, -l.y);
    }
  }
  static pathZ(e) {
    e.current = e.start;
  }
  pathZ(e, t) {
    A.pathZ(this.pathParser), e && t.x1 !== t.x2 && t.y1 !== t.y2 && e.closePath();
  }
}
class bl extends A {
  constructor(e, t, r) {
    super(e, t, r), this.type = "glyph", this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber(), this.unicode = this.getAttribute("unicode").getString(), this.arabicForm = this.getAttribute("arabic-form").getString();
  }
}
class Ce extends Ge {
  constructor(e, t, r) {
    super(e, t, new.target === Ce ? !0 : r), this.type = "text", this.x = 0, this.y = 0, this.measureCache = -1;
  }
  setContext(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    super.setContext(e, t);
    var r = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
    r && (e.textBaseline = r);
  }
  initializeCoordinates() {
    this.x = 0, this.y = 0, this.leafTexts = [], this.textChunkStart = 0, this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY;
  }
  getBoundingBox(e) {
    if (this.type !== "text")
      return this.getTElementBoundingBox(e);
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(e);
    var t = null;
    return this.children.forEach((r, i) => {
      var n = this.getChildBoundingBox(e, this, this, i);
      t ? t.addBoundingBox(n) : t = n;
    }), t;
  }
  getFontSize() {
    var {
      document: e,
      parent: t
    } = this, r = Z.parse(e.ctx.font).fontSize, i = t.getStyle("font-size").getNumber(r);
    return i;
  }
  getTElementBoundingBox(e) {
    var t = this.getFontSize();
    return new ce(this.x, this.y - t, this.x + this.measureText(e), this.y);
  }
  getGlyph(e, t, r) {
    var i = t[r], n = null;
    if (e.isArabic) {
      var o = t.length, s = t[r - 1], u = t[r + 1], l = "isolated";
      if ((r === 0 || s === " ") && r < o - 1 && u !== " " && (l = "terminal"), r > 0 && s !== " " && r < o - 1 && u !== " " && (l = "medial"), r > 0 && s !== " " && (r === o - 1 || u === " ") && (l = "initial"), typeof e.glyphs[i] < "u") {
        var h = e.glyphs[i];
        n = h instanceof bl ? h : h[l];
      }
    } else
      n = e.glyphs[i];
    return n || (n = e.missingGlyph), n;
  }
  getText() {
    return "";
  }
  getTextFromNode(e) {
    var t = e || this.node, r = Array.from(t.parentNode.childNodes), i = r.indexOf(t), n = r.length - 1, o = ht(
      // textNode.value
      // || textNode.text
      t.textContent || ""
    );
    return i === 0 && (o = Xb(o)), i === n && (o = Wb(o)), o;
  }
  renderChildren(e) {
    if (this.type !== "text") {
      this.renderTElementChildren(e);
      return;
    }
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(e), this.children.forEach((r, i) => {
      this.renderChild(e, this, this, i);
    });
    var {
      mouse: t
    } = this.document.screen;
    t.isWorking() && t.checkBoundingBox(this, this.getBoundingBox(e));
  }
  renderTElementChildren(e) {
    var {
      document: t,
      parent: r
    } = this, i = this.getText(), n = r.getStyle("font-family").getDefinition();
    if (n) {
      for (var {
        unitsPerEm: o
      } = n.fontFace, s = Z.parse(t.ctx.font), u = r.getStyle("font-size").getNumber(s.fontSize), l = r.getStyle("font-style").getString(s.fontStyle), h = u / o, f = n.isRTL ? i.split("").reverse().join("") : i, c = ie(r.getAttribute("dx").getString()), v = f.length, d = 0; d < v; d++) {
        var g = this.getGlyph(n, f, d);
        e.translate(this.x, this.y), e.scale(h, -h);
        var p = e.lineWidth;
        e.lineWidth = e.lineWidth * o / u, l === "italic" && e.transform(1, 0, 0.4, 1, 0, 0), g.render(e), l === "italic" && e.transform(1, 0, -0.4, 1, 0, 0), e.lineWidth = p, e.scale(1 / h, -1 / h), e.translate(-this.x, -this.y), this.x += u * (g.horizAdvX || n.horizAdvX) / o, typeof c[d] < "u" && !isNaN(c[d]) && (this.x += c[d]);
      }
      return;
    }
    var {
      x: y,
      y: x
    } = this;
    e.fillStyle && e.fillText(i, y, x), e.strokeStyle && e.strokeText(i, y, x);
  }
  applyAnchoring() {
    if (!(this.textChunkStart >= this.leafTexts.length)) {
      var e = this.leafTexts[this.textChunkStart], t = e.getStyle("text-anchor").getString("start"), r = !1, i = 0;
      t === "start" && !r || t === "end" && r ? i = e.x - this.minX : t === "end" && !r || t === "start" && r ? i = e.x - this.maxX : i = e.x - (this.minX + this.maxX) / 2;
      for (var n = this.textChunkStart; n < this.leafTexts.length; n++)
        this.leafTexts[n].x += i;
      this.minX = Number.POSITIVE_INFINITY, this.maxX = Number.NEGATIVE_INFINITY, this.textChunkStart = this.leafTexts.length;
    }
  }
  adjustChildCoordinatesRecursive(e) {
    this.children.forEach((t, r) => {
      this.adjustChildCoordinatesRecursiveCore(e, this, this, r);
    }), this.applyAnchoring();
  }
  adjustChildCoordinatesRecursiveCore(e, t, r, i) {
    var n = r.children[i];
    n.children.length > 0 ? n.children.forEach((o, s) => {
      t.adjustChildCoordinatesRecursiveCore(e, t, n, s);
    }) : this.adjustChildCoordinates(e, t, r, i);
  }
  adjustChildCoordinates(e, t, r, i) {
    var n = r.children[i];
    if (typeof n.measureText != "function")
      return n;
    e.save(), n.setContext(e, !0);
    var o = n.getAttribute("x"), s = n.getAttribute("y"), u = n.getAttribute("dx"), l = n.getAttribute("dy"), h = n.getStyle("font-family").getDefinition(), f = !!h && h.isRTL;
    i === 0 && (o.hasValue() || o.setValue(n.getInheritedAttribute("x")), s.hasValue() || s.setValue(n.getInheritedAttribute("y")), u.hasValue() || u.setValue(n.getInheritedAttribute("dx")), l.hasValue() || l.setValue(n.getInheritedAttribute("dy")));
    var c = n.measureText(e);
    return f && (t.x -= c), o.hasValue() ? (t.applyAnchoring(), n.x = o.getPixels("x"), u.hasValue() && (n.x += u.getPixels("x"))) : (u.hasValue() && (t.x += u.getPixels("x")), n.x = t.x), t.x = n.x, f || (t.x += c), s.hasValue() ? (n.y = s.getPixels("y"), l.hasValue() && (n.y += l.getPixels("y"))) : (l.hasValue() && (t.y += l.getPixels("y")), n.y = t.y), t.y = n.y, t.leafTexts.push(n), t.minX = Math.min(t.minX, n.x, n.x + c), t.maxX = Math.max(t.maxX, n.x, n.x + c), n.clearContext(e), e.restore(), n;
  }
  getChildBoundingBox(e, t, r, i) {
    var n = r.children[i];
    if (typeof n.getBoundingBox != "function")
      return null;
    var o = n.getBoundingBox(e);
    return o ? (n.children.forEach((s, u) => {
      var l = t.getChildBoundingBox(e, t, n, u);
      o.addBoundingBox(l);
    }), o) : null;
  }
  renderChild(e, t, r, i) {
    var n = r.children[i];
    n.render(e), n.children.forEach((o, s) => {
      t.renderChild(e, t, n, s);
    });
  }
  measureText(e) {
    var {
      measureCache: t
    } = this;
    if (~t)
      return t;
    var r = this.getText(), i = this.measureTargetText(e, r);
    return this.measureCache = i, i;
  }
  measureTargetText(e, t) {
    if (!t.length)
      return 0;
    var {
      parent: r
    } = this, i = r.getStyle("font-family").getDefinition();
    if (i) {
      for (var n = this.getFontSize(), o = i.isRTL ? t.split("").reverse().join("") : t, s = ie(r.getAttribute("dx").getString()), u = o.length, l = 0, h = 0; h < u; h++) {
        var f = this.getGlyph(i, o, h);
        l += (f.horizAdvX || i.horizAdvX) * n / i.fontFace.unitsPerEm, typeof s[h] < "u" && !isNaN(s[h]) && (l += s[h]);
      }
      return l;
    }
    if (!e.measureText)
      return t.length * 10;
    e.save(), this.setContext(e, !0);
    var {
      width: c
    } = e.measureText(t);
    return this.clearContext(e), e.restore(), c;
  }
  /**
   * Inherits positional attributes from {@link TextElement} parent(s). Attributes
   * are only inherited from a parent to its first child.
   * @param name - The attribute name.
   * @returns The attribute value or null.
   */
  getInheritedAttribute(e) {
    for (var t = this; t instanceof Ce && t.isFirstChild(); ) {
      var r = t.parent.getAttribute(e);
      if (r.hasValue(!0))
        return r.getValue("0");
      t = t.parent;
    }
    return null;
  }
}
class Vr extends Ce {
  constructor(e, t, r) {
    super(e, t, new.target === Vr ? !0 : r), this.type = "tspan", this.text = this.children.length > 0 ? "" : this.getTextFromNode();
  }
  getText() {
    return this.text;
  }
}
class O1 extends Vr {
  constructor() {
    super(...arguments), this.type = "textNode";
  }
}
class It extends Ge {
  constructor() {
    super(...arguments), this.type = "svg", this.root = !1;
  }
  setContext(e) {
    var t, {
      document: r
    } = this, {
      screen: i,
      window: n
    } = r, o = e.canvas;
    if (i.setDefaults(e), o.style && typeof e.font < "u" && n && typeof n.getComputedStyle < "u") {
      e.font = n.getComputedStyle(o).getPropertyValue("font");
      var s = new S(r, "fontSize", Z.parse(e.font).fontSize);
      s.hasValue() && (r.rootEmSize = s.getPixels("y"), r.emSize = r.rootEmSize);
    }
    this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0), this.getAttribute("y").hasValue() || this.getAttribute("y", !0).setValue(0);
    var {
      width: u,
      height: l
    } = i.viewPort;
    this.getStyle("width").hasValue() || this.getStyle("width", !0).setValue("100%"), this.getStyle("height").hasValue() || this.getStyle("height", !0).setValue("100%"), this.getStyle("color").hasValue() || this.getStyle("color", !0).setValue("black");
    var h = this.getAttribute("refX"), f = this.getAttribute("refY"), c = this.getAttribute("viewBox"), v = c.hasValue() ? ie(c.getString()) : null, d = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible", g = 0, p = 0, y = 0, x = 0;
    v && (g = v[0], p = v[1]), this.root || (u = this.getStyle("width").getPixels("x"), l = this.getStyle("height").getPixels("y"), this.type === "marker" && (y = g, x = p, g = 0, p = 0)), i.viewPort.setCurrent(u, l), this.node && (!this.parent || ((t = this.node.parentNode) === null || t === void 0 ? void 0 : t.nodeName) === "foreignObject") && this.getStyle("transform", !1, !0).hasValue() && !this.getStyle("transform-origin", !1, !0).hasValue() && this.getStyle("transform-origin", !0, !0).setValue("50% 50%"), super.setContext(e), e.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y")), v && (u = v[2], l = v[3]), r.setViewBox({
      ctx: e,
      aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
      width: i.viewPort.width,
      desiredWidth: u,
      height: i.viewPort.height,
      desiredHeight: l,
      minX: g,
      minY: p,
      refX: h.getValue(),
      refY: f.getValue(),
      clip: d,
      clipX: y,
      clipY: x
    }), v && (i.viewPort.removeCurrent(), i.viewPort.setCurrent(u, l));
  }
  clearContext(e) {
    super.clearContext(e), this.document.screen.viewPort.removeCurrent();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */
  resize(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, i = this.getAttribute("width", !0), n = this.getAttribute("height", !0), o = this.getAttribute("viewBox"), s = this.getAttribute("style"), u = i.getNumber(0), l = n.getNumber(0);
    if (r)
      if (typeof r == "string")
        this.getAttribute("preserveAspectRatio", !0).setValue(r);
      else {
        var h = this.getAttribute("preserveAspectRatio");
        h.hasValue() && h.setValue(h.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
      }
    if (i.setValue(e), n.setValue(t), o.hasValue() || o.setValue("0 0 ".concat(u || e, " ").concat(l || t)), s.hasValue()) {
      var f = this.getStyle("width"), c = this.getStyle("height");
      f.hasValue() && f.setValue("".concat(e, "px")), c.hasValue() && c.setValue("".concat(t, "px"));
    }
  }
}
class xl extends A {
  constructor() {
    super(...arguments), this.type = "rect";
  }
  path(e) {
    var t = this.getAttribute("x").getPixels("x"), r = this.getAttribute("y").getPixels("y"), i = this.getStyle("width", !1, !0).getPixels("x"), n = this.getStyle("height", !1, !0).getPixels("y"), o = this.getAttribute("rx"), s = this.getAttribute("ry"), u = o.getPixels("x"), l = s.getPixels("y");
    if (o.hasValue() && !s.hasValue() && (l = u), s.hasValue() && !o.hasValue() && (u = l), u = Math.min(u, i / 2), l = Math.min(l, n / 2), e) {
      var h = 4 * ((Math.sqrt(2) - 1) / 3);
      e.beginPath(), n > 0 && i > 0 && (e.moveTo(t + u, r), e.lineTo(t + i - u, r), e.bezierCurveTo(t + i - u + h * u, r, t + i, r + l - h * l, t + i, r + l), e.lineTo(t + i, r + n - l), e.bezierCurveTo(t + i, r + n - l + h * l, t + i - u + h * u, r + n, t + i - u, r + n), e.lineTo(t + u, r + n), e.bezierCurveTo(t + u - h * u, r + n, t, r + n - l + h * l, t, r + n - l), e.lineTo(t, r + l), e.bezierCurveTo(t, r + l - h * l, t + u - h * u, r, t + u, r), e.closePath());
    }
    return new ce(t, r, t + i, r + n);
  }
  getMarkers() {
    return null;
  }
}
class S1 extends A {
  constructor() {
    super(...arguments), this.type = "circle";
  }
  path(e) {
    var t = this.getAttribute("cx").getPixels("x"), r = this.getAttribute("cy").getPixels("y"), i = this.getAttribute("r").getPixels();
    return e && i > 0 && (e.beginPath(), e.arc(t, r, i, 0, Math.PI * 2, !1), e.closePath()), new ce(t - i, r - i, t + i, r + i);
  }
  getMarkers() {
    return null;
  }
}
class E1 extends A {
  constructor() {
    super(...arguments), this.type = "ellipse";
  }
  path(e) {
    var t = 4 * ((Math.sqrt(2) - 1) / 3), r = this.getAttribute("rx").getPixels("x"), i = this.getAttribute("ry").getPixels("y"), n = this.getAttribute("cx").getPixels("x"), o = this.getAttribute("cy").getPixels("y");
    return e && r > 0 && i > 0 && (e.beginPath(), e.moveTo(n + r, o), e.bezierCurveTo(n + r, o + t * i, n + t * r, o + i, n, o + i), e.bezierCurveTo(n - t * r, o + i, n - r, o + t * i, n - r, o), e.bezierCurveTo(n - r, o - t * i, n - t * r, o - i, n, o - i), e.bezierCurveTo(n + t * r, o - i, n + r, o - t * i, n + r, o), e.closePath()), new ce(n - r, o - i, n + r, o + i);
  }
  getMarkers() {
    return null;
  }
}
class $1 extends A {
  constructor() {
    super(...arguments), this.type = "line";
  }
  getPoints() {
    return [new D(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new D(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))];
  }
  path(e) {
    var [{
      x: t,
      y: r
    }, {
      x: i,
      y: n
    }] = this.getPoints();
    return e && (e.beginPath(), e.moveTo(t, r), e.lineTo(i, n)), new ce(t, r, i, n);
  }
  getMarkers() {
    var [e, t] = this.getPoints(), r = e.angleTo(t);
    return [[e, r], [t, r]];
  }
}
class Tl extends A {
  constructor(e, t, r) {
    super(e, t, r), this.type = "polyline", this.points = [], this.points = D.parsePath(this.getAttribute("points").getString());
  }
  path(e) {
    var {
      points: t
    } = this, [{
      x: r,
      y: i
    }] = t, n = new ce(r, i);
    return e && (e.beginPath(), e.moveTo(r, i)), t.forEach((o) => {
      var {
        x: s,
        y: u
      } = o;
      n.addPoint(s, u), e && e.lineTo(s, u);
    }), n;
  }
  getMarkers() {
    var {
      points: e
    } = this, t = e.length - 1, r = [];
    return e.forEach((i, n) => {
      n !== t && r.push([i, i.angleTo(e[n + 1])]);
    }), r.length > 0 && r.push([e[e.length - 1], r[r.length - 1][1]]), r;
  }
}
class w1 extends Tl {
  constructor() {
    super(...arguments), this.type = "polygon";
  }
  path(e) {
    var t = super.path(e), [{
      x: r,
      y: i
    }] = this.points;
    return e && (e.lineTo(r, i), e.closePath()), t;
  }
}
class C1 extends N {
  constructor() {
    super(...arguments), this.type = "pattern";
  }
  createPattern(e, t, r) {
    var i = this.getStyle("width").getPixels("x", !0), n = this.getStyle("height").getPixels("y", !0), o = new It(this.document, null);
    o.attributes.viewBox = new S(this.document, "viewBox", this.getAttribute("viewBox").getValue()), o.attributes.width = new S(this.document, "width", "".concat(i, "px")), o.attributes.height = new S(this.document, "height", "".concat(n, "px")), o.attributes.transform = new S(this.document, "transform", this.getAttribute("patternTransform").getValue()), o.children = this.children;
    var s = this.document.createCanvas(i, n), u = s.getContext("2d"), l = this.getAttribute("x"), h = this.getAttribute("y");
    l.hasValue() && h.hasValue() && u.translate(l.getPixels("x", !0), h.getPixels("y", !0)), r.hasValue() ? this.styles["fill-opacity"] = r : Reflect.deleteProperty(this.styles, "fill-opacity");
    for (var f = -1; f <= 1; f++)
      for (var c = -1; c <= 1; c++)
        u.save(), o.attributes.x = new S(this.document, "x", f * s.width), o.attributes.y = new S(this.document, "y", c * s.height), o.render(u), u.restore();
    var v = e.createPattern(s, "repeat");
    return v;
  }
}
class A1 extends N {
  constructor() {
    super(...arguments), this.type = "marker";
  }
  render(e, t, r) {
    if (t) {
      var {
        x: i,
        y: n
      } = t, o = this.getAttribute("orient").getString("auto"), s = this.getAttribute("markerUnits").getString("strokeWidth");
      e.translate(i, n), o === "auto" && e.rotate(r), s === "strokeWidth" && e.scale(e.lineWidth, e.lineWidth), e.save();
      var u = new It(this.document, null);
      u.type = this.type, u.attributes.viewBox = new S(this.document, "viewBox", this.getAttribute("viewBox").getValue()), u.attributes.refX = new S(this.document, "refX", this.getAttribute("refX").getValue()), u.attributes.refY = new S(this.document, "refY", this.getAttribute("refY").getValue()), u.attributes.width = new S(this.document, "width", this.getAttribute("markerWidth").getValue()), u.attributes.height = new S(this.document, "height", this.getAttribute("markerHeight").getValue()), u.attributes.overflow = new S(this.document, "overflow", this.getAttribute("overflow").getValue()), u.attributes.fill = new S(this.document, "fill", this.getAttribute("fill").getColor("black")), u.attributes.stroke = new S(this.document, "stroke", this.getAttribute("stroke").getValue("none")), u.children = this.children, u.render(e), e.restore(), s === "strokeWidth" && e.scale(1 / e.lineWidth, 1 / e.lineWidth), o === "auto" && e.rotate(-r), e.translate(-i, -n);
    }
  }
}
class P1 extends N {
  constructor() {
    super(...arguments), this.type = "defs";
  }
  render() {
  }
}
class an extends Ge {
  constructor() {
    super(...arguments), this.type = "g";
  }
  getBoundingBox(e) {
    var t = new ce();
    return this.children.forEach((r) => {
      t.addBoundingBox(r.getBoundingBox(e));
    }), t;
  }
}
class Ol extends N {
  constructor(e, t, r) {
    super(e, t, r), this.attributesToInherit = ["gradientUnits"], this.stops = [];
    var {
      stops: i,
      children: n
    } = this;
    n.forEach((o) => {
      o.type === "stop" && i.push(o);
    });
  }
  getGradientUnits() {
    return this.getAttribute("gradientUnits").getString("objectBoundingBox");
  }
  createGradient(e, t, r) {
    var i = this;
    this.getHrefAttribute().hasValue() && (i = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(i));
    var {
      stops: n
    } = i, o = this.getGradient(e, t);
    if (!o)
      return this.addParentOpacity(r, n[n.length - 1].color);
    if (n.forEach((p) => {
      o.addColorStop(p.offset, this.addParentOpacity(r, p.color));
    }), this.getAttribute("gradientTransform").hasValue()) {
      var {
        document: s
      } = this, {
        MAX_VIRTUAL_PIXELS: u,
        viewPort: l
      } = s.screen, [h] = l.viewPorts, f = new xl(s, null);
      f.attributes.x = new S(s, "x", -u / 3), f.attributes.y = new S(s, "y", -u / 3), f.attributes.width = new S(s, "width", u), f.attributes.height = new S(s, "height", u);
      var c = new an(s, null);
      c.attributes.transform = new S(s, "transform", this.getAttribute("gradientTransform").getValue()), c.children = [f];
      var v = new It(s, null);
      v.attributes.x = new S(s, "x", 0), v.attributes.y = new S(s, "y", 0), v.attributes.width = new S(s, "width", h.width), v.attributes.height = new S(s, "height", h.height), v.children = [c];
      var d = s.createCanvas(h.width, h.height), g = d.getContext("2d");
      return g.fillStyle = o, v.render(g), g.createPattern(d, "no-repeat");
    }
    return o;
  }
  inheritStopContainer(e) {
    this.attributesToInherit.forEach((t) => {
      !this.getAttribute(t).hasValue() && e.getAttribute(t).hasValue() && this.getAttribute(t, !0).setValue(e.getAttribute(t).getValue());
    });
  }
  addParentOpacity(e, t) {
    if (e.hasValue()) {
      var r = new S(this.document, "color", t);
      return r.addOpacity(e).getColor();
    }
    return t;
  }
}
class R1 extends Ol {
  constructor(e, t, r) {
    super(e, t, r), this.type = "linearGradient", this.attributesToInherit.push("x1", "y1", "x2", "y2");
  }
  getGradient(e, t) {
    var r = this.getGradientUnits() === "objectBoundingBox", i = r ? t.getBoundingBox(e) : null;
    if (r && !i)
      return null;
    !this.getAttribute("x1").hasValue() && !this.getAttribute("y1").hasValue() && !this.getAttribute("x2").hasValue() && !this.getAttribute("y2").hasValue() && (this.getAttribute("x1", !0).setValue(0), this.getAttribute("y1", !0).setValue(0), this.getAttribute("x2", !0).setValue(1), this.getAttribute("y2", !0).setValue(0));
    var n = r ? i.x + i.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x"), o = r ? i.y + i.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y"), s = r ? i.x + i.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x"), u = r ? i.y + i.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
    return n === s && o === u ? null : e.createLinearGradient(n, o, s, u);
  }
}
class N1 extends Ol {
  constructor(e, t, r) {
    super(e, t, r), this.type = "radialGradient", this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
  }
  getGradient(e, t) {
    var r = this.getGradientUnits() === "objectBoundingBox", i = t.getBoundingBox(e);
    if (r && !i)
      return null;
    this.getAttribute("cx").hasValue() || this.getAttribute("cx", !0).setValue("50%"), this.getAttribute("cy").hasValue() || this.getAttribute("cy", !0).setValue("50%"), this.getAttribute("r").hasValue() || this.getAttribute("r", !0).setValue("50%");
    var n = r ? i.x + i.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x"), o = r ? i.y + i.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y"), s = n, u = o;
    this.getAttribute("fx").hasValue() && (s = r ? i.x + i.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x")), this.getAttribute("fy").hasValue() && (u = r ? i.y + i.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y"));
    var l = r ? (i.width + i.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels(), h = this.getAttribute("fr").getPixels();
    return e.createRadialGradient(s, u, h, n, o, l);
  }
}
class I1 extends N {
  constructor(e, t, r) {
    super(e, t, r), this.type = "stop";
    var i = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber())), n = this.getStyle("stop-opacity"), o = this.getStyle("stop-color", !0);
    o.getString() === "" && o.setValue("#000"), n.hasValue() && (o = o.addOpacity(n)), this.offset = i, this.color = o.getColor();
  }
}
class nn extends N {
  constructor(e, t, r) {
    super(e, t, r), this.type = "animate", this.duration = 0, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.frozen = !1, e.screen.animations.push(this), this.begin = this.getAttribute("begin").getMilliseconds(), this.maxDuration = this.begin + this.getAttribute("dur").getMilliseconds(), this.from = this.getAttribute("from"), this.to = this.getAttribute("to"), this.values = new S(e, "values", null);
    var i = this.getAttribute("values");
    i.hasValue() && this.values.setValue(i.getString().split(";"));
  }
  getProperty() {
    var e = this.getAttribute("attributeType").getString(), t = this.getAttribute("attributeName").getString();
    return e === "CSS" ? this.parent.getStyle(t, !0) : this.parent.getAttribute(t, !0);
  }
  calcValue() {
    var {
      initialUnits: e
    } = this, {
      progress: t,
      from: r,
      to: i
    } = this.getProgress(), n = r.getNumber() + (i.getNumber() - r.getNumber()) * t;
    return e === "%" && (n *= 100), "".concat(n).concat(e);
  }
  update(e) {
    var {
      parent: t
    } = this, r = this.getProperty();
    if (this.initialValue || (this.initialValue = r.getString(), this.initialUnits = r.getUnits()), this.duration > this.maxDuration) {
      var i = this.getAttribute("fill").getString("remove");
      if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite")
        this.duration = 0;
      else if (i === "freeze" && !this.frozen)
        this.frozen = !0, t.animationFrozen = !0, t.animationFrozenValue = r.getString();
      else if (i === "remove" && !this.removed)
        return this.removed = !0, r.setValue(t.animationFrozen ? t.animationFrozenValue : this.initialValue), !0;
      return !1;
    }
    this.duration += e;
    var n = !1;
    if (this.begin < this.duration) {
      var o = this.calcValue(), s = this.getAttribute("type");
      if (s.hasValue()) {
        var u = s.getString();
        o = "".concat(u, "(").concat(o, ")");
      }
      r.setValue(o), n = !0;
    }
    return n;
  }
  getProgress() {
    var {
      document: e,
      values: t
    } = this, r = {
      progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
    };
    if (t.hasValue()) {
      var i = r.progress * (t.getValue().length - 1), n = Math.floor(i), o = Math.ceil(i);
      r.from = new S(e, "from", parseFloat(t.getValue()[n])), r.to = new S(e, "to", parseFloat(t.getValue()[o])), r.progress = (i - n) / (o - n);
    } else
      r.from = this.from, r.to = this.to;
    return r;
  }
}
class M1 extends nn {
  constructor() {
    super(...arguments), this.type = "animateColor";
  }
  calcValue() {
    var {
      progress: e,
      from: t,
      to: r
    } = this.getProgress(), i = new pi(t.getColor()), n = new pi(r.getColor());
    if (i.ok && n.ok) {
      var o = i.r + (n.r - i.r) * e, s = i.g + (n.g - i.g) * e, u = i.b + (n.b - i.b) * e;
      return "rgb(".concat(Math.floor(o), ", ").concat(Math.floor(s), ", ").concat(Math.floor(u), ")");
    }
    return this.getAttribute("from").getColor();
  }
}
class _1 extends nn {
  constructor() {
    super(...arguments), this.type = "animateTransform";
  }
  calcValue() {
    var {
      progress: e,
      from: t,
      to: r
    } = this.getProgress(), i = ie(t.getString()), n = ie(r.getString()), o = i.map((s, u) => {
      var l = n[u];
      return s + (l - s) * e;
    }).join(" ");
    return o;
  }
}
class V1 extends N {
  constructor(e, t, r) {
    super(e, t, r), this.type = "font", this.glyphs = {}, this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber();
    var {
      definitions: i
    } = e, {
      children: n
    } = this;
    for (var o of n)
      switch (o.type) {
        case "font-face": {
          this.fontFace = o;
          var s = o.getStyle("font-family");
          s.hasValue() && (i[s.getString()] = this);
          break;
        }
        case "missing-glyph":
          this.missingGlyph = o;
          break;
        case "glyph": {
          var u = o;
          u.arabicForm ? (this.isRTL = !0, this.isArabic = !0, typeof this.glyphs[u.unicode] > "u" && (this.glyphs[u.unicode] = {}), this.glyphs[u.unicode][u.arabicForm] = u) : this.glyphs[u.unicode] = u;
          break;
        }
      }
  }
  render() {
  }
}
class D1 extends N {
  constructor(e, t, r) {
    super(e, t, r), this.type = "font-face", this.ascent = this.getAttribute("ascent").getNumber(), this.descent = this.getAttribute("descent").getNumber(), this.unitsPerEm = this.getAttribute("units-per-em").getNumber();
  }
}
class k1 extends A {
  constructor() {
    super(...arguments), this.type = "missing-glyph", this.horizAdvX = 0;
  }
}
class L1 extends Ce {
  constructor() {
    super(...arguments), this.type = "tref";
  }
  getText() {
    var e = this.getHrefAttribute().getDefinition();
    if (e) {
      var t = e.children[0];
      if (t)
        return t.getText();
    }
    return "";
  }
}
class B1 extends Ce {
  constructor(e, t, r) {
    super(e, t, r), this.type = "a";
    var {
      childNodes: i
    } = t, n = i[0], o = i.length > 0 && Array.from(i).every((s) => s.nodeType === 3);
    this.hasText = o, this.text = o ? this.getTextFromNode(n) : "";
  }
  getText() {
    return this.text;
  }
  renderChildren(e) {
    if (this.hasText) {
      super.renderChildren(e);
      var {
        document: t,
        x: r,
        y: i
      } = this, {
        mouse: n
      } = t.screen, o = new S(t, "fontSize", Z.parse(t.ctx.font).fontSize);
      n.isWorking() && n.checkBoundingBox(this, new ce(r, i - o.getPixels("y"), r + this.measureText(e), i));
    } else if (this.children.length > 0) {
      var s = new an(this.document, null);
      s.children = this.children, s.parent = this, s.render(e);
    }
  }
  onClick() {
    var {
      window: e
    } = this.document;
    e && e.open(this.getHrefAttribute().getString());
  }
  onMouseMove() {
    var e = this.document.ctx;
    e.canvas.style.cursor = "pointer";
  }
}
function Ro(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(a, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ar(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ro(Object(t), !0).forEach(function(r) {
      tn(a, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : Ro(Object(t)).forEach(function(r) {
      Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a;
}
class j1 extends Ce {
  constructor(e, t, r) {
    super(e, t, r), this.type = "textPath", this.textWidth = 0, this.textHeight = 0, this.pathLength = -1, this.glyphInfo = null, this.letterSpacingCache = [], this.measuresCache = /* @__PURE__ */ new Map([["", 0]]);
    var i = this.getHrefAttribute().getDefinition();
    this.text = this.getTextFromNode(), this.dataArray = this.parsePathData(i);
  }
  getText() {
    return this.text;
  }
  path(e) {
    var {
      dataArray: t
    } = this;
    e && e.beginPath(), t.forEach((r) => {
      var {
        type: i,
        points: n
      } = r;
      switch (i) {
        case w.LINE_TO:
          e && e.lineTo(n[0], n[1]);
          break;
        case w.MOVE_TO:
          e && e.moveTo(n[0], n[1]);
          break;
        case w.CURVE_TO:
          e && e.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
          break;
        case w.QUAD_TO:
          e && e.quadraticCurveTo(n[0], n[1], n[2], n[3]);
          break;
        case w.ARC: {
          var [o, s, u, l, h, f, c, v] = n, d = u > l ? u : l, g = u > l ? 1 : u / l, p = u > l ? l / u : 1;
          e && (e.translate(o, s), e.rotate(c), e.scale(g, p), e.arc(0, 0, d, h, h + f, !!(1 - v)), e.scale(1 / g, 1 / p), e.rotate(-c), e.translate(-o, -s));
          break;
        }
        case w.CLOSE_PATH:
          e && e.closePath();
          break;
      }
    });
  }
  renderChildren(e) {
    this.setTextData(e), e.save();
    var t = this.parent.getStyle("text-decoration").getString(), r = this.getFontSize(), {
      glyphInfo: i
    } = this, n = e.fillStyle;
    t === "underline" && e.beginPath(), i.forEach((o, s) => {
      var {
        p0: u,
        p1: l,
        rotation: h,
        text: f
      } = o;
      e.save(), e.translate(u.x, u.y), e.rotate(h), e.fillStyle && e.fillText(f, 0, 0), e.strokeStyle && e.strokeText(f, 0, 0), e.restore(), t === "underline" && (s === 0 && e.moveTo(u.x, u.y + r / 8), e.lineTo(l.x, l.y + r / 5));
    }), t === "underline" && (e.lineWidth = r / 20, e.strokeStyle = n, e.stroke(), e.closePath()), e.restore();
  }
  getLetterSpacingAt() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this.letterSpacingCache[e] || 0;
  }
  findSegmentToFitChar(e, t, r, i, n, o, s, u, l) {
    var h = o, f = this.measureText(e, u);
    u === " " && t === "justify" && r < i && (f += (i - r) / n), l > -1 && (h += this.getLetterSpacingAt(l));
    var c = this.textHeight / 20, v = this.getEquidistantPointOnPath(h, c, 0), d = this.getEquidistantPointOnPath(h + f, c, 0), g = {
      p0: v,
      p1: d
    }, p = v && d ? Math.atan2(d.y - v.y, d.x - v.x) : 0;
    if (s) {
      var y = Math.cos(Math.PI / 2 + p) * s, x = Math.cos(-p) * s;
      g.p0 = ar(ar({}, v), {}, {
        x: v.x + y,
        y: v.y + x
      }), g.p1 = ar(ar({}, d), {}, {
        x: d.x + y,
        y: d.y + x
      });
    }
    return h += f, {
      offset: h,
      segment: g,
      rotation: p
    };
  }
  measureText(e, t) {
    var {
      measuresCache: r
    } = this, i = t || this.getText();
    if (r.has(i))
      return r.get(i);
    var n = this.measureTargetText(e, i);
    return r.set(i, n), n;
  }
  // This method supposes what all custom fonts already loaded.
  // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
  // You need to call this method manually to update glyphs cache.
  setTextData(e) {
    if (!this.glyphInfo) {
      var t = this.getText(), r = t.split(""), i = t.split(" ").length - 1, n = this.parent.getAttribute("dx").split().map((T) => T.getPixels("x")), o = this.parent.getAttribute("dy").getPixels("y"), s = this.parent.getStyle("text-anchor").getString("start"), u = this.getStyle("letter-spacing"), l = this.parent.getStyle("letter-spacing"), h = 0;
      !u.hasValue() || u.getValue() === "inherit" ? h = l.getPixels() : u.hasValue() && u.getValue() !== "initial" && u.getValue() !== "unset" && (h = u.getPixels());
      var f = [], c = t.length;
      this.letterSpacingCache = f;
      for (var v = 0; v < c; v++)
        f.push(typeof n[v] < "u" ? n[v] : h);
      var d = f.reduce((T, $, E) => E === 0 ? 0 : T + $ || 0, 0), g = this.measureText(e), p = Math.max(g + d, 0);
      this.textWidth = g, this.textHeight = this.getFontSize(), this.glyphInfo = [];
      var y = this.getPathLength(), x = this.getStyle("startOffset").getNumber(0) * y, b = 0;
      (s === "middle" || s === "center") && (b = -p / 2), (s === "end" || s === "right") && (b = -p), b += x, r.forEach((T, $) => {
        var {
          offset: E,
          segment: O,
          rotation: C
        } = this.findSegmentToFitChar(e, s, p, y, i, b, o, T, $);
        b = E, !(!O.p0 || !O.p1) && this.glyphInfo.push({
          // transposeX: midpoint.x,
          // transposeY: midpoint.y,
          text: r[$],
          p0: O.p0,
          p1: O.p1,
          rotation: C
        });
      });
    }
  }
  parsePathData(e) {
    if (this.pathLength = -1, !e)
      return [];
    var t = [], {
      pathParser: r
    } = e;
    for (r.reset(); !r.isEnd(); ) {
      var {
        current: i
      } = r, n = i ? i.x : 0, o = i ? i.y : 0, s = r.next(), u = s.type, l = [];
      switch (s.type) {
        case w.MOVE_TO:
          this.pathM(r, l);
          break;
        case w.LINE_TO:
          u = this.pathL(r, l);
          break;
        case w.HORIZ_LINE_TO:
          u = this.pathH(r, l);
          break;
        case w.VERT_LINE_TO:
          u = this.pathV(r, l);
          break;
        case w.CURVE_TO:
          this.pathC(r, l);
          break;
        case w.SMOOTH_CURVE_TO:
          u = this.pathS(r, l);
          break;
        case w.QUAD_TO:
          this.pathQ(r, l);
          break;
        case w.SMOOTH_QUAD_TO:
          u = this.pathT(r, l);
          break;
        case w.ARC:
          l = this.pathA(r);
          break;
        case w.CLOSE_PATH:
          A.pathZ(r);
          break;
      }
      s.type !== w.CLOSE_PATH ? t.push({
        type: u,
        points: l,
        start: {
          x: n,
          y: o
        },
        pathLength: this.calcLength(n, o, u, l)
      }) : t.push({
        type: w.CLOSE_PATH,
        points: [],
        pathLength: 0
      });
    }
    return t;
  }
  pathM(e, t) {
    var {
      x: r,
      y: i
    } = A.pathM(e).point;
    t.push(r, i);
  }
  pathL(e, t) {
    var {
      x: r,
      y: i
    } = A.pathL(e).point;
    return t.push(r, i), w.LINE_TO;
  }
  pathH(e, t) {
    var {
      x: r,
      y: i
    } = A.pathH(e).point;
    return t.push(r, i), w.LINE_TO;
  }
  pathV(e, t) {
    var {
      x: r,
      y: i
    } = A.pathV(e).point;
    return t.push(r, i), w.LINE_TO;
  }
  pathC(e, t) {
    var {
      point: r,
      controlPoint: i,
      currentPoint: n
    } = A.pathC(e);
    t.push(r.x, r.y, i.x, i.y, n.x, n.y);
  }
  pathS(e, t) {
    var {
      point: r,
      controlPoint: i,
      currentPoint: n
    } = A.pathS(e);
    return t.push(r.x, r.y, i.x, i.y, n.x, n.y), w.CURVE_TO;
  }
  pathQ(e, t) {
    var {
      controlPoint: r,
      currentPoint: i
    } = A.pathQ(e);
    t.push(r.x, r.y, i.x, i.y);
  }
  pathT(e, t) {
    var {
      controlPoint: r,
      currentPoint: i
    } = A.pathT(e);
    return t.push(r.x, r.y, i.x, i.y), w.QUAD_TO;
  }
  pathA(e) {
    var {
      rX: t,
      rY: r,
      sweepFlag: i,
      xAxisRotation: n,
      centp: o,
      a1: s,
      ad: u
    } = A.pathA(e);
    return i === 0 && u > 0 && (u -= 2 * Math.PI), i === 1 && u < 0 && (u += 2 * Math.PI), [o.x, o.y, t, r, s, u, n, i];
  }
  calcLength(e, t, r, i) {
    var n = 0, o = null, s = null, u = 0;
    switch (r) {
      case w.LINE_TO:
        return this.getLineLength(e, t, i[0], i[1]);
      case w.CURVE_TO:
        for (n = 0, o = this.getPointOnCubicBezier(0, e, t, i[0], i[1], i[2], i[3], i[4], i[5]), u = 0.01; u <= 1; u += 0.01)
          s = this.getPointOnCubicBezier(u, e, t, i[0], i[1], i[2], i[3], i[4], i[5]), n += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return n;
      case w.QUAD_TO:
        for (n = 0, o = this.getPointOnQuadraticBezier(0, e, t, i[0], i[1], i[2], i[3]), u = 0.01; u <= 1; u += 0.01)
          s = this.getPointOnQuadraticBezier(u, e, t, i[0], i[1], i[2], i[3]), n += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return n;
      case w.ARC: {
        n = 0;
        var l = i[4], h = i[5], f = i[4] + h, c = Math.PI / 180;
        if (Math.abs(l - f) < c && (c = Math.abs(l - f)), o = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0), h < 0)
          for (u = l - c; u > f; u -= c)
            s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0), n += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        else
          for (u = l + c; u < f; u += c)
            s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0), n += this.getLineLength(o.x, o.y, s.x, s.y), o = s;
        return s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], f, 0), n += this.getLineLength(o.x, o.y, s.x, s.y), n;
      }
    }
    return 0;
  }
  getPointOnLine(e, t, r, i, n) {
    var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : t, s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : r, u = (n - r) / (i - t + at), l = Math.sqrt(e * e / (1 + u * u));
    i < t && (l *= -1);
    var h = u * l, f = null;
    if (i === t)
      f = {
        x: o,
        y: s + h
      };
    else if ((s - r) / (o - t + at) === u)
      f = {
        x: o + l,
        y: s + h
      };
    else {
      var c = 0, v = 0, d = this.getLineLength(t, r, i, n);
      if (d < at)
        return null;
      var g = (o - t) * (i - t) + (s - r) * (n - r);
      g /= d * d, c = t + g * (i - t), v = r + g * (n - r);
      var p = this.getLineLength(o, s, c, v), y = Math.sqrt(e * e - p * p);
      l = Math.sqrt(y * y / (1 + u * u)), i < t && (l *= -1), h = u * l, f = {
        x: c + l,
        y: v + h
      };
    }
    return f;
  }
  getPointOnPath(e) {
    var t = this.getPathLength(), r = 0, i = null;
    if (e < -5e-5 || e - 5e-5 > t)
      return null;
    var {
      dataArray: n
    } = this;
    for (var o of n) {
      if (o && (o.pathLength < 5e-5 || r + o.pathLength + 5e-5 < e)) {
        r += o.pathLength;
        continue;
      }
      var s = e - r, u = 0;
      switch (o.type) {
        case w.LINE_TO:
          i = this.getPointOnLine(s, o.start.x, o.start.y, o.points[0], o.points[1], o.start.x, o.start.y);
          break;
        case w.ARC: {
          var l = o.points[4], h = o.points[5], f = o.points[4] + h;
          if (u = l + s / o.pathLength * h, h < 0 && u < f || h >= 0 && u > f)
            break;
          i = this.getPointOnEllipticalArc(o.points[0], o.points[1], o.points[2], o.points[3], u, o.points[6]);
          break;
        }
        case w.CURVE_TO:
          u = s / o.pathLength, u > 1 && (u = 1), i = this.getPointOnCubicBezier(u, o.start.x, o.start.y, o.points[0], o.points[1], o.points[2], o.points[3], o.points[4], o.points[5]);
          break;
        case w.QUAD_TO:
          u = s / o.pathLength, u > 1 && (u = 1), i = this.getPointOnQuadraticBezier(u, o.start.x, o.start.y, o.points[0], o.points[1], o.points[2], o.points[3]);
          break;
      }
      if (i)
        return i;
      break;
    }
    return null;
  }
  getLineLength(e, t, r, i) {
    return Math.sqrt((r - e) * (r - e) + (i - t) * (i - t));
  }
  getPathLength() {
    return this.pathLength === -1 && (this.pathLength = this.dataArray.reduce((e, t) => t.pathLength > 0 ? e + t.pathLength : e, 0)), this.pathLength;
  }
  getPointOnCubicBezier(e, t, r, i, n, o, s, u, l) {
    var h = u * So(e) + o * Eo(e) + i * $o(e) + t * wo(e), f = l * So(e) + s * Eo(e) + n * $o(e) + r * wo(e);
    return {
      x: h,
      y: f
    };
  }
  getPointOnQuadraticBezier(e, t, r, i, n, o, s) {
    var u = o * Co(e) + i * Ao(e) + t * Po(e), l = s * Co(e) + n * Ao(e) + r * Po(e);
    return {
      x: u,
      y: l
    };
  }
  getPointOnEllipticalArc(e, t, r, i, n, o) {
    var s = Math.cos(o), u = Math.sin(o), l = {
      x: r * Math.cos(n),
      y: i * Math.sin(n)
    };
    return {
      x: e + (l.x * s - l.y * u),
      y: t + (l.x * u + l.y * s)
    };
  }
  // TODO need some optimisations. possibly build cache only for curved segments?
  buildEquidistantCache(e, t) {
    var r = this.getPathLength(), i = t || 0.25, n = e || r / 100;
    if (!this.equidistantCache || this.equidistantCache.step !== n || this.equidistantCache.precision !== i) {
      this.equidistantCache = {
        step: n,
        precision: i,
        points: []
      };
      for (var o = 0, s = 0; s <= r; s += i) {
        var u = this.getPointOnPath(s), l = this.getPointOnPath(s + i);
        !u || !l || (o += this.getLineLength(u.x, u.y, l.x, l.y), o >= n && (this.equidistantCache.points.push({
          x: u.x,
          y: u.y,
          distance: s
        }), o -= n));
      }
    }
  }
  getEquidistantPointOnPath(e, t, r) {
    if (this.buildEquidistantCache(t, r), e < 0 || e - this.getPathLength() > 5e-5)
      return null;
    var i = Math.round(e / this.getPathLength() * (this.equidistantCache.points.length - 1));
    return this.equidistantCache.points[i] || null;
  }
}
var F1 = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
class U1 extends Ge {
  constructor(e, t, r) {
    super(e, t, r), this.type = "image", this.loaded = !1;
    var i = this.getHrefAttribute().getString();
    if (i) {
      var n = i.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(i);
      e.images.push(this), n ? this.loadSvg(i) : this.loadImage(i), this.isSvg = n;
    }
  }
  loadImage(e) {
    var t = this;
    return xe(function* () {
      try {
        var r = yield t.document.createImage(e);
        t.image = r;
      } catch (i) {
        console.error('Error while loading image "'.concat(e, '":'), i);
      }
      t.loaded = !0;
    })();
  }
  loadSvg(e) {
    var t = this;
    return xe(function* () {
      var r = F1.exec(e);
      if (r) {
        var i = r[5];
        r[4] === "base64" ? t.image = atob(i) : t.image = decodeURIComponent(i);
      } else
        try {
          var n = yield t.document.fetch(e), o = yield n.text();
          t.image = o;
        } catch (s) {
          console.error('Error while loading image "'.concat(e, '":'), s);
        }
      t.loaded = !0;
    })();
  }
  renderChildren(e) {
    var {
      document: t,
      image: r,
      loaded: i
    } = this, n = this.getAttribute("x").getPixels("x"), o = this.getAttribute("y").getPixels("y"), s = this.getStyle("width").getPixels("x"), u = this.getStyle("height").getPixels("y");
    if (!(!i || !r || !s || !u)) {
      if (e.save(), e.translate(n, o), this.isSvg) {
        var l = t.canvg.forkString(e, this.image, {
          ignoreMouse: !0,
          ignoreAnimation: !0,
          ignoreDimensions: !0,
          ignoreClear: !0,
          offsetX: 0,
          offsetY: 0,
          scaleWidth: s,
          scaleHeight: u
        });
        l.document.documentElement.parent = this, l.render();
      } else {
        var h = this.image;
        t.setViewBox({
          ctx: e,
          aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
          width: s,
          desiredWidth: h.width,
          height: u,
          desiredHeight: h.height
        }), this.loaded && (typeof h.complete > "u" || h.complete) && e.drawImage(h, 0, 0);
      }
      e.restore();
    }
  }
  getBoundingBox() {
    var e = this.getAttribute("x").getPixels("x"), t = this.getAttribute("y").getPixels("y"), r = this.getStyle("width").getPixels("x"), i = this.getStyle("height").getPixels("y");
    return new ce(e, t, e + r, t + i);
  }
}
class G1 extends Ge {
  constructor() {
    super(...arguments), this.type = "symbol";
  }
  render(e) {
  }
}
class z1 {
  constructor(e) {
    this.document = e, this.loaded = !1, e.fonts.push(this);
  }
  load(e, t) {
    var r = this;
    return xe(function* () {
      try {
        var {
          document: i
        } = r, n = yield i.canvg.parser.load(t), o = n.getElementsByTagName("font");
        Array.from(o).forEach((s) => {
          var u = i.createElement(s);
          i.definitions[e] = u;
        });
      } catch (s) {
        console.error('Error while loading font "'.concat(t, '":'), s);
      }
      r.loaded = !0;
    })();
  }
}
class Sl extends N {
  constructor(e, t, r) {
    super(e, t, r), this.type = "style";
    var i = ht(
      Array.from(t.childNodes).map((o) => o.textContent).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, "")
      // remove imports
    ), n = i.split("}");
    n.forEach((o) => {
      var s = o.trim();
      if (s) {
        var u = s.split("{"), l = u[0].split(","), h = u[1].split(";");
        l.forEach((f) => {
          var c = f.trim();
          if (c) {
            var v = e.styles[c] || {};
            if (h.forEach((p) => {
              var y = p.indexOf(":"), x = p.substr(0, y).trim(), b = p.substr(y + 1, p.length - y).trim();
              x && b && (v[x] = new S(e, x, b));
            }), e.styles[c] = v, e.stylesSpecificity[c] = n1(c), c === "@font-face") {
              var d = v["font-family"].getString().replace(/"|'/g, ""), g = v.src.getString().split(",");
              g.forEach((p) => {
                if (p.indexOf('format("svg")') > 0) {
                  var y = gl(p);
                  y && new z1(e).load(d, y);
                }
              });
            }
          }
        });
      }
    });
  }
}
Sl.parseExternalUrl = gl;
class H1 extends Ge {
  constructor() {
    super(...arguments), this.type = "use";
  }
  setContext(e) {
    super.setContext(e);
    var t = this.getAttribute("x"), r = this.getAttribute("y");
    t.hasValue() && e.translate(t.getPixels("x"), 0), r.hasValue() && e.translate(0, r.getPixels("y"));
  }
  path(e) {
    var {
      element: t
    } = this;
    t && t.path(e);
  }
  renderChildren(e) {
    var {
      document: t,
      element: r
    } = this;
    if (r) {
      var i = r;
      if (r.type === "symbol" && (i = new It(t, null), i.attributes.viewBox = new S(t, "viewBox", r.getAttribute("viewBox").getString()), i.attributes.preserveAspectRatio = new S(t, "preserveAspectRatio", r.getAttribute("preserveAspectRatio").getString()), i.attributes.overflow = new S(t, "overflow", r.getAttribute("overflow").getString()), i.children = r.children, r.styles.opacity = new S(t, "opacity", this.calculateOpacity())), i.type === "svg") {
        var n = this.getStyle("width", !1, !0), o = this.getStyle("height", !1, !0);
        n.hasValue() && (i.attributes.width = new S(t, "width", n.getString())), o.hasValue() && (i.attributes.height = new S(t, "height", o.getString()));
      }
      var s = i.parent;
      i.parent = this, i.render(e), i.parent = s;
    }
  }
  getBoundingBox(e) {
    var {
      element: t
    } = this;
    return t ? t.getBoundingBox(e) : null;
  }
  elementTransform() {
    var {
      document: e,
      element: t
    } = this;
    return Le.fromElement(e, t);
  }
  get element() {
    return this.cachedElement || (this.cachedElement = this.getHrefAttribute().getDefinition()), this.cachedElement;
  }
}
function ir(a, e, t, r, i, n) {
  return a[t * r * 4 + e * 4 + n];
}
function nr(a, e, t, r, i, n, o) {
  a[t * r * 4 + e * 4 + n] = o;
}
function F(a, e, t) {
  var r = a[e];
  return r * t;
}
function me(a, e, t, r) {
  return e + Math.cos(a) * t + Math.sin(a) * r;
}
class El extends N {
  constructor(e, t, r) {
    super(e, t, r), this.type = "feColorMatrix";
    var i = ie(this.getAttribute("values").getString());
    switch (this.getAttribute("type").getString("matrix")) {
      case "saturate": {
        var n = i[0];
        i = [0.213 + 0.787 * n, 0.715 - 0.715 * n, 0.072 - 0.072 * n, 0, 0, 0.213 - 0.213 * n, 0.715 + 0.285 * n, 0.072 - 0.072 * n, 0, 0, 0.213 - 0.213 * n, 0.715 - 0.715 * n, 0.072 + 0.928 * n, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "hueRotate": {
        var o = i[0] * Math.PI / 180;
        i = [me(o, 0.213, 0.787, -0.213), me(o, 0.715, -0.715, -0.715), me(o, 0.072, -0.072, 0.928), 0, 0, me(o, 0.213, -0.213, 0.143), me(o, 0.715, 0.285, 0.14), me(o, 0.072, -0.072, -0.283), 0, 0, me(o, 0.213, -0.213, -0.787), me(o, 0.715, -0.715, 0.715), me(o, 0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        break;
      }
      case "luminanceToAlpha":
        i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
        break;
    }
    this.matrix = i, this.includeOpacity = this.getAttribute("includeOpacity").hasValue();
  }
  apply(e, t, r, i, n) {
    for (var {
      includeOpacity: o,
      matrix: s
    } = this, u = e.getImageData(0, 0, i, n), l = 0; l < n; l++)
      for (var h = 0; h < i; h++) {
        var f = ir(u.data, h, l, i, n, 0), c = ir(u.data, h, l, i, n, 1), v = ir(u.data, h, l, i, n, 2), d = ir(u.data, h, l, i, n, 3), g = F(s, 0, f) + F(s, 1, c) + F(s, 2, v) + F(s, 3, d) + F(s, 4, 1), p = F(s, 5, f) + F(s, 6, c) + F(s, 7, v) + F(s, 8, d) + F(s, 9, 1), y = F(s, 10, f) + F(s, 11, c) + F(s, 12, v) + F(s, 13, d) + F(s, 14, 1), x = F(s, 15, f) + F(s, 16, c) + F(s, 17, v) + F(s, 18, d) + F(s, 19, 1);
        o && (g = 0, p = 0, y = 0, x *= d / 255), nr(u.data, h, l, i, n, 0, g), nr(u.data, h, l, i, n, 1, p), nr(u.data, h, l, i, n, 2, y), nr(u.data, h, l, i, n, 3, x);
      }
    e.clearRect(0, 0, i, n), e.putImageData(u, 0, 0);
  }
}
class Dr extends N {
  constructor() {
    super(...arguments), this.type = "mask";
  }
  apply(e, t) {
    var {
      document: r
    } = this, i = this.getAttribute("x").getPixels("x"), n = this.getAttribute("y").getPixels("y"), o = this.getStyle("width").getPixels("x"), s = this.getStyle("height").getPixels("y");
    if (!o && !s) {
      var u = new ce();
      this.children.forEach((d) => {
        u.addBoundingBox(d.getBoundingBox(e));
      }), i = Math.floor(u.x1), n = Math.floor(u.y1), o = Math.floor(u.width), s = Math.floor(u.height);
    }
    var l = this.removeStyles(t, Dr.ignoreStyles), h = r.createCanvas(i + o, n + s), f = h.getContext("2d");
    r.screen.setDefaults(f), this.renderChildren(f), new El(r, {
      nodeType: 1,
      childNodes: [],
      attributes: [{
        nodeName: "type",
        value: "luminanceToAlpha"
      }, {
        nodeName: "includeOpacity",
        value: "true"
      }]
    }).apply(f, 0, 0, i + o, n + s);
    var c = r.createCanvas(i + o, n + s), v = c.getContext("2d");
    r.screen.setDefaults(v), t.render(v), v.globalCompositeOperation = "destination-in", v.fillStyle = f.createPattern(h, "no-repeat"), v.fillRect(0, 0, i + o, n + s), e.fillStyle = v.createPattern(c, "no-repeat"), e.fillRect(0, 0, i + o, n + s), this.restoreStyles(t, l);
  }
  render(e) {
  }
}
Dr.ignoreStyles = ["mask", "transform", "clip-path"];
var No = () => {
};
class Y1 extends N {
  constructor() {
    super(...arguments), this.type = "clipPath";
  }
  apply(e) {
    var {
      document: t
    } = this, r = Reflect.getPrototypeOf(e), {
      beginPath: i,
      closePath: n
    } = e;
    r && (r.beginPath = No, r.closePath = No), Reflect.apply(i, e, []), this.children.forEach((o) => {
      if (!(typeof o.path > "u")) {
        var s = typeof o.elementTransform < "u" ? o.elementTransform() : null;
        s || (s = Le.fromElement(t, o)), s && s.apply(e), o.path(e), r && (r.closePath = n), s && s.unapply(e);
      }
    }), Reflect.apply(n, e, []), e.clip(), r && (r.beginPath = i, r.closePath = n);
  }
  render(e) {
  }
}
class kr extends N {
  constructor() {
    super(...arguments), this.type = "filter";
  }
  apply(e, t) {
    var {
      document: r,
      children: i
    } = this, n = t.getBoundingBox(e);
    if (n) {
      var o = 0, s = 0;
      i.forEach((y) => {
        var x = y.extraFilterDistance || 0;
        o = Math.max(o, x), s = Math.max(s, x);
      });
      var u = Math.floor(n.width), l = Math.floor(n.height), h = u + 2 * o, f = l + 2 * s;
      if (!(h < 1 || f < 1)) {
        var c = Math.floor(n.x), v = Math.floor(n.y), d = this.removeStyles(t, kr.ignoreStyles), g = r.createCanvas(h, f), p = g.getContext("2d");
        r.screen.setDefaults(p), p.translate(-c + o, -v + s), t.render(p), i.forEach((y) => {
          typeof y.apply == "function" && y.apply(p, 0, 0, h, f);
        }), e.drawImage(g, 0, 0, h, f, c - o, v - s, h, f), this.restoreStyles(t, d);
      }
    }
  }
  render(e) {
  }
}
kr.ignoreStyles = ["filter", "transform", "clip-path"];
class X1 extends N {
  constructor(e, t, r) {
    super(e, t, r), this.type = "feDropShadow", this.addStylesFromStyleDefinition();
  }
  apply(e, t, r, i, n) {
  }
}
class W1 extends N {
  constructor() {
    super(...arguments), this.type = "feMorphology";
  }
  apply(e, t, r, i, n) {
  }
}
class q1 extends N {
  constructor() {
    super(...arguments), this.type = "feComposite";
  }
  apply(e, t, r, i, n) {
  }
}
class Q1 extends N {
  constructor(e, t, r) {
    super(e, t, r), this.type = "feGaussianBlur", this.blurRadius = Math.floor(this.getAttribute("stdDeviation").getNumber()), this.extraFilterDistance = this.blurRadius;
  }
  apply(e, t, r, i, n) {
    var {
      document: o,
      blurRadius: s
    } = this, u = o.window ? o.window.document.body : null, l = e.canvas;
    l.id = o.getUniqueId(), u && (l.style.display = "none", u.appendChild(l)), Gb(l, t, r, i, n, s), u && u.removeChild(l);
  }
}
class K1 extends N {
  constructor() {
    super(...arguments), this.type = "title";
  }
}
class Z1 extends N {
  constructor() {
    super(...arguments), this.type = "desc";
  }
}
var J1 = {
  svg: It,
  rect: xl,
  circle: S1,
  ellipse: E1,
  line: $1,
  polyline: Tl,
  polygon: w1,
  path: A,
  pattern: C1,
  marker: A1,
  defs: P1,
  linearGradient: R1,
  radialGradient: N1,
  stop: I1,
  animate: nn,
  animateColor: M1,
  animateTransform: _1,
  font: V1,
  "font-face": D1,
  "missing-glyph": k1,
  glyph: bl,
  text: Ce,
  tspan: Vr,
  tref: L1,
  a: B1,
  textPath: j1,
  image: U1,
  g: an,
  symbol: G1,
  style: Sl,
  use: H1,
  mask: Dr,
  clipPath: Y1,
  filter: kr,
  feDropShadow: X1,
  feMorphology: W1,
  feComposite: q1,
  feColorMatrix: El,
  feGaussianBlur: Q1,
  title: K1,
  desc: Z1
};
function Io(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(a, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function e2(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Io(Object(t), !0).forEach(function(r) {
      tn(a, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : Io(Object(t)).forEach(function(r) {
      Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a;
}
function t2(a, e) {
  var t = document.createElement("canvas");
  return t.width = a, t.height = e, t;
}
function r2(a) {
  return xi.apply(this, arguments);
}
function xi() {
  return xi = xe(function* (a) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = document.createElement("img");
    return e && (t.crossOrigin = "Anonymous"), new Promise((r, i) => {
      t.onload = () => {
        r(t);
      }, t.onerror = (n, o, s, u, l) => {
        i(l);
      }, t.src = a;
    });
  }), xi.apply(this, arguments);
}
class $e {
  constructor(e) {
    var {
      rootEmSize: t = 12,
      emSize: r = 12,
      createCanvas: i = $e.createCanvas,
      createImage: n = $e.createImage,
      anonymousCrossOrigin: o
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.canvg = e, this.definitions = {}, this.styles = {}, this.stylesSpecificity = {}, this.images = [], this.fonts = [], this.emSizeStack = [], this.uniqueId = 0, this.screen = e.screen, this.rootEmSize = t, this.emSize = r, this.createCanvas = i, this.createImage = this.bindCreateImage(n, o), this.screen.wait(this.isImagesLoaded.bind(this)), this.screen.wait(this.isFontsLoaded.bind(this));
  }
  bindCreateImage(e, t) {
    return typeof t == "boolean" ? (r, i) => e(r, typeof i == "boolean" ? i : t) : e;
  }
  get window() {
    return this.screen.window;
  }
  get fetch() {
    return this.screen.fetch;
  }
  get ctx() {
    return this.screen.ctx;
  }
  get emSize() {
    var {
      emSizeStack: e
    } = this;
    return e[e.length - 1];
  }
  set emSize(e) {
    var {
      emSizeStack: t
    } = this;
    t.push(e);
  }
  popEmSize() {
    var {
      emSizeStack: e
    } = this;
    e.pop();
  }
  getUniqueId() {
    return "canvg".concat(++this.uniqueId);
  }
  isImagesLoaded() {
    return this.images.every((e) => e.loaded);
  }
  isFontsLoaded() {
    return this.fonts.every((e) => e.loaded);
  }
  createDocumentElement(e) {
    var t = this.createElement(e.documentElement);
    return t.root = !0, t.addStylesFromStyleDefinition(), this.documentElement = t, t;
  }
  createElement(e) {
    var t = e.nodeName.replace(/^[^:]+:/, ""), r = $e.elementTypes[t];
    return typeof r < "u" ? new r(this, e) : new y1(this, e);
  }
  createTextNode(e) {
    return new O1(this, e);
  }
  setViewBox(e) {
    this.screen.setViewBox(e2({
      document: this
    }, e));
  }
}
$e.createCanvas = t2;
$e.createImage = r2;
$e.elementTypes = J1;
function Mo(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(a, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ve(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Mo(Object(t), !0).forEach(function(r) {
      tn(a, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : Mo(Object(t)).forEach(function(r) {
      Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a;
}
class bt {
  /**
   * Main constructor.
   * @param ctx - Rendering context.
   * @param svg - SVG Document.
   * @param options - Rendering options.
   */
  constructor(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.parser = new Ga(r), this.screen = new _r(e, r), this.options = r;
    var i = new $e(this, r), n = i.createDocumentElement(t);
    this.document = i, this.documentElement = n;
  }
  /**
   * Create Canvg instance from SVG source string or URL.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  static from(e, t) {
    var r = arguments;
    return xe(function* () {
      var i = r.length > 2 && r[2] !== void 0 ? r[2] : {}, n = new Ga(i), o = yield n.parse(t);
      return new bt(e, o, i);
    })();
  }
  /**
   * Create Canvg instance from SVG source string.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  static fromString(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = new Ga(r), n = i.parseFromString(t);
    return new bt(e, n, r);
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string or URL.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  fork(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return bt.from(e, t, Ve(Ve({}, this.options), r));
  }
  /**
   * Create new Canvg instance with inherited options.
   * @param ctx - Rendering context.
   * @param svg - SVG source string.
   * @param options - Rendering options.
   * @returns Canvg instance.
   */
  forkString(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return bt.fromString(e, t, Ve(Ve({}, this.options), r));
  }
  /**
   * Document is ready promise.
   * @returns Ready promise.
   */
  ready() {
    return this.screen.ready();
  }
  /**
   * Document is ready value.
   * @returns Is ready or not.
   */
  isReady() {
    return this.screen.isReady();
  }
  /**
   * Render only first frame, ignoring animations and mouse.
   * @param options - Rendering options.
   */
  render() {
    var e = arguments, t = this;
    return xe(function* () {
      var r = e.length > 0 && e[0] !== void 0 ? e[0] : {};
      t.start(Ve({
        enableRedraw: !0,
        ignoreAnimation: !0,
        ignoreMouse: !0
      }, r)), yield t.ready(), t.stop();
    })();
  }
  /**
   * Start rendering.
   * @param options - Render options.
   */
  start() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
      documentElement: t,
      screen: r,
      options: i
    } = this;
    r.start(t, Ve(Ve({
      enableRedraw: !0
    }, i), e));
  }
  /**
   * Stop rendering.
   */
  stop() {
    this.screen.stop();
  }
  /**
   * Resize SVG to fit in given size.
   * @param width
   * @param height
   * @param preserveAspectRatio
   */
  resize(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    this.documentElement.resize(e, t, r);
  }
}
export {
  B1 as AElement,
  M1 as AnimateColorElement,
  nn as AnimateElement,
  _1 as AnimateTransformElement,
  ce as BoundingBox,
  So as CB1,
  Eo as CB2,
  $o as CB3,
  wo as CB4,
  bt as Canvg,
  S1 as CircleElement,
  Y1 as ClipPathElement,
  P1 as DefsElement,
  Z1 as DescElement,
  $e as Document,
  N as Element,
  E1 as EllipseElement,
  El as FeColorMatrixElement,
  q1 as FeCompositeElement,
  X1 as FeDropShadowElement,
  Q1 as FeGaussianBlurElement,
  W1 as FeMorphologyElement,
  kr as FilterElement,
  Z as Font,
  V1 as FontElement,
  D1 as FontFaceElement,
  an as GElement,
  bl as GlyphElement,
  Ol as GradientElement,
  U1 as ImageElement,
  $1 as LineElement,
  R1 as LinearGradientElement,
  A1 as MarkerElement,
  Dr as MaskElement,
  yl as Matrix,
  k1 as MissingGlyphElement,
  o1 as Mouse,
  at as PSEUDO_ZERO,
  Ga as Parser,
  A as PathElement,
  w as PathParser,
  C1 as PatternElement,
  D as Point,
  w1 as PolygonElement,
  Tl as PolylineElement,
  S as Property,
  Co as QB1,
  Ao as QB2,
  Po as QB3,
  N1 as RadialGradientElement,
  xl as RectElement,
  Ge as RenderedElement,
  v1 as Rotate,
  It as SVGElement,
  z1 as SVGFontLoader,
  f1 as Scale,
  _r as Screen,
  ml as Skew,
  c1 as SkewX,
  g1 as SkewY,
  I1 as StopElement,
  Sl as StyleElement,
  G1 as SymbolElement,
  L1 as TRefElement,
  Vr as TSpanElement,
  Ce as TextElement,
  j1 as TextPathElement,
  K1 as TitleElement,
  Le as Transform,
  h1 as Translate,
  y1 as UnknownElement,
  H1 as UseElement,
  s1 as ViewPort,
  ht as compressSpaces,
  bt as default,
  n1 as getSelectorSpecificity,
  Qb as normalizeAttributeName,
  Kb as normalizeColor,
  gl as parseExternalUrl,
  i2 as presets,
  ie as toNumbers,
  Xb as trimLeft,
  Wb as trimRight,
  To as vectorMagnitude,
  Oo as vectorsAngle,
  bi as vectorsRatio
};
//# sourceMappingURL=index.es-Cu7D3BVX.mjs.map
