document.addEventListener("DOMContentLoaded", function () {
    function pageTransitionStripes() {
        let tl = gsap.timeline();
        tl.to("ul.transition li", {
            duration: 0.2,
            scaleY: 1,
            transformOrigin: "bottom left",
            stagger: 0.2,
            delay: 0.1,
        });

        tl.to("ul.transition li", {
            duration: 0.5,
            scaleY: 0,
            transformOrigin: "bottom left",
            stagger: 0.1,
            delay: 0.1,
        });
    }

    function pageTransitionInsideOut() {
        let tl = gsap.timeline();
        tl.to("#gsap", {
            duration: 0.2,
            transformOrigin: "center center",
            delay: 0.1,
            scale: 250,
        });
    }

    function initializePage() {}
    initializePage();

    // function contentAnimation() {
    //     let tl = gsap.timeline();

    //     tl.from(".page-wrapper", {
    //         duration: 0.5,
    //         translateY: 50,
    //         opacity: 0,
    //     });
    // }
    barba.init({
        sync: true,
        transitions: [
            {
                async leave(data) {
                    console.log("leave");
                    window.scrollTo(0, 0);
                    // initializePage();
                    // pageTransitionStripes();
                    // pageTransitionInsideOut();
                },
                async enter(data) {
                    console.log("enter next");
                    window.scrollTo(0, 0);
                    // initializePage();
                    // contentAnimation();
                },
                async once(data) {
                    // contentAnimation();
                },
            },
        ],
    });
});
