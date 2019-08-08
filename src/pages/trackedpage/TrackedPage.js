import React from "react";
import PageHeader from "components/pageheader"
import CounterDisplay from "containers/tracked"
 import { Provider } from "react-tracked";
 import useValue from "context/tracked/CounterContext";
function TrackedPage(props) {
  return (
    <section>
      <PageHeader
        title="React Tracked Library"
        tagline="Global State Managment"
      />
      <Provider useValue={useValue}>
        <CounterDisplay />
      </Provider>
    </section>
  );
}

export default TrackedPage;
