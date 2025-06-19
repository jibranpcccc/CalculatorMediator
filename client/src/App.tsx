import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";


import Home from "@/pages/Home";
import PensionPlanning from "@/pages/PensionPlanning";
import PensionTypes from "@/pages/PensionTypes";
import Legislation from "@/pages/Legislation";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import CalculatorAnticipata from "@/pages/CalculatorAnticipata";
import CalculatorPilon3 from "@/pages/CalculatorPilon3";
import Planificator from "@/pages/Planificator";
import Despre from "@/pages/Despre";
import Confidentialitate from "@/pages/Confidentialitate";
import Termeni from "@/pages/Termeni";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/planificarea-pensiei" component={PensionPlanning} />
      <Route path="/tipuri-de-pensii" component={PensionTypes} />
      <Route path="/legislatie-si-resurse" component={Legislation} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/calculator-anticipata" component={CalculatorAnticipata} />
      <Route path="/calculator-pilon3" component={CalculatorPilon3} />
      <Route path="/planificator" component={Planificator} />
      <Route path="/despre" component={Despre} />
      <Route path="/confidentialitate" component={Confidentialitate} />
      <Route path="/termeni" component={Termeni} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
