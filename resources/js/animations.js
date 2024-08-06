document.addEventListener("DOMContentLoaded", function () {
    const svg = document.getElementById("vivus-svg");
    const loop = (animation) => {
        animation.stop().reset().play();
    };

    if (svg) {
        const animatedSVG = new Vivus(
            svg,
            {
                duration: 200,
                start: "autostart",
            },
            function () {
                loop(animatedSVG);
            }
        );
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//     const svgArray = document.querySelectorAll("#vivus-svg");

//     const loop = (animation) => {
//         animation.stop().reset().play();
//     };

//     svgArray.forEach((svg) => {
//         if (svg) {
//             new Vivus(
//                 svg,
//                 {
//                     duration: 200,
//                     start: "autostart",
//                 },
//                 function (animation) {
//                     loop(animation);
//                 }
//             );
//         }
//     });
// });
