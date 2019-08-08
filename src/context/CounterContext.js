import React, { useReducer } from "react";

const initialState = {
  counters: [
    { id: "3be", count: 0 },
    { id: "4ct", count: 0 },
    { id: "5fy", count: 0 },
    { id: "6dm", count: 0 },
  ]
};

const CounterContext = React.createContext(initialState);
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
    
      const updatedCounterList = state.counters.map((item, index) => {
        if (item.id === action.payload.id) {
          return {
            ...item, // copy the existing item
            count: item.count + 1
          };
        } else {
          return item;
        }
      });
     const newState = {
       ...state,
       counters: updatedCounterList
     }
     console.log(newState)
      return newState
    case "sub":
       state.counters.map((item, index) => {
         if (item.id === action.payload.id) {
           console.log(action.payload.id);
           console.log("update object");
         }else{
           return item
         }
       });
      return  state
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
