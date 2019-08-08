import React from "react";
import PageHeader from "components/pageheader"
import CounterDisplay from "containers/untracked"
function LandingPage(props) {
  return (
    <section>
      <PageHeader title="Global State Managment"
      tagline="Using Context API and React Hooks"
      />

      {props.children}
    </section>
  );
}

export default LandingPage;
