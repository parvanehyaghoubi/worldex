import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">🌍 World Explorer</h1>
          <p className="hero-subtitle">
            Explore countries around the world and learn about their flags, capitals,
            populations, currencies, and languages.
          </p>
          <div className="hero-buttons">
            <Link href="/countries" className="btn-primary">
              Explore Countries
            </Link>
            <Link href="/search" className="btn-secondary">
              Search a Country
            </Link>
          </div>
        </div>
        <div className="hero-globe">🗺️</div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">What You Can Discover</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🏳️</span>
            <h3>Flags</h3>
            <p>View the official flag of every country</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🏙️</span>
            <h3>Capitals</h3>
            <p>Find out the capital city of each country</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">👥</span>
            <h3>Population</h3>
            <p>Discover how many people live in each country</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💬</span>
            <h3>Languages</h3>
            <p>Learn which languages are spoken around the world</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💰</span>
            <h3>Currencies</h3>
            <p>Explore the currencies used in every country</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🗺️</span>
            <h3>Maps</h3>
            <p>Open any country directly on Google Maps</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Explore?</h2>
        <p>Browse all countries and discover fascinating details about each one.</p>
        <Link href="/countries" className="btn-primary">
          Browse All Countries →
        </Link>
      </section>
    </div>
  );
}
