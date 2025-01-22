(() => {
    var e, n, a, t;
    e = "apptracking", n = window.location.search, a = new URLSearchParams(n).get(e), t = getCookie(e), null !== a && (document.cookie = "".concat(e, "=").concat(a, "; path=/;")), "false" !== a && "false" !== t || document.head.insertAdjacentHTML("beforeend", "<style>#onetrust-consent-sdk{display:none;}</style>")
})();