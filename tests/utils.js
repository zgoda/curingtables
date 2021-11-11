/**
 * @param {number} lo
 * @param {number} hi
 * @returns {number}
 */
export function randInt(lo, hi) {
  const min = Math.ceil(lo);
  const max = Math.ceil(hi);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
