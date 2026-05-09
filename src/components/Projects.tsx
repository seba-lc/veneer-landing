import { Reveal } from "./Reveal";

type Project = {
  n: string;
  client: string;
  type: string;
  location: string;
  year: string;
  scope: string;
  span: string;
};

const projects: Project[] = [
  {
    n: "P / 01",
    client: "Bonafide",
    type: "Retail · Equipamiento de cadena",
    location: "Tucumán — múltiples sucursales",
    year: "2022 — vigente",
    scope:
      "Mostradores, barras y mobiliario de servicio replicado a múltiples locales. Estandarización con tolerancia a variaciones de planta.",
    span: "lg:col-span-7",
  },
  {
    n: "P / 02",
    client: "Hospital Padilla",
    type: "Mobiliario sanitario",
    location: "San Miguel de Tucumán",
    year: "Proyecto institucional",
    scope:
      "Equipamiento institucional con frentes técnicos y herrajes de uso intensivo. Especificación a tres años.",
    span: "lg:col-span-5",
  },
  {
    n: "P / 03",
    client: "Casa particular",
    type: "Equipamiento integral residencial",
    location: "Yerba Buena",
    year: "2024",
    scope:
      "Cocina, placares maestros y biblioteca de living en un solo lenguaje. Co-creación con dueños de proyecto.",
    span: "lg:col-span-5",
  },
  {
    n: "P / 04",
    client: "Estudio de arquitectura",
    type: "Co-creación oficina ejecutiva",
    location: "Tucumán",
    year: "2024",
    scope:
      "Recepción, salas de reunión, mobiliario operativo. Coordinación full con el estudio.",
    span: "lg:col-span-7",
  },
];

// Tarjeta editorial: bloque de "papel" con tipografía generosa,
// micro-grid blueprint y pull-quote. Se reemplaza por foto real cuando llegue.
function ProjectPlate({ p }: { p: Project }) {
  return (
    <figure className="relative w-full aspect-[5/4] md:aspect-[16/10] bg-[var(--paper)] border border-[var(--rule-strong)] overflow-hidden">
      {/* blueprint grid */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.10]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id={`grid-${p.n.replace(/\s|\//g, "")}`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="var(--oak)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#grid-${p.n.replace(/\s|\//g, "")})`}
        />
      </svg>

      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <span className="block w-8 h-px bg-[var(--oak)]" />
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--umber)]">
            Memoria de obra
          </span>
        </div>
        <blockquote className="font-display-italic text-[var(--ink)] text-[clamp(20px,2.6vw,32px)] leading-[1.18] max-w-[80%]">
          “{p.scope}”
        </blockquote>
        <div className="flex items-end justify-between">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--umber)]">
            Foto definitiva en preparación
          </span>
          <span className="font-display text-[var(--rust)] text-3xl md:text-4xl tracking-tight">
            {p.client}
          </span>
        </div>
      </div>
    </figure>
  );
}

export function Projects() {
  return (
    <section
      id="proyectos"
      className="relative py-24 md:py-32 border-t border-[var(--rule)] bg-[var(--bone)]"
    >
      <div className="container-edge">
        <div className="grid grid-cols-12 mb-12 md:mb-20 items-end">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <span className="section-num">05 / Proyectos</span>
              <h2 className="font-display-tight text-[7.5vw] md:text-[5.5vw] leading-[0.95] mt-4 text-[var(--ink)]">
                Una selección
                <br />
                <span className="font-display-italic text-[var(--rust)]">curada</span>.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-8 mt-6 md:mt-0">
            <Reveal delay={0.08}>
              <p className="text-[var(--oak)] text-[16px] leading-[1.6] max-w-md">
                Una muestra de proyectos representativos —desde retail
                multi-local hasta residencias integrales y equipamiento
                institucional. La carpeta completa con fotos de obra se
                entrega bajo brief.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-12">
          {projects.map((p, i) => (
            <Reveal
              key={p.n}
              delay={(i % 2) * 0.1}
              className={`col-span-1 ${p.span}`}
            >
              <article className="group h-full">
                <ProjectPlate p={p} />
                <div className="mt-5 grid grid-cols-2 gap-4 border-t border-[var(--rule-strong)] pt-4">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--umber)]">
                      {p.n}
                    </span>
                    <h3 className="font-display text-2xl mt-1 text-[var(--ink)]">
                      {p.client}
                    </h3>
                    <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--rust)] mt-1">
                      {p.type}
                    </p>
                  </div>
                  <dl className="text-right space-y-1">
                    <div>
                      <dt className="sr-only">Ubicación</dt>
                      <dd className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--oak)]">
                        {p.location}
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">Año</dt>
                      <dd className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--oak)]">
                        {p.year}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a href="#contacto" className="btn-rust">
              Solicitar carpeta completa
              <span aria-hidden>→</span>
            </a>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--umber)]">
              Entrega en 48 hs hábiles
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
