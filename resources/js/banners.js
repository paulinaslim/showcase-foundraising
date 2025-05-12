import anime from "animejs";
import SplitType from "split-type";

document.addEventListener("DOMContentLoaded", function () {
    const bannersWrapper = document.getElementById("banners-page");
    const animateWhenVisible = (element, animationCallback) => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animationCallback();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        observer.observe(element);
    };

    //EXAMPLE  MOTION PATH SVG
    const demoSvg = document.querySelector("#demo-svg path");
    const svgElement = document.getElementById("#demo-svg");
    const demoPath = anime.path("#demo-svg path");

    anime({
        targets: ".path-target",
        translateX: demoPath("x"),
        translateY: demoPath("y"),
        rotate: demoPath("angle"),
        easing: "linear",
        duration: 10000,
        loop: true,
    });

    // ROCKET MOTION PATH

    const svgPath = document.querySelector(".rocket-path path");
    const rocket = document.querySelector(".rocket-object");

    const path = anime.path(svgPath);

    anime({
        targets: rocket,
        translateX: path("x"),
        translateY: path("y"),
        easing: "easeInOutCubic",
        duration: 10000,
        rotate: [
            { value: 0, duration: 0 },
            { value: 50, duration: 5000 },
            { value: 0, duration: 5000 },
        ],
        loop: true,
    });

    // ****************************************************************
    //  --------------------- BANNERS ----------------------
    // ****************************************************************

    // Banner 1 (Bangkok)
    const headline = bannersWrapper.querySelector(".banner-1");
    new SplitType(headline, { types: " chars" });
    const chars = headline.querySelectorAll(".char");

    anime.timeline({ loop: true }).add({
        targets: chars,
        opacity: [0, 1],
        translateY: ["-1rem", "0rem"],
        easing: "easeOutExpo",
        delay: anime.stagger(250),
        duration: 800,
    });

    // Banner 2 -  Kuala Lumpur
    const headlineKualaLumpur = bannersWrapper.querySelector(".banner-2");
    anime
        .timeline({ loop: true })
        .add({
            targets: headlineKualaLumpur,
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
            offset: "-=875",
            delay: 250,
        })
        .add({
            targets: headlineKualaLumpur,
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
        });

    // Banner 3 - Síngapore
    const singapur = bannersWrapper.querySelector(".banner-3");
    new SplitType(singapur, { types: "chars" });

    anime
        .timeline({ loop: true })
        .add({
            targets: ".banner-3 .line-before",
            scale: [0, 5],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
        })
        .add({
            targets: ".banner-3 .line-after",
            translateX: [],
            easing: "easeOutExpo",
            duration: 200,
            delay: 100,
        })
        .add({
            targets: ".banner-3 .char",
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 300,
            offset: "-=775",
            delay: (el, i) => 34 * (i + 1),
        })
        .add({
            targets: ".banner-3",
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 300,
        });

    // Banner 03 Hong Kong
    const banner03 = document.querySelector(".banner-03");
    new SplitType(banner03, { type: "char" });
    const rect = banner03.getBoundingClientRect();
    anime
        .timeline({ loop: true })
        .add({
            targets: ".banner-03 .line00",
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
        })
        .add({
            targets: ".banner-03 .line00",
            translateX: [0, rect.width + 10],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100,
        })
        .add({
            targets: ".banner-03 .char",
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=775",
            delay: (el, i) => 34 * (i + 1),
        })
        .add({
            targets: ".banner-03",
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
        });

    // Banner 4 - Changing Town Names
    const towns = [
        "Francisco",
        "Diego",
        "Antonio",
        "Jose",
        "Bernardino",
        "Sebastian",
    ];

    const elTown = document.querySelector(".el-town");

    function animateTownName() {
        const randomTownName = towns[Math.floor(Math.random() * towns.length)];
        elTown.innerHTML = randomTownName;

        const randomTown = new SplitType(elTown);

        anime
            .timeline({ loop: false })
            .add({
                targets: randomTown.chars,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 40 * (i + 1),
            })
            .add({
                targets: randomTown.chars,
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000,
                complete: () => {
                    randomTown.revert();
                    animateTownName();
                },
            });
        const textWrapper = document.querySelector(".el-town");
        if (textWrapper) textWrapper.classList.add("visible");
    }
    animateTownName();

    // Banner 5 and 6 Animation (Disco Banners) with Observer
    const bannerWrapper5 = document.querySelector(".banner-wrapper-5");
    const banner05 = document.querySelector(".banner-5");
    const bannerWrapper6 = document.querySelector(".banner-wrapper-6");
    const europeTowns = [
        "Warsaw",
        "Berlin",
        "Dublin",
        "Bucharest",
        "Praga",
        "Madrit",
    ];
    const colors = [
        "#BCD7495b",
        "#FEC1395b",
        "#4b6d3ae5",
        "f21d1d5e5",
        "#f21d1d78",
        "#D7D34978",
    ];
    const randomTownName =
        europeTowns[Math.floor(Math.random() * europeTowns.length)];
    const typingTown = document.querySelectorAll(".banner-typing-town");

    typingTown.forEach((town) => {
        town.innerHTML = randomTownName;
    });

    animateWhenVisible(bannerWrapper5, () => {
        new SplitType(typingTown, { types: "chars" });

        anime.timeline({ loop: false }).add({
            targets: ".banner-5 .char",
            opacity: [0, 1],
            duration: 700,
            easing: "easeOutExpo",
            delay: anime.stagger(100, { start: 500 }),

            update: () => {
                bannerWrapper5.style.backgroundColor =
                    colors[Math.floor(Math.random() * colors.length)];
            },
            complete: () => {
                bannerWrapper5.style.backgroundColor =
                    colors[Math.floor(Math.random() * colors.length)];
            },
        });
    });

    animateWhenVisible(bannerWrapper6, () => {
        const letters = document.querySelectorAll(".banner-6 .char");
        anime
            .timeline({ loop: false })
            .add({
                targets: letters,
                opacity: [0, 1],
                duration: 1000,
                easing: "linear",
                complete: () => {
                    bannerWrapper5.style.color =
                        colors[Math.floor(Math.random() * colors.length)];
                },
            })
            .add({
                targets: bannerWrapper6,
                opacity: [0, 1],
                duration: 1000,
                easing: "linear",
                delay: anime.stagger(500),
                update: () => {
                    bannerWrapper6.style.backgroundColor =
                        colors[Math.floor(Math.random() * colors.length)];
                },
            });
    });
});
