import React   from 'react'
import {connect} from "react-redux";


function Counter(props) {
     
     const counters = props.counters;
     const index = props.index;
     const counter = counters[index]
    
    return (
      <aside className="counter">
        <header>
          <h1 className="counter-heading">Counter</h1>
          <p className="counter-display">{counter.count}</p>
        </header>
        <div className="counter-controls">
          <button onClick={() => props.addToCounter(counter.id)}>+</button>
          <button onClick={() => props.subtractFromCounter(counter.id)}>-</button>
        </div>
        <footer className="counter-id">
          <p>
            counter <span> {counter.id}</span>
          </p>
          <p>
            render <span> {(Math.random() * 100).toFixed(0)}</span>
          </p>
        </footer>
      </aside>
    );
}

const mapStateToProps = state => {
  return {
    counters: state.counters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCounter: (id) => dispatch({ type: "add", payload:{ id} }),
    subtractFromCounter: (id) => dispatch({ type: "sub", payload:{id} })
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
