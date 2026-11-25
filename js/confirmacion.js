/**
 * CONFIRMACION.JS - Gestión del formulario de confirmación de asistencia (RSVP)
 * Fiesta de Promoción KINTSUGI 2026
 */
document.addEventListener('DOMContentLoaded', () => {
  const btnAbrirRsvp = document.getElementById('btnAbrirRsvp');
  const modalRsvp = document.getElementById('modalRsvp');
  const btnCerrarRsvp = document.getElementById('btnCerrarRsvp');
  const btnVolverAtras = document.getElementById('btnVolverAtras');
  const formRsvp = document.getElementById('formRsvp');
  const rsvpFeedback = document.getElementById('rsvpFeedback');
  const feedbackMsg = document.getElementById('feedbackMsg');
  const radioSi = document.getElementById('asistenciaSi');
  const radioNo = document.getElementById('asistenciaNo');
  const campoAcompanantes = document.getElementById('campoAcompanantes');

  // Abrir Modal
  function abrirModal() {
    if (!modalRsvp) return;
    modalRsvp.classList.remove('hidden');
    modalRsvp.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    // Reiniciar vista de feedback si estaba abierta
    if (rsvpFeedback) rsvpFeedback.classList.add('hidden');
    if (formRsvp) formRsvp.classList.remove('hidden');
  }

  // Cerrar Modal
  function cerrarModal() {
    if (!modalRsvp) return;
    modalRsvp.classList.add('hidden');
    modalRsvp.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }

  if (btnAbrirRsvp) btnAbrirRsvp.addEventListener('click', abrirModal);
  if (btnCerrarRsvp) btnCerrarRsvp.addEventListener('click', cerrarModal);
  if (btnVolverAtras) btnVolverAtras.addEventListener('click', cerrarModal);

  // Cerrar con Escape o clic en backdrop
  if (modalRsvp) {
    modalRsvp.addEventListener('click', (e) => {
      if (e.target === modalRsvp) {
        cerrarModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalRsvp && !modalRsvp.classList.contains('hidden')) {
      cerrarModal();
    }
  });

  // Mostrar / Ocultar campo de acompañantes según la opción seleccionada
  if (radioSi && radioNo && campoAcompanantes) {
    radioSi.addEventListener('change', () => {
      campoAcompanantes.classList.remove('hidden');
    });
    radioNo.addEventListener('change', () => {
      campoAcompanantes.classList.add('hidden');
    });
  }

  // Procesamiento del formulario
  if (formRsvp) {
    formRsvp.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombreInvitado')?.value.trim();
      const asistencia = document.querySelector('input[name="asistencia"]:checked')?.value;
      const acompanantes = document.getElementById('numAcompanantes')?.value || '0';
      const dedicatoria = document.getElementById('mensajeInvitado')?.value.trim();

      if (!nombre) {
        alert('Por favor, ingresa tu nombre y apellido.');
        return;
      }

      // Simulación de envío exitoso visual
      if (formRsvp) formRsvp.classList.add('hidden');
      if (rsvpFeedback) {
        rsvpFeedback.classList.remove('hidden');
        if (feedbackMsg) {
          if (asistencia === 'si') {
            feedbackMsg.innerHTML = `
              ¡Muchas gracias <strong>${nombre}</strong>! 🎉<br>
              Hemos registrado tu asistencia con <strong>${acompanantes}</strong> acompañante(s).<br>
              ¡Te esperamos en la gran noche de celebración de <strong>Paloma Martel</strong> · Promoción <strong>KINTSUGI 2026</strong>!
            `;
          } else {
            feedbackMsg.innerHTML = `
              Gracias por avisarnos, <strong>${nombre}</strong>.<br>
              Lamentamos que no puedas acompañarnos en esta gran noche de celebración.<br>
              ¡Te llevamos en el corazón y tus buenos deseos estarán presentes!
            `;
          }
        }
      }

      // Preparar enlace opcional para WhatsApp
      const btnWhatsapp = document.getElementById('btnEnviarWhatsApp');
      if (btnWhatsapp) {
        const textoMsg = encodeURIComponent(
          `¡Hola! Confirmo mi asistencia para la Fiesta de Promoción de Paloma Martel · KINTSUGI 2026:\n- Nombre: ${nombre}\n- Asistencia: ${asistencia === 'si' ? 'Sí asistiré 🎉' : 'No podré asistir'}\n- Acompañantes: ${asistencia === 'si' ? acompanantes : '0'}${dedicatoria ? `\n- Mensaje: ${dedicatoria}` : ''}`
        );
        btnWhatsapp.href = `https://api.whatsapp.com/send?text=${textoMsg}`;
        btnWhatsapp.classList.remove('hidden');
      }
    });
  }
});
