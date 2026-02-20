import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";

const BRAND = {
  red: "#f58f80",
  orange: "#FAB571",
  yellow: "#fdd796",
  blue: "#415b8a",
  dark: "#181818",
};

const stats = [
  {
    value: 116,
    suffix: ".7",
    label: "Suicide Rate",
    sublabel: "per 100k Canadian paramedics (2014-2015)",
    color: BRAND.red,
    colorDark: "#c0483a",
    cardBg: "rgba(245, 143, 128, 0.18)",
    iconBg: "rgba(245, 143, 128, 0.22)",
  },
  {
    value: 8,
    suffix: "x",
    label: "Higher Risk",
    sublabel: "compared to the general working population",
    color: BRAND.blue,
    colorDark: "#243657",
    cardBg: "rgba(65, 91, 138, 0.13)",
    iconBg: "rgba(65, 91, 138, 0.20)",
  },
  {
    value: 24,
    suffix: "%",
    label: "PTSD Prevalence",
    sublabel: "estimated rate among Canadian medics",
    color: BRAND.orange,
    colorDark: "#b06a10",
    cardBg: "rgba(250, 181, 113, 0.20)",
    iconBg: "rgba(250, 181, 113, 0.35)",
  },
];

function CountUp({ to, frame, duration = 60 }) {
  const value = interpolate(frame, [0, duration], [0, to], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return <>{Math.round(value)}</>;
}

function StatCard({ stat, frame, column }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: column ? "row" : "column",
        alignItems: "center",
        flex: column ? "none" : 1,
        width: column ? "100%" : undefined,
        margin: column ? "0 0 20px 0" : "0 14px",
        gap: column ? 20 : 16,
      }}
    >
      <div
        style={{
          width: column ? 120 : "70%",
          height: column ? 120 : undefined,
          aspectRatio: column ? undefined : "1 / 1",
          flexShrink: 0,
          borderRadius: 24,
          background: stat.cardBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: column ? 52 : 72,
            fontWeight: 900,
            color: stat.colorDark,
            lineHeight: 1,
            fontFamily: '"BBH Bogle", "Lora", serif',
            letterSpacing: "-2px",
            display: "flex",
            alignItems: "baseline",
            gap: 2,
          }}
        >
          <CountUp to={stat.value} frame={frame} duration={60} />
          <span style={{ fontSize: column ? 28 : 40, color: stat.color, letterSpacing: 0 }}>
            {stat.suffix}
          </span>
        </div>
      </div>

      <div style={{ textAlign: column ? "left" : "center" }}>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: stat.colorDark,
            fontFamily: '"Fira Sans", "Inter", sans-serif',
            lineHeight: 1.35,
            marginBottom: 4,
          }}
        >
          {stat.label}
        </div>
        <div
          style={{
            fontSize: column ? 18 : 15,
            color: stat.color,
            fontFamily: '"Fira Sans", "Inter", sans-serif',
            lineHeight: 1.5,
          }}
        >
          {stat.sublabel}
        </div>
      </div>
    </div>
  );
}

export function StatsVideo({ column = false }) {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: "",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: column ? "24px 32px" : "0px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: column ? "column" : "row",
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} frame={frame} column={column} />
        ))}
      </div>
    </AbsoluteFill>
  );
}