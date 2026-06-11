"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/countries", label: "Countries" },
    { href: "/search", label: "Search" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          🌍 World Explorer
        </Link>

        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link ${pathname === link.href ? "nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-link ${pathname === link.href ? "mobile-link-active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
