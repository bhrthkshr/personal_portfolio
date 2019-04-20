const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  console.log('eveennntt');
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

links.addEventListener("click", () => {
  console.log('link');
  navLinks.classList.toggle("fade");
  links.forEach(link => {
    link.classList.toggle("open");
  });
});
