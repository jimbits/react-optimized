/** @jsx jsx */
import {jsx} from "@emotion/core"
import React from "react"
import  {useContext} from "react"
import Counter from "./Counter";
import {CounterContext} from "context/hooks/CounterContext"
import counterDisplayStyles from "./styles";


const ShouldRender = (nextProps, prevProps) => {
  if (nextProps.counters[nextProps.index] === prevProps.counters[prevProps.index]) {
    return true;
  } else {
    return false;
  }
};
const OptimizeCounter = React.memo(({index, counters, dispatch})=>{
  return (
     <Counter
          index={index}
          counter={counters[index]}
          dispatch={dispatch}
        /> 
  )
}, ShouldRender)
 

export default function CounterDisplay(props) {
  const [state,dispatch] = useContext(CounterContext)
  const counters = state.counters ;
   
  return (
    <section css={counterDisplayStyles}>
      {counters.map((item, index) => (
       <OptimizeCounter key={item.id}  index={index} counters={counters} dispatch={dispatch}/>
      ))}
    </section>
  );
}
