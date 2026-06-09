import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Jarvis",
};

export default function TermsPage() {
  return (
    <main className="page">
      <Link href="/" className="back">
        ← Back
      </Link>
      <h1>Terms of Service</h1>
      <p className="muted">Last updated: June 8, 2026</p>

      <article className="card prose">
        <p>By using Jarvis or joining the waitlist you agree to these terms.</p>

        <h2>What Jarvis is</h2>
        <p>
          Jarvis is a content curation companion for Pinterest. It filters
          AI-generated pins from feeds, boards, and search results using your
          existing Pinterest account via the official Pinterest API. Jarvis is not
          affiliated with Pinterest and does not replace the Pinterest app.
        </p>

        <h2>Waitlist</h2>
        <p>
          Joining the waitlist does not guarantee early access. We may contact you
          by email about launch timing, betas, and product updates.
        </p>

        <h2>Your account</h2>
        <p>
          You must have a valid Pinterest account and comply with Pinterest&apos;s
          terms. You are responsible for activity under your account.
        </p>

        <h2>Subscriptions</h2>
        <p>
          Paid features are billed through Apple&apos;s In-App Purchase system.
          Subscriptions renew unless cancelled in App Store settings.
        </p>

        <h2>Acceptable use</h2>
        <p>
          Do not misuse the service, attempt to bypass rate limits, or reverse
          engineer detection systems.
        </p>

        <h2>Disclaimers</h2>
        <p>
          Detection is probabilistic — Jarvis may miss some AI content or flag edge
          cases. We provide the service &quot;as is&quot; without warranties.
        </p>

        <h2>Contact</h2>
        <p>
          <a href="https://github.com/astraescapecy/Jarvis/issues">
            GitHub Issues
          </a>
        </p>
      </article>
    </main>
  );
}
