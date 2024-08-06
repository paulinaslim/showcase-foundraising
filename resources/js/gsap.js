import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(Observer);

    gsap.to(".a", {
        x: 500,
        duration: 3,
        scrollTrigger: {
            start: "0 center",
            trigger: ".b",
            scrub: true,
            toggleActions: "restart pause resume reset",
        },
    });

    gsap.to(".b", {
        x: 500,
        rotation: 360,
        duration: 6,
        scrollTrigger: {
            trigger: ".b",
            start: "50px center",
            scrub: 1,
            toggleActions: "restart pause resume reset",
        },
    });
    gsap.to(".d", {
        scale: 0.2,
        opacity: 0.1,
        duration: 4,
        x: 500,
        y: 200,
        scrollTrigger: {
            trigger: ".c",
            start: "top center",
            scrub: 1,
            toggleActions: "restart pause resume reset",
        },
    });

    gsap.to(".c", {
        x: 500,
        motionPath: {
            path: [
                { x: 100, y: -100 },
                { x: 200, y: 0 },
                { x: 300, y: -100 },
                { x: 400, y: 0 },
            ],
            curviness: 1.5,
        },
        backgroundColor: "#eae2dd",
        rotation: 360,
        duration: 6,
        scrollTrigger: {
            trigger: ".b",
            start: "top center",
            scrub: 1,
            toggleActions: "restart pause resume reset",
        },
    });

    // boxes.forEach((box) => {
    //     gsap.to(box, {
    //         x: 400,
    //         rotation: 360,
    //         duration: 3,
    //         scrollTrigger: {
    //             trigger: box,
    //             start: "top center",
    //             end: "bottom center",
    //             scrub: true,
    //         },
    //     });
    // });

    // -------------BUBBLES-------------

    function getRandomInt(val) {
        return (
            Math.ceil(Math.random() * val) *
            (Math.round(Math.random()) ? 1 : -1)
        );
    }

    function moveBubbles(event, deltaX, deltaY) {
        const el = event.target.closest(".bubble");
        const t = event.type.startsWith("touch") ? 5 : 1;

        el.style.animation = "none";

        gsap.to(el, {
            xPercent: `+=${deltaX * t}`,
            yPercent: `+=${deltaY * t}`,
            rotation: `-=${deltaX * t}`,
            duration: 3,
            ease: "expo.out",
            onComplete: () => {
                gsap.to(el, {
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 2,
                    duration: 50,

                    ease: "power1.out",
                    onComplete: () => {
                        el.style.animation = "";
                    },
                });
            },
        });
    }

    document.querySelectorAll(".bubble").forEach((bubble) => {
        bubble.addEventListener("touchstart", (event) => {
            const randomDirectionX = getRandomInt(20);
            const randomDirectionY = getRandomInt(20);
            moveBubbles(event, randomDirectionX, randomDirectionY);
        });

        Observer.create({
            target: bubble,
            type: "pointer,mouse,scroll",
            onMove: (self) => {
                moveBubbles(self.event, self.deltaX, self.deltaY);
            },
        });
    });
});
