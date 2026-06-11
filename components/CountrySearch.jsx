"use client";

import { useState } from "react";
import CountryCard from "./CountryCard";

export default function CountrySearch({ countries }) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? countries.filter((c) =>
        c.name.common.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="search-container">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search for a country... e.g. Japan, Germany"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        {query && (
          <button className="clear-btn" onClick={() => setQuery("")}>
            ✕
          </button>
        )}
      </div>

      {query.trim() && (
        <p className="results-count">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &quot;{query}&quot;
        </p>
      )}

      {!query.trim() && (
        <div className="search-hint">
          <p>Start typing to search for a country</p>
          <div className="hint-examples">
            <span>Try:</span>
            {["Afghanistan", "Japan", "Germany", "Brazil", "Canada"].map((s) => (
              <button key={s} className="hint-chip" onClick={() => setQuery(s)}>
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {filtered.length > 0 && (
        <div className="country-grid">
          {filtered.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}

      {query.trim() && filtered.length === 0 && (
        <div className="no-results">
          <span>😕</span>
          <p>No countries found for &quot;{query}&quot;</p>
        </div>
      )}
    </div>
  );
}
