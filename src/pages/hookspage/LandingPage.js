import React from "react";
import PageHeader from "components/pageheader"
import CounterDisplay from "containers/untracked"
import { CounterProvider } from "context/hooks/CounterContext";
function LandingPage(props) {
  return (
    <section>
      <PageHeader 
      title="Context API and React Hooks"
      tagline="Global State Managment"
      />
      <CounterProvider>
         <CounterDisplay/>
      </CounterProvider>
    </section>
  );
}

export default LandingPage;
