import {useReducer} from "react"

const reducer = (state, action) => {
  switch (action) {
    case "add":
      console.log("add");
      return state;
    case "sub":
      console.log("sub");
      return state;
    default:
      return state;
  }
};

const useCounterValue = useReducer(reducer,state)

export default reducer
