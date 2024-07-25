document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.getElementById("download-pdf");

    downloadButton.addEventListener("click", function (event) {
        event.preventDefault();
        downloadPDF();
    });

    function downloadPDF() {
        const link = document.createElement("a");
        link.href = "pdf/HelloWorld.pdf";
        link.download = "HelloWorld.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});
