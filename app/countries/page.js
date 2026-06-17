import CountryCard from "@/components/CountryCard";
import { getAllCountries } from "@/lib/api";
import Link from "next/link";

const PAGE_SIZE = 20;

export default async function CountriesPage({ searchParams }) {
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

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(
    Math.max(1, parseInt(searchParams?.page, 10) || 1),
    totalPages
  );

  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = sorted.slice(start, start + PAGE_SIZE);

  return (
    <div className="countries-page">
      <div className="page-header">
        <h1>🌍 Explore Countries</h1>
        <p>Discover information about {sorted.length} countries from around the world</p>
      </div>

      <div className="country-grid">
        {pageItems.map((country) => (
          <CountryCard key={country.uuid} country={country} />
        ))}
      </div>

      <div className="pagination">
        <Link
          href={`/countries?page=${currentPage - 1}`}
          className={`page-btn ${currentPage <= 1 ? "page-btn-disabled" : ""}`}
          aria-disabled={currentPage <= 1}
        >
          ← Previous
        </Link>

        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>

        <Link
          href={`/countries?page=${currentPage + 1}`}
          className={`page-btn ${currentPage >= totalPages ? "page-btn-disabled" : ""}`}
          aria-disabled={currentPage >= totalPages}
        >
          Next →
        </Link>
      </div>
    </div>
  );
}