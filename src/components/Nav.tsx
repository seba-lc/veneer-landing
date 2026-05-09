"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";

const links = [
  { href: "#manifiesto", label: "Manifiesto" },
  { href: "#trabajo", label: "Trabajo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#clientes", label: "Clientes" },
  { href: "#estudios", label: "Estudios" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[color:color-mix(in_srgb,var(--paper)_82%,transparent)] border-b border-[var(--rule)]"
          : ""
      }`}
    >
      <div className="container-edge flex items-center justify-between h-[72px]">
        <a href="#top" className="block" aria-label="Veneer — inicio">
          <Wordmark height={22} />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--oak)] hover:text-[var(--rust)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex font-mono text-[11px] tracking-[0.18em] uppercase border border-[var(--ink)] px-4 py-2 hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
        >
          Iniciar proyecto
        </a>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className={`block w-6 h-px bg-[var(--ink)] transition-transform ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span className={`block w-6 h-px bg-[var(--ink)] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block w-6 h-px bg-[var(--ink)] transition-transform ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 bg-[var(--paper)] border-b border-[var(--rule)] ${
          open ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        <nav className="container-edge py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl text-[var(--ink)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="btn-rust mt-2 self-start"
          >
            Iniciar proyecto
          </a>
        </nav>
      </div>
    </header>
  );
}
