document.getElementById("btnSi").addEventListener("click", function() {
  Swal.fire(
    'Que bien 😁!',
    'Sabia que querias!',
  )
  });

  const btnNo = document.getElementById("btnNo");

// Función para mover el botón de manera aleatoria
function moveButtonRandomly() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Genera posiciones aleatorias para el botón en el rango del tamaño de la ventana
    const randomX = Math.random() * (windowWidth - 100); // 100 es el ancho del botón
    const randomY = Math.random() * (windowHeight - 50); // 50 es la altura del botón

    // Establece la nueva posición del botón
    btnNo.style.left = randomX + "px";
    btnNo.style.top = randomY + "px";
}

// Manejador de evento cuando el cursor entra en el botón
btnNo.addEventListener("mouseenter", function() {
    moveButtonRandomly();
});

// Manejador de evento cuando el cursor sale del botón
btnNo.addEventListener("mouseleave", function() {
    // Puedes restablecer la posición aquí si lo deseas
});

// Desactiva la capacidad de hacer clic en el botón
btnNo.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el clic tenga efecto
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 2000); // Cambia la imagen cada 2 segundos

});