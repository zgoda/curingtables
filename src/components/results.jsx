import {
  getInjectionRate,
  getSaltRate,
  INJECT_SIZE,
  MASSAGE_THRESHOLD,
  WATER_RATIO,
} from '../tables';

/**
 * @typedef {object} Props
 * @property {string} table
 * @property {number} days
 * @property {number} weight
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
export function ResultsPanel({ table, days, weight }) {
  const saltRate = getSaltRate(table, days);
  const injectionRate = getInjectionRate(table, days);

  const water = weight * WATER_RATIO;
  const saltLow = weight * saltRate.low;
  const saltHigh = weight * saltRate.high;
  const injectionLow = weight * injectionRate.low * INJECT_SIZE * 1000;
  const injectionHigh = weight * injectionRate.high * INJECT_SIZE * 1000;

  let massageRequired = false;
  if (days < MASSAGE_THRESHOLD) {
    massageRequired = true;
  }

  return (
    <article>
      <header>
        <h2>Wyniki obliczeń</h2>
      </header>
      <ul>
        <li>
          <strong>Ilość wody:</strong> {water.toFixed(1)} l
        </li>
        <li>
          <strong>Ilość soli, minimum:</strong> {saltLow.toFixed()} g
        </li>
        <li>
          <strong>Ilość soli, maksimum:</strong> {saltHigh.toFixed()} g
        </li>
        <li>
          <strong>Nastrzyk przy minimalnej ilości soli:</strong>{' '}
          {injectionLow.toFixed()} ml
        </li>
        <li>
          <strong>Nastrzyk przy maksymalnej ilości soli:</strong>{' '}
          {injectionHigh.toFixed()} ml
        </li>
      </ul>
      {massageRequired && (
        <p>Uwaga, wymagane będzie masowanie mięsa podczas peklowania!</p>
      )}
    </article>
  );
}
