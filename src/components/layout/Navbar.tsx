"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const navigation = [
  { name: "Sobre mí", href: "/#about", sectionId: "about" },
  { name: "Tecnologías", href: "/#skills", sectionId: "skills" },
  { name: "Proyectos", href: "/#projects", sectionId: "projects" },
  { name: "Contacto", href: "/#contact", sectionId: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio - firstEntry.intersectionRatio,
          );

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={false}
      animate={{
        paddingTop: isScrolled ? 10 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6"
    >
      <motion.nav
        initial={false}
        animate={{
          height: isScrolled ? 56 : 64,
          maxWidth: isScrolled ? 1180 : 1280,
          borderRadius: isScrolled ? 18 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`mx-auto flex items-center justify-between px-4 transition-[background-color,border-color,box-shadow] duration-300 sm:px-6 ${
          isScrolled
            ? "border border-white/10 bg-[#07090d]/75 shadow-[0_16px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-b border-white/10 bg-[#07090d]/80 backdrop-blur-xl"
        }`}
      >
        <a
          href="/"
          aria-label="Ir al inicio"
          className="relative z-10 text-lg font-semibold tracking-tight text-white"
          onClick={closeMobileMenu}
        >
          José<span className="text-blue-500">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const isActive = activeSection === item.sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-navigation"
                    className="absolute inset-0 rounded-lg border border-white/10 bg-white/[0.06]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/JoseZapatar"
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de GitHub de José Zapata"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <FaGithub size={18} />
          </a>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white md:hidden"
          >
            {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Cerrar menú"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 -z-10 bg-black/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#090c12]/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.sectionId;

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={closeMobileMenu}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.25,
                      }}
                      className={`rounded-xl px-4 py-3 text-sm transition ${
                        isActive
                          ? "border border-blue-400/15 bg-blue-500/10 text-blue-200"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-3 border-t border-white/10 pt-3">
                <a
                  href="https://github.com/JoseZapatar"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <FaGithub size={17} />
                  Visitar GitHub
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}