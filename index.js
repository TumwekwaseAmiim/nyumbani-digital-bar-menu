/* =========================================================
   NYUMBANI HOTEL — LANDING PAGE
   INDEX.JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const landingPage =
        document.querySelector(".landing-page");

    const logo =
        document.querySelector(".hotel-logo");

    const barImage =
        document.querySelector(".bar-image");

    const menuButton =
        document.querySelector(".menu-button");


    /* =====================================================
       PAGE READY
       ===================================================== */

    document.body.classList.add("page-ready");


    /* =====================================================
       IMAGE ERROR HANDLING
       ===================================================== */

    if (logo) {

        logo.addEventListener("error", () => {

            console.warn(
                "Nyumbani Hotel logo could not be loaded."
            );

        });

    }


    if (barImage) {

        barImage.addEventListener("error", () => {

            console.warn(
                "Nyumbani Hotel bar image could not be loaded."
            );

        });

    }


    /* =====================================================
       MENU BUTTON
       ===================================================== */

    if (menuButton) {

        menuButton.addEventListener("click", () => {

            /*
             * Normal HTML navigation is used.
             * We deliberately do NOT create or inject
             * another logo, image, header, or menu here.
             */

        });

    }


    /* =====================================================
       OPTIONAL IMAGE HOVER
       ===================================================== */

    if (landingPage && barImage) {

        barImage.addEventListener(
            "mouseenter",
            () => {

                barImage.style.transform =
                    "scale(1.03)";

            }
        );


        barImage.addEventListener(
            "mouseleave",
            () => {

                barImage.style.transform =
                    "scale(1)";

            }
        );

    }

});