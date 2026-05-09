import { Wordmark } from "./Wordmark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[var(--ink)] text-[var(--paper)]">
      <div className="container-edge py-16 md:py-24">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-8 items-start">
          <div className="col-span-12 md:col-span-5">
            <Wordmark variant="paper" height={28} />
            <p
              className="mt-6 max-w-sm text-[15px] leading-[1.6]"
              style={{ color: "color-mix(in srgb, var(--paper) 70%, transparent)" }}
            >
              Carpintería de melamina a medida. Yerba Buena, Tucumán. Co-creamos
              piezas con arquitectos, estudios y particulares.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <span
              className="font-mono text-[10px] tracking-[0.22em] uppercase"
              style={{ color: "color-mix(in srgb, var(--paper) 50%, transparent)" }}
            >
              Sitio
            </span>
            <ul className="mt-4 space-y-3 font-display text-lg">
              <li><a href="#manifiesto" className="underline-link">Manifiesto</a></li>
              <li><a href="#trabajo" className="underline-link">Trabajo</a></li>
              <li><a href="#proyectos" className="underline-link">Proyectos</a></li>
              <li><a href="#estudios" className="underline-link">Estudios</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <span
              className="font-mono text-[10px] tracking-[0.22em] uppercase"
              style={{ color: "color-mix(in srgb, var(--paper) 50%, transparent)" }}
            >
              Contacto
            </span>
            <ul className="mt-4 space-y-3 font-display text-lg">
              <li><a href="mailto:hola@veneer.com.ar" className="underline-link">hola@veneer.com.ar</a></li>
              <li><a href="https://wa.me/5493815550000" className="underline-link">WhatsApp</a></li>
              <li><a href="#contacto" className="underline-link">Iniciar proyecto</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <span
              className="font-mono text-[10px] tracking-[0.22em] uppercase"
              style={{ color: "color-mix(in srgb, var(--paper) 50%, transparent)" }}
            >
              Taller
            </span>
            <address
              className="not-italic mt-4 font-display text-lg leading-[1.5]"
              style={{ color: "color-mix(in srgb, var(--paper) 88%, transparent)" }}
            >
              Yerba Buena
              <br />
              Tucumán, Argentina
              <br />
              Lun — Vie · 9 a 18 hs
            </address>
          </div>
        </div>

        <div
          className="mt-16 pt-6 border-t flex flex-col md:flex-row gap-4 md:items-center md:justify-between"
          style={{ borderColor: "color-mix(in srgb, var(--paper) 18%, transparent)" }}
        >
          <span
            className="font-mono text-[11px] tracking-[0.18em] uppercase"
            style={{ color: "color-mix(in srgb, var(--paper) 50%, transparent)" }}
          >
            © {year} Veneer · Todos los derechos reservados
          </span>
          <span
            className="font-mono text-[11px] tracking-[0.18em] uppercase"
            style={{ color: "color-mix(in srgb, var(--paper) 50%, transparent)" }}
          >
            Sitio diseñado y construido en Tucumán
          </span>
        </div>
      </div>
    </footer>
  );
}
