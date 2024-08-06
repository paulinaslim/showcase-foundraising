document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollTo);
    gsap.registerPlugin(Observer);

    let panels = document.querySelectorAll(".panel");
    let scrollTween = null;
    let snapTriggers = [];
    let scrollStarts = [0];
    snapScroll = (value) => value;

    console.log(scrollStarts);
    console.log(snapTriggers);
    console.log("snap scroll starts", snapScroll);

    panels.forEach((panel, i) => {
        snapTriggers[i] = ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            pin: true,
            end: () => `+=${panel.scrollHeight}`,
            pinSpacing: true,
            onLeave: () => {
                if (i < panels.length - 1) {
                    goToSection(i + 1);
                }
            },
        });
    });

    ScrollTrigger.addEventListener("refresh", () => {
        scrollStarts = snapTriggers.map((trigger) => trigger.start);
        snapScroll = ScrollTrigger.snapDirectional(scrollStarts);
    });

    ScrollTrigger.observe({
        type: "wheel,touch",
        onChangeY(self) {
            if (!scrollTween) {
                let scroll =
                    (self.scrollY + self.deltaY, self.deltaY > 0 ? 1 : -1);
                goToSection(scrollStarts.indexOf(scroll));
            }
        },
    });

    ScrollTrigger.refresh();

    function goToSection(i) {
        console.log("scroll to", i);
        scrollTween = gsap.to(window, {
            scrollTo: { y: snapTriggers[i].start, autoKill: false },
            duration: 1,
            onComplete: () => (scrollTween = null),
            overwrite: true,
        });
    }
});
