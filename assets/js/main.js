/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__img-2", 1.2, { opacity: 0, y: 200, delay: 0.1 });
gsap.from(".home__img-3", 1.2, { opacity: 0, y: 200, delay: 1 });
gsap.from(".home__container, #header", 1.2, { opacity: 0, y: -60, delay: 1 });
gsap.from("#top__header1", 1.2, { opacity: 0, x: -80, delay: 1.1 });
gsap.from("#top__header2", 1.2, { opacity: 0, x: 80, delay: 1.2 });

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`#advantages, #clients`, { origin: "left" });
sr.reveal(`.reviews__card`, { interval: 100 });

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
