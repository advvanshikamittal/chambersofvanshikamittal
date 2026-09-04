import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Chambers of Vanshika Mittal",
  description: "Read the privacy policy of Chambers of Vanshika Mittal, explaining how information is collected, used, and protected on this website.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <h1 className="h1" style={{ margin: "32px 16px 32px 16px" }}>Privacy Policy</h1>
      <div style={{ margin: "16px", textAlign: "justify" }}>
        <p>Last Updated: 30 August 2026</p>
        <p>Chambers of Vanshika Mittal (&quot;Chamber&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) respects the privacy of individuals who visit and use this website. This Privacy Policy explains how information may be collected, used, and protected when you visit www.chambersofvanshikamittal.com (&quot;Website&quot;). By accessing or using the Website, you acknowledge the practices described in this Privacy Policy.</p>

        <ol>
          <li>
            <h3>Information We May Collect</h3>
            <p>We may collect information that you voluntarily provide when you communicate with us through the Website, including: name; email address; telephone or mobile number; details contained in an enquiry or communication; documents or other information voluntarily submitted by you; and any other information you choose to provide.</p>
            <p>We may also automatically receive limited technical information when you visit the Website, such as your IP address, browser type, device information, pages accessed, referring website, date and time of access, and information relating to website performance and security. The extent of such technical information depends on the services and security features enabled on the Website.</p>
          </li>
          <li>
            <h3>How We Use Information</h3>
            <p>Information collected through the Website may be used to: respond to enquiries and communications; understand the nature of a legal enquiry; communicate with you regarding the enquiry; maintain appropriate records; improve the Website and its functionality; monitor and maintain website security; prevent misuse or unauthorised access; and comply with applicable legal, regulatory and professional obligations.</p>
            <p>Submitting an enquiry through the Website does not establish an advocate-client relationship.</p>
          </li>
          <li>
            <h3>Confidentiality and Legal Privilege</h3>
            <p>The Website is intended to provide general information about the Chamber and its practice.</p>
            <p>Please do not submit confidential, privileged, highly sensitive or time-critical information through the Website or through an enquiry form unless specifically requested by the Chamber.</p>
            <p>Information submitted before a formal advocate-client relationship has been established may not be subject to advocate-client privilege or confidentiality. An advocate-client relationship shall arise only upon formal engagement and acceptance of representation by the Chamber.</p>
          </li>
          <li>
            <h3>Email Communications</h3>
            <p>The Website may use Resend, an email delivery service operated by Plus Five Five, Inc., to facilitate the delivery of emails submitted through the Website. Where you submit information through a website form or other electronic communication that uses Resend, relevant information may be processed by Resend for the purpose of delivering the communication.</p>
            <p>This may include your name, email address, message content, attachments where applicable, and associated email metadata. Resend states that its primary data processing and storage operations take place in the United States. Resend&apos;s processing of such information is governed by its own privacy and data-processing terms.</p>
          </li>
          <li>
            <h3>Website Hosting, Security and Infrastructure</h3>
            <p>The Website uses Cloudflare services for aspects of website infrastructure, security, performance, DNS and related technical functions. Cloudflare may process technical and network information, including IP addresses, request information and security-related data, as necessary to provide and protect its services.</p>
            <p>Where Cloudflare Web Analytics is enabled, Cloudflare states that its Web Analytics service does not use cookies or local storage for analytics and does not fingerprint visitors for analytics purposes.</p>
          </li>
          <li>
            <h3>Cookies and Similar Technologies</h3>
            <p>The Website may use cookies or similar technologies that are necessary for website functionality, security and performance. Certain cookies may be placed or processed by infrastructure or security providers, including Cloudflare. Cloudflare states that certain cookies used in connection with its services are strictly necessary for providing the requested services.</p>
            <p>You may configure your browser to restrict or disable cookies. However, doing so may affect certain Website functionality.</p>
          </li>
          <li>
            <h3>Third-Party Services and Links</h3>
            <p>The Website may contain links to third-party websites, including professional, governmental, legal or informational resources. The Chamber does not control and is not responsible for the privacy practices, content, security or availability of third-party websites.</p>
            <p>Your interaction with such websites is governed by the terms and privacy policies of those respective websites.</p>
          </li>
          <li>
            <h3>Data Sharing</h3>
            <p>We do not sell or rent personal information collected through the Website.</p>
            <p>Information may be disclosed where reasonably necessary: to service providers supporting the Website and its communications; to comply with applicable law, court orders or lawful governmental requests; to protect the rights, security or property of the Chamber or others; to investigate suspected misuse, fraud or security incidents; or where disclosure is otherwise permitted or required by applicable law.</p>
          </li>
          <li>
            <h3>Data Security</h3>
            <p>We take reasonable technical and organisational measures to protect information submitted through the Website against unauthorised access, misuse, alteration, disclosure or destruction.</p>
            <p>However, no method of electronic transmission or storage over the internet can be guaranteed to be completely secure. Accordingly, visitors should avoid transmitting highly sensitive or confidential information through ordinary website forms or email unless specifically requested.</p>
          </li>
          <li>
            <h3>Data Retention</h3>
            <p>We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including responding to enquiries, maintaining appropriate professional records, complying with legal obligations, resolving disputes and protecting our legitimate interests.</p>
            <p>Retention periods may vary depending on the nature of the information and the applicable legal or professional requirements.</p>
          </li>
          <li>
            <h3>Your Rights and Requests</h3>
            <p>Subject to applicable law, you may request access to, correction of, or deletion of personal information held by us. Requests relating to personal information may be sent to: office@chambersofvanshikamittal.com</p>
            <p>We may need to verify your identity before acting upon such a request.</p>
          </li>
          <li>
            <h3>Children&apos;s Privacy</h3>
            <p>The Website is not specifically directed towards children, and we do not knowingly seek to collect personal information from children through the Website.</p>
          </li>
          <li>
            <h3>Changes to this Privacy Policy</h3>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, applicable law or professional requirements.</p>
            <p>The updated version will be published on this page with the revised &quot;Last Updated&quot; date.</p>
          </li>
          <li>
            <h3>Contact</h3>
            <p>For questions concerning this Privacy Policy or the handling of personal information, please contact:</p>
            <p>Chambers of Vanshika Mittal<br />Email: office@chambersofvanshikamittal.com<br />Website: www.chambersofvanshikamittal.com</p>
          </li>
        </ol>
      </div>

    </>
  );
}
