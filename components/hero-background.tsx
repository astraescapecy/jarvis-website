"use client";

import { useEffect, useState } from "react";
import { demoPins, FLAGGED_INDICES } from "@/lib/demo-pin-images";

const PINS = demoPins(12, 180);

const REVEAL_STAGGER_MS = 70;
const REVEAL_DURATION_MS = 400;
const DISSOLVE_STAGGER_MS = 140;
const DISSOLVE_HOLD_MS = 320;
const DISSOLVE_DURATION_MS = 700;
const LOOP_PAUSE_MS = 2200;

const FLAGGED_ORDER = Array.from(FLAGGED_INDICES).sort((a, b) => a - b);

type PinPhase = "hidden" | "revealed" | "dissolving" | "gone";

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export function HeroBackground() {
  const [cycle, setCycle] = useState(0);
  const [phases, setPhases] = useState<PinPhase[]>(
    () => PINS.map(() => "hidden"),
  );
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setPhases(PINS.map(() => "revealed"));
      return;
    }

    let cancelled = false;

    async function runCycle() {
      setPhases(PINS.map(() => "hidden"));

      await wait(50);
      if (cancelled) return;

      setPhases(PINS.map(() => "revealed"));

      const revealEnd =
        REVEAL_DURATION_MS + REVEAL_STAGGER_MS * (PINS.length - 1) + 500;
      await wait(revealEnd);
      if (cancelled) return;

      for (const index of FLAGGED_ORDER) {
        setPhases((current) => {
          const next = [...current];
          next[index] = "dissolving";
          return next;
        });

        await wait(DISSOLVE_HOLD_MS + DISSOLVE_DURATION_MS);
        if (cancelled) return;

        setPhases((current) => {
          const next = [...current];
          next[index] = "gone";
          return next;
        });

        await wait(DISSOLVE_STAGGER_MS);
        if (cancelled) return;
      }

      await wait(LOOP_PAUSE_MS);
      if (cancelled) return;

      setCycle((value) => value + 1);
    }

    void runCycle();

    return () => {
      cancelled = true;
    };
  }, [cycle, reduceMotion]);

  return (
    <div className="hero-background" aria-hidden="true">
      <div className="hero-background__masonry" key={cycle}>
        {PINS.map((pin) => {
          const phase = phases[pin.index] ?? "hidden";

          return (
            <div
              key={`${cycle}-${pin.index}`}
              className={[
                "hero-pin",
                pin.flagged ? "hero-pin--flagged" : "",
                phase === "revealed" ? "hero-pin--visible" : "",
                phase === "dissolving" ? "hero-pin--dissolving" : "",
                phase === "gone" ? "hero-pin--gone" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{
                aspectRatio: `1 / ${pin.aspectRatio}`,
                animationDelay: `${pin.index * REVEAL_STAGGER_MS}ms`,
              }}
            >
              <div className="hero-pin__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pin.url} alt="" loading="eager" decoding="async" />
                {pin.flagged ? (
                  <span
                    className={`hero-pin__badge${
                      phase === "dissolving" ? " hero-pin__badge--pulse" : ""
                    }`}
                  >
                    FLAGGED
                  </span>
                ) : null}
                <div className="hero-pin__mist" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="hero-background__fade" />
      <div className="hero-background__glow" />
    </div>
  );
}
