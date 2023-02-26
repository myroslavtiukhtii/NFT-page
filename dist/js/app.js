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
        let slideIndex = 1;
        function plusSlides() {
            showSlides(slideIndex += 1);
        }
        function showSlides() {
            let i;
            if (slideIndex > SLIDEITEMS.length) slideIndex = 1;
            if (slideIndex < 1) slideIndex = SLIDEITEMS.length;
            for (i = 0; i < SLIDEITEMS.length; i++) SLIDEITEMS[i].style.display = "none";
            SLIDEITEMS[slideIndex - 1].style.display = "block";
            let imgSrc;
            function getSrcForFirstSlider() {
                let firstCounter;
                firstCounter = slideIndex + 1;
                imgSrc = SLIDEITEMS[firstCounter].querySelector(".swiper-slide__img").src;
                FIRSTSLIDE.src = imgSrc;
                console.log(`firstCounter = ${firstCounter}`);
            }
            function getSrcForSecondSlider() {
                let secondCounter;
                secondCounter = slideIndex + 2;
                imgSrc = SLIDEITEMS[secondCounter].querySelector(".swiper-slide__img").src;
                SECONSLIDE.src = imgSrc;
                console.log(`secondCounter = ${secondCounter}`);
            }
            getSrcForFirstSlider();
            getSrcForSecondSlider();
            console.log(`slideIndex = ${slideIndex}`);
        }
        showSlides(slideIndex);
    }));
    window["FLS"] = true;
    isWebp();
})();