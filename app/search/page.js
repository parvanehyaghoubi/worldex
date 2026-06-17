import CountrySearch from "@/components/CountrySearch";
import { getAllCountries } from "@/lib/api";
import Link from "next/link";

export default async function SearchPage() {
  let countries = [];
  let error = null;

  try {
    countries = await getAllCountries();
  } catch (e) {
    error = e.message;
  }

  if (error) {
    return (
      <div className="search-page">
        <div className="page-header">
          <h1>🔍 Search Countries</h1>
        </div>
        <div className="no-results">
          <span>⚠️</span>
          <p>Could not load countries. Please try again later.</p>
          <Link href="/" className="btn-primary" style={{ marginTop: "1rem", display: "inline-flex" }}>
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="search-page">
      <div className="page-header">
        <h1>🔍 Search Countries</h1>
        <p>Find any country by name — {countries.length} countries available</p>
      </div>
      <CountrySearch countries={countries} />
    </div>
  );
}
