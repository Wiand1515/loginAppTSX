import { AuthContext } from "./AuthContext";

import { useReducer } from "react";
import { authReducer } from "./authReducer";

interface Props {
  children: JSX.Element
}

interface state {
  [key: string]: any;
}

const init = () => {
  // @ts-ignore
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(authReducer, {}, init);

  const login = (user: state) => {


    localStorage.setItem("user", JSON.stringify(user));

    dispatch({
      type: 'login', payload: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
