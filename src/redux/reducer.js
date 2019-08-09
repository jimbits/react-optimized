const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      console.log("add")
    
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
      console.log("sub")
      console.log(action.payload)
      const newSubList = state.counters.map((item, index) => {
        if (item.id === action.payload.id) {
          return {
            ...item, // copy the existing item
            count: item.count - 1
          };
        } else {
          return item;
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


export default reducer