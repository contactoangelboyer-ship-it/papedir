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
        { q: "¿Qué es Pappedir?", a: "Pappedir es una app venezolana de transporte y delivery creada especialmente para Portuguesa. Desde Guanare hasta Acarigua, conectamos usuarios con conductores, repartidores y negocios aliados verificados." },
        { q: "¿En qué ciudades está disponible?", a: "Actualmente operamos en Guanare, Acarigua y Araure con cobertura completa. Estamos expandiéndonos a Biscucuy, Ospino, Guanarito y otras ciudades. Consulta nuestra página de Ciudades para ver el estado actualizado." },
        { q: "¿Cuánto tarda en llegar el servicio?", a: "El tiempo de llegada promedio es de aproximadamente 4 minutos. Puede variar según la zona y la hora del día, pero nuestros conductores y repartidores están distribuidos estratégicamente para minimizar la espera." },
        { q: "¿Cómo descargo la app?", a: "Próximamente disponible en Google Play y App Store. Por ahora, solicita tu servicio directamente desde esta web o contáctanos por WhatsApp. Te tenemos al tanto en cuanto lancemos la app." },
      ]
    },
    {
      cat: "💳 Pagos y tarifas",
      items: [
        { q: "¿Cómo se calcula el precio?", a: "El precio se confirma antes de iniciar el servicio. No hay sorpresas. El cálculo toma en cuenta la distancia, el tipo de servicio y la demanda en tiempo real." },
        { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos Pago Móvil, Zelle, transferencias, efectivo en bolívares y divisas. Cada servicio indica los métodos disponibles antes de confirmar." },
        { q: "¿Hay costos ocultos?", a: "No. Lo que ves antes de confirmar es lo que pagas. Sin comisiones sorpresa, sin cobros adicionales." },
        { q: "¿Puedo pagar en efectivo?", a: "Sí, el efectivo está disponible. Tanto en bolívares como en divisas según el conductor o repartidor que te toque. Se indica antes de confirmar el servicio." },
      ]
    },
    {
      cat: "🚗 Para usuarios",
      items: [
        { q: "¿Los conductores están verificados?", a: "Sí. Todos los conductores y repartidores pasan por un proceso de verificación manual: cédula, documentos del vehículo y revisión de antecedentes. Cero improvisación." },
        { q: "¿Puedo rastrear mi viaje o pedido?", a: "Sí. Todos los servicios tienen seguimiento en tiempo real via GPS. Puedes compartir tu ubicación con familiares mientras dura el servicio." },
        { q: "¿Qué hago si hay un problema con mi servicio?", a: "Contáctanos inmediatamente por WhatsApp. Nuestro equipo de soporte está disponible 24/7 y responde en menos de 10 minutos en horario pico." },
        { q: "¿Puedo cancelar un servicio?", a: "Puedes cancelar antes de que el conductor acepte el viaje sin costo. Si cancelas después de la aceptación, puede aplicar un cargo mínimo según el caso." },
      ]
    },
    {
      cat: "🏍️ Para conductores y repartidores",
      items: [
        { q: "¿Cómo me registro como conductor?", a: "Ve a la sección 'Conductores' en la web o al formulario de registro. El proceso tarda menos de 5 minutos y te contactamos en menos de 24 horas para completar tu incorporación." },
        { q: "¿Cuándo y cómo recibo mis pagos?", a: "Los pagos son semanales, siempre. Puedes recibirlos por Pago Móvil, Zelle, transferencia bancaria o en efectivo según tu preferencia." },
        { q: "¿Tengo que trabajar horarios fijos?", a: "Para nada. Tú decides cuándo y cuánto trabajas. Activas la app cuando quieres y la desactivas cuando necesitas descansar. Sin compromisos de horas mínimas." },
        { q: "¿Qué documentos necesito para registrarme?", a: "Cédula de identidad venezolana vigente, licencia de conducir (para conductores), documentos del vehículo y un número de WhatsApp activo. Sin trámites complicados." },
      ]
    },
    {
      cat: "🏪 Para negocios",
      items: [
        { q: "¿Cuánto le cuesta a mi negocio unirse?", a: "El registro es completamente gratuito. Solo hay una pequeña comisión sobre los pedidos completados que se detalla durante el proceso de incorporación. Sin costos fijos mensuales." },
        { q: "¿Cómo recibo los pedidos de clientes?", a: "A través de nuestra app de gestión para negocios. Recibes notificación inmediata, confirmas el pedido y el repartidor llega a recogerlo. Proceso simple y rápido." },
        { q: "¿Pappedir pone los repartidores?", a: "Sí. Tú te enfocas en preparar el pedido y nosotros nos encargamos del reparto. No necesitas contratar repartidores propios." },
        { q: "¿En cuánto tiempo aparece mi negocio en la app?", a: "Una vez completado tu registro y verificación, tu negocio aparece en la app en menos de 48 horas hábiles." },
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
                Resolvemos tus<br /><span style={{ color: "#60A5FA" }}>dudas al tiro</span>
              </h1>
              <p className="text-white/60 text-[17px] max-w-lg mx-auto">
                ¿Tienes preguntas sobre Pappedir? Aquí están las respuestas más comunes.
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
                  <h2 className="text-2xl font-extrabold text-white mb-3">¿No encontraste tu respuesta?</h2>
                  <p className="text-white/60 mb-6">Escríbenos por WhatsApp y te respondemos en menos de 10 minutos.</p>
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
  