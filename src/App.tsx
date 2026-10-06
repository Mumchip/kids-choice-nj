import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import WheelchairServices from "./pages/WheelchairServices";
import SchoolTransportation from "./pages/SchoolTransportation";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";
import NotFound from "./pages/NotFound";
import ScrollManager from "./components/ScrollManager";
import RevealManager from "./components/RevealManager";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <RevealManager />
        <a
          href="#main-content"
          className="sr-only z-50 rounded-full bg-bus px-5 py-3 font-bold text-asphalt focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <div className="flex min-h-[100dvh] flex-col">
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/wheelchair-services" element={<WheelchairServices />} />
              <Route path="/school-transportation" element={<SchoolTransportation />} />
              <Route path="/fleet" element={<Fleet />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join-us" element={<JoinUs />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
