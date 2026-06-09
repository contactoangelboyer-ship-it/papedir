import React, { useEffect, useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { X } from "lucide-react";

  const EVENTS = [
    { icon: "🚗", text: "Carlos pidió un viaje en", city: "Guanare", time: "hace 2 min" },
    { icon: "📦", text: "María recibió su pedido en", city: "Acarigua", time: "hace 3 min" },
    { icon: "🏍️", text: "Juan se registró como Pappe Rider en", city: "Guanare", time: "hace 1 min" },
    { icon: "⭐", text: "Luisa calificó 5 ★ su viaje en", city: "Acarigua", time: "hace 4 min" },
    { icon: "🍔", text: "Pedro recibió su comida caliente en", city: "Guanare", time: "hace 2 min" },
    { icon: "💊", text: "Ana recibió su pedido de farmacia en", city: "Acarigua", time: "hace 6 min" },
    { icon: "🚗", text: "Roberto completó su viaje a", city: "Guanare Centro", time: "hace 3 min" },
    { icon: "📬", text: "Un paquete fue entregado en", city: "Acarigua", time: "hace 1 min" },
    { icon: "🏍️", text: "Sofía solicitó un mototaxi en", city: "Guanare", time: "hace 5 min" },
    { icon: "🚗", text: "Andrés ganó su primer viaje en", city: "Acarigua", time: "hace 7 min" },
  ];

  export default function SocialProofToast() {
    const [current, setCurrent] = useState<number | null>(null);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
      if (dismissed) return;
      let timer: ReturnType<typeof setTimeout>;
      let idx = 0;

      const showNext = () => {
        setCurrent(idx);
        timer = setTimeout(() => {
          setCurrent(null);
          timer = setTimeout(() => {
            idx = (idx + 1) % EVENTS.length;
            showNext();
          }, 600);
        }, 6000);
      };

      timer = setTimeout(() => showNext(), 5000);
      return () => clearTimeout(timer);
    }, [dismissed]);

    const event = current !== null && !dismissed ? EVENTS[current] : null;

    return (
      <div className="fixed bottom-24 left-4 z-[99] max-w-[270px] pointer-events-none">
        <AnimatePresence mode="wait">
          {event && (
            <motion.div key={current}
              initial={{ opacity: 0, x: -30, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[0_4px_24px_rgba(0,0,0,.12)] border border-slate-100 pointer-events-auto">
              <span className="text-[22px] shrink-0">{event.icon}</span>
              <div className="min-w-0 flex-1">
                <p className="text-[11.5px] font-semibold text-slate-600 leading-snug">
                  {event.text} <span className="font-extrabold text-[#0D1E3F]">{event.city}</span>
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  {event.time}
                </p>
              </div>
              <button onClick={() => setDismissed(true)} className="shrink-0 text-slate-300 hover:text-slate-500 transition-colors p-1">
                <X size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  