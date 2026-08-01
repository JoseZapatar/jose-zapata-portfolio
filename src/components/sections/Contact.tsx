import { ArrowDown, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/ui/Reveal";

const links = [
  { label: "Email", href: `mailto:${siteConfig.email}`, external: true },
  { label: "GitHub", href: siteConfig.github, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/", external: true },
  { label: "Résumé", href: "/cv.pdf", download: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 md:min-h-[96svh]">
      <div className="editorial-container flex min-h-[72svh] flex-col justify-between">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-3"><p className="editorial-label">Contact / 04</p></Reveal>
          <div className="lg:col-span-9">
            <Reveal delay={0.05}>
              <h2 className="max-w-[980px] text-balance text-[clamp(3.05rem,6.2vw,6.65rem)] font-medium leading-[0.94] tracking-[-0.06em]">
                Si mi forma de trabajar conecta con la manera
                en la que construyen software, me encantará
                conversar.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-9 max-w-2xl text-[clamp(1.02rem,1.3vw,1.16rem)] leading-8 text-[#A6AAA1]">Estoy abierto a oportunidades remotas como desarrollador backend o full stack.</p>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-[clamp(7rem,11vw,11rem)] border-t border-white/10" y={14}>
          {links.map((link) => (
            <a key={link.label} href={link.href} target={link.external && !link.href.startsWith("mailto") ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} download={link.download} className="group flex items-center justify-between border-b border-white/10 py-5 text-2xl tracking-[-0.03em] transition-[color,padding] duration-300 hover:pl-2 hover:text-[#D7FF43] sm:text-3xl">
              {link.label}
              {link.download ? <ArrowDown className="transition-transform duration-300 group-hover:translate-y-1" /> : <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />}
            </a>
          ))}
        </Reveal>

        <div className="mt-[clamp(7rem,11vw,10rem)] flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-[#747870] sm:flex-row sm:justify-between">
          <span>José Zapata · Software Engineer</span>
          <span>Nicaragua · {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}
