/** @jsx jsx */
import {jsx} from "@emotion/core"
import  {useContext} from "react"
import Counter from "./Counter";
import {CounterContext} from "context/CounterContext"
import counterDisplayStyles from "./styles";



 

export default function CounterDisplay(props) {
  const [state,dispatch] = useContext(CounterContext)
  const counters = state.counters ;
   
  return (
    <section css={counterDisplayStyles}>
      {counters.map((item, index) => (
        <Counter
          key={item.id}
          index={index}
          counter={counters[index]}
          dispatch={dispatch}
        />
      ))}
    </section>
  );
}
