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
    
      const newAddList = state.counters.map((item, index) => {
        if (item.id === action.payload.id) {
          return {
            ...item, // copy the existing item
            count: item.count + 1
          };
        } else {
          return item;
        }
      });
     
      return {
        ...state,
        counters: newAddList
      };
    case "sub":
       const newSubList = state.counters.map((item, index) => {
         if (item.id === action.payload.id) {
           return {
             ...item, // copy the existing item
             count: item.count - 1
           };
         }else{
           return item
         }
       });
      return {
        ...state,
        counters: newSubList
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
