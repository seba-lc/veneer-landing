import { Reveal } from "./Reveal";

export function Manifesto() {
  return (
    <section
      id="manifiesto"
      className="relative py-24 md:py-40 border-t border-[var(--rule)]"
    >
      <div className="container-edge">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="section-num">01 / Manifiesto</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl mt-5 leading-[1.05] text-[var(--ink)]">
                El mueble se piensa <span className="font-display-italic text-[var(--rust)]">en conjunto</span>.
              </h2>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-9 md:pl-8 lg:pl-16">
            <Reveal delay={0.08}>
              <p className="dropcap font-display text-[1.55rem] md:text-[2rem] leading-[1.32] text-[var(--ink)] max-w-[60ch]">
                Cada proyecto empieza con una conversación. Un arquitecto trae
                un plano; un estudio, una idea de marca; un cliente, una vida
                cotidiana que necesita estar contenida. Nosotros aportamos el
                oficio: cómo se calza una bisagra que va a durar veinte años,
                qué placa resiste el calor de una cafetería, qué junta esconde
                el corte. La pieza final no es nuestra ni del cliente. Es el
                lugar donde las dos miradas se encuentran.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 max-w-[60ch] sm:max-w-none">
                {[
                  {
                    n: "i.",
                    label: "Co-creación",
                    body: "Tu idea, nuestro criterio constructivo. La pieza nace de las dos manos.",
                  },
                  {
                    n: "ii.",
                    label: "Oficio",
                    body: "Carpintería de melamina con estándar premium. Tolerancias bajas, terminaciones limpias.",
                  },
                  {
                    n: "iii.",
                    label: "Escala",
                    body: "Desde un placar hasta una casa entera o una cadena de locales. Mismo nivel.",
                  },
                ].map((p) => (
                  <div key={p.label} className="border-t border-[var(--rule-strong)] pt-4">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--rust)]">
                      {p.n}
                    </span>
                    <h3 className="font-display text-xl mt-2 text-[var(--ink)]">{p.label}</h3>
                    <p className="text-[var(--oak)] text-[15px] leading-[1.55] mt-2">{p.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
