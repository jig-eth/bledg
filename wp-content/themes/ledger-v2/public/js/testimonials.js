document.addEventListener("DOMContentLoaded", (function() {
    var e, t, n, i = document.querySelector(".swiper-testimonials-container");
    i && (window.innerWidth > 768 ? (e = 24, t = 0, n = 0) : (e = 10, t = 15, n = 0), new Swiper(".swiper-testimonials-container", {
        slidesPerView: "auto",
        centeredSlides: !1,
        spaceBetween: e,
        slidesOffsetAfter: t,
        slidesOffsetBefore: n,
        navigation: {
            nextEl: ".testimonials-block .swiper-testimonials-button-next",
            prevEl: ".testimonials-block .swiper-testimonials-button-prev"
        },
        on: {
            slideChange: function(e) {
                i.classList.toggle("end", e.isEnd)
            }
        }
    }))
}));