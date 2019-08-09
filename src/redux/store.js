import {createStore} from "redux"
import reducer from "./reducer"

const initialState = {
  counters: [
    { id: "3be", count: 0 },
    { id: "4ct", count: 0 },
    { id: "5fy", count: 0 },
    { id: "6dm", count: 0 }
  ]
};

const store = createStore(reducer, initialState)

export default store