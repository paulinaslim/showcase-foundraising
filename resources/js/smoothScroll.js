import Lenis from "@studio-freight/lenis";

document.addEventListener("DOMContentLoaded", function () {
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
});
