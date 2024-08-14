document.addEventListener("DOMContentLoaded", function () {
    const galleryWrapper = document.getElementById("gallery-wrapper");
    const gallery = document.getElementById("gallery");
    const prevSection = gallery.previousElementSibling;

    function getScrollAmount() {
        let galleryWidth = galleryWrapper.scrollWidth;
        return -(galleryWidth - window.innerWidth);
    }

    console.log("gallery wrapper", galleryWrapper.scrollWidth);
    console.log("scroll distance: ", getScrollAmount());

    const tl = gsap.timeline();

    const tween = tl
        .to(galleryWrapper, {
            x: () => getScrollAmount(),
            duration: 3,
            ease: "none",
        })
        .to(galleryWrapper, {
            duration: 1,
        });
    // .to(prevSection, {
    //     duration: 2,
    // });

    const scrollAmount = Math.abs(getScrollAmount());

    ScrollTrigger.create({
        trigger: "#gallery",
        start: "top 5%",
        end: `+=${scrollAmount}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
    });
});
