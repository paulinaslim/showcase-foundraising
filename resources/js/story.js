const galleryWrapper = document.getElementById("gallery-wrapper");
function getScrollAmount() {
    let galleryWidth = galleryWrapper.scrollWidth;
    return -(galleryWidth - window.innerWidth);
}
const scrollAmount = getScrollAmount();
console.log("gallery wrapper", galleryWrapper.scrollWidth);
console.log("scroll distance: ", scrollAmount);

const tween = gsap.to(galleryWrapper, {
    x: getScrollAmount,
    duration: 3,
    ease: "none",
});

ScrollTrigger.create({
    trigger: "#gallery",
    start: "top 5%",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
    markers: true,
});
