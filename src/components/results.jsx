import { h } from 'preact';

import {
  getInjectionRate,
  getSaltRate,
  INJECT_SIZE,
  MASSAGE_THRESHOLD,
  WATER_RATIO,
} from '../tables';

import { text } from './results.json';

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
        <h2>{text.title}</h2>
      </header>
      <ul>
        <li>
          <strong>{text.water}:</strong>{' '}
          <span data-testid="amt-water">{water.toFixed(1)}</span> l
        </li>
        <li data-testid="salt-low">
          <strong>{text.saltMin}:</strong> {saltLow.toFixed()} g
        </li>
        <li>
          <strong>{text.saltMax}:</strong> {saltHigh.toFixed()} g
        </li>
        <li>
          <strong>{text.injMin}:</strong> {injectionLow.toFixed()} ml
        </li>
        <li>
          <strong>{text.injMax}:</strong> {injectionHigh.toFixed()} ml
        </li>
      </ul>
      {massageRequired && <p class="warning">{text.massageReqWarning}</p>}
    </article>
  );
}
