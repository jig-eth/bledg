/*! For license information please see language.js.LICENSE.txt */
(() => {
    "use strict";

    function e(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) e[n] = r[n]
        }
        return e
    }
    var t = function t(r, n) {
        function o(t, o, i) {
            if ("undefined" != typeof document) {
                "number" == typeof(i = e({}, n, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var u = "";
                for (var c in i) i[c] && (u += "; " + c, !0 !== i[c] && (u += "=" + i[c].split(";")[0]));
                return document.cookie = t + "=" + r.write(o, t) + u
            }
        }
        return Object.create({
            set: o,
            get: function(e) {
                if ("undefined" != typeof document && (!arguments.length || e)) {
                    for (var t = document.cookie ? document.cookie.split("; ") : [], n = {}, o = 0; o < t.length; o++) {
                        var i = t[o].split("="),
                            u = i.slice(1).join("=");
                        try {
                            var c = decodeURIComponent(i[0]);
                            if (n[c] = r.read(u, c), e === c) break
                        } catch (e) {}
                    }
                    return e ? n[e] : n
                }
            },
            remove: function(t, r) {
                o(t, "", e({}, r, {
                    expires: -1
                }))
            },
            withAttributes: function(r) {
                return t(this.converter, e({}, this.attributes, r))
            },
            withConverter: function(r) {
                return t(e({}, this.converter, r), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(n)
            },
            converter: {
                value: Object.freeze(r)
            }
        })
    }({
        read: function(e) {
            return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(e) {
            return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
    }, {
        path: "/"
    });

    function r(e) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r(e)
    }

    function n(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
            if (Array.isArray(e) || (r = function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return o(e, t);
                        var r = {}.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(e, t) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var u, c = !0,
            a = !1;
        return {
            s: function() {
                r = r.call(e)
            },
            n: function() {
                var e = r.next();
                return c = e.done, e
            },
            e: function(e) {
                a = !0, u = e
            },
            f: function() {
                try {
                    c || null == r.return || r.return()
                } finally {
                    if (a) throw u
                }
            }
        }
    }

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(r), !0).forEach((function(t) {
                c(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function c(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" != r(e) || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" != r(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" == r(t) ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = "userLanguage",
        f = {};
    document.location.hostname.endsWith(".ledger.com") && (f.domain = ".ledger.com");
    var l = function() {
            return t.get(a) || navigator.language.slice(0, 2) || ""
        },
        s = function(e) {
            t.set(a, e, u(u({}, f), {}, {
                expires: 365
            }))
        };
    window.addEventListener("load", (function() {
        var e, r = [document.querySelector("#language-popup"), document.querySelector("#language-popup-no"), document.querySelector("#language-popup-set-default"), document.querySelector(".activeLanguage"), document.querySelectorAll(".localeItem"), document.querySelector("#user-language")],
            o = r[0],
            i = r[1],
            u = r[2],
            c = r[3],
            a = r[4],
            f = r[5],
            d = [],
            p = n(a);
        try {
            var m = function() {
                var t = e.value;
                d.find((function(e) {
                    return e.isoCode === t.getAttribute("data-isocode")
                })) || d.push({
                    isoCode: t.getAttribute("data-isocode"),
                    name: t.getAttribute("data-name"),
                    url: t.getAttribute("href")
                })
            };
            for (p.s(); !(e = p.n()).done;) m()
        } catch (e) {
            p.e(e)
        } finally {
            p.f()
        }
        var g, y = n(a);
        try {
            for (y.s(); !(g = y.n()).done;) {
                g.value.addEventListener("click", (function(e) {
                    e.preventDefault(), s(e.target.getAttribute("data-isocode")), window.location.href = e.target.getAttribute("href")
                }))
            }
        } catch (e) {
            y.e(e)
        } finally {
            y.f()
        }
        var v = c.getAttribute("data-isocode"),
            b = l();
        b !== v && d.some((function(e) {
            return e.isoCode === b
        })) && !t.get("userLanguage") && (f.textContent = d.find((function(e) {
            return e.isoCode === b
        })).name, o.classList.remove("is-hidden"), i.addEventListener("click", (function() {
            s(v), o.classList.add("is-hidden")
        })), u.addEventListener("click", (function() {
            o.classList.add("is-hidden"), window.location.href = d.find((function(e) {
                return e.isoCode === b
            })).url
        })))
    }))
})();