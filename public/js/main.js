// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 10,
  grabCursor: true,
  navigation: {
    nextEl: '#swiper-button-next',
    prevEl: '#swiper-button-prev',
  },
  breakpoints: {
    991: {
      slidesPerView: 1,
    },
  },
});

// eslint-disable-next-line no-undef, no-unused-vars
const swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '#swiper-button-next2',
    prevEl: '#swiper-button-prev2',
  },
  breakpoints: {
    991: {
      slidesPerView: 2,
    },
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const alert = document.querySelector('.custom-alert.success');
  const closeBtn = alert.querySelector('.close-button');

  closeBtn.addEventListener('click', function () {
    alert.style.display = 'none'; // Oculta la alerta al hacer clic en el botón de cierre
  });
});

// Agregar un evento de clic al botón "Todos"
document.getElementById('all').addEventListener('click', function () {
  filterProducts('all');
});

// Agregar un evento de clic al botón "Venta"
document.getElementById('venta').addEventListener('click', function () {
  filterProducts('venta');
});

// Agregar un evento de clic al botón "Alquiler"
document.getElementById('alquiler').addEventListener('click', function () {
  filterProducts('alquiler');
});

function filterProducts(filter) {
  // Realizar una solicitud AJAX al servidor con la función fetch
  fetch(`/propiedades/${filter}`)
    .then((response) => response.json())
    .then((data) => {
      // Actualizar la página con los datos filtrados sin recargarla
      // Puedes usar JavaScript para actualizar la vista según los datos
    })
    .catch((error) => {
      console.error('Error al obtener datos filtrados:', error);
    });
}

// Reemplaza '4.5' con la calificación real proporcionada por el usuario
const userRating = 4.5;

const stars = document.querySelectorAll('.star');

stars.forEach((star) => {
  const rating = parseFloat(star.getAttribute('data-rating'));
  if (rating <= userRating) {
    star.style.color = '#ffdb58'; // Color de las estrellas rellenas
  }
});
