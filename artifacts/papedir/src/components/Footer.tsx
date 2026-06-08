import React from "react";
  import { Phone, Instagram, Twitter, Facebook, MapPin, ArrowRight } from "lucide-react";

  const BLUE = "#1A6EFF";
  const NAVY = "#0D1E3F";

  export default function Footer() {
    return (
      <footer style={{ background: NAVY }} className="text-white">
        <div className="max-w-7xl mx-auto px-5 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

            {/* Brand */}
            <div className="lg:col-span-1">
              <img src="/logo-transparent.png" alt="Pappedir" className="h-12 w-auto object-contain mb-4 brightness-0 invert" />
              <p className="text-white/50 text-[13px] leading-relaxed mb-6">
                La app venezolana de transporte y delivery hecha pa' Portuguesa. Rápido, seguro, sin rollos.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Twitter,   href: "#", label: "Twitter" },
                  { icon: Facebook,  href: "#", label: "Facebook" },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} aria-label={label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                    onMouseEnter={e => (e.currentTarget.style.background = BLUE)}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}>
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Servicios */}
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/30 mb-4">Servicios</p>
              <div className="flex flex-col gap-2.5">
                {[
                  ["🚗 Transporte",  "/servicios#transporte"],
                  ["🍔 Comida",      "/servicios#comida"],
                  ["📦 Compras",     "/servicios#compras"],
                  ["💊 Farmacia",    "/servicios#farmacia"],
                  ["📬 Envíos",      "/servicios#envios"],
                  ["🏍️ Mototaxi",   "/servicios#mototaxi"],
                ].map(([label, href]) => (
                  <a key={label} href={href}
                    className="text-white/55 hover:text-white text-[13px] font-medium transition-colors">{label}</a>
                ))}
              </div>
            </div>

            {/* Compañía */}
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/30 mb-4">Compañía</p>
              <div className="flex flex-col gap-2.5">
                {[
                  ["Nosotros",     "/nosotros"],
                  ["Ciudades",     "/ciudades"],
                  ["Conductores",  "/conductores"],
                  ["Negocios",     "/negocios"],
                  ["FAQ",          "/faq"],
                ].map(([label, href]) => (
                  <a key={label} href={href}
                    className="text-white/55 hover:text-white text-[13px] font-medium transition-colors">{label}</a>
                ))}
              </div>
            </div>

            {/* Contacto */}
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/30 mb-4">Contacto</p>
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/584120000000" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/55 hover:text-white text-[13px] font-medium transition-colors">
                  <Phone size={14} /> WhatsApp soporte
                </a>
                <div className="flex items-start gap-2.5 text-white/55 text-[13px]">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>Portuguesa, Venezuela<br/>Guanare · Acarigua · Araure</span>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-2xl" style={{ background: "rgba(26,110,255,0.15)" }}>
                <p className="text-white text-[13px] font-bold mb-1">¿Quieres Pappedir en tu ciudad?</p>
                <a href="/ciudades" className="flex items-center gap-1.5 text-[#60A5FA] text-[12px] font-semibold hover:underline">
                  Ver expansión <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/30 text-[12px]">© 2025 Pappedir. Todos los derechos reservados.</p>
            <div className="flex gap-5">
              <a href="#" className="text-white/30 hover:text-white/60 text-[12px] transition-colors">Privacidad</a>
              <a href="#" className="text-white/30 hover:text-white/60 text-[12px] transition-colors">Términos</a>
              <a href="#" className="text-white/30 hover:text-white/60 text-[12px] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  