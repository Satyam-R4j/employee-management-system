import React, { createContext, useEffect, useState } from "react";
import { getLocaleStorage, setLocaleStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setLocaleStorage()
    const { employees, admin } = getLocaleStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
