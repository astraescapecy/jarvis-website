type JarvisLogoProps = {
  size?: number;
  className?: string;
};

/** J lettermark with top-right folded corner — matches app JarvisLogoMark. */
export function JarvisLogo({ size = 72, className = "" }: JarvisLogoProps) {
  const fold = Math.round(size * 0.34);
  const radius = Math.round(size * 0.25);

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      role="img"
    >
      <rect
        x="1"
        y="1"
        width={size - 2}
        height={size - 2}
        rx={radius}
        fill="#000000"
        stroke="#e50914"
        strokeWidth="2"
      />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#e50914"
        fontSize={size * 0.52}
        fontWeight="800"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      >
        J
      </text>
      {/* Folded corner flap */}
      <path
        d={`M ${size - fold} 1 L ${size - 1} 1 L ${size - 1} ${fold} Z`}
        fill="#1f1f1f"
      />
      {/* Crease */}
      <line
        x1={size - fold}
        y1="1"
        x2={size - 1}
        y2={fold}
        stroke="rgba(0,0,0,0.55)"
        strokeWidth="1.4"
      />
      {/* Highlight on fold edge */}
      <line
        x1={size - fold}
        y1="1"
        x2={size - 1}
        y2="1"
        stroke="rgba(229,9,20,0.35)"
        strokeWidth="1.2"
      />
    </svg>
  );
}
