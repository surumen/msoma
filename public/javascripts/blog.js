webpackJsonp([47], {
    0: function(h, k, d) {
        d(3355)
    },
    3355: function(h, k) {
        YUI.add("squarespace-blog-collection-list", function(d) {
            var e = d.config.win,
                h = e.document,
                f = d.Squarespace.Template.getTweakValue,
                l = function(a) {
                    if (a) {
                        for (var b = parseInt(f("tweak-blog-list-columns"), 10), c = parseInt(f("tweak-blog-list-spacing"), 10), d = parseFloat(e.getComputedStyle(a).width); 200 > (d - c * (b - 1)) / b;) b--;
                        a.setAttribute("data-columns", b)
                    }
                },
                m = function(a) {
                    if (a && (a = a.querySelectorAll(".BlogList-item-image img"), "true" === f("tweak-blog-list-item-image-show"))) {
                        var b =
                            "stacked" === f("tweak-blog-list-style").toLowerCase(),
                            c = "auto" === f("tweak-blog-list-item-image-aspect-ratio-stacked").toLowerCase();
                        if (b && c)
                            for (b = 0; b < a.length; b++) c = a[b], c.style.position = null, c.style.top = null, c.style.right = null, c.style.bottom = null, c.style.left = null, c.style.width = null, c.style.height = null, e.ImageLoader.load(c, {
                                load: !0,
                                mode: null
                            });
                        else
                            for (b = 0; b < a.length; b++) e.ImageLoader.load(a[b], {
                                load: !0,
                                mode: "fill"
                            })
                    }
                },
                n = !1,
                p, k = function(a) {
                    n || (n = !0);
                    p && clearTimeout(p);
                    p = setTimeout(function() {
                        l(a);
                        m(a);
                        n = !1
                    }, 100)
                },
                r = ["tweak-blog-list-columns", "tweak-blog-list-spacing"],
                s = "tweak-blog-list-style tweak-blog-list-columns tweak-blog-list-spacing tweak-blog-list-item-image-aspect-ratio-grid tweak-blog-list-item-image-aspect-ratio-stacked tweak-blog-list-item-image-show tweak-blog-list-item-image-width".split(" ");
            d.Global.on("tweak:change", function(a) {
                a = a.getName();
                0 <= r.indexOf(a) && l();
                0 <= s.indexOf(a) && m()
            });
            var g, q;
            d.config.win.Squarespace.onInitialize(d, function() {
                if (g = h.querySelector(".BlogList")) l(g),
                    m(g), q = k.bind(e, g), e.addEventListener("resize", q)
            });
            d.config.win.Squarespace.onDestroy(d, function() {
                e.removeEventListener("resize", q)
            })
        }, "1.0", {
            requires: []
        })
    }
});