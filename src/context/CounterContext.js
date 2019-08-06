import React, { useReducer } from "react";

const initialState = {
  counter: {
    id: "3be",
    count: 0
  }
};

const CounterContext = React.createContext(initialState);
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      console.log("add");
      return {
        ...state, counter:{
           ...state.counter,
           count: state.counter.count +1
        }
      };
    case "sub":
      return {
        ...state, counter:{
           ...state.counter,
           count: state.counter.count  - 1
        }
      };
    default:
      return state;
  }
};

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={[state, dispatch]}>
      {children}
    </CounterContext.Provider>
  );
}



export {CounterContext, CounterProvider};
