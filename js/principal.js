/**
 * PRINCIPAL.JS - Orquestador de la invitación, animación del sobre y eventos principales
 */
document.addEventListener('DOMContentLoaded', () => {
  const envelopeScreen = document.getElementById('envelopeScreen');
  const envelopeWrapper = document.getElementById('envelopeWrapper');
  const btnAbrirSobre = document.getElementById('btnAbrirSobre');
  const waxSeal = document.getElementById('waxSeal');
  const invitationContent = document.getElementById('invitationContent');
  const btnVolverInicio = document.querySelectorAll('.btn-volver-inicio, [href="#inicio"]');

  let sobreAbierto = false;

  // Función para abrir el sobre con animación 3D fluida
  function abrirInvitacion() {
    if (sobreAbierto) return;
    sobreAbierto = true;

    // 1. Activar clase open en el sobre para abrir solapa y deslizar carta
    if (envelopeWrapper) {
      envelopeWrapper.classList.add('open');
    }

    // 2. Iniciar reproducción de música de fondo (cumpliendo con la interacción del usuario)
    if (window.reproductorGraduacion) {
      window.reproductorGraduacion.play();
    }

    // 3. Tras la animación de salida de la carta, permitir apreciar la tarjeta y desvanecer la pantalla del sobre
    setTimeout(() => {
      if (envelopeScreen) {
        envelopeScreen.classList.add('revealed');
        setTimeout(() => {
          envelopeScreen.style.display = 'none';
        }, 850);
      }
      if (invitationContent) {
        invitationContent.classList.remove('pointer-events-none');
        invitationContent.style.opacity = '1';
      }

      // Activar animaciones de secciones visibles y destellos interiores
      iniciarObservadorScroll();
      crearDestellosFondo();
    }, 2000);
  }

  // Eventos de apertura en el sello y en el botón/texto "CLICK PARA ABRIR..."
  if (waxSeal) {
    waxSeal.addEventListener('click', (e) => {
      e.stopPropagation();
      abrirInvitacion();
    });
  }

  if (btnAbrirSobre) {
    btnAbrirSobre.addEventListener('click', (e) => {
      e.stopPropagation();
      abrirInvitacion();
    });
  }

  if (envelopeWrapper) {
    envelopeWrapper.addEventListener('click', () => {
      abrirInvitacion();
    });
  }

  // Botón "Volver al inicio" - Scroll suave
  btnVolverInicio.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  // Intersection Observer para apariciones suaves al hacer scroll
  function iniciarObservadorScroll() {
    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });
  }

  // Generador de partículas luminosas flotantes para la portada de gala
  function crearParticulasPortada() {
    const contenedor = document.getElementById('coverParticlesContainer');
    if (!contenedor) return;

    const cantidad = 28;
    for (let i = 0; i < cantidad; i++) {
      const particula = document.createElement('div');
      particula.className = 'luminous-particle';
      const size = Math.random() * 4.5 + 2.5;
      particula.style.width = `${size}px`;
      particula.style.height = `${size}px`;
      particula.style.left = `${Math.random() * 96 + 2}%`;
      particula.style.top = `${Math.random() * 94 + 3}%`;
      particula.style.animationDelay = `${Math.random() * 5}s`;
      particula.style.animationDuration = `${Math.random() * 4 + 4.5}s`;
      
      const esDorado = i % 3 === 0;
      particula.style.backgroundColor = esDorado ? '#edd295' : '#fff8db';
      particula.style.boxShadow = `0 0 ${size * 3}px ${particula.style.backgroundColor}, 0 0 ${size * 1.5}px rgba(223, 201, 165, 0.9)`;
      
      contenedor.appendChild(particula);
    }
  }

  // Destellos para la sección interior
  function crearDestellosFondo() {
    const contenedor = document.getElementById('sparklesContainer');
    if (!contenedor) return;

    const cantidad = 18;
    for (let i = 0; i < cantidad; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      const size = Math.random() * 4 + 2;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animationDelay = `${Math.random() * 4}s`;
      sparkle.style.animationDuration = `${Math.random() * 3 + 2.5}s`;
      sparkle.style.backgroundColor = i % 2 === 0 ? '#dfc9a5' : '#ffffff';
      sparkle.style.borderRadius = '50%';
      sparkle.style.boxShadow = `0 0 ${size * 2}px ${sparkle.style.backgroundColor}`;
      contenedor.appendChild(sparkle);
    }
  }

  crearParticulasPortada();
});
