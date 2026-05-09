import { Reveal } from "./Reveal";

const offers = [
  { label: "Lectura técnica", body: "Leemos planos y especificaciones, devolvemos observaciones constructivas en 72 hs." },
  { label: "Despiece y planimetría", body: "Entregamos despieces firmados que el estudio puede adjuntar a su documentación." },
  { label: "Materiales y muestras", body: "Carpeta de placas, herrajes y terminaciones disponibles, con muestras físicas a pedido." },
  { label: "Cotización en etapas", body: "Pricing transparente por etapa de obra, ajustado al cronograma del estudio." },
  { label: "Coordinación en obra", body: "Capataz dedicado durante la instalación. Acta de entrega + retoque programado." },
  { label: "Garantía documentada", body: "Garantía escrita de fabricación y herrajes. Soporte post-entrega real." },
];

export function ForArchitects() {
  return (
    <section
      id="estudios"
      className="relative py-24 md:py-40 border-t border-[var(--rule)] bg-[var(--ink)] text-[var(--paper)] overflow-hidden"
    >
      {/* Subtle blueprint grid sobre fondo oscuro */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]"
      >
        <defs>
          <pattern id="grid-dark" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="var(--paper)" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-dark)" />
      </svg>

      <div className="container-edge relative z-10">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <span
                className="font-mono text-[11px] tracking-[0.22em] uppercase"
                style={{ color: "color-mix(in srgb, var(--paper) 60%, transparent)" }}
              >
                06 / Para estudios
              </span>
              <h2 className="font-display-tight text-[8vw] md:text-[5.5vw] leading-[0.95] mt-4">
                Si sos
                <br />
                <span className="font-display-italic text-[var(--rust)]">arquitecto</span>,
                <br />
                este es tu canal.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-7 md:pl-8 lg:pl-16">
            <Reveal delay={0.08}>
              <p className="text-[17px] leading-[1.65] max-w-xl" style={{ color: "color-mix(in srgb, var(--paper) 78%, transparent)" }}>
                Trabajamos con estudios y arquitectos independientes. Tomamos
                tu documentación de proyecto, devolvemos un brief técnico en
                72 hs y avanzamos en etapas firmadas. Tu cliente queda con
                vos. Nosotros nos hacemos cargo del taller.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 border-t"
            style={{ borderColor: "color-mix(in srgb, var(--paper) 22%, transparent)" }}
          >
            {offers.map((o, i) => (
              <li
                key={o.label}
                className="pt-6"
                style={{
                  borderTop: i >= 3 ? "1px solid color-mix(in srgb, var(--paper) 22%, transparent)" : "none",
                }}
              >
                <span
                  className="font-mono text-[11px] tracking-[0.18em] uppercase"
                  style={{ color: "var(--rust)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl mt-2">{o.label}</h3>
                <p
                  className="text-[15px] leading-[1.55] mt-2 max-w-sm"
                  style={{ color: "color-mix(in srgb, var(--paper) 70%, transparent)" }}
                >
                  {o.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-16 md:mt-20 flex flex-wrap items-center gap-5">
            <a
              href="mailto:hola@veneer.com.ar?subject=Brief%20de%20proyecto%20%E2%80%94%20estudio%20de%20arquitectura"
              className="inline-flex items-center gap-3 bg-[var(--paper)] text-[var(--ink)] px-6 py-4 font-mono text-[12px] tracking-[0.16em] uppercase hover:bg-[var(--rust)] hover:text-[var(--paper)] transition-colors"
            >
              Enviar brief
              <span aria-hidden>→</span>
            </a>
            <span
              className="font-mono text-[11px] tracking-[0.18em] uppercase"
              style={{ color: "color-mix(in srgb, var(--paper) 60%, transparent)" }}
            >
              Respuesta en 72 hs hábiles
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
