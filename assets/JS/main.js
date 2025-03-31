const videoData = [
  {
    title: "Diversão",
    subtitle: "Explore momentos de alegria e risadas sem fim.",
    videoSrc: "assets/IMG/diversao.mp4",
  },
  {
    title: "Cidade",
    subtitle: "Mergulhe no ritmo vibrante da vida urbana.",
    videoSrc: "assets/IMG/Cidade.mp4",
  },
  {
    title: "Aventura",
    subtitle: "Desafios e descobertas esperam por você em cada esquina.",
    videoSrc: "assets/IMG/Aventura.mp4",
  },
  {
    title: "Natureza",
    subtitle: "Conecte-se com a beleza selvagem e pura da Terra.",
    videoSrc: "assets/IMG/Natureza.mp4",
  },
];

let currentIndex = 0;
let heroSwiper = null;

function initHeroSwiper() {
  if (window.innerWidth <= 768) {
    if (!heroSwiper) {
      heroSwiper = new Swiper("#hero-swiper-mobile", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 15,
        slideToClickedSlide: true,
        on: {
          slideChange: function () {
            updateContent(this.activeIndex);
          },
        },
      });
    }
  } else {
    if (heroSwiper) {
      heroSwiper.destroy();
      heroSwiper = null;
    }
  }
}

function updateContent(index) {
  const videoElem = document.getElementById("background-video");
  const titleElem = document.getElementById("video-title");
  const subtitleElem = document.getElementById("video-subtitle");

  // Atualiza conteúdo
  titleElem.style.opacity = 0;
  subtitleElem.style.opacity = 0;

  setTimeout(() => {
    titleElem.textContent = videoData[index].title;
    subtitleElem.textContent = videoData[index].subtitle;
    videoElem.src = videoData[index].videoSrc;

    titleElem.style.opacity = 1;
    subtitleElem.style.opacity = 1;
  }, 300);

  // Atualiza thumbnails
  document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
    thumb.classList.toggle("selected", i === index);
  });

  // Sincroniza swiper
  if (heroSwiper && heroSwiper.activeIndex !== index) {
    heroSwiper.slideTo(index);
  }
}

// Event Listeners
window.addEventListener("DOMContentLoaded", () => {
  updateContent(0);
  initHeroSwiper();
});

window.addEventListener("resize", () => {
  initHeroSwiper();
});

// ===== DETECÇÃO DE SCROLL ===== animação na seção "Sobre"
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

//contagem
// Tempo inicial de 12 horas em segundos
let timeLeft = 12 * 60 * 60; // 12 horas

function updateCountdown() {
  // Calcular dias, horas, minutos e segundos
  const days = Math.floor(timeLeft / (3600 * 24));
  const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // Formatar para 2 dígitos cada
  const display =
    `${String(days).padStart(2, "0")}:` +
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;

  document.getElementById("countdown").textContent = display;

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timer);
    document.getElementById("countdown").textContent = "00:00:00:00";
    alert("Promoção encerrada!");
  }
}

// Iniciar contador
let timer = setInterval(updateCountdown, 1000);
updateCountdown(); // Atualização imediata
