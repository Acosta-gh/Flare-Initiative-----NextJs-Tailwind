import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";

const BRAND = {
  red: "#f58f80",
  orange: "#FAB571",
  yellow: "#fdd796",
  blue: "#415b8a",
  dark: "#181818",
  bg: "#f8f7f5",           // warm off-white — matches gray-50 feel
  divider: "rgba(24,24,24,0.07)",
};

const stats = [
  {
    value: 116,
    suffix: ".7",
    label: "Suicide Rate",
    sublabel: "per 100k Canadian paramedics\n(2014–2015)",
    color: BRAND.red,
    colorDark: "#c0483a",
    accent: "#f58f80",
  },
  {
    value: 8,
    suffix: "×",
    label: "Higher Risk",
    sublabel: "compared to the general\nworking population",
    color: BRAND.blue,
    colorDark: "#243657",
    accent: "#415b8a",
  },
  {
    value: 24,
    suffix: "%",
    label: "PTSD Prevalence",
    sublabel: "estimated rate among\nCanadian first responders",
    color: BRAND.orange,
    colorDark: "#b06a10",
    accent: "#FAB571",
  },
];

function CountUp({ to, frame, duration = 72 }) {
  const value = interpolate(frame, [0, duration], [0, to], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return <>{Math.round(value)}</>;
}

function StatCard({ stat, frame, column, index }) {
  // Stagger entry: each card fades + slides in with a delay
  const delay = index * 18;
  const opacity = interpolate(frame, [delay, delay + 28], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame, [delay, delay + 28], [18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const isLast = index === stats.length - 1;

  if (column) {
    // Mobile: horizontal card rows
    return (
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          padding: "24px 0",
          borderBottom: isLast ? "none" : `1px solid ${BRAND.divider}`,
          gap: 24,
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            width: 3,
            height: 56,
            background: stat.accent,
            flexShrink: 0,
            borderRadius: 2,
          }}
        />

        {/* Number */}
        <div
          style={{
            minWidth: 100,
            display: "flex",
            alignItems: "baseline",
            gap: 2,
          }}
        >
          <span
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: stat.colorDark,
              lineHeight: 1,
              fontFamily: '"BBH Bogle", "Lora", Georgia, serif',
              letterSpacing: "-1.5px",
            }}
          >
            <CountUp to={stat.value} frame={frame} duration={72} />
          </span>
          <span
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: stat.accent,
              letterSpacing: 0,
              fontFamily: '"BBH Bogle", "Lora", Georgia, serif',
            }}
          >
            {stat.suffix}
          </span>
        </div>

        {/* Text */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: stat.colorDark,
              fontFamily: '"Fira Sans", "Inter", sans-serif',
              lineHeight: 1.3,
              marginBottom: 4,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            {stat.label}
          </div>
          <div
            style={{
              fontSize: 14,
              color: BRAND.dark,
              opacity: 0.45,
              fontFamily: '"Fira Sans", "Inter", sans-serif',
              lineHeight: 1.5,
              whiteSpace: "pre-line",
            }}
          >
            {stat.sublabel}
          </div>
        </div>
      </div>
    );
  }

  // Desktop: vertical cards side by side
  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "36px 40px",
        borderRight: isLast ? "none" : `1px solid ${BRAND.divider}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 40,
          width: 36,
          height: 3,
          background: stat.accent,
          borderRadius: 2,
        }}
      />

      {/* Big number */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 2,
          marginBottom: 16,
          marginTop: 8,
        }}
      >
        <span
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: stat.colorDark,
            lineHeight: 1,
            fontFamily: '"BBH Bogle", "Lora", Georgia, serif',
            letterSpacing: "-3px",
          }}
        >
          <CountUp to={stat.value} frame={frame} duration={72} />
        </span>
        <span
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: stat.accent,
            letterSpacing: 0,
            fontFamily: '"BBH Bogle", "Lora", Georgia, serif',
            marginLeft: 2,
          }}
        >
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <div
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: stat.colorDark,
          fontFamily: '"Fira Sans", "Inter", sans-serif',
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: 8,
        }}
      >
        {stat.label}
      </div>

      {/* Sublabel */}
      <div
        style={{
          fontSize: 13,
          color: BRAND.dark,
          opacity: 0.45,
          fontFamily: '"Fira Sans", "Inter", sans-serif',
          lineHeight: 1.6,
          whiteSpace: "pre-line",
        }}
      >
        {stat.sublabel}
      </div>
    </div>
  );
}

export function StatsVideo({ column = false }) {
  const frame = useCurrentFrame();

  // Fade in the whole container
  const containerOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: BRAND.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          opacity: containerOpacity,
          display: "flex",
          flexDirection: column ? "column" : "row",
          width: "100%",
          height: "100%",
          alignItems: column ? "stretch" : "center",
          padding: column ? "28px 32px" : "0",
        }}
      >
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            stat={stat}
            frame={frame}
            column={column}
            index={index}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
}