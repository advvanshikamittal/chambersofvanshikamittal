import Image from "next/image"
import type { Metadata } from "next"
import scale from "./../../pictures/scale.png"

export const metadata: Metadata = {
  title: "Chambers of Vanshika Mittal | Advocates in Delhi",
  description: "Chambers of Vanshika Mittal provides legal counsel on civil, criminal, and constitutional matters before the Supreme Court of India, Delhi High Court, NGT and NCLAT.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Chambers of Vanshika Mittal | Advocates in Delhi",
    description: "Dedicated legal counsel for complex civil, criminal, and constitutional matters.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Image
            className="picture"
            src={scale}
            alt="Scale Image"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="hero-overlay">
            <h1>Chambers of Vanshika Mittal</h1>
            <p>Dedicated legal counsel for complex civil, criminal, and constitutional matters</p>
          </div>
        </div>
        <div style={{ marginLeft: 16, marginRight: 16 }}>
          <p>
            Chambers of Vanshika Mittal is led by Vanshika Mittal, an advocate enrolled with the Bar Council of Delhi, practising before the Hon’ble Supreme Court of India, Delhi High Court, NGT and NCLAT.
          </p>
          <p> 
            The Chamber handles civil, criminal, and constitutional matters, and provides legal services including legal advice, drafting and vetting of agreements and other legal documents, legal notices, opinions, pleadings, and representation before courts and tribunals. With an emphasis on rigorous legal research, strategic preparation, and effective advocacy, the Chamber approaches each matter with careful attention to its legal and factual complexities. 
          </p>
          <p>
            Vanshika Mittal is a member of the Supreme Court Bar Association (SCBA) and Delhi High Court Bar Association (DHCBA), with published work in reputed legal journals.
          </p>
        </div>
      </section>

      <div className="grid">
        <div className="card">
        <h2>OUR APPROACH</h2>
        <p>
            The chamber believes in delivering meticulous legal work grounded in thorough research and constitutional principles. 
            Every matter receives personalized attention, strategic planning, and rigorous advocacy.
            Whether crafting detailed pleadings or advising on complex legal questions, the chamber prioritizes clarity, precision, and results-oriented counsel.< br />
            The chamber's publications in reputed legal journals reflect a commitment to contributing to legal discourse and staying abreast of evolving jurisprudence.
        </p>
        </div>
      </div>
    </>
  );
}