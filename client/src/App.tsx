import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import PasswordGate from "./components/PasswordGate";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import Resume from "./pages/Resume";

// Base path: /allison-cassing-portfolio in GitHub Pages, / in dev/Manus
const BASE = import.meta.env.BASE_URL ?? "/";

function Router() {
  return (
    <WouterRouter base={BASE.replace(/\/$/, "")}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/case-study" component={CaseStudy} />
      <Route path="/resume" component={Resume} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <PasswordGate>
            <Router />
          </PasswordGate>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
