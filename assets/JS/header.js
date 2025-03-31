// Adicione no final do arquivo script.js

// Header dinâmico
const header = document.querySelector(".main-header");
const heroSection = document.querySelector(".hero-section");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    header.style.padding = "10px 0";
  } else {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    header.style.padding = "15px 0";
  }
});

// Navegação ativa
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const body = document.body;

  menuToggle.addEventListener("click", () => {
    body.classList.toggle("menu-active");
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll(".video-header nav a").forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("menu-active");
    });
  });
});
   // Carrosel De depoimento
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#testimonials-carousel", {
    type: "loop",
    perPage: 1,
    drag: true,
    arrows: true,
    pagination: true,
    autoplay: false,
  }).mount();
});
