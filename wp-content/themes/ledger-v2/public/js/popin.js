document.addEventListener("DOMContentLoaded", (function(e) {
    var t, n, o, i = document.querySelector("[data-popin]");
    i && (n = i.querySelector("[data-popin-close]"), o = i.querySelector("[data-popin-email]"), t = i.dataset.popin && Number.isInteger(Number(i.dataset.popin)) ? Number(i.dataset.popin) / 100 : .5), o && o.addEventListener("input", (function() {
        "" !== o.value.trim() ? o.parentNode.classList.add("is-not-empty") : o.parentNode.classList.remove("is-not-empty")
    }));
    var r = function() {
        i.querySelector(".container").classList.remove("open"), setTimeout((function() {
            i.classList.remove("open")
        }), 300)
    };
    i && (window.onclick = function(e) {
        e.target === i && r()
    });
    var a = function() {
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight * t && (i.classList.add("open"), setTimeout((function() {
            i.querySelector(".container").classList.add("open")
        }), 0), window.removeEventListener("scroll", a))
    };
    t && window.addEventListener("scroll", a), n && n.addEventListener("click", r)
}));