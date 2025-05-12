import anime from "animejs";
import SplitType from "split-type";

document.addEventListener("DOMContentLoaded", function () {
    const bannerWrapper = document.querySelector(".banner-product-wrapper");
    const bannerTyping = bannerWrapper.querySelectorAll(".banner-typing");

    const adjectives = [
        "yourself",
        "beautiful",
        "natural",
        "free",
        "magnetic",
        "focus",
    ];
    const colors = [
        "#BCD7495b",
        "#FEC1395b",
        "#4b6d3ae5",
        "#f21d1d5e5",
        "#f21d1d78",
        "#D7D34978",
    ];

    function animateWord() {
        const randomAdjective =
            adjectives[Math.floor(Math.random() * adjectives.length)];

        bannerTyping.forEach((adj) => {
            adj.innerHTML = randomAdjective;

            // Select a random color from the colors array
            const randomColor =
                colors[Math.floor(Math.random() * colors.length)];
            adj.style.color = randomColor; // Apply random color to the text
        });

        bannerTyping.forEach((adj) => {
            const splitInstance = new SplitType(adj, { types: "chars" });

            anime
                .timeline({ loop: false })
                .add({
                    targets: splitInstance.chars,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 600,
                    delay: (el, i) => 40 * (i + 1),
                })
                .add({
                    targets: splitInstance.chars,
                    opacity: 0,
                    duration: 1000,
                    easing: "easeOutExpo",
                    delay: 1000,
                    complete: () => {
                        splitInstance.revert();
                        animateWord(); // Restart the animation with a new word
                    },
                });
        });
    }

    animateWord();
});
