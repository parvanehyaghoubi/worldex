import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">🌍 World Explorer</span>
          <p>Discover countries around the world.</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/countries">Countries</Link></li>
            <li><Link href="/search">Search</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>

        <div className="footer-api">
          <h4>Data Source</h4>
          <p>
            Powered by{" "}
            <a href="https://restcountries.com" target="_blank" rel="noopener noreferrer">
              REST Countries API
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} World Explorer — Built with Next.js</p>
      </div>
    </footer>
  );
}
