import CountrySearch from "@/components/CountrySearch";

export default async function SearchPage() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3", {
    cache: "force-cache",
  });
  const countries = await res.json();

  return (
    <div className="search-page">
      <div className="page-header">
        <h1>🔍 Search Countries</h1>
        <p>Find any country by name</p>
      </div>
      <CountrySearch countries={countries} />
    </div>
  );
}
