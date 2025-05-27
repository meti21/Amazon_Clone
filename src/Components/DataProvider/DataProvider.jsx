import { createContext,useReducer } from "react"

export const DataContext = createContext()
// Creates a context object we can use across components and It gives .Provider and .Consumer.
// Any component can now useContext(DataContext) to access and update global state.

export const DataProvider = ({ children, reducer, initialState }) => {
  return (
    // const [state, dispatch] = useReducer(reducer, initialState)
    
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};