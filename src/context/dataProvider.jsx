import { createContext, useReducer } from "react";
const ThemeContext = createContext();

const initialData = {
  theme:
    localStorage.getItem("class") == null
      ? ""
      : localStorage.getItem("class") === "dark"
      ? "dark"
      : "",
};
const reducer = (firstState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...firstState, theme: action.newValue };
    case "LOCAL":
      return { ...firstState, theme: action.newValue };
    default:
      return firstState;
  }
};

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const Toggle = (T) => {
    localStorage.setItem("class", T);
    dispatch({ type: "TOGGLE", newValue: T });
  };
  return (
    <ThemeContext.Provider value={{ ...firstState, Toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
