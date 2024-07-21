"use client";

export default function Header() {
    return (
      <header>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="http://localhost:3000/">Home</a></li>
            <li><a href="/row">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
}