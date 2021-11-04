import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useHistory } from "react-router";
import api from "../../Services/api";

interface User {
  email: string;
  password: string;
  passwordConfirm: string;
  name?: string;
}

interface AuthProps {
  children: ReactNode;
}

interface AuthProviderData {
  signUp: (userData: User) => void;
  Logout: () => void;
  authToken: string;
  data: any;
  setAuthToken: Dispatch<SetStateAction<string>>;
  setData: Dispatch<SetStateAction<any>>;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();
  const [data, setData] = useState<User[]>([]);

  const [authToken, setAuthToken] = useState<string>(
    () => localStorage.getItem("@kenzieBurguer:token") || ""
  );

  const signUp = (userData: User) => {
    api
      .post("/register", userData)
      .then((response) => {
        setData(response.data);

        localStorage.setItem("@kenzieBurguer:token", response.data.accessToken);

        setAuthToken(response.data.accessToken);

        history.push("/store");
      })
      .catch((e) => console.log(e));
  };

  const Logout = () => {
    localStorage.clear();

    setAuthToken("");

    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ authToken, Logout, signUp, data, setAuthToken, setData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
