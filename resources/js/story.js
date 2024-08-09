window.addEventListener("load", function () {
    const galleryWrapper = document.getElementById("gallery-wrapper");

    function getScrollAmount() {
        let galleryWidth = galleryWrapper.scrollWidth;
        return -(galleryWidth - window.innerWidth);
    }

    console.log("gallery wrapper", galleryWrapper.scrollWidth);
    console.log("scroll distance: ", getScrollAmount());

    const tl = gsap.timeline();

    tl.to(galleryWrapper, {
        x: () => getScrollAmount(),
        duration: 3,
        ease: "none",
    }).to(galleryWrapper, {
        duration: 1,
    });

    const scrollAmount = Math.abs(getScrollAmount());

    ScrollTrigger.create({
        trigger: "#gallery",
        start: "top 5%",
        end: `+=${scrollAmount}`,
        pin: true,
        animation: tl,
        scrub: 1,
        invalidateOnRefresh: true,
    });
});
