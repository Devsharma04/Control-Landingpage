gsap.from(".page2_sec1", {
  x: -160,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".page2_sec1",
    scroller: "body",

    start: "top 80%",
  },
});
gsap.from(".page2_sec2", {
  x: 160,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".page2_sec2",
    scroller: "body",

    start: "top 80%",
  },
});

gsap.from(".page3_sec", {
  x: -160,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".page3_sec",
    scroller: "body",

    start: "top 80%",
  },
});

function hamburger() {
  const menu = document.querySelector(".hamburger-menu ");
  const close = document.querySelector(".mobile-nav");
  const tl = gsap.timeline();

  tl.to(".mobile-nav", {
    right: 0,
    duration: 0.5,
  });

  tl.from(".mobile-nav a", {
    x: 150,

    stagger: 0.28,
    opacity: 0,
  });
  tl.from(".mobile-nav button", {
    opacity: 0,
  });

  tl.pause();

  menu.addEventListener("click", function () {
    tl.play();
    document.querySelector("body").style.overflow = "hidden";
  });

  close.addEventListener("click", function () {
    tl.reverse();
    document.querySelector("body").style.overflow = "scroll";
  });
}

hamburger();
