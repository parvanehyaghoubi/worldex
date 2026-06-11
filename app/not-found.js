import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <span className="not-found-icon">🌐</span>
      <h1>404</h1>
      <p>Oops! This country or page was not found.</p>
      <Link href="/" className="btn-primary">
        ← Back to Home
      </Link>
    </div>
  );
}
