/**
 * CONTADOR.JS - Cuenta regresiva dinámica para la fecha del evento
 */
document.addEventListener('DOMContentLoaded', () => {
  // Configuración de la fecha y hora del evento de graduación
  // Por defecto: Viernes 18 de Diciembre de 2026, 20:00:00 (Fácilmente modificable)
  let FECHA_EVENTO = new Date('2026-12-18T20:00:00');

  // Si por alguna razón la fecha configurada ya pasó en el sistema,
  // proyectamos una fecha de graduación 24 días hacia adelante para mantener el contador siempre vivo y dinámico
  if (FECHA_EVENTO.getTime() < new Date().getTime()) {
    FECHA_EVENTO = new Date(Date.now() + (24 * 24 * 60 * 60 * 1000) + (6 * 60 * 60 * 1000));
  }

  const diasElem = document.getElementById('countDias');
  const horasElem = document.getElementById('countHoras');
  const minutosElem = document.getElementById('countMinutos');
  const segundosElem = document.getElementById('countSegundos');

  function padZero(num) {
    return num.toString().padStart(2, '0');
  }

  function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const distancia = FECHA_EVENTO.getTime() - ahora;

    if (distancia < 0) {
      if (diasElem) diasElem.textContent = '00';
      if (horasElem) horasElem.textContent = '00';
      if (minutosElem) minutosElem.textContent = '00';
      if (segundosElem) segundosElem.textContent = '00';
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    if (diasElem) diasElem.textContent = padZero(dias);
    if (horasElem) horasElem.textContent = padZero(horas);
    if (minutosElem) minutosElem.textContent = padZero(minutos);
    if (segundosElem) segundosElem.textContent = padZero(segundos);
  }

  // Ejecución inicial y temporizador cada 1 segundo
  actualizarCuentaRegresiva();
  setInterval(actualizarCuentaRegresiva, 1000);
});
