import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, Observer, TextPlugin);
    gsap.registerPlugin(ScrollToPlugin);

    let panels = document.querySelectorAll(".panel");
    let scrollTween = null;
    let snapTriggers = [];
    let scrollStarts = [];
    let snapScroll = (value) => value;

    panels.forEach((panel, i) => {
        ScrollTrigger.create({
            trigger: panel,
            start: "-300px top",
            ease: "power2.easeOut",
            duration: 5,
        });
    });

    ScrollTrigger.addEventListener("refresh", () => {
        scrollStarts = snapTriggers.map((trigger) => trigger.start);
        snapScroll = ScrollTrigger.snapDirectional(scrollStarts);
    });

    const headlineSpan = document.getElementById("headline-span");
    gsap.to(headlineSpan, {
        duration: 3,
        text: " lasting Impact.",
        ease: "power2.out",
        delay: 0.4,
    });
});
