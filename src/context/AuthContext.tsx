import { createContext } from "react";

interface authContext {
    login: (user: {}) => void,
    logout: () => void,
    logged: boolean,
    user: object
}

export const AuthContext = createContext<authContext>({} as authContext);
