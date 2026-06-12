# Worldex

Worldex is a Next.js project that allows users to explore countries around the world.

## Live Demo: 
https://country-explorer-henna-iota.vercel.app/


## Features

- App Router
- File-based routing
- Shared layout
- Dynamic routes
- Server components
- Client components
- Real API data fetching
- Static rendering and caching
- Dynamic rendering
- Search functionality

## API Used

This project uses the REST Countries API (https://restcountries.com), a free and open API that provides detailed information about every country in the world.

### All countries: 
https://restcountries.com/v3.1/all

### Single country: 
https://restcountries.com/v3.1/alpha/[code]



## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero section and navigation |
| `/countries` | Lists 20 countries (cached, server component) |
| `/countries/[code]` | Full details for a single country (dynamic) |
| `/search` | Live search by country name (client component) |
| `/about` | Project info and Next.js topics covered |

## Project Structure

```
app/
  layout.js           # Root layout with Navbar, Footer, metadata
  page.js             # Home page
  about/
    page.js           # About page
  countries/
    page.js           # Countries list (Server Component, force-cache)
    [code]/
      page.js         # Country detail (Server Component, no-store)
  search/
    page.js           # Search page (loads data, passes to client)

components/
  Navbar.jsx          # Navigation bar
  Footer.jsx          # Site footer
  CountryCard.jsx     # Reusable country card
  CountrySearch.jsx   # "use client" search with useState

styles/
  globals.css         # Global CSS, responsive layout
```

## Rendering & Caching

- **Countries list page** uses `cache: "force-cache"` — statically rendered and cached.
- **Country detail page** uses `cache: "no-store"` — fetches fresh data every request.
- **Search page** fetches all countries server-side and passes them to the `CountrySearch` client component.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Components Overview

### `Navbar.jsx`
Links to Home, Countries, Search, and About. Sticky header with hover effects.

### `Footer.jsx`
Appears on all pages via `app/layout.js`. Shows project name and API credit.

### `CountryCard.jsx`
Server-compatible card showing flag, name, capital, region, population, and a "View Details" link.

### `CountrySearch.jsx`
`"use client"` component. Uses `useState` to filter countries by name as the user types.

## Bonus Features Implemented

- `generateMetadata()` on the country details page for dynamic SEO
- Responsive mobile-friendly design
- Hover effects on cards and navbar links
- Clear search button in the search input



## Screenshots

<div align="center">
    <table align="center">
    <tr align="center">
    <td align="center">
    <h3>Home</h3>
    <a href="https://github.com/Parvaneh-Yaghoubi/country-explorer/blob/main/public/home.png">
    <img src="https://raw.githubusercontent.com/Parvaneh-Yaghoubi/country-explorer/main/public/home.png" height=200px>
    </a>
</td>
      <td align="center">
    <h3>Countries</h3>
    <a href="https://github.com/Parvaneh-Yaghoubi/country-explorer/blob/main/public/countries.png">
    <img src="https://raw.githubusercontent.com/Parvaneh-Yaghoubi/country-explorer/main/public/countries.png" height=200px>
    </a>
</td>
<td  align="center">
    <h3>Search</h3>
    <a href="https://github.com/Parvaneh-Yaghoubi/country-explorer/blob/main/public/search.png">
    <img src="https://raw.githubusercontent.com/Parvaneh-Yaghoubi/country-explorer/main/public/search.png" height=200px>
    </a>
    </td>
      <td  align="center">
    <h3>About</h3>
    <a href="https://github.com/Parvaneh-Yaghoubi/country-explorer/blob/main/public/about.png">
    <img src="https://raw.githubusercontent.com/Parvaneh-Yaghoubi/country-explorer/main/public/about.png" height=200px>
    </a>
    </td>
    <tr>
    </table>
</div>


## 📝 License

MIT — feel free to use this as a reference or starting point for your own projects.


## Links

### Parvaneh Yaghoubi
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://parvaneh-yaghoubi.github.io/Portfolio/)

[![linkedin Badge](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/parvaneh-yaghoubi-54362620b)


<div align="center">
  <sub>Made with ❤️ by <a href="https://parvaneh-yaghoubi.github.io/Portfolio/">Parvaneh</a></sub>
</div>
