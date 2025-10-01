import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "./useAuth";
import { validateCredentials } from "../../utils/validateCredentials";

const AuthProvider = () => {
  const [user, setUser] = useState(sessionStorage.getItem("user") || null);

  const login = async ({ user, password }) => {
    if (!(await validateCredentials(user, password))) {
      setUser(null);
      return false;
    }

    await new Promise((resolve) =>
      setTimeout(() => {
        sessionStorage.setItem("user", user);
        setUser({ user });
        resolve();
      }, 2000)
    ); // Simula um delay de 2 segundos

    return true;
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    return setUser(null);
  };

  const value = { user, login, logout, isLoggedIn: !!user };

  return (
    <AuthContext.Provider value={value}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
