// RAIN






// COUNTDOWN
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);


// MAIN JS
! function() {
    var n, t;
    (function() { t = {} }).call(this),
        function() {
            (function() {
                var n = this,
                    r = n._,
                    e = {},
                    u = Array.prototype,
                    i = Object.prototype,
                    a = Function.prototype,
                    o = u.push,
                    c = u.slice,
                    l = u.concat,
                    f = i.toString,
                    s = i.hasOwnProperty,
                    p = u.forEach,
                    v = u.map,
                    h = u.reduce,
                    d = u.reduceRight,
                    g = u.filter,
                    m = u.every,
                    y = u.some,
                    b = u.indexOf,
                    _ = u.lastIndexOf,
                    w = Array.isArray,
                    x = Object.keys,
                    j = a.bind,
                    A = function(n) {
                        return n instanceof A ? n : this instanceof A ? void(this._wrapped = n) : new A(n) }; "undefined" != typeof t ? ("undefined" != typeof module && module.exports && (t = module.exports = A), t._ = A) : n._ = A, A.VERSION = "1.5.2";
                var k = function(n) {
                    return "[object Arguments]" === f.call(n) };
                k(arguments) || (k = function(n) {
                    return !(!n || !s.call(n, "callee") || "function" != typeof n.callee) });
                var O = function(n) {
                        return n.length === +n.length && (k(n) || n.constructor !== Object) },
                    E = A.each = A.forEach = function(n, t, r) {
                        if (null != n)
                            if (p && n.forEach === p) n.forEach(t, r);
                            else if (O(n)) {
                            for (var u = 0, i = n.length; i > u; u++)
                                if (t.call(r, n[u], u, n) === e) return } else
                            for (var a = A.keys(n), u = 0, i = a.length; i > u; u++)
                                if (t.call(r, n[a[u]], a[u], n) === e) return };
                A.map = A.collect = function(n, t, r) {
                    var e = [];
                    return null == n ? e : v && n.map === v ? n.map(t, r) : (E(n, function(n, u, i) { e.push(t.call(r, n, u, i)) }), e) };
                var F = "Reduce of empty array with no initial value";
                A.reduce = A.foldl = A.inject = function(n, t, r, e) {
                    var u = arguments.length > 2;
                    if (null == n && (n = []), h && n.reduce === h) return e && (t = A.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
                    if (E(n, function(n, i, a) { u ? r = t.call(e, r, n, i, a) : (r = n, u = !0) }), !u) throw new TypeError(F);
                    return r }, A.reduceRight = A.foldr = function(n, t, r, e) {
                    var u = arguments.length > 2;
                    if (null == n && (n = []), d && n.reduceRight === d) return e && (t = A.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
                    var i = n.length;
                    if (!O(n)) {
                        var a = A.keys(n);
                        i = a.length }
                    if (E(n, function(o, c, l) { c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0) }), !u) throw new TypeError(F);
                    return r }, A.find = A.detect = function(n, t, r) {
                    var e;
                    return M(n, function(n, u, i) {
                        return t.call(r, n, u, i) ? (e = n, !0) : void 0 }), e }, A.filter = A.select = function(n, t, r) {
                    var e = [];
                    return null == n ? e : g && n.filter === g ? n.filter(t, r) : (E(n, function(n, u, i) { t.call(r, n, u, i) && e.push(n) }), e) }, A.reject = function(n, t, r) {
                    return A.filter(n, function(n, e, u) {
                        return !t.call(r, n, e, u) }, r) }, A.every = A.all = function(n, t, r) { t || (t = A.identity);
                    var u = !0;
                    return null == n ? u : m && n.every === m ? n.every(t, r) : (E(n, function(n, i, a) {
                        return (u = u && t.call(r, n, i, a)) ? void 0 : e }), !!u) };
                var M = A.some = A.any = function(n, t, r) { t || (t = A.identity);
                    var u = !1;
                    return null == n ? u : y && n.some === y ? n.some(t, r) : (E(n, function(n, i, a) {
                        return u || (u = t.call(r, n, i, a)) ? e : void 0 }), !!u) };
                A.contains = A.include = function(n, t) {
                    return null == n ? !1 : b && n.indexOf === b ? -1 != n.indexOf(t) : M(n, function(n) {
                        return n === t }) }, A.invoke = function(n, t) {
                    var r = c.call(arguments, 2),
                        e = A.isFunction(t);
                    return A.map(n, function(n) {
                        return (e ? t : n[t]).apply(n, r) }) }, A.pluck = function(n, t) {
                    return A.map(n, function(n) {
                        return n[t] }) }, A.where = function(n, t, r) {
                    return A.isEmpty(t) ? r ? void 0 : [] : A[r ? "find" : "filter"](n, function(n) {
                        for (var r in t)
                            if (t[r] !== n[r]) return !1;
                        return !0 }) }, A.findWhere = function(n, t) {
                    return A.where(n, t, !0) }, A.max = function(n, t, r) {
                    if (!t && A.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n);
                    if (!t && A.isEmpty(n)) return -(1 / 0);
                    var e = { computed: -(1 / 0), value: -(1 / 0) };
                    return E(n, function(n, u, i) {
                        var a = t ? t.call(r, n, u, i) : n;
                        a > e.computed && (e = { value: n, computed: a }) }), e.value }, A.min = function(n, t, r) {
                    if (!t && A.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n);
                    if (!t && A.isEmpty(n)) return 1 / 0;
                    var e = { computed: 1 / 0, value: 1 / 0 };
                    return E(n, function(n, u, i) {
                        var a = t ? t.call(r, n, u, i) : n;
                        a < e.computed && (e = { value: n, computed: a }) }), e.value }, A.shuffle = function(n) {
                    var t, r = 0,
                        e = [];
                    return E(n, function(n) { t = A.random(r++), e[r - 1] = e[t], e[t] = n }), e }, A.sample = function(n, t, r) {
                    return arguments.length < 2 || r ? n[A.random(n.length - 1)] : A.shuffle(n).slice(0, Math.max(0, t)) };
                var R = function(n) {
                    return A.isFunction(n) ? n : function(t) {
                        return t[n] } };
                A.sortBy = function(n, t, r) {
                    var e = R(t);
                    return A.pluck(A.map(n, function(n, t, u) {
                        return { value: n, index: t, criteria: e.call(r, n, t, u) } }).sort(function(n, t) {
                        var r = n.criteria,
                            e = t.criteria;
                        if (r !== e) {
                            if (r > e || void 0 === r) return 1;
                            if (e > r || void 0 === e) return -1 }
                        return n.index - t.index }), "value") };
                var S = function(n) {
                    return function(t, r, e) {
                        var u = {},
                            i = null == r ? A.identity : R(r);
                        return E(t, function(r, a) {
                            var o = i.call(e, r, a, t);
                            n(u, o, r) }), u } };
                A.groupBy = S(function(n, t, r) {
                    (A.has(n, t) ? n[t] : n[t] = []).push(r) }), A.indexBy = S(function(n, t, r) { n[t] = r }), A.countBy = S(function(n, t) { A.has(n, t) ? n[t]++ : n[t] = 1 }), A.sortedIndex = function(n, t, r, e) { r = null == r ? A.identity : R(r);
                    for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
                        var o = i + a >>> 1;
                        r.call(e, n[o]) < u ? i = o + 1 : a = o }
                    return i }, A.toArray = function(n) {
                    return n ? A.isArray(n) ? c.call(n) : O(n) ? A.map(n, A.identity) : A.values(n) : [] }, A.size = function(n) {
                    return null == n ? 0 : O(n) ? n.length : A.keys(n).length }, A.first = A.head = A.take = function(n, t, r) {
                    return null == n ? void 0 : null == t || r ? n[0] : c.call(n, 0, t) }, A.initial = function(n, t, r) {
                    return c.call(n, 0, n.length - (null == t || r ? 1 : t)) }, A.last = function(n, t, r) {
                    return null == n ? void 0 : null == t || r ? n[n.length - 1] : c.call(n, Math.max(n.length - t, 0)) }, A.rest = A.tail = A.drop = function(n, t, r) {
                    return c.call(n, null == t || r ? 1 : t) }, A.compact = function(n) {
                    return A.filter(n, A.identity) };
                var I = function(n, t, r) {
                    return t && A.every(n, A.isArray) ? l.apply(r, n) : (E(n, function(n) { A.isArray(n) || A.isArguments(n) ? t ? o.apply(r, n) : I(n, t, r) : r.push(n) }), r) };
                A.flatten = function(n, t) {
                    return I(n, t, []) }, A.without = function(n) {
                    return A.difference(n, c.call(arguments, 1)) }, A.uniq = A.unique = function(n, t, r, e) { A.isFunction(t) && (e = r, r = t, t = !1);
                    var u = r ? A.map(n, r, e) : n,
                        i = [],
                        a = [];
                    return E(u, function(r, e) {
                        (t ? e && a[a.length - 1] === r : A.contains(a, r)) || (a.push(r), i.push(n[e])) }), i }, A.union = function() {
                    return A.uniq(A.flatten(arguments, !0)) }, A.intersection = function(n) {
                    var t = c.call(arguments, 1);
                    return A.filter(A.uniq(n), function(n) {
                        return A.every(t, function(t) {
                            return A.indexOf(t, n) >= 0 }) }) }, A.difference = function(n) {
                    var t = l.apply(u, c.call(arguments, 1));
                    return A.filter(n, function(n) {
                        return !A.contains(t, n) }) }, A.zip = function() {
                    for (var n = A.max(A.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++) t[r] = A.pluck(arguments, "" + r);
                    return t }, A.object = function(n, t) {
                    if (null == n) return {};
                    for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
                    return r }, A.indexOf = function(n, t, r) {
                    if (null == n) return -1;
                    var e = 0,
                        u = n.length;
                    if (r) {
                        if ("number" != typeof r) return e = A.sortedIndex(n, t), n[e] === t ? e : -1;
                        e = 0 > r ? Math.max(0, u + r) : r }
                    if (b && n.indexOf === b) return n.indexOf(t, r);
                    for (; u > e; e++)
                        if (n[e] === t) return e;
                    return -1 }, A.lastIndexOf = function(n, t, r) {
                    if (null == n) return -1;
                    var e = null != r;
                    if (_ && n.lastIndexOf === _) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
                    for (var u = e ? r : n.length; u--;)
                        if (n[u] === t) return u;
                    return -1 }, A.range = function(n, t, r) { arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
                    for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;) i[u++] = n, n += r;
                    return i };
                var T = function() {};
                A.bind = function(n, t) {
                    var r, e;
                    if (j && n.bind === j) return j.apply(n, c.call(arguments, 1));
                    if (!A.isFunction(n)) throw new TypeError;
                    return r = c.call(arguments, 2), e = function() {
                        if (!(this instanceof e)) return n.apply(t, r.concat(c.call(arguments)));
                        T.prototype = n.prototype;
                        var u = new T;
                        T.prototype = null;
                        var i = n.apply(u, r.concat(c.call(arguments)));
                        return Object(i) === i ? i : u } }, A.partial = function(n) {
                    var t = c.call(arguments, 1);
                    return function() {
                        return n.apply(this, t.concat(c.call(arguments))) } }, A.bindAll = function(n) {
                    var t = c.call(arguments, 1);
                    if (0 === t.length) throw new Error("bindAll must be passed function names");
                    return E(t, function(t) { n[t] = A.bind(n[t], n) }), n }, A.memoize = function(n, t) {
                    var r = {};
                    return t || (t = A.identity),
                        function() {
                            var e = t.apply(this, arguments);
                            return A.has(r, e) ? r[e] : r[e] = n.apply(this, arguments) } }, A.delay = function(n, t) {
                    var r = c.call(arguments, 2);
                    return setTimeout(function() {
                        return n.apply(null, r) }, t) }, A.defer = function(n) {
                    return A.delay.apply(A, [n, 1].concat(c.call(arguments, 1))) }, A.throttle = function(n, t, r) {
                    var e, u, i, a = null,
                        o = 0;
                    r || (r = {});
                    var c = function() { o = r.leading === !1 ? 0 : new Date, a = null, i = n.apply(e, u) };
                    return function() {
                        var l = new Date;
                        o || r.leading !== !1 || (o = l);
                        var f = t - (l - o);
                        return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)) : a || r.trailing === !1 || (a = setTimeout(c, f)), i } }, A.debounce = function(n, t, r) {
                    var e, u, i, a, o;
                    return function() { i = this, u = arguments, a = new Date;
                        var c = function() {
                                var l = new Date - a;
                                t > l ? e = setTimeout(c, t - l) : (e = null, r || (o = n.apply(i, u))) },
                            l = r && !e;
                        return e || (e = setTimeout(c, t)), l && (o = n.apply(i, u)), o } }, A.once = function(n) {
                    var t = !1,
                        r;
                    return function() {
                        return t ? r : (t = !0, r = n.apply(this, arguments), n = null, r) } }, A.wrap = function(n, t) {
                    return function() {
                        var r = [n];
                        return o.apply(r, arguments), t.apply(this, r) } }, A.compose = function() {
                    var n = arguments;
                    return function() {
                        for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
                        return t[0] } }, A.after = function(n, t) {
                    return function() {
                        return --n < 1 ? t.apply(this, arguments) : void 0 } }, A.keys = x || function(n) {
                    if (n !== Object(n)) throw new TypeError("Invalid object");
                    var t = [];
                    for (var r in n) A.has(n, r) && t.push(r);
                    return t }, A.values = function(n) {
                    for (var t = A.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
                    return e }, A.pairs = function(n) {
                    for (var t = A.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
                    return e }, A.invert = function(n) {
                    for (var t = {}, r = A.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
                    return t }, A.functions = A.methods = function(n) {
                    var t = [];
                    for (var r in n) A.isFunction(n[r]) && t.push(r);
                    return t.sort() }, A.extend = function(n) {
                    return E(c.call(arguments, 1), function(t) {
                        if (t)
                            for (var r in t) n[r] = t[r] }), n }, A.pick = function(n) {
                    var t = {},
                        r = l.apply(u, c.call(arguments, 1));
                    return E(r, function(r) { r in n && (t[r] = n[r]) }), t }, A.omit = function(n) {
                    var t = {},
                        r = l.apply(u, c.call(arguments, 1));
                    for (var e in n) A.contains(r, e) || (t[e] = n[e]);
                    return t }, A.defaults = function(n) {
                    return E(c.call(arguments, 1), function(t) {
                        if (t)
                            for (var r in t) void 0 === n[r] && (n[r] = t[r]) }), n }, A.clone = function(n) {
                    return A.isObject(n) ? A.isArray(n) ? n.slice() : A.extend({}, n) : n }, A.tap = function(n, t) {
                    return t(n), n };
                var N = function(n, t, r, e) {
                    if (n === t) return 0 !== n || 1 / n == 1 / t;
                    if (null == n || null == t) return n === t;
                    n instanceof A && (n = n._wrapped), t instanceof A && (t = t._wrapped);
                    var u = f.call(n);
                    if (u != f.call(t)) return !1;
                    switch (u) {
                        case "[object String]":
                            return n == String(t);
                        case "[object Number]":
                            return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
                        case "[object Date]":
                        case "[object Boolean]":
                            return +n == +t;
                        case "[object RegExp]":
                            return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase }
                    if ("object" != typeof n || "object" != typeof t) return !1;
                    for (var i = r.length; i--;)
                        if (r[i] == n) return e[i] == t;
                    var a = n.constructor,
                        o = t.constructor;
                    if (a !== o && !(A.isFunction(a) && a instanceof a && A.isFunction(o) && o instanceof o)) return !1;
                    r.push(n), e.push(t);
                    var c = 0,
                        l = !0;
                    if ("[object Array]" == u) {
                        if (c = n.length, l = c == t.length)
                            for (; c-- && (l = N(n[c], t[c], r, e));); } else {
                        for (var s in n)
                            if (A.has(n, s) && (c++, !(l = A.has(t, s) && N(n[s], t[s], r, e)))) break;
                        if (l) {
                            for (s in t)
                                if (A.has(t, s) && !c--) break;
                            l = !c } }
                    return r.pop(), e.pop(), l };
                A.isEqual = function(n, t) {
                    return N(n, t, [], []) }, A.isEmpty = function(n) {
                    if (null == n) return !0;
                    if (A.isArray(n) || A.isString(n)) return 0 === n.length;
                    for (var t in n)
                        if (A.has(n, t)) return !1;
                    return !0 }, A.isElement = function(n) {
                    return !(!n || 1 !== n.nodeType) }, A.isArray = w || function(n) {
                    return "[object Array]" == f.call(n) }, A.isObject = function(n) {
                    return n === Object(n) }, E(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) { A["is" + n] = function(t) {
                        return f.call(t) == "[object " + n + "]" } }), A.isArguments(arguments) || (A.isArguments = function(n) {
                    return !(!n || !A.has(n, "callee")) }), "function" != typeof /./ && (A.isFunction = function(n) {
                    return "function" == typeof n }), A.isFinite = function(n) {
                    return isFinite(n) && !isNaN(parseFloat(n)) }, A.isNaN = function(n) {
                    return A.isNumber(n) && n != +n }, A.isBoolean = function(n) {
                    return n === !0 || n === !1 || "[object Boolean]" == f.call(n) }, A.isNull = function(n) {
                    return null === n }, A.isUndefined = function(n) {
                    return void 0 === n }, A.has = function(n, t) {
                    return s.call(n, t) }, A.noConflict = function() {
                    return n._ = r, this }, A.identity = function(n) {
                    return n }, A.times = function(n, t, r) {
                    for (var e = Array(Math.max(0, n)), u = 0; n > u; u++) e[u] = t.call(r, u);
                    return e }, A.random = function(n, t) {
                    return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1)) };
                var q = { escape: { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;" } };
                q.unescape = A.invert(q.escape);
                var B = { escape: new RegExp("[" + A.keys(q.escape).join("") + "]", "g"), unescape: new RegExp("(" + A.keys(q.unescape).join("|") + ")", "g") };
                A.each(["escape", "unescape"], function(n) { A[n] = function(t) {
                        return null == t ? "" : ("" + t).replace(B[n], function(t) {
                            return q[n][t] }) } }), A.result = function(n, t) {
                    if (null == n) return void 0;
                    var r = n[t];
                    return A.isFunction(r) ? r.call(n) : r }, A.mixin = function(n) { E(A.functions(n), function(t) {
                        var r = A[t] = n[t];
                        A.prototype[t] = function() {
                            var n = [this._wrapped];
                            return o.apply(n, arguments), U.call(this, r.apply(A, n)) } }) };
                var D = 0;
                A.uniqueId = function(n) {
                    var t = ++D + "";
                    return n ? n + t : t }, A.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
                var P = /(.)^/,
                    z = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "	": "t", "\u2028": "u2028", "\u2029": "u2029" },
                    C = /\\|'|\r|\n|\t|\u2028|\u2029/g;
                A.template = function(n, t, r) {
                    var e;
                    r = A.defaults({}, r, A.templateSettings);
                    var u = new RegExp([(r.escape || P).source, (r.interpolate || P).source, (r.evaluate || P).source].join("|") + "|$", "g"),
                        i = 0,
                        a = "__p+='";
                    n.replace(u, function(t, r, e, u, o) {
                        return a += n.slice(i, o).replace(C, function(n) {
                            return "\\" + z[n] }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
                    try { e = new Function(r.variable || "obj", "_", a) } catch (o) {
                        throw o.source = a, o }
                    if (t) return e(t, A);
                    var c = function(n) {
                        return e.call(this, n, A) };
                    return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c }, A.chain = function(n) {
                    return A(n).chain() };
                var U = function(n) {
                    return this._chain ? A(n).chain() : n };
                A.mixin(A), E(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
                    var t = u[n];
                    A.prototype[n] = function() {
                        var r = this._wrapped;
                        return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], U.call(this, r) } }), E(["concat", "join", "slice"], function(n) {
                    var t = u[n];
                    A.prototype[n] = function() {
                        return U.call(this, t.apply(this._wrapped, arguments)) } }), A.extend(A.prototype, { chain: function() {
                        return this._chain = !0, this }, value: function() {
                        return this._wrapped } }) }).call(this) }.call(this),
        function() { n = t._ }.call(this), "undefined" == typeof Package && (Package = {}), Package.underscore = { _: n } }();

! function() {
    var t = Package.underscore._,
        e;
    (function() { e = { isClient: !0, isServer: !1, isCordova: !1 }, "object" == typeof __meteor_runtime_config__ && __meteor_runtime_config__.PUBLIC_SETTINGS && (e.settings = { "public": __meteor_runtime_config__.PUBLIC_SETTINGS }) }).call(this),
        function() {
            function n(t) {
                return t ? e._debug("Exception in callback of async function", t.stack ? t.stack : t) : void 0 }
            if (e.isServer) var r = Npm.require("fibers/future"); "object" == typeof __meteor_runtime_config__ && __meteor_runtime_config__.meteorRelease && (e.release = __meteor_runtime_config__.meteorRelease), t.extend(e, { _get: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        if (!(arguments[e] in t)) return void 0;
                        t = t[arguments[e]] }
                    return t }, _ensure: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        n in t || (t[n] = {}), t = t[n] }
                    return t }, _delete: function(t) {
                    for (var e = [t], n = !0, r = 1; r < arguments.length - 1; r++) {
                        var o = arguments[r];
                        if (!(o in t)) { n = !1;
                            break }
                        if (t = t[o], "object" != typeof t) break;
                        e.push(t) }
                    for (var r = e.length - 1; r >= 0; r--) {
                        var o = arguments[r + 1];
                        if (n) n = !1;
                        else
                            for (var i in e[r][o]) return;
                        delete e[r][o] } }, wrapAsync: function(o, i) {
                    return function() {
                        for (var a = i || this, u = t.toArray(arguments), s, c = u.length - 1; c >= 0; --c) {
                            var l = u[c],
                                f = typeof l;
                            if ("undefined" !== f) { "function" === f && (s = l);
                                break } }
                        if (!s) {
                            if (e.isClient) s = n;
                            else {
                                var _ = new r;
                                s = _.resolver() }++c }
                        u[c] = e.bindEnvironment(s);
                        var p = o.apply(a, u);
                        return _ ? _.wait() : p } }, _inherits: function(e, n) {
                    for (var r in n) t.has(n, r) && (e[r] = n[r]);
                    var o = function() { this.constructor = e };
                    return o.prototype = n.prototype, e.prototype = new o, e.__super__ = n.prototype, e } });
            var o = !1;
            e._wrapAsync = function(t, n) {
                return o || (e._debug("Meteor._wrapAsync has been renamed to Meteor.wrapAsync"), o = !0), e.wrapAsync.apply(e, arguments) } }.call(this),
        function() { "use strict";

            function t() {
                if (o.setImmediate) {
                    var t = function(t) { o.setImmediate(t) };
                    return t.implementation = "setImmediate", t }
                return null }

            function n() {
                function t(t, e) {
                    return "string" == typeof t && t.substring(0, e.length) === e }

                function e(e) {
                    if (e.source === o && t(e.data, u)) {
                        var n = e.data.substring(u.length);
                        try { a[n] && a[n]() } finally { delete a[n] } } }
                if (!o.postMessage || o.importScripts) return null;
                var n = !0,
                    r = o.onmessage;
                if (o.onmessage = function() { n = !1 }, o.postMessage("", "*"), o.onmessage = r, !n) return null;
                var i = 0,
                    a = {},
                    u = "Meteor._setImmediate." + Math.random() + ".";
                o.addEventListener ? o.addEventListener("message", e, !1) : o.attachEvent("onmessage", e);
                var s = function(t) {++i, a[i] = t, o.postMessage(u + i, "*") };
                return s.implementation = "postMessage", s }

            function r() {
                var t = function(t) { o.setTimeout(t, 0) };
                return t.implementation = "setTimeout", t }
            var o = this;
            e._setImmediate = t() || n() || r() }.call(this),
        function() {
            var n = function(t) {
                    if (Package.ddp) {
                        var e = Package.ddp.DDP._CurrentInvocation;
                        if (e.get() && e.get().isSimulation) throw new Error("Can't set timers inside simulations");
                        return function() { e.withValue(null, t) } }
                    return t },
                r = function(t, r) {
                    return e.bindEnvironment(n(r), t) };
            t.extend(e, { setTimeout: function(t, e) {
                    return setTimeout(r("setTimeout callback", t), e) }, setInterval: function(t, e) {
                    return setInterval(r("setInterval callback", t), e) }, clearInterval: function(t) {
                    return clearInterval(t) }, clearTimeout: function(t) {
                    return clearTimeout(t) }, defer: function(t) { e._setImmediate(r("defer callback", t)) } }) }.call(this),
        function() { e.makeErrorType = function(t, n) {
                var r = function() {
                    var e = this;
                    if (Error.captureStackTrace) Error.captureStackTrace(e, r);
                    else {
                        var o = new Error;
                        o.__proto__ = r.prototype, o instanceof r && (e = o) }
                    return n.apply(e, arguments), e.errorType = t, e };
                return e._inherits(r, Error), r }, e.Error = e.makeErrorType("Meteor.Error", function(t, e, n) {
                var r = this;
                r.error = t, r.reason = e, r.details = n, r.message = r.reason ? r.reason + " [" + r.error + "]" : "[" + r.error + "]" }), e.Error.prototype.clone = function() {
                var t = this;
                return new e.Error(t.error, t.reason, t.details) } }.call(this),
        function() { e._noYieldsAllowed = function(t) {
                return t() }, e._SynchronousQueue = function() {
                var t = this;
                t._tasks = [], t._running = !1, t._runTimeout = null }, t.extend(e._SynchronousQueue.prototype, { runTask: function(n) {
                    var r = this;
                    if (!r.safeToRunTask()) throw new Error("Could not synchronously run a task from a running task");
                    r._tasks.push(n);
                    var o = r._tasks;
                    r._tasks = [], r._running = !0, r._runTimeout && (clearTimeout(r._runTimeout), r._runTimeout = null);
                    try {
                        for (; !t.isEmpty(o);) {
                            var i = o.shift();
                            try { i() } catch (a) {
                                if (t.isEmpty(o)) throw a;
                                e._debug("Exception in queued task: " + a.stack) } } } finally { r._running = !1 } }, queueTask: function(e) {
                    var n = this;
                    n._tasks.push(e), n._runTimeout || (n._runTimeout = setTimeout(t.bind(n.flush, n), 0)) }, flush: function() {
                    var t = this;
                    t.runTask(function() {}) }, drain: function() {
                    var e = this;
                    if (e.safeToRunTask())
                        for (; !t.isEmpty(e._tasks);) e.flush() }, safeToRunTask: function() {
                    var t = this;
                    return !t._running } }) }.call(this),
        function() {
            var t = [],
                n = !e.isCordova && ("loaded" === document.readyState || "complete" == document.readyState),
                r = 1,
                o = function() {
                    if (r--, !(r > 0)) { n = !0;
                        var o = function() {
                            if (e.isCordova && (!cordova.plugins || !cordova.plugins.CordovaUpdate)) return void e.setTimeout(o, 20);
                            for (; t.length;) t.shift()() };
                        o() } };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", o, !1), e.isCordova && (r++, document.addEventListener("deviceready", o, !1)), window.addEventListener("load", o, !1)) : (document.attachEvent("onreadystatechange", function() { "complete" === document.readyState && o() }), window.attachEvent("load", o)), e.startup = function(r) {
                var o = !document.addEventListener && document.documentElement.doScroll;
                if (o && window === top) {
                    try { o("left") } catch (i) {
                        return void setTimeout(function() { e.startup(r) }, 50) }
                    r() } else n ? r() : t.push(r) } }.call(this),
        function() {
            var t = 0;
            e._debug = function() {
                if (t) return void t--;
                if ("undefined" != typeof console && "undefined" != typeof console.log)
                    if (0 == arguments.length) console.log("");
                    else if ("function" == typeof console.log.apply) {
                    for (var e = !0, n = 0; n < arguments.length; n++) "string" != typeof arguments[n] && (e = !1);
                    e ? console.log.apply(console, [Array.prototype.join.call(arguments, " ")]) : console.log.apply(console, arguments) } else if ("function" == typeof Function.prototype.bind) {
                    var r = Function.prototype.bind.call(console.log, console);
                    r.apply(console, arguments) } else Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)) }, e._suppress_log = function(e) { t += e }, e._supressed_log_expected = function() {
                return 0 !== t } }.call(this),
        function() {
            var n = 0,
                r = [];
            e.EnvironmentVariable = function() { this.slot = n++ }, t.extend(e.EnvironmentVariable.prototype, { get: function() {
                    return r[this.slot] }, getOrNullIfOutsideFiber: function() {
                    return this.get() }, withValue: function(t, e) {
                    var n = r[this.slot];
                    try { r[this.slot] = t;
                        var o = e() } finally { r[this.slot] = n }
                    return o } }), e.bindEnvironment = function(n, o, i) {
                var a = t.clone(r);
                if (!o || "string" == typeof o) {
                    var u = o || "callback of async function";
                    o = function(t) { e._debug("Exception in " + u + ":", t && t.stack || t) } }
                return function() {
                    var e = r;
                    try { r = a;
                        var u = n.apply(i, t.toArray(arguments)) } catch (s) { o(s) } finally { r = e }
                    return u } }, e._nodeCodeMustBeInFiber = function() {} }.call(this),
        function() { e.absoluteUrl = function(n, r) { r || "object" != typeof n || (r = n, n = void 0), r = t.extend({}, e.absoluteUrl.defaultOptions, r || {});
                var o = r.rootUrl;
                if (!o) throw new Error("Must pass options.rootUrl or set ROOT_URL in the server environment");
                return /^http[s]?:\/\//i.test(o) || (o = "http://" + o), /\/$/.test(o) || (o += "/"), n && (o += n), r.secure && /^http:/.test(o) && !/http:\/\/localhost[:\/]/.test(o) && !/http:\/\/127\.0\.0\.1[:\/]/.test(o) && (o = o.replace(/^http:/, "https:")), r.replaceLocalhost && (o = o.replace(/^http:\/\/localhost([:\/].*)/, "http://127.0.0.1$1")), o }, e.absoluteUrl.defaultOptions = {}, "object" == typeof __meteor_runtime_config__ && __meteor_runtime_config__.ROOT_URL && (e.absoluteUrl.defaultOptions.rootUrl = __meteor_runtime_config__.ROOT_URL), e._relativeToSiteRootUrl = function(t) {
                return "object" == typeof __meteor_runtime_config__ && "/" === t.substr(0, 1) && (t = (__meteor_runtime_config__.ROOT_URL_PATH_PREFIX || "") + t), t } }.call(this), "undefined" == typeof Package && (Package = {}), Package.meteor = { Meteor: e } }();

! function() {
    var Meteor = Package.meteor.Meteor,
        JSON;
    (function() { window.JSON && (JSON = window.JSON) }).call(this),
        function() { "object" != typeof JSON && (JSON = {}),
                function() { "use strict";

                    function f(t) {
                        return 10 > t ? "0" + t : t }

                    function quote(t) {
                        return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                            var e = meta[t];
                            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' }

                    function str(t, e) {
                        var n, r, o, f, u = gap,
                            i, a = e[t];
                        switch (a && "object" == typeof a && "function" == typeof a.toJSON && (a = a.toJSON(t)), "function" == typeof rep && (a = rep.call(e, t, a)), typeof a) {
                            case "string":
                                return quote(a);
                            case "number":
                                return isFinite(a) ? String(a) : "null";
                            case "boolean":
                            case "null":
                                return String(a);
                            case "object":
                                if (!a) return "null";
                                if (gap += indent, i = [], "[object Array]" === Object.prototype.toString.apply(a)) {
                                    for (f = a.length, n = 0; f > n; n += 1) i[n] = str(n, a) || "null";
                                    return o = 0 === i.length ? "[]" : gap ? "[\n" + gap + i.join(",\n" + gap) + "\n" + u + "]" : "[" + i.join(",") + "]", gap = u, o }
                                if (rep && "object" == typeof rep)
                                    for (f = rep.length, n = 0; f > n; n += 1) "string" == typeof rep[n] && (r = rep[n], o = str(r, a), o && i.push(quote(r) + (gap ? ": " : ":") + o));
                                else
                                    for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (o = str(r, a), o && i.push(quote(r) + (gap ? ": " : ":") + o));
                                return o = 0 === i.length ? "{}" : gap ? "{\n" + gap + i.join(",\n" + gap) + "\n" + u + "}" : "{" + i.join(",") + "}", gap = u, o } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(t) {
                        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(t) {
                        return this.valueOf() });
                    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        gap, indent, meta = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
                        rep; "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, n) {
                        var r;
                        if (gap = "", indent = "", "number" == typeof n)
                            for (r = 0; n > r; r += 1) indent += " ";
                        else "string" == typeof n && (indent = n);
                        if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
                        return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                        function walk(t, e) {
                            var n, r, o = t[e];
                            if (o && "object" == typeof o)
                                for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n), void 0 !== r ? o[n] = r : delete o[n]);
                            return reviver.call(t, e, o) }
                        var j;
                        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
                                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j;
                        throw new SyntaxError("JSON.parse") }) }() }.call(this), "undefined" == typeof Package && (Package = {}), Package.json = { JSON: JSON } }();

! function() {
    var n = Package.meteor.Meteor,
        r;
    (function() {
        for (var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = {}, a = 0; a < n.length; a++) e[n.charAt(a)] = a;
        r = {}, r.encode = function(n) {
            if ("string" == typeof n) {
                var e = n;
                n = r.newBinary(e.length);
                for (var a = 0; a < e.length; a++) {
                    var l = e.charCodeAt(a);
                    if (l > 255) throw new Error("Not ascii. Base64.encode can only take ascii strings.");
                    n[a] = l } }
            for (var u = [], i = null, o = null, c = null, s = null, a = 0; a < n.length; a++) switch (a % 3) {
                case 0:
                    i = n[a] >> 2 & 63, o = (3 & n[a]) << 4;
                    break;
                case 1:
                    o |= n[a] >> 4 & 15, c = (15 & n[a]) << 2;
                    break;
                case 2:
                    c |= n[a] >> 6 & 3, s = 63 & n[a], u.push(t(i)), u.push(t(o)), u.push(t(c)), u.push(t(s)), i = null, o = null, c = null, s = null }
            return null != i && (u.push(t(i)), u.push(t(o)), u.push(null == c ? "=" : t(c)), null == s && u.push("=")), u.join("") };
        var t = function(r) {
                return n.charAt(r) },
            l = function(n) {
                return "=" === n ? -1 : e[n] };
        r.newBinary = function(n) {
            if ("undefined" == typeof Uint8Array || "undefined" == typeof ArrayBuffer) {
                for (var r = [], e = 0; n > e; e++) r.push(0);
                return r.$Uint8ArrayPolyfill = !0, r }
            return new Uint8Array(new ArrayBuffer(n)) }, r.decode = function(n) {
            var e = Math.floor(3 * n.length / 4); "=" == n.charAt(n.length - 1) && (e--, "=" == n.charAt(n.length - 2) && e--);
            for (var a = r.newBinary(e), t = null, u = null, i = null, o = 0, c = 0; c < n.length; c++) {
                var s = n.charAt(c),
                    f = l(s);
                switch (c % 4) {
                    case 0:
                        if (0 > f) throw new Error("invalid base64 string");
                        t = f << 2;
                        break;
                    case 1:
                        if (0 > f) throw new Error("invalid base64 string");
                        t |= f >> 4, a[o++] = t, u = (15 & f) << 4;
                        break;
                    case 2:
                        f >= 0 && (u |= f >> 2, a[o++] = u, i = (3 & f) << 6);
                        break;
                    case 3:
                        f >= 0 && (a[o++] = i | f) } }
            return a } }).call(this), "undefined" == typeof Package && (Package = {}), Package.base64 = { Base64: r } }();

! function() {
    var n = Package.meteor.Meteor,
        e = Package.json.JSON,
        t = Package.underscore._,
        r = Package.base64.Base64,
        u, a;
    (function() { u = {}, a = {};
        var i = {};
        u.addType = function(n, e) {
            if (t.has(i, n)) throw new Error("Type " + n + " already present");
            i[n] = e };
        var o = function(n) {
                return t.isNaN(n) || n === 1 / 0 || n === -(1 / 0) },
            f = [{ matchJSONValue: function(n) {
                    return t.has(n, "$date") && 1 === t.size(n) }, matchObject: function(n) {
                    return n instanceof Date }, toJSONValue: function(n) {
                    return { $date: n.getTime() } }, fromJSONValue: function(n) {
                    return new Date(n.$date) } }, { matchJSONValue: function(n) {
                    return t.has(n, "$InfNaN") && 1 === t.size(n) }, matchObject: o, toJSONValue: function(n) {
                    var e;
                    return e = t.isNaN(n) ? 0 : n === 1 / 0 ? 1 : -1, { $InfNaN: e } }, fromJSONValue: function(n) {
                    return n.$InfNaN / 0 } }, { matchJSONValue: function(n) {
                    return t.has(n, "$binary") && 1 === t.size(n) }, matchObject: function(n) {
                    return "undefined" != typeof Uint8Array && n instanceof Uint8Array || n && t.has(n, "$Uint8ArrayPolyfill") }, toJSONValue: function(n) {
                    return { $binary: r.encode(n) } }, fromJSONValue: function(n) {
                    return r.decode(n.$binary) } }, { matchJSONValue: function(n) {
                    return t.has(n, "$escape") && 1 === t.size(n) }, matchObject: function(n) {
                    return t.isEmpty(n) || t.size(n) > 2 ? !1 : t.any(f, function(e) {
                        return e.matchJSONValue(n) }) }, toJSONValue: function(n) {
                    var e = {};
                    return t.each(n, function(n, t) { e[t] = u.toJSONValue(n) }), { $escape: e } }, fromJSONValue: function(n) {
                    var e = {};
                    return t.each(n.$escape, function(n, t) { e[t] = u.fromJSONValue(n) }), e } }, { matchJSONValue: function(n) {
                    return t.has(n, "$type") && t.has(n, "$value") && 2 === t.size(n) }, matchObject: function(n) {
                    return u._isCustomType(n) }, toJSONValue: function(e) {
                    var t = n._noYieldsAllowed(function() {
                        return e.toJSONValue() });
                    return { $type: e.typeName(), $value: t } }, fromJSONValue: function(e) {
                    var r = e.$type;
                    if (!t.has(i, r)) throw new Error("Custom EJSON type " + r + " is not defined");
                    var u = i[r];
                    return n._noYieldsAllowed(function() {
                        return u(e.$value) }) } }];
        u._isCustomType = function(n) {
            return n && "function" == typeof n.toJSONValue && "function" == typeof n.typeName && t.has(i, n.typeName()) };
        var c = u._adjustTypesToJSONValue = function(n) {
                if (null === n) return null;
                var e = l(n);
                return void 0 !== e ? e : "object" != typeof n ? n : (t.each(n, function(e, t) {
                    if ("object" == typeof e || void 0 === e || o(e)) {
                        var r = l(e);
                        return r ? void(n[t] = r) : void c(e) } }), n) },
            l = function(n) {
                for (var e = 0; e < f.length; e++) {
                    var t = f[e];
                    if (t.matchObject(n)) return t.toJSONValue(n) }
                return void 0 };
        u.toJSONValue = function(n) {
            var e = l(n);
            return void 0 !== e ? e : ("object" == typeof n && (n = u.clone(n), c(n)), n) };
        var s = u._adjustTypesFromJSONValue = function(n) {
                if (null === n) return null;
                var e = y(n);
                return e !== n ? e : "object" != typeof n ? n : (t.each(n, function(e, t) {
                    if ("object" == typeof e) {
                        var r = y(e);
                        if (e !== r) return void(n[t] = r);
                        s(e) } }), n) },
            y = function(n) {
                if ("object" == typeof n && null !== n && t.size(n) <= 2 && t.all(n, function(n, e) {
                        return "string" == typeof e && "$" === e.substr(0, 1) }))
                    for (var e = 0; e < f.length; e++) {
                        var r = f[e];
                        if (r.matchJSONValue(n)) return r.fromJSONValue(n) }
                return n };
        u.fromJSONValue = function(n) {
            var e = y(n);
            return e === n && "object" == typeof n ? (n = u.clone(n), s(n), n) : e }, u.stringify = function(n, t) {
            var r = u.toJSONValue(n);
            return t && (t.canonical || t.indent) ? u._canonicalStringify(r, t) : e.stringify(r) }, u.parse = function(n) {
            if ("string" != typeof n) throw new Error("EJSON.parse argument should be a string");
            return u.fromJSONValue(e.parse(n)) }, u.isBinary = function(n) {
            return !!("undefined" != typeof Uint8Array && n instanceof Uint8Array || n && n.$Uint8ArrayPolyfill) }, u.equals = function(n, e, r) {
            var a, i = !(!r || !r.keyOrderSensitive);
            if (n === e) return !0;
            if (t.isNaN(n) && t.isNaN(e)) return !0;
            if (!n || !e) return !1;
            if ("object" != typeof n || "object" != typeof e) return !1;
            if (n instanceof Date && e instanceof Date) return n.valueOf() === e.valueOf();
            if (u.isBinary(n) && u.isBinary(e)) {
                if (n.length !== e.length) return !1;
                for (a = 0; a < n.length; a++)
                    if (n[a] !== e[a]) return !1;
                return !0 }
            if ("function" == typeof n.equals) return n.equals(e, r);
            if ("function" == typeof e.equals) return e.equals(n, r);
            if (n instanceof Array) {
                if (!(e instanceof Array)) return !1;
                if (n.length !== e.length) return !1;
                for (a = 0; a < n.length; a++)
                    if (!u.equals(n[a], e[a], r)) return !1;
                return !0 }
            switch (u._isCustomType(n) + u._isCustomType(e)) {
                case 1:
                    return !1;
                case 2:
                    return u.equals(u.toJSONValue(n), u.toJSONValue(e)) }
            var o;
            if (i) {
                var f = [];
                return t.each(e, function(n, e) { f.push(e) }), a = 0, o = t.all(n, function(n, t) {
                    return a >= f.length ? !1 : t !== f[a] ? !1 : u.equals(n, e[f[a]], r) ? (a++, !0) : !1 }), o && a === f.length }
            return a = 0, o = t.all(n, function(n, i) {
                return t.has(e, i) && u.equals(n, e[i], r) ? (a++, !0) : !1 }), o && t.size(e) === a }, u.clone = function(n) {
            var e;
            if ("object" != typeof n) return n;
            if (null === n) return null;
            if (n instanceof Date) return new Date(n.getTime());
            if (n instanceof RegExp) return n;
            if (u.isBinary(n)) { e = u.newBinary(n.length);
                for (var r = 0; r < n.length; r++) e[r] = n[r];
                return e }
            if (t.isArray(n) || t.isArguments(n)) {
                for (e = [], r = 0; r < n.length; r++) e[r] = u.clone(n[r]);
                return e }
            return "function" == typeof n.clone ? n.clone() : u._isCustomType(n) ? u.fromJSONValue(u.clone(u.toJSONValue(n)), !0) : (e = {}, t.each(n, function(n, t) { e[t] = u.clone(n) }), e) }, u.newBinary = r.newBinary }).call(this),
        function() {
            function n(n) {
                return e.stringify(n) }
            var r = function(e, u, a, i, o) {
                var f, c, l, s, y = i,
                    h, N = u[e];
                switch (typeof N) {
                    case "string":
                        return n(N);
                    case "number":
                        return isFinite(N) ? String(N) : "null";
                    case "boolean":
                        return String(N);
                    case "object":
                        if (!N) return "null";
                        if (y = i + a, h = [], t.isArray(N) || t.isArguments(N)) {
                            for (s = N.length, f = 0; s > f; f += 1) h[f] = r(f, N, a, y, o) || "null";
                            return l = 0 === h.length ? "[]" : y ? "[\n" + y + h.join(",\n" + y) + "\n" + i + "]" : "[" + h.join(",") + "]" }
                        var p = t.keys(N);
                        return o && (p = p.sort()), t.each(p, function(e) { l = r(e, N, a, y, o), l && h.push(n(e) + (y ? ": " : ":") + l) }), l = 0 === h.length ? "{}" : y ? "{\n" + y + h.join(",\n" + y) + "\n" + i + "}" : "{" + h.join(",") + "}" } };
            u._canonicalStringify = function(n, e) {
                if (e = t.extend({ indent: "", canonical: !1 }, e), e.indent === !0) e.indent = "  ";
                else if ("number" == typeof e.indent) {
                    for (var u = "", a = 0; a < e.indent; a++) u += " ";
                    e.indent = u }
                return r("", { "": n }, e.indent, "", e.canonical) } }.call(this), "undefined" == typeof Package && (Package = {}), Package.ejson = { EJSON: u, EJSONTest: a } }();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.underscore._,
        r = Package.ejson.EJSON,
        n;
    (function() { n = function() {
            return n.info.apply(this, arguments) };
        var i = 0,
            o = [],
            a = 0;
        n._intercept = function(e) { i += e }, n._suppress = function(e) { a += e }, n._intercepted = function() {
            var e = o;
            return o = [], i = 0, e }, n.outputFormat = "json";
        var s = { debug: "green", warn: "magenta", error: "red" },
            l = "blue",
            c = ["time", "timeInexact", "level", "file", "line", "program", "originApp", "satellite", "stderr"],
            u = c.concat(["app", "message"]),
            g = function(t) {
                var r = n.format(t),
                    i = t.level; "undefined" != typeof console && console[i] ? console[i](r) : e._debug(r) };
        n._getCallerDetails = function() {
            var e = function() {
                    var e = new Error,
                        t = e.stack;
                    return t },
                t = e();
            if (!t) return {};
            for (var r = t.split("\n"), n, i = 1; i < r.length; ++i) {
                if (n = r[i], n.match(/^\s*at eval \(eval/)) return { file: "eval" };
                if (!n.match(/packages\/(?:local-test:)?logging(?:\/|\.js)/)) break }
            var o = {},
                a = /(?:[@(]| at )([^(]+?):([0-9:]+)(?:\)|$)/.exec(n);
            return a ? (o.line = a[2].split(":")[0], o.file = a[1].split("/").slice(-1)[0].split("?")[0], o) : o }, t.each(["debug", "info", "warn", "error"], function(s) { n[s] = function(l) {
                if (a) return void a--;
                var u = !1;
                i && (i--, u = !0);
                var f = !t.isObject(l) || t.isRegExp(l) || t.isDate(l) ? { message: new String(l).toString() } : l;
                if (t.each(c, function(e) {
                        if (f[e]) throw new Error("Can't set '" + e + "' in log message") }), t.has(f, "message") && !t.isString(f.message)) throw new Error("The 'message' field in log objects must be a string");
                if (f.omitCallerDetails || (f = t.extend(n._getCallerDetails(), f)), f.time = new Date, f.level = s, "debug" !== s)
                    if (u) o.push(r.stringify(f));
                    else if (e.isServer)
                    if ("colored-text" === n.outputFormat) console.log(n.format(f, { color: !0 }));
                    else {
                        if ("json" !== n.outputFormat) throw new Error("Unknown logging output format: " + n.outputFormat);
                        console.log(r.stringify(f)) }
                else g(f) } }), n.parse = function(e) {
            var t = null;
            if (e && "{" === e.charAt(0)) try { t = r.parse(e) } catch (n) {}
            return t && t.time && t.time instanceof Date ? t : null }, n.format = function(n, i) { n = r.clone(n), i = i || {};
            var o = n.time;
            if (!(o instanceof Date)) throw new Error("'time' must be a Date object");
            var a = n.timeInexact,
                c = n.level || "info",
                g = n.file,
                f = n.line,
                m = n.app || "",
                p = n.originApp,
                v = n.message || "",
                h = n.program || "",
                d = n.satellite,
                w = n.stderr || "";
            t.each(u, function(e) { delete n[e] }), t.isEmpty(n) || (v && (v += " "), v += r.stringify(n));
            var b = function(e) {
                    return 10 > e ? "0" + e : e.toString() },
                D = function(e) {
                    return 100 > e ? "0" + b(e) : e.toString() },
                j = o.getFullYear().toString() + b(o.getMonth() + 1) + b(o.getDate()),
                S = b(o.getHours()) + ":" + b(o.getMinutes()) + ":" + b(o.getSeconds()) + "." + D(o.getMilliseconds()),
                k = "(" + -((new Date).getTimezoneOffset() / 60) + ")",
                E = "";
            m && (E += m), p && p !== m && (E += " via " + p), E && (E = "[" + E + "] ");
            var x = [];
            h && x.push(h), g && x.push(g), f && x.push(f);
            var y = t.isEmpty(x) ? "" : "(" + x.join(":") + ") ";
            d && (y += ["[", d, "]"].join(""));
            var _ = w ? "(STDERR) " : "",
                C = [c.charAt(0).toUpperCase(), j, "-", S, k, a ? "? " : " ", E, y, _].join(""),
                F = function(t, r) {
                    return i.color && e.isServer && r ? Npm.require("cli-color")[r](t) : t };
            return F(C, i.metaColor || l) + F(v, s[c]) }, n.objFromText = function(e, r) {
            var n = { message: e, level: "info", time: new Date, timeInexact: !0 };
            return t.extend(n, r) } }).call(this), "undefined" == typeof Package && (Package = {}), Package.logging = { Log: n } }();

! function() {
    var a = Package.meteor.Meteor,
        e = Package.underscore._,
        t = Package.logging.Log,
        o = Package.json.JSON,
        n;
    (function() { n = {};
        var t = "Meteor_Reload",
            r = {},
            i, l = null;
        try { l = window.sessionStorage, l ? (l.setItem("__dummy__", "1"), l.removeItem("__dummy__")) : l = null } catch (g) { l = null }
        n._getData = function() {
            return l && l.getItem(t) }, l && (i = n._getData(), l.removeItem(t)), i || (i = "{}");
        var c = {};
        try { c = o.parse(i), "object" != typeof c && (a._debug("Got bad data on reload. Ignoring."), c = {}) } catch (d) { a._debug("Got invalid JSON on reload. Ignoring.") }
        c.reload && "object" == typeof c.data && (r = c.data);
        var u = [];
        n._onMigrate = function(a, e) { e || (e = a, a = void 0), u.push({ name: a, callback: e }) }, n._migrationData = function(a) {
            return r[a] };
        var s = function(a, t) { a = a || function() {}, t = t || {};
            for (var o = {}, n = e.clone(u), r = !0; n.length;) {
                var i = n.shift(),
                    l = i.callback(a, t);
                l[0] || (r = !1), l.length > 1 && i.name && (o[i.name] = l[1]) }
            return r || t.immediateMigration ? o : null };
        n._migrate = function(e, n) {
            var r = s(e, n);
            if (null === r) return !1;
            try {
                var i = o.stringify({ data: r, reload: !0 }) } catch (g) {
                throw a._debug("Couldn't serialize data for migration", r), g }
            if (l) try { l.setItem(t, i) } catch (g) { a._debug("Couldn't save data for migration to sessionStorage", g) } else a._debug("Browser does not support sessionStorage. Not saving migration state.");
            return !0 }, n._withFreshProvidersForTest = function(a) {
            var t = e.clone(u);
            u = [];
            try { a() } finally { u = t } };
        var f = !1;
        n._reload = function(a) {
            if (a = a || {}, !f) { f = !0;
                var t = function() { e.defer(function() { n._migrate(t, a) && window.location.reload() }) };
                t() } } }).call(this),
        function() { a._reload = { onMigrate: n._onMigrate, migrationData: n._migrationData, reload: n._reload } }.call(this), "undefined" == typeof Package && (Package = {}), Package.reload = { Reload: n } }();

! function() {
    var n = Package.meteor.Meteor,
        t, e;
    (function() { t = {}, t.active = !1, t.currentComputation = null, t._computations = {};
        var e = function(n) { t.currentComputation = n, t.active = !!n },
            r = function() {
                return "undefined" != typeof n ? n._debug : "undefined" != typeof console && console.error ? function() { console.error.apply(console, arguments) } : function() {} },
            o = function(t) { "undefined" != typeof n && n._supressed_log_expected() && n._suppress_log(t - 1) },
            i = function(n, t) {
                if (d) throw t;
                var e = ["Exception from Tracker " + n + " function:"];
                if (t.stack && t.message && t.name) {
                    var i = t.stack.indexOf(t.message);
                    if (0 > i || i > t.name.length + 2) {
                        var a = t.name + ": " + t.message;
                        e.push(a) } }
                e.push(t.stack), o(e.length);
                for (var u = 0; u < e.length; u++) r()(e[u]) },
            a = function(t) {
                return "undefined" == typeof n || n.isClient ? t : function() {
                    var e = arguments;
                    n._noYieldsAllowed(function() { t.apply(null, e) }) } },
            u = 1,
            c = [],
            s = !1,
            f = !1,
            p = !1,
            d = !1,
            l = [],
            h = function() { s || ("undefined" != typeof n ? n._setImmediate(t._runFlush) : setTimeout(t._runFlush, 0), s = !0) },
            v = !1;
        t.Computation = function(n, e, r) {
            if (!v) throw new Error("Tracker.Computation constructor is private; use Tracker.autorun");
            v = !1;
            var o = this;
            o.stopped = !1, o.invalidated = !1, o.firstRun = !0, o._id = u++, o._onInvalidateCallbacks = [], o._parent = e, o._func = n, o._onError = r, o._recomputing = !1, t._computations[o._id] = o;
            var i = !0;
            try { o._compute(), i = !1 } finally { o.firstRun = !1, i && o.stop() } }, t.Computation.prototype.onInvalidate = function(n) {
            var e = this;
            if ("function" != typeof n) throw new Error("onInvalidate requires a function");
            e.invalidated ? t.nonreactive(function() { a(n)(e) }) : e._onInvalidateCallbacks.push(n) }, t.Computation.prototype.invalidate = function() {
            var n = this;
            if (!n.invalidated) { n._recomputing || n.stopped || (h(), c.push(this)), n.invalidated = !0;
                for (var e = 0, r; r = n._onInvalidateCallbacks[e]; e++) t.nonreactive(function() { a(r)(n) });
                n._onInvalidateCallbacks = [] } }, t.Computation.prototype.stop = function() { this.stopped || (this.stopped = !0, this.invalidate(), delete t._computations[this._id]) }, t.Computation.prototype._compute = function() {
            var n = this;
            n.invalidated = !1;
            var r = t.currentComputation;
            e(n);
            var o = p;
            p = !0;
            try { a(n._func)(n) } finally { e(r), p = o } }, t.Computation.prototype._needsRecompute = function() {
            var n = this;
            return n.invalidated && !n.stopped }, t.Computation.prototype._recompute = function() {
            var n = this;
            n._recomputing = !0;
            try {
                if (n._needsRecompute()) try { n._compute() } catch (t) { n._onError ? n._onError(t) : i("recompute", t) } } finally { n._recomputing = !1 } }, t.Dependency = function() { this._dependentsById = {} }, t.Dependency.prototype.depend = function(n) {
            if (!n) {
                if (!t.active) return !1;
                n = t.currentComputation }
            var e = this,
                r = n._id;
            return r in e._dependentsById ? !1 : (e._dependentsById[r] = n, n.onInvalidate(function() { delete e._dependentsById[r] }), !0) }, t.Dependency.prototype.changed = function() {
            var n = this;
            for (var t in n._dependentsById) n._dependentsById[t].invalidate() }, t.Dependency.prototype.hasDependents = function() {
            var n = this;
            for (var t in n._dependentsById) return !0;
            return !1 }, t.flush = function(n) { t._runFlush({ finishSynchronously: !0, throwFirstError: n && n._throwFirstError }) }, t._runFlush = function(n) {
            if (f) throw new Error("Can't call Tracker.flush while flushing");
            if (p) throw new Error("Can't flush inside Tracker.autorun");
            n = n || {}, f = !0, s = !0, d = !!n.throwFirstError;
            var e = 0,
                r = !1;
            try {
                for (; c.length || l.length;) {
                    for (; c.length;) {
                        var o = c.shift();
                        if (o._recompute(), o._needsRecompute() && c.unshift(o), !n.finishSynchronously && ++e > 1e3) return void(r = !0) }
                    if (l.length) {
                        var a = l.shift();
                        try { a() } catch (u) { i("afterFlush", u) } } }
                r = !0 } finally {
                if (r || (f = !1, t._runFlush({ finishSynchronously: n.finishSynchronously, throwFirstError: !1 })), s = !1, f = !1, c.length || l.length) {
                    if (n.finishSynchronously) throw new Error("still have more to do?");
                    setTimeout(h, 10) } } }, t.autorun = function(n, e) {
            if ("function" != typeof n) throw new Error("Tracker.autorun requires a function argument");
            e = e || {}, v = !0;
            var r = new t.Computation(n, t.currentComputation, e.onError);
            return t.active && t.onInvalidate(function() { r.stop() }), r }, t.nonreactive = function(n) {
            var r = t.currentComputation;
            e(null);
            try {
                return n() } finally { e(r) } }, t.onInvalidate = function(n) {
            if (!t.active) throw new Error("Tracker.onInvalidate requires a currentComputation");
            t.currentComputation.onInvalidate(n) }, t.afterFlush = function(n) { l.push(n), h() } }).call(this),
        function() { n.flush = t.flush, n.autorun = t.autorun, n.autosubscribe = t.autorun, t.depend = function(n) {
                return n.depend() }, e = t }.call(this), "undefined" == typeof Package && (Package = {}), Package.tracker = { Tracker: t, Deps: e } }();

! function() {
    var e = Package.meteor.Meteor,
        n = Package.underscore._,
        t;
    (function() {
        if (e.isServer) var n = Npm.require("crypto");
        var r = function() {
                function e() {
                    var e = 4022871197,
                        n = function(n) { n = n.toString();
                            for (var t = 0; t < n.length; t++) { e += n.charCodeAt(t);
                                var r = .02519603282416938 * e;
                                e = r >>> 0, r -= e, r *= e, e = r >>> 0, r -= e, e += 4294967296 * r }
                            return 2.3283064365386963e-10 * (e >>> 0) };
                    return n.version = "Mash 0.9", n }
                return function(n) {
                    var t = 0,
                        r = 0,
                        o = 0,
                        i = 1;
                    0 == n.length && (n = [+new Date]);
                    var a = e();
                    t = a(" "), r = a(" "), o = a(" ");
                    for (var u = 0; u < n.length; u++) t -= a(n[u]), 0 > t && (t += 1), r -= a(n[u]), 0 > r && (r += 1), o -= a(n[u]), 0 > o && (o += 1);
                    a = null;
                    var d = function() {
                        var e = 2091639 * t + 2.3283064365386963e-10 * i;
                        return t = r, r = o, o = e - (i = 0 | e) };
                    return d.uint32 = function() {
                        return 4294967296 * d() }, d.fract53 = function() {
                        return d() + 1.1102230246251565e-16 * (2097152 * d() | 0) }, d.version = "Alea 0.9", d.args = n, d }(Array.prototype.slice.call(arguments)) },
            o = "23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz",
            i = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_",
            a = function(e) {
                var n = this;
                void 0 !== e && (n.alea = r.apply(null, e)) };
        a.prototype.fraction = function() {
            var e = this;
            if (e.alea) return e.alea();
            if (n) {
                var t = parseInt(e.hexString(8), 16);
                return 2.3283064365386963e-10 * t }
            if ("undefined" != typeof window && window.crypto && window.crypto.getRandomValues) {
                var r = new Uint32Array(1);
                return window.crypto.getRandomValues(r), 2.3283064365386963e-10 * r[0] }
            throw new Error("No random generator available") }, a.prototype.hexString = function(e) {
            var t = this;
            if (n && !t.alea) {
                var r = Math.ceil(e / 2),
                    o;
                try { o = n.randomBytes(r) } catch (i) { o = n.pseudoRandomBytes(r) }
                var a = o.toString("hex");
                return a.substring(0, e) }
            for (var u = [], d = 0; e > d; ++d) u.push(t.choice("0123456789abcdef"));
            return u.join("") }, a.prototype._randomString = function(e, n) {
            for (var t = this, r = [], o = 0; e > o; o++) r[o] = t.choice(n);
            return r.join("") }, a.prototype.id = function(e) {
            var n = this;
            return void 0 === e && (e = 17), n._randomString(e, o) }, a.prototype.secret = function(e) {
            var n = this;
            return void 0 === e && (e = 43), n._randomString(e, i) }, a.prototype.choice = function(e) {
            var n = Math.floor(this.fraction() * e.length);
            return "string" == typeof e ? e.substr(n, 1) : e[n] };
        var u = "undefined" != typeof window && window.innerHeight || "undefined" != typeof document && document.documentElement && document.documentElement.clientHeight || "undefined" != typeof document && document.body && document.body.clientHeight || 1,
            d = "undefined" != typeof window && window.innerWidth || "undefined" != typeof document && document.documentElement && document.documentElement.clientWidth || "undefined" != typeof document && document.body && document.body.clientWidth || 1,
            c = "undefined" != typeof navigator && navigator.userAgent || "";
        t = n || "undefined" != typeof window && window.crypto && window.crypto.getRandomValues ? new a : new a([new Date, u, d, c, Math.random()]), t.createWithSeeds = function() {
            if (0 === arguments.length) throw new Error("No seeds were provided");
            return new a(arguments) } }).call(this),
        function() { e.uuid = function() {
                for (var e = "0123456789abcdef", n = [], r = 0; 36 > r; r++) n[r] = t.choice(e);
                n[14] = "4", n[19] = e.substr(3 & parseInt(n[19], 16) | 8, 1), n[8] = n[13] = n[18] = n[23] = "-";
                var o = n.join("");
                return o } }.call(this), "undefined" == typeof Package && (Package = {}), Package.random = { Random: t } }();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.underscore._,
        r = Package.random.Random,
        i;
    (function() { i = function(e) {
            var r = this;
            t.extend(r, t.defaults(t.clone(e || {}), { baseTimeout: 1e3, exponent: 2.2, maxTimeout: 3e5, minTimeout: 10, minCount: 2, fuzz: .5 })), r.retryTimer = null }, t.extend(i.prototype, { clear: function() {
                var e = this;
                e.retryTimer && clearTimeout(e.retryTimer), e.retryTimer = null }, _timeout: function(e) {
                var t = this;
                if (e < t.minCount) return t.minTimeout;
                var i = Math.min(t.maxTimeout, t.baseTimeout * Math.pow(t.exponent, e));
                return i *= r.fraction() * t.fuzz + (1 - t.fuzz / 2) }, retryLater: function(t, r) {
                var i = this,
                    n = i._timeout(t);
                return i.retryTimer && clearTimeout(i.retryTimer), i.retryTimer = e.setTimeout(r, n), n } }) }).call(this), "undefined" == typeof Package && (Package = {}), Package.retry = { Retry: i } }();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.underscore._,
        r = Package.ejson.EJSON,
        n, i;
    (function() {
        var o = new e.EnvironmentVariable;
        n = function(e, t) {
            var r = o.getOrNullIfOutsideFiber();
            r && r.checking(e);
            try { l(e, t) } catch (n) {
                throw n instanceof i.Error && n.path && (n.message += " in field " + n.path), n } }, i = { Optional: function(e) {
                return new a(e) }, OneOf: function() {
                return new c(t.toArray(arguments)) }, Any: ["__any__"], Where: function(e) {
                return new f(e) }, ObjectIncluding: function(e) {
                return new s(e) }, ObjectWithValues: function(e) {
                return new h(e) }, Integer: ["__integer__"], Error: e.makeErrorType("Match.Error", function(t) { this.message = "Match error: " + t, this.path = "", this.sanitizedError = new e.Error(400, "Match failed") }), test: function(e, t) {
                try {
                    return l(e, t), !0 } catch (r) {
                    if (r instanceof i.Error) return !1;
                    throw r } }, _failIfArgumentsAreNotAllChecked: function(e, t, r, n) {
                var i = new p(r, n),
                    a = o.withValue(i, function() {
                        return e.apply(t, r) });
                return i.throwUnlessAllArgumentsHaveBeenChecked(), a } };
        var a = function(e) { this.pattern = e },
            c = function(e) {
                if (t.isEmpty(e)) throw new Error("Must provide at least one choice to Match.OneOf");
                this.choices = e },
            f = function(e) { this.condition = e },
            s = function(e) { this.pattern = e },
            h = function(e) { this.pattern = e },
            u = [
                [String, "string"],
                [Number, "number"],
                [Boolean, "boolean"],
                [void 0, "undefined"]
            ],
            l = function(e, n) {
                if (n !== i.Any) {
                    for (var o = 0; o < u.length; ++o)
                        if (n === u[o][0]) {
                            if (typeof e === u[o][1]) return;
                            throw new i.Error("Expected " + u[o][1] + ", got " + typeof e) }
                    if (null === n) {
                        if (null === e) return;
                        throw new i.Error("Expected null, got " + r.stringify(e)) }
                    if ("string" == typeof n || "number" == typeof n) {
                        if (e === n) return;
                        throw new i.Error("Expected " + n + ", got " + r.stringify(e)) }
                    if (n === i.Integer) {
                        if ("number" == typeof e && (0 | e) === e) return;
                        throw new i.Error("Expected Integer, got " + (e instanceof Object ? r.stringify(e) : e)) }
                    if (n === Object && (n = i.ObjectIncluding({})), n instanceof Array) {
                        if (1 !== n.length) throw Error("Bad pattern: arrays must have one type element" + r.stringify(n));
                        if (!t.isArray(e) && !t.isArguments(e)) throw new i.Error("Expected array, got " + r.stringify(e));
                        return void t.each(e, function(e, t) {
                            try { l(e, n[0]) } catch (r) {
                                throw r instanceof i.Error && (r.path = w(t, r.path)), r } }) }
                    if (n instanceof f) {
                        if (n.condition(e)) return;
                        throw new i.Error("Failed Match.Where validation") }
                    if (n instanceof a && (n = i.OneOf(void 0, n.pattern)), n instanceof c) {
                        for (var o = 0; o < n.choices.length; ++o) try {
                            return void l(e, n.choices[o]) } catch (p) {
                            if (!(p instanceof i.Error)) throw p }
                        throw new i.Error("Failed Match.OneOf or Match.Optional validation") }
                    if (n instanceof Function) {
                        if (e instanceof n) return;
                        throw new i.Error("Expected " + (n.name || "particular constructor")) }
                    var g = !1,
                        d;
                    if (n instanceof s && (g = !0, n = n.pattern), n instanceof h && (g = !0, d = [n.pattern], n = {}), "object" != typeof n) throw Error("Bad pattern: unknown pattern type");
                    if ("object" != typeof e) throw new i.Error("Expected object, got " + typeof e);
                    if (null === e) throw new i.Error("Expected object, got null");
                    if (e.constructor !== Object) throw new i.Error("Expected plain object");
                    var y = {},
                        E = {};
                    t.each(n, function(e, t) { e instanceof a ? E[t] = e.pattern : y[t] = e }), t.each(e, function(e, r) {
                        try {
                            if (t.has(y, r)) l(e, y[r]), delete y[r];
                            else if (t.has(E, r)) l(e, E[r]);
                            else {
                                if (!g) throw new i.Error("Unknown key");
                                d && l(e, d[0]) } } catch (n) {
                            throw n instanceof i.Error && (n.path = w(r, n.path)), n } }), t.each(y, function(e, t) {
                        throw new i.Error("Missing key '" + t + "'") }) } },
            p = function(e, r) {
                var n = this;
                n.args = t.clone(e), n.args.reverse(), n.description = r };
        t.extend(p.prototype, { checking: function(e) {
                var r = this;
                r._checkingOneValue(e) || (t.isArray(e) || t.isArguments(e)) && t.each(e, t.bind(r._checkingOneValue, r)) }, _checkingOneValue: function(e) {
                for (var r = this, n = 0; n < r.args.length; ++n)
                    if (e === r.args[n] || t.isNaN(e) && t.isNaN(r.args[n])) return r.args.splice(n, 1), !0;
                return !1 }, throwUnlessAllArgumentsHaveBeenChecked: function() {
                var e = this;
                if (!t.isEmpty(e.args)) throw new Error("Did not check() all arguments during " + e.description) } });
        var g = ["do", "if", "in", "for", "let", "new", "try", "var", "case", "else", "enum", "eval", "false", "null", "this", "true", "void", "with", "break", "catch", "class", "const", "super", "throw", "while", "yield", "delete", "export", "import", "public", "return", "static", "switch", "typeof", "default", "extends", "finally", "package", "private", "continue", "debugger", "function", "arguments", "interface", "protected", "implements", "instanceof"],
            w = function(e, r) {
                return "number" == typeof e || e.match(/^[0-9]+$/) ? e = "[" + e + "]" : (!e.match(/^[a-z_$][0-9a-z_$]*$/i) || t.contains(g, e)) && (e = JSON.stringify([e])), r && "[" !== r[0] ? e + "." + r : e + r } }).call(this), "undefined" == typeof Package && (Package = {}), Package.check = { check: n, Match: i } }();

! function() {
    var i = Package.meteor.Meteor,
        t = Package.underscore._,
        a = Package.json.JSON,
        n = Package.ejson.EJSON,
        e;
    (function() { e = function(i, t) {
            var n = this;
            n._map = {}, n._idStringify = i || a.stringify, n._idParse = t || a.parse }, t.extend(e.prototype, { get: function(i) {
                var t = this,
                    a = t._idStringify(i);
                return t._map[a] }, set: function(i, t) {
                var a = this,
                    n = a._idStringify(i);
                a._map[n] = t }, remove: function(i) {
                var t = this,
                    a = t._idStringify(i);
                delete t._map[a] }, has: function(i) {
                var a = this,
                    n = a._idStringify(i);
                return t.has(a._map, n) }, empty: function() {
                var i = this;
                return t.isEmpty(i._map) }, clear: function() {
                var i = this;
                i._map = {} }, forEach: function(i) {
                for (var a = this, n = t.keys(a._map), e = 0; e < n.length; e++) {
                    var r = i.call(null, a._map[n[e]], a._idParse(n[e]));
                    if (r === !1) return } }, size: function() {
                var i = this;
                return t.size(i._map) }, setDefault: function(i, a) {
                var n = this,
                    e = n._idStringify(i);
                return t.has(n._map, e) ? n._map[e] : (n._map[e] = a, a) }, clone: function() {
                var i = this,
                    t = new e(i._idStringify, i._idParse);
                return i.forEach(function(i, a) { t.set(a, n.clone(i)) }), t } }) }).call(this), "undefined" == typeof Package && (Package = {}), Package["id-map"] = { IdMap: e } }();

! function() {
    var t = Package.meteor.Meteor,
        e = Package.underscore._,
        r;
    (function() {
        var t = function(t, e, r, n) {
            return { key: t, value: e, next: r, prev: n } };
        r = function() {
            var t = this;
            t._dict = {}, t._first = null, t._last = null, t._size = 0;
            var r = e.toArray(arguments);
            t._stringify = function(t) {
                return t }, "function" == typeof r[0] && (t._stringify = r.shift()), e.each(r, function(e) { t.putBefore(e[0], e[1], null) }) }, e.extend(r.prototype, { _k: function(t) {
                return " " + this._stringify(t) }, empty: function() {
                var t = this;
                return !t._first }, size: function() {
                var t = this;
                return t._size }, _linkEltIn: function(t) {
                var e = this;
                t.next ? (t.prev = t.next.prev, t.next.prev = t, t.prev && (t.prev.next = t)) : (t.prev = e._last, e._last && (e._last.next = t), e._last = t), (null === e._first || e._first === t.next) && (e._first = t) }, _linkEltOut: function(t) {
                var e = this;
                t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next), t === e._last && (e._last = t.prev), t === e._first && (e._first = t.next) }, putBefore: function(e, r, n) {
                var i = this;
                if (i._dict[i._k(e)]) throw new Error("Item " + e + " already present in OrderedDict");
                var o = n ? t(e, r, i._dict[i._k(n)]) : t(e, r, null);
                if (void 0 === o.next) throw new Error("could not find item to put this one before");
                i._linkEltIn(o), i._dict[i._k(e)] = o, i._size++ }, append: function(t, e) {
                var r = this;
                r.putBefore(t, e, null) }, remove: function(t) {
                var e = this,
                    r = e._dict[e._k(t)];
                if (void 0 === r) throw new Error("Item " + t + " not present in OrderedDict");
                return e._linkEltOut(r), e._size--, delete e._dict[e._k(t)], r.value }, get: function(t) {
                var e = this;
                return e.has(t) ? e._dict[e._k(t)].value : void 0 }, has: function(t) {
                var r = this;
                return e.has(r._dict, r._k(t)) }, forEach: function(t) {
                for (var e = this, n = 0, i = e._first; null !== i;) {
                    var o = t(i.value, i.key, n);
                    if (o === r.BREAK) return;
                    i = i.next, n++ } }, first: function() {
                var t = this;
                return t.empty() ? void 0 : t._first.key }, firstValue: function() {
                var t = this;
                return t.empty() ? void 0 : t._first.value }, last: function() {
                var t = this;
                return t.empty() ? void 0 : t._last.key }, lastValue: function() {
                var t = this;
                return t.empty() ? void 0 : t._last.value }, prev: function(t) {
                var e = this;
                if (e.has(t)) {
                    var r = e._dict[e._k(t)];
                    if (r.prev) return r.prev.key }
                return null }, next: function(t) {
                var e = this;
                if (e.has(t)) {
                    var r = e._dict[e._k(t)];
                    if (r.next) return r.next.key }
                return null }, moveBefore: function(t, e) {
                var r = this,
                    n = r._dict[r._k(t)],
                    i = e ? r._dict[r._k(e)] : null;
                if (void 0 === n) throw new Error("Item to move is not present");
                if (void 0 === i) throw new Error("Could not find element to move this one before");
                i !== n.next && (r._linkEltOut(n), n.next = i, r._linkEltIn(n)) }, indexOf: function(t) {
                var e = this,
                    n = null;
                return e.forEach(function(i, o, u) {
                    return e._k(o) === e._k(t) ? (n = u, r.BREAK) : void 0 }), n }, _checkRep: function() {
                var t = this;
                e.each(t._dict, function(t, e) {
                    if (e.next === e) throw new Error("Next is a loop");
                    if (e.prev === e) throw new Error("Prev is a loop") }) } }), r.BREAK = { "break": !0 } }).call(this), "undefined" == typeof Package && (Package = {}), Package["ordered-dict"] = { OrderedDict: r } }();

! function() {
    var t = Package.meteor.Meteor,
        n, o;
    (function() { o = { exports: {} } }).call(this),
        function() {! function() {
                function t(t) {
                    for (var n = [], o = [], a = 0; a < t[0].length; a++) n.push(t[0][a][1]), o.push(t[0][a][0]);
                    return n = n.sort(function(t, n) {
                        return t - n }), o = o.sort(function(t, n) {
                        return t - n }), [
                        [n[0], o[0]],
                        [n[n.length - 1], o[o.length - 1]]
                    ] }

                function n(t, n, o) {
                    for (var a = [
                            [0, 0]
                        ], r = 0; r < o.length; r++) {
                        for (var e = 0; e < o[r].length; e++) a.push(o[r][e]);
                        a.push([0, 0]) }
                    for (var i = !1, r = 0, e = a.length - 1; r < a.length; e = r++) a[r][0] > n != a[e][0] > n && t < (a[e][1] - a[r][1]) * (n - a[r][0]) / (a[e][0] - a[r][0]) + a[r][1] && (i = !i);
                    return i }
                var a = {}; "undefined" != typeof o && o.exports && (o.exports = a), a.lineStringsIntersect = function(t, n) {
                    for (var o = [], a = 0; a <= t.coordinates.length - 2; ++a)
                        for (var r = 0; r <= n.coordinates.length - 2; ++r) {
                            var e = { x: t.coordinates[a][1], y: t.coordinates[a][0] },
                                i = { x: t.coordinates[a + 1][1], y: t.coordinates[a + 1][0] },
                                s = { x: n.coordinates[r][1], y: n.coordinates[r][0] },
                                c = { x: n.coordinates[r + 1][1], y: n.coordinates[r + 1][0] },
                                u = (c.x - s.x) * (e.y - s.y) - (c.y - s.y) * (e.x - s.x),
                                h = (i.x - e.x) * (e.y - s.y) - (i.y - e.y) * (e.x - s.x),
                                d = (c.y - s.y) * (i.x - e.x) - (c.x - s.x) * (i.y - e.y);
                            if (0 != d) {
                                var l = u / d,
                                    y = h / d;
                                l >= 0 && 1 >= l && y >= 0 && 1 >= y && o.push({ type: "Point", coordinates: [e.x + l * (i.x - e.x), e.y + l * (i.y - e.y)] }) } }
                    return 0 == o.length && (o = !1), o }, a.pointInBoundingBox = function(t, n) {
                    return !(t.coordinates[1] < n[0][0] || t.coordinates[1] > n[1][0] || t.coordinates[0] < n[0][1] || t.coordinates[0] > n[1][1]) }, a.pointInPolygon = function(o, r) {
                    for (var e = "Polygon" == r.type ? [r.coordinates] : r.coordinates, i = !1, s = 0; s < e.length; s++) a.pointInBoundingBox(o, t(e[s])) && (i = !0);
                    if (!i) return !1;
                    for (var c = !1, s = 0; s < e.length; s++) n(o.coordinates[1], o.coordinates[0], e[s]) && (c = !0);
                    return c }, a.numberToRadius = function(t) {
                    return t * Math.PI / 180 }, a.numberToDegree = function(t) {
                    return 180 * t / Math.PI }, a.drawCircle = function(t, n, o) {
                    for (var r = [n.coordinates[1], n.coordinates[0]], e = t / 1e3 / 6371, i = [a.numberToRadius(r[0]), a.numberToRadius(r[1])], o = o || 15, s = [
                            [r[0], r[1]]
                        ], c = 0; o > c; c++) {
                        var u = 2 * Math.PI * c / o,
                            h = Math.asin(Math.sin(i[0]) * Math.cos(e) + Math.cos(i[0]) * Math.sin(e) * Math.cos(u)),
                            d = i[1] + Math.atan2(Math.sin(u) * Math.sin(e) * Math.cos(i[0]), Math.cos(e) - Math.sin(i[0]) * Math.sin(h));
                        s[c] = [], s[c][1] = a.numberToDegree(h), s[c][0] = a.numberToDegree(d) }
                    return { type: "Polygon", coordinates: [s] } }, a.rectangleCentroid = function(t) {
                    var n = t.coordinates[0],
                        o = n[0][0],
                        a = n[0][1],
                        r = n[2][0],
                        e = n[2][1],
                        i = r - o,
                        s = e - a;
                    return { type: "Point", coordinates: [o + i / 2, a + s / 2] } }, a.pointDistance = function(t, n) {
                    var o = t.coordinates[0],
                        r = t.coordinates[1],
                        e = n.coordinates[0],
                        i = n.coordinates[1],
                        s = a.numberToRadius(i - r),
                        c = a.numberToRadius(e - o),
                        u = Math.pow(Math.sin(s / 2), 2) + Math.cos(a.numberToRadius(r)) * Math.cos(a.numberToRadius(i)) * Math.pow(Math.sin(c / 2), 2),
                        h = 2 * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u));
                    return 6371 * h * 1e3 }, a.geometryWithinRadius = function(t, n, o) {
                    if ("Point" == t.type) return a.pointDistance(t, n) <= o;
                    if ("LineString" == t.type || "Polygon" == t.type) {
                        var r = {},
                            e;
                        e = "Polygon" == t.type ? t.coordinates[0] : t.coordinates;
                        for (var i in e)
                            if (r.coordinates = e[i], a.pointDistance(r, n) > o) return !1 }
                    return !0 }, a.area = function(t) {
                    for (var n = 0, o = t.coordinates[0], a = o.length - 1, r, e, i = 0; i < o.length; a = i++) {
                        var r = { x: o[i][1], y: o[i][0] },
                            e = { x: o[a][1], y: o[a][0] };
                        n += r.x * e.y, n -= r.y * e.x }
                    return n /= 2 }, a.centroid = function(t) {
                    for (var n, o = 0, r = 0, e = t.coordinates[0], i = e.length - 1, s, c, u = 0; u < e.length; i = u++) {
                        var s = { x: e[u][1], y: e[u][0] },
                            c = { x: e[i][1], y: e[i][0] };
                        n = s.x * c.y - c.x * s.y, o += (s.x + c.x) * n, r += (s.y + c.y) * n }
                    return n = 6 * a.area(t), { type: "Point", coordinates: [r / n, o / n] } }, a.simplify = function(t, n) { n = n || 20, t = t.map(function(t) {
                        return { lng: t.coordinates[0], lat: t.coordinates[1] } });
                    var o, a, r, e, i, s, c, u, h, d, l, y, M, f, g, x, p, v, P, b = Math.PI / 180 * .5,
                        m = new Array,
                        T = new Array,
                        I = new Array;
                    if (t.length < 3) return t;
                    for (o = t.length, d = 360 * n / (2 * Math.PI * 6378137), d *= d, r = 0, T[0] = 0, I[0] = o - 1, a = 1; a > 0;)
                        if (e = T[a - 1], i = I[a - 1], a--, i - e > 1) {
                            for (l = t[i].lng() - t[e].lng(), y = t[i].lat() - t[e].lat(), Math.abs(l) > 180 && (l = 360 - Math.abs(l)), l *= Math.cos(b * (t[i].lat() + t[e].lat())), M = l * l + y * y, s = e + 1, c = e, h = -1; i > s; s++) f = t[s].lng() - t[e].lng(), g = t[s].lat() - t[e].lat(), Math.abs(f) > 180 && (f = 360 - Math.abs(f)), f *= Math.cos(b * (t[s].lat() + t[e].lat())), x = f * f + g * g, p = t[s].lng() - t[i].lng(), v = t[s].lat() - t[i].lat(), Math.abs(p) > 180 && (p = 360 - Math.abs(p)), p *= Math.cos(b * (t[s].lat() + t[i].lat())), P = p * p + v * v, u = x >= M + P ? P : P >= M + x ? x : (f * y - g * l) * (f * y - g * l) / M, u > h && (c = s, h = u);
                            d > h ? (m[r] = e, r++) : (a++, T[a - 1] = c, I[a - 1] = i, a++, T[a - 1] = e, I[a - 1] = c) } else m[r] = e, r++;
                    m[r] = o - 1, r++;
                    for (var R = new Array, s = 0; r > s; s++) R.push(t[m[s]]);
                    return R.map(function(t) {
                        return { type: "Point", coordinates: [t.lng, t.lat] } }) }, a.destinationPoint = function(t, n, o) { o /= 6371, n = a.numberToRadius(n);
                    var r = a.numberToRadius(t.coordinates[0]),
                        e = a.numberToRadius(t.coordinates[1]),
                        i = Math.asin(Math.sin(r) * Math.cos(o) + Math.cos(r) * Math.sin(o) * Math.cos(n)),
                        s = e + Math.atan2(Math.sin(n) * Math.sin(o) * Math.cos(r), Math.cos(o) - Math.sin(r) * Math.sin(i));
                    return s = (s + 3 * Math.PI) % (2 * Math.PI) - Math.PI, { type: "Point", coordinates: [a.numberToDegree(i), a.numberToDegree(s)] } } }() }.call(this),
        function() { n = o.exports }.call(this), "undefined" == typeof Package && (Package = {}), Package["geojson-utils"] = { GeoJSON: n } }();

! function() {
    var e = Package.meteor.Meteor,
        r = Package.underscore._,
        t = Package.json.JSON,
        n = Package.ejson.EJSON,
        o = Package["id-map"].IdMap,
        i = Package["ordered-dict"].OrderedDict,
        a = Package.tracker.Tracker,
        s = Package.tracker.Deps,
        c = Package.random.Random,
        u = Package["geojson-utils"].GeoJSON,
        d, f, l, h, p, v, _, m, y, g, w, b, $, I, E, O;
    (function() { d = function(r) {
            var t = this;
            t.name = r, t._docs = new d._IdMap, t._observeQueue = new e._SynchronousQueue, t.next_qid = 1, t.queries = {}, t._savedOriginals = null, t.paused = !1 }, f = {}, l = {}, d._applyChanges = function(e, t) { r.each(t, function(r, t) { void 0 === r ? delete e[t] : e[t] = r }) }, h = function(e) {
            var r = new Error(e);
            return r.name = "MinimongoError", r }, d.prototype.find = function(e, r) {
            return 0 === arguments.length && (e = {}), new d.Cursor(this, e, r) }, d.Cursor = function(e, r, t) {
            var n = this;
            t || (t = {}), n.collection = e, n.sorter = null, d._selectorIsId(r) ? (n._selectorId = r, n.matcher = new f.Matcher(r)) : (n._selectorId = void 0, n.matcher = new f.Matcher(r), (n.matcher.hasGeoQuery() || t.sort) && (n.sorter = new f.Sorter(t.sort || [], { matcher: n.matcher }))), n.skip = t.skip, n.limit = t.limit, n.fields = t.fields, n._projectionFn = d._compileProjection(n.fields || {}), n._transform = d.wrapTransform(t.transform), "undefined" != typeof a && (n.reactive = void 0 === t.reactive ? !0 : t.reactive) }, d.Cursor.prototype.rewind = function() {}, d.prototype.findOne = function(e, r) {
            return 0 === arguments.length && (e = {}), r = r || {}, r.limit = 1, this.find(e, r).fetch()[0] }, d.Cursor.prototype.forEach = function(e, t) {
            var n = this,
                o = n._getRawObjects({ ordered: !0 });
            n.reactive && n._depend({ addedBefore: !0, removed: !0, changed: !0, movedBefore: !0 }), r.each(o, function(r, o) { r = n._projectionFn(r), n._transform && (r = n._transform(r)), e.call(t, r, o, n) }) }, d.Cursor.prototype.getTransform = function() {
            return this._transform }, d.Cursor.prototype.map = function(e, r) {
            var t = this,
                n = [];
            return t.forEach(function(o, i) { n.push(e.call(r, o, i, t)) }), n }, d.Cursor.prototype.fetch = function() {
            var e = this,
                r = [];
            return e.forEach(function(e) { r.push(e) }), r }, d.Cursor.prototype.count = function() {
            var e = this;
            return e.reactive && e._depend({ added: !0, removed: !0 }, !0), e._getRawObjects({ ordered: !0 }).length }, d.Cursor.prototype._publishCursor = function(e) {
            var r = this;
            if (!r.collection.name) throw new Error("Can't publish a cursor from a collection without a name.");
            var t = r.collection.name;
            return Mongo.Collection._publishCursor(r, e, t) }, d.Cursor.prototype._getCollectionName = function() {
            var e = this;
            return e.collection.name }, d._observeChangesCallbacksAreOrdered = function(e) {
            if (e.added && e.addedBefore) throw new Error("Please specify only one of added() and addedBefore()");
            return !(!e.addedBefore && !e.movedBefore) }, d._observeCallbacksAreOrdered = function(e) {
            if (e.addedAt && e.added) throw new Error("Please specify only one of added() and addedAt()");
            if (e.changedAt && e.changed) throw new Error("Please specify only one of changed() and changedAt()");
            if (e.removed && e.removedAt) throw new Error("Please specify only one of removed() and removedAt()");
            return !!(e.addedAt || e.movedTo || e.changedAt || e.removedAt) }, d.ObserveHandle = function() {}, r.extend(d.Cursor.prototype, { observe: function(e) {
                var r = this;
                return d._observeFromObserveChanges(r, e) }, observeChanges: function(e) {
                var t = this,
                    o = d._observeChangesCallbacksAreOrdered(e);
                if (!e._allow_unordered && !o && (t.skip || t.limit)) throw new Error("must use ordered observe (ie, 'addedBefore' instead of 'added') with skip or limit");
                if (t.fields && (0 === t.fields._id || t.fields._id === !1)) throw Error("You may not observe a cursor with {fields: {_id: 0}}");
                var i = { matcher: t.matcher, sorter: o && t.sorter, distances: t.matcher.hasGeoQuery() && o && new d._IdMap, resultsSnapshot: null, ordered: o, cursor: t, projectionFn: t._projectionFn },
                    s;
                t.reactive && (s = t.collection.next_qid++, t.collection.queries[s] = i), i.results = t._getRawObjects({ ordered: o, distances: i.distances }), t.collection.paused && (i.resultsSnapshot = o ? [] : new d._IdMap);
                var c = function(e) {
                    return e ? function() {
                        var r = this,
                            n = arguments;
                        t.collection.paused || t.collection._observeQueue.queueTask(function() { e.apply(r, n) }) } : function() {} };
                if (i.added = c(e.added), i.changed = c(e.changed), i.removed = c(e.removed), o && (i.addedBefore = c(e.addedBefore), i.movedBefore = c(e.movedBefore)), !e._suppress_initial && !t.collection.paused) {
                    var u = o ? r.bind(r.each, null, i.results) : r.bind(i.results.forEach, i.results);
                    u(function(e) {
                        var r = n.clone(e);
                        delete r._id, o && i.addedBefore(e._id, t._projectionFn(r), null), i.added(e._id, t._projectionFn(r)) }) }
                var f = new d.ObserveHandle;
                return r.extend(f, { collection: t.collection, stop: function() { t.reactive && delete t.collection.queries[s] } }), t.reactive && a.active && a.onInvalidate(function() { f.stop() }), t.collection._observeQueue.drain(), f } }), d.Cursor.prototype._getRawObjects = function(e) {
            var r = this;
            e = e || {};
            var t = e.ordered ? [] : new d._IdMap;
            if (void 0 !== r._selectorId) {
                if (r.skip) return t;
                var n = r.collection._docs.get(r._selectorId);
                return n && (e.ordered ? t.push(n) : t.set(r._selectorId, n)), t }
            var o;
            if (r.matcher.hasGeoQuery() && e.ordered && (e.distances ? (o = e.distances, o.clear()) : o = new d._IdMap), r.collection._docs.forEach(function(n, i) {
                    var a = r.matcher.documentMatches(n);
                    return a.result && (e.ordered ? (t.push(n), o && void 0 !== a.distance && o.set(i, a.distance)) : t.set(i, n)), !r.limit || r.skip || r.sorter || t.length !== r.limit ? !0 : !1 }), !e.ordered) return t;
            if (r.sorter) {
                var i = r.sorter.getComparator({ distances: o });
                t.sort(i) }
            var a = r.skip || 0,
                s = r.limit ? r.limit + a : t.length;
            return t.slice(a, s) }, d.Cursor.prototype._depend = function(e, t) {
            var n = this;
            if (a.active) {
                var o = new a.Dependency;
                o.depend();
                var i = r.bind(o.changed, o),
                    s = { _suppress_initial: !0, _allow_unordered: t };
                r.each(["added", "changed", "removed", "addedBefore", "movedBefore"], function(r) { e[r] && (s[r] = i) }), n.observeChanges(s) } }, d.prototype.insert = function(t, o) {
            var i = this;
            t = n.clone(t), r.has(t, "_id") || (t._id = d._useOID ? new d._ObjectID : c.id());
            var a = t._id;
            if (i._docs.has(a)) throw h("Duplicate _id '" + a + "'");
            i._saveOriginal(a, void 0), i._docs.set(a, t);
            var s = [];
            for (var u in i.queries) {
                var f = i.queries[u],
                    l = f.matcher.documentMatches(t);
                l.result && (f.distances && void 0 !== l.distance && f.distances.set(a, l.distance), f.cursor.skip || f.cursor.limit ? s.push(u) : d._insertInResults(f, t)) }
            return r.each(s, function(e) { i.queries[e] && i._recomputeResults(i.queries[e]) }), i._observeQueue.drain(), o && e.defer(function() { o(null, a) }), a }, d.prototype._eachPossiblyMatchingDoc = function(e, r) {
            var t = this,
                n = d._idsMatchedBySelector(e);
            if (n)
                for (var o = 0; o < n.length; ++o) {
                    var i = n[o],
                        a = t._docs.get(i);
                    if (a) {
                        var s = r(a, i);
                        if (s === !1) break } } else t._docs.forEach(r) }, d.prototype.remove = function(t, o) {
            var i = this;
            if (i.paused && !i._savedOriginals && n.equals(t, {})) {
                var a = i._docs.size();
                return i._docs.clear(), r.each(i.queries, function(e) { e.ordered ? e.results = [] : e.results.clear() }), o && e.defer(function() { o(null, a) }), a }
            var s = new f.Matcher(t),
                c = [];
            i._eachPossiblyMatchingDoc(t, function(e, r) { s.documentMatches(e).result && c.push(r) });
            for (var u = [], l = [], h = 0; h < c.length; h++) {
                var p = c[h],
                    v = i._docs.get(p);
                r.each(i.queries, function(e, r) { e.matcher.documentMatches(v).result && (e.cursor.skip || e.cursor.limit ? u.push(r) : l.push({ qid: r, doc: v })) }), i._saveOriginal(p, v), i._docs.remove(p) }
            return r.each(l, function(e) {
                var r = i.queries[e.qid];
                r && (r.distances && r.distances.remove(e.doc._id), d._removeFromResults(r, e.doc)) }), r.each(u, function(e) {
                var r = i.queries[e];
                r && i._recomputeResults(r) }), i._observeQueue.drain(), a = c.length, o && e.defer(function() { o(null, a) }), a }, d.prototype.update = function(t, o, i, a) {
            var s = this;!a && i instanceof Function && (a = i, i = null), i || (i = {});
            var c = new f.Matcher(t),
                u = {};
            r.each(s.queries, function(e, r) {!e.cursor.skip && !e.cursor.limit || s.paused || (u[r] = n.clone(e.results)) });
            var l = {},
                h = 0;
            s._eachPossiblyMatchingDoc(t, function(e, r) {
                var t = c.documentMatches(e);
                return t.result && (s._saveOriginal(r, e), s._modifyAndNotify(e, o, l, t.arrayIndices), ++h, !i.multi) ? !1 : !0 }), r.each(l, function(e, r) {
                var t = s.queries[r];
                t && s._recomputeResults(t, u[r]) }), s._observeQueue.drain();
            var p;
            if (0 === h && i.upsert) {
                var v = d._removeDollarOperators(t);
                d._modify(v, o, { isInsert: !0 }), !v._id && i.insertedId && (v._id = i.insertedId), p = s.insert(v), h = 1 }
            var _;
            return i._returnObject ? (_ = { numberAffected: h }, void 0 !== p && (_.insertedId = p)) : _ = h, a && e.defer(function() { a(null, _) }), _ }, d.prototype.upsert = function(e, t, n, o) {
            var i = this;
            return o || "function" != typeof n || (o = n, n = {}), i.update(e, t, r.extend({}, n, { upsert: !0, _returnObject: !0 }), o) }, d.prototype._modifyAndNotify = function(e, r, t, o) {
            var i = this,
                a = {};
            for (var s in i.queries) {
                var c = i.queries[s];
                a[s] = c.ordered ? c.matcher.documentMatches(e).result : c.results.has(e._id) }
            var u = n.clone(e);
            d._modify(e, r, { arrayIndices: o });
            for (s in i.queries) { c = i.queries[s];
                var f = a[s],
                    l = c.matcher.documentMatches(e),
                    h = l.result;
                h && c.distances && void 0 !== l.distance && c.distances.set(e._id, l.distance), c.cursor.skip || c.cursor.limit ? (f || h) && (t[s] = !0) : f && !h ? d._removeFromResults(c, e) : !f && h ? d._insertInResults(c, e) : f && h && d._updateInResults(c, e, u) } }, d._insertInResults = function(e, r) {
            var t = n.clone(r);
            if (delete t._id, e.ordered) {
                if (e.sorter) {
                    var o = d._insertInSortedList(e.sorter.getComparator({ distances: e.distances }), e.results, r),
                        i = e.results[o + 1];
                    i = i ? i._id : null, e.addedBefore(r._id, e.projectionFn(t), i) } else e.addedBefore(r._id, e.projectionFn(t), null), e.results.push(r);
                e.added(r._id, e.projectionFn(t)) } else e.added(r._id, e.projectionFn(t)), e.results.set(r._id, r) }, d._removeFromResults = function(e, r) {
            if (e.ordered) {
                var t = d._findInOrderedResults(e, r);
                e.removed(r._id), e.results.splice(t, 1) } else {
                var n = r._id;
                e.removed(r._id), e.results.remove(n) } }, d._updateInResults = function(e, t, o) {
            if (!n.equals(t._id, o._id)) throw new Error("Can't change a doc's _id while updating");
            var i = e.projectionFn,
                a = d._makeChangedFields(i(t), i(o));
            if (!e.ordered) return void(r.isEmpty(a) || (e.changed(t._id, a), e.results.set(t._id, t)));
            var s = d._findInOrderedResults(e, t);
            if (r.isEmpty(a) || e.changed(t._id, a), e.sorter) { e.results.splice(s, 1);
                var c = d._insertInSortedList(e.sorter.getComparator({ distances: e.distances }), e.results, t);
                if (s !== c) {
                    var u = e.results[c + 1];
                    u = u ? u._id : null, e.movedBefore && e.movedBefore(t._id, u) } } }, d.prototype._recomputeResults = function(e, r) {
            var t = this;
            t.paused || r || (r = e.results), e.distances && e.distances.clear(), e.results = e.cursor._getRawObjects({ ordered: e.ordered, distances: e.distances }), t.paused || d._diffQueryChanges(e.ordered, r, e.results, e, { projectionFn: e.projectionFn }) }, d._findInOrderedResults = function(e, r) {
            if (!e.ordered) throw new Error("Can't call _findInOrderedResults on unordered query");
            for (var t = 0; t < e.results.length; t++)
                if (e.results[t] === r) return t;
            throw Error("object missing from query") }, d._binarySearch = function(e, r, t) {
            for (var n = 0, o = r.length; o > 0;) {
                var i = Math.floor(o / 2);
                e(t, r[n + i]) >= 0 ? (n += i + 1, o -= i + 1) : o = i }
            return n }, d._insertInSortedList = function(e, r, t) {
            if (0 === r.length) return r.push(t), 0;
            var n = d._binarySearch(e, r, t);
            return r.splice(n, 0, t), n }, d.prototype.saveOriginals = function() {
            var e = this;
            if (e._savedOriginals) throw new Error("Called saveOriginals twice without retrieveOriginals");
            e._savedOriginals = new d._IdMap }, d.prototype.retrieveOriginals = function() {
            var e = this;
            if (!e._savedOriginals) throw new Error("Called retrieveOriginals without saveOriginals");
            var r = e._savedOriginals;
            return e._savedOriginals = null, r }, d.prototype._saveOriginal = function(e, r) {
            var t = this;
            t._savedOriginals && (t._savedOriginals.has(e) || t._savedOriginals.set(e, n.clone(r))) }, d.prototype.pauseObservers = function() {
            if (!this.paused) { this.paused = !0;
                for (var e in this.queries) {
                    var r = this.queries[e];
                    r.resultsSnapshot = n.clone(r.results) } } }, d.prototype.resumeObservers = function() {
            var e = this;
            if (this.paused) { this.paused = !1;
                for (var r in this.queries) {
                    var t = e.queries[r];
                    d._diffQueryChanges(t.ordered, t.resultsSnapshot, t.results, t, { projectionFn: t.projectionFn }), t.resultsSnapshot = null }
                e._observeQueue.drain() } }, d._idStringify = function(e) {
            if (e instanceof d._ObjectID) return e.valueOf();
            if ("string" == typeof e) return "" === e ? e : "-" === e.substr(0, 1) || "~" === e.substr(0, 1) || d._looksLikeObjectID(e) || "{" === e.substr(0, 1) ? "-" + e : e;
            if (void 0 === e) return "-";
            if ("object" == typeof e && null !== e) throw new Error("Meteor does not currently support objects other than ObjectID as ids");
            return "~" + t.stringify(e) }, d._idParse = function(e) {
            return "" === e ? e : "-" === e ? void 0 : "-" === e.substr(0, 1) ? e.substr(1) : "~" === e.substr(0, 1) ? t.parse(e.substr(1)) : d._looksLikeObjectID(e) ? new d._ObjectID(e) : e }, d._makeChangedFields = function(e, r) {
            var t = {};
            return d._diffObjects(r, e, { leftOnly: function(e, r) { t[e] = void 0 }, rightOnly: function(e, r) { t[e] = r }, both: function(e, r, o) { n.equals(r, o) || (t[e] = o) } }), t } }).call(this),
        function() { d.wrapTransform = function(e) {
                if (!e) return null;
                if (e.__wrappedTransform__) return e;
                var t = function(t) {
                    if (!r.has(t, "_id")) throw new Error("can only transform documents with _id");
                    var o = t._id,
                        i = a.nonreactive(function() {
                            return e(t) });
                    if (!v(i)) throw new Error("transform must return object");
                    if (r.has(i, "_id")) {
                        if (!n.equals(i._id, o)) throw new Error("transformed document can't have different _id") } else i._id = o;
                    return i };
                return t.__wrappedTransform__ = !0, t } }.call(this),
        function() { p = function(e) {
                return r.isArray(e) && !n.isBinary(e) }, v = d._isPlainObject = function(e) {
                return e && 3 === d._f._type(e) }, _ = function(e) {
                return p(e) || v(e) }, m = function(e, n) {
                if (!v(e)) return !1;
                var o = void 0;
                return r.each(e, function(r, i) {
                    var a = "$" === i.substr(0, 1);
                    if (void 0 === o) o = a;
                    else if (o !== a) {
                        if (!n) throw new Error("Inconsistent operator: " + t.stringify(e));
                        o = !1 } }), !!o }, y = function(e) {
                return /^[0-9]+$/.test(e) } }.call(this),
        function() { f.Matcher = function(e) {
                var r = this;
                r._paths = {}, r._hasGeoQuery = !1, r._hasWhere = !1, r._isSimple = !0, r._matchingDocument = void 0, r._selector = null, r._docMatcher = r._compileSelector(e) }, r.extend(f.Matcher.prototype, { documentMatches: function(e) {
                    if (!e || "object" != typeof e) throw Error("documentMatches needs a document");
                    return this._docMatcher(e) }, hasGeoQuery: function() {
                    return this._hasGeoQuery }, hasWhere: function() {
                    return this._hasWhere }, isSimple: function() {
                    return this._isSimple }, _compileSelector: function(r) {
                    var t = this;
                    if (r instanceof Function) return t._isSimple = !1, t._selector = r, t._recordPathUsed(""),
                        function(e) {
                            return { result: !!r.call(e) } };
                    if (d._selectorIsId(r)) return t._selector = { _id: r }, t._recordPathUsed("_id"),
                        function(e) {
                            return { result: n.equals(e._id, r) } };
                    if (!r || "_id" in r && !r._id) return t._isSimple = !1, C;
                    if ("boolean" == typeof r || p(r) || n.isBinary(r)) throw new Error("Invalid selector: " + r);
                    return t._selector = n.clone(r), e(r, t, { isRoot: !0 }) }, _recordPathUsed: function(e) { this._paths[e] = !0 }, _getPaths: function() {
                    return r.keys(this._paths) } });
            var e = function(e, n, o) { o = o || {};
                    var i = [];
                    return r.each(e, function(e, a) {
                        if ("$" === a.substr(0, 1)) {
                            if (!r.has(s, a)) throw new Error("Unrecognized logical operator: " + a);
                            n._isSimple = !1, i.push(s[a](e, n, o.inElemMatch)) } else { o.inElemMatch || n._recordPathUsed(a);
                            var c = $(a),
                                u = t(e, n, o.isRoot);
                            i.push(function(e) {
                                var r = c(e);
                                return u(r) }) } }), A(i) },
                t = function(e, r, t) {
                    return e instanceof RegExp ? (r._isSimple = !1, o(g(e))) : m(e) ? i(e, r, t) : o(w(e)) },
                o = function(e, t) {
                    return t = t || {},
                        function(n) {
                            var o = n;
                            t.dontExpandLeafArrays || (o = I(n, t.dontIncludeLeafArrays));
                            var i = {};
                            return i.result = r.any(o, function(r) {
                                var t = e(r.value);
                                return "number" == typeof t && (r.arrayIndices || (r.arrayIndices = [t]), t = !0), t && r.arrayIndices && (i.arrayIndices = r.arrayIndices), t }), i } };
            g = function(e) {
                return function(t) {
                    return t instanceof RegExp ? r.isEqual(t, e) : "string" != typeof t ? !1 : (e.lastIndex = 0, e.test(t)) } }, w = function(e) {
                if (m(e)) throw Error("Can't create equalityValueSelector for operator object");
                return null == e ? function(e) {
                    return null == e } : function(r) {
                    return d._f._equal(e, r) } };
            var i = function(e, t, n) {
                    var i = [];
                    return r.each(e, function(a, s) {
                        var c = r.contains(["$lt", "$lte", "$gt", "$gte"], s) && r.isNumber(a),
                            u = "$ne" === s && !r.isObject(a),
                            d = r.contains(["$in", "$nin"], s) && r.isArray(a) && !r.any(a, r.isObject);
                        if ("$eq" === s || c || d || u || (t._isSimple = !1), r.has(h, s)) i.push(h[s](a, e, t, n));
                        else {
                            if (!r.has(b, s)) throw new Error("Unrecognized operator: " + s);
                            var f = b[s];
                            i.push(o(f.compileElementSelector(a, e, t), f)) } }), M(i) },
                a = function(t, n, o) {
                    if (!p(t) || r.isEmpty(t)) throw Error("$and/$or/$nor must be nonempty array");
                    return r.map(t, function(r) {
                        if (!v(r)) throw Error("$or/$and/$nor entries need to be full objects");
                        return e(r, n, { inElemMatch: o }) }) },
                s = { $and: function(e, r, t) {
                        var n = a(e, r, t);
                        return A(n) }, $or: function(e, t, n) {
                        var o = a(e, t, n);
                        return 1 === o.length ? o[0] : function(e) {
                            var t = r.any(o, function(r) {
                                return r(e).result });
                            return { result: t } } }, $nor: function(e, t, n) {
                        var o = a(e, t, n);
                        return function(e) {
                            var t = r.all(o, function(r) {
                                return !r(e).result });
                            return { result: t } } }, $where: function(e, r) {
                        return r._recordPathUsed(""), r._hasWhere = !0, e instanceof Function || (e = Function("obj", "return " + e)),
                            function(r) {
                                return { result: e.call(r, r) } } }, $comment: function() {
                        return function() {
                            return { result: !0 } } } },
                c = function(e) {
                    return function(r) {
                        var t = e(r);
                        return { result: !t.result } } },
                h = { $not: function(e, r, n) {
                        return c(t(e, n)) }, $ne: function(e) {
                        return c(o(w(e))) }, $nin: function(e) {
                        return c(o(b.$in.compileElementSelector(e))) }, $exists: function(e) {
                        var r = o(function(e) {
                            return void 0 !== e });
                        return e ? r : c(r) }, $options: function(e, t) {
                        if (!r.has(t, "$regex")) throw Error("$options needs a $regex");
                        return k }, $maxDistance: function(e, r) {
                        if (!r.$near) throw Error("$maxDistance needs a $near");
                        return k }, $all: function(e, n, o) {
                        if (!p(e)) throw Error("$all requires array");
                        if (r.isEmpty(e)) return C;
                        var i = [];
                        return r.each(e, function(e) {
                            if (m(e)) throw Error("no $ expressions in $all");
                            i.push(t(e, o)) }), M(i) }, $near: function(e, t, n, o) {
                        if (!o) throw Error("$near can't be inside another $ operator");
                        n._hasGeoQuery = !0;
                        var i, a, s;
                        if (v(e) && r.has(e, "$geometry")) i = e.$maxDistance, a = e.$geometry, s = function(e) {
                            return e && e.type ? "Point" === e.type ? u.pointDistance(a, e) : u.geometryWithinRadius(e, a, i) ? 0 : i + 1 : null };
                        else {
                            if (i = t.$maxDistance, !p(e) && !v(e)) throw Error("$near argument must be coordinate pair or GeoJSON");
                            a = O(e), s = function(e) {
                                return p(e) || v(e) ? E(a, e) : null } }
                        return function(e) { e = I(e);
                            var t = { result: !1 };
                            return r.each(e, function(e) {
                                var r = s(e.value);
                                null === r || r > i || void 0 !== t.distance && t.distance <= r || (t.result = !0, t.distance = r, e.arrayIndices ? t.arrayIndices = e.arrayIndices : delete t.arrayIndices) }), t } } },
                E = function(e, t) { e = O(e), t = O(t);
                    var n = e[0] - t[0],
                        o = e[1] - t[1];
                    return r.isNaN(n) || r.isNaN(o) ? null : Math.sqrt(n * n + o * o) },
                O = function(e) {
                    return r.map(e, r.identity) },
                j = function(e) {
                    return { compileElementSelector: function(r) {
                            if (p(r)) return function() {
                                return !1 };
                            void 0 === r && (r = null);
                            var t = d._f._type(r);
                            return function(n) {
                                return void 0 === n && (n = null), d._f._type(n) !== t ? !1 : e(d._f._cmp(n, r)) } } } };
            b = { $lt: j(function(e) {
                    return 0 > e }), $gt: j(function(e) {
                    return e > 0 }), $lte: j(function(e) {
                    return 0 >= e }), $gte: j(function(e) {
                    return e >= 0 }), $mod: { compileElementSelector: function(e) {
                        if (!p(e) || 2 !== e.length || "number" != typeof e[0] || "number" != typeof e[1]) throw Error("argument to $mod must be an array of two numbers");
                        var r = e[0],
                            t = e[1];
                        return function(e) {
                            return "number" == typeof e && e % r === t } } }, $in: { compileElementSelector: function(e) {
                        if (!p(e)) throw Error("$in needs an array");
                        var t = [];
                        return r.each(e, function(e) {
                                if (e instanceof RegExp) t.push(g(e));
                                else {
                                    if (m(e)) throw Error("cannot nest $ under $in");
                                    t.push(w(e)) } }),
                            function(e) {
                                return void 0 === e && (e = null), r.any(t, function(r) {
                                    return r(e) }) } } }, $size: { dontExpandLeafArrays: !0, compileElementSelector: function(e) {
                        if ("string" == typeof e) e = 0;
                        else if ("number" != typeof e) throw Error("$size needs a number");
                        return function(r) {
                            return p(r) && r.length === e } } }, $type: { dontIncludeLeafArrays: !0, compileElementSelector: function(e) {
                        if ("number" != typeof e) throw Error("$type needs a number");
                        return function(r) {
                            return void 0 !== r && d._f._type(r) === e } } }, $regex: { compileElementSelector: function(e, r) {
                        if (!("string" == typeof e || e instanceof RegExp)) throw Error("$regex has to be a string or RegExp");
                        var t;
                        if (void 0 !== r.$options) {
                            if (/[^gim]/.test(r.$options)) throw new Error("Only the i, m, and g regexp options are supported");
                            var n = e instanceof RegExp ? e.source : e;
                            t = new RegExp(n, r.$options) } else t = e instanceof RegExp ? e : new RegExp(e);
                        return g(t) } }, $elemMatch: { dontExpandLeafArrays: !0, compileElementSelector: function(r, n, o) {
                        if (!v(r)) throw Error("$elemMatch need an object");
                        var i, a;
                        return m(r, !0) ? (i = t(r, o), a = !1) : (i = e(r, o, { inElemMatch: !0 }), a = !0),
                            function(e) {
                                if (!p(e)) return !1;
                                for (var r = 0; r < e.length; ++r) {
                                    var t = e[r],
                                        n;
                                    if (a) {
                                        if (!v(t) && !p(t)) return !1;
                                        n = t } else n = [{ value: t, dontIterate: !0 }];
                                    if (i(n).result) return r }
                                return !1 } } } }, $ = function(e, t) { t = t || {};
                var n = e.split("."),
                    o = n.length ? n[0] : "",
                    i = y(o),
                    a = n.length >= 2 && y(n[1]),
                    s;
                n.length > 1 && (s = $(n.slice(1).join(".")));
                var c = function(e) {
                    return e.dontIterate || delete e.dontIterate, e.arrayIndices && !e.arrayIndices.length && delete e.arrayIndices, e };
                return function(e, n) {
                    if (n || (n = []), p(e)) {
                        if (!(i && o < e.length)) return [];
                        n = n.concat(+o, "x") }
                    var u = e[o];
                    if (!s) return [c({ value: u, dontIterate: p(e) && p(u), arrayIndices: n })];
                    if (!_(u)) return p(e) ? [] : [c({ value: void 0, arrayIndices: n })];
                    var d = [],
                        f = function(e) { Array.prototype.push.apply(d, e) };
                    return f(s(u, n)), !p(u) || a && t.forSort || r.each(u, function(e, r) { v(e) && f(s(e, n.concat(r))) }), d } }, l.makeLookupFunction = $, I = function(e, t) {
                var n = [];
                return r.each(e, function(e) {
                    var o = p(e.value);
                    t && o && !e.dontIterate || n.push({ value: e.value, arrayIndices: e.arrayIndices }), o && !e.dontIterate && r.each(e.value, function(r, t) { n.push({ value: r, arrayIndices: (e.arrayIndices || []).concat(t) }) }) }), n };
            var C = function(e) {
                    return { result: !1 } },
                k = function(e) {
                    return { result: !0 } },
                S = function(e) {
                    return 0 === e.length ? k : 1 === e.length ? e[0] : function(t) {
                        var n = {};
                        return n.result = r.all(e, function(e) {
                            var r = e(t);
                            return r.result && void 0 !== r.distance && void 0 === n.distance && (n.distance = r.distance), r.result && r.arrayIndices && (n.arrayIndices = r.arrayIndices), r.result }), n.result || (delete n.distance, delete n.arrayIndices), n } },
                A = S,
                M = S;
            d._f = { _type: function(e) {
                    return "number" == typeof e ? 1 : "string" == typeof e ? 2 : "boolean" == typeof e ? 8 : p(e) ? 4 : null === e ? 10 : e instanceof RegExp ? 11 : "function" == typeof e ? 13 : e instanceof Date ? 9 : n.isBinary(e) ? 5 : e instanceof d._ObjectID ? 7 : 3 }, _equal: function(e, r) {
                    return n.equals(e, r, { keyOrderSensitive: !0 }) }, _typeorder: function(e) {
                    return [-1, 1, 2, 3, 4, 5, -1, 6, 7, 8, 0, 9, -1, 100, 2, 100, 1, 8, 1][e] }, _cmp: function(e, r) {
                    if (void 0 === e) return void 0 === r ? 0 : -1;
                    if (void 0 === r) return 1;
                    var t = d._f._type(e),
                        n = d._f._type(r),
                        o = d._f._typeorder(t),
                        i = d._f._typeorder(n);
                    if (o !== i) return i > o ? -1 : 1;
                    if (t !== n) throw Error("Missing type coercion logic in _cmp");
                    if (7 === t && (t = n = 2, e = e.toHexString(), r = r.toHexString()), 9 === t && (t = n = 1, e = e.getTime(), r = r.getTime()), 1 === t) return e - r;
                    if (2 === n) return r > e ? -1 : e === r ? 0 : 1;
                    if (3 === t) {
                        var a = function(e) {
                            var r = [];
                            for (var t in e) r.push(t), r.push(e[t]);
                            return r };
                        return d._f._cmp(a(e), a(r)) }
                    if (4 === t)
                        for (var s = 0;; s++) {
                            if (s === e.length) return s === r.length ? 0 : -1;
                            if (s === r.length) return 1;
                            var c = d._f._cmp(e[s], r[s]);
                            if (0 !== c) return c }
                    if (5 === t) {
                        if (e.length !== r.length) return e.length - r.length;
                        for (s = 0; s < e.length; s++) {
                            if (e[s] < r[s]) return -1;
                            if (e[s] > r[s]) return 1 }
                        return 0 }
                    if (8 === t) return e ? r ? 0 : 1 : r ? -1 : 0;
                    if (10 === t) return 0;
                    if (11 === t) throw Error("Sorting not supported on regular expression");
                    if (13 === t) throw Error("Sorting not supported on Javascript code");
                    throw Error("Unknown type to sort") } }, d._removeDollarOperators = function(e) {
                var r = {};
                for (var t in e) "$" !== t.substr(0, 1) && (r[t] = e[t]);
                return r } }.call(this),
        function() { f.Sorter = function(n, o) {
                var i = this;
                o = o || {}, i._sortSpecParts = [];
                var a = function(e, r) {
                    if (!e) throw Error("sort keys must be non-empty");
                    if ("$" === e.charAt(0)) throw Error("unsupported sort key: " + e);
                    i._sortSpecParts.push({ path: e, lookup: $(e, { forSort: !0 }), ascending: r }) };
                if (n instanceof Array)
                    for (var s = 0; s < n.length; s++) "string" == typeof n[s] ? a(n[s], !0) : a(n[s][0], "desc" !== n[s][1]);
                else {
                    if ("object" != typeof n) throw Error("Bad sort specification: " + t.stringify(n));
                    r.each(n, function(e, r) { a(r, e >= 0) }) }
                if (i.affectedByModifier) {
                    var c = {};
                    r.each(i._sortSpecParts, function(e) { c[e.path] = 1 }), i._selectorForAffectedByModifier = new f.Matcher(c) }
                i._keyComparator = e(r.map(i._sortSpecParts, function(e, r) {
                    return i._keyFieldComparator(r) })), i._keyFilter = null, o.matcher && i._useWithMatcher(o.matcher) }, r.extend(f.Sorter.prototype, { getComparator: function(r) {
                    var t = this;
                    if (!r || !r.distances) return t._getBaseComparator();
                    var n = r.distances;
                    return e([t._getBaseComparator(), function(e, r) {
                        if (!n.has(e._id)) throw Error("Missing distance for " + e._id);
                        if (!n.has(r._id)) throw Error("Missing distance for " + r._id);
                        return n.get(e._id) - n.get(r._id) }]) }, _getPaths: function() {
                    var e = this;
                    return r.pluck(e._sortSpecParts, "path") }, _getMinKeyFromDoc: function(e) {
                    var r = this,
                        t = null;
                    if (r._generateKeysFromDoc(e, function(e) {
                            return r._keyCompatibleWithSelector(e) ? null === t ? void(t = e) : void(r._compareKeys(e, t) < 0 && (t = e)) : void 0 }), null === t) throw Error("sort selector found no keys in doc?");
                    return t }, _keyCompatibleWithSelector: function(e) {
                    var r = this;
                    return !r._keyFilter || r._keyFilter(e) }, _generateKeysFromDoc: function(e, t) {
                    var n = this;
                    if (0 === n._sortSpecParts.length) throw new Error("can't generate keys without a spec");
                    var o = [],
                        i = function(e) {
                            return e.join(",") + "," },
                        a = null;
                    if (r.each(n._sortSpecParts, function(t, n) {
                            var s = I(t.lookup(e), !0);
                            s.length || (s = [{ value: null }]);
                            var c = !1;
                            if (o[n] = {}, r.each(s, function(e) {
                                    if (!e.arrayIndices) {
                                        if (s.length > 1) throw Error("multiple branches but no array used?");
                                        return void(o[n][""] = e.value) }
                                    c = !0;
                                    var t = i(e.arrayIndices);
                                    if (r.has(o[n], t)) throw Error("duplicate path: " + t);
                                    if (o[n][t] = e.value, a && !r.has(a, t)) throw Error("cannot index parallel arrays") }), a) {
                                if (!r.has(o[n], "") && r.size(a) !== r.size(o[n])) throw Error("cannot index parallel arrays!") } else c && (a = {}, r.each(o[n], function(e, r) { a[r] = !0 })) }), !a) {
                        var s = r.map(o, function(e) {
                            if (!r.has(e, "")) throw Error("no value in sole key case?");
                            return e[""] });
                        return void t(s) }
                    r.each(a, function(e, n) {
                        var i = r.map(o, function(e) {
                            if (r.has(e, "")) return e[""];
                            if (!r.has(e, n)) throw Error("missing path?");
                            return e[n] });
                        t(i) }) }, _compareKeys: function(e, r) {
                    var t = this;
                    if (e.length !== t._sortSpecParts.length || r.length !== t._sortSpecParts.length) throw Error("Key has wrong length");
                    return t._keyComparator(e, r) }, _keyFieldComparator: function(e) {
                    var r = this,
                        t = !r._sortSpecParts[e].ascending;
                    return function(r, n) {
                        var o = d._f._cmp(r[e], n[e]);
                        return t && (o = -o), o } }, _getBaseComparator: function() {
                    var e = this;
                    return e._sortSpecParts.length ? function(r, t) {
                        var n = e._getMinKeyFromDoc(r),
                            o = e._getMinKeyFromDoc(t);
                        return e._compareKeys(n, o) } : function(e, r) {
                        return 0 } }, _useWithMatcher: function(e) {
                    var t = this;
                    if (t._keyFilter) throw Error("called _useWithMatcher twice?");
                    if (!r.isEmpty(t._sortSpecParts)) {
                        var n = e._selector;
                        if (!(n instanceof Function)) {
                            var o = {};
                            r.each(t._sortSpecParts, function(e, r) { o[e.path] = [] }), r.each(n, function(e, t) {
                                var n = o[t];
                                if (n) {
                                    if (e instanceof RegExp) {
                                        if (e.ignoreCase || e.multiline) return;
                                        return void n.push(g(e)) }
                                    return m(e) ? void r.each(e, function(t, o) { r.contains(["$lt", "$lte", "$gt", "$gte"], o) && n.push(b[o].compileElementSelector(t)), "$regex" !== o || e.$options || n.push(b.$regex.compileElementSelector(t, e)) }) : void n.push(w(e)) } }), r.isEmpty(o[t._sortSpecParts[0].path]) || (t._keyFilter = function(e) {
                                return r.all(t._sortSpecParts, function(t, n) {
                                    return r.all(o[t.path], function(r) {
                                        return r(e[n]) }) }) }) } } } });
            var e = function(e) {
                return function(r, t) {
                    for (var n = 0; n < e.length; ++n) {
                        var o = e[n](r, t);
                        if (0 !== o) return o }
                    return 0 } } }.call(this),
        function() { d._compileProjection = function(e) { d._checkSupportedProjection(e);
                var t = r.isUndefined(e._id) ? !0 : e._id,
                    o = E(e),
                    i = function(e, t) {
                        if (r.isArray(e)) return r.map(e, function(e) {
                            return i(e, t) });
                        var a = o.including ? {} : n.clone(e);
                        return r.each(t, function(t, s) { r.has(e, s) && (r.isObject(t) ? r.isObject(e[s]) && (a[s] = i(e[s], t)) : o.including ? a[s] = n.clone(e[s]) : delete a[s]) }), a };
                return function(e) {
                    var n = i(e, o.tree);
                    return t && r.has(e, "_id") && (n._id = e._id), !t && r.has(n, "_id") && delete n._id, n } }, E = function(e) {
                var t = r.keys(e).sort();
                t.length > 0 && (1 !== t.length || "_id" !== t[0]) && (t = r.reject(t, function(e) {
                    return "_id" === e }));
                var n = null;
                r.each(t, function(r) {
                    var t = !!e[r];
                    if (null === n && (n = t), n !== t) throw h("You cannot currently mix including and excluding fields.") });
                var o = O(t, function(e) {
                    return n }, function(e, r, t) {
                    var n = t,
                        o = r;
                    throw h("both " + n + " and " + o + " found in fields option, using both of them may trigger unexpected behavior. Did you mean to use only one of them?") });
                return { tree: o, including: n } }, O = function(e, t, n, o) {
                return o = o || {}, r.each(e, function(e) {
                    var i = o,
                        a = e.split("."),
                        s = r.all(a.slice(0, -1), function(t, o) {
                            if (r.has(i, t)) {
                                if (!r.isObject(i[t]) && (i[t] = n(i[t], a.slice(0, o + 1).join("."), e), !r.isObject(i[t]))) return !1 } else i[t] = {};
                            return i = i[t], !0 });
                    if (s) {
                        var c = r.last(a);
                        i[c] = r.has(i, c) ? n(i[c], e, e) : t(e) } }), o }, d._checkSupportedProjection = function(e) {
                if (!r.isObject(e) || r.isArray(e)) throw h("fields option must be an object");
                r.each(e, function(e, t) {
                    if (r.contains(t.split("."), "$")) throw h("Minimongo doesn't support $ operator in projections yet.");
                    if (-1 === r.indexOf([1, 0, !0, !1], e)) throw h("Projection values should be one of 1, 0, true, or false") }) } }.call(this),
        function() {
            d._modify = function(t, a, s) {
                if (s = s || {}, !v(a)) throw h("Modifier must be an object");
                var c = m(a),
                    u;
                if (c) u = n.clone(t), r.each(a, function(t, n) {
                    var a = i[n];
                    if (s.isInsert && "$setOnInsert" === n && (a = i.$set), !a) throw h("Invalid modifier specified " + n);
                    r.each(t, function(t, i) {
                        if ("" === i) throw h("An empty update path is not valid.");
                        if ("_id" === i) throw h("Mod on _id not allowed");
                        var c = i.split(".");
                        if (!r.all(c, r.identity)) throw h("The update path '" + i + "' contains an empty field name, which is not allowed.");
                        var d = r.has(o, n),
                            f = "$rename" === n,
                            l = e(u, c, { noCreate: o[n], forbidArray: "$rename" === n, arrayIndices: s.arrayIndices }),
                            p = c.pop();
                        a(l, p, t, i, u) }) });
                else {
                    if (a._id && !n.equals(t._id, a._id)) throw h("Cannot change the _id of a document");
                    for (var d in a)
                        if (/\./.test(d)) throw h("When replacing document, field name may not contain '.'");
                    u = a }
                r.each(r.keys(t), function(e) { "_id" !== e && delete t[e] }), r.each(u, function(e, r) { t[r] = e }) };
            var e = function(e, r, n) { n = n || {};
                    for (var o = !1, i = 0; i < r.length; i++) {
                        var a = i === r.length - 1,
                            s = r[i],
                            c = _(e);
                        if (!c) {
                            if (n.noCreate) return void 0;
                            var u = h("cannot use the part '" + s + "' to traverse " + e);
                            throw u.setPropertyError = !0, u }
                        if (e instanceof Array) {
                            if (n.forbidArray) return null;
                            if ("$" === s) {
                                if (o) throw h("Too many positional (i.e. '$') elements");
                                if (!n.arrayIndices || !n.arrayIndices.length) throw h("The positional operator did not find the match needed from the query");
                                s = n.arrayIndices[0], o = !0 } else {
                                if (!y(s)) {
                                    if (n.noCreate) return void 0;
                                    throw h("can't append to array using string field name [" + s + "]") }
                                s = parseInt(s) }
                            if (a && (r[i] = s), n.noCreate && s >= e.length) return void 0;
                            for (; e.length < s;) e.push(null);
                            if (!a)
                                if (e.length === s) e.push({});
                                else if ("object" != typeof e[s]) throw h("can't modify field '" + r[i + 1] + "' of list value " + t.stringify(e[s])) } else {
                            if (s.length && "$" === s.substr(0, 1)) throw h("can't set field named " + s);
                            if (!(s in e)) {
                                if (n.noCreate) return void 0;
                                a || (e[s] = {}) } }
                        if (a) return e;
                        e = e[s] } },
                o = { $unset: !0, $pop: !0, $rename: !0, $pull: !0, $pullAll: !0 },
                i = {
                    $inc: function(e, r, t) {
                        if ("number" != typeof t) throw h("Modifier $inc allowed for numbers only");
                        if (r in e) {
                            if ("number" != typeof e[r]) throw h("Cannot apply $inc modifier to non-number");
                            e[r] += t } else e[r] = t },
                    $set: function(e, t, o) {
                        if (!r.isObject(e)) {
                            var i = h("Cannot set property on non-object field");
                            throw i.setPropertyError = !0, i }
                        if (null === e) {
                            var i = h("Cannot set property on null");
                            throw i.setPropertyError = !0, i }
                        e[t] = n.clone(o) },
                    $setOnInsert: function(e, r, t) {},
                    $unset: function(e, r, t) { void 0 !== e && (e instanceof Array ? r in e && (e[r] = null) : delete e[r]) },
                    $push: function(e, r, t) {
                        if (void 0 === e[r] && (e[r] = []), !(e[r] instanceof Array)) throw h("Cannot apply $push modifier to non-array");
                        if (!t || !t.$each) return void e[r].push(n.clone(t));
                        var o = t.$each;
                        if (!(o instanceof Array)) throw h("$each must be an array");
                        var i = void 0;
                        if ("$slice" in t) {
                            if ("number" != typeof t.$slice) throw h("$slice must be a numeric value");
                            if (t.$slice > 0) throw h("$slice in $push must be zero or negative");
                            i = t.$slice }
                        var a = void 0;
                        if (t.$sort) {
                            if (void 0 === i) throw h("$sort requires $slice to be present");
                            a = new f.Sorter(t.$sort).getComparator();
                            for (var s = 0; s < o.length; s++)
                                if (3 !== d._f._type(o[s])) throw h("$push like modifiers using $sort require all elements to be objects") }
                        for (var c = 0; c < o.length; c++) e[r].push(n.clone(o[c]));
                        a && e[r].sort(a), void 0 !== i && (e[r] = 0 === i ? [] : e[r].slice(i)) },
                    $pushAll: function(e, r, t) {
                        if (!("object" == typeof t && t instanceof Array)) throw h("Modifier $pushAll/pullAll allowed for arrays only");
                        var n = e[r];
                        if (void 0 === n) e[r] = t;
                        else {
                            if (!(n instanceof Array)) throw h("Cannot apply $pushAll modifier to non-array");
                            for (var o = 0; o < t.length; o++) n.push(t[o]) } },
                    $addToSet: function(e, t, o) {
                        var i = !1;
                        if ("object" == typeof o)
                            for (var a in o) {
                                "$each" === a && (i = !0);
                                break
                            }
                        var s = i ? o.$each : [o],
                            c = e[t];
                        if (void 0 === c) e[t] = s;
                        else {
                            if (!(c instanceof Array)) throw h("Cannot apply $addToSet modifier to non-array");
                            r.each(s, function(e) {
                                for (var r = 0; r < c.length; r++)
                                    if (d._f._equal(e, c[r])) return;
                                c.push(n.clone(e)) }) }
                    },
                    $pop: function(e, r, t) {
                        if (void 0 !== e) {
                            var n = e[r];
                            if (void 0 !== n) {
                                if (!(n instanceof Array)) throw h("Cannot apply $pop modifier to non-array"); "number" == typeof t && 0 > t ? n.splice(0, 1) : n.pop() } } },
                    $pull: function(e, r, t) {
                        if (void 0 !== e) {
                            var n = e[r];
                            if (void 0 !== n) {
                                if (!(n instanceof Array)) throw h("Cannot apply $pull/pullAll modifier to non-array");
                                var o = [];
                                if ("object" != typeof t || t instanceof Array)
                                    for (var i = 0; i < n.length; i++) d._f._equal(n[i], t) || o.push(n[i]);
                                else
                                    for (var a = new f.Matcher(t), i = 0; i < n.length; i++) a.documentMatches(n[i]).result || o.push(n[i]);
                                e[r] = o } } },
                    $pullAll: function(e, r, t) {
                        if (!("object" == typeof t && t instanceof Array)) throw h("Modifier $pushAll/pullAll allowed for arrays only");
                        if (void 0 !== e) {
                            var n = e[r];
                            if (void 0 !== n) {
                                if (!(n instanceof Array)) throw h("Cannot apply $pull/pullAll modifier to non-array");
                                for (var o = [], i = 0; i < n.length; i++) {
                                    for (var a = !1, s = 0; s < t.length; s++)
                                        if (d._f._equal(n[i], t[s])) { a = !0;
                                            break }
                                    a || o.push(n[i]) }
                                e[r] = o } } },
                    $rename: function(r, t, n, o, i) {
                        if (o === n) throw h("$rename source must differ from target");
                        if (null === r) throw h("$rename source field invalid");
                        if ("string" != typeof n) throw h("$rename target must be a string");
                        if (void 0 !== r) {
                            var a = r[t];
                            delete r[t];
                            var s = n.split("."),
                                c = e(i, s, { forbidArray: !0 });
                            if (null === c) throw h("$rename target field invalid");
                            var u = s.pop();
                            c[u] = a } },
                    $bit: function(e, r, t) {
                        throw h("$bit is not supported") }
                }
        }.call(this),
        function() { d._diffQueryChanges = function(e, r, t, n, o) { e ? d._diffQueryOrderedChanges(r, t, n, o) : d._diffQueryUnorderedChanges(r, t, n, o) }, d._diffQueryUnorderedChanges = function(e, t, o, i) { i = i || {};
                var a = i.projectionFn || n.clone;
                if (o.movedBefore) throw new Error("_diffQueryUnordered called with a movedBefore observer!");
                t.forEach(function(t, i) {
                    var s = e.get(i);
                    if (s) {
                        if (o.changed && !n.equals(s, t)) {
                            var c = a(t),
                                u = a(s),
                                f = d._makeChangedFields(c, u);
                            r.isEmpty(f) || o.changed(i, f) } } else if (o.added) {
                        var l = a(t);
                        delete l._id, o.added(t._id, l) } }), o.removed && e.forEach(function(e, r) { t.has(r) || o.removed(r) }) }, d._diffQueryOrderedChanges = function(t, o, i, a) { a = a || {};
                var s = a.projectionFn || n.clone,
                    c = {};
                r.each(o, function(r) { c[r._id] && e._debug("Duplicate _id in new_results"), c[r._id] = !0 });
                var u = {};
                r.each(t, function(r, t) { r._id in u && e._debug("Duplicate _id in old_results"), u[r._id] = t });
                for (var f = [], l = 0, h = o.length, p = new Array(h), v = new Array(h), _ = function(e) {
                        return u[o[e]._id] }, m = 0; h > m; m++)
                    if (void 0 !== u[o[m]._id]) {
                        for (var y = l; y > 0 && !(_(p[y - 1]) < _(m));) y--;
                        v[m] = 0 === y ? -1 : p[y - 1], p[y] = m, y + 1 > l && (l = y + 1) }
                for (var g = 0 === l ? -1 : p[l - 1]; g >= 0;) f.push(g), g = v[g];
                f.reverse(), f.push(o.length), r.each(t, function(e) { c[e._id] || i.removed && i.removed(e._id) });
                var w = 0;
                r.each(f, function(e) {
                    for (var n = o[e] ? o[e]._id : null, a, c, f, l, h, p = w; e > p; p++) c = o[p], r.has(u, c._id) ? (a = t[u[c._id]], l = s(c), h = s(a), f = d._makeChangedFields(l, h), r.isEmpty(f) || i.changed && i.changed(c._id, f), i.movedBefore && i.movedBefore(c._id, n)) : (f = s(c), delete f._id, i.addedBefore && i.addedBefore(c._id, f, n), i.added && i.added(c._id, f));
                    n && (c = o[e], a = t[u[c._id]], l = s(c), h = s(a), f = d._makeChangedFields(l, h), r.isEmpty(f) || i.changed && i.changed(c._id, f)), w = e + 1 }) }, d._diffObjects = function(e, t, n) { r.each(e, function(e, o) { r.has(t, o) ? n.both && n.both(o, e, t[o]) : n.leftOnly && n.leftOnly(o, e) }), n.rightOnly && r.each(t, function(t, o) { r.has(e, o) || n.rightOnly(o, t) }) } }.call(this),
        function() { d._IdMap = function() {
                var e = this;
                o.call(e, d._idStringify, d._idParse) }, e._inherits(d._IdMap, o) }.call(this),
        function() { d._CachingChangeObserver = function(e) {
                var t = this;
                e = e || {};
                var o = e.callbacks && d._observeChangesCallbacksAreOrdered(e.callbacks);
                if (r.has(e, "ordered")) {
                    if (t.ordered = e.ordered, e.callbacks && e.ordered !== o) throw Error("ordered option doesn't match callbacks") } else {
                    if (!e.callbacks) throw Error("must provide ordered or callbacks");
                    t.ordered = o }
                var a = e.callbacks || {};
                t.ordered ? (t.docs = new i(d._idStringify), t.applyChange = { addedBefore: function(e, r, o) {
                        var i = n.clone(r);
                        i._id = e, a.addedBefore && a.addedBefore.call(t, e, r, o), a.added && a.added.call(t, e, r), t.docs.putBefore(e, i, o || null) }, movedBefore: function(e, r) {
                        var n = t.docs.get(e);
                        a.movedBefore && a.movedBefore.call(t, e, r), t.docs.moveBefore(e, r || null) } }) : (t.docs = new d._IdMap, t.applyChange = { added: function(e, r) {
                        var o = n.clone(r);
                        a.added && a.added.call(t, e, r), o._id = e, t.docs.set(e, o) } }), t.applyChange.changed = function(e, r) {
                    var o = t.docs.get(e);
                    if (!o) throw new Error("Unknown id for changed: " + e);
                    a.changed && a.changed.call(t, e, n.clone(r)), d._applyChanges(o, r) }, t.applyChange.removed = function(e) { a.removed && a.removed.call(t, e), t.docs.remove(e) } }, d._observeFromObserveChanges = function(e, t) {
                var o = e.getTransform() || function(e) {
                        return e },
                    i = !!t._suppress_initial,
                    a;
                if (d._observeCallbacksAreOrdered(t)) {
                    var s = !t._no_indices;
                    a = { addedBefore: function(e, n, a) {
                            var c = this;
                            if (!i && (t.addedAt || t.added)) {
                                var u = o(r.extend(n, { _id: e }));
                                if (t.addedAt) {
                                    var d = s ? a ? c.docs.indexOf(a) : c.docs.size() : -1;
                                    t.addedAt(u, d, a) } else t.added(u) } }, changed: function(e, r) {
                            var i = this;
                            if (t.changedAt || t.changed) {
                                var a = n.clone(i.docs.get(e));
                                if (!a) throw new Error("Unknown id for changed: " + e);
                                var c = o(n.clone(a));
                                if (d._applyChanges(a, r), a = o(a), t.changedAt) {
                                    var u = s ? i.docs.indexOf(e) : -1;
                                    t.changedAt(a, c, u) } else t.changed(a, c) } }, movedBefore: function(e, r) {
                            var i = this;
                            if (t.movedTo) {
                                var a = s ? i.docs.indexOf(e) : -1,
                                    c = s ? r ? i.docs.indexOf(r) : i.docs.size() : -1;
                                c > a && --c, t.movedTo(o(n.clone(i.docs.get(e))), a, c, r || null) } }, removed: function(e) {
                            var r = this;
                            if (t.removedAt || t.removed) {
                                var n = o(r.docs.get(e));
                                if (t.removedAt) {
                                    var i = s ? r.docs.indexOf(e) : -1;
                                    t.removedAt(n, i) } else t.removed(n) } } } } else a = { added: function(e, n) {
                        if (!i && t.added) {
                            var a = r.extend(n, { _id: e });
                            t.added(o(a)) } }, changed: function(e, r) {
                        var i = this;
                        if (t.changed) {
                            var a = i.docs.get(e),
                                s = n.clone(a);
                            d._applyChanges(s, r), t.changed(o(s), o(n.clone(a))) } }, removed: function(e) {
                        var r = this;
                        t.removed && t.removed(o(r.docs.get(e))) } };
                var c = new d._CachingChangeObserver({ callbacks: a }),
                    u = e.observeChanges(c.applyChange);
                return i = !1, u } }.call(this),
        function() { d._looksLikeObjectID = function(e) {
                return 24 === e.length && e.match(/^[0-9a-f]*$/) }, d._ObjectID = function(e) {
                var r = this;
                if (e) {
                    if (e = e.toLowerCase(), !d._looksLikeObjectID(e)) throw new Error("Invalid hexadecimal string for creating an ObjectID");
                    r._str = e } else r._str = c.hexString(24) }, d._ObjectID.prototype.toString = function() {
                var e = this;
                return 'ObjectID("' + e._str + '")' }, d._ObjectID.prototype.equals = function(e) {
                var r = this;
                return e instanceof d._ObjectID && r.valueOf() === e.valueOf() }, d._ObjectID.prototype.clone = function() {
                var e = this;
                return new d._ObjectID(e._str) }, d._ObjectID.prototype.typeName = function() {
                return "oid" }, d._ObjectID.prototype.getTimestamp = function() {
                var e = this;
                return parseInt(e._str.substr(0, 8), 16) }, d._ObjectID.prototype.valueOf = d._ObjectID.prototype.toJSONValue = d._ObjectID.prototype.toHexString = function() {
                return this._str }, d._selectorIsId = function(e) {
                return "string" == typeof e || "number" == typeof e || e instanceof d._ObjectID }, d._selectorIsIdPerhapsAsObject = function(e) {
                return d._selectorIsId(e) || e && "object" == typeof e && e._id && d._selectorIsId(e._id) && 1 === r.size(e) }, d._idsMatchedBySelector = function(e) {
                if (d._selectorIsId(e)) return [e];
                if (!e) return null;
                if (r.has(e, "_id")) return d._selectorIsId(e._id) ? [e._id] : e._id && e._id.$in && r.isArray(e._id.$in) && !r.isEmpty(e._id.$in) && r.all(e._id.$in, d._selectorIsId) ? e._id.$in : null;
                if (e.$and && r.isArray(e.$and))
                    for (var t = 0; t < e.$and.length; ++t) {
                        var n = d._idsMatchedBySelector(e.$and[t]);
                        if (n) return n }
                return null }, n.addType("oid", function(e) {
                return new d._ObjectID(e) }) }.call(this), "undefined" == typeof Package && (Package = {}), Package.minimongo = { LocalCollection: d, Minimongo: f, MinimongoTest: l }
}();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.check.check,
        n = Package.check.Match,
        r = Package.random.Random,
        o = Package.ejson.EJSON,
        i = Package.json.JSON,
        a = Package.underscore._,
        s = Package.tracker.Tracker,
        u = Package.tracker.Deps,
        c = Package.logging.Log,
        l = Package.retry.Retry,
        d = Package.minimongo.LocalCollection,
        f = Package.minimongo.Minimongo,
        _, p, h, v, m, g, b, y, w, k, S, C, T;
    (function() { _ = {}, p = {} }).call(this),
        function() { h = function() {
                var e = document,
                    t = window,
                    n = {},
                    r = function() {};
                r.prototype.addEventListener = function(e, t) { this._listeners || (this._listeners = {}), e in this._listeners || (this._listeners[e] = []);
                    var r = this._listeners[e]; - 1 === n.arrIndexOf(r, t) && r.push(t) }, r.prototype.removeEventListener = function(e, t) {
                    if (this._listeners && e in this._listeners) {
                        var r = this._listeners[e],
                            o = n.arrIndexOf(r, t);
                        return -1 !== o ? void(r.length > 1 ? this._listeners[e] = r.slice(0, o).concat(r.slice(o + 1)) : delete this._listeners[e]) : void 0 } }, r.prototype.dispatchEvent = function(e) {
                    var t = e.type,
                        n = Array.prototype.slice.call(arguments, 0);
                    if (this["on" + t] && this["on" + t].apply(this, n), this._listeners && t in this._listeners)
                        for (var r = 0; r < this._listeners[t].length; r++) this._listeners[t][r].apply(this, n) };
                var o = function(e, t) {
                    if (this.type = e, "undefined" != typeof t)
                        for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]) };
                o.prototype.toString = function() {
                    var e = [];
                    for (var t in this)
                        if (this.hasOwnProperty(t)) {
                            var n = this[t]; "function" == typeof n && (n = "[function]"), e.push(t + "=" + n) }
                    return "SimpleEvent(" + e.join(", ") + ")" };
                var a = function(e) {
                    var t = this;
                    t._events = e || [], t._listeners = {} };
                a.prototype.emit = function(e) {
                    var t = this;
                    if (t._verifyType(e), !t._nuked) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        if (t["on" + e] && t["on" + e].apply(t, n), e in t._listeners)
                            for (var r = 0; r < t._listeners[e].length; r++) t._listeners[e][r].apply(t, n) } }, a.prototype.on = function(e, t) {
                    var n = this;
                    n._verifyType(e), n._nuked || (e in n._listeners || (n._listeners[e] = []), n._listeners[e].push(t)) }, a.prototype._verifyType = function(e) {
                    var t = this; - 1 === n.arrIndexOf(t._events, e) && n.log("Event " + i.stringify(e) + " not listed " + i.stringify(t._events) + " in " + t) }, a.prototype.nuke = function() {
                    var e = this;
                    e._nuked = !0;
                    for (var t = 0; t < e._events.length; t++) delete e[e._events[t]];
                    e._listeners = {} };
                var s = "abcdefghijklmnopqrstuvwxyz0123456789_";
                n.random_string = function(e, t) { t = t || s.length;
                    var n, r = [];
                    for (n = 0; e > n; n++) r.push(s.substr(Math.floor(Math.random() * t), 1));
                    return r.join("") }, n.random_number = function(e) {
                    return Math.floor(Math.random() * e) }, n.random_number_string = function(e) {
                    var t = ("" + (e - 1)).length,
                        r = Array(t + 1).join("0");
                    return (r + n.random_number(e)).slice(-t) }, n.getOrigin = function(e) { e += "/";
                    var t = e.split("/").slice(0, 3);
                    return t.join("/") }, n.isSameOriginUrl = function(e, n) {
                    return n || (n = t.location.href), e.split("/").slice(0, 3).join("/") === n.split("/").slice(0, 3).join("/") }, n.isSameOriginScheme = function(e, n) {
                    return n || (n = t.location.href), e.split(":")[0] === n.split(":")[0] }, n.getParentDomain = function(e) {
                    if (/^[0-9.]*$/.test(e)) return e;
                    if (/^\[/.test(e)) return e;
                    if (!/[.]/.test(e)) return e;
                    var t = e.split(".").slice(1);
                    return t.join(".") }, n.objectExtend = function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e };
                var u = "_jp";
                n.polluteGlobalNamespace = function() { u in t || (t[u] = {}) }, n.closeFrame = function(e, t) {
                    return "c" + i.stringify([e, t]) }, n.userSetCode = function(e) {
                    return 1e3 === e || e >= 3e3 && 4999 >= e }, n.countRTO = function(e) {
                    var t;
                    return t = e > 100 ? 3 * e : e + 200 }, n.log = function() { t.console && console.log && console.log.apply && console.log.apply(console, arguments) }, n.bind = function(e, t) {
                    return e.bind ? e.bind(t) : function() {
                        return e.apply(t, arguments) } }, n.flatUrl = function(e) {
                    return -1 === e.indexOf("?") && -1 === e.indexOf("#") }, n.amendUrl = function(t, r) {
                    var o;
                    if (void 0 === r) o = e.location;
                    else {
                        var i = /^([a-z0-9.+-]+:)/i.exec(r);
                        if (i) {
                            var a = i[0].toLowerCase(),
                                s = r.substring(a.length),
                                u = /[a-z0-9\.-]+(:[0-9]+)?/.exec(s);
                            if (u) var c = u[0] }
                        if (!a || !c) throw new Error("relativeTo must be an absolute url");
                        o = { protocol: a, host: c } }
                    if (!t) throw new Error("Wrong url for SockJS");
                    if (!n.flatUrl(t)) throw new Error("Only basic urls are supported in SockJS");
                    0 === t.indexOf("//") && (t = o.protocol + t), 0 === t.indexOf("/") && (t = o.protocol + "//" + o.host + t), t = t.replace(/[/]+$/, "");
                    var l = t.split("/");
                    return ("http:" === l[0] && /:80$/.test(l[2]) || "https:" === l[0] && /:443$/.test(l[2])) && (l[2] = l[2].replace(/:(80|443)$/, "")), t = l.join("/") }, n.arrIndexOf = function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (e[n] === t) return n;
                    return -1 }, n.arrSkip = function(e, t) {
                    var r = n.arrIndexOf(e, t);
                    if (-1 === r) return e.slice();
                    var o = e.slice(0, r);
                    return o.concat(e.slice(r + 1)) }, n.isArray = Array.isArray || function(e) {
                    return {}.toString.call(e).indexOf("Array") >= 0 }, n.delay = function(e, t) {
                    return "function" == typeof e && (t = e, e = 0), setTimeout(t, e) };
                var c = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    l = { "\x00": "\\u0000", "": "\\u0001", "": "\\u0002", "": "\\u0003", "": "\\u0004", "": "\\u0005", "": "\\u0006", "": "\\u0007", "\b": "\\b", "	": "\\t", "\n": "\\n", "": "\\u000b", "\f": "\\f", "\r": "\\r", "": "\\u000e", "": "\\u000f", "": "\\u0010", "": "\\u0011", "": "\\u0012", "": "\\u0013", "": "\\u0014", "": "\\u0015", "": "\\u0016", "": "\\u0017", "": "\\u0018", "": "\\u0019", "": "\\u001a", "": "\\u001b", "": "\\u001c", "": "\\u001d", "": "\\u001e", "": "\\u001f", '"': '\\"', "\\": "\\\\", "": "\\u007f", "": "\\u0080", "": "\\u0081", "": "\\u0082", "": "\\u0083", "": "\\u0084", "": "\\u0085", "": "\\u0086", "": "\\u0087", "": "\\u0088", "": "\\u0089", "": "\\u008a", "": "\\u008b", "": "\\u008c", "": "\\u008d", "": "\\u008e", "": "\\u008f", "": "\\u0090", "": "\\u0091", "": "\\u0092", "": "\\u0093", "": "\\u0094", "": "\\u0095", "": "\\u0096", "": "\\u0097", "": "\\u0098", "": "\\u0099", "": "\\u009a", "": "\\u009b", "": "\\u009c", "": "\\u009d", "": "\\u009e", "": "\\u009f", "­": "\\u00ad", "؀": "\\u0600", "؁": "\\u0601", "؂": "\\u0602", "؃": "\\u0603", "؄": "\\u0604", "܏": "\\u070f", "឴": "\\u17b4", "឵": "\\u17b5", "‌": "\\u200c", "‍": "\\u200d", "‎": "\\u200e", "‏": "\\u200f", "\u2028": "\\u2028", "\u2029": "\\u2029", "‪": "\\u202a", "‫": "\\u202b", "‬": "\\u202c", "‭": "\\u202d", "‮": "\\u202e", " ": "\\u202f", "⁠": "\\u2060", "⁡": "\\u2061", "⁢": "\\u2062", "⁣": "\\u2063", "⁤": "\\u2064", "⁥": "\\u2065", "⁦": "\\u2066", "⁧": "\\u2067", "⁨": "\\u2068", "⁩": "\\u2069", "⁪": "\\u206a", "⁫": "\\u206b", "⁬": "\\u206c", "⁭": "\\u206d", "⁮": "\\u206e", "⁯": "\\u206f", "\ufeff": "\\ufeff", "￰": "\\ufff0", "￱": "\\ufff1", "￲": "\\ufff2", "￳": "\\ufff3", "￴": "\\ufff4", "￵": "\\ufff5", "￶": "\\ufff6", "￷": "\\ufff7", "￸": "\\ufff8", "￹": "\\ufff9", "￺": "\\ufffa", "￻": "\\ufffb", "￼": "\\ufffc", "�": "\\ufffd", "￾": "\\ufffe", "￿": "\\uffff" },
                    d = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
                    f, _ = i && i.stringify || function(e) {
                        return c.lastIndex = 0, c.test(e) && (e = e.replace(c, function(e) {
                            return l[e] })), '"' + e + '"' },
                    p = function(e) {
                        var t, n = {},
                            r = [];
                        for (t = 0; 65536 > t; t++) r.push(String.fromCharCode(t));
                        return e.lastIndex = 0, r.join("").replace(e, function(e) {
                            return n[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), "" }), e.lastIndex = 0, n };
                n.quote = function(e) {
                    var t = _(e);
                    return d.lastIndex = 0, d.test(t) ? (f || (f = p(d)), t.replace(d, function(e) {
                        return f[e] })) : t };
                var h = ["websocket", "xdr-streaming", "xhr-streaming", "iframe-eventsource", "iframe-htmlfile", "xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"];
                n.probeProtocols = function() {
                    for (var e = {}, t = 0; t < h.length; t++) {
                        var n = h[t];
                        e[n] = T[n] && T[n].enabled() }
                    return e }, n.detectProtocols = function(e, t, n) {
                    var r = {},
                        o = [];
                    t || (t = h);
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        r[a] = e[a] }
                    var s = function(e) {
                        var t = e.shift();
                        r[t] ? o.push(t) : e.length > 0 && s(e) };
                    return n.websocket !== !1 && s(["websocket"]), r["xhr-streaming"] && !n.null_origin ? o.push("xhr-streaming") : !r["xdr-streaming"] || n.cookie_needed || n.null_origin ? s(["iframe-eventsource", "iframe-htmlfile"]) : o.push("xdr-streaming"), r["xhr-polling"] && !n.null_origin ? o.push("xhr-polling") : !r["xdr-polling"] || n.cookie_needed || n.null_origin ? s(["iframe-xhr-polling", "jsonp-polling"]) : o.push("xdr-polling"), o };
                var v = "_sockjs_global";
                n.createHook = function() {
                    var e = "a" + n.random_string(8);
                    if (!(v in t)) {
                        var r = {};
                        t[v] = function(e) {
                            return e in r || (r[e] = { id: e, del: function() { delete r[e] } }), r[e] } }
                    return t[v](e) }, n.attachMessage = function(e) { n.attachEvent("message", e) }, n.attachEvent = function(n, r) { "undefined" != typeof t.addEventListener ? t.addEventListener(n, r, !1) : (e.attachEvent("on" + n, r), t.attachEvent("on" + n, r)) }, n.detachMessage = function(e) { n.detachEvent("message", e) }, n.detachEvent = function(n, r) { "undefined" != typeof t.addEventListener ? t.removeEventListener(n, r, !1) : (e.detachEvent("on" + n, r), t.detachEvent("on" + n, r)) };
                var m = {},
                    g = !1,
                    b = function() {
                        for (var e in m) m[e](), delete m[e] },
                    y = function() { g || (g = !0, b()) };
                n.attachEvent("unload", y), n.unload_add = function(e) {
                    var t = n.random_string(8);
                    return m[t] = e, g && n.delay(b), t }, n.unload_del = function(e) { e in m && delete m[e] }, n.createIframe = function(t, r) {
                    var o = e.createElement("iframe"),
                        i, a, s = function() { clearTimeout(i);
                            try { o.onload = null } catch (e) {}
                            o.onerror = null },
                        u = function() { o && (s(), setTimeout(function() { o && o.parentNode.removeChild(o), o = null }, 0), n.unload_del(a)) },
                        c = function(e) { o && (u(), r(e)) },
                        l = function(e, t) {
                            try { o && o.contentWindow && o.contentWindow.postMessage(e, t) } catch (n) {} };
                    return o.src = t, o.style.display = "none", o.style.position = "absolute", o.onerror = function() { c("onerror") }, o.onload = function() { clearTimeout(i), i = setTimeout(function() { c("onload timeout") }, 2e3) }, e.body.appendChild(o), i = setTimeout(function() { c("timeout") }, 15e3), a = n.unload_add(u), { post: l, cleanup: u, loaded: s } }, n.createHtmlfile = function(e, r) {
                    var o = new ActiveXObject("htmlfile"),
                        i, a, s, c = function() { clearTimeout(i) },
                        l = function() { o && (c(), n.unload_del(a), s.parentNode.removeChild(s), s = o = null, CollectGarbage()) },
                        d = function(e) { o && (l(), r(e)) },
                        f = function(e, t) {
                            try { s && s.contentWindow && s.contentWindow.postMessage(e, t) } catch (n) {} };
                    o.open(), o.write('<html><script>document.domain="' + document.domain + '";</script></html>'), o.close(), o.parentWindow[u] = t[u];
                    var _ = o.createElement("div");
                    return o.body.appendChild(_), s = o.createElement("iframe"), _.appendChild(s), s.src = e, i = setTimeout(function() { d("timeout") }, 15e3), a = n.unload_add(l), { post: f, cleanup: l, loaded: c } };
                var w = function() {};
                w.prototype = new a(["chunk", "finish"]), w.prototype._start = function(e, r, o, i) {
                    var a = this;
                    try { a.xhr = new XMLHttpRequest } catch (s) {}
                    if (!a.xhr) try { a.xhr = new t.ActiveXObject("Microsoft.XMLHTTP") } catch (s) {}(t.ActiveXObject || t.XDomainRequest) && (r += (-1 === r.indexOf("?") ? "?" : "&") + "t=" + +new Date), a.unload_ref = n.unload_add(function() { a._cleanup(!0) });
                    try { a.xhr.open(e, r, !0) } catch (u) {
                        return a.emit("finish", 0, ""), void a._cleanup() }
                    if (i && i.no_credentials || (a.xhr.withCredentials = "true"), i && i.headers)
                        for (var c in i.headers) a.xhr.setRequestHeader(c, i.headers[c]);
                    a.xhr.onreadystatechange = function() {
                        if (a.xhr) {
                            var e = a.xhr;
                            switch (e.readyState) {
                                case 3:
                                    try {
                                        var t = e.status,
                                            n = e.responseText } catch (e) {}
                                    1223 === t && (t = 204), n && n.length > 0 && a.emit("chunk", t, n);
                                    break;
                                case 4:
                                    var t = e.status;
                                    1223 === t && (t = 204), a.emit("finish", t, e.responseText), a._cleanup(!1) } } }, a.xhr.send(o) }, w.prototype._cleanup = function(e) {
                    var t = this;
                    if (t.xhr) {
                        if (n.unload_del(t.unload_ref), t.xhr.onreadystatechange = function() {}, e) try { t.xhr.abort() } catch (r) {}
                        t.unload_ref = t.xhr = null } }, w.prototype.close = function() {
                    var e = this;
                    e.nuke(), e._cleanup(!0) };
                var k = n.XHRCorsObject = function() {
                    var e = this,
                        t = arguments;
                    n.delay(function() { e._start.apply(e, t) }) };
                k.prototype = new w;
                var S = n.XHRLocalObject = function(e, t, r) {
                    var o = this;
                    n.delay(function() { o._start(e, t, r, { no_credentials: !0 }) }) };
                S.prototype = new w;
                var C = n.XDRObject = function(e, t, r) {
                    var o = this;
                    n.delay(function() { o._start(e, t, r) }) };
                C.prototype = new a(["chunk", "finish"]), C.prototype._start = function(e, t, r) {
                    var o = this,
                        i = new XDomainRequest;
                    t += (-1 === t.indexOf("?") ? "?" : "&") + "t=" + +new Date;
                    var a = i.ontimeout = i.onerror = function() { o.emit("finish", 0, ""), o._cleanup(!1) };
                    i.onprogress = function() { o.emit("chunk", 200, i.responseText) }, i.onload = function() { o.emit("finish", 200, i.responseText), o._cleanup(!1) }, o.xdr = i, o.unload_ref = n.unload_add(function() { o._cleanup(!0) });
                    try { o.xdr.open(e, t), o.xdr.send(r) } catch (s) { a() } }, C.prototype._cleanup = function(e) {
                    var t = this;
                    if (t.xdr) {
                        if (n.unload_del(t.unload_ref), t.xdr.ontimeout = t.xdr.onerror = t.xdr.onprogress = t.xdr.onload = null, e) try { t.xdr.abort() } catch (r) {}
                        t.unload_ref = t.xdr = null } }, C.prototype.close = function() {
                    var e = this;
                    e.nuke(), e._cleanup(!0) }, n.isXHRCorsCapable = function() {
                    return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? 1 : t.XDomainRequest && e.domain ? 2 : B.enabled() ? 3 : 4 };
                var T = function(e, t, r) {
                    if (!(this instanceof T)) return new T(e, t, r);
                    var o = this,
                        i;
                    o._options = { devel: !1, debug: !1, protocols_whitelist: [], info: void 0, rtt: void 0 }, r && n.objectExtend(o._options, r), o._base_url = n.amendUrl(e), o._server = o._options.server || n.random_number_string(1e3), o._options.protocols_whitelist && o._options.protocols_whitelist.length ? i = o._options.protocols_whitelist : (i = "string" == typeof t && t.length > 0 ? [t] : n.isArray(t) ? t : null, i && o._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.')), o._protocols = [], o.protocol = null, o.readyState = T.CONNECTING, o._ir = q(o._base_url), o._ir.onfinish = function(e, t) { o._ir = null, e ? (o._options.info && (e = n.objectExtend(e, o._options.info)), o._options.rtt && (t = o._options.rtt), o._applyInfo(e, t, i), o._didClose()) : o._didClose(1002, "Can't connect to server", !0) } };
                T.prototype = new r, T.version = "0.3.4", T.CONNECTING = 0, T.OPEN = 1, T.CLOSING = 2, T.CLOSED = 3, T.prototype._debug = function() { this._options.debug && n.log.apply(n, arguments) }, T.prototype._dispatchOpen = function() {
                    var e = this;
                    e.readyState === T.CONNECTING ? (e._transport_tref && (clearTimeout(e._transport_tref), e._transport_tref = null), e.readyState = T.OPEN, e.dispatchEvent(new o("open"))) : e._didClose(1006, "Server lost session") }, T.prototype._dispatchMessage = function(e) {
                    var t = this;
                    t.readyState === T.OPEN && t.dispatchEvent(new o("message", { data: e })) }, T.prototype._dispatchHeartbeat = function(e) {
                    var t = this;
                    t.readyState === T.OPEN && t.dispatchEvent(new o("heartbeat", {})) }, T.prototype._didClose = function(e, t, r) {
                    var i = this;
                    if (i.readyState !== T.CONNECTING && i.readyState !== T.OPEN && i.readyState !== T.CLOSING) throw new Error("INVALID_STATE_ERR");
                    i._ir && (i._ir.nuke(), i._ir = null), i._transport && (i._transport.doCleanup(), i._transport = null);
                    var a = new o("close", { code: e, reason: t, wasClean: n.userSetCode(e) });
                    if (!n.userSetCode(e) && i.readyState === T.CONNECTING && !r) {
                        if (i._try_next_protocol(a)) return;
                        a = new o("close", { code: 2e3, reason: "All transports failed", wasClean: !1, last_event: a }) }
                    i.readyState = T.CLOSED, n.delay(function() { i.dispatchEvent(a) }) }, T.prototype._didMessage = function(e) {
                    var t = this,
                        n = e.slice(0, 1);
                    switch (n) {
                        case "o":
                            t._dispatchOpen();
                            break;
                        case "a":
                            for (var r = i.parse(e.slice(1) || "[]"), o = 0; o < r.length; o++) t._dispatchMessage(r[o]);
                            break;
                        case "m":
                            var r = i.parse(e.slice(1) || "null");
                            t._dispatchMessage(r);
                            break;
                        case "c":
                            var r = i.parse(e.slice(1) || "[]");
                            t._didClose(r[0], r[1]);
                            break;
                        case "h":
                            t._dispatchHeartbeat() } }, T.prototype._try_next_protocol = function(t) {
                    var r = this;
                    for (r.protocol && (r._debug("Closed transport:", r.protocol, "" + t), r.protocol = null), r._transport_tref && (clearTimeout(r._transport_tref), r._transport_tref = null);;) {
                        var o = r.protocol = r._protocols.shift();
                        if (!o) return !1;
                        if (T[o] && T[o].need_body === !0 && (!e.body || "undefined" != typeof e.readyState && "complete" !== e.readyState)) return r._protocols.unshift(o), r.protocol = "waiting-for-load", n.attachEvent("load", function() { r._try_next_protocol() }), !0;
                        if (T[o] && T[o].enabled(r._options)) {
                            var i = T[o].roundTrips || 1,
                                a = (r._options.rto || 0) * i || 5e3;
                            r._transport_tref = n.delay(a, function() { r.readyState === T.CONNECTING && r._didClose(2007, "Transport timeouted") });
                            var s = n.random_string(8),
                                u = r._base_url + "/" + r._server + "/" + s;
                            return r._debug("Opening transport:", o, " url:" + u, " RTO:" + r._options.rto), r._transport = new T[o](r, u, r._base_url), !0 }
                        r._debug("Skipping transport:", o) } }, T.prototype.close = function(e, t) {
                    var r = this;
                    if (e && !n.userSetCode(e)) throw new Error("INVALID_ACCESS_ERR");
                    return r.readyState !== T.CONNECTING && r.readyState !== T.OPEN ? !1 : (r.readyState = T.CLOSING, r._didClose(e || 1e3, t || "Normal closure"), !0) }, T.prototype.send = function(e) {
                    var t = this;
                    if (t.readyState === T.CONNECTING) throw new Error("INVALID_STATE_ERR");
                    return t.readyState === T.OPEN && t._transport.doSend(n.quote("" + e)), !0 }, T.prototype._applyInfo = function(t, r, o) {
                    var i = this;
                    i._options.info = t, i._options.rtt = r, i._options.rto = n.countRTO(r), i._options.info.null_origin = !e.domain, t.base_url && (i._base_url = n.amendUrl(t.base_url, i._base_url));
                    var a = n.probeProtocols();
                    i._protocols = n.detectProtocols(a, o, t), n.isSameOriginScheme(i._base_url) || 2 !== n.isXHRCorsCapable() || (i._protocols = ["jsonp-polling"]) };
                var E = T.websocket = function(e, r) {
                    var o = this,
                        i = r + "/websocket";
                    i = "https" === i.slice(0, 5) ? "wss" + i.slice(5) : "ws" + i.slice(4), o.ri = e, o.url = i;
                    var a = t.WebSocket || t.MozWebSocket;
                    o.ws = new a(o.url), o.ws.onmessage = function(e) { o.ri._didMessage(e.data) }, o.unload_ref = n.unload_add(function() { o.ws.close() }), o.ws.onclose = function() { o.ri._didMessage(n.closeFrame(1006, "WebSocket connection broken")) } };
                E.prototype.doSend = function(e) { this.ws.send("[" + e + "]") }, E.prototype.doCleanup = function() {
                    var e = this,
                        t = e.ws;
                    t && (t.onmessage = t.onclose = null, t.close(), n.unload_del(e.unload_ref), e.unload_ref = e.ri = e.ws = null) }, E.enabled = function() {
                    return !(!t.WebSocket && !t.MozWebSocket) }, E.roundTrips = 2;
                var O = function() {};
                O.prototype.send_constructor = function(e) {
                    var t = this;
                    t.send_buffer = [], t.sender = e }, O.prototype.doSend = function(e) {
                    var t = this;
                    t.send_buffer.push(e), t.send_stop || t.send_schedule() }, O.prototype.send_schedule_wait = function() {
                    var e = this,
                        t;
                    e.send_stop = function() { e.send_stop = null, clearTimeout(t) }, t = n.delay(25, function() { e.send_stop = null, e.send_schedule() }) }, O.prototype.send_schedule = function() {
                    var e = this;
                    if (e.send_buffer.length > 0) {
                        var t = "[" + e.send_buffer.join(",") + "]";
                        e.send_stop = e.sender(e.trans_url, t, function(t, n) { e.send_stop = null, t === !1 ? e.ri._didClose(1006, "Sending error " + n) : e.send_schedule_wait() }), e.send_buffer = [] } }, O.prototype.send_destructor = function() {
                    var e = this;
                    e._send_stop && e._send_stop(), e._send_stop = null };
                var x = function(t, r, o) {
                        var i = this;
                        if (!("_send_form" in i)) {
                            var a = i._send_form = e.createElement("form"),
                                s = i._send_area = e.createElement("textarea");
                            s.name = "d", a.style.display = "none", a.style.position = "absolute", a.method = "POST", a.enctype = "application/x-www-form-urlencoded", a.acceptCharset = "UTF-8", a.appendChild(s), e.body.appendChild(a) }
                        var a = i._send_form,
                            s = i._send_area,
                            u = "a" + n.random_string(8);
                        a.target = u, a.action = t + "/jsonp_send?i=" + u;
                        var c;
                        try { c = e.createElement('<iframe name="' + u + '">') } catch (l) { c = e.createElement("iframe"), c.name = u }
                        c.id = u, a.appendChild(c), c.style.display = "none";
                        try { s.value = r } catch (d) { n.log("Your browser is seriously broken. Go home! " + d.message) }
                        a.submit();
                        var f = function(e) { c.onerror && (c.onreadystatechange = c.onerror = c.onload = null, n.delay(500, function() { c.parentNode.removeChild(c), c = null }), s.value = "", o(!0)) };
                        return c.onerror = c.onload = f, c.onreadystatechange = function(e) { "complete" == c.readyState && f() }, f },
                    I = function(e) {
                        return function(t, n, r) {
                            var o = new e("POST", t + "/xhr_send", n);
                            return o.onfinish = function(e, t) { r(200 === e || 204 === e, "http status " + e) },
                                function(e) { r(!1, e) } } },
                    M = function(t, r) {
                        var o, i = e.createElement("script"),
                            a, s = function(e) { a && (a.parentNode.removeChild(a), a = null), i && (clearTimeout(o), i.parentNode.removeChild(i), i.onreadystatechange = i.onerror = i.onload = i.onclick = null, i = null, r(e), r = null) },
                            u = !1,
                            c = null;
                        if (i.id = "a" + n.random_string(8), i.src = t, i.type = "text/javascript", i.charset = "UTF-8", i.onerror = function(e) { c || (c = setTimeout(function() { u || s(n.closeFrame(1006, "JSONP script loaded abnormally (onerror)")) }, 1e3)) }, i.onload = function(e) { s(n.closeFrame(1006, "JSONP script loaded abnormally (onload)")) }, i.onreadystatechange = function(e) {
                                if (/loaded|closed/.test(i.readyState)) {
                                    if (i && i.htmlFor && i.onclick) { u = !0;
                                        try { i.onclick() } catch (t) {} }
                                    i && s(n.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)")) } }, "undefined" == typeof i.async && e.attachEvent)
                            if (/opera/i.test(navigator.userAgent)) a = e.createElement("script"), a.text = "try{var a = document.getElementById('" + i.id + "'); if(a)a.onerror();}catch(x){};", i.async = a.async = !1;
                            else {
                                try { i.htmlFor = i.id, i.event = "onclick" } catch (l) {}
                                i.async = !0 }
                            "undefined" != typeof i.async && (i.async = !0), o = setTimeout(function() { s(n.closeFrame(1006, "JSONP script loaded abnormally (timeout)")) }, 35e3);
                        var d = e.getElementsByTagName("head")[0];
                        return d.insertBefore(i, d.firstChild), a && d.insertBefore(a, d.firstChild), s },
                    D = T["jsonp-polling"] = function(e, t) { n.polluteGlobalNamespace();
                        var r = this;
                        r.ri = e, r.trans_url = t, r.send_constructor(x), r._schedule_recv() };
                D.prototype = new O, D.prototype._schedule_recv = function() {
                    var e = this,
                        t = function(t) { e._recv_stop = null, t && (e._is_closing || e.ri._didMessage(t)), e._is_closing || e._schedule_recv() };
                    e._recv_stop = R(e.trans_url + "/jsonp", M, t) }, D.enabled = function() {
                    return !0 }, D.need_body = !0, D.prototype.doCleanup = function() {
                    var e = this;
                    e._is_closing = !0, e._recv_stop && e._recv_stop(), e.ri = e._recv_stop = null, e.send_destructor() };
                var R = function(e, r, o) {
                        var i = "a" + n.random_string(6),
                            a = e + "?c=" + escape(u + "." + i),
                            s = 0,
                            c = function(e) {
                                switch (s) {
                                    case 0:
                                        delete t[u][i], o(e);
                                        break;
                                    case 1:
                                        o(e), s = 2;
                                        break;
                                    case 2:
                                        delete t[u][i] } },
                            l = r(a, c);
                        t[u][i] = l;
                        var d = function() { t[u][i] && (s = 1, t[u][i](n.closeFrame(1e3, "JSONP user aborted read"))) };
                        return d },
                    P = function() {};
                P.prototype = new O, P.prototype.run = function(e, t, n, r, o) {
                    var i = this;
                    i.ri = e, i.trans_url = t, i.send_constructor(I(o)), i.poll = new Z(e, r, t + n, o) }, P.prototype.doCleanup = function() {
                    var e = this;
                    e.poll && (e.poll.abort(), e.poll = null) };
                var N = T["xhr-streaming"] = function(e, t) { this.run(e, t, "/xhr_streaming", oe, n.XHRCorsObject) };
                N.prototype = new P, N.enabled = function() {
                    return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && !/opera/i.test(navigator.userAgent) }, N.roundTrips = 2, N.need_body = !0;
                var j = T["xdr-streaming"] = function(e, t) { this.run(e, t, "/xhr_streaming", oe, n.XDRObject) };
                j.prototype = new P, j.enabled = function() {
                    return !!t.XDomainRequest }, j.roundTrips = 2;
                var U = T["xhr-polling"] = function(e, t) { this.run(e, t, "/xhr", oe, n.XHRCorsObject) };
                U.prototype = new P, U.enabled = N.enabled, U.roundTrips = 2;
                var A = T["xdr-polling"] = function(e, t) { this.run(e, t, "/xhr", oe, n.XDRObject) };
                A.prototype = new P, A.enabled = j.enabled, A.roundTrips = 2;
                var B = function() {};
                B.prototype.i_constructor = function(e, t, r) {
                    var o = this;
                    o.ri = e, o.origin = n.getOrigin(r), o.base_url = r, o.trans_url = t;
                    var i = r + "/iframe.html";
                    o.ri._options.devel && (i += "?t=" + +new Date), o.window_id = n.random_string(8), i += "#" + o.window_id, o.iframeObj = n.createIframe(i, function(e) { o.ri._didClose(1006, "Unable to load an iframe (" + e + ")") }), o.onmessage_cb = n.bind(o.onmessage, o), n.attachMessage(o.onmessage_cb) }, B.prototype.doCleanup = function() {
                    var e = this;
                    if (e.iframeObj) { n.detachMessage(e.onmessage_cb);
                        try { e.iframeObj.iframe.contentWindow && e.postMessage("c") } catch (t) {}
                        e.iframeObj.cleanup(), e.iframeObj = null, e.onmessage_cb = e.iframeObj = null } }, B.prototype.onmessage = function(e) {
                    var t = this;
                    if (e.origin === t.origin) {
                        var n = e.data.slice(0, 8),
                            r = e.data.slice(8, 9),
                            o = e.data.slice(9);
                        if (n === t.window_id) switch (r) {
                            case "s":
                                t.iframeObj.loaded(), t.postMessage("s", i.stringify([T.version, t.protocol, t.trans_url, t.base_url]));
                                break;
                            case "t":
                                t.ri._didMessage(o) } } }, B.prototype.postMessage = function(e, t) {
                    var n = this;
                    n.iframeObj.post(n.window_id + e + (t || ""), n.origin) }, B.prototype.doSend = function(e) { this.postMessage("m", e) }, B.enabled = function() {
                    var e = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror");
                    return ("function" == typeof t.postMessage || "object" == typeof t.postMessage) && !e };
                var H, L = function(e, r) { parent !== t ? parent.postMessage(H + e + (r || ""), "*") : n.log("Can't postMessage, no parent window.", e, r) },
                    F = function() {};
                F.prototype._didClose = function(e, t) { L("t", n.closeFrame(e, t)) }, F.prototype._didMessage = function(e) { L("t", e) }, F.prototype._doSend = function(e) { this._transport.doSend(e) }, F.prototype._doCleanup = function() { this._transport.doCleanup() }, n.parent_origin = void 0, T.bootstrap_iframe = function() {
                    var r;
                    H = e.location.hash.slice(1);
                    var o = function(e) {
                        if (e.source === parent && ("undefined" == typeof n.parent_origin && (n.parent_origin = e.origin), e.origin === n.parent_origin)) {
                            var o = e.data.slice(0, 8),
                                a = e.data.slice(8, 9),
                                s = e.data.slice(9);
                            if (o === H) switch (a) {
                                case "s":
                                    var u = i.parse(s),
                                        c = u[0],
                                        l = u[1],
                                        d = u[2],
                                        f = u[3];
                                    if (c !== T.version && n.log('Incompatibile SockJS! Main site uses: "' + c + '", the iframe: "' + T.version + '".'), !n.flatUrl(d) || !n.flatUrl(f)) return void n.log("Only basic urls are supported in SockJS");
                                    if (!n.isSameOriginUrl(d) || !n.isSameOriginUrl(f)) return void n.log("Can't connect to different domain from within an iframe. (" + i.stringify([t.location.href, d, f]) + ")");
                                    r = new F, r._transport = new F[l](r, d, f);
                                    break;
                                case "m":
                                    r._doSend(s);
                                    break;
                                case "c":
                                    r && r._doCleanup(), r = null } } };
                    n.attachMessage(o), L("s") };
                var X = function(e, t) {
                    var r = this;
                    n.delay(function() { r.doXhr(e, t) }) };
                X.prototype = new a(["finish"]), X.prototype.doXhr = function(e, t) {
                    var r = this,
                        o = (new Date).getTime(),
                        a = new t("GET", e + "/info?cb=" + n.random_string(10)),
                        s = n.delay(8e3, function() { a.ontimeout() });
                    a.onfinish = function(e, t) {
                        if (clearTimeout(s), s = null, 200 === e) {
                            var n = (new Date).getTime() - o,
                                a = i.parse(t); "object" != typeof a && (a = {}), r.emit("finish", a, n) } else r.emit("finish") }, a.ontimeout = function() { a.close(), r.emit("finish") } };
                var V = function(t) {
                    var r = this,
                        o = function() {
                            var e = new B;
                            e.protocol = "w-iframe-info-receiver";
                            var n = function(t) {
                                    if ("string" == typeof t && "m" === t.substr(0, 1)) {
                                        var n = i.parse(t.substr(1)),
                                            o = n[0],
                                            a = n[1];
                                        r.emit("finish", o, a) } else r.emit("finish");
                                    e.doCleanup(), e = null },
                                o = { _options: {}, _didClose: n, _didMessage: n };
                            e.i_constructor(o, t, t) };
                    e.body ? o() : n.attachEvent("load", o) };
                V.prototype = new a(["finish"]);
                var W = function() {
                    var e = this;
                    n.delay(function() { e.emit("finish", {}, 2e3) }) };
                W.prototype = new a(["finish"]);
                var q = function(e) {
                        if (n.isSameOriginUrl(e)) return new X(e, n.XHRLocalObject);
                        switch (n.isXHRCorsCapable()) {
                            case 1:
                                return new X(e, n.XHRLocalObject);
                            case 2:
                                return n.isSameOriginScheme(e) ? new X(e, n.XDRObject) : new W;
                            case 3:
                                return new V(e);
                            default:
                                return new W } },
                    G = F["w-iframe-info-receiver"] = function(e, t, r) {
                        var o = new X(r, n.XHRLocalObject);
                        o.onfinish = function(t, n) { e._didMessage("m" + i.stringify([t, n])), e._didClose() } };
                G.prototype.doCleanup = function() {};
                var J = T["iframe-eventsource"] = function() {
                    var e = this;
                    e.protocol = "w-iframe-eventsource", e.i_constructor.apply(e, arguments) };
                J.prototype = new B, J.enabled = function() {
                    return "EventSource" in t && B.enabled() }, J.need_body = !0, J.roundTrips = 3;
                var Q = F["w-iframe-eventsource"] = function(e, t) { this.run(e, t, "/eventsource", ee, n.XHRLocalObject) };
                Q.prototype = new P;
                var z = T["iframe-xhr-polling"] = function() {
                    var e = this;
                    e.protocol = "w-iframe-xhr-polling", e.i_constructor.apply(e, arguments) };
                z.prototype = new B, z.enabled = function() {
                    return t.XMLHttpRequest && B.enabled() }, z.need_body = !0, z.roundTrips = 3;
                var $ = F["w-iframe-xhr-polling"] = function(e, t) { this.run(e, t, "/xhr", oe, n.XHRLocalObject) };
                $.prototype = new P;
                var Y = T["iframe-htmlfile"] = function() {
                    var e = this;
                    e.protocol = "w-iframe-htmlfile", e.i_constructor.apply(e, arguments) };
                Y.prototype = new B, Y.enabled = function() {
                    return B.enabled() }, Y.need_body = !0, Y.roundTrips = 3;
                var K = F["w-iframe-htmlfile"] = function(e, t) { this.run(e, t, "/htmlfile", re, n.XHRLocalObject) };
                K.prototype = new P;
                var Z = function(e, t, n, r) {
                    var o = this;
                    o.ri = e, o.Receiver = t, o.recv_url = n, o.AjaxObject = r, o._scheduleRecv() };
                Z.prototype._scheduleRecv = function() {
                    var e = this,
                        t = e.poll = new e.Receiver(e.recv_url, e.AjaxObject),
                        n = 0;
                    t.onmessage = function(t) { n += 1, e.ri._didMessage(t.data) }, t.onclose = function(n) { e.poll = t = t.onmessage = t.onclose = null, e.poll_is_closing || ("permanent" === n.reason ? e.ri._didClose(1006, "Polling error (" + n.reason + ")") : e._scheduleRecv()) } }, Z.prototype.abort = function() {
                    var e = this;
                    e.poll_is_closing = !0, e.poll && e.poll.abort() };
                var ee = function(e) {
                    var t = this,
                        r = new EventSource(e);
                    r.onmessage = function(e) { t.dispatchEvent(new o("message", { data: unescape(e.data) })) }, t.es_close = r.onerror = function(e, i) {
                        var a = i ? "user" : 2 !== r.readyState ? "network" : "permanent";
                        t.es_close = r.onmessage = r.onerror = null, r.close(), r = null, n.delay(200, function() { t.dispatchEvent(new o("close", { reason: a })) }) } };
                ee.prototype = new r, ee.prototype.abort = function() {
                    var e = this;
                    e.es_close && e.es_close({}, !0) };
                var te, ne = function() {
                        if (void 0 === te)
                            if ("ActiveXObject" in t) try { te = !!new ActiveXObject("htmlfile") } catch (e) {} else te = !1;
                        return te },
                    re = function(e) {
                        var r = this;
                        n.polluteGlobalNamespace(), r.id = "a" + n.random_string(6, 26), e += (-1 === e.indexOf("?") ? "?" : "&") + "c=" + escape(u + "." + r.id);
                        var i = ne() ? n.createHtmlfile : n.createIframe,
                            a;
                        t[u][r.id] = { start: function() { a.loaded() }, message: function(e) { r.dispatchEvent(new o("message", { data: e })) }, stop: function() { r.iframe_close({}, "network") } }, r.iframe_close = function(e, n) { a.cleanup(), r.iframe_close = a = null, delete t[u][r.id], r.dispatchEvent(new o("close", { reason: n })) }, a = i(e, function(e) { r.iframe_close({}, "permanent") }) };
                re.prototype = new r, re.prototype.abort = function() {
                    var e = this;
                    e.iframe_close && e.iframe_close({}, "user") };
                var oe = function(e, t) {
                    var n = this,
                        r = 0;
                    n.xo = new t("POST", e, null), n.xo.onchunk = function(e, t) {
                        if (200 === e)
                            for (;;) {
                                var i = t.slice(r),
                                    a = i.indexOf("\n");
                                if (-1 === a) break;
                                r += a + 1;
                                var s = i.slice(0, a);
                                n.dispatchEvent(new o("message", { data: s })) } }, n.xo.onfinish = function(e, t) { n.xo.onchunk(e, t), n.xo = null;
                        var r = 200 === e ? "network" : "permanent";
                        n.dispatchEvent(new o("close", { reason: r })) } };
                return oe.prototype = new r, oe.prototype.abort = function() {
                    var e = this;
                    e.xo && (e.xo.close(), e.dispatchEvent(new o("close", { reason: "user" })), e.xo = null) }, T.getUtils = function() {
                    return n }, T.getIframeTransport = function() {
                    return B }, T }(), "_sockjs_onload" in window && setTimeout(_sockjs_onload, 1), "function" == typeof define && define.amd && define("sockjs", [], function() {
                return h }) }.call(this),
        function() {
            p.ClientStream = function(e, t) {
                var n = this;
                n.options = a.extend({ retry: !0 }, t), n._initCommon(n.options), n.HEARTBEAT_TIMEOUT = 1e5, n.rawUrl = e, n.socket = null, n.heartbeatTimer = null, "undefined" != typeof window && window.addEventListener && window.addEventListener("online", a.bind(n._online, n), !1), n._launchConnection() }, a.extend(p.ClientStream.prototype, {
                send: function(e) {
                    var t = this;
                    t.currentStatus.connected && t.socket.send(e) },
                _changeUrl: function(e) {
                    var t = this;
                    t.rawUrl = e },
                _connected: function() {
                    var e = this;
                    e.connectionTimer && (clearTimeout(e.connectionTimer), e.connectionTimer = null), e.currentStatus.connected || (e.currentStatus.status = "connected", e.currentStatus.connected = !0, e.currentStatus.retryCount = 0, e.statusChanged(), a.each(e.eventCallbacks.reset, function(e) { e() })) },
                _cleanup: function(e) {
                    var t = this;
                    t._clearConnectionAndHeartbeatTimers(), t.socket && (t.socket.onmessage = t.socket.onclose = t.socket.onerror = t.socket.onheartbeat = function() {}, t.socket.close(), t.socket = null), a.each(t.eventCallbacks.disconnect, function(t) { t(e) }) },
                _clearConnectionAndHeartbeatTimers: function() {
                    var e = this;
                    e.connectionTimer && (clearTimeout(e.connectionTimer), e.connectionTimer = null), e.heartbeatTimer && (clearTimeout(e.heartbeatTimer), e.heartbeatTimer = null) },
                _heartbeat_timeout: function() {
                    var t = this;
                    e._debug("Connection timeout. No sockjs heartbeat received."), t._lostConnection(new _.ConnectionError("Heartbeat timed out")) },
                _heartbeat_received: function() {
                    var e = this;
                    e._forcedToDisconnect || (e.heartbeatTimer && clearTimeout(e.heartbeatTimer), e.heartbeatTimer = setTimeout(a.bind(e._heartbeat_timeout, e), e.HEARTBEAT_TIMEOUT)) },
                _sockjsProtocolsWhitelist: function() {
                    var e = ["xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"],
                        t = navigator && /iPhone|iPad|iPod/.test(navigator.userAgent) && /OS 4_|OS 5_/.test(navigator.userAgent);

                    return t || (e = ["websocket"].concat(e)), e
                },
                _launchConnection: function() {
                    var t = this;
                    t._cleanup();
                    var n = a.extend({ protocols_whitelist: t._sockjsProtocolsWhitelist() }, t.options._sockjsOptions);
                    t.socket = new h(v(t.rawUrl), void 0, n), t.socket.onopen = function(e) { t._connected() }, t.socket.onmessage = function(e) { t._heartbeat_received(), t.currentStatus.connected && a.each(t.eventCallbacks.message, function(t) { t(e.data) }) }, t.socket.onclose = function() { t._lostConnection() }, t.socket.onerror = function() { e._debug("stream error", a.toArray(arguments), (new Date).toDateString()) }, t.socket.onheartbeat = function() { t._heartbeat_received() }, t.connectionTimer && clearTimeout(t.connectionTimer), t.connectionTimer = setTimeout(function() { t._lostConnection(new _.ConnectionError("DDP connection timed out")) }, t.CONNECT_TIMEOUT) }
            })
        }.call(this),
        function() {
            var t = function(e, t) {
                    return e.length >= t.length && e.substring(0, t.length) === t },
                n = function(e, t) {
                    return e.length >= t.length && e.substring(e.length - t.length) === t },
                o = function(o, i, a) { i || (i = "http");
                    var s = o.match(/^ddp(i?)\+sockjs:\/\//),
                        u = o.match(/^http(s?):\/\//),
                        c;
                    if (s) {
                        var l = o.substr(s[0].length);
                        c = "i" === s[1] ? i : i + "s";
                        var d = l.indexOf("/"),
                            f = -1 === d ? l : l.substr(0, d),
                            _ = -1 === d ? "" : l.substr(d);
                        return f = f.replace(/\*/g, function() {
                            return Math.floor(10 * r.fraction()) }), c + "://" + f + _ }
                    if (u) { c = u[1] ? i + "s" : i;
                        var p = o.substr(u[0].length);
                        o = c + "://" + p }
                    return -1 !== o.indexOf("://") || t(o, "/") || (o = i + "://" + o), o = e._relativeToSiteRootUrl(o), n(o, "/") ? o + a : o + "/" + a };
            v = function(e) {
                return o(e, "http", "sockjs") }, m = function(e) {
                var t = o(e, "ws", "websocket");
                return t }, p.toSockjsUrl = v, a.extend(p.ClientStream.prototype, { on: function(e, t) {
                    var n = this;
                    if ("message" !== e && "reset" !== e && "disconnect" !== e) throw new Error("unknown event type: " + e);
                    n.eventCallbacks[e] || (n.eventCallbacks[e] = []), n.eventCallbacks[e].push(t) }, _initCommon: function(e) {
                    var t = this;
                    e = e || {}, t.CONNECT_TIMEOUT = e.connectTimeoutMs || 1e4, t.eventCallbacks = {}, t._forcedToDisconnect = !1, t.currentStatus = { status: "connecting", connected: !1, retryCount: 0 }, t.statusListeners = "undefined" != typeof s && new s.Dependency, t.statusChanged = function() { t.statusListeners && t.statusListeners.changed() }, t._retry = new l, t.connectionTimer = null }, reconnect: function(e) {
                    var t = this;
                    return e = e || {}, e.url && t._changeUrl(e.url), e._sockjsOptions && (t.options._sockjsOptions = e._sockjsOptions), t.currentStatus.connected ? void((e._force || e.url) && t._lostConnection(new _.ForcedReconnectError)) : ("connecting" === t.currentStatus.status && t._lostConnection(), t._retry.clear(), t.currentStatus.retryCount -= 1, void t._retryNow()) }, disconnect: function(e) {
                    var t = this;
                    e = e || {}, t._forcedToDisconnect || (e._permanent && (t._forcedToDisconnect = !0), t._cleanup(), t._retry.clear(), t.currentStatus = { status: e._permanent ? "failed" : "offline", connected: !1, retryCount: 0 }, e._permanent && e._error && (t.currentStatus.reason = e._error), t.statusChanged()) }, _lostConnection: function(e) {
                    var t = this;
                    t._cleanup(e), t._retryLater(e) }, _online: function() { "offline" != this.currentStatus.status && this.reconnect() }, _retryLater: function(e) {
                    var t = this,
                        n = 0;
                    t.options.retry || e && "DDP.ForcedReconnectError" === e.errorType ? (n = t._retry.retryLater(t.currentStatus.retryCount, a.bind(t._retryNow, t)), t.currentStatus.status = "waiting", t.currentStatus.retryTime = (new Date).getTime() + n) : (t.currentStatus.status = "failed", delete t.currentStatus.retryTime), t.currentStatus.connected = !1, t.statusChanged() }, _retryNow: function() {
                    var e = this;
                    e._forcedToDisconnect || (e.currentStatus.retryCount += 1, e.currentStatus.status = "connecting", e.currentStatus.connected = !1, delete e.currentStatus.retryTime, e.statusChanged(), e._launchConnection()) }, status: function() {
                    var e = this;
                    return e.statusListeners && e.statusListeners.depend(), e.currentStatus } }), _.ConnectionError = e.makeErrorType("DDP.ConnectionError", function(e) {
                var t = this;
                t.message = e }), _.ForcedReconnectError = e.makeErrorType("DDP.ForcedReconnectError", function() {}) }.call(this),
        function() { g = function(e) {
                var t = this;
                t.heartbeatInterval = e.heartbeatInterval, t.heartbeatTimeout = e.heartbeatTimeout, t._sendPing = e.sendPing, t._onTimeout = e.onTimeout, t._heartbeatIntervalHandle = null, t._heartbeatTimeoutHandle = null }, a.extend(g.prototype, { stop: function() {
                    var e = this;
                    e._clearHeartbeatIntervalTimer(), e._clearHeartbeatTimeoutTimer() }, start: function() {
                    var e = this;
                    e.stop(), e._startHeartbeatIntervalTimer() }, _startHeartbeatIntervalTimer: function() {
                    var t = this;
                    t._heartbeatIntervalHandle = e.setTimeout(a.bind(t._heartbeatIntervalFired, t), t.heartbeatInterval) }, _startHeartbeatTimeoutTimer: function() {
                    var t = this;
                    t._heartbeatTimeoutHandle = e.setTimeout(a.bind(t._heartbeatTimeoutFired, t), t.heartbeatTimeout) }, _clearHeartbeatIntervalTimer: function() {
                    var t = this;
                    t._heartbeatIntervalHandle && (e.clearTimeout(t._heartbeatIntervalHandle), t._heartbeatIntervalHandle = null) }, _clearHeartbeatTimeoutTimer: function() {
                    var t = this;
                    t._heartbeatTimeoutHandle && (e.clearTimeout(t._heartbeatTimeoutHandle), t._heartbeatTimeoutHandle = null) }, _heartbeatIntervalFired: function() {
                    var e = this;
                    e._heartbeatIntervalHandle = null, e._sendPing(), e._startHeartbeatTimeoutTimer() }, _heartbeatTimeoutFired: function() {
                    var e = this;
                    e._heartbeatTimeoutHandle = null, e._onTimeout() }, pingReceived: function() {
                    var e = this;
                    e._heartbeatIntervalHandle && (e._clearHeartbeatIntervalTimer(), e._startHeartbeatIntervalTimer()) }, pongReceived: function() {
                    var e = this;
                    e._heartbeatTimeoutHandle && (e._clearHeartbeatTimeoutTimer(), e._startHeartbeatIntervalTimer()) } }) }.call(this),
        function() { b = ["1", "pre2", "pre1"], p.SUPPORTED_DDP_VERSIONS = b, y = function(e) {
                var t = this;
                this.isSimulation = e.isSimulation, this._unblock = e.unblock || function() {}, this._calledUnblock = !1, this.userId = e.userId, this._setUserId = e.setUserId || function() {}, this.connection = e.connection, this.randomSeed = e.randomSeed, this.randomStream = null }, a.extend(y.prototype, { unblock: function() {
                    var e = this;
                    e._calledUnblock = !0, e._unblock() }, setUserId: function(e) {
                    var t = this;
                    if (t._calledUnblock) throw new Error("Can't call setUserId in a method after calling unblock");
                    t.userId = e, t._setUserId(e) } }), w = function(t) {
                try {
                    var n = i.parse(t) } catch (r) {
                    return e._debug("Discarding message with invalid JSON", t), null }
                return null === n || "object" != typeof n ? (e._debug("Discarding non-object DDP message", t), null) : (a.has(n, "cleared") && (a.has(n, "fields") || (n.fields = {}), a.each(n.cleared, function(e) { n.fields[e] = void 0 }), delete n.cleared), a.each(["fields", "params", "result"], function(e) { a.has(n, e) && (n[e] = o._adjustTypesFromJSONValue(n[e])) }), n) }, k = function(e) {
                var t = o.clone(e);
                if (a.has(e, "fields")) {
                    var n = [];
                    a.each(e.fields, function(e, r) { void 0 === e && (n.push(r), delete t.fields[r]) }), a.isEmpty(n) || (t.cleared = n), a.isEmpty(t.fields) && delete t.fields }
                if (a.each(["fields", "params", "result"], function(e) { a.has(t, e) && (t[e] = o._adjustTypesToJSONValue(t[e])) }), e.id && "string" != typeof e.id) throw new Error("Message id is not a string");
                return i.stringify(t) }, _._CurrentInvocation = new e.EnvironmentVariable }.call(this),
        function() {
            function e() {
                return r.hexString(20) }
            S = function(t) {
                var n = this;
                this.seed = [].concat(t.seed || e()), this.sequences = {} }, S.get = function(e, t) {
                if (t || (t = "default"), !e) return r;
                var n = e.randomStream;
                return n || (e.randomStream = n = new S({ seed: e.randomSeed })), n._sequence(t) }, _.randomStream = function(e) {
                var t = _._CurrentInvocation.get();
                return S.get(t, e) }, C = function(e, t) {
                var n = S.get(e, "/rpc/" + t);
                return n.hexString(20) }, a.extend(S.prototype, { _sequence: function(e) {
                    var t = this,
                        n = t.sequences[e] || null;
                    if (null === n) {
                        for (var o = t.seed.concat(e), i = 0; i < o.length; i++) a.isFunction(o[i]) && (o[i] = o[i]());
                        t.sequences[e] = n = r.createWithSeeds.apply(null, o) }
                    return n } }) }.call(this),
        function() {
            if (e.isServer) var t = Npm.require("path"),
                n = Npm.require("fibers"),
                u = Npm.require(t.join("fibers", "future"));
            var c = function(t, n) {
                    var r = this;
                    n = a.extend({ onConnected: function() {}, onDDPVersionNegotiationFailure: function(t) { e._debug(t) }, heartbeatInterval: 35e3, heartbeatTimeout: 15e3, reloadWithOutstanding: !1, supportedDDPVersions: b, retry: !0, respondToPings: !0 }, n), r.onReconnect = null, r._stream = "object" == typeof t ? t : new p.ClientStream(t, { retry: n.retry, headers: n.headers, _sockjsOptions: n._sockjsOptions, _dontPrintErrors: n._dontPrintErrors, connectTimeoutMs: n.connectTimeoutMs }), r._lastSessionId = null, r._versionSuggestion = null, r._version = null, r._stores = {}, r._methodHandlers = {}, r._nextMethodId = 1, r._supportedDDPVersions = n.supportedDDPVersions, r._heartbeatInterval = n.heartbeatInterval, r._heartbeatTimeout = n.heartbeatTimeout, r._methodInvokers = {}, r._outstandingMethodBlocks = [], r._documentsWrittenByStub = {}, r._serverDocuments = {}, r._afterUpdateCallbacks = [], r._messagesBufferedUntilQuiescence = [], r._methodsBlockingQuiescence = {}, r._subsBeingRevived = {}, r._resetStores = !1, r._updatesForUnknownStores = {}, r._retryMigrate = null, r._subscriptions = {}, r._userId = null, r._userIdDeps = new s.Dependency, e.isClient && Package.reload && !n.reloadWithOutstanding && Package.reload.Reload._onMigrate(function(e) {
                        if (r._readyToMigrate()) return [!0];
                        if (r._retryMigrate) throw new Error("Two migrations in progress?");
                        return r._retryMigrate = e, !1 });
                    var o = function(t) {
                            try {
                                var o = w(t) } catch (i) {
                                return void e._debug("Exception while parsing DDP", i) }
                            if (null === o || !o.msg) return void(o && o.server_id || e._debug("discarding invalid livedata message", o));
                            if ("connected" === o.msg) r._version = r._versionSuggestion, r._livedata_connected(o), n.onConnected();
                            else if ("failed" == o.msg)
                                if (a.contains(r._supportedDDPVersions, o.version)) r._versionSuggestion = o.version, r._stream.reconnect({ _force: !0 });
                                else {
                                    var s = "DDP version negotiation failed; server requested version " + o.version;
                                    r._stream.disconnect({ _permanent: !0, _error: s }), n.onDDPVersionNegotiationFailure(s) }
                            else "ping" === o.msg ? (n.respondToPings && r._send({ msg: "pong", id: o.id }), r._heartbeat && r._heartbeat.pingReceived()) : "pong" === o.msg ? r._heartbeat && r._heartbeat.pongReceived() : a.include(["added", "changed", "removed", "ready", "updated"], o.msg) ? r._livedata_data(o) : "nosub" === o.msg ? r._livedata_nosub(o) : "result" === o.msg ? r._livedata_result(o) : "error" === o.msg ? r._livedata_error(o) : e._debug("discarding unknown livedata message type", o) },
                        i = function() {
                            var e = { msg: "connect" };
                            r._lastSessionId && (e.session = r._lastSessionId), e.version = r._versionSuggestion || r._supportedDDPVersions[0], r._versionSuggestion = e.version, e.support = r._supportedDDPVersions, r._send(e), !a.isEmpty(r._outstandingMethodBlocks) && a.isEmpty(r._outstandingMethodBlocks[0].methods) && r._outstandingMethodBlocks.shift(), a.each(r._methodInvokers, function(e) { e.sentMessage = !1 }), r.onReconnect ? r._callOnReconnectAndSendAppropriateOutstandingMethods() : r._sendOutstandingMethods(), a.each(r._subscriptions, function(e, t) { r._send({ msg: "sub", id: t, name: e.name, params: e.params }) }) },
                        u = function() { r._heartbeat && (r._heartbeat.stop(), r._heartbeat = null) };
                    e.isServer ? (r._stream.on("message", e.bindEnvironment(o, e._debug)), r._stream.on("reset", e.bindEnvironment(i, e._debug)), r._stream.on("disconnect", e.bindEnvironment(u, e._debug))) : (r._stream.on("message", o), r._stream.on("reset", i), r._stream.on("disconnect", u)) },
                l = function(e) {
                    var t = this;
                    t.methodId = e.methodId, t.sentMessage = !1, t._callback = e.callback, t._connection = e.connection, t._message = e.message, t._onResultReceived = e.onResultReceived || function() {}, t._wait = e.wait, t._methodResult = null, t._dataVisible = !1, t._connection._methodInvokers[t.methodId] = t };
            a.extend(l.prototype, { sendMessage: function() {
                    var e = this;
                    if (e.gotResult()) throw new Error("sendingMethod is called on method with result");
                    e._dataVisible = !1, e.sentMessage = !0, e._wait && (e._connection._methodsBlockingQuiescence[e.methodId] = !0), e._connection._send(e._message) }, _maybeInvokeCallback: function() {
                    var e = this;
                    e._methodResult && e._dataVisible && (e._callback(e._methodResult[0], e._methodResult[1]), delete e._connection._methodInvokers[e.methodId], e._connection._outstandingMethodFinished()) }, receiveResult: function(e, t) {
                    var n = this;
                    if (n.gotResult()) throw new Error("Methods should only receive results once");
                    n._methodResult = [e, t], n._onResultReceived(e, t), n._maybeInvokeCallback() }, dataVisible: function() {
                    var e = this;
                    e._dataVisible = !0, e._maybeInvokeCallback() }, gotResult: function() {
                    var e = this;
                    return !!e._methodResult } }), a.extend(c.prototype, { registerStore: function(e, t) {
                    var n = this;
                    if (e in n._stores) return !1;
                    var r = {};
                    a.each(["update", "beginUpdate", "endUpdate", "saveOriginals", "retrieveOriginals"], function(e) { r[e] = function() {
                            return t[e] ? t[e].apply(t, arguments) : void 0 } }), n._stores[e] = r;
                    var o = n._updatesForUnknownStores[e];
                    return o && (r.beginUpdate(o.length, !1), a.each(o, function(e) { r.update(e) }), r.endUpdate(), delete n._updatesForUnknownStores[e]), !0 }, subscribe: function(e) {
                    var t = this,
                        n = Array.prototype.slice.call(arguments, 1),
                        i = {};
                    if (n.length) {
                        var u = n[n.length - 1];
                        a.isFunction(u) ? i.onReady = n.pop() : u && a.any([u.onReady, u.onError, u.onStop], a.isFunction) && (i = n.pop()) }
                    var c = a.find(t._subscriptions, function(t) {
                            return t.inactive && t.name === e && o.equals(t.params, n) }),
                        l;
                    c ? (l = c.id, c.inactive = !1, i.onReady && (c.ready || (c.readyCallback = i.onReady)), i.onError && (c.errorCallback = i.onError), i.onStop && (c.stopCallback = i.onStop)) : (l = r.id(), t._subscriptions[l] = { id: l, name: e, params: o.clone(n), inactive: !1, ready: !1, readyDeps: new s.Dependency, readyCallback: i.onReady, errorCallback: i.onError, stopCallback: i.onStop, connection: t, remove: function() { delete this.connection._subscriptions[this.id], this.ready && this.readyDeps.changed() }, stop: function() { this.connection._send({ msg: "unsub", id: l }), this.remove(), i.onStop && i.onStop() } }, t._send({ msg: "sub", id: l, name: e, params: n }));
                    var d = { stop: function() { a.has(t._subscriptions, l) && t._subscriptions[l].stop() }, ready: function() {
                            if (!a.has(t._subscriptions, l)) return !1;
                            var e = t._subscriptions[l];
                            return e.readyDeps.depend(), e.ready }, subscriptionId: l };
                    return s.active && s.onInvalidate(function(e) { a.has(t._subscriptions, l) && (t._subscriptions[l].inactive = !0), s.afterFlush(function() { a.has(t._subscriptions, l) && t._subscriptions[l].inactive && d.stop() }) }), d }, _subscribeAndWait: function(e, t, n) {
                    var r = this,
                        o = new u,
                        i = !1,
                        a;
                    return t = t || [], t.push({ onReady: function() { i = !0, o["return"]() }, onError: function(e) { i ? n && n.onLateError && n.onLateError(e) : o["throw"](e) } }), a = r.subscribe.apply(r, [e].concat(t)), o.wait(), a }, methods: function(e) {
                    var t = this;
                    a.each(e, function(e, n) {
                        if (t._methodHandlers[n]) throw new Error("A method named '" + n + "' is already defined");
                        t._methodHandlers[n] = e }) }, call: function(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    if (t.length && "function" == typeof t[t.length - 1]) var n = t.pop();
                    return this.apply(e, t, n) }, apply: function(t, n, r, i) {
                    var s = this;
                    i || "function" != typeof r || (i = r, r = {}), r = r || {}, i && (i = e.bindEnvironment(i, "delivering result of invoking '" + t + "'")), n = o.clone(n);
                    var c = function() {
                            var e;
                            return function() {
                                return void 0 === e && (e = "" + s._nextMethodId++), e } }(),
                        d = _._CurrentInvocation.get(),
                        f = d && d.isSimulation,
                        p = null,
                        h = function() {
                            return null === p && (p = C(d, t)), p },
                        v = s._methodHandlers[t];
                    if (v) {
                        var m = function(e) { s.setUserId(e) },
                            g = new y({ isSimulation: !0, userId: s.userId(), setUserId: m, randomSeed: function() {
                                    return h() } });
                        f || s._saveOriginals();
                        try {
                            var b = _._CurrentInvocation.withValue(g, function() {
                                return e.isServer ? e._noYieldsAllowed(function() {
                                    return v.apply(g, o.clone(n)) }) : v.apply(g, o.clone(n)) }) } catch (w) {
                            var k = w }
                        f || s._retrieveAndStoreOriginals(c()) }
                    if (f) {
                        if (i) return void i(k, b);
                        if (k) throw k;
                        return b }
                    if (k && !k.expected && e._debug("Exception while simulating the effect of invoking '" + t + "'", k, k.stack), !i)
                        if (e.isClient) i = function(n) { n && e._debug("Error invoking Method '" + t + "':", n.message) };
                        else {
                            var S = new u;
                            i = S.resolver() }
                    var T = { msg: "method", method: t, params: n, id: c() };
                    null !== p && (T.randomSeed = p);
                    var E = new l({ methodId: c(), callback: i, connection: s, onResultReceived: r.onResultReceived, wait: !!r.wait, message: T });
                    return r.wait ? s._outstandingMethodBlocks.push({ wait: !0, methods: [E] }) : ((a.isEmpty(s._outstandingMethodBlocks) || a.last(s._outstandingMethodBlocks).wait) && s._outstandingMethodBlocks.push({ wait: !1, methods: [] }), a.last(s._outstandingMethodBlocks).methods.push(E)), 1 === s._outstandingMethodBlocks.length && E.sendMessage(), S ? S.wait() : r.returnStubValue ? b : void 0 }, _saveOriginals: function() {
                    var e = this;
                    a.each(e._stores, function(e) { e.saveOriginals() }) }, _retrieveAndStoreOriginals: function(e) {
                    var t = this;
                    if (t._documentsWrittenByStub[e]) throw new Error("Duplicate methodId in _retrieveAndStoreOriginals");
                    var n = [];
                    a.each(t._stores, function(r, o) {
                        var i = r.retrieveOriginals();
                        i && i.forEach(function(r, i) { n.push({ collection: o, id: i }), a.has(t._serverDocuments, o) || (t._serverDocuments[o] = new d._IdMap);
                            var s = t._serverDocuments[o].setDefault(i, {});
                            s.writtenByStubs ? s.writtenByStubs[e] = !0 : (s.document = r, s.flushCallbacks = [], s.writtenByStubs = {}, s.writtenByStubs[e] = !0) }) }), a.isEmpty(n) || (t._documentsWrittenByStub[e] = n) }, _unsubscribeAll: function() {
                    var e = this;
                    a.each(a.clone(e._subscriptions), function(t, n) { "meteor_autoupdate_clientVersions" !== t.name && e._subscriptions[n].stop() }) }, _send: function(e) {
                    var t = this;
                    t._stream.send(k(e)) }, _lostConnection: function(e) {
                    var t = this;
                    t._stream._lostConnection(e) }, status: function() {
                    var e = this;
                    return e._stream.status.apply(e._stream, arguments) }, reconnect: function() {
                    var e = this;
                    return e._stream.reconnect.apply(e._stream, arguments) }, disconnect: function() {
                    var e = this;
                    return e._stream.disconnect.apply(e._stream, arguments) }, close: function() {
                    var e = this;
                    return e._stream.disconnect({ _permanent: !0 }) }, userId: function() {
                    var e = this;
                    return e._userIdDeps && e._userIdDeps.depend(), e._userId }, setUserId: function(e) {
                    var t = this;
                    t._userId !== e && (t._userId = e, t._userIdDeps && t._userIdDeps.changed()) }, _waitingForQuiescence: function() {
                    var e = this;
                    return !a.isEmpty(e._subsBeingRevived) || !a.isEmpty(e._methodsBlockingQuiescence) }, _anyMethodsAreOutstanding: function() {
                    var e = this;
                    return a.any(a.pluck(e._methodInvokers, "sentMessage")) }, _livedata_connected: function(e) {
                    var t = this;
                    if ("pre1" !== t._version && 0 !== t._heartbeatInterval && (t._heartbeat = new g({ heartbeatInterval: t._heartbeatInterval, heartbeatTimeout: t._heartbeatTimeout, onTimeout: function() { t._lostConnection(new _.ConnectionError("DDP heartbeat timed out")) }, sendPing: function() { t._send({ msg: "ping" }) } }), t._heartbeat.start()), t._lastSessionId && (t._resetStores = !0), "string" == typeof e.session) {
                        var n = t._lastSessionId === e.session;
                        t._lastSessionId = e.session }
                    n || (t._updatesForUnknownStores = {}, t._resetStores && (t._documentsWrittenByStub = {}, t._serverDocuments = {}), t._afterUpdateCallbacks = [], t._subsBeingRevived = {}, a.each(t._subscriptions, function(e, n) { e.ready && (t._subsBeingRevived[n] = !0) }), t._methodsBlockingQuiescence = {}, t._resetStores && a.each(t._methodInvokers, function(e) { e.gotResult() ? t._afterUpdateCallbacks.push(a.bind(e.dataVisible, e)) : e.sentMessage && (t._methodsBlockingQuiescence[e.methodId] = !0) }), t._messagesBufferedUntilQuiescence = [], t._waitingForQuiescence() || (t._resetStores && (a.each(t._stores, function(e) { e.beginUpdate(0, !0), e.endUpdate() }), t._resetStores = !1), t._runAfterUpdateCallbacks())) }, _processOneDataMessage: function(e, t) {
                    var n = this;
                    n["_process_" + e.msg](e, t) }, _livedata_data: function(e) {
                    var t = this,
                        n = {};
                    if (t._waitingForQuiescence()) {
                        if (t._messagesBufferedUntilQuiescence.push(e), "nosub" === e.msg && delete t._subsBeingRevived[e.id], a.each(e.subs || [], function(e) { delete t._subsBeingRevived[e] }), a.each(e.methods || [], function(e) { delete t._methodsBlockingQuiescence[e] }), t._waitingForQuiescence()) return;
                        a.each(t._messagesBufferedUntilQuiescence, function(e) { t._processOneDataMessage(e, n) }), t._messagesBufferedUntilQuiescence = [] } else t._processOneDataMessage(e, n);
                    (t._resetStores || !a.isEmpty(n)) && (a.each(t._stores, function(e, r) { e.beginUpdate(a.has(n, r) ? n[r].length : 0, t._resetStores) }), t._resetStores = !1, a.each(n, function(e, n) {
                        var r = t._stores[n];
                        r ? a.each(e, function(e) { r.update(e) }) : (a.has(t._updatesForUnknownStores, n) || (t._updatesForUnknownStores[n] = []), Array.prototype.push.apply(t._updatesForUnknownStores[n], e)) }), a.each(t._stores, function(e) { e.endUpdate() })), t._runAfterUpdateCallbacks() }, _runAfterUpdateCallbacks: function() {
                    var e = this,
                        t = e._afterUpdateCallbacks;
                    e._afterUpdateCallbacks = [], a.each(t, function(e) { e() }) }, _pushUpdate: function(e, t, n) {
                    var r = this;
                    a.has(e, t) || (e[t] = []), e[t].push(n) }, _getServerDoc: function(e, t) {
                    var n = this;
                    if (!a.has(n._serverDocuments, e)) return null;
                    var r = n._serverDocuments[e];
                    return r.get(t) || null }, _process_added: function(e, t) {
                    var n = this,
                        r = d._idParse(e.id),
                        o = n._getServerDoc(e.collection, r);
                    if (o) {
                        if (void 0 !== o.document) throw new Error("Server sent add for existing id: " + e.id);
                        o.document = e.fields || {}, o.document._id = r } else n._pushUpdate(t, e.collection, e) }, _process_changed: function(e, t) {
                    var n = this,
                        r = n._getServerDoc(e.collection, d._idParse(e.id));
                    if (r) {
                        if (void 0 === r.document) throw new Error("Server sent changed for nonexisting id: " + e.id);
                        d._applyChanges(r.document, e.fields) } else n._pushUpdate(t, e.collection, e) }, _process_removed: function(e, t) {
                    var n = this,
                        r = n._getServerDoc(e.collection, d._idParse(e.id));
                    if (r) {
                        if (void 0 === r.document) throw new Error("Server sent removed for nonexisting id:" + e.id);
                        r.document = void 0 } else n._pushUpdate(t, e.collection, { msg: "removed", collection: e.collection, id: e.id }) }, _process_updated: function(e, t) {
                    var n = this;
                    a.each(e.methods, function(e) { a.each(n._documentsWrittenByStub[e], function(r) {
                            var o = n._getServerDoc(r.collection, r.id);
                            if (!o) throw new Error("Lost serverDoc for " + i.stringify(r));
                            if (!o.writtenByStubs[e]) throw new Error("Doc " + i.stringify(r) + " not written by  method " + e);
                            delete o.writtenByStubs[e], a.isEmpty(o.writtenByStubs) && (n._pushUpdate(t, r.collection, { msg: "replace", id: d._idStringify(r.id), replace: o.document }), a.each(o.flushCallbacks, function(e) { e() }), n._serverDocuments[r.collection].remove(r.id)) }), delete n._documentsWrittenByStub[e];
                        var r = n._methodInvokers[e];
                        if (!r) throw new Error("No callback invoker for method " + e);
                        n._runWhenAllServerDocsAreFlushed(a.bind(r.dataVisible, r)) }) }, _process_ready: function(e, t) {
                    var n = this;
                    a.each(e.subs, function(e) { n._runWhenAllServerDocsAreFlushed(function() {
                            var t = n._subscriptions[e];
                            t && (t.ready || (t.readyCallback && t.readyCallback(), t.ready = !0, t.readyDeps.changed())) }) }) }, _runWhenAllServerDocsAreFlushed: function(e) {
                    var t = this,
                        n = function() { t._afterUpdateCallbacks.push(e) },
                        r = 0,
                        o = function() {--r, 0 === r && n() };
                    a.each(t._serverDocuments, function(e) { e.forEach(function(e) {
                            var n = a.any(e.writtenByStubs, function(e, n) {
                                var r = t._methodInvokers[n];
                                return r && r.sentMessage });
                            n && (++r, e.flushCallbacks.push(o)) }) }), 0 === r && n() }, _livedata_nosub: function(t) {
                    var n = this;
                    if (n._livedata_data(t), a.has(n._subscriptions, t.id)) {
                        var r = n._subscriptions[t.id].errorCallback,
                            o = n._subscriptions[t.id].stopCallback;
                        n._subscriptions[t.id].remove();
                        var i = function(t) {
                            return t && t.error && new e.Error(t.error.error, t.error.reason, t.error.details) };
                        r && t.error && r(i(t)), o && o(i(t)) } }, _process_nosub: function() {}, _livedata_result: function(t) {
                    var n = this;
                    if (a.isEmpty(n._outstandingMethodBlocks)) return void e._debug("Received method result but no methods outstanding");
                    for (var r = n._outstandingMethodBlocks[0].methods, o, i = 0; i < r.length && (o = r[i], o.methodId !== t.id); i++);
                    return o ? (r.splice(i, 1), void(a.has(t, "error") ? o.receiveResult(new e.Error(t.error.error, t.error.reason, t.error.details)) : o.receiveResult(void 0, t.result))) : void e._debug("Can't match method response to original method call", t) }, _outstandingMethodFinished: function() {
                    var e = this;
                    if (!e._anyMethodsAreOutstanding()) {
                        if (!a.isEmpty(e._outstandingMethodBlocks)) {
                            var t = e._outstandingMethodBlocks.shift();
                            if (!a.isEmpty(t.methods)) throw new Error("No methods outstanding but nonempty block: " + i.stringify(t));
                            a.isEmpty(e._outstandingMethodBlocks) || e._sendOutstandingMethods() }
                        e._maybeMigrate() } }, _sendOutstandingMethods: function() {
                    var e = this;
                    a.isEmpty(e._outstandingMethodBlocks) || a.each(e._outstandingMethodBlocks[0].methods, function(e) { e.sendMessage() }) }, _livedata_error: function(t) { e._debug("Received error from server: ", t.reason), t.offendingMessage && e._debug("For: ", t.offendingMessage) }, _callOnReconnectAndSendAppropriateOutstandingMethods: function() {
                    var e = this,
                        t = e._outstandingMethodBlocks;
                    if (e._outstandingMethodBlocks = [], e.onReconnect(), !a.isEmpty(t)) {
                        if (a.isEmpty(e._outstandingMethodBlocks)) return e._outstandingMethodBlocks = t, void e._sendOutstandingMethods();
                        a.last(e._outstandingMethodBlocks).wait || t[0].wait || (a.each(t[0].methods, function(t) { a.last(e._outstandingMethodBlocks).methods.push(t), 1 === e._outstandingMethodBlocks.length && t.sendMessage() }), t.shift()), a.each(t, function(t) { e._outstandingMethodBlocks.push(t) }) } }, _readyToMigrate: function() {
                    var e = this;
                    return a.isEmpty(e._methodInvokers) }, _maybeMigrate: function() {
                    var e = this;
                    e._retryMigrate && e._readyToMigrate() && (e._retryMigrate(), e._retryMigrate = null) } }), p.Connection = c, _.connect = function(e, t) {
                var n = new c(e, t);
                return T.push(n), n }, T = [], _._allSubscriptionsReady = function() {
                return a.all(T, function(e) {
                    return a.all(e._subscriptions, function(e) {
                        return e.ready }) }) } }.call(this),
        function() {
            if (e.refresh = function(e) {}, e.isClient) {
                var t = "/"; "undefined" != typeof __meteor_runtime_config__ && __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL && (t = __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL);
                var n = new l,
                    r = function(t) {
                        if (e._debug(t), Package.reload) {
                            var r = Package.reload.Reload._migrationData("livedata") || {},
                                o = r.DDPVersionNegotiationFailures || 0;++o, Package.reload.Reload._onMigrate("livedata", function() {
                                return [!0, { DDPVersionNegotiationFailures: o }] }), n.retryLater(o, function() { Package.reload.Reload._reload() }) } };
                e.connection = _.connect(t, { onDDPVersionNegotiationFailure: r }), a.each(["subscribe", "methods", "call", "apply", "status", "reconnect", "disconnect"], function(t) { e[t] = a.bind(e.connection[t], e.connection) }) } else e.connection = null;
            e.default_connection = e.connection, e.connect = _.connect }.call(this), "undefined" == typeof Package && (Package = {}), Package.ddp = { DDP: _, LivedataTest: p }
}();

! function() {
    var e = Package.meteor.Meteor,
        n = Package.random.Random,
        o = Package.ejson.EJSON,
        t = Package.json.JSON,
        r = Package.underscore._,
        i = Package.minimongo.LocalCollection,
        c = Package.minimongo.Minimongo,
        l = Package.logging.Log,
        a = Package.ddp.DDP,
        s = Package.tracker.Tracker,
        d = Package.tracker.Deps,
        u = Package.check.check,
        f = Package.check.Match,
        _, p;
    (function() { p = function() {
            var e = this;
            e.noConnCollections = {} };
        var e = function(e, n) {
            return e in n || (n[e] = new i(e)), n[e] };
        r.extend(p.prototype, { open: function(n, o) {
                var t = this;
                return n ? o ? (o._mongo_livedata_collections || (o._mongo_livedata_collections = {}), e(n, o._mongo_livedata_collections)) : e(n, t.noConnCollections) : new i } }), p = new p }).call(this),
        function() { _ = {}, _.Collection = function(o, t) {
                var c = this;
                if (!(c instanceof _.Collection)) throw new Error('use "new" to construct a Mongo.Collection');
                if (o || null === o || (e._debug("Warning: creating anonymous collection. It will not be saved or synchronized over the network. (Pass null for the collection name to turn off this warning.)"), o = null), null !== o && "string" != typeof o) throw new Error("First argument to new Mongo.Collection must be a string or null");
                switch (t && t.methods && (t = { connection: t }), t && t.manager && !t.connection && (t.connection = t.manager), t = r.extend({ connection: void 0, idGeneration: "STRING", transform: null, _driver: void 0, _preventAutopublish: !1 }, t), t.idGeneration) {
                    case "MONGO":
                        c._makeNewID = function() {
                            var e = o ? a.randomStream("/collection/" + o) : n;
                            return new _.ObjectID(e.hexString(24)) };
                        break;
                    case "STRING":
                    default:
                        c._makeNewID = function() {
                            var e = o ? a.randomStream("/collection/" + o) : n;
                            return e.id() } }
                if (c._transform = i.wrapTransform(t.transform), c._connection = o && null !== t.connection ? t.connection ? t.connection : e.isClient ? e.connection : e.server : null, t._driver || (t._driver = o && c._connection === e.server && "undefined" != typeof MongoInternals && MongoInternals.defaultRemoteCollectionDriver ? MongoInternals.defaultRemoteCollectionDriver() : p), c._collection = t._driver.open(o, c._connection), c._name = o, c._driver = t._driver, c._connection && c._connection.registerStore) {
                    var l = c._connection.registerStore(o, { beginUpdate: function(e, n) {
                            (e > 1 || n) && c._collection.pauseObservers(), n && c._collection.remove({}) }, update: function(e) {
                            var n = i._idParse(e.id),
                                o = c._collection.findOne(n);
                            if ("replace" === e.msg) {
                                var t = e.replace;
                                return void(t ? o ? c._collection.update(n, t) : c._collection.insert(t) : o && c._collection.remove(n)) }
                            if ("added" === e.msg) {
                                if (o) throw new Error("Expected not to find a document already present for an add");
                                c._collection.insert(r.extend({ _id: n }, e.fields)) } else if ("removed" === e.msg) {
                                if (!o) throw new Error("Expected to find a document already present for removed");
                                c._collection.remove(n) } else {
                                if ("changed" !== e.msg) throw new Error("I don't know how to deal with this message");
                                if (!o) throw new Error("Expected to find a document to change");
                                if (!r.isEmpty(e.fields)) {
                                    var l = {};
                                    r.each(e.fields, function(e, n) { void 0 === e ? (l.$unset || (l.$unset = {}), l.$unset[n] = 1) : (l.$set || (l.$set = {}), l.$set[n] = e) }), c._collection.update(n, l) } } }, endUpdate: function() { c._collection.resumeObservers() }, saveOriginals: function() { c._collection.saveOriginals() }, retrieveOriginals: function() {
                            return c._collection.retrieveOriginals() } });
                    if (!l) throw new Error("There is already a collection named '" + o + "'") }
                c._defineMutationMethods(), Package.autopublish && !t._preventAutopublish && c._connection && c._connection.publish && c._connection.publish(null, function() {
                    return c.find() }, { is_auto: !0 }) }, r.extend(_.Collection.prototype, { _getFindSelector: function(e) {
                    return 0 == e.length ? {} : e[0] }, _getFindOptions: function(e) {
                    var n = this;
                    return e.length < 2 ? { transform: n._transform } : (u(e[1], f.Optional(f.ObjectIncluding({ fields: f.Optional(f.OneOf(Object, void 0)), sort: f.Optional(f.OneOf(Object, Array, void 0)), limit: f.Optional(f.OneOf(Number, void 0)), skip: f.Optional(f.OneOf(Number, void 0)) }))), r.extend({ transform: n._transform }, e[1])) }, find: function() {
                    var e = this,
                        n = r.toArray(arguments);
                    return e._collection.find(e._getFindSelector(n), e._getFindOptions(n)) }, findOne: function() {
                    var e = this,
                        n = r.toArray(arguments);
                    return e._collection.findOne(e._getFindSelector(n), e._getFindOptions(n)) } }), _.Collection._publishCursor = function(e, n, o) {
                var t = e.observeChanges({ added: function(e, t) { n.added(o, e, t) }, changed: function(e, t) { n.changed(o, e, t) }, removed: function(e) { n.removed(o, e) } });
                n.onStop(function() { t.stop() }) }, _.Collection._rewriteSelector = function(e) {
                if (i._selectorIsId(e) && (e = { _id: e }), !e || "_id" in e && !e._id) return { _id: n.id() };
                var o = {};
                return r.each(e, function(e, n) { e instanceof RegExp ? o[n] = t(e) : e && e.$regex instanceof RegExp ? (o[n] = t(e.$regex), void 0 !== e.$options && (o[n].$options = e.$options)) : o[n] = r.contains(["$or", "$and", "$nor"], n) ? r.map(e, function(e) {
                        return _.Collection._rewriteSelector(e) }) : e }), o };
            var t = function(e) { u(e, RegExp);
                    var n = { $regex: e.source },
                        o = "";
                    return e.ignoreCase && (o += "i"), e.multiline && (o += "m"), o && (n.$options = o), n },
                c = function(n, o) {
                    if (!i._selectorIsIdPerhapsAsObject(n)) throw new e.Error(403, "Not permitted. Untrusted code may only " + o + " documents by ID.") };
            r.each(["insert", "update", "remove"], function(n) { _.Collection.prototype[n] = function() {
                        var o = this,
                            t = r.toArray(arguments),
                            i, l, s;
                        if (t.length && (void 0 === t[t.length - 1] || t[t.length - 1] instanceof Function) && (i = t.pop()), "insert" === n) {
                            if (!t.length) throw new Error("insert requires an argument");
                            if (t[0] = r.extend({}, t[0]), "_id" in t[0]) {
                                if (l = t[0]._id, !l || !("string" == typeof l || l instanceof _.ObjectID)) throw new Error("Meteor requires document _id fields to be non-empty strings or ObjectIDs") } else {
                                var d = !0;
                                if (o._connection && o._connection !== e.server) {
                                    var u = a._CurrentInvocation.get();
                                    u || (d = !1) }
                                d && (l = t[0]._id = o._makeNewID()) } } else if (t[0] = _.Collection._rewriteSelector(t[0]), "update" === n) {
                            var f = t[2] = r.clone(t[2]) || {};
                            if (f && "function" != typeof f && f.upsert)
                                if (f.insertedId) {
                                    if (!("string" == typeof f.insertedId || f.insertedId instanceof _.ObjectID)) throw new Error("insertedId must be string or ObjectID") } else t[0]._id || (f.insertedId = o._makeNewID()) }
                        var p = function(e) {
                                return "insert" === n ? (!l && e && (l = e), l) : e },
                            v;
                        if (i && (v = function(e, n) { i(e, !e && p(n)) }), o._connection && o._connection !== e.server) {
                            var u = a._CurrentInvocation.get(),
                                h = u && u.isSimulation;!e.isClient || v || h || (v = function(o) { o && e._debug(n + " failed: " + (o.reason || o.stack)) }), h || "insert" === n || c(t[0], n), s = p(o._connection.apply(o._prefix + n, t, { returnStubValue: !0 }, v)) } else { t.push(v);
                            try {
                                var m = o._collection[n].apply(o._collection, t);
                                s = p(m) } catch (w) {
                                if (i) return i(w), null;
                                throw w } }
                        return s } }), _.Collection.prototype.upsert = function(e, n, o, t) {
                    var i = this;
                    return t || "function" != typeof o || (t = o, o = {}), i.update(e, n, r.extend({}, o, { _returnObject: !0, upsert: !0 }), t) }, _.Collection.prototype._ensureIndex = function(e, n) {
                    var o = this;
                    if (!o._collection._ensureIndex) throw new Error("Can only call _ensureIndex on server collections");
                    o._collection._ensureIndex(e, n) }, _.Collection.prototype._dropIndex = function(e) {
                    var n = this;
                    if (!n._collection._dropIndex) throw new Error("Can only call _dropIndex on server collections");
                    n._collection._dropIndex(e) }, _.Collection.prototype._dropCollection = function() {
                    var e = this;
                    if (!e._collection.dropCollection) throw new Error("Can only call _dropCollection on server collections");
                    e._collection.dropCollection() }, _.Collection.prototype._createCappedCollection = function(e, n) {
                    var o = this;
                    if (!o._collection._createCappedCollection) throw new Error("Can only call _createCappedCollection on server collections");
                    o._collection._createCappedCollection(e, n) }, _.Collection.prototype.rawCollection = function() {
                    var e = this;
                    if (!e._collection.rawCollection) throw new Error("Can only call rawCollection on server collections");
                    return e._collection.rawCollection() }, _.Collection.prototype.rawDatabase = function() {
                    var e = this;
                    if (!e._driver.mongo || !e._driver.mongo.db) throw new Error("Can only call rawDatabase on server collections");
                    return e._driver.mongo.db }, _.ObjectID = i._ObjectID, _.Cursor = i.Cursor, _.Collection.Cursor = _.Cursor, _.Collection.ObjectID = _.ObjectID,
                function() {
                    var e = function(e, n) {
                        var o = ["insert", "update", "remove", "fetch", "transform"];
                        r.each(r.keys(n), function(n) {
                            if (!r.contains(o, n)) throw new Error(e + ": Invalid key: " + n) });
                        var t = this;
                        if (t._restricted = !0, r.each(["insert", "update", "remove"], function(o) {
                                if (n[o]) {
                                    if (!(n[o] instanceof Function)) throw new Error(e + ": Value for `" + o + "` must be a function");
                                    n[o].transform = void 0 === n.transform ? t._transform : i.wrapTransform(n.transform), t._validators[o][e].push(n[o]) } }), n.update || n.remove || n.fetch) {
                            if (n.fetch && !(n.fetch instanceof Array)) throw new Error(e + ": Value for `fetch` must be an array");
                            t._updateFetch(n.fetch) } };
                    _.Collection.prototype.allow = function(n) { e.call(this, "allow", n) }, _.Collection.prototype.deny = function(n) { e.call(this, "deny", n) } }(), _.Collection.prototype._defineMutationMethods = function() {
                    var n = this;
                    if (n._restricted = !1, n._insecure = void 0, n._validators = { insert: { allow: [], deny: [] }, update: { allow: [], deny: [] }, remove: { allow: [], deny: [] }, upsert: { allow: [], deny: [] }, fetch: [], fetchAllFields: !1 }, n._name && (n._prefix = "/" + n._name + "/", n._connection)) {
                        var o = {};
                        r.each(["insert", "update", "remove"], function(t) { o[n._prefix + t] = function() { u(arguments, [f.Any]);
                                var o = r.toArray(arguments);
                                try {
                                    var i = null;
                                    if ("insert" !== t || r.has(o[0], "_id") || (i = n._makeNewID()), this.isSimulation) return null !== i && (o[0]._id = i), n._collection[t].apply(n._collection, o);
                                    if ("insert" !== t && c(o[0], t), n._restricted) {
                                        if (0 === n._validators[t].allow.length) throw new e.Error(403, "Access denied. No allow validators set on restricted collection for method '" + t + "'.");
                                        var l = "_validated" + t.charAt(0).toUpperCase() + t.slice(1);
                                        return o.unshift(this.userId), "insert" === t && o.push(i), n[l].apply(n, o) }
                                    if (n._isInsecure()) return null !== i && (o[0]._id = i), n._collection[t].apply(n._collection, o);
                                    throw new e.Error(403, "Access denied") } catch (a) {
                                    throw "MongoError" === a.name || "MinimongoError" === a.name ? new e.Error(409, a.toString()) : a } } }), (e.isClient || n._connection === e.server) && n._connection.methods(o) } }, _.Collection.prototype._updateFetch = function(e) {
                    var n = this;
                    n._validators.fetchAllFields || (e ? n._validators.fetch = r.union(n._validators.fetch, e) : (n._validators.fetchAllFields = !0, n._validators.fetch = null)) }, _.Collection.prototype._isInsecure = function() {
                    var e = this;
                    return void 0 === e._insecure ? !!Package.insecure : e._insecure };
            var l = function(e, n, t) {
                var r = n;
                return e.transform && (r = o.clone(n), null !== t && (r._id = t), r = e.transform(r)), r };
            _.Collection.prototype._validatedInsert = function(n, o, t) {
                var i = this;
                if (r.any(i._validators.insert.deny, function(e) {
                        return e(n, l(e, o, t)) })) throw new e.Error(403, "Access denied");
                if (r.all(i._validators.insert.allow, function(e) {
                        return !e(n, l(e, o, t)) })) throw new e.Error(403, "Access denied");
                null !== t && (o._id = t), i._collection.insert.call(i._collection, o) };
            var s = function(e, n) {
                return e.transform ? e.transform(n) : n };
            _.Collection.prototype._validatedUpdate = function(n, o, t, c) {
                var l = this;
                if (u(t, Object), c = r.clone(c) || {}, !i._selectorIsIdPerhapsAsObject(o)) throw new Error("validated update should be of a single ID");
                if (c.upsert) throw new e.Error(403, "Access denied. Upserts not allowed in a restricted collection.");
                var a = "Access denied. In a restricted collection you can only update documents, not replace them. Use a Mongo update operator, such as '$set'.",
                    f = [];
                if (r.isEmpty(t)) throw new e.Error(403, a);
                r.each(t, function(n, o) {
                    if ("$" !== o.charAt(0)) throw new e.Error(403, a);
                    if (!r.has(d, o)) throw new e.Error(403, "Access denied. Operator " + o + " not allowed in a restricted collection.");
                    r.each(r.keys(n), function(e) {-1 !== e.indexOf(".") && (e = e.substring(0, e.indexOf("."))), r.contains(f, e) || f.push(e) }) });
                var _ = { transform: null };
                l._validators.fetchAllFields || (_.fields = {}, r.each(l._validators.fetch, function(e) { _.fields[e] = 1 }));
                var p = l._collection.findOne(o, _);
                if (!p) return 0;
                if (r.any(l._validators.update.deny, function(e) {
                        var o = s(e, p);
                        return e(n, o, f, t) })) throw new e.Error(403, "Access denied");
                if (r.all(l._validators.update.allow, function(e) {
                        var o = s(e, p);
                        return !e(n, o, f, t) })) throw new e.Error(403, "Access denied");
                return c._forbidReplace = !0, l._collection.update.call(l._collection, o, t, c) };
            var d = { $inc: 1, $set: 1, $unset: 1, $addToSet: 1, $pop: 1, $pullAll: 1, $pull: 1, $pushAll: 1, $push: 1, $bit: 1 };
            _.Collection.prototype._validatedRemove = function(n, o) {
                var t = this,
                    i = { transform: null };
                t._validators.fetchAllFields || (i.fields = {}, r.each(t._validators.fetch, function(e) { i.fields[e] = 1 }));
                var c = t._collection.findOne(o, i);
                if (!c) return 0;
                if (r.any(t._validators.remove.deny, function(e) {
                        return e(n, s(e, c)) })) throw new e.Error(403, "Access denied");
                if (r.all(t._validators.remove.allow, function(e) {
                        return !e(n, s(e, c)) })) throw new e.Error(403, "Access denied");
                return t._collection.remove.call(t._collection, o) }, e.Collection = _.Collection }.call(this), "undefined" == typeof Package && (Package = {}), Package.mongo = { Mongo: _ } }();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.tracker.Tracker,
        n = Package.tracker.Deps,
        a = Package.retry.Retry,
        r = Package.ddp.DDP,
        o = Package.mongo.Mongo,
        i = Package.underscore._,
        s, c;
    (function() {
        var t = __meteor_runtime_config__.autoupdateVersion || "unknown",
            n = __meteor_runtime_config__.autoupdateVersionRefreshable || "unknown";
        c = new o.Collection("meteor_autoupdate_clientVersions"), s = {}, s.newClientAvailable = function() {
            return !!c.findOne({ _id: "version", version: { $ne: t } }) || !!c.findOne({ _id: "version-refreshable", version: { $ne: n } }) };
        var r = !1,
            u = new a({ minCount: 0, baseTimeout: 3e4 }),
            l = 0;
        s._retrySubscription = function() { e.subscribe("meteor_autoupdate_clientVersions", { onError: function(t) { e._debug("autoupdate subscription failed:", t), l++, u.retryLater(l, function() { s._retrySubscription() }) }, onReady: function() {
                    if (Package.reload) var a = function(a) {
                            var s = this;
                            if ("version-refreshable" === a._id && a.version !== n) { n = a.version;
                                var c = a.assets && a.assets.allCss || [],
                                    u = [];
                                i.each(document.getElementsByTagName("link"), function(e) { "__meteor-css__" === e.className && u.push(e) });
                                var l = function(t, n) {
                                        var a = i.once(n);
                                        if (t.onload = function() { r = !0, a() }, !r) var o = e.setInterval(function() { t.sheet && (a(), e.clearInterval(o)) }, 50) },
                                    d = i.after(c.length, function() { i.each(u, function(e) { e.parentNode.removeChild(e) }) }),
                                    _ = function(t) { document.getElementsByTagName("head").item(0).appendChild(t), l(t, function() { e.setTimeout(d, 200) }) };
                                0 !== c.length ? i.each(c, function(t) {
                                    var n = document.createElement("link");
                                    n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n.setAttribute("class", "__meteor-css__"), n.setAttribute("href", e._relativeToSiteRootUrl(t.url)), _(n) }) : d() } else "version" === a._id && a.version !== t && (o && o.stop(), Package.reload.Reload._reload()) },
                        o = c.find().observe({ added: a, changed: a }) } }) }, s._retrySubscription() }).call(this), "undefined" == typeof Package && (Package = {}), Package.autoupdate = { Autoupdate: s } }();

! function() {
    var a = Package.meteor.Meteor,
        e = Package.reload.Reload,
        o = Package.autoupdate.Autoupdate; "undefined" == typeof Package && (Package = {}), Package["meteor-platform"] = {} }();

! function() {
    var e = Package.meteor.Meteor; "undefined" == typeof Package && (Package = {}), Package["mquandalle:jade"] = {} }();

! function() {
    var e = Package.meteor.Meteor; "undefined" == typeof Package && (Package = {}), Package["stolinski:stylus-multi"] = {} }();

! function() {
    var e = Package.meteor.Meteor,
        t, n;
    (function() {
        ! function(e, t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
            function n(e) {
                var t = e.length,
                    n = ie.type(e);
                return "function" === n || ie.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e }

            function r(e, t, n) {
                if (ie.isFunction(t)) return ie.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n });
                if (t.nodeType) return ie.grep(e, function(e) {
                    return e === t !== n });
                if ("string" == typeof t) {
                    if (fe.test(t)) return ie.filter(t, e, n);
                    t = ie.filter(t, e) }
                return ie.grep(e, function(e) {
                    return ie.inArray(e, t) >= 0 !== n }) }

            function i(e, t) { do e = e[t]; while (e && 1 !== e.nodeType);
                return e }

            function o(e) {
                var t = xe[e] = {};
                return ie.each(e.match(be) || [], function(e, n) { t[n] = !0 }), t }

            function a() { he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s)) }

            function s() {
                (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), ie.ready()) }

            function u(e, t, n) {
                if (void 0 === n && 1 === e.nodeType) {
                    var r = "data-" + t.replace(Ee, "-$1").toLowerCase();
                    if (n = e.getAttribute(r), "string" == typeof n) {
                        try { n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ne.test(n) ? ie.parseJSON(n) : n } catch (i) {}
                        ie.data(e, t, n) } else n = void 0 }
                return n }

            function l(e) {
                var t;
                for (t in e)
                    if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
                return !0 }

            function c(e, t, n, r) {
                if (ie.acceptData(e)) {
                    var i, o, a = ie.expando,
                        s = e.nodeType,
                        u = s ? ie.cache : e,
                        l = s ? e[a] : e[a] && a;
                    if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = J.pop() || ie.guid++ : a), u[l] || (u[l] = s ? {} : { toJSON: ie.noop }), ("object" == typeof t || "function" == typeof t) && (r ? u[l] = ie.extend(u[l], t) : u[l].data = ie.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ie.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[ie.camelCase(t)])) : i = o, i } }

            function d(e, t, n) {
                if (ie.acceptData(e)) {
                    var r, i, o = e.nodeType,
                        a = o ? ie.cache : e,
                        s = o ? e[ie.expando] : ie.expando;
                    if (a[s]) {
                        if (t && (r = n ? a[s] : a[s].data)) { ie.isArray(t) ? t = t.concat(ie.map(t, ie.camelCase)) : t in r ? t = [t] : (t = ie.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                            for (; i--;) delete r[t[i]];
                            if (n ? !l(r) : !ie.isEmptyObject(r)) return }(n || (delete a[s].data, l(a[s]))) && (o ? ie.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null) } } }

            function f() {
                return !0 }

            function p() {
                return !1 }

            function h() {
                try {
                    return he.activeElement } catch (e) {} }

            function m(e) {
                var t = Fe.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement)
                    for (; t.length;) n.createElement(t.pop());
                return n }

            function g(e, t) {
                var n, r, i = 0,
                    o = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") : void 0;
                if (!o)
                    for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ie.nodeName(r, t) ? o.push(r) : ie.merge(o, g(r, t));
                return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], o) : o }

            function v(e) { je.test(e.type) && (e.defaultChecked = e.checked) }

            function y(e, t) {
                return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

            function b(e) {
                return e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type, e }

            function x(e) {
                var t = Ve.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e }

            function w(e, t) {
                for (var n, r = 0; null != (n = e[r]); r++) ie._data(n, "globalEval", !t || ie._data(t[r], "globalEval")) }

            function T(e, t) {
                if (1 === t.nodeType && ie.hasData(e)) {
                    var n, r, i, o = ie._data(e),
                        a = ie._data(t, o),
                        s = o.events;
                    if (s) { delete a.handle, a.events = {};
                        for (n in s)
                            for (r = 0, i = s[n].length; i > r; r++) ie.event.add(t, n, s[n][r]) }
                    a.data && (a.data = ie.extend({}, a.data)) } }

            function C(e, t) {
                var n, r, i;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[ie.expando]) { i = ie._data(t);
                        for (r in i.events) ie.removeEvent(t, r, i.handle);
                        t.removeAttribute(ie.expando) } "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && je.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) } }

            function N(t, n) {
                var r, i = ie(n.createElement(t)).appendTo(n.body),
                    o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : ie.css(i[0], "display");
                return i.detach(), o }

            function E(e) {
                var t = he,
                    n = Ze[e];
                return n || (n = N(e, t), "none" !== n && n || (Ke = (Ke || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = N(e, t), Ke.detach()), Ze[e] = n), n }

            function k(e, t) {
                return { get: function() {
                        var n = e();
                        if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments) } } }

            function S(e, t) {
                if (t in e) return t;
                for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ft.length; i--;)
                    if (t = ft[i] + n, t in e) return t;
                return r }

            function A(e, t) {
                for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ie._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ae(r) && (o[a] = ie._data(r, "olddisplay", E(r.nodeName)))) : (i = Ae(r), (n && "none" !== n || !i) && ie._data(r, "olddisplay", i ? n : ie.css(r, "display"))));
                for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
                return e }

            function D(e, t, n) {
                var r = ut.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t }

            function j(e, t, n, r, i) {
                for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ie.css(e, n + Se[o], !0, i)), r ? ("content" === n && (a -= ie.css(e, "padding" + Se[o], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + Se[o] + "Width", !0, i))) : (a += ie.css(e, "padding" + Se[o], !0, i), "padding" !== n && (a += ie.css(e, "border" + Se[o] + "Width", !0, i)));
                return a }

            function L(e, t, n) {
                var r = !0,
                    i = "width" === t ? e.offsetWidth : e.offsetHeight,
                    o = nt(e),
                    a = ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, o);
                if (0 >= i || null == i) {
                    if (i = rt(e, t, o), (0 > i || null == i) && (i = e.style[t]), tt.test(i)) return i;
                    r = a && (ne.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0 }
                return i + j(e, t, n || (a ? "border" : "content"), r, o) + "px" }

            function H(e, t, n, r, i) {
                return new H.prototype.init(e, t, n, r, i) }

            function q() {
                return setTimeout(function() { pt = void 0 }), pt = ie.now() }

            function _(e, t) {
                var n, r = { height: e },
                    i = 0;
                for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Se[i], r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r }

            function M(e, t, n) {
                for (var r, i = (bt[t] || []).concat(bt["*"]), o = 0, a = i.length; a > o; o++)
                    if (r = i[o].call(n, t, e)) return r }

            function F(e, t, n) {
                var r, i, o, a, s, u, l, c, d = this,
                    f = {},
                    p = e.style,
                    h = e.nodeType && Ae(e),
                    m = ie._data(e, "fxshow");
                n.queue || (s = ie._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() { s.unqueued || u() }), s.unqueued++, d.always(function() { d.always(function() { s.unqueued--, ie.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = ie.css(e, "display"), c = "none" === l ? ie._data(e, "olddisplay") || E(e.nodeName) : l, "inline" === c && "none" === ie.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] }));
                for (r in t)
                    if (i = t[r], mt.exec(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                            if ("show" !== i || !m || void 0 === m[r]) continue;
                            h = !0 }
                        f[r] = m && m[r] || ie.style(e, r) } else l = void 0;
                if (ie.isEmptyObject(f)) "inline" === ("none" === l ? E(e.nodeName) : l) && (p.display = l);
                else { m ? "hidden" in m && (h = m.hidden) : m = ie._data(e, "fxshow", {}), o && (m.hidden = !h), h ? ie(e).show() : d.done(function() { ie(e).hide() }), d.done(function() {
                        var t;
                        ie._removeData(e, "fxshow");
                        for (t in f) ie.style(e, t, f[t]) });
                    for (r in f) a = M(h ? m[r] : 0, r, d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0)) } }

            function O(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ie.cssHooks[r], a && "expand" in a) { o = a.expand(o), delete e[r];
                        for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i }

            function B(e, t, n) {
                var r, i, o = 0,
                    a = yt.length,
                    s = ie.Deferred().always(function() { delete u.elem }),
                    u = function() {
                        if (i) return !1;
                        for (var t = pt || q(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                        return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1) },
                    l = s.promise({ elem: e, props: ie.extend({}, t), opts: ie.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: pt || q(), duration: n.duration, tweens: [], createTween: function(t, n) {
                            var r = ie.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(r), r }, stop: function(t) {
                            var n = 0,
                                r = t ? l.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; r > n; n++) l.tweens[n].run(1);
                            return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this } }),
                    c = l.props;
                for (O(c, l.opts.specialEasing); a > o; o++)
                    if (r = yt[o].call(l, e, c, l.opts)) return r;
                return ie.map(c, M, l), ie.isFunction(l.opts.start) && l.opts.start.call(e, l), ie.fx.timer(ie.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always) }

            function P(e) {
                return function(t, n) { "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        o = t.toLowerCase().match(be) || [];
                    if (ie.isFunction(n))
                        for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } }

            function R(e, t, n, r) {
                function i(s) {
                    var u;
                    return o[s] = !0, ie.each(e[s] || [], function(e, s) {
                        var l = s(t, n, r);
                        return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1) }), u }
                var o = {},
                    a = e === zt;
                return i(t.dataTypes[0]) || !o["*"] && i("*") }

            function W(e, t) {
                var n, r, i = ie.ajaxSettings.flatOptions || {};
                for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
                return n && ie.extend(!0, e, n), e }

            function $(e, t, n) {
                for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                    "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                    for (a in s)
                        if (s[a] && s[a].test(i)) { u.unshift(a);
                            break }
                if (u[0] in n) o = u[0];
                else {
                    for (a in n) {
                        if (!u[0] || e.converters[a + " " + u[0]]) { o = a;
                            break }
                        r || (r = a) }
                    o = o || r }
                return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0 }

            function z(e, t, n, r) {
                var i, o, a, s, u, l = {},
                    c = e.dataTypes.slice();
                if (c[1])
                    for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                for (o = c.shift(); o;)
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                    if (a = l[u + " " + o] || l["* " + o], !a)
                        for (i in l)
                            if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                                break }
                    if (a !== !0)
                        if (a && e["throws"]) t = a(t);
                        else try { t = a(t) } catch (d) {
                            return { state: "parsererror", error: a ? d : "No conversion from " + u + " to " + o } } }
                return { state: "success", data: t } }

            function I(e, t, n, r) {
                var i;
                if (ie.isArray(t)) ie.each(t, function(t, i) { n || Vt.test(e) ? r(e, i) : I(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) });
                else if (n || "object" !== ie.type(t)) r(e, t);
                else
                    for (i in t) I(e + "[" + i + "]", t[i], n, r) }

            function X() {
                try {
                    return new e.XMLHttpRequest } catch (t) {} }

            function U() {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

            function V(e) {
                return ie.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 }
            var J = [],
                Y = J.slice,
                Q = J.concat,
                G = J.push,
                K = J.indexOf,
                Z = {},
                ee = Z.toString,
                te = Z.hasOwnProperty,
                ne = {},
                re = "1.11.2",
                ie = function(e, t) {
                    return new ie.fn.init(e, t) },
                oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                ae = /^-ms-/,
                se = /-([\da-z])/gi,
                ue = function(e, t) {
                    return t.toUpperCase() };
            ie.fn = ie.prototype = { jquery: re, constructor: ie, selector: "", length: 0, toArray: function() {
                    return Y.call(this) }, get: function(e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this) }, pushStack: function(e) {
                    var t = ie.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t }, each: function(e, t) {
                    return ie.each(this, e, t) }, map: function(e) {
                    return this.pushStack(ie.map(this, function(t, n) {
                        return e.call(t, n, t) })) }, slice: function() {
                    return this.pushStack(Y.apply(this, arguments)) }, first: function() {
                    return this.eq(0) }, last: function() {
                    return this.eq(-1) }, eq: function(e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, end: function() {
                    return this.prevObject || this.constructor(null) }, push: G, sort: J.sort, splice: J.splice }, ie.extend = ie.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ie.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
                    if (null != (i = arguments[s]))
                        for (r in i) e = a[r], n = i[r], a !== n && (l && n && (ie.isPlainObject(n) || (t = ie.isArray(n))) ? (t ? (t = !1, o = e && ie.isArray(e) ? e : []) : o = e && ie.isPlainObject(e) ? e : {}, a[r] = ie.extend(l, o, n)) : void 0 !== n && (a[r] = n));
                return a }, ie.extend({ expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) {
                    throw new Error(e) }, noop: function() {}, isFunction: function(e) {
                    return "function" === ie.type(e) }, isArray: Array.isArray || function(e) {
                    return "array" === ie.type(e) }, isWindow: function(e) {
                    return null != e && e == e.window }, isNumeric: function(e) {
                    return !ie.isArray(e) && e - parseFloat(e) + 1 >= 0 }, isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0 }, isPlainObject: function(e) {
                    var t;
                    if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) {
                        return !1 }
                    if (ne.ownLast)
                        for (t in e) return te.call(e, t);
                    for (t in e);
                    return void 0 === t || te.call(e, t) }, type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e }, globalEval: function(t) { t && ie.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) }, camelCase: function(e) {
                    return e.replace(ae, "ms-").replace(se, ue) }, nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function(e, t, r) {
                    var i, o = 0,
                        a = e.length,
                        s = n(e);
                    if (r) {
                        if (s)
                            for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                        else
                            for (o in e)
                                if (i = t.apply(e[o], r), i === !1) break } else if (s)
                        for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
                    else
                        for (o in e)
                            if (i = t.call(e[o], o, e[o]), i === !1) break; return e }, trim: function(e) {
                    return null == e ? "" : (e + "").replace(oe, "") }, makeArray: function(e, t) {
                    var r = t || [];
                    return null != e && (n(Object(e)) ? ie.merge(r, "string" == typeof e ? [e] : e) : G.call(r, e)), r }, inArray: function(e, t, n) {
                    var r;
                    if (t) {
                        if (K) return K.call(t, e, n);
                        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                            if (n in t && t[n] === e) return n }
                    return -1 }, merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
                    if (n !== n)
                        for (; void 0 !== t[r];) e[i++] = t[r++];
                    return e.length = i, e }, grep: function(e, t, n) {
                    for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
                    return i }, map: function(e, t, r) {
                    var i, o = 0,
                        a = e.length,
                        s = n(e),
                        u = [];
                    if (s)
                        for (; a > o; o++) i = t(e[o], o, r), null != i && u.push(i);
                    else
                        for (o in e) i = t(e[o], o, r), null != i && u.push(i);
                    return Q.apply([], u) }, guid: 1, proxy: function(e, t) {
                    var n, r, i;
                    return "string" == typeof t && (i = e[t], t = e, e = i), ie.isFunction(e) ? (n = Y.call(arguments, 2), r = function() {
                        return e.apply(t || this, n.concat(Y.call(arguments))) }, r.guid = e.guid = e.guid || ie.guid++, r) : void 0 }, now: function() {
                    return +new Date }, support: ne }), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { Z["[object " + t + "]"] = t.toLowerCase() });
            var le = function(e) {
                function t(e, t, n, r) {
                    var i, o, a, s, u, l, d, p, h, m;
                    if ((t ? t.ownerDocument || t : R) !== H && L(t), t = t || H, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
                    if (!r && _) {
                        if (11 !== s && (i = ye.exec(e)))
                            if (a = i[1]) {
                                if (9 === s) {
                                    if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                    if (o.id === a) return n.push(o), n } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a) return n.push(o), n } else {
                                if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                                if ((a = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n }
                        if (w.qsa && (!M || !M.test(e))) {
                            if (p = d = P, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (l = E(e), (d = t.getAttribute("id")) ? p = d.replace(xe, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + f(l[u]);
                                h = be.test(e) && c(t.parentNode) || t, m = l.join(",") }
                            if (m) try {
                                return K.apply(n, h.querySelectorAll(m)), n } catch (g) {} finally { d || t.removeAttribute("id") } } }
                    return S(e.replace(ue, "$1"), t, n, r) }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r }
                    var t = [];
                    return e }

                function r(e) {
                    return e[P] = !0, e }

                function i(e) {
                    var t = H.createElement("div");
                    try {
                        return !!e(t) } catch (n) {
                        return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

                function o(e, t) {
                    for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t }

                function a(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1 }

                function s(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e } }

                function u(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e } }

                function l(e) {
                    return r(function(t) {
                        return t = +t, r(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

                function c(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e }

                function d() {}

                function f(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                    return r }

                function p(e, t, n) {
                    var r = t.dir,
                        i = n && "parentNode" === r,
                        o = $++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) return e(t, n, o) } : function(t, n, a) {
                        var s, u, l = [W, o];
                        if (a) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || i) && e(t, n, a)) return !0 } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || i) {
                                    if (u = t[P] || (t[P] = {}), (s = u[r]) && s[0] === W && s[1] === o) return l[2] = s[2];
                                    if (u[r] = l, l[2] = e(t, n, a)) return !0 } } }

                function h(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0 } : e[0] }

                function m(e, n, r) {
                    for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
                    return r }

                function g(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
                    return a }

                function v(e, t, n, i, o, a) {
                    return i && !i[P] && (i = v(i)), o && !o[P] && (o = v(o, a)), r(function(r, a, s, u) {
                        var l, c, d, f = [],
                            p = [],
                            h = a.length,
                            v = r || m(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !r && t ? v : g(v, f, e, s, u),
                            b = n ? o || (r ? e : h || i) ? [] : a : y;
                        if (n && n(y, b, s, u), i)
                            for (l = g(b, p), i(l, [], s, u), c = l.length; c--;)(d = l[c]) && (b[p[c]] = !(y[p[c]] = d));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (l = [], c = b.length; c--;)(d = b[c]) && l.push(y[c] = d);
                                    o(null, b = [], l, u) }
                                for (c = b.length; c--;)(d = b[c]) && (l = o ? ee(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d)) } } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : K.apply(a, b) }) }

                function y(e) {
                    for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p(function(e) {
                            return e === t }, a, !0), l = p(function(e) {
                            return ee(t, e) > -1 }, a, !0), c = [function(e, n, r) {
                            var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                            return t = null, i }]; i > s; s++)
                        if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                        else {
                            if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                                for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                                return v(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && f(e)) }
                            c.push(n) }
                    return h(c) }

                function b(e, n) {
                    var i = n.length > 0,
                        o = e.length > 0,
                        a = function(r, a, s, u, l) {
                            var c, d, f, p = 0,
                                h = "0",
                                m = r && [],
                                v = [],
                                y = A,
                                b = r || o && T.find.TAG("*", l),
                                x = W += null == y ? 1 : Math.random() || .1,
                                w = b.length;
                            for (l && (A = a !== H && a); h !== w && null != (c = b[h]); h++) {
                                if (o && c) {
                                    for (d = 0; f = e[d++];)
                                        if (f(c, a, s)) { u.push(c);
                                            break }
                                    l && (W = x) }
                                i && ((c = !f && c) && p--, r && m.push(c)) }
                            if (p += h, i && h !== p) {
                                for (d = 0; f = n[d++];) f(m, v, a, s);
                                if (r) {
                                    if (p > 0)
                                        for (; h--;) m[h] || v[h] || (v[h] = Q.call(u));
                                    v = g(v) }
                                K.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u) }
                            return l && (W = x, A = y), m };
                    return i ? r(a) : a }
                var x, w, T, C, N, E, k, S, A, D, j, L, H, q, _, M, F, O, B, P = "sizzle" + 1 * new Date,
                    R = e.document,
                    W = 0,
                    $ = 0,
                    z = n(),
                    I = n(),
                    X = n(),
                    U = function(e, t) {
                        return e === t && (j = !0), 0 },
                    V = 1 << 31,
                    J = {}.hasOwnProperty,
                    Y = [],
                    Q = Y.pop,
                    G = Y.push,
                    K = Y.push,
                    Z = Y.slice,
                    ee = function(e, t) {
                        for (var n = 0, r = e.length; r > n; n++)
                            if (e[n] === t) return n;
                        return -1 },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]",
                    re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ie = re.replace("w", "w#"),
                    oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                    ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                    se = new RegExp(ne + "+", "g"),
                    ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    le = new RegExp("^" + ne + "*," + ne + "*"),
                    ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                    fe = new RegExp(ae),
                    pe = new RegExp("^" + ie + "$"),
                    he = { ID: new RegExp("^#(" + re + ")"), CLASS: new RegExp("^\\.(" + re + ")"), TAG: new RegExp("^(" + re.replace("w", "w*") + ")"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + ae), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
                    me = /^(?:input|select|textarea|button)$/i,
                    ge = /^h\d$/i,
                    ve = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    be = /[+~]/,
                    xe = /'|\\/g,
                    we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                    Te = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
                    Ce = function() { L() };
                try { K.apply(Y = Z.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType } catch (Ne) { K = { apply: Y.length ? function(e, t) { G.apply(e, Z.call(t)) } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1 } } }
                w = t.support = {}, N = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1 }, L = t.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : R;
                    return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, q = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), _ = !N(r), w.attributes = i(function(e) {
                        return e.className = "i", !e.getAttribute("className") }), w.getElementsByTagName = i(function(e) {
                        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length }), w.getElementsByClassName = ve.test(r.getElementsByClassName), w.getById = i(function(e) {
                        return q.appendChild(e).id = P, !r.getElementsByName || !r.getElementsByName(P).length }), w.getById ? (T.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && _) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : [] } }, T.filter.ID = function(e) {
                        var t = e.replace(we, Te);
                        return function(e) {
                            return e.getAttribute("id") === t } }) : (delete T.find.ID, T.filter.ID = function(e) {
                        var t = e.replace(we, Te);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t } }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r }
                        return o }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                        return _ ? t.getElementsByClassName(e) : void 0 }, F = [], M = [], (w.qsa = ve.test(r.querySelectorAll)) && (i(function(e) { q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || M.push(".#.+[+~]") }), i(function(e) {
                        var t = r.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:") })), (w.matchesSelector = ve.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) { w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), F.push("!=", ae) }), M = M.length && new RegExp(M.join("|")), F = F.length && new RegExp(F.join("|")), t = ve.test(q.compareDocumentPosition), B = t || ve.test(q.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1 }, U = t ? function(e, t) {
                        if (e === t) return j = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === R && B(R, e) ? -1 : t === r || t.ownerDocument === R && B(R, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                        if (e === t) return j = !0, 0;
                        var n, i = 0,
                            o = e.parentNode,
                            s = t.parentNode,
                            u = [e],
                            l = [t];
                        if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                        if (o === s) return a(e, t);
                        for (n = e; n = n.parentNode;) u.unshift(n);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (; u[i] === l[i];) i++;
                        return i ? a(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0 }, r) : H }, t.matches = function(e, n) {
                    return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== H && L(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !_ || F && F.test(n) || M && M.test(n))) try {
                        var r = O.call(e, n);
                        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (i) {}
                    return t(n, H, null, [e]).length > 0 }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== H && L(e), B(e, t) }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== H && L(e);
                    var n = T.attrHandle[t.toLowerCase()],
                        r = n && J.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
                    return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), j) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1) }
                    return D = null, e }, C = t.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += C(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                        for (; t = e[r++];) n += C(t);
                    return n }, T = t.selectors = { cacheLength: 50, createPseudo: r, match: he, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) {
                            return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) {
                            var t = e.replace(we, Te).toLowerCase();
                            return "*" === e ? function() {
                                return !0 } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) {
                            var t = z[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function(e, n, r) {
                            return function(i) {
                                var o = t.attr(i, e);
                                return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0 } }, CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode } : function(t, n, u) {
                                var l, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !u && !s;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)
                                                if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            h = m = "only" === e && !h && "nextSibling" }
                                        return !0 }
                                    if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (c = g[P] || (g[P] = {}), l = c[e] || [], p = l[0] === W && l[1], f = l[0] === W && l[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                            if (1 === d.nodeType && ++f && d === t) { c[e] = [W, p, f];
                                                break } } else if (y && (l = (t[P] || (t[P] = {}))[e]) && l[0] === W) f = l[1];
                                    else
                                        for (;
                                            (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[e] = [W, f]), d !== t)););
                                    return f -= i, f === r || f % r === 0 && f / r >= 0 } } }, PSEUDO: function(e, n) {
                            var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a]) }) : function(e) {
                                return o(e, 0, i) }) : o } }, pseudos: { not: r(function(e) {
                            var t = [],
                                n = [],
                                i = k(e.replace(ue, "$1"));
                            return i[P] ? r(function(e, t, n, r) {
                                for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, r, o) {
                                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop() } }), has: r(function(e) {
                            return function(n) {
                                return t(e, n).length > 0 } }), contains: r(function(e) {
                            return e = e.replace(we, Te),
                                function(t) {
                                    return (t.textContent || t.innerText || C(t)).indexOf(e) > -1 } }), lang: r(function(e) {
                            return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1 } }), target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id }, root: function(e) {
                            return e === q }, focus: function(e) {
                            return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function(e) {
                            return e.disabled === !1 }, disabled: function(e) {
                            return e.disabled === !0 }, checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0 }, parent: function(e) {
                            return !T.pseudos.empty(e) }, header: function(e) {
                            return ge.test(e.nodeName) }, input: function(e) {
                            return me.test(e.nodeName) }, button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t }, text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: l(function() {
                            return [0] }), last: l(function(e, t) {
                            return [t - 1] }), eq: l(function(e, t, n) {
                            return [0 > n ? n + t : n] }), even: l(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e }), odd: l(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e }), lt: l(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                            return e }), gt: l(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                            return e }) } }, T.pseudos.nth = T.pseudos.eq;
                for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) T.pseudos[x] = s(x);
                for (x in { submit: !0, reset: !0 }) T.pseudos[x] = u(x);
                return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function(e, n) {
                    var r, i, o, a, s, u, l, c = I[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (s = e, u = [], l = T.preFilter; s;) {
                        (!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({ value: r, type: i[0].replace(ue, " ") }), s = s.slice(r.length));

                        for (a in T.filter) !(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({ value: r, type: a, matches: i }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return n ? s.length : s ? t.error(e) : I(e, u).slice(0)
                }, k = t.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        o = X[e + " "];
                    if (!o) {
                        for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]), o[P] ? r.push(o) : i.push(o);
                        o = X(e, b(i, r)), o.selector = e }
                    return o }, S = t.select = function(e, t, n, r) {
                    var i, o, a, s, u, l = "function" == typeof e && e,
                        d = !r && E(e = l.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
                            if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                            l && (t = t.parentNode), e = e.slice(o.shift().value.length) }
                        for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                            if ((u = T.find[s]) && (r = u(a.matches[0].replace(we, Te), be.test(o[0].type) && c(t.parentNode) || t))) {
                                if (o.splice(i, 1), e = r.length && f(o), !e) return K.apply(n, r), n;
                                break } }
                    return (l || k(e, d))(r, t, !_, n, be.test(e) && c(t.parentNode) || t), n }, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !!j, L(), w.sortDetached = i(function(e) {
                    return 1 & e.compareDocumentPosition(H.createElement("div")) }), i(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), w.attributes && i(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue }), i(function(e) {
                    return null == e.getAttribute("disabled") }) || o(te, function(e, t, n) {
                    var r;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), t
            }(e);
            ie.find = le, ie.expr = le.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = le.uniqueSort, ie.text = le.getText, ie.isXMLDoc = le.isXML, ie.contains = le.contains;
            var ce = ie.expr.match.needsContext,
                de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                fe = /^.[^:#\[\.,]*$/;
            ie.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function(e) {
                    return 1 === e.nodeType })) }, ie.fn.extend({ find: function(e) {
                    var t, n = [],
                        r = this,
                        i = r.length;
                    if ("string" != typeof e) return this.pushStack(ie(e).filter(function() {
                        for (t = 0; i > t; t++)
                            if (ie.contains(r[t], this)) return !0 }));
                    for (t = 0; i > t; t++) ie.find(e, r[t], n);
                    return n = this.pushStack(i > 1 ? ie.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n }, filter: function(e) {
                    return this.pushStack(r(this, e || [], !1)) }, not: function(e) {
                    return this.pushStack(r(this, e || [], !0)) }, is: function(e) {
                    return !!r(this, "string" == typeof e && ce.test(e) ? ie(e) : e || [], !1).length } });
            var pe, he = e.document,
                me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                ge = ie.fn.init = function(e, t) {
                    var n, r;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                        if (n[1]) {
                            if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && ie.isPlainObject(t))
                                for (n in t) ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                            return this }
                        if (r = he.getElementById(n[2]), r && r.parentNode) {
                            if (r.id !== n[2]) return pe.find(e);
                            this.length = 1, this[0] = r }
                        return this.context = he, this.selector = e, this }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this)) };
            ge.prototype = ie.fn, pe = ie(he);
            var ve = /^(?:parents|prev(?:Until|All))/,
                ye = { children: !0, contents: !0, next: !0, prev: !0 };
            ie.extend({ dir: function(e, t, n) {
                    for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ie(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
                    return r }, sibling: function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n } }), ie.fn.extend({ has: function(e) {
                    var t, n = ie(e, this),
                        r = n.length;
                    return this.filter(function() {
                        for (t = 0; r > t; t++)
                            if (ie.contains(this, n[t])) return !0 }) }, closest: function(e, t) {
                    for (var n, r = 0, i = this.length, o = [], a = ce.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; i > r; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) { o.push(n);
                                break }
                    return this.pushStack(o.length > 1 ? ie.unique(o) : o) }, index: function(e) {
                    return e ? "string" == typeof e ? ie.inArray(this[0], ie(e)) : ie.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) {
                    return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t)))) }, addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), ie.each({ parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null }, parents: function(e) {
                    return ie.dir(e, "parentNode") }, parentsUntil: function(e, t, n) {
                    return ie.dir(e, "parentNode", n) }, next: function(e) {
                    return i(e, "nextSibling") }, prev: function(e) {
                    return i(e, "previousSibling") }, nextAll: function(e) {
                    return ie.dir(e, "nextSibling") }, prevAll: function(e) {
                    return ie.dir(e, "previousSibling") }, nextUntil: function(e, t, n) {
                    return ie.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) {
                    return ie.dir(e, "previousSibling", n) }, siblings: function(e) {
                    return ie.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) {
                    return ie.sibling(e.firstChild) }, contents: function(e) {
                    return ie.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ie.merge([], e.childNodes) } }, function(e, t) { ie.fn[e] = function(n, r) {
                    var i = ie.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), this.length > 1 && (ye[e] || (i = ie.unique(i)), ve.test(e) && (i = i.reverse())), this.pushStack(i) } });
            var be = /\S+/g,
                xe = {};
            ie.Callbacks = function(e) { e = "string" == typeof e ? xe[e] || o(e) : ie.extend({}, e);
                var t, n, r, i, a, s, u = [],
                    l = !e.once && [],
                    c = function(o) {
                        for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = u.length, t = !0; u && i > a; a++)
                            if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) { n = !1;
                                break }
                        t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable()) },
                    d = { add: function() {
                            if (u) {
                                var r = u.length;! function o(t) { ie.each(t, function(t, n) {
                                        var r = ie.type(n); "function" === r ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== r && o(n) }) }(arguments), t ? i = u.length : n && (s = r, c(n)) }
                            return this }, remove: function() {
                            return u && ie.each(arguments, function(e, n) {
                                for (var r;
                                    (r = ie.inArray(n, u, r)) > -1;) u.splice(r, 1), t && (i >= r && i--, a >= r && a--) }), this }, has: function(e) {
                            return e ? ie.inArray(e, u) > -1 : !(!u || !u.length) }, empty: function() {
                            return u = [], i = 0, this }, disable: function() {
                            return u = l = n = void 0, this }, disabled: function() {
                            return !u }, lock: function() {
                            return l = void 0, n || d.disable(), this }, locked: function() {
                            return !l }, fireWith: function(e, n) {
                            return !u || r && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this }, fire: function() {
                            return d.fireWith(this, arguments), this }, fired: function() {
                            return !!r } };
                return d }, ie.extend({ Deferred: function(e) {
                    var t = [
                            ["resolve", "done", ie.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", ie.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", ie.Callbacks("memory")]
                        ],
                        n = "pending",
                        r = { state: function() {
                                return n }, always: function() {
                                return i.done(arguments).fail(arguments), this }, then: function() {
                                var e = arguments;
                                return ie.Deferred(function(n) { ie.each(t, function(t, o) {
                                        var a = ie.isFunction(e[t]) && e[t];
                                        i[o[1]](function() {
                                            var e = a && a.apply(this, arguments);
                                            e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments) }) }), e = null }).promise() }, promise: function(e) {
                                return null != e ? ie.extend(e, r) : r } },
                        i = {};
                    return r.pipe = r.then, ie.each(t, function(e, o) {
                        var a = o[2],
                            s = o[3];
                        r[o[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                            return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith }), r.promise(i), e && e.call(i, i), i }, when: function(e) {
                    var t = 0,
                        n = Y.call(arguments),
                        r = n.length,
                        i = 1 !== r || e && ie.isFunction(e.promise) ? r : 0,
                        o = 1 === i ? e : ie.Deferred(),
                        a = function(e, t, n) {
                            return function(r) { t[e] = this, n[e] = arguments.length > 1 ? Y.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n) } },
                        s, u, l;
                    if (r > 1)
                        for (s = new Array(r), u = new Array(r), l = new Array(r); r > t; t++) n[t] && ie.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
                    return i || o.resolveWith(l, n), o.promise() } });
            var we;
            ie.fn.ready = function(e) {
                return ie.ready.promise().done(e), this }, ie.extend({ isReady: !1, readyWait: 1, holdReady: function(e) { e ? ie.readyWait++ : ie.ready(!0) }, ready: function(e) {
                    if (e === !0 ? !--ie.readyWait : !ie.isReady) {
                        if (!he.body) return setTimeout(ie.ready);
                        ie.isReady = !0, e !== !0 && --ie.readyWait > 0 || (we.resolveWith(he, [ie]), ie.fn.triggerHandler && (ie(he).triggerHandler("ready"), ie(he).off("ready"))) } } }), ie.ready.promise = function(t) {
                if (!we)
                    if (we = ie.Deferred(), "complete" === he.readyState) setTimeout(ie.ready);
                    else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
                else { he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                    var n = !1;
                    try { n = null == e.frameElement && he.documentElement } catch (r) {}
                    n && n.doScroll && ! function i() {
                        if (!ie.isReady) {
                            try { n.doScroll("left") } catch (e) {
                                return setTimeout(i, 50) }
                            a(), ie.ready() } }() }
                return we.promise(t) };
            var Te = "undefined",
                Ce;
            for (Ce in ie(ne)) break;
            ne.ownLast = "0" !== Ce, ne.inlineBlockNeedsLayout = !1, ie(function() {
                    var e, t, n, r;
                    n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r)) }),
                function() {
                    var e = he.createElement("div");
                    if (null == ne.deleteExpando) { ne.deleteExpando = !0;
                        try { delete e.test } catch (t) { ne.deleteExpando = !1 } }
                    e = null }(), ie.acceptData = function(e) {
                    var t = ie.noData[(e.nodeName + " ").toLowerCase()],
                        n = +e.nodeType || 1;
                    return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t };
            var Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Ee = /([A-Z])/g;
            ie.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) {
                    return e = e.nodeType ? ie.cache[e[ie.expando]] : e[ie.expando], !!e && !l(e) }, data: function(e, t, n) {
                    return c(e, t, n) }, removeData: function(e, t) {
                    return d(e, t) }, _data: function(e, t, n) {
                    return c(e, t, n, !0) }, _removeData: function(e, t) {
                    return d(e, t, !0) } }), ie.fn.extend({ data: function(e, t) {
                    var n, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = ie.data(o), 1 === o.nodeType && !ie._data(o, "parsedAttrs"))) {
                            for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), u(o, r, i[r])));
                            ie._data(o, "parsedAttrs", !0) }
                        return i }
                    return "object" == typeof e ? this.each(function() { ie.data(this, e) }) : arguments.length > 1 ? this.each(function() { ie.data(this, e, t) }) : o ? u(o, e, ie.data(o, e)) : void 0 }, removeData: function(e) {
                    return this.each(function() { ie.removeData(this, e) }) } }), ie.extend({ queue: function(e, t, n) {
                    var r;
                    return e ? (t = (t || "fx") + "queue", r = ie._data(e, t), n && (!r || ie.isArray(n) ? r = ie._data(e, t, ie.makeArray(n)) : r.push(n)), r || []) : void 0 }, dequeue: function(e, t) { t = t || "fx";
                    var n = ie.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = ie._queueHooks(e, t),
                        a = function() { ie.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return ie._data(e, n) || ie._data(e, n, { empty: ie.Callbacks("once memory").add(function() { ie._removeData(e, t + "queue"), ie._removeData(e, n) }) }) } }), ie.fn.extend({ queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = ie.queue(this, e, t);
                        ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e) }) }, dequeue: function(e) {
                    return this.each(function() { ie.dequeue(this, e) }) }, clearQueue: function(e) {
                    return this.queue(e || "fx", []) }, promise: function(e, t) {
                    var n, r = 1,
                        i = ie.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {--r || i.resolveWith(o, [o]) };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ie._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t) } });
            var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Se = ["Top", "Right", "Bottom", "Left"],
                Ae = function(e, t) {
                    return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e) },
                De = ie.access = function(e, t, n, r, i, o, a) {
                    var s = 0,
                        u = e.length,
                        l = null == n;
                    if ("object" === ie.type(n)) { i = !0;
                        for (s in n) ie.access(e, t, s, n[s], !0, o, a) } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                            return l.call(ie(e), n) })), t))
                        for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o },
                je = /^(?:checkbox|radio)$/i;
            ! function() {
                var e = he.createElement("input"),
                    t = he.createElement("div"),
                    n = he.createDocumentFragment();
                if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() { ne.noCloneEvent = !1 }), t.cloneNode(!0).click()), null == ne.deleteExpando) { ne.deleteExpando = !0;
                    try { delete t.test } catch (r) { ne.deleteExpando = !1 } } }(),
            function() {
                var t, n, r = he.createElement("div");
                for (t in { submit: !0, change: !0, focusin: !0 }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), ne[t + "Bubbles"] = r.attributes[n].expando === !1);
                r = null }();
            var Le = /^(?:input|select|textarea)$/i,
                He = /^key/,
                qe = /^(?:mouse|pointer|contextmenu)|click/,
                _e = /^(?:focusinfocus|focusoutblur)$/,
                Me = /^([^.]*)(?:\.(.+)|)$/;
            ie.event = { global: {}, add: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, d, f, p, h, m, g = ie._data(e);
                    if (g) {
                        for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ie.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                                return typeof ie === Te || e && ie.event.triggered === e.type ? void 0 : ie.event.dispatch.apply(c.elem, arguments) }, c.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = Me.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (l = ie.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = ie.event.special[p] || {}, d = ie.extend({ type: p, origType: m, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && ie.expr.match.needsContext.test(i), namespace: h.join(".") }, u), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), ie.event.global[p] = !0);
                        e = null } }, remove: function(e, t, n, r, i) {
                    var o, a, s, u, l, c, d, f, p, h, m, g = ie.hasData(e) && ie._data(e);
                    if (g && (c = g.events)) {
                        for (t = (t || "").match(be) || [""], l = t.length; l--;)
                            if (s = Me.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                                for (d = ie.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                                u && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ie.removeEvent(e, p, g.handle), delete c[p]) } else
                                for (p in c) ie.event.remove(e, p + t[l], n, r, !0);
                        ie.isEmptyObject(c) && (delete g.handle, ie._removeData(e, "events")) } }, trigger: function(t, n, r, i) {
                    var o, a, s, u, l, c, d, f = [r || he],
                        p = te.call(t, "type") ? t.type : t,
                        h = te.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = c = r = r || he, 3 !== r.nodeType && 8 !== r.nodeType && !_e.test(p + ie.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[ie.expando] ? t : new ie.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), l = ie.event.special[p] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                        if (!i && !l.noBubble && !ie.isWindow(r)) {
                            for (u = l.delegateType || p, _e.test(u + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
                            c === (r.ownerDocument || he) && f.push(c.defaultView || c.parentWindow || e) }
                        for (d = 0;
                            (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? u : l.bindType || p, o = (ie._data(s, "events") || {})[t.type] && ie._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && ie.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                        if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && ie.acceptData(r) && a && r[p] && !ie.isWindow(r)) { c = r[a], c && (r[a] = null), ie.event.triggered = p;
                            try { r[p]() } catch (m) {}
                            ie.event.triggered = void 0, c && (r[a] = c) }
                        return t.result } }, dispatch: function(e) { e = ie.event.fix(e);
                    var t, n, r, i, o, a = [],
                        s = Y.call(arguments),
                        u = (ie._data(this, "events") || {})[e.type] || [],
                        l = ie.event.special[e.type] || {};
                    if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                        for (a = ie.event.handlers.call(this, e, u), t = 0;
                            (i = a[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = i.elem, o = 0;
                                (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((ie.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, e), e.result } }, handlers: function(e, t) {
                    var n, r, i, o, a = [],
                        s = t.delegateCount,
                        u = e.target;
                    if (s && u.nodeType && (!e.button || "click" !== e.type))
                        for (; u != this; u = u.parentNode || this)
                            if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                                for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ie(n, this).index(u) >= 0 : ie.find(n, this, null, [u]).length), i[n] && i.push(r);
                                i.length && a.push({ elem: u, handlers: i }) }
                    return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a }, fix: function(e) {
                    if (e[ie.expando]) return e;
                    var t, n, r, i = e.type,
                        o = e,
                        a = this.fixHooks[i];
                    for (a || (this.fixHooks[i] = a = qe.test(i) ? this.mouseHooks : He.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
                    return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, t) {
                        var n, r, i, o = t.button,
                            a = t.fromElement;
                        return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || he, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e } }, special: { load: { noBubble: !0 }, focus: { trigger: function() {
                            if (this !== h() && this.focus) try {
                                return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() {
                            return this === h() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() {
                            return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(e) {
                            return ie.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }, simulate: function(e, t, n, r) {
                    var i = ie.extend(new ie.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
                    r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault() } }, ie.removeEvent = he.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
                var r = "on" + t;
                e.detachEvent && (typeof e[r] === Te && (e[r] = null), e.detachEvent(r, n)) }, ie.Event = function(e, t) {
                return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t) }, ie.Event.prototype = { isDefaultPrevented: p, isPropagationStopped: p, isImmediatePropagationStopped: p, preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation() } }, ie.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) { ie.event.special[e] = { delegateType: t, bindType: t, handle: function(e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return (!i || i !== r && !ie.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), ne.submitBubbles || (ie.event.special.submit = { setup: function() {
                    return ie.nodeName(this, "form") ? !1 : void ie.event.add(this, "click._submit keypress._submit", function(e) {
                        var t = e.target,
                            n = ie.nodeName(t, "input") || ie.nodeName(t, "button") ? t.form : void 0;
                        n && !ie._data(n, "submitBubbles") && (ie.event.add(n, "submit._submit", function(e) { e._submit_bubble = !0 }), ie._data(n, "submitBubbles", !0)) }) }, postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ie.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function() {
                    return ie.nodeName(this, "form") ? !1 : void ie.event.remove(this, "._submit") } }), ne.changeBubbles || (ie.event.special.change = { setup: function() {
                    return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ie.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), ie.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, e, !0) })), !1) : void ie.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        Le.test(t.nodeName) && !ie._data(t, "changeBubbles") && (ie.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || ie.event.simulate("change", this.parentNode, e, !0) }), ie._data(t, "changeBubbles", !0)) }) }, handle: function(e) {
                    var t = e.target;
                    return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() {
                    return ie.event.remove(this, "._change"), !Le.test(this.nodeName) } }), ne.focusinBubbles || ie.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
                var n = function(e) { ie.event.simulate(t, e.target, ie.event.fix(e), !0) };
                ie.event.special[t] = { setup: function() {
                        var r = this.ownerDocument || this,
                            i = ie._data(r, t);
                        i || r.addEventListener(e, n, !0), ie._data(r, t, (i || 0) + 1) }, teardown: function() {
                        var r = this.ownerDocument || this,
                            i = ie._data(r, t) - 1;
                        i ? ie._data(r, t, i) : (r.removeEventListener(e, n, !0), ie._removeData(r, t)) } } }), ie.fn.extend({ on: function(e, t, n, r, i) {
                    var o, a;
                    if ("object" == typeof e) { "string" != typeof t && (n = n || t, t = void 0);
                        for (o in e) this.on(o, t, n, e[o], i);
                        return this }
                    if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
                    else if (!r) return this;
                    return 1 === i && (a = r, r = function(e) {
                        return ie().off(e), a.apply(this, arguments) }, r.guid = a.guid || (a.guid = ie.guid++)), this.each(function() { ie.event.add(this, e, r, n, t) }) }, one: function(e, t, n, r) {
                    return this.on(e, t, n, r, 1) }, off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (i in e) this.off(i, t, e[i]);
                        return this }
                    return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function() { ie.event.remove(this, e, n, t) }) }, trigger: function(e, t) {
                    return this.each(function() { ie.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) {
                    var n = this[0];
                    return n ? ie.event.trigger(e, t, n, !0) : void 0 } });
            var Fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                Oe = / jQuery\d+="(?:null|\d+)"/g,
                Be = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
                Pe = /^\s+/,
                Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                We = /<([\w:]+)/,
                $e = /<tbody/i,
                ze = /<|&#?\w+;/,
                Ie = /<(?:script|style|link)/i,
                Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ue = /^$|\/(?:java|ecma)script/i,
                Ve = /^true\/(.*)/,
                Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Ye = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
                Qe = m(he),
                Ge = Qe.appendChild(he.createElement("div"));
            Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td, ie.extend({ clone: function(e, t, n) {
                    var r, i, o, a, s, u = ie.contains(e.ownerDocument, e);
                    if (ne.html5Clone || ie.isXMLDoc(e) || !Be.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ge.innerHTML = e.outerHTML, Ge.removeChild(o = Ge.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
                        for (r = g(o), s = g(e), a = 0; null != (i = s[a]); ++a) r[a] && C(i, r[a]);
                    if (t)
                        if (n)
                            for (s = s || g(e), r = r || g(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
                        else T(e, o);
                    return r = g(o, "script"), r.length > 0 && w(r, !u && g(e, "script")), r = s = i = null, o }, buildFragment: function(e, t, n, r) {
                    for (var i, o, a, s, u, l, c, d = e.length, f = m(t), p = [], h = 0; d > h; h++)
                        if (o = e[h], o || 0 === o)
                            if ("object" === ie.type(o)) ie.merge(p, o.nodeType ? [o] : o);
                            else if (ze.test(o)) {
                        for (s = s || f.appendChild(t.createElement("div")), u = (We.exec(o) || ["", ""])[1].toLowerCase(), c = Ye[u] || Ye._default, s.innerHTML = c[1] + o.replace(Re, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                        if (!ne.leadingWhitespace && Pe.test(o) && p.push(t.createTextNode(Pe.exec(o)[0])), !ne.tbody)
                            for (o = "table" !== u || $e.test(o) ? "<table>" !== c[1] || $e.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ie.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                        for (ie.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                        s = f.lastChild } else p.push(t.createTextNode(o));
                    for (s && f.removeChild(s), ne.appendChecked || ie.grep(g(p, "input"), v), h = 0; o = p[h++];)
                        if ((!r || -1 === ie.inArray(o, r)) && (a = ie.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))
                            for (i = 0; o = s[i++];) Ue.test(o.type || "") && n.push(o);
                    return s = null, f }, cleanData: function(e, t) {
                    for (var n, r, i, o, a = 0, s = ie.expando, u = ie.cache, l = ne.deleteExpando, c = ie.event.special; null != (n = e[a]); a++)
                        if ((t || ie.acceptData(n)) && (i = n[s], o = i && u[i])) {
                            if (o.events)
                                for (r in o.events) c[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, o.handle);
                            u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Te ? n.removeAttribute(s) : n[s] = null, J.push(i)) } } }), ie.fn.extend({ text: function(e) {
                    return De(this, function(e) {
                        return void 0 === e ? ie.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e)) }, null, e, arguments.length) }, append: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = y(this, e);
                            t.appendChild(e) } }) }, prepend: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = y(this, e);
                            t.insertBefore(e, t.firstChild) } }) }, before: function() {
                    return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() {
                    return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function(e, t) {
                    for (var n, r = e ? ie.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ie.cleanData(g(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
                    return this }, empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && ie.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                        e.options && ie.nodeName(e, "select") && (e.options.length = 0) }
                    return this }, clone: function(e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                        return ie.clone(this, e, t) }) }, html: function(e) {
                    return De(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") : void 0;
                        if (!("string" != typeof e || Ie.test(e) || !ne.htmlSerialize && Be.test(e) || !ne.leadingWhitespace && Pe.test(e) || Ye[(We.exec(e) || ["", ""])[1].toLowerCase()])) { e = e.replace(Re, "<$1></$2>");
                            try {
                                for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(g(t, !1)), t.innerHTML = e);
                                t = 0 } catch (i) {} }
                        t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() {
                    var e = arguments[0];
                    return this.domManip(arguments, function(t) { e = this.parentNode, ie.cleanData(g(this)), e && e.replaceChild(t, this) }), e && (e.length || e.nodeType) ? this : this.remove() }, detach: function(e) {
                    return this.remove(e, !0) }, domManip: function(e, t) { e = Q.apply([], e);
                    var n, r, i, o, a, s, u = 0,
                        l = this.length,
                        c = this,
                        d = l - 1,
                        f = e[0],
                        p = ie.isFunction(f);
                    if (p || l > 1 && "string" == typeof f && !ne.checkClone && Xe.test(f)) return this.each(function(n) {
                        var r = c.eq(n);
                        p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t) });
                    if (l && (s = ie.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                        for (o = ie.map(g(s, "script"), b), i = o.length; l > u; u++) r = s, u !== d && (r = ie.clone(r, !0, !0), i && ie.merge(o, g(r, "script"))), t.call(this[u], r, u);
                        if (i)
                            for (a = o[o.length - 1].ownerDocument, ie.map(o, x), u = 0; i > u; u++) r = o[u], Ue.test(r.type || "") && !ie._data(r, "globalEval") && ie.contains(a, r) && (r.src ? ie._evalUrl && ie._evalUrl(r.src) : ie.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Je, "")));
                        s = n = null }
                    return this } }), ie.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { ie.fn[e] = function(e) {
                    for (var n, r = 0, i = [], o = ie(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ie(o[r])[t](n), G.apply(i, n.get());
                    return this.pushStack(i) } });
            var Ke, Ze = {};
            ! function() {
                var e;
                ne.shrinkWrapBlocks = function() {
                    if (null != e) return e;
                    e = !1;
                    var t, n, r;
                    return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0 } }();
            var et = /^margin/,
                tt = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"),
                nt, rt, it = /^(top|right|bottom|left)$/;
            e.getComputedStyle ? (nt = function(t) {
                    return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null) }, rt = function(e, t, n) {
                    var r, i, o, a, s = e.style;
                    return n = n || nt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)),
                        tt.test(a) && et.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
                }) : he.documentElement.currentStyle && (nt = function(e) {
                    return e.currentStyle }, rt = function(e, t, n) {
                    var r, i, o, a, s = e.style;
                    return n = n || nt(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), tt.test(a) && !it.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto" }),
                function() {
                    function t() {
                        var t, n, r, i;
                        n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || { width: "4px" }).width, i = t.appendChild(he.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r)) }
                    var n, r, i, o, a, s, u;
                    n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === r.opacity, ne.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, ie.extend(ne, { reliableHiddenOffsets: function() {
                            return null == s && t(), s }, boxSizingReliable: function() {
                            return null == a && t(), a }, pixelPosition: function() {
                            return null == o && t(), o }, reliableMarginRight: function() {
                            return null == u && t(), u } })) }(), ie.swap = function(e, t, n, r) {
                    var i, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    i = n.apply(e, r || []);
                    for (o in t) e.style[o] = a[o];
                    return i };
            var ot = /alpha\([^)]*\)/i,
                at = /opacity\s*=\s*([^)]*)/,
                st = /^(none|table(?!-c[ea]).+)/,
                ut = new RegExp("^(" + ke + ")(.*)$", "i"),
                lt = new RegExp("^([+-])=(" + ke + ")", "i"),
                ct = { position: "absolute", visibility: "hidden", display: "block" },
                dt = { letterSpacing: "0", fontWeight: "400" },
                ft = ["Webkit", "O", "Moz", "ms"];
            ie.extend({ cssHooks: { opacity: { get: function(e, t) {
                            if (t) {
                                var n = rt(e, "opacity");
                                return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": ne.cssFloat ? "cssFloat" : "styleFloat" }, style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, a, s = ie.camelCase(t),
                            u = e.style;
                        if (t = ie.cssProps[s] || (ie.cssProps[s] = S(u, s)), a = ie.cssHooks[t] || ie.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                        if (o = typeof n, "string" === o && (i = lt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ie.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try { u[t] = n } catch (l) {} } }, css: function(e, t, n, r) {
                    var i, o, a, s = ie.camelCase(t);
                    return t = ie.cssProps[s] || (ie.cssProps[s] = S(e.style, s)), a = ie.cssHooks[t] || ie.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = rt(e, t, r)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || ie.isNumeric(i) ? i || 0 : o) : o } }), ie.each(["height", "width"], function(e, t) { ie.cssHooks[t] = { get: function(e, n, r) {
                        return n ? st.test(ie.css(e, "display")) && 0 === e.offsetWidth ? ie.swap(e, ct, function() {
                            return L(e, t, r) }) : L(e, t, r) : void 0 }, set: function(e, n, r) {
                        var i = r && nt(e);
                        return D(e, n, r ? j(e, t, r, ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, i), i) : 0) } } }), ne.opacity || (ie.cssHooks.opacity = { get: function(e, t) {
                    return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function(e, t) {
                    var n = e.style,
                        r = e.currentStyle,
                        i = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                        o = r && r.filter || n.filter || "";
                    n.zoom = 1, (t >= 1 || "" === t) && "" === ie.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ot.test(o) ? o.replace(ot, i) : o + " " + i) } }), ie.cssHooks.marginRight = k(ne.reliableMarginRight, function(e, t) {
                return t ? ie.swap(e, { display: "inline-block" }, rt, [e, "marginRight"]) : void 0 }), ie.each({ margin: "", padding: "", border: "Width" }, function(e, t) { ie.cssHooks[e + t] = { expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Se[r] + t] = o[r] || o[r - 2] || o[0];
                        return i } }, et.test(e) || (ie.cssHooks[e + t].set = D) }), ie.fn.extend({ css: function(e, t) {
                    return De(this, function(e, t, n) {
                        var r, i, o = {},
                            a = 0;
                        if (ie.isArray(t)) {
                            for (r = nt(e), i = t.length; i > a; a++) o[t[a]] = ie.css(e, t[a], !1, r);
                            return o }
                        return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t) }, e, t, arguments.length > 1) }, show: function() {
                    return A(this, !0) }, hide: function() {
                    return A(this) }, toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Ae(this) ? ie(this).show() : ie(this).hide() }) } }), ie.Tween = H, H.prototype = { constructor: H, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? "" : "px") }, cur: function() {
                    var e = H.propHooks[this.prop];
                    return e && e.get ? e.get(this) : H.propHooks._default.get(this) }, run: function(e) {
                    var t, n = H.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this } }, H.prototype.init.prototype = H.prototype, H.propHooks = { _default: { get: function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, H.propHooks.scrollTop = H.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, ie.easing = { linear: function(e) {
                    return e }, swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2 } }, ie.fx = H.prototype.init, ie.fx.step = {};
            var pt, ht, mt = /^(?:toggle|show|hide)$/,
                gt = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"),
                vt = /queueHooks$/,
                yt = [F],
                bt = { "*": [function(e, t) {
                        var n = this.createTween(e, t),
                            r = n.cur(),
                            i = gt.exec(t),
                            o = i && i[3] || (ie.cssNumber[e] ? "" : "px"),
                            a = (ie.cssNumber[e] || "px" !== o && +r) && gt.exec(ie.css(n.elem, e)),
                            s = 1,
                            u = 20;
                        if (a && a[3] !== o) { o = o || a[3], i = i || [], a = +r || 1;
                            do s = s || ".5", a /= s, ie.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u) }
                        return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n }] };
            ie.Animation = ie.extend(B, { tweener: function(e, t) { ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                        for (var n, r = 0, i = e.length; i > r; r++) n = e[r], bt[n] = bt[n] || [], bt[n].unshift(t) }, prefilter: function(e, t) { t ? yt.unshift(e) : yt.push(e) } }), ie.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? ie.extend({}, e) : { complete: n || !n && t || ie.isFunction(e) && e, duration: e, easing: n && t || t && !ie.isFunction(t) && t };
                    return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() { ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue) }, r }, ie.fn.extend({ fadeTo: function(e, t, n, r) {
                        return this.filter(Ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function(e, t, n, r) {
                        var i = ie.isEmptyObject(e),
                            o = ie.speed(t, n, r),
                            a = function() {
                                var t = B(this, ie.extend({}, e), o);
                                (i || ie._data(this, "finish")) && t.stop(!0) };
                        return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a) }, stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n) };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                i = null != e && e + "queueHooks",
                                o = ie.timers,
                                a = ie._data(this);
                            if (i) a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a) a[i] && a[i].stop && vt.test(i) && r(a[i]);
                            for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                            (t || !n) && ie.dequeue(this, e) }) }, finish: function(e) {
                        return e !== !1 && (e = e || "fx"), this.each(function() {
                            var t, n = ie._data(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = ie.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish }) } }), ie.each(["toggle", "show", "hide"], function(e, t) {
                    var n = ie.fn[t];
                    ie.fn[t] = function(e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(_(t, !0), e, r, i) } }), ie.each({ slideDown: _("show"), slideUp: _("hide"), slideToggle: _("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { ie.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r) } }), ie.timers = [], ie.fx.tick = function() {
                    var e, t = ie.timers,
                        n = 0;
                    for (pt = ie.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                    t.length || ie.fx.stop(), pt = void 0 }, ie.fx.timer = function(e) { ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop() }, ie.fx.interval = 13, ie.fx.start = function() { ht || (ht = setInterval(ie.fx.tick, ie.fx.interval)) }, ie.fx.stop = function() { clearInterval(ht), ht = null }, ie.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ie.fn.delay = function(e, t) {
                    return e = ie.fx ? ie.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function() { clearTimeout(r) } }) },
                function() {
                    var e, t, n, r, i;
                    t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = he.createElement("select"), i = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(r.getAttribute("style")), ne.hrefNormalized = "/a" === r.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = i.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !i.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value }();
            var xt = /\r/g;
            ie.fn.extend({ val: function(e) {
                    var t, n, r, i = this[0]; {
                        if (arguments.length) return r = ie.isFunction(e), this.each(function(n) {
                            var i;
                            1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function(e) {
                                return null == e ? "" : e + "" })), t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i)) });
                        if (i) return t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n) } } }), ie.extend({ valHooks: { option: { get: function(e) {
                            var t = ie.find.attr(e, "value");
                            return null != t ? t : ie.trim(ie.text(e)) } }, select: { get: function(e) {
                            for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                                if (n = r[u], !(!n.selected && u !== i || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ie.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = ie(n).val(), o) return t;
                                    a.push(t) }
                            return a }, set: function(e, t) {
                            for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--;)
                                if (r = i[a], ie.inArray(ie.valHooks.option.get(r), o) >= 0) try { r.selected = n = !0 } catch (s) { r.scrollHeight } else r.selected = !1;
                            return n || (e.selectedIndex = -1), i } } } }), ie.each(["radio", "checkbox"], function() { ie.valHooks[this] = { set: function(e, t) {
                        return ie.isArray(t) ? e.checked = ie.inArray(ie(e).val(), t) >= 0 : void 0 } }, ne.checkOn || (ie.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value }) });
            var wt, Tt, Ct = ie.expr.attrHandle,
                Nt = /^(?:checked|selected)$/i,
                Et = ne.getSetAttribute,
                kt = ne.input;
            ie.fn.extend({ attr: function(e, t) {
                    return De(this, ie.attr, e, t, arguments.length > 1) }, removeAttr: function(e) {
                    return this.each(function() { ie.removeAttr(this, e) }) } }), ie.extend({ attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Te ? ie.prop(e, t, n) : (1 === o && ie.isXMLDoc(e) || (t = t.toLowerCase(), r = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? Tt : wt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ie.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ie.removeAttr(e, t)) }, removeAttr: function(e, t) {
                    var n, r, i = 0,
                        o = t && t.match(be);
                    if (o && 1 === e.nodeType)
                        for (; n = o[i++];) r = ie.propFix[n] || n, ie.expr.match.bool.test(n) ? kt && Et || !Nt.test(n) ? e[r] = !1 : e[ie.camelCase("default-" + n)] = e[r] = !1 : ie.attr(e, n, ""), e.removeAttribute(Et ? n : r) }, attrHooks: { type: { set: function(e, t) {
                            if (!ne.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t } } } } }), Tt = { set: function(e, t, n) {
                    return t === !1 ? ie.removeAttr(e, n) : kt && Et || !Nt.test(n) ? e.setAttribute(!Et && ie.propFix[n] || n, n) : e[ie.camelCase("default-" + n)] = e[n] = !0, n } }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = Ct[t] || ie.find.attr;
                Ct[t] = kt && Et || !Nt.test(t) ? function(e, t, r) {
                    var i, o;
                    return r || (o = Ct[t], Ct[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ct[t] = o), i } : function(e, t, n) {
                    return n ? void 0 : e[ie.camelCase("default-" + t)] ? t.toLowerCase() : null } }), kt && Et || (ie.attrHooks.value = { set: function(e, t, n) {
                    return ie.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n) } }), Et || (wt = { set: function(e, t, n) {
                    var r = e.getAttributeNode(n);
                    return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0 } }, Ct.id = Ct.name = Ct.coords = function(e, t, n) {
                var r;
                return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null }, ie.valHooks.button = { get: function(e, t) {
                    var n = e.getAttributeNode(t);
                    return n && n.specified ? n.value : void 0 }, set: wt.set }, ie.attrHooks.contenteditable = { set: function(e, t, n) { wt.set(e, "" === t ? !1 : t, n) } }, ie.each(["width", "height"], function(e, t) { ie.attrHooks[t] = { set: function(e, n) {
                        return "" === n ? (e.setAttribute(t, "auto"), n) : void 0 } } })), ne.style || (ie.attrHooks.style = { get: function(e) {
                    return e.style.cssText || void 0 }, set: function(e, t) {
                    return e.style.cssText = t + "" } });
            var St = /^(?:input|select|textarea|button|object)$/i,
                At = /^(?:a|area)$/i;
            ie.fn.extend({ prop: function(e, t) {
                    return De(this, ie.prop, e, t, arguments.length > 1) }, removeProp: function(e) {
                    return e = ie.propFix[e] || e, this.each(function() {
                        try { this[e] = void 0, delete this[e] } catch (t) {} }) } }), ie.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(e, t, n) {
                    var r, i, o, a = e.nodeType;
                    if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ie.isXMLDoc(e), o && (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) {
                            var t = ie.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : St.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1 } } } }), ne.hrefNormalized || ie.each(["href", "src"], function(e, t) { ie.propHooks[t] = { get: function(e) {
                        return e.getAttribute(t, 4) } } }), ne.optSelected || (ie.propHooks.selected = { get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { ie.propFix[this.toLowerCase()] = this }), ne.enctype || (ie.propFix.enctype = "encoding");
            var Dt = /[\t\r\n\f]/g;
            ie.fn.extend({ addClass: function(e) {
                    var t, n, r, i, o, a, s = 0,
                        u = this.length,
                        l = "string" == typeof e && e;
                    if (ie.isFunction(e)) return this.each(function(t) { ie(this).addClass(e.call(this, t, this.className)) });
                    if (l)
                        for (t = (e || "").match(be) || []; u > s; s++)
                            if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : " ")) {
                                for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                a = ie.trim(r), n.className !== a && (n.className = a) }
                    return this }, removeClass: function(e) {
                    var t, n, r, i, o, a, s = 0,
                        u = this.length,
                        l = 0 === arguments.length || "string" == typeof e && e;
                    if (ie.isFunction(e)) return this.each(function(t) { ie(this).removeClass(e.call(this, t, this.className)) });
                    if (l)
                        for (t = (e || "").match(be) || []; u > s; s++)
                            if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : "")) {
                                for (o = 0; i = t[o++];)
                                    for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                                a = e ? ie.trim(r) : "", n.className !== a && (n.className = a) }
                    return this }, toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ie.isFunction(e) ? function(n) { ie(this).toggleClass(e.call(this, n, this.className, t), t) } : function() {
                        if ("string" === n)
                            for (var t, r = 0, i = ie(this), o = e.match(be) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else(n === Te || "boolean" === n) && (this.className && ie._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ie._data(this, "__className__") || "") }) }, hasClass: function(e) {
                    for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dt, " ").indexOf(t) >= 0) return !0;
                    return !1 } }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { ie.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), ie.fn.extend({ hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e) }, bind: function(e, t, n) {
                    return this.on(e, null, t, n) }, unbind: function(e, t) {
                    return this.off(e, null, t) }, delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r) }, undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } });
            var jt = ie.now(),
                Lt = /\?/,
                Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            ie.parseJSON = function(t) {
                if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
                var n, r = null,
                    i = ie.trim(t + "");
                return i && !ie.trim(i.replace(Ht, function(e, t, i, o) {
                    return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "") })) ? Function("return " + i)() : ie.error("Invalid JSON: " + t) }, ie.parseXML = function(t) {
                var n, r;
                if (!t || "string" != typeof t) return null;
                try { e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t)) } catch (i) { n = void 0 }
                return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t), n };
            var qt, _t, Mt = /#.*$/,
                Ft = /([?&])_=[^&]*/,
                Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Pt = /^(?:GET|HEAD)$/,
                Rt = /^\/\//,
                Wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                $t = {},
                zt = {},
                It = "*/".concat("*");
            try { _t = location.href } catch (Xt) { _t = he.createElement("a"), _t.href = "", _t = _t.href }
            qt = Wt.exec(_t.toLowerCase()) || [], ie.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: _t, type: "GET", isLocal: Bt.test(qt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": ie.parseJSON, "text xml": ie.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) {
                    return t ? W(W(e, ie.ajaxSettings), t) : W(ie.ajaxSettings, e) }, ajaxPrefilter: P($t), ajaxTransport: P(zt), ajax: function(e, t) {
                    function n(e, t, n, r) {
                        var i, c, v, y, x, T = t;
                        2 !== b && (b = 2, s && clearTimeout(s), l = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (y = $(d, w, n)), y = z(d, y, w, i), i ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (ie.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (ie.etag[o] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, i = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(f, [c, T, w]) : h.rejectWith(f, [w, T, v]), w.statusCode(g), g = void 0, u && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? c : v]), m.fireWith(f, [w, T]), u && (p.trigger("ajaxComplete", [w, d]), --ie.active || ie.event.trigger("ajaxStop"))) } "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, i, o, a, s, u, l, c, d = ie.ajaxSetup({}, t),
                        f = d.context || d,
                        p = d.context && (f.nodeType || f.jquery) ? ie(f) : ie.event,
                        h = ie.Deferred(),
                        m = ie.Callbacks("once memory"),
                        g = d.statusCode || {},
                        v = {},
                        y = {},
                        b = 0,
                        x = "canceled",
                        w = { readyState: 0, getResponseHeader: function(e) {
                                var t;
                                if (2 === b) {
                                    if (!c)
                                        for (c = {}; t = Ot.exec(a);) c[t[1].toLowerCase()] = t[2];
                                    t = c[e.toLowerCase()] }
                                return null == t ? null : t }, getAllResponseHeaders: function() {
                                return 2 === b ? a : null }, setRequestHeader: function(e, t) {
                                var n = e.toLowerCase();
                                return b || (e = y[n] = y[n] || e, v[e] = t), this }, overrideMimeType: function(e) {
                                return b || (d.mimeType = e), this }, statusCode: function(e) {
                                var t;
                                if (e)
                                    if (2 > b)
                                        for (t in e) g[t] = [g[t], e[t]];
                                    else w.always(e[w.status]);
                                return this }, abort: function(e) {
                                var t = e || x;
                                return l && l.abort(t), n(0, t), this } };
                    if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || _t) + "").replace(Mt, "").replace(Rt, qt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ie.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (r = Wt.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === qt[1] && r[2] === qt[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (qt[3] || ("http:" === qt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ie.param(d.data, d.traditional)), R($t, d, t, w), 2 === b) return w;
                    u = ie.event && d.global, u && 0 === ie.active++ && ie.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Pt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Lt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ft.test(o) ? o.replace(Ft, "$1_=" + jt++) : o + (Lt.test(o) ? "&" : "?") + "_=" + jt++)), d.ifModified && (ie.lastModified[o] && w.setRequestHeader("If-Modified-Since", ie.lastModified[o]), ie.etag[o] && w.setRequestHeader("If-None-Match", ie.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + It + "; q=0.01" : "") : d.accepts["*"]);
                    for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
                    if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
                    x = "abort";
                    for (i in { success: 1, error: 1, complete: 1 }) w[i](d[i]);
                    if (l = R(zt, d, t, w)) { w.readyState = 1, u && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() { w.abort("timeout") }, d.timeout));
                        try { b = 1, l.send(v, n) } catch (T) {
                            if (!(2 > b)) throw T;
                            n(-1, T) } } else n(-1, "No Transport");
                    return w }, getJSON: function(e, t, n) {
                    return ie.get(e, t, n, "json") }, getScript: function(e, t) {
                    return ie.get(e, void 0, t, "script") } }), ie.each(["get", "post"], function(e, t) { ie[t] = function(e, n, r, i) {
                    return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({ url: e, type: t, dataType: i, data: n, success: r }) } }), ie._evalUrl = function(e) {
                return ie.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, ie.fn.extend({ wrapAll: function(e) {
                    if (ie.isFunction(e)) return this.each(function(t) { ie(this).wrapAll(e.call(this, t)) });
                    if (this[0]) {
                        var t = ie(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                            return e }).append(this) }
                    return this }, wrapInner: function(e) {
                    return this.each(ie.isFunction(e) ? function(t) { ie(this).wrapInner(e.call(this, t)) } : function() {
                        var t = ie(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function(e) {
                    var t = ie.isFunction(e);
                    return this.each(function(n) { ie(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function() {
                    return this.parent().each(function() { ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes) }).end() } }), ie.expr.filters.hidden = function(e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ie.css(e, "display")) }, ie.expr.filters.visible = function(e) {
                return !ie.expr.filters.hidden(e) };
            var Ut = /%20/g,
                Vt = /\[\]$/,
                Jt = /\r?\n/g,
                Yt = /^(?:submit|button|image|reset|file)$/i,
                Qt = /^(?:input|select|textarea|keygen)/i;
            ie.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) { t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
                if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function() { i(this.name, this.value) });
                else
                    for (n in e) I(n, e[n], t, i);
                return r.join("&").replace(Ut, "+") }, ie.fn.extend({ serialize: function() {
                    return ie.param(this.serializeArray()) }, serializeArray: function() {
                    return this.map(function() {
                        var e = ie.prop(this, "elements");
                        return e ? ie.makeArray(e) : this }).filter(function() {
                        var e = this.type;
                        return this.name && !ie(this).is(":disabled") && Qt.test(this.nodeName) && !Yt.test(e) && (this.checked || !je.test(e)) }).map(function(e, t) {
                        var n = ie(this).val();
                        return null == n ? null : ie.isArray(n) ? ie.map(n, function(e) {
                            return { name: t.name, value: e.replace(Jt, "\r\n") } }) : { name: t.name, value: n.replace(Jt, "\r\n") } }).get() } }), ie.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
                return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || U() } : X;
            var Gt = 0,
                Kt = {},
                Zt = ie.ajaxSettings.xhr();
            e.attachEvent && e.attachEvent("onunload", function() {
                for (var e in Kt) Kt[e](void 0, !0) }), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && ie.ajaxTransport(function(e) {
                if (!e.crossDomain || ne.cors) {
                    var t;
                    return { send: function(n, r) {
                            var i, o = e.xhr(),
                                a = ++Gt;
                            if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (i in e.xhrFields) o[i] = e.xhrFields[i];
                            e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                            for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                            o.send(e.hasContent && e.data || null), t = function(n, i) {
                                var s, u, l;
                                if (t && (i || 4 === o.readyState))
                                    if (delete Kt[a], t = void 0, o.onreadystatechange = ie.noop, i) 4 !== o.readyState && o.abort();
                                    else { l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                                        try { u = o.statusText } catch (c) { u = "" }
                                        s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404 }
                                l && r(s, u, l, o.getAllResponseHeaders()) }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Kt[a] = t : t() }, abort: function() { t && t(void 0, !0) } } } }), ie.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) {
                        return ie.globalEval(e), e } } }), ie.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), ie.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n = he.head || ie("head")[0] || he.documentElement;
                    return { send: function(r, i) { t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                                (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success")) }, n.insertBefore(t, n.firstChild) }, abort: function() { t && t.onload(void 0, !0) } } } });
            var en = [],
                tn = /(=)\?(?=&|$)|\?\?/;
            ie.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
                    var e = en.pop() || ie.expando + "_" + jt++;
                    return this[e] = !0, e } }), ie.ajaxPrefilter("json jsonp", function(t, n, r) {
                var i, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
                return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + i) : t.jsonp !== !1 && (t.url += (Lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                    return a || ie.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function() { a = arguments }, r.always(function() { e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, en.push(i)), a && ie.isFunction(o) && o(a[0]), a = o = void 0 }), "script") : void 0 }), ie.parseHTML = function(e, t, n) {
                if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || he;
                var r = de.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes)) };
            var nn = ie.fn.load;
            ie.fn.load = function(e, t, n) {
                if ("string" != typeof e && nn) return nn.apply(this, arguments);
                var r, i, o, a = this,
                    s = e.indexOf(" ");
                return s >= 0 && (r = ie.trim(e.slice(s, e.length)), e = e.slice(0, s)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ie.ajax({ url: e, type: o, dataType: "html", data: t }).done(function(e) { i = arguments, a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e) }).complete(n && function(e, t) { a.each(n, i || [e.responseText, t, e]) }), this }, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { ie.fn[t] = function(e) {
                    return this.on(t, e) } }), ie.expr.filters.animated = function(e) {
                return ie.grep(ie.timers, function(t) {
                    return e === t.elem }).length };
            var rn = e.document.documentElement;
            ie.offset = { setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, l, c = ie.css(e, "position"),
                        d = ie(e),
                        f = {}; "static" === c && (e.style.position = "relative"), s = d.offset(), o = ie.css(e, "top"), u = ie.css(e, "left"), l = ("absolute" === c || "fixed" === c) && ie.inArray("auto", [o, u]) > -1, l ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ie.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f) } }, ie.fn.extend({ offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) { ie.offset.setOffset(this, e, t) });
                    var t, n, r = { top: 0, left: 0 },
                        i = this[0],
                        o = i && i.ownerDocument;
                    if (o) return t = o.documentElement, ie.contains(t, i) ? (typeof i.getBoundingClientRect !== Te && (r = i.getBoundingClientRect()), n = V(o), { top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : r }, position: function() {
                    if (this[0]) {
                        var e, t, n = { top: 0, left: 0 },
                            r = this[0];
                        return "fixed" === ie.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (n = e.offset()), n.top += ie.css(e[0], "borderTopWidth", !0), n.left += ie.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - ie.css(r, "marginTop", !0), left: t.left - n.left - ie.css(r, "marginLeft", !0) } } }, offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || rn; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");) e = e.offsetParent;
                        return e || rn }) } }), ie.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
                var n = /Y/.test(t);
                ie.fn[e] = function(r) {
                    return De(this, function(e, r, i) {
                        var o = V(e);
                        return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? ie(o).scrollLeft() : i, n ? i : ie(o).scrollTop()) : e[r] = i) }, e, r, arguments.length, null) } }), ie.each(["top", "left"], function(e, t) { ie.cssHooks[t] = k(ne.pixelPosition, function(e, n) {
                    return n ? (n = rt(e, t), tt.test(n) ? ie(e).position()[t] + "px" : n) : void 0 }) }), ie.each({ Height: "height", Width: "width" }, function(e, t) {
                ie.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, r) {
                    ie.fn[r] = function(r, i) {
                        var o = arguments.length && (n || "boolean" != typeof r),
                            a = n || (r === !0 || i === !0 ? "margin" : "border");

                        return De(this, function(t, n, r) {
                            var i;
                            return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a) }, t, o ? r : void 0, o, null)
                    }
                })
            }), ie.fn.size = function() {
                return this.length }, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
                return ie });
            var on = e.jQuery,
                an = e.$;
            return ie.noConflict = function(t) {
                return e.$ === ie && (e.$ = an), t && e.jQuery === ie && (e.jQuery = on), ie }, typeof t === Te && (e.jQuery = e.$ = ie), ie
        })
    }).call(this),
        function() { t = n = window.jQuery.noConflict() }.call(this), "undefined" == typeof Package && (Package = {}), Package.jquery = { $: t, jQuery: n }
}();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.jquery.$,
        o = Package.jquery.jQuery;! function(e) {
        function t(e) {
            return "object" == typeof e ? e : { top: e, left: e } }
        var o = e.scrollTo = function(t, o, n) { e(window).scrollTo(t, o, n) };
        o.defaults = { axis: "xy", duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1, limit: !0 }, o.window = function(t) {
            return e(window)._scrollable() }, e.fn._scrollable = function() {
            return this.map(function() {
                var t = this,
                    o = !t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
                if (!o) return t;
                var n = (t.contentWindow || t).document || t.ownerDocument || t;
                return /webkit/i.test(navigator.userAgent) || "BackCompat" == n.compatMode ? n.body : n.documentElement }) }, e.fn.scrollTo = function(n, r, a) {
            return "object" == typeof r && (a = r, r = 0), "function" == typeof a && (a = { onAfter: a }), "max" == n && (n = 9e9), a = e.extend({}, o.defaults, a), r = r || a.duration, a.queue = a.queue && a.axis.length > 1, a.queue && (r /= 2), a.offset = t(a.offset), a.over = t(a.over), this._scrollable().each(function() {
                function i(e) { c.animate(l, r, a.easing, e && function() { e.call(this, u, a) }) }
                if (null != n) {
                    var s = this,
                        c = e(s),
                        u = n,
                        f, l = {},
                        d = c.is("html,body");
                    switch (typeof u) {
                        case "number":
                        case "string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(u)) { u = t(u);
                                break }
                            if (u = e(u, this), !u.length) return;
                        case "object":
                            (u.is || u.style) && (f = (u = e(u)).offset()) }
                    e.each(a.axis.split(""), function(e, t) {
                        var n = "x" == t ? "Left" : "Top",
                            r = n.toLowerCase(),
                            m = "scroll" + n,
                            h = s[m],
                            y = o.max(s, t);
                        if (f) l[m] = f[r] + (d ? 0 : h - c.offset()[r]), a.margin && (l[m] -= parseInt(u.css("margin" + n)) || 0, l[m] -= parseInt(u.css("border" + n + "Width")) || 0), l[m] += a.offset[r] || 0, a.over[r] && (l[m] += u["x" == t ? "width" : "height"]() * a.over[r]);
                        else {
                            var g = u[r];
                            l[m] = g.slice && "%" == g.slice(-1) ? parseFloat(g) / 100 * y : g }
                        a.limit && /^\d+$/.test(l[m]) && (l[m] = l[m] <= 0 ? 0 : Math.min(l[m], y)), !e && a.queue && (h != l[m] && i(a.onAfterFirst), delete l[m]) }), i(a.onAfter) } }).end() }, o.max = function(t, o) {
            var n = "x" == o ? "Width" : "Height",
                r = "scroll" + n;
            if (!e(t).is("html,body")) return t[r] - e(t)[n.toLowerCase()]();
            var a = "client" + n,
                i = t.ownerDocument.documentElement,
                s = t.ownerDocument.body;
            return Math.max(i[r], s[r]) - Math.min(i[a], s[a]) } }(o), "undefined" == typeof Package && (Package = {}), Package["natestrauser:jquery-scrollto"] = {} }();

! function() {
    var a = Package.meteor.Meteor,
        e = Package.jquery.$,
        n = Package.jquery.jQuery,
        i, o;
    (function() { window.YT || (i = { loading: 0, loaded: 0 }), window.YTConfig || (o = { host: "https://www.youtube.com" }), i.load = function() { i.loading || (i.loading = 1, function() {
                var a = [];
                i.ready = function(e) { i.loaded ? e() : a.push(e) }, window.onYTReady = function() { i.loaded = 1;
                    for (var e = 0; e < a.length; e++) try { a[e]() } catch (n) {}
                    i.loading = 0 }, i.setConfig = function(a) {
                    for (var e in a) a.hasOwnProperty(e) && (YTconfig[e] = a[e]) }, e(document).ready(function() {
                    var a = document.createElement("script");
                    a.id = "www-widgetapi-script", a.src = "https://s.ytimg.com/yts/jsbin/www-widgetapi-vfldTtH0_/www-widgetapi.js", e("head").append(a) }) }()) } }).call(this), "undefined" == typeof Package && (Package = {}), Package["adrianliaw:youtube-iframe-api"] = { YT: i, YTConfig: o } }();

! function() {
    var e = Package.meteor.Meteor,
        a = Package.tracker.Tracker,
        c = Package.tracker.Deps,
        a, c; "undefined" == typeof Package && (Package = {}), Package.deps = { Tracker: a, Deps: c } }();

! function() {
    var t = Package.meteor.Meteor,
        e = Package.tracker.Tracker,
        r = Package.tracker.Deps,
        i, n, a;
    (function() { i = {}, n = function(t) {
            return t }, a = Array.prototype.slice }).call(this),
        function() {
            var t = Object.prototype.hasOwnProperty,
                e = function(e, r) {
                    for (var i in r) t.call(r, i) && (e[i] = r[i]);
                    return e };
            i.Visitor = function(t) { e(this, t) }, i.Visitor.def = function(t) { e(this.prototype, t) }, i.Visitor.extend = function(t) {
                var r = this,
                    n = function a() { i.Visitor.apply(this, arguments) };
                return n.prototype = new r, n.extend = r.extend, n.def = r.def, t && e(n.prototype, t), n }, i.Visitor.def({ visit: function(t) {
                    if (null == t) return this.visitNull.apply(this, arguments);
                    if ("object" == typeof t) {
                        if (t.htmljsType) switch (t.htmljsType) {
                            case i.Tag.htmljsType:
                                return this.visitTag.apply(this, arguments);
                            case i.CharRef.htmljsType:
                                return this.visitCharRef.apply(this, arguments);
                            case i.Comment.htmljsType:
                                return this.visitComment.apply(this, arguments);
                            case i.Raw.htmljsType:
                                return this.visitRaw.apply(this, arguments);
                            default:
                                throw new Error("Unknown htmljs type: " + t.htmljsType) }
                        return i.isArray(t) ? this.visitArray.apply(this, arguments) : this.visitObject.apply(this, arguments) }
                    if ("string" == typeof t || "boolean" == typeof t || "number" == typeof t) return this.visitPrimitive.apply(this, arguments);
                    if ("function" == typeof t) return this.visitFunction.apply(this, arguments);
                    throw new Error("Unexpected object in htmljs: " + t) }, visitNull: function(t) {}, visitPrimitive: function(t) {}, visitArray: function(t) {}, visitComment: function(t) {}, visitCharRef: function(t) {}, visitRaw: function(t) {}, visitTag: function(t) {}, visitObject: function(t) {
                    throw new Error("Unexpected object in htmljs: " + t) }, visitFunction: function(t) {
                    throw new Error("Unexpected function in htmljs: " + t) } }), i.TransformingVisitor = i.Visitor.extend(), i.TransformingVisitor.def({ visitNull: n, visitPrimitive: n, visitArray: function(t) {
                    for (var e = a.call(arguments), r = t, i = 0; i < t.length; i++) {
                        var n = t[i];
                        e[0] = n;
                        var o = this.visit.apply(this, e);
                        o !== n && (r === t && (r = t.slice()), r[i] = o) }
                    return r }, visitComment: n, visitCharRef: n, visitRaw: n, visitObject: n, visitFunction: n, visitTag: function(t) {
                    var e = t.children,
                        r = a.call(arguments);
                    r[0] = e;
                    var n = this.visitChildren.apply(this, r),
                        o = t.attrs;
                    r[0] = o;
                    var s = this.visitAttributes.apply(this, r);
                    if (s === o && n === e) return t;
                    var u = i.getTag(t.tagName).apply(null, n);
                    return u.attrs = s, u }, visitChildren: function(t) {
                    return this.visitArray.apply(this, arguments) }, visitAttributes: function(t) {
                    if (i.isArray(t)) {
                        for (var r = a.call(arguments), n = t, o = 0; o < t.length; o++) {
                            var s = t[o];
                            r[0] = s;
                            var u = this.visitAttributes.apply(this, r);
                            u !== s && (n === t && (n = t.slice()), n[o] = u) }
                        return n }
                    if (t && i.isConstructedObject(t)) throw new Error("The basic HTML.TransformingVisitor does not support foreign objects in attributes.  Define a custom visitAttributes for this case.");
                    var l = t,
                        f = l;
                    if (l) {
                        var c = [null, null];
                        c.push.apply(c, arguments);
                        for (var h in l) {
                            var p = l[h];
                            c[0] = h, c[1] = p;
                            var m = this.visitAttribute.apply(this, c);
                            m !== p && (f === l && (f = e({}, l)), f[h] = m) } }
                    return f }, visitAttribute: function(t, e, r) {
                    var i = a.call(arguments, 2);
                    return i[0] = e, this.visit.apply(this, i) } }), i.ToTextVisitor = i.Visitor.extend(), i.ToTextVisitor.def({ visitNull: function(t) {
                    return "" }, visitPrimitive: function(t) {
                    var e = String(t);
                    return this.textMode === i.TEXTMODE.RCDATA ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;") : this.textMode === i.TEXTMODE.ATTRIBUTE ? e.replace(/&/g, "&amp;").replace(/"/g, "&quot;") : e }, visitArray: function(t) {
                    for (var e = [], r = 0; r < t.length; r++) e.push(this.visit(t[r]));
                    return e.join("") }, visitComment: function(t) {
                    throw new Error("Can't have a comment here") }, visitCharRef: function(t) {
                    return this.textMode === i.TEXTMODE.RCDATA || this.textMode === i.TEXTMODE.ATTRIBUTE ? t.html : t.str }, visitRaw: function(t) {
                    return t.value }, visitTag: function(t) {
                    return this.visit(this.toHTML(t)) }, visitObject: function(t) {
                    throw new Error("Unexpected object in htmljs in toText: " + t) }, toHTML: function(t) {
                    return i.toHTML(t) } }), i.ToHTMLVisitor = i.Visitor.extend(), i.ToHTMLVisitor.def({ visitNull: function(t) {
                    return "" }, visitPrimitive: function(t) {
                    var e = String(t);
                    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;") }, visitArray: function(t) {
                    for (var e = [], r = 0; r < t.length; r++) e.push(this.visit(t[r]));
                    return e.join("") }, visitComment: function(t) {
                    return "<!--" + t.sanitizedValue + "-->" }, visitCharRef: function(t) {
                    return t.html }, visitRaw: function(t) {
                    return t.value }, visitTag: function(t) {
                    var e = [],
                        r = t.tagName,
                        n = t.children,
                        a = t.attrs;
                    if (a) { a = i.flattenAttributes(a);
                        for (var o in a)
                            if ("value" === o && "textarea" === r) n = [a[o], n];
                            else {
                                var s = this.toText(a[o], i.TEXTMODE.ATTRIBUTE);
                                e.push(" " + o + '="' + s + '"') } }
                    var u = "<" + r + e.join("") + ">",
                        l = [],
                        f;
                    if ("textarea" === r) {
                        for (var c = 0; c < n.length; c++) l.push(this.toText(n[c], i.TEXTMODE.RCDATA));
                        f = l.join(""), "\n" === f.slice(0, 1) && (f = "\n" + f) } else {
                        for (var c = 0; c < n.length; c++) l.push(this.visit(n[c]));
                        f = l.join("") }
                    var h = u + f;
                    return (n.length || !i.isVoidElement(r)) && (h += "</" + r + ">"), h }, visitObject: function(t) {
                    throw new Error("Unexpected object in htmljs in toHTML: " + t) }, toText: function(t, e) {
                    return i.toText(t, e) } }) }.call(this),
        function() { i.Tag = function() {}, i.Tag.prototype.tagName = "", i.Tag.prototype.attrs = null, i.Tag.prototype.children = Object.freeze ? Object.freeze([]) : [], i.Tag.prototype.htmljsType = i.Tag.htmljsType = ["Tag"];
            var t = function(t) {
                    var e = function() {
                        var t = this instanceof i.Tag ? this : new e,
                            r = 0,
                            n = arguments.length && arguments[0];
                        if (n && "object" == typeof n)
                            if (i.isConstructedObject(n)) {
                                if (n instanceof i.Attrs) {
                                    var o = n.value;
                                    1 === o.length ? t.attrs = o[0] : o.length > 1 && (t.attrs = o), r++ } } else t.attrs = n, r++;
                        return r < arguments.length && (t.children = a.call(arguments, r)), t };
                    return e.prototype = new i.Tag, e.prototype.constructor = e, e.prototype.tagName = t, e },
                e = i.Attrs = function() {
                    var t = this instanceof e ? this : new e;
                    return t.value = a.call(arguments), t };
            i.getTag = function(e) {
                var r = i.getSymbolName(e);
                if (r === e) throw new Error("Use the lowercase or camelCase form of '" + e + "' here");
                return i[r] || (i[r] = t(e)), i[r] }, i.ensureTag = function(t) { i.getTag(t) }, i.isTagEnsured = function(t) {
                return i.isKnownElement(t) }, i.getSymbolName = function(t) {
                return t.toUpperCase().replace(/-/g, "_") }, i.knownElementNames = "a abbr acronym address applet area article aside audio b base basefont bdi bdo big blockquote body br button canvas caption center cite code col colgroup command data datagrid datalist dd del details dfn dir div dl dt em embed eventsource fieldset figcaption figure font footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins isindex kbd keygen label legend li link main map mark menu meta meter nav noframes noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strike strong style sub summary sup table tbody td textarea tfoot th thead time title tr track tt u ul var video wbr".split(" "), i.knownSVGElementNames = "altGlyph altGlyphDef altGlyphItem animate animateColor animateMotion animateTransform circle clipPath color-profile cursor defs desc ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence filter font font-face font-face-format font-face-name font-face-src font-face-uri foreignObject g glyph glyphRef hkern image line linearGradient marker mask metadata missing-glyph path pattern polygon polyline radialGradient rect script set stop style svg switch symbol text textPath title tref tspan use view vkern".split(" "), i.knownElementNames = i.knownElementNames.concat(i.knownSVGElementNames), i.voidElementNames = "area base br col command embed hr img input keygen link meta param source track wbr".split(" ");
            var r = { yes: !0 },
                n = function(t) {
                    for (var e = {}, i = 0; i < t.length; i++) e[t[i]] = r;
                    return e },
                o = n(i.voidElementNames),
                s = n(i.knownElementNames),
                u = n(i.knownSVGElementNames);
            i.isKnownElement = function(t) {
                return s[t] === r }, i.isKnownSVGElement = function(t) {
                return u[t] === r }, i.isVoidElement = function(t) {
                return o[t] === r };
            for (var l = 0; l < i.knownElementNames.length; l++) i.ensureTag(i.knownElementNames[l]);
            var f = i.CharRef = function(t) {
                if (!(this instanceof f)) return new f(t);
                if (!(t && t.html && t.str)) throw new Error("HTML.CharRef must be constructed with ({html:..., str:...})");
                this.html = t.html, this.str = t.str };
            f.prototype.htmljsType = f.htmljsType = ["CharRef"];
            var c = i.Comment = function(t) {
                if (!(this instanceof c)) return new c(t);
                if ("string" != typeof t) throw new Error("HTML.Comment must be constructed with a string");
                this.value = t, this.sanitizedValue = t.replace(/^-|--+|-$/g, "") };
            c.prototype.htmljsType = c.htmljsType = ["Comment"];
            var h = i.Raw = function(t) {
                if (!(this instanceof h)) return new h(t);
                if ("string" != typeof t) throw new Error("HTML.Raw must be constructed with a string");
                this.value = t };
            h.prototype.htmljsType = h.htmljsType = ["Raw"], i.isArray = function(t) {
                return t instanceof Array }, i.isConstructedObject = function(t) {
                return t && "object" == typeof t && t.constructor !== Object && !Object.prototype.hasOwnProperty.call(t, "constructor") }, i.isNully = function(t) {
                if (null == t) return !0;
                if (i.isArray(t)) {
                    for (var e = 0; e < t.length; e++)
                        if (!i.isNully(t[e])) return !1;
                    return !0 }
                return !1 }, i.isValidAttributeName = function(t) {
                return /^[:_A-Za-z][:_A-Za-z0-9.\-]*/.test(t) }, i.flattenAttributes = function(t) {
                if (!t) return t;
                var e = i.isArray(t);
                if (e && 0 === t.length) return null;
                for (var r = {}, n = 0, a = e ? t.length : 1; a > n; n++) {
                    var o = e ? t[n] : t;
                    if ("object" != typeof o || i.isConstructedObject(o)) throw new Error("Expected plain JS object as attrs, found: " + o);
                    for (var s in o) {
                        if (!i.isValidAttributeName(s)) throw new Error("Illegal HTML attribute name: " + s);
                        var u = o[s];
                        i.isNully(u) || (r[s] = u) } }
                return r }, i.toHTML = function(t) {
                return (new i.ToHTMLVisitor).visit(t) }, i.TEXTMODE = { STRING: 1, RCDATA: 2, ATTRIBUTE: 3 }, i.toText = function(t, e) {
                if (!e) throw new Error("textMode required for HTML.toText");
                if (e !== i.TEXTMODE.STRING && e !== i.TEXTMODE.RCDATA && e !== i.TEXTMODE.ATTRIBUTE) throw new Error("Unknown textMode: " + e);
                var r = new i.ToTextVisitor({ textMode: e });
                return r.visit(t) } }.call(this), "undefined" == typeof Package && (Package = {}), Package.htmljs = { HTML: i } }();

! function() {
    var e = Package.meteor.Meteor,
        n = Package.tracker.Tracker,
        o = Package.tracker.Deps,
        r = Package.minimongo.LocalCollection,
        i = Package.minimongo.Minimongo,
        t = Package.underscore._,
        a = Package.random.Random,
        c, f, u, d;
    (function() {
        var e = function() { c._suppressWarnings ? c._suppressWarnings-- : ("undefined" != typeof console && console.warn && console.warn.apply(console, arguments), c._loggedWarnings++) },
            o = r._idStringify,
            i = r._idParse;
        c = { _suppressWarnings: 0, _loggedWarnings: 0, observe: function(e, o) {
                var r = null,
                    i = null,
                    a = [],
                    c = n.autorun(function() {
                        var c = e();
                        n.nonreactive(function() {
                            var e;
                            if (i && (a = t.map(r.fetch(), function(e) {
                                    return { _id: e._id, item: e } }), i.stop(), i = null), c)
                                if (c instanceof Array) e = u(a, c, o);
                                else {
                                    if (!l(c)) throw s();
                                    var n = d(a, c, o);
                                    e = n[0], i = n[1] }
                            else e = f(a, o);
                            v(a, e, o), r = c, a = e }) });
                return { stop: function() { c.stop(), i && i.stop() } } }, fetch: function(e) {
                if (e) {
                    if (e instanceof Array) return e;
                    if (l(e)) return e.fetch();
                    throw s() }
                return [] } };
        var s = function() {
                return new Error("{{#each}} currently only accepts arrays, cursors or falsey values.") },
            l = function(e) {
                return e && t.isObject(e) && t.isFunction(e.observe) && t.isFunction(e.fetch) },
            v = function(e, n, r) {
                var a = Package.minimongo.LocalCollection._diffQueryOrderedChanges,
                    c = [],
                    f = [],
                    u = {},
                    d = {},
                    s = {},
                    l = e.length;
                t.each(n, function(e, n) { f.push({ _id: e._id }), d[o(e._id)] = n }), t.each(e, function(e, n) { c.push({ _id: e._id }), u[o(e._id)] = n, s[o(e._id)] = n }), a(c, f, { addedBefore: function(e, i, a) {
                        var c = a ? s[o(a)] : l;
                        a && t.each(s, function(e, n) { e >= c && s[n]++ }), l++, s[o(e)] = c, r.addedAt(e, n[d[o(e)]].item, c, a) }, movedBefore: function(e, i) {
                        if (e !== i) {
                            var a = s[o(e)],
                                c = i ? s[o(i)] : l;
                            c > a && c--, t.each(s, function(e, n) { e > a && c > e ? s[n]-- : e >= c && a > e && s[n]++ }), s[o(e)] = c, r.movedTo(e, n[d[o(e)]].item, a, c, i) } }, removed: function(n) {
                        var i = s[o(n)];
                        t.each(s, function(e, n) { e >= i && s[n]-- }), delete s[o(n)], l--, r.removedAt(n, e[u[o(n)]].item, i) } }), t.each(d, function(o, a) {
                    var c = i(a);
                    if (t.has(u, a)) {
                        var f = n[o].item,
                            d = e[u[a]].item;
                        ("object" == typeof f || f !== d) && r.changedAt(c, f, d, o) } }) };
        f = function(e, n) {
            return [] }, u = function(n, r, i) {
            var c = {},
                f = t.map(r, function(n, i) {
                    var t;
                    if ("string" == typeof n) t = "-" + n;
                    else if ("number" == typeof n || "boolean" == typeof n || void 0 === n) t = n;
                    else {
                        if ("object" != typeof n) throw new Error("{{#each}} doesn't support arrays with elements of type " + typeof n);
                        t = n && n._id || i }
                    var f = o(t);
                    return c[f] ? ("object" == typeof n && "_id" in n && e("duplicate id " + t + " in", r), t = a.id()) : c[f] = !0, { _id: t, item: n } });
            return f }, d = function(e, n, o) {
            var r = !0,
                i = [],
                t = n.observe({ addedAt: function(e, n, t) {
                        if (r) {
                            if (null !== t) throw new Error("Expected initial data from observe in order");
                            i.push({ _id: e._id, item: e }) } else o.addedAt(e._id, e, n, t) }, changedAt: function(e, n, r) { o.changedAt(e._id, e, n, r) }, removedAt: function(e, n) { o.removedAt(e._id, e, n) }, movedTo: function(e, n, r, i) { o.movedTo(e._id, e, n, r, i) } });
            return r = !1, [i, t] } }).call(this), "undefined" == typeof Package && (Package = {}), Package["observe-sequence"] = { ObserveSequence: c } }();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.tracker.Tracker,
        n = Package.tracker.Deps,
        r;
    (function() { r = function(e, n) {
            return this instanceof r ? (this.curValue = e, this.equalsFunc = n, void(this.dep = new t.Dependency)) : new r(e, n) }, r._isEqual = function(e, t) {
            var n = e,
                r = t;
            return n !== r ? !1 : !n || "number" == typeof n || "boolean" == typeof n || "string" == typeof n }, r.prototype.get = function() {
            return t.active && this.dep.depend(), this.curValue }, r.prototype.set = function(e) {
            var t = this.curValue;
            (this.equalsFunc || r._isEqual)(t, e) || (this.curValue = e, this.dep.changed()) }, r.prototype.toString = function() {
            return "ReactiveVar{" + this.get() + "}" }, r.prototype._numListeners = function() {
            var e = 0;
            for (var t in this.dep._dependentsById) e++;
            return e } }).call(this), "undefined" == typeof Package && (Package = {}), Package["reactive-var"] = { ReactiveVar: r } }();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.jquery.$,
        n = Package.jquery.jQuery,
        r = Package.tracker.Tracker,
        a = Package.tracker.Deps,
        i = Package.underscore._,
        o = Package.htmljs.HTML,
        s = Package["observe-sequence"].ObserveSequence,
        u = Package["reactive-var"].ReactiveVar,
        c, l, d, p, f, h;
    (function() { c = {}, c._escape = function() {
            var e = { "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "&": "&amp;" },
                t = function(t) {
                    return e[t] };
            return function(e) {
                return e.replace(/[&<>"'`]/g, t) } }(), c._warn = function(e) { e = "Warning: " + e, "undefined" != typeof Log && Log && Log.warn ? Log.warn(e) : "undefined" != typeof console && console.log && console.log(e) } }).call(this),
        function() {
            var e = {};
            c._DOMBackend = e;
            var t = "undefined" != typeof n ? n : "undefined" != typeof Package ? Package.jquery && Package.jquery.jQuery : null;
            if (!t) throw new Error("jQuery not found");
            e._$jq = t, e.parseHTML = function(e) {
                return t.parseHTML(e) || [] }, e.Events = { delegateEvents: function(e, n, r, a) { t(e).on(n, r, a) }, undelegateEvents: function(e, n, r) { t(e).off(n, "**", r) }, bindEventCapturer: function(n, r, a, i) {
                    var o = t(n),
                        s = function(e) { e = t.event.fix(e), e.currentTarget = e.target;
                            var r = t(e.currentTarget);
                            r.is(o.find(a)) && i.call(n, e) };
                    i._meteorui_wrapper = s, r = e.Events.parseEventType(r), n.addEventListener(r, s, !0) }, unbindEventCapturer: function(t, n, r) { n = e.Events.parseEventType(n), t.removeEventListener(n, r._meteorui_wrapper, !0) }, parseEventType: function(e) {
                    var t = e.indexOf(".");
                    return t >= 0 ? e.slice(0, t) : e } };
            var r = function() {},
                a = function(e) { this.next = this, this.prev = this, this.func = e };
            a.prototype.linkBefore = function(e) { this.prev = e.prev, this.next = e, e.prev.next = this, e.prev = this }, a.prototype.unlink = function() { this.prev.next = this.next, this.next.prev = this.prev }, a.prototype.go = function() {
                var e = this.func;
                e && e() }, a.prototype.stop = a.prototype.unlink, e.Teardown = { _JQUERY_EVENT_NAME: "blaze_teardown_watcher", _CB_PROP: "$blaze_teardown_callbacks", onElementTeardown: function(n, i) {
                    var o = new a(i),
                        s = e.Teardown._CB_PROP;
                    return n[s] || (n[s] = new a, t(n).on(e.Teardown._JQUERY_EVENT_NAME, r)), o.linkBefore(n[s]), o }, tearDownElement: function(e) {
                    for (var n = [], r = e.getElementsByTagName("*"), a = 0; a < r.length; a++) n.push(r[a]);
                    n.push(e), t.cleanData(n) } }, t.event.special[e.Teardown._JQUERY_EVENT_NAME] = { setup: function() {}, teardown: function() {
                    var t = this,
                        n = t[e.Teardown._CB_PROP];
                    if (n) {
                        for (var r = n.next; r !== n;) r.go(), r = r.next;
                        n.go(), t[e.Teardown._CB_PROP] = null } } }, e.findBySelector = function(e, n) {
                return t(e, n) } }.call(this),
        function() {
            var e = Object.freeze ? Object.freeze([]) : [];
            c._DOMRange = function(n) {
                if (!(this instanceof t)) return new t(n);
                var r = n || e;
                if (!r || "number" != typeof r.length) throw new Error("Expected array");
                for (var a = 0; a < r.length; a++) this._memberIn(r[a]);
                this.members = r, this.emptyRangePlaceholder = null, this.attached = !1, this.parentElement = null, this.parentRange = null, this.attachedCallbacks = e };
            var t = c._DOMRange;
            t._USE_COMMENT_PLACEHOLDERS = function() {
                var e = !1,
                    t = document.createTextNode("");
                try { t.someProp = !0 } catch (n) { e = !0 }
                return e }(), t._insert = function(e, n, r, a) {
                var i = e;
                i instanceof t ? i.attach(n, r, a) : a ? t._moveNodeWithHooks(i, n, r) : t._insertNodeWithHooks(i, n, r) }, t._remove = function(e) {
                var n = e;
                n instanceof t ? n.detach() : t._removeNodeWithHooks(n) }, t._removeNodeWithHooks = function(e) { e.parentNode && (1 === e.nodeType && e.parentNode._uihooks && e.parentNode._uihooks.removeElement ? e.parentNode._uihooks.removeElement(e) : e.parentNode.removeChild(e)) }, t._insertNodeWithHooks = function(e, t, n) { n = n || null, 1 === e.nodeType && t._uihooks && t._uihooks.insertElement ? t._uihooks.insertElement(e, n) : t.insertBefore(e, n) }, t._moveNodeWithHooks = function(e, t, n) { e.parentNode === t && (n = n || null, 1 === e.nodeType && t._uihooks && t._uihooks.moveElement ? t._uihooks.moveElement(e, n) : t.insertBefore(e, n)) }, t.forElement = function(e) {
                if (1 !== e.nodeType) throw new Error("Expected element, found: " + e);
                for (var t = null; e && !t;) t = e.$blaze_range || null, t || (e = e.parentNode);
                return t }, t.prototype.attach = function(e, n, r, a) {
                if ((r || a) && (this.parentElement !== e || !this.attached)) throw new Error("Can only move or replace an attached DOMRange, and only under the same parent element");
                var i = this.members;
                if (i.length) { this.emptyRangePlaceholder = null;
                    for (var o = 0; o < i.length; o++) t._insert(i[o], e, n, r) } else {
                    var s = t._USE_COMMENT_PLACEHOLDERS ? document.createComment("") : document.createTextNode("");
                    this.emptyRangePlaceholder = s, e.insertBefore(s, n || null) }
                if (this.attached = !0, this.parentElement = e, !r && !a)
                    for (var o = 0; o < this.attachedCallbacks.length; o++) {
                        var u = this.attachedCallbacks[o];
                        u.attached && u.attached(this, e) } }, t.prototype.setMembers = function(e) {
                var t = e;
                if (!t || "number" != typeof t.length) throw new Error("Expected array");
                for (var n = this.members, r = 0; r < n.length; r++) this._memberOut(n[r]);
                for (var r = 0; r < t.length; r++) this._memberIn(t[r]);
                if (this.attached) {
                    if (t.length || n.length) {
                        var a = this.lastNode().nextSibling,
                            i = this.parentElement;
                        this.detach(!0), this.members = t, this.attach(i, a, !1, !0) } } else this.members = t }, t.prototype.firstNode = function() {
                if (!this.attached) throw new Error("Must be attached");
                if (!this.members.length) return this.emptyRangePlaceholder;
                var e = this.members[0];
                return e instanceof t ? e.firstNode() : e }, t.prototype.lastNode = function() {
                if (!this.attached) throw new Error("Must be attached");
                if (!this.members.length) return this.emptyRangePlaceholder;
                var e = this.members[this.members.length - 1];
                return e instanceof t ? e.lastNode() : e }, t.prototype.detach = function(e) {
                if (!this.attached) throw new Error("Must be attached");
                var n = this.parentElement,
                    r = this.members;
                if (r.length)
                    for (var a = 0; a < r.length; a++) t._remove(r[a]);
                else {
                    var i = this.emptyRangePlaceholder;
                    this.parentElement.removeChild(i), this.emptyRangePlaceholder = null }
                if (!e) { this.attached = !1, this.parentElement = null;
                    for (var a = 0; a < this.attachedCallbacks.length; a++) {
                        var o = this.attachedCallbacks[a];
                        o.detached && o.detached(this, n) } } }, t.prototype.addMember = function(e, n, r) {
                var a = this.members;
                if (!(n >= 0 && n <= a.length)) throw new Error("Bad index in range.addMember: " + n);
                if (r || this._memberIn(e), this.attached)
                    if (0 === a.length) this.setMembers([e]);
                    else {
                        var i;
                        if (n === a.length) i = this.lastNode().nextSibling;
                        else {
                            var o = a[n];
                            i = o instanceof t ? o.firstNode() : o }
                        a.splice(n, 0, e), t._insert(e, this.parentElement, i, r) }
                else a.splice(n, 0, e) }, t.prototype.removeMember = function(n, r) {
                var a = this.members;
                if (!(n >= 0 && n < a.length)) throw new Error("Bad index in range.removeMember: " + n);
                if (r) a.splice(n, 1);
                else {
                    var i = a[n];
                    this._memberOut(i), 1 === a.length ? this.setMembers(e) : (a.splice(n, 1), this.attached && t._remove(i)) } }, t.prototype.moveMember = function(e, t) {
                var n = this.members[e];
                this.removeMember(e, !0), this.addMember(n, t, !0) }, t.prototype.getMember = function(e) {
                var t = this.members;
                if (!(e >= 0 && e < t.length)) throw new Error("Bad index in range.getMember: " + e);
                return this.members[e] }, t.prototype._memberIn = function(e) { e instanceof t ? e.parentRange = this : 1 === e.nodeType && (e.$blaze_range = this) }, t._destroy = function(e, n) { e instanceof t ? e.view && c._destroyView(e.view, n) : n || 1 !== e.nodeType || e.$blaze_range && (c._destroyNode(e), e.$blaze_range = null) }, t.prototype._memberOut = t._destroy, t.prototype.destroyMembers = function(e) {
                for (var t = this.members, n = 0; n < t.length; n++) this._memberOut(t[n], e) }, t.prototype.destroy = function(e) { t._destroy(this, e) }, t.prototype.containsElement = function(e) {
                if (!this.attached) throw new Error("Must be attached");
                if (!c._elementContains(this.parentElement, e)) return !1;
                for (; e.parentNode !== this.parentElement;) e = e.parentNode;
                for (var t = e.$blaze_range; t && t !== this;) t = t.parentRange;
                return t === this }, t.prototype.containsRange = function(e) {
                if (!this.attached) throw new Error("Must be attached");
                if (!e.attached) return !1;
                if (e.parentElement !== this.parentElement) return this.containsElement(e.parentElement);
                if (e === this) return !1;
                for (; e && e !== this;) e = e.parentRange;
                return e === this }, t.prototype.onAttached = function(e) { this.onAttachedDetached({ attached: e }) }, t.prototype.onAttachedDetached = function(t) { this.attachedCallbacks === e && (this.attachedCallbacks = []), this.attachedCallbacks.push(t) }, t.prototype.$ = function(e) {
                var t = this,
                    n = this.parentElement;
                if (!n) throw new Error("Can't select in removed DomRange");
                if (11 === n.nodeType) throw new Error("Can't use $ on an offscreen range");
                var r = c._DOMBackend.findBySelector(e, n),
                    a = function(e) {
                        return "number" == typeof e && (e = this), t.containsElement(e) };
                if (r.filter) r = r.filter(a);
                else {
                    for (var i = [], o = 0; o < r.length; o++) {
                        var s = r[o];
                        a(s) && i.push(s) }
                    r = i }
                return r }, c._elementContains = function(e, t) {
                return 1 !== e.nodeType ? !1 : e === t ? !1 : e.compareDocumentPosition ? 16 & e.compareDocumentPosition(t) : (t = t.parentNode, t && 1 === t.nodeType ? e === t ? !0 : e.contains(t) : !1) } }.call(this),
        function() {
            var e = c._EventSupport = {},
                t = c._DOMBackend,
                n = e.eventsToDelegate = { blur: 1, change: 1, click: 1, focus: 1, focusin: 1, focusout: 1, reset: 1, submit: 1 },
                r = e.EVENT_MODE = { TBD: 0, BUBBLING: 1, CAPTURING: 2 },
                a = 1,
                o = function(e, o, s, u, c) { this.elem = e, this.type = o, this.selector = s, this.handler = u, this.recipient = c, this.id = a++, this.mode = r.TBD, this.delegatedHandler = function(e) {
                        return function(t) {
                            return e.selector || t.currentTarget === t.target ? e.handler.apply(e.recipient, arguments) : void 0 } }(this);
                    var l = e.addEventListener && !i.has(n, t.Events.parseEventType(o));
                    l ? this.capturingHandler = function(e) {
                        return function(n) {
                            if (e.mode === r.TBD) {
                                if (n.bubbles) return e.mode = r.BUBBLING, void t.Events.unbindEventCapturer(e.elem, e.type, e.capturingHandler);
                                e.mode = r.CAPTURING, t.Events.undelegateEvents(e.elem, e.type, e.delegatedHandler) }
                            e.delegatedHandler(n) } }(this) : this.mode = r.BUBBLING };
            e.HandlerRec = o, o.prototype.bind = function() { this.mode !== r.BUBBLING && t.Events.bindEventCapturer(this.elem, this.type, this.selector || "*", this.capturingHandler), this.mode !== r.CAPTURING && t.Events.delegateEvents(this.elem, this.type, this.selector || "*", this.delegatedHandler) }, o.prototype.unbind = function() { this.mode !== r.BUBBLING && t.Events.unbindEventCapturer(this.elem, this.type, this.capturingHandler), this.mode !== r.CAPTURING && t.Events.undelegateEvents(this.elem, this.type, this.delegatedHandler) }, e.listen = function(e, t, n, r, a, i) {
                try { e = e } finally {}
                var s = [];
                t.replace(/[^ /]+/g, function(e) { s.push(e) });
                for (var u = [], c = 0, l = s.length; l > c; c++) {
                    var d = s[c],
                        p = e.$blaze_events;
                    p || (p = e.$blaze_events = {});
                    var f = p[d];
                    f || (f = p[d] = {}, f.handlers = []);
                    var h = f.handlers,
                        m = new o(e, d, n, r, a);
                    if (u.push(m), m.bind(), h.push(m), i)
                        for (var w = i(a); w; w = i(w))
                            for (var v = 0, _ = h.length; _ > v; v++) {
                                var g = h[v];
                                g.recipient === w && (g.unbind(), g.bind(), h.splice(v, 1), h.push(g), v--, _--) } }
                return { stop: function() {
                        var t = e.$blaze_events;
                        if (t) {
                            for (var n = 0; n < u.length; n++) {
                                var r = u[n],
                                    a = t[r.type];
                                if (a)
                                    for (var i = a.handlers, o = i.length - 1; o >= 0; o--) i[o] === r && (r.unbind(), i.splice(o, 1)) }
                            u.length = 0 } } } } }.call(this),
        function() {
            var n = !1;
            c._allowJavascriptUrls = function() { n = !0 }, c._javascriptUrlsAllowed = function() {
                return n }, p = function(e, t) { this.name = e, this.value = t }, c._AttributeHandler = p, p.prototype.update = function(e, t, n) { null === n ? null !== t && e.removeAttribute(this.name) : e.setAttribute(this.name, n) }, p.extend = function(e) {
                var t = this,
                    n = function r() { p.apply(this, arguments) };
                return n.prototype = new t, n.extend = t.extend, e && i.extend(n.prototype, e), n };
            var r = p.extend({ update: function(e, t, n) {
                        if (!this.getCurrentValue || !this.setValue || !this.parseValue) throw new Error("Missing methods in subclass of 'DiffingAttributeHandler'");
                        var r = t ? this.parseValue(t) : {},
                            a = n ? this.parseValue(n) : {},
                            o = this.getCurrentValue(e),
                            s = o ? this.parseValue(o) : {};
                        i.each(i.keys(r), function(e) { e in a || delete s[e] }), i.each(i.keys(a), function(e) { s[e] = a[e] }), this.setValue(e, i.values(s).join(" ")) } }),
                a = r.extend({ getCurrentValue: function(e) {
                        return e.className }, setValue: function(e, t) { e.className = t }, parseValue: function(e) {
                        var t = {};
                        return i.each(e.split(" "), function(e) { e && (t[e] = e) }), t } }),
                o = a.extend({ getCurrentValue: function(e) {
                        return e.className.baseVal }, setValue: function(e, t) { e.setAttribute("class", t) } }),
                s = r.extend({ getCurrentValue: function(e) {
                        return e.getAttribute("style") }, setValue: function(e, t) { "" === t ? e.removeAttribute("style") : e.setAttribute("style", t) }, parseValue: function(e) {
                        for (var n = {}, r = /(\*?[-#\/\*\\\w]+(?:\[[0-9a-z_-]+\])?)\s*:\s*(?:\'(?:\\\'|.)*?\'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+[;\s]*/g, a = r.exec(e); a;) n[" " + a[1]] = a[0].trim ? a[0].trim() : t.trim(a[0]), a = r.exec(e);
                        return n } }),
                u = p.extend({ update: function(e, t, n) {
                        var r = this.name;
                        null == n ? null != t && (e[r] = !1) : e[r] = !0 } }),
                l = p.extend({ update: function(e, t, n) { n !== e.value && (e.value = n) } }),
                d = p.extend({ update: function(e, t, n) {
                        var r = "http://www.w3.org/1999/xlink";
                        null === n ? null !== t && e.removeAttributeNS(r, this.name) : e.setAttributeNS(r, this.name, this.value) } }),
                m = function(e) {
                    return "ownerSVGElement" in e },
                w = function(e, t) {
                    var n = { FORM: ["action"], BODY: ["background"], BLOCKQUOTE: ["cite"], Q: ["cite"], DEL: ["cite"], INS: ["cite"], OBJECT: ["classid", "codebase", "data", "usemap"], APPLET: ["codebase"], A: ["href"], AREA: ["href"], LINK: ["href"], BASE: ["href"], IMG: ["longdesc", "src", "usemap"], FRAME: ["longdesc", "src"], IFRAME: ["longdesc", "src"], HEAD: ["profile"], SCRIPT: ["src"], INPUT: ["src", "usemap", "formaction"], BUTTON: ["formaction"], BASE: ["href"], MENUITEM: ["icon"], HTML: ["manifest"], VIDEO: ["poster"] };
                    if ("itemid" === t) return !0;
                    var r = n[e] || [];
                    return i.contains(r, t) };
            if (e.isClient) var v = document.createElement("A");
            var _ = function(t) {
                    if (e.isClient) return v.href = t, (v.protocol || "").toLowerCase();
                    throw new Error("getUrlProtocol not implemented on the server") },
                g = p.prototype.update,
                y = p.extend({ update: function(e, t, n) {
                        var r = this,
                            a = arguments;
                        if (c._javascriptUrlsAllowed()) g.apply(r, a);
                        else {
                            var i = "javascript:" === _(n);
                            i ? (c._warn("URLs that use the 'javascript:' protocol are not allowed in URL attribute values. Call Blaze._allowJavascriptUrls() to enable them."), g.apply(r, [e, t, null])) : g.apply(r, a) } } });
            f = function(e, t, n) {
                return "class" === t ? m(e) ? new o(t, n) : new a(t, n) : "style" === t ? new s(t, n) : "OPTION" === e.tagName && "selected" === t || "INPUT" === e.tagName && "checked" === t ? new u(t, n) : "TEXTAREA" !== e.tagName && "INPUT" !== e.tagName || "value" !== t ? "xlink:" === t.substring(0, 6) ? new d(t.substring(6), n) : w(e.tagName, t) ? new y(t, n) : new p(t, n) : new l(t, n) }, h = function(e) { this.elem = e, this.handlers = {} }, h.prototype.update = function(e) {
                var t = this.elem,
                    n = this.handlers;
                for (var r in n)
                    if (!i.has(e, r)) {
                        var a = n[r],
                            o = a.value;
                        a.value = null, a.update(t, o, null), delete n[r] }
                for (var r in e) {
                    var a = null,
                        o, s = e[r];
                    i.has(n, r) ? (a = n[r], o = a.value) : null !== s && (a = f(t, r, s), n[r] = a, o = null), o !== s && (a.value = s, a.update(t, o, s), null === s && delete n[r]) } } }.call(this),
        function() { c._materializeDOM = function(t, n, r) {
                var a = [];
                for (e(t, n, r, a); a.length;) {
                    var i = a.pop(); "function" == typeof i ? i() : e(i[0], i[1], i[2], a) }
                return n };
            var e = function(e, n, r, a) {
                    if (null != e) {
                        switch (typeof e) {
                            case "string":
                            case "boolean":
                            case "number":
                                return void n.push(document.createTextNode(String(e)));
                            case "object":
                                if (e.htmljsType) switch (e.htmljsType) {
                                    case o.Tag.htmljsType:
                                        return void n.push(t(e, r, a));
                                    case o.CharRef.htmljsType:
                                        return void n.push(document.createTextNode(e.str));
                                    case o.Comment.htmljsType:
                                        return void n.push(document.createComment(e.sanitizedValue));
                                    case o.Raw.htmljsType:
                                        for (var i = c._DOMBackend.parseHTML(e.value), s = 0; s < i.length; s++) n.push(i[s]);
                                        return } else {
                                    if (o.isArray(e)) {
                                        for (var s = e.length - 1; s >= 0; s--) a.push([e[s], n, r]);
                                        return }
                                    if (e instanceof c.Template && (e = e.constructView()), e instanceof c.View) return void c._materializeView(e, r, a, n) } }
                        throw new Error("Unexpected object in htmljs: " + e) } },
                t = function(e, t, a) {
                    var s = e.tagName,
                        u;
                    u = (o.isKnownSVGElement(s) || n(e)) && document.createElementNS ? document.createElementNS("http://www.w3.org/2000/svg", s) : document.createElement(s);
                    var l = e.attrs,
                        d = e.children;
                    if ("textarea" === s && e.children.length && !(l && "value" in l)) {
                        if ("function" == typeof l || o.isArray(l)) throw new Error("Can't have reactive children of TEXTAREA node; use the 'value' attribute instead.");
                        l = i.extend({}, l || null), l.value = c._expand(d, t), d = [] }
                    if (l) {
                        var p = new h(u),
                            f = function() {
                                var e = c._expandAttributes(l, t),
                                    n = o.flattenAttributes(e),
                                    r = {};
                                for (var a in n) r[a] = c._toText(n[a], t, o.TEXTMODE.STRING);
                                p.update(r) },
                            m;
                        m = t ? t.autorun(f, void 0, "updater") : r.nonreactive(function() {
                            return r.autorun(function() { r._withCurrentView(t, f) }) }), c._DOMBackend.Teardown.onElementTeardown(u, function v() { m.stop() }) }
                    if (d.length) {
                        var w = [];
                        a.push(function() {
                            for (var e = 0; e < w.length; e++) {
                                var t = w[e];
                                t instanceof c._DOMRange ? t.attach(u) : u.appendChild(t) } }), a.push([d, w, t]) }
                    return u },
                n = function(e) {
                    return "a" === e.tagName && e.attrs && void 0 !== e.attrs["xlink:href"] } }.call(this),
        function() {
            var t;
            c._throwNextException = !1, c._reportException = function(n, r) {
                if (c._throwNextException) throw c._throwNextException = !1, n;
                t || (t = function() {
                    return "undefined" != typeof e ? e._debug : "undefined" != typeof console && console.log ? console.log : function() {} }), t()(r || "Exception caught in template:", n.stack || n.message) }, c._wrapCatchingExceptions = function(e, t) {
                return "function" != typeof e ? e : function() {
                    try {
                        return e.apply(this, arguments) } catch (n) { c._reportException(n, "Exception in " + t + ":") } } } }.call(this),
        function() { c.View = function(e, t) {
                return this instanceof c.View ? ("function" == typeof e && (t = e, e = ""), this.name = e, this._render = t, this._callbacks = { created: null, rendered: null, destroyed: null }, this.isCreated = !1, this._isCreatedForExpansion = !1, this.isRendered = !1, this._isAttached = !1, this.isDestroyed = !1, this._isInRender = !1, this.parentView = null, this._domrange = null, this._hasGeneratedParent = !1, void(this.renderCount = 0)) : new c.View(e, t) }, c.View.prototype._render = function() {
                return null }, c.View.prototype.onViewCreated = function(e) { this._callbacks.created = this._callbacks.created || [], this._callbacks.created.push(e) }, c.View.prototype._onViewRendered = function(e) { this._callbacks.rendered = this._callbacks.rendered || [], this._callbacks.rendered.push(e) }, c.View.prototype.onViewReady = function(e) {
                var t = this,
                    n = function() { r.afterFlush(function() { t.isDestroyed || c._withCurrentView(t, function() { e.call(t) }) }) };
                t._onViewRendered(function a() { t.isDestroyed || (t._domrange.attached ? n() : t._domrange.onAttached(n)) }) }, c.View.prototype.onViewDestroyed = function(e) { this._callbacks.destroyed = this._callbacks.destroyed || [], this._callbacks.destroyed.push(e) }, c.View.prototype.autorun = function(e, t, n) {
                var a = this;
                if (!a.isCreated) throw new Error("View#autorun must be called from the created callback at the earliest");
                if (this._isInRender) throw new Error("Can't call View#autorun from inside render(); try calling it from the created or rendered callback");
                if (r.active) throw new Error("Can't call View#autorun from a Tracker Computation; try calling it from the created or rendered callback");
                var i = {};
                return i.templateInstanceFunc = c.Template._currentTemplateInstanceFunc, i.f = function o(n) {
                    return c._withCurrentView(t || a, function() {
                        return c.Template._withTemplateInstanceFunc(i.templateInstanceFunc, function() {
                            return e.call(a, n) }) }) }, i.f.displayName = (a.name || "anonymous") + ":" + (n || "anonymous"), i.c = r.autorun(i.f), a.onViewDestroyed(function() { i.c.stop() }), i.c }, c.View.prototype._errorIfShouldntCallSubscribe = function() {
                var e = this;
                if (!e.isCreated) throw new Error("View#subscribe must be called from the created callback at the earliest");
                if (e._isInRender) throw new Error("Can't call View#subscribe from inside render(); try calling it from the created or rendered callback");
                if (e.isDestroyed) throw new Error("Can't call View#subscribe from inside the destroyed callback, try calling it inside created or rendered.") }, c.View.prototype.subscribe = function(t, n) {
                var r = this;
                n = {} || n, r._errorIfShouldntCallSubscribe();
                var a;
                return a = n.connection ? n.connection.subscribe.apply(n.connection, t) : e.subscribe.apply(e, t), r.onViewDestroyed(function() { a.stop() }), a }, c.View.prototype.firstNode = function() {
                if (!this._isAttached) throw new Error("View must be attached before accessing its DOM");
                return this._domrange.firstNode() }, c.View.prototype.lastNode = function() {
                if (!this._isAttached) throw new Error("View must be attached before accessing its DOM");
                return this._domrange.lastNode() }, c._fireCallbacks = function(e, t) { c._withCurrentView(e, function() { r.nonreactive(function n() {
                        for (var n = e._callbacks[t], r = 0, a = n && n.length; a > r; r++) n[r].call(e) }) }) }, c._createView = function(e, t, n) {
                if (e.isCreated) throw new Error("Can't render the same View twice");
                e.parentView = t || null, e.isCreated = !0, n && (e._isCreatedForExpansion = !0), c._fireCallbacks(e, "created") };
            var t = function(e, t) {
                var n = new c._DOMRange(t);
                e._domrange = n, n.view = e, e.isRendered = !0, c._fireCallbacks(e, "rendered");
                var r = null;
                return n.onAttached(function a(t, n) { e._isAttached = !0, r = c._DOMBackend.Teardown.onElementTeardown(n, function a() { c._destroyView(e, !0) }) }), e.onViewDestroyed(function() { r && r.stop(), r = null }), n };
            c._materializeView = function(e, n, a, i) { c._createView(e, n);
                var o, s;
                return r.nonreactive(function() { e.autorun(function u(t) { e.renderCount++, e._isInRender = !0;
                        var n = e._render();
                        e._isInRender = !1, t.firstRun || r.nonreactive(function a() {
                            var t = c._materializeDOM(n, [], e);
                            c._isContentEqual(s, n) || (o.setMembers(t), c._fireCallbacks(e, "rendered")) }), s = n, r.onInvalidate(function() { o && o.destroyMembers() }) }, void 0, "materialize");
                    var n;
                    a ? (n = [], a.push(function() { o = t(e, n), n = null, i.push(o) }), a.push([s, n, e])) : (n = c._materializeDOM(s, [], e), o = t(e, n), n = null) }), a ? null : o }, c._expandView = function(e, t) { c._createView(e, t, !0), e._isInRender = !0;
                var n = c._withCurrentView(e, function() {
                    return e._render() });
                e._isInRender = !1;
                var a = c._expand(n, e);
                return r.active ? r.onInvalidate(function() { c._destroyView(e) }) : c._destroyView(e), a }, c._HTMLJSExpander = o.TransformingVisitor.extend(), c._HTMLJSExpander.def({ visitObject: function(e) {
                    return e instanceof c.Template && (e = e.constructView()), e instanceof c.View ? c._expandView(e, this.parentView) : o.TransformingVisitor.prototype.visitObject.call(this, e) }, visitAttributes: function(e) {
                    return "function" == typeof e && (e = c._withCurrentView(this.parentView, e)), o.TransformingVisitor.prototype.visitAttributes.call(this, e) }, visitAttribute: function(e, t, n) {
                    return "function" == typeof t && (t = c._withCurrentView(this.parentView, t)), o.TransformingVisitor.prototype.visitAttribute.call(this, e, t, n) } });
            var n = function() {
                var e = c.currentView;
                return e && e._isInRender ? e : null };
            c._expand = function(e, t) {
                return t = t || n(), new c._HTMLJSExpander({ parentView: t }).visit(e) }, c._expandAttributes = function(e, t) {
                return t = t || n(), new c._HTMLJSExpander({ parentView: t }).visitAttributes(e) }, c._destroyView = function(e, t) { e.isDestroyed || (e.isDestroyed = !0, c._fireCallbacks(e, "destroyed"), e._domrange && e._domrange.destroyMembers(t)) }, c._destroyNode = function(e) { 1 === e.nodeType && c._DOMBackend.Teardown.tearDownElement(e) }, c._isContentEqual = function(e, t) {
                return e instanceof o.Raw ? t instanceof o.Raw && e.value === t.value : null == e ? null == t : e === t && ("number" == typeof e || "boolean" == typeof e || "string" == typeof e) }, c.currentView = null, c._withCurrentView = function(e, t) {
                var n = c.currentView;
                try {
                    return c.currentView = e, t() } finally { c.currentView = n } };
            var a = function(e) {
                    if (null === e) throw new Error("Can't render null");
                    if ("undefined" == typeof e) throw new Error("Can't render undefined");
                    if (!(e instanceof c.View || e instanceof c.Template || "function" == typeof e)) try {
                        (new o.Visitor).visit(e) } catch (t) {
                        throw new Error("Expected Template or View") } },
                s = function(e) {
                    if (a(e), e instanceof c.Template) return e.constructView();
                    if (e instanceof c.View) return e;
                    var t = e;
                    return "function" != typeof t && (t = function() {
                        return e }), c.View("render", t) },
                u = function(e) {
                    return a(e), "function" != typeof e ? function() {
                        return e } : e };
            c.render = function(e, t, r, a) {
                if (t || c._warn("Blaze.render without a parent element is deprecated. You must specify where to insert the rendered content."), r instanceof c.View && (a = r, r = null), t && "number" != typeof t.nodeType) throw new Error("'parentElement' must be a DOM node");
                if (r && "number" != typeof r.nodeType) throw new Error("'nextNode' must be a DOM node");
                a = a || n();
                var i = s(e);
                return c._materializeView(i, a), t && i._domrange.attach(t, r), i }, c.insert = function(e, t, n) {
                if (c._warn("Blaze.insert has been deprecated.  Specify where to insert the rendered content in the call to Blaze.render."), !(e && e._domrange instanceof c._DOMRange)) throw new Error("Expected template rendered with Blaze.render");
                e._domrange.attach(t, n) }, c.renderWithData = function(e, t, n, r, a) {
                return c.render(c._TemplateWith(t, u(e)), n, r, a) }, c.remove = function(e) {
                if (!(e && e._domrange instanceof c._DOMRange)) throw new Error("Expected template rendered with Blaze.render");
                for (; e;) {
                    if (!e.isDestroyed) {
                        var t = e._domrange;
                        t.attached && !t.parentRange && t.detach(), t.destroy() }
                    e = e._hasGeneratedParent && e.parentView } }, c.toHTML = function(e, t) {
                return t = t || n(), o.toHTML(c._expandView(s(e), t)) }, c.toHTMLWithData = function(e, t, r) {
                return r = r || n(), o.toHTML(c._expandView(c._TemplateWith(t, u(e)), r)) }, c._toText = function(e, t, r) {
                if ("function" == typeof e) throw new Error("Blaze._toText doesn't take a function, just HTMLjs");
                if (null == t || t instanceof c.View || (r = t, t = null), t = t || n(), !r) throw new Error("textMode required");
                if (r !== o.TEXTMODE.STRING && r !== o.TEXTMODE.RCDATA && r !== o.TEXTMODE.ATTRIBUTE) throw new Error("Unknown textMode: " + r);
                return o.toText(c._expand(e, t), r) }, c.getData = function(e) {
                var t;
                if (e)
                    if (e instanceof c.View) {
                        var n = e;
                        t = "with" === n.name ? n : c.getView(n, "with") } else {
                        if ("number" != typeof e.nodeType) throw new Error("Expected DOM element or View");
                        if (1 !== e.nodeType) throw new Error("Expected DOM element");
                        t = c.getView(e, "with") }
                else t = c.getView("with");
                return t ? t.dataVar.get() : null }, c.getElementData = function(e) {
                if (c._warn("Blaze.getElementData has been deprecated.  Use Blaze.getData(element) instead."), 1 !== e.nodeType) throw new Error("Expected DOM element");
                return c.getData(e) }, c.getView = function(e, t) {
                var n = t;
                if ("string" == typeof e && (n = e, e = null), e) {
                    if (e instanceof c.View) return c._getParentView(e, n);
                    if ("number" == typeof e.nodeType) return c._getElementView(e, n);
                    throw new Error("Expected DOM element or View") }
                return c._getCurrentView(n) }, c._getCurrentView = function(e) {
                var t = c.currentView;
                if (!t) throw new Error("There is no current view");
                if (e) {
                    for (; t && t.name !== e;) t = t.parentView;
                    return t || null }
                return t }, c._getParentView = function(e, t) {
                var n = e.parentView;
                if (t)
                    for (; n && n.name !== t;) n = n.parentView;
                return n || null }, c._getElementView = function(e, t) {
                for (var n = c._DOMRange.forElement(e), r = null; n && !r;) r = n.view || null, r || (n = n.parentRange ? n.parentRange : c._DOMRange.forElement(n.parentElement));
                if (t) {
                    for (; r && r.name !== t;) r = r.parentView;
                    return r || null }
                return r }, c._addEventMap = function(e, t, n) { n = n || null;
                var r = [];
                if (!e._domrange) throw new Error("View must have a DOMRange");
                e._domrange.onAttached(function a(o, s) { i.each(t, function(t, a) {
                        var u = a.split(/,\s+/);
                        i.each(u, function(a) {
                            var i = a.split(/\s+/);
                            if (0 !== i.length) {
                                var u = i.shift(),
                                    l = i.join(" ");
                                r.push(c._EventSupport.listen(s, u, l, function(r) {
                                    if (!o.containsElement(r.currentTarget)) return null;
                                    var a = n || this,
                                        i = arguments;
                                    return c._withCurrentView(e, function() {
                                        return t.apply(a, i) }) }, o, function(e) {
                                    return e.parentRange })) } }) }) }), e.onViewDestroyed(function() { i.each(r, function(e) { e.stop() }), r.length = 0 }) } }.call(this),
        function() { c._calculateCondition = function(e) {
                return e instanceof Array && 0 === e.length && (e = !1), !!e }, c.With = function(e, t) {
                var n = c.View("with", t);
                return n.dataVar = new u, n.onViewCreated(function() { "function" == typeof e ? n.autorun(function() { n.dataVar.set(e()) }, n.parentView, "setData") : n.dataVar.set(e) }), n }, c.If = function(e, t, n, r) {
                var a = new u,
                    i = c.View(r ? "unless" : "if", function() {
                        return a.get() ? t() : n ? n() : null });
                return i.__conditionVar = a, i.onViewCreated(function() { this.autorun(function() {
                        var t = c._calculateCondition(e());
                        a.set(r ? !t : t) }, this.parentView, "condition") }), i }, c.Unless = function(e, t, n) {
                return c.If(e, t, n, !0) }, c.Each = function(e, t, n) {
                var a = c.View("each", function() {
                    var e = this.initialSubviews;
                    return this.initialSubviews = null, this._isCreatedForExpansion && (this.expandedValueDep = new r.Dependency, this.expandedValueDep.depend()), e });
                return a.initialSubviews = [], a.numItems = 0, a.inElseMode = !1, a.stopHandle = null, a.contentFunc = t, a.elseFunc = n, a.argVar = new u, a.onViewCreated(function() { a.autorun(function() { a.argVar.set(e()) }, a.parentView, "collection"), a.stopHandle = s.observe(function() {
                        return a.argVar.get() }, { addedAt: function(e, t, n) { r.nonreactive(function() {
                                var e = c.With(t, a.contentFunc);
                                if (a.numItems++, a.expandedValueDep) a.expandedValueDep.changed();
                                else if (a._domrange) { a.inElseMode && (a._domrange.removeMember(0), a.inElseMode = !1);
                                    var r = c._materializeView(e, a);
                                    a._domrange.addMember(r, n) } else a.initialSubviews.splice(n, 0, e) }) }, removedAt: function(e, t, n) { r.nonreactive(function() { a.numItems--, a.expandedValueDep ? a.expandedValueDep.changed() : a._domrange ? (a._domrange.removeMember(n), a.elseFunc && 0 === a.numItems && (a.inElseMode = !0, a._domrange.addMember(c._materializeView(c.View("each_else", a.elseFunc), a), 0))) : a.initialSubviews.splice(n, 1) }) }, changedAt: function(e, t, n, i) { r.nonreactive(function() {
                                if (a.expandedValueDep) a.expandedValueDep.changed();
                                else {
                                    var e;
                                    e = a._domrange ? a._domrange.getMember(i).view : a.initialSubviews[i], e.dataVar.set(t) } }) }, movedTo: function(e, t, n, i) { r.nonreactive(function() {
                                if (a.expandedValueDep) a.expandedValueDep.changed();
                                else if (a._domrange) a._domrange.moveMember(n, i);
                                else {
                                    var e = a.initialSubviews,
                                        t = e[n];
                                    e.splice(n, 1), e.splice(i, 0, t) } }) } }), a.elseFunc && 0 === a.numItems && (a.inElseMode = !0, a.initialSubviews[0] = c.View("each_else", a.elseFunc)) }), a.onViewDestroyed(function() { a.stopHandle && a.stopHandle.stop() }), a }, c._TemplateWith = function(e, t) {
                var n, r = e; "function" != typeof e && (r = function() {
                    return e });
                var a = function() {
                        var e = null;
                        return n.parentView && "InOuterTemplateScope" === n.parentView.name && (e = n.parentView.originalParentView), e ? c._withCurrentView(e, r) : r() },
                    i = function() {
                        var e = t.call(this);
                        return e instanceof c.Template && (e = e.constructView()), e instanceof c.View && (e._hasGeneratedParent = !0), e };
                return n = c.With(a, i), n.__isTemplateWith = !0, n }, c._InOuterTemplateScope = function(e, t) {
                var n = c.View("InOuterTemplateScope", t),
                    r = e.parentView;
                return r.__isTemplateWith && (r = r.parentView), n.onViewCreated(function() { this.originalParentView = this.parentView, this.parentView = r }), n }, c.InOuterTemplateScope = c._InOuterTemplateScope }.call(this),
        function() { c._globalHelpers = {}, c.registerHelper = function(e, t) { c._globalHelpers[e] = t };
            var e = function(e, t) {
                    return "function" != typeof e ? e : i.bind(e, t) },
                t = function(e) {
                    return "function" == typeof e ? function() {
                        var t = c.getData();
                        return null == t && (t = {}), e.apply(t, arguments) } : e };
            c._OLDSTYLE_HELPER = {};
            var n = c._getTemplateHelper = function(e, t) {
                    var n = !1;
                    if (e.__helpers.has(t)) {
                        var r = e.__helpers.get(t);
                        if (r !== c._OLDSTYLE_HELPER) return r;
                        n = !0 }
                    return t in e ? (n || (e.__helpers.set(t, c._OLDSTYLE_HELPER), e._NOWARN_OLDSTYLE_HELPERS || c._warn("Assigning helper with `" + e.viewName + "." + t + " = ...` is deprecated.  Use `" + e.viewName + ".helpers(...)` instead.")), e[t]) : null },
                r = function(e, t) {
                    return "function" != typeof e ? e : function() {
                        var n = this,
                            r = arguments;
                        return c.Template._withTemplateInstanceFunc(t, function() {
                            return c._wrapCatchingExceptions(e, "template helper").apply(n, r) }) } };
            c.View.prototype.lookup = function(e, a) {
                var o = this.template,
                    s = a && a.template,
                    u, l;
                if (this.templateInstance && (l = i.bind(this.templateInstance, this)), /^\./.test(e)) {
                    if (!/^(\.)+$/.test(e)) throw new Error("id starting with dot must be a series of dots");
                    return c._parentData(e.length - 1, !0) }
                return o && null != (u = n(o, e)) ? r(t(u), l) : s && e in c.Template && c.Template[e] instanceof c.Template ? c.Template[e] : null != c._globalHelpers[e] ? r(t(c._globalHelpers[e]), l) : function() {
                    var t = arguments.length > 0,
                        n = c.getData();
                    if (s && (!n || !n[e])) throw new Error("No such template: " + e);
                    if (t && (!n || !n[e])) throw new Error("No such function: " + e);
                    if (!n) return null;
                    var r = n[e];
                    if ("function" != typeof r) {
                        if (t) throw new Error("Can't call non-function: " + r);
                        return r }
                    return r.apply(n, arguments) };
                return null }, c._parentData = function(e, t) { null == e && (e = 1);
                for (var n = c.getView("with"), r = 0; e > r && n; r++) n = c.getView(n, "with");
                return n ? t ? function() {
                    return n.dataVar.get() } : n.dataVar.get() : null }, c.View.prototype.lookupTemplate = function(e) {
                return this.lookup(e, { template: !0 }) } }.call(this),
        function() {
            c.Template = function(e, n) {
                if (!(this instanceof c.Template)) return new c.Template(e, n);
                if ("function" == typeof e && (n = e, e = ""), "string" != typeof e) throw new Error("viewName must be a String (or omitted)");
                if ("function" != typeof n) throw new Error("renderFunction must be a function");
                this.viewName = e, this.renderFunction = n, this.__helpers = new t, this.__eventMaps = [], this._callbacks = { created: [], rendered: [], destroyed: [] } };
            var e = c.Template,
                t = function() {};
            t.prototype.get = function(e) {
                return this[" " + e] }, t.prototype.set = function(e, t) { this[" " + e] = t }, t.prototype.has = function(e) {
                return " " + e in this }, c.isTemplate = function(e) {
                return e instanceof c.Template }, e.prototype.onCreated = function(e) { this._callbacks.created.push(e) }, e.prototype.onRendered = function(e) {
                this._callbacks.rendered.push(e)
            }, e.prototype.onDestroyed = function(e) { this._callbacks.destroyed.push(e) }, e.prototype._getCallbacks = function(e) {
                var t = this,
                    n = t[e] ? [t[e]] : [];
                return n = n.concat(t._callbacks[e]) };
            var n = function(t, n) { e._withTemplateInstanceFunc(function() {
                    return n }, function() {
                    for (var e = 0, r = t.length; r > e; e++) t[e].call(n) }) };
            e.prototype.constructView = function(t, r) {
                var a = this,
                    o = c.View(a.viewName, a.renderFunction);
                o.template = a, o.templateContentBlock = t ? new e("(contentBlock)", t) : null, o.templateElseBlock = r ? new e("(elseBlock)", r) : null, (a.__eventMaps || "object" == typeof a.events) && o._onViewRendered(function() { 1 === o.renderCount && (a.__eventMaps.length || "object" != typeof a.events || e.prototype.events.call(a, a.events), i.each(a.__eventMaps, function(e) { c._addEventMap(o, e, o) })) }), o._templateInstance = new c.TemplateInstance(o), o.templateInstance = function() {
                    var e = o._templateInstance;
                    return e.data = c.getData(o), o._domrange && !o.isDestroyed ? (e.firstNode = o._domrange.firstNode(), e.lastNode = o._domrange.lastNode()) : (e.firstNode = null, e.lastNode = null), e };
                var s = a._getCallbacks("created");
                o.onViewCreated(function() { n(s, o.templateInstance()) });
                var u = a._getCallbacks("rendered");
                o.onViewReady(function() { n(u, o.templateInstance()) });
                var l = a._getCallbacks("destroyed");
                return o.onViewDestroyed(function() { n(l, o.templateInstance()) }), o }, c.TemplateInstance = function(e) {
                if (!(this instanceof c.TemplateInstance)) return new c.TemplateInstance(e);
                if (!(e instanceof c.View)) throw new Error("View required");
                e._templateInstance = this, this.view = e, this.data = null, this.firstNode = null, this.lastNode = null, this._allSubsReadyDep = new r.Dependency, this._allSubsReady = !1, this._subscriptionHandles = {} }, c.TemplateInstance.prototype.$ = function(e) {
                var t = this.view;
                if (!t._domrange) throw new Error("Can't use $ on template instance with no DOM");
                return t._domrange.$(e) }, c.TemplateInstance.prototype.findAll = function(e) {
                return Array.prototype.slice.call(this.$(e)) }, c.TemplateInstance.prototype.find = function(e) {
                var t = this.$(e);
                return t[0] || null }, c.TemplateInstance.prototype.autorun = function(e) {
                return this.view.autorun(e) }, c.TemplateInstance.prototype.subscribe = function() {
                var e = this,
                    t = e._subscriptionHandles,
                    n = i.toArray(arguments),
                    r = {};
                if (n.length) {
                    var a = i.last(n);
                    i.isFunction(a) ? r.onReady = n.pop() : a && i.any([a.onReady, a.onError, a.onStop], i.isFunction) && (r = n.pop()) }
                var o, s = r.onStop;
                return r.onStop = function(n) { delete t[o.subscriptionId], e._allSubsReady || e._allSubsReadyDep.changed(), s && s(n) }, n.push(r), o = e.view.subscribe.call(e.view, n), i.has(t, o.subscriptionId) || (t[o.subscriptionId] = o, e._allSubsReady && e._allSubsReadyDep.changed()), o }, c.TemplateInstance.prototype.subscriptionsReady = function() {
                return this._allSubsReadyDep.depend(), this._allSubsReady = i.all(this._subscriptionHandles, function(e) {
                    return e.ready() }), this._allSubsReady }, e.prototype.helpers = function(e) {
                for (var t in e) this.__helpers.set(t, e[t]) }, e._currentTemplateInstanceFunc = null, e._withTemplateInstanceFunc = function(t, n) {
                if ("function" != typeof n) throw new Error("Expected function, got: " + n);
                var r = e._currentTemplateInstanceFunc;
                try {
                    return e._currentTemplateInstanceFunc = t, n() } finally { e._currentTemplateInstanceFunc = r } }, e.prototype.events = function(t) {
                var n = this,
                    r = {};
                for (var a in t) r[a] = function(t, n) {
                    return function(t) {
                        var r = this,
                            a = c.getData(t.currentTarget);
                        null == a && (a = {});
                        var o = Array.prototype.slice.call(arguments),
                            s = i.bind(r.templateInstance, r);
                        return o.splice(1, 0, s()), e._withTemplateInstanceFunc(s, function() {
                            return n.apply(a, o) }) } }(a, t[a]);
                n.__eventMaps.push(r) }, e.instance = function() {
                return e._currentTemplateInstanceFunc && e._currentTemplateInstanceFunc() }, e.currentData = c.getData, e.parentData = c._parentData, e.registerHelper = c.registerHelper
        }.call(this),
        function() { l = c, c.ReactiveVar = u, l._templateInstance = c.Template.instance, d = {}, d.registerHelper = c.registerHelper, d._escape = c._escape, d.SafeString = function(e) { this.string = e }, d.SafeString.prototype.toString = function() {
                return this.string.toString() } }.call(this), "undefined" == typeof Package && (Package = {}), Package.blaze = { Blaze: c, UI: l, Handlebars: d }
}();

! function() {
    var e = Package.meteor.Meteor,
        n = Package.underscore._,
        a = Package.blaze.Blaze,
        t = Package.blaze.UI,
        o = Package.blaze.Handlebars,
        d = Package.htmljs.HTML,
        c;
    (function() { c = a.Template;
        var e = "__proto__ name".split(" ");
        c.__checkName = function(a) {
            if (a in c || n.contains(e, a)) {
                if (c[a] instanceof c && "body" !== a) throw new Error("There are multiple templates named '" + a + "'. Each template needs a unique name.");
                throw new Error("This template name is reserved: " + a) } }, c.__define__ = function(e, n) { c.__checkName(e), c[e] = new c("Template." + e, n), c[e]._NOWARN_OLDSTYLE_HELPERS = !0 }, c.body = new c("body", function() {
            var e = this;
            return n.map(c.body.contentRenderFuncs, function(n) {
                return n.apply(e) }) }), c.body.contentRenderFuncs = [], c.body.view = null, c.body.addContent = function(e) { c.body.contentRenderFuncs.push(e) }, c.body.renderToDocument = function() {
            if (!c.body.view) {
                var e = a.render(c.body, document.body);
                c.body.view = e } }, t.body = c.body, c.__body__ = c.body, c.__body__.__contentParts = c.body.contentViews, c.__body__.__instantiate = c.body.renderToDocument }).call(this), "undefined" == typeof Package && (Package = {}), Package.templating = { Template: c } }();

! function() {
    var a = Package.meteor.Meteor,
        e = Package.blaze.Blaze,
        c = Package.blaze.UI,
        g = Package.blaze.Handlebars,
        k = Package.htmljs.HTML,
        e, c, g; "undefined" == typeof Package && (Package = {}), Package.ui = { Blaze: e, UI: c, Handlebars: g } }();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.underscore._,
        n = Package.ejson.EJSON,
        r;
    (function() {
        if (Package["cmather:iron-core"]) throw new Error("\n\n    Sorry! The cmather:iron-{x} packages were migrated to the new package system with the wrong name, and you have duplicate copies.\n    You can see which cmather:iron-{x} packages have been installed by using this command:\n\n    > meteor list\n\n    Can you remove any installed cmather:iron-{x} packages like this:    \n\n    > meteor remove cmather:iron-core\n    > meteor remove cmather:iron-router\n    > meteor remove cmather:iron-dynamic-template\n    > meteor remove cmather:iron-dynamic-layout\n    \n    The new packages are named iron:{x}. For example:\n\n    > meteor add iron:router\n\n    Sorry for the hassle, but thank you!    \n\n  ") }).call(this),
        function() { r = {}, r.utils = {}, r.utils.assert = function(e, t) {
                if (!e) throw new Error(t) }, r.utils.warn = function(e, t) { e || console && console.warn && console.warn(t) }, r.utils.defaultValue = function(e, t, n) {
                return "undefined" == typeof e[t] ? (e[t] = n, n) : e[t] }, r.utils.inherits = function(e, o, i) { r.utils.assert("undefined" != typeof e, "Child is undefined in inherits function"), r.utils.assert("undefined" != typeof o, "Parent is undefined in inherits function");
                for (var a in o) t.has(o, a) && (e[a] = n.clone(o[a]));
                var s = function() { this.constructor = e };
                return s.prototype = o.prototype, e.prototype = new s, e.__super__ = o.prototype, t.isObject(i) && t.extend(e.prototype, i), e }, r.utils.extend = function(e, n) { n = n || {};
                var o = function() {
                    var e;
                    e = t.has(n, "constructor") ? n.constructor : o.__super__.constructor, e.apply(this, arguments) };
                return r.utils.inherits(o, e, n) }, r.utils.global = function() {
                return e.isClient ? window : global }(), r.utils.namespace = function(e, t) {
                var n = r.utils.global,
                    o, i, a, s;
                r.utils.assert("string" == typeof e, "namespace must be a string"), o = e.split("."), a = o.pop(), s = n;
                for (var u = 0; u < o.length; u++) i = o[u], s = s[i] = s[i] || {};
                return 2 === arguments.length ? (s[a] = t, t) : s[a] }, r.utils.resolve = function(e) {
                var t = r.utils.global,
                    n, o;
                if ("string" == typeof e) { n = e.split("."), o = t;
                    for (var i = 0; i < n.length; i++)
                        if (o = o[n[i]], !o) return void 0 } else o = e;
                return o }, r.utils.capitalize = function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1, e.length) }, r.utils.classCase = function(e) {
                var n = /_|-|\.|\//;
                return e ? t.map(e.split(n), function(e) {
                    return r.utils.capitalize(e) }).join("") : "" }, r.utils.camelCase = function(e) {
                var t = r.utils.classCase(e);
                return t = t.charAt(0).toLowerCase() + t.slice(1, t.length) }, r.utils.notifyDeprecated = function(e) {
                var n, r, o, i, a = "[:where] ':name' is deprecated. Please use ':instead' instead.";
                t.isObject(e) ? (n = e.name, r = e.instead, o = e.message || a, i = e.where || "IronRouter") : (o = e, n = "", r = "", i = ""), "undefined" != typeof console && console.warn && console.warn("<deprecated> " + o.replace(":name", n).replace(":instead", r).replace(":where", i) + " " + (new Error).stack) }, r.utils.withDeprecatedNotice = function(e, t, n) {
                return function() {
                    return Utils.notifyDeprecated(e), t && t.apply(n || this, arguments) } }, Function.prototype.deprecate = function(e) {
                var t = this;
                return r.utils.withDeprecatedNotice(e, t) }, r.utils.debug = function(e) {
                return r.utils.assert("string" == typeof e, "debug requires a package name"),
                    function n() {
                        if (console && console.log && r.debug === !0) {
                            var n = t.toArray(arguments).join(" ");
                            console.log("%c<" + e + "> %c" + n, "color: #999;", "color: #000;") } } }, r.utils.get = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    if (!(e && arguments[t] in e)) return void 0;
                    e = e[arguments[t]] }
                return e }, r.utils.global.Iron = r }.call(this), "undefined" == typeof Package && (Package = {}), Package["iron:core"] = { Iron: r } }();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.ui.Blaze,
        n = Package.ui.UI,
        a = Package.ui.Handlebars,
        r = Package.underscore._,
        i = Package.jquery.$,
        o = Package.jquery.jQuery,
        s = Package.tracker.Tracker,
        u = Package.tracker.Deps,
        c = Package["reactive-var"].ReactiveVar,
        l = Package.templating.Template,
        p = Package.random.Random,
        h = Package["iron:core"].Iron,
        d = Package.htmljs.HTML,
        m;
    (function() {
        if (Package["cmather:iron-dynamic-template"]) throw new Error("\n\n    Sorry! The cmather:iron-{x} packages were migrated to the new package system with the wrong name, and you have duplicate copies.\n    You can see which cmather:iron-{x} packages have been installed by using this command:\n\n    > meteor list\n\n    Can you remove any installed cmather:iron-{x} packages like this:    \n\n    > meteor remove cmather:iron-core\n    > meteor remove cmather:iron-router\n    > meteor remove cmather:iron-dynamic-template\n    > meteor remove cmather:iron-dynamic-layout\n    \n    The new packages are named iron:{x}. For example:\n\n    > meteor add iron:router\n\n    Sorry for the hassle, but thank you!    \n\n  ") }).call(this),
        function() { l.__checkName("__DynamicTemplateError__"), l.__DynamicTemplateError__ = new l("Template.__DynamicTemplateError__", function() {
                var e = this;
                return d.DIV({ style: "margin: 0 auto; color: red;" }, "\n    ", t.View("lookup:msg", function() {
                    return Spacebars.mustache(e.lookup("msg")) }), "\n  ") }) }.call(this),
        function() {
            var e = h.utils.debug("iron:dynamic-template"),
                a = h.utils.assert,
                o = h.utils.get,
                d = h.utils.camelCase,
                f = function(e) {
                    return Object.prototype.toString.call(e) };
            m = function(e) { this._id = p.id(), this.options = e = e || {}, this._template = e.template, this._defaultTemplate = e.defaultTemplate, this._content = e.content, this._data = e.data, this._templateDep = new s.Dependency, this._dataDep = new s.Dependency, this._lookupHostDep = new s.Dependency, this._lookupHostValue = null, this._hooks = {}, this._eventMap = null, this._eventHandles = null, this._eventThisArg = null, this.name = e.name || this.constructor.prototype.name || "DynamicTemplate", this.isCreated = !1, this.isDestroyed = !1 }, m.prototype.template = function(e) {
                if (1 === arguments.length && e !== this._template) return this._template = e, void this._templateDep.changed();
                if (!(arguments.length > 0)) return this._templateDep.depend(), this._template ? "function" == typeof this._template ? this._template() : this._template : this._defaultTemplate ? "function" == typeof this._defaultTemplate ? this._defaultTemplate() : this._defaultTemplate : void 0 }, m.prototype.defaultTemplate = function(e) {
                return 1 !== arguments.length ? this._defaultTemplate : void(this._defaultTemplate = e) }, m.prototype.clear = function() { this._template = void 0, this._data = void 0, this._templateDep.changed() }, m.prototype.data = function(e) {
                return 1 === arguments.length && e !== this._data ? (this._data = e, void this._dataDep.changed()) : (this._dataDep.depend(), "function" == typeof this._data ? this._data() : this._data) }, m.prototype.create = function(e) {
                var n = this;
                if (this.isCreated) throw new Error("DynamicTemplate view is already created");
                this.isCreated = !0, this.isDestroyed = !1;
                var a = c(null),
                    i = t.View("DynamicTemplate", function() {
                        var e = this,
                            r = a.get();
                        return t.With(function() {
                            var t = n.data();
                            return "undefined" != typeof t ? t : m.getParentDataContext(e) }, function() {
                            return n.renderView(r) }) });
                return i.onViewCreated(function() { this.autorun(function() { a.set(n.template()) }) }), r.each(["onViewCreated", "onViewReady", "_onViewRendered", "onViewDestroyed"], function(e) { i[e](function() { n._runHooks(e, this) }) }), i._onViewRendered(function() { n.isInserted = !0, 1 === i.renderCount && n._attachEvents() }), i.onViewDestroyed(function() { n._detachEvents() }), i._templateInstance = new t.TemplateInstance(i), i.templateInstance = function() {
                    var e = i._templateInstance;
                    return e.data = t.getData(i), i._domrange && !i.isDestroyed ? (e.firstNode = i._domrange.firstNode(), e.lastNode = i._domrange.lastNode()) : (e.firstNode = null, e.lastNode = null), e }, this.view = i, i.__dynamicTemplate__ = this, i.name = this.name, i }, m.prototype.renderView = function(e) {
                var n = this,
                    a = null;
                return "string" == typeof e ? (a = l[e], a || (a = l[d(e)]), a || (a = t.With({ msg: "Couldn't find a template named " + JSON.stringify(e) + " or " + JSON.stringify(d(e)) + ". Are you sure you defined it?" }, function() {
                    return l.__DynamicTemplateError__ }))) : "[object Object]" === f(e) ? a = e : "undefined" != typeof n._content && (a = n._content), a }, m.prototype.destroy = function() { this.isCreated && (t.remove(this.view), this.view = null, this.isDestroyed = !0, this.isCreated = !1) }, r.each(["onViewCreated", "onViewReady", "_onViewRendered", "onViewDestroyed"], function(e) { m.prototype[e] = function(t) {
                    var n = this._hooks[e] = this._hooks[e] || [];
                    return n.push(t), this } }), m.prototype._runHooks = function(e, t) {
                for (var n = this._hooks[e] || [], a, r = 0; r < n.length; r++) a = n[r], a.call(t, this) }, m.prototype.events = function(e, n) {
                var a = this;
                this._detachEvents(), this._eventThisArg = n;
                var r = this._eventMap = {};
                for (var i in e) r[i] = function(e, r) {
                    return function(e) {
                        var i = t.getData(e.currentTarget);
                        null == i && (i = {});
                        var o = a.view.templateInstance();
                        return r.call(n || this, e, o, i) } }(i, e[i]);
                this._attachEvents() }, m.prototype._attachEvents = function() {
                var e = this,
                    n = e._eventThisArg,
                    a = e._eventMap,
                    i = e.view,
                    o = e._eventHandles;
                if (i) {
                    var s = i._domrange;
                    if (!s) throw new Error("no domrange");
                    var u = function(n, s) { r.each(a, function(a, u) {
                            var c = u.split(/,\s+/);
                            r.each(c, function(r) {
                                var u = r.split(/\s+/);
                                if (0 !== u.length) {
                                    var c = u.shift(),
                                        l = u.join(" ");
                                    o.push(t._EventSupport.listen(s, c, l, function(r) {
                                        if (!n.containsElement(r.currentTarget)) return null;
                                        var o = e._eventThisArg || this,
                                            s = arguments;
                                        return t._withCurrentView(i, function() {
                                            return a.apply(o, s) }) }, n, function(e) {
                                        return e.parentRange })) } }) }) };
                    s.attached ? u(s, s.parentElement) : s.onAttached(u) } }, m.prototype._detachEvents = function() { r.each(this._eventHandles, function(e) { e.stop() }), this._eventHandles = [] };
            var _ = function(e, n, a, i) { r.each(a, function(a, o) {
                    var s = o.split(/,\s+/);
                    r.each(s, function(r) {
                        var o = r.split(/\s+/);
                        if (0 !== o.length) {
                            var s = o.shift(),
                                u = o.join(" ");
                            handles.push(t._EventSupport.listen(n, s, u, function(n) {
                                if (!e.containsElement(n.currentTarget)) return null;
                                var r = i || this,
                                    o = arguments;
                                return t._withCurrentView(view, function() {
                                    return a.apply(r, o) }) }, e, function(e) {
                                return e.parentRange })) } }) }) };
            m.prototype.insert = function(e) {
                if (e = e || {}, !this.isInserted) { this.isInserted = !0;
                    var n = e.el || document.body,
                        a = i(n);
                    if (0 === a.length) throw new Error("No element to insert layout into. Is your element defined? Try a Meteor.startup callback.");
                    return this.view || this.create(e), t.render(this.view, a[0], e.nextNode, e.parentView), this } }, m.prototype._getLookupHost = function() {
                return this._lookupHostValue }, m.prototype._setLookupHost = function(e) {
                var t = this;
                return t._lookupHostValue !== e && (t._lookupHostValue = e, u.afterFlush(function() { t._lookupHostDep.changed() })), this }, m.getParentDataContext = function(e) {
                return m.getDataContext(e && e.parentView) }, m.getDataContext = function(e) {
                for (; e;) {
                    if ("with" === e.name && !e.__isTemplateWith) return e.dataVar.get();
                    e = e.parentView }
                return null }, m.getInclusionArguments = function(e) {
                var t = e && e.parentView;
                return t && t.__isTemplateWith ? t.dataVar.get() : null }, m.args = function(e) {
                return function(t) {
                    var n = m.getInclusionArguments(e);
                    return n ? t ? n[t] : n : null } }, m.extend = function(e) {
                return h.utils.extend(this, e) }, m.findFirstLookupHost = function(e) {
                var n, r;
                for (a(e instanceof t.View, "view must be a Blaze.View"); e;)
                    if (e.__dynamicTemplate__) {
                        var n = e.__dynamicTemplate__._getLookupHost();
                        if (n) return n } else e = e.parentView;
                return void 0 }, m.findLookupHostWithProperty = function(e, n) {
                var r, i;
                for (a(e instanceof t.View, "view must be a Blaze.View"); e;) {
                    if (e.__dynamicTemplate__) {
                        var r = e.__dynamicTemplate__._getLookupHost();
                        if (r && o(r, n)) return r }
                    e = e.parentView }
                return void 0 }, m.findLookupHostWithHelper = function(e, n) {
                var r, i;
                for (a(e instanceof t.View, "view must be a Blaze.View"); e;) {
                    if (e.__dynamicTemplate__) {
                        var r = e.__dynamicTemplate__._getLookupHost();
                        if (r && o(r, "constructor", "_helpers", n)) return r }
                    e = e.parentView }
                return void 0 }, "undefined" != typeof l && n.registerHelper("DynamicTemplate", new l("DynamicTemplateHelper", function() {
                var e = m.args(this);
                return new m({ data: function() {
                        return e("data") }, template: function() {
                        return e("template") }, content: this.templateContentBlock }).create() })), h.DynamicTemplate = m }.call(this),
        function() {
            var e = h.utils.assert,
                n = h.utils.get,
                a = t.View.prototype.lookup;
            t.View.prototype.lookup = function(e) {
                var r;
                return r = m.findLookupHostWithHelper(t.getView(), e), r ? function i() {
                    var t = n(r, "constructor", "_helpers", e),
                        a = [].slice.call(arguments);
                    return "function" == typeof t ? t.apply(r, a) : t } : a.apply(this, arguments) } }.call(this), "undefined" == typeof Package && (Package = {}), Package["iron:dynamic-template"] = {} }();

! function() {
    var e = Package.meteor.Meteor,
        n = Package.templating.Template,
        t = Package.blaze.Blaze,
        r = Package.blaze.UI,
        o = Package.blaze.Handlebars,
        i = Package.underscore._,
        a = Package["iron:core"].Iron,
        s = Package.htmljs.HTML,
        c, u, h;
    (function() {
        var e = [];
        if (Package["cmather:iron-layout"] && e.push("\n\n    The cmather:iron-{x} packages were migrated to the new package system with the wrong name, and you have duplicate copies.\n    You can see which cmather:iron-{x} packages have been installed by using this command:\n\n    > meteor list\n\n    Can you remove any installed cmather:iron-{x} packages like this:    \n\n    > meteor remove cmather:iron-core\n    > meteor remove cmather:iron-router\n    > meteor remove cmather:iron-dynamic-template\n    > meteor remove cmather:iron-dynamic-layout\n    \n    The new packages are named iron:{x}. For example:\n\n    > meteor add iron:router\n\n    Sorry for the hassle, but thank you!    \n\n  "), Package["cmather:blaze-layout"] && e.push("The blaze-layout package has been replaced by iron-layout. Please remove the package like this:\n> meteor remove cmather:blaze-layout\n"), e.length > 0) throw new Error("Sorry! Looks like there's a few errors related to iron:layout\n\n" + e.join("\n\n")) }).call(this),
        function() { n.__checkName("__IronDefaultLayout__"), n.__IronDefaultLayout__ = new n("Template.__IronDefaultLayout__", function() {
                var e = this;
                return Spacebars.include(e.lookupTemplate("yield")) }) }.call(this),
        function() {
            var e = a.DynamicTemplate,
                o = a.utils.inherits;
            c = function(e) {
                for (; e;) {
                    if ("Iron.Layout" === e.name) return e.__dynamicTemplate__;
                    e = e.parentView }
                return null }, u = function(e) {
                var n = this;
                u.__super__.constructor.apply(this, arguments), e = e || {}, this.name = "Iron.Layout", this._regions = {}, this._regionHooks = {}, this.defaultTemplate("__IronDefaultLayout__"), e.content && this.render(e.content) }, h = u.DEFAULT_REGION = "main", o(u, a.DynamicTemplate), u.prototype.region = function(e, n) {
                return this._ensureRegion(e, n) }, u.prototype.destroyRegions = function() { i.each(this._regions, function(e) { e.destroy() }), this._regions = {} }, u.prototype.render = function(e, n) { n = n || {};
                var t = n.to || n.region || h,
                    r = this.region(t);
                return this._trackRenderedRegion(t), r.template(e), r.data(n.data), r }, u.prototype.has = function(e) {
                return e = e || u.DEFAULT_REGION, !!this._regions[e] }, u.prototype.regionKeys = function() {
                return i.keys(this._regions) }, u.prototype.clear = function(e) {
                return e = e || u.DEFAULT_REGION, this.has(e) && this.region(e).template(null), this }, u.prototype.clearAll = function() {
                return i.each(this._regions, function(e) { e.template(null) }), this }, u.prototype.beginRendering = function(e) {
                var n = this;
                if (this._finishRenderingTransaction && this._finishRenderingTransaction(), this._finishRenderingTransaction = i.once(function() {
                        var t = n._endRendering({ flush: !1 });
                        e && e(t) }), Deps.afterFlush(this._finishRenderingTransaction), this._renderedRegions) throw new Error("You called beginRendering again before calling endRendering");
                this._renderedRegions = {} }, u.prototype._trackRenderedRegion = function(e) { this._renderedRegions && (this._renderedRegions[e] = !0) }, u.prototype._endRendering = function(e) { e = e || {}, e.flush !== !1 && Deps.flush();
                var n = this._renderedRegions || {};
                return this._renderedRegions = null, i.keys(n) }, i.each(["onRegionCreated", "onRegionRendered", "onRegionDestroyed"], function(e) { u.prototype[e] = function(n) {
                    var t = this._regionHooks[e] = this._regionHooks[e] || [];
                    return t.push(n), this } }), u.prototype._ensureRegion = function(e, n) {
                return this._regions[e] = this._regions[e] || this._createDynamicTemplate(e, n) }, u.prototype._createDynamicTemplate = function(e, n) {
                var t = this,
                    r = new a.DynamicTemplate(n),
                    o = a.utils.capitalize;
                return r._region = e, i.each(["viewCreated", "viewReady", "viewDestroyed"], function(e) { e = o(e), r["on" + e](function(n) {
                        var r = this,
                            o = { viewCreated: "regionCreated", viewReady: "regionRendered", viewDestroyed: "regionDestroyed" }[e];
                        t._runRegionHooks("on" + o, r, n) }) }), r }, u.prototype._runRegionHooks = function(e, n, t) {
                for (var r = this, o = this._regionHooks[e] || [], i, a = 0; a < o.length; a++) i = o[a], i.call(n, t.region, t, this) }, "undefined" != typeof n && (r.registerHelper("yield", new n("yield", function() {
                var n = c(this);
                if (!n) throw new Error("No Iron.Layout found so you can't use yield!");
                var t = e.getInclusionArguments(this),
                    r, o;
                return i.isString(t) ? r = t : i.isObject(t) && (r = t.region), r = r || h, o = n.region(r), o.isCreated && o.destroy(), o.create() })), r.registerHelper("contentFor", new n("contentFor", function() {
                var n = c(this);
                if (!n) throw new Error("No Iron.Layout found so you can't use contentFor!");
                var t = e.getInclusionArguments(this) || {},
                    r = this.templateContentBlock,
                    o = t.template,
                    a = t.data,
                    s;
                if (i.isString(t)) s = t;
                else {
                    if (!i.isObject(t)) throw new Error("Which region is this contentFor block supposed to be for?");
                    s = t.region }
                return n.region(s).template(o || r), n._trackRenderedRegion(s), a && n.region(s).data(a), null })), r.registerHelper("hasRegion", function(e) {
                var n = c(t.getView());
                if (!n) throw new Error("No Iron.Layout found so you can't use hasRegion!");
                if (!i.isString(e)) throw new Error("You need to provide an region argument to hasRegion");
                return !!n.region(e).template() }), r.registerHelper("Layout", new n("layout", function() {
                var e = a.DynamicTemplate.args(this),
                    n = new u({ template: function() {
                            return e("template") }, data: function() {
                            return e("data") }, content: this.templateContentBlock });
                return n.create() }))), a.Layout = u }.call(this), "undefined" == typeof Package && (Package = {}), Package["iron:layout"] = {} }();

! function() {
    var e = Package.meteor.Meteor,
        r = Package.underscore._,
        n = Package["iron:core"].Iron,
        t, i;
    (function() {
        function e(e) {
            return e.replace(/([=!:$\/()])/g, "\\$1") }

        function r(t, a, s) { a && "[object Array]" !== n(a) && (s = a, a = null), a = a || [], s = s || {};
            var c = s.strict,
                u = s.end !== !1,
                p = s.sensitive ? "" : "i",
                h = 0;
            if (t instanceof RegExp) {
                var l = t.source.match(/\((?!\?)/g) || [];
                return a.push.apply(a, l.map(function(e, r) {
                    return { name: r, delimiter: null, optional: !1, repeat: !1 } })), o(t, a) }
            if ("[object Array]" === n(t)) return t = t.map(function(e) {
                return r(e, a, s).source }), o(new RegExp("(?:" + t.join("|") + ")", p), a);
            t = t.replace(i, function(r, n, t, i, o, s, c, u) {
                if (n) return n;
                if (u) return "\\" + u;
                var p = "+" === c || "*" === c,
                    l = "?" === c || "*" === c;
                return a.push({ name: i || h++, delimiter: t || "/", optional: l, repeat: p }), t = t ? "\\" + t : "", o = e(o || s || "[^" + (t || "\\/") + "]+?"), p && (o = o + "(?:" + t + o + ")*"), l ? "(?:" + t + "(" + o + "))?" : t + "(" + o + ")" });
            var f = "/" === t[t.length - 1];
            return c || (t = (f ? t.slice(0, -2) : t) + "(?:\\/(?=$))?"), u || (t += c && f ? "" : "(?=\\/|$)"), o(new RegExp("^" + t + (u ? "$" : ""), p), a) }
        var n = function(e) {
                return Object.prototype.toString.call(e) },
            i = new RegExp(["(\\\\.)", "([\\/.])?(?:\\:(\\w+)(?:\\(((?:\\\\.|[^)])*)\\))?|\\(((?:\\\\.|[^)])*)\\))([+*?])?", "([.+*?=^!:${}()[\\]|\\/])"].join("|"), "g"),
            o = function(e, r) {
                return e.keys = r, e };
        t = r }).call(this),
        function() {
            function e(e) {
                try {
                    return decodeURIComponent(e.replace(/\+/g, " ")) } catch (r) {
                    return void(r.constructor == URIError && a("Tried to decode an invalid URI component: " + JSON.stringify(e) + " " + r.stack)) } }

            function o(e) {
                try {
                    return decodeURI(e.replace(/\+/g, " ")) } catch (r) {
                    return void(r.constructor == URIError && a("Tried to decode an invalid URI: " + JSON.stringify(e) + " " + r.stack)) } }
            var a = n.utils.warn;
            i = function(e, n) { n = n || {}, this.options = n, this.keys = [], this.regexp = t(e, this.keys, n), this._originalPath = e, r.extend(this, i.parse(e)) }, i.normalize = function(e) {
                if (e instanceof RegExp) return e;
                if ("string" != typeof e) return "/";
                var r = i.parse(e),
                    n = r.pathname;
                return "/" !== n.charAt(0) && (n = "/" + n), n.length > 1 && "/" === n.charAt(n.length - 1) && (n = n.slice(0, n.length - 1)), n }, i.isSameOrigin = function(e, r) {
                var n = i.parse(e),
                    t = i.parse(r),
                    o = n.origin === t.origin;
                return o }, i.fromQueryString = function(n) {
                if (!n) return {};
                if ("string" != typeof n) throw new Error("expected string"); "?" === n.charAt(0) && (n = n.slice(1));
                var t = n.split("&"),
                    i = {},
                    o;
                return r.each(t, function(r) {
                    var n = r.split("="),
                        t = n[0],
                        o = e(n[1]); "[]" === t.slice(-2) ? (t = t.slice(0, -2), i[t] = i[t] || [], i[t].push(o)) : i[t] = o }), i }, i.toQueryString = function(e) {
                var n = [];
                return "string" == typeof e ? "?" !== e.charAt(0) ? "?" + e : e : (r.each(e, function(e, t) { r.isArray(e) ? r.each(e, function(e) { n.push(encodeURIComponent(t) + "[]=" + encodeURIComponent(e)) }) : n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e)) }), n.length > 0 ? "?" + n.join("&") : "") }, i.parse = function(e) {
                if ("string" != typeof e) return {};
                var r = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                    n = e.match(r),
                    t = n[1] ? n[1].toLowerCase() : void 0,
                    o = n[3],
                    a = !!o,
                    s = n[4] ? n[4].toLowerCase() : void 0,
                    c = s ? s.split("@") : [],
                    u, p;
                2 == c.length ? (p = c[0], u = c[1]) : 1 == c.length ? (u = c[0], p = void 0) : (u = void 0, p = void 0);
                var h = u && u.split(":") || [],
                    l = h[0],
                    f = h[1],
                    g = t && u ? t + "//" + u : void 0,
                    d = n[5],
                    m = n[8],
                    y = e,
                    v = n[6],
                    w, R = m && m.indexOf("?") || -1;~R && !v ? (v = m.slice(R), m = m.substr(0, R), w = v.slice(1)) : w = n[7];
                var x = d + (v || ""),
                    U = i.fromQueryString(w),
                    S = [t || "", a ? "//" : "", s || ""].join(""),
                    I = [t || "", a ? "//" : "", s || "", d || "", v || "", m || ""].join("");
                return { rootUrl: S || "", originalUrl: e || "", href: I || "", protocol: t || "", auth: p || "", host: u || "", hostname: l || "", port: f || "", origin: g || "", path: x || "", pathname: d || "", search: v || "", query: w || "", queryObject: U || "", hash: m || "", slashes: a } }, i.prototype.test = function(e) {
                return this.regexp.test(i.normalize(e)) }, i.prototype.exec = function(e) {
                return this.regexp.exec(i.normalize(e)) }, i.prototype.params = function(r) {
                if (!r) return [];
                var n = [],
                    t = this.exec(r),
                    a, s = this.keys,
                    c, u;
                if (!t) throw new Error('The route named "' + this.name + '" does not match the path "' + r + '"');
                for (var p = 1, h = t.length; h > p; ++p) c = s[p - 1], u = "string" == typeof t[p] ? e(t[p]) : t[p], c ? n[c.name] = void 0 !== n[c.name] ? n[c.name] : u : n.push(u);
                return r = o(r), "undefined" != typeof r && (a = r.split("?")[1], a && (a = a.split("#")[0]), n.hash = r.split("#")[1] || null, n.query = i.fromQueryString(a)), n }, i.prototype.resolve = function(e, n) {
                var t, o, a, s = 0,
                    c = this._originalPath,
                    u, p, h = [],
                    l = e;
                if (n = n || {}, e = e || [], p = n.query, u = n.hash && n.hash.toString(), c instanceof RegExp) throw new Error("Cannot currently resolve a regular expression path");
                if (c = c.replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function(n, i, a, s, c, u, p) {
                        if (i = i || "", a = a || "", t = e[s], o = "undefined" != typeof t, u && !o) t = "";
                        else if (!o) return void h.push(s);
                        t = r.isFunction(t) ? t.call(e) : t;
                        var l = r.map(String(t).split("/"), function(e) {
                            return encodeURIComponent(e) }).join("/");
                        return i + a + l }).replace(/\*/g, function(n) {
                        if ("undefined" == typeof e[s]) throw new Error("You are trying to access a wild card parameter at index " + s + " but the value of params at that index is undefined");
                        var t = String(e[s++]);
                        return r.map(t.split("/"), function(e) {
                            return encodeURIComponent(e) }).join("/") }), p = i.toQueryString(p), c += p, u && (u = encodeURI(u.replace("#", "")), c = c + "#" + u), c = c.replace(/\/+/g, "/"), c = c.replace(/^(.+)\/$/g, "$1"), 0 == h.length) return c;
                if (n.throwOnMissingParams === !0) throw new Error("Missing required parameters on path " + JSON.stringify(this._originalPath) + ". The missing params are: " + JSON.stringify(h) + ". The params object passed in was: " + JSON.stringify(l) + ".");
                return null }, n.Url = i }.call(this), "undefined" == typeof Package && (Package = {}), Package["iron:url"] = {} }();

! function() {
    var t = Package.meteor.Meteor,
        e = Package.underscore._,
        n = Package["iron:core"].Iron,
        r, i, n;
    (function() {
        var t = n.Url;
        r = function(n, r, i) { e.isFunction(n) && (i = i || r || {}, r = n, n = "/", this.middleware = !0, "undefined" == typeof i.mount && (i.mount = !0)), "object" == typeof r && (i = r, r = i.action || "action"), i = i || {}, this.options = i, this.mount = i.mount, this.method = i.method && i.method.toLowerCase() || !1, this.where = i.where || "client", this.mount && (i.end = !1), i.name ? this.name = i.name : "string" == typeof n && "/" !== n.charAt(0) ? this.name = n : r && r.name ? this.name = r.name : "string" == typeof n && "/" !== n && (this.name = n.split("/").slice(1).join(".")), n = i.path || n, "string" == typeof n && "/" !== n.charAt(0) && (n = "/" + n), this.path = n, this.compiledUrl = new t(n, i), e.isString(r) ? this.handle = function o() {
                var t = this[r];
                if ("function" != typeof t) throw new Error("No method named " + JSON.stringify(r) + " found on handler.");
                return t.apply(this, arguments) } : e.isFunction(r) && (this.handle = r) }, r.prototype.test = function(t, e) { e = e || {};
            var n = this.compiledUrl.test(t),
                r = !0,
                i = !0;
            return this.method && e.method && (r = this.method == e.method.toLowerCase()), e.where && (i = this.where == e.where), n && r && i }, r.prototype.params = function(t) {
            return this.compiledUrl.params(t) }, r.prototype.resolve = function(t, e) {
            return this.compiledUrl.resolve(t, e) }, r.prototype.clone = function() {
            var t = new r(this.path, this.handle, this.options);
            return t.name = this.name, t } }).call(this),
        function() {
            var o = n.Url,
                a = n.utils.assert,
                s = n.utils.defaultValue;
            i = function() { this._stack = [], this.length = 0 }, i.prototype._create = function(t, n, i) {
                var o = new r(t, n, i),
                    a = o.name;
                if (a) {
                    if (e.has(this._stack, a)) throw new Error("Handler with name '" + a + "' already exists.");
                    this._stack[a] = o }
                return o }, i.prototype.findByName = function(t) {
                return this._stack[t] }, i.prototype.push = function(t, e, n) {
                var r = this._create(t, e, n);
                return this._stack.push(r), this.length++, r }, i.prototype.append = function() {
                var t = this,
                    n = e.toArray(arguments),
                    r = {};
                return "object" == typeof n[n.length - 1] && (r = n.pop()), e.each(n, function(n) {
                    if ("undefined" != typeof n)
                        if ("function" == typeof n) t.push(n, r);
                        else {
                            if (!e.isArray(n)) throw new Error("Can only append functions or arrays to the MiddlewareStack");
                            t.append.apply(t, n.concat([r])) } }), this }, i.prototype.insertAt = function(t, e, n, r) {
                var i = this._create(e, n, r);
                return this._stack.splice(t, 0, i), this.length = this._stack.length, this }, i.prototype.insertBefore = function(t, n, r, i) {
                var o, a;
                if (!(o = this._stack[t])) throw new Error("Couldn't find a handler named '" + t + "' on the path stack");
                return a = e.indexOf(this._stack, o), this.insertAt(a, n, r, i), this }, i.prototype.insertAfter = function(t, n, r, i) {
                var o, a;
                if (!(o = this._stack[t])) throw new Error("Couldn't find a handler named '" + t + "' on the path stack");
                return a = e.indexOf(this._stack, o), this.insertAt(a + 1, n, r, i), this }, i.prototype.concat = function() {
                var t = new i,
                    n = Array.prototype.concat,
                    r = EJSON.clone(this._stack),
                    o = e.map(e.toArray(arguments), function(t) {
                        return EJSON.clone(t._stack) });
                return t._stack = n.apply(r, o), t.length = t._stack.length, t }, i.prototype.dispatch = function h(e, n, r) {
                var i = this,
                    h = e;
                a("string" == typeof e, "Requires url"), a("object" == typeof n, "Requires context object"), e = o.normalize(e || "/"), s(n, "request", {}), s(n, "response", {}), s(n, "originalUrl", e), s(n, "_method", n.method), s(n, "_handlersForEnv", { client: !1, server: !1 }), s(n, "_handled", !1), s(n, "isHandled", function() {
                    return n._handled }), s(n, "willBeHandledOnClient", function() {
                    return n._handlersForEnv.client }), s(n, "willBeHandledOnServer", function() {
                    return n._handlersForEnv.server });
                var l = function() {
                        if (r) try { r.apply(this, arguments) } catch (t) {
                            throw t._punt = !0, t } },
                    c = 0,
                    u = t.bindEnvironment(function p(r) {
                        var a = i._stack[c++];
                        if (n.url = n.request.url = n.originalUrl, !a) return l.call(n, r);
                        if (!a.test(e, { method: n._method })) return u(r);
                        var s = t.isClient ? "client" : "server";
                        if (a.middleware || (n._handlersForEnv[a.where] = !0), a.where !== s) return u(r);
                        if (n.next = u, a.mount) {
                            var h = o.normalize(a.compiledUrl.pathname),
                                p = e.substr(h.length, e.length);
                            p = o.normalize(p), n.url = n.request.url = p }
                        try {
                            var d = a.handle.length,
                                f = n.request,
                                m = n.response;
                            return r && 4 === d ? a.handle.call(n, r, f, m, u) : !r && 4 > d ? a.handle.call(n, f, m, u) : u(r) } catch (r) {
                            if (r._punt) throw r;
                            u(r) } finally { n._handled = !0, n.next = null } });
                return u(), n.next = null, n }, n = n || {}, n.MiddlewareStack = i }.call(this), "undefined" == typeof Package && (Package = {}), Package["iron:middleware-stack"] = { Handler: r } }();

! function() {
    var t = Package.meteor.Meteor,
        e = Package.underscore._,
        n = Package.tracker.Tracker,
        a = Package.tracker.Deps,
        r = Package.jquery.$,
        o = Package.jquery.jQuery,
        i = Package["iron:core"].Iron,
        c, s, h, u, l;
    (function() {
        var t = i.Url,
            n = "__hash__";
        c = function(e) {
            var a = t.parse(e),
                r = a.hash && a.hash.replace("#", ""),
                o = a.search,
                i = a.pathname,
                c = a.rootUrl;
            if (r && "!" !== r.charAt(0)) {
                var s = n + "=" + r;
                o = o ? o + "&" : "?", o += s, r = "" }
            return !r && i ? r = "#!" + i.substring(1) : r && (r = "#" + r), [c, r, o].join("") }, s = function(a) {
            var r = t.parse(a),
                o = r.hash && r.hash.replace("#!", "/"),
                i = r.search,
                c = r.rootUrl,
                s;
            return e.has(r.queryObject, n) ? (s = "#" + r.queryObject[n], delete r.queryObject[n]) : s = "", [c, o, t.toQueryString(r.queryObject), s].join("") }, h = function(e) {
            var a = t.parse(e),
                r = a.queryObject;
            return a.hash && (r[n] = a.hash.replace("#", "")), ["!", a.pathname.substring(1), t.toQueryString(r)].join("") } }).call(this),
        function() {
            var t = i.Url;
            u = function(n, a) { e.extend(this, t.parse(n), { options: a || {} }) }, u.prototype.equals = function(t) {
                return t && t instanceof u && t.pathname == this.pathname && t.search == this.search && t.hash == this.hash && t.options.historyState === this.options.historyState ? !0 : !1 }, u.prototype.isCancelled = function() {
                return !!this._isCancelled }, u.prototype.cancelUrlChange = function() { this._isCancelled = !0 } }.call(this),
        function() {
            var n = i.Url,
                o = null,
                f = new a.Dependency,
                p = { go: [], popState: [] },
                y = function() {
                    return /MSIE 9/.test(navigator.appVersion) },
                g = function() {
                    return /MSIE 8/.test(navigator.appVersion) },
                d = function() {
                    return !!Package.appcache },
                S = function() {
                    return "undefined" == typeof history || "function" != typeof history.pushState },
                v = function() {
                    return l.options.useHashPaths || g() || y() || d() || S() },
                k = function() {
                    return !!l.options.useHashPaths },
                w = function(t, n) { e.each(p[t], function(t) { t.call(n) }) },
                P = function(t) {
                    if (!(t instanceof u)) throw new Error("Expected a State instance");
                    return t.equals(o) ? !1 : (o = t, f.changed(), !0) },
                m = function() {
                    var t = location.href,
                        e;
                    e = k() ? new u(s(t)) : new u(t, { historyState: history.state }), w("popState", e), P(e) },
                j = function(t) {
                    var e = q;
                    e && e(t) },
                _ = function(t, e) { e = e || {};
                    var n = new u(t, e);
                    w("go", n), P(n) && a.afterFlush(function() { n.isCancelled() || (k() ? location.hash = h(t) : e.replaceState === !0 ? history.replaceState(e.historyState, null, t) : history.pushState(e.historyState, null, t)) }) },
                q = function(t) {
                    try {
                        var e = t.currentTarget,
                            a = e.href,
                            r = e.pathname + e.search + e.hash;
                        if (r = r.replace(/(^\/?)/, "/"), t.isDefaultPrevented()) return void t.preventDefault();
                        if (t.metaKey || t.ctrlKey || t.shiftKey) return;
                        if (e.target) return;
                        if (!n.isSameOrigin(a, location.href)) return;
                        t.preventDefault(), _(r) } catch (o) {
                        throw t.preventDefault(), o } };
            l = {}, l.options = { linkSelector: "a[href]", useHashPaths: !1 }, l.configure = function(t) { e.extend(this.options, t || {}) }, l.get = function() {
                return f.depend(), o }, l.start = function() {
                if (!this._isStarted) {
                    var e = n.parse(location.href);
                    if (v()) {
                        if (e.pathname.length > 1) {
                            var a = c(location.href);
                            window.location = a }
                        this.configure({ useHashPaths: !0 }) }
                    var o = location.href;
                    if (k()) {
                        var i = new u(s(o));
                        P(i) } else {
                        if ("!" === e.hash.replace("#", "")[0]) var o = s(o);
                        var h = { initial: !0 };
                        history.replaceState(h, null, o);
                        var i = new u(o, { historyState: h });
                        P(i) }
                    r(window).on("popstate.iron-location", m), r(window).on("hashchange.iron-location", m), t.startup(function() { r(document).on("click.iron-location", l.options.linkSelector, j) }), this._isStarted = !0 } }, l.stop = function() { this._isStarted && (r(window).on("popstate.iron-location"), r(window).on("hashchange.iron-location"), r(document).off("click.iron-location"), this._isStarted = !1) }, l.onClick = function(t) { q = t }, l.go = function(t, e) {
                return _(t, e) }, l.onGo = function(t) { p.go.push(t) }, l.onPopState = function(t) { p.popState.push(t) }, l.start(), i.Location = l }.call(this), "undefined" == typeof Package && (Package = {}), Package["iron:location"] = { urlToHashStyle: c, urlFromHashStyle: s } }();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.underscore._,
        a = Package.tracker.Tracker,
        i = Package.tracker.Deps,
        n = Package.ejson.EJSON,
        r;
    (function() {
        var e = function(e) {
                return void 0 === e ? "undefined" : n.stringify(e) },
            i = function(e) {
                return void 0 === e || "undefined" === e ? void 0 : n.parse(e) };
        r = function(e) {
            if (e)
                if ("string" == typeof e) r._registerDictForMigrate(e, this), this.keys = r._loadMigratedDict(e) || {};
                else {
                    if ("object" != typeof e) throw new Error("Invalid ReactiveDict argument: " + e);
                    this.keys = e }
            else this.keys = {};
            this.keyDeps = {}, this.keyValueDeps = {} }, t.extend(r.prototype, { set: function(a, i) {
                var n = this;
                if ("object" == typeof a && void 0 === i) return void n._setObject(a);
                var r = a;
                i = e(i);
                var s = "undefined";
                if (t.has(n.keys, r) && (s = n.keys[r]), i !== s) { n.keys[r] = i;
                    var c = function(e) { e && e.changed() };
                    c(n.keyDeps[r]), n.keyValueDeps[r] && (c(n.keyValueDeps[r][s]), c(n.keyValueDeps[r][i])) } }, setDefault: function(e, t) {
                var a = this;
                void 0 === a.keys[e] && a.set(e, t) }, get: function(e) {
                var t = this;
                return t._ensureKey(e), t.keyDeps[e].depend(), i(t.keys[e]) }, equals: function(r, s) {
                var c = this,
                    o = null;
                if ("undefined" != typeof Mongo && (o = Mongo.ObjectID), !("string" == typeof s || "number" == typeof s || "boolean" == typeof s || "undefined" == typeof s || s instanceof Date || o && s instanceof o || null === s)) throw new Error("ReactiveDict.equals: value must be scalar");
                var u = e(s);
                if (a.active) { c._ensureKey(r), t.has(c.keyValueDeps[r], u) || (c.keyValueDeps[r][u] = new a.Dependency);
                    var d = c.keyValueDeps[r][u].depend();
                    d && a.onInvalidate(function() { c.keyValueDeps[r][u].hasDependents() || delete c.keyValueDeps[r][u] }) }
                var f = void 0;
                return t.has(c.keys, r) && (f = i(c.keys[r])), n.equals(f, s) }, _setObject: function(e) {
                var a = this;
                t.each(e, function(e, t) { a.set(t, e) }) }, _ensureKey: function(e) {
                var t = this;
                e in t.keyDeps || (t.keyDeps[e] = new a.Dependency, t.keyValueDeps[e] = {}) }, _getMigrationData: function() {
                return this.keys } }) }).call(this),
        function() {
            if (r._migratedDictData = {}, r._dictsToMigrate = {}, r._loadMigratedDict = function(e) {
                    return t.has(r._migratedDictData, e) ? r._migratedDictData[e] : null }, r._registerDictForMigrate = function(e, a) {
                    if (t.has(r._dictsToMigrate, e)) throw new Error("Duplicate ReactiveDict name: " + e);
                    r._dictsToMigrate[e] = a }, e.isClient && Package.reload) {
                var a = Package.reload.Reload._migrationData("reactive-dict");
                a && a.dicts && (r._migratedDictData = a.dicts), Package.reload.Reload._onMigrate("reactive-dict", function() {
                    var e = r._dictsToMigrate,
                        t = {};
                    for (var a in e) t[a] = e[a]._getMigrationData();
                    return [!0, { dicts: t }] }) } }.call(this), "undefined" == typeof Package && (Package = {}), Package["reactive-dict"] = { ReactiveDict: r } }();

! function() {
    var t = Package.meteor.Meteor,
        e = Package.underscore._,
        n = Package.tracker.Tracker,
        a = Package.tracker.Deps,
        o = Package["reactive-dict"].ReactiveDict,
        r = Package.templating.Template,
        i = Package["iron:core"].Iron,
        u = Package.blaze.Blaze,
        s = Package.blaze.UI,
        c = Package.blaze.Handlebars,
        l = Package.htmljs.HTML,
        p, d;
    (function() {
        var t = i.utils.assert,
            n = function() {
                for (var t = {}, e = a.currentComputation; e;) t[String(e._id)] = !0, e = e._parent;
                return t },
            o = function(a) {
                var o = n(),
                    r = e.keys(a._dependentsById);
                e.each(r, function(e) { t(!o[e], "\n\nYou called wait() after calling ready() inside the same computation tree.\n\nYou can fix this problem in two possible ways:\n\n1) Put all of your wait() calls before any ready() calls.\n2) Put your ready() call in its own computation with Deps.autorun.") }) };
        p = function() { this._readyDep = new a.Dependency, this._comps = [], this._notReadyCount = 0 }, p.prototype.wait = function(t) {
            var n = this,
                r = a.currentComputation;
            o(n._readyDep), a.nonreactive(function() {
                var o = null,
                    i = a.autorun(function(e) {
                        var a = !!t(),
                            r = n._notReadyCount;
                        e.firstRun && !a ? n._notReadyCount++ : null !== o && a !== o && a === !0 ? n._notReadyCount-- : null !== o && a !== o && a === !1 && n._notReadyCount++, o = a, 0 === r && n._notReadyCount > 0 ? n._readyDep.changed() : r > 0 && 0 === n._notReadyCount && n._readyDep.changed() });
                n._comps.push(i), r && r.onInvalidate(function() { a.afterFlush(function() { i.stop(), n._comps.splice(e.indexOf(n._comps, i), 1), o === !1 && (n._notReadyCount--, 0 === n._notReadyCount && n._readyDep.changed()) }) }) }) }, p.prototype.ready = function() {
            return this._readyDep.depend(), 0 === this._notReadyCount }, p.prototype.stop = function() { e.each(this._comps, function(t) { t.stop() }), this._comps = [] }, i.WaitList = p }).call(this),
        function() {
            var t = i.utils.debug("iron:controller"),
                n = i.Layout,
                a = i.DynamicTemplate,
                o = function(t, e) {
                    return function() {
                        return "function" == typeof t ? t.apply(e, arguments) : t } };
            d = function(t) {
                var e = this;
                this.options = t || {}, this._layout = this.options.layout || new n(this.options), this._isController = !0, this._layout._setLookupHost(this);
                var a = d._collectEventMaps.call(this.constructor);
                this._layout.events(a, this), this.init(t) }, d.prototype.layout = function(t, n) {
                var a = this;
                return this._layout.template(t), n && e.has(n, "data") && this._layout.data(o(n.data, this)), { data: function(t) {
                        return a._layout.data(o(t, a)) } } }, d.prototype.render = function(t, e) {
                var n = this;
                e && "undefined" != typeof e.data && (e.data = o(e.data, this));
                var a = this._layout.render(t, e);
                return { data: function(t) {
                        return a.data(o(t, n)) } } }, d.prototype.beginRendering = function(t) {
                return this._layout.beginRendering(t) }, d.extend = function(t) {
                return i.utils.extend(this, t) }, d.events = function(t) {
                return this._eventMap = t, this };
            var s = function(t, n) {
                var a = {};
                return t.__super__ && e.extend(a, s(t.__super__.constructor, n)), e.has(t, n) ? e.extend(a, t[n]) : a };
            d._collectEventMaps = function() {
                return s(this, "_eventMap") }, d._helpers = {}, d.helpers = function(t) {
                return e.extend(this._helpers, t), this }, "undefined" != typeof r && (i.controller = function() {
                return a.findLookupHostWithProperty(u.getView(), "_isController") }, r.registerHelper("get", function(t) {
                var e = i.controller();
                return e && e.state ? e.state.get(t) : void 0 })), i.Controller = d }.call(this),
        function() {
            var t = i.Layout,
                n = i.utils.debug("iron:controller"),
                a = i.utils.defaultValue,
                r = function(t, e) {
                    return function() {
                        return "function" == typeof t ? t.apply(e, arguments) : t } };
            d.prototype.init = function(t) { this._waitlist = new p, this.state = new o }, d.prototype.insert = function(t) {
                return this._layout.insert.apply(this._layout, arguments) }, d.prototype.wait = function(t) {
                var n = this;
                if (t) return e.isArray(t) ? e.each(t, function a(t) { n.wait(t) }) : this._waitlist.wait(t.ready ? function() {
                    return t.ready() } : t), this }, d.prototype.ready = function() {
                return this._waitlist.ready() }, d.prototype.stop = function() { this._waitlist.stop() } }.call(this), "undefined" == typeof Package && (Package = {}), Package["iron:controller"] = {} }();

! function() {
    var t = Package.underscore._,
        o = Package.tracker.Tracker,
        e = Package.tracker.Deps,
        r = Package.blaze.Blaze,
        n = Package.blaze.UI,
        i = Package.blaze.Handlebars,
        a = Package.templating.Template,
        u = Package.ejson.EJSON,
        s = Package.meteor.Meteor,
        l = Package["iron:core"].Iron,
        p = Package.htmljs.HTML,
        c, h, f, d, y, m;
    (function() { f = new s.EnvironmentVariable }).call(this),
        function() { d = ["get", "post", "put", "delete", "patch"] }.call(this),
        function() {
            var o = l.Controller,
                e = l.Url,
                r = l.MiddlewareStack,
                n = l.utils.assert;
            h = o.extend({ constructor: function(o) { h.__super__.constructor.apply(this, arguments), o = o || {}, this.options = o, this._onStopCallbacks = [], this.route = o.route, this.params = [];
                    var e = this.lookupOption("data"); "function" == typeof e ? this.data = t.bind(e, this) : "undefined" != typeof e && (this.data = function() {
                        return e }), this.init(o) } }), h.prototype.lookupOption = function(o) {
                if (this.route && this.route.options && t.has(this.route.options, o)) return this.route.options[o];
                if (t.has(this.options, o)) return this.options[o];
                if ("undefined" != typeof this[o]) return this[o];
                var e = f.get();
                return e && t.has(e, o) ? e[o] : this.router && this.router.options && t.has(this.router.options, o) ? this.router.options[o] : void 0 }, h.prototype.configureFromUrl = function(t, o, e) { n("string" == typeof t, "url must be a string"), o = o || {}, this.request = o.request || {}, this.response = o.response || {}, this.url = o.url || t, this.originalUrl = o.originalUrl || t, this.method = this.request.method, this.route && this.setParams(this.route.params(t), e) }, h.prototype._collectHooks = function() {
                var o = this,
                    e = t.toArray(arguments),
                    r = function(e) {
                        if (!e) return [];
                        var r = o.router.lookupHook,
                            n = t.isArray(e) ? e : [e];
                        return t.map(n, function(t) {
                            return r(t) }) },
                    n = function(o, e) {
                        var i = [];
                        return o.__super__ && (i = i.concat(n(o.__super__.constructor, e))), t.has(o.prototype, e) ? i.concat(r(o.prototype[e])) : i },
                    i = function(t) {
                        for (var o = 0; o < e.length; o++) t(e[o]) },
                    a = [];
                i(function(t) {
                    var e = o.route && o.route.getName(),
                        r = o.router.getHooks(t, e);
                    a = a.concat(r) });
                var u = [];
                i(function(t) {
                    var e = n(o.constructor, t);
                    u = u.concat(e) });
                var s = [];
                i(function(e) {
                    if (t.has(o, e)) {
                        var n = r(o[e]);
                        s = s.concat(n) } });
                var l = [];
                o.route && i(function(t) {
                    var e = r(o.route.options[t]);
                    l = l.concat(e) });
                var p = a.concat(l).concat(u).concat(s);
                return p }, h.prototype.runHooks = function() {
                for (var t = this._collectHooks.apply(this, arguments), o = 0, e = t.length; e > o; o++) {
                    var r = t[o];
                    r.call(this) }
                return t.length }, h.prototype.getParams = function() {
                return this.params }, h.prototype.setParams = function(t) {
                return this.params = t, this }, l.RouteController = h }.call(this),
        function() {
            var r = l.Controller,
                n = l.Url,
                i = l.MiddlewareStack,
                a = l.utils.debug("iron-router:RouteController");
            if (h.prototype.init = function(t) { h.__super__.init.apply(this, arguments), this._computation = null, this._paramsDep = new o.Dependency, this.location = l.Location }, h.prototype.getParams = function() {
                    return this._paramsDep.depend(), this.params }, h.prototype.setParams = function(o, e) {
                    var r = function(o, r) {
                        if (!(o instanceof Array)) throw new Error("you called equals with a non array value in setParams");
                        if (!(r instanceof Array)) return !1;
                        if (o.length !== r.length) return !1;
                        for (var n = 0; n < o.length; n++)
                            if (!u.equals(o[n], r[n], e)) return !1;
                        var i = t.keys(o),
                            a = t.keys(r),
                            s;
                        if (i.length !== a.length) return !1;
                        for (var n = 0; n < i.length; n++) {
                            if (s = i[n], !t.has(r, s)) return !1;
                            if (!u.equals(o[s], r[s])) return !1 }
                        return !0 };
                    if (!r(this.params, o)) return this.params = o, e = e || {}, e.reactive !== !1 && this._paramsDep.changed(), this }, h.prototype.dispatch = function(t, o, r) {
                    if (this._computation && !this._computation.stopped) throw new Error("RouteController computation is already running. Stop it first.");
                    var n = this;
                    return e.nonreactive(function() { e.autorun(function(e) { n._computation = e, t.dispatch(o, n, r) }) }), n }, h.prototype._runRoute = function(o, r, n) {
                    var a = this,
                        u = this._collectHooks("subscriptions");
                    t.each(u, function(t) { a.wait(t.call(a)) });
                    var s = this._collectHooks("waitOn");
                    t.each(s, function(t) { a.wait(t.call(a)) });
                    var p = s.length > 0,
                        c, f, d = function() {
                            return e.nonreactive(function() {
                                return a._layout.template() }) },
                        y = function() {
                            return e.nonreactive(function() {
                                var t = a._layout._regions.main;
                                return t && t.template() }) },
                        m = d(),
                        _ = y();
                    this.beginRendering(function R(o) {
                        if (!a.isStopped) {
                            var e = d(),
                                r = y();
                            if (m !== e || _ != r) {
                                var n = a._layout.regionKeys(),
                                    i = t.difference(n, o);
                                t.each(i, function(t) { a._layout.clear(t) }) } } }), this.layout(this.lookupOption("layoutTemplate"), { data: this.lookupOption("data") });
                    var g = new i,
                        v = new i,
                        k = new i;
                    v.append(this._collectHooks("onRun", "load"), { where: "client" }), k.append(this._collectHooks("onRerun"), { where: "client" }), g.append(function b(t, o, e) { this._computation.firstRun && !h._hasJustReloaded && v.length > 0 ? v.dispatch(t.url, this, e) : e(), h._hasJustReloaded = !1 }, function C(t, o, e) { this._computation.firstRun ? e() : k.length > 0 ? k.dispatch(t.url, this, e) : e() }, { where: "client" }), p && g.push(t.bind(l.Router.hooks.loading, a));
                    var w = this._collectHooks("onBeforeAction", "before");
                    g.append(w, { where: "client" }), 0 === o._actionStack.length && o._actionStack.push(o._path, "action", o.options), g = g.concat(o._actionStack), this._rendered = !1, g.dispatch(r, this, n), e.afterFlush(function() { l.utils.warn(a._rendered || a.isStopped, "Route dispatch never rendered. Did you forget to call this.next() in an onBeforeAction?") }), this.runHooks("onAfterAction", "after") }, h.prototype.action = function() { this.render() }, h.prototype.lookupTemplate = function() {
                    return this.lookupOption("template") || this.router && this.router.toTemplateName(this.route.getName()) }, h.prototype.lookupRegionTemplates = function() {
                    return this.lookupOption("yieldRegions") || this.lookupOption("regionTemplates") || this.lookupOption("yieldTemplates") || {} }, h.prototype.render = function(t, o) {
                    if (this._rendered = !0, 0 === arguments.length) {
                        var t = this.lookupTemplate(),
                            e = h.__super__.render.call(this, t);
                        return this.renderRegions(), e }
                    return h.__super__.render.call(this, t, o) }, h.prototype.renderRegions = function() {
                    var o = this,
                        e = this.lookupRegionTemplates();
                    a("regionTemplates: " + JSON.stringify(e)), t.each(e, function(t, e) { o.render(e, t) }) }, h.prototype.stop = function() { h.__super__.stop.call(this), this._computation && this._computation.stop(), this.runHooks("onStop", "unload"), this.isStopped = !0 }, h.prototype.redirect = function() {
                    return this.router.go.apply(this.router, arguments) }, h.prototype.subscribe = function() {
                    var o = this,
                        e = s.subscribe.apply(this, arguments);
                    return t.extend(e, { wait: function() { o.wait(this) } }) }, Package.reload) { Package.reload.Reload._onMigrate("iron-router", function() {
                    return [!0, !0] });
                var p = Package.reload.Reload._migrationData("iron-router");
                h._hasJustReloaded = p } }.call(this),
        function() {
            var o = l.Url,
                e = l.MiddlewareStack,
                r = l.utils.assert;
            y = function(o, r, n) {
                var i = function(t, o, e) {
                    var r = this;
                    r.request = t, r.response = o, i.dispatch(t.url, r, e) };
                return "object" == typeof r && (n = r, r = n.action), n = n || {}, "string" == typeof o && "/" !== o.charAt(0) && (o = n.path ? n.path : "/" + o), t.extend(i, this.constructor.prototype), n = i.options = n || {}, i._actionStack = new e, i._beforeStack = new e, i._beforeStack.append(i.options.onBeforeAction), i._beforeStack.append(i.options.before), i._afterStack = new e, i._afterStack.append(i.options.onAfterAction), i._afterStack.append(i.options.after), i._methods = {}, "string" == typeof r ? i._actionStack.push(o, t.extend(n, { template: r })) : ("function" == typeof r || "object" == typeof r) && i._actionStack.push(o, r, n), i._path = o, i }, y.prototype.getName = function() {
                return this.handler && this.handler.name }, y.prototype.findControllerConstructor = function() {
                var t = this,
                    o = function(t, o) { o = o || {};
                        var e = l.utils.resolve(t);
                        if (e && h.prototype.isPrototypeOf(e.prototype)) return e;
                        if (o.supressErrors !== !0) throw new Error("RouteController '" + t + "' is not defined.");
                        return void 0 },
                    e = function(o) {
                        return t.router.toControllerName(o) },
                    r, n = this.getName();
                return "function" == typeof this.options.controller ? this.options.controller : "string" == typeof this.options.controller ? o(this.options.controller) : this.router && this.router.options.controller ? "function" == typeof this.router.options.controller ? this.router.options.controller : "string" == typeof this.router.options.controller ? o(this.router.options.controller) : void 0 : n && (r = o(e(n), { supressErrors: !0 })) ? r : h }, y.prototype.createController = function(t) { t = t || {};
                var o = this.findControllerConstructor();
                t.route = this;
                var e = new o(t);
                return e }, y.prototype.setControllerParams = function(t, o) {}, y.prototype.dispatch = function(t, o, e) {
                return r(o._runRoute, "context doesn't have a _runRoute method"), o._runRoute(this, t, e) }, y.prototype.path = function(t, o) {
                return this.handler.resolve(t, o) }, y.prototype.url = function(t, o) {
                var e = this.path(t, o),
                    r = o && o.host || s.absoluteUrl();
                return "/" === r.charAt(r.length - 1), r = r.slice(0, r.length - 1), r + e }, y.prototype.params = function(t) {
                return this.handler.params(t) }, t.each(d, function(t) { y.prototype[t] = function(o) {
                    return this._methods[t] = !0, this._actionStack.push(this._path, o, { name: this.getName() + "_" + t.toLowerCase(), method: t, where: this.handler.where, mount: !1 }), this } }), l.Route = y }.call(this),
        function() {
            var o = l.MiddlewareStack,
                e = l.Url,
                r = l.Layout,
                n = l.utils.warn,
                i = l.utils.assert;
            c = function(e) {
                function r(t, o, e) { r.dispatch(t.url, { request: t, response: o }, e) }
                return r._stack = new o, r._globalHooks = {}, r.routes = [], r.routes._byPath = {}, this.configure.call(r, e), t.extend(r, this.constructor.prototype), this.init.call(r, e), s.startup(function() { s.defer(function() { r.options.autoStart !== !1 && r.start() }) }), r }, c.prototype.init = function(t) {}, c.prototype.configure = function(o) {
                var e = this;
                o = o || {};
                var r = function(o) {
                    return o ? t.isArray(o) ? o : [o] : [] };
                return t.each(l.Router.HOOK_TYPES, function n(i) { o[i] && (t.each(r(o[i]), function a(t) { e.addHook(i, t) }), delete o[i]) }), this.options = this.options || {}, t.extend(this.options, o), this }, c.prototype.map = function(t) {
                return t.call(this) }, c.prototype.route = function(t, o, e) {
                var r = function(t) {
                    return Object.prototype.toString.call(t) };
                i("[object String]" === r(t) || "[object RegExp]" === r(t), "Router.route requires a path that is a string or regular expression."), "object" == typeof o && (e = o, o = e.action);
                var n = new y(t, o, e);
                e = e || {}, e.mount = !1;
                var a = this._stack.push(t, n, e);
                return a.route = n, n.handler = a, n.router = this, i(!this.routes._byPath[a.path], "A route for the path " + JSON.stringify(a.path) + " already exists by the name of " + JSON.stringify(a.name) + "."), this.routes._byPath[a.path] = n, this.routes.push(n), "string" == typeof a.name && (this.routes[a.name] = n), n }, c.prototype.findFirstRoute = function(t) {
                for (var o, e, r = 0; r < this.routes.length; r++)
                    if (m = this.routes[r], o = m.handler.test(t, { where: s.isServer ? "server" : "client" })) return m;
                return null }, c.prototype.path = function(t, o, e) {
                var r = this.routes[t];
                return n(r, "You called Router.path for a route named " + JSON.stringify(t) + " but that route doesn't seem to exist. Are you sure you created it?"), r && r.path(o, e) }, c.prototype.url = function(t, o, e) {
                var r = this.routes[t];
                return n(r, "You called Router.url for a route named " + JSON.stringify(t) + " but that route doesn't seem to exist. Are you sure you created it?"), r && r.url(o, e) }, c.prototype.createController = function(t, o) {
                var e = this.findFirstRoute(t),
                    r;
                return o = o || {}, r = e ? e.createController({ layout: this._layout }) : new h({ layout: this._layout }), r.router = this, r.configureFromUrl(t, o, { reactive: !1 }), r }, c.prototype.setTemplateNameConverter = function(t) {
                return this._templateNameConverter = t, this }, c.prototype.setControllerNameConverter = function(t) {
                return this._controllerNameConverter = t, this }, c.prototype.toTemplateName = function(t) {
                return this._templateNameConverter ? this._templateNameConverter(t) : l.utils.classCase(t) }, c.prototype.toControllerName = function(t) {
                return this._controllerNameConverter ? this._controllerNameConverter(t) : l.utils.classCase(t) + "Controller" }, c.prototype.addHook = function(o, e, r) {
                var n = this;
                r = r || {};
                var i = function(o) {
                    return o ? t.isArray(o) ? o : [o] : [] };
                r.only && (r.only = i(r.only)), r.except && (r.except = i(r.except));
                var a = this._globalHooks[o] = this._globalHooks[o] || [],
                    u = function() {
                        var t = this,
                            o = arguments;
                        return f.withValue(r, function() {
                            return n.lookupHook(e).apply(t, o) }) };
                return a.push({ options: r, hook: u }), this }, c.prototype.lookupHook = function(o) {
                var e = o;
                if (t.isFunction(e)) return e;
                if (t.isString(e) && t.isFunction(l.Router.hooks[e])) return l.Router.hooks[e];
                throw new Error("No hook found named: " + o) }, c.prototype.getHooks = function(o, e) {
                var r = this,
                    n = [];
                return t.each(this._globalHooks[o], function(o) {
                    var r = o.options;
                    return r.except && t.include(r.except, e) ? [] : r.only && !t.include(r.only, e) ? [] : void n.push(o.hook) }), n }, c.HOOK_TYPES = ["onRun", "onRerun", "onBeforeAction", "onAfterAction", "onStop", "waitOn", "subscriptions", "load", "before", "after", "unload"], c.hooks = {}, c.plugins = {}, t.each(c.HOOK_TYPES, function(t) { c.prototype[t] = function(o, e) { this.addHook(t, o, e) } }), c.prototype.plugin = function(t, o) {
                var e;
                if ("function" == typeof t ? e = t : "string" == typeof t && (e = l.Router.plugins[t]), !e) throw new Error("No plugin found named " + JSON.stringify(t));
                return e.call(this, this, o), this }, l.Router = c }.call(this),
        function() {
            if ("undefined" != typeof a) var t = new a("DefaultLoadingTemplate", function() {
                    return "Loading..." }),
                o = new a("DefaultDataNotFoundTemplate", function() {
                    return "Data not found..." });
            c.hooks.loading = function() {
                if (this.ready()) return void this.next();
                var o = this.lookupOption("loadingTemplate");
                this.render(o || t), this.renderRegions() }, c.hooks.dataNotFound = function() {
                if (!this.ready()) return void this.next();
                var t = this.lookupOption("data"),
                    e, r = this.lookupOption("notFoundTemplate");
                return "function" != typeof t || (e = t.call(this)) ? void this.next() : (this.render(r || o), void this.renderRegions()) } }.call(this),
        function() {
            var o = l.utils.warn,
                e = l.DynamicTemplate,
                i = l.utils.debug("iron:router <helpers>");
            n.registerHelper("Router", new r.Template("Router", function() {
                return c.createView() })), n.registerHelper("pathFor", function(e) {
                var r;
                arguments.length > 1 && (r = arguments[0], e = arguments[1] || {});
                var n = e && e.hash;
                n = n || {};
                var i = "",
                    a = n.query,
                    s = n.hash,
                    r = r || n.route,
                    l = t.extend({}, n.data || this),
                    p = c.routes[r];
                return o(p, "pathFor couldn't find a route named " + JSON.stringify(r)), p && (t.each(p.handler.compiledUrl.keys, function(o) {
                    var e = o.name;
                    t.has(n, e) && (l[e] = u.clone(n[e]), delete n[e]) }), i = p.path(l, { query: a, hash: s })), i }), n.registerHelper("urlFor", function(e) {
                var r;
                arguments.length > 1 && (r = arguments[0], e = arguments[1] || {});
                var n = e && e.hash;
                n = n || {};
                var i = "",
                    a = n.query,
                    s = n.hash,
                    r = r || n.route,
                    l = t.extend({}, n.data || this),
                    p = c.routes[r];
                return o(p, "urlFor couldn't find a route named " + JSON.stringify(r)), p && (t.each(p.handler.compiledUrl.keys, function(o) {
                    var e = o.name;
                    t.has(n, e) && (l[e] = u.clone(n[e]), delete n[e]) }), i = p.url(l, { query: a, hash: s })), i }), n.registerHelper("linkTo", new r.Template("linkTo", function() {
                var n = this,
                    i = e.getInclusionArguments(this);
                if ("object" != typeof i) throw new Error("linkTo options must be key value pairs such as {{#linkTo route='my.route.name'}}. You passed: " + JSON.stringify(i));
                i = i || {};
                var a = "",
                    s = i.query,
                    l = i.hash,
                    h = i.route,
                    f = t.extend({}, i.data || e.getParentDataContext(this)),
                    d = c.routes[h],
                    y;
                o(d, "linkTo couldn't find a route named " + JSON.stringify(h)), d && (t.each(d.handler.compiledUrl.keys, function(o) {
                    var e = o.name;
                    t.has(i, e) && (f[e] = u.clone(i[e]), delete i[e]) }), a = d.path(f, { query: s, hash: l }));
                var m = t.omit(i, "route", "query", "hash", "data");
                return m.href = a, r.With(function() {
                    return e.getParentDataContext(n) }, function() {
                    return p.A(m, n.templateContentBlock) }) })) }.call(this),
        function() {
            var o = l.MiddlewareStack,
                r = l.Url,
                n = l.Layout,
                i = l.utils.assert,
                a = "__IronRouterNotFound__",
                u = "__IronRouterNoRoutes__";
            c.prototype.init = function(t) {
                var o = this;
                o._currentController = null, o._currentRoute = null, o._currentDep = new e.Dependency, o._locationComputation = null, o._layout = new n({ template: o.options.layoutTemplate }), s.startup(function() { setTimeout(function t() { o.options.autoRender !== !1 && o.insert({ el: document.body }) }) }) }, c.prototype.insert = function(t) {
                return this._layout.insert(t), this }, c.prototype.createView = function() {
                return this._layout.create() }, c.prototype.lookupNotFoundTemplate = function() {
                return this.options.notFoundTemplate ? this.options.notFoundTemplate : 0 === this.routes.length ? u : a }, c.prototype.lookupLayoutTemplate = function() {
                return this.options.layoutTemplate }, c.prototype.dispatch = function(t, o, r) {
                var n = this;
                i("string" == typeof t, "expected url string in router dispatch");
                var s = this._currentController,
                    l = this.findFirstRoute(t),
                    p = this._currentRoute;
                return this._currentRoute = l, this._currentController && this._currentController.stop(), s && l && p === l ? s.configureFromUrl(t, o) : s = this.createController(t, o), this._currentController = s, s.dispatch(n._stack, t, function c(t) {
                    if (t) throw t;
                    if (!s.isHandled()) {
                        var o = e.nonreactive(function() {
                            return s.location.get().options.historyState });
                        if (o && o.initial === !0) { this.layout(this.lookupOption("layoutTemplate"), { data: { url: this.url } });
                            var i = this.lookupOption("notFoundTemplate");
                            i || (i = 0 === n.routes.length ? u : a), this.render(i, { data: { url: this.url } }), this.renderRegions(), s.isHandled = function() {
                                return !0 } }
                        return r && r.call(s) } }), this._currentController == s && this._currentDep.changed(), s }, c.prototype.current = function() {
                return this._currentDep.depend(), this._currentController }, c.prototype._scrollToHash = function(t) {
                try {
                    var o = $(t);
                    $("html, body").scrollTop(o.offset().top) } catch (e) {} }, c.prototype.start = function() {
                var t = this,
                    o;
                t._locationComputation = e.autorun(function r(e) {
                    var r, n = l.Location.get(),
                        i, a, u, s = t._currentController;!s || o && o.path !== n.path ? r = t.dispatch(n.href, null, function p(t) { this.isHandled() || (n.cancelUrlChange(), window.location = n.path) }) : (t._scrollToHash(n.hash), s.configureFromUrl(n.href)), o = n }) }, c.prototype.stop = function() { this._isStarted && (this._locationComputation && this._locationComputation.stop(), this._currentController && this._currentController.stop(), this._isStarted = !1) }, c.prototype.go = function(o, e, r) {
                var n = this,
                    a = /^\/|http/,
                    u;
                if (r = r || {}, a.test(o)) u = o;
                else {
                    var s = n.routes[o];
                    i(s, "No route found named " + JSON.stringify(o)), u = s.path(e, t.extend(r, { throwOnMissingParams: !0 })) }
                l.Location.go(u, r) } }.call(this),
        function() { c.plugins.loading = function(t, o) { t.onBeforeAction("loading", o) }, c.plugins.dataNotFound = function(t, o) { t.onBeforeAction("dataNotFound", o) } }.call(this),
        function() { c = new l.Router }.call(this),
        function() { a.__checkName("__IronRouterNotFound__"), a.__IronRouterNotFound__ = new a("Template.__IronRouterNotFound__", function() {
                var t = this;
                return p.DIV({ style: "width: 600px; margin: 0 auto; padding: 20px;" }, "\n    ", p.DIV({ style: "font-size: 18pt; color: #999;" }, "\n      Oops, looks like there's no route on the client or the server for url: \"", r.View("lookup:url", function() {
                    return Spacebars.mustache(t.lookup("url")) }), '."\n    '), "\n  ") }), a.__checkName("__IronRouterNoRoutes__"), a.__IronRouterNoRoutes__ = new a("Template.__IronRouterNoRoutes__", function() {
                var t = this;
                return p.Raw('<div style="font-family: helvetica; color: #777; max-width: 600px; margin: 20px auto;">\n      <h1 style="text-align: center; margin: 0; font-size: 48pt;">\n        iron:router\n      </h1>\n      <p style="text-align: center; font-size: 1.3em;">\n        Organize your Meteor application.\n      </p>\n      <div style="margin: 50px 0px;">\n        <pre style="background: #f2f2f2; margin: 0; padding: 10px;">\nRouter.route(\'/\', function () {\n  this.render(\'Home\', {\n    data: function () { return Items.findOne({_id: this.params._id}); }\n  });\n});\n        </pre>\n      </div>\n      <div style="margin: 50px 0px;">\n        Check it out on Github:<br>\n        <a href="https://github.com/eventedmind/iron-router" target="_blank">https://github.com/eventedmind/iron-router</a>\n        <br>\n        <br>\n        And check out the new Guide:<br>\n        <a href="https://iron-meteor.github.io/iron-router" target="_blank">\n          https://iron-meteor.github.io/iron-router\n        </a>\n      </div>\n    </div>') }) }.call(this), "undefined" == typeof Package && (Package = {}), Package["iron:router"] = { Router: c, RouteController: h } }();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.templating.Template,
        n = Package["iron:router"].Router,
        i = Package["iron:router"].RouteController,
        o = Package.blaze.Blaze,
        a = Package.blaze.UI,
        r = Package.blaze.Handlebars,
        c = Package["iron:core"].Iron,
        s = Package.htmljs.HTML;
    (function() {
        function t() { window.ga = window.ga || function() {
                (ga.q = ga.q || []).push(arguments) }, ga.l = +new Date }

        function n() {
            var e = r.create || "auto";
            window.ga("create", r.id, e) }

        function i() {
            var e = !1;
            window.ga = function() { e || (e = !0, console.log("iron-router-ga settings not found")) } }

        function o() {
            if (r.set)
                for (var e in r.set) r.set.hasOwnProperty(e) && window.ga("set", e, r.set[e]) }

        function a() {
            var e;
            if (r.require)
                for (var t in r.require) r.require.hasOwnProperty(t) && (e = r.require[t], "string" == typeof e ? window.ga("require", t, e) : window.ga("require", t)) }
        var r = e.settings && e.settings["public"] && e.settings["public"].ga || {};
        r.id ? (t(), n(), o(), a()) : i() }).call(this),
        function() {
            var t = n.route;
            n.route = function(e, n) {
                return n = i.call(this, n), t.call(this, e, n) };
            var i = function(e) {
                    return e = e || {}, o.call(this, e) && a.call(this, e), r.call(this, e), c(e) && s.call(this, e), e },
                o = function(e) {
                    return e && "undefined" != typeof e.trackPageView ? !!e.trackPageView : !!this.options && !!this.options.trackPageView },
                a = function(e) {
                    var t = e.onRun;
                    e.onRun = function() {
                        return window.ga && window.ga("send", "pageview"), u.call(this, t, arguments) } },
                r = function(e) {
                    var t = e.onRun;
                    e.onRun = function() {
                        return window.ga && window.ga("set", "page", this.url), u.call(this, t, arguments) } },
                c = function(e) {
                    return !!e.contentExperiment || !!e.gaContentExperiment },
                s = function(e) {
                    var t = e.contentExperiment || e.gaContentExperiment,
                        n = new g(t.id),
                        i = e.onRun,
                        o = e.onBeforeAction,
                        a = e.action;
                    e.onRun = function() {
                        return n.init(), u.call(this, i, arguments) }, e.onBeforeAction = function() {
                        if (n.load(), !n.isReady()) return void d.call(this);
                        var e = window.cxApi.getChosenVariation(t.id);
                        return e === window.cxApi.NO_CHOSEN_VARIATION && (e = window.cxApi.chooseVariation(), ga("send", "event", "iron-router-ga", "Choose experiment variation", t.id, e)), u.call(this, o, arguments) }, e.action = function() {
                        var e = p(t.id);
                        this.render(t.variationTemplates[e]);
                        var n = [].slice.apply(arguments);
                        return a && a.apply(this, n) } },
                u = function(e, t) {
                    return e ? e.apply(this, [].slice.apply(t)) : void this.next() },
                p = function(e) {
                    var t = window.cxApi.getChosenVariation(e);
                    return t === window.cxApi.NO_CHOSEN_VARIATION || t === cxApi.NOT_PARTICIPATING ? window.cxApi.ORIGINAL_VARIATION : t },
                d = function() {
                    var e = this.route.options.loadingTemplate || this.router.options.loadingTemplate;
                    e && this.render(e) },
                g = function(e) { this.experimentId = e, this.dep = new Deps.Dependency };
            g.prototype.init = function() { this._removePreviousExperiment() }, g.prototype.load = function() { this._insertScriptIfNecessaryAndStartChecking() }, g.prototype.isReady = function() {
                return this.dep.depend(), "undefined" != typeof window.cxApi }, g.prototype._insertScriptIfNecessaryAndStartChecking = function() { document.getElementById("irga-experiment-api") || (this._insertScript(), this._checkCxApiLoaded()) }, g.prototype._insertScript = function() {
                var e = document.createElement("script");
                e.id = "irga-experiment-api", e.src = "//www.google-analytics.com/cx/api.js?experiment=" + this.experimentId;
                var t = document.getElementsByTagName("head")[0];
                t.appendChild(e) }, g.prototype._removePreviousExperiment = function() { window.cxApi && delete window.cxApi, this._removeScript() }, g.prototype._removeScript = function() {
                var e = document.getElementById("irga-experiment-api");
                e && e.parentNode && e.parentNode.removeChild(e) }, g.prototype._checkCxApiLoaded = function() {
                var e = this,
                    t = (new Date).getTime(),
                    n = 1e4,
                    i = function() {
                        var o = (new Date).getTime();
                        o > t + n && (window.cxApi = w), "undefined" != typeof window.cxApi ? (e._initCookie(), e.dep.changed()) : setTimeout(function() { i() }, 50) };
                i() }, g.prototype._initCookie = function() {
                var e = l();
                e.cookieDomain && window.cxApi.setDomainName(e.cookieDomain), e.cookiePath && window.cxApi.setCookiePath(e.cookiePath), e.allowHash && window.cxApi.setAllowHash(e.allowHash) };
            var l = function() {
                    return "undefined" != typeof e && e.settings && e.settings["public"] && e.settings["public"].ga && e.settings["public"].ga.create || {} },
                w = { NO_CHOSEN_VARIATION: -1, NOT_PARTICIPATING: -2, ORIGINAL_VARIATION: 0, chooseVariation: function() {
                        return 0 }, getChosenVariation: function() {
                        return 0 }, setDomainName: function() {}, setCookiePath: function() {}, setAllowHash: function() {} } }.call(this), "undefined" == typeof Package && (Package = {}), Package["reywood:iron-router-ga"] = {} }();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.random.Random;
    (function() {
        var o = "_localstorage_test_" + t.id(),
            a;
        try { window.localStorage && (window.localStorage.setItem(o, o), a = window.localStorage.getItem(o), window.localStorage.removeItem(o)) } catch (n) {}
        o === a && (e._localStorage = { getItem: function(e) {
                return window.localStorage.getItem(e) }, setItem: function(e, t) { window.localStorage.setItem(e, t) }, removeItem: function(e) { window.localStorage.removeItem(e) } }), e._localStorage || (e._debug("You are running a browser with no localStorage or userData support. Logging in from one tab will not cause another tab to be logged in."), e._localStorage = { _data: {}, setItem: function(e, t) { this._data[e] = t }, removeItem: function(e) { delete this._data[e] }, getItem: function(e) {
                var t = this._data[e];
                return void 0 === t ? null : t } }) }).call(this), "undefined" == typeof Package && (Package = {}), Package.localstorage = {} }();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.underscore._,
        c;
    (function() { c = { keys: {}, deps: {}, _ensureDeps: function(e) { this.deps[e] || (this.deps[e] = new Tracker.Dependency) }, set: function(e, c, r, s) {
                if (this._ensureDeps(e), "undefined" != typeof chrome && chrome.storage) {
                    var a = {};
                    a[e] = c, chrome.storage.local.set(a, function() { r && r.reactive === !1 || this.deps[e].changed(), t.isFunction(s) && s() }) } else { t.isObject(c) && (c = EJSON.stringify(c));
                    try { localStorage.setItem(e, c) } catch (n) {}
                    r && r.reactive === !1 || this.deps[e].changed(), t.isFunction(s) && s() } }, get: function(e, c, r) {
                if (this._ensureDeps(e), c && c.reactive === !1 || this.deps[e].depend(), "undefined" == typeof chrome || !chrome.storage) {
                    var s = localStorage.getItem(e),
                        a = s;
                    if (s && t.isString(s)) try { a = EJSON.parse(s) } catch (n) { a = s }
                    return a }
                chrome.storage.local.get(e, r) } } }).call(this), "undefined" == typeof Package && (Package = {}), Package["frozeman:storage"] = { LocalStore: c } }();

! function() {
    var a = Package.meteor.Meteor,
        e = Package.templating.Template,
        t = Package.underscore._,
        i = Package.blaze.Blaze,
        n = Package.blaze.UI,
        c = Package.blaze.Handlebars,
        l = Package.htmljs.HTML,
        r;
    (function() { r = {} }).call(this),
        function() { r._initialSubscriptionsStarted = !1;
            var e = function() { r._initialSubscriptionsStarted = !0 },
                t = function() { a._setImmediate(function() { e() }) };
            a.startup(function() { t() }) }.call(this), "undefined" == typeof Package && (Package = {}), Package.spiderable = { Spiderable: r } }();

! function() {
    var e = Package.meteor.Meteor; "undefined" == typeof Package && (Package = {}), Package.coffeescript = {} }();

! function() {
    var t = Package.meteor.Meteor,
        e = Package.mongo.Mongo,
        r = Package.underscore._,
        i = Package.jquery.$,
        n = Package.jquery.jQuery,
        s = Package.tracker.Tracker,
        o = Package.tracker.Deps,
        a = Package["iron:router"].Router,
        l = Package["iron:router"].RouteController,
        u = Package["iron:core"].Iron,
        g;
    (function() { g = "object" == typeof g ? g : {};
        var t = g;
        this.SeoCollection = new e.Collection("seo") }).call(this),
        function() { g = "object" == typeof g ? g : {};
            var e = g,
                n, s, l;
            n = { settings: { title: "", rel_author: "", meta: [], og: [], twitter: [], ignore: { meta: ["fragment"], link: ["stylesheet", "icon", "apple-touch-icon"] }, auto: { twitter: !0, og: !0, set: ["description", "url", "title"] } }, ignore: function(t, e) {
                    return this.settings.ignore[t] && -1 === r.indexOf(this.settings.ignore[t], e) ? this.settings.ignore[t].push(e) : void 0 }, config: function(t) {
                    return r.extend(this.settings, t) }, set: function(t, e) {
                    var i, n, s, o, l, u, g, h, c, f, p, k, m, y, v, d, M, O, P;
                    if (null == e && (e = !0), e && this.clearAll(), i = a.current(), i && (f = a.url(i.route.getName(), i.params)), u = t.meta, h = t.og, o = t.link, c = t.twitter, t.title && this.setTitle(t.title), t.url ? this.setUrl(t.url) : f && this.setUrl(f), u && r.isArray(u))
                        for (k = 0, d = u.length; d > k; k++) l = u[k], this.setMeta("name='" + l.key + "'", l.value);
                    else if (u && r.isObject(u))
                        for (n in u) p = u[n], this.setMeta("name='" + n + "'", p);
                    if (h && r.isArray(h))
                        for (m = 0, M = h.length; M > m; m++) g = h[m], this.setMeta("property='og:" + g.key + "'", g.value);
                    else if (h && r.isObject(h))
                        for (n in h) p = h[n], this.setMeta("property='og:" + n + "'", p);
                    if (o && r.isArray(o))
                        for (y = 0, O = o.length; O > y; y++) s = o[y], this.setLink(s.rel, s.href);
                    else if (o && r.isObject(o))
                        for (n in o) p = o[n], this.setLink(n, p);
                    if (c && r.isArray(c))
                        for (v = 0, P = c.length; P > v; v++) g = c[v], this.setMeta("property='twitter:" + g.key + "'", g.value);
                    else if (c && r.isObject(c))
                        for (n in c) p = c[n], this.setMeta("property='twitter:" + n + "'", p);
                    return t.rel_author ? this.setLink("author", t.rel_author) : void 0 }, clearAll: function() {
                    var t, e, s, o, a, l, u, g, h, c, f, p;
                    for (f = i("meta"), u = 0, h = f.length; h > u; u++) l = f[u], e = i(l), s = e.attr("name") || e.attr("property"), o = !1, e.attr("name") && r.indexOf(n.settings.ignore.meta, e.attr("name")) > -1 ? o = !0 : e.attr("property") && r.indexOf(n.settings.ignore.meta, e.attr("property")) > -1 && (o = !0), !o && s && e.remove();
                    for (p = i("link"), g = 0, c = p.length; c > g; g++) a = p[g], t = i(a), s = t.attr("rel"), -1 === r.indexOf(n.settings.ignore.link, t.attr("rel")) && s && t.remove();
                    return this.set(this.settings, !1), this.setTitle(this.settings.title) }, setTitle: function(t) {
                    return document.title = t, -1 !== r.indexOf(this.settings.auto.set, "title") && (this.settings.auto.twitter && this.setMeta('property="twitter:title"', t), this.settings.auto.og) ? this.setMeta('property="og:title"', t) : void 0 }, setUrl: function(t) {
                    return -1 !== r.indexOf(this.settings.auto.set, "url") && (this.settings.auto.twitter && this.setMeta('property="twitter:url"', t), this.settings.auto.og) ? this.setMeta('property="og:url"', t) : void 0 }, setLink: function(t, e, n) {
                    var s, o, a;
                    if (null == n && (n = !0), n && this.removeLink(t), !r.isArray(e)) return e ? i("head").append("<link rel='" + t + "' href='" + e + "'>") : void 0;
                    for (o = 0, a = e.length; a > o; o++) s = e[o], this.setLink(t, s, !1) }, removeLink: function(t) {
                    return i("link[rel='" + t + "']").remove() }, setMeta: function(t, e, n) {
                    var o, a, l, u;
                    if (null == n && (n = !0), n && this.removeMeta(t), r.isArray(e))
                        for (l = 0, u = e.length; u > l; l++) a = e[l], this.setMeta(t, a, !1);
                    else if (e) return e = s(e), i("head").append("<meta " + t + " content='" + e + "'>"), o = t.replace(/"|'/g, "").split("=")[1], -1 !== r.indexOf(this.settings.auto.set, o) && (this.settings.auto.twitter && this.setMeta("property='twitter:" + o + "'", e), this.settings.auto.og) ? this.setMeta("property='og:" + o + "'", e) : void 0 }, removeMeta: function(t) {
                    return i("meta[" + t + "]").remove() } }, this.SEO = n, s = function(t) {
                return ("" + t).replace(/'/g, "&apos;").replace(/"/g, "&quot;") }, l = function() {
                var t, e;
                return (e = a.current()) ? t = e.route.getName() : void 0 }, o.autorun(function() {
                var e;
                return (e = l()) ? t.subscribe("seoByRouteName", e) : void 0 }), o.autorun(function() {
                var t, e;
                if (n) return t = l(), e = SeoCollection.findOne({ route_name: t }) || {}, n.set(e) }) }.call(this), "undefined" == typeof Package && (Package = {}), Package["manuelschoebel:ms-seo"] = {} }();

! function() {
    var e = Package.meteor.Meteor,
        t = Package.underscore._,
        n;
    (function() { n = { _isCssLoaded: function() {
                return 0 === document.styleSheets.length ? !0 : t.find(document.styleSheets, function(e) {
                    return e.cssText && !e.cssRules ? !e.cssText.match(/meteor-css-not-found-error/) : !t.find(e.cssRules, function(e) {
                        return ".meteor-css-not-found-error" === e.selectorText }) }) } } }).call(this), "undefined" == typeof Package && (Package = {}), Package.webapp = { WebApp: n } }();

! function() {
    var e = Package.meteor.Meteor,
        a = Package.underscore._,
        c = Package["reactive-dict"].ReactiveDict,
        n = Package.ejson.EJSON,
        i;
    (function() { i = new c("session") }).call(this), "undefined" == typeof Package && (Package = {}), Package.session = { Session: i } }();

! function() {
    var a = Package.meteor.Meteor,
        e = Package.ddp.DDP,
        e, t; "undefined" == typeof Package && (Package = {}), Package.livedata = { DDP: e, LivedataTest: t } }();

! function() {
    var t = Package.meteor.Meteor,
        e = Package.htmljs.HTML,
        n = Package.tracker.Tracker,
        a = Package.tracker.Deps,
        r = Package.blaze.Blaze,
        u = Package.blaze.UI,
        i = Package.blaze.Handlebars,
        o = Package["observe-sequence"].ObserveSequence,
        c = Package.templating.Template,
        l = Package.underscore._,
        f;
    (function() { f = {};
        var t = function(t, e) {
            return t === e };
        f.include = function(e, n, a) {
            if (!e) return null;
            if ("function" != typeof e) {
                var u = e;
                if (!r.isTemplate(u)) throw new Error("Expected template or null, found: " + u);
                return e.constructView(n, a) }
            var i = r.ReactiveVar(null, t),
                o = r.View("Spacebars.include", function() {
                    var t = i.get();
                    if (null === t) return null;
                    if (!r.isTemplate(t)) throw new Error("Expected template or null, found: " + t);
                    return t.constructView(n, a) });
            return o.__templateVar = i, o.onViewCreated(function() { this.autorun(function() { i.set(e()) }) }), o }, f.mustacheImpl = function(t) {
            var e = arguments;
            if (e.length > 1) {
                var n = e[e.length - 1];
                if (n instanceof f.kw) {
                    var a = {};
                    for (var r in n.hash) {
                        var u = n.hash[r];
                        a[r] = "function" == typeof u ? u() : u }
                    e[e.length - 1] = f.kw(a) } else n = f.kw(), e = Array.prototype.slice.call(arguments), e.push(n) }
            return f.call.apply(null, e) }, f.mustache = function(t) {
            var n = f.mustacheImpl.apply(null, arguments);
            return n instanceof f.SafeString ? e.Raw(n.toString()) : null == n || n === !1 ? null : String(n) }, f.attrMustache = function(t) {
            var n = f.mustacheImpl.apply(null, arguments);
            if (null == n || "" === n) return null;
            if ("object" == typeof n) return n;
            if ("string" == typeof n && e.isValidAttributeName(n)) {
                var a = {};
                return a[n] = "", a }
            throw new Error("Expected valid attribute name, '', null, or object") }, f.dataMustache = function(t) {
            var e = f.mustacheImpl.apply(null, arguments);
            return e }, f.makeRaw = function(t) {
            return null == t ? null : t instanceof e.Raw ? t : e.Raw(t) }, f.call = function(t) {
            if ("function" == typeof t) {
                for (var e = [], n = 1; n < arguments.length; n++) {
                    var a = arguments[n];
                    e[n - 1] = "function" == typeof a ? a() : a }
                return t.apply(null, e) }
            if (arguments.length > 1) throw new Error("Can't call non-function: " + t);
            return t }, f.kw = function(t) {
            return this instanceof f.kw ? void(this.hash = t || {}) : new f.kw(t) }, f.SafeString = function(t) {
            return this instanceof f.SafeString ? new i.SafeString(t) : new f.SafeString(t) }, f.SafeString.prototype = i.SafeString.prototype, f.dot = function(t, e) {
            if (arguments.length > 2) {
                var n = [];
                return n.push(f.dot(t, e)), n.push.apply(n, Array.prototype.slice.call(arguments, 2)), f.dot.apply(null, n) }
            if ("function" == typeof t && (t = t()), !t) return t;
            var a = t[e];
            return "function" != typeof a ? a : function() {
                return a.apply(t, arguments) } }, f.With = function(t, e, a) {
            var u = new r.ReactiveVar,
                i = r.View("Spacebars_with", function() {
                    return r.If(function() {
                        return u.get() }, function() {
                        return r.With(function() {
                            return u.get() }, e) }, a) });
            return i.onViewCreated(function() { this.autorun(function() { u.set(t()), n.onInvalidate(function() { u.dep.changed() }) }) }), i }, f.TemplateWith = r._TemplateWith }).call(this),
        function() { c.__checkName("__dynamic"), c.__dynamic = new c("Template.__dynamic", function() {
                var t = this;
                return [r.View("lookup:checkContext", function() {
                    return f.mustache(t.lookup("checkContext")) }), "\n  ", r.If(function() {
                    return f.call(t.lookup("dataContextPresent")) }, function() {
                    return ["\n    ", f.include(t.lookupTemplate("__dynamicWithDataContext")), "\n  "] }, function() {
                    return ["\n    \n    ", r._TemplateWith(function() {
                        return { template: f.call(t.lookup("template")), data: f.call(t.lookup("..")) } }, function() {
                        return f.include(t.lookupTemplate("__dynamicWithDataContext")) }), "\n  "] })] }), c.__checkName("__dynamicWithDataContext"), c.__dynamicWithDataContext = new c("Template.__dynamicWithDataContext", function() {
                var t = this;
                return f.With(function() {
                    return f.dataMustache(t.lookup("chooseTemplate"), t.lookup("template")) }, function() {
                    return ["\n    ", r._TemplateWith(function() {
                        return f.call(f.dot(t.lookup(".."), "data")) }, function() {
                        return f.include(t.lookupTemplate("..")) }), "    \n  "] }) }) }.call(this),
        function() { c.__dynamicWithDataContext.helpers({ chooseTemplate: function(t) {
                    return c[t] || null } }), c.__dynamic.helpers({ dataContextPresent: function() {
                    return l.has(this, "data") }, checkContext: function() {
                    if (!l.has(this, "template")) throw new Error("Must specify name in the 'template' argument to {{> Template.dynamic}}.");
                    l.each(this, function(t, e) {
                        if ("template" !== e && "data" !== e) throw new Error("Invalid argument to {{> Template.dynamic}}: " + e) }) } }) }.call(this), "undefined" == typeof Package && (Package = {}), Package.spacebars = { Spacebars: f } }();

! function() {
    var e = Package.meteor.Meteor,
        n;
    (function() {
        var a = 0,
            r = !1;
        n = { hold: function() {
                if (!e.isCordova) return { release: function() {} };
                if (r) throw new Error("Can't show launch screen once it's hidden");
                a++;
                var n = !1,
                    t = function() { e.isCordova && (n || (a--, 0 === a && "undefined" != typeof navigator && navigator.splashscreen && (r = !0, navigator.splashscreen.hide()))) };
                return { release: t } } } }).call(this),
        function() {
            var a = n.hold(),
                r = Package.templating && Package.templating.Template;
            e.startup(function() { r ? Package["iron:router"] ? Package["iron:router"].Router.onAfterAction(function() { a.release() }) : (r.body.onRendered(function() { a.release() }), setTimeout(function() { a.release() }, 6e3)) : a.release() }) }.call(this), "undefined" == typeof Package && (Package = {}), Package["launch-screen"] = { LaunchScreen: n } }();

YT = Package["adrianliaw:youtube-iframe-api"].YT, YTConfig = Package["adrianliaw:youtube-iframe-api"].YTConfig, Router = Package["iron:router"].Router, RouteController = Package["iron:router"].RouteController, LocalStore = Package["frozeman:storage"].LocalStore, Spiderable = Package.spiderable.Spiderable, Meteor = Package.meteor.Meteor, WebApp = Package.webapp.WebApp, Log = Package.logging.Log, Tracker = Package.deps.Tracker, Deps = Package.deps.Deps, Session = Package.session.Session, DDP = Package.livedata.DDP, Mongo = Package.mongo.Mongo, Blaze = Package.ui.Blaze, UI = Package.ui.UI, Handlebars = Package.ui.Handlebars, Spacebars = Package.spacebars.Spacebars, Template = Package.templating.Template, check = Package.check.check, Match = Package.check.Match, _ = Package.underscore._, $ = Package.jquery.$, jQuery = Package.jquery.jQuery, Random = Package.random.Random, EJSON = Package.ejson.EJSON, LaunchScreen = Package["launch-screen"].LaunchScreen, Iron = Package["iron:core"].Iron, HTML = Package.htmljs.HTML;

! function() { Template.__checkName("longread"), Template.longread = new Template("Template.longread", function() {
        var a = this;
        return HTML.DIV({ "class": "longread" }, Spacebars.With(function() {
            return Spacebars.call(a.lookup("data")) }, function() {
            return [HTML.DIV({ id: "slide01", "class": ["block", " ", "red", " ", "active"] }, HTML.DIV({ "class": "container" }, HTML.H1(Blaze.View("lookup:slide01.h1", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide01"), "h1"))) })), "\n", HTML.H3(Blaze.View("lookup:slide01.h3", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide01"), "h3"))) })), "\n", HTML.A({ "class": ["h3", " ", "btn", " ", "pointer"], href: function() {
                    return Spacebars.mustache(a.lookup("projectsurl")) }, target: "_blank" }, Blaze.View("lookup:slide01.btn", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide01"), "btn"))) }))), "\n", HTML.DIV({ "class": "btm_hint" }, HTML.DIV({ "class": "arrow" }), "\n", Blaze.View("lookup:slide01.hint", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide01"), "hint"))) })), "\n", HTML.A({ "class": ["switch_lang", " ", "pointer"], href: function() {
                    return ["/", Spacebars.mustache(a.lookup("new_lang"))] } }, Blaze.View("lookup:switch_lang", function() {
                return Spacebars.mustache(a.lookup("switch_lang")) }))), HTML.DIV({ id: "slide02", "class": ["block", " ", "red"] }, HTML.DIV({ "class": "container" }, HTML.H2(Blaze.View("lookup:slide02.h2", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide02"), "h2"))) })), "\n", HTML.DIV({ "class": "inner" }, HTML.DIV({ "class": "box" }, Blaze.View("lookup:slide02.text1", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide02"), "text1"))) })), "\n", HTML.DIV({ "class": "box" }, Blaze.View("lookup:slide02.text2", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide02"), "text2"))) }))))), HTML.DIV({ id: "slide03", "class": ["block", " ", "black"] }, HTML.DIV({ "class": "video_layer" }, HTML.DIV({ "class": ["exit", " ", "pointer"] }, "✕"), "\n", HTML.DIV({ id: "player" })), "\n", HTML.DIV({ "class": "bg" }), "\n", HTML.DIV({ "class": "container" }, HTML.H2({ "class": ["pointer", " ", "play"] }, Blaze.View("lookup:slide03.btn", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide03"), "btn"))) })))), HTML.DIV({ id: "slide04", "class": ["block", " ", "black"] }, HTML.DIV({ "class": "container" }, HTML.H2(Blaze.View("lookup:slide04.h2", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide04"), "h2"))) })), "\n", HTML.DIV({ "class": "inner" }, Blaze.Each(function() {
                return Spacebars.call(Spacebars.dot(a.lookup("slide04"), "blocks")) }, function() {
                return HTML.DIV({ "class": "box" }, HTML.H3(Blaze.View("lookup:.", function() {
                    return Spacebars.makeRaw(Spacebars.mustache(a.lookup("."))) })), "\n", HTML.DIV({ "class": "plus" })) })), "\n", HTML.DIV({ "class": "inner2" }, HTML.DIV({ "class": "box2" }, Blaze.View("lookup:slide04.text1", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide04"), "text1"))) })), "\n", HTML.DIV({ "class": "box2" }, Blaze.View("lookup:slide04.text2", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide04"), "text2"))) }))))), HTML.DIV({ id: "slide05", "class": ["block", " ", "red"] }, HTML.DIV({ "class": "container" }, HTML.H2(Blaze.View("lookup:slide05.h2", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide05"), "h2"))) })), "\n", Blaze.Each(function() {
                return Spacebars.call(Spacebars.dot(a.lookup("slide05"), "blocks")) }, function() {
                return [HTML.DIV({ "class": "period_image", style: function() {
                        return ["background-image:url('/pictures/", Spacebars.mustache(a.lookup("img")), "')"] } }), HTML.H3(Blaze.View("lookup:h3", function() {
                    return Spacebars.makeRaw(Spacebars.mustache(a.lookup("h3"))) })), HTML.DIV({ "class": "hint" }, Blaze.View("lookup:hint", function() {
                    return Spacebars.makeRaw(Spacebars.mustache(a.lookup("hint"))) })), HTML.DIV({ "class": "text" }, Blaze.View("lookup:text", function() {
                    return Spacebars.makeRaw(Spacebars.mustache(a.lookup("text"))) })), HTML.DIV({ "class": "vertical_line" })] }))), HTML.DIV({ id: "slide06", "class": ["block", " ", "white"] }, HTML.DIV({ "class": "bg" }), "\n", HTML.DIV({ "class": "container" }, HTML.H2(Blaze.View("lookup:slide06.h2", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide06"), "h2"))) })), "\n", HTML.DIV({ "class": "inner" }, HTML.DIV({ "class": "box" }, HTML.DIV({ "class": "text" }, Blaze.View("lookup:slide06.block01.text", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide06"), "block01", "text"))) }))), "\n", HTML.DIV({ "class": ["box", " ", "list"] }, HTML.DIV({ "class": "text" }, Blaze.View("lookup:slide06.block02.text", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide06"), "block02", "text"))) })))), "\n", HTML.A({ "class": ["btn", " ", "pointer"], href: function() {
                    return Spacebars.mustache(a.lookup("archiveurl")) }, target: "_blank" }, Blaze.View("lookup:slide06.btn", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide06"), "btn"))) })))), HTML.DIV({ id: "slide08", "class": ["block", " ", "grey"] }, HTML.DIV({ "class": "container" }, HTML.H2(Blaze.View("lookup:slide08.h2", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide08"), "h2"))) })), "\n", HTML.DIV({ "class": "text" }, Blaze.View("lookup:slide08.text", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide08"), "text"))) })), "\n", HTML.DIV({ "class": "box" }, HTML.H2({ "class": "summ" }, Blaze.View("lookup:slide08.summ", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide08"), "summ"))) })), "\n", HTML.DIV({ "class": "hint" }, Blaze.View("lookup:slide08.hint", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide08"), "hint"))) }))))), HTML.DIV({ id: "slide09", "class": ["block", " ", "red"] }, HTML.DIV({ "class": "container" }, HTML.H2(Blaze.View("lookup:slide09.h2", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide09"), "h2"))) })), "\n", HTML.DIV({ "class": "inner" }, Blaze.Each(function() {
                return Spacebars.call(Spacebars.dot(a.lookup("slide09"), "blocks")) }, function() {
                return HTML.DIV({ "class": "box" }, HTML.H3(Blaze.View("lookup:h3", function() {
                    return Spacebars.makeRaw(Spacebars.mustache(a.lookup("h3"))) })), "\n", HTML.DIV({ "class": "text" }, Blaze.View("lookup:text", function() {
                    return Spacebars.makeRaw(Spacebars.mustache(a.lookup("text"))) }))) })))), HTML.DIV({ id: "slide10", "class": ["block", " ", "red"] }, HTML.DIV({ "class": "container" }, HTML.DIV({ "class": "inner" }, HTML.DIV({ "class": "box" }, HTML.H2(Blaze.View("lookup:slide10.block01.h2", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide10"), "block01", "h2"))) })), "\n", Blaze.Each(function() {
                return Spacebars.call(Spacebars.dot(a.lookup("slide10"), "block01", "paragraphs")) }, function() {
                return HTML.P(Blaze.View("lookup:.", function() {
                    return Spacebars.makeRaw(Spacebars.mustache(a.lookup("."))) })) })), "\n", HTML.DIV({ "class": "box" }, HTML.H2(Blaze.View("lookup:slide10.block02.h2", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide10"), "block02", "h2"))) })), "\n", Blaze.Each(function() {
                return Spacebars.call(Spacebars.dot(a.lookup("slide10"), "block02", "list")) }, function() {
                return HTML.P(Blaze.View("lookup:.", function() {
                    return Spacebars.makeRaw(Spacebars.mustache(a.lookup("."))) })) }))))), HTML.DIV({ id: "slide11", "class": ["block", " ", "red"] }, HTML.DIV({ "class": "container" }, HTML.DIV({ "class": "inner" }, HTML.H2(Blaze.View("lookup:slide11.h2", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide11"), "h2"))) })), "\n", HTML.DIV({ "class": "box" }, Blaze.Each(function() {
                return Spacebars.call(Spacebars.dot(a.lookup("slide11"), "block02", "list")) }, function() {
                return HTML.P(Blaze.View("lookup:.", function() {
                    return Spacebars.makeRaw(Spacebars.mustache(a.lookup("."))) })) })), "\n", HTML.DIV({ "class": "box" }, Blaze.Each(function() {
                return Spacebars.call(Spacebars.dot(a.lookup("slide11"), "block01", "list")) }, function() {
                return HTML.P(Blaze.View("lookup:.", function() {
                    return Spacebars.makeRaw(Spacebars.mustache(a.lookup("."))) })) }))))), HTML.DIV({ id: "slide12", "class": ["block", " ", "white"] }, HTML.DIV({ "class": "container" }, HTML.A({ "class": "logo", href: function() {
                    return Spacebars.mustache(a.lookup("strelkaurl")) } }), "\n", HTML.H1(Blaze.View("lookup:slide12.h1", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide12"), "h1"))) })), "\n", HTML.A({ "class": ["h3", " ", "btn", " ", "pointer"], href: function() {
                    return Spacebars.mustache(a.lookup("applyurl")) }, target: "_blank" }, Blaze.View("lookup:slide12.btn", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide12"), "btn"))) }))), "\n", HTML.DIV({ "class": "btm_hint" }, HTML.A({ href: "mailto:apply@strelka.com" }, Blaze.View("lookup:slide12.btm_hint", function() {
                return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(a.lookup("slide12"), "btm_hint"))) }))))] })) }) }();

! function() { Template.__checkName("navbar"), Template.navbar = new Template("Template.navbar", function() {
        var a = this;
        return HTML.DIV({ "class": "navbar" }, Blaze.Each(function() {
            return Spacebars.call(a.lookup("navs")) }, function() {
            return [HTML.A({ href: function() {
                    return ["#", Spacebars.mustache(a.lookup("key"))] } }, Blaze.View("lookup:title", function() {
                return Spacebars.mustache(a.lookup("title")) })), " "] })) }) }();

! function() { Meteor.startup(function() { $("body").attr({}) }), Template.body.addContent(function() {
        var t = this;
        return "" }), Meteor.startup(Template.body.renderToDocument), Template.__checkName("notFound"), Template.notFound = new Template("Template.notFound", function() {
        var t = this;
        return "notFound" }) }();

! function() { data_en = { applyurl: "http://strelka.com/en/education/apply", projectsurl: "http://hybridurbanism.special.strelka.com", archiveurl: "http://strelka.com/en/research", switch_lang: "русская версия", slide01: { h1: "HYBRID URBANISM", h3: "Strelka education programme 2015/16", description: "Strelka education programme is a post-graduate experimental course which aims to explore the challenges facing the city today and educate the next generation of urbanists.", btn: "See Final Projects", hint: "or learn more" }, slide02: { title: "programme", h2: "programme 2015/16", text1: "<p>Strelka education programme is&nbsp;a&nbsp;<nobr>post-graduate</nobr> experimental course which aims to&nbsp;explore the challenges facing the city today and educate the next generation of&nbsp;urbanists. Strelka&rsquo;s education focuses on&nbsp;research and design for the city and employs tools and approaches from a&nbsp;wide variety of&nbsp;disciplines.</p> <p>In&nbsp;its sixth year Strelka education programme brings together urbanism, digital thinking and personal development. What we&nbsp;call &lsquo;hybrid urbanism&rsquo; sets out to&nbsp;explore the space in&nbsp;which the physical and virtual urban environments meet.</p>", text2: "<p>The programme focuses on&nbsp;applying digital thinking and tools to&nbsp;physical environment and through that finding new solutions to&nbsp;complex urban issues. It&nbsp;also centers on&nbsp;the students&rsquo; personal and career development and utilizes best practices of&nbsp;project management and leadership training.</p> <p>The programme is&nbsp;project-based and runs for 5&nbsp;months, combining intensive on-campus training with field trips, internship, and prototype work. The working language of&nbsp;the programme is&nbsp;English. </p>" }, slide03: { btn: "watch the video" }, slide04: { h2: "the&nbsp;programme is&nbsp;focused&nbsp;on", blocks: ["urban", "digital", "you&nbsp;are <br>your&nbsp;own <br>project"], text1: "<p>The programme is&nbsp;centered on&nbsp;challenging you to&nbsp;grow personally and professionally by&nbsp;learning and practicing self&shy;awareness and self&shy;leadership, acquiring tools and techniques to&nbsp;develop their abilities and promote their career.</p>", text2: "<p>Immersed in&nbsp;collaborative and high&shy;energy learning environment, you will be&nbsp;exposed to&nbsp;newest leadership and project management methods and, guided by&nbsp;the professional career coaches, will form their own leadership styles and toolbox.</p>" }, slide05: { title: "timeline", h2: "Structure&nbsp;of <br>the&nbsp;Programme", blocks: [{ h3: "On­-campus learning", hint: "9 weeks Oct 19 – Dec 18", img: "enter-10_2-02.png", text: "<p>Intensive series of&nbsp;exercises that pulls together urban design and digital thinking;</p> <p>Wide network of&nbsp;experts, theorists and practitioners;</p> <p>Personal and professional development.</p>" }, { h3: "Internship", hint: "8 weeks Jan 11 – Mar 4", img: "enter-8_edited-05.png", text: "<p>Professional practice with a&nbsp;company from Strelka&rsquo;s local or&nbsp;international network;</p> <p>Opportunity to&nbsp;work on&nbsp;a&nbsp;real-life urban-related project;</p> <p>On-the-job mentoring and supervision.</p>" }, { h3: "Prototype Race", hint: "5 weeks Mar 10 – Apr 12", img: "enter-10_2-06.png", text: "<p>Introduction to&nbsp;building prototypes, tools and techniques;</p> <p>Development of&nbsp;a&nbsp;prototype;</p> <p>Presentation to&nbsp;international jury.</p>" }] }, slide06: { title: "graduates", h2: "After strelka", block01: { text: "<p>After graduating the programme you will become a&nbsp;new kind of&nbsp;professional who is&nbsp;no&nbsp;longer limited by&nbsp;a&nbsp;particular occupation; you will no&nbsp;longer be&nbsp;just an&nbsp;architect, UX&nbsp;designer or&nbsp;economist.</p> <p>In&nbsp;5&nbsp;months you will expand your professional training and acquire skills and methods that will enable you to&nbsp;create and apply multifunctional and multidisciplinary solutions to&nbsp;current urban problems.</p>" }, block02: { text: "<p>Strelka graduates are in&nbsp;high demand in&nbsp;urban design and urban consultancy bureaus, city municipalities, urban and cultural institutions; many work on&nbsp;projects for top consultancy companies, in&nbsp;start-ups and service companies or&nbsp;launch their own projects, teach and write for urban publishers.</p>" }, btn: "see students' projects" }, slide08: { title: "scolarship", h2: "Why the programme is&nbsp;free", text: "<p>Today quality education is&nbsp;no&nbsp;longer a&nbsp;privilege but a&nbsp;matter of&nbsp;professional survival. Strelka believes in&nbsp;supporting the world&rsquo;s talented and dedicated through the education that will help them launch or&nbsp;upgrade an&nbsp;exciting career and make a&nbsp;positive change happen. This is&nbsp;why Strelka education programme is&nbsp;free of&nbsp;charge and all the students receive scholarship.</p>", summ: "39200", hint: "Monthly scholarship" }, slide09: { title: "admission", h2: "Who should apply", blocks: [{ h3: "Young professionals", text: "With an&nbsp;experience of&nbsp;working in&nbsp;urban-related projects or&nbsp;interest for working with the city, who are looking for new career opportunities." }, { h3: "Architects, urbanists and urban designers", text: "Who want to&nbsp;upgrade and expand their professional skills and understanding of&nbsp;the city." }, { h3: "Digital media specialists", text: "Who are interested in&nbsp;designing urban services." }, { h3: "Young professionals", text: "Who wish for personal and career development, want to&nbsp;learn self-leadership and develop project management skills." }] }, slide10: { block01: { h2: "Admissions <br>process", paragraphs: ["Application Deadline <h4>September 5</h4><span>for international applicants</span><h4>September 14</h4><span>for applicants from Russia and CIS</span>", "Portfolio Review <h4>Mid-September</h4>", "<div class='small'>The Admissions Committee reviews the applications and sends out invitations for Admissions Event or&nbsp;Skype interviews.</div>", "Admissions Event or&nbsp;Skype Interview <h4>Late September</h4>", "Class 2015/16&nbsp;Confirmed <h4>October&nbsp;1</h4>", "<div class='small'>All accepted students receive official confirmations and instructions for next steps and visas.</div>"] }, block02: { h2: "Application <br>requirements", list: ["– Completed undergraduate degree;", "– Fluent English;", "– Age 25 to 35 y.o;", "– Good self-organization and self-motivation."] } }, slide11: { h2: "Documents", block01: { list: ["– A completed application form;", "– A&nbsp;portfolio containing examples of&nbsp;projects and/or research work (PDF, not exceeding a&nbsp;total of&nbsp;10&nbsp;pages) with the focus on&nbsp;city projects and/or digital;", "– A&nbsp;certificate confirming English proficiency for non-native speakers (IELTS Academic&nbsp;&mdash; 6.5, TOEFL&nbsp;&mdash; 85).<div class='small'>If you do&nbsp;not have a&nbsp;possibility to&nbsp;take an&nbsp;IELTS or&nbsp;TOEFL test, you can pass the test with our partners ITC English. Please contact Evgeniya Golovacheva at&nbsp;<a href='e.golovacheva@itc­english.com'>e.golovacheva@itc&shy;english.com</a> or&nbsp;+7 (926) 557 20&nbsp;86.</div>"] }, block02: { list: ["– Motivation letter;", "– A copy of university diploma;", "– A&nbsp;letter of&nbsp;recommendation from a&nbsp;former employer or&nbsp;internship coordinator;", "– Passport scan."] } }, slide12: { title: "apply", h1: "Apply for 2017/18", btn: "Learn More", btm_hint: "have questions? ask here" } } }();

! function() { data_ru = { applyurl: "http://strelka.com/ru/education/apply", projectsurl: "http://hybridurbanism.special.strelka.com/ru", archiveurl: "http://strelka.com/ru/research", switch_lang: "english version", slide01: { h1: "Гибридный урбанизм", h3: "Образовательная программа «Стрелки» 2015/16", description: "Образовательная программа Института медиа, архитектуры и дизайна «Стрелка» – это профессиональное образование в области городского развития и digital-проектов, раскрывающее лидерские и проектные навыки студентов.", btn: "Финальные проекты", hint: "или узнать больше" }, slide02: { title: "программа", h2: "Программа 2015/16", text1: "<p>Образовательная программа Института медиа, архитектуры и&nbsp;дизайна &laquo;Cтрелка&raquo;&nbsp;&mdash; это профессиональное образование в&nbsp;области городского развития и&nbsp;digital-проектов, раскрывающее лидерские и&nbsp;проектные навыки студентов. </p> <p>Пятимесячная постдипломная программа на английском языке включает в&nbsp;себя два месяца интенсивного обучения, два месяца стажировки в&nbsp;российских и&nbsp;международных компаниях, работающих с&nbsp;городом, и&nbsp;заключительный месяц прототипирования продуктов&nbsp;&mdash; результатов студенческих проектов.</p>", text2: "<p>Программа призвана развить потенциал студентов из&nbsp;разных областей и&nbsp;научить их&nbsp;работать с&nbsp;городской тематикой, используя комплексный подход и&nbsp;лучшие практики современного управления.</p> <p>&laquo;Гибридный урбанизм&raquo;&nbsp;&mdash; это возможность применить digital-мышление и&nbsp;новые технологии для анализа и&nbsp;поиска решений для современных городов. В&nbsp;новом учебном году программа построена на&nbsp;множестве городских кейсов, полевых исследований и&nbsp;упражнений, призванных научить студентов применять digital инструменты для анализа городских процессов, работать с&nbsp;большими объемами данных, находить идеи и&nbsp;создавать городские сервисы и&nbsp;проекты.</p>" }, slide03: { btn: "Посмотреть видео" }, slide04: { h2: "Фокус программы", blocks: ["урбанистика", "DIGITAL", "Ты и&nbsp;твой <br>проект"], text1: "<p>Центральное место в&nbsp;программе занимает модуль, посвященный личностному росту и&nbsp;карьерному развитию студентов. Сегодня очевидно, что способность к&nbsp;постоянному обучению, восприимчивость к&nbsp;новому и&nbsp;осознанное планирование карьеры лежат в&nbsp;основе профессионального развития и&nbsp;успеха. </p>", text2: "<p>В&nbsp;течение пяти месяцев студенты пройдут через серию специально разработанных упражнений на&nbsp;развитие лидерских навыков, понимание собственной роли в&nbsp;командной работе, определят сферы своих профессиональных интересов и&nbsp;направления дальнейшего профессионального развития.</p>" }, slide05: { title: "структура", h2: "Структура образовательной программы", blocks: [{ h3: "Занятия в «Стрелке»", hint: "9 недель 19 Октября – 18 Декабря", img: "enter-10_2-02.png", text: "<p>Серия интенсивов и&nbsp;упражнений, совмещающих урбанистику и&nbsp;digital;</p> <p>Возможность поработать с&nbsp;экспертами и&nbsp;практиками из&nbsp;различных областей; </p> <p>Групповые и&nbsp;индивидуальные сессии, посвященные личностному и&nbsp;профессиональному развитию. </p>" }, { h3: "Стажировка", hint: "8 недель 11 Января – 4 Марта", img: "enter-8_edited-05.png", text: "<p>Профессиональная практика в&nbsp;российской или международной компании из&nbsp;нетворка &laquo;Стрелки&raquo;; </p> <p>Возможность поработать над реальным проектом, связанным с&nbsp;городской тематикой; </p> <p>Сопровождение профессиональных коучей и&nbsp;менторов на&nbsp;протяжении всей стажировки. </p>" }, { h3: "Прототипирование", hint: "5 недель 10 Марта – 12 Апреля", img: "enter-10_2-06.png", text: "<p>Технологии и&nbsp;инструменты прототипирования; </p> <p>Создание собственного прототипа; </p> <p>Презентация перед международным жюри. </p>" }] }, slide06: { title: "выпускники", h2: "Кем я стану, закончив программу", block01: { text: "<p>Закончив программу, вы&nbsp;станете профессионалом нового типа, который больше не&nbsp;ограничивается одной областью компетенций и&nbsp;не&nbsp;привязывается к&nbsp;конкретной профессии&nbsp;&mdash; программиста, архитектора или экономиста. Вы&nbsp;научитесь работать с&nbsp;различными клиентами, экспертами и&nbsp;областями знаний, рассматривать городские проблемы в&nbsp;глобальном контексте и&nbsp;искать для них многофункциональные решения на&nbsp;стыке самых разных дисциплин и&nbsp;методологий.</p>" }, block02: { text: "<p>Выпускники института работают в&nbsp;Министерстве культуры и&nbsp;Министерстве транспорта&nbsp;РФ, сотрудничают с&nbsp;городскими администрациями, возглавляют конкурсную практику, работают над проектами совместно с&nbsp;McKinsey и&nbsp;BCG, в&nbsp;международных и&nbsp;российских архитектурных и&nbsp;дизайнерских бюро (AMO, Herzog &amp;&nbsp;De&nbsp;Meuron, бюро &laquo;Меганом&raquo;), Институте &laquo;Стрелка&raquo; и&nbsp;КБ&nbsp;&laquo;Стрелка&raquo;, культурными и&nbsp;медиа институциями (Политехнический музей, ИД&nbsp;&laquo;Афиша&raquo;), сотрудничают с&nbsp;городскими изданиями в&nbsp;качестве экспертов и&nbsp;авторов, преподают и&nbsp;пишут&nbsp;книги. </p>" }, btn: "выпускные работы студентов прошлых лет" }, slide08: { title: "стипендия", h2: "Почему программа бесплатная", text: "<p>В&nbsp;современном мире качественное актуальное образование больше не&nbsp;является привилегией, но&nbsp;становится жизненной необходимостью, лежащей в&nbsp;основе любых положительных перемен. Каждый год мы&nbsp;набираем людей, профессиональных, увлеченных и&nbsp;ярких, и&nbsp;верим, что качественное образование должно быть доступно для всех, вне зависимости от&nbsp;финансового благосостояния. Поэтому образование на&nbsp;&laquo;Стрелке&raquo; бесплатное, а&nbsp;студентам выплачивается стипендия. </p>", summ: "39200", hint: "Ежемесячная стипендия" }, slide09: { title: "admission", h2: "На кого рассчитана программа", blocks: [{ h3: "На&nbsp;молодых профессионалов различных специальностей", text: "с&nbsp;опытом работы в&nbsp;окологородских проектах, ищущих новые карьерные перспективы и&nbsp;области для реализации;" }, { h3: "На&nbsp;архитекторов, урбанистов и&nbsp;градостроителей", text: "желающих повысить cвою квалификацию и&nbsp;освоить новые походы;" }, { h3: "На&nbsp;специалистов в&nbsp;области медиа", text: "<nobr>digital-коммуникаций</nobr> и&nbsp;<nobr>digital-продуктов</nobr>, интересующихся темой городского развития и&nbsp;сервисов;" }, { h3: "На&nbsp;всех, у&nbsp;кого есть активный запрос", text: "на&nbsp;личностный и&nbsp;профессиональный рост и&nbsp;самоорганизацию." }] }, slide10: { block01: { h2: "Как проходит отбор студентов", paragraphs: ["Окончание приема документов<h4>5 сентября</h4><span>для иностранных абитуриентов</span><h4>14&nbsp;сентября</h4><span>для России и&nbsp;стран СНГ</span>", "Отбор портфолио <h4>Середина сентября</h4><div class='small'>Если вы&nbsp;успешно прошли этот этап, вы&nbsp;получите письмо с&nbsp;приглашением на&nbsp;второй тур&nbsp;&mdash; отборочный воркшоп, который пройдет в&nbsp;конце сентября в&nbsp;институте &laquo;Стрелка&raquo; в&nbsp;Москве, или скайп-интервью.</div>", "Отборочный воркшоп <h4>Конец сентября</h4>", "Финальный список студентов 2015/16 <h4>1&nbsp;октября</h4><div class='small'>Если вы&nbsp;прошли отбор, вы&nbsp;получите официальное письмо с&nbsp;подтверждением на&nbsp;электронную почту.</div>"] }, block02: { h2: "Требования к поступающим", list: ["– Законченное высшее образование;", "– Свободный английский;", "– Возраст от&nbsp;25&nbsp;до&nbsp;35&nbsp;лет;", "– Высокая мотивация и&nbsp;самоорганизация."] } }, slide11: { h2: "Необходимые документы", block01: { list: ["– Заполненная <a href='https://apply.strelkainstitute.com' target='_blank' style='text-decoration:none; padding:0; margin:0;'>веб-анкета</a>;", "– Портфолио на&nbsp;английском языке, в&nbsp;формате PDF, не&nbsp;длинее 10&nbsp;страниц. Портфолио должно содержать примеры проектов и/или исследовательских работ, выполненных вами в&nbsp;последние годы, и&nbsp;демонстрировать ваши навыки и&nbsp;интересы.", "– Мотивационное письмо;", "– Копия диплома о&nbsp;высшем образовании;", "– Рекомендательное письмо от&nbsp;работодателя и/или научного руководителя;"] }, block02: { list: ["– Отсканированные изображения российского и&nbsp;заграничного паспортов;", "– Сертификат, подтверждающий знание английского языка. В&nbsp;качестве подтверждения принимаются сертификаты TOEFL (min 85), IELTS (min 6.5), а&nbsp;также дипломы лингвистических вузов. <div class='small'>Если у&nbsp;вас нет возможности получить сертификат IELTS или TOEFL, вы&nbsp;можете пройти текст у&nbsp;наших партнеров ITC English. Для этого свяжитесь с&nbsp;Евгенией Головачевой: <a href='e.golovacheva@itc­english.com'>e.golovacheva@itc&shy;english.com</a> +7 (926) 557 20&nbsp;86.</div>"] } }, slide12: { title: "Подать заявку", h1: "Поступи в 2017/18", hint: "или войти", btn: "Подробнее", btm_hint: "Остались вопросы? Спросите" } } }();

! function() { Router.configure({ trackPageView: !0, notFoundTemplate: "notFound" }), Router.map(function() { this.route("longread", { path: "/", template: "longread", data: !0, onAfterAction: function() {
                if (Meteor.isClient) {
                    var t = data_en.slide01.h3,
                        e = data_en.slide01.description;
                    SEO.set({ title: t, meta: { description: e }, og: { title: t, image: "http://" + window.location.host + "/pictures/banner_site-3-02.png", description: e } }) } }, trackPageView: !0 }), this.route("longread_ru", { path: "/ru", template: "longread", onBeforeAction: function() { LocalStore.set("lang", "ru"), this.next() }, onAfterAction: function() {
                if (Meteor.isClient) {
                    var t = data_ru.slide01.h3,
                        e = data_ru.slide01.description;
                    SEO.set({ title: t, meta: { description: e }, og: { title: t, image: "http://" + window.location.host + "/pictures/banner_site-3-02.png", description: e } }) } }, data: !0, trackPageView: !0 }), this.route("longread_en", { path: "/en", template: "longread", onBeforeAction: function() { LocalStore.set("lang", "en"), this.next() }, onAfterAction: function() {
                if (Meteor.isClient) {
                    var t = data_en.slide01.h3,
                        e = data_en.slide01.description;
                    SEO.set({ title: t, meta: { description: e }, og: { title: t, image: "http://" + window.location.host + "/pictures/banner_site-3-02.png", description: e } }) } }, data: !0, trackPageView: !0 }) }) }();

! function() {
    function n(n) {
        var e = !1;
        return function() {
            if (!e) {
                var o = this;
                e = !0, window.requestAnimationFrame(function() { e = !1, n.apply(o, arguments) }) } } }
    var e = window.jQuery,
        o = window.Template,
        t = window.LocalStore,
        i = window.Router,
        l = window.ga,
        a = e(window),
        c = null;
    o.notFound.onRendered(function() { i.go("/") }), o.longread.helpers({ data: function() {
            return "ru" === t.get("lang") ? data_ru : data_en }, new_lang: function() {
            var n = t.get("lang");
            return "ru" === n ? "en" : "ru" } }), o.longread.events({ "click .switch_lang": function() { l("send", "event", "button", "click", "switch_lang") }, "click #slide03 .play": function(n) { e(n.currentTarget).closest(".block").addClass("play"), window.requestAnimationFrame(function() { c.playVideo() }), l("send", "event", "button", "click", "play") }, "click #slide03 .exit": function(n) { r() }, "click #slide01 .btn.pointer": function() {
            return l("send", "event", "button", "click", "applytop"), !0 }, "click #slide12 .btn.pointer": function() {
            return l("send", "event", "button", "click", "applybottom"), !0 } });
    var r = function() { e(".block.play").removeClass("play"), c.pauseVideo() };
    o.longread.onRendered(function() {
        function o(n) { c.playVideo(), c.pauseVideo(), c.seekTo(0, !0) }

        function t(n) { n && 0 == n.data && e(".block.play").removeClass("play") }
        e(".navbar a").bind("click", function(n) { e.scrollTo(n.target.hash, 250), n.preventDefault() }), p(), a.on("scroll.block", n(p)), window.onYouTubeIframeAPIReady = function(n) { c = new window.YT.Player("player", { height: "1280", width: "720", videoId: "_mEZ5XGcO1U", playerVars: { rel: 0, end: 78, showinfo: 0, autohide: 1, controls: 1, modestbranding: 1, hl: "en", fs: 1, playsinline: 0 }, events: { onReady: o, onStateChange: t } }) }, window.YT.load(), e(".play").hover(function() { e(this).closest(".block").addClass("scaled") }, function() { e(this).closest(".block").removeClass("scaled") }), e("#slide06 a.btn.pointer").hover(function() { e(this).closest(".block").addClass("hovered") }, function() { e(this).closest(".block").removeClass("hovered") }), e(document).on("keyup", function(n) { 27 === n.keyCode && r() }) });
    var d = !1,
        s = null,
        u = 0,
        p = function() {
            var n = a.scrollTop();
            return a.width() < 800 ? void e(".longread .block").addClass("active") : (e(".longread .block").each(function(o, t) {
                var i = t.getBoundingClientRect(),
                    l = n > u && i.top < a.height();
                l && (e(t).addClass("active"), clearTimeout(s), s = setTimeout(function() {
                    var n = t.getBoundingClientRect(),
                        o = n.top > 0 && n.top < .4 * a.height() && !d;
                    o && (d = !0, e("html, body").animate({ scrollTop: a.scrollTop() + n.top }, 400, function() { d = !1 })) }, 100)) }), void(u = n)) } }();

! function() { Template.navbar.helpers({ navs: function() {
            var t = [];
            for (var a in data) data.hasOwnProperty(a) && "undefined" != typeof data[a].title && t.push({ key: a, title: data[a].title });
            return t } }) }();



