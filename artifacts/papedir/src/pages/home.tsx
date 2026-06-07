import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Bike,
  ShoppingBag,
  MapPin,
  Star,
  Menu,
  X,
  Clock,
  Package,
  Pill,
  Car,
  CheckCircle2,
  Smartphone,
  Send,
  Shield,
  DollarSign,
  Navigation,
  UserCheck,
  Zap,
  ArrowRight,
  ChevronDown,
  Phone,
  Instagram,
  Twitter,
  Facebook,
  Flame,
} from "lucide-react";
import appMockupImg from "@/assets/images/app-mockup.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.11 } },
};

function Section({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={STAGGER}
      className={className}
    >
      {children}
    </motion.section>
  );
}

const SERVICES = [
  { icon: <Car size={28} />, label: "Transporte", sub: "Carro o mototaxi" },
  { icon: <Bike size={28} />, label: "Mototaxi", sub: "Rápido y económico" },
  { icon: <ShoppingBag size={28} />, label: "Comida", sub: "Tus locales favoritos" },
  { icon: <Package size={28} />, label: "Compras", sub: "Sin salir de casa" },
  { icon: <Pill size={28} />, label: "Farmacia", sub: "Medicamentos al instante" },
  { icon: <Send size={28} />, label: "Envíos", sub: "Encomiendas rápidas" },
];

const RIDE_FEATURES = [
  {
    icon: <UserCheck size={22} />,
    title: "Conductores verificados",
    desc: "Cada aliado pasa por verificación de cédula, documentos del vehículo e identidad. Sin improvisar.",
  },
  {
    icon: <Navigation size={22} />,
    title: "Rastreo en vivo",
    desc: "Tú y tu familia saben exactamente dónde estás durante el viaje. Seguridad real, no de papel.",
  },
  {
    icon: <DollarSign size={22} />,
    title: "Tarifa estimada antes de arrancar",
    desc: "Ves el costo antes de confirmar. Sin sorpresas al llegar. Sin cuentas raras al final del viaje.",
  },
  {
    icon: <Shield size={22} />,
    title: "Respaldo en todo momento",
    desc: "Cada viaje queda registrado. Si algo pasa, nuestro equipo te respalda. No estás solo, pana.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: <Smartphone size={30} />,
    title: "Solicita lo que necesitas",
    desc: "Viaje, delivery, compras, farmacia… Todo desde Pappedir. Una sola app, sin rollos.",
  },
  {
    step: "02",
    icon: <Flame size={30} />,
    title: "Un aliado lo acepta al tiro",
    desc: "El conductor o repartidor más cerca recibe tu solicitud y arranca de una. Sin demoras.",
  },
  {
    step: "03",
    icon: <CheckCircle2 size={30} />,
    title: "Llegamos donde tú estás",
    desc: "Sigue todo en vivo. Tu pedido o tu viaje llega con seguridad y a tiempo. Así de chévere.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: <Zap size={22} />,
    title: "Transporte y delivery en una sola app",
    desc: "No necesitas tres apps distintas. Con Pappedir pides tu viaje, tu almuerzo, tu medicina y tus compras. Todo junto, todo fácil.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Hecha para el llanero, no para Caracas",
    desc: "Operamos en Guanare, Acarigua, Araure y más municipios del estado Portuguesa. Sabemos cómo es el día a día aquí.",
  },
  {
    icon: <DollarSign size={22} />,
    title: "Paga como te dé la gana",
    desc: "Pago móvil, Zelle, efectivo, transferencia. No te complicamos la vida. Si puedes pagar, nosotros recibimos.",
  },
];

const TESTIMONIALS = [
  {
    name: "Roberto M.",
    city: "Guanare",
    role: "Usuario",
    stars: 5,
    text: "Antes usaba dos apps diferentes para mis viajes y delivery. Con Pappedir tengo todo en una sola. El conductor llegó en menos de 5 minutos. ¡Bacano todo!",
  },
  {
    name: "Valentina C.",
    city: "Acarigua",
    role: "Usuaria",
    stars: 5,
    text: "Pedí un viaje para ir al médico y me sentí súper segura. Mi mamá pudo ver mi ubicación en todo momento. Muy puntual y el conductor fue muy educado.",
  },
  {
    name: "José D.",
    city: "Araure",
    role: "Aliado conductor",
    stars: 5,
    text: "Llevo dos meses como conductor aliado y la plataforma es seria. Los pagos son puntuales y el soporte responde rápido. Recomendada al 100%, chamo.",
  },
];

const PAYMENT_METHODS = [
  "Pago Móvil",
  "Zelle",
  "Efectivo",
  "Transferencia",
  "Divisas",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const logoSvg = (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
      <rect width="40" height="40" rx="11" fill="#1A6EFF" />
      <path d="M10 11a3 3 0 0 1 3-3h5.5a5.5 5.5 0 0 1 0 11H13v7h-3V11z" fill="white" />
      <rect x="19.5" y="14" width="10" height="7.5" rx="3.75" fill="white" opacity="0.72" />
      <circle cx="29.5" cy="25.5" r="2.5" fill="white" opacity="0.45" />
    </svg>
  );

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background overflow-hidden dark">

      {/* ── NAVBAR ───────────────────────────────────────────── */}
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-2xl border-b border-white/[0.07]">
        <div className="container mx-auto px-6 h-[68px] flex items-center justify-between">

          <a href="#" className="flex items-center gap-3 shrink-0">
            {logoSvg}
            <span className="font-display font-bold text-[22px] tracking-tight text-white">
              Pappedir
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {[
              ["#servicios", "Servicios"],
              ["#viaja-seguro", "Viaja seguro"],
              ["#como-funciona", "Cómo funciona"],
              ["#conductores", "Conductores"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-white/55 hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              className="rounded-full font-semibold px-6 bg-primary text-white hover:bg-primary/90 shadow-[0_0_32px_-6px_rgba(26,110,255,0.65)] transition-all"
            >
              Descargar App
            </Button>
          </div>

          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="md:hidden overflow-hidden bg-card border-t border-white/[0.07]"
            >
              <div className="container mx-auto px-6 py-5 flex flex-col gap-3">
                {[
                  ["#servicios", "Servicios"],
                  ["#viaja-seguro", "Viaja seguro"],
                  ["#como-funciona", "Cómo funciona"],
                  ["#conductores", "Conductores"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white/60 hover:text-white font-medium py-2 transition-colors border-b border-white/[0.06] last:border-0"
                  >
                    {label}
                  </a>
                ))}
                <Button className="rounded-full mt-2 bg-primary text-white font-semibold">
                  Descargar App
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">

          {/* Background glows */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/4 right-1/5 w-[700px] h-[600px] bg-primary/14 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[350px] bg-primary/8 blur-[120px] rounded-full" />
            <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-blue-500/6 blur-[100px] rounded-full" />
          </div>

          <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-24">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="max-w-2xl"
            >
              {/* Location badge */}
              <motion.div
                variants={FADE_UP}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary tracking-wide">
                  Disponible en el estado Portuguesa
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={FADE_UP}
                className="font-display text-5xl md:text-[64px] lg:text-7xl font-bold leading-[1.03] text-white mb-6"
              >
                Tu viaje.<br />
                Tu pedido.<br />
                <span className="relative">
                  <span className="text-primary">Una sola app.</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary/40 rounded-full origin-left"
                  />
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={FADE_UP}
                className="text-lg md:text-xl text-white/55 mb-5 leading-relaxed"
              >
                Pappedir es la app venezolana de transporte y delivery hecha pa' Portuguesa. Pide tu viaje, tu almuerzo, tus medicamentos y más — todo desde el teléfono.
              </motion.p>

              {/* Competitor callout */}
              <motion.div
                variants={FADE_UP}
                className="flex items-center gap-2 text-sm text-primary/75 font-semibold mb-10"
              >
                <Zap size={14} className="shrink-0" />
                <span>La alternativa local a Ridery y YummyRides que hace todo lo que ellos no hacen.</span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={FADE_UP}
                className="flex flex-col sm:flex-row gap-3 mb-14"
              >
                <Button
                  size="lg"
                  className="rounded-full h-[52px] px-9 text-base font-bold bg-primary text-white hover:bg-primary/90 shadow-[0_0_50px_-8px_rgba(26,110,255,0.7)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Solicitar viaje ahora
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-[52px] px-9 text-base font-semibold border-white/15 text-white hover:bg-white/[0.07] bg-white/[0.04] transition-all"
                >
                  Unirme como conductor
                </Button>
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={FADE_UP}
                className="flex gap-8 border-t border-white/[0.08] pt-8"
              >
                {[
                  { value: "6+", label: "Servicios en app" },
                  { value: "24/7", label: "Disponible siempre" },
                  { value: "5★", label: "Valoración usuarios" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="font-display text-[26px] font-bold text-white">{s.value}</p>
                    <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* App mockup + floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.25, type: "spring", bounce: 0.18 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="absolute inset-0 bg-primary/10 blur-[90px] rounded-full scale-75 translate-y-8" />

              <img
                src={appMockupImg}
                alt="App Pappedir"
                className="relative z-10 w-full max-w-[320px] drop-shadow-2xl"
              />

              {/* Floating — Conductor en camino */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -left-12 z-20 bg-card/95 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[220px]"
              >
                <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <Car size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">Conductor en camino</p>
                  <p className="text-white/45 text-xs mt-0.5">Llega en aprox. 4 min</p>
                </div>
              </motion.div>

              {/* Floating — Tarifa */}
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-20 -right-8 z-20 bg-card/95 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[185px]"
              >
                <div className="w-11 h-11 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                  <DollarSign size={20} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">Tarifa estimada</p>
                  <p className="text-white/45 text-xs mt-0.5">Confirmada al pedir</p>
                </div>
              </motion.div>

              {/* Floating — Rating */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                className="absolute bottom-44 -left-6 z-20 bg-card/95 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2"
              >
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                </div>
                <p className="text-white/70 text-xs font-medium">Chévere, pana!</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          >
            <span className="text-white/25 text-xs font-medium tracking-widest uppercase">Descubre más</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <ChevronDown size={18} className="text-white/25" />
            </motion.div>
          </motion.div>
        </section>

        {/* ── SERVICE STRIP ───────────────────────────────────── */}
        <Section id="servicios" className="py-24 border-y border-white/[0.07] bg-card/30">
          <div className="container mx-auto px-6">
            <motion.div variants={FADE_UP} className="text-center mb-14">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Lo que ofrecemos</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                Todo lo que necesitas,<br />
                <span className="text-primary">en una sola app</span>
              </h2>
            </motion.div>

            <motion.div
              variants={STAGGER}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {SERVICES.map((s, i) => (
                <motion.div
                  key={i}
                  variants={FADE_UP}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-white/[0.07] hover:border-primary/30 hover:bg-card/80 transition-all cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary/18 flex items-center justify-center text-primary transition-colors">
                    {s.icon}
                  </div>
                  <p className="font-display font-bold text-white text-sm text-center">{s.label}</p>
                  <p className="text-white/40 text-xs text-center leading-tight">{s.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ── PAYMENT METHODS STRIP ───────────────────────────── */}
        <div className="py-5 border-b border-white/[0.06] overflow-hidden bg-background">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-white/30 text-xs font-medium mr-2 shrink-0">Aceptamos:</span>
              {PAYMENT_METHODS.map((m) => (
                <span
                  key={m}
                  className="px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/60 text-xs font-semibold"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── VIAJA SEGURO ────────────────────────────────────── */}
        <Section id="viaja-seguro" className="py-28">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left: image / visual */}
              <motion.div variants={FADE_UP} className="relative">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-card border border-white/[0.07]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-900/30" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                    <div className="w-20 h-20 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                      <Shield size={36} className="text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="font-display text-3xl font-bold text-white mb-2">Viaje seguro</p>
                      <p className="text-white/50 text-sm">Cada recorrido verificado y respaldado</p>
                    </div>
                    {/* Mini safety metrics */}
                    <div className="flex gap-6 mt-2">
                      {[
                        { val: "100%", sub: "Conductores verificados" },
                        { val: "GPS", sub: "Rastreo en tiempo real" },
                      ].map((item, i) => (
                        <div key={i} className="text-center">
                          <p className="font-display text-xl font-bold text-primary">{item.val}</p>
                          <p className="text-white/40 text-xs mt-0.5">{item.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative glow */}
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/8 blur-[80px] rounded-full pointer-events-none" />
              </motion.div>

              {/* Right: features */}
              <div className="flex flex-col gap-5">
                <motion.div variants={FADE_UP}>
                  <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Seguridad primero</p>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                    Viaja con <span className="text-primary">toda la confianza</span>
                  </h2>
                  <p className="text-white/50 leading-relaxed mb-8">
                    En Pappedir no improvisamos. Cada conductor pasa por un proceso de verificación real y cada viaje queda registrado. Tu seguridad no es opcional.
                  </p>
                </motion.div>

                <div className="flex flex-col gap-4">
                  {RIDE_FEATURES.map((f, i) => (
                    <motion.div
                      key={i}
                      variants={FADE_UP}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-white/[0.07] hover:border-primary/20 transition-all group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/18 flex items-center justify-center text-primary shrink-0 transition-colors mt-0.5">
                        {f.icon}
                      </div>
                      <div>
                        <p className="font-bold text-white mb-1 text-[15px]">{f.title}</p>
                        <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ── CÓMO FUNCIONA ───────────────────────────────────── */}
        <Section id="como-funciona" className="py-28 bg-card/20 border-y border-white/[0.06]">
          <div className="container mx-auto px-6">
            <motion.div variants={FADE_UP} className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Sin complicaciones</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Así de fácil funciona
              </h2>
              <p className="text-white/45 max-w-lg mx-auto text-lg">
                Tres pasos y listo. Sin tutoriales, sin vueltas. Pappedir es tan fácil que hasta el más novato con el teléfono lo maneja.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {HOW_IT_WORKS.map((step, i) => (
                <motion.div
                  key={i}
                  variants={FADE_UP}
                  className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-card border border-white/[0.07] hover:border-primary/25 transition-all"
                >
                  {/* Step number */}
                  <div className="font-display text-6xl font-bold text-primary/10 absolute top-6 right-7 select-none leading-none">
                    {step.step}
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-primary/12 flex items-center justify-center text-primary mb-5 relative z-10">
                    {step.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-3">{step.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>

                  {/* Connector arrow (not on last) */}
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 items-center justify-center text-primary/30">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── POR QUÉ PAPPEDIR ────────────────────────────────── */}
        <Section className="py-28">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col gap-5">
                <motion.div variants={FADE_UP}>
                  <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Nuestra diferencia</p>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                    ¿Por qué elegir<br />
                    <span className="text-primary">Pappedir?</span>
                  </h2>
                  <p className="text-white/50 leading-relaxed">
                    No somos una copia. Somos una app construida por venezolanos que entienden cómo funciona el día a día en Portuguesa.
                  </p>
                </motion.div>

                <div className="flex flex-col gap-4 mt-2">
                  {DIFFERENTIATORS.map((d, i) => (
                    <motion.div
                      key={i}
                      variants={FADE_UP}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-white/[0.07] hover:border-primary/25 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary/18 flex items-center justify-center text-primary shrink-0 mt-0.5 transition-colors">
                        {d.icon}
                      </div>
                      <div>
                        <p className="font-bold text-white mb-1">{d.title}</p>
                        <p className="text-white/45 text-sm leading-relaxed">{d.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: visual comparison */}
              <motion.div variants={FADE_UP} className="relative">
                <div className="rounded-3xl overflow-hidden bg-card border border-white/[0.07] p-8">
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-6">Pappedir vs. el resto</p>

                  <div className="flex flex-col gap-4">
                    {[
                      { feature: "Transporte privado", us: true, them: true },
                      { feature: "Mototaxi", us: true, them: false },
                      { feature: "Delivery de comida", us: true, them: true },
                      { feature: "Delivery de farmacia", us: true, them: false },
                      { feature: "Envíos/encomiendas", us: true, them: false },
                      { feature: "Cobertura en Portuguesa", us: true, them: false },
                      { feature: "Pago móvil / Zelle", us: true, them: false },
                    ].map((row, i) => (
                      <div key={i} className="flex items-center">
                        <p className="text-white/60 text-sm flex-1">{row.feature}</p>
                        <div className="flex gap-8 shrink-0">
                          <div className="w-20 flex items-center justify-center">
                            {row.us ? (
                              <CheckCircle2 size={18} className="text-primary" />
                            ) : (
                              <X size={18} className="text-white/20" />
                            )}
                          </div>
                          <div className="w-20 flex items-center justify-center">
                            {row.them ? (
                              <CheckCircle2 size={18} className="text-white/25" />
                            ) : (
                              <X size={18} className="text-red-500/50" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center mt-6 border-t border-white/[0.06] pt-5">
                    <div className="flex-1" />
                    <div className="flex gap-8 shrink-0">
                      <div className="w-20 text-center">
                        <p className="font-display font-bold text-primary text-sm">Pappedir</p>
                      </div>
                      <div className="w-20 text-center">
                        <p className="text-white/30 text-sm">Los demás</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* ── CONDUCTORES ─────────────────────────────────────── */}
        <Section id="conductores" className="py-28 bg-card/20 border-y border-white/[0.06]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <motion.div variants={FADE_UP}>
                  <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Únete al equipo</p>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
                    Genera ingresos<br />
                    <span className="text-primary">a tu propio ritmo</span>
                  </h2>
                  <p className="text-white/50 leading-relaxed mb-8">
                    ¿Tienes carro o moto? Únete a la familia Pappedir como conductor aliado. Tú decides cuándo trabajas, cuánto trabajas. Los pagos son puntuales y el soporte siempre está disponible.
                  </p>

                  <div className="flex flex-col gap-3 mb-8">
                    {[
                      "Registra tu vehículo en minutos",
                      "Pagos semanales garantizados",
                      "Soporte 24/7 por WhatsApp",
                      "Tú decides tus horarios",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/65 text-sm">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="rounded-full h-[52px] px-9 text-base font-bold bg-primary text-white hover:bg-primary/90 shadow-[0_0_44px_-8px_rgba(26,110,255,0.6)] transition-all hover:scale-[1.02]"
                  >
                    Registrarme como conductor
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </motion.div>

                <motion.div variants={FADE_UP} className="grid grid-cols-2 gap-4">
                  {[
                    { val: "2+", sub: "Meses de operación" },
                    { val: "5★", sub: "Rating promedio" },
                    { val: "24/7", sub: "Soporte disponible" },
                    { val: "100%", sub: "Pagos a tiempo" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-white/[0.07] text-center"
                    >
                      <p className="font-display text-4xl font-bold text-primary mb-1">{stat.val}</p>
                      <p className="text-white/45 text-xs">{stat.sub}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </Section>

        {/* ── TESTIMONIALS ────────────────────────────────────── */}
        <Section className="py-28">
          <div className="container mx-auto px-6">
            <motion.div variants={FADE_UP} className="text-center mb-14">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Lo que dicen nuestros usuarios</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                La gente <span className="text-primary">habla por nosotros</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  variants={FADE_UP}
                  className="flex flex-col p-7 rounded-3xl bg-card border border-white/[0.07] hover:border-primary/20 transition-all"
                >
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                  <div className="flex items-center gap-3 border-t border-white/[0.06] pt-5">
                    <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-sm font-display">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-white/35 text-xs">{t.role} · {t.city}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── CTA FINAL ───────────────────────────────────────── */}
        <Section className="py-32">
          <div className="container mx-auto px-6">
            <motion.div
              variants={FADE_UP}
              className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-900/20 to-background pointer-events-none" />
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/15 blur-[100px] rounded-full" />

              <div className="relative z-10 p-12 md:p-16 border border-primary/20 rounded-3xl text-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-semibold mb-8">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Disponible ahora en Portuguesa
                </span>

                <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-5">
                  ¿Listo, chamo?<br />
                  <span className="text-primary">Descarga Pappedir</span>
                </h2>
                <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">
                  Únete a los miles de venezolanos que ya disfrutan transporte y delivery en una sola app. Gratis, fácil y hecha pa' ti.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="rounded-full h-[54px] px-10 text-base font-bold bg-primary text-white hover:bg-primary/90 shadow-[0_0_60px_-8px_rgba(26,110,255,0.7)] transition-all hover:scale-[1.02]"
                  >
                    <Smartphone size={18} className="mr-2" />
                    Descargar en Android
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-[54px] px-10 text-base font-semibold border-white/15 text-white hover:bg-white/[0.07] bg-white/[0.04]"
                  >
                    <Phone size={18} className="mr-2" />
                    Contáctanos por WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.07] bg-card/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">

            {/* Brand */}
            <div>
              <a href="#" className="flex items-center gap-2.5 mb-4">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <rect width="40" height="40" rx="11" fill="#1A6EFF" />
                  <path d="M10 11a3 3 0 0 1 3-3h5.5a5.5 5.5 0 0 1 0 11H13v7h-3V11z" fill="white" />
                  <rect x="19.5" y="14" width="10" height="7.5" rx="3.75" fill="white" opacity="0.72" />
                  <circle cx="29.5" cy="25.5" r="2.5" fill="white" opacity="0.45" />
                </svg>
                <span className="font-display font-bold text-white text-lg">Pappedir</span>
              </a>
              <p className="text-white/35 text-sm leading-relaxed max-w-[240px]">
                La app venezolana de transporte y delivery para el estado Portuguesa.
              </p>
              <div className="flex gap-3 mt-5">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">Servicios</p>
              <div className="flex flex-col gap-2.5">
                {["Transporte privado", "Mototaxi", "Delivery de comida", "Farmacia", "Envíos"].map((l) => (
                  <a key={l} href="#servicios" className="text-white/40 hover:text-white text-sm transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">Contacto</p>
              <div className="flex flex-col gap-2.5">
                <p className="text-white/40 text-sm flex items-center gap-2">
                  <MapPin size={13} className="text-primary/60" />
                  Guanare, Portuguesa — Venezuela
                </p>
                <a href="tel:+58" className="text-white/40 hover:text-white text-sm flex items-center gap-2 transition-colors">
                  <Phone size={13} className="text-primary/60" />
                  WhatsApp Soporte
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/25 text-xs">
              © {new Date().getFullYear()} Pappedir. Hecho con orgullo en Venezuela.
            </p>
            <div className="flex gap-5">
              {["Privacidad", "Términos", "Soporte"].map((l) => (
                <a key={l} href="#" className="text-white/25 hover:text-white/60 text-xs transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
