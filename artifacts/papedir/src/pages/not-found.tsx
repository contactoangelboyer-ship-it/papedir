export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background dark text-center px-6">
      <p className="text-9xl font-display font-bold text-primary/20 mb-0 leading-none">404</p>
      <h1 className="text-2xl font-display font-bold text-white mb-3 -mt-4">Página no encontrada</h1>
      <p className="text-white/50 mb-8 text-sm">Esta ruta no existe, chamo. Regresa al inicio.</p>
      <a href="/" className="px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors">
        Volver al inicio
      </a>
    </div>
  );
}
