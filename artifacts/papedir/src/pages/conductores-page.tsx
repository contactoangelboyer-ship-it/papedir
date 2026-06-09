import React, { useRef, useState } from "react";
  import { motion, useInView, AnimatePresence } from "framer-motion";
  import { Car, Bike, CheckCircle2, DollarSign, Clock, Shield, Smartphone, Zap, Star, ArrowRight, Loader2, PartyPopper, Phone } from "lucide-react";
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";
  import conductorInteriorImg from "@/assets/images/conductor-interior.png";
    import driverOpeningDoorImg from "@/assets/images/driver-opening-door.png";
    import repartidorMotoImg from "@/assets/images/repartidor-moto.png";
    import repartidoraMotoImg from "@/assets/images/repartidora-moto.png";

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

  const BENEFITS = [
    { icon: DollarSign, title: "Pagos puntuales, siempre", desc: "Cada semana, sin falta. Pago Móvil, Zelle o transferencia — tú eliges cómo recibir lo que ganaste." },
    { icon: Clock,      title: "Total libertad de horario",     desc: "Trabaja cuando quieras — mañana, tarde o noche. Activa la app cuando estés listo y desactívala cuando necesites descansar." },
    { icon: Shield,     title: "Soporte humano, siempre",       desc: "No estás solo. WhatsApp directo con el equipo real de Pappedir — sin bots, sin tiempos de espera." },
    { icon: Smartphone, title: "Todo en tu teléfono",           desc: "Acepta servicios, rastrea tus ganancias y gestiona tus pagos desde una app pensada para ser simple." },
    { icon: Zap,        title: "Activo en menos de 24 horas",   desc: "Registro en 5 minutos. Verificación rápida. Si cumples los requisitos, mañana ya puedes ganar." },
    { icon: Star,       title: "Bonos por buen desempeño",      desc: "Los aliados con mejor calificación reciben bonos adicionales y prioridad en los servicios. Calidad que paga." },
  ];

  const REQUIREMENTS = [
    { tipo: "Conductor", icon: Car, color: "#1A6EFF", bg: "#EEF4FF",
      items: ["Carro o moto en buen estado","Cédula de identidad venezolana","Licencia de conducir vigente","Número de WhatsApp activo","Mayor de 18 años"] },
    { tipo: "Repartidor", icon: Bike, color: "#F97316", bg: "#FFF7ED",
      items: ["Moto o bicicleta","Cédula de identidad venezolana","Capacidad para cargar paquetes","Número de WhatsApp activo","Mayor de 18 años"] },
  ];

  const STEPS = [
    { n: "01", title: "Regístrate en 5 minutos", desc: "Formulario simple. Solo tus datos básicos. Sin papeleo, sin complicaciones." },
    { n: "02", title: "Verificación express",   desc: "Revisamos tu documentación y te confirmamos por WhatsApp en menos de 24 horas." },
    { n: "03", title: "Accede a la app",       desc: "Te enviamos acceso a la app de conductores. Intuitive, simple, lista para usar." },
    { n: "04", title: "Empieza a ganar",       desc: "Actívate, acepta tu primer servicio y las ganancias son tuyas desde el día uno." },
  ];

  const TESTIMONIALS_DRIVER = [
    { name: "José D.",    city: "Araure",   stars: 5, tipo: "Conductor", text: "Dos meses activo y los pagos llegan puntuales cada semana. Cuando tuve una duda, el soporte respondió al instante. Lo mejor que he hecho." },
    { name: "Marcos F.",  city: "Guanare",  stars: 5, tipo: "Repartidor", text: "Con mi moto hago entre 8 y 12 entregas al día. Gano mejor que en mi trabajo anterior y sin horario fijo. No cambio esto." },
    { name: "Ana C.",     city: "Acarigua", stars: 5, tipo: "Conductora", text: "Trabajo solo en la mañana, cuando los niños están en el colegio. Gano bien y estoy de vuelta en casa a tiempo." },
  ];

  
  // ── Earnings Calculator ────────────────────────────────────────────────────
  function EarningsCalculator() {
    const [hours, setHours] = React.useState(6);
    const [vehicle, setVehicle] = React.useState<"carro" | "moto">("carro");

    const ratePerHour = vehicle === "carro" ? 8.5 : 6;
    const dailyEst = Math.round(hours * ratePerHour);
    const weeklyEst = Math.round(dailyEst * 5.5);
    const monthlyEst = Math.round(dailyEst * 22);

    const ref = React.useRef(null);
    const vis = useInView(ref, { once: true, margin: "-60px" });

    return (
      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-3xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={vis ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
            className="rounded-3xl overflow-hidden border border-slate-100"
            style={{ boxShadow: "0 8px 40px rgba(26,110,255,.1)" }}>

            {/* Header */}
            <div className="p-6 text-white" style={{ background: "linear-gradient(135deg, #0D1E3F 0%, #1A3A7A 100%)" }}>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-300 mb-2">Calcula tus ganancias</p>
              <h3 className="text-2xl font-extrabold mb-1">¿Cuánto puedes ganar?</h3>
              <p className="text-white/60 text-sm">Estimado basado en nuestros conductores activos en Portuguesa.</p>
            </div>

            {/* Controls */}
            <div className="p-6 bg-white space-y-6">
              {/* Vehicle toggle */}
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3">Tipo de vehículo</p>
                <div className="flex gap-3">
                  {([["carro","🚗 Carro / Taxi"],["moto","🏍️ Moto"]] as const).map(([v,l]) => (
                    <button key={v} onClick={() => setVehicle(v)}
                      className={`flex-1 py-3 rounded-2xl text-[13px] font-extrabold border-2 transition-all ${
                        vehicle === v ? "border-[#1A6EFF] bg-[#EEF4FF] text-[#1A6EFF]" : "border-slate-200 text-slate-500 hover:border-slate-300"
                      }`}>{l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hours slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Horas por día</p>
                  <span className="text-2xl font-extrabold" style={{ color: NAVY }}>{hours}h</span>
                </div>
                <input type="range" min={2} max={12} step={1} value={hours} onChange={e => setHours(+e.target.value)}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: "#1A6EFF", background: `linear-gradient(to right, #1A6EFF ${(hours-2)/10*100}%, #E2E8F0 ${(hours-2)/10*100}%)` }} />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium mt-1.5">
                  <span>2h</span><span>7h</span><span>12h</span>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { label: "Al día",    value: `${dailyEst}`, color: "#1A6EFF", bg: "#EEF4FF" },
                  { label: "A la semana", value: `${weeklyEst}`, color: "#10B981", bg: "#ECFDF5" },
                  { label: "Al mes",    value: `${monthlyEst}`, color: "#F97316", bg: "#FFF7ED" },
                ].map(({ label, value, color, bg }) => (
                  <div key={label} className="rounded-2xl p-4 text-center transition-all" style={{ background: bg }}>
                    <p className="text-[22px] font-extrabold" style={{ color }}>{value}</p>
                    <p className="text-[11px] font-bold text-slate-500 mt-1">{label}</p>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                * Estimado en USD. Los ingresos reales varían según demanda, ciudad y jornada.
              </p>

              <a href="#registro-conductor" style={{ background: BLUE }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-white font-extrabold text-[14px] transition-all hover:opacity-90 active:scale-95">
                Registrarme y empezar a ganar <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  export default function ConductoresPage() {
    const [tab, setTab] = useState<"conductor" | "repartidor">("conductor");
    const [form, setForm] = useState({ nombre: "", cedula: "", vehiculo: tab === "conductor" ? "carro" : "moto", whatsapp: "", ciudad: "Guanare" });

    // Auto-switch to repartidor tab if URL hash = #repartidor
    useEffect(() => {
      if (window.location.hash === '#repartidor') {
        setTab('repartidor');
        setForm(f => ({ ...f, vehiculo: 'moto' }));
        setTimeout(() => {
          const el = document.getElementById('registro-conductor');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
      }
    }, []);
      const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formError, setFormError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleTabChange = (t: "conductor" | "repartidor") => {
      setTab(t);
      setForm({ nombre: "", cedula: "", vehiculo: t === "conductor" ? "carro" : "moto", whatsapp: "", ciudad: "Guanare" });
      setFormState("idle");
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setFormState("loading");
      try {
        const res = await fetch("/api/registro", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, tipo: tab }),
        });
        if (!res.ok) throw new Error();
        setFormState("success");
      } catch {
        setFormState("error");
        setFormError("Hubo un problema. Escríbenos por WhatsApp.");
      }
    };

    return (
      <div className="min-h-screen bg-white text-[#0D1E3F]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Navbar />

        {/* Hero */}
        <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1E3F 0%, #0D2B6B 100%)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-[#1A6EFF]/15 blur-[120px]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-[13px] font-bold text-white/80 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Postulaciones abiertas
              </span>
              <h1 className="text-[clamp(36px,5.5vw,68px)] font-extrabold text-white leading-[1.06] tracking-tight mb-5">
                Gana haciendo<br /><span style={{ color: "#60A5FA" }}>lo que ya sabes</span>
              </h1>
              <p className="text-white/60 text-[17px] leading-relaxed mb-8 max-w-lg">
                ¿Tienes carro o moto? Empieza a ganar desde el primer día con total libertad de horario. Tú decides cuándo y cuánto.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#registro-conductor" style={{ background: BLUE }}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-extrabold text-[14px] shadow-[0_8px_28px_rgba(26,110,255,0.5)] hover:opacity-90 transition-all">
                  Registrarme ahora <ArrowRight size={16} />
                </a>
                <a href="#como-funciona" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-bold text-[14px] border border-white/20 hover:bg-white/10 transition-all">
                  Ver cómo funciona
                </a>
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
              className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.4)]" style={{ aspectRatio: "4/3" }}>
                <img
                src={tab === "conductor" ? conductorInteriorImg : repartidorMotoImg}
                alt={tab === "conductor" ? "Conductor Pappedir" : "Repartidor Pappedir"}
                className="w-full h-full object-cover transition-all duration-500"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3F]/60 to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                {[["24h","Primera respuesta"],["5 ★","Calificación promedio"],["100%","Pagos puntuales"]].map(([v,l]) => (
                  <div key={l} className="flex-1 text-center bg-white/15 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
                    <p className="text-white font-extrabold text-lg">{v}</p>
                    <p className="text-white/60 text-[10px] font-semibold">{l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>


          {/* ━━━━ PAPPE FLEET ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-5">
              <Reveal className="text-center mb-14">
                <motion.p variants={up} className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Tres formas de ganar</motion.p>
                <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold leading-tight mb-4" style={{ color: NAVY }}>
                  Elige tu rol en el<br /><span style={{ color: BLUE }}>equipo Pappedir</span>
                </motion.h2>
                <motion.p variants={up} className="text-slate-500 max-w-lg mx-auto">
                  Ya sea que tengas carro, moto o bicicleta — hay un lugar para ti. Cada rol tiene sus propias ventajas y la misma promesa: pagos puntuales y libertad total.
                </motion.p>
              </Reveal>

              <Reveal>
                <div className="grid md:grid-cols-3 gap-6">

                  {/* Pappe Driver */}
                  <motion.div variants={up}
                    className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                    style={{ boxShadow: "0 4px 20px rgba(0,0,0,.08), 0 16px 48px rgba(0,0,0,.07)" }}>
                    <div className="relative h-80 overflow-hidden">
                      <img src={driverOpeningDoorImg} alt="Pappe Driver"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3F]/90 via-[#0D1E3F]/30 to-transparent" />
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-extrabold text-white"
                        style={{ background: "#1A6EFF" }}>🚗 Transporte</span>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-extrabold text-xl mb-1">Pappe Driver</p>
                        <p className="text-white/70 text-[13px]">Lleva personas, gana por viaje</p>
                      </div>
                      {/* Mini inset photo */}
                      <div className="absolute top-4 right-4 w-16 h-16 rounded-xl overflow-hidden border-2 border-white/30">
                        <img src={conductorInteriorImg} alt="Conductor" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="bg-white p-5">
                      <div className="flex flex-col gap-2 mb-4">
                        {["Viajes en carro o moto","Precio fijo por recorrido","Pagos semanales garantizados"].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 size={14} style={{ color: "#1A6EFF" }} strokeWidth={2.5} />
                            <span className="text-slate-600 text-[13px]">{item}</span>
                          </div>
                        ))}
                      </div>
                      <a href="#registro-conductor"
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-extrabold text-white transition-all hover:opacity-90"
                        style={{ background: "#1A6EFF" }}>
                        Registrarme como Driver <ArrowRight size={14} />
                      </a>
                    </div>
                  </motion.div>

                  {/* Pappe Runner */}
                  <motion.div variants={up}
                    className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                    style={{ boxShadow: "0 4px 20px rgba(0,0,0,.08), 0 16px 48px rgba(0,0,0,.07)" }}>
                    <div className="relative h-80 overflow-hidden">
                      <img src={repartidoraMotoImg} alt="Pappe Runner"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3F]/90 via-[#0D1E3F]/30 to-transparent" />
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-extrabold text-white"
                        style={{ background: "#F97316" }}>📦 Delivery</span>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-extrabold text-xl mb-1">Pappe Runner</p>
                        <p className="text-white/70 text-[13px]">Entrega pedidos, gana más</p>
                      </div>
                    </div>
                    <div className="bg-white p-5">
                      <div className="flex flex-col gap-2 mb-4">
                        {["Comida, farmacia y compras","Múltiples entregas por día","Sin horario fijo, tú decides"].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 size={14} style={{ color: "#F97316" }} strokeWidth={2.5} />
                            <span className="text-slate-600 text-[13px]">{item}</span>
                          </div>
                        ))}
                      </div>
                      <a href="#registro-conductor"
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-extrabold text-white transition-all hover:opacity-90"
                        style={{ background: "#F97316" }}>
                        Registrarme como Runner <ArrowRight size={14} />
                      </a>
                    </div>
                  </motion.div>

                  {/* Pappe Rider */}
                  <motion.div variants={up}
                    className="group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                    style={{ boxShadow: "0 4px 20px rgba(0,0,0,.08), 0 16px 48px rgba(0,0,0,.07)" }}>
                    <div className="relative h-80 overflow-hidden">
                      <img src={repartidorMotoImg} alt="Pappe Rider"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E3F]/90 via-[#0D1E3F]/30 to-transparent" />
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-extrabold text-white"
                        style={{ background: "#8B5CF6" }}>🏍️ Mototaxi</span>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-extrabold text-xl mb-1">Pappe Rider</p>
                        <p className="text-white/70 text-[13px]">Lleva pasajeros en moto, rápido</p>
                      </div>
                    </div>
                    <div className="bg-white p-5">
                      <div className="flex flex-col gap-2 mb-4">
                        {["Mototaxi ágil y rápido","Rutas cortas, muchos viajes","Gana más en horas pico"].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 size={14} style={{ color: "#8B5CF6" }} strokeWidth={2.5} />
                            <span className="text-slate-600 text-[13px]">{item}</span>
                          </div>
                        ))}
                      </div>
                      <a href="#registro-conductor"
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-extrabold text-white transition-all hover:opacity-90"
                        style={{ background: "#8B5CF6" }}>
                        Registrarme como Rider <ArrowRight size={14} />
                      </a>
                    </div>
                  </motion.div>

                </div>
              </Reveal>
            </div>
          </section>

          {/* Benefits */}}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <Reveal className="text-center mb-14">
              <motion.p variants={up} className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Por qué Pappedir</motion.p>
              <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold" style={{ color: NAVY }}>
                No es un trabajo más.<br />Es <span style={{ color: BLUE }}>tu negocio propio.</span>
              </motion.h2>
            </Reveal>
            <Reveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {BENEFITS.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <motion.div key={i} variants={up}
                      className="bg-white rounded-3xl p-7 border border-slate-100 hover:-translate-y-1 transition-all duration-200"
                      style={{ boxShadow: "0 2px 8px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.05)" }}>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: "#EEF4FF" }}>
                        <Icon size={22} style={{ color: BLUE }} />
                      </div>
                      <h3 className="font-extrabold text-[15px] mb-2" style={{ color: NAVY }}>{b.title}</h3>
                      <p className="text-slate-500 text-[13px] leading-relaxed">{b.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20" style={{ background: "#F5F8FF" }}>
          <div className="max-w-7xl mx-auto px-5">
            <Reveal className="text-center mb-12">
              <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold" style={{ color: NAVY }}>¿Qué necesitas para unirte?</motion.h2>
              <motion.p variants={up} className="text-slate-500 mt-3 max-w-md mx-auto">Requisitos claros, sin letra pequeña.</motion.p>
            </Reveal>
            <Reveal>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {REQUIREMENTS.map((r) => {
                  const Icon = r.icon;
                  return (
                    <motion.div key={r.tipo} variants={up} className="bg-white rounded-3xl p-8 border border-slate-100"
                      style={{ boxShadow: "0 4px 20px rgba(0,0,0,.06)" }}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: r.bg }}>
                          <Icon size={22} style={{ color: r.color }} />
                        </div>
                        <h3 className="font-extrabold text-lg" style={{ color: NAVY }}>{r.tipo}</h3>
                      </div>
                      <div className="flex flex-col gap-3">
                        {r.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 size={15} style={{ color: r.color }} strokeWidth={2.5} />
                            <span className="text-slate-600 text-[13px] font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <Reveal className="text-center mb-12">
              <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold" style={{ color: NAVY }}>
                4 pasos para <span style={{ color: BLUE }}>empezar a ganar</span>
              </motion.h2>
            </Reveal>
            <Reveal>
              <div className="flex flex-col gap-4">
                {STEPS.map((step, i) => (
                  <motion.div key={i} variants={up}
                    className="flex items-start gap-6 p-6 rounded-3xl bg-white border border-slate-100"
                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shrink-0"
                      style={{ background: `linear-gradient(135deg, ${BLUE}, #0B4FCC)` }}>
                      {step.n}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[16px] mb-1" style={{ color: NAVY }}>{step.title}</h3>
                      <p className="text-slate-500 text-[14px] leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20" style={{ background: "#F5F8FF" }}>
          <div className="max-w-7xl mx-auto px-5">
            <Reveal className="text-center mb-10">
              <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold" style={{ color: NAVY }}>
                Lo que dicen nuestros aliados
              </motion.h2>
            </Reveal>
            <Reveal>
              <div className="grid md:grid-cols-3 gap-5">
                {TESTIMONIALS_DRIVER.map((t, i) => (
                  <motion.div key={i} variants={up}
                    className="bg-white rounded-3xl p-7 border border-slate-100"
                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold mb-4"
                      style={{ background: "#EEF4FF", color: BLUE }}>{t.tipo}</span>
                    <div className="flex text-amber-400 mb-3">
                      {[...Array(t.stars)].map((_,j) => <Star key={j} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-slate-600 text-[14px] leading-relaxed mb-5">"{t.text}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-sm"
                        style={{ background: `linear-gradient(135deg, ${BLUE}, #0B4FCC)` }}>{t.name[0]}</div>
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


          {/* ━━━━ EARNINGS CALCULATOR ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <EarningsCalculator />

          {/* Registration form */}
        <section id="registro-conductor" className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-5">
            <Reveal className="text-center mb-10">
              <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold" style={{ color: NAVY }}>Únete al equipo</motion.h2>
              <motion.p variants={up} className="text-slate-500 mt-3">Formulario en 2 minutos. Respuesta en menos de 24 horas.</motion.p>
            </Reveal>

            {/* Tab */}
            <div className="flex gap-3 mb-8">
              {(["conductor","repartidor"] as const).map(t => (
                <button key={t} onClick={() => handleTabChange(t)}
                  className={`flex-1 py-3 rounded-2xl text-[13px] font-extrabold border-2 transition-all ${tab === t ? "border-[#1A6EFF] bg-[#1A6EFF] text-white" : "border-slate-200 text-slate-600 hover:border-[#1A6EFF]/40"}`}>
                  {t === "conductor" ? "🚗 Conductor" : "🏍️ Repartidor"}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100" style={{ boxShadow: "0 4px 20px rgba(26,110,255,.08)" }}>
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8 gap-5">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "#EEF4FF" }}>
                      <PartyPopper size={36} style={{ color: BLUE }} />
                    </div>
                    <h3 className="text-2xl font-extrabold" style={{ color: NAVY }}>¡Registro recibido!</h3>
                    <p className="text-slate-500">En menos de 24 horas te escribimos por WhatsApp para activar tu cuenta. ¡El equipo te espera!</p>
                    <button onClick={() => setFormState("idle")} className="px-6 py-2.5 rounded-xl border-2 border-slate-200 text-sm font-bold text-slate-600 hover:border-[#1A6EFF]/30 hover:bg-[#F5F8FF] transition-all">
                      Registrar otro
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {[
                      { name: "nombre", label: "Nombre completo *", placeholder: "Ej. Carlos Pérez", type: "text" },
                      { name: "cedula", label: "Cédula de identidad *", placeholder: "Ej. V-12345678", type: "text" },
                      { name: "whatsapp", label: "WhatsApp *", placeholder: "Ej. +58 412 1234567", type: "tel" },
                    ].map(field => (
                      <div key={field.name} className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">{field.label}</label>
                        <input name={field.name} value={(form as Record<string, string>)[field.name]} onChange={handleChange} required
                          placeholder={field.placeholder} type={field.type}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-[#0D1E3F] placeholder-slate-300 focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all" />
                      </div>
                    ))}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">Vehículo *</label>
                      <select name="vehiculo" value={form.vehiculo} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-[#0D1E3F] bg-white focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all">
                        {tab === "conductor"
                          ? [["carro","Carro"],["moto","Moto"],["ambos","Carro y Moto"]].map(([v,l]) => <option key={v} value={v}>{l}</option>)
                          : [["moto","Moto"],["bicicleta","Bicicleta"],["a_pie","A pie"]].map(([v,l]) => <option key={v} value={v}>{l}</option>)
                        }
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">Ciudad *</label>
                      <select name="ciudad" value={form.ciudad} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-[#0D1E3F] bg-white focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all">
                        {["Guanare","Acarigua","Araure","Biscucuy","Ospino","Otra"].map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    {formError && <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">{formError}</p>}
                    <button type="submit" disabled={formState === "loading"} style={{ background: BLUE }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-white font-extrabold text-[15px] shadow-[0_8px_28px_-4px_rgba(26,110,255,.4)] hover:opacity-90 transition-all disabled:opacity-60">
                      {formState === "loading" ? <><Loader2 size={18} className="animate-spin" /> Enviando...</> : <>Solicitar registro <ArrowRight size={17} /></>}
                    </button>
                    <p className="text-slate-400 text-[11px] text-center">Te contactamos por WhatsApp en menos de 24 horas.</p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
  