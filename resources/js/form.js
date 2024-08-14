document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-contact");

    submitButton.addEventListener("click", function (event) {
        const form = document.querySelector(".application-form");
        const successAlert = document.querySelector(".success");
        const dangerAlert = document.querySelector(".danger");
        event.preventDefault();

        const formData = new FormData(form);
        const jsonData = {};
        formData.forEach((value, key) => (jsonData[key] = value));
        // console.log("Form data:", jsonData);

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
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log("Response data:", data);
                if (data.errors) {
                    console.log("Validation errors occurred:", data.errors);
                    dangerAlert.style.display = "block";
                } else {
                    console.log("Form submitted successfully!");
                    successAlert.style.display = "block";

                    form.reset();
                    location.href = "/thankyou";
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
});
