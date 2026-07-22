import React, { useRef } from "react";
  import { motion, useInView } from "framer-motion";
  import { Target, Heart, Shield, Zap, Users, ArrowRight, Star } from "lucide-react";
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";
  import driverOpeningDoorImg from "@/assets/images/driver-opening-door.png";
  import repartidoraMotoImg from "@/assets/images/repartidora-moto.png";
  import repartidorMotoImg from "@/assets/images/repartidor-moto.png";

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

  const VALUES = [
    { icon: Shield, title: "Seguridad primero",  color: "#1A6EFF", bg: "#EEF4FF", desc: "Verificación manual de cada aliado, cero atajos. La seguridad de quien usa Pappedir no está sujeta a debate — es innegociable." },
    { icon: Heart,  title: "Hecho en Venezuela", color: "#EF4444", bg: "#FEF2F2", desc: "No llegamos desde afuera a imponer soluciones. Vivimos aquí, entendemos la realidad y construimos pensando en ella. Eso hace la diferencia." },
    { icon: Zap,    title: "Velocidad real",      color: "#F97316", bg: "#FFF7ED", desc: "Prometemos rápido y entregamos rápido. El tiempo promedio de llegada es ≈4 minutos. No es marketing — son datos reales." },
    { icon: Users,  title: "Comunidad aliada",    color: "#10B981", bg: "#ECFDF5", desc: "Conductores, repartidores y negocios no son proveedores — son el corazón de Pappedir. Cuando ellos crecen, nosotros crecemos." },
    { icon: Target, title: "Hecho en Venezuela",  color: "#8B5CF6", bg: "#F5F3FF", desc: "No somos una app importada. Somos un equipo venezolano que entiende la realidad del país y construye soluciones para ella. Enfoque local, impacto nacional." },
  ];

  const MILESTONES = [
    { year: "2024", title: "Nace la idea",          desc: "Un equipo de venezolanos se frustró con la falta de opciones confiables de transporte y delivery. Decidieron construir la solución ellos mismos." },
    { year: "2025", title: "Primeros pasos", desc: "Arrancamos en el estado Portuguesa con los primeros 20 conductores y 5 negocios aliados. Pequeño en números, grande en propósito." },
    { year: "2025", title: "Expansión regional",   desc: "Expandimos a nuevas ciudades del interior del país. Crecemos semana a semana, ciudad por ciudad." },
    { year: "2026", title: "Expansión nacional",        desc: "Seis servicios disponibles, cientos de aliados activos en varios estados y una meta bien clara: llegar a cada rincón de Venezuela." },
  ];

  export default function Nosotros() {
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
                ❤️ Nuestra historia
              </span>
              <h1 className="text-[clamp(36px,5.5vw,68px)] font-extrabold text-white leading-[1.06] tracking-tight mb-5">
                Nació en Venezuela.<br /><span style={{ color: "#60A5FA" }}>Crece para Venezuela.</span>
              </h1>
              <p className="text-white/60 text-[17px] leading-relaxed max-w-xl mx-auto">
                Pappedir lo construimos acá, en Venezuela, entendiendo de primera mano lo que necesita nuestra gente.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <Reveal>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={up} className="rounded-3xl p-10 relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0D2B6B 100%)` }}>
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#1A6EFF]/20 blur-[60px]" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: "rgba(26,110,255,0.3)" }}>
                      <Target size={22} className="text-[#60A5FA]" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-white mb-4">Nuestra misión</h2>
                    <p className="text-white/65 leading-relaxed text-[15px]">
                      Conectar a los venezolanos con transporte, delivery y comercio local de forma rápida, segura y sin complicaciones. Queremos que la tecnología trabaje para todos — en cada ciudad del país.
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={up} className="rounded-3xl p-10" style={{ background: "#EEF4FF" }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: "#1A6EFF" }}>
                    <Star size={22} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-extrabold mb-4" style={{ color: NAVY }}>Nuestra visión</h2>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    Ser la plataforma de referencia para el transporte y la economía local en toda Venezuela — de Caracas a Mérida, de Maracaibo a Maturín. Queremos demostrar que la tecnología puede transformar cada ciudad del país.
                  </p>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="py-20" style={{ background: "#F5F8FF" }}>
          <div className="max-w-7xl mx-auto px-5">
            <Reveal className="text-center mb-12">
              <motion.p variants={up} className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Lo que nos mueve</motion.p>
              <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold" style={{ color: NAVY }}>Nuestros valores</motion.h2>
            </Reveal>
            <Reveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {VALUES.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <motion.div key={i} variants={up}
                      className="bg-white rounded-3xl p-7 border border-slate-100 hover:-translate-y-1 transition-all duration-200"
                      style={{ boxShadow: "0 2px 8px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.05)" }}>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: v.bg }}>
                        <Icon size={22} style={{ color: v.color }} />
                      </div>
                      <h3 className="font-extrabold text-[15px] mb-2" style={{ color: NAVY }}>{v.title}</h3>
                      <p className="text-slate-500 text-[13px] leading-relaxed">{v.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <Reveal className="text-center mb-12">
              <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold" style={{ color: NAVY }}>
                Nuestra <span style={{ color: BLUE }}>historia</span>
              </motion.h2>
            </Reveal>
            <Reveal>
              <div className="relative">
                <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-slate-100" />
                <div className="flex flex-col gap-8">
                  {MILESTONES.map((m, i) => (
                    <motion.div key={i} variants={up} className="flex gap-6 items-start">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-[11px] shrink-0 relative z-10"
                        style={{ background: `linear-gradient(135deg, ${BLUE}, #0B4FCC)` }}>
                        {m.year}
                      </div>
                      <div className="flex-1 pt-3">
                        <h3 className="font-extrabold text-[16px] mb-1" style={{ color: NAVY }}>{m.title}</h3>
                        <p className="text-slate-500 text-[13px] leading-relaxed">{m.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>


          {/* ━━━━ EQUIPO EN ACCIÓN ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-5">
              <Reveal className="text-center mb-12">
                <motion.p variants={up} className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>En las calles cada día</motion.p>
                <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold" style={{ color: NAVY }}>
                  Nuestro equipo <span style={{ color: BLUE }}>en acción</span>
                </motion.h2>
                <motion.p variants={up} className="text-slate-500 mt-3 max-w-md mx-auto">
                  Conductores y repartidores que hacen posible Pappedir cada día en toda Venezuela.
                </motion.p>
              </Reveal>
              <Reveal>
                <div className="grid md:grid-cols-3 gap-5">
                  <motion.div variants={up} className="group relative rounded-3xl overflow-hidden" style={{ aspectRatio: "3/4", boxShadow: "0 4px 20px rgba(0,0,0,.1)" }}>
                    <img src={driverOpeningDoorImg} alt="Pappe Driver" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3F]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold text-white mb-2" style={{ background: "#1A6EFF" }}>🚗 Pappe Driver</span>
                      <p className="text-white/80 text-xs">Tu viaje, nuestra prioridad</p>
                    </div>
                  </motion.div>
                  <motion.div variants={up} className="group relative rounded-3xl overflow-hidden md:mt-10" style={{ aspectRatio: "3/4", boxShadow: "0 4px 20px rgba(0,0,0,.1)" }}>
                    <img src={repartidoraMotoImg} alt="Pappe Runner" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3F]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold text-white mb-2" style={{ background: "#F97316" }}>📦 Pappe Runner</span>
                      <p className="text-white/80 text-xs">Entrega rápida, siempre</p>
                    </div>
                  </motion.div>
                  <motion.div variants={up} className="group relative rounded-3xl overflow-hidden" style={{ aspectRatio: "3/4", boxShadow: "0 4px 20px rgba(0,0,0,.1)" }}>
                    <img src={repartidorMotoImg} alt="Pappe Rider" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3F]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold text-white mb-2" style={{ background: "#8B5CF6" }}>🏍️ Pappe Rider</span>
                      <p className="text-white/80 text-xs">Sin trancas, sin rodeos</p>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            </div>
          </section>
  
        {/* CTA */}
        <section className="py-20" style={{ background: "#F5F8FF" }}>
          <div className="max-w-4xl mx-auto px-5 text-center">
            <Reveal>
              <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold mb-4" style={{ color: NAVY }}>
                Sé parte de la historia
              </motion.h2>
              <motion.p variants={up} className="text-slate-500 text-[16px] mb-8">
                Únete como usuario, conductor, repartidor o negocio aliado.
              </motion.p>
              <motion.div variants={up} className="flex flex-wrap gap-3 justify-center">
                <a href="/#registro" style={{ background: BLUE }}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-extrabold text-[14px] hover:opacity-90 transition-all">
                  Únete al equipo <ArrowRight size={16} />
                </a>
                <a href="/#registro" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-[14px] border-2 border-slate-200 hover:border-[#1A6EFF]/30 transition-all" style={{ color: NAVY }}>
                  Contáctanos
                </a>
              </motion.div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
  