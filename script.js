Shery.mouseFollower();

//for adding magnet effect
Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr", { videos: ["./0.mp4", "./2.mp4", "./3.mp4"] });

gsap.to(".fleft-elem", {
    scrollTrigger: {
        trigger: ".featured-images",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1,

})

let sections = document.querySelectorAll(".fleft-elem");
Shery.imageEffect(".images", {
    style: 5,
    // config : {onMouse : {value : 1}},
    // config: { onMouse: { enabled: true } },
    // config: { onMouse: true },
    slideStyle: (setScroll) => {
        sections.forEach(function(section, index){
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate : function(progress){
                    setScroll(progress.progress + index)
                }
            })
        })
    },
  });