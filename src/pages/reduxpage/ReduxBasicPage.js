import React from 'react';
import PageHeader from "components/pageheader";
import CounterDisplay from "containers/reduxbasic"
 
 
function ReduxBasicPage(props) {
  
  return (
    <section>
      <PageHeader
        title="Redux Basic Example"
        tagline="Global State Managment"
      />
      <CounterDisplay/>
    </section>
  );
}

 


export default  ReduxBasicPage 