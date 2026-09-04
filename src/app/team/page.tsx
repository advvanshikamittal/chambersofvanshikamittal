import Image from "next/image"
import type { Metadata } from "next"
import vanshikaProfile from "./../../../pictures/vanshika-mittal-profile.png"
import manojProfile from "./../../../pictures/manoj-mittal-profile.png"

export const metadata: Metadata = {
  title: "Our Team | Chambers of Vanshika Mittal",
  description: "Meet the team at Chambers of Vanshika Mittal, including founder and advocate Vanshika Mittal and legal advisor Manoj Mittal.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Our Team | Chambers of Vanshika Mittal",
    description: "Meet the team at Chambers of Vanshika Mittal.",
    url: "/team",
  },
};

export default function TeamPage() {
  return (
    <>
      <h1 className="h1" style={{margin: "32px 16px 32px 16px"}}>Team</h1>
      <div className="grid">
      <div className="card">
        <Image className="profile-pic" src={vanshikaProfile} alt="Vanshika Mittal profile" />
        <h2>Vanshika Mittal</h2>
        <h4>Founder & Advocate</h4>
        <p>
          • B.B.A. LL.B. (Hons.), O.P. Jindal Global University<br />
          • Enrolled with Bar Council of Delhi<br />
          • Member, Supreme Court Bar Association (SCBA)<br />
          • Member, Delhi High Court Bar Association (DHCBA)<br />
          • Published legal research in reputed journals<br />
        </p>
      </div>
      <div className="card">
        <Image className="profile-pic" src={manojProfile} alt="Manoj Mittal profile" />
        <h2>Manoj Mittal</h2>
        <h4>Legal Advisor</h4>
        <p>
          • LL.M., Meerut College<br />
        </p>
      </div>
      </div>
    </>
  );
}
