/**
 * CONTADOR.JS - Cuenta regresiva dinámica
 * Evento: Domingo 13 de diciembre de 2026, 22:00:00
 */
document.addEventListener('DOMContentLoaded', () => {
  const FECHA_EVENTO = new Date('2026-12-13T22:00:00');

  const diasElem = document.getElementById('countDias');
  const horasElem = document.getElementById('countHoras');
  const minutosElem = document.getElementById('countMinutos');
  const segundosElem = document.getElementById('countSegundos');

  let intervaloId = null;

  const padZero = (num) => num.toString().padStart(2, '0');

  function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const distancia = FECHA_EVENTO.getTime() - ahora;

    if (distancia <= 0) {
      if (diasElem) diasElem.textContent = '00';
      if (horasElem) horasElem.textContent = '00';
      if (minutosElem) minutosElem.textContent = '00';
      if (segundosElem) segundosElem.textContent = '00';
      if (intervaloId) clearInterval(intervaloId); // detener al llegar a cero
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

  actualizarCuentaRegresiva();
  intervaloId = setInterval(actualizarCuentaRegresiva, 1000);
});