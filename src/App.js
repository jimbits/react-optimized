import React from "react";
import GlobalStyles from "./css/GlobalStyles";
import Navbar from "./components/sitenav";
import LandingPage from "./pages/hookspage";
import CounterDisplay from "./containers/untracked/CounterDisplay";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <div>
      <CounterProvider>
        <GlobalStyles />
        <Navbar />
        <LandingPage/>
        
      </CounterProvider>
    </div>
  );
}

export default App;
