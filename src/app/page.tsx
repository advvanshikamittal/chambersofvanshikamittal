import Image from "next/image"
import scale from "./../../pictures/scale.png"

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
            This chamber is led by <strong>Vanshika Mittal</strong>, enrolled with the Bar Council of Delhi.
            The chamber brings dedicated expertise to high-stakes legal matters. 
            With consistent practice before the Hon'ble Supreme Court of India, Delhi High Court, and various specialized tribunals such as NGT and NCLAT, the chamber combines rigorous legal analysis with strategic advocacy.
          </p>
          <p> 
            The chamber practices in civil, criminal, and constitutional law, enabling it to navigate complex jurisdictional and procedural landscapes. 
            As a member of both the Supreme Court Bar Association (SCBA) and Delhi High Court Bar Association (DHCBA), the chamber remains actively engaged with the legal community and committed to professional excellence.
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