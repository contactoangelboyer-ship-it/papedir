import React, { useRef, useState } from "react";
  import { motion, useInView } from "framer-motion";
  import { MapPin, Clock, CheckCircle2, ArrowRight, Send } from "lucide-react";
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";

  const E = [0.22, 1, 0.36, 1] as const;
  const BLUE = "#1A6EFF";
  const NAVY = "#0D1E3F";
  const up = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } } };
  const stag = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
  function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef(null);
    const vis = useInView(ref, { once: true, margin: "-60px" });
    return <motion.div ref={ref} initial="hidden" animate={vis ? "visible" : "hidden"} variants={stag} className={className}>{children}</motion.div>;
  }

  const ACTIVE_CITIES = [
    { name: "Guanare",   status: "active",  emoji: "🏙️", pop: "~280k hab.", desc: "Capital de Portuguesa. Nuestra ciudad base con cobertura total." },
    { name: "Acarigua",  status: "active",  emoji: "🏘️", pop: "~200k hab.", desc: "Segunda ciudad más grande. Servicio completo disponible." },
    { name: "Araure",    status: "active",  emoji: "🏘️", pop: "~180k hab.", desc: "Municipio Páez. Integrado junto a Acarigua." },
    { name: "Biscucuy",  status: "coming",  emoji: "📍", pop: "~45k hab.",  desc: "En expansión. Próximamente disponible." },
    { name: "Ospino",    status: "coming",  emoji: "📍", pop: "~40k hab.",  desc: "En expansión. Inscríbete para ser el primero." },
    { name: "Guanarito", status: "coming",  emoji: "📍", pop: "~38k hab.",  desc: "En lista de espera de expansión." },
    { name: "Papelón",   status: "soon",    emoji: "📍", pop: "~22k hab.",  desc: "Planeado para el próximo trimestre." },
    { name: "Turén",     status: "soon",    emoji: "📍", pop: "~55k hab.",  desc: "Municipio Santa Rosalía. En evaluación." },
  ];

  const STATUS_LABELS = {
    active: { label: "Activo",       color: "#10B981", bg: "#ECFDF5" },
    coming: { label: "En expansión", color: "#F97316", bg: "#FFF7ED" },
    soon:   { label: "Próximamente", color: "#8B5CF6", bg: "#F5F3FF" },
  };

  
  function CityRequestForm() {
    const [city, setCity] = useState("");
    const [name, setName] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!city.trim()) return;
      const msg = encodeURIComponent(`¡Hola! Quiero Pappedir en ${city.trim()}${name ? ` — Mi nombre es ${name.trim()}` : ""}. 🙌`);
      window.open(`https://wa.me/584120000000?text=${msg}`, "_blank");
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    };

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm mx-auto">
        <input
          type="text" placeholder="¿En qué ciudad quieres Pappedir? *" value={city}
          onChange={e => setCity(e.target.value)} required
          className="px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 text-sm font-medium focus:outline-none focus:border-white/50 transition-all"
        />
        <input
          type="text" placeholder="Tu nombre (opcional)" value={name}
          onChange={e => setName(e.target.value)}
          className="px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 text-sm font-medium focus:outline-none focus:border-white/50 transition-all"
        />
        <button type="submit"
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-extrabold text-[14px] transition-all hover:opacity-90 active:scale-95"
          style={{ background: sent ? "#10B981" : "#1A6EFF" }}>
          {sent ? "✅ ¡Mensaje enviado por WhatsApp!" : <><Send size={15} /> Solicitar Pappedir en mi ciudad</>}
        </button>
      </form>
    );
  }

  export default function Ciudades() {
    return (
      <div className="min-h-screen bg-white text-[#0D1E3F]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Navbar />

        {/* Hero */}
        <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1E3F 0%, #0D2B6B 100%)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-[#1A6EFF]/15 blur-[120px]" />
          </div>
          <div className="relative max-w-5xl mx-auto px-5 text-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-[13px] font-bold text-white/80 mb-6">
                <MapPin size={13} /> Cobertura actual
              </span>
              <h1 className="text-[clamp(36px,5.5vw,68px)] font-extrabold text-white leading-[1.06] tracking-tight mb-5">
                Portuguesa entera,<br /><span style={{ color: "#60A5FA" }}>ciudad por ciudad</span>
              </h1>
              <p className="text-white/60 text-[17px] leading-relaxed mb-8 max-w-xl mx-auto">
                Empezamos en Guanare y Acarigua-Araure. Y no paramos hasta llegar a cada rincón del estado.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {[["3","Ciudades activas"],["5+","Más en expansión"],["700k+","Personas con acceso"]].map(([v,l]) => (
                  <div key={l} className="text-center px-6 py-4 rounded-2xl border border-white/15 bg-white/5">
                    <p className="text-white font-extrabold text-2xl">{v}</p>
                    <p className="text-white/50 text-[12px] font-semibold mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cities grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <Reveal className="text-center mb-12">
              <motion.p variants={up} className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Cobertura</motion.p>
              <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold" style={{ color: NAVY }}>¿Cubrimos tu ciudad?</motion.h2>
            </Reveal>
            <Reveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {ACTIVE_CITIES.map((c, i) => {
                  const s = STATUS_LABELS[c.status as keyof typeof STATUS_LABELS];
                  return (
                    <motion.div key={i} variants={up}
                      className="bg-white rounded-3xl p-6 border border-slate-100 hover:-translate-y-1 transition-all duration-200"
                      style={{ boxShadow: "0 2px 8px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.05)" }}>
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-3xl">{c.emoji}</span>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold" style={{ background: s.bg, color: s.color }}>{s.label}</span>
                      </div>
                      <h3 className="font-extrabold text-lg mb-0.5" style={{ color: NAVY }}>{c.name}</h3>
                      <p className="text-slate-400 text-[11px] font-semibold mb-2">{c.pop}</p>
                      <p className="text-slate-500 text-[12px] leading-relaxed">{c.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Legend */}
        <section className="py-12" style={{ background: "#F5F8FF" }}>
          <div className="max-w-3xl mx-auto px-5">
            <Reveal>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(STATUS_LABELS).map(([key, s]) => (
                  <motion.div key={key} variants={up} className="text-center p-5 rounded-2xl bg-white border border-slate-100">
                    <div className="w-3 h-3 rounded-full mx-auto mb-2" style={{ background: s.color }} />
                    <p className="font-extrabold text-[13px]" style={{ color: NAVY }}>{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Expansion CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <Reveal>
              <motion.div variants={up} className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0D2B6B 100%)` }}>
                <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-[#1A6EFF]/20 blur-[80px]" />
                <div className="relative z-10">
                  <h2 className="text-[clamp(24px,4vw,42px)] font-extrabold text-white mb-4">
                    ¿Tu ciudad aún no está?
                  </h2>
                  <p className="text-white/60 text-[15px] mb-8 max-w-lg mx-auto">
                    Escríbenos y súmate a la lista de espera. Tu voz cuenta — las ciudades con más solicitudes son las primeras en expandirse.
                  </p>
                  <a href="https://wa.me/584120000000?text=Quiero%20Pappedir%20en%20mi%20ciudad" target="_blank" rel="noopener noreferrer"
                    style={{ background: BLUE }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-extrabold text-[15px] shadow-[0_8px_32px_rgba(26,110,255,0.5)] hover:opacity-90 transition-all">
                    <Send size={16} /> Escribir por WhatsApp
                  </a>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
  