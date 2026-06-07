import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Bike, ShoppingBag, MapPin, Star, Menu, X,
  Package, Pill, Car, CheckCircle2, Smartphone, Send,
  Shield, DollarSign, Navigation, UserCheck, Zap,
  ArrowRight, Phone, Instagram, Twitter, Facebook,
  ChevronRight, Loader2, PartyPopper,
} from "lucide-react";
import appMockupImg from "@/assets/images/app-mockup.png";

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
  { icon: Car,         label: "Transporte",  sub: "Carro o mototaxi",          emoji: "🚗" },
  { icon: ShoppingBag, label: "Comida",      sub: "Tus locales favoritos",      emoji: "🍔" },
  { icon: Package,     label: "Compras",     sub: "Sin salir de casa",          emoji: "📦" },
  { icon: Pill,        label: "Farmacia",    sub: "Medicamentos al instante",   emoji: "💊" },
  { icon: Send,        label: "Envíos",      sub: "Encomiendas rápidas",        emoji: "📬" },
  { icon: Bike,        label: "Mototaxi",    sub: "Rápido y económico",         emoji: "🏍️" },
];

const FEATURES = [
  { icon: UserCheck,   title: "Conductores verificados",     desc: "Cédula, documentos y antecedentes revisados manualmente. Cero improvisación." },
  { icon: Navigation,  title: "GPS en tiempo real",          desc: "Tú y tu familia ven el viaje en vivo. Seguridad sin papel." },
  { icon: DollarSign,  title: "Precio fijo antes de salir",  desc: "Confirmas la tarifa antes de arrancar. Sin sorpresas al llegar." },
  { icon: Shield,      title: "Respaldo total",              desc: "Cada viaje queda registrado. Si algo pasa, estamos ahí." },
];

const STEPS = [
  { n: "01", icon: Smartphone,   title: "Abre Pappedir",        desc: "Elige tu servicio — viaje, delivery, compras o farmacia." },
  { n: "02", icon: Zap,          title: "Un aliado acepta",      desc: "El conductor más cerca arranca al tiro. Sin vueltas." },
  { n: "03", icon: CheckCircle2, title: "¡Llegamos!",            desc: "Sigue todo en vivo. Rápido, seguro, sin rollos." },
];

const TESTIMONIALS = [
  { name: "Roberto M.", city: "Guanare",  stars: 5, text: "En 4 minutos el conductor estaba en mi puerta. Burda de rápido, sin comparación." },
  { name: "Valentina C.", city: "Acarigua", stars: 5, text: "Mi mamá pudo ver mi ubicación en todo momento. Eso vale oro, chamo." },
  { name: "José D.",    city: "Araure",   stars: 5, text: "Llevo dos meses de conductor aliado. Los pagos siempre llegan, el soporte responde." },
];

const PAYMENTS = ["Pago Móvil", "Zelle", "Efectivo", "Transferencia", "Divisas"];
const CITIES   = ["Guanare", "Acarigua", "Araure", "Biscucuy", "Ospino", "Otra"];

/* ── Component ──────────────────────────────────────────── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Form state
  const [form, setForm] = useState({ nombre: "", cedula: "", vehiculo: "carro", whatsapp: "", ciudad: "Guanare" });
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setFormError("");
    try {
      const res = await fetch("/api/conductores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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

      {/* ━━━━ NAVBAR ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.header initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: E }}
        className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-2xl border-b border-slate-100/80">
        <div className="max-w-7xl mx-auto px-5 h-[68px] flex items-center justify-between">

          <a href="#" className="shrink-0">
            <img src="/logo-transparent.png" alt="Pappedir" className="h-12 w-auto object-contain" />
          </a>

          <nav className="hidden md:flex items-center gap-0.5">
            {[["#servicios","Servicios"],["#seguridad","Seguridad"],["#como-funciona","Cómo funciona"],["#conductores","Para conductores"]].map(([h,l]) => (
              <a key={h} href={h} className="px-4 py-2 text-[13.5px] font-semibold text-slate-500 hover:text-[#0D1E3F] rounded-xl hover:bg-slate-50 transition-all">{l}</a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a href="#conductores" className="hidden md:block text-[13.5px] font-bold text-[#1A6EFF] hover:underline transition-colors">
              Soy conductor
            </a>
            <button style={{ background: BLUE }} className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-extrabold text-white shadow-[0_4px_16px_-2px_rgba(26,110,255,.45)] hover:opacity-90 transition-all active:scale-95">
              Descargar App
            </button>
            <button className="md:hidden p-1.5 text-slate-500" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-slate-100 bg-white">
              <div className="max-w-7xl mx-auto px-5 py-3 flex flex-col gap-0.5">
                {[["#servicios","Servicios"],["#seguridad","Seguridad"],["#como-funciona","Cómo funciona"],["#conductores","Para conductores"]].map(([h,l]) => (
                  <a key={h} href={h} onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">{l}</a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

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
              <span className="text-[#1A6EFF] text-[13px] font-bold">Disponible ahora en Portuguesa, Venezuela</span>
            </motion.div>

            <motion.h1 variants={up} className="text-[clamp(40px,6.5vw,76px)] font-extrabold leading-[1.04] tracking-tight mb-6" style={{ color: NAVY }}>
              Tu viaje,<br />
              tu pedido,<br />
              <span style={{ color: BLUE }}>una sola app.</span>
            </motion.h1>

            <motion.p variants={up} className="text-slate-500 text-[17px] leading-relaxed max-w-[480px] mb-10">
              Pappedir es la app venezolana de transporte y delivery hecha pa' Portuguesa. Sin rollos, sin chivos, sin esperas. Al tiro.
            </motion.p>

            <motion.div variants={up} className="flex flex-col sm:flex-row gap-3 mb-12">
              <button style={{ background: BLUE }} className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white text-[15px] font-extrabold shadow-[0_8px_28px_-4px_rgba(26,110,255,.45)] hover:opacity-90 transition-all active:scale-95">
                Solicitar ahora <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#como-funciona" className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-200 text-[#0D1E3F] text-[15px] font-bold hover:border-[#1A6EFF]/30 hover:bg-[#F5F8FF] transition-all">
                Cómo funciona <ChevronRight size={15} className="text-slate-400" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={up} className="flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-slate-100">
              {[["6+","Servicios en una app"],["≈4 min","Llegada promedio"],["24/7","Disponible"],["5 ★","Rating"]].map(([v,l]) => (
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
          </motion.div>
        </div>

        {/* Payments strip */}
        <div className="absolute bottom-0 inset-x-0 border-t border-slate-100 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-5 py-3 flex flex-wrap items-center justify-center gap-3">
            <span className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">Aceptamos</span>
            {PAYMENTS.map(m => (
              <span key={m} className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[12px] font-semibold shadow-sm">{m}</span>
            ))}
          </div>
        </div>
      </section>

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
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Seguridad primero</p>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <Reveal className="text-center mb-14">
            <motion.p variants={up} className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Lo que dicen</motion.p>
            <motion.h2 variants={up} className="text-[clamp(28px,4.5vw,52px)] font-extrabold leading-tight" style={{ color: NAVY }}>
              La gente habla por nosotros
            </motion.h2>
          </Reveal>

          <Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <motion.div key={i} variants={up}
                  className="bg-white rounded-3xl p-7 flex flex-col border border-slate-100 transition-all duration-200 hover:-translate-y-1"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.05)" }}>
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(t.stars)].map((_,j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed flex-1 mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-sm shrink-0"
                      style={{ background: `linear-gradient(135deg, ${BLUE}, #0B4FCC)` }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-[13px]" style={{ color: NAVY }}>{t.name}</p>
                      <p className="text-slate-400 text-[11px]">{t.city}, Portuguesa</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━ FORMULARIO CONDUCTORES ━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="conductores" className="py-24" style={{ background: "#F5F8FF" }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left — pitch */}
            <Reveal>
              <div>
                <motion.p variants={up} className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Únete al equipo</motion.p>
                <motion.h2 variants={up} className="text-[clamp(28px,4vw,50px)] font-extrabold leading-tight mb-5" style={{ color: NAVY }}>
                  Genera ingresos<br />
                  <span style={{ color: BLUE }}>a tu propio ritmo</span>
                </motion.h2>
                <motion.p variants={up} className="text-slate-500 leading-relaxed mb-8 text-[16px]">
                  ¿Tienes carro o moto? Regístrate como conductor aliado de Pappedir. Tú decides cuándo trabajas — los pagos llegan siempre, a tiempo.
                </motion.p>

                <motion.div variants={up} className="flex flex-col gap-3 mb-8">
                  {[
                    "Registro rápido — menos de 5 minutos",
                    "Pagos semanales garantizados",
                    "Soporte por WhatsApp 24/7",
                    "Tú decides tus horarios y zonas",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "#EEF4FF" }}>
                        <CheckCircle2 size={12} style={{ color: BLUE }} strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Stats grid */}
                <motion.div variants={up} className="grid grid-cols-2 gap-3">
                  {[["2+","Meses activos"],["5 ★","Rating promedio"],["24/7","Soporte disponible"],["100%","Pagos a tiempo"]].map(([v,l]) => (
                    <div key={l} className="bg-white rounded-2xl p-5 border border-slate-100 text-center"
                      style={{ boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                      <p className="text-3xl font-extrabold mb-0.5" style={{ color: BLUE }}>{v}</p>
                      <p className="text-slate-400 text-xs">{l}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </Reveal>

            {/* Right — Form */}
            <Reveal>
              <motion.div variants={up} className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100"
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
                          Te contactaremos por WhatsApp en las próximas horas para completar tu registro como conductor aliado. ¡Bienvenido a la familia!
                        </p>
                      </div>
                      <button onClick={() => { setFormState("idle"); setForm({ nombre:"", cedula:"", vehiculo:"carro", whatsapp:"", ciudad:"Guanare" }); }}
                        className="px-6 py-2.5 rounded-xl text-sm font-bold border-2 border-slate-200 text-slate-600 hover:border-[#1A6EFF]/30 hover:bg-[#F5F8FF] transition-all">
                        Registrar otro conductor
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div>
                        <h3 className="text-2xl font-extrabold mb-1" style={{ color: NAVY }}>Regístrate como conductor</h3>
                        <p className="text-slate-400 text-sm">Llena el formulario y te contactamos al tiro por WhatsApp.</p>
                      </div>

                      {/* Nombre */}
                      <div>
                        <label className="block text-sm font-bold mb-1.5" style={{ color: NAVY }}>Nombre completo</label>
                        <input name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Ej. Carlos Rodríguez"
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm font-medium outline-none focus:border-[#1A6EFF] focus:ring-4 focus:ring-[#1A6EFF]/10 transition-all placeholder:text-slate-300" />
                      </div>

                      {/* Cédula */}
                      <div>
                        <label className="block text-sm font-bold mb-1.5" style={{ color: NAVY }}>Número de cédula</label>
                        <input name="cedula" value={form.cedula} onChange={handleChange} required placeholder="Ej. V-12345678"
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm font-medium outline-none focus:border-[#1A6EFF] focus:ring-4 focus:ring-[#1A6EFF]/10 transition-all placeholder:text-slate-300" />
                      </div>

                      {/* Vehículo + Ciudad */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold mb-1.5" style={{ color: NAVY }}>Tipo de vehículo</label>
                          <select name="vehiculo" value={form.vehiculo} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm font-medium outline-none focus:border-[#1A6EFF] focus:ring-4 focus:ring-[#1A6EFF]/10 transition-all bg-white appearance-none cursor-pointer">
                            <option value="carro">🚗 Carro</option>
                            <option value="moto">🏍️ Moto</option>
                            <option value="ambos">🚗🏍️ Ambos</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-1.5" style={{ color: NAVY }}>Ciudad</label>
                          <select name="ciudad" value={form.ciudad} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-sm font-medium outline-none focus:border-[#1A6EFF] focus:ring-4 focus:ring-[#1A6EFF]/10 transition-all bg-white appearance-none cursor-pointer">
                            {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <div>
                        <label className="block text-sm font-bold mb-1.5" style={{ color: NAVY }}>Número de WhatsApp</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold">+58</span>
                          <input name="whatsapp" value={form.whatsapp} onChange={handleChange} required placeholder="4XX-XXX-XXXX"
                            className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-200 text-sm font-medium outline-none focus:border-[#1A6EFF] focus:ring-4 focus:ring-[#1A6EFF]/10 transition-all placeholder:text-slate-300" />
                        </div>
                      </div>

                      {/* Error */}
                      {formState === "error" && (
                        <p className="text-red-500 text-sm bg-red-50 border border-red-100 px-4 py-3 rounded-xl">{formError}</p>
                      )}

                      {/* Submit */}
                      <button type="submit" disabled={formState === "loading"}
                        className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-white font-extrabold text-[15px] transition-all active:scale-[.98] disabled:opacity-70"
                        style={{ background: BLUE, boxShadow: "0 8px 28px -4px rgba(26,110,255,.45)" }}>
                        {formState === "loading" ? (
                          <><Loader2 size={18} className="animate-spin" /> Enviando...</>
                        ) : (
                          <><Phone size={17} /> Quiero ser conductor aliado</>
                        )}
                      </button>

                      <p className="text-center text-xs text-slate-400">
                        Te contactaremos por WhatsApp · Sin compromisos
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </Reveal>
          </div>
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
