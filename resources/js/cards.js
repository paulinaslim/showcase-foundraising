// document.addEventListener("DOMContentLoaded", function () {
//     const cards = document.querySelectorAll(".card");

//     const observer = new IntersectionObserver(
//         (entries) => {
//             console.log("entries", entries);
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("active-cards");
//                 } else {
//                     entry.target.classList.remove("active-cards");
//                 }
//             });
//         },
//         {
//             threshold: 0.1,
//         }
//     );
//     function observeActiveCards() {
//         cards.forEach((card) => {
//             observer.observe(card);
//             console.log("observer target", observer);
//         });
//     }
//     observeActiveCards();
// });

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
