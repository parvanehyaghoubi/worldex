import CountryCard from "@/components/CountryCard";
import { getAllCountries } from "@/lib/api";

export default async function CountriesPage() {
  let countries = [];
  let error = null;

  try {
    countries = await getAllCountries();
  } catch (e) {
    error = e.message;
  }

  if (error) {
    return (
      <div className="countries-page">
        <div className="page-header">
          <h1>🌍 Explore Countries</h1>
          <p>Could not load countries: {error}</p>
        </div>
      </div>
    );
  }

  const sorted = [...countries].sort((a, b) =>
    (a.names?.common ?? "").localeCompare(b.names?.common ?? "")
  );

  return (
    <div className="countries-page">
      <div className="page-header">
        <h1>🌍 Explore Countries</h1>
        <p>Discover information about {sorted.length} countries from around the world</p>
      </div>
      <div className="country-grid">
        {sorted.map((country) => (
          <CountryCard key={country.uuid} country={country} />
        ))}
      </div>
    </div>
  );
}
