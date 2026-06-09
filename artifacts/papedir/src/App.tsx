import { Switch, Route, Router as WouterRouter } from "wouter";
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { Toaster } from "@/components/ui/toaster";
  import { TooltipProvider } from "@/components/ui/tooltip";
  import Home from "@/pages/home";
  import Servicios from "@/pages/servicios";
  import ConductoresPage from "@/pages/conductores-page";
  import Negocios from "@/pages/negocios";
  import Ciudades from "@/pages/ciudades";
  import Nosotros from "@/pages/nosotros";
  import FAQPage from "@/pages/faq";
  import NotFound from "@/pages/not-found";
    import FloatingActions from "@/components/FloatingActions";
    import SocialProofToast from "@/components/SocialProofToast";

  const queryClient = new QueryClient();

  function Router() {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/conductores" component={ConductoresPage} />
        <Route path="/negocios" component={Negocios} />
        <Route path="/ciudades" component={Ciudades} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/faq" component={FAQPage} />
        <Route component={NotFound} />
      </Switch>
    );
  }

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  export default App;
  