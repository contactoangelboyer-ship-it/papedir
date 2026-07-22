import React, { useEffect, useState, useRef } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { X } from "lucide-react";

  const EVENTS = [
    { icon: "🚗", text: "Carlos pidió un viaje en", city: "Caracas" },
    { icon: "📦", text: "María recibió su pedido en", city: "Valencia" },
    { icon: "🏍️", text: "Juan se registró como Pappe Rider en", city: "Maracaibo" },
    { icon: "⭐", text: "Luisa calificó 5 ★ su viaje en", city: "Barquisimeto" },
    { icon: "🍔", text: "Pedro recibió su comida en", city: "Guanare" },
    { icon: "💊", text: "Ana recibió su pedido de farmacia en", city: "Maracay" },
    { icon: "🏍️", text: "Sofía solicitó un mototaxi en", city: "Valencia" },
    { icon: "🚗", text: "Andrés completó su viaje en", city: "Caracas" },
    { icon: "📬", text: "Luis envió una encomienda desde", city: "Mérida" },
    { icon: "🏪", text: "Restaurante El Fogón se unió en", city: "Maracaibo" },
  ];

  export default function SocialProofToast() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [idx, setIdx] = useState(0);
    const idxRef = useRef(0);

    useEffect(() => {
      if (dismissed) return;

      const show = () => {
        setIdx(idxRef.current);
        setVisible(true);
        setTimeout(() => {
          setVisible(false);
          idxRef.current = (idxRef.current + 1) % EVENTS.length;
        }, 5500);
      };

      const t = setTimeout(show, 4500);
      const iv = setInterval(show, 10000);
      return () => { clearTimeout(t); clearInterval(iv); };
    }, [dismissed]);

    if (dismissed) return null;
    const ev = EVENTS[idx];

    return (
      <div className="fixed bottom-24 left-4 z-[99] max-w-[270px] pointer-events-none">
        <AnimatePresence mode="wait">
          {visible && (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_4px_24px_rgba(0,0,0,.12)] border border-slate-100 pointer-events-auto"
            >
              <span className="text-[22px] shrink-0">{ev.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[11.5px] font-semibold text-slate-600 leading-snug">
                  {ev.text} <span className="font-extrabold text-[#0D1E3F]">{ev.city}</span>
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> En vivo
                </p>
              </div>
              <button onClick={() => setDismissed(true)} className="shrink-0 text-slate-300 hover:text-slate-500 transition-colors p-1" aria-label="Cerrar">
                <X size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  