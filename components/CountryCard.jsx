import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <div className="country-card">
      <div className="card-flag">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="flag-img"
        />
      </div>
      <div className="card-body">
        <h2 className="card-name">{country.name.common}</h2>
        <p className="card-info">
          <span className="label">🏙️ Capital:</span>{" "}
          {country.capital?.[0] || "N/A"}
        </p>
        <p className="card-info">
          <span className="label">🌍 Region:</span> {country.region}
        </p>
        <p className="card-info">
          <span className="label">👥 Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>
        <Link href={`/countries/${country.cca3}`} className="view-btn">
          View Details →
        </Link>
      </div>
    </div>
  );
}
