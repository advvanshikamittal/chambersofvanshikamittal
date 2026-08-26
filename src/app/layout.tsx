import "./globals.css"
import Image from "next/image"
import Link from "next/link"
import TermsGate from "./TermsGate"
import logo from "./../../pictures/logo.png"

export const metadata = {
  title: "Chambers of Vanshika Mittal | Legal Services",
  description: "Legal services and insights by Chambers of Vanshika Mittal."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getUTCFullYear();

  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="container">
          <header className="nav">
            <Link className="brand" href="/" aria-label="Home">
              <Image suppressHydrationWarning className="logo logo--nav" src={logo} alt="Chambers of Vanshika Mittal logo" />
            </Link>
            <nav className="navlinks navlinks--desktop" aria-label="Primary">
              <Link href="/team">Team</Link>
              <Link href="/practice-areas">Practice Areas</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
            <details className="navlinks navlinks--mobile">
              <summary className="menu-toggle" aria-label="Open menu">
                <span className="menu-icon" aria-hidden="true"></span>
              </summary>
              <div className="menu-panel" role="menu" aria-label="Primary">
                <Link href="/team">Team</Link>
                <Link href="/practice-areas">Practice Areas</Link>
                <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact Us</Link>
              </div>
            </details>
          </header>

          <main className="main-content">
            <TermsGate>{children}</TermsGate>
          </main>

          <footer className="footer">
            <div className="footer-brand">
              <Image suppressHydrationWarning className="logo" src={logo} alt="Chambers of Vanshika Mittal logo" />
              <span>Chambers of Vanshika Mittal</span>
            </div>
            <div className="footer-info">
              <div style={{ textAlign: "left" }}>📧 <strong>Email:</strong><br />adv.vanshikamittal@gmail.com</div>
              <div style={{ textAlign: "center" }}>
                📞 <strong>Contact Number:</strong><br />+91-9315674271 <br />
                <br />💼 <a href="https://www.linkedin.com/in/vanshika-mittal-a9b432190" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
              <div style={{ textAlign: "right" }}>📍 <strong>Office(s):</strong><br />2B/2210 (20), Shivaji Nagar,<br />Delhi Road, Saharanpur,<br />Uttar Pradesh, India - 247001</div>
            </div>
            <div style={{ marginTop: 15, marginBottom: 20, textAlign: "center" }}>
            © {currentYear} Chambers of Vanshika Mittal. All rights reserved. <br />
            Designed by <a href="https://www.linkedin.com/in/akanshi-mittal" target="_blank" rel="noopener noreferrer">Akanshi Mittal</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
