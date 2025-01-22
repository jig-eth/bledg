document.addEventListener("DOMContentLoaded", (function() {
    var e = document.querySelector(".cryptos-slide");
    Array.from(e.children).forEach((function(n) {
        var o = n.cloneNode(!0);
        e.appendChild(o)
    }))
}));