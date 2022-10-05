import { Routes, Route } from "react-router-dom";
import { UserLoginView } from "../views/UserLoginView";
import { UserPostsView } from "../views/UserPostsView";
import { UserRegisterView } from "../views/UserRegisterView";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<UserLoginView />} />
                <Route path="register" element={<UserRegisterView />} />
                <Route
                    path="/*"
                    element={
                        <PrivateRoute>
                            <UserPostsView />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
};
