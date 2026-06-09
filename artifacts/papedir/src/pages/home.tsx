import Navbar from "@/components/Navbar";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Bike, ShoppingBag, MapPin, Star, 
  Package, Pill, Car, CheckCircle2, Smartphone, Send,
  Shield, DollarSign, Navigation, UserCheck, Zap,
  ArrowRight, Phone, Instagram, Twitter, Facebook,
  ChevronRight, Loader2, PartyPopper,
} from "lucide-react";
import appMockupImg from "@/assets/images/app-mockup.png";
import repartidorImg from "@/assets/images/repartidor.png";
  import driverOpeningDoorImg from "@/assets/images/driver-opening-door.png";
  import repartidoraMotoImg from "@/assets/images/repartidora-moto.png";
  import conductorInteriorImg from "@/assets/images/conductor-interior.png";
  import conductorVentanaImg from "@/assets/images/conductor-ventana.jpg";
  import repartidorMotoImg from "@/assets/images/repartidor-moto.png";

/* ── Motion ─────────────────────────────────────────────── */
const E = [0.22, 1, 0.36, 1] as const;
const up = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } } };
const stag = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const vis = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={vis ? "visible" : "hidden"} variants={stag} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Data ───────────────────────────────────────────────── */
const SERVICES = [
  { icon: Car,         label: "Transporte",  sub: "Precio cerrado. Sin regateo.",   emoji: "🚗" },
  { icon: ShoppingBag, label: "Comida",      sub: "Caliente y a tiempo.",            emoji: "🍔" },
  { icon: Package,     label: "Compras",     sub: "Nosotros hacemos el mandado.",    emoji: "📦" },
  { icon: Pill,        label: "Farmacia",    sub: "Urgente o programado.",           emoji: "💊" },
  { icon: Send,        label: "Envíos",      sub: "Con confirmación de entrega.",    emoji: "📬" },
  { icon: Bike,        label: "Mototaxi",    sub: "Sin trancas. Sin rodeos.",       emoji: "🏍️" },
];

const FEATURES = [
  { icon: UserCheck,   title: "Identidad verificada al 100%",     desc: "Cédula, licencia y documentos del vehículo revisados a mano. Ningún conductor se activa sin pasar el filtro." },
  { icon: Navigation,  title: "Seguimiento para ti y los tuyos",  desc: "Comparte tu ruta con quien quieras. Todos ven dónde estás, desde el inicio hasta la llegada." },
  { icon: DollarSign,  title: "El precio que ves es el que pagas", desc: "La tarifa se confirma antes de arrancar. Sin cargos adicionales. Sin excusas." },
  { icon: Shield,      title: "Soporte humano, no bots",     desc: "Equipo real disponible por WhatsApp. Cada servicio queda registrado — si algo falla, respondemos." },
];

const STEPS = [
  { n: "01", icon: Smartphone,   title: "Elige lo que necesitas",  desc: "Transporte, comida, compras, farmacia o envíos — todo en un solo lugar." },
  { n: "02", icon: Zap,          title: "Tu aliado está en camino", desc: "El conductor o repartidor más cercano acepta al instante y llega en minutos." },
  { n: "03", icon: CheckCircle2, title: "Recibe y listo",         desc: "Precio confirmado, seguimiento en vivo y entrega asegurada. Así de simple." },
];

const TESTIMONIALS = [
    { name: "Roberto M.",   city: "Guanare",  stars: 5, tipo: "🚗 Transporte",      text: "El conductor llegó en cuatro minutos y el precio que vi en la app fue exactamente lo que pagué. Sin sorpresas." },
    { name: "Valentina C.", city: "Acarigua", stars: 5, tipo: "📍 Seguimiento GPS", text: "Mi mamá siguió mi recorrido en tiempo real desde su teléfono. Esa tranquilidad no tiene precio." },
    { name: "José D.",      city: "Araure",   stars: 5, tipo: "🏍️ Conductor aliado", text: "Dos meses como conductor y los pagos siempre caen puntual. El soporte responde rápido — eso lo dice todo." },
    { name: "Mariangel P.", city: "Guanare",  stars: 5, tipo: "📦 Delivery",        text: "La comida llegó caliente en menos de 25 minutos. App fácil de usar, repartidor muy amable. Volví a pedir al día siguiente." },
    { name: "Luis C.",      city: "Ospino",   stars: 5, tipo: "💊 Farmacia",        text: "Medicamento urgente para mi papá. Pappedir lo entregó en 18 minutos. En ese momento, fue todo." },
    { name: "Carmen R.",    city: "Acarigua", stars: 5, tipo: "🏪 Embajadora",      text: "Mi restaurante recibe pedidos por Pappedir a diario. El primer mes las ventas subieron más del 35%." },
  ];

  const TIPO_LOOP = ["🚗 Transporte","🍔 Comida a domicilio","📦 Compras sin salir","💊 Farmacia exprés","📬 Envíos seguros","🏍️ Mototaxi","🏪 Negocios aliados","📍 GPS en tiempo real","✅ Conductores verificados","⚡ En minutos"];

const CITIES   = ["Guanare", "Acarigua", "Araure", "Biscucuy", "Ospino", "Otra"];

/* ── Component ──────────────────────────────────────────── */
export default function Home() {

  // Registro state
    const [registroTipo, setRegistroTipo] = useState<"conductor" | "repartidor" | "embajador">("conductor");
    const [form, setForm] = useState({ nombre: "", cedula: "", vehiculo: "moto", whatsapp: "", ciudad: "Guanare", nombre_negocio: "", tipo_negocio: "restaurante", direccion: "" });
    const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formError, setFormError] = useState("");

    // Cycling hero word
    const HERO_WORDS = ["viaje", "comida", "farmacia", "pedido", "mototaxi"];
    const [heroWordIdx, setHeroWordIdx] = useState(0);
    const [heroFade, setHeroFade] = useState(true);
    const heroWord = HERO_WORDS[heroWordIdx];

    useEffect(() => {
      const iv = setInterval(() => {
        setHeroFade(false);
        setTimeout(() => {
          setHeroWordIdx(i => (i + 1) % HERO_WORDS.length);
          setHeroFade(true);
        }, 250);
      }, 2800);
      return () => clearInterval(iv);
    }, []);

    // Sticky mobile CTA
    const [showSticky, setShowSticky] = useState(false);
    useEffect(() => {
      const fn = () => setShowSticky(window.scrollY > 420);
      window.addEventListener("scroll", fn, { passive: true });
      return () => window.removeEventListener("scroll", fn);
    }, []);

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    const handleTipoChange = (t: "conductor" | "repartidor" | "embajador") => {
      setRegistroTipo(t);
      setFormState("idle");
      setFormError("");
      setForm({ nombre: "", cedula: "", vehiculo: "moto", whatsapp: "", ciudad: "Guanare", nombre_negocio: "", tipo_negocio: "restaurante", direccion: "" });
    };

  const [activeTestimonial, setActiveTestimonial] = useState(0);
    useEffect(() => {
      const id = setInterval(() => setActiveTestimonial(i => (i + 1) % TESTIMONIALS.length), 4000);
      return () => clearInterval(id);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setFormError("");
    try {
      const res = await fetch("/api/registro", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, tipo: registroTipo }),
        });
      if (!res.ok) throw new Error("Error al enviar");
      setFormState("success");
    } catch {
      setFormState("error");
      setFormError("Hubo un problema. Intenta de nuevo o escríbenos por WhatsApp.");
    }
  };

  const BLUE = "#1A6EFF";
  const NAVY = "#0D1E3F";

  return (
    <div className="min-h-[100dvh] bg-white text-[#0D1E3F] overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      <Navbar />
      {/* ━━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative pt-28 pb-20 min-h-[100dvh] flex items-center overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#1A6EFF]/6 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-[#EEF4FF] blur-[80px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div initial="hidden" animate="visible" variants={stag}>

            <motion.div variants={up} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EEF4FF] border border-[#1A6EFF]/15 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#1A6EFF] animate-pulse" />
              <span className="text-[#1A6EFF] text-[13px] font-bold">Operando en Portuguesa · Venezuela 🇻🇪</span>
            </motion.div>

            <motion.h1 variants={up} className="text-[clamp(40px,6.5vw,76px)] font-extrabold leading-[1.04] tracking-tight mb-6" style={{ color: NAVY }}>
              Tu viaje,<br />
              tu pedido,<br />
              <span style={{ color: BLUE }}>una sola app.</span>
            </motion.h1>

            <motion.p variants={up} className="text-slate-500 text-[17px] leading-relaxed max-w-[480px] mb-10">
              Transporte, comida, compras, farmacia y más — todo en una sola app creada para Portuguesa. Conductor verificado, precio confirmado antes de salir. Sin sorpresas.
            </motion.p>

            <motion.div variants={up} className="flex flex-col sm:flex-row gap-3 mb-12">
              <button style={{ background: BLUE }} className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white text-[15px] font-extrabold shadow-[0_8px_28px_-4px_rgba(26,110,255,.45)] hover:opacity-90 transition-all active:scale-95">
                Empieza ahora <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#como-funciona" className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-200 text-[#0D1E3F] text-[15px] font-bold hover:border-[#1A6EFF]/30 hover:bg-[#F5F8FF] transition-all">
                Cómo funciona <ChevronRight size={15} className="text-slate-400" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={up} className="flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-slate-100">
              {[["6+","Servicios disponibles"],["≈4 min","Tiempo de llegada"],["24/7","Siempre disponible"],["5 ★","Calificación promedio"]].map(([v,l]) => (
                <div key={l}>
                  <p className="text-2xl font-extrabold" style={{ color: NAVY }}>{v}</p>
                  <p className="text-slate-400 text-xs font-semibold mt-0.5">{l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — mockup */}
          <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: E }} className="relative flex justify-center">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#1A6EFF]/8 blur-[70px]" />

            <img src={appMockupImg} alt="App Pappedir" className="relative z-10 w-[260px] md:w-[290px] drop-shadow-[0_32px_60px_rgba(26,110,255,0.18)]" />

            {/* Card: conductor */}
            <motion.div animate={{ y: [0,-12,0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-4 md:-left-14 z-20 bg-white rounded-2xl p-3.5 flex items-center gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.1)] min-w-[210px] border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center shrink-0">
                <Car size={18} style={{ color: BLUE }} />
              </div>
              <div>
                <p className="text-[#0D1E3F] text-[13px] font-bold">Conductor en camino</p>
                <p className="text-slate-400 text-[11px] mt-0.5">Llega en ≈ 4 min · GPS activo</p>
              </div>
            </motion.div>

            {/* Card: tarifa */}
            <motion.div animate={{ y: [0,12,0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              className="absolute bottom-28 -right-2 md:-right-12 z-20 bg-white rounded-2xl p-3.5 flex items-center gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.1)] min-w-[175px] border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                <DollarSign size={18} className="text-emerald-500" />
              </div>
              <div>
                <p className="text-[#0D1E3F] text-[13px] font-bold">Precio estimado</p>
                <p className="text-slate-400 text-[11px] mt-0.5">Sin sorpresas</p>
              </div>
            </motion.div>

            {/* Card: rating */}
            <motion.div animate={{ y: [0,-8,0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              className="absolute bottom-52 -left-2 md:-left-10 z-20 bg-white rounded-xl px-3.5 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.09)] flex items-center gap-2 border border-slate-100">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_,i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <p className="text-[#0D1E3F] text-[12px] font-bold">Chévere, pana!</p>
            </motion.div>

              {/* Repartidor image card — floating below mockup */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.22,1,0.36,1] }}
                className="relative w-full max-w-[340px] mx-auto rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(26,110,255,0.2)] mt-6 hidden lg:block"
                style={{ aspectRatio: "4/3" }}>
                <img src={driverOpeningDoorImg} alt="Conductor Pappedir abriendo la puerta" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3F]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-white text-[12px] font-bold">Conducto en camino — Portuguesa</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Payments strip */}

      {/* ━━━━ SERVICIOS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="servicios" className="py-24" style={{ background: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-5">
          <Reveal className="text-center mb-14">
            <motion.p variants={up} className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Todo en uno</motion.p>
            <motion.h2 variants={up} className="text-[clamp(28px,4.5vw,52px)] font-extrabold leading-tight mb-4" style={{ color: NAVY }}>
              6 servicios, <span style={{ color: BLUE }}>una sola app</span>
            </motion.h2>
            <motion.p variants={up} className="text-slate-500 max-w-md mx-auto">
              No más abrir tres apps distintas. Con Pappedir tienes todo en un solo lugar.
            </motion.p>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div key={i} variants={up}
                    className="group bg-white rounded-3xl p-6 md:p-8 border border-slate-100 cursor-pointer relative overflow-hidden transition-all duration-200 hover:-translate-y-1"
                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.05)" }}
                    whileHover={{ boxShadow: "0 4px 16px rgba(26,110,255,.1), 0 12px 40px rgba(26,110,255,.12)" }}>
                    <div className="absolute -bottom-5 -right-5 text-7xl opacity-[0.05] select-none">{s.emoji}</div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all group-hover:scale-105"
                      style={{ background: "#EEF4FF", color: BLUE }}>
                      <Icon size={22} />
                    </div>
                    <p className="font-extrabold text-base mb-0.5" style={{ color: NAVY }}>{s.label}</p>
                    <p className="text-slate-400 text-[13px]">{s.sub}</p>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      
        {/* ━━━━ PAPPE FLEET ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <Reveal className="text-center mb-14">
              <motion.p variants={up} className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Nuestro equipo</motion.p>
              <motion.h2 variants={up} className="text-[clamp(28px,4.5vw,52px)] font-extrabold leading-tight mb-4" style={{ color: NAVY }}>
                Aliados reales,<br /><span style={{ color: BLUE }}>servicio real</span>
              </motion.h2>
              <motion.p variants={up} className="text-slate-500 max-w-lg mx-auto">
                Conductores y repartidores 100% verificados, listos para moverte y entregarte en Portuguesa.
              </motion.p>
            </Reveal>

            <Reveal>
              <div className="grid md:grid-cols-3 gap-6">

                {/* ── Pappe Driver ─────────────────────────────── */}
                <motion.div variants={up}
                  className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,.08), 0 16px 48px rgba(0,0,0,.07)" }}>
                  {/* Main photo */}
                  <div className="relative h-72 overflow-hidden">
                    <img src={driverOpeningDoorImg} alt="Pappe Driver"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3F]/85 via-[#0D1E3F]/20 to-transparent" />
                    {/* Badge */}
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-extrabold text-white"
                      style={{ background: "#1A6EFF" }}>
                      🚗 Transporte
                    </span>
                    {/* Secondary mini photo */}
                    <div className="absolute bottom-4 right-4 w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/40 shadow-lg">
                      <img src={conductorInteriorImg} alt="Conductor Pappedir" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-extrabold text-xl" style={{ color: NAVY }}>Pappe Driver</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Conductor verificado, precio cerrado antes de salir y GPS activo en cada recorrido. Tu viaje, nuestra prioridad.
                    </p>
                  </div>
                </motion.div>

                {/* ── Pappe Runner ─────────────────────────────── */}
                <motion.div variants={up}
                  className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,.08), 0 16px 48px rgba(0,0,0,.07)" }}>
                  <div className="relative h-72 overflow-hidden">
                    <img src={repartidoraMotoImg} alt="Pappe Runner"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3F]/85 via-[#0D1E3F]/20 to-transparent" />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-extrabold text-white"
                      style={{ background: "#F97316" }}>
                      📦 Delivery
                    </span>
                  </div>
                  <div className="bg-white p-6">
                    <h3 className="font-extrabold text-xl mb-2" style={{ color: NAVY }}>Pappe Runner</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Comida, farmacia, compras y encomiendas — entregados rápido, calientes y con confirmación en tiempo real.
                    </p>
                  </div>
                </motion.div>

                {/* ── Pappe Rider ──────────────────────────────── */}
                <motion.div variants={up}
                  className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,.08), 0 16px 48px rgba(0,0,0,.07)" }}>
                  <div className="relative h-72 overflow-hidden">
                    <img src={repartidorMotoImg} alt="Pappe Rider"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3F]/85 via-[#0D1E3F]/20 to-transparent" />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-extrabold text-white"
                      style={{ background: "#8B5CF6" }}>
                      🏍️ Mototaxi
                    </span>
                  </div>
                  <div className="bg-white p-6">
                    <h3 className="font-extrabold text-xl mb-2" style={{ color: NAVY }}>Pappe Rider</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Mototaxi ágil para esquivar las trancas y llegar sin rodeos. La forma más rápida de moverse en la ciudad.
                    </p>
                  </div>
                </motion.div>

              </div>
            </Reveal>

            {/* ── Extra photo strip (conductor-ventana) ──────── */}
            <Reveal className="mt-8">
              <motion.div variants={up}
                className="relative rounded-3xl overflow-hidden h-56 md:h-64"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,.08)" }}>
                <img src={conductorVentanaImg} alt="Conductor Pappedir"
                  className="w-full h-full object-cover object-[center_30%]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D1E3F]/80 via-[#0D1E3F]/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14">
                  <p className="text-white/70 text-[11px] font-extrabold uppercase tracking-[0.18em] mb-2">Únete al equipo</p>
                  <h3 className="text-white text-[clamp(22px,3.5vw,40px)] font-extrabold leading-tight mb-4">
                    ¿Tienes carro o moto?<br />Empieza a ganar hoy.
                  </h3>
                  <a href="/conductores"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-extrabold text-white w-fit transition-all hover:opacity-90 active:scale-95"
                    style={{ background: "#1A6EFF", boxShadow: "0 6px 20px -4px rgba(26,110,255,.5)" }}>
                    Quiero ser aliado <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </section>


          {/* ━━━━ CIUDADES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="ciudades" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-5">
              <Reveal className="text-center mb-14">
                <motion.p variants={up} className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Cobertura en Portuguesa</motion.p>
                <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold leading-tight" style={{ color: NAVY }}>
                  Ya estamos en tu ciudad
                </motion.h2>
                <motion.p variants={up} className="text-slate-500 mt-4 max-w-lg mx-auto text-[16px]">
                  Empezamos en el corazón de Portuguesa y seguimos expandiéndonos. ¿Está tu ciudad en la lista?
                </motion.p>
              </Reveal>

              {/* Active cities */}
              <Reveal>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
                  {[
                    { name: "Guanare", emoji: "🏙️", pop: "~280 000 hab.", desc: "Capital de Portuguesa. Cobertura total — transporte, delivery y mototaxi.", badge: "✅ Activa" },
                    { name: "Acarigua – Araure", emoji: "🏘️", pop: "~200 000 hab.", desc: "Segunda ciudad más grande del estado. Servicio completo disponible.", badge: "✅ Activa" },
                  ].map((c, i) => (
                    <motion.div key={i} variants={up}
                      className="flex gap-5 items-start p-6 rounded-3xl border border-slate-100 bg-white hover:-translate-y-1 transition-all duration-200"
                      style={{ boxShadow: "0 4px 20px rgba(0,0,0,.06)" }}>
                      <div className="text-4xl shrink-0">{c.emoji}</div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-extrabold text-[17px]" style={{ color: NAVY }}>{c.name}</h3>
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: "#D1FAE5", color: "#065F46" }}>{c.badge}</span>
                        </div>
                        <p className="text-slate-400 text-[12px] mb-2 font-medium">{c.pop}</p>
                        <p className="text-slate-500 text-[13px] leading-relaxed">{c.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Reveal>

              {/* Coming soon */}
              <Reveal>
                <motion.div variants={up} className="text-center">
                  <p className="text-[13px] font-bold text-slate-400 mb-4 uppercase tracking-widest">Próximamente</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Turén","Guanarito","Ospino","Biscucuy","Papelón","Boconoito","Piritu","Agua Blanca"].map(city => (
                      <span key={city} className="px-4 py-2 rounded-full text-[13px] font-semibold border border-slate-200 text-slate-500 bg-slate-50">{city}</span>
                    ))}
                  </div>
                  <p className="text-slate-400 text-[12px] mt-4">¿Tu ciudad no está? <a href="/ciudades" className="font-bold hover:underline" style={{ color: BLUE }}>Pide Pappedir aquí →</a></p>
                </motion.div>
              </Reveal>
            </div>
          </section>

  
        {/* ━━━━ SEGURIDAD ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="seguridad" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Visual */}
            <Reveal>
              <motion.div variants={up} className="relative">
                <div className="rounded-3xl overflow-hidden p-8 md:p-10 relative" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0D2B6B 100%)` }}>
                  <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#1A6EFF]/15 blur-[80px] -translate-y-1/3 translate-x-1/3" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                        <Shield size={22} style={{ color: "#60A5FA" }} />
                      </div>
                      <div>
                        <p className="text-white font-extrabold text-lg">Viaja seguro</p>
                        <p className="text-white/50 text-[13px]">Cada recorrido respaldado</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-8">
                      {[["100%","Verificados"],["GPS","Tiempo real"],["24/7","Soporte"]].map(([v,l]) => (
                        <div key={l} className="text-center p-4 rounded-2xl bg-white/6 border border-white/10">
                          <p className="font-extrabold text-2xl text-white">{v}</p>
                          <p className="text-white/40 text-[11px] mt-1">{l}</p>
                        </div>
                      ))}
                    </div>

                    {/* Fake trip bar */}
                    <div className="bg-white/8 rounded-2xl p-4">
                      <div className="flex justify-between mb-2">
                        <p className="text-white/60 text-[12px] font-semibold">Tu viaje en tiempo real</p>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">EN CAMINO</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div initial={{ width: "0%" }} animate={{ width: "65%" }}
                          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                          className="h-full rounded-full" style={{ background: BLUE }} />
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-white/35 text-[10px]">Origen</span>
                        <span className="text-white/35 text-[10px]">Destino</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>

            {/* Features */}
            <Reveal>
              <div className="flex flex-col gap-4">
                <motion.div variants={up}>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Confianza garantizada</p>
                  <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold leading-tight mb-4" style={{ color: NAVY }}>
                    Viaja con<br />toda la confianza
                  </h2>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    En Pappedir no improvisamos. Cada conductor pasa por verificación real y cada viaje queda registrado.
                  </p>
                </motion.div>

                {FEATURES.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <motion.div key={i} variants={up}
                      className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-100 hover:border-[#1A6EFF]/25 hover:bg-[#F5F8FF] transition-all cursor-pointer"
                      style={{ boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all group-hover:scale-105"
                        style={{ background: "#EEF4FF", color: BLUE }}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-bold text-[15px] mb-0.5" style={{ color: NAVY }}>{f.title}</p>
                        <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━━ CÓMO FUNCIONA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="como-funciona" className="py-24" style={{ background: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-5">
          <Reveal className="text-center mb-14">
            <motion.p variants={up} className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Sin complicaciones</motion.p>
            <motion.h2 variants={up} className="text-[clamp(28px,4.5vw,52px)] font-extrabold leading-tight mb-4" style={{ color: NAVY }}>
              Tres pasos y listo
            </motion.h2>
            <motion.p variants={up} className="text-slate-500 max-w-md mx-auto">
              Si puedes abrir WhatsApp, puedes usar Pappedir.
            </motion.p>
          </Reveal>

          <Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div key={i} variants={up}
                    className="relative bg-white rounded-3xl p-8 border border-slate-100 group transition-all duration-200 hover:-translate-y-1"
                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.05)" }}>
                    <div className="absolute top-5 right-6 text-[72px] font-extrabold leading-none select-none" style={{ color: "#EEF4FF" }}>
                      {s.n}
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform"
                        style={{ background: BLUE, boxShadow: `0 8px 20px -4px rgba(26,110,255,.4)` }}>
                        <Icon size={24} />
                      </div>
                      <h3 className="font-extrabold text-xl mb-2" style={{ color: NAVY }}>{s.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-slate-200 shadow items-center justify-center">
                        <ArrowRight size={12} className="text-slate-400" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━ TESTIMONIOS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5">
            <Reveal className="text-center mb-10">
              <motion.p variants={up} className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Lo que dicen</motion.p>
              <motion.h2 variants={up} className="text-[clamp(28px,4.5vw,52px)] font-extrabold leading-tight" style={{ color: NAVY }}>
                La gente habla por nosotros
              </motion.h2>
            </Reveal>

            {/* ── Looping tipo marquee ── */}
            <div className="relative mb-12 overflow-hidden py-3">
              <div className="flex gap-3 animate-[marquee_22s_linear_infinite] w-max">
                {[...TIPO_LOOP, ...TIPO_LOOP].map((label, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap border border-[#1A6EFF]/15 bg-[#EEF4FF] text-[#1A6EFF] shrink-0">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Featured testimonial (auto-rotating) ── */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div key={activeTestimonial}
                  initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0D2B6B 100%)` }}>

                  <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#1A6EFF]/20 blur-[80px] -translate-y-1/3 translate-x-1/4" />

                  <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
                    <div>
                      {/* Tipo badge */}
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold mb-6"
                        style={{ background: "rgba(26,110,255,0.35)", backdropFilter: "blur(8px)" }}>
                        {TESTIMONIALS[activeTestimonial].tipo}
                      </span>

                      <div className="flex text-amber-400 mb-4">
                        {[...Array(TESTIMONIALS[activeTestimonial].stars)].map((_,j) => <Star key={j} size={18} fill="currentColor" />)}
                      </div>

                      <p className="text-white text-[18px] md:text-[22px] font-semibold leading-relaxed mb-8 max-w-2xl">
                        &ldquo;{TESTIMONIALS[activeTestimonial].text}&rdquo;
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg shrink-0"
                          style={{ background: "rgba(26,110,255,0.5)", border: "2px solid rgba(255,255,255,0.2)" }}>
                          {TESTIMONIALS[activeTestimonial].name[0]}
                        </div>
                        <div>
                          <p className="text-white font-bold text-[15px]">{TESTIMONIALS[activeTestimonial].name}</p>
                          <p className="text-white/50 text-[13px]">{TESTIMONIALS[activeTestimonial].city}, Portuguesa</p>
                        </div>
                      </div>
                    </div>

                    {/* Progress dots */}
                    <div className="flex md:flex-col gap-2 justify-center">
                      {TESTIMONIALS.map((_, i) => (
                        <button key={i} onClick={() => setActiveTestimonial(i)}
                          className={`rounded-full transition-all duration-300 ${i === activeTestimonial ? "bg-white md:w-2 md:h-8 w-8 h-2" : "bg-white/25 w-2 h-2"}`} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── All testimonial pills ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {TESTIMONIALS.map((t, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className={`text-left rounded-2xl p-5 border-2 transition-all duration-200 ${i === activeTestimonial ? "border-[#1A6EFF] bg-[#EEF4FF]" : "border-slate-100 bg-white hover:border-[#1A6EFF]/30"}`}
                  style={{ boxShadow: i === activeTestimonial ? "0 4px 20px rgba(26,110,255,0.12)" : "0 2px 8px rgba(0,0,0,.04)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full"
                      style={{ background: i === activeTestimonial ? "#1A6EFF" : "#F1F5F9", color: i === activeTestimonial ? "white" : "#64748B" }}>
                      {t.tipo}
                    </span>
                    <div className="flex text-amber-400">
                      {[...Array(t.stars)].map((_,j) => <Star key={j} size={10} fill="currentColor" />)}
                    </div>
                  </div>
                  <p className="text-slate-600 text-[12px] leading-relaxed line-clamp-2 mb-3">"{t.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-[10px] shrink-0"
                      style={{ background: `linear-gradient(135deg, ${BLUE}, #0B4FCC)` }}>
                      {t.name[0]}
                    </div>
                    <p className="text-[11px] font-semibold" style={{ color: NAVY }}>{t.name} · {t.city}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ━━━━ REGISTRO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="registro" className="py-24" style={{ background: "#F5F8FF" }}>
          <div className="max-w-7xl mx-auto px-5">

            {/* Header */}
            <Reveal className="text-center mb-12">
              <motion.p variants={up} className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Únete al equipo</motion.p>
              <motion.h2 variants={up} className="text-[clamp(28px,4.5vw,52px)] font-extrabold leading-tight mb-4" style={{ color: NAVY }}>
                Elige tu rol en <span style={{ color: BLUE }}>Pappedir</span>
              </motion.h2>
              <motion.p variants={up} className="text-slate-500 max-w-md mx-auto text-[16px]">
                Conductor, repartidor o negocio aliado — hay un lugar para ti en nuestra plataforma.
              </motion.p>
            </Reveal>

            {/* Tab selector */}
            <Reveal className="mb-10">
              <motion.div variants={up} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                {([
                  { id: "conductor" , label: "Conductor", sub: "Transporte de personas", emoji: "🚗" },
                  { id: "repartidor" , label: "Repartidor", sub: "Delivery y encomiendas", emoji: "🏍️" },
                  { id: "embajador" , label: "Embajador", sub: "Tu negocio en Pappedir", emoji: "🏪" },
                ] as const).map((t) => (
                  <button key={t.id} onClick={() => handleTipoChange(t.id)}
                    className={`flex-1 flex flex-col items-center gap-1.5 px-4 py-4 rounded-2xl border-2 transition-all duration-200 ${
                      registroTipo === t.id
                        ? "border-[#1A6EFF] bg-[#1A6EFF] text-white shadow-[0_4px_20px_rgba(26,110,255,0.35)]"
                        : "border-slate-200 bg-white text-[#0D1E3F] hover:border-[#1A6EFF]/40 hover:bg-[#F5F8FF]"
                    }`}>
                    <span className="text-2xl">{t.emoji}</span>
                    <span className="text-[13px] font-extrabold">{t.label}</span>
                    <span className={`text-[10px] font-semibold ${registroTipo === t.id ? "text-white/75" : "text-slate-400"}`}>{t.sub}</span>
                  </button>
                ))}
              </motion.div>
            </Reveal>

            {/* Content grid */}
            <AnimatePresence mode="wait">
              <motion.div key={registroTipo} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-2 gap-10 items-start">

                {/* Left — pitch */}
                <div className="flex flex-col gap-6">

                  {/* Photo */}
                  <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(26,110,255,0.15)]" style={{ aspectRatio: "16/9" }}>
                    <img src={conductorVentanaImg} alt="Conductor Pappedir" className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3F]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold text-white"
                        style={{ background: "rgba(26,110,255,0.85)", backdropFilter: "blur(8px)" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        {registroTipo === "conductor" ? "Conductor aliado Pappedir"
                          : registroTipo === "repartidor" ? "Repartidor aliado Pappedir"
                          : "Embajador Pappedir"}
                      </span>
                    </div>
                  </div>

                  {/* Pitch */}
                  <div className="bg-white rounded-3xl p-7 border border-slate-100" style={{ boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                    {registroTipo === "conductor" && (
                      <div>
                        <h3 className="text-xl font-extrabold mb-2" style={{ color: NAVY }}>Genera ingresos a tu propio ritmo</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-5">¿Tienes carro o moto? Regístrate como conductor aliado. Tú decides cuándo trabajas — los pagos llegan siempre, a tiempo.</p>
                        <div className="flex flex-col gap-2.5">
                          {["Carro o moto aceptados","Pagos semanales puntuales","Horario completamente flexible","Soporte real por WhatsApp"].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "#EEF4FF" }}>
                                <CheckCircle2 size={12} style={{ color: BLUE }} strokeWidth={3} />
                              </div>
                              <span className="text-slate-600 text-sm font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {registroTipo === "repartidor" && (
                      <div>
                        <h3 className="text-xl font-extrabold mb-2" style={{ color: NAVY }}>Reparte y gana desde hoy</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-5">Con tu moto o bicicleta, lleva pedidos de comida, farmacias y encomiendas por toda Portuguesa. Sin jefe, sin horario fijo.</p>
                        <div className="flex flex-col gap-2.5">
                          {["Moto o bicicleta aceptadas","Ingresos desde el primer pedido","Ganancias por cada entrega","App sencilla, sin curva de aprendizaje"].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "#EEF4FF" }}>
                                <CheckCircle2 size={12} style={{ color: BLUE }} strokeWidth={3} />
                              </div>
                              <span className="text-slate-600 text-sm font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {registroTipo === "embajador" && (
                      <div>
                        <h3 className="text-xl font-extrabold mb-2" style={{ color: NAVY }}>Pon tu negocio en el mapa</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-5">Restaurante, farmacia, tienda o supermercado — únete a Pappedir y llega a más clientes sin invertir en repartidores propios.</p>
                        <div className="flex flex-col gap-2.5">
                          {["Miles de nuevos clientes potenciales","Repartidores verificados, a tu servicio","Pagos semanales rápidos y seguros","Incorporación en menos de 48 horas"].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "#EEF4FF" }}>
                                <CheckCircle2 size={12} style={{ color: BLUE }} strokeWidth={3} />
                              </div>
                              <span className="text-slate-600 text-sm font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right — Form */}
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100"
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,.05), 0 24px 60px rgba(26,110,255,.08)" }}>

                  <AnimatePresence mode="wait">
                    {formState === "success" ? (
                      <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center text-center py-8 gap-5">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "#EEF4FF" }}>
                          <PartyPopper size={36} style={{ color: BLUE }} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-extrabold mb-2" style={{ color: NAVY }}>¡Registro recibido!</h3>
                          <p className="text-slate-500 leading-relaxed">
                            {registroTipo === "embajador"
                              ? "En menos de 48 horas te contactamos para incorporar tu negocio. ¡Bienvenido a Pappedir!"
                              : "En menos de 24 horas te contactamos por WhatsApp para activar tu cuenta. ¡Bienvenido al equipo!"}
                          </p>
                        </div>
                        <button onClick={() => { setFormState("idle"); setForm({ nombre: "", cedula: "", vehiculo: "moto", whatsapp: "", ciudad: "Guanare", nombre_negocio: "", tipo_negocio: "restaurante", direccion: "" }); }}
                          className="px-6 py-2.5 rounded-xl border-2 border-slate-200 text-sm font-bold text-slate-600 hover:border-[#1A6EFF]/30 hover:bg-[#F5F8FF] transition-all">
                          Registrar otro
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form key={`form-${registroTipo}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="flex flex-col gap-5">

                        <div>
                          <p className="text-[11px] font-extrabold uppercase tracking-widest mb-1.5" style={{ color: BLUE }}>
                            {registroTipo === "conductor" ? "🚗 Registro de Conductor"
                              : registroTipo === "repartidor" ? "🏍️ Registro de Repartidor"
                              : "🏪 Registro de Embajador"}
                          </p>
                          <h3 className="text-[22px] font-extrabold" style={{ color: NAVY }}>Tu información, en segundos</h3>
                        </div>

                        {/* Embajador-only: Nombre del negocio */}
                        {registroTipo === "embajador" && (
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">Nombre del negocio *</label>
                            <input name="nombre_negocio" value={form.nombre_negocio} onChange={handleChange} required placeholder="Ej. Panadería El Trigal"
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-[#0D1E3F] placeholder-slate-300 focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all" />
                          </div>
                        )}

                        {/* Embajador-only: Tipo de negocio */}
                        {registroTipo === "embajador" && (
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">Tipo de negocio *</label>
                            <select name="tipo_negocio" value={form.tipo_negocio} onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-[#0D1E3F] bg-white focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all">
                              <option value="restaurante">Restaurante / Comida</option>
                              <option value="farmacia">Farmacia / Medicamentos</option>
                              <option value="supermercado">Supermercado / Abastos</option>
                              <option value="tienda">Tienda / Ropa / Accesorios</option>
                              <option value="panaderia">Panadería / Pastelería</option>
                              <option value="otro">Otro tipo de negocio</option>
                            </select>
                          </div>
                        )}

                        {/* Nombre responsable */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">
                            {registroTipo === "embajador" ? "Nombre del responsable *" : "Nombre completo *"}
                          </label>
                          <input name="nombre" value={form.nombre} onChange={handleChange} required
                            placeholder={registroTipo === "embajador" ? "Ej. María González" : "Ej. Carlos Pérez"}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-[#0D1E3F] placeholder-slate-300 focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all" />
                        </div>

                        {/* Cedula — not for embajador or keep optional */}
                        {registroTipo !== "embajador" && (
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">Cédula de identidad *</label>
                            <input name="cedula" value={form.cedula} onChange={handleChange} required placeholder="Ej. V-12345678"
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-[#0D1E3F] placeholder-slate-300 focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all" />
                          </div>
                        )}

                        {/* Vehiculo */}
                        {registroTipo === "conductor" && (
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">Tipo de vehículo *</label>
                            <select name="vehiculo" value={form.vehiculo} onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-[#0D1E3F] bg-white focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all">
                              <option value="carro">Carro</option>
                              <option value="moto">Moto</option>
                              <option value="ambos">Ambos</option>
                            </select>
                          </div>
                        )}
                        {registroTipo === "repartidor" && (
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">Tipo de vehículo *</label>
                            <select name="vehiculo" value={form.vehiculo} onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-[#0D1E3F] bg-white focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all">
                              <option value="moto">Moto</option>
                              <option value="bicicleta">Bicicleta</option>
                              <option value="a_pie">A pie (zona cercana)</option>
                            </select>
                          </div>
                        )}

                        {/* WhatsApp */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">WhatsApp *</label>
                          <input name="whatsapp" value={form.whatsapp} onChange={handleChange} required placeholder="Ej. +58 412 1234567" type="tel"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-[#0D1E3F] placeholder-slate-300 focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all" />
                        </div>

                        {/* Ciudad */}
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">Ciudad *</label>
                          <select name="ciudad" value={form.ciudad} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-[#0D1E3F] bg-white focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all">
                            {["Guanare","Acarigua","Araure","Biscucuy","Ospino","Otra"].map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>

                        {/* Embajador-only: Dirección */}
                        {registroTipo === "embajador" && (
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">Dirección del negocio</label>
                            <input name="direccion" value={form.direccion} onChange={handleChange} placeholder="Ej. Av. Principal, Local 3, Guanare"
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-[#0D1E3F] placeholder-slate-300 focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all" />
                          </div>
                        )}

                        {formError && (
                          <p className="text-red-500 text-sm font-medium bg-red-50 px-4 py-3 rounded-xl">{formError}</p>
                        )}

                        <button type="submit" disabled={formState === "loading"} style={{ background: BLUE }}
                          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-white text-[15px] font-extrabold shadow-[0_8px_28px_-4px_rgba(26,110,255,.4)] hover:opacity-90 transition-all active:scale-95 disabled:opacity-60 mt-1">
                          {formState === "loading" ? <><Loader2 size={18} className="animate-spin" /> Enviando...</> : <>
                            {registroTipo === "embajador" ? "Registrar mi negocio" : "Solicitar registro"}
                            <ArrowRight size={17} />
                          </>}
                        </button>

                        <p className="text-slate-400 text-[11px] text-center">Te contactaremos por WhatsApp en menos de 24 horas.</p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ━━━━ CTA FINAL ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <Reveal>
            <motion.div variants={up} className="relative overflow-hidden rounded-[2.5rem] text-center p-12 md:p-20"
              style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0D2E6B 60%, #0B4FCC 100%)` }}>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#1A6EFF]/20 blur-[100px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.06]"
                  style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
              </div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-blue-200 text-xs font-bold uppercase tracking-wider mb-8">
                  <span className="w-1.5 h-1.5 bg-[#1A6EFF] rounded-full animate-pulse" />
                  Disponible ahora · Portuguesa, Venezuela
                </span>
                <h2 className="text-[clamp(34px,6vw,70px)] font-extrabold text-white leading-tight mb-5">
                  ¿Listo, chamo?<br />
                  <span style={{ color: "#60A5FA" }}>Descarga Pappedir.</span>
                </h2>
                <p className="text-white/55 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                  Gratis, fácil y hecha pa' Venezuela. Únete a los que ya la tienen.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button className="flex items-center gap-2.5 px-9 py-4 rounded-2xl font-extrabold text-[15px] transition-all active:scale-95"
                    style={{ background: BLUE, color: "white", boxShadow: "0 8px 28px -4px rgba(26,110,255,.6)" }}>
                    <Smartphone size={18} /> Descargar en Android
                  </button>
                  <button className="flex items-center gap-2 px-9 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-bold text-[15px] hover:bg-white/15 transition-all">
                    <Phone size={18} /> WhatsApp Soporte
                  </button>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>


        {/* ━━━━ STICKY MOBILE CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <AnimatePresence>
          {showSticky && (
            <motion.div initial={{ y: 80 }} animate={{ y: 0 }} exit={{ y: 80 }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white border-t border-slate-100 px-4 py-3 flex gap-2.5 shadow-[0_-8px_32px_rgba(0,0,0,.08)]">
              <a href="https://wa.me/584120000000?text=Hola%20quiero%20pedir%20un%20servicio"
                target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-extrabold text-[13px] active:scale-95 transition-all"
                style={{ background: "#25D366" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pedir por WhatsApp
              </a>
              <a href="#registro"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-extrabold text-[13px] text-white active:scale-95 transition-all"
                style={{ background: "#1A6EFF" }}>
                🚗 Únete al equipo
              </a>
            </motion.div>
          )}
        </AnimatePresence>
  
      {/* ━━━━ FOOTER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <img src="/logo-transparent.png" alt="Pappedir" className="h-12 w-auto object-contain mb-4" />
              <p className="text-slate-400 text-sm leading-relaxed max-w-[260px]">
                La app venezolana de transporte y delivery para el estado Portuguesa.
              </p>
              <div className="flex gap-2 mt-5">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a key={i} href="#"
                    className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                    style={{ background: "transparent" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = BLUE; (e.currentTarget as HTMLAnchorElement).style.borderColor = BLUE; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e2e8f0"; }}>
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-[11px] font-extrabold uppercase tracking-widest mb-4">Servicios</p>
              <div className="flex flex-col gap-2.5">
                {["Transporte","Mototaxi","Delivery de comida","Farmacia","Envíos"].map(l => (
                  <a key={l} href="#servicios" className="text-slate-500 hover:text-[#1A6EFF] text-sm transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-[11px] font-extrabold uppercase tracking-widest mb-4">Contacto</p>
              <div className="flex flex-col gap-3">
                <p className="text-slate-500 text-sm flex items-start gap-2">
                  <MapPin size={13} style={{ color: BLUE }} className="mt-0.5 shrink-0" />
                  Guanare, Portuguesa<br />Venezuela
                </p>
                <a href="#" className="text-slate-500 hover:text-[#1A6EFF] text-sm flex items-center gap-2 transition-colors">
                  <Phone size={13} style={{ color: BLUE }} /> Soporte por WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-slate-400 text-xs">© {new Date().getFullYear()} Pappedir · Hecho con orgullo en Venezuela 🇻🇪</p>
            <div className="flex gap-5">
              {["Privacidad","Términos","Soporte"].map(l => (
                <a key={l} href="#" className="text-slate-400 hover:text-slate-700 text-xs transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
