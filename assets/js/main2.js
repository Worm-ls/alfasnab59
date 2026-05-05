/*=============== GSAP ANIMATION ===============*/
gsap.from("#top__header1", 1.2, { opacity: 0, x: -80, delay: 1.1 });
gsap.from("#top__header2", 1.2, { opacity: 0, x: 80, delay: 1.2 });
gsap.from("#header", 1.2, { opacity: 0, y: -60, delay: 1 });

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
