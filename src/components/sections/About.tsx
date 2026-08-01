import Reveal from "@/components/ui/Reveal";

const notes = [
  { label: "Currently", value: "Ingeniería en Sistemas" },
  { label: "Focus", value: "Backend · REST APIs · Full Stack" },
  { label: "Learning", value: "Flutter · Laravel" },
];

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-24">
      <div className="editorial-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <p className="editorial-label">About / 01</p>
          </Reveal>

          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="section-heading max-w-[940px] text-balance">
                Disfruto entender sistemas, encontrar por qué fallan y construir soluciones que sigan siendo fáciles de mantener cuando el proyecto crece.
              </h2>
            </Reveal>

            <div className="mt-[clamp(5rem,9vw,9rem)] grid gap-14 border-t border-white/10 pt-9 md:grid-cols-[1.12fr_.88fr] md:gap-20">
              <Reveal delay={0.06}>
                <p className="max-w-[36rem] text-[clamp(1rem,1.25vw,1.14rem)] leading-[1.82] text-[#AEB2A8]">
                  Soy estudiante de Ingeniería en Sistemas. Me siento especialmente cómodo trabajando en la estructura de una aplicación: sus datos, reglas de negocio y API. También disfruto construir el frontend cuando la experiencia necesita una lógica clara y un estado bien organizado.
                </p>
              </Reveal>

              <div className="divide-y divide-white/10 border-y border-white/10 md:translate-y-10 md:border-t-0">
                {notes.map((note, index) => (
                  <Reveal key={note.label} delay={0.08 + index * 0.06}>
                    <div className="grid gap-3 py-7 sm:grid-cols-[8rem_1fr] md:grid-cols-1 lg:grid-cols-[8rem_1fr]">
                      <p className="editorial-label">{note.label}</p>
                      <p className="text-base leading-6 text-[#ECE9DF]">{note.value}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
