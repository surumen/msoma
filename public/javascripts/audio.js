webpackJsonp([24], {
    0: function(k, f, c) {
        c(1757);
        c(1755);
        c(1839);
        c(1523);
        c(1799)
    },
    256: function(k, f, c) {
        var g = c(532),
            h = c(70);
        k.exports = function(e, b, d) {
            var a = !0,
                l = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            !1 === d ? a = !1 : h(d) && (a = "leading" in d ? !!d.leading : a, l = "trailing" in d ? !!d.trailing : l);
            return g(e, b, {
                leading: a,
                maxWait: +b,
                trailing: l
            })
        }
    },
    324: function(k, f, c) {
        var g = c(1412)["default"];
        f["default"] = function(c, e, b) {
            var d = !0;
            for (; d;)
                if (null === c && (c = Function.prototype), d = g(c, e), void 0 ===
                    d) {
                    c = Object.getPrototypeOf(c);
                    if (null === c) break;
                    d = !0
                } else {
                    if ("value" in d) return d.value;
                    e = d.get;
                    return void 0 === e ? void 0 : e.call(b)
                }
        };
        f.__esModule = !0
    },
    325: function(k, f, c) {
        var g = c(1411)["default"],
            h = c(1413)["default"];
        f["default"] = function(e, b) {
            if ("function" !== typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            e.prototype = g(b && b.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            });
            b && (h ? h(e, b) : e.__proto__ = b)
        };
        f.__esModule = !0
    },
    602: function(k, f, c) {
        f = c(1409);
        k.exports = new f
    },
    755: function(k, f, c) {
        var g = c(153)["default"],
            h = c(152)["default"],
            e = c(1405),
            b = c(1044);
        f = function() {
            function d() {
                h(this, d)
            }
            g(d, [{
                key: "connectToNode",
                value: function(a) {
                    var b = this;
                    this.container = a;
                    this.trackNodes = this.getTrackNodes(a);
                    a = this.trackNodes.map(this.getUrlFromTrackNode);
                    this.albumController = new e(a, {
                        handleTrackPositionChange: function(a, d, e) {
                            return b.handleTrackPositionChange(a, d, e)
                        },
                        handleCurrentTrackPositionChange: function(a, d) {
                            return b.handleCurrentTrackPositionChange(a,
                                d)
                        },
                        handleActiveTrackChange: function(a) {
                            return b.handleActiveTrackChange(a)
                        },
                        handlePlayingChange: function(a) {
                            return b.handlePlayingChange(a)
                        },
                        handleTrackDurationChange: function(a, d) {
                            return b.handleTrackDurationChange(a, d)
                        }
                    });
                    this.bindUIEvents()
                }
            }, {
                key: "getTrackNodes",
                value: function(a) {
                    a = a.querySelectorAll(".tracks .track");
                    for (var b = Array(a.length), d = 0; d < a.length; d++) b[d] = a[d];
                    return b
                }
            }, {
                key: "getUrlFromTrackNode",
                value: function(a) {
                    return a.querySelector(".link").getAttribute("href")
                }
            }, {
                key: "bindUIEvents",
                value: function() {
                    throw Error("Not implemented");
                }
            }, {
                key: "handleCurrentTrackPositionChange",
                value: function(a, b) {}
            }, {
                key: "handleTrackPositionChange",
                value: function(a, b, d) {}
            }, {
                key: "handleActiveTrackChange",
                value: function(a) {}
            }, {
                key: "handlePlayingChange",
                value: function(a) {
                    this.container.classList.toggle("playing", a);
                    this.container.classList.toggle("paused", !a)
                }
            }, {
                key: "handleTrackDurationChange",
                value: function(a, b) {}
            }, {
                key: "getScrubHandlerForTrack",
                value: function(a) {
                    var d = this.albumController,
                        e = b(function() {
                            d.skipToTrack(a);
                            d.beginScrubbing()
                        }, function() {
                            return d.endScrubbing()
                        }, function(b) {
                            return d.seekTrackByPercentage(a, b)
                        });
                    return function(b) {
                        a === d.currentTrackId && e(b)
                    }
                }
            }]);
            return d
        }();
        k.exports = f
    },
    756: function(k, f) {
        k.exports = function(c) {
            var g = Math.floor(c % 60);
            c = Math.floor(c / 60);
            var h = Math.floor(c / 60);
            0 < h && (c %= 60);
            var e = "";
            0 < h && (e += h + ":", 10 > c && (e += "0"));
            10 > g && (g = "0" + g);
            return e + (c + ":" + g)
        }
    },
    1044: function(k, f) {
        var c = function(c, h, e, b) {
            var d = b.currentTarget,
                a = document.createElement("div");
            a.style.cssText = "position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000000; cursor: pointer;";
            var l = function(a) {
                    var b = 0,
                        l = d.ownerDocument.defaultView;
                    if (l = l.parent === l ? null : l.parent) b = l.document.querySelector("iframe#sqs-site-frame").getBoundingClientRect().left;
                    l = d.getBoundingClientRect();
                    return Math.max(Math.min((a - (l.left + b)) / (l.right - l.left), 1), 0)
                },
                n = function(b) {
                    a.onmousemove = null;
                    a.onmouseup = null;
                    a.remove();
                    b.preventDefault();
                    e(l(b.clientX));
                    h();
                    window.onmouseleave = null
                };
            a.onmousemove = function(a) {
                a.preventDefault();
                e(l(a.clientX))
            };
            a.onmouseup = n;
            window.onmouseleave = n;
            b.preventDefault();
            c();
            document.body.appendChild(a)
        };
        k.exports = function(g, h, e) {
            return c.bind(null, g, h, e)
        }
    },
    1045: function(k, f, c) {
        k.exports = {
            "default": c(1416),
            __esModule: !0
        }
    },
    1046: function(k, f, c) {
        var g = c(1144),
            h = c(603),
            e = c(1751);
        k.exports = function(b, d) {
            var a = (h.Object || {})[b] || Object[b],
                l = {};
            l[b] = d(a);
            g(g.S + g.F * e(function() {
                a(1)
            }), "Object", l)
        }
    },
    1047: function(k, f, c) {
        function g(b, a, l) {
            this.fn = b;
            this.context = a;
            this.once = l || !1
        }

        function h() {}
        var e = Object.prototype.hasOwnProperty,
            b = "function" !== typeof Object.create ? "~" : !1;
        h.prototype._events = void 0;
        h.prototype.eventNames = function() {
            var d = this._events,
                a = [],
                l;
            if (!d) return a;
            for (l in d) e.call(d, l) && a.push(b ? l.slice(1) : l);
            return Object.getOwnPropertySymbols ? a.concat(Object.getOwnPropertySymbols(d)) : a
        };
        h.prototype.listeners = function(d, a) {
            var l = b ? b + d : d,
                l = this._events && this._events[l];
            if (a) return !!l;
            if (!l) return [];
            if (l.fn) return [l.fn];
            for (var e = 0, c = l.length, r = Array(c); e < c; e++) r[e] = l[e].fn;
            return r
        };
        h.prototype.emit = function(d, a, l, e, c, r) {
            var m = b ? b + d : d;
            if (!this._events || !this._events[m]) return !1;
            var m = this._events[m],
                h = arguments.length,
                g, f;
            if ("function" === typeof m.fn) {
                m.once && this.removeListener(d, m.fn, void 0, !0);
                switch (h) {
                    case 1:
                        return m.fn.call(m.context), !0;
                    case 2:
                        return m.fn.call(m.context, a), !0;
                    case 3:
                        return m.fn.call(m.context, a, l), !0;
                    case 4:
                        return m.fn.call(m.context, a, l, e), !0;
                    case 5:
                        return m.fn.call(m.context, a, l, e, c), !0;
                    case 6:
                        return m.fn.call(m.context, a, l, e, c, r), !0
                }
                f = 1;
                for (g = Array(h - 1); f < h; f++) g[f - 1] = arguments[f];
                m.fn.apply(m.context, g)
            } else {
                var k = m.length,
                    q;
                for (f = 0; f < k; f++) switch (m[f].once &&
                    this.removeListener(d, m[f].fn, void 0, !0), h) {
                    case 1:
                        m[f].fn.call(m[f].context);
                        break;
                    case 2:
                        m[f].fn.call(m[f].context, a);
                        break;
                    case 3:
                        m[f].fn.call(m[f].context, a, l);
                        break;
                    default:
                        if (!g) {
                            q = 1;
                            for (g = Array(h - 1); q < h; q++) g[q - 1] = arguments[q]
                        }
                        m[f].fn.apply(m[f].context, g)
                }
            }
            return !0
        };
        h.prototype.on = function(d, a, l) {
            a = new g(a, l || this);
            d = b ? b + d : d;
            this._events || (this._events = b ? {} : Object.create(null));
            this._events[d] ? this._events[d].fn ? this._events[d] = [this._events[d], a] : this._events[d].push(a) : this._events[d] = a;
            return this
        };
        h.prototype.once = function(d, a, l) {
            a = new g(a, l || this, !0);
            d = b ? b + d : d;
            this._events || (this._events = b ? {} : Object.create(null));
            this._events[d] ? this._events[d].fn ? this._events[d] = [this._events[d], a] : this._events[d].push(a) : this._events[d] = a;
            return this
        };
        h.prototype.removeListener = function(d, a, l, e) {
            d = b ? b + d : d;
            if (!this._events || !this._events[d]) return this;
            var c = this._events[d],
                h = [];
            if (a)
                if (c.fn)(c.fn !== a || e && !c.once || l && c.context !== l) && h.push(c);
                else
                    for (var m = 0, f = c.length; m < f; m++)(c[m].fn !== a ||
                        e && !c[m].once || l && c[m].context !== l) && h.push(c[m]);
            h.length ? this._events[d] = 1 === h.length ? h[0] : h : delete this._events[d];
            return this
        };
        h.prototype.removeAllListeners = function(d) {
            if (!this._events) return this;
            d ? delete this._events[b ? b + d : d] : this._events = b ? {} : Object.create(null);
            return this
        };
        h.prototype.off = h.prototype.removeListener;
        h.prototype.addListener = h.prototype.on;
        h.prototype.setMaxListeners = function() {
            return this
        };
        h.prefixed = b;
        k.exports = h
    },
    1284: function(k, f, c) {
        k.exports = {
            AlbumBlockViewBinder: c(1402),
            AlbumPageViewBinder: c(1403),
            CoverPageViewBinder: c(1404)
        }
    },
    1402: function(k, f, c) {
        var g = c(324)["default"],
            h = c(325)["default"],
            e = c(153)["default"],
            b = c(152)["default"];
        f = c(755);
        var d = c(1044),
            a = c(756),
            l = c(256);
        c = function(c) {
            function p() {
                b(this, p);
                g(Object.getPrototypeOf(p.prototype), "constructor", this).apply(this, arguments)
            }
            h(p, c);
            e(p, [{
                key: "bindUIEvents",
                value: function() {
                    var a = this,
                        b = this.container,
                        e = this.albumController;
                    b.querySelector(".album-controls .button.playpause").addEventListener("click", function() {
                        return e.isPlaying ?
                            e.pause() : e.play()
                    });
                    var c = b.querySelector(".universal-controls");
                    c.querySelector(".play").addEventListener("click", function() {
                        return e.play()
                    });
                    c.querySelector(".pause").addEventListener("click", function() {
                        return e.pause()
                    });
                    c.querySelector(".prev").addEventListener("click", function() {
                        return e.goToPreviousTrack()
                    });
                    c.querySelector(".next").addEventListener("click", function() {
                        return e.goToNextTrack()
                    });
                    b.querySelector(".universal-track .track-progress-bar").addEventListener("mousedown", d(function() {
                            return e.beginScrubbing()
                        },
                        function() {
                            return e.endScrubbing()
                        },
                        function(a) {
                            return e.seekCurrentTrackByPercentage(a)
                        }));
                    this.trackNodes.forEach(function(b, d) {
                        b.querySelector(".track-progress-bar").addEventListener("mousedown", a.getScrubHandlerForTrack(d));
                        b.addEventListener("click", function(a) {
                            a.preventDefault();
                            e.skipToTrack(d);
                            e.play()
                        })
                    });
                    b.ownerDocument.defaultView.addEventListener("resize", l(this.handleWindowResize.bind(this), 40));
                    p.updateSizeClass(this.container)
                }
            }, {
                key: "handleWindowResize",
                value: function() {
                    this.ownerDocument.body.contains(this.container) &&
                        p.updateSizeClass(this.container)
                }
            }, {
                key: "handleCurrentTrackPositionChange",
                value: function(a, b) {
                    var d = this.container.querySelector(".universal-track");
                    p.updateElapsedTimer(d, a, b)
                }
            }, {
                key: "handleTrackPositionChange",
                value: function(a, b, d) {
                    p.updateElapsedTimer(this.trackNodes[a], b, d)
                }
            }, {
                key: "handleTrackDurationChange",
                value: function(b, d) {
                    var e = this.trackNodes[b],
                        c = a(d);
                    e.querySelector(".timers .duration").textContent = c;
                    b === this.albumController.currentTrackId && (this.container.querySelector(".universal-track .timers .duration").textContent =
                        c)
                }
            }, {
                key: "handleActiveTrackChange",
                value: function(a) {
                    this.trackNodes.forEach(function(a, b) {
                        return a.classList.remove("selected")
                    });
                    if (null !== a) {
                        var b = this.trackNodes[a];
                        b.classList.add("selected");
                        a = b.getAttribute("data-artist");
                        var b = b.getAttribute("data-title"),
                            d = this.container.querySelector(".universal-track .track-info");
                        d.querySelector(".title").textContent = b;
                        d.querySelector(".artist").textContent = a
                    }
                }
            }], [{
                key: "updateElapsedTimer",
                value: function(b, d, e) {
                    b.querySelector(".track-progress-bar .play-bar").style.width =
                        100 * e + "%";
                    b.querySelector(".timers .elapsed").textContent = a(d)
                }
            }, {
                key: "updateSizeClass",
                value: function(a) {
                    var b = parseInt(a.ownerDocument.defaultView.getComputedStyle(a).width, 10),
                        b = 640 > b ? "sm" : 800 > b ? "md" : "lg";
                    a = a.classList;
                    a.remove("sm");
                    a.remove("md");
                    a.remove("lg");
                    a.add(b)
                }
            }]);
            return p
        }(f);
        k.exports = c
    },
    1403: function(k, f, c) {
        var g = c(324)["default"],
            h = c(325)["default"],
            e = c(153)["default"],
            b = c(152)["default"];
        f = c(755);
        var d = c(756),
            a = c(256);
        c = function(c) {
            function n() {
                b(this, n);
                g(Object.getPrototypeOf(n.prototype),
                    "constructor", this).apply(this, arguments)
            }
            h(n, c);
            e(n, [{
                key: "bindUIEvents",
                value: function() {
                    var b = this;
                    this.eventHandlers = [{
                        node: this.container.querySelector("a.button"),
                        type: "click",
                        fn: this.handleButtonClick.bind(this)
                    }, {
                        node: this.container.ownerDocument.defaultView,
                        type: "resize",
                        fn: a(this.handleWindowResize.bind(this), 40)
                    }];
                    this.trackNodes.forEach(function(a, d) {
                        b.eventHandlers.push({
                            node: a,
                            type: "click",
                            fn: b.handleTrackNodeClick.bind(b, d)
                        }, {
                            node: a.querySelector(".track-progress-bar"),
                            type: "mousedown",
                            fn: b.getScrubHandlerForTrack.call(b, d)
                        })
                    });
                    this.eventHandlers.forEach(function(a) {
                        a.node.addEventListener(a.type, a.fn)
                    });
                    this.handleWindowResize()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.eventHandlers.forEach(function(a) {
                        a.node.removeEventListener(a.type, a.fn)
                    });
                    this.albumController.changeCurrentTrackImpl(null);
                    this.albumController = this.eventHandlers = null
                }
            }, {
                key: "handleButtonClick",
                value: function(a) {
                    a.preventDefault();
                    this.albumController.playpause()
                }
            }, {
                key: "handleTrackNodeClick",
                value: function(a,
                    b) {
                    var d = this.albumController;
                    b.preventDefault();
                    d.skipToTrack(a);
                    d.play()
                }
            }, {
                key: "handleWindowResize",
                value: function() {
                    var a = this.container.ownerDocument.defaultView;
                    a.document.body.contains(this.container) && (a = parseInt(a.getComputedStyle(this.container).width, 10), this.container.classList.toggle("tablet", 800 > a), this.container.classList.toggle("phone", 480 > a))
                }
            }, {
                key: "handleTrackPositionChange",
                value: function(a, b, e) {
                    a = this.trackNodes[a];
                    a.querySelector(".track-progress-bar .play-bar").style.width =
                        100 * e + "%";
                    a.querySelector(".track-time").textContent = d(b)
                }
            }, {
                key: "handleActiveTrackChange",
                value: function(a) {
                    this.trackNodes.forEach(function(a, b) {
                        return a.classList.remove("selected")
                    });
                    null !== a && this.trackNodes[a].classList.add("selected")
                }
            }]);
            return n
        }(f);
        k.exports = c
    },
    1404: function(k, f, c) {
        var g = c(324)["default"],
            h = c(325)["default"],
            e = c(153)["default"],
            b = c(152)["default"];
        f = c(755);
        var d = c(756);
        c = function(a) {
            function c() {
                b(this, c);
                g(Object.getPrototypeOf(c.prototype), "constructor", this).apply(this,
                    arguments)
            }
            h(c, a);
            e(c, [{
                key: "bindUIEvents",
                value: function() {
                    var a = this,
                        b = this.container,
                        d = this.albumController,
                        e = b.querySelector(".button-play-pause");
                    e && e.addEventListener("click", function() {
                        return d.playpause()
                    });
                    (e = b.querySelector(".button-previous")) && e.addEventListener("click", function() {
                        return d.goToPreviousTrack()
                    });
                    (b = b.querySelector(".button-next")) && b.addEventListener("click", function() {
                        return d.goToNextTrack()
                    });
                    this.trackNodes.forEach(function(b, e) {
                        b.querySelector(".track-progress-bar").addEventListener("mousedown",
                            a.getScrubHandlerForTrack(e));
                        b.addEventListener("click", function(a) {
                            a.preventDefault();
                            d.skipToTrack(e);
                            d.play()
                        })
                    })
                }
            }, {
                key: "handleTrackPositionChange",
                value: function(a, b, e) {
                    a = this.trackNodes[a];
                    a.querySelector(".track-progress-bar .play-bar").style.width = 100 * e + "%";
                    a.querySelector(".track-time").textContent = d(b)
                }
            }, {
                key: "handleActiveTrackChange",
                value: function(a) {
                    this.trackNodes.forEach(function(a, b) {
                        return a.classList.remove("selected")
                    });
                    null !== a && this.trackNodes[a].classList.add("selected")
                }
            }]);
            return c
        }(f);
        k.exports = c
    },
    1405: function(k, f, c) {
        var g = c(153)["default"],
            h = c(152)["default"],
            e = c(942)["default"],
            b = c(1045)["default"],
            d = c(602);
        f = function() {};
        var a = {
            handleTrackPositionChange: f,
            handleCurrentTrackPositionChange: f,
            handleActiveTrackChange: f,
            handlePlayingChange: f,
            handleTrackDurationChange: f
        };
        f = function() {
            function c(b, f) {
                var g = this;
                h(this, c);
                this.handlers = e({}, a, f);
                this.tracks = b.map(function(a) {
                    return d.createTrack(a)
                });
                this.currentTrackId = null;
                this.isPlaying = !1;
                this._currentTrackEventListeners = {};
                this.tracks.forEach(function(a, b) {
                    a.on("positionChange", function() {
                        g.handlers.handleTrackPositionChange(b, a.position, a.position / a.duration)
                    }).on("durationChange", function() {
                        g.handlers.handleTrackDurationChange(b, a.duration)
                    })
                });
                this.currentTrackEventListeners = {
                    positionChange: function(a) {
                        return g.handlers.handleCurrentTrackPositionChange(a.position, a.position / a.duration)
                    },
                    ended: function() {
                        return !g.isScrubbing && g.goToNextTrack()
                    },
                    inactive: function() {
                        return g.setIsPlayingImpl(!1)
                    }
                }
            }
            g(c, [{
                key: "skipToTrack",
                value: function(a) {
                    var b = 1 >= arguments.length || void 0 === arguments[1] ? !1 : arguments[1];
                    if (0 > a || a >= this.tracks.length) a = null;
                    b && null !== a && this.seekTrack(a, 0);
                    this.changeCurrentTrackImpl(a)
                }
            }, {
                key: "play",
                value: function() {
                    null !== this.currentTrackId ? (this.tracks[this.currentTrackId].play(), this.setIsPlayingImpl(!0)) : 0 < this.tracks.length && (this.skipToTrack(0, !0), this.play())
                }
            }, {
                key: "pause",
                value: function() {
                    null !== this.currentTrackId && this.tracks[this.currentTrackId].pause();
                    this.setIsPlayingImpl(!1)
                }
            }, {
                key: "playpause",
                value: function() {
                    this.isPlaying ? this.pause() : this.play()
                }
            }, {
                key: "goToPreviousTrack",
                value: function() {
                    var a = 0 >= arguments.length || void 0 === arguments[0] ? !0 : arguments[0];
                    null !== this.currentTrackId && this.skipToTrack(this.currentTrackId - 1, a)
                }
            }, {
                key: "goToNextTrack",
                value: function() {
                    var a = 0 >= arguments.length || void 0 === arguments[0] ? !0 : arguments[0];
                    null !== this.currentTrackId && this.skipToTrack(this.currentTrackId + 1, a)
                }
            }, {
                key: "seekCurrentTrack",
                value: function(a) {
                    null !== this.currentTrackId && this.seekTrack(this.currentTrackId)
                }
            }, {
                key: "seekCurrentTrackByPercentage",
                value: function(a) {
                    null !== this.currentTrackId && this.seekTrackByPercentage(this.currentTrackId, a)
                }
            }, {
                key: "seekTrack",
                value: function(a, b) {
                    this.tracks[a].seek(b)
                }
            }, {
                key: "seekTrackByPercentage",
                value: function(a, b) {
                    this.seekTrack(a, b * this.tracks[a].duration)
                }
            }, {
                key: "beginScrubbing",
                value: function() {
                    this.isScrubbing = !0
                }
            }, {
                key: "endScrubbing",
                value: function() {
                    this.isScrubbing = !1;
                    this.isPlaying && this.tracks[this.currentTrackId].play()
                }
            }, {
                key: "changeCurrentTrackImpl",
                value: function(a) {
                    var d =
                        this,
                        e = this.currentTrackEventListeners;
                    a !== this.currentTrackId && (null !== this.currentTrackId && function() {
                        var a = d.tracks[d.currentTrackId];
                        a.pause();
                        b(e).forEach(function(b) {
                            return a.removeListener(b, e[b])
                        })
                    }(), null !== a ? function() {
                        var c = d.tracks[a];
                        b(e).forEach(function(a) {
                            return c.on(a, e[a])
                        });
                        d.isPlaying && c.play()
                    }() : this.setIsPlayingImpl(!1), this.currentTrackId = a, this.handlers.handleActiveTrackChange(a))
                }
            }, {
                key: "setIsPlayingImpl",
                value: function(a) {
                    a !== this.isPlaying && (this.isPlaying = a, this.handlers.handlePlayingChange(a))
                }
            }]);
            return c
        }();
        k.exports = f
    },
    1407: function(k, f, c) {
        var g = c(324)["default"],
            h = c(325)["default"],
            e = c(153)["default"],
            b = c(152)["default"],
            d = c(942)["default"],
            a = c(1045)["default"];
        f = c(1047);
        var l = c(1410),
            n = {
                timeupdate: "playing",
                loadstart: "load",
                durationchange: "durationchange",
                canplay: "ready",
                pause: "pause",
                playing: "play",
                ended: "ended"
            },
            p = {
                url: null,
                volume: 1
            };
        c = function(c) {
            function f() {
                var e = this,
                    c = 0 >= arguments.length || void 0 === arguments[0] ? {} : arguments[0];
                b(this, f);
                g(Object.getPrototypeOf(f.prototype), "constructor",
                    this).call(this);
                c = d({}, p, c);
                this.audioEl = document.createElement("audio");
                c.url && (this.audioEl.src = this.url = c.url);
                this.audioEl.volume = c.volume;
                this._needsLoad = !0;
                a(n).forEach(function(a) {
                    return e.audioEl.addEventListener(a, function() {
                        e.emit(n[a])
                    })
                })
            }
            h(f, c);
            e(f, [{
                key: "setVolume",
                value: function(a) {
                    this.audioEl.volume = a
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.audioEl.volume
                }
            }, {
                key: "setSrc",
                value: function(a) {
                    this.audioEl.src = this.url = a;
                    this._needsLoad = !0
                }
            }, {
                key: "play",
                value: function() {
                    var a =
                        this;
                    if (!this.audioEl.src) throw Error("Cannot play: Need to set a url first.");
                    this._needsLoad ? (this.once("ready", function() {
                        return a.audioEl.play()
                    }), this.audioEl.load(), this.audioEl.play(), this._needsLoad = !1) : 3 <= this.audioEl.readyState && this.audioEl.play()
                }
            }, {
                key: "playFrom",
                value: function(a) {
                    var b = this;
                    if (!this.audioEl.src) throw Error("Cannot play: Need to set a url first.");
                    this._needsLoad ? (this.once("ready", function() {
                            b.audioEl.currentTime = a;
                            b.audioEl.play()
                        }), this.audioEl.load(), this.audioEl.play(),
                        this._needsLoad = !1) : 3 <= this.audioEl.readyState && (this.audioEl.currentTime = a, this.audioEl.play())
                }
            }, {
                key: "pause",
                value: function() {
                    this.audioEl.pause()
                }
            }, {
                key: "seek",
                value: function(a) {
                    if (0 !== this.audioEl.readyState) {
                        !this.audioEl.paused && l && (a = Math.floor(a));
                        var b = this.audioEl.currentTime;
                        this.audioEl.currentTime = a;
                        this.emit("seek", b, a)
                    }
                }
            }, {
                key: "getPosition",
                value: function() {
                    return this.audioEl.currentTime
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.audioEl.duration
                }
            }]);
            return f
        }(f);
        k.exports =
            c
    },
    1408: function(k, f, c) {
        var g = c(324)["default"],
            h = c(325)["default"],
            e = c(153)["default"],
            b = c(152)["default"],
            d = c(942)["default"];
        f = c(1047);
        c = function() {};
        var a = {
            handlePlay: c,
            handlePause: c,
            handleSeek: c
        };
        f = function(c) {
            function n(e) {
                b(this, n);
                g(Object.getPrototypeOf(n.prototype), "constructor", this).call(this);
                this.url = e;
                this.duration = this.position = 0;
                this.isActive = !1;
                this.callbacks = d({}, a)
            }
            h(n, c);
            e(n, [{
                key: "setCallbacks",
                value: function(b) {
                    this.callbacks = d({}, a, b)
                }
            }, {
                key: "play",
                value: function() {
                    this.callbacks.handlePlay()
                }
            }, {
                key: "pause",
                value: function() {
                    this.callbacks.handlePause()
                }
            }, {
                key: "seek",
                value: function(a) {
                    this.callbacks.handleSeek(a)
                }
            }, {
                key: "handlePositionChanged",
                value: function(a) {
                    this.position = a;
                    this.emit("positionChange", this)
                }
            }, {
                key: "handlePlay",
                value: function() {
                    this.emit("play", this)
                }
            }, {
                key: "handlePaused",
                value: function() {
                    this.emit("pause", this)
                }
            }, {
                key: "handleEnded",
                value: function() {
                    this.emit("ended", this)
                }
            }, {
                key: "handleDurationChanged",
                value: function(a) {
                    this.duration = a;
                    this.emit("durationChange", this)
                }
            }, {
                key: "handleReady",
                value: function() {
                    this.emit("ready", this)
                }
            }, {
                key: "handleActiveChange",
                value: function(a) {
                    this.isActive = a;
                    this.emit(a ? "active" : "inactive", this)
                }
            }]);
            return n
        }(f);
        k.exports = f
    },
    1409: function(k, f, c) {
        var g = c(153)["default"],
            h = c(152)["default"],
            e = c(1407),
            b = c(1408);
        f = function() {
            function d() {
                var a = this;
                h(this, d);
                this.player = new e;
                this.activeTrack = null;
                this.player.on("playing", function() {
                    a.activeTrack && a.activeTrack.handlePositionChanged(a.player.getPosition())
                }).on("durationchange", function() {
                    a.activeTrack &&
                        a.activeTrack.handleDurationChanged(a.player.getDuration())
                }).on("ready", function() {
                    a.activeTrack && a.activeTrack.handleReady()
                }).on("play", function() {
                    a.activeTrack && a.activeTrack.handlePlay()
                }).on("pause", function() {
                    a.activeTrack && a.activeTrack.handlePaused()
                }).on("ended", function() {
                    a.activeTrack && a.activeTrack.handleEnded()
                })
            }
            g(d, [{
                key: "createTrack",
                value: function(a) {
                    var d = this,
                        e = new b(a);
                    e.setCallbacks({
                        handlePlay: function() {
                            d.activate(e);
                            d.player.playFrom(e.position)
                        },
                        handlePause: function() {
                            e.isActive &&
                                d.player.pause()
                        },
                        handleSeek: function(a) {
                            e.isActive && d.player.seek(a);
                            e.handlePositionChanged(a)
                        }
                    });
                    return e
                }
            }, {
                key: "activate",
                value: function(a) {
                    if (this.activeTrack !== a && (this.activeTrack && (this.activeTrack.pause(), this.activeTrack.handleActiveChange(!1)), this.activeTrack = a)) this.player.setSrc(a.url), a.handleActiveChange(!0)
                }
            }]);
            return d
        }();
        k.exports = f
    },
    1410: function(k, f) {
        var c = navigator.userAgent.toLowerCase(),
            c = -1 !== c.indexOf("safari") && -1 === c.indexOf("chrome");
        k.exports = c
    },
    1411: function(k, f, c) {
        k.exports = {
            "default": c(1414),
            __esModule: !0
        }
    },
    1412: function(k, f, c) {
        k.exports = {
            "default": c(1415),
            __esModule: !0
        }
    },
    1413: function(k, f, c) {
        k.exports = {
            "default": c(1417),
            __esModule: !0
        }
    },
    1414: function(k, f, c) {
        var g = c(757);
        k.exports = function(c, e) {
            return g.create(c, e)
        }
    },
    1415: function(k, f, c) {
        var g = c(757);
        c(1418);
        k.exports = function(c, e) {
            return g.getDesc(c, e)
        }
    },
    1416: function(k, f, c) {
        c(1419);
        k.exports = c(603).Object.keys
    },
    1417: function(k, f, c) {
        c(1420);
        k.exports = c(603).Object.setPrototypeOf
    },
    1418: function(k, f, c) {
        var g = c(1929);
        c(1046)("getOwnPropertyDescriptor", function(c) {
            return function(e, b) {
                return c(g(e), b)
            }
        })
    },
    1419: function(k, f, c) {
        var g = c(1930);
        c(1046)("keys", function(c) {
            return function(e) {
                return c(g(e))
            }
        })
    },
    1420: function(k, f, c) {
        k = c(1144);
        k(k.S, "Object", {
            setPrototypeOf: c(1928).set
        })
    },
    1523: function(k, f) {
        YUI.add("squarespace-block-audio-player-template", function(c) {
            var f = c.Handlebars;
            (function() {
                var c = f.template;
                (f.templates = f.templates || {})["block-audio-player.html"] = c(function(e, b, d, a, c) {
                    this.compilerInfo = [4, ">= 1.0.0"];
                    d = this.merge(d, e.helpers);
                    c = c || {};
                    var f = this.escapeExpression;
                    e = '<div class="player">\n  <div class="action">\n    <div class="play">\n      <div class="play-button"></div>\n    </div>\n    <div class="pause">\n      <div class="pause-button"></div>\n    </div>\n  </div>\n  <div class="labels">\n    <div class="title-wrapper">\n      <div class="title" title="';
                    (a = d.title) ? a = a.call(b, {
                        hash: {},
                        data: c
                    }): (a = b.title, a = "function" === typeof a ? a.apply(b) : a);
                    e += f(a) + '" data-title="';
                    (a = d.title) ? a = a.call(b, {
                        hash: {},
                        data: c
                    }): (a = b.title, a = "function" === typeof a ? a.apply(b) : a);
                    e += f(a) + '">';
                    (a = d.title) ? a = a.call(b, {
                        hash: {},
                        data: c
                    }): (a = b.title, a = "function" === typeof a ? a.apply(b) : a);
                    e += f(a) + '</div>\n    </div>\n    <div class="artistName" title="';
                    (a = d.artistName) ? a = a.call(b, {
                        hash: {},
                        data: c
                    }): (a = b.artistName, a = "function" === typeof a ? a.apply(b) : a);
                    e += f(a) + '">';
                    (a = d.artistName) ? a = a.call(b, {
                        hash: {},
                        data: c
                    }): (a = b.artistName, a = "function" === typeof a ? a.apply(b) : a);
                    e += f(a) + '</div>\n  </div>\n  <div class="secondary-controls">\n    <div class="time">\n      <span class="progress"></span>\n      <span class="total">';
                    (a = d.duration) ? a = a.call(b, {
                        hash: {},
                        data: c
                    }): (a = b.duration, a = "function" === typeof a ? a.apply(b) : a);
                    return e += f(a) + '</span>\n    </div>\n  </div>\n  <div class="track">\n    <span class="played"><span class="icon"></span></span>\n  </div>\n</div>\n'
                })
            })();
            c.Handlebars.registerPartial("block-audio-player.html".replace("/", "."), f.templates["block-audio-player.html"])
        }, "1.0", {
            requires: ["handlebars-base"]
        })
    },
    1755: function(k, f, c) {
        var g = c(1284).AlbumPageViewBinder;
        YUI.add("squarespace-album-player", function(c) {
            var e,
                b = function(b) {
                    var a = b.one(".album-cover img");
                    a && c.config.win.ImageLoader.load(a, {
                        load: !0
                    });
                    b.removeClass("loading")
                };
            c.on("windowresize", function() {
                c.all(".sqs-audio-playlist").each(function(d) {
                    b(d)
                })
            });
            c.config.win.Squarespace.onInitialize(c, function() {
                e = [];
                c.all(".sqs-audio-playlist").each(function(d) {
                    var a = new g;
                    e.push(a);
                    a.connectToNode(d.getDOMNode());
                    b(d)
                })
            });
            c.config.win.Squarespace.onDestroy(c, function() {
                e.forEach(function(b) {
                    b.destroy()
                });
                e = null
            })
        }, "1.0", {
            requires: ["event-resize"]
        })
    },
    1757: function(k,
        f, c) {
        var g = c(1),
            h = c(602);
        YUI.add("squarespace-audio-player", function(c) {
            var b = c.namespace("Squarespace.Widgets").AudioPlayer = c.Base.create("audioPlayer", c.Squarespace.Widgets.SSWidget, [], {
                    initializer: function(a) {
                        a = this.get("render");
                        c.Lang.isBoolean(a) ? a = null : c.Lang.isString(a) && (a = c.one(a));
                        a && (a._audioPlayer && a._audioPlayer.destroy(), a._audioPlayer = this, c.Object.each(a.getData(), function(a, b) {
                            a && this.set(b, a)
                        }, this))
                    },
                    destructor: function() {
                        this._audio && (this.stop(), this._audio = null)
                    },
                    renderUI: function() {
                        b.superclass.renderUI.apply(this,
                            arguments);
                        var a = this.get("boundingBox"),
                            d = a.one(".placeholder"),
                            f = this.get("title"),
                            g = this.get("author");
                        f && g ? d.setContent(c.Node.create('<div class="wrapper"><div class="audio-author">' + g + '</div><div class="audio-title">' + f + "</div></div>")) : f ? d.setContent(c.Node.create('<div class="wrapper"><div class="audio-title">' + f + "</div></div>")) : d.setContent(c.Node.create('<div class="wrapper">' + this.get("strings.placeholder") + "</div>"));
                        "true" === this.get("show-download") && (d = '<div class="download"><a href="' +
                            c.Squarespace.UrlUtils.addQueryParam(this.get("url"), "download", "true") + '" target="_blank">Download</a></div>', this.get("contentBox").append(d), a.addClass("download"));
                        a.one(".progress-inner").setStyle("width", "0px");
                        d = this._volumeNode = a.one(".volume");
                        if (!d) throw Error(this.name + ": No div.volume in template.");
                        for (f = this.get("volumeLevels"); 0 < f; f--) d.prepend('<div class="bar level-"' + f + '" data-volume-level="' + f + '"></div>');
                        a.one(".duration").setContent(this.get("strings.durationPlaceHolder"))
                    },
                    bindUI: function() {
                        var a =
                            this.get("id");
                        this.get("boundingBox").on(a + "|click", this._onClick, this);
                        this.after(a + "|volumeChange", function(a) {
                            this._setVolume(a.newVal)
                        }, this);
                        this.after(a + "|playStateChange", this._uiUpdateWrapperClass, this);
                        this.after(a + "|readyStateChange", this._afterReadyStateChange, this);
                        this.after(a + "|disabledChange", function(a) {
                            a.newVal && this.stop()
                        }, this);
                        c.on(a + "|audioPlayer:stopAll", function(a) {
                            var b = a ? a.container : null;
                            b && c.Lang.isString(b) && (b = c.one(b));
                            (!a || !a.hasOwnProperty("container") || b instanceof c.Node && b.contains(this.get("boundingBox"))) && this.stop()
                        }, this)
                    },
                    syncUI: function() {
                        this._uiUpdateWrapperClass();
                        this._uiUpdateVolumeLevel();
                        var a = this.get("boundingBox");
                        a.toggleClass("tiny", 300 > a.get("offsetWidth"))
                    },
                    play: function() {
                        var a = this.getProperty("PLAY_STATES");
                        h.player.setVolume(this.get("volume") / 100);
                        this._audio ? this.get("playState") !== a.PLAYING && this._audio.play() : (this._registerTrack(), this._audio.play());
                        this._set("playState", a.PLAYING)
                    },
                    pause: function() {
                        this._audio && this._audio.pause()
                    },
                    stop: function() {
                        var a = this.get("playState"),
                            b = this.getProperty("PLAY_STATES");
                        a === b.PLAYING && this._audio && this._audio.pause()
                    },
                    seek: function(a) {
                        100 < a || 0 > a ? console.warn(this.name + ": seek() - Percentage between 0-100 required.") : (this._audio || (this._registerTrack(), this.play()), this._audio.seek(this._audio.duration * (a / 100)))
                    },
                    setVolume: function(a) {
                        this.set("volume", a)
                    },
                    _setVolume: function(a) {
                        this._audio && h.player.setVolume(a / 100);
                        this._set("volume", a);
                        this._uiUpdateVolumeLevel()
                    },
                    _setVolumeLevel: function(a) {
                        this._setVolume(Math.round(100 *
                            (a / this.get("volumeLevels"))))
                    },
                    _registerTrack: function() {
                        if (!this._audio) {
                            var a = this.get("boundingBox"),
                                b = this.get("fixedUrl");
                            a.addClass("loading");
                            if (!b) {
                                this._showError(g("No URL provided."));
                                return
                            }
                            this._audio = h.createTrack(b);
                            this._audio.on("pause", c.bind(this._onPause, this));
                            this._audio.on("ended", c.bind(this._onStop, this));
                            this._audio.on("inactive", c.bind(this._onPause, this));
                            this._audio.on("positionChange", c.bind(this._onWhilePlaying, this));
                            this._audio.on("ready", c.bind(this._onLoad, this));
                            return !!this._audio
                        }
                        return !1
                    },
                    _uiUpdateVolumeLevel: function() {
                        var a = this._volumeNode.get("children"),
                            b = this.get("volumeLevels"),
                            c = this.get("volume"),
                            d = Math.round(c / 100 * b);
                        a.each(function(a) {
                            parseInt(a.getAttribute("data-volume-level"), 10) <= d ? a.addClass("active") : a.removeClass("active")
                        }, this)
                    },
                    _uiUpdateWrapperClass: function() {
                        var a = this.getProperty("READY_STATES"),
                            b = this.getProperty("PLAY_STATES"),
                            c = this.get("boundingBox"),
                            d = c.getAttribute("class").split(" "),
                            e;
                        for (e in b) d.remove("play-state-" + b[e]);
                        for (e in a) d.remove("ready-state-" + a[e]);
                        c.addClass("ready-state-" + this.get("readyState"));
                        c.setAttribute("class", d.join(" ")).addClass("play-state-" + this.get("playState")).addClass("ready-state-" + this.get("readyState"))
                    },
                    _onClick: function(a) {
                        if (c.UA.ios) window.location.href = this.get("url");
                        else if (!a.target.ancestor().hasClass("download") && (a.halt(), a.stopImmediatePropagation(), !this.get("disabled") && !a.target.hasClass("duration")))
                            if (a.target.ancestor(".volume")) this._setVolumeLevel(parseInt(a.target.getAttribute("data-volume-level"),
                                10));
                            else if (a.target.ancestor(".placeholder", !0)) this.play();
                        else {
                            if (a.target.ancestor(".controls", !0)) {
                                a = this.get("playState");
                                var b = this.getProperty("PLAY_STATES");
                                switch (a) {
                                    case b.PLAYING:
                                        this.pause();
                                        return;
                                    case b.PAUSED:
                                    case b.STOPPED:
                                        this.play();
                                        return;
                                    default:
                                        console.warn(this.name + ": Wait, what? How did you get here? Case was ", a);
                                        return
                                }
                            }
                            b = this.get("boundingBox").one(".progress").get("region");
                            a.pageX >= b.left && a.pageX <= b.right && this.seek(100 * ((a.pageX - b.left) / b.width))
                        }
                    },
                    _afterReadyStateChange: function(a) {
                        a =
                            this.getProperty("READY_STATES");
                        var b = this.get("readyState"),
                            c = this.get("strings"),
                            d = !1;
                        switch (b) {
                            case a.INITIALIZED:
                                this.enable();
                                break;
                            case a.FLASH_BLOCKED:
                                d = c.soundManagerFlashFail;
                                break;
                            case a.SECURITY_ERROR:
                                d = c.soundManagerSecurityFail;
                                this._reportAudioError(a.SECURITY_ERROR);
                                break;
                            case a.SOUND_LOAD_FAILED:
                                d = c.soundManagerURLFail;
                                this._reportAudioError(a.SOUND_LOAD_FAILED);
                                break;
                            case a.SOUND_LOADED:
                                break;
                            default:
                                console.warn(this.name + ": Invalid ready state (" + b + ").")
                        }
                        d && (console.warn("AUDIO ERROR: " +
                            d), this._showError(d), this.disable());
                        this._uiUpdateWrapperClass()
                    },
                    _reportAudioError: function(a) {
                        try {
                            var b = this.get("url");
                            0 < b.indexOf("static.squarespace.com") && c.Squarespace.Analytics.trackInternal("system_audio_play_error", {
                                readyState: this.get("readyState"),
                                url: b
                            })
                        } catch (d) {}
                    },
                    _getPlaytimeString: function(a) {
                        if (!this._audio) return this.get("strings.durationPlaceHolder");
                        var b = "0:00",
                            c = "0:00",
                            b = this._getMinSecString(this._audio.duration);
                        a && (c = this._getMinSecString(a));
                        return c + " / " + b
                    },
                    _getMinSecString: function(a) {
                        return c.Squarespace.DateUtils.humanizeDuration(1E3 *
                            a)
                    },
                    _showError: function(a) {
                        this.get("boundingBox").addClass("error");
                        this.get("boundingBox").one(".placeholder").setContent("Error: " + a)
                    },
                    _onWhilePlaying: function(a) {
                        if (!this.get("destroyed")) {
                            var b = this.get("boundingBox");
                            b.one(".duration").setContent(this._getPlaytimeString(a.position));
                            var c = this.getProperty("READY_STATES");
                            this.get("readyState") !== c.SOUND_LOADED && this._set("readyState", c.SOUND_LOADED);
                            c = b.one(".progress-inner");
                            a = 100 * (a.position / this._audio.duration);
                            b.removeClass("loading");
                            c && c.setStyle("width", a + "%")
                        }
                    },
                    _onStop: function() {
                        this._set("playState", this.getProperty("PLAY_STATES").STOPPED)
                    },
                    _onPause: function() {
                        this._set("playState", this.getProperty("PLAY_STATES").PAUSED)
                    },
                    _onDataError: function() {
                        this.stop();
                        this._set("playState", this.getProperty("PLAY_STATES").STOPPED)
                    },
                    _onLoad: function(a) {
                        a || (this._loadFailTimer = c.later(1E4, this, function() {
                            this.stop();
                            this._set("readyState", this.getProperty("READY_STATES").SOUND_LOAD_FAILED)
                        }))
                    }
                }, {
                    CSS_PREFIX: "sqs-audio-player",
                    PLAY_STATES: {
                        PLAYING: "playing",
                        PAUSED: "paused",
                        STOPPED: "stopped"
                    },
                    READY_STATES: {
                        INITIALIZED: "initialized",
                        FLASH_BLOCKED: "flash-blocked",
                        SECURITY_ERROR: "security-error",
                        SOUND_LOAD_FAILED: "sound-load-failed",
                        SOUND_LOADED: "sound-loaded"
                    },
                    TEMPLATE: '<div class="controls"></div><div class="placeholder"></div><div class="progress"><div class="progress-inner"><div class="scrubber"></div></div></div><div class="duration"></div><div class="volume"></div>',
                    ATTRS: {
                        strings: {
                            value: {
                                placeholder: g("Click to play..."),
                                durationPlaceHolder: "0:00 / 0:00",
                                loadFail: g("Unable to load sound at the URL"),
                                soundManagerFlashFail: g("Sorry, could not load because flash is blocked."),
                                soundManagerSecurityFail: g("Sorry, there was a JavaScript security error."),
                                soundManagerURLFail: g("Unable to access audio stream.")
                            }
                        },
                        fixedUrl: {
                            getter: function() {
                                var a = this.get("url");
                                0 < a.indexOf(Static.SQUARESPACE_CONTEXT.appDomain) && (a = a.replace(/^(http:\/\/|https:\/\/|\/\/)/i, window.location.protocol + "//"));
                                return a
                            },
                            readOnly: !0
                        },
                        playState: {
                            lazyAdd: !1,
                            valueFn: function() {
                                return this.getProperty("PLAY_STATES").STOPPED
                            },
                            readOnly: !0
                        },
                        readyState: {
                            lazyAdd: !1,
                            valueFn: function() {
                                return this.getProperty("READY_STATES").INITIALIZED
                            },
                            readOnly: !0
                        },
                        url: {
                            value: null
                        },
                        volume: {
                            validator: function(a) {
                                (0 > a || 100 < a) && console.warn(this.name + ": Volume must be between 0 and 100, volume remains unchanged.");
                                return !0
                            },
                            value: 66
                        },
                        volumeLevels: {
                            value: 6,
                            writeOnce: "initOnly"
                        },
                        stopOthersOnPlay: {
                            value: !0
                        },
                        render: {
                            value: !0
                        }
                    }
                }),
                d;
            c.config.win.Squarespace.onInitialize(c, function() {
                d = [];
                c.all(".sqs-audio-embed").each(function(a) {
                    if (!(0 < a.get("children").size()) &&
                        !c.Widget.getByNode(a.one("." + c.Squarespace.Widgets.AudioPlayer.CSS_PREFIX))) {
                        switch (c.Object.getValue(a.getData(), "design-style") || "minimal") {
                            case "legacy":
                                a = new c.Squarespace.Widgets.AudioPlayer({
                                    render: a
                                });
                                break;
                            default:
                                a = new c.Squarespace.Widgets.AudioPlayerMinimal({
                                    render: a
                                })
                        }
                        d.push(a)
                    }
                })
            });
            c.config.win.Squarespace.onDestroy(c, function() {
                d.forEach(function(a) {
                    a.destroy()
                });
                d = null
            })
        }, "1.0", {
            requires: "base event node squarespace-album-player squarespace-date-utils squarespace-ss-widget squarespace-url-utils squarespace-util squarespace-widgets-audio-player".split(" ")
        })
    },
    1799: function(k, f, c) {
        var g = c(96),
            h = c(602);
        YUI.add("squarespace-media-tracker", function(c) {
            c.namespace("Squarespace");
            c.Squarespace.MediaTracker = c.Base.create("MediaTracker", c.Base, [], {
                initializer: function() {
                    this.on("scrollStarted", function(b) {
                        this.set("isScrolling", !0)
                    });
                    this.on("scrollFinished", function(b) {
                        this.set("isScrolling", !1)
                    });
                    var b = this.get("audio");
                    c.Array.forEach("playing load ready pause play ended".split(" "), function(d) {
                        b.on(d, c.bind(function() {
                            this._trackEvent({
                                time: Math.floor(b.getPosition()),
                                seekStart: Math.floor(b.getPosition()),
                                from: 0,
                                to: 0,
                                track: b.url,
                                duration: Math.floor(b.getDuration()),
                                recordType: g.AUDIO,
                                type: "audio:" + d
                            })
                        }, this))
                    }, this);
                    b.on("seek", c.bind(function(c, a) {
                        this._trackEvent({
                            seek: !0,
                            time: Math.floor(b.getPosition()),
                            from: 0,
                            to: 0,
                            track: b.url,
                            duration: Math.floor(b.getDuration()),
                            seekStart: Math.floor(c),
                            recordType: g.AUDIO,
                            type: "audio:playing"
                        })
                    }, this))
                },
                destructor: function() {
                    this._audioEvents.detach();
                    this._audioEvents = null
                },
                _postMediaEvent: function(b, d) {
                    !0 !== c.config.win.__WE_ARE_SQUARESPACE_DISABLING_CENSUS__ &&
                        c.Data.post({
                            url: "/api/census/RecordHit",
                            data: {
                                data: b
                            },
                            success: noop,
                            failure: noop
                        })
                },
                _trackEvent: function(b) {
                    !this._updateTrackSwitch(b) && !this._updateIgnoredEvent(b) && (this._isDroppedBuffer(b) || this.set("seekStart", b.seekStart), !this._updateScroll(b) && !this._updateHeartbeat(b) && (this._updateSeek(b), this._updateMetaData(b)))
                },
                _isUpdatedPosition: function(b) {
                    return this.get("seekStart") !== this._retrieveTrackPosition(b.track)
                },
                _isDroppedBuffer: function(b) {
                    return b.seek && "load" === this.get("prevEvent")
                },
                _shouldRecordLastPlay: function(b) {
                    b = this.get("seekStart") - this._retrieveTrackPosition(b.track);
                    return 1 <= b && 5 >= b
                },
                _isPlayBlock: function(b) {
                    b = b.time - this._retrieveTrackPosition(b.track);
                    return 1 <= b && 5 >= b
                },
                _isFirstPlay: function(b) {
                    return 0 === b.time
                },
                _isPlayEvent: function(b) {
                    return "playing" === b.type && !this.get("isTrackSwitching") && !this.get("isScrolling")
                },
                _isPauseEvent: function(b) {
                    return "pause" === b.type
                },
                _isReadyEvent: function(b) {
                    return "ready" === b.type
                },
                _isLoadEvent: function(b) {
                    return "load" === b.type
                },
                _isSeekEvent: function(b) {
                    return b.seek && 1 < Math.abs(b.time - this.get("seekStart")) && !this.get("isScrolling")
                },
                _isTrackSwitchingEvent: function(b) {
                    return b.track !== this.get("curTrack")
                },
                _isInitialScrollEvent: function(b) {
                    return this.get("isScrolling") && 0 === this.get("scrollCount")
                },
                _isFinalScrollEvent: function(b) {
                    return !this.get("isScrolling") && this.get("wasScroll")
                },
                _isUnrecordedPause: function(b) {
                    return 0 !== b.time % 5 && 0 != b.time
                },
                _isHeartbeatBoundary: function(b) {
                    return 0 === b.time % 5 || b.time === b.duration
                },
                _isHeartbeat: function(b) {
                    return this._isPlayEvent(b) && this._isHeartbeatBoundary(b) && b.time != this._retrieveTrackPosition(b.track) || this._isPauseEvent(b) && this._isUnrecordedPause(b)
                },
                _retrieveTrackPosition: function(b) {
                    b = this.get("trackMap")[b];
                    void 0 === b && (b = 0);
                    return b
                },
                _updateIgnoredEvent: function(b) {
                    return this._isReadyEvent(b) || this._isLoadEvent(b) || this._retrieveTrackPosition(b.track) === b.time ? (this.set("prevEvent", b.type), !0) : !1
                },
                _updateTrackMap: function(b, d) {
                    var a = this.get("trackMap"),
                        f = {};
                    f[b] =
                        d;
                    a = c.merge(a, f);
                    this.set("trackMap", a)
                },
                _updateHeartbeat: function(b) {
                    return this._isHeartbeat(b) ? (this._handleHeartbeat(b), this._updateMetaData(b), !0) : !1
                },
                _updateSeek: function(b) {
                    this._isSeekEvent(b) && (this._handleSkipEvent(b), this._updateMetaData(b))
                },
                _updateTrackSwitch: function(b) {
                    if (this._isTrackSwitchingEvent(b))
                        if ("" === this.get("curTrack")) this.set("curTrack", b.track), this._updateTrackMap(b.track, 0);
                        else return this.setAttrs({
                                prevTrack: this.get("curTrack"),
                                curTrack: b.track || "",
                                isTrackSwitching: !0
                            }),
                            this._handleSwitchEvent(b), this._updateMetaData(b), !0;
                    return !1
                },
                _updateScroll: function(b) {
                    return this._isInitialScrollEvent() ? (this.setAttrs({
                        scrollPrev: b.time,
                        scrollCount: this.get("scrollCount") + 1,
                        wasScroll: !0
                    }), !0) : this._isFinalScrollEvent() ? (this.setAttrs({
                        scrollCount: 0,
                        scrollEnd: b.time,
                        wasScroll: !1
                    }), this._handleScrollEvent(b), this._updateMetaData(b), !0) : !1
                },
                _updateMetaData: function(b) {
                    this.setAttrs({
                        curDuration: b.duration,
                        prevPlayPosition: b.time
                    })
                },
                _recordPreviousPlay: function(b, c, a) {
                    this.set("globalOrder",
                        this.get("globalOrder") + 1);
                    this._postMediaEvent({
                        type: "playing",
                        from: c,
                        to: a,
                        track: b.track,
                        duration: b.duration,
                        ordering: this.get("globalOrder"),
                        recordType: g.AUDIO
                    })
                },
                _recordSeek: function(b, c, a) {
                    this.set("globalOrder", this.get("globalOrder") + 1);
                    this._postMediaEvent({
                        type: "seek",
                        from: c,
                        to: a,
                        track: b.track,
                        duration: this.get("curDuration"),
                        ordering: this.get("globalOrder"),
                        recordType: g.AUDIO
                    });
                    this._updateTrackMap(b.track, a)
                },
                _handleSwitchEvent: function(b) {
                    b = this._retrieveTrackPosition(this.get("prevTrack"));
                    void 0 === b && (b = 0);
                    this.set("globalOrder", this.get("globalOrder") + 1);
                    this._postMediaEvent({
                        type: "playing",
                        from: b,
                        to: this.get("prevPlayPosition"),
                        track: this.get("prevTrack"),
                        duration: this.get("curDuration"),
                        ordering: this.get("globalOrder"),
                        recordType: g.AUDIO
                    });
                    this.set("isTrackSwitching", !1);
                    this._updateTrackMap(this.get("prevTrack"), this.get("prevPlayPosition"))
                },
                _handleScrollEvent: function(b) {
                    this._isUpdatedPosition(b) && this._shouldRecordLastPlay(b) && this._recordPreviousPlay(b, this._retrieveTrackPosition(b.track),
                        this.get("scrollPrev"));
                    this._recordSeek(b, this.get("scrollPrev"), this.get("scrollEnd"))
                },
                _handleSkipEvent: function(b) {
                    this._isUpdatedPosition(b) && this._shouldRecordLastPlay(b) && this._recordPreviousPlay(b, this._retrieveTrackPosition(b.track), this.get("seekStart"));
                    this._recordSeek(b, this.get("seekStart"), b.time)
                },
                _handleHeartbeat: function(b) {
                    this._isPlayBlock(b) && (this._recordPreviousPlay(b, this._retrieveTrackPosition(b.track), b.time), this._updateTrackMap(b.track, b.time))
                }
            }, {
                ATTRS: {
                    audio: {},
                    isScrolling: {
                        value: !1,
                        validator: c.Squarespace.AttrValidators.isBoolean
                    },
                    isTrackSwitching: {
                        value: !1,
                        validator: c.Squarespace.AttrValidators.isBoolean
                    },
                    scrollPrev: {
                        value: 0,
                        validator: c.Squarespace.AttrValidators.isNumber
                    },
                    scrollEnd: {
                        value: 0,
                        validator: c.Squarespace.AttrValidators.isNumber
                    },
                    scrollCount: {
                        value: 0,
                        validator: c.Squarespace.AttrValidators.isNumber
                    },
                    wasScroll: {
                        value: !1,
                        validator: c.Squarespace.AttrValidators.isBoolean
                    },
                    prevEvent: {
                        value: "",
                        validator: c.Squarespace.AttrValidators.isString
                    },
                    curDuration: {
                        value: 0
                    },
                    trackMap: {
                        value: {}
                    },
                    prevTrack: {
                        value: "",
                        validator: c.Squarespace.AttrValidators.isString
                    },
                    curTrack: {
                        value: "",
                        validator: c.Squarespace.AttrValidators.isString
                    },
                    globalOrder: {
                        value: 0,
                        validator: c.Squarespace.AttrValidators.isNumber
                    },
                    prevPlayPosition: {
                        value: 0,
                        validator: c.Squarespace.AttrValidators.isNumber
                    },
                    seekStart: {
                        value: 0,
                        validator: c.Squarespace.AttrValidators.isNumber
                    }
                }
            });
            c.Squarespace.Singletons.MediaTracker = new c.Squarespace.MediaTracker({
                audio: h.player
            })
        }, "1.0", {
            requires: ["base", "squarespace-damask-context-globals"]
        })
    },
    1839: function(k, f, c) {
        var g = c(1),
            h = c(602);
        YUI.add("squarespace-widgets-audio-player", function(c) {
            var b = c.namespace("Squarespace.Widgets").AudioPlayerMinimal = c.Base.create("audioPlayer", c.Squarespace.Widgets.SSWidget, [], {
                initializer: function() {
                    this.setAttrs(this.get("render").getData());
                    "" === this.get("title") && this.set("title", "Untitled");
                    this.set("showDownload", "true" === this.get("show-download"));
                    this.set("colorTheme", this.get("color-theme"));
                    this.set("artistName", this.get("author"));
                    this._resizeEmitter =
                        new c.Squarespace.ResizeEmitter;
                    this._registerTrack()
                },
                destructor: function() {
                    c.Lang.isValue(this._funk) && (this._funk.pause(), this._funk = null);
                    c.Lang.isValue(this._resizeEmitter) && (this._resizeEmitter.destroy(), this._resizeEmitter = null)
                },
                renderUI: function() {
                    b.superclass.renderUI.call(this);
                    this.get("showDownload") && this._renderDownloadLink();
                    this.get("boundingBox").addClass(this.get("colorTheme"))
                },
                bindUI: function() {
                    var b = this.get("contentBox");
                    b.one(".action").on("click", function() {
                        this.get("firstPlay") ||
                            this.set("playing", !this.get("playing"))
                    }, this);
                    this.after("playingChange", this._playingChange, this);
                    this.after("progressChange", function(a) {
                        var b = this.get("contentBox").one(".player .time .progress");
                        b.setContent(a.newVal);
                        b.addClass("loaded");
                        this._updateTracker(this.get("position"))
                    }, this);
                    this.after("durationChange", function(a) {
                        var b = this.get("contentBox").one(".player .time .total");
                        b.setContent(a.newVal);
                        b.addClass("loaded");
                        this.syncUI()
                    }, this);
                    this.after("titleChange", function(a) {
                            this.get("contentBox").one(".player .labels .title").setContent(a.newVal)
                        },
                        this);
                    this.after("artistNameChange", function(a) {
                        this.get("contentBox").one(".player .labels .artistName").setContent(a.newVal)
                    }, this);
                    this._registerEvent(this._resizeEmitter.on("resize:end", this.syncUI, this));
                    var a = b.on("click", function(b) {
                        !(this.get("showDownload") && b.target === this._downloadNode.one("a")) && this.get("firstPlay") && (b.halt(), a.detach(), a = null, this._setupScrubber(), this.set("firstPlay", !1), this.set("playing", !0))
                    }, this)
                },
                syncUI: function() {
                    var b = this.get("boundingBox"),
                        a = b.get("offsetWidth");
                    b.one(".player .track").setStyle("width", a);
                    b.toggleClass("playing", this.get("playing"));
                    b.toggleClass("tiny", 300 > a);
                    b.toggleClass("no-artist", "" === this.get("artistName"));
                    b.toggleClass("first-play", this.get("firstPlay"));
                    b = b.one(".player .labels .title");
                    a = b.get("offsetWidth") < b.get("scrollWidth");
                    b.toggleClass("marquee-mark", a)
                },
                _renderNativeAudio: function() {
                    var d = c.Lang.sub(b.NATIVE_TEMPLATE, this.getAttrs());
                    this.get("contentBox").replace(c.Node.create(d))
                },
                _renderDownloadLink: function() {
                    var b =
                        this.get("contentBox").one(".player"),
                        a = '<div class="download"><a href="' + c.Squarespace.UrlUtils.addQueryParam(this.get("url"), "download", "true") + '" target="_blank">Download</a></div>';
                    this._downloadNode = b.one(".secondary-controls").appendChild(a);
                    b.addClass("download")
                },
                _renderVisualizer: function() {
                    for (var b = this.get("contentBox").one(".visualizer"), a = "", c = 0; 100 > c; c++) a += '<div class="eq-bar"><div class="height"></div></div>';
                    b.append(a)
                },
                _playingChange: function(b) {
                    var a = this.get("fixedUrl");
                    c.UA.ios ?
                        window.location.href = a : (c.Lang.isValue(this._funk) || this._registerTrack(), b.newVal ? this._funk.play() : this._funk.pause(), this.syncUI())
                },
                _registerTrack: function() {
                    var b = c.bind(function() {
                            this.set("playing", !1)
                        }, this),
                        a = c.bind(function() {
                            this.set("playing", !0);
                            h.player.setVolume(this.get("volume") / 100)
                        }, this),
                        f = c.bind(function() {
                            var a = this._funk.duration;
                            0 < a && (a = this._durationToStr(a), this.set("duration", a))
                        }, this),
                        g = c.bind(function() {
                            this.set("playing", !1);
                            this.set("position", 0)
                        }, this);
                    this._funk =
                        h.createTrack(this.get("fixedUrl"));
                    this._funk.on("ready", f);
                    this._funk.on("ended", g);
                    this._funk.on("play", a);
                    this._funk.on("pause", b);
                    this._funk.on("inactive", b);
                    this._funk.on("positionChange", c.bind(this._whilePlaying, this))
                },
                _whilePlaying: function(b) {
                    this.get("playing") && (this.set("position", b.position), this.set("progress", this._durationToStr(b.position)))
                },
                _updateTracker: function(b) {
                    this.get("contentBox").one(".track .played").setStyle("width", 100 * (b / this._funk.duration) + "%")
                },
                _mergeEQData: function() {
                    for (var b =
                            theSound.eqData, a = b.left, b = b.right, c = a.length, e = [], f = 0; f < c; f++) e.push((parseFloat(a[f]) + parseFloat(b[f])) / 2);
                    return e
                },
                _calculateEQChunks: function() {
                    for (var b = this._mergeEQData(), a = [], f = 0; f < length; f += 2) {
                        var g = 0;
                        c.Array.each(b.slice(f, f + 2), function(a) {
                            g += a
                        });
                        a.push(75 * (g / 2))
                    }
                    return a
                },
                _drawEQBars: function() {
                    var b = this.get("contentBox").all(".eq-bar .height"),
                        a = this._calculateEQChunks();
                    c.Array.each(a, function(f, g) {
                        var h = b.item(g);
                        c.Lang.isValue(h) && h.setStyle("height", Math.min(45, a[g]))
                    }, this);
                    this.syncUI()
                },
                _setupScrubber: function() {
                    var b = c.Node.create('<div class="scrubber-shim"></div>'),
                        a;
                    b.setStyles({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: Math.pow(10, 7),
                        cursor: "none"
                    });
                    this.get("contentBox").one(".player .track").on("mousedown", function(f) {
                        this._updatePosition(f);
                        var g = h.player.getVolume();
                        a = this.get("contentBox").one(".track").get("region");
                        this._funk.isActive && h.player.setVolume(0.25 * g);
                        c.one("body").append(b);
                        b.once("mouseup", function() {
                            h.player.setVolume(g);
                            b.remove()
                        }, this)
                    }, this);
                    b.on("mousemove", function(b) {
                        b = this._getRelativePosition(a, b.pageX);
                        c.Squarespace.Singletons.MediaTracker.fire("scrollStarted");
                        this._funk.seek(b);
                        this.get("playing") || (this.set("progress", this._durationToStr(b)), this.set("position", b))
                    }, this);
                    b.on("mouseup", function(b) {
                        this._getRelativePosition(a, b.pageX);
                        c.Squarespace.Singletons.MediaTracker.fire("scrollFinished")
                    }, this)
                },
                _updatePosition: function(b) {
                    if (!this.get("firstPlay")) {
                        var a = this.get("contentBox").one(".track").get("region"),
                            c = this.get("contentBox").one(".track .played .icon").get("offsetWidth") /
                            2;
                        this._funk.seek(this._getRelativePosition(a, b.pageX - c))
                    }
                },
                _durationToStr: function(b) {
                    var a = Math.floor(b % 60);
                    b = Math.floor(b / 60);
                    var c = Math.floor(b / 60);
                    0 < c && (b %= 60);
                    var e = "";
                    0 < c && (e += c + ":", 10 > b && (e += "0"));
                    10 > a && (a = "0" + a);
                    return e + (b + ":" + a)
                },
                _getRelativePosition: function(b, a) {
                    return this._funk.duration * Math.min(1, Math.max(0, (a - b.left) / b.width))
                },
                _selectVolume: function(b) {
                    var a = this.get("contentBox").all(".player .volume .bar");
                    a.removeClass("active");
                    a.filter(function(a) {
                        return parseInt(a.getAttribute("data-level"),
                            10) <= b
                    }).addClass("active");
                    c.Squarespace.Singletons.Audio.set("volume", b)
                }
            }, {
                CSS_PREFIX: "sqs-widgets-audio-player",
                HANDLEBARS_TEMPLATE: "block-audio-player.html",
                ATTRS: {
                    fixedUrl: {
                        getter: function() {
                            var b = this.get("url");
                            0 < b.indexOf(Static.SQUARESPACE_CONTEXT.appDomain) && (b = b.replace(/^(http:\/\/|https:\/\/|\/\/)/i, window.location.protocol + "//"));
                            return b
                        },
                        readOnly: !0
                    },
                    firstPlay: {
                        value: !0,
                        validator: c.Squarespace.AttrValidators.isBoolean
                    },
                    position: {
                        value: 0,
                        validator: c.Squarespace.AttrValidators.isNumber
                    },
                    progress: {
                        validator: c.Squarespace.AttrValidators.isNullOrString
                    },
                    duration: {
                        validator: c.Squarespace.AttrValidators.isNullOrString
                    },
                    title: {
                        value: g(""),
                        validator: c.Squarespace.AttrValidators.isString
                    },
                    artistName: {
                        value: "",
                        validator: c.Squarespace.AttrValidators.isString
                    },
                    playing: {
                        value: !1,
                        validator: c.Squarespace.AttrValidators.isBoolean
                    },
                    volume: {
                        value: 100,
                        validator: c.Squarespace.AttrValidators.isNumber
                    }
                }
            })
        }, "1.0", {
            requires: "base node squarespace-block-audio-player-template squarespace-dom-emitters-resize squarespace-media-tracker squarespace-ss-widget squarespace-url-utils widget".split(" ")
        })
    }
});