"use client";

import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-24 md:py-40 border-t border-[var(--rule)]"
    >
      <div className="container-edge">
        <div className="grid grid-cols-12 gap-y-14 md:gap-x-8">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <span className="section-num">07 / Contacto</span>
              <h2 className="font-display-tight text-[10vw] md:text-[6vw] leading-[0.92] mt-4 text-[var(--ink)]">
                Contanos
                <br />
                tu <span className="font-display-italic text-[var(--rust)]">proyecto</span>.
              </h2>
              <p className="text-[var(--oak)] text-[17px] leading-[1.65] max-w-md mt-8">
                Mandanos un mensaje, hablamos por WhatsApp o pasamos por el
                taller. Atendemos a particulares con cita previa y a estudios
                con brief técnico.
              </p>

              <address className="not-italic mt-10 grid grid-cols-2 gap-y-6 border-t border-[var(--rule-strong)] pt-6 max-w-md">
                <div>
                  <dt className="tag-mono">Taller</dt>
                  <dd className="font-display text-xl mt-1 text-[var(--ink)]">
                    Yerba Buena
                    <br />
                    Tucumán, Argentina
                  </dd>
                </div>
                <div>
                  <dt className="tag-mono">Horario</dt>
                  <dd className="font-display text-xl mt-1 text-[var(--ink)]">
                    Lun — Vie
                    <br />
                    9 a 18 hs
                  </dd>
                </div>
                <div>
                  <dt className="tag-mono">WhatsApp</dt>
                  <dd className="mt-1">
                    <a
                      href="https://wa.me/5493815550000"
                      className="font-display text-xl text-[var(--ink)] underline-link"
                    >
                      Chat directo
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="tag-mono">Email</dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:hola@veneer.com.ar"
                      className="font-display text-xl text-[var(--ink)] underline-link"
                    >
                      hola@veneer.com.ar
                    </a>
                  </dd>
                </div>
              </address>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-7 md:pl-8 lg:pl-16">
            <Reveal delay={0.1}>
              <form
                className="grid grid-cols-2 gap-x-6 gap-y-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const params = new URLSearchParams();
                  data.forEach((v, k) => params.append(k, String(v)));
                  const subject = `Nuevo brief — ${data.get("nombre") ?? ""}`;
                  const body = [
                    `Nombre: ${data.get("nombre") ?? ""}`,
                    `Email: ${data.get("email") ?? ""}`,
                    `Tipo: ${data.get("tipo") ?? ""}`,
                    `Tipo de proyecto: ${data.get("proyecto") ?? ""}`,
                    `Cuéntanos: ${data.get("mensaje") ?? ""}`,
                  ].join("\n");
                  window.location.href = `mailto:hola@veneer.com.ar?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
              >
                <Field label="Nombre" name="nombre" required full />
                <Field label="Email" name="email" type="email" required />
                <SelectField
                  label="¿Cómo nos contactás?"
                  name="tipo"
                  options={["Particular", "Estudio de arquitectura", "Empresa / B2B", "Diseñador de interiores"]}
                />
                <SelectField
                  label="Tipo de proyecto"
                  name="proyecto"
                  options={["Cocina", "Placar", "Oficina", "Casa entera", "Local / Retail", "Custom / Otro"]}
                  full
                />
                <TextareaField
                  label="Contanos qué necesitás"
                  name="mensaje"
                  placeholder="Idea, plazos, ubicación, presupuesto aproximado…"
                  full
                />

                <div className="col-span-2 flex flex-wrap items-center gap-4 pt-2">
                  <button type="submit" className="btn-rust">
                    Enviar mensaje
                    <span aria-hidden>→</span>
                  </button>
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--umber)]">
                    Te respondemos en 24 hs hábiles
                  </span>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  full,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "col-span-2" : "col-span-2 md:col-span-1"}`}>
      <span className="tag-mono block mb-2">{label}{required && " *"}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-0 border-b border-[var(--rule-strong)] py-3 font-display text-xl text-[var(--ink)] focus:outline-none focus:border-[var(--rust)] transition-colors"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  full,
}: {
  label: string;
  name: string;
  options: string[];
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "col-span-2" : "col-span-2 md:col-span-1"}`}>
      <span className="tag-mono block mb-2">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="w-full bg-transparent border-0 border-b border-[var(--rule-strong)] py-3 font-display text-xl text-[var(--ink)] focus:outline-none focus:border-[var(--rust)] transition-colors appearance-none"
      >
        <option value="" disabled>Elegí una opción</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  placeholder,
  full,
}: {
  label: string;
  name: string;
  placeholder?: string;
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "col-span-2" : "col-span-1"}`}>
      <span className="tag-mono block mb-2">{label}</span>
      <textarea
        name={name}
        rows={5}
        placeholder={placeholder}
        className="w-full bg-transparent border border-[var(--rule-strong)] py-4 px-4 font-body text-[16px] text-[var(--ink)] focus:outline-none focus:border-[var(--rust)] transition-colors placeholder:text-[var(--umber)]"
      />
    </label>
  );
}
