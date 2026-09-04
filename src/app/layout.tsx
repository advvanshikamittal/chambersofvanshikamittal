import "./globals.css"
import Image from "next/image"
import Link from "next/link"
import TermsGate from "./TermsGate"
import MobileNav from "./MobileNav"
import logo from "./../../pictures/logo.png"

export const metadata = {
  title: {
    default: "Chambers of Vanshika Mittal | Legal Services",
    template: "%s",
  },
  description: "Legal services and insights by Chambers of Vanshika Mittal.",
  metadataBase: new URL("https://www.chambersofvanshikamittal.com"),
  keywords: ["Chambers of Vanshika Mittal", "advocate", "lawyer", "Delhi High Court", "Supreme Court of India", "legal services"],
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  },
  openGraph: {
    type: "website",
    url: "https://www.chambersofvanshikamittal.com",
    siteName: "Chambers of Vanshika Mittal",
    images: [{ url: logo.src, width: logo.width, height: logo.height, alt: "Chambers of Vanshika Mittal" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getUTCFullYear();

  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="container">
          <header className="nav">
            <nav className="navlinks navlinks--desktop" aria-label="Primary">
              <Link href="/team">Team</Link>
              <Link href="/practice-areas">Practice Areas</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
            <MobileNav logo={logo} />
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
              <div style={{ textAlign: "left" }}>📧 <strong>Email:</strong><br />office@chambersofvanshikamittal.com</div>
              <div style={{ textAlign: "center" }}>
                📞 <strong>Contact Number:</strong><br />+91-9315674271 <br />
                <br />💼 <a href="https://www.linkedin.com/in/vanshika-mittal-a9b432190" target="_blank" rel="noopener noreferrer"><strong>LinkedIn</strong></a>
              </div>
              <div style={{ textAlign: "right" }}>📍 <strong>Office(s):</strong><br />2B/2210 (20), Shivaji Nagar,<br />Delhi Road, Saharanpur,<br />Uttar Pradesh, India - 247001</div>
            </div>
            <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.15)", margin: "16px 16px 0 16px" }} />
            <div style={{ textAlign: "center", padding: "16px" }}>
              © {currentYear} Chambers of Vanshika Mittal. All rights reserved. <br />
              <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms-of-service">Terms of Service</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
