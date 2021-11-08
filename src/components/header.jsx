import { text } from './header.json';

export function Header() {
  return (
    <hgroup>
      <h1>{text.h1}</h1>
      <h2>{text.h2}</h2>
    </hgroup>
  );
}
