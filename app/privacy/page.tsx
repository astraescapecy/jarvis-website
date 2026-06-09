import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Jarvis",
};

export default function PrivacyPage() {
  return (
    <main className="page">
      <Link href="/" className="back">
        ← Back
      </Link>
      <h1>Privacy Policy</h1>
      <p className="muted">Last updated: June 8, 2026</p>

      <article className="card prose">
        <p>
          Jarvis (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) helps you filter
          AI-generated content from your Pinterest experience. This policy explains
          what we collect, why, and how you can control it.
        </p>

        <h2>Waitlist</h2>
        <p>
          When you join the waitlist, we collect your email address via Klaviyo to
          send launch updates and early-access invitations. You can unsubscribe from
          those emails at any time.
        </p>

        <h2>What we collect (app)</h2>
        <ul>
          <li>
            Pinterest account connection data (username, OAuth tokens stored
            encrypted on our servers)
          </li>
          <li>Filter preferences and detection mode settings</li>
          <li>
            Pins you save in Jarvis, including which Pinterest board they were saved
            to
          </li>
          <li>Anonymous usage stats such as pins blocked, saves, and shares</li>
          <li>Subscription status via RevenueCat / the App Store</li>
        </ul>

        <h2>What we do not do</h2>
        <ul>
          <li>We do not sell your personal data</li>
          <li>We only save pins to Pinterest when you tap save in Jarvis</li>
          <li>
            We do not read your Pinterest password (sign-in uses official Pinterest
            OAuth)
          </li>
        </ul>

        <h2>How detection works</h2>
        <p>
          Pin images may be analyzed by Pinterest metadata, Hive, and/or Sightengine
          to estimate AI-generated content. Results are cached to reduce repeat API
          calls.
        </p>

        <h2>Data storage</h2>
        <p>
          Data is stored in Firebase (Firestore, Cloud Functions) under your user ID.
          Pinterest tokens are encrypted at rest.
        </p>

        <h2>Your choices</h2>
        <ul>
          <li>
            Unsubscribe from waitlist emails via the link in any Klaviyo message
          </li>
          <li>
            Disconnect Pinterest or delete your account data from Settings → Account
          </li>
          <li>Adjust sensitivity and detection mode at any time</li>
          <li>Manage subscription via the App Store</li>
        </ul>

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
