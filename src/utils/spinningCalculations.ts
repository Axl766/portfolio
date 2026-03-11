
/**
 * Calcula la posición x,y en % usando coordenadas polares.
 * @param index Posición del item
 * @param total Número total de items
 * @param radius Radio en porcentaje (0–100)
 * @returns { left: string, top: string }
 */

export const getPolarCoordinates = (index: number, total: number, radius: number) => {
  const angle = ((index * 360) / total) * (Math.PI / 180);
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);

  return {
    left: `${x}%`,
    top: `${y}%`,
  };
}