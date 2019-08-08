import { useReducer } from "react";

const initialState = {
  counters: [
    { id: "3be", count: 0 },
    { id: "4ct", count: 0 },
    { id: "5fy", count: 0 },
    { id: "6dm", count: 0 },
  ]
};

 
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

const useValue = () => useReducer(reducer, initialState);

 


export default useValue;
