import {createStore} from "react-redux"
import reducer from "./reducer"

const initialState = {
    counter:{
        id:1,
        count:0
    }
}

const store = createStore(state=initialState, reducer)

export default store