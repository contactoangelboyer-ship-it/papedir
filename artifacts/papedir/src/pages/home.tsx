import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Bike,
  ShoppingBag,
  MapPin,
  Star,
  ChevronRight,
  Menu,
  X,
  Clock,
  Package,
  Pill,
  Car,
  CheckCircle2,
  Smartphone,
  Send,
  MessageCircle,
  Shield,
  DollarSign,
  Navigation,
  UserCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import brandImg from "@assets/d39d6d45-b36f-4ac7-8e64-b212c78abbca_1780799808515.png";
import appMockupImg from "@/assets/images/app-mockup.png";
import foodImg from "@/assets/images/venezuelan-food.png";
import motoImg from "@/assets/images/moto-delivery.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13 } },
};

/* ─── Service strip (transport first) ─────────────────────────────────── */
const SERVICES = [
  { icon: <Car size={26} />,        label: "Transporte" },
  { icon: <Bike size={26} />,       label: "Mototaxi"   },
  { icon: <ShoppingBag size={26} />, label: "Comida"    },
  { icon: <Package size={26} />,    label: "Compras"    },
  { icon: <Pill size={26} />,       label: "Farmacia"   },
  { icon: <Send size={26} />,       label: "Envíos"     },
];

/* ─── Ride safety features ─────────────────────────────────────────────── */
const RIDE_FEATURES = [
  {
    icon: <UserCheck size={22} />,
    title: "Conductores verificados",
    desc: "Todos nuestros aliados pasan por un proceso de verificación de documentos e identidad.",
  },
  {
    icon: <Navigation size={22} />,
    title: "Rastreo en tiempo real",
    desc: "Sigue cada viaje en vivo. Tu familia puede ver exactamente dónde vas en todo momento.",
  },
  {
    icon: <DollarSign size={22} />,
    title: "Tarifa estimada antes de confirmar",
    desc: "Conoce el costo aproximado de tu viaje antes de solicitarlo. Sin sorpresas al llegar.",
  },
  {
    icon: <Shield size={22} />,
    title: "Viajes seguros y respaldados",
    desc: "Cada viaje queda registrado. Ante cualquier inconveniente, nuestro equipo te respalda.",
  },
];

/* ─── How it works ─────────────────────────────────────────────────────── */
const HOW_IT_WORKS = [
  {
    step: "01",
    icon: <Smartphone size={28} />,
    title: "Solicita tu servicio",
    desc: "Elige si necesitas un viaje, un delivery, compras u otro servicio. Todo desde la misma app.",
  },
  {
    step: "02",
    icon: <Clock size={28} />,
    title: "Un aliado acepta en segundos",
    desc: "El conductor o repartidor más cercano recibe tu solicitud y se pone en marcha de inmediato.",
  },
  {
    step: "03",
    icon: <CheckCircle2 size={28} />,
    title: "Llega donde estés",
    desc: "Rastrea tu viaje o pedido en vivo y recíbelo con total comodidad y seguridad.",
  },
];

/* ─── Why Pa'pedir vs competitors ──────────────────────────────────────── */
const DIFFERENTIATORS = [
  {
    icon: <Zap size={20} />,
    title: "Transporte + delivery en una sola app",
    desc: "No necesitas tres aplicaciones distintas. Pa'pedir reúne todo: viajes, comida, farmacia, compras y más.",
  },
  {
    icon: <MapPin size={20} />,
    title: "Cobertura real en Portuguesa",
    desc: "Operamos en Guanare, Acarigua, Araure y más municipios. Pensado para el llanero, no para Caracas.",
  },
  {
    icon: <DollarSign size={20} />,
    title: "Múltiples métodos de pago",
    desc: "Pago móvil, Zelle, efectivo o transferencia. Nos adaptamos a como tú puedas pagar.",
  },
];

/* ─── Testimonials ─────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: "Roberto M.",
    city: "Guanare",
    role: "Usuario",
    text: "Antes usaba otra app para los viajes, pero Pa'pedir me da el transporte y el delivery en una sola. Es más cómodo y el conductor llegó en minutos.",
  },
  {
    name: "Valentina C.",
    city: "Acarigua",
    role: "Usuaria",
    text: "Pedí un viaje para ir al médico y fue muy seguro. Pude compartir la ubicación con mi mamá en tiempo real. Excelente servicio y muy puntual.",
  },
  {
    name: "José D.",
    city: "Araure",
    role: "Aliado conductor",
    text: "Llevo dos meses como conductor aliado y la plataforma es seria. Los pagos son puntuales y el soporte responde rápido cuando lo necesito.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background overflow-hidden dark">

      {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
      <header className="fixed top-0 w-full z-50 bg-background/92 backdrop-blur-xl border-b border-white/8">
        <div className="container mx-auto px-6 h-18 flex items-center justify-between">

          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                <rect width="36" height="36" rx="10" fill="#1A6EFF"/>
                <path d="M9 10a3 3 0 0 1 3-3h5a5 5 0 0 1 0 10h-5v6H9V10z" fill="white"/>
                <rect x="18" y="13" width="9" height="7" rx="3.5" fill="white" opacity="0.7"/>
                <circle cx="27" cy="23" r="2" fill="white" opacity="0.5"/>
              </svg>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Pa<span className="text-primary">'</span>pedir
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {[
              ["#servicios",     "Servicios"],
              ["#viaja-seguro",  "Viaja seguro"],
              ["#como-funciona", "Cómo funciona"],
              ["#conductores",   "Conductores"],
            ].map(([href, label]) => (
              <a key={href} href={href}
                className="text-sm font-medium text-white/65 hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </nav>

          <Button className="hidden md:flex rounded-full font-semibold px-6 bg-primary text-white hover:bg-primary/90 shadow-[0_0_28px_-6px_hsl(220,100%,55%,0.55)]">
            Descargar App
          </Button>

          <button className="md:hidden text-white/80" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-card border-t border-white/8"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
                {[["#servicios","Servicios"],["#viaja-seguro","Viaja seguro"],["#como-funciona","Cómo funciona"],["#conductores","Conductores"]].map(([href, label]) => (
                  <a key={href} href={href} onClick={() => setMenuOpen(false)}
                    className="text-white/65 hover:text-white font-medium py-2 transition-colors">{label}</a>
                ))}
                <Button className="rounded-full mt-2 bg-primary text-white">Descargar App</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">

        {/* ══════════════════════════════════════
            HERO — Transport-first
        ══════════════════════════════════════ */}
        <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-primary/18 blur-[130px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[350px] h-[300px] bg-primary/10 blur-[100px] rounded-full" />
          </div>

          <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
            <motion.div initial="hidden" animate="visible" variants={STAGGER} className="max-w-xl">

              {/* Badge */}
              <motion.div variants={FADE_UP}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/12 border border-primary/30 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Disponible en el estado Portuguesa</span>
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={FADE_UP}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white mb-5">
                Tu viaje.<br />Tu pedido.<br />
                <span className="text-primary">Una sola app.</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg text-white/60 mb-4 leading-relaxed">
                Pa'pedir es la plataforma venezolana de transporte privado y servicios a domicilio. Solicita tu viaje, pide comida, envía paquetes y mucho más — todo en un solo lugar.
              </motion.p>

              {/* Competitor callout */}
              <motion.p variants={FADE_UP}
                className="text-sm text-primary/80 font-medium mb-10 flex items-center gap-2">
                <Zap size={14} className="shrink-0" />
                La alternativa a Ridery y Yummy Rides que hace todo lo que ellos no pueden.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-3 mb-12">
                <Button size="lg"
                  className="rounded-full h-13 px-8 text-base font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_0_44px_-8px_hsl(220,100%,55%,0.6)]">
                  Solicitar viaje ahora
                </Button>
                <Button size="lg" variant="outline"
                  className="rounded-full h-13 px-8 text-base font-semibold border-white/20 text-white hover:bg-white/8 bg-white/5">
                  Unirme como conductor
                </Button>
              </motion.div>

              {/* Quick stats */}
              <motion.div variants={FADE_UP} className="flex gap-8 border-t border-white/8 pt-8">
                {[
                  { value: "2",      label: "Tipos de vehículo" },
                  { value: "6+",     label: "Servicios en app"  },
                  { value: "24/7",   label: "Disponibilidad"    },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="font-display text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-white/45 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* App mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, type: "spring", bounce: 0.2 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="absolute inset-0 bg-primary/12 blur-[80px] rounded-full scale-75" />
              <img src={appMockupImg} alt="App Pa'pedir" className="relative z-10 w-full max-w-sm drop-shadow-2xl" />

              {/* Floating: ride confirmed */}
              <motion.div animate={{ y: [0,-12,0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-14 -left-10 z-20 bg-card/95 backdrop-blur-sm border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3 min-w-[210px]">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Car size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Conductor en camino</p>
                  <p className="text-white/50 text-xs">Llega en approx. 4 min</p>
                </div>
              </motion.div>

              {/* Floating: fare */}
              <motion.div animate={{ y: [0,14,0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-24 -right-6 z-20 bg-card/95 backdrop-blur-sm border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3 min-w-[180px]">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <DollarSign size={18} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Tarifa estimada</p>
                  <p className="text-white/50 text-xs">Confirmada antes del viaje</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            SERVICE STRIP
        ══════════════════════════════════════ */}
        <section className="py-5 border-y border-white/8 bg-card/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {SERVICES.map((s, i) => (
                <motion.a key={i} href="#servicios"
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                  className="flex flex-col items-center gap-1.5 text-white/55 hover:text-primary transition-colors group cursor-pointer">
                  <div className="group-hover:scale-110 transition-transform">{s.icon}</div>
                  <span className="text-[11px] font-bold tracking-widest uppercase">{s.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            RIDE SAFETY — Key differentiator
        ══════════════════════════════════════ */}
        <section id="viaja-seguro" className="py-24 bg-background">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img src={motoImg} alt="Conductor Pa'pedir" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-primary/15 backdrop-blur-md border border-primary/30 p-5 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield size={16} className="text-primary" />
                    <span className="text-white font-bold text-sm">Conductor verificado</span>
                  </div>
                  <p className="text-white/65 text-xs">Documentos revisados · Rating 4.9 · 200+ viajes completados</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
            >
              <motion.p variants={FADE_UP} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Viaja seguro
              </motion.p>
              <motion.h2 variants={FADE_UP}
                className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Transporte privado con la confianza que mereces
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/60 text-lg mb-10 leading-relaxed">
                Sabemos que confiar en un desconocido para movilizarte requiere garantías reales. Por eso construimos Pa'pedir sobre una base de seguridad y transparencia.
              </motion.p>

              <div className="space-y-6">
                {RIDE_FEATURES.map((f, i) => (
                  <motion.div variants={FADE_UP} key={i} className="flex gap-4 items-start group">
                    <div className="w-11 h-11 rounded-xl bg-primary/12 border border-primary/25 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary/20 transition-colors mt-0.5">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base mb-1">{f.title}</h4>
                      <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={FADE_UP} className="mt-10">
                <Button size="lg"
                  className="rounded-full bg-primary text-white hover:bg-primary/90 px-8 shadow-[0_0_32px_-8px_hsl(220,100%,55%,0.5)] group">
                  Solicitar mi viaje
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            ALL SERVICES GRID
        ══════════════════════════════════════ */}
        <section id="servicios" className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={STAGGER}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <motion.p variants={FADE_UP} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Nuestros servicios
              </motion.p>
              <motion.h2 variants={FADE_UP} className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
                Todo lo que Ridery y Yummy<br />no pueden darte en uno solo
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/55 text-lg">
                Ellos solo hacen viajes. Pa'pedir hace viajes, delivery, compras, farmacia y más — todo en una sola app, en Portuguesa.
              </motion.p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: <Car size={28} />,
                  tag: "Transporte",
                  title: "Viajes en carro",
                  desc: "Solicita un vehículo privado para movilizarte con seguridad. Conductor verificado, tarifa estimada y rastreo en vivo.",
                  highlight: true,
                },
                {
                  icon: <Bike size={28} />,
                  tag: "Mototaxi",
                  title: "Mototaxi rápido",
                  desc: "La opción más rápida para distancias cortas. Llega a tu destino sin esperas, con conductores de confianza.",
                  highlight: true,
                },
                {
                  icon: <ShoppingBag size={28} />,
                  tag: "Comida",
                  title: "Delivery de comida",
                  desc: "Recibe tus comidas favoritas desde los mejores restaurantes y locales de Portuguesa, calientitas en tu puerta.",
                  highlight: false,
                },
                {
                  icon: <Package size={28} />,
                  tag: "Compras",
                  title: "Compras y mandados",
                  desc: "Un aliado va al mercado, tienda o local por ti y entrega todo directamente donde te encuentres.",
                  highlight: false,
                },
                {
                  icon: <Pill size={28} />,
                  tag: "Farmacia",
                  title: "Farmacia a domicilio",
                  desc: "Recibe medicamentos y productos de farmacia sin salir de casa. Servicio rápido y discreto.",
                  highlight: false,
                },
                {
                  icon: <Send size={28} />,
                  tag: "Envíos",
                  title: "Paquetería y envíos",
                  desc: "Envía documentos, encomiendas o artículos dentro de la ciudad con seguimiento en tiempo real.",
                  highlight: false,
                },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.09, duration: 0.5 }}
                  className={`group relative rounded-2xl p-7 border transition-all duration-300 overflow-hidden ${
                    s.highlight
                      ? "bg-primary/10 border-primary/35 hover:bg-primary/15 hover:border-primary/50"
                      : "bg-background border-white/8 hover:border-primary/25 hover:bg-background/80"
                  }`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/8 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {s.highlight && (
                    <span className="absolute top-4 right-4 text-[10px] font-bold text-primary/80 bg-primary/15 px-2 py-0.5 rounded-full tracking-widest uppercase">
                      Principal
                    </span>
                  )}
                  <div className={`w-13 h-13 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    s.highlight ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary group-hover:bg-primary/18"
                  }`}>
                    {s.icon}
                  </div>
                  <span className="text-[11px] font-bold text-primary/65 uppercase tracking-widest">{s.tag}</span>
                  <h3 className="text-xl font-bold text-white mt-1.5 mb-3">{s.title}</h3>
                  <p className="text-white/55 leading-relaxed text-sm">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            HOW IT WORKS
        ══════════════════════════════════════ */}
        <section id="como-funciona" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER}
              className="text-center max-w-xl mx-auto mb-16"
            >
              <motion.p variants={FADE_UP} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Cómo funciona
              </motion.p>
              <motion.h2 variants={FADE_UP} className="font-display text-4xl md:text-5xl font-bold text-white">
                Tres pasos. Sin complicaciones.
              </motion.h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 relative">
              <div className="hidden lg:block absolute top-14 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
              {HOW_IT_WORKS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.18, duration: 0.6 }}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/12 border border-primary/28 flex items-center justify-center text-primary mb-6 relative z-10">
                    {step.icon}
                  </div>
                  <span className="font-display text-[4.5rem] font-bold text-white/5 absolute -top-3 left-1/2 -translate-x-1/2 select-none leading-none">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/55 leading-relaxed max-w-xs text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            WHY PA'PEDIR — differentiators
        ══════════════════════════════════════ */}
        <section className="py-24 bg-card overflow-hidden">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER}
            >
              <motion.p variants={FADE_UP} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                ¿Por qué Pa'pedir?
              </motion.p>
              <motion.h2 variants={FADE_UP} className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Más que un servicio<br />de transporte
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/60 text-lg mb-10 leading-relaxed">
                Ridery y Yummy Rides son buenas opciones para viajes. Pa'pedir va más allá: combinamos transporte, delivery y múltiples servicios con presencia local real en Portuguesa.
              </motion.p>

              <div className="space-y-6 mb-10">
                {DIFFERENTIATORS.map((d, i) => (
                  <motion.div variants={FADE_UP} key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/12 border border-primary/22 flex items-center justify-center shrink-0 text-primary mt-0.5">
                      {d.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{d.title}</h4>
                      <p className="text-white/55 text-sm leading-relaxed">{d.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={FADE_UP}>
                <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 px-8 shadow-[0_0_32px_-8px_hsl(220,100%,55%,0.45)] group">
                  Descargar Pa'pedir
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img src={foodImg} alt="Servicios Pa'pedir" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/8 backdrop-blur-md border border-white/15 p-5 rounded-xl">
                  <div className="flex items-center gap-2 mb-1.5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
                    <span className="text-white font-bold text-sm ml-1">4.9</span>
                  </div>
                  <p className="text-white/70 text-sm">"La única app que me da el viaje y el delivery en Portuguesa."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            DRIVERS / ALIADOS
        ══════════════════════════════════════ */}
        <section id="conductores" className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER}
              className="order-2 lg:order-1"
            >
              <motion.p variants={FADE_UP} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Trabaja con nosotros
              </motion.p>
              <motion.h2 variants={FADE_UP} className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Genera ingresos con tu vehículo en Portuguesa
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/60 text-lg mb-10 leading-relaxed">
                Tienes moto o carro? Únete a la red de aliados conductores de Pa'pedir. Tú pones el vehículo, nosotros ponemos los clientes.
              </motion.p>

              <motion.ul variants={FADE_UP} className="space-y-4 mb-10">
                {[
                  "Ingresos diarios desde el primer día",
                  "Horarios completamente a tu disposición",
                  "Bonificaciones en horas de alta demanda",
                  "Soporte disponible durante tu jornada",
                  "Comunidad de conductores en crecimiento en Portuguesa",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 size={17} className="text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-semibold px-8">
                  Registrarme como conductor
                </Button>
                <Button size="lg" variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/8 bg-white/5 font-semibold px-6">
                  Más información
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] order-1 lg:order-2"
            >
              <img src={motoImg} alt="Aliado conductor Pa'pedir" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-primary/18 backdrop-blur-sm border border-primary/30 p-4 rounded-xl">
                  <p className="text-white font-bold">Portuguesa te necesita.</p>
                  <p className="text-white/65 text-sm mt-0.5">Sé parte del equipo que mueve el estado.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            TESTIMONIALS
        ══════════════════════════════════════ */}
        <section id="testimonios" className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER}
              className="text-center max-w-xl mx-auto mb-16"
            >
              <motion.p variants={FADE_UP} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Testimonios
              </motion.p>
              <motion.h2 variants={FADE_UP} className="font-display text-4xl md:text-5xl font-bold text-white">
                Lo que dicen en Portuguesa
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="bg-background border border-white/8 rounded-2xl p-8 relative hover:border-primary/25 transition-colors"
                >
                  <div className="text-primary/12 font-display text-7xl absolute top-2 right-5 leading-none select-none">"</div>
                  <div className="flex gap-1 mb-5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>
                  <p className="text-white/72 leading-relaxed mb-7 relative z-10 text-sm">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary/18 border border-primary/28 flex items-center justify-center font-bold text-primary text-base shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-white/40 text-xs">{t.role} · {t.city}, Portuguesa</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            BRAND SHOWCASE
        ══════════════════════════════════════ */}
        <section className="py-16 bg-background border-y border-white/8">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10"
            >
              <img src={brandImg} alt="Pa'pedir — Identidad de marca" className="w-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CTA FINAL
        ══════════════════════════════════════ */}
        <section className="py-28 relative overflow-hidden bg-card">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/20 blur-[110px] rounded-full" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/12 border border-primary/28 mb-8">
                <MessageCircle size={14} className="text-primary" />
                <span className="text-sm font-medium text-primary">Disponible en Portuguesa · Guanare · Acarigua · Araure</span>
              </div>

              <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Todo lo que necesitas,<br />
                <span className="text-primary">pídelo por Pa'pedir.</span>
              </h2>
              <p className="text-white/55 text-xl mb-10 max-w-xl mx-auto">
                Descarga la aplicación de forma gratuita y comienza a solicitar viajes y servicios hoy mismo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg"
                  className="rounded-full h-14 px-10 text-base font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_0_50px_-10px_hsl(220,100%,55%,0.65)]">
                  Descargar para iOS
                </Button>
                <Button size="lg"
                  className="rounded-full h-14 px-10 text-base font-semibold bg-white/8 border border-white/18 text-white hover:bg-white/14 backdrop-blur-sm">
                  Descargar para Android
                </Button>
              </div>
              <p className="text-white/30 text-sm mt-6">Descarga gratuita · Sin costo de registro</p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="bg-background border-t border-white/8 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="10" fill="#1A6EFF"/>
                    <path d="M9 10a3 3 0 0 1 3-3h5a5 5 0 0 1 0 10h-5v6H9V10z" fill="white"/>
                    <rect x="18" y="13" width="9" height="7" rx="3.5" fill="white" opacity="0.7"/>
                    <circle cx="27" cy="23" r="2" fill="white" opacity="0.5"/>
                  </svg>
                </div>
                <span className="font-display font-bold text-lg text-white">Pa<span className="text-primary">'</span>pedir</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-3">Pide lo que quieras. Llega donde estés.</p>
              <p className="text-white/25 text-xs">Portuguesa, Venezuela · 2025</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-5 text-sm">Servicios</h4>
              <ul className="space-y-3 text-sm text-white/45">
                {["Viajes en carro","Mototaxi","Delivery de comida","Compras y mandados","Farmacia","Paquetería y envíos"].map((s,i) => (
                  <li key={i}><a href="#" className="hover:text-primary transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-5 text-sm">Compañía</h4>
              <ul className="space-y-3 text-sm text-white/45">
                {["Sobre nosotros","Aliados conductores","Negocios aliados","Blog","Contacto"].map((s,i) => (
                  <li key={i}><a href="#" className="hover:text-primary transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-5 text-sm">Legal</h4>
              <ul className="space-y-3 text-sm text-white/45">
                {["Términos y condiciones","Política de privacidad","Ayuda y soporte"].map((s,i) => (
                  <li key={i}><a href="#" className="hover:text-primary transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-sm">© 2025 Pa'pedir. Todos los derechos reservados.</p>
            <p className="text-white/25 text-xs">Hecho en Venezuela para Venezuela</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
