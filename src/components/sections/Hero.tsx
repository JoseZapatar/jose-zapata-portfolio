"use client";

import { motion } from "motion/react";

const transition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

export default function Hero() {
  return (
    <section id="home" className="min-h-[100svh] pt-[76px]">
      <div className="editorial-container flex min-h-[calc(100svh-76px)] flex-col justify-between py-8 md:py-11 lg:py-12">
        <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-5">
          <p className="text-sm font-medium tracking-[-0.01em]">José Zapata</p>
          <p className="text-right text-sm leading-5 text-[#92968D]">Desarrollador backend<br />Nicaragua</p>
        </div>

        <div className="my-[clamp(2.5rem,7vh,6rem)] max-w-[1160px]">
          <p className="editorial-label mb-7 md:mb-9">Una forma de pensar / 2026</p>
          <h1 className="max-w-[1120px] text-[clamp(2.6rem,7.1vw,7.35rem)] font-medium leading-[0.93] tracking-[-0.064em]">
            Las mejores soluciones no empiezan escribiendo código.
          </h1>
          <h2 className="mt-6 max-w-[960px] text-[clamp(2.25rem,6.15vw,6.25rem)] font-medium leading-[0.96] tracking-[-0.058em] text-[#B0B4AB] md:mt-8">
            Empiezan entendiendo el problema.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
            <a href="#projects" className="button-primary">Ver proyectos</a>
            <a href="#contact" className="button-secondary">Contactarme</a>
          </div>
        </div>

        <motion.div
          initial={false}
          whileHover={{ y: -2 }}
          transition={transition}
          className="flex flex-col gap-4 border-t border-white/10 pt-5 text-sm sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md leading-6 text-[#92968D]">Backend · APIs REST · Desarrollo full stack</p>
          <div className="flex items-center gap-3 text-[#C9CDC3]">
            <span className="h-2 w-2 rounded-full bg-[#D7FF43] shadow-[0_0_0_4px_rgba(215,255,67,0.06)]" />
            Disponible para oportunidades remotas
          </div>
        </motion.div>
      </div>
    </section>
  );
}
