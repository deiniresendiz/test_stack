import { Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage";
import { LogsPage } from "../pages/LogsPage";
import { UserPage } from "../pages/UserPage";
import { Navbar } from "../components";

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="users" element={<UsersPage />} />
                <Route path="user/:userId" element={<UserPage />} />
                <Route path="logs" element={<LogsPage />} />
                <Route path="/*" element={<UsersPage />} />
            </Routes>
        </>
    );
}