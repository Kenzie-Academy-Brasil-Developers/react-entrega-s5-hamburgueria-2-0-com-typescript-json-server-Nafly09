import React, { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router";
import api from "../../Services/api";

interface User {
  email: string;
  password: string;
  name: string;
  age: string;
}

interface AuthProps {
  children: ReactNode;
}

interface AuthProviderData {
  signUp: (userData: User) => void;
  Logout: () => void;
  authToken: string;
  data: any;
  setAuthToken: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();
  const [data, setData] = useState({});

  const [authToken, setAuthToken] = useState<string>(
    () => localStorage.getItem("@kenzieBurguer:token") || ""
  );

  const signUp = async (userData: User) => {
    await api
      .post("/register", userData)
      .then((response) => {
        setData(response.data);

        localStorage.setItem("@kenzieBurguer:token", response.data.accessToken);

        setAuthToken(response.data.accessToken);

        history.push("/store");
      })
      .catch((err) => console.log(err));
  };

  const Logout = () => {
    localStorage.clear();

    setAuthToken("");

    history.push("/");
    console.log("entrou");
  };

  return (
    <AuthContext.Provider
      value={{ authToken, Logout, signUp, data, setAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
