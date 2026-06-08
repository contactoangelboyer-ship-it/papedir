import React, { useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

  const E = [0.22, 1, 0.36, 1] as const;
  const BLUE = "#1A6EFF";
  const NAVY = "#0D1E3F";

  const SERVICES_LINKS = [
    { href: "/servicios#transporte", emoji: "🚗", label: "Transporte", sub: "Viajes seguros en carro o moto" },
    { href: "/servicios#comida",     emoji: "🍔", label: "Comida",     sub: "Tus restaurantes favoritos" },
    { href: "/servicios#compras",    emoji: "📦", label: "Compras",    sub: "Sin salir de casa" },
    { href: "/servicios#farmacia",   emoji: "💊", label: "Farmacia",   sub: "Medicamentos al instante" },
    { href: "/servicios#envios",     emoji: "📬", label: "Envíos",     sub: "Encomiendas rápidas" },
    { href: "/servicios#mototaxi",   emoji: "🏍️", label: "Mototaxi",   sub: "Rápido y económico" },
  ];

  const TEAM_LINKS = [
    { href: "/conductores", emoji: "🚗", label: "Conductores",  sub: "Gana llevando personas" },
    { href: "/conductores", emoji: "🏍️", label: "Repartidores", sub: "Gana con delivery" },
    { href: "/negocios",    emoji: "🏪", label: "Negocios",     sub: "Pon tu negocio en Pappedir" },
  ];

  export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [teamOpen, setTeamOpen] = useState(false);

    return (
      <motion.header initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: E }}
        className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-2xl border-b border-slate-100/80">
        <div className="max-w-7xl mx-auto px-5 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="shrink-0">
            <img src="/logo-transparent.png" alt="Pappedir" className="h-12 w-auto object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {/* Servicios dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-[13.5px] font-semibold text-slate-500 hover:text-[#0D1E3F] rounded-xl hover:bg-slate-50 transition-all">
                Servicios <ChevronDown size={13} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div initial={{ opacity: 0, y: 8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }} transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl border border-slate-100 p-2"
                    style={{ boxShadow: "0 8px 40px rgba(0,0,0,.12)" }}>
                    {SERVICES_LINKS.map(s => (
                      <a key={s.label} href={s.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F5F8FF] transition-colors group">
                        <span className="text-xl w-8 text-center">{s.emoji}</span>
                        <div>
                          <p className="text-[13px] font-bold text-[#0D1E3F] group-hover:text-[#1A6EFF] transition-colors">{s.label}</p>
                          <p className="text-[11px] text-slate-400">{s.sub}</p>
                        </div>
                      </a>
                    ))}
                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <a href="/servicios" className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#F5F8FF] text-[13px] font-bold text-[#1A6EFF] transition-colors">
                        Ver todos los servicios <ArrowRight size={13} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Únete dropdown */}
            <div className="relative" onMouseEnter={() => setTeamOpen(true)} onMouseLeave={() => setTeamOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-[13.5px] font-semibold text-slate-500 hover:text-[#0D1E3F] rounded-xl hover:bg-slate-50 transition-all">
                Únete <ChevronDown size={13} className={`transition-transform ${teamOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {teamOpen && (
                  <motion.div initial={{ opacity: 0, y: 8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }} transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl border border-slate-100 p-2"
                    style={{ boxShadow: "0 8px 40px rgba(0,0,0,.12)" }}>
                    {TEAM_LINKS.map(t => (
                      <a key={t.label} href={t.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F5F8FF] transition-colors group">
                        <span className="text-xl w-8 text-center">{t.emoji}</span>
                        <div>
                          <p className="text-[13px] font-bold text-[#0D1E3F] group-hover:text-[#1A6EFF] transition-colors">{t.label}</p>
                          <p className="text-[11px] text-slate-400">{t.sub}</p>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/ciudades" className="px-4 py-2 text-[13.5px] font-semibold text-slate-500 hover:text-[#0D1E3F] rounded-xl hover:bg-slate-50 transition-all">Ciudades</a>
            <a href="/nosotros" className="px-4 py-2 text-[13.5px] font-semibold text-slate-500 hover:text-[#0D1E3F] rounded-xl hover:bg-slate-50 transition-all">Nosotros</a>
            <a href="/faq"      className="px-4 py-2 text-[13.5px] font-semibold text-slate-500 hover:text-[#0D1E3F] rounded-xl hover:bg-slate-50 transition-all">FAQ</a>
          </nav>

          <div className="flex items-center gap-2.5">
            <a href="/#registro" style={{ background: BLUE }}
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-extrabold text-white shadow-[0_4px_16px_-2px_rgba(26,110,255,.45)] hover:opacity-90 transition-all active:scale-95">
              Únete al equipo
            </a>
            <button className="md:hidden p-1.5 text-slate-500" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-slate-100 bg-white md:hidden">
              <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 px-3 pt-1 pb-2">Servicios</p>
                {SERVICES_LINKS.map(s => (
                  <a key={s.label} href={s.href} onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors">
                    <span className="text-lg">{s.emoji}</span>
                    <span className="text-sm font-semibold text-slate-700">{s.label}</span>
                  </a>
                ))}
                <div className="border-t border-slate-100 my-2" />
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 px-3 pb-2">Únete</p>
                {TEAM_LINKS.map(t => (
                  <a key={t.label} href={t.href} onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors">
                    <span className="text-lg">{t.emoji}</span>
                    <span className="text-sm font-semibold text-slate-700">{t.label}</span>
                  </a>
                ))}
                <div className="border-t border-slate-100 my-2" />
                {[["Ciudades","/ciudades"],["Nosotros","/nosotros"],["FAQ","/faq"]].map(([l,h]) => (
                  <a key={l} href={h} onClick={() => setMenuOpen(false)}
                    className="px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">{l}</a>
                ))}
                <a href="/#registro" onClick={() => setMenuOpen(false)}
                  className="mt-2 px-4 py-3 text-sm font-extrabold text-white rounded-xl text-center transition-colors"
                  style={{ background: BLUE }}>Únete al equipo</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    );
  }
  