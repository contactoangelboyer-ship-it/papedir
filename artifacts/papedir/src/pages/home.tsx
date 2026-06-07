import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Bike, 
  ShoppingBag, 
  MapPin, 
  Star, 
  ChevronRight,
  Menu,
  Clock
} from "lucide-react";
import logoImg from "@/assets/images/logo.png";
import heroBgImg from "@/assets/images/hero-bg.png";
import foodImg from "@/assets/images/venezuelan-food.png";
import motoImg from "@/assets/images/moto-delivery.png";
import appMockupImg from "@/assets/images/app-mockup.png";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background overflow-hidden dark">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Pa'pedir" className="w-10 h-10 object-contain" />
            <span className="font-display font-bold text-2xl tracking-tight text-white">Pa'pedir</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm font-medium text-white/70 hover:text-primary transition-colors">Servicios</a>
            <a href="#como-funciona" className="text-sm font-medium text-white/70 hover:text-primary transition-colors">Cómo funciona</a>
            <a href="#testimonios" className="text-sm font-medium text-white/70 hover:text-primary transition-colors">La gente dice</a>
            <Button className="rounded-full font-bold px-6 bg-primary text-white hover:bg-primary/90">Descargar App</Button>
          </nav>
          <button className="md:hidden text-white/70">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img 
              style={{ y: yHero }}
              src={heroBgImg} 
              alt="Caracas Sunset" 
              className="w-full h-[120%] object-cover opacity-40 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
          </div>

          <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="max-w-2xl"
            >
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <span className="flex w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-white/90">Ya activos en Caracas y Valencia</span>
              </motion.div>
              
              <motion.h1 variants={FADE_UP} className="font-display text-5xl md:text-7xl font-bold leading-[1.1] text-white mb-6">
                Todo lo que <span className="text-primary italic">necesitas</span>, al alcance de un toque.
              </motion.h1>
              
              <motion.p variants={FADE_UP} className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-lg">
                ¿Antojo de unas cachapas? ¿Necesitas una carrerita rápido? ¿Te faltó algo del abasto? Relájate, nosotros resolvemos. Pa'pedir es tu pana en la ciudad.
              </motion.p>
              
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold bg-primary text-white hover:bg-primary/90 w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(255,87,34,0.5)]">
                  Descarga gratis
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg font-bold border-white/20 text-white hover:bg-white/10 w-full sm:w-auto backdrop-blur-sm bg-white/5">
                  Sé un repartidor
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <img src={appMockupImg} alt="App Mockup" className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl" />
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-12 bg-card p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bike className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">El chamo llegó</p>
                  <p className="text-white/60 text-xs">Hace 2 min</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 -right-8 bg-card p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="font-bold text-secondary text-xl">🥟</span>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">2 Empanadas de Cazón</p>
                  <p className="text-white/60 text-xs">En camino...</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-24 relative z-10 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <motion.h2 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}
                className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Una sola app pa' <span className="text-secondary">resolver todo</span>
              </motion.h2>
              <motion.p 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}
                className="text-white/70 text-lg"
              >
                No te compliques bajando cincuenta aplicaciones. Aquí tienes todo lo que necesitas para tu día a día, hecho por gente que entiende tu ritmo.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Pide tu comida",
                  desc: "Desde la arepera de la esquina hasta tu restaurante favorito. Calientito y rápido.",
                  icon: <ShoppingBag size={32} />,
                  color: "bg-primary",
                  textColor: "text-primary"
                },
                {
                  title: "Muévete seguro",
                  desc: "Pide una mototaxi o un carro para llegar volando a donde vayas. Sin rollo y a buen precio.",
                  icon: <Bike size={32} />,
                  color: "bg-secondary",
                  textColor: "text-secondary"
                },
                {
                  title: "Mandados y favores",
                  desc: "¿Se te quedó la llave? ¿Hay que buscar una medicina? Nosotros hacemos la vuelta por ti.",
                  icon: <MapPin size={32} />,
                  color: "bg-accent",
                  textColor: "text-accent"
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] rounded-full ${service.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                  <div className={`w-16 h-16 rounded-2xl ${service.color}/10 flex items-center justify-center mb-6 ${service.textColor}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed mb-8">{service.desc}</p>
                  <Button variant="ghost" className={`p-0 hover:bg-transparent hover:${service.textColor} font-bold h-auto`}>
                    Conoce más <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Split Features */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden aspect-square lg:aspect-auto lg:h-[600px]"
            >
              <img src={foodImg} alt="Comida Venezolana" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <div className="flex items-center gap-4 mb-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-white font-bold">4.9/5 en comida local</span>
                  </div>
                  <p className="text-white/80 text-sm">"Las mejores empanadas llegaron crujientes, papá."</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER}
              className="max-w-xl"
            >
              <motion.h2 variants={FADE_UP} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Puro sabor, <br/><span className="text-primary">cero estrés</span>
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/70 text-lg mb-8">
                Sabemos lo que te gusta. Por eso trabajamos con los mejores locales, desde la señora que hace las arepas más brutales en el centro, hasta los restaurantes de caché. Pides, pagas fácil y comes sabroso.
              </motion.p>

              <div className="space-y-6">
                {[
                  { title: "Pagos en bolívares o dólares", desc: "Pago móvil, Zelle, efectivo... como te sea más cómodo." },
                  { title: "Sigue tu pedido en vivo", desc: "Mira por dónde viene tu comida en tiempo real." },
                  { title: "Soporte activo", desc: "Si pasa algo, hablamos contigo de frente, sin robots fastidiosos." }
                ].map((item, i) => (
                  <motion.div variants={FADE_UP} key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{item.title}</h4>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Moto Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER}
              className="max-w-xl order-2 lg:order-1"
            >
              <motion.h2 variants={FADE_UP} className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                Chamba seria pa' <br/><span className="text-secondary">gente echada pa'lante</span>
              </motion.h2>
              <motion.p variants={FADE_UP} className="text-white/70 text-lg mb-8">
                ¿Tienes moto o carro? Conviértete en aliado de Pa'pedir. Maneja tu tiempo, genera ingresos a tu ritmo y únete a una comunidad que valora tu esfuerzo.
              </motion.p>
              
              <motion.ul variants={FADE_UP} className="space-y-4 mb-8">
                {["Gana plata todos los días", "Horarios 100% flexibles", "Bonos por lluvia o alta demanda", "Soporte de seguridad en la vía"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-secondary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={FADE_UP}>
                <Button size="lg" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8">
                  Quiero ser conductor
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden aspect-square lg:aspect-[4/3] order-1 lg:order-2"
            >
              <img src={motoImg} alt="Delivery Rider" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="py-24 bg-card relative">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-16">
              Lo que dice la <span className="text-primary italic">calle</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Luis M.", city: "Caracas", text: "Marico, la pedí ayer para traer unas cosas de farmacia y el chamo llegó súper rápido. De verdad que resuelven." },
                { name: "Andrea P.", city: "Valencia", text: "Por fin una app donde puedo pagar con pagomóvil sin enrollarme la vida. Las pizzas llegaron perfectas." },
                { name: "Carlos T.", city: "Maracay", text: "Trabajo como mototaxi con ellos desde hace un mes y la plataforma es seria. Pagan al día y los bonos valen la pena." }
              ].map((testimonial, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-background border border-white/5 rounded-3xl p-8 relative"
                >
                  <div className="absolute top-4 right-6 text-primary text-6xl font-display opacity-20">"</div>
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>
                  <p className="text-white/80 text-lg mb-8 relative z-10 leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-xl">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-white/50 text-sm">{testimonial.city}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8">
                ¿Qué esperas pa' <br/>pedir?
              </h2>
              <p className="text-white/90 text-xl md:text-2xl mb-10">
                Bájate la app y empieza a resolver hoy mismo. Tu primera orden tiene delivery gratis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-14 px-10 text-lg font-bold bg-white text-primary hover:bg-white/90">
                  Descargar pa' iOS
                </Button>
                <Button size="lg" className="rounded-full h-14 px-10 text-lg font-bold bg-black text-white hover:bg-black/80">
                  Descargar pa' Android
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-white/10 py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={logoImg} alt="Pa'pedir" className="w-8 h-8 object-contain grayscale brightness-200" />
              <span className="font-display font-bold text-xl text-white">Pa'pedir</span>
            </div>
            <p className="text-white/50 text-sm">
              Hecho por venezolanos, para venezolanos. <br/>Resolviendo desde 2024.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Delivery de comida</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Transporte</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mandados</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Empresas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Compañía</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trabaja con nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Términos y condiciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
