const API_BASE = "https://api.restcountries.com/countries/v5";
const API_KEY = process.env.RESTCOUNTRIES_API_KEY;

const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
};

export async function getAllCountries() {
    const allCountries = [];
    let offset = 0;
    const limit = 100;

    while (true) {
        const res = await fetch(
            `${API_BASE}?limit=${limit}&offset=${offset}`,
            { headers: HEADERS, next: { revalidate: 3600 } }
        );
        if (!res.ok) {
            const text = await res.text();
            throw new Error(`API error ${res.status}: ${text}`);
        }
        const json = await res.json();
        const objects = json?.data?.objects ?? [];
        allCountries.push(...objects);

        const meta = json?.data?.meta ?? {};
        if (!meta.more) break;
        offset += limit;
    }

    return allCountries;
}

// ID used in URLs: alpha_3 if available, otherwise uuid
export function getCountryId(country) {
    return country.codes?.alpha_3 || country.uuid;
}

// Fetch single country — try alpha_3 lookup first, then uuid search
export async function getCountryByCode(code) {
    // Try: /countries/v5/codes.alpha_3/{code}
    const res = await fetch(
        `${API_BASE}?codes.alpha_3=${encodeURIComponent(code)}`,
        { headers: HEADERS, cache: "no-store" }
    );
    if (!res.ok) throw new Error(`API error ${res.status}`);
    const json = await res.json();
    let objects = json?.data?.objects ?? [];

    // If not found by alpha_3, try uuid search
    if (objects.length === 0) {
        const res2 = await fetch(
            `${API_BASE}?q=${encodeURIComponent(code)}`,
            { headers: HEADERS, cache: "no-store" }
        );
        if (!res2.ok) throw new Error(`API error ${res2.status}`);
        const json2 = await res2.json();
        objects = json2?.data?.objects ?? [];
        // Exact uuid match
        const exact = objects.find((c) => c.uuid === code);
        if (exact) return exact;
    }

    if (objects.length === 0) throw new Error("Country not found");
    return objects[0];
}
