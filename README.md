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

This project uses the **REST Countries API v5** (https://restcountries.com), which requires an API key.

### Base URL
```
https://api.restcountries.com/countries/v5
```

### Authentication
All requests require a Bearer token in the `Authorization` header:
```
Authorization: Bearer YOUR_API_KEY
```

You can get a free API key at: https://restcountries.com/sign-up

### Endpoints used

| Purpose | Endpoint |
|---------|----------|
| All countries (paginated) | `GET /countries/v5?limit=100&offset=0` |
| Search by alpha_3 code | `GET /countries/v5?codes.alpha_3={code}` |
| Search by uuid | `GET /countries/v5?q={uuid}` |

### Setup

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Add your API key to `.env.local`:
```
RESTCOUNTRIES_API_KEY=your_api_key_here
```

3. Update `lib/api.js` to use the env variable:
```js
const API_KEY = process.env.RESTCOUNTRIES_API_KEY;
```

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
    page.js           # Countries list (Server Component, revalidate 1hr)
    [code]/
      page.js         # Country detail (Server Component, no-store)
  search/
    page.js           # Search page (loads data, passes to client)

components/
  Navbar.jsx          # Navigation bar
  Footer.jsx          # Site footer
  CountryCard.jsx     # Reusable country card
  CountrySearch.jsx   # "use client" search with useState

lib/
  api.js              # API helper — all fetch logic and pagination

globals.css           # Global CSS + Tailwind directives
tailwind.config.js    # Tailwind configuration
```


## Rendering & Caching

- **Countries list page** uses `next: { revalidate: 3600 }` — cached for 1 hour.
- **Country detail page** uses `cache: "no-store"` — fetches fresh data every request.
- **Search page** fetches all countries server-side and passes them to the `CountrySearch` client component.
- Pagination is handled automatically in `getAllCountries()` — fetches all ~254 countries across multiple requests (max 100 per request).


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
Uses `codes.alpha_3` as the route ID, with `uuid` as a fallback for countries that don't have an alpha_3 code.

### `CountrySearch.jsx`
`"use client"` component. Uses `useState` to filter countries by name as the user types.

### `lib/api.js`
Centralizes all API calls. Handles:
- Pagination to fetch all countries
- Lookup by `alpha_3` code or `uuid`
- Error handling


## Bonus Features Implemented

- `generateMetadata()` on the country details page for dynamic SEO
- Responsive mobile-friendly design
- Hover effects on cards and navbar links
- Clear search button in the search input
- Tailwind CSS support alongside custom CSS variables 


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


## Contact
For any inquiries, please contact:
- parvaneh.yaghoubi77@gmail.com


## Links

### Parvaneh Yaghoubi
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://parvaneh-yaghoubi.github.io/Portfolio/)

[![linkedin Badge](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/parvaneh-yaghoubi-54362620b)


<div align="center">
  <sub>Made with ❤️ by <a href="https://parvaneh-yaghoubi.github.io/Portfolio/">Parvaneh</a></sub>
</div>
