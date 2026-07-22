import React, { useRef, useEffect, useState } from "react";
  import { motion, useInView } from "framer-motion";
  import { Car, ShoppingBag, Package, Pill, Send, Bike, CheckCircle2, Clock, Shield, Star, ArrowRight, MapPin } from "lucide-react";
  import Navbar from "@/components/Navbar";
  import driverOpeningDoorImg from "@/assets/images/driver-opening-door.png";
  import repartidoraMotoImg from "@/assets/images/repartidora-moto.png";
  import repartidorMotoImg from "@/assets/images/repartidor-moto.png";
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

  const SERVICES = [
    {
      id: "transporte", icon: Car, emoji: "🚗", label: "Transporte",
      tagline: "Tu conductor llega en minutos, a precio cerrado",
      desc: "Pide tu viaje, confirma el precio antes de salir y un conductor verificado llega a tu puerta. Sin regateos, sin sorpresas.",
      steps: ["Abre la app y elige Transporte","Confirma tu destino y el precio","El conductor más cercano acepta","Sigue el viaje en tiempo real"],
      perks: ["Precio fijo confirmado antes","Conductor ID verificado","GPS activo en cada viaje","Disponible 24/7"],
      color: "#1A6EFF", bg: "#EEF4FF",
    },
    {
      id: "comida", icon: ShoppingBag, emoji: "🍔", label: "Comida & Restaurantes",
      tagline: "Lo que antoja, caliente y a tiempo",
      desc: "Los mejores restaurantes de tu ciudad, en tu teléfono. Desde una empanada hasta un menú completo — llega caliente.",
      steps: ["Elige el restaurante aliado","Selecciona tus platos","El repartidor recoge tu pedido","Entrega en puerta en promedio 30 min"],
      perks: ["Restaurantes verificados","Seguimiento en tiempo real","Pago anticipado o en efectivo","Pedidos mínimos bajos"],
      color: "#F97316", bg: "#FFF7ED",
    },
    {
      id: "compras", icon: Package, emoji: "📦", label: "Compras & Mandados",
      tagline: "Nosotros hacemos el mandado por ti",
      desc: "Cuéntanos qué necesitas, dinos dónde comprarlo y un aliado hace la gestión completa. Recibes todo con el ticket de compra.",
      steps: ["Describe lo que necesitas","Comparte la ubicación de la tienda","El aliado realiza tu compra","Recibe en casa con el ticket"],
      perks: ["Compras en cualquier tienda","Ticket de compra transparente","Sin comisión oculta","Aliados de confianza"],
      color: "#8B5CF6", bg: "#F5F3FF",
    },
    {
      id: "farmacia", icon: Pill, emoji: "💊", label: "Farmacia",
      tagline: "Tu salud no espera — nosotros tampoco",
      desc: "Medicamentos a tu puerta desde farmacias aliadas verificadas. Servicio exprés para urgencias, sin perder tiempo.",
      steps: ["Ingresa el nombre del medicamento","Selecciona la farmacia aliada","El aliado verifica disponibilidad","Entrega rápida en tu domicilio"],
      perks: ["Farmacias aliadas verificadas","Servicio urgente disponible","Cadena de frío para productos sensibles","Discreto y seguro"],
      color: "#10B981", bg: "#ECFDF5",
    },
    {
      id: "envios", icon: Send, emoji: "📬", label: "Envíos & Encomiendas",
      tagline: "Lo que envías, llega con confirmación",
      desc: "Documentos, paquetes o encomiendas de hasta 20 kg — recogemos donde estás y entregamos con foto de confirmación.",
      steps: ["Describe tu paquete y destino","Confirma el precio del envío","El aliado recoge en tu ubicación","El destinatario recibe y firma"],
      perks: ["Confirmación de entrega","Cobertura nacional","Para paquetes hasta 20kg","Foto de entrega incluida"],
      color: "#F59E0B", bg: "#FFFBEB",
    },
    {
      id: "mototaxi", icon: Bike, emoji: "🏍️", label: "Mototaxi",
      tagline: "El atajo más rápido de la ciudad",
      desc: "La opción más ágil y económica. Perfecto para evitar trancas, llegar puntual y no pagar de más.",
      steps: ["Selecciona Mototaxi en la app","Indica tu punto de partida y destino","El motociclista más cerca acepta","Viaje directo sin desvíos"],
      perks: ["Precio menor al taxi","Llega antes que un carro","Conductores con casco y equipos","Rutas optimizadas"],
      color: "#EF4444", bg: "#FEF2F2",
    },
  ];

  export default function Servicios() {

    useEffect(() => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      const timer = setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 400);
      return () => clearTimeout(timer);
    }, []);
  
    // Track active section for nav pill highlight
    const [activeSection, setActiveSection] = useState("transporte");
    useEffect(() => {
      const ids = ["transporte","comida","compras","farmacia","envios","mototaxi"];
      const observers = ids.map(id => {
        const el = document.getElementById(id);
        if (!el) return null;
        const obs = new IntersectionObserver(
          ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
          { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
        );
        obs.observe(el);
        return obs;
      });
      return () => observers.forEach(o => o?.disconnect());
    }, []);
      return (
      <div className="min-h-screen bg-white text-[#0D1E3F]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Navbar />

  
        {/* ━━━━ STICKY SECTION NAV ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="hidden md:block sticky top-[68px] z-30 bg-white/90 backdrop-blur-xl border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-5">
            <div className="flex gap-1 py-2 overflow-x-auto scrollbar-hide">
              {SERVICES.map(s => (
                <a key={s.id} href={`#${s.id}`}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all whitespace-nowrap ${
                    activeSection === s.id
                      ? "bg-[#EEF4FF] text-[#1A6EFF] font-extrabold"
                      : "text-slate-500 hover:bg-slate-50 hover:text-[#0D1E3F]"
                  }`}>
                  <span>{s.emoji}</span> {s.label}
                  {activeSection === s.id && <span className="w-1.5 h-1.5 rounded-full bg-[#1A6EFF] ml-0.5" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="pt-28 pb-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1E3F 0%, #0D2B6B 100%)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1A6EFF]/15 blur-[120px] translate-x-1/3 -translate-y-1/3" />
          </div>
          <div className="relative max-w-7xl mx-auto px-5 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold text-white/80 border border-white/15 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#1A6EFF] animate-pulse" />
                6 servicios disponibles
              </span>
              <h1 className="text-[clamp(36px,6vw,72px)] font-extrabold text-white leading-[1.06] tracking-tight mb-6">
                Muévete, pide, recibe.<br /><span style={{ color: "#60A5FA" }}>Nosotros lo resolvemos.</span>
              </h1>
              <p className="text-white/60 text-[17px] max-w-xl mx-auto">
                Seis servicios diseñados para tu día a día en Venezuela. Todo verificado, todo confiable, todo en una app.
              </p>
            </motion.div>

            {/* Quick jumps */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center mt-10">
              {SERVICES.map(s => (
                <a key={s.id} href={`#${s.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold text-white/80 border border-white/15 hover:bg-white/10 transition-colors">
                  {s.emoji} {s.label}
                </a>
              ))}
            </motion.div>
          </div>
        </section>


          {/* ━━━━ FLEET PHOTO BANNER ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-5">
              <div className="grid md:grid-cols-3 gap-4">
                {([
                  { img: driverOpeningDoorImg, label: "🚗 Pappe Driver", color: "#1A6EFF", sub: "Transporte — precio cerrado" },
                  { img: repartidoraMotoImg,   label: "📦 Pappe Runner", color: "#F97316", sub: "Delivery de comida y compras" },
                  { img: repartidorMotoImg,    label: "🏍️ Pappe Rider",  color: "#8B5CF6", sub: "Mototaxi rápido y ágil" },
                ] as const).map((item, i) => (
                  <div key={i} className="group relative rounded-2xl overflow-hidden h-44" style={{ boxShadow: "0 4px 20px rgba(0,0,0,.1)" }}>
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3F]/80 via-[#0D1E3F]/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold text-white mb-1" style={{ background: item.color }}>{item.label}</span>
                      <p className="text-white/80 text-[11px] font-medium">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

  
        {/* Stats bar */}
        <div className="border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-5 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[["6","Servicios en una app"],["≈4 min","Tiempo promedio de llegada"],["24/7","Siempre disponible"],["5 ★","Calificación promedio"]].map(([v,l]) => (
              <div key={l} className="text-center">
                <p className="text-2xl font-extrabold" style={{ color: BLUE }}>{v}</p>
                <p className="text-slate-400 text-xs font-semibold mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Each service */}
        {SERVICES.map((s, idx) => {
          const Icon = s.icon;
          const isEven = idx % 2 === 0;
          return (
            <section key={s.id} id={s.id} className={`py-20 ${isEven ? "bg-white" : ""}`}
              style={!isEven ? { background: "#F5F8FF" } : {}}>
              <div className="max-w-7xl mx-auto px-5">
                <Reveal>
                  <div className={`grid lg:grid-cols-2 gap-14 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>

                    {/* Visual */}
                    <motion.div variants={up} className={`order-1 ${!isEven ? "lg:order-2" : ""}`}>
                      <div className="rounded-3xl p-10 md:p-14 flex flex-col items-center justify-center relative overflow-hidden"
                        style={{ background: s.bg, minHeight: "360px" }}>
                        <div className="absolute inset-0 flex items-center justify-center opacity-5 text-[200px] select-none pointer-events-none">
                          {s.emoji}
                        </div>
                        <div className="relative z-10 text-center">
                          <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                            style={{ background: s.color }}>
                            <Icon size={40} className="text-white" />
                          </div>
                          <p className="text-5xl font-black mb-1" style={{ color: s.color }}>{s.emoji}</p>
                          <p className="font-extrabold text-2xl" style={{ color: NAVY }}>{s.label}</p>
                        </div>
                        {/* Steps pills */}
                        <div className="mt-8 flex flex-col gap-2 w-full max-w-xs">
                          {s.steps.map((step, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5 shadow-sm">
                              <span className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-extrabold text-white shrink-0"
                                style={{ background: s.color }}>
                                {i+1}
                              </span>
                              <span className="text-[13px] font-semibold text-slate-700">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className={`order-2 ${!isEven ? "lg:order-1" : ""}`}>
                      <motion.div variants={up}>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-bold mb-4"
                          style={{ background: s.bg, color: s.color }}>
                          {s.emoji} {s.label}
                        </span>
                        <h2 className="text-[clamp(26px,4vw,46px)] font-extrabold leading-tight mb-4" style={{ color: NAVY }}>
                          {s.tagline}
                        </h2>
                        <p className="text-slate-500 text-[16px] leading-relaxed mb-8">{s.desc}</p>
                      </motion.div>
                      <motion.div variants={up} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {s.perks.map((perk, i) => (
                          <div key={i} className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 bg-white">
                            <CheckCircle2 size={16} style={{ color: s.color }} strokeWidth={2.5} />
                            <span className="text-[13px] font-semibold text-slate-700">{perk}</span>
                          </div>
                        ))}
                      </motion.div>
                      <motion.div variants={up}>
                        <a href="/#registro" style={{ background: s.color }}
                          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white text-[14px] font-extrabold shadow-lg hover:opacity-90 transition-all active:scale-95">
                          Solicitar {s.label} <ArrowRight size={16} />
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="py-20" style={{ background: "linear-gradient(135deg, #0D1E3F 0%, #0D2B6B 100%)" }}>
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-[clamp(28px,5vw,52px)] font-extrabold text-white mb-4">¿Qué necesitas hoy?</h2>
            <p className="text-white/60 text-[16px] mb-8">Tu primer servicio es un tap. Rápido, seguro, sin vueltas.</p>
            <a href="/#registro" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-extrabold text-[15px] hover:opacity-90 transition-all"
              style={{ background: BLUE, boxShadow: "0 8px 32px rgba(26,110,255,0.5)" }}>
              Solicitar ahora <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
  