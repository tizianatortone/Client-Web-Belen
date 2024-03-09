AOS.init();

let scrollPos = 0;
const nav = document.querySelector(".container-fluid");

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP
    nav.classList.add("is-visible");
    nav.classList.remove("is-hidden");
  } else {
    // Scrolling DOWN
    nav.classList.add("is-hidden");
    nav.classList.remove("is-visible");
  }
  scrollPos = windowY;
}

window.addEventListener("scroll", checkPosition);

new Typewriter("#belen", {
  strings: ["Belén"],
  autoStart: true,
  loop: true,
});

new Typewriter("#rodriguez", {
  strings: ["Rodríguez"],
  autoStart: true,
  loop: true,
});
