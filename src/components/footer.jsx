import { text } from './footer.json';

export function Footer() {
  return (
    <section>
      <footer>
        <hr />
        <p>{text.copyright}</p>
        <div class="grid">
          {text.links.map((linkText) => (
            <div key={`link-${linkText}`}>{linkText}</div>
          ))}
        </div>
      </footer>
    </section>
  );
}
