import { h } from 'preact';
import { render } from '@testing-library/preact';

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
    const days = randInt(4, 13);
    const { container } = render(
      <ResultsPanel days={days} weight={1} table="modern" />,
    );
    expect(container.querySelector('p.warning')).not.toBeInTheDocument();
  });
});
