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
} from "lucide-react";
import brandImg from "@assets/d39d6d45-b36f-4ac7-8e64-b212c78abbca_1780799808515.png";
import appMockupImg from "@/assets/images/app-mockup.png";
import foodImg from "@/assets/images/venezuelan-food.png";
import motoImg from "@/assets/images/moto-delivery.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const SERVICES = [
  { icon: <ShoppingBag size={28} />, label: "Comida" },
  { icon: <Car size={28} />, label: "Transporte" },
  { icon: <Package size={28} />, label: "Compras" },
  { icon: <Pill size={28} />, label: "Farmacia" },
  { icon: <Send size={28} />, label: "Paquetería" },
  { icon: <Bike size={28} />, label: "Envíos" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Elige lo que necesitas",
    desc: "Selecciona entre comida, transporte, compras, farmacia y más. Todo en un solo lugar.",
    icon: <Smartphone size={32} />,
  },
  {
    step: "02",
    title: "Confirma tu pedido",
    desc: "Revisa los detalles, elige tu método de pago preferido y confirma. Simple y rápido.",
    icon: <CheckCircle2 size={32} />,
  },
  {
    step: "03",
    title: "Sigue tu pedido en vivo",
    desc: "Rastrea a tu repartidor en tiempo real y recibe tu pedido donde te encuentres.",
    icon: <MapPin size={32} />,
  },
];

const FEATURES = [
  {
    title: "Múltiples métodos de pago",
    desc: "Pago móvil, Zelle, efectivo o transferencia. Tú decides cómo pagar.",
  },
  {
    title: "Seguimiento en tiempo real",
    desc: "Mira exactamente dónde está tu repartidor en todo momento.",
  },
  {
    title: "Soporte al usuario",
    desc: "Un equipo disponible para atender cualquier inconveniente de manera oportuna.",
  },
];

const TESTIMONIALS = [
  {
    name: "María G.",
    city: "Guanare",
    text: "Excelente servicio. Pedí medicamentos a la farmacia y llegaron en menos de 30 minutos. Muy puntual y confiable.",
  },
  {
    name: "Andrés P.",
    city: "Acarigua",
    text: "Usé el servicio de transporte para ir al trabajo y fue muy cómodo. El conductor fue amable y puntual. Totalmente recomendado.",
  },
  {
    name: "Luisa M.",
    city: "Araure",
    text: "Me encanta que puedo pagar con pago móvil. La comida llegó caliente y el repartidor fue muy atento. Seguiré usando Pa'pedir.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 0.5], [0, 120]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background overflow-hidden dark">

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-lg border-b border-white/8">
        <div className="container mx-auto px-6 h-18 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="relative w-9 h-9">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                <rect width="36" height="36" rx="10" fill="#1A6EFF" />
                <path d="M9 10a3 3 0 0 1 3-3h5a5 5 0 0 1 0 10h-5v6H9V10z" fill="white"/>
                <rect x="18" y="13" width="9" height="7" rx="3.5" fill="white" opacity="0.7"/>
                <circle cx="27" cy="23" r="2" fill="white" opacity="0.5"/>
              </svg>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Pa<span className="text-primary">'</span>pedir
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Servicios</a>
            <a href="#como-funciona" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Cómo funciona</a>
            <a href="#testimonios" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Testimonios</a>
            <a href="#repartidores" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Ser repartidor</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button className="rounded-full font-semibold px-6 bg-primary text-white hover:bg-primary/90 shadow-[0_0_24px_-4px_hsl(220,100%,55%,0.5)]">
              Descargar App
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white/80 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-card border-t border-white/8"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                {["#servicios", "#como-funciona", "#testimonios", "#repartidores"].map((href, i) => (
                  <a key={i} href={href} onClick={() => setMenuOpen(false)}
                    className="text-white/70 hover:text-white font-medium py-2 transition-colors">
                    {["Servicios", "Cómo funciona", "Testimonios", "Ser repartidor"][i]}
                  </a>
                ))}
                <Button className="rounded-full mt-2 bg-primary text-white hover:bg-primary/90">Descargar App</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">

        {/* ═══ HERO ═══ */}
        <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-primary/10 blur-[100px] rounded-full" />
          </div>

          <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="max-w-xl"
            >
              {/* Badge */}
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Ya disponibles en el estado Portuguesa</span>
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={FADE_UP} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white mb-4">
                Pide lo que quieras.{" "}
                <span className="text-primary">Llega donde estés.</span>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-lg text-white/65 mb-10 leading-relaxed">
                Delivery de comida, transporte privado, compras, farmacia y más. Todo desde una sola aplicación, diseñada para el venezolano de hoy.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-3 mb-12">
                <Button size="lg" className="rounded-full h-13 px-8 text-base font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_0_40px_-8px_hsl(220,100%,55%,0.6)]">
                  Descargar gratis
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-13 px-8 text-base font-semibold border-white/20 text-white hover:bg-white/8 bg-white/5">
                  Unirme como repartidor
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div variants={FADE_UP} className="flex gap-8">
                {[
                  { value: "6+", label: "Servicios disponibles" },
                  { value: "24/7", label: "Disponibilidad" },
                  { value: "30min", label: "Tiempo promedio" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/50 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* App mockup + floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, type: "spring", bounce: 0.25 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="absolute inset-0 bg-primary/15 blur-[80px] rounded-full scale-75" />
              <img
                src={appMockupImg}
                alt="App Pa'pedir"
                className="relative z-10 w-full max-w-sm drop-shadow-2xl"
              />

              {/* Floating: order notification */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 -left-10 z-20 bg-card/95 backdrop-blur-sm border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3 min-w-[200px]"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Pedido confirmado</p>
                  <p className="text-white/50 text-xs">Tu repartidor está en camino</p>
                </div>
              </motion.div>

              {/* Floating: ETA */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute bottom-24 -right-8 z-20 bg-card/95 backdrop-blur-sm border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3 min-w-[180px]"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Llega en 18 min</p>
                  <p className="text-white/50 text-xs">Rastrea en tiempo real</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══ SERVICE STRIP ═══ */}
        <section className="py-6 border-y border-white/8 bg-card/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
              {SERVICES.map((s, i) => (
                <motion.a
                  key={i}
                  href="#servicios"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex flex-col items-center gap-1.5 text-white/60 hover:text-primary transition-colors group cursor-pointer"
                >
                  <div className="group-hover:scale-110 transition-transform">{s.icon}</div>
                  <span className="text-xs font-semibold tracking-widest uppercase">{s.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SERVICES GRID ═══ */}
        <section id="servicios" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={STAGGER}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <motion.p variants={FADE_UP} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Nuestros servicios
              </motion.p>
              <motion.h2 variants={FADE_UP} className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
                Todo lo que necesitas,<br />en una sola app
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/60 text-lg">
                Sin complicaciones. Sin múltiples aplicaciones. Pa'pedir reúne todos los servicios que tu familia necesita en el día a día.
              </motion.p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <ShoppingBag size={28} />,
                  title: "Delivery de Comida",
                  desc: "Recibe tus comidas favoritas desde los mejores restaurantes y locales de Portuguesa, directamente en tu puerta.",
                  tag: "Comida",
                },
                {
                  icon: <Car size={28} />,
                  title: "Transporte Privado",
                  desc: "Solicita un vehículo seguro y confiable para movilizarte dentro de la ciudad. Conductores verificados.",
                  tag: "Transporte",
                },
                {
                  icon: <Package size={28} />,
                  title: "Compras y Mandados",
                  desc: "Necesitas algo del mercado o de una tienda? Nuestros aliados realizan tus compras y las entregan donde estés.",
                  tag: "Compras",
                },
                {
                  icon: <Pill size={28} />,
                  title: "Farmacia a Domicilio",
                  desc: "Recibe medicamentos y productos de farmacia sin salir de casa. Servicio rápido y discreto.",
                  tag: "Farmacia",
                },
                {
                  icon: <Send size={28} />,
                  title: "Paquetería",
                  desc: "Envía y recibe paquetes dentro de la ciudad de manera rápida, segura y con seguimiento en tiempo real.",
                  tag: "Paquetería",
                },
                {
                  icon: <Bike size={28} />,
                  title: "Envíos Rápidos",
                  desc: "Documentos, encomiendas o cualquier artículo pequeño. Entregamos en el menor tiempo posible.",
                  tag: "Envíos",
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group bg-card border border-white/8 rounded-2xl p-7 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-primary/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-13 h-13 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-xs font-semibold text-primary/70 uppercase tracking-widest">{service.tag}</span>
                  <h3 className="text-xl font-bold text-white mt-1.5 mb-3">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section id="como-funciona" className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={STAGGER}
              className="text-center max-w-xl mx-auto mb-16"
            >
              <motion.p variants={FADE_UP} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Cómo funciona
              </motion.p>
              <motion.h2 variants={FADE_UP} className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
                Tres pasos. Sin complicaciones.
              </motion.h2>
            </motion.div>

            <div className="relative">
              {/* Connector line */}
              <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <div className="grid lg:grid-cols-3 gap-8">
                {HOW_IT_WORKS.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    className="flex flex-col items-center text-center relative"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-6 relative z-10">
                      {step.icon}
                    </div>
                    <span className="font-display text-5xl font-bold text-white/8 absolute -top-2 left-1/2 -translate-x-1/2 select-none">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed max-w-xs">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FEATURES SPLIT ═══ */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img src={foodImg} alt="Comida venezolana" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl">
                  <div className="flex items-center gap-2 mb-1.5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
                    <span className="text-white font-bold text-sm ml-1">4.9</span>
                  </div>
                  <p className="text-white/80 text-sm italic">"Recibí mi pedido puntual y en perfectas condiciones. Excelente servicio."</p>
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
                Por qué elegir Pa'pedir
              </motion.p>
              <motion.h2 variants={FADE_UP} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Diseñado para funcionar en Venezuela
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/60 text-lg mb-10 leading-relaxed">
                Sabemos la realidad del país. Por eso Pa'pedir está pensado para ser accesible, flexible y confiable en el contexto venezolano.
              </motion.p>

              <div className="space-y-6">
                {FEATURES.map((item, i) => (
                  <motion.div variants={FADE_UP} key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                      <p className="text-white/55 mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={FADE_UP} className="mt-10">
                <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 px-8 shadow-[0_0_32px_-8px_hsl(220,100%,55%,0.5)]">
                  Descargar la app
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══ DRIVERS ═══ */}
        <section id="repartidores" className="py-24 bg-card overflow-hidden">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="order-2 lg:order-1"
            >
              <motion.p variants={FADE_UP} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Trabaja con nosotros
              </motion.p>
              <motion.h2 variants={FADE_UP} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Genera ingresos a tu propio ritmo
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/60 text-lg mb-10 leading-relaxed">
                ¿Tienes moto o vehículo? Únete a nuestra red de aliados y genera ingresos con total flexibilidad. Tú decides cuándo y cuánto trabajar.
              </motion.p>

              <motion.ul variants={FADE_UP} className="space-y-4 mb-10">
                {[
                  "Ingresos diarios garantizados",
                  "Horarios completamente flexibles",
                  "Bonificaciones por alta demanda",
                  "Respaldo y soporte en todo momento",
                  "Comunidad de aliados en crecimiento",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/75">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={FADE_UP}>
                <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 font-semibold px-8">
                  Quiero ser aliado
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] order-1 lg:order-2"
            >
              <img src={motoImg} alt="Aliado Pa'pedir" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 p-4 rounded-xl">
                  <p className="text-white font-bold text-lg">Portuguesa nos necesita.</p>
                  <p className="text-white/70 text-sm mt-0.5">Sé parte del equipo que hace posible Pa'pedir.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ TESTIMONIALS ═══ */}
        <section id="testimonios" className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={STAGGER}
              className="text-center max-w-xl mx-auto mb-16"
            >
              <motion.p variants={FADE_UP} className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Testimonios
              </motion.p>
              <motion.h2 variants={FADE_UP} className="font-display text-4xl md:text-5xl font-bold text-white">
                Lo que dicen nuestros usuarios
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="bg-card border border-white/8 rounded-2xl p-8 relative hover:border-primary/25 transition-colors"
                >
                  <div className="text-primary/15 font-display text-7xl absolute top-2 right-6 leading-none select-none">"</div>
                  <div className="flex gap-1 mb-5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>
                  <p className="text-white/75 leading-relaxed mb-7 relative z-10">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-bold text-primary text-lg shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-white/45 text-sm">{t.city}, Portuguesa</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ BRAND SHOWCASE ═══ */}
        <section className="py-16 bg-card border-y border-white/8">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10"
            >
              <img
                src={brandImg}
                alt="Pa'pedir — Identidad de marca"
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="py-28 relative overflow-hidden bg-background">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/25 blur-[100px] rounded-full" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
                <MessageCircle size={14} className="text-primary" />
                <span className="text-sm font-medium text-primary">Disponible en Portuguesa</span>
              </div>

              <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Todo lo que necesitas,<br />
                <span className="text-primary">pídelo por Pa'pedir.</span>
              </h2>
              <p className="text-white/60 text-xl mb-10 max-w-xl mx-auto">
                Descarga la aplicación de forma gratuita y comienza a disfrutar del servicio hoy mismo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-14 px-10 text-base font-semibold bg-primary text-white hover:bg-primary/90 shadow-[0_0_50px_-10px_hsl(220,100%,55%,0.6)]">
                  Descargar para iOS
                </Button>
                <Button size="lg" className="rounded-full h-14 px-10 text-base font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/15 backdrop-blur-sm">
                  Descargar para Android
                </Button>
              </div>

              <p className="text-white/35 text-sm mt-6">Descarga gratuita. Sin costo de registro.</p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-card border-t border-white/8 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="10" fill="#1A6EFF" />
                    <path d="M9 10a3 3 0 0 1 3-3h5a5 5 0 0 1 0 10h-5v6H9V10z" fill="white"/>
                    <rect x="18" y="13" width="9" height="7" rx="3.5" fill="white" opacity="0.7"/>
                    <circle cx="27" cy="23" r="2" fill="white" opacity="0.5"/>
                  </svg>
                </div>
                <span className="font-display font-bold text-lg text-white">Pa<span className="text-primary">'</span>pedir</span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-4">
                Pide lo que quieras. Llega donde estés.
              </p>
              <p className="text-white/30 text-xs">Portuguesa, Venezuela · 2025</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-5 text-sm">Servicios</h4>
              <ul className="space-y-3 text-sm text-white/50">
                {["Delivery de comida", "Transporte privado", "Compras y mandados", "Farmacia", "Paquetería", "Envíos"].map((s, i) => (
                  <li key={i}><a href="#" className="hover:text-primary transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-5 text-sm">Compañía</h4>
              <ul className="space-y-3 text-sm text-white/50">
                {["Sobre nosotros", "Aliados repartidores", "Negocios aliados", "Blog", "Contacto"].map((s, i) => (
                  <li key={i}><a href="#" className="hover:text-primary transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-5 text-sm">Legal</h4>
              <ul className="space-y-3 text-sm text-white/50">
                {["Términos y condiciones", "Política de privacidad", "Ayuda"].map((s, i) => (
                  <li key={i}><a href="#" className="hover:text-primary transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">© 2025 Pa'pedir. Todos los derechos reservados.</p>
            <p className="text-white/30 text-xs">Hecho en Venezuela para Venezuela</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
