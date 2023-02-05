export const monthNames = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Deciembre',
];

export const dayNames = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
];

/**
 * Crop text and add ellipsis
 * @param {string} text
 * @param {number} linesToCrop crop lines to that lenght
 */
export const cropText = (text, lines) =>
  text.length > lines ? `${text.slice(text, lines)}...` : text;

export const formatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'CLP',
  minimumFractionDigits: 0,
});
