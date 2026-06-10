import { HeroBackground } from "@/components/hero-background";
import { WaitlistForm } from "@/components/waitlist-form";

export default function HomePage() {
  return (
    <div className="landing">
      <HeroBackground />
      <main className="page">
      <header className="hero">
        <div className="logo" aria-hidden="true">
          J
        </div>
        <h1>Jarvis</h1>
        <p className="tagline">Your Pinterest feed, without AI slop.</p>
        <p className="lead">
          Jarvis filters AI-generated pins from your Pinterest home feed, boards,
          and search — so you see real inspiration again.
        </p>
      </header>

      <WaitlistForm />

      <section className="card">
        <h2 style={{ margin: "0 0 12px", fontSize: "1.05rem" }}>
          Early access includes
        </h2>
        <ul className="bullets">
          <li>First invite when Jarvis launches on iOS</li>
          <li>Real-time AI pin filtering for your Pinterest account</li>
          <li>Save clean pins back to your boards</li>
          <li>Launch updates and Pro trial details</li>
        </ul>
      </section>

      <footer className="footer">
        <p>
          <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms</a>
        </p>
        <p>© {new Date().getFullYear()} Jarvis. Not affiliated with Pinterest.</p>
      </footer>
    </main>
    </div>
  );
}
