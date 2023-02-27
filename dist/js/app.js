(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (() => {
        const SLIDEITEMS = document.querySelectorAll(".swiper-slide");
        const NEXTBTN = document.querySelector(".slider__button-next");
        NEXTBTN.addEventListener("click", plusSlides);
        const FIRSTSLIDE = document.querySelector(".swiper-slide__img--first");
        const SECONSLIDE = document.querySelector(".swiper-slide__img--second");
        const DOTS = document.querySelectorAll(".dot");
        const SECONDCIRCLE = document.querySelector(".swiper-slide--second");
        const FIRSTCIRCLE = document.querySelector(".swiper-slide--first");
        function circleAnimations() {
            FIRSTCIRCLE.classList.add("active");
            setTimeout(secondCircle, 100);
            function secondCircle() {
                SECONDCIRCLE.classList.add("active");
            }
        }
        let slideIndex = 1;
        function plusSlides() {
            circleAnimations();
            setTimeout((function() {
                showSlides(slideIndex += 1);
            }), 400);
        }
        function showSlides() {
            let i;
            if (slideIndex > SLIDEITEMS.length) slideIndex = 1;
            if (slideIndex < 1) slideIndex = SLIDEITEMS.length;
            for (i = 0; i < SLIDEITEMS.length; i++) SLIDEITEMS[i].style.display = "none";
            for (i = 0; i < DOTS.length; i++) DOTS[i].className = DOTS[i].className.replace(" active", "");
            SLIDEITEMS[slideIndex - 1].style.display = "block";
            DOTS[slideIndex - 1].className += " active";
            function getSrcForSlider() {
                let counterFirst;
                let counterPrev;
                if (slideIndex >= 1 && slideIndex < SLIDEITEMS.length) {
                    counterFirst = slideIndex + 1;
                    counterPrev = slideIndex;
                    if (counterFirst > SLIDEITEMS.length - 1) counterFirst = 0;
                    if (counterPrev > SLIDEITEMS.length - 1) counterPrev = 1;
                } else {
                    counterFirst = 0;
                    counterPrev = 1;
                }
                FIRSTSLIDE.src = SLIDEITEMS[counterFirst].querySelector(".swiper-slide__img").src;
                SECONSLIDE.src = SLIDEITEMS[counterPrev].querySelector(".swiper-slide__img").src;
            }
            getSrcForSlider();
            setTimeout(removeActive, 1e3);
            function removeActive() {
                FIRSTCIRCLE.classList.remove("active");
                SECONDCIRCLE.classList.remove("active");
            }
        }
        showSlides(slideIndex);
    }));
    window["FLS"] = true;
    isWebp();
})();