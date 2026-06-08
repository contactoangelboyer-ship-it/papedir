import React, { useRef, useState } from "react";
  import { motion, useInView, AnimatePresence } from "framer-motion";
  import { Store, TrendingUp, Users, Shield, Zap, DollarSign, CheckCircle2, ArrowRight, Loader2, PartyPopper, Star } from "lucide-react";
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

  const BUSINESS_TYPES = [
    { emoji: "🍔", label: "Restaurantes",     sub: "Comida rápida, criollos, internacionales" },
    { emoji: "💊", label: "Farmacias",        sub: "Medicamentos y productos de salud" },
    { emoji: "🛒", label: "Supermercados",    sub: "Abastos y tiendas de comida" },
    { emoji: "👗", label: "Tiendas",          sub: "Ropa, accesorios, electrónica" },
    { emoji: "🥐", label: "Panaderías",       sub: "Pan, pasteles y repostería" },
    { emoji: "🏪", label: "Otros negocios",   sub: "Si vendes algo, Pappedir te sirve" },
  ];

  const BENEFITS_BIZ = [
    { icon: TrendingUp, title: "Más ventas, más clientes",     desc: "Llega a miles de usuarios de Pappedir en Portuguesa que buscan exactamente lo que ofreces." },
    { icon: Users,      title: "Repartidores verificados",     desc: "Nosotros ponemos los repartidores. Tú te concentras en tu producto." },
    { icon: DollarSign, title: "Pagos rápidos y seguros",      desc: "Liquidación semanal directa. Sin esperas, sin comisiones ocultas." },
    { icon: Shield,     title: "Sin riesgo inicial",           desc: "No hay costo de incorporación. Empiezas a pagar solo cuando recibes pedidos." },
    { icon: Zap,        title: "Onboarding en 48 horas",       desc: "Te incorporamos al catálogo en menos de 2 días hábiles tras tu registro." },
    { icon: Store,      title: "Panel de control propio",      desc: "Ve tus pedidos, ganancias y estadísticas en tiempo real desde la app." },
  ];

  const STEPS_BIZ = [
    { n: "01", title: "Regístralo",        desc: "Llena el formulario con los datos de tu negocio. Tarda 3 minutos." },
    { n: "02", title: "Verificamos",       desc: "El equipo revisa tu negocio y te confirma por WhatsApp en 48 horas." },
    { n: "03", title: "Te incorporamos",   desc: "Tu negocio aparece en la app de Pappedir para todos los usuarios." },
    { n: "04", title: "Recibe pedidos",    desc: "Los clientes piden, el repartidor recoge, y tú cobras cada semana." },
  ];

  const TESTIMONIALS_BIZ = [
    { name: "Carmen R.",  tipo: "Restaurante", city: "Acarigua", stars: 5, text: "Desde que me uní a Pappedir, las ventas de mi restaurante subieron un 40%. Los repartidores son profesionales." },
    { name: "Eduardo M.", tipo: "Farmacia",    city: "Guanare",  stars: 5, text: "Mis clientes pueden pedir sus medicamentos sin salir. El proceso es sencillo y los pagos llegan puntual." },
    { name: "Luisa F.",   tipo: "Panadería",   city: "Araure",   stars: 5, text: "Era escéptica al principio pero ahora el 30% de mis ventas diarias viene por Pappedir. Chévere de verdad." },
  ];

  export default function Negocios() {
    const [form, setForm] = useState({ nombre: "", nombre_negocio: "", tipo_negocio: "restaurante", whatsapp: "", ciudad: "Guanare", direccion: "" });
    const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formError, setFormError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setFormState("loading");
      try {
        const res = await fetch("/api/registro", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, tipo: "embajador" }),
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
          <div className="relative max-w-5xl mx-auto px-5 text-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-[13px] font-bold text-white/80 mb-6">
                🏪 Para negocios
              </span>
              <h1 className="text-[clamp(36px,5.5vw,68px)] font-extrabold text-white leading-[1.06] tracking-tight mb-5">
                Haz crecer tu negocio<br /><span style={{ color: "#60A5FA" }}>con Pappedir</span>
              </h1>
              <p className="text-white/60 text-[17px] leading-relaxed mb-8 max-w-xl mx-auto">
                Únete como negocio aliado y llega a miles de clientes en Portuguesa sin contratar repartidores propios.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="#registro-negocio" style={{ background: BLUE }}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-extrabold text-[14px] shadow-[0_8px_28px_rgba(26,110,255,0.5)] hover:opacity-90 transition-all">
                  Registrar mi negocio <ArrowRight size={16} />
                </a>
                <a href="#como-funciona-biz" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-bold text-[14px] border border-white/20 hover:bg-white/10 transition-all">
                  Cómo funciona
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Business types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <Reveal className="text-center mb-12">
              <motion.p variants={up} className="text-xs font-extrabold uppercase tracking-[0.18em] mb-3" style={{ color: BLUE }}>Categorías</motion.p>
              <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold" style={{ color: NAVY }}>
                ¿Qué tipo de negocio tienes?
              </motion.h2>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {BUSINESS_TYPES.map((b, i) => (
                  <motion.div key={i} variants={up}
                    className="bg-white rounded-3xl p-6 border border-slate-100 text-center hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                    <span className="text-4xl block mb-3">{b.emoji}</span>
                    <p className="font-extrabold text-[15px] mb-1 group-hover:text-[#1A6EFF] transition-colors" style={{ color: NAVY }}>{b.label}</p>
                    <p className="text-slate-400 text-[12px]">{b.sub}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20" style={{ background: "#F5F8FF" }}>
          <div className="max-w-7xl mx-auto px-5">
            <Reveal className="text-center mb-12">
              <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold" style={{ color: NAVY }}>
                Por qué los negocios eligen <span style={{ color: BLUE }}>Pappedir</span>
              </motion.h2>
            </Reveal>
            <Reveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {BENEFITS_BIZ.map((b, i) => {
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

        {/* How it works */}
        <section id="como-funciona-biz" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <Reveal className="text-center mb-12">
              <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold" style={{ color: NAVY }}>
                En 4 pasos tu negocio está <span style={{ color: BLUE }}>en la app</span>
              </motion.h2>
            </Reveal>
            <Reveal>
              <div className="flex flex-col gap-4">
                {STEPS_BIZ.map((step, i) => (
                  <motion.div key={i} variants={up}
                    className="flex items-start gap-6 p-6 rounded-3xl bg-white border border-slate-100"
                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shrink-0"
                      style={{ background: `linear-gradient(135deg, ${BLUE}, #0B4FCC)` }}>{step.n}</div>
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
              <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold" style={{ color: NAVY }}>Negocios que ya confían en Pappedir</motion.h2>
            </Reveal>
            <Reveal>
              <div className="grid md:grid-cols-3 gap-5">
                {TESTIMONIALS_BIZ.map((t, i) => (
                  <motion.div key={i} variants={up} className="bg-white rounded-3xl p-7 border border-slate-100" style={{ boxShadow: "0 2px 8px rgba(0,0,0,.04)" }}>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold mb-4" style={{ background: "#EEF4FF", color: BLUE }}>{t.tipo}</span>
                    <div className="flex text-amber-400 mb-3">{[...Array(t.stars)].map((_,j) => <Star key={j} size={14} fill="currentColor" />)}</div>
                    <p className="text-slate-600 text-[14px] leading-relaxed mb-5">"{t.text}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-sm" style={{ background: `linear-gradient(135deg, ${BLUE}, #0B4FCC)` }}>{t.name[0]}</div>
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

        {/* Registration form */}
        <section id="registro-negocio" className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-5">
            <Reveal className="text-center mb-10">
              <motion.h2 variants={up} className="text-[clamp(26px,4vw,48px)] font-extrabold" style={{ color: NAVY }}>Registra tu negocio</motion.h2>
              <motion.p variants={up} className="text-slate-500 mt-3">Te incorporamos en menos de 48 horas.</motion.p>
            </Reveal>
            <div className="bg-white rounded-3xl p-8 border border-slate-100" style={{ boxShadow: "0 4px 20px rgba(26,110,255,.08)" }}>
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8 gap-5">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "#EEF4FF" }}>
                      <PartyPopper size={36} style={{ color: BLUE }} />
                    </div>
                    <h3 className="text-2xl font-extrabold" style={{ color: NAVY }}>¡Registro recibido!</h3>
                    <p className="text-slate-500">Nos ponemos en contacto en menos de 48 horas. ¡Bienvenido a Pappedir!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">Nombre del negocio *</label>
                      <input name="nombre_negocio" value={form.nombre_negocio} onChange={handleChange} required placeholder="Ej. Panadería El Trigal"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium placeholder-slate-300 focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">Tipo de negocio *</label>
                      <select name="tipo_negocio" value={form.tipo_negocio} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium bg-white focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all">
                        {[["restaurante","🍔 Restaurante / Comida"],["farmacia","💊 Farmacia"],["supermercado","🛒 Supermercado / Abastos"],["tienda","👗 Tienda / Ropa / Accesorios"],["panaderia","🥐 Panadería / Pastelería"],["otro","🏪 Otro tipo"]].map(([v,l]) => <option key={v} value={v}>{l}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">Nombre del responsable *</label>
                      <input name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Ej. María González"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium placeholder-slate-300 focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">WhatsApp *</label>
                      <input name="whatsapp" value={form.whatsapp} onChange={handleChange} required placeholder="+58 412 1234567" type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium placeholder-slate-300 focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">Ciudad *</label>
                        <select name="ciudad" value={form.ciudad} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium bg-white focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all">
                          {["Guanare","Acarigua","Araure","Biscucuy","Ospino","Otra"].map(c => <option key={c}>{c}</option>)}
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-bold text-slate-500 uppercase tracking-wide">Dirección</label>
                        <input name="direccion" value={form.direccion} onChange={handleChange} placeholder="Av. Principal, Local 3"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium placeholder-slate-300 focus:outline-none focus:border-[#1A6EFF] focus:ring-2 focus:ring-[#1A6EFF]/15 transition-all" />
                      </div>
                    </div>
                    {formError && <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">{formError}</p>}
                    <button type="submit" disabled={formState === "loading"} style={{ background: BLUE }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-white font-extrabold text-[15px] shadow-[0_8px_28px_-4px_rgba(26,110,255,.4)] hover:opacity-90 transition-all disabled:opacity-60">
                      {formState === "loading" ? <><Loader2 size={18} className="animate-spin" /> Enviando...</> : <>Registrar mi negocio <ArrowRight size={17} /></>}
                    </button>
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
  