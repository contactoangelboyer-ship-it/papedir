import React from "react";
  import { motion } from "framer-motion";
  import { ArrowRight, Home } from "lucide-react";

  const E = [0.22, 1, 0.36, 1] as const;
  const BLUE = "#1A6EFF";
  const NAVY = "#0D1E3F";

  export default function NotFound() {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

        <motion.a href="/" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="mb-12">
          <img src="/logo-transparent.png" alt="Pappedir" className="h-12 w-auto object-contain" />
        </motion.a>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: E }}>
          <p className="text-[120px] md:text-[180px] font-extrabold leading-none select-none"
            style={{ color: "#EEF4FF" }}>404</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: E }}
          className="-mt-8 max-w-md">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "#EEF4FF" }}>
            <span className="text-3xl">🗺️</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: NAVY }}>
            Esta ruta no existe
          </h1>
          <p className="text-slate-500 text-[16px] leading-relaxed mb-8">
            Parece que el conductor tomó un camino equivocado. La página que buscas no está disponible.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/" style={{ background: BLUE }}
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-white font-extrabold text-[14px] shadow-[0_6px_20px_rgba(26,110,255,.4)] hover:opacity-90 transition-all active:scale-95">
              <Home size={16} /> Volver al inicio
            </a>
            <a href="/servicios"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-[14px] border-2 border-slate-200 hover:border-[#1A6EFF]/30 hover:bg-[#F5F8FF] transition-all"
              style={{ color: NAVY }}>
              Ver servicios <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-x-6 gap-y-2 justify-center">
          {[["Ciudades","/ciudades"],["Conductores","/conductores"],["Negocios","/negocios"],["FAQ","/faq"]].map(([l,h]) => (
            <a key={l} href={h} className="text-slate-400 text-[13px] font-semibold hover:text-[#1A6EFF] transition-colors">{l}</a>
          ))}
        </motion.div>
      </div>
    );
  }
  