import React, { useRef, useState } from "react";
  import { motion, useInView, AnimatePresence } from "framer-motion";
  import { ChevronDown, ArrowRight, MessageCircle } from "lucide-react";
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

  const FAQ_CATEGORIES = [
    {
      cat: "🧑‍💻 General",
      items: [
        { q: "¿Qué es Pappedir?", a: "Pappedir es la app venezolana de transporte y delivery construida para Portuguesa. Conectamos personas con conductores, repartidores y negocios aliados verificados — todo en un solo lugar." },
        { q: "¿En qué ciudades está disponible?", a: "Hoy operamos en Guanare, Acarigua y Araure con cobertura completa. Estamos expandiendo a Biscucuy, Ospino, Guanarito y más. Visita la página de Ciudades para ver el estado en tiempo real." },
        { q: "¿Cuánto tarda en llegar el servicio?", a: "El promedio es ≈4 minutos. Puede variar según la zona o el horario, pero nuestros aliados están distribuidos para que la espera sea la mínima posible." },
        { q: "¿Cómo descargo la app?", a: "Muy pronto en Google Play y App Store. Por ahora, solicita tu servicio desde esta web o por WhatsApp. Te avisamos en cuanto la app esté disponible para descargar." },
      ]
    },
    {
      cat: "💳 Pagos y tarifas",
      items: [
        { q: "¿Cómo se calcula el precio?", a: "El precio se muestra y confirma antes de empezar. Lo que ves es lo que pagas — sin recargos, sin sorpresas de último minuto." },
        { q: "¿Qué métodos de pago aceptan?", a: "Pago Móvil, Zelle, transferencia bancaria, efectivo en bolívares y divisas. El método disponible aparece antes de confirmar tu pedido." },
        { q: "¿Hay costos ocultos?", a: "Ninguno. El precio que confirmas es el precio final. No existen comisiones ocultas ni cargos adicionales." },
        { q: "¿Puedo pagar en efectivo?", a: "Sí. Efectivo en bolívares y divisas, según el conductor disponible. Siempre se indica antes de confirmar el servicio." },
      ]
    },
    {
      cat: "🚗 Para usuarios",
      items: [
        { q: "¿Los conductores están verificados?", a: "Absolutamente. Cédula, licencia, documentos del vehículo — todo revisado a mano. Ningún conductor opera sin pasar el filtro completo." },
        { q: "¿Puedo rastrear mi viaje o pedido?", a: "Sí. Seguimiento GPS en tiempo real durante todo el servicio. Puedes compartir tu recorrido con familiares para mayor tranquilidad." },
        { q: "¿Qué hago si hay un problema con mi servicio?", a: "Escríbenos por WhatsApp. Soporte real, disponible 24/7. En horario de alta demanda respondemos en menos de 10 minutos — sin bots." },
        { q: "¿Puedo cancelar un servicio?", a: "Sin costo si cancelas antes de que el conductor acepte. Después de la aceptación puede aplicar un cargo mínimo, dependiendo del caso." },
      ]
    },
    {
      cat: "🏍️ Para conductores y repartidores",
      items: [
        { q: "¿Cómo me registro como conductor?", a: "Entra a la sección Conductores, llena el formulario en 5 minutos y te contactamos en menos de 24 horas. Sin papeleo innecesario." },
        { q: "¿Cuándo y cómo recibo mis pagos?", a: "Cada semana, sin falta. Pago Móvil, Zelle o transferencia bancaria — tú eliges el método. Sin retrasos, sin excusas." },
        { q: "¿Tengo que trabajar horarios fijos?", a: "Cero horario obligatorio. Activa la app cuando quieras trabajar, desactívala cuando necesites parar. Sin horas mínimas, sin compromisos." },
        { q: "¿Qué documentos necesito para registrarme?", a: "Cédula vigente, licencia de conducir (si eres conductor), documentos del vehículo y un WhatsApp activo. Eso es todo — sin burocracia." },
      ]
    },
    {
      cat: "🏪 Para negocios",
      items: [
        { q: "¿Cuánto le cuesta a mi negocio unirse?", a: "Unirte es gratis. Solo pagas una pequeña comisión sobre los pedidos que recibes — ningún costo fijo, ninguna mensualidad." },
        { q: "¿Cómo recibo los pedidos de clientes?", a: "Por la app de gestión para negocios. Notificación al instante, confirmas con un toque y el repartidor va por el pedido. Simple y directo." },
        { q: "¿Pappedir pone los repartidores?", a: "Exactamente. Tú prepara el pedido. Nosotros lo entregamos. No contratas, no gestionas repartidores — ese es nuestro trabajo." },
        { q: "¿En cuánto tiempo aparece mi negocio en la app?", a: "Registro aprobado y verificado — apareces en la app en menos de 48 horas. Listo para recibir tu primer pedido." },
      ]
    },
  ];

  function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
      <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white"
        style={{ boxShadow: open ? "0 4px 20px rgba(26,110,255,0.08)" : "0 2px 8px rgba(0,0,0,.04)" }}>
        <button onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#F5F8FF]">
          <span className="font-bold text-[14px]" style={{ color: NAVY }}>{q}</span>
          <ChevronDown size={18} className={`text-slate-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-[#1A6EFF]" : ""}`} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
              transition={{ duration: 0.25, ease: [0.22,1,0.36,1] }} className="overflow-hidden">
              <div className="px-6 pb-5 pt-0">
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-slate-500 text-[13px] leading-relaxed">{a}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  export default function FAQ() {
    const [activeCategory, setActiveCategory] = useState(0);
    return (
      <div className="min-h-screen bg-white text-[#0D1E3F]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Navbar />

        {/* Hero */}
        <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1E3F 0%, #0D2B6B 100%)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-[#1A6EFF]/15 blur-[120px]" />
          </div>
          <div className="relative max-w-4xl mx-auto px-5 text-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-[13px] font-bold text-white/80 mb-6">
                ❓ Preguntas frecuentes
              </span>
              <h1 className="text-[clamp(36px,5.5vw,68px)] font-extrabold text-white leading-[1.06] tracking-tight mb-5">
                Todo lo que quieres<br /><span style={{ color: "#60A5FA" }}>saber, acá está</span>
              </h1>
              <p className="text-white/60 text-[17px] max-w-lg mx-auto">
                Preguntas reales con respuestas directas. Sin rodeos, sin letra pequeña.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-5">

            {/* Category tabs */}
            <Reveal className="mb-10">
              <motion.div variants={up} className="flex flex-wrap gap-2">
                {FAQ_CATEGORIES.map((cat, i) => (
                  <button key={i} onClick={() => setActiveCategory(i)}
                    className={`px-4 py-2 rounded-xl text-[13px] font-bold transition-all ${i === activeCategory ? "text-white shadow-[0_4px_12px_rgba(26,110,255,0.35)]" : "text-slate-500 bg-white border border-slate-200 hover:border-[#1A6EFF]/30"}`}
                    style={i === activeCategory ? { background: BLUE } : {}}>
                    {cat.cat}
                  </button>
                ))}
              </motion.div>
            </Reveal>

            {/* Questions */}
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: [0.22,1,0.36,1] }}
                className="flex flex-col gap-3">
                {FAQ_CATEGORIES[activeCategory].items.map((item, i) => (
                  <FAQItem key={i} q={item.q} a={item.a} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20" style={{ background: "#F5F8FF" }}>
          <div className="max-w-3xl mx-auto px-5">
            <Reveal>
              <motion.div variants={up} className="rounded-3xl p-10 text-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0D2B6B 100%)` }}>
                <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-[#1A6EFF]/20 blur-[80px]" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(26,110,255,0.3)" }}>
                    <MessageCircle size={28} className="text-[#60A5FA]" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-white mb-3">¿Queda alguna duda?</h2>
                  <p className="text-white/60 mb-6">Escríbenos por WhatsApp. Persona real, respuesta en menos de 10 minutos.</p>
                  <a href="https://wa.me/584120000000?text=Hola,%20tengo%20una%20pregunta%20sobre%20Pappedir" target="_blank" rel="noopener noreferrer"
                    style={{ background: BLUE }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-extrabold text-[14px] shadow-[0_8px_32px_rgba(26,110,255,0.5)] hover:opacity-90 transition-all">
                    Escribir por WhatsApp <ArrowRight size={16} />
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
  