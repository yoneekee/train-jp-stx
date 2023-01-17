// function average(a, b) {
//   const avg = (a + b) / 2;
//   console.log(avg);
// }
//average(76, 56);
//average(90, 80);

Splitting();

const btnAll = document.querySelector(".btn--all");
const header = document.querySelector(".header");
const depth01 = document.querySelectorAll(".gnb > .list > li > a");
const depth02 = document.querySelectorAll(".gnb > .list > li .depth02");
console.log("🚀 ~ file: main.js:12 ~ depth02", depth02);
console.log("🚀 ~ file: main.js:11 ~ depth01", depth01);
const animals = ["강아지", "망아지", "송아지", "병아리", "고양이", "호랑이"];
const depth01Total = depth01.length;
const depth02Total = depth02.length;
for (let i = 0; i < depth01Total; i++) {
  depth01[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < depth02Total; j++) {
      depth02[j].classList.remove("on");
    }
    depth02[i].classList.add("on");
  });
}

btnAll.addEventListener("click", function () {
  //console.log("btnAll 클릭");
  //header.classList.add("on");
  if (header.classList.contains("on")) {
    header.classList.remove("on");
  } else {
    header.classList.add("on");
  }
  //header.classList.toggle("on");
});

new Swiper(".visual__list", {
  //slide,cube,fade,
  effect: "cube",
  pagination: {
    el: ".visual__list .pagination",
    type: "bullets",
    clickable: true,
  },
  cubeEffect: {
    shadow: false,
  },
});

new Swiper(".news-banner", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
});

//visual__txt 움직이기
gsap.from(".visual__txt .char", { y: 100, opacity: 0, duration: 1, ease: "power4", stagger: 0.02 });
