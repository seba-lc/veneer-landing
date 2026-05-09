type Props = {
  className?: string;
  height?: number;
  variant?: "ink" | "paper";
};

/**
 * Veneer wordmark — diseñado in-house. Glifo geométrico (V partido como
 * corte de chapa) + wordmark serif editorial. Sobrio, premium, legible.
 */
export function Wordmark({ className, height = 28, variant = "ink" }: Props) {
  const color = variant === "paper" ? "var(--paper)" : "var(--ink)";
  return (
    <svg
      role="img"
      aria-label="Veneer"
      viewBox="0 0 220 40"
      height={height}
      className={className}
      style={{ display: "block" }}
    >
      {/* Glyph: V como corte de chapa de melamina, dos líneas que se cortan */}
      <g stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="square">
        <path d="M 4 6 L 18 32" />
        <path d="M 32 6 L 18 32" />
        <line x1="4" y1="6" x2="32" y2="6" strokeWidth="1.1" />
      </g>
      {/* Wordmark VENEER */}
      <text
        x="46"
        y="29"
        fill={color}
        fontFamily="var(--font-display), Georgia, serif"
        fontSize="28"
        fontWeight="380"
        letterSpacing="0.18em"
        style={{ fontVariationSettings: '"opsz" 96, "SOFT" 30' }}
      >
        VENEER
      </text>
    </svg>
  );
}
