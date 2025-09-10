import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Techscribe from "./pages/events/Techscribe";
import PixelCraft from "./pages/events/PixelCraft";
import CodeQuest from "./pages/events/CodeQuest";
import BrainChain from "./pages/events/BrainChain";
import Huntrix from "./pages/events/Huntrix";
import Secret from "./pages/events/secret";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events/techscribe" element={<Techscribe />} />
          <Route path="/events/pixelcraft" element={<PixelCraft />} />
          <Route path="/events/codequest" element={<CodeQuest />} />
          <Route path="/events/brainchain" element={<BrainChain />} />
          <Route path="/events/huntrix" element={<Huntrix />} />
          <Route path="/events/secret" element={<Secret />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
