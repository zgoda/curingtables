import { useEffect, useMemo, useState } from 'preact/hooks';

import { Help } from './help';
import { ResultsPanel } from './results';
import { TableType } from '../tables';

import style from './calculator.module.css';

export function Calculator() {
  const [selectedItem, setSelectedItem] = useState('');
  const [tableType, setTableType] = useState('');
  const [days, setDays] = useState(1);
  const [meatWeight, setMeatWeight] = useState(1);
  const [resultsVisible, setResultsVisible] = useState(false);

  const items = useMemo(() => ['tableSelect', 'days', 'meatWeight'], []);
  const tables = useMemo(
    () =>
      new Map([
        [TableType.CLASSIC, 'klasyczna'],
        [TableType.MODERN, 'współczesna'],
      ]),
    [],
  );

  useEffect(() => {
    setSelectedItem(items[0]);
    setTableType(TableType.MODERN);
  }, [items, tables]);

  const showResultsPanel = () => setResultsVisible(!resultsVisible);

  const tableTypeChanged = (/** @type {string} */ value) => {
    setTableType(value);
    setResultsVisible(false);
  };

  const daysChanged = (/** @type {number} */ value) => {
    setDays(value);
    setResultsVisible(false);
  };

  const meatWeightChanged = (/** @type {number} */ value) => {
    setMeatWeight(value);
    setResultsVisible(false);
  };

  return (
    <section class={style.sectionWrapper}>
      <div>
        <label>
          Wybierz rodzaj tabeli
          <select
            required
            value={tableType}
            // @ts-ignore
            onChange={(e) => tableTypeChanged(e.target.value)}
            onFocus={() => setSelectedItem('tableSelect')}
          >
            {Array.from(tables).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          Długość peklowania w dniach
          <input
            type="number"
            min="1"
            max="13"
            value={days}
            // @ts-ignore
            onInput={(e) => daysChanged(e.target.value)}
            onFocus={() => setSelectedItem('days')}
          />
        </label>
        <label>
          Waga mięsa
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={meatWeight}
            // @ts-ignore
            onInput={(e) => meatWeightChanged(e.target.value)}
            onFocus={() => setSelectedItem('meatWeight')}
          />
        </label>
        <div class="grid">
          <button onClick={showResultsPanel}>Oblicz</button>
          <button class="outline" onClick={() => setResultsVisible(false)}>
            Wyczyść
          </button>
        </div>
        {resultsVisible && (
          <ResultsPanel table={tableType} days={days} weight={meatWeight} />
        )}
      </div>
      <Help item={selectedItem} />
    </section>
  );
}
