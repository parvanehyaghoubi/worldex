export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About World Explorer</h1>

        <div className="about-card">
          <h2>📖 What is this project?</h2>
          <p>
            World Explorer is a Next.js project that uses real API data to display
            countries around the world. It allows users to browse, search, and
            explore detailed information about any country.
          </p>
        </div>

        <div className="about-card">
          <h2>🌐 API Used</h2>
          <p>
            This project uses the <strong>REST Countries API</strong> (
            <a href="https://restcountries.com" target="_blank" rel="noopener noreferrer">
              restcountries.com
            </a>
            ), a free and open API that provides detailed information about every
            country in the world.
          </p>
          <ul>
            <li>All countries: <code>https://restcountries.com/v3.1/all</code></li>
            <li>Single country: <code>https://restcountries.com/v3.1/alpha/[code]</code></li>
          </ul>
        </div>

        <div className="about-card">
          <h2>⚡ Next.js Topics Practiced</h2>
          <ul className="topics-list">
            <li>✅ Next.js App Router</li>
            <li>✅ File-based routing</li>
            <li>✅ Shared layouts (<code>layout.js</code>)</li>
            <li>✅ Dynamic routes (<code>[code]</code>)</li>
            <li>✅ Server Components (Countries & Details pages)</li>
            <li>✅ Client Components (<code>CountrySearch</code>)</li>
            <li>✅ Data fetching with <code>async/await</code></li>
            <li>✅ Static rendering & caching (<code>force-cache</code>)</li>
            <li>✅ Dynamic rendering (<code>no-store</code>)</li>
            <li>✅ <code>generateMetadata()</code> for dynamic metadata</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>🛠️ Tech Stack</h2>
          <ul>
            <li>Next.js 14+ (App Router)</li>
            <li>JavaScript</li>
            <li>CSS (Custom Properties)</li>
            <li>REST Countries API</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
