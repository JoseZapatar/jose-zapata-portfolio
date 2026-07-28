import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock3,
  Mail,
  MapPin,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const contactInfo = [
  {
    icon: BriefcaseBusiness,
    label: "Disponibilidad",
    value: "Backend y Full Stack",
  },
  {
    icon: MapPin,
    label: "Modalidad",
    value: "Remoto o híbrido",
  },
  {
    icon: Clock3,
    label: "Respuesta",
    value: "Generalmente en 24 horas",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-6 py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 sm:p-12 lg:p-14">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Contacto
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                ¿Tienes una oportunidad o proyecto en el que podamos colaborar?
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
                Estoy abierto a oportunidades como desarrollador backend o full
                stack, prácticas profesionales y proyectos donde pueda aportar
                en arquitectura, APIs REST, bases de datos e interfaces web.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:joseangelzapatarosales@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-400"
                >
                  <Mail size={17} />
                  Enviar correo
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="https://github.com/JoseZapatar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                >
                  <FaGithub size={17} />
                  Ver GitHub
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <a
                href="mailto:joseangelzapatarosales@gmail.com"
                className="mt-6 inline-block text-sm text-slate-500 transition hover:text-blue-300"
              >
                joseangelzapatarosales@gmail.com
              </a>
            </div>

            <aside className="border-t border-white/10 bg-black/20 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Información
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Disponible para nuevas oportunidades
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Busco participar en equipos donde pueda seguir fortaleciendo mis
                habilidades y contribuir en el desarrollo completo de productos
                web.
              </p>

              <div className="mt-8 space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                        <Icon size={18} />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-slate-600">
                          {item.label}
                        </p>

                        <p className="mt-1 text-sm font-medium text-slate-200">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-400/15 bg-emerald-500/[0.06] p-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <p className="text-sm text-emerald-200">
                    Actualmente disponible para oportunidades.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}