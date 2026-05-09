import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Briefing y visita",
    body:
      "Conversamos con vos y, si hace falta, visitamos el espacio. Entendemos el uso real, los plazos y el presupuesto. Si trabajás con un estudio, leemos los planos y aportamos criterio constructivo.",
  },
  {
    n: "02",
    title: "Diseño co-creado",
    body:
      "Volvemos con propuesta: planimetría, despieces, paleta de melaminas y herrajes. Iteramos hasta que la pieza calza con tu idea. Acá se decide casi todo.",
  },
  {
    n: "03",
    title: "Fabricación",
    body:
      "Cortamos, canteamos y montamos en taller. Calidad de placas premium, tolerancias bajas, terminaciones que aguantan tráfico real. Documentamos avance.",
  },
  {
    n: "04",
    title: "Instalación y entrega",
    body:
      "Llevamos al lugar, montamos en sitio, ajustamos lo que tenga que ajustarse. Te entregamos garantía, manual de mantenimiento y queda abierto el canal post-venta.",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative py-24 md:py-40 border-t border-[var(--rule)]"
    >
      <div className="container-edge">
        <div className="grid grid-cols-12 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <span className="section-num">03 / Proceso</span>
              <h2 className="font-display-tight text-5xl md:text-6xl leading-[0.95] mt-4 text-[var(--ink)]">
                Cuatro pasos.
                <br />
                <span className="font-display-italic text-[var(--rust)]">Sin sorpresas.</span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8 md:pl-8 lg:pl-16 mt-6 md:mt-3">
            <Reveal delay={0.08}>
              <p className="text-[var(--oak)] text-[17px] leading-[1.6] max-w-xl">
                Trabajamos con un proceso documentado. Cada etapa tiene un
                entregable claro y vos firmás antes de que avancemos. Esto
                vuelve a Veneer una opción cómoda para estudios de arquitectura
                que cargan responsabilidad ante sus propios clientes.
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="relative">
          <span
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-[2rem] h-px bg-[var(--rule-strong)]"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-x-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="relative">
                <li className="relative pt-12 md:pt-16">
                  <span
                    aria-hidden
                    className="absolute left-0 top-[1.65rem] hidden md:block w-3 h-3 rounded-full bg-[var(--rust)] -translate-y-1/2"
                  />
                  <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--umber)]">
                    Paso {s.n}
                  </span>
                  <h3 className="font-display text-2xl md:text-[1.7rem] mt-2 text-[var(--ink)]">
                    {s.title}
                  </h3>
                  <p className="text-[var(--oak)] text-[15px] leading-[1.6] mt-3">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
