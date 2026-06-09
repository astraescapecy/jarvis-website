import { demoPins } from "@/lib/demo-pin-images";

const PINS = demoPins(12, 180);

export function HeroBackground() {
  return (
    <div className="hero-background" aria-hidden="true">
      <div className="hero-background__masonry">
        {PINS.map((pin) => (
          <div
            key={pin.index}
            className={`hero-pin${pin.flagged ? " hero-pin--flagged" : ""}`}
            style={{ aspectRatio: `1 / ${pin.aspectRatio}` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={pin.url} alt="" loading="eager" decoding="async" />
            {pin.flagged ? <span className="hero-pin__badge">FLAGGED</span> : null}
          </div>
        ))}
      </div>
      <div className="hero-background__fade" />
      <div className="hero-background__glow" />
    </div>
  );
}
