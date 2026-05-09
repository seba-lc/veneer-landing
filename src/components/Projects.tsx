import Image from "next/image";
import { Reveal } from "./Reveal";

const projects = [
  {
    n: "P / 01",
    client: "Bonafide",
    type: "Retail · Equipamiento de cadena",
    location: "Tucumán — múltiples sucursales",
    year: "2022 — vigente",
    img: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=2000&q=85",
    alt: "Mostrador de café con frentes de madera y mostrador a medida",
    span: "lg:col-span-7 aspect-[16/10]",
  },
  {
    n: "P / 02",
    client: "Hospital Padilla",
    type: "Mobiliario sanitario",
    location: "San Miguel de Tucumán",
    year: "Proyecto institucional",
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1600&q=85",
    alt: "Mobiliario institucional con frentes blancos en melamina",
    span: "lg:col-span-5 aspect-[4/5]",
  },
  {
    n: "P / 03",
    client: "Casa particular",
    type: "Equipamiento integral residencial",
    location: "Yerba Buena",
    year: "2024",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
    alt: "Living de casa residencial con biblioteca y mueble bajo a medida",
    span: "lg:col-span-5 aspect-[4/5]",
  },
  {
    n: "P / 04",
    client: "Estudio de arquitectura",
    type: "Co-creación oficina ejecutiva",
    location: "Tucumán",
    year: "2024",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85",
    alt: "Oficina ejecutiva con paneles de madera y mobiliario a medida",
    span: "lg:col-span-7 aspect-[16/10]",
  },
];

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
              <span className="section-num">04 / Proyectos</span>
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
                institucional. La carpeta completa se entrega bajo brief.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-12">
          {projects.map((p, i) => (
            <Reveal
              key={p.n}
              delay={(i % 2) * 0.1}
              className={`col-span-1 ${p.span}`.replace(/aspect-\[[^\]]+\]/, "")}
            >
              <article className="group h-full">
                <figure className={`img-zoom relative w-full ${p.span.split(" ").find((s) => s.startsWith("aspect-"))}`}>
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </figure>
                <div className="mt-5 grid grid-cols-2 gap-4 border-t border-[var(--rule-strong)] pt-4">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--umber)]">
                      {p.n}
                    </span>
                    <h3 className="font-display text-2xl mt-1 text-[var(--ink)]">{p.client}</h3>
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
