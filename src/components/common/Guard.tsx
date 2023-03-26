import { Navigate, Outlet } from "react-router-dom";

const Guard = () => {
    const auth = localStorage.getItem("jwt");

    return auth ? <Outlet /> : <Navigate to="/login" replace />
}

export default Guard;