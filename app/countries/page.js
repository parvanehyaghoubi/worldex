import CountryCard from "@/components/CountryCard";

// This page can be statically rendered and cached.
export default async function CountriesPage() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3", {
    cache: "force-cache",
  });

  const countries = await res.json();

  const sorted = [...countries].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <div className="countries-page">
      <div className="page-header">
        <h1>🌍 Explore Countries</h1>
        <p>Discover information about countries from around the world</p>
      </div>

      <div className="country-grid">
        {sorted.slice(0, 20).map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}
