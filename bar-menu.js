/* =========================================================
   NYUMBANI HOTEL — BAR MENU JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const sections =
        document.querySelectorAll(".menu-section");

    const menuItems =
        document.querySelectorAll(".menu-item");

    const footer =
        document.querySelector(".bar-footer");


    /* =====================================================
       REDUCED MOTION
       ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "is-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        sections.forEach((section) => {

            section.classList.add(
                "scroll-hidden"
            );

            revealObserver.observe(section);

        });


        /* =================================================
           MENU ITEM REVEAL
           ================================================= */

        const itemObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "item-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.1
                }
            );


        menuItems.forEach((item) => {

            item.classList.add(
                "item-hidden"
            );

            itemObserver.observe(item);

        });


        /* =================================================
           ACTIVE SECTION EFFECT
           ================================================= */

        const sectionObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "active-section"
                            );

                        } else {

                            entry.target.classList.remove(
                                "active-section"
                            );

                        }

                    });

                },
                {
                    threshold: 0.25
                }
            );


        sections.forEach((section) => {

            sectionObserver.observe(section);

        });

    } else {

        /* =================================================
           FALLBACK FOR OLDER BROWSERS
           ================================================= */

        sections.forEach((section) => {

            section.classList.add(
                "is-visible"
            );

        });


        menuItems.forEach((item) => {

            item.classList.add(
                "item-visible"
            );

        });

    }


    /* =====================================================
       CARD CLICK EFFECT
       ===================================================== */

    menuItems.forEach((item) => {

        item.addEventListener("click", () => {

            menuItems.forEach((otherItem) => {

                otherItem.classList.remove(
                    "selected"
                );

            });


            item.classList.add(
                "selected"
            );


            setTimeout(() => {

                item.classList.remove(
                    "selected"
                );

            }, 500);

        });

    });


    /* =====================================================
       BACK TO TOP BUTTON
       ===================================================== */

    const backToTop =
        document.createElement("button");


    backToTop.className =
        "back-to-top";


    backToTop.type =
        "button";


    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );


    backToTop.innerHTML =
        "↑";


    document.body.appendChild(
        backToTop
    );


    /* =====================================================
       SHOW / HIDE BACK TO TOP
       ===================================================== */

    const updateBackToTop = () => {

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    };


    window.addEventListener(
        "scroll",
        updateBackToTop,
        {
            passive: true
        }
    );


    updateBackToTop();


    /* =====================================================
       SCROLL TO TOP
       ===================================================== */

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior:
                    prefersReducedMotion
                        ? "auto"
                        : "smooth"

            });

        }
    );


    
    /* =====================================================
       PAGE READY
       ===================================================== */

    document.body.classList.add(
        "page-ready"
    );

});