import React, {useContext} from 'react'
import {CounterContext} from "context/CounterContext"
function Counter(props) {
    const [state,dispatch] = useContext(CounterContext)
    const counter = state.counter;
    return (
        <aside  className="counter">
           <header>
               <h1 className="counter-heading">Counter</h1>
               <p className="counter-display">{counter.count}</p>
               </header> 
           <div className="counter-controls">
               <button onClick={() => dispatch({type:"add"})}>+</button>
               <button onClick={() => dispatch({type:"sub"})}>-</button>
           </div>
           <footer className="counter-id">
               <p>counter id<span> {counter.id}</span></p>
               <p>render id<span> {(Math.random()*100).toFixed(0)}</span></p>
           </footer>
        </aside>
    )
}

export default Counter
