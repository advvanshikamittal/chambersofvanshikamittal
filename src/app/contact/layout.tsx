import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Chambers of Vanshika Mittal",
  description: "Get in touch with Chambers of Vanshika Mittal for legal advice and representation before courts and tribunals across Delhi and Uttar Pradesh.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Chambers of Vanshika Mittal",
    description: "Get in touch with Chambers of Vanshika Mittal for legal advice and representation.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
