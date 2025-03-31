// ===== DETECÇÃO DE SCROLL =====
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about-section");

  const observerOptions = {
    threshold: 0.3, // Dispara quando 30% da seção está visível
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Para de observar após a animação
      }
    });
  }, observerOptions);

  if (aboutSection) {
    observer.observe(aboutSection);
  }
});
