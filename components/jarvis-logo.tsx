type JarvisLogoProps = {
  size?: number;
  className?: string;
};

/** Red J lettermark — fold on the top-right corner of the glyph. */
export function JarvisLogo({ size = 72, className = "" }: JarvisLogoProps) {
  // Fold sits on the top-right of the J (tuned to match app TextPainter metrics).
  const fold = size * 0.19;
  const foldX = size * 0.66;
  const foldY = size * 0.14;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      role="img"
    >
      <text
        x="50%"
        y="56%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#e50914"
        fontSize={size * 0.82}
        fontWeight="800"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        letterSpacing="-0.03em"
      >
        J
      </text>
      <path
        d={`M ${foldX} ${foldY} L ${foldX + fold} ${foldY} L ${foldX + fold} ${foldY + fold} Z`}
        fill="#b20710"
      />
      <line
        x1={foldX}
        y1={foldY}
        x2={foldX + fold}
        y2={foldY + fold}
        stroke="rgba(0,0,0,0.45)"
        strokeWidth={size * 0.02}
        strokeLinecap="round"
      />
      <line
        x1={foldX}
        y1={foldY}
        x2={foldX + fold}
        y2={foldY}
        stroke="rgba(229,9,20,0.5)"
        strokeWidth={size * 0.012}
      />
    </svg>
  );
}
