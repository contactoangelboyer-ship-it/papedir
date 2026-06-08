import React, { useRef } from "react";
  import { motion, useInView } from "framer-motion";
  import { Car, ShoppingBag, Package, Pill, Send, Bike, CheckCircle2, Clock, Shield, Star, ArrowRight, MapPin } from "lucide-react";
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

  const SERVICES = [
    {
      id: "transporte", icon: Car, emoji: "🚗", label: "Transporte",
      tagline: "Llega a donde necesitas, seguro y rápido",
      desc: "Solicita un conductor verificado en minutos. Carro cómodo o moto, tú decides. Precio fijo antes de salir, sin sorpresas.",
      steps: ["Abre la app y elige Transporte","Confirma tu destino y el precio","El conductor más cercano acepta","Sigue el viaje en tiempo real"],
      perks: ["Precio fijo confirmado antes","Conductor ID verificado","GPS activo en cada viaje","Disponible 24/7"],
      color: "#1A6EFF", bg: "#EEF4FF",
    },
    {
      id: "comida", icon: ShoppingBag, emoji: "🍔", label: "Comida & Restaurantes",
      tagline: "Tus locales favoritos, en tu puerta",
      desc: "Pide comida de los mejores restaurantes aliados de Portuguesa. Desde empanadas hasta pollo asado, todo llega caliente.",
      steps: ["Elige el restaurante aliado","Selecciona tus platos","El repartidor recoge tu pedido","Entrega en puerta en promedio 30 min"],
      perks: ["Restaurantes verificados","Seguimiento en tiempo real","Pago anticipado o en efectivo","Pedidos mínimos bajos"],
      color: "#F97316", bg: "#FFF7ED",
    },
    {
      id: "compras", icon: Package, emoji: "📦", label: "Compras & Mandados",
      tagline: "Envía a un aliado a hacer tus compras",
      desc: "¿No puedes salir? Dile a un aliado qué necesitas y ellos van al abastos, supermercado o tienda y te lo traen.",
      steps: ["Describe lo que necesitas","Comparte la ubicación de la tienda","El aliado realiza tu compra","Recibe en casa con el ticket"],
      perks: ["Compras en cualquier tienda","Ticket de compra transparente","Sin comisión oculta","Aliados de confianza"],
      color: "#8B5CF6", bg: "#F5F3FF",
    },
    {
      id: "farmacia", icon: Pill, emoji: "💊", label: "Farmacia",
      tagline: "Medicamentos urgentes, sin salir de casa",
      desc: "Recibe tus medicamentos directamente desde la farmacia aliada. Servicio prioritario para casos urgentes.",
      steps: ["Ingresa el nombre del medicamento","Selecciona la farmacia aliada","El aliado verifica disponibilidad","Entrega rápida en tu domicilio"],
      perks: ["Farmacias aliadas verificadas","Servicio urgente disponible","Cadena de frío para productos sensibles","Discreto y seguro"],
      color: "#10B981", bg: "#ECFDF5",
    },
    {
      id: "envios", icon: Send, emoji: "📬", label: "Envíos & Encomiendas",
      tagline: "Envía paquetes dentro de Portuguesa",
      desc: "Manda documentos, paquetes o cualquier encomienda a cualquier punto de la ciudad. Rápido y con confirmación de entrega.",
      steps: ["Describe tu paquete y destino","Confirma el precio del envío","El aliado recoge en tu ubicación","El destinatario recibe y firma"],
      perks: ["Confirmación de entrega","Cobertura toda Portuguesa","Para paquetes hasta 20kg","Foto de entrega incluida"],
      color: "#F59E0B", bg: "#FFFBEB",
    },
    {
      id: "mototaxi", icon: Bike, emoji: "🏍️", label: "Mototaxi",
      tagline: "Muévete rápido, sin trancas",
      desc: "La opción más rápida y económica para moverte dentro de la ciudad. Ideal para evitar el tráfico y llegar al tiro.",
      steps: ["Selecciona Mototaxi en la app","Indica tu punto de partida y destino","El motociclista más cerca acepta","Viaje directo sin desvíos"],
      perks: ["Precio menor al taxi","Llega antes que un carro","Conductores con casco y equipos","Rutas optimizadas"],
      color: "#EF4444", bg: "#FEF2F2",
    },
  ];

  export default function Servicios() {
    return (
      <div className="min-h-screen bg-white text-[#0D1E3F]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Navbar />

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
                Todo lo que necesitas,<br /><span style={{ color: "#60A5FA" }}>en una sola app</span>
              </h1>
              <p className="text-white/60 text-[17px] max-w-xl mx-auto">
                Transporte, comida, compras, farmacia, envíos y mototaxi. Pappedir lo resuelve todo.
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

        {/* Stats bar */}
        <div className="border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-5 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[["6+","Servicios disponibles"],["≈4 min","Tiempo de llegada"],["24/7","Siempre disponible"],["5 ★","Calificación promedio"]].map(([v,l]) => (
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
            <h2 className="text-[clamp(28px,5vw,52px)] font-extrabold text-white mb-4">¿Listo para empezar?</h2>
            <p className="text-white/60 text-[16px] mb-8">Descarga la app o solicita tu primer servicio ahora.</p>
            <a href="/#registro" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-extrabold text-[15px] hover:opacity-90 transition-all"
              style={{ background: BLUE, boxShadow: "0 8px 32px rgba(26,110,255,0.5)" }}>
              Comenzar ahora <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
  