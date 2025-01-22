(() => {
    jQuery(".textwidget").each((function() {
        jQuery(this).replaceWith(jQuery(this).contents())
    }));
    for (var e = document.querySelectorAll(".fields-container input"), t = 0, r = e.length; t < r; t++) e[t].addEventListener("focus", (function(e) {
        var t, r = e.target.id;
        (r && (t = document.querySelector("label[for=" + r + "]")), t) && t.closest("div").classList.add("is-active")
    }), !1), e[t].addEventListener("blur", (function(e) {
        if (!e.target.value) {
            var t, r = e.target.id;
            if (r && (t = document.querySelector("label[for=" + r + "]")), t) t.closest("div").classList.remove("is-active")
        }
    }), !1);
    jQuery(e).each((function() {
        "" != jQuery(this).val() && jQuery(this).parent().addClass("is-active")
    }));
    var i = document.getElementById("main-navigation");
    if (i) {
        var o = function() {
                var e = this,
                    t = a.querySelectorAll(".has-children.is-open");
                null == t || t.forEach((function(t) {
                    return t !== e && t.classList.toggle("is-open")
                })), this.classList.toggle("is-open")
            },
            n = document.getElementById("mobile-menu"),
            a = document.getElementById("header"),
            c = a.querySelectorAll(".has-children"),
            l = a.className;
        n.addEventListener("click", (function() {
            i.classList.toggle("is-open"), n.classList.toggle("is-open"), a.classList.toggle(l.trim()), a.classList.toggle("white-header"), i.style.top = a.offsetHeight + "px"
        }), !1), null == c || c.forEach((function(e) {
            return e.addEventListener("click", o, !1)
        }))
    }
    jQuery("body").click((function() {
        jQuery(".fb_lightbox-overlay-fixed,.preloaded_lightbox").remove(), jQuery("body, html").removeClass("fb_lightbox-lock"), jQuery("body").css("overflow", "auto")
    }));
    var s = jQuery(".guide-playlist-tab");
    if (s.length) {
        var u = jQuery(".guide-playlist-tab > .active").offset().left - 30;
        s.scrollLeft(u)
    }
    var d = getCookie("ledger.affiliate_uuid"),
        f = getCookie("ledger.affiliate_tracker"),
        y = ".ledger.com",
        h = new URLSearchParams(window.location.search),
        v = h.get("r"),
        g = h.get("tracker");
    if (null !== v && (!d || d !== v || f !== g)) {
        d = v, f = g;
        var j = document.referrer;
        document.cookie = "ledger.affiliate_uuid=".concat(d, ";path=/;domain=").concat(y, ";"), document.cookie = "ledger.affiliate_tracker=".concat(f, ";path=/;domain=").concat(y, ";"), document.cookie = "ledger.referrer=".concat(j, ";path=/;domain=").concat(y, ";"),
            function(e, t) {
                var r = JSON.stringify({
                    affiliate_uuid: e,
                    referrer: t
                });
                fetch("".concat(ParamsDataMain.url_affiliate, "/api/v1.0/affiliate/hit"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },
                    body: r
                }).then((function(e) {
                    e.ok ? console.log("Affiliates Hit: Success") : console.log("Affiliates Hit: Fail")
                })).catch((function(e) {
                    console.error("An error occurred while processing the request:", e)
                }))
            }(d, j)
    }
    if (jQuery("body").click((function() {
            jQuery("html").removeClass(), jQuery("body").css("overflow-y", "visible"), jQuery(".fb_digioh-overlay, .fb_lightbox-overlay, .fb_lightbox-overlay-fixed, .preloaded_lightbox, .preloaded_lightbox iframe").hide()
        })), document.addEventListener("DOMContentLoaded", (function() {
            var e;
            if ("IntersectionObserver" in window) {
                e = document.querySelectorAll(".lazy");
                for (var t = new IntersectionObserver((function(e, r) {
                        for (var i = 0, o = e.length; i < o; i++)
                            if (e[i].isIntersecting) {
                                var n = e[i].target;
                                n.src = n.dataset.src, n.classList.remove("lazy"), t.unobserve(n)
                            }
                    })), r = 0, i = e.length; r < i; r++) t.observe(e[r])
            } else {
                var o, n = function() {
                    o && clearTimeout(o), o = setTimeout((function() {
                        var t = jQuery(window).scrollTop();
                        e.each((function() {
                            var r = jQuery(this);
                            if (r.offset().top < window.innerHeight + t + 500) {
                                var i = r.attr("data-src");
                                r.attr("src", i), r.removeClass("lazy"), e = jQuery(".lazy")
                            }
                        })), 0 == e.length && (jQuery(document).off("scroll"), jQuery(window).off("resize"))
                    }), 20)
                };
                e = jQuery(".lazy"), jQuery(document).on("scroll", n), jQuery(window).on("resize", n)
            }
        })), document.addEventListener("DOMContentLoaded", (function(e) {
            new Swiper(".testimonial-swiper", {
                slidesPerView: "auto",
                centeredSlides: !0,
                spaceBetween: 25,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                }
            });
            var t = jQuery(".fadin-blocks");
            t.length > 0 && jQuery(window).on("scroll", (function() {
                t.offset().top;
                var e = jQuery(window).scrollTop();
                jQuery(t).each((function() {
                    jQuery(this).offset().top - 460 < e && (jQuery(this).css("transform", "translate(0,0)"), jQuery(this).css("opacity", "1"))
                }))
            })), jQuery(".open-pop-modal").each((function(e) {
                jQuery(this).on("click", (function() {
                    var e = jQuery(this).data("modal");
                    jQuery(".pop-modal#" + e).addClass("active")
                }))
            })), jQuery(".close-pop-modal").on("click", (function() {
                var e = jQuery(this).parent().attr("id"),
                    t = jQuery("#" + e + " iframe").attr("src");
                jQuery("#" + e + " iframe").attr("src", t), jQuery("#" + e).removeClass("active").removeAttr("style")
            }));
            var r = jQuery(".scroll-fixed-content .item");
            if (r.length > 0) {
                var i = jQuery(".scroll-fixed-content").data("limit") || 52;
                jQuery(window).scroll((function(e) {
                    jQuery(window).width() <= 992 && (i = 35), r.removeClass("active");
                    var t, o = window.innerHeight,
                        n = jQuery(e.target).scrollTop(),
                        a = Math.round(n + o * i / 100);
                    r.each((function(e, r) {
                        var i = jQuery(r);
                        i.offset().top < a && (t = i)
                    })), t || (t = jQuery(".scroll-fixed-content .item:eq(0)")), idElement = t.data("id"), jQuery(".scroll-fixed-content .item[data-id=" + idElement + "]").addClass("active")
                }))
            }
        })), jQuery("#main").hasClass("changing-header")) {
        jQuery("#header").offset().top;
        var Q = jQuery("#hero").outerHeight();
        jQuery(window).scroll((function(e) {
            jQuery(this).scrollTop() > Q ? jQuery("#header").fadeIn(40).addClass("out-of-top") : jQuery("#header").removeClass("out-of-top")
        }))
    }
    jQuery(document).ready((function() {
        var e = this,
            t = document.querySelectorAll("[data-animation=true]"),
            r = new IntersectionObserver((function(e) {
                e.forEach((function(e) {
                    e.isIntersecting && e.target.classList.add("anim-start")
                }))
            }), {
                threshold: .5
            });
        t.forEach((function(e) {
            r.observe(e)
        }));
        var i = 0,
            o = function() {
                var t = jQuery(e).scrollTop();
                jQuery("header").toggleClass("sticky", i > t && 0 !== t), i = t
            };

        function n(e) {
            window.location.href = e
        }(!jQuery(".secondary-sticky-header").length || window.matchMedia("(max-width: 768px)").matches && jQuery(".secondary-sticky-header").length) && jQuery(window).scroll((function(e) {
            window.requestAnimationFrame(o)
        })), jQuery(".all-clickable").each((function() {
            var e = jQuery(this).find("a:first-of-type").attr("href");
            jQuery(this).on("click", (function() {
                var t = jQuery(this).find("input"),
                    r = jQuery(this).find(".no-all-clickable");
                "undefined" != typeof inputOfCar ? jQuery(event.target).closest(t).length || n(e) : void 0 !== r && jQuery(event.target).closest(r).length || n(e)
            }))
        }));
        var a = jQuery(".download-button");
        if (0 !== a.length) {
            var c = function(e) {
                jQuery(e).toggleClass("is-open"), jQuery(e).siblings(".list-app").toggleClass("is-hidden").fadeIn(100)
            };
            a.each((function(e, t) {
                jQuery(t).click((function(e) {
                    e.stopPropagation(), c(e.currentTarget)
                }))
            })), jQuery(".list-app").click((function(e) {
                e.stopPropagation()
            })), jQuery(document).click((function(e) {
                jQuery(e.currentTarget).closest(".download-button").length || a.hasClass("is-open") && c(e.currentTarget)
            }))
        }
        winWidth = jQuery(window).width(), 0 !== jQuery("#on-click-block").length && winWidth >= 768 && (activeIllustration = jQuery("#on-click-block .swiper-container").find(".active").find("img").attr("src"), jQuery("#on-click-block-illustration").html('<img src="' + activeIllustration + '" alt="">'), jQuery("#on-click-block .swiper-container .swiper-slide").click((function() {
            jQuery("#on-click-block .swiper-container .swiper-slide").removeClass("active"), jQuery(this).addClass("active"), activeIllustration = jQuery("#on-click-block .swiper-container").find(".active").find("img").attr("src"), jQuery("#on-click-block-illustration img").attr("src", activeIllustration)
        })));
        var l = jQuery("#top-of-the-pop");
        l.length > 0 && jQuery(window).scroll((function(e) {
            winWidth = jQuery(window).width();
            var t = jQuery("#header").outerHeight(),
                r = jQuery(this).scrollTop();
            l && winWidth > 860 && (r >= t ? jQuery("#top-of-the-pop").fadeIn(40) : jQuery("#top-of-the-pop").fadeOut(40))
        }))
    })), document.addEventListener("DOMContentLoaded", (function() {
        window.addEventListener("load", (function() {
            ! function(e) {
                var t = document.getElementById(e);
                t && t.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }(window.location.hash.replace("#", ""))
        }))
    }))
})();