import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import JsonLd from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main id="main-content">
        <Hero />
        <div className="border-t border-white/10"><About /></div>
        <div className="border-t border-white/10"><Projects /></div>
        <div className="border-t border-white/10"><Skills /></div>
        <div className="border-t border-white/10"><Contact /></div>
      </main>
    </>
  );
}
