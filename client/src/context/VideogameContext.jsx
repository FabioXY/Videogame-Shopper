import { createContext, useReducer } from "react";

export const VideogamesContext = createContext();

export const videogamesReducer = (state, action) => {
  switch (action.type) {
    case "SET_VIDEOGAMES":
      return {
        videogames: action.payload,
      };
    case "CREATE_VIDEOGAME":
      return {
        videogames: [action.payload, ...state.videogames],
      };
    case "DELETE_VIDEOGAME":
      return {
        videogames: state.videogames
          ? state.videogames.filter((v) => v._id !== action.payload._id)
          : [],
      };
    default:
      return state;
  }
};

export const VideogamesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videogamesReducer, { videogames: [] });

  return (
    <VideogamesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </VideogamesContext.Provider>
  );
};
