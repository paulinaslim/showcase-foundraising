document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const formButton = document.querySelector(".btn-application");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    formButton.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector("#form").scrollIntoView({
            behavior: "smooth",
        });
    });
});
