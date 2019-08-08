import React, {useState, useMemo}  from 'react'
 


function Counter({index, counter, dispatch}) {
     

    
    return (
      <aside className="counter">
        <header>
          <h1 className="counter-heading">Counter</h1>
          <p className="counter-display">{ counter.count}</p>
        </header>
        <div className="counter-controls">
          <button
            onClick={() =>
              dispatch({ type: "add", payload: { id: counter.id } })
            }
          >
            +
          </button>
          <button
            onClick={() =>
              dispatch({ type: "sub", payload: { id: counter.id } })
            }
          >
            -
          </button>
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

 
export default Counter
