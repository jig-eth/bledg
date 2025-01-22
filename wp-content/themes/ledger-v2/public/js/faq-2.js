document.addEventListener("DOMContentLoaded", (function(e) {
    var t = window.innerWidth,
        n = document.querySelector("[data-faq]"),
        o = 0;

    function a(e) {
        var t = window.getComputedStyle(e);
        return e.offsetHeight + parseInt(t.marginTop) + parseInt(t.marginBottom)
    }

    function r(e) {
        var t = a(e.parentNode.querySelector("[data-answer]")),
            r = t > o ? t : o;
        n.style.height = "".concat(r, "px")
    }
    if (n && (o = a(n)), t > 859) {
        var d = document.querySelectorAll("[data-question]");
        d && d.forEach((function(e) {
            e.checked && r(e), e.addEventListener("change", (function(t) {
                r(e)
            }))
        }))
    }
}));