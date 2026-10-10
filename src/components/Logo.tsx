type LogoProps = {
  /** Font size in px for the MTSP letters */
  size?: number;
  className?: string;
};

/**
 * MTSP wordmark: Michroma, "MT" white + "SP" gold, thickened slightly with a
 * matching stroke, and a gold rule underneath.
 */
export const Logo = ({ size = 20, className = "" }: LogoProps) => {
  const tracking = Math.round(size * 0.065 * 10) / 10;
  return (
    <span
      className={`inline-flex flex-col ${className}`}
      style={{ gap: Math.max(4, Math.round(size * 0.28)) }}
      aria-label="MTSP, MT Sourcing Partners"
      role="img"
    >
      <span
        className="font-logo text-grey100 leading-none"
        style={{
          fontSize: size,
          letterSpacing: tracking,
          paddingLeft: tracking,
          WebkitTextStroke: `${(size * 0.02).toFixed(2)}px currentColor`,
        }}
        aria-hidden="true"
      >
        MT<span className="text-gold">SP</span>
      </span>
      <span
        className="block bg-[hsl(var(--primary))]"
        style={{ height: Math.max(1, Math.round(size * 0.07 * 2) / 2) }}
        aria-hidden="true"
      />
    </span>
  );
};
