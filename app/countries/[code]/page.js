import Link from "next/link";
import { getCountryByCode } from "@/lib/api";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  try {
    const country = await getCountryByCode(params.code);
    const name = country.names?.common ?? "Country";
    return {
      title: `${name} – World Explorer`,
      description: `Learn about ${name}: capital, population, languages, currencies, and more.`,
    };
  } catch {
    return { title: "Country – World Explorer" };
  }
}

export default async function CountryDetailsPage({ params }) {
  let country;
  try {
    country = await getCountryByCode(params.code);
  } catch {
    notFound();
  }

  const name = country.names?.common ?? "Unknown";
  const officialName = country.names?.official ?? name;
  const flagUrl = country.flag?.url_png || country.flag?.url_svg || "";
  const flagEmoji = country.flag?.emoji || "🏳️";
  const capital = country.capitals?.[0]?.name ?? "N/A";
  const region = country.region ?? "N/A";
  const subregion = country.subregion ?? "N/A";
  const population = country.population ?? 0;
  const languages = country.languages?.map((l) => l.name).join(", ") || "N/A";
  const currencies = country.currencies?.map((c) => `${c.name} (${c.symbol || "?"})`).join(", ") || "N/A";
  const timezones = country.timezones?.join(", ") || "N/A";
  const mapsUrl = country.links?.google_maps || null;

  return (
    <div className="details-page">
      <div className="details-container">
        <Link href="/countries" className="back-btn">← Back to Countries</Link>

        <div className="details-card">
          <div className="flag-section">
            {flagUrl ? (
              <img src={flagUrl} alt={`Flag of ${name}`} className="country-flag-large" />
            ) : (
              <div style={{ fontSize: "8rem", textAlign: "center", width: "100%" }}>{flagEmoji}</div>
            )}
          </div>

          <div className="info-section">
            <h1 className="country-name">{name}</h1>
            <p className="official-name">Official: {officialName}</p>

            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">🏙️ Capital</span>
                <span className="info-value">{capital}</span>
              </div>
              <div className="info-item">
                <span className="info-label">🌍 Region</span>
                <span className="info-value">{region}</span>
              </div>
              <div className="info-item">
                <span className="info-label">📍 Subregion</span>
                <span className="info-value">{subregion}</span>
              </div>
              <div className="info-item">
                <span className="info-label">👥 Population</span>
                <span className="info-value">{population.toLocaleString()}</span>
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

            {mapsUrl && (
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="maps-btn">
                🗺️ View on Google Maps
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
