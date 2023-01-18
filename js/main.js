Splitting();
//x,y,z
//transfotm:translateX()

const btnAuto = document.querySelector(".btn--auto");
const gnb = document.querySelector(".gnb");
const header = document.querySelector(".header");

gnb.addEventListener("mouseenter", () => {
  header.classList.add("on");
});

gnb.addEventListener("mouseleave", () => {
  header.classList.remove("on");
});

btnAuto.addEventListener("click", function () {
  if (mainVisualSwiper.autoplay.paused) {
    mainVisualSwiper.autoplay.run();
    btnAuto.classList.remove("off");
  } else {
    mainVisualSwiper.autoplay.pause();
    btnAuto.classList.add("off");
  }
});

gsap.from(".main-visual__txt .char", {
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: 0.02,
  ease: "power4",
});
const mainVisualSwiper = new Swiper(".main-visual", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".main-visual .pagination .pagination-box",
    type: "bullets",
  },
});
console.log(mainVisualSwiper.autoplay.paused);
