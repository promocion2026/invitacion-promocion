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

    // 3. Dejar que la carta salga y pueda leerse antes de mostrar la invitación
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
    }, 6500);
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

  // Estrellas brillantes y luces en movimiento para el fondo interior
  function crearDestellosFondo() {
    const contenedor = document.getElementById('sparklesContainer');
    if (!contenedor) return;

    const totalElementos = 52;
    const colores = ['#fff8db', '#f5e6b2', '#d4af37', '#ffffff'];

    for (let i = 0; i < totalElementos; i++) {
      const elem = document.createElement('div');
      const tipo = i % 5;
      const color = colores[i % colores.length];
      const dx = (Math.random() * 44 - 22).toFixed(1) + 'px';
      const dy = (Math.random() * 50 - 25).toFixed(1) + 'px';

      elem.style.left = `${Math.random() * 98 + 1}%`;
      elem.style.top = `${Math.random() * 98 + 1}%`;
      elem.style.animationDelay = `${(Math.random() * 5).toFixed(2)}s`;
      elem.style.setProperty('--dx', dx);
      elem.style.setProperty('--dy', dy);

      if (tipo === 0 || tipo === 1) {
        // Estrellas brillantes de 4 puntas que parpadean, rotan y se mueven
        const size = Math.random() * 10 + 7;
        elem.className = 'star-sparkle';
        elem.style.width = `${size}px`;
        elem.style.height = `${size}px`;
        elem.style.background = `radial-gradient(circle, #ffffff 10%, ${color} 70%)`;
        elem.style.filter = `drop-shadow(0 0 ${Math.round(size * 0.7)}px ${color})`;
        elem.style.setProperty('--dur', `${(Math.random() * 3 + 3.2).toFixed(2)}s`);
      } else if (tipo === 2) {
        // Luces ambientales pequeñas que flotan y parpadean
        const size = Math.random() * 8 + 5;
        elem.className = 'moving-light-orb';
        elem.style.width = `${size}px`;
        elem.style.height = `${size}px`;
        elem.style.backgroundColor = color;
        elem.style.boxShadow = `0 0 ${size * 3}px ${color}, 0 0 ${size * 1.4}px rgba(212, 175, 55, 0.8)`;
        elem.style.setProperty('--dur', `${(Math.random() * 4 + 6).toFixed(2)}s`);
      } else {
        // Puntos de luz y destellos dorados
        const size = Math.random() * 4 + 2.5;
        elem.className = 'sparkle';
        elem.style.width = `${size}px`;
        elem.style.height = `${size}px`;
        elem.style.backgroundColor = color;
        elem.style.boxShadow = `0 0 ${size * 2.5}px ${color}, 0 0 ${size * 4}px rgba(223, 201, 165, 0.6)`;
        elem.style.setProperty('--dur', `${(Math.random() * 3 + 3.5).toFixed(2)}s`);
      }

      contenedor.appendChild(elem);
    }
  }

  crearParticulasPortada();
});
