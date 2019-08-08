/** @jsx jsx */
import {jsx} from "@emotion/core"

import Counter from "./Counter";
import counterDisplayStyles from "./styles";
import {  useTracked, createContainer } from "react-tracked";
import newValue from "context/tracked/CounterContext"


 
const OptimizedContainer = ({index})=>{
  const Container = createContainer(newValue)
 
  return (
     
    <Container.Provider>
        <Counter useTracked={Container.useTracked} index={index} />
    </Container.Provider>
     
  );
}

function CounterDisplay(props) {
   const [state, dispatch] = useTracked();
   const counters = Object.keys(state.counters);
  
   
 
 
  return (
    <div css={counterDisplayStyles}>
      {state.counters.map((item, index) => (
        <OptimizedContainer key={item.id} index={index} />
      ))}
    </div>
  ); 
}

export default CounterDisplay
