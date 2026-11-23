import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BusinessPage from "./pages/BusinessPage";
import SocialFoundationPage from "./pages/SocialFoundationPage";
import { businesses } from "./data/businesses";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/social-foundation" component={SocialFoundationPage} />
      {businesses
        .filter((business) => business.slug !== "social-foundation")
        .map((business) => (
          <Route key={business.slug} path={`/${business.slug}`}>
            <BusinessPage slug={business.slug} />
          </Route>
        ))}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
