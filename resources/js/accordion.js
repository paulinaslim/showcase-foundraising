import Accordion from "accordion-js";

document.addEventListener("DOMContentLoaded", function () {
    const accordionContainers = document.querySelectorAll(
        ".accordion-container"
    );

    accordionContainers.forEach((container) => {
        new Accordion(container, {
            duration: 400,
            showMultiple: false,
        });

        const firstPanel = container.querySelector(".ac-active .ac-panel");
        if (firstPanel) {
            firstPanel.style.visibility = "visible";
            firstPanel.style.height = "auto";
        }
    });
});
