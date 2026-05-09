"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function Hero() {
  const reduce = useReducedMotion();
  const hydrated = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  // Pre-hydration / reduce-motion: contenido visible sin animación.
  const animate = hydrated && !reduce;

  return (
    <section
      id="top"
      className="hero-bg grain relative min-h-[100svh] flex items-end pt-[72px] pb-12 md:pb-16 overflow-hidden"
    >
      {/* Blueprint diagonal subtle */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="var(--oak)" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="container-edge relative z-10 w-full">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8 items-end">
          {/* Left: tag + title */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={animate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-7 md:mb-10"
            >
              <span className="block w-10 h-px bg-[var(--oak)]" />
              <span className="tag-mono">Yerba Buena · Tucumán · Desde el oficio</span>
            </motion.div>

            <motion.h1
              initial={animate ? { opacity: 0, y: 28 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="font-display-tight text-[13vw] md:text-[10vw] lg:text-[8.4vw] leading-[0.9] text-[var(--ink)]"
            >
              Carpintería
              <br />
              <span className="font-display-italic text-[var(--rust)]">a medida</span>,
              <br />
              co-creada.
            </motion.h1>
          </div>

          {/* Right: lede + CTAs */}
          <div className="col-span-12 lg:col-span-5 lg:pl-8">
            <motion.div
              initial={animate ? { opacity: 0, y: 18 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-7 max-w-md"
            >
              <p className="text-[var(--oak)] text-[17px] leading-[1.6]">
                Hacemos cocinas, placares, oficinas y casas enteras de melamina
                de diseño. Trabajamos junto a arquitectos, estudios y dueños de
                proyecto: vos traés la idea, nosotros la materializamos con
                criterio de oficio.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="#contacto" className="btn-rust">
                  Iniciar un proyecto
                  <span aria-hidden>→</span>
                </a>
                <a href="#proyectos" className="btn-ghost">
                  Ver trabajos
                </a>
              </div>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-4 pt-6 border-t border-[var(--rule)]">
                <div>
                  <dt className="tag-mono">Modelo</dt>
                  <dd className="font-display text-[22px] mt-1">Co-creación</dd>
                </div>
                <div>
                  <dt className="tag-mono">Materialidad</dt>
                  <dd className="font-display text-[22px] mt-1">Melamina premium</dd>
                </div>
                <div>
                  <dt className="tag-mono">Cobertura</dt>
                  <dd className="font-display text-[22px] mt-1">Tucumán + NOA</dd>
                </div>
                <div>
                  <dt className="tag-mono">B2B + B2C</dt>
                  <dd className="font-display text-[22px] mt-1">Estudios y particulares</dd>
                </div>
              </dl>
            </motion.div>
          </div>

          {/* Full-width hero photo */}
          <div className="col-span-12 mt-12 md:mt-20">
            <motion.figure
              initial={animate ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="img-zoom relative aspect-[16/9] md:aspect-[21/9] w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85"
                alt="Cocina contemporánea con frentes de madera y melamina, isla central, terminaciones a medida"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-3 left-3 md:bottom-5 md:left-5 tag-mono bg-[var(--paper)]/90 px-3 py-1.5">
                Proyecto de referencia · Cocina integral
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden md:flex absolute bottom-8 right-8 z-10 items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--oak)]">
          Scroll
        </span>
        <span className="block w-12 h-px bg-[var(--oak)]" />
      </div>
    </section>
  );
}
