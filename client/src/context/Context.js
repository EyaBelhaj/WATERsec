import { useEffect, useReducer, createContext, React } from "react";
import Reducers from "./Reducer";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};
export const Context = createContext(initialState);
export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducers, initialState);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    }
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}
