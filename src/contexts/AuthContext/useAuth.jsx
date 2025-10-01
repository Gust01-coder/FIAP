import { useContext, createContext } from "react";

export const AuthContext = createContext(null);

export const useAuth = () => {
  if (AuthContext === null)
    throw new Error("Auth Context was not initialized!");

  return useContext(AuthContext);
};
