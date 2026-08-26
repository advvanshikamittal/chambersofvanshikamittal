import Image from "next/image"
import books from "./../../../pictures/books.png"

const areas = [
  { title: "Civil Litigation"},
  { title: "Criminal Advocacy"},
  { title: "Constitutional Law & Matters"},
  { title: "Environment Law" },
  { title: "Labour Laws" },
  { title: "Tribunal Representation (NGT, NCLAT, NCLT)" },
  { title: "Legal Drafting & Pleadings" },
  { title: "Legal Research & Analysis" },
  { title: "Client Advisory" }
];

export default function PracticeAreasPage() {
  return (
    <>
        <div className="hero-media">
          <Image
            className="picture"
            src={books}
            alt="Books Image"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="hero-overlay">
            <h1 className="h1" style={{margin: "32px 16px 32px 16px"}}>Core Competencies</h1>
          </div>
        </div>

      <div className="grid">
        {areas.map((a) => (
          <div className="card" key={a.title}>
            <h2>{a.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}