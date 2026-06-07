import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Bike, ShoppingBag, MapPin, Star, Menu, X,
  Package, Pill, Car, CheckCircle2, Smartphone, Send,
  Shield, DollarSign, Navigation, UserCheck, Zap,
  ArrowRight, Phone, Instagram, Twitter, Facebook,
  Clock, ChevronRight, Sparkles,
} from "lucide-react";
import appMockupImg from "@/assets/images/app-mockup.png";

/* ── Motion presets ─────────────────────────────────────── */
const E = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } },
};
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
  { icon: Car,      label: "Transporte",  sub: "Mototaxi y carro",       emoji: "🚗" },
  { icon: ShoppingBag, label: "Comida",   sub: "Tus locales fav",         emoji: "🍔" },
  { icon: Package,  label: "Compras",     sub: "Sin salir de casa",       emoji: "📦" },
  { icon: Pill,     label: "Farmacia",    sub: "Medicamentos al instante", emoji: "💊" },
  { icon: Send,     label: "Envíos",      sub: "Encomiendas rápidas",     emoji: "📬" },
  { icon: Bike,     label: "Mototaxi",    sub: "Rápido y económico",      emoji: "🏍️" },
];

const WHY = [
  {
    icon: Shield,
    title: "Conductores verificados",
    desc: "Cédula, vehículo y antecedentes revisados. Viaja con alguien de confianza, no un desconocido.",
  },
  {
    icon: DollarSign,
    title: "Precio fijo antes de arrancar",
    desc: "Ves el costo antes de confirmar. Sin cuentas raras ni sorpresas al llegar.",
  },
  {
    icon: Navigation,
    title: "GPS en vivo",
    desc: "Tú y tu familia saben exactamente dónde estás durante todo el viaje.",
  },
  {
    icon: UserCheck,
    title: "Hecho pa' Portuguesa",
    desc: "Operamos en Guanare, Acarigua, Araure y más. No somos de Caracas, somos del llano.",
  },
];

const STEPS = [
  { n: "1", icon: Smartphone, title: "Abre Pappedir", desc: "Elige tu servicio — viaje, delivery, compras, farmacia." },
  { n: "2", icon: Zap,        title: "Un aliado acepta al tiro", desc: "El conductor más cerca arranca de una. Sin vueltas." },
  { n: "3", icon: CheckCircle2, title: "¡Llegamos!", desc: "Sigue tu pedido o viaje en vivo. Fácil, seguro y sin rollos." },
];

const TESTIMONIALS = [
  { name: "Roberto M.", city: "Guanare",  stars: 5, text: "En 4 minutos el conductor estaba en mi puerta. Burda de rápido, sin comparación." },
  { name: "Valentina C.", city: "Acarigua", stars: 5, text: "Mi mamá pudo ver mi ubicación en todo momento. Eso vale oro, chamo." },
  { name: "José D.",    city: "Araure",   stars: 5, text: "Llevo dos meses de conductor aliado. Los pagos llegan siempre, el soporte responde." },
];

const PAYMENTS = ["Pago Móvil", "Zelle", "Efectivo", "Transferencia", "Divisas"];

/* ── Component ──────────────────────────────────────────── */
export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-[#F4F7FE] font-sans overflow-x-hidden">

      {/* ━━━━ NAVBAR ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-3">
          <div className="glass rounded-2xl px-5 h-[60px] flex items-center justify-between shadow-sm shadow-black/5">

            <a href="#" className="shrink-0">
              <img src="/logo.png" alt="Pappedir" className="h-9 w-auto" />
            </a>

            <nav className="hidden md:flex gap-1">
              {[["#servicios","Servicios"],["#seguridad","Seguridad"],["#como-funciona","Cómo funciona"],["#conductores","Conductores"]].map(([h, l]) => (
                <a key={h} href={h} className="px-4 py-2 text-[13px] font-semibold text-slate-500 hover:text-[#0B1F4B] rounded-xl hover:bg-white/70 transition-all">{l}</a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a href="#conductores" className="hidden md:block text-[13px] font-bold text-slate-600 hover:text-[#1A6EFF] transition-colors px-2">
                Unirme como conductor
              </a>
              <button className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[13px] font-extrabold text-white bg-[#1A6EFF] blue-glow hover:bg-[#1250C4] transition-all active:scale-95">
                <Smartphone size={14} /> Descargar
              </button>
              <button className="md:hidden p-2 text-slate-600" onClick={() => setOpen(!open)}>
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-2 glass rounded-2xl shadow-lg">
                <div className="p-3 flex flex-col gap-0.5">
                  {[["#servicios","Servicios"],["#seguridad","Seguridad"],["#como-funciona","Cómo funciona"],["#conductores","Conductores"]].map(([h, l]) => (
                    <a key={h} href={h} onClick={() => setOpen(false)}
                      className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 rounded-xl transition-colors">{l}</a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* ━━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">

        {/* BG gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F4B] via-[#0D2760] to-[#0B3A8C]" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
        {/* Radial glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#1A6EFF]/20 blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#FAB81E]/10 blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div initial="hidden" animate="visible" variants={stag}>

            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FAB81E] animate-pulse" />
              <span className="text-[#FAB81E] text-[13px] font-bold">Disponible ahora en Portuguesa</span>
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="text-[clamp(40px,7vw,80px)] font-extrabold leading-[1.02] text-white mb-6 tracking-tight">
              Tu viaje,<br />
              tu pedido,<br />
              <span className="text-[#FAB81E]">al tiro.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/65 text-lg leading-relaxed max-w-lg mb-10">
              Transporte, delivery, farmacia y más — todo desde una sola app venezolana. Sin rollos, sin esperas, sin chivos.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-12">
              <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#FAB81E] text-[#0B1F4B] font-extrabold text-[15px] gold-glow hover:bg-[#FFC93D] transition-all active:scale-95">
                Solicitar ahora
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/20 text-white font-bold text-[15px] hover:bg-white/10 transition-all">
                Cómo funciona <ChevronRight size={15} className="text-white/50" />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-x-8 gap-y-4">
              {[["6+","Servicios"],["4 min","Llegada promedio"],["24/7","Disponible"],["5 ★","Rating"]].map(([v, l]) => (
                <div key={l}>
                  <p className="text-2xl font-extrabold text-white">{v}</p>
                  <p className="text-white/45 text-xs font-medium mt-0.5">{l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: E }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-[#1A6EFF]/25 blur-[80px] rounded-full scale-75" />
            <img src={appMockupImg} alt="App Pappedir" className="relative z-10 w-[260px] md:w-[300px] drop-shadow-[0_32px_64px_rgba(0,0,0,0.5)]" />

            {/* Floating pill: conductor */}
            <motion.div animate={{ y: [0,-12,0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-4 md:-left-16 z-20 glass rounded-2xl p-3.5 flex items-center gap-3 shadow-xl min-w-[210px]">
              <div className="w-10 h-10 rounded-xl bg-[#1A6EFF]/15 flex items-center justify-center shrink-0">
                <Car size={18} className="text-[#1A6EFF]" />
              </div>
              <div>
                <p className="text-[#0B1F4B] text-[13px] font-bold">Conductor en camino</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Llega en ≈ 4 min · GPS activo</p>
              </div>
            </motion.div>

            {/* Floating pill: tarifa */}
            <motion.div animate={{ y: [0,12,0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              className="absolute bottom-24 -right-2 md:-right-14 z-20 glass rounded-2xl p-3.5 flex items-center gap-3 shadow-xl min-w-[180px]">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                <DollarSign size={18} className="text-emerald-500" />
              </div>
              <div>
                <p className="text-[#0B1F4B] text-[13px] font-bold">Tarifa estimada</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Sin sorpresas</p>
              </div>
            </motion.div>

            {/* Stars */}
            <motion.div animate={{ y: [0,-8,0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2.6 }}
              className="absolute bottom-48 -left-2 md:-left-10 z-20 glass rounded-xl px-3.5 py-2.5 shadow-xl flex items-center gap-2">
              <div className="flex text-[#FAB81E]">
                {[...Array(5)].map((_,i) => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <p className="text-[#0B1F4B] text-[12px] font-bold">Chévere, pana!</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Payment strip at bottom */}
        <div className="absolute bottom-0 inset-x-0 border-t border-white/8">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-3">
            <span className="text-white/35 text-[11px] font-semibold uppercase tracking-widest">Aceptamos</span>
            {PAYMENTS.map((m) => (
              <span key={m} className="px-3.5 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/60 text-[11px] font-bold">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━ SERVICIOS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="servicios" className="py-24 bg-[#F4F7FE]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-[#1A6EFF] text-xs font-extrabold uppercase tracking-[0.18em] mb-3">Todo en uno</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,4.5vw,52px)] font-extrabold text-[#0B1F4B] mb-4 leading-tight">
              Un solo lugar pa' todo
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-md mx-auto">
              No más abrir tres apps distintas. Con Pappedir tienes todo lo que necesitas en un solo sitio.
            </motion.p>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div key={i} variants={fadeUp}
                    className="group bg-white rounded-3xl p-6 md:p-8 card-lift border border-slate-100 cursor-pointer overflow-hidden relative">
                    <div className="absolute -bottom-6 -right-6 text-7xl opacity-[0.06] select-none group-hover:opacity-[0.10] transition-opacity">
                      {s.emoji}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#EFF3FF] flex items-center justify-center text-[#1A6EFF] mb-4 group-hover:bg-[#1A6EFF] group-hover:text-white transition-all">
                      <Icon size={22} />
                    </div>
                    <p className="font-extrabold text-[#0B1F4B] text-base mb-0.5">{s.label}</p>
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left visual */}
            <Reveal>
              <motion.div variants={fadeUp} className="relative">
                {/* Main card */}
                <div className="rounded-3xl bg-gradient-to-br from-[#0B1F4B] to-[#0D2E6B] p-8 md:p-10 text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-72 h-72 bg-[#1A6EFF]/15 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-[#FAB81E]/15 border border-[#FAB81E]/25 flex items-center justify-center">
                        <Shield size={22} className="text-[#FAB81E]" />
                      </div>
                      <div>
                        <p className="font-extrabold text-lg">Viaja seguro</p>
                        <p className="text-white/50 text-[13px]">Cada recorrido respaldado</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[["100%","Verificados"],["GPS","Tiempo real"],["24/7","Soporte"]].map(([v,l]) => (
                        <div key={l} className="text-center p-4 rounded-2xl bg-white/6 border border-white/8">
                          <p className="font-extrabold text-2xl text-white">{v}</p>
                          <p className="text-white/40 text-[11px] mt-1">{l}</p>
                        </div>
                      ))}
                    </div>

                    {/* Fake trip progress bar */}
                    <div className="bg-white/8 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-white/70 text-[12px] font-semibold">Tu viaje en tiempo real</p>
                        <span className="text-[#FAB81E] text-[11px] font-bold">EN CAMINO</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "65%" }}
                          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                          className="h-full bg-[#FAB81E] rounded-full"
                        />
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-white/40 text-[10px]">Origen</span>
                        <span className="text-white/40 text-[10px]">Destino</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>

            {/* Right text */}
            <Reveal>
              <div className="flex flex-col gap-4">
                <motion.div variants={fadeUp}>
                  <p className="text-[#1A6EFF] text-xs font-extrabold uppercase tracking-[0.18em] mb-3">Seguridad primero</p>
                  <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold text-[#0B1F4B] leading-tight mb-4">
                    Viaja con<br />toda la confianza
                  </h2>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    En Pappedir no improvisamos. Cada conductor pasa por verificación real y cada viaje queda registrado.
                  </p>
                </motion.div>

                {WHY.map((w, i) => {
                  const Icon = w.icon;
                  return (
                    <motion.div key={i} variants={fadeUp}
                      className="group flex items-start gap-4 p-5 rounded-2xl bg-[#F4F7FE] border border-slate-100 hover:bg-white hover:border-[#1A6EFF]/20 hover:shadow-md hover:shadow-blue-100/50 transition-all cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#1A6EFF] shrink-0 group-hover:bg-[#1A6EFF] group-hover:text-white group-hover:border-transparent transition-all">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-bold text-[#0B1F4B] text-[15px] mb-0.5">{w.title}</p>
                        <p className="text-slate-500 text-sm leading-relaxed">{w.desc}</p>
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
      <section id="como-funciona" className="py-24 bg-[#F4F7FE]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-[#1A6EFF] text-xs font-extrabold uppercase tracking-[0.18em] mb-3">Sin complicaciones</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,4.5vw,52px)] font-extrabold text-[#0B1F4B] leading-tight mb-4">
              Tres pasos y listo
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-md mx-auto">
              Si puedes abrir WhatsApp, puedes usar Pappedir. Sin tutoriales, sin vueltas.
            </motion.p>
          </Reveal>

          <Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div key={i} variants={fadeUp}
                    className="relative bg-white rounded-3xl p-8 card-lift border border-slate-100 group">
                    {/* Step number bg */}
                    <div className="absolute top-5 right-6 text-[72px] font-extrabold leading-none text-[#EFF3FF] select-none group-hover:text-[#DDEAFF] transition-colors">
                      {s.n}
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-[#1A6EFF] text-white flex items-center justify-center mb-5 shadow-md shadow-blue-300/40 group-hover:scale-105 transition-transform">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-extrabold text-[#0B1F4B] text-xl mb-2">{s.title}</h3>
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

      {/* ━━━━ CONDUCTORES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="conductores" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0B1F4B] via-[#0D2760] to-[#0B3A8C]">
            {/* BG decoration */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1A6EFF]/20 rounded-full blur-[100px]" />
              <div className="absolute -bottom-20 -left-16 w-72 h-72 bg-[#FAB81E]/12 rounded-full blur-[80px]" />
              <div className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,.7) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            </div>

            <div className="relative z-10 p-8 md:p-14 grid md:grid-cols-2 gap-12 items-center">
              <Reveal>
                <motion.div variants={fadeUp}>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAB81E]/15 border border-[#FAB81E]/25 text-[#FAB81E] text-xs font-extrabold uppercase tracking-wider mb-6">
                    <Sparkles size={12} /> Únete al equipo
                  </span>
                  <h2 className="text-[clamp(28px,4vw,50px)] font-extrabold text-white leading-tight mb-4">
                    Genera ingresos<br />
                    <span className="text-[#FAB81E]">a tu propio ritmo</span>
                  </h2>
                  <p className="text-white/55 leading-relaxed mb-8">
                    ¿Tienes carro o moto? Regístrate como conductor aliado de Pappedir. Tú decides cuándo trabajas — los pagos llegan siempre, a tiempo.
                  </p>
                  <div className="flex flex-col gap-3 mb-8">
                    {["Registro rápido en minutos","Pagos semanales garantizados","Soporte 24/7 por WhatsApp","Tú manejas tus horarios"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#FAB81E]/20 border border-[#FAB81E]/30 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={11} className="text-[#FAB81E]" strokeWidth={3} />
                        </div>
                        <span className="text-white/70 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#FAB81E] text-[#0B1F4B] font-extrabold text-[14px] gold-glow hover:bg-[#FFC93D] transition-all active:scale-95">
                    Registrarme como conductor
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </Reveal>

              <Reveal>
                <div className="grid grid-cols-2 gap-4">
                  {[["2+","Meses activos"],["5 ★","Rating promedio"],["24/7","Soporte"],["100%","Pagos a tiempo"]].map(([v,l]) => (
                    <motion.div key={l} variants={fadeUp}
                      className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/6 border border-white/10 text-center">
                      <p className="text-4xl font-extrabold text-white mb-1">{v}</p>
                      <p className="text-white/45 text-xs">{l}</p>
                    </motion.div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━ TESTIMONIOS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-[#F4F7FE]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-[#1A6EFF] text-xs font-extrabold uppercase tracking-[0.18em] mb-3">Lo que dicen</motion.p>
            <motion.h2 variants={fadeUp} className="text-[clamp(28px,4.5vw,52px)] font-extrabold text-[#0B1F4B] leading-tight">
              La gente habla por nosotros
            </motion.h2>
          </Reveal>

          <Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="bg-white rounded-3xl p-7 card-lift border border-slate-100 flex flex-col">
                  <div className="flex text-[#FAB81E] mb-4">
                    {[...Array(t.stars)].map((_,j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed flex-1 mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1A6EFF] to-[#0B3A8C] flex items-center justify-center text-white font-extrabold text-sm shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-[#0B1F4B] font-bold text-[13px]">{t.name}</p>
                      <p className="text-slate-400 text-[11px]">{t.city}, Portuguesa</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━ CTA FINAL ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <motion.div variants={fadeUp}
              className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0B1F4B] via-[#0E2869] to-[#0B3A8C] text-center p-12 md:p-20">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-72 bg-[#FAB81E]/8 blur-[100px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.07]"
                  style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,.7) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
              </div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAB81E]/15 border border-[#FAB81E]/25 text-[#FAB81E] text-xs font-extrabold uppercase tracking-wider mb-8">
                  <span className="w-1.5 h-1.5 bg-[#FAB81E] rounded-full animate-pulse" />
                  Disponible ahora · Portuguesa, Venezuela
                </span>
                <h2 className="text-[clamp(34px,6vw,70px)] font-extrabold text-white leading-tight mb-5">
                  ¿Listo, chamo?<br />
                  <span className="text-[#FAB81E]">Descarga Pappedir.</span>
                </h2>
                <p className="text-white/55 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                  Gratis, fácil y hecha pa' Venezuela. Únete a los que ya la tienen.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button className="flex items-center gap-2.5 px-9 py-4 rounded-2xl bg-[#FAB81E] text-[#0B1F4B] font-extrabold text-[15px] gold-glow hover:bg-[#FFC93D] transition-all active:scale-95">
                    <Smartphone size={18} /> Descargar en Android
                  </button>
                  <button className="flex items-center gap-2 px-9 py-4 rounded-2xl bg-white/8 border border-white/15 text-white font-bold text-[15px] hover:bg-white/15 transition-all">
                    <Phone size={18} /> WhatsApp Soporte
                  </button>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ━━━━ FOOTER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <footer className="bg-[#0B1F4B] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <img src="/logo.png" alt="Pappedir" className="h-9 w-auto mb-4 brightness-0 invert" />
              <p className="text-white/40 text-sm leading-relaxed max-w-[260px]">
                La app venezolana de transporte y delivery para Portuguesa. Hecha por venezolanos, pa' venezolanos.
              </p>
              <div className="flex gap-2 mt-5">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a key={i} href="#"
                    className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-[#1A6EFF] hover:border-transparent transition-all">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white/30 text-[11px] font-extrabold uppercase tracking-widest mb-4">Servicios</p>
              <div className="flex flex-col gap-2.5">
                {["Transporte","Mototaxi","Delivery de comida","Farmacia","Envíos"].map((l) => (
                  <a key={l} href="#servicios" className="text-white/50 hover:text-white text-sm transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white/30 text-[11px] font-extrabold uppercase tracking-widest mb-4">Contacto</p>
              <div className="flex flex-col gap-3">
                <p className="text-white/50 text-sm flex items-start gap-2">
                  <MapPin size={13} className="text-[#FAB81E] mt-0.5 shrink-0" />
                  Guanare, Portuguesa<br />Venezuela
                </p>
                <a href="#" className="text-white/50 hover:text-white text-sm flex items-center gap-2 transition-colors">
                  <Phone size={13} className="text-[#FAB81E]" /> Soporte por WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/25 text-xs">© {new Date().getFullYear()} Pappedir · Hecho con orgullo en Venezuela 🇻🇪</p>
            <div className="flex gap-5">
              {["Privacidad","Términos","Soporte"].map((l) => (
                <a key={l} href="#" className="text-white/30 hover:text-white text-xs transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
