import Link from "next/link";

function getCountryId(country) {
  return country.codes?.alpha_3 || country.uuid;
}

export default function CountryCard({ country }) {
  const name = country.names?.common ?? "Unknown";
  const flagUrl = country.flag?.url_png || country.flag?.url_svg || "";
  const flagEmoji = country.flag?.emoji || "";
  const capital = country.capitals?.[0]?.name ?? "N/A";
  const region = country.region ?? "N/A";
  const population = country.population ?? 0;
  const id = getCountryId(country);

  return (
    <div className="country-card">
      <div className="card-flag">
        {flagUrl ? (
          <img src={flagUrl} alt={`Flag of ${name}`} className="flag-img" />
        ) : (
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            height: "100%", fontSize: "3rem", background: "var(--bg)"
          }}>
            {flagEmoji || "🏳️"}
          </div>
        )}
      </div>
      <div className="card-body">
        <h2 className="card-name">{name}</h2>
        <p className="card-info"><span className="label">🏙️ Capital:</span> {capital}</p>
        <p className="card-info"><span className="label">🌍 Region:</span> {region}</p>
        <p className="card-info"><span className="label">👥 Population:</span> {population.toLocaleString()}</p>
        {id && (
          <Link href={`/countries/${id}`} className="view-btn">View Details →</Link>
        )}
      </div>
    </div>
  );
}
