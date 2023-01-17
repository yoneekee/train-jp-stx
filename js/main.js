// data-splitting 기능
Splitting();

// gsap : to, from
// x,y,z : transform
//gsap.to(".main-visual__txt .char", { opacity: 0, x: 300, duration: 1 });
gsap.from(".main-visual__txt .char", {
  opacity: 0,
  y: 300,
  duration: 1,
  stagger: 0.01,
});

//Swiper
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
