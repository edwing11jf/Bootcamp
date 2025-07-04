document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad del menú de hamburguesa
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const offCanvasMenu = document.getElementById('off-canvas-menu');
    const navLinks = offCanvasMenu.querySelectorAll('.nav-links a');
    const closeMenuButton = document.querySelector('.close-menu-button'); // Selector para el botón de cierre

    // Función para cerrar el menú
    function closeMenu() {
        hamburgerMenu.classList.remove('open');
        offCanvasMenu.classList.remove('active');
        hamburgerMenu.setAttribute('aria-expanded', false);
    }

    // Event listener para abrir/cerrar el menú al hacer clic en el botón de hamburguesa
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');
        offCanvasMenu.classList.toggle('active');
        hamburgerMenu.setAttribute('aria-expanded', offCanvasMenu.classList.contains('active'));
    });

    // Event listener para cerrar el menú al hacer clic en el botón de cierre explícito
    closeMenuButton.addEventListener('click', closeMenu);

    // Event listener para cerrar el menú al hacer clic en cualquier enlace de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu(); // Reutiliza la función para cerrar
        });
    });

    // Inicialización de Swiper
    const swiper = new Swiper('.slider-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },
            620: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
});

/*Script del login*
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que se recargue
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;

  if (email && pass) {
    // Puedes hacer validaciones reales aquí
    window.location.href = "index.html"; // Redirige al index
  } else {
    alert("Por favor completa todos los campos.");
  }
});
*/