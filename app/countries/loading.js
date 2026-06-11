export default function Loading() {
  return (
    <div className="countries-page">
      <div className="page-header">
        <h1>🌍 Explore Countries</h1>
        <p>Loading countries...</p>
      </div>
      <div className="country-grid">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-flag" />
            <div className="skeleton-body">
              <div className="skeleton-line w70" />
              <div className="skeleton-line w55" />
              <div className="skeleton-line w45" />
              <div className="skeleton-line w60" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
