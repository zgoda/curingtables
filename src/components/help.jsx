import { v4 as uuid } from '@lukeed/uuid';

import { help } from './help.json';

/**
 * @typedef {object} props
 * @property {string} item
 *
 * @param {props} props
 * @returns {JSX.Element}
 */
export function Help({ item }) {
  /** @type {string[]} */
  const text = help[item];
  return (
    <div>
      {text &&
        text.map((line) => {
          const key = uuid();
          return (
            <p key={`l-${key}`}>
              <small>{line}</small>
            </p>
          );
        })}
    </div>
  );
}
