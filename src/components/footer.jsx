import { text } from './footer.json';

export function Footer() {
  return (
    <section>
      <footer>
        <hr />
        <p>{text.copyright}</p>
        <div class="grid">
          {text.links.map(([linkText, url]) => (
            <div key={`link-${url}`}>
              <a href={url}>{linkText}</a>
            </div>
          ))}
        </div>
      </footer>
    </section>
  );
}
