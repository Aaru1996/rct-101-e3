import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [isAuth, setIsAuth] = useState(false);

const login =() => {
  setIsAuth(true);
}

  return <AuthContext.Provider value={{isAuth,login}}>{children}</AuthContext.Provider>;
};
