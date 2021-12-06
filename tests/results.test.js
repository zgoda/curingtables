import { h } from 'preact';
import { cleanup, render } from '@testing-library/preact';

import { ResultsPanel } from '../src/components/results';

import { randInt } from './utils';

describe('Results for short brining', () => {
  test('should display warning', () => {
    const days = randInt(1, 3);
    const { container } = render(
      <ResultsPanel days={days} weight={1} table="modern" />,
    );
    expect(container.querySelector('p.warning')).toBeInTheDocument();
  });
  test('should mention massage', () => {
    const days = randInt(1, 3);
    const { container } = render(
      <ResultsPanel days={days} weight={1} table="modern" />,
    );
    expect(container.querySelector('p.warning').textContent).toMatch(
      /masowanie mięsa w trakcie/,
    );
  });
});

describe('Results for normal brining', () => {
  test('should not display warning', () => {
    const days = randInt(4, 10);
    const { container } = render(
      <ResultsPanel days={days} weight={1} table="modern" />,
    );
    expect(container.querySelector('p.warning')).not.toBeInTheDocument();
  });
});

describe('Results for prolonged brining', () => {
  test('should not display warning', () => {
    const days = randInt(11, 13);
    const { container } = render(
      <ResultsPanel days={days} weight={1} table="modern" />,
    );
    expect(container.querySelector('p.warning')).not.toBeInTheDocument();
  });
});

describe('Results for long brining', () => {
  test('should not differ if period increases over 13 days', () => {
    const r1 = render(<ResultsPanel days={13} weight={1} table="modern" />);
    cleanup();
    const r2 = render(<ResultsPanel days={14} weight={1} table="modern" />);
    expect(r1.getByTestId('salt-low').textContent).toMatch(
      r2.getByTestId('salt-low').textContent,
    );
  });
});

describe('Water calculation', () => {
  test('should be based on meat weight', () => {
    const weight = 1;
    const ratio = 2;
    const r1 = render(<ResultsPanel days={4} weight={weight} table="modern" />);
    const w1 = parseFloat(r1.getByTestId('amt-water').textContent);
    cleanup();
    const r2 = render(<ResultsPanel days={4} weight={weight * ratio} table="modern" />);
    const w2 = parseFloat(r2.getByTestId('amt-water').textContent);
    expect(w2).toBeCloseTo(w1 * ratio);
  });
});
