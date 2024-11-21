import Link from "next/link";

export default function Header() {
    return (
      <header className="header-wrapper">
      <nav className="header-nav-wrapper">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    );
  }