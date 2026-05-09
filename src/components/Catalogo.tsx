import Image from "next/image";
import { Reveal } from "./Reveal";

type Coleccion = {
  n: string;
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  hero: string;
  alt: string;
  finishes?: string[];
  // Tailwind layout classes for editorial asymmetric grid
  span: string;
  aspect: string;
};

const colecciones: Coleccion[] = [
  {
    n: "01",
    slug: "coleccion-bar",
    title: "Colección Bar",
    subtitle: "Mueble bar + barra",
    desc: "Mueble bar con cava integrada y barra alta a juego. Disponible en madera oscura y clarito.",
    hero: "/catalogo/coleccion-bar/montaje.webp",
    alt: "Montaje editorial de la colección Bar de Veneer: barra alta y mueble bar con cava en ambiente residencial",
    finishes: ["Oscuro", "Claro"],
    span: "lg:col-span-7",
    aspect: "aspect-[4/5] lg:aspect-[5/6]",
  },
  {
    n: "02",
    slug: "coleccion-living-tv",
    title: "Living TV",
    subtitle: "Rack + cómoda + mesa baja + mesita",
    desc: "Cuatro piezas que dialogan en un mismo lenguaje. Para living completo o pieza por pieza.",
    hero: "/catalogo/coleccion-living-tv/montaje.webp",
    alt: "Montaje editorial del living TV de Veneer en negro mate: rack, cómoda y mesa baja en ambiente con sofá y planta",
    finishes: ["Negro", "Madera clara"],
    span: "lg:col-span-5",
    aspect: "aspect-[4/5] lg:aspect-[5/6]",
  },
  {
    n: "03",
    slug: "coleccion-living-rack",
    title: "Living Rack",
    subtitle: "Rack + cómoda + mesita",
    desc: "Variante living con frentes en bicolor: cuerpo madera + cajones blancos.",
    hero: "/catalogo/coleccion-living-rack/montaje.webp",
    alt: "Montaje del living rack Veneer en bicolor madera y blanco con TV y mesa baja",
    finishes: ["Bicolor"],
    span: "lg:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    n: "04",
    slug: "coleccion-dormitorio",
    title: "Dormitorio",
    subtitle: "Placard + cómoda + mesa de luz",
    desc: "Conjunto de dormitorio con frentes grafito y estructura madera. Modular y de tres cuerpos.",
    hero: "/catalogo/coleccion-dormitorio/montaje.webp",
    alt: "Dormitorio Veneer con placard de tres puertas, cómoda y mesa de luz en grafito y madera",
    finishes: ["Grafito + madera"],
    span: "lg:col-span-7",
    aspect: "aspect-[4/5] lg:aspect-[16/11]",
  },
  {
    n: "05",
    slug: "cama-box",
    title: "Cama Box",
    subtitle: "Con cajones bajos integrados",
    desc: "Plataforma maciza con almacenamiento bajo. Acabado roble claro.",
    hero: "/catalogo/cama-box/montaje.webp",
    alt: "Cama box Veneer en roble claro con cajones bajos integrados, dormitorio editorial",
    finishes: ["Roble claro"],
    span: "lg:col-span-6",
    aspect: "aspect-[4/5]",
  },
  {
    n: "06",
    slug: "comoda-veneer",
    title: "Cómoda Veneer",
    subtitle: "Mesa de luz / cómoda",
    desc: "Pieza compacta con cajón superior y nicho inferior. Para dormitorio o entrada.",
    hero: "/catalogo/comoda-veneer/montaje.webp",
    alt: "Cómoda Veneer en madera natural junto a cama con ropa de cama gris, lámpara de escritorio",
    finishes: ["Roble claro"],
    span: "lg:col-span-6",
    aspect: "aspect-[4/5]",
  },
  {
    n: "07",
    slug: "mesa-quincho",
    title: "Mesa de quincho",
    subtitle: "Tapa maciza + estructura metálica",
    desc: "Mesa de exterior cubierto. Tapa de listones macizos en pata negra.",
    hero: "/catalogo/mesa-quincho/montaje.webp",
    alt: "Mesa de quincho Veneer con tapa de madera maciza listoneada y patas metálicas negras, en patio cubierto",
    finishes: ["Madera + hierro"],
    span: "lg:col-span-7",
    aspect: "aspect-[4/3] lg:aspect-[16/10]",
  },
  {
    n: "08",
    slug: "mesa-trabajo",
    title: "Mesa de trabajo",
    subtitle: "Sala de reuniones / comedor extendido",
    desc: "Tapa con pasacables central. Hasta 8 plazas. Pata maciza tubular.",
    hero: "/catalogo/mesa-trabajo/montaje.webp",
    alt: "Mesa de trabajo Veneer en sala de reuniones con sillas tapizadas grises y panelado de madera",
    finishes: ["Roble claro"],
    span: "lg:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    n: "09",
    slug: "flotante",
    title: "Mueble flotante",
    subtitle: "Mesa de luz / entrada",
    desc: "Pieza flotante con cajón superior y nicho abierto. Anclaje a pared.",
    hero: "/catalogo/flotante/principal.webp",
    alt: "Mueble flotante Veneer de pared con cajón y nicho abierto, decorado con jarrón y libros",
    finishes: ["Roble claro"],
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    n: "10",
    slug: "mesa-arrime-tipo-c",
    title: "Mesa arrime tipo C",
    subtitle: "Auxiliar para sillón",
    desc: "Forma en C para deslizar bajo el sillón. Estructura de melamina veta clara.",
    hero: "/catalogo/mesa-arrime-tipo-c/principal.webp",
    alt: "Mesa de arrime tipo C de Veneer con lámpara de bronce y libros, fondo gris editorial",
    finishes: ["Veta clara"],
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    n: "11",
    slug: "mesa-arrime-veneer",
    title: "Mesa arrime",
    subtitle: "Estructura metálica + tapa",
    desc: "Auxiliar liviana con estructura tubular en bronce y tapa lacada.",
    hero: "/catalogo/mesa-arrime-veneer/principal.webp",
    alt: "Mesa de arrime Veneer junto a sillón gris con estructura metálica clara y tapa lacada",
    finishes: ["Topo + bronce"],
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    n: "12",
    slug: "mesa-auxiliar-tijera",
    title: "Mesa auxiliar tijera",
    subtitle: "Bandeja plegable",
    desc: "Bandeja desmontable sobre patas plegables. Acabado verde oliva.",
    hero: "/catalogo/mesa-auxiliar-tijera/principal.webp",
    alt: "Mesa auxiliar tijera Veneer en verde oliva con vaso y plato sobre alfombra de yute, junto a sofá blanco",
    finishes: ["Verde oliva"],
    span: "lg:col-span-6",
    aspect: "aspect-[4/5]",
  },
  {
    n: "13",
    slug: "mesa-auxiliar",
    title: "Mesa auxiliar",
    subtitle: "Bandeja con asas",
    desc: "Mesa auxiliar con tapa-bandeja desmontable y estructura tubular tonal.",
    hero: "/catalogo/mesa-auxiliar/principal.webp",
    alt: "Mesa auxiliar Veneer con bandeja superior desmontable verde oliva sobre fondo neutro",
    finishes: ["Verde oliva"],
    span: "lg:col-span-6",
    aspect: "aspect-[4/5]",
  },
  {
    n: "14",
    slug: "consola-veneer",
    title: "Consola",
    subtitle: "Mueble de entrada",
    desc: "Consola alta con dos cajones y estante inferior. Estructura metálica + lacado topo.",
    hero: "/catalogo/consola-veneer/principal.webp",
    alt: "Consola Veneer color topo con jarrón y cuadro abstracto detrás, ambiente de entrada",
    finishes: ["Topo"],
    span: "lg:col-span-7",
    aspect: "aspect-[4/5] lg:aspect-[5/4]",
  },
  {
    n: "15",
    slug: "escritorio",
    title: "Escritorio",
    subtitle: "Pieza de habitación / oficina home",
    desc: "Escritorio con cajón lateral y estante. Acabado roble claro. Foto de proyecto entregado.",
    hero: "/catalogo/escritorio/principal.webp",
    alt: "Escritorio Veneer entregado en habitación, en roble claro con silla blanca y notebook",
    finishes: ["Roble claro"],
    span: "lg:col-span-5",
    aspect: "aspect-[4/5]",
  },
];

export function Catalogo() {
  return (
    <section
      id="colecciones"
      className="relative py-24 md:py-32 border-t border-[var(--rule)] bg-[var(--paper)]"
    >
      <div className="container-edge">
        <div className="grid grid-cols-12 mb-14 md:mb-20 items-end">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <span className="section-num">03 / Catálogo</span>
              <h2 className="font-display-tight text-[7.5vw] md:text-[5.4vw] leading-[0.95] mt-4 text-[var(--ink)]">
                Colecciones
                <br />
                <span className="font-display-italic text-[var(--rust)]">propias</span>.
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-5 md:pl-8 mt-6 md:mt-0">
            <Reveal delay={0.08}>
              <p className="text-[var(--oak)] text-[16px] leading-[1.65] max-w-md">
                Quince piezas standalone listas para especificar.
                Acabados estándar en madera clara, oscura y grafito —y variantes
                bajo pedido para arquitectos. Cada pieza pensada para producirse
                en serie o adaptarse a un proyecto integral.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-14 md:gap-y-20">
          {colecciones.map((c, i) => (
            <Reveal
              key={c.slug}
              delay={(i % 3) * 0.06}
              className={`col-span-2 ${c.span}`}
            >
              <article className="group">
                <figure className={`img-zoom relative w-full ${c.aspect}`}>
                  <Image
                    src={c.hero}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </figure>
                <div className="mt-5 grid grid-cols-12 gap-4 border-t border-[var(--rule-strong)] pt-4">
                  <div className="col-span-12 md:col-span-7">
                    <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--umber)]">
                      C / {c.n}
                    </span>
                    <h3 className="font-display text-[26px] md:text-[28px] mt-1 leading-[1.1] text-[var(--ink)]">
                      {c.title}
                    </h3>
                    <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--rust)] mt-1">
                      {c.subtitle}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-5 md:text-right">
                    {c.finishes && (
                      <ul className="space-y-1">
                        {c.finishes.map((f) => (
                          <li
                            key={f}
                            className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--oak)]"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <p className="text-[var(--oak)] text-[15px] leading-[1.55] mt-3 max-w-md">
                  {c.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <div className="mt-16 md:mt-20 flex flex-wrap items-center gap-4 border-t border-[var(--rule)] pt-8">
            <a href="#contacto" className="btn-rust">
              Pedir ficha técnica
              <span aria-hidden>→</span>
            </a>
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--umber)]">
              Producción Yerba Buena · Envío NOA
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
