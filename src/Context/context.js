import { createContext, useContext } from "react";

export const Auth = createContext(null); // Ensure it's exported

export const useAuth = () => {
return useContext(Auth);
};
