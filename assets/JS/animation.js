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

const gallerySection = document.querySelector(".countries-gallery");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Opcional: Remover o observer após a primeira ativação
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1, // Dispara quando 10% da seção está visível
  }
);

observer.observe(gallerySection);

document.addEventListener("DOMContentLoaded", function () {
  const promoSection = document.querySelector(".promo-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Opcional: remove o observer após ativar
        }
      });
    },
    {
      threshold: 0.2, // Dispara quando 20% da seção estiver visível
    }
  );

  if (promoSection) {
    observer.observe(promoSection);
  }
});
