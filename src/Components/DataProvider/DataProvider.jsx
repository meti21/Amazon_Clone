import React,{ createContext,useReducer } from "react"

// import { initialState, reducer } from "../../Utility/reducer";

export const DataContext = createContext()

export const DataProvider = ({ children, reducer, initialState }) => {
  return (
    // useReducer returns state and dispatch,so calling useReducer function will make state and dispatch to be available here.so that we can implement actions using dispatch and we can take anything from the state by distructuring
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};