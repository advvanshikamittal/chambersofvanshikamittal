import Image from "next/image"
import vanshikaProfile from "./../../../pictures/vanshika-mittal-profile.png"

export default function TeamPage() {
  return (
    <>
      <h1 className="h1" style={{margin: "32px 16px 32px 16px"}}>Team</h1>
      <div className="grid">
      <div className="card">
        <Image className="profile-pic" src={vanshikaProfile} alt="Vanshika Mittal profile" />
        <h2>Vanshika Mittal, Advocate</h2>
        <h4>FOUNDER</h4>
        <p>
          • B.B.A. LL.B. (Hons.), O.P. Jindal Global University<br />
          • Enrolled with Bar Council of Delhi<br />
          • Member, Supreme Court Bar Association (SCBA)<br />
          • Member, Delhi High Court Bar Association (DHCBA)<br />
          • Published legal research in reputed journals<br />
        </p>
      </div>
      </div>
    </>
  );
}
