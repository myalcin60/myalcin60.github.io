
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;
  
    let index = 0;
    let isSlidingLeft = true; // Başlangıçta sola kayma

    function showNextSlides() {
      if (isSlidingLeft) {
        // Sola kayma (soldan sağa)
        index++;
        if (index > totalSlides - 2) {
          index = totalSlides - 2; // Sonra sola kayma yönünü değiştirme
          isSlidingLeft = false; // Sağ kaymaya geç
        }
      } else {
        // Sağa kayma (sağdan sola)
        index--;
        if (index < 0) {
          index = 0; // İlk resme dön
          isSlidingLeft = true; // Sola kaymaya geç
        }
      }
  
      // Kaydırma işlemi
      slides.style.transition = "transform 0.5s ease-in-out"; // Yavaş geçiş
      slides.style.transform = `translateX(-${index * 50}%)`; // Kaydırma
    }
    setInterval(showNextSlides, 3000);
  });