import Image from "next/image"
import vanshikaProfile from "./../../../pictures/vanshika-mittal-profile.png"
import manojProfile from "./../../../pictures/manoj-mittal-profile.png"

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
