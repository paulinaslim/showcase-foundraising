import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SimpleParallax from "simple-parallax-js/vanilla";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    const imgs = gsap.utils.toArray(".parallax-img");
    const spanLine = gsap.utils.toArray(".span-line");
    const randomWordsPositive = [
        "universe.",
        "heaven.",
        "wonderland.",
        "paradise.",
    ];
    const randomWordsNegative = ["hell.", "misery.", "nightmare.", "agony."];

    imgs.forEach((img) => {
        const speed = img.dataset.speed;
        gsap.to(img, {
            yPercent: speed * 100,
            ease: "none",
            scrollTrigger: {
                trigger: img,
                start: "top bottom",
                scrub: true,
                stagger: 0.2,
            },
        });
    });

    function getRandomString(length) {
        let result = "";
        const characters = `acexxmnoaxwrsuvxxx`;
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
            counter += 1;
        }
        return result;
    }

    function getRandomWordPositive() {
        return randomWordsPositive[
            Math.floor(Math.random() * randomWordsPositive.length)
        ];
    }

    function getRandomWordNegative() {
        return randomWordsNegative[
            Math.floor(Math.random() * randomWordsNegative.length)
        ];
    }
    spanLine.forEach((span) => {
        span.innerHTML = getRandomString(7);
    });

    spanLine.forEach((span) => {
        let spanOutput;
        if (span.classList.contains("span-positive")) {
            spanOutput = getRandomWordPositive();
        } else if (span.classList.contains("span-negative")) {
            spanOutput = getRandomWordNegative();
        }

        gsap.to(span, {
            duration: 3,
            text: spanOutput,
            ease: "power2.out",
            delay: 0.4,
            onComplete: function () {
                span.classList.add("animated-span");
            },
        });
    });

    // PARALLAX WITH SIMPLEPARALLAX - > add class parallax-thumbnail-wrapper
    const images = document.querySelectorAll(".thumbnail");

    images.forEach((image) => {
        const imageHeight = image.clientHeight;
        const scale = 1.5;
        const range = imageHeight * scale - imageHeight;

        new SimpleParallax(image, {
            orientation: "down",
            overflow: true,
            scale: scale,
            translate: (percentage) => {
                const translation = (percentage / 100) * range - range / 2;
                return translation;
            },
            customWrapper: "main #content",
            customContainer: ".parallax-thumbnail-wrapper",
        });
    });
});
