import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import CalculatorAnticipata from "@/pages/CalculatorAnticipata";
import CalculatorPilon3 from "@/pages/CalculatorPilon3";
import Planificator from "@/pages/Planificator";
import Contact from "@/pages/Contact";
import Despre from "@/pages/Despre";
import Confidentialitate from "@/pages/Confidentialitate";
import Termeni from "@/pages/Termeni";
import PensionPlanning from "@/pages/PensionPlanning";
import PensionTypes from "@/pages/PensionTypes";
import Legislation from "@/pages/Legislation";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/calculator-anticipata" component={CalculatorAnticipata} />
      <Route path="/calculator-pilon3" component={CalculatorPilon3} />
      <Route path="/planificator" component={Planificator} />
      <Route path="/contact" component={Contact} />
      <Route path="/despre" component={Despre} />
      <Route path="/confidentialitate" component={Confidentialitate} />
      <Route path="/termeni" component={Termeni} />
      <Route path="/planificarea-pensiei" component={PensionPlanning} />
      <Route path="/tipuri-de-pensii" component={PensionTypes} />
      <Route path="/legislatie-si-resurse" component={Legislation} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
