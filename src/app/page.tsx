import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import WorkApproach from "@/components/sections/WorkApproach";
import Reveal from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />

      <main>
        <Hero />

        <div className="border-t border-white/10">
          <Reveal>
            <About />
          </Reveal>
        </div>

        <div className="border-t border-white/10">
            <Skills />
        </div>

        <div className="border-t border-white/10">
          <Reveal>
            <WorkApproach />
          </Reveal>
        </div>

        <div className="border-t border-white/10">
            <Projects />
        </div>

        <div className="border-t border-white/10">
          <Reveal>
            <Contact />
          </Reveal>
        </div>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium text-slate-300">
              José<span className="text-blue-400">.</span>
            </p>

            <p className="mt-1">
              © {new Date().getFullYear()} José Zapata. Todos los derechos reservados.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href="#about"
              className="transition hover:text-white"
            >
              Sobre mí
            </a>

            <a
              href="#skills"
              className="transition hover:text-white"
            >
              Tecnologías
            </a>

            <a
              href="#projects"
              className="transition hover:text-white"
            >
              Proyectos
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contacto
            </a>

            <a
              href="https://github.com/JoseZapatar"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
