import { uid } from 'uid';

import { help } from './help.json';

/**
 * @typedef {object} Props
 * @property {string} item
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
export function Help({ item }) {
  /** @type {string[]} */
  const text = help[item];
  return (
    <div>
      {text &&
        text.map((line) => {
          const key = uid(16);
          return (
            <p key={`l-${key}`}>
              <small>{line}</small>
            </p>
          );
        })}
    </div>
  );
}
