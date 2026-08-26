"use client";

import { useEffect, useState } from "react";

type TermsGateProps = {
  children: React.ReactNode;
};

export default function TermsGate({ children }: TermsGateProps) {
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    const sessionKey = "termsAccepted";
    const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const isReload = navEntry ? navEntry.type === "reload" : performance.navigation?.type === 1;

    if (isReload) {
      sessionStorage.removeItem(sessionKey);
    }

    const storedValue = sessionStorage.getItem(sessionKey);

    if (storedValue === "true") {
      setHasAccepted(true);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", !hasAccepted);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [hasAccepted]);

  const acceptTerms = () => {
    sessionStorage.setItem("termsAccepted", "true");
    setHasAccepted(true);
  };

  return (
    <>
      {children}
      {!hasAccepted ? (
        <div className="terms-overlay" role="dialog" aria-modal="true" aria-labelledby="terms-title">
          <div className="terms-dialog" role="document">
            <h2 id="terms-title">Disclaimer</h2>
            <p>
              Under the rules of the Bar Council of India, Chambers of Vanshika Mittal is prohibited from soliciting work or advertising in any form or manner.
              By accessing this website, you acknowledge that:
            </p>
            <ul>
                <li>You are seeking information about Chambers of Vanshika Mittal of your own accord.</li>
                <li>There has been no form of solicitation, advertisement, or inducement by Chambers of Vanshika Mittal or its members.</li>
            </ul>
            <p>
              This website is intended solely for informational purposes and Should not be construed as providing legal advice under any circumstances. 
              No material or information provided on this website should be interpreted as legal counsel.
              Chambers of Vanshika Mittal should not be liable for any consequences arising from actions taken by relying on the material/information provided on this website.<br />
              All content, information, and materials available on this website are the intellectual property of Chambers of Vanshika Mittal.
            </p>
            <div className="terms-actions">
              <button className="button" type="button" onClick={acceptTerms}>
                I accept the above disclaimer and terms.
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
