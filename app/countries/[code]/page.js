import Link from "next/link";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.code}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const country = data[0];
  return {
    title: `${country.name.common} – World Explorer`,
    description: `Learn about ${country.name.common}: capital, population, languages, currencies, and more.`,
  };
}

export default async function CountryDetailsPage({ params }) {
  // This page fetches fresh data every time.
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.code}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  const country = data[0];

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name} (${c.symbol || "?"})`)
        .join(", ")
    : "N/A";

  const timezones = country.timezones?.join(", ") || "N/A";

  return (
    <div className="details-page">
      <div className="details-container">
        <Link href="/countries" className="back-btn">
          ← Back to Countries
        </Link>

        <div className="details-card">
          <div className="flag-section">
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className="country-flag-large"
            />
          </div>

          <div className="info-section">
            <h1 className="country-name">{country.name.common}</h1>
            <p className="official-name">Official: {country.name.official}</p>

            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">🏙️ Capital</span>
                <span className="info-value">{country.capital?.[0] || "N/A"}</span>
              </div>
              <div className="info-item">
                <span className="info-label">🌍 Region</span>
                <span className="info-value">{country.region}</span>
              </div>
              <div className="info-item">
                <span className="info-label">📍 Subregion</span>
                <span className="info-value">{country.subregion || "N/A"}</span>
              </div>
              <div className="info-item">
                <span className="info-label">👥 Population</span>
                <span className="info-value">{country.population.toLocaleString()}</span>
              </div>
              <div className="info-item">
                <span className="info-label">💬 Languages</span>
                <span className="info-value">{languages}</span>
              </div>
              <div className="info-item">
                <span className="info-label">💰 Currencies</span>
                <span className="info-value">{currencies}</span>
              </div>
              <div className="info-item">
                <span className="info-label">🕐 Timezones</span>
                <span className="info-value">{timezones}</span>
              </div>
            </div>

            <a
              href={country.maps?.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="maps-btn"
            >
              🗺️ View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
