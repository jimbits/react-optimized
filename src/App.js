import React from "react";
import GlobalStyles from "./css/GlobalStyles";
import Navbar from "./components/sitenav";
import LandingPage from "./pages/landingpage";
import CounterDisplay from "./containers/counters/CounterDisplay";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <div>
      <CounterProvider>
        <GlobalStyles />
        <Navbar />
        <CounterDisplay />
        <LandingPage />
      </CounterProvider>
    </div>
  );
}

export default App;
