google.maps.__gjsload__('stats', function(_) {
    var n_ = function(a, b, c) {
            var d = [];
            _.Hb(a, function(a, c) {
                d.push(c + b + a)
            });
            return d.join(c)
        },
        o_ = function(a, b, c, d) {
            var e = {};
            e.host = window.document.location && window.document.location.host || window.location.host;
            e.v = a;
            e.r = Math.round(1 / b);
            c && (e.client = c);
            d && (e.key = d);
            return e
        },
        p_ = function(a) {
            var b = {};
            _.Hb(a, function(a, d) {
                b[(0, window.encodeURIComponent)(d)] = (0, window.encodeURIComponent)(a).replace(/%7C/g, "|")
            });
            return n_(b, ":", ",")
        },
        r_ = function(a, b, c, d) {
            var e;
            e = _.J(_.R, 23, 500);
            var f;
            f = _.J(_.R, 22, 2);
            this.C = a;
            this.D = b;
            this.F = e;
            this.l = f;
            this.B = c;
            this.m = d;
            this.f = new _.dk;
            this.b = 0;
            this.j = _.Ka();
            q_(this)
        },
        q_ = function(a) {
            window.setTimeout(function() {
                s_(a);
                q_(a)
            }, Math.min(a.F * Math.pow(a.l, a.b), 2147483647))
        },
        t_ = function(a, b, c) {
            a.f.set(b, c)
        },
        s_ = function(a) {
            var b = o_(a.D, a.B, a.m, void 0);
            b.t = a.b + "-" + (_.Ka() - a.j);
            a.f.forEach(function(a, d) {
                a = a();
                0 < a && (b[d] = Number(a.toFixed(2)) + (_.Vk() ? "-if" : ""))
            });
            a.C.b({
                ev: "api_snap"
            }, b);
            ++a.b
        },
        u_ = function(a, b, c, d, e) {
            this.m = a;
            this.C = b;
            this.l = c;
            this.f = d;
            this.j = e;
            this.b = new _.dk;
            this.B =
                _.Ka()
        },
        v_ = function(a, b, c) {
            this.l = b;
            this.f = a + "/maps/gen_204";
            this.j = c
        },
        w_ = function() {
            this.b = new _.dk
        },
        x_ = function(a) {
            var b = 0,
                c = 0;
            a.b.forEach(function(a) {
                b += a.Lo;
                c += a.ko
            });
            return c ? b / c : 0
        },
        y_ = function(a, b, c, d) {
            this.j = a;
            _.z.bind(this.j, "set_at", this, this.l);
            _.z.bind(this.j, "insert_at", this, this.l);
            this.B = b;
            this.C = c;
            this.m = d;
            this.f = 0;
            this.b = {};
            this.l()
        },
        z_ = function(a, b, c, d, e) {
            this.B = a;
            this.C = b;
            this.m = c;
            this.j = d;
            this.l = e;
            this.f = {};
            this.b = []
        },
        A_ = function() {
            this.j = _.K(_.R, 6);
            this.b = new v_(_.qg[35] ? _.K(_.uf(_.R),
                11) : _.Wv, _.hj, window.document);
            new y_(_.Zi, (0, _.p)(this.b.b, this.b), _.Mf, !!this.j);
            var a = _.K(new _.of(_.R.data[3]), 1);
            this.C = a.split(".")[1] || a;
            this.D = {};
            this.B = {};
            this.m = {};
            this.F = {};
            this.G = _.J(_.R, 0, 1);
            _.gj && (this.l = new r_(this.b, this.C, this.G, this.j))
        };
    u_.prototype.D = function(a) {
        var b = void 0,
            b = _.m(b) ? b : 1;
        this.b.isEmpty() && window.setTimeout((0, _.p)(function() {
            var a = o_(this.C, this.l, this.f, this.j);
            a.t = _.Ka() - this.B;
            var b = this.b;
            _.ek(b);
            for (var e = {}, f = 0; f < b.b.length; f++) {
                var g = b.b[f];
                e[g] = b.H[g]
            }
            _.fz(a, e);
            this.b.clear();
            this.m.b({
                ev: "api_maprft"
            }, a)
        }, this), 500);
        b = this.b.get(a, 0) + b;
        this.b.set(a, b)
    };
    v_.prototype.b = function(a, b) {
        b = b || {};
        var c = _.Ml().toString(36);
        b.src = "apiv3";
        b.token = this.l;
        b.ts = c.substr(c.length - 6);
        a.cad = p_(b);
        a = n_(a, "=", "&");
        a = this.f + "?target=api&" + a;
        this.j.createElement("img").src = a;
        (b = _.Dc.__gm_captureCSI) && b(a)
    };
    w_.prototype.f = function(a, b, c) {
        this.b.set(_.Va(a), {
            Lo: b,
            ko: c
        })
    };
    y_.prototype.l = function() {
        for (var a; a = this.j.removeAt(0);) {
            var b = a.Nn;
            a = a.timestamp - this.C;
            ++this.f;
            this.b[b] || (this.b[b] = 0);
            ++this.b[b];
            if (20 <= this.f && !(this.f % 5)) {
                var c = {};
                c.s = b;
                c.sr = this.b[b];
                c.tr = this.f;
                c.te = a;
                c.hc = this.m ? "1" : "0";
                this.B({
                    ev: "api_services"
                }, c)
            }
        }
    };
    z_.prototype.D = function(a) {
        this.f[a] || (this.f[a] = !0, this.b.push(a), 2 > this.b.length && _.uz(this, this.F, 500))
    };
    z_.prototype.F = function() {
        for (var a = o_(this.C, this.m, this.j, this.l), b = 0, c; c = this.b[b]; ++b) a[c] = "1";
        a.hybrid = +_.Zk();
        this.b.length = 0;
        this.B.b({
            ev: "api_mapft"
        }, a)
    };
    A_.prototype.S = function(a) {
        a = _.Va(a);
        this.D[a] || (this.D[a] = new z_(this.b, this.C, this.G, this.j));
        return this.D[a]
    };
    A_.prototype.O = function(a) {
        a = _.Va(a);
        this.B[a] || (this.B[a] = new u_(this.b, this.C, 1, this.j));
        return this.B[a]
    };
    A_.prototype.f = function(a) {
        if (this.l) {
            this.m[a] || (this.m[a] = new _.uA, t_(this.l, a, function() {
                return b.nb()
            }));
            var b = this.m[a];
            return b
        }
    };
    A_.prototype.da = function(a) {
        if (this.l) {
            this.F[a] || (this.F[a] = new w_, t_(this.l, a, function() {
                return x_(b)
            }));
            var b = this.F[a];
            return b
        }
    };
    var B_ = new A_;
    _.xc("stats", B_);
});