import Image from "next/image";
import { Reveal } from "./Reveal";

const aMedida = [
  {
    n: "01",
    title: "Cocinas",
    desc: "Cocinas integrales para residencia y gastronomía. Mesadas, alacenas, islas y frentes con criterio de uso real.",
  },
  {
    n: "02",
    title: "Placares y vestidores",
    desc: "Vestidores, walk-ins y placares lineales con interiores compartimentados a medida del espacio.",
  },
  {
    n: "03",
    title: "Oficinas",
    desc: "Estaciones de trabajo, recepciones, salas de reunión, mobiliario corporativo a escala.",
  },
  {
    n: "04",
    title: "Casas enteras",
    desc: "Equipamiento integral residencial: cocina + placares + baños + biblioteca, mismo lenguaje en toda la casa.",
  },
  {
    n: "05",
    title: "Locales y retail",
    desc: "Equipamiento de cadenas: barras, mostradores, exhibidores. Replicable a múltiples sucursales.",
  },
  {
    n: "06",
    title: "Custom",
    desc: "Piezas únicas: bibliotecas, paneles acústicos, mobiliario de autor. Lo que el proyecto pida.",
  },
];

const colecciones = [
  {
    n: "C / 01",
    title: "Mueble bar",
    desc: "Cava integrada en dos acabados.",
    img: "/catalogo/coleccion-bar/mueble-bar-oscuro.webp",
    alt: "Mueble bar Veneer en madera oscura con guarda-vinos vertical y puerta lateral",
  },
  {
    n: "C / 02",
    title: "Living TV",
    desc: "Rack + cómoda + mesa baja + mesita.",
    img: "/catalogo/coleccion-living-tv/rack-negro.webp",
    alt: "Rack para TV Veneer en negro con compartimentos y patas metálicas",
  },
  {
    n: "C / 03",
    title: "Mesa de quincho",
    desc: "Tapa de madera maciza con pata de hierro.",
    img: "/catalogo/mesa-quincho/montaje.webp",
    alt: "Mesa de quincho Veneer de madera maciza en patio exterior",
  },
  {
    n: "C / 04",
    title: "Mesa de trabajo",
    desc: "Sala de reuniones / comedor extendido.",
    img: "/catalogo/mesa-trabajo/montaje.webp",
    alt: "Mesa de trabajo Veneer en sala de reuniones con sillas tapizadas",
  },
  {
    n: "C / 05",
    title: "Cama box",
    desc: "Con cajones bajos integrados.",
    img: "/catalogo/cama-box/montaje.webp",
    alt: "Cama box Veneer con cajones integrados en dormitorio editorial",
  },
  {
    n: "C / 06",
    title: "Mesas auxiliares",
    desc: "Tipo C, tijera, arrime: livianas y livables.",
    img: "/catalogo/mesa-arrime-tipo-c/principal.webp",
    alt: "Mesa de arrime tipo C Veneer con lámpara de bronce",
  },
];

export function Work() {
  return (
    <section
      id="trabajo"
      className="relative py-24 md:py-32 border-t border-[var(--rule)] bg-[var(--bone)]"
    >
      <div className="container-edge">
        <div className="grid grid-cols-12 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <span className="section-num">02 / Trabajo</span>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal delay={0.05}>
              <h2 className="font-display-tight text-[7.5vw] md:text-[5vw] leading-[0.96] text-[var(--ink)] mt-4 md:mt-0">
                Lo que <span className="font-display-italic text-[var(--rust)]">construimos</span>.
              </h2>
              <p className="text-[var(--oak)] text-[16px] leading-[1.65] mt-6 max-w-2xl">
                Operamos en dos pistas: <strong>proyectos a medida</strong> con
                arquitectos y estudios, y <strong>colecciones propias</strong>
                {" "}—muebles standalone listos para especificar, con dos acabados
                y opciones de variación.
              </p>
            </Reveal>
          </div>
        </div>

        {/* === A MEDIDA === */}
        <Reveal>
          <div className="flex items-baseline gap-4 mb-10 md:mb-12">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--rust)]">
              02.A
            </span>
            <h3 className="font-display text-[28px] md:text-[34px] text-[var(--ink)]">
              A medida <span className="text-[var(--umber)] font-display-italic">/ proyectos integrales</span>
            </h3>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mb-24 md:mb-28">
          {aMedida.map((it, i) => (
            <Reveal key={it.n} delay={(i % 3) * 0.06}>
              <article className="group border-t border-[var(--rule-strong)] pt-4">
                <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--umber)]">
                  {it.n}
                </span>
                <h4 className="font-display text-2xl mt-1 text-[var(--ink)]">{it.title}</h4>
                <p className="text-[var(--oak)] text-[15px] leading-[1.55] mt-3 max-w-sm">
                  {it.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* === COLECCIONES (preview) === */}
        <Reveal>
          <div className="flex items-baseline gap-4 mb-10 md:mb-12">
            <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--rust)]">
              02.B
            </span>
            <h3 className="font-display text-[28px] md:text-[34px] text-[var(--ink)]">
              Colecciones <span className="text-[var(--umber)] font-display-italic">/ catálogo standalone</span>
            </h3>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          {colecciones.map((c, i) => (
            <Reveal key={c.n} delay={(i % 3) * 0.06}>
              <a href="#colecciones" className="group block">
                <figure className="img-zoom relative aspect-[4/5] w-full">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </figure>
                <div className="mt-4 flex items-baseline justify-between border-t border-[var(--rule-strong)] pt-3">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--umber)]">
                      {c.n}
                    </span>
                    <h4 className="font-display text-xl mt-0.5 text-[var(--ink)]">{c.title}</h4>
                  </div>
                </div>
                <p className="text-[var(--oak)] text-[14px] leading-[1.5] mt-2">
                  {c.desc}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a href="#colecciones" className="btn-rust">
              Ver catálogo completo
              <span aria-hidden>→</span>
            </a>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--umber)]">
              17 categorías · dos acabados estándar
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
