import { createContext, useContext, useState, useEffect } from "react";
import { getProfile, logoutUser } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getProfile();
        setUser(data.user);
      } catch {
        logoutUser();
      }
    };

    if (localStorage.getItem("token")) fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
