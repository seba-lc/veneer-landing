import { Reveal } from "./Reveal";

const clients = [
  { name: "Bonafide", desc: "Cadena nacional de café + chocolate" },
  { name: "Benedetto", desc: "Marca local de referencia" },
  { name: "La Cota", desc: "Industria — equipamiento operativo" },
  { name: "Hospital Padilla", desc: "Institucional sanitario" },
  { name: "Hirigoyen", desc: "Supermercado regional" },
];

export function Clients() {
  return (
    <section
      id="clientes"
      className="relative py-24 md:py-32 border-t border-[var(--rule)] overflow-hidden"
    >
      <div className="container-edge">
        <div className="grid grid-cols-12 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <span className="section-num">05 / Confianza</span>
              <h2 className="font-display-tight text-5xl md:text-6xl leading-[0.95] mt-4 text-[var(--ink)]">
                Quiénes
                <br />
                nos <span className="font-display-italic text-[var(--rust)]">eligen</span>.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8 md:pl-8 lg:pl-16 mt-6 md:mt-3">
            <Reveal delay={0.08}>
              <p className="text-[var(--oak)] text-[17px] leading-[1.6] max-w-xl">
                Marcas y proyectos que confían su mobiliario a Veneer —desde
                cadenas con presencia en todo el país hasta el sistema público
                de salud y la industria pesada de la provincia.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Wordmark wall — sin logos PNG hasta confirmar permisos */}
        <Reveal delay={0.05}>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-[var(--rule-strong)]">
            {clients.map((c) => (
              <li
                key={c.name}
                className="border-b border-r border-[var(--rule-strong)] last:border-r-0 lg:[&:nth-child(5n)]:border-r-0 md:[&:nth-child(3n)]:border-r-0 lg:md:[&:nth-child(3n)]:border-r p-6 md:p-8 min-h-[180px] flex flex-col justify-between"
              >
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--umber)]">
                  Cliente
                </span>
                <div>
                  <h3 className="font-display text-3xl md:text-[2rem] text-[var(--ink)]">
                    {c.name}
                  </h3>
                  <p className="text-[var(--oak)] text-sm leading-[1.4] mt-2 max-w-[24ch]">
                    {c.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--umber)] mt-8 max-w-2xl">
            + Estudios de arquitectura, particulares y proyectos integrales
            residenciales y corporativos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
