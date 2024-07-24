// resources/js/form.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".application-form");
    const successAlert = form.querySelector(".success");
    const dangerAlert = form.querySelector(".danger");
    const submitButton = form.querySelector(".button");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const jsonData = {};
        formData.forEach((value, key) => (jsonData[key] = value));
        console.log("form start");

        fetch(form.action, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
            body: JSON.stringify(jsonData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.errors) {
                    console.log("Validation errors occurred", data.errors);
                    dangerAlert.style.display = "block";
                } else {
                    console.log("Form submitted successfully!");
                    successAlert.style.display = "block";
                    form.reset();
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
});
