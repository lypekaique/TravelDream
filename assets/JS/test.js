document.addEventListener("DOMContentLoaded", function () {
  new Splide("#testimonials-carousel", {
    type: "loop",
    perPage: 3,
    perMove: 1, // Move 1 slide por vez
    gap: "1rem",
    focus: "start", // Importante para alinhamento correto
    trimSpace: false, // Mantém todos os slides
    pagination: false,
    breakpoints: {
      768: {
        perPage: 1,
        focus: "center", // Melhor visualização para mobile
      },
    },
  }).mount();
});
