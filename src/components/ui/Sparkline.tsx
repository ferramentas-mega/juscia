import { useId, useRef } from "react";

type Props = {
  values: number[];
  color: string;
  format: (v: number) => string;
};

/** Smooth area sparkline with a hover cursor + tooltip, mirroring the prototype's chart. */
export function Sparkline({ values, color, format }: Props) {
  const gid = useId();
  const tipRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<SVGCircleElement | null>(null);
  const lineRef = useRef<SVGLineElement | null>(null);

  const w = 160;
  const h = 64;
  const pad = 7;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const rng = max - min || 1;
  const pts = values.map((v, i) => ({
    x: pad + (i * (w - 2 * pad)) / (values.length - 1),
    y: h - pad - ((v - min) / rng) * (h - 2 * pad),
    v,
  }));

  let d = `M${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    d += `C${p1.x + (p2.x - p0.x) / 6},${p1.y + (p2.y - p0.y) / 6} ${p2.x - (p3.x - p1.x) / 6},${p2.y - (p3.y - p1.y) / 6} ${p2.x},${p2.y}`;
  }
  const area = `${d}L${pts[pts.length - 1].x},${h} L${pts[0].x},${h} Z`;
  const last = pts[pts.length - 1];

  const handleMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const r = svg.getBoundingClientRect();
    const rel = ((e.clientX - r.left) / r.width) * w;
    let best = 0;
    let bd = Infinity;
    pts.forEach((p, i) => {
      const dd = Math.abs(p.x - rel);
      if (dd < bd) {
        bd = dd;
        best = i;
      }
    });
    const p = pts[best];
    if (dotRef.current) {
      dotRef.current.setAttribute("cx", String(p.x));
      dotRef.current.setAttribute("cy", String(p.y));
      dotRef.current.style.opacity = "1";
    }
    if (lineRef.current) {
      lineRef.current.setAttribute("x1", String(p.x));
      lineRef.current.setAttribute("x2", String(p.x));
      lineRef.current.style.opacity = "1";
    }
    if (tipRef.current) {
      tipRef.current.textContent = format(p.v);
      tipRef.current.style.left = `${(p.x / w) * 100}%`;
      tipRef.current.style.opacity = "1";
    }
  };

  const handleLeave = () => {
    if (dotRef.current) dotRef.current.style.opacity = "0";
    if (lineRef.current) lineRef.current.style.opacity = "0";
    if (tipRef.current) tipRef.current.style.opacity = "0";
  };

  return (
    <div className="relative h-16 w-full max-w-[160px]">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="block overflow-visible cursor-crosshair"
      >
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.3} />
            <stop offset="100%" stopColor={color} stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#${gid})`} stroke="none" />
        <path
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          ref={lineRef}
          x1={last.x}
          x2={last.x}
          y1={0}
          y2={h}
          stroke={color}
          strokeWidth={1}
          strokeDasharray="2 2"
          vectorEffect="non-scaling-stroke"
          style={{ opacity: 0, transition: "opacity .15s" }}
        />
        <circle
          ref={dotRef}
          cx={last.x}
          cy={last.y}
          r={4}
          fill={color}
          stroke="#fff"
          strokeWidth={2}
          style={{ opacity: 0, transition: "opacity .15s" }}
        />
      </svg>
      <div
        ref={tipRef}
        className="pointer-events-none absolute -top-1.5 left-0 -translate-x-1/2 whitespace-nowrap rounded-lg border border-juscia-border bg-white/95 px-2 py-0.5 text-xs font-semibold text-juscia-ink opacity-0 shadow-[0_8px_20px_-8px_rgb(0_0_0_/_0.3)] backdrop-blur-sm transition-opacity"
      />
    </div>
  );
}
