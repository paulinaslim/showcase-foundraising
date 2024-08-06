document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const mobileImg = document.querySelector(".mobile img");
    const formButton = document.querySelector(".btn-application");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            mobileImg.classList.add("scrolled");
        } else {
            mobileImg.classList.remove("scrolled");
            navbar.classList.remove("scrolled");
        }
    });

    if (formButton) {
        formButton.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector("#form").scrollIntoView({
                behavior: "smooth",
            });
        });
    }
});
