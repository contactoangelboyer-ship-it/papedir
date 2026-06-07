import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Bike, ShoppingBag, MapPin, Star, Menu, X, Clock,
  Package, Pill, Car, CheckCircle2, Smartphone, Send,
  Shield, DollarSign, Navigation, UserCheck, Zap,
  ArrowRight, ChevronRight, Phone, Instagram, Twitter,
  Facebook, Flame, Sparkles, TrendingUp, Lock,
} from "lucide-react";
import appMockupImg from "@/assets/images/app-mockup.png";

/* ── Animation helpers ──────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function InView({ children, className = "", delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
      style={{ "--delay": `${delay}s` } as React.CSSProperties}
    >
      {children}
    </motion.div>
  );
}

/* ── Data ───────────────────────────────────────────────── */
const SERVICES = [
  { icon: Car, label: "Transporte", color: "from-blue-50 to-indigo-50", accent: "text-blue-600", dot: "bg-blue-500" },
  { icon: Bike, label: "Mototaxi", color: "from-sky-50 to-blue-50", accent: "text-sky-600", dot: "bg-sky-500" },
  { icon: ShoppingBag, label: "Comida", color: "from-orange-50 to-amber-50", accent: "text-orange-500", dot: "bg-orange-400" },
  { icon: Package, label: "Compras", color: "from-violet-50 to-purple-50", accent: "text-violet-600", dot: "bg-violet-500" },
  { icon: Pill, label: "Farmacia", color: "from-emerald-50 to-teal-50", accent: "text-emerald-600", dot: "bg-emerald-500" },
  { icon: Send, label: "Envíos", color: "from-rose-50 to-pink-50", accent: "text-rose-500", dot: "bg-rose-400" },
];

const FEATURES = [
  {
    icon: UserCheck,
    title: "Conductores verificados",
    desc: "Cédula, vehículo y antecedentes revisados. Sin improvisar.",
    span: "md:col-span-2",
    big: true,
  },
  {
    icon: Navigation,
    title: "Rastreo GPS en vivo",
    desc: "Tú y tu familia saben dónde estás en todo momento.",
    span: "",
    big: false,
  },
  {
    icon: DollarSign,
    title: "Tarifa antes de arrancar",
    desc: "Sin sorpresas. Confirmas el precio antes de subir.",
    span: "",
    big: false,
  },
  {
    icon: Shield,
    title: "Respaldo total",
    desc: "Cada viaje queda registrado. Si algo pasa, estamos ahí.",
    span: "",
    big: false,
  },
  {
    icon: Clock,
    title: "24/7 disponible",
    desc: "A cualquier hora, cualquier día. Sin excusas.",
    span: "",
    big: false,
  },
];

const STEPS = [
  {
    n: "01",
    icon: Smartphone,
    title: "Abre Pappedir",
    desc: "Solicita tu viaje, comida o servicio en segundos.",
  },
  {
    n: "02",
    icon: Flame,
    title: "Un aliado lo acepta",
    desc: "El más cercano arranca al tiro. Sin esperas interminables.",
  },
  {
    n: "03",
    icon: CheckCircle2,
    title: "¡Listo, pana!",
    desc: "Llega a tu destino o recibe tu pedido con total seguridad.",
  },
];

const TESTIMONIALS = [
  {
    name: "Roberto M.", city: "Guanare", role: "Usuario", stars: 5,
    text: "Burda de rápido. Pedí el viaje y en 4 minutos el conductor estaba en mi puerta. Sin rollos.",
  },
  {
    name: "Valentina C.", city: "Acarigua", role: "Usuaria", stars: 5,
    text: "Me sentí segura en todo momento. Mi mamá vio mi ubicación en vivo. Eso vale oro.",
  },
  {
    name: "José D.", city: "Araure", role: "Conductor aliado", stars: 5,
    text: "Los pagos siempre llegan. El soporte responde rápido. Seria y confiable, chamo.",
  },
  {
    name: "Ana R.", city: "Guanare", role: "Usuaria", stars: 5,
    text: "Pedí el almuerzo y la medicina el mismo día, desde la misma app. Eso no lo tiene nadie más.",
  },
];

const PAYMENT_METHODS = ["Pago Móvil", "Zelle", "Efectivo", "Transferencia", "Divisas"];

/* ── Component ──────────────────────────────────────────── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-[100dvh] bg-white overflow-x-hidden">

      {/* ── NAVBAR ────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease }}
        className="fixed top-0 w-full z-50"
      >
        <div className="mx-4 mt-4">
          <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl border border-black/[0.06] rounded-2xl px-5 h-14 flex items-center justify-between shadow-sm shadow-black/[0.04]">
            <a href="#" className="shrink-0">
              <img src="/logo.png" alt="Pappedir" className="h-8 w-auto object-contain" />
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {[["#servicios","Servicios"],["#seguridad","Seguridad"],["#como-funciona","Cómo funciona"],["#conductores","Conductores"]].map(([href, label]) => (
                <a key={href} href={href}
                  className="px-3.5 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-all">
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button className="hidden md:block text-sm font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 transition-colors">
                Unirme como conductor
              </button>
              <button className="text-sm font-bold px-5 py-2 rounded-xl bg-[#1A6EFF] text-white hover:bg-[#1558d6] transition-all shadow-md shadow-blue-500/25 active:scale-95">
                Descargar
              </button>
              <button className="md:hidden p-1.5 text-slate-500" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              className="mt-2 max-w-6xl mx-auto bg-white border border-black/[0.06] rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-3 flex flex-col gap-0.5">
                {[["#servicios","Servicios"],["#seguridad","Seguridad"],["#como-funciona","Cómo funciona"],["#conductores","Conductores"]].map(([href, label]) => (
                  <a key={href} href={href} onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all">
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-16">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F0F5FF] via-white to-white" />
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-radial from-blue-200/40 via-blue-100/20 to-transparent blur-3xl rounded-full" />
          </motion.div>
          {/* Dot grid */}
          <div className="absolute inset-0 opacity-[0.35]"
            style={{ backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center"
        >
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center">

            {/* Pill */}
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm shadow-blue-100/50 mb-8 text-sm font-semibold text-blue-600">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Disponible ahora en Portuguesa, Venezuela
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp}
              className="font-serif text-[clamp(44px,8vw,96px)] leading-[1.0] text-slate-900 mb-6 max-w-4xl">
              Todo lo que necesitas,{" "}
              <span className="italic text-gradient">una sola app.</span>
            </motion.h1>

            <motion.p variants={fadeUp}
              className="text-[clamp(16px,2vw,20px)] text-slate-500 max-w-xl leading-relaxed mb-10">
              Viaje, delivery, compra, farmacia. Pappedir es la app venezolana que le da vueltas a Ridery y YummyRides — hecha pa' el llanero, no pa' Caracas.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-3 mb-16">
              <button className="group flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#1A6EFF] text-white text-base font-bold glow-blue hover:bg-[#1558d6] transition-all active:scale-95">
                <Smartphone size={18} />
                Solicitar ahora
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 text-base font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all card-shadow">
                Cómo funciona
                <ChevronRight size={16} className="text-slate-400" />
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {[
                { val: "6+", sub: "Servicios en un solo lugar" },
                { val: "24/7", sub: "Siempre disponible" },
                { val: "4 min", sub: "Tiempo promedio de llegada" },
                { val: "5 ★", sub: "Rating de usuarios" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-extrabold text-slate-900">{s.val}</p>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium">{s.sub}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="relative z-10 mt-16 px-6 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400/20 blur-[80px] scale-75 rounded-full" />
            <img src={appMockupImg} alt="App Pappedir" className="relative z-10 w-[260px] md:w-[300px] drop-shadow-[0_40px_80px_rgba(26,110,255,0.2)]" />

            {/* Floating cards */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-16 md:-left-20 z-20 bg-white rounded-2xl p-3.5 card-shadow flex items-center gap-3 min-w-[200px]">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Car size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-slate-800 text-[13px] font-bold">Conductor en camino</p>
                <p className="text-slate-400 text-[11px] mt-0.5">Llega en ≈ 4 min · GPS activo</p>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute -right-2 bottom-28 md:-right-16 z-20 bg-white rounded-2xl p-3.5 card-shadow flex items-center gap-3 min-w-[175px]">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                <DollarSign size={18} className="text-emerald-500" />
              </div>
              <div>
                <p className="text-slate-800 text-[13px] font-bold">Tarifa confirmada</p>
                <p className="text-slate-400 text-[11px] mt-0.5">Sin sorpresas al llegar</p>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              className="absolute -left-2 bottom-24 md:-left-14 z-20 bg-white rounded-xl px-3.5 py-2.5 card-shadow flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 text-[12px] font-semibold">Chévere, pana!</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Payments strip */}
        <div className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-2.5 px-6">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1">Aceptamos</span>
          {PAYMENT_METHODS.map((m) => (
            <span key={m} className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[12px] font-semibold card-shadow">
              {m}
            </span>
          ))}
        </div>
      </section>

      {/* ── SERVICES BENTO ────────────────────────────────── */}
      <section id="servicios" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <InView className="mb-14">
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-4">Todo en uno</span>
              <h2 className="font-serif text-[clamp(32px,5vw,56px)] text-slate-900 leading-tight mb-4">
                6 servicios, <span className="italic text-gradient">una sola app</span>
              </h2>
              <p className="text-slate-500 max-w-md text-base leading-relaxed">
                Transporte, comida, farmacia, compras, mototaxi y envíos. Tan fácil como abrir Pappedir.
              </p>
            </motion.div>
          </InView>

          <InView>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                const isBig = i === 0 || i === 5;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.18 }}
                    className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${s.color} p-6 md:p-8 cursor-pointer border border-white/80 card-shadow hover:card-shadow-hover transition-all ${isBig ? "md:col-span-1 row-span-1" : ""}`}
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-white/70 border border-white/90 flex items-center justify-center ${s.accent} mb-4 group-hover:scale-105 transition-transform`}>
                      <Icon size={22} />
                    </div>
                    <p className="font-bold text-slate-800 text-lg">{s.label}</p>
                    <div className={`absolute bottom-4 right-4 w-2.5 h-2.5 rounded-full ${s.dot} opacity-50`} />
                    <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-white/20 group-hover:scale-110 transition-transform duration-500" />
                  </motion.div>
                );
              })}
            </div>
          </InView>
        </div>
      </section>

      {/* ── SAFETY BENTO ──────────────────────────────────── */}
      <section id="seguridad" className="py-28 bg-[#F7F9FF]">
        <div className="max-w-6xl mx-auto px-6">
          <InView className="mb-14">
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-4">Tu seguridad primero</span>
              <h2 className="font-serif text-[clamp(32px,5vw,56px)] text-slate-900 leading-tight">
                Viaja con <span className="italic text-gradient">total confianza</span>
              </h2>
            </motion.div>
          </InView>

          {/* Bento grid */}
          <InView>
            <div className="grid md:grid-cols-3 gap-4 auto-rows-auto">

              {/* Big card */}
              <motion.div variants={fadeUp}
                className="md:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A6EFF] to-[#0040CC] p-8 md:p-10 text-white card-shadow">
                <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-white/5" />
                <div className="absolute -bottom-16 -right-8 w-48 h-48 rounded-full bg-white/[0.04]" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-6">
                    <UserCheck size={26} />
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl mb-3 leading-tight">
                    Conductores<br />verificados
                  </h3>
                  <p className="text-blue-100 text-base leading-relaxed max-w-sm">
                    Cédula, documentos del vehículo y antecedentes revisados manualmente. Cero improvisación. Cero riesgo.
                  </p>
                  <div className="flex gap-8 mt-8 pt-8 border-t border-white/15">
                    <div>
                      <p className="text-3xl font-extrabold">100%</p>
                      <p className="text-blue-200 text-xs mt-1">Verificados</p>
                    </div>
                    <div>
                      <p className="text-3xl font-extrabold">GPS</p>
                      <p className="text-blue-200 text-xs mt-1">Rastreo en vivo</p>
                    </div>
                    <div>
                      <p className="text-3xl font-extrabold">24/7</p>
                      <p className="text-blue-200 text-xs mt-1">Soporte activo</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stack of 2 small */}
              <div className="flex flex-col gap-4">
                {[
                  { icon: Navigation, label: "GPS en vivo", desc: "Tu familia sabe dónde estás en cada momento del viaje.", bg: "bg-white" },
                  { icon: DollarSign, label: "Precio fijo previo", desc: "Confirmas la tarifa antes de arrancar. Sin cuentas raras.", bg: "bg-slate-900 text-white" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  const dark = item.bg.includes("slate-900");
                  return (
                    <motion.div key={i} variants={fadeUp}
                      className={`flex-1 rounded-3xl p-6 card-shadow ${item.bg} border ${dark ? "border-slate-700" : "border-black/[0.05]"}`}>
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${dark ? "bg-white/10 text-white" : "bg-blue-50 text-blue-600"}`}>
                        <Icon size={20} />
                      </div>
                      <p className={`font-bold text-base mb-1.5 ${dark ? "text-white" : "text-slate-800"}`}>{item.label}</p>
                      <p className={`text-sm leading-relaxed ${dark ? "text-slate-400" : "text-slate-500"}`}>{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom row */}
              {[
                { icon: Shield, label: "Respaldo garantizado", desc: "Cada viaje registrado. Si algo pasa, el equipo de Pappedir te respalda." },
                { icon: Lock, label: "Datos protegidos", desc: "Tu información personal y tus pagos siempre seguros y cifrados." },
                { icon: TrendingUp, label: "Mejoramos cada día", desc: "Escuchamos a usuarios y conductores para mejorar la app cada semana." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} variants={fadeUp}
                    className="rounded-3xl bg-white border border-black/[0.05] p-6 card-shadow hover:card-shadow-hover transition-all group">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon size={20} />
                    </div>
                    <p className="font-bold text-slate-800 text-base mb-1.5">{item.label}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </InView>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section id="como-funciona" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <InView className="mb-16">
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-4">Sin complicaciones</span>
              <h2 className="font-serif text-[clamp(32px,5vw,56px)] text-slate-900 leading-tight mb-4">
                Tan fácil como <span className="italic text-gradient">1, 2, 3</span>
              </h2>
              <p className="text-slate-500 max-w-md">Ni tutorial ni instrucciones. Si puedes abrir WhatsApp, puedes usar Pappedir.</p>
            </motion.div>
          </InView>

          <InView>
            <div className="grid md:grid-cols-3 gap-6">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div key={i} variants={fadeUp}
                    className="relative flex flex-col p-8 rounded-3xl bg-white border border-black/[0.05] card-shadow hover:card-shadow-hover transition-all group">
                    <div className="absolute top-6 right-6 font-extrabold text-[64px] leading-none text-blue-50 select-none group-hover:text-blue-100 transition-colors">
                      {step.n}
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-[#1A6EFF] text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
                        <Icon size={24} />
                      </div>
                      <h3 className="font-bold text-xl text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-slate-200 card-shadow flex items-center justify-center text-slate-400">
                        <ArrowRight size={14} />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </InView>
        </div>
      </section>

      {/* ── WHY PAPPEDIR ──────────────────────────────────── */}
      <section className="py-28 bg-[#F7F9FF]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <InView>
              <motion.div variants={fadeUp}>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-4 block">Nuestra diferencia</span>
                <h2 className="font-serif text-[clamp(32px,5vw,52px)] text-slate-900 leading-tight mb-5">
                  No somos una copia.<br />
                  <span className="italic text-gradient">Somos venezolanos.</span>
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Operamos en Guanare, Acarigua, Araure y más municipios de Portuguesa. Sabemos cómo es el día a día aquí porque vivimos el mismo.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "Una sola app para todo — viaje, delivery, farmacia, envíos",
                    "Cobertura real en el estado Portuguesa",
                    "Pago móvil, Zelle, efectivo y transferencia",
                    "Conductores locales que conocen las calles",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </InView>

            {/* Comparison */}
            <InView>
              <motion.div variants={fadeUp} className="bg-white rounded-3xl overflow-hidden card-shadow border border-black/[0.05]">
                <div className="grid grid-cols-3 border-b border-slate-100">
                  <div className="col-span-1 p-4" />
                  <div className="p-4 text-center border-l border-slate-100">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Pappedir</p>
                  </div>
                  <div className="p-4 text-center border-l border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Los demás</p>
                  </div>
                </div>

                {[
                  ["Transporte privado", true, true],
                  ["Mototaxi", true, false],
                  ["Delivery de comida", true, true],
                  ["Farmacia a domicilio", true, false],
                  ["Envíos/encomiendas", true, false],
                  ["Cobertura en Portuguesa", true, false],
                  ["Pago Móvil / Zelle", true, false],
                ].map(([feat, us, them], i) => (
                  <div key={i} className={`grid grid-cols-3 ${i < 6 ? "border-b border-slate-100" : ""}`}>
                    <div className="p-3.5 pl-4">
                      <p className="text-slate-600 text-[13px] font-medium">{feat as string}</p>
                    </div>
                    <div className="p-3.5 flex items-center justify-center border-l border-slate-100 bg-blue-50/40">
                      {us ? <CheckCircle2 size={18} className="text-blue-600" strokeWidth={2.5} /> : <X size={16} className="text-slate-300" />}
                    </div>
                    <div className="p-3.5 flex items-center justify-center border-l border-slate-100">
                      {them ? <CheckCircle2 size={18} className="text-slate-300" strokeWidth={2.5} /> : <X size={16} className="text-red-300" strokeWidth={2.5} />}
                    </div>
                  </div>
                ))}
              </motion.div>
            </InView>
          </div>
        </div>
      </section>

      {/* ── CONDUCTORES ───────────────────────────────────── */}
      <section id="conductores" className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-10 md:p-16">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-600/8 blur-[80px] rounded-full" />
              <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <InView>
                <motion.div variants={fadeUp}>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                    <Sparkles size={12} /> Únete al equipo
                  </span>
                  <h2 className="font-serif text-[clamp(32px,4vw,52px)] text-white leading-tight mb-4">
                    Genera ingresos<br />
                    <span className="italic text-gradient">a tu ritmo</span>
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    ¿Tienes carro o moto? Regístrate como conductor aliado. Tú decides cuándo trabajas — los pagos llegan siempre a tiempo.
                  </p>
                  <div className="flex flex-col gap-3 mb-8">
                    {["Registro rápido en minutos","Pagos semanales garantizados","Soporte 24/7 por WhatsApp","Tú decides tus horarios"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={11} className="text-blue-400" strokeWidth={3} />
                        </div>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#1A6EFF] text-white font-bold text-sm glow-blue hover:bg-[#1558d6] transition-all active:scale-95">
                    Registrarme como conductor
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </InView>

              <InView>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "2+", sub: "Meses activos" },
                    { val: "5 ★", sub: "Rating promedio" },
                    { val: "24/7", sub: "Soporte disponible" },
                    { val: "100%", sub: "Pagos a tiempo" },
                  ].map((s, i) => (
                    <motion.div key={i} variants={fadeUp}
                      className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <p className="font-extrabold text-4xl text-white mb-1">{s.val}</p>
                      <p className="text-slate-500 text-xs">{s.sub}</p>
                    </motion.div>
                  ))}
                </div>
              </InView>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="py-28 bg-[#F7F9FF]">
        <div className="max-w-6xl mx-auto px-6">
          <InView className="mb-14">
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-4">Testimonios</span>
              <h2 className="font-serif text-[clamp(32px,5vw,52px)] text-slate-900 leading-tight">
                La gente <span className="italic text-gradient">habla por nosotros</span>
              </h2>
            </motion.div>
          </InView>

          <InView>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {TESTIMONIALS.map((t, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="flex flex-col bg-white rounded-3xl p-6 card-shadow border border-black/[0.04] hover:card-shadow-hover transition-all">
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(t.stars)].map((_, j) => <Star key={j} size={13} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-slate-800 font-bold text-[13px]">{t.name}</p>
                      <p className="text-slate-400 text-[11px]">{t.role} · {t.city}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </InView>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <InView>
            <motion.div variants={fadeUp}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A6EFF] via-[#1050E0] to-[#003BB5] p-12 md:p-20 text-center">
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/5 blur-[80px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
              </div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-8">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  Disponible ahora en Portuguesa
                </span>
                <h2 className="font-serif text-[clamp(36px,6vw,72px)] text-white leading-tight mb-5">
                  ¿Listo, chamo?<br />
                  <span className="italic opacity-80">Descarga Pappedir.</span>
                </h2>
                <p className="text-blue-200 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                  Gratis, fácil y hecha pa' Venezuela. Únete a los que ya la tienen.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-[#1A6EFF] font-bold text-base hover:bg-blue-50 transition-all active:scale-95 shadow-xl shadow-black/20">
                    <Smartphone size={18} />
                    Descargar en Android
                  </button>
                  <button className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 border border-white/25 text-white font-semibold text-base hover:bg-white/15 transition-all">
                    <Phone size={18} />
                    WhatsApp Soporte
                  </button>
                </div>
              </div>
            </motion.div>
          </InView>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <img src="/logo.png" alt="Pappedir" className="h-8 w-auto object-contain mb-4" />
              <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
                La app venezolana de transporte y delivery para el estado Portuguesa. Hecha por venezolanos, para venezolanos.
              </p>
              <div className="flex gap-2 mt-5">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a key={i} href="#"
                    className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-4">Servicios</p>
              <div className="flex flex-col gap-2.5">
                {["Transporte privado","Mototaxi","Delivery de comida","Farmacia","Envíos"].map((l) => (
                  <a key={l} href="#servicios" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-4">Contacto</p>
              <div className="flex flex-col gap-2.5">
                <p className="text-slate-500 text-sm flex items-start gap-2">
                  <MapPin size={13} className="text-blue-400 mt-0.5 shrink-0" />
                  Guanare, Portuguesa<br />Venezuela
                </p>
                <a href="#" className="text-slate-500 hover:text-blue-600 text-sm flex items-center gap-2 transition-colors">
                  <Phone size={13} className="text-blue-400" />
                  Soporte por WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-slate-400 text-xs">© {new Date().getFullYear()} Pappedir · Hecho con orgullo en Venezuela</p>
            <div className="flex gap-5">
              {["Privacidad","Términos","Soporte"].map((l) => (
                <a key={l} href="#" className="text-slate-400 hover:text-slate-700 text-xs transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
