import Image from "next/image";
import { Reveal } from "./Reveal";

const items = [
  {
    n: "01",
    title: "Cocinas",
    desc: "Cocinas integrales para residencia y gastronomía. Mesadas, alacenas, islas, frentes en melamina técnica y madera.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    alt: "Cocina contemporánea con muebles de melamina premium",
    aspect: "aspect-[4/5]",
  },
  {
    n: "02",
    title: "Placares",
    desc: "Vestidores, walk-ins, placares lineales con interiores compartimentados a medida.",
    img: "https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1600&q=80",
    alt: "Placar a medida con divisiones interiores en melamina madera",
    aspect: "aspect-[4/5]",
  },
  {
    n: "03",
    title: "Oficinas",
    desc: "Estaciones de trabajo, recepciones, salas de reunión, mobiliario corporativo a escala.",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
    alt: "Oficina con mobiliario corporativo a medida",
    aspect: "aspect-[4/5]",
  },
  {
    n: "04",
    title: "Casas enteras",
    desc: "Equipamiento integral residencial: cocina + placares + baños + biblioteca, mismo lenguaje.",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
    alt: "Living de casa con muebles integrados a medida",
    aspect: "aspect-[4/5]",
  },
  {
    n: "05",
    title: "Locales y retail",
    desc: "Equipamiento de cadenas: barras, mostradores, exhibidores. Réplicable a múltiples sucursales.",
    img: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1600&q=80",
    alt: "Café con mobiliario a medida estandarizado",
    aspect: "aspect-[4/5]",
  },
  {
    n: "06",
    title: "Custom",
    desc: "Piezas únicas: bibliotecas, paneles acústicos, mobiliario de autor. Lo que el proyecto pida.",
    img: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?auto=format&fit=crop&w=1600&q=80",
    alt: "Mueble custom de autor en madera",
    aspect: "aspect-[4/5]",
  },
];

export function Work() {
  return (
    <section
      id="trabajo"
      className="relative py-24 md:py-32 border-t border-[var(--rule)] bg-[var(--bone)]"
    >
      <div className="container-edge">
        <div className="grid grid-cols-12 mb-16 md:mb-24">
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
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={(i % 3) * 0.08}>
              <article className="group">
                <figure className={`img-zoom ${it.aspect} relative w-full`}>
                  <Image
                    src={it.img}
                    alt={it.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </figure>
                <div className="mt-5 flex items-baseline justify-between gap-3 border-t border-[var(--rule-strong)] pt-3">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--umber)]">
                      {it.n}
                    </span>
                    <h3 className="font-display text-2xl mt-1 text-[var(--ink)]">{it.title}</h3>
                  </div>
                </div>
                <p className="text-[var(--oak)] text-[15px] leading-[1.55] mt-3 max-w-sm">
                  {it.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
