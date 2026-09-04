import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Chambers of Vanshika Mittal",
  description: "Read the terms of service governing access to and use of the Chambers of Vanshika Mittal website.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <>
      <h1 className="h1" style={{margin: "32px 16px 32px 16px"}}>Terms of Service</h1>
      <div style={{ margin: "16px", textAlign: "justify" }}>
        <p>Last Updated: 30 August 2026</p>
        <p>Welcome to the website of Chambers of Vanshika Mittal. These Terms of Use govern your access to and use of www.chambersofvanshikamittal.com (the &quot;Website&quot;). By accessing or using the Website, you agree to these Terms.</p>

        <ol>
          <li>
            <h3>Purpose of the Website</h3>
            <p>The Website is maintained for general informational purposes and provides information about Chambers of Vanshika Mittal, its practice areas, professional activities, publications and legal developments.</p>
            <p>The Website is not intended to provide legal advice.</p>
          </li>
          <li>
            <h3>No Advocate-Client Relationship</h3>
            <p>Accessing the Website, reading its content, submitting an enquiry, or communicating with the Chamber through email or an online form does not create an advocate-client relationship.</p>
            <p>An advocate-client relationship arises only upon formal engagement and acceptance of representation by the Chamber.</p>
          </li>
          <li>
            <h3>No Legal Advice</h3>
            <p>Nothing on this Website constitutes legal advice, legal opinion or a recommendation concerning any particular legal matter.</p>
            <p>Legal issues are fact-specific and depend upon applicable legislation, judicial decisions and the circumstances of each matter.</p>
            <p>Visitors should obtain appropriate professional advice before acting or refraining from acting on information contained on this Website.</p>
          </li>
          <li>
            <h3>Accuracy and Currency</h3>
            <p>The Chamber endeavours to maintain accurate and current information on the Website.</p>
            <p>However, we do not warrant that all content is complete, accurate, current or free from errors or omissions.</p>
            <p>Laws, regulations and judicial decisions may change after material has been published.</p>
          </li>
          <li>
            <h3>Legal Articles and Case Discussions</h3>
            <p>Articles, case comments, legal updates and other publications appearing on the Website are provided for general informational purposes.</p>
            <p>Such material reflects the law or analysis as understood at the time of publication and should not be treated as legal advice for any particular matter.</p>
          </li>
          <li>
            <h3>Intellectual Property</h3>
            <p>Unless otherwise stated, the content of this Website, including its text, branding, logos, graphics, photographs, design elements, articles and other original material, is owned by or licensed to Chambers of Vanshika Mittal.</p>
            <p>You may access and view the Website for personal and non-commercial purposes.</p>
            <p>No part of the Website may be reproduced, modified, distributed, republished, commercially exploited or used to create derivative works without prior written permission, except where permitted by applicable law.</p>
          </li>
          <li>
            <h3>Third-Party Websites</h3>
            <p>The Website may contain links to external websites for convenience or informational purposes.</p>
            <p>The Chamber does not control or endorse such websites and assumes no responsibility for their content, availability, security or privacy practices.</p>
          </li>
          <li>
            <h3>Website Availability</h3>
            <p>We endeavour to maintain the availability and security of the Website but do not guarantee that it will always be uninterrupted, error-free, secure or available.</p>
            <p>We may modify, suspend or discontinue any part of the Website without prior notice.</p>
          </li>
          <li>
            <h3>Limitation of Liability</h3>
            <p>To the extent permitted by applicable law, Chambers of Vanshika Mittal shall not be liable for any loss or damage arising from reliance upon information published on the Website or from the use of, or inability to use, the Website.</p>
            <p>Nothing in these Terms is intended to exclude or limit any liability that cannot lawfully be excluded or limited.</p>
          </li>
          <li>
            <h3>Governing Law and Jurisdiction</h3>
            <p>These Terms shall be governed by and construed in accordance with the laws of India.</p>
            <p>Subject to applicable law, courts having appropriate jurisdiction in New Delhi, India, shall have jurisdiction over disputes arising from or relating to the Website.</p>
          </li>
          <li>
            <h3>Changes to these Terms</h3>
            <p>We may revise these Terms from time to time to reflect changes in our practices, technology, applicable law or professional requirements.</p>
            <p>The revised Terms will be published on this page with the updated &quot;Last Updated&quot; date.</p>
          </li>
          <li>
            <h3>Contact</h3>
            <p>For questions regarding these Terms of Use:</p>
            <p>Chambers of Vanshika Mittal<br />Email: office@chambersofvanshikamittal.com<br />Website: www.chambersofvanshikamittal.com</p>
          </li>
        </ol>
      </div>
    </>
  );
}
