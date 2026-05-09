"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

// useSyncExternalStore que devuelve true post-hydration, false en SSR.
// Patrón "use-is-hydrated" — no triggera cascading renders.
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * Reveal usa framer-motion whileInView, pero garantiza que el contenido sea
 * visible antes de hidratar (server-render = opacidad 1) para evitar pantallas
 * "vacías" si JS tarda o falla. El fade-in solo aplica post-hydration.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: Props) {
  const reduce = useReducedMotion();
  const hydrated = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!hydrated || reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.05, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
