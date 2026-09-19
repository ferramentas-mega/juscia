import { metricDefs } from "@/lib/content";
import { Sparkline } from "@/components/ui/Sparkline";
import { useCountUp } from "@/hooks/useCountUp";

const valueTargets: Record<string, { target: number; format: (v: number) => string }> = {
  "Atendimentos realizados": {
    target: 128400,
    format: (v) => Math.round(v).toLocaleString("pt-BR"),
  },
  "Contratos fechados": {
    target: 6238,
    format: (v) => Math.round(v).toLocaleString("pt-BR"),
  },
  "Aumento de contratos": {
    target: 42,
    format: (v) => `+${Math.round(v)}%`,
  },
};

function MetricCard({ metric }: { metric: (typeof metricDefs)[number] }) {
  const cfg = valueTargets[metric.title];
  const { ref, display } = useCountUp(cfg.target, cfg.format);

  return (
    <div
      ref={ref}
      className="flex flex-col rounded-xl border border-juscia-border bg-white shadow-[0_1px_2px_rgb(0_0_0_/_0.05)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_hsl(220_100%_43%_/_0.45)]"
    >
      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="flex items-center gap-2">
          <span style={{ color: metric.color }} className="inline-flex">
            <metric.icon size={20} />
          </span>
          <span className="text-base font-semibold text-juscia-ink">{metric.title}</span>
        </div>
        <div className="flex items-end justify-between gap-2.5">
          <div className="flex flex-col gap-1">
            <div className="whitespace-nowrap text-sm text-juscia-muted">{metric.period}</div>
            <div className="text-[30px] font-bold tracking-[-0.02em] text-juscia-ink">{display}</div>
          </div>
          <Sparkline values={metric.data} color={metric.color} format={metric.fmt} />
        </div>
      </div>
    </div>
  );
}

export function Metrics() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center rounded-full border border-juscia-border bg-juscia-badge-bg px-3 py-0.5 text-xs font-semibold text-juscia-badge-fg">
            Resultados
          </span>
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-juscia-primary">
            Resultados de quem automatiza o atendimento jurídico
          </h2>
          <p className="max-w-xl text-juscia-muted">
            O impacto da inteligência artificial na rotina de escritórios de advocacia que usam a
            Juscia.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {metricDefs.map((m) => (
            <MetricCard key={m.title} metric={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
