import { Switch, Route } from "wouter";
import { useEffect } from "react";
import { initGA, trackPageView } from "@/lib/analytics";
import { useAnalytics } from "@/hooks/use-analytics";
// Static deployment - removed backend dependencies
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
import PlanificareGhid from "@/pages/PlanificareGhid";
import GreseliPlanificare from "@/pages/GreseliPlanificare";
import PilonulIIvsIII from "@/pages/PilonulIIvsIII";
import StrategiiInvestitii from "@/pages/StrategiiInvestitii";
import TipuriPensiiGhid from "@/pages/TipuriPensiiGhid";
import PensieLimitaVarsta from "@/pages/PensieLimitaVarsta";
import PensieAnticipata from "@/pages/PensieAnticipata";
import PensieUrmas from "@/pages/PensieUrmas";
import PensieInvaliditate from "@/pages/PensieInvaliditate";
import LegeaPensiilor from "@/pages/LegeaPensiilor";
import VarstaPensionare from "@/pages/VarstaPensionare";
import StagiuCotizare from "@/pages/StagiuCotizare";
import IndexareaPensiilor from "@/pages/IndexareaPensiilor";
import CumparareVechime from "@/pages/CumparareVechime";
import ArticleDetail from "@/pages/ArticleDetail";
import FAQ from "@/pages/FAQ";
import GhidCalculMediae from "@/pages/GhidCalculMediae";
import ConvertorECTS from "@/pages/ConvertorECTS";
import CalculatorBursa from "@/pages/CalculatorBursa";
import GhidECTS from "@/pages/GhidECTS";
import ClasificariAcademice from "@/pages/ClasificariAcademice";
import GhidBurse from "@/pages/GhidBurse";
import UniversitatiStat from "@/pages/UniversitatiStat";
import UniversitatiPrivate from "@/pages/UniversitatiPrivate";
import ProgrameStudiu from "@/pages/ProgrameStudiu";
import Admitere2025 from "@/pages/Admitere2025";
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
      <Route path="/planificare-ghid" component={PlanificareGhid} />
      <Route path="/greseli-planificare" component={GreseliPlanificare} />
      <Route path="/pilonul-2-vs-3" component={PilonulIIvsIII} />
      <Route path="/strategii-investitii" component={StrategiiInvestitii} />
      <Route path="/tipuri-pensii-ghid" component={TipuriPensiiGhid} />
      <Route path="/pensie-limita-varsta" component={PensieLimitaVarsta} />
      <Route path="/pensie-anticipata" component={PensieAnticipata} />
      <Route path="/pensie-urmas" component={PensieUrmas} />
      <Route path="/pensie-invaliditate" component={PensieInvaliditate} />
      <Route path="/legea-pensiilor" component={LegeaPensiilor} />
      <Route path="/varsta-pensionare" component={VarstaPensionare} />
      <Route path="/stagiu-cotizare" component={StagiuCotizare} />
      <Route path="/indexarea-pensiilor" component={IndexareaPensiilor} />
      <Route path="/cumparare-vechime" component={CumparareVechime} />
      <Route path="/articol/:slug" component={ArticleDetail} />
      <Route path="/faq" component={FAQ} />
      <Route path="/ghid-calcul-medie" component={GhidCalculMediae} />
      <Route path="/convertor-ects" component={ConvertorECTS} />
      <Route path="/calculator-bursa" component={CalculatorBursa} />
      <Route path="/ghid-ects" component={GhidECTS} />
      <Route path="/clasificari-academice" component={ClasificariAcademice} />
      <Route path="/ghid-burse" component={GhidBurse} />
      <Route path="/universitati-stat" component={UniversitatiStat} />
      <Route path="/universitati-private" component={UniversitatiPrivate} />
      <Route path="/programe-studiu" component={ProgrameStudiu} />
      <Route path="/admitere-2025" component={Admitere2025} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const analytics = useAnalytics();

  useEffect(() => {
    // Initialize analytics for static deployment
    initGA();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Router />
    </div>
  );
}

export default App;
