import { useState, createContext, useEffect } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({children}) => {
  const localData = JSON.parse(localStorage.getItem('token'));
  const [token, setToken] = useState(localData);

  useEffect(() => {
    if(token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <TokenContext.Provider value={{token, setToken}}>
      {children}
    </TokenContext.Provider>
  );
};