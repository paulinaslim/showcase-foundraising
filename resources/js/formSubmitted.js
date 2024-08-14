import SimpleParallax from "simple-parallax-js/vanilla";
import SplitType from "split-type";

document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementsByClassName("thumbnail");
    new SimpleParallax(image, {
        orientation: "down",
        overflow: true,
    });

    const text = new SplitType("#split-text");
    const chars = text.chars;

    anime
        .timeline({ loop: true })
        .add({
            targets: "#split-text .line",
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
        })
        .add({
            targets: "#split-text .line",
            translateX: [
                0,
                document.querySelector(" #split-text").getBoundingClientRect()
                    .width,
            ],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100,
        })
        .add({
            targets: "#split-text .char",
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=775",
            delay: (el, i) => 34 * (i + 1),
        })
        .add({
            targets: "#split-text",
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
        });
});
