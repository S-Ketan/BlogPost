import { createContext, useContext, useState } from "react";

const stateContext = createContext({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
});
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, _setToken] = useState('hey');

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("AccessToken", token);
    } else {
      localStorage.removeItem("AccessToken");
    }
  };

  return (
    <stateContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
