"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Sobre mí", href: "/#about" },
  { name: "Proyectos", href: "/#projects" },
  { name: "Contacto", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-[#0A0B09] transition-[border-color] duration-500 ${scrolled ? "border-b border-white/[0.10]" : "border-b border-transparent"}`}>
      <nav className="editorial-container flex h-[76px] items-center justify-between">
        <a href="/#home" aria-label="Ir al inicio" className="font-mono text-sm font-semibold tracking-[0.16em]">
          JZ<span className="text-[#D7FF43]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="link-underline text-sm text-[#8D918B] transition-colors duration-300 hover:text-[#ECE9DF]">
              {item.name}
            </a>
          ))}
        </div>

        <button type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen((v) => !v)} className="md:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 top-[76px] bg-[#0A0B09] md:hidden">
            <div className="editorial-container flex h-full flex-col justify-center gap-8 pb-24">
              {navigation.map((item, index) => (
                <motion.a key={item.name} href={item.href} onClick={() => setOpen(false)} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className="border-b border-white/10 pb-5 text-5xl font-medium tracking-[-0.05em]">
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
